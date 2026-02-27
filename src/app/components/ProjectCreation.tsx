import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, AlertCircle, Smartphone, Tablet, Monitor, Tv, Watch } from "lucide-react";
import { useProjects, type DeviceType } from "../context/ProjectContext";
import { ToleranceEditor } from "./ToleranceEditor";

const DEVICES: { type: DeviceType; label: string; icon: React.ReactNode }[] = [
  { type: "phone", label: "Phone", icon: <Smartphone className="w-6 h-6" /> },
  { type: "tablet", label: "Tablet", icon: <Tablet className="w-6 h-6" /> },
  { type: "desktop", label: "Desktop", icon: <Monitor className="w-6 h-6" /> },
  { type: "tv", label: "TV / Automotive", icon: <Tv className="w-6 h-6" /> },
  { type: "watch", label: "Watch", icon: <Watch className="w-6 h-6" /> },
];

export function ProjectCreation() {
  const navigate = useNavigate();
  const { projects, addProject } = useProjects();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [title, setTitle] = useState("");
  const [selectedDevices, setSelectedDevices] = useState<DeviceType[]>([]);
  const [globalTolerance, setGlobalTolerance] = useState(3);

  const trimmedTitle = title.trim();
  const isDuplicate = projects.some(
    (p) => p.title.toLowerCase() === trimmedTitle.toLowerCase()
  );
  const canStep1 = trimmedTitle.length > 0 && !isDuplicate;
  const canStep2 = selectedDevices.length > 0;

  const toggleDevice = (type: DeviceType) => {
    setSelectedDevices((prev) =>
      prev.includes(type) ? prev.filter((d) => d !== type) : [...prev, type]
    );
  };

  const handleCreate = () => {
    if (!canStep1 || !canStep2) return;
    const project = addProject(trimmedTitle, selectedDevices, globalTolerance);
    navigate(`/project/${project.id}`);
  };

  const goBack = () => {
    if (step === 1) {
      navigate(projects.length > 0 ? "/dashboard" : "/");
    } else {
      setStep((s) => (s - 1) as 1 | 2 | 3);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[480px]"
      >
        {/* Steps indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 w-8 rounded-full transition-colors ${
                s <= step ? "bg-[#2962FF]" : "bg-[#E0E0E0]"
              }`}
            />
          ))}
        </div>

        {/* Card */}
        <div
          className="bg-white rounded-[20px] p-8 border border-[#E0E0E0]/60"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
        >
          {/* === Step 1: Title === */}
          {step === 1 && (
            <motion.div
              key="s1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && canStep1) setStep(2);
                  }}
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

              <StepNav
                onBack={goBack}
                onNext={() => setStep(2)}
                nextDisabled={!canStep1}
                nextLabel="Next"
              />
            </motion.div>
          )}

          {/* === Step 2: Devices === */}
          {step === 2 && (
            <motion.div
              key="s2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
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
                      <div
                        className={`transition-colors ${selected ? "text-[#2962FF]" : "text-[#9E9E9E]"}`}
                      >
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
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
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
                onNext={() => setStep(3)}
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
                nextLabel="Create Project"
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

/* ---- Shared navigation buttons ---- */
function StepNav({
  onBack,
  onNext,
  nextDisabled,
  nextLabel,
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
