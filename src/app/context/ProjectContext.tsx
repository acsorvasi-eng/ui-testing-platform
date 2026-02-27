import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from "react";
import { saveProjects, loadProjects } from "./persistence";
import type {
  DeviceType, TestStatus, ComparisonIssue, ComparisonReport,
  DeviceTest, Feature, Project, ToleranceSource, EffectiveTolerance,
} from "../types";

// Re-export all types for backward compatibility
export type { DeviceType, TestStatus, ComparisonIssue, ComparisonReport, DeviceTest, Feature, Project, ToleranceSource, EffectiveTolerance };

/* ================================================================== */
/* Tolerance Resolution                                                 */
/* ================================================================== */

export function getEffectiveTolerance(
  project: Project,
  feature?: Feature,
  deviceTest?: DeviceTest
): EffectiveTolerance {
  if (deviceTest?.toleranceOverride != null) {
    return { value: deviceTest.toleranceOverride, source: "device" };
  }
  if (feature?.toleranceOverride != null) {
    return { value: feature.toleranceOverride, source: "feature" };
  }
  return { value: project.globalTolerance, source: "project" };
}

/* ================================================================== */
/* Context interface                                                    */
/* ================================================================== */
interface ProjectContextValue {
  projects: Project[];

  // Project CRUD
  addProject: (title: string, devices: DeviceType[], globalTolerance: number) => Project;
  updateProject: (id: string, updates: Partial<Pick<Project, "title" | "globalTolerance" | "devices">>) => void;
  deleteProject: (id: string) => void;
  duplicateProject: (id: string) => void;
  getProject: (id: string) => Project | undefined;

  // Tolerance cascade
  applyGlobalToleranceToAll: (projectId: string, tolerance: number) => void;

  // Feature CRUD
  addFeature: (projectId: string, title: string, toleranceOverride?: number | null) => Feature | null;
  updateFeature: (projectId: string, featureId: string, updates: Partial<Pick<Feature, "title" | "toleranceOverride">>) => void;
  deleteFeature: (projectId: string, featureId: string) => void;

  // DeviceTest CRUD
  addDeviceTest: (projectId: string, featureId: string, deviceType: DeviceType, name?: string) => DeviceTest | null;
  updateDeviceTest: (projectId: string, featureId: string, testId: string, updates: Partial<DeviceTest>) => void;
  deleteDeviceTest: (projectId: string, featureId: string, testId: string) => void;
}

const ProjectContext = createContext<ProjectContextValue | null>(null);

export function useProjects() {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("useProjects must be used within ProjectProvider");
  return ctx;
}

