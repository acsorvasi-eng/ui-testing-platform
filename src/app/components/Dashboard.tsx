import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  Plus, Layers, MoreVertical, Trash2, Copy, FolderOpen,
  Monitor, Smartphone, Tablet, Tv, Watch,
  CheckCircle2, AlertTriangle, Clock, SlidersHorizontal,
} from "lucide-react";
import { useProjects, type DeviceType, type Project } from "../context/ProjectContext";
import { ToleranceEditor, ToleranceApplyModal } from "./ToleranceEditor";

const deviceIcons: Record<DeviceType, React.ReactNode> = {
  phone: <Smartphone className="w-3.5 h-3.5" />,
  tablet: <Tablet className="w-3.5 h-3.5" />,
  desktop: <Monitor className="w-3.5 h-3.5" />,
  tv: <Tv className="w-3.5 h-3.5" />,
  watch: <Watch className="w-3.5 h-3.5" />,
};

function getProjectStatus(project: Project) {
  const allTests = project.features.flatMap((f) => f.deviceTests);
  if (allTests.length === 0)
    return { label: "No Tests", color: "#9E9E9E", icon: <Clock className="w-3.5 h-3.5" /> };
  const hasIssues = allTests.some((t) => t.status === "issues");
  const allPass = allTests.every((t) => t.status === "pass");
  if (allPass) return { label: "Pass", color: "#2E7D32", icon: <CheckCircle2 className="w-3.5 h-3.5" /> };
  if (hasIssues) return { label: "Issues Found", color: "#D32F2F", icon: <AlertTriangle className="w-3.5 h-3.5" /> };
  return { label: "Pending", color: "#ED6C02", icon: <Clock className="w-3.5 h-3.5" /> };
}

