import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight, ArrowLeft, AlertCircle, Smartphone, Tablet,
  Monitor, Tv, Watch, Loader2, RefreshCw, CheckSquare, Square,
  Key, Eye, EyeOff,
} from "lucide-react";
import { useProjects, type DeviceType } from "../context/ProjectContext";
import { ToleranceEditor } from "./ToleranceEditor";
import {
  fetchProjectFiles, parseFigmaProjectUrl, saveFigmaPAT,
  hasFigmaPAT, type FigmaFile,
} from "../../services/FigmaService";

const DEVICES: { type: DeviceType; label: string; icon: React.ReactNode }[] = [
  { type: "phone", label: "Phone", icon: <Smartphone className="w-6 h-6" /> },
  { type: "tablet", label: "Tablet", icon: <Tablet className="w-6 h-6" /> },
  { type: "desktop", label: "Desktop", icon: <Monitor className="w-6 h-6" /> },
  { type: "tv", label: "TV / Automotive", icon: <Tv className="w-6 h-6" /> },
  { type: "watch", label: "Watch", icon: <Watch className="w-6 h-6" /> },
];

type Step = 1 | "figma" | 2 | 3;

export function ProjectCreation() {
  const navigate = useNavigate();
  const { projects, addProject, addFeature } = useProjects();

  const [step, setStep] = useState<Step>(1);
  const [title, setTitle] = useState("");
  const [figmaUrl, setFigmaUrl] = useState("");
  const [selectedDevices, setSelectedDevices] = useState<DeviceType[]>([]);
  const [globalTolerance, setGlobalTolerance] = useState(3);

  // Figma PAT
  const [patInput, setPatInput] = useState("");
  const [showPat, setShowPat] = useState(false);
  const [patSaved, setPatSaved] = useState(hasFigmaPAT());

  // Figma project files
  const [figmaFiles, setFigmaFiles] = useState<FigmaFile[]>([]);
  const [figmaLoading, setFigmaLoading] = useState(false);
  const [figmaError, setFigmaError] = useState<string | null>(null);
  const [selectedFileKeys, setSelectedFileKeys] = useState<Set<string>>(new Set());

  const trimmedTitle = title.trim();
  const isDuplicate = projects.some(
    (p) => p.title.toLowerCase() === trimmedTitle.toLowerCase()
  );
  const canStep1 = trimmedTitle.length > 0 && !isDuplicate;
  const canStep2 = selectedDevices.length > 0;
  const figmaParsed = parseFigmaProjectUrl(figmaUrl.trim());

  const toggleDevice = (type: DeviceType) => {
    setSelectedDevices((prev) =>
      prev.includes(type) ? prev.filter((d) => d !== type) : [...prev, type]
    );
  };

  const toggleFile = (key: string) => {
    setSelectedFileKeys((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedFileKeys.size === figmaFiles.length) {
      setSelectedFileKeys(new Set());
    } else {
      setSelectedFileKeys(new Set(figmaFiles.map((f) => f.key)));
    }
  };

  async function loadFigmaFiles() {
    if (!figmaParsed) return;
    setFigmaLoading(true);
    setFigmaError(null);
    try {
      const files = await fetchProjectFiles(figmaParsed.projectId);
      setFigmaFiles(files);
      // Pre-select all
      setSelectedFileKeys(new Set(files.map((f) => f.key)));
    } catch (e: any) {
      setFigmaError(e.message ?? "Failed to load Figma files");
    } finally {
      setFigmaLoading(false);
    }
  }

  // Auto-load when entering figma step
  useEffect(() => {
    if (step === "figma" && figmaParsed && patSaved) {
      loadFigmaFiles();
    }
  }, [step]);

  const handleSavePat = () => {
    if (!patInput.trim()) return;
    saveFigmaPAT(patInput.trim());
    setPatSaved(true);
    setPatInput("");
  };

  const handleCreate = () => {
    if (!canStep1 || !canStep2) return;
    const cleanedUrl = figmaUrl.trim() || undefined;
    const project = addProject(trimmedTitle, selectedDevices, globalTolerance, cleanedUrl);

    // Import selected Figma files as features
    if (figmaFiles.length > 0 && selectedFileKeys.size > 0) {
      figmaFiles
        .filter((f) => selectedFileKeys.has(f.key))
        .forEach((f) => {
          addFeature(project.id, f.name);
        });
    }

    navigate(`/project/${project.id}`);
  };

  const goBack = () => {
    if (step === 1) {
      navigate(projects.length > 0 ? "/dashboard" : "/");
    } else if (step === "figma") {
      setStep(1);
    } else if (step === 2) {
      setStep(figmaParsed ? "figma" : 1);
    } else if (step === 3) {
      setStep(2);
    }
  };

  const goNext = () => {
    if (step === 1) {
      if (figmaParsed) {
        setStep("figma");
      } else {
        setStep(2);
      }
    } else if (step === "figma") {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      handleCreate();
    }
  };

  const stepIndex = step === 1 ? 1 : step === "figma" ? 2 : step === 2 ? 3 : 4;
  const totalSteps = figmaParsed ? 4 : 3;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[520px]"
      >
        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all ${
                i < stepIndex ? "bg-[#2962FF] w-8" : "bg-[#E0E0E0] w-8"
              }`}
            />
          ))}
        </div>

        {/* Card */}
        <div
          className="bg-white rounded-[20px] p-8 border border-[#E0E0E0]/60"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
        >
          <AnimatePresence mode="wait">

            {/* === Step 1: Title + Figma URL === */}
            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-[24px] text-[#1C1B1F] mb-1" style={{ fontWeight: 600 }}>
                  New Project
                </h2>
                <p className="text-[14px] text-[#79747E] mb-8" style={{ fontWeight: 400 }}>
                  Give your project a name to get started
                </p>

                <div className="mb-6">
                  <label className="text-[13px] text-[#49454F] mb-2 block" style={{ fontWeight: 500 }}>
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add project title"
                    autoFocus
                    className="w-full px-4 py-3 rounded-[12px] bg-[#F5F5F5] border border-transparent text-[15px] text-[#1C1B1F] placeholder:text-[#9E9E9E] focus:outline-none focus:border-[#2962FF] focus:bg-white focus:ring-2 focus:ring-[#2962FF]/10 transition-all"
                    style={{ fontWeight: 400 }}
                    onKeyDown={(e) => { if (e.key === "Enter" && canStep1) goNext(); }}
                  />
                  {isDuplicate && (
                    <div className="flex items-center gap-1.5 mt-2 text-[#D32F2F]">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span className="text-[12px]" style={{ fontWeight: 500 }}>
                        A project with this name already exists
                      </span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="text-[13px] text-[#49454F] mb-2 block" style={{ fontWeight: 500 }}>
                    Figma Project Link{" "}
                    <span className="text-[11px] text-[#9E9E9E]">(optional)</span>
                  </label>
                  <input
                    type="url"
                    value={figmaUrl}
                    onChange={(e) => setFigmaUrl(e.target.value)}
                    placeholder="https://www.figma.com/files/team/.../project/..."
                    className="w-full px-4 py-3 rounded-[12px] bg-[#F5F5F5] border border-transparent text-[14px] text-[#1C1B1F] placeholder:text-[#9E9E9E] focus:outline-none focus:border-[#2962FF] focus:bg-white focus:ring-2 focus:ring-[#2962FF]/10 transition-all"
                    style={{ fontWeight: 400 }}
                  />
                  {figmaUrl.trim() && !figmaParsed && (
                    <p className="text-[11px] text-[#ED6C02] mt-1.5">
                      ⚠️ Nem ismert Figma project URL formátum
                    </p>
                  )}
                  {figmaParsed && (
                    <p className="text-[11px] text-[#2E7D32] mt-1.5">
                      ✓ Project ID: {figmaParsed.projectId}
                    </p>
                  )}
                </div>

                {/* PAT input – only if figma URL is set */}
                {figmaParsed && (
                  <div className="mb-6 p-4 rounded-[12px] bg-[#F3EDF7] border border-[#E8DEF8]">
                    <div className="flex items-center gap-2 mb-3">
                      <Key className="w-4 h-4 text-[#6750A4]" />
                      <span className="text-[13px] text-[#6750A4]" style={{ fontWeight: 600 }}>
                        Figma Personal Access Token
                      </span>
                      {patSaved && (
                        <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-[#E8F5E9] text-[#2E7D32]" style={{ fontWeight: 600 }}>
                          ✓ Saved
                        </span>
                      )}
                    </div>
                    {!patSaved ? (
                      <div className="flex gap-2">
                        <div className="flex-1 relative">
                          <input
                            type={showPat ? "text" : "password"}
                            value={patInput}
                            onChange={(e) => setPatInput(e.target.value)}
                            placeholder="figd_xxxxxxxxxxxxxxxxx"
                            className="w-full px-3 py-2 rounded-[10px] bg-white border border-[#E8DEF8] text-[13px] text-[#1C1B1F] placeholder:text-[#9E9E9E] focus:outline-none focus:border-[#6750A4] transition-all pr-9"
                          />
                          <button
                            onClick={() => setShowPat(!showPat)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#9E9E9E] hover:text-[#49454F]"
                          >
                            {showPat ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                        <button
                          onClick={handleSavePat}
                          disabled={!patInput.trim()}
                          className="px-4 py-2 rounded-[10px] bg-[#6750A4] text-white text-[13px] disabled:opacity-40 hover:bg-[#5B4397] transition-colors"
                          style={{ fontWeight: 600 }}
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <p className="text-[12px] text-[#49454F]">Token elmentve – készen áll a Figma importra</p>
                        <button
                          onClick={() => { setPatSaved(false); localStorage.removeItem("FIGMA_PAT"); }}
                          className="text-[11px] text-[#6750A4] hover:underline"
                        >
                          Csere
                        </button>
                      </div>
                    )}
                  </div>
                )}

                <StepNav
                  onBack={goBack}
                  onNext={goNext}
                  nextDisabled={!canStep1 || (!!figmaParsed && !patSaved)}
                  nextLabel={figmaParsed ? "Import Figma" : "Next"}
                />
              </motion.div>
            )}

            {/* === Step Figma: Feature picker === */}
            {step === "figma" && (
              <motion.div
                key="sfigma"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-[24px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>
                    Figma Features
                  </h2>
                  <button
                    onClick={loadFigmaFiles}
                    disabled={figmaLoading}
                    className="p-2 rounded-[10px] hover:bg-[#F5F5F5] transition-colors text-[#49454F] disabled:opacity-40"
                  >
                    <RefreshCw className={`w-4 h-4 ${figmaLoading ? "animate-spin" : ""}`} />
                  </button>
                </div>
                <p className="text-[14px] text-[#79747E] mb-6" style={{ fontWeight: 400 }}>
                  Válaszd ki melyik feature-öket importáld
                </p>

                {figmaLoading ? (
                  <div className="flex items-center justify-center py-12 gap-3 text-[#9E9E9E]">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="text-[13px]">Figma betöltése...</span>
                  </div>
                ) : figmaError ? (
                  <div className="py-6 px-4 rounded-[12px] bg-[#FFEBEE] border border-[#FFCDD2] mb-6">
                    <p className="text-[13px] text-[#D32F2F]" style={{ fontWeight: 500 }}>
                      ⚠️ {figmaError}
                    </p>
                    <p className="text-[11px] text-[#E57373] mt-1">
                      Ellenőrizd a tokent és a project URL-t
                    </p>
                  </div>
                ) : figmaFiles.length === 0 ? (
                  <div className="py-8 text-center text-[#9E9E9E] text-[13px]">
                    Nem találhatók fájlok ebben a projektben
                  </div>
                ) : (
                  <>
                    {/* Select all */}
                    <button
                      onClick={toggleAll}
                      className="flex items-center gap-2 mb-3 text-[12px] text-[#2962FF] hover:text-[#1A47CC]"
                      style={{ fontWeight: 500 }}
                    >
                      {selectedFileKeys.size === figmaFiles.length
                        ? <CheckSquare className="w-4 h-4" />
                        : <Square className="w-4 h-4" />
                      }
                      {selectedFileKeys.size === figmaFiles.length ? "Deselect all" : "Select all"}
                      <span className="text-[#9E9E9E]">({figmaFiles.length} feature)</span>
                    </button>

                    {/* File list */}
                    <div className="flex flex-col gap-2 max-h-[320px] overflow-y-auto mb-6 pr-1">
                      {figmaFiles.map((file) => {
                        const selected = selectedFileKeys.has(file.key);
                        return (
                          <button
                            key={file.key}
                            onClick={() => toggleFile(file.key)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-[12px] border-2 transition-all text-left cursor-pointer ${
                              selected
                                ? "border-[#2962FF] bg-[#2962FF]/[0.04]"
                                : "border-[#E0E0E0] hover:border-[#BDBDBD] hover:bg-[#FAFAFA]"
                            }`}
                          >
                            {file.thumbnail_url ? (
                              <img
                                src={file.thumbnail_url}
                                alt={file.name}
                                className="w-10 h-10 rounded-[6px] object-cover border border-[#E0E0E0] shrink-0"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-[6px] bg-[#F5F5F5] border border-[#E0E0E0] shrink-0 flex items-center justify-center text-[#BDBDBD] text-[10px]">
                                F
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] text-[#1C1B1F] truncate" style={{ fontWeight: selected ? 600 : 400 }}>
                                {file.name}
                              </p>
                              <p className="text-[10px] text-[#9E9E9E]">
                                {new Date(file.last_modified).toLocaleDateString()}
                              </p>
                            </div>
                            <div
                              className={`w-5 h-5 rounded-[6px] border-2 flex items-center justify-center transition-all shrink-0 ${
                                selected ? "border-[#2962FF] bg-[#2962FF]" : "border-[#BDBDBD]"
                              }`}
                            >
                              {selected && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 6L9 17l-5-5" />
                                </svg>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}

                <StepNav
                  onBack={goBack}
                  onNext={goNext}
                  nextDisabled={figmaLoading}
                  nextLabel={selectedFileKeys.size > 0 ? `Import ${selectedFileKeys.size} feature` : "Skip"}
                />
              </motion.div>
            )}

            {/* === Step 2: Devices === */}
            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <h2 className="text-[24px] text-[#1C1B1F] mb-1" style={{ fontWeight: 600 }}>
                  Select Devices
                </h2>
                <p className="text-[14px] text-[#79747E] mb-6" style={{ fontWeight: 400 }}>
                  Choose which device types to test for &ldquo;{trimmedTitle}&rdquo;
                </p>

                <div className="flex flex-col gap-2 mb-8">
                  {DEVICES.map((device) => {
                    const selected = selectedDevices.includes(device.type);
                    return (
                      <button
                        key={device.type}
                        onClick={() => toggleDevice(device.type)}
                        className={`flex items-center gap-4 px-4 py-3.5 rounded-[14px] border-2 transition-all text-left cursor-pointer ${
                          selected
                            ? "border-[#2962FF] bg-[#2962FF]/[0.04]"
                            : "border-[#E0E0E0] bg-white hover:border-[#BDBDBD] hover:bg-[#FAFAFA]"
                        }`}
                      >
                        <div className={`transition-colors ${selected ? "text-[#2962FF]" : "text-[#9E9E9E]"}`}>
                          {device.icon}
                        </div>
                        <span
                          className={`text-[15px] flex-1 ${selected ? "text-[#1C1B1F]" : "text-[#79747E]"}`}
                          style={{ fontWeight: selected ? 600 : 400 }}
                        >
                          {device.label}
                        </span>
                        <div
                          className={`w-5 h-5 rounded-[6px] border-2 flex items-center justify-center transition-all ${
                            selected ? "border-[#2962FF] bg-[#2962FF]" : "border-[#BDBDBD]"
                          }`}
                        >
                          {selected && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <StepNav
                  onBack={goBack}
                  onNext={goNext}
                  nextDisabled={!canStep2}
                  nextLabel="Next"
                />
              </motion.div>
            )}

            {/* === Step 3: Global Tolerance === */}
            {step === 3 && (
              <motion.div
                key="s3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <h2 className="text-[24px] text-[#1C1B1F] mb-1" style={{ fontWeight: 600 }}>
                  Set Tolerance
                </h2>
                <p className="text-[14px] text-[#79747E] mb-2" style={{ fontWeight: 400 }}>
                  Set the default pixel tolerance for &ldquo;{trimmedTitle}&rdquo;
                </p>
                <p className="text-[12px] text-[#9E9E9E] mb-6" style={{ fontWeight: 400, lineHeight: 1.5 }}>
                  Features and device tests can override this later.
                  Lower values are stricter; higher values are more forgiving.
                </p>

                <div className="mb-8 p-4 rounded-[14px] bg-[#FAFAFA] border border-[#F0F0F0]">
                  <ToleranceEditor
                    value={globalTolerance}
                    onChange={setGlobalTolerance}
                    source="project"
                    showSource
                  />
                </div>

                <StepNav
                  onBack={goBack}
                  onNext={handleCreate}
                  nextDisabled={false}
                  nextLabel={selectedFileKeys.size > 0 ? `Create Project & Import ${selectedFileKeys.size} Features` : "Create Project"}
                />
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

/* ---- Shared navigation buttons ---- */
function StepNav({
  onBack, onNext, nextDisabled, nextLabel,
}: {
  onBack: () => void;
  onNext: () => void;
  nextDisabled: boolean;
  nextLabel: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-[14px] text-[#79747E] hover:text-[#49454F] transition-colors px-3 py-2 rounded-[10px] hover:bg-[#F5F5F5] cursor-pointer"
        style={{ fontWeight: 500 }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>
      <button
        disabled={nextDisabled}
        onClick={onNext}
        className={`flex items-center gap-2 px-6 py-2.5 rounded-[12px] text-[14px] transition-all cursor-pointer ${
          !nextDisabled
            ? "bg-[#2962FF] text-white shadow-md shadow-[#2962FF]/20 hover:shadow-lg hover:shadow-[#2962FF]/30"
            : "bg-[#F0F0F0] text-[#BDBDBD] cursor-not-allowed"
        }`}
        style={{ fontWeight: 600 }}
      >
        {nextLabel}
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