/* ================================================================== */
/* Provider                                                             */
/* ================================================================== */
function uid() {
  return crypto.randomUUID();
}

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);

  /* ---- helpers ---- */
  const mapProject = (id: string, fn: (p: Project) => Project) =>
    setProjects((prev) => prev.map((p) => (p.id === id ? fn(p) : p)));

  const now = () => new Date().toISOString();

  /* ---- Project ---- */
  const addProject = useCallback((title: string, devices: DeviceType[], globalTolerance: number) => {
    const ts = now();
    const project: Project = {
      id: uid(), title, devices, globalTolerance,
      features: [], createdAt: ts, updatedAt: ts,
    };
    setProjects((prev) => [...prev, project]);
    return project;
  }, []);

  const updateProject = useCallback((id: string, updates: Partial<Pick<Project, "title" | "globalTolerance" | "devices">>) => {
    mapProject(id, (p) => ({ ...p, ...updates, updatedAt: now() }));
  }, []);

  const deleteProject = useCallback((id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const duplicateProject = useCallback((id: string) => {
    setProjects((prev) => {
      const src = prev.find((p) => p.id === id);
      if (!src) return prev;
      const ts = now();
      const copy: Project = {
        ...src,
        id: uid(),
        title: `${src.title} (Copy)`,
        features: src.features.map((f) => ({
          ...f, id: uid(),
          deviceTests: f.deviceTests.map((dt) => ({ ...dt, id: uid() })),
        })),
        createdAt: ts, updatedAt: ts,
      };
      return [...prev, copy];
    });
  }, []);

  const getProject = useCallback(
    (id: string) => projects.find((p) => p.id === id),
    [projects]
  );

  const applyGlobalToleranceToAll = useCallback((projectId: string, tolerance: number) => {
    mapProject(projectId, (p) => ({
      ...p,
      globalTolerance: tolerance,
      updatedAt: now(),
      features: p.features.map((f) => ({
        ...f,
        toleranceOverride: null,
        deviceTests: f.deviceTests.map((dt) => ({ ...dt, toleranceOverride: null })),
      })),
    }));
  }, []);

  /* ---- Feature ---- */
  const addFeature = useCallback((projectId: string, title: string, toleranceOverride: number | null = null) => {
    const ts = now();
    const feature: Feature = {
      id: uid(), title, toleranceOverride,
      deviceTests: [], createdAt: ts, updatedAt: ts,
    };
    mapProject(projectId, (p) => ({
      ...p, features: [...p.features, feature], updatedAt: ts,
    }));
    return feature;
  }, []);

  const updateFeature = useCallback((projectId: string, featureId: string, updates: Partial<Pick<Feature, "title" | "toleranceOverride">>) => {
    const ts = now();
    mapProject(projectId, (p) => ({
      ...p, updatedAt: ts,
      features: p.features.map((f) =>
        f.id === featureId ? { ...f, ...updates, updatedAt: ts } : f
      ),
    }));
  }, []);

  const deleteFeature = useCallback((projectId: string, featureId: string) => {
    mapProject(projectId, (p) => ({
      ...p, features: p.features.filter((f) => f.id !== featureId), updatedAt: now(),
    }));
  }, []);

  /* ---- DeviceTest ---- */
  const addDeviceTest = useCallback((projectId: string, featureId: string, deviceType: DeviceType, name?: string) => {
    const ts = now();
    const test: DeviceTest = {
      id: uid(), name: name ?? "New Test", deviceType,
      masterScreenUrl: null, screenshotUrls: [],
      toleranceOverride: null,
      ignoreColor: false, ignoreFontRendering: false, structuralOnly: false,
      ignoreBackgroundImg: false,
      status: "not-tested", reports: [],
      createdAt: ts, updatedAt: ts,
    };
    mapProject(projectId, (p) => ({
      ...p, updatedAt: ts,
      features: p.features.map((f) =>
        f.id === featureId
          ? { ...f, deviceTests: [...f.deviceTests, test], updatedAt: ts }
          : f
      ),
    }));
    return test;
  }, []);

  const updateDeviceTest = useCallback((projectId: string, featureId: string, testId: string, updates: Partial<DeviceTest>) => {
    const ts = now();
    mapProject(projectId, (p) => ({
      ...p, updatedAt: ts,
      features: p.features.map((f) =>
        f.id === featureId
          ? {
              ...f, updatedAt: ts,
              deviceTests: f.deviceTests.map((dt) =>
                dt.id === testId ? { ...dt, ...updates, updatedAt: ts } : dt
              ),
            }
          : f
      ),
    }));
  }, []);

  const deleteDeviceTest = useCallback((projectId: string, featureId: string, testId: string) => {
    mapProject(projectId, (p) => ({
      ...p, updatedAt: now(),
      features: p.features.map((f) =>
        f.id === featureId
          ? { ...f, deviceTests: f.deviceTests.filter((dt) => dt.id !== testId) }
          : f
      ),
    }));
  }, []);

  /* ---- Persistence (IndexedDB) ---- */
  const [isHydrated, setIsHydrated] = useState(false);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load from IndexedDB on mount — BEFORE any save can happen
  useEffect(() => {
    let cancelled = false;
    loadProjects().then((stored) => {
      if (cancelled) return;
      if (stored.length > 0) {
        setProjects(stored);
      }
      setIsHydrated(true);
    }).catch(() => {
      if (!cancelled) setIsHydrated(true);
    });
    return () => { cancelled = true; };
  }, []);

  // Debounced save — only after hydration, so we never overwrite with []
  useEffect(() => {
    if (!isHydrated) return;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      saveProjects(projects);
    }, 300);
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [projects, isHydrated]);

  // Show a brief loading state while hydrating from IndexedDB
  if (!isHydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-[#2962FF] border-t-transparent rounded-full animate-spin" />
          <p className="text-[13px] text-[#79747E]" style={{ fontWeight: 500 }}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ProjectContext.Provider
      value={{
        projects, addProject, updateProject, deleteProject, duplicateProject, getProject,
        applyGlobalToleranceToAll,
        addFeature, updateFeature, deleteFeature,
        addDeviceTest, updateDeviceTest, deleteDeviceTest,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}