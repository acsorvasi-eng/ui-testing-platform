import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft, Plus, Layers, Trash2, Monitor, Smartphone, Tablet, Tv, Watch,
  CheckCircle2, AlertTriangle, Clock, SlidersHorizontal, Boxes,
} from "lucide-react";
import { useProjects, getEffectiveTolerance, type DeviceType, type Feature } from "../context/ProjectContext";
import { ToleranceEditor, ToleranceBadge, ToleranceApplyModal } from "./ToleranceEditor";
import { InlineEdit } from "./InlineEdit";

const deviceLabels: Record<DeviceType, string> = {
  phone: "Phone", tablet: "Tablet", desktop: "Desktop", tv: "TV / Auto", watch: "Watch",
};

function featureStatusInfo(feature: Feature) {
  const tests = feature.deviceTests;
  if (tests.length === 0) return { label: "No Tests", color: "#9E9E9E", icon: <Clock className="w-3.5 h-3.5" /> };
  const hasIssues = tests.some((t) => t.status === "issues");
  const allPass = tests.every((t) => t.status === "pass");
  if (allPass) return { label: "Pass", color: "#2E7D32", icon: <CheckCircle2 className="w-3.5 h-3.5" /> };
  if (hasIssues) return { label: "Issues", color: "#D32F2F", icon: <AlertTriangle className="w-3.5 h-3.5" /> };
  return { label: "Pending", color: "#ED6C02", icon: <Clock className="w-3.5 h-3.5" /> };
}

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { getProject, addFeature, updateFeature, deleteFeature, updateProject, applyGlobalToleranceToAll } = useProjects();
  const project = getProject(projectId ?? "");

  const [showAddFeature, setShowAddFeature] = useState(false);
  const [newFeatureTitle, setNewFeatureTitle] = useState("");
  const [newFeatureTolOverride, setNewFeatureTolOverride] = useState<number | null>(null);
  const [deletingFeatureId, setDeletingFeatureId] = useState<string | null>(null);
  const [editingToleranceFeatureId, setEditingToleranceFeatureId] = useState<string | null>(null);
  const [showProjectTolerance, setShowProjectTolerance] = useState(false);
  const [pendingTolerance, setPendingTolerance] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[18px] text-[#49454F] mb-4" style={{ fontWeight: 500 }}>Project not found</p>
          <button onClick={() => navigate("/dashboard")} className="text-[14px] text-[#2962FF] cursor-pointer" style={{ fontWeight: 600 }}>Go to Dashboard</button>
        </div>
      </div>
    );
  }

  const handleCreateFeature = () => {
    if (!newFeatureTitle.trim()) return;
    addFeature(project.id, newFeatureTitle.trim(), newFeatureTolOverride);
    setNewFeatureTitle("");
    setNewFeatureTolOverride(null);
    setShowAddFeature(false);
  };

  const handleProjectToleranceChange = (value: number) => {
    const hasOverrides = project.features.some(
      (f) => f.toleranceOverride != null || f.deviceTests.some((dt) => dt.toleranceOverride != null)
    );
    if (hasOverrides) {
      setPendingTolerance(value);
    } else {
      updateProject(project.id, { globalTolerance: value });
      setShowProjectTolerance(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#E0E0E0]/60" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/dashboard")} className="p-2 rounded-[8px] text-[#79747E] hover:text-[#49454F] hover:bg-[#F5F5F5] transition-all cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2962FF, #448AFF)" }}>
                <Layers className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <InlineEdit
                  value={project.title}
                  onSave={(newTitle) => updateProject(project.id, { title: newTitle })}
                  className="text-[16px] text-[#1C1B1F]"
                  style={{ fontWeight: 700 }}
                  size="lg"
                  placeholder="Project name..."
                />
                <p className="text-[11px] text-[#9E9E9E]" style={{ fontWeight: 400 }}>
                  {project.features.length} feature{project.features.length !== 1 ? "s" : ""} &middot; {project.devices.map((d) => deviceLabels[d]).join(", ")}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tolerance badge */}
            <ToleranceBadge
              value={project.globalTolerance}
              source="project"
              onClick={() => setShowProjectTolerance(true)}
            />
            <button
              onClick={() => setShowAddFeature(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[#2962FF] text-white text-[13px] hover:shadow-lg hover:shadow-[#2962FF]/20 transition-all cursor-pointer"
              style={{ fontWeight: 600 }}
            >
              <Plus className="w-4 h-4" />
              Add Feature
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        {project.features.length === 0 && !showAddFeature ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-14 h-14 rounded-full bg-[#E8EAF6] flex items-center justify-center mb-4">
              <Boxes className="w-7 h-7 text-[#2962FF]/60" />
            </div>
            <p className="text-[15px] text-[#49454F] mb-1" style={{ fontWeight: 500 }}>No features yet</p>
            <p className="text-[13px] text-[#9E9E9E] mb-5" style={{ fontWeight: 400 }}>Add a feature to organize your visual tests</p>
            <button onClick={() => setShowAddFeature(true)} className="flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-[#2962FF] text-white text-[14px] hover:shadow-lg hover:shadow-[#2962FF]/20 transition-all cursor-pointer" style={{ fontWeight: 600 }}>
              <Plus className="w-4 h-4" />
              Add Feature
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.features.map((feature, idx) => {
              const status = featureStatusInfo(feature);
              const effectiveTol = getEffectiveTolerance(project, feature);

              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="group relative bg-white rounded-[16px] border border-[#E0E0E0]/60 overflow-hidden hover:shadow-md hover:border-[#BDBDBD] transition-all"
                >
                  <div className="px-5 pt-5 pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0 mr-2">
                        <InlineEdit
                          value={feature.title}
                          onSave={(newTitle) => updateFeature(project.id, feature.id, { title: newTitle })}
                          className="text-[15px] text-[#1C1B1F]"
                          style={{ fontWeight: 600 }}
                          size="md"
                          placeholder="Feature name..."
                        />
                      </div>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => setEditingToleranceFeatureId(feature.id)}
                          className="p-1 rounded-[6px] text-[#9E9E9E] hover:text-[#2962FF] hover:bg-[#E8EAF6] transition-all cursor-pointer"
                          title="Edit tolerance override"
                        >
                          <SlidersHorizontal className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => setDeletingFeatureId(feature.id)}
                          className="p-1 rounded-[6px] text-[#BDBDBD] hover:text-[#D32F2F] hover:bg-red-50 transition-all cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Tolerance + status */}
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="flex items-center gap-1 px-2 py-0.5 rounded-[6px] text-[11px]"
                        style={{
                          fontWeight: 600,
                          color: effectiveTol.source === "project" ? "#2962FF" : "#7C4DFF",
                          backgroundColor: effectiveTol.source === "project" ? "#E8EAF6" : "#EDE7F6",
                        }}
                      >
                        {effectiveTol.value}px
                        {effectiveTol.source === "feature" && " (override)"}
                      </span>
                      <span className="flex items-center gap-1 text-[11px]" style={{ fontWeight: 500, color: status.color }}>
                        {status.icon}{status.label}
                      </span>
                    </div>

                    {/* Test count */}
                    <p className="text-[11px] text-[#9E9E9E]" style={{ fontWeight: 400 }}>
                      {feature.deviceTests.length} device test{feature.deviceTests.length !== 1 ? "s" : ""}
                    </p>
                  </div>

                  <div className="px-5 py-3 border-t border-[#F5F5F5] flex items-center justify-between">
                    <span className="text-[10px] text-[#BDBDBD]" style={{ fontWeight: 400 }}>
                      {new Date(feature.updatedAt).toLocaleDateString()}
                    </span>
                    <button onClick={() => navigate(`/project/${project.id}/feature/${feature.id}`)} className="text-[12px] text-[#2962FF] hover:text-[#1E88E5] transition-colors cursor-pointer" style={{ fontWeight: 600 }}>
                      Open &rarr;
                    </button>
                  </div>

                  {/* Delete overlay */}
                  {deletingFeatureId === feature.id && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[16px] flex flex-col items-center justify-center gap-3 p-4 z-10">
                      <p className="text-[13px] text-[#1C1B1F] text-center" style={{ fontWeight: 500 }}>Delete &ldquo;{feature.title}&rdquo;?</p>
                      <div className="flex gap-2">
                        <button onClick={() => setDeletingFeatureId(null)} className="px-4 py-1.5 rounded-[8px] text-[12px] text-[#79747E] hover:bg-[#F5F5F5] transition-colors cursor-pointer" style={{ fontWeight: 500 }}>Cancel</button>
                        <button onClick={() => { deleteFeature(project.id, feature.id); setDeletingFeatureId(null); }} className="px-4 py-1.5 rounded-[8px] text-[12px] bg-[#D32F2F] text-white hover:bg-[#B71C1C] transition-colors cursor-pointer" style={{ fontWeight: 600 }}>Delete</button>
                      </div>
                    </motion.div>
                  )}

                  {/* Tolerance edit overlay */}
                  {editingToleranceFeatureId === feature.id && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-white/98 backdrop-blur-sm rounded-[16px] flex flex-col justify-center p-5 z-10">
                      <ToleranceEditor
                        value={feature.toleranceOverride ?? project.globalTolerance}
                        onChange={(v) => updateFeature(project.id, feature.id, { toleranceOverride: v })}
                        source={feature.toleranceOverride != null ? "feature" : "project"}
                        showSource
                        isOverride={feature.toleranceOverride != null}
                        onClearOverride={() => updateFeature(project.id, feature.id, { toleranceOverride: null })}
                      />
                      <div className="flex justify-end mt-3">
                        <button onClick={() => setEditingToleranceFeatureId(null)} className="px-3 py-1.5 rounded-[8px] text-[12px] text-[#79747E] hover:bg-[#F5F5F5] transition-colors cursor-pointer" style={{ fontWeight: 500 }}>Done</button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* Add feature card */}
            <button
              onClick={() => setShowAddFeature(true)}
              className="flex flex-col items-center justify-center gap-2 bg-white rounded-[16px] border-2 border-dashed border-[#E0E0E0] hover:border-[#2962FF]/40 hover:bg-[#2962FF]/[0.02] transition-all group cursor-pointer"
              style={{ minHeight: "180px" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#F5F5F5] group-hover:bg-[#E8EAF6] flex items-center justify-center transition-colors">
                <Plus className="w-5 h-5 text-[#BDBDBD] group-hover:text-[#2962FF] transition-colors" />
              </div>
              <span className="text-[13px] text-[#BDBDBD] group-hover:text-[#2962FF] transition-colors" style={{ fontWeight: 500 }}>Add Feature</span>
            </button>
          </div>
        )}
      </div>

      {/* Add feature modal */}
      {showAddFeature && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[20px] w-full max-w-[460px] overflow-hidden"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.15)" }}
          >
            <div className="p-6">
              <h3 className="text-[18px] text-[#1C1B1F] mb-1" style={{ fontWeight: 600 }}>Add Feature</h3>
              <p className="text-[13px] text-[#79747E] mb-6" style={{ fontWeight: 400 }}>A feature groups device tests for a specific screen or component</p>

              <div className="mb-4">
                <label className="text-[13px] text-[#49454F] mb-2 block" style={{ fontWeight: 500 }}>Feature Name</label>
                <input
                  type="text"
                  value={newFeatureTitle}
                  onChange={(e) => setNewFeatureTitle(e.target.value)}
                  placeholder="e.g. Login Screen, Navigation Bar..."
                  autoFocus
                  className="w-full px-4 py-3 rounded-[12px] bg-[#F5F5F5] border border-transparent text-[14px] text-[#1C1B1F] placeholder:text-[#9E9E9E] focus:outline-none focus:border-[#2962FF] focus:bg-white focus:ring-2 focus:ring-[#2962FF]/10 transition-all"
                  style={{ fontWeight: 400 }}
                  onKeyDown={(e) => { if (e.key === "Enter" && newFeatureTitle.trim()) handleCreateFeature(); }}
                />
              </div>

              {/* Optional tolerance override */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[13px] text-[#49454F]" style={{ fontWeight: 500 }}>Tolerance Override</label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <span className="text-[11px] text-[#9E9E9E]" style={{ fontWeight: 400 }}>
                      {newFeatureTolOverride != null ? "Custom" : `Inherit (${project.globalTolerance}px)`}
                    </span>
                    <button
                      onClick={() => setNewFeatureTolOverride(newFeatureTolOverride != null ? null : project.globalTolerance)}
                      className={`w-9 h-[20px] rounded-full transition-colors relative cursor-pointer ${newFeatureTolOverride != null ? "bg-[#7C4DFF]" : "bg-[#CAC4D0]"}`}
                    >
                      <div className={`absolute top-[2px] w-[16px] h-[16px] rounded-full bg-white shadow-sm transition-transform ${newFeatureTolOverride != null ? "translate-x-[18px]" : "translate-x-[2px]"}`} />
                    </button>
                  </label>
                </div>
                {newFeatureTolOverride != null && (
                  <div className="p-3 rounded-[10px] bg-[#FAFAFA] border border-[#F0F0F0]">
                    <ToleranceEditor value={newFeatureTolOverride} onChange={setNewFeatureTolOverride} compact />
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <button onClick={() => { setShowAddFeature(false); setNewFeatureTitle(""); setNewFeatureTolOverride(null); }} className="flex-1 py-3 rounded-[12px] bg-[#F5F5F5] text-[#49454F] text-[14px] hover:bg-[#EEEEEE] transition-all cursor-pointer" style={{ fontWeight: 500 }}>Cancel</button>
                <button disabled={!newFeatureTitle.trim()} onClick={handleCreateFeature} className={`flex-1 py-3 rounded-[12px] text-[14px] transition-all cursor-pointer ${newFeatureTitle.trim() ? "bg-[#2962FF] text-white shadow-md shadow-[#2962FF]/20" : "bg-[#F0F0F0] text-[#BDBDBD] cursor-not-allowed"}`} style={{ fontWeight: 600 }}>Create Feature</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Project tolerance editor modal */}
      {showProjectTolerance && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[20px] w-full max-w-[420px] p-6"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.15)" }}
          >
            <h3 className="text-[18px] text-[#1C1B1F] mb-1" style={{ fontWeight: 600 }}>Project Tolerance</h3>
            <p className="text-[13px] text-[#79747E] mb-5" style={{ fontWeight: 400 }}>Default tolerance for all features and tests in &ldquo;{project.title}&rdquo;</p>
            <div className="p-4 rounded-[14px] bg-[#FAFAFA] border border-[#F0F0F0] mb-5">
              <ToleranceEditor value={project.globalTolerance} onChange={(v) => handleProjectToleranceChange(v)} source="project" showSource />
            </div>
            <button onClick={() => setShowProjectTolerance(false)} className="w-full py-3 rounded-[12px] bg-[#F5F5F5] text-[#49454F] text-[14px] hover:bg-[#EEEEEE] transition-all cursor-pointer" style={{ fontWeight: 500 }}>Done</button>
          </motion.div>
        </div>
      )}

      {/* Tolerance apply modal */}
      <ToleranceApplyModal
        isOpen={pendingTolerance != null}
        newValue={pendingTolerance ?? 0}
        onApplyAll={() => {
          if (pendingTolerance != null) {
            applyGlobalToleranceToAll(project.id, pendingTolerance);
            setShowProjectTolerance(false);
          }
          setPendingTolerance(null);
        }}
        onKeepExisting={() => {
          if (pendingTolerance != null) {
            updateProject(project.id, { globalTolerance: pendingTolerance });
            setShowProjectTolerance(false);
          }
          setPendingTolerance(null);
        }}
        onCancel={() => setPendingTolerance(null)}
      />
    </div>
  );
}