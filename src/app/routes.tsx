import { createBrowserRouter, Outlet, useParams, useNavigate } from "react-router";
import { ProjectProvider, useProjects, getEffectiveTolerance } from "./context/ProjectContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SplashScreen } from "./components/SplashScreen";
import { ProjectCreation } from "./components/ProjectCreation";
import { Dashboard } from "./components/Dashboard";
import { ProjectDetail } from "./components/ProjectDetail";
import { FeatureDetail } from "./components/FeatureDetail";
import { TestingScreen } from "./components/TestingScreen";

function RootLayout() {
  return (
    <ProjectProvider>
      <Outlet />
    </ProjectProvider>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1
          className="text-[24px] text-[#1C1B1F] mb-2"
          style={{ fontWeight: 600 }}
        >
          Page Not Found
        </h1>
        <a
          href="/"
          className="text-[14px] text-[#2962FF]"
          style={{ fontWeight: 500 }}
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

/** Route wrapper for FeatureDetail — resolves URL params to data */
function FeatureDetailRoute() {
  const { projectId, featureId } = useParams<{ projectId: string; featureId: string }>();
  const navigate = useNavigate();
  const { getProject } = useProjects();

  const project = getProject(projectId ?? "");
  const feature = project?.features.find((f) => f.id === featureId);

  if (!project || !feature) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[18px] text-[#49454F] mb-4" style={{ fontWeight: 500 }}>
            {!project ? "Project not found" : "Feature not found"}
          </p>
          <button
            onClick={() => navigate(project ? `/project/${project.id}` : "/dashboard")}
            className="text-[14px] text-[#2962FF] cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            {project ? "Back to Project" : "Go to Dashboard"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <FeatureDetail
      project={project}
      feature={feature}
      onBack={() => navigate(`/project/${project.id}`)}
    />
  );
}

/** Route wrapper for TestingScreen — resolves URL params to data */
function TestingScreenRoute() {
  const { projectId, featureId, testId } = useParams<{
    projectId: string; featureId: string; testId: string;
  }>();
  const navigate = useNavigate();
  const { getProject, updateDeviceTest } = useProjects();

  const project = getProject(projectId ?? "");
  const feature = project?.features.find((f) => f.id === featureId);
  const deviceTest = feature?.deviceTests.find((dt) => dt.id === testId);

  if (!project || !feature || !deviceTest) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[18px] text-[#49454F] mb-4" style={{ fontWeight: 500 }}>
            {!project ? "Project not found" : !feature ? "Feature not found" : "Test not found"}
          </p>
          <button
            onClick={() => {
              if (project && feature) navigate(`/project/${project.id}/feature/${feature.id}`);
              else if (project) navigate(`/project/${project.id}`);
              else navigate("/dashboard");
            }}
            className="text-[14px] text-[#2962FF] cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const effectiveTolerance = getEffectiveTolerance(project, feature, deviceTest);

  return (
    <ErrorBoundary fallbackTitle="Testing Screen Error">
      <TestingScreen
        project={project}
        feature={feature}
        deviceTest={deviceTest}
        effectiveTolerance={effectiveTolerance}
        onBack={() => navigate(`/project/${project.id}/feature/${feature.id}`)}
        onUpdateTest={(updates) => updateDeviceTest(project.id, feature.id, deviceTest.id, updates)}
      />
    </ErrorBoundary>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: SplashScreen,
      },
      {
        path: "new-project",
        Component: ProjectCreation,
      },
      {
        path: "dashboard",
        Component: Dashboard,
      },
      {
        path: "project/:projectId",
        Component: ProjectDetail,
      },
      {
        path: "project/:projectId/feature/:featureId",
        Component: FeatureDetailRoute,
      },
      {
        path: "project/:projectId/feature/:featureId/test/:testId",
        Component: TestingScreenRoute,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);