export function Dashboard() {
  const navigate = useNavigate();
  const { projects, deleteProject, duplicateProject, updateProject, applyGlobalToleranceToAll } = useProjects();
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [editToleranceId, setEditToleranceId] = useState<string | null>(null);
  const [pendingTolerance, setPendingTolerance] = useState<{ projectId: string; value: number } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(null);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleToleranceChange = (projectId: string, value: number) => {
    const proj = projects.find((p) => p.id === projectId);
    if (!proj) return;
    const hasOverrides = proj.features.some(
      (f) => f.toleranceOverride != null || f.deviceTests.some((dt) => dt.toleranceOverride != null)
    );
    if (hasOverrides) {
      setPendingTolerance({ projectId, value });
    } else {
      updateProject(projectId, { globalTolerance: value });
      setEditToleranceId(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#E0E0E0]/60" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[10px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2962FF, #448AFF)" }}>
              <Layers className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <h1 className="text-[18px] text-[#1C1B1F]" style={{ fontWeight: 700 }}>UI Testing</h1>
          </div>
          <button
            onClick={() => navigate("/new-project")}
            className="flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[#2962FF] text-white text-[13px] hover:shadow-lg hover:shadow-[#2962FF]/20 transition-all cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            <Plus className="w-4 h-4" />
            New Project
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-[22px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>Projects</h2>
            <p className="text-[14px] text-[#79747E]" style={{ fontWeight: 400 }}>
              {projects.length} project{projects.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {projects.length === 0 ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 rounded-full bg-[#E8EAF6] flex items-center justify-center mb-4">
              <FolderOpen className="w-8 h-8 text-[#2962FF]/60" />
            </div>
            <p className="text-[16px] text-[#49454F] mb-1" style={{ fontWeight: 500 }}>No projects yet</p>
            <p className="text-[13px] text-[#9E9E9E] mb-6" style={{ fontWeight: 400 }}>Create your first project to start testing</p>
            <button onClick={() => navigate("/new-project")} className="flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-[#2962FF] text-white text-[14px] hover:shadow-lg hover:shadow-[#2962FF]/20 transition-all cursor-pointer" style={{ fontWeight: 600 }}>
              <Plus className="w-4 h-4" />
              Create Project
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, idx) => {
              const status = getProjectStatus(project);
              const featureCount = project.features.length;
              const testCount = project.features.reduce((s, f) => s + f.deviceTests.length, 0);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative bg-white rounded-[16px] border border-[#E0E0E0]/60 overflow-hidden hover:shadow-md hover:border-[#BDBDBD] transition-all"
                >
                  <div className="px-5 pt-5 pb-3">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0 cursor-pointer" onClick={() => navigate(`/project/${project.id}`)}>
                        <h3 className="text-[16px] text-[#1C1B1F] truncate" style={{ fontWeight: 600 }}>
                          {project.title}
                        </h3>
                      </div>
                      <div className="relative" ref={menuOpen === project.id ? menuRef : undefined}>
                        <button
                          onClick={() => setMenuOpen(menuOpen === project.id ? null : project.id)}
                          className="p-1.5 rounded-[8px] text-[#9E9E9E] hover:text-[#616161] hover:bg-[#F5F5F5] transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                        {menuOpen === project.id && (
                          <div className="absolute right-0 top-8 w-[180px] bg-white rounded-[12px] border border-[#E0E0E0] py-1 z-50" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
                            <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-[#49454F] hover:bg-[#F5F5F5] transition-colors cursor-pointer" style={{ fontWeight: 500 }} onClick={() => { navigate(`/project/${project.id}`); setMenuOpen(null); }}>
                              <FolderOpen className="w-4 h-4" />Open
                            </button>
                            <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-[#49454F] hover:bg-[#F5F5F5] transition-colors cursor-pointer" style={{ fontWeight: 500 }} onClick={() => { setEditToleranceId(project.id); setMenuOpen(null); }}>
                              <SlidersHorizontal className="w-4 h-4" />Edit Tolerance
                            </button>
                            <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-[#49454F] hover:bg-[#F5F5F5] transition-colors cursor-pointer" style={{ fontWeight: 500 }} onClick={() => { duplicateProject(project.id); setMenuOpen(null); }}>
                              <Copy className="w-4 h-4" />Duplicate
                            </button>
                            <div className="h-px bg-[#E0E0E0] my-1" />
                            <button className="w-full flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-[#D32F2F] hover:bg-red-50 transition-colors cursor-pointer" style={{ fontWeight: 500 }} onClick={() => { setDeletingId(project.id); setMenuOpen(null); }}>
                              <Trash2 className="w-4 h-4" />Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Device badges + tolerance badge */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.devices.map((d) => (
                        <span key={d} className="flex items-center gap-1 px-2 py-0.5 rounded-[6px] bg-[#F5F5F5] text-[#616161] text-[11px]" style={{ fontWeight: 500 }}>
                          {deviceIcons[d]}
                          {d.charAt(0).toUpperCase() + d.slice(1)}
                        </span>
                      ))}
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-[6px] bg-[#E8EAF6] text-[#2962FF] text-[11px]" style={{ fontWeight: 600 }}>
                        {project.globalTolerance}px tol.
                      </span>
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-1.5" style={{ color: status.color }}>
                      {status.icon}
                      <span className="text-[12px]" style={{ fontWeight: 500 }}>{status.label}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-3 border-t border-[#F5F5F5] flex items-center justify-between">
                    <span className="text-[11px] text-[#BDBDBD]" style={{ fontWeight: 400 }}>
                      {featureCount} feature{featureCount !== 1 ? "s" : ""} &middot; {testCount} test{testCount !== 1 ? "s" : ""} &middot; {new Date(project.updatedAt).toLocaleDateString()}
                    </span>
                    <button onClick={() => navigate(`/project/${project.id}`)} className="text-[12px] text-[#2962FF] hover:text-[#1E88E5] transition-colors cursor-pointer" style={{ fontWeight: 600 }}>
                      Open &rarr;
                    </button>
                  </div>

                  {/* Delete confirmation overlay */}
                  {deletingId === project.id && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[16px] flex flex-col items-center justify-center gap-3 p-6 z-10">
                      <p className="text-[14px] text-[#1C1B1F] text-center" style={{ fontWeight: 500 }}>Delete &ldquo;{project.title}&rdquo;?</p>
                      <div className="flex gap-2">
                        <button onClick={() => setDeletingId(null)} className="px-4 py-2 rounded-[10px] text-[13px] text-[#79747E] hover:bg-[#F5F5F5] transition-colors cursor-pointer" style={{ fontWeight: 500 }}>Cancel</button>
                        <button onClick={() => { deleteProject(project.id); setDeletingId(null); }} className="px-4 py-2 rounded-[10px] text-[13px] bg-[#D32F2F] text-white hover:bg-[#B71C1C] transition-colors cursor-pointer" style={{ fontWeight: 600 }}>Delete</button>
                      </div>
                    </div>
                  )}

                  {/* Tolerance edit overlay */}
                  {editToleranceId === project.id && (
                    <div className="absolute inset-0 bg-white/98 backdrop-blur-sm rounded-[16px] flex flex-col justify-center p-5 z-10">
                      <p className="text-[13px] text-[#1C1B1F] mb-3" style={{ fontWeight: 600 }}>Global Tolerance</p>
                      <ToleranceEditor value={project.globalTolerance} onChange={(v) => handleToleranceChange(project.id, v)} source="project" showSource />
                      <div className="flex justify-end mt-3">
                        <button onClick={() => setEditToleranceId(null)} className="px-3 py-1.5 rounded-[8px] text-[12px] text-[#79747E] hover:bg-[#F5F5F5] transition-colors cursor-pointer" style={{ fontWeight: 500 }}>Done</button>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Create new card */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: projects.length * 0.05 }}
              onClick={() => navigate("/new-project")}
              className="flex flex-col items-center justify-center gap-3 py-12 bg-white rounded-[16px] border-2 border-dashed border-[#E0E0E0] hover:border-[#2962FF]/40 hover:bg-[#2962FF]/[0.02] transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#F5F5F5] group-hover:bg-[#E8EAF6] flex items-center justify-center transition-colors">
                <Plus className="w-6 h-6 text-[#BDBDBD] group-hover:text-[#2962FF] transition-colors" />
              </div>
              <span className="text-[14px] text-[#BDBDBD] group-hover:text-[#2962FF] transition-colors" style={{ fontWeight: 500 }}>Create New Project</span>
            </motion.button>
          </div>
        )}
      </div>

      {/* Tolerance apply modal */}
      <ToleranceApplyModal
        isOpen={!!pendingTolerance}
        newValue={pendingTolerance?.value ?? 0}
        onApplyAll={() => {
          if (pendingTolerance) {
            applyGlobalToleranceToAll(pendingTolerance.projectId, pendingTolerance.value);
            setEditToleranceId(null);
          }
          setPendingTolerance(null);
        }}
        onKeepExisting={() => {
          if (pendingTolerance) {
            updateProject(pendingTolerance.projectId, { globalTolerance: pendingTolerance.value });
            setEditToleranceId(null);
          }
          setPendingTolerance(null);
        }}
        onCancel={() => setPendingTolerance(null)}
      />
    </div>
  );
}
