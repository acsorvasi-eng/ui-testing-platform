import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft, Plus, Trash2, Monitor, Smartphone, Tablet, Tv, Watch, Layers,
  CheckCircle2, AlertTriangle, Clock, SlidersHorizontal, Filter, LayoutGrid,
} from "lucide-react";
import {
  useProjects, getEffectiveTolerance,
  type Project, type Feature, type DeviceType, type DeviceTest,
} from "../context/ProjectContext";
import { ToleranceEditor, ToleranceBadge } from "./ToleranceEditor";
import { InlineEdit } from "./InlineEdit";

const deviceIcons: Record<DeviceType, React.ReactNode> = {
  phone: <Smartphone className="w-5 h-5" />,
  tablet: <Tablet className="w-5 h-5" />,
  desktop: <Monitor className="w-5 h-5" />,
  tv: <Tv className="w-5 h-5" />,
  watch: <Watch className="w-5 h-5" />,
};

const deviceIconsSmall: Record<DeviceType, React.ReactNode> = {
  phone: <Smartphone className="w-3.5 h-3.5" />,
  tablet: <Tablet className="w-3.5 h-3.5" />,
  desktop: <Monitor className="w-3.5 h-3.5" />,
  tv: <Tv className="w-3.5 h-3.5" />,
  watch: <Watch className="w-3.5 h-3.5" />,
};

const deviceLabels: Record<DeviceType, string> = {
  phone: "Phone", tablet: "Tablet", desktop: "Desktop", tv: "TV / Auto", watch: "Watch",
};

function testStatusInfo(status: DeviceTest["status"]) {
  switch (status) {
    case "pass": return { label: "Pass", color: "#2E7D32", bg: "#E8F5E9", icon: <CheckCircle2 className="w-3.5 h-3.5" /> };
    case "issues": return { label: "Issues", color: "#D32F2F", bg: "#FFEBEE", icon: <AlertTriangle className="w-3.5 h-3.5" /> };
    case "pending": return { label: "Pending", color: "#ED6C02", bg: "#FFF3E0", icon: <Clock className="w-3.5 h-3.5" /> };
    default: return { label: "Not Tested", color: "#9E9E9E", bg: "#F5F5F5", icon: <Clock className="w-3.5 h-3.5" /> };
  }
}

/** Get a friendly label like "Phone #3" */
function getTestLabel(test: DeviceTest, allTests: DeviceTest[]): string {
  if (test.name && test.name !== "New Test") return test.name;
  const sameType = allTests.filter((t) => t.deviceType === test.deviceType);
  if (sameType.length <= 1) return deviceLabels[test.deviceType];
  const idx = sameType.findIndex((t) => t.id === test.id);
  return `${deviceLabels[test.deviceType]} #${idx + 1}`;
}

/** Get device type subtitle for a test card */
function getTestSubtitle(test: DeviceTest): string {
  return deviceLabels[test.deviceType];
}

interface FeatureDetailProps {
  project: Project;
  feature: Feature;
  onBack: () => void;
}

const ALL_DEVICE_TYPES: DeviceType[] = ["phone", "tablet", "desktop", "tv", "watch"];

export function FeatureDetail({ project, feature, onBack }: FeatureDetailProps) {
  const { addDeviceTest, updateDeviceTest, deleteDeviceTest, updateFeature, updateProject } = useProjects();
  const navigate = useNavigate();

  const [showAddTest, setShowAddTest] = useState(false);
  const [newTestDevice, setNewTestDevice] = useState<DeviceType | "">(project.devices[0] ?? "");
  const [newTestName, setNewTestName] = useState("");
  const [deletingTestId, setDeletingTestId] = useState<string | null>(null);
  const [showFeatureTolerance, setShowFeatureTolerance] = useState(false);
  const [deviceFilter, setDeviceFilter] = useState<DeviceType | "all">("all");

  const effectiveTol = getEffectiveTolerance(project, feature);

  // Compute counts per device type
  const deviceCounts = useMemo(() => {
    const counts: Partial<Record<DeviceType, number>> = {};
    for (const t of feature.deviceTests) {
      counts[t.deviceType] = (counts[t.deviceType] ?? 0) + 1;
    }
    return counts;
  }, [feature.deviceTests]);

  // Filter tests
  const filteredTests = useMemo(() => {
    if (deviceFilter === "all") return feature.deviceTests;
    return feature.deviceTests.filter((t) => t.deviceType === deviceFilter);
  }, [feature.deviceTests, deviceFilter]);

  // Which device types are actually used (for filter bar)
  const usedDeviceTypes = useMemo(() => {
    const types = new Set(feature.deviceTests.map((t) => t.deviceType));
    return Array.from(types);
  }, [feature.deviceTests]);

  // Drilldown to testing screen — now uses route navigation
  const navigateToTest = (testId: string) => {
    navigate(`/project/${project.id}/feature/${feature.id}/test/${testId}`);
  };

  const handleCreateTest = () => {
    if (!newTestDevice) return;
    const name = newTestName.trim() || undefined;
    // If this device type isn't in the project yet, add it
    if (!project.devices.includes(newTestDevice)) {
      updateProject(project.id, { devices: [...project.devices, newTestDevice] });
    }
    addDeviceTest(project.id, feature.id, newTestDevice, name);
    setNewTestName("");
    setNewTestDevice(project.devices[0] ?? "");
    setShowAddTest(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#E0E0E0]/60" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 rounded-[8px] text-[#79747E] hover:text-[#49454F] hover:bg-[#F5F5F5] transition-all cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[10px] flex items-center justify-center bg-[#7C4DFF]/10">
                <Layers className="w-5 h-5 text-[#7C4DFF]" strokeWidth={1.5} />
              </div>
              <div>
                <InlineEdit
                  value={feature.title}
                  onSave={(newTitle) => updateFeature(project.id, feature.id, { title: newTitle })}
                  className="text-[16px] text-[#1C1B1F]"
                  style={{ fontWeight: 700 }}
                  size="lg"
                  placeholder="Feature name..."
                />
                <p className="text-[11px] text-[#9E9E9E]" style={{ fontWeight: 400 }}>
                  {project.title} &middot; {feature.deviceTests.length} test{feature.deviceTests.length !== 1 ? "s" : ""}
                  {usedDeviceTypes.length > 0 && (
                    <> &middot; {usedDeviceTypes.map((d) => `${deviceCounts[d]} ${deviceLabels[d]}`).join(", ")}</>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ToleranceBadge
              value={effectiveTol.value}
              source={effectiveTol.source}
              onClick={() => setShowFeatureTolerance(true)}
            />
            <button
              onClick={() => setShowAddTest(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[#2962FF] text-white text-[13px] hover:shadow-lg hover:shadow-[#2962FF]/20 transition-all cursor-pointer"
              style={{ fontWeight: 600 }}
            >
              <Plus className="w-4 h-4" />
              Add Device Test
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        {/* Filter bar — shows when there are tests */}
        {feature.deviceTests.length > 0 && (
          <div className="flex items-center gap-2 mb-5">
            <Filter className="w-4 h-4 text-[#9E9E9E]" />
            <span className="text-[12px] text-[#9E9E9E] mr-1" style={{ fontWeight: 500 }}>Filter:</span>

            {/* "All" chip */}
            <button
              onClick={() => setDeviceFilter("all")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] text-[12px] transition-all cursor-pointer ${
                deviceFilter === "all"
                  ? "bg-[#2962FF] text-white shadow-sm"
                  : "bg-white text-[#79747E] border border-[#E0E0E0] hover:border-[#BDBDBD] hover:bg-[#FAFAFA]"
              }`}
              style={{ fontWeight: deviceFilter === "all" ? 600 : 400 }}
            >
              <LayoutGrid className="w-3 h-3" />
              All
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  deviceFilter === "all" ? "bg-white/20 text-white" : "bg-[#F5F5F5] text-[#9E9E9E]"
                }`}
                style={{ fontWeight: 600 }}
              >
                {feature.deviceTests.length}
              </span>
            </button>

            {/* Device type chips — only show types that have at least 1 test */}
            {usedDeviceTypes.map((d) => {
              const count = deviceCounts[d] ?? 0;
              const isActive = deviceFilter === d;
              return (
                <button
                  key={d}
                  onClick={() => setDeviceFilter(isActive ? "all" : d)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] text-[12px] transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#2962FF] text-white shadow-sm"
                      : "bg-white text-[#79747E] border border-[#E0E0E0] hover:border-[#BDBDBD] hover:bg-[#FAFAFA]"
                  }`}
                  style={{ fontWeight: isActive ? 600 : 400 }}
                >
                  {deviceIconsSmall[d]}
                  {deviceLabels[d]}
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-[#F5F5F5] text-[#9E9E9E]"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {feature.deviceTests.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-14 h-14 rounded-full bg-[#EDE7F6] flex items-center justify-center mb-4">
              <Monitor className="w-7 h-7 text-[#7C4DFF]/60" />
            </div>
            <p className="text-[15px] text-[#49454F] mb-1" style={{ fontWeight: 500 }}>No device tests yet</p>
            <p className="text-[13px] text-[#9E9E9E] mb-5" style={{ fontWeight: 400 }}>Add a device test to compare screenshots</p>
            <button onClick={() => setShowAddTest(true)} className="flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-[#2962FF] text-white text-[14px] hover:shadow-lg hover:shadow-[#2962FF]/20 transition-all cursor-pointer" style={{ fontWeight: 600 }}>
              <Plus className="w-4 h-4" />
              Add Device Test
            </button>
          </div>
        ) : filteredTests.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-[14px] text-[#9E9E9E] mb-3" style={{ fontWeight: 400 }}>No {deviceFilter !== "all" ? deviceLabels[deviceFilter] : ""} tests found</p>
            <button onClick={() => setDeviceFilter("all")} className="text-[13px] text-[#2962FF] cursor-pointer" style={{ fontWeight: 500 }}>Show all tests</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTests.map((test, idx) => {
              const status = testStatusInfo(test.status);
              const testTol = getEffectiveTolerance(project, feature, test);
              const label = getTestLabel(test, feature.deviceTests);

              return (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  className="group relative bg-white rounded-[16px] border border-[#E0E0E0]/60 overflow-hidden hover:shadow-md hover:border-[#BDBDBD] transition-all"
                >
                  {/* Preview */}
                  <div
                    className="relative bg-[#F5F5F5] flex items-center justify-center cursor-pointer"
                    style={{ height: "140px" }}
                    onClick={() => navigateToTest(test.id)}
                  >
                    {test.masterScreenUrl ? (
                      <img src={test.masterScreenUrl} alt={label} className="absolute inset-0 w-full h-full object-cover object-top" />
                    ) : (
                      <div className="text-[#BDBDBD] flex flex-col items-center gap-2">
                        {deviceIcons[test.deviceType]}
                        <span className="text-[11px]" style={{ fontWeight: 400 }}>No master yet</span>
                      </div>
                    )}
                    {/* Device badge overlay */}
                    <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-[8px] bg-white/85 backdrop-blur-sm border border-white/30">
                      <span className="text-[#49454F]">{deviceIconsSmall[test.deviceType]}</span>
                      <span className="text-[10px] text-[#49454F]" style={{ fontWeight: 600 }}>
                        {label}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-[10px] bg-white/90 text-[#1C1B1F] text-[13px] shadow-lg" style={{ fontWeight: 600 }}>
                        Open Test
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-4 py-3">
                    <div className="flex items-start justify-between mb-1.5">
                      <div className="flex-1 min-w-0 mr-2">
                        <InlineEdit
                          value={label}
                          onSave={(newName) => updateDeviceTest(project.id, feature.id, test.id, { name: newName })}
                          className="text-[14px] text-[#1C1B1F]"
                          style={{ fontWeight: 600 }}
                          size="sm"
                          placeholder="Test name..."
                        />
                        <div className="flex items-center gap-1 mt-0.5 px-1">
                          <span className="text-[#9E9E9E]">{deviceIconsSmall[test.deviceType]}</span>
                          <span className="text-[10px] text-[#9E9E9E]" style={{ fontWeight: 500 }}>
                            {getTestSubtitle(test)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => setDeletingTestId(test.id)}
                        className="p-1 rounded-[6px] text-[#BDBDBD] hover:text-[#D32F2F] hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 cursor-pointer mt-0.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-[6px]"
                        style={{ fontWeight: 600, color: status.color, backgroundColor: status.bg }}
                      >
                        {status.label}
                      </span>
                      <span
                        className="flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-[5px]"
                        style={{
                          fontWeight: 600,
                          color: testTol.source === "device" ? "#00BFA5" : testTol.source === "feature" ? "#7C4DFF" : "#2962FF",
                          backgroundColor: testTol.source === "device" ? "#E0F2F1" : testTol.source === "feature" ? "#EDE7F6" : "#E8EAF6",
                        }}
                      >
                        {testTol.value}px
                        <span className="text-[8px] opacity-70">
                          {testTol.source === "device" ? "DEV" : testTol.source === "feature" ? "FEAT" : "PROJ"}
                        </span>
                      </span>
                    </div>

                    {test.reports.length > 0 && (
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex-1 h-1.5 rounded-full bg-[#F5F5F5] overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${test.reports[test.reports.length - 1].matchPercentage}%`,
                              backgroundColor: test.reports[test.reports.length - 1].matchPercentage > 97 ? "#2E7D32" : test.reports[test.reports.length - 1].matchPercentage > 90 ? "#ED6C02" : "#D32F2F",
                            }}
                          />
                        </div>
                        <span className="text-[10px] text-[#9E9E9E]" style={{ fontWeight: 500 }}>
                          {test.reports[test.reports.length - 1].matchPercentage.toFixed(1)}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Delete overlay */}
                  {deletingTestId === test.id && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[16px] flex flex-col items-center justify-center gap-3 p-4 z-10">
                      <p className="text-[13px] text-[#1C1B1F] text-center" style={{ fontWeight: 500 }}>Delete &ldquo;{label}&rdquo; test?</p>
                      <div className="flex gap-2">
                        <button onClick={() => setDeletingTestId(null)} className="px-4 py-1.5 rounded-[8px] text-[12px] text-[#79747E] hover:bg-[#F5F5F5] transition-colors cursor-pointer" style={{ fontWeight: 500 }}>Cancel</button>
                        <button onClick={() => { deleteDeviceTest(project.id, feature.id, test.id); setDeletingTestId(null); }} className="px-4 py-1.5 rounded-[8px] text-[12px] bg-[#D32F2F] text-white hover:bg-[#B71C1C] transition-colors cursor-pointer" style={{ fontWeight: 600 }}>Delete</button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

            {/* Add test card — always visible */}
            <button
              onClick={() => setShowAddTest(true)}
              className="flex flex-col items-center justify-center gap-2 bg-white rounded-[16px] border-2 border-dashed border-[#E0E0E0] hover:border-[#2962FF]/40 hover:bg-[#2962FF]/[0.02] transition-all group cursor-pointer"
              style={{ minHeight: "220px" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#F5F5F5] group-hover:bg-[#E8EAF6] flex items-center justify-center transition-colors">
                <Plus className="w-5 h-5 text-[#BDBDBD] group-hover:text-[#2962FF] transition-colors" />
              </div>
              <span className="text-[13px] text-[#BDBDBD] group-hover:text-[#2962FF] transition-colors" style={{ fontWeight: 500 }}>Add Device Test</span>
            </button>
          </div>
        )}
      </div>

      {/* ================================================================ */}
      {/* Add device test modal — always shows ALL project device types     */}
      {/* ================================================================ */}
      {showAddTest && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[20px] w-full max-w-[440px] p-6"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.15)" }}
          >
            <h3 className="text-[18px] text-[#1C1B1F] mb-1" style={{ fontWeight: 600 }}>Add Device Test</h3>
            <p className="text-[13px] text-[#79747E] mb-5" style={{ fontWeight: 400 }}>
              Select a device type for &ldquo;{feature.title}&rdquo;. You can add multiple tests per device type.
            </p>

            {/* Device type selection — shows ALL device types, marks new ones */}
            <div className="flex flex-col gap-2 mb-4">
              {ALL_DEVICE_TYPES.map((d) => {
                const count = deviceCounts[d] ?? 0;
                const selected = newTestDevice === d;
                const isNewDevice = !project.devices.includes(d);
                return (
                  <button
                    key={d}
                    onClick={() => setNewTestDevice(d)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-[14px] border-2 transition-all cursor-pointer ${
                      selected
                        ? "border-[#2962FF] bg-[#2962FF]/[0.04]"
                        : "border-[#E0E0E0] hover:border-[#BDBDBD] hover:bg-[#FAFAFA]"
                    }`}
                  >
                    <span className={`transition-colors ${selected ? "text-[#2962FF]" : "text-[#9E9E9E]"}`}>
                      {deviceIcons[d]}
                    </span>
                    <span
                      className={`text-[14px] flex-1 text-left ${selected ? "text-[#1C1B1F]" : "text-[#79747E]"}`}
                      style={{ fontWeight: selected ? 600 : 400 }}
                    >
                      {deviceLabels[d]}
                    </span>
                    {/* "New" badge for device types not yet in the project */}
                    {isNewDevice && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${
                          selected ? "bg-[#E8F5E9] text-[#2E7D32]" : "bg-[#FFF3E0] text-[#E65100]"
                        }`}
                        style={{ fontWeight: 600 }}
                      >
                        + New
                      </span>
                    )}
                    {/* Counter showing how many tests of this type already exist */}
                    {count > 0 && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full ${
                          selected ? "bg-[#2962FF]/10 text-[#2962FF]" : "bg-[#F5F5F5] text-[#9E9E9E]"
                        }`}
                        style={{ fontWeight: 600 }}
                      >
                        {count} existing
                      </span>
                    )}
                    {/* Selection indicator */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
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

            {/* Test name input */}
            <div className="mb-4">
              <label className="text-[13px] text-[#49454F] mb-2 block" style={{ fontWeight: 500 }}>
                Test Name
              </label>
              <input
                type="text"
                value={newTestName}
                onChange={(e) => setNewTestName(e.target.value)}
                placeholder={newTestDevice ? `e.g. Home, Search, Login...` : "Select a device first"}
                disabled={!newTestDevice}
                maxLength={60}
                className="w-full px-4 py-3 rounded-[12px] bg-[#F5F5F5] border border-transparent text-[14px] text-[#1C1B1F] placeholder:text-[#BDBDBD] focus:outline-none focus:border-[#2962FF] focus:bg-white focus:ring-2 focus:ring-[#2962FF]/10 transition-all disabled:opacity-50"
                style={{ fontWeight: 400 }}
                onKeyDown={(e) => { if (e.key === "Enter" && newTestDevice) handleCreateTest(); }}
              />
              <p className="text-[11px] text-[#9E9E9E] mt-1.5 px-1" style={{ fontWeight: 400 }}>
                Give your test a descriptive name. You can always rename it later.
              </p>
            </div>

            {/* Preview what will be created */}
            {newTestDevice && (
              <div className="flex flex-col gap-2 mb-5">
                <div className="flex items-center gap-2 px-3 py-2.5 rounded-[10px] bg-[#F5F5F5] border border-[#F0F0F0]">
                  <span className="text-[#2962FF]">{deviceIconsSmall[newTestDevice]}</span>
                  <span className="text-[12px] text-[#49454F]" style={{ fontWeight: 500 }}>
                    Will create: {newTestName.trim() || `${deviceLabels[newTestDevice]} #${(deviceCounts[newTestDevice] ?? 0) + 1}`}
                    <span className="text-[#9E9E9E]"> ({deviceLabels[newTestDevice]})</span>
                  </span>
                </div>
                {!project.devices.includes(newTestDevice) && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-[10px] bg-[#E8F5E9] border border-[#C8E6C9]">
                    <Plus className="w-3.5 h-3.5 text-[#2E7D32]" />
                    <span className="text-[11px] text-[#2E7D32]" style={{ fontWeight: 500 }}>
                      {deviceLabels[newTestDevice]} will be added as a new device type to this project
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-2">
              <button
                onClick={() => { setShowAddTest(false); setNewTestDevice(project.devices[0] ?? ""); setNewTestName(""); }}
                className="flex-1 py-3 rounded-[12px] bg-[#F5F5F5] text-[#49454F] text-[14px] hover:bg-[#EEEEEE] transition-all cursor-pointer"
                style={{ fontWeight: 500 }}
              >
                Cancel
              </button>
              <button
                disabled={!newTestDevice}
                onClick={handleCreateTest}
                className={`flex-1 py-3 rounded-[12px] text-[14px] transition-all cursor-pointer ${
                  newTestDevice
                    ? "bg-[#2962FF] text-white shadow-md shadow-[#2962FF]/20 hover:shadow-lg"
                    : "bg-[#F0F0F0] text-[#BDBDBD] cursor-not-allowed"
                }`}
                style={{ fontWeight: 600 }}
              >
                Add Test
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Feature tolerance editor modal */}
      {showFeatureTolerance && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[20px] w-full max-w-[420px] p-6"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.15)" }}
          >
            <h3 className="text-[18px] text-[#1C1B1F] mb-1" style={{ fontWeight: 600 }}>Feature Tolerance</h3>
            <p className="text-[13px] text-[#79747E] mb-4" style={{ fontWeight: 400 }}>
              Override tolerance for &ldquo;{feature.title}&rdquo; or inherit from project ({project.globalTolerance}px)
            </p>

            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-[13px] text-[#49454F]" style={{ fontWeight: 500 }}>
                {feature.toleranceOverride != null ? "Custom override" : "Inherited from project"}
              </span>
              <button
                onClick={() => {
                  if (feature.toleranceOverride != null) {
                    updateFeature(project.id, feature.id, { toleranceOverride: null });
                  } else {
                    updateFeature(project.id, feature.id, { toleranceOverride: project.globalTolerance });
                  }
                }}
                className={`w-10 h-[22px] rounded-full transition-colors relative cursor-pointer ${feature.toleranceOverride != null ? "bg-[#7C4DFF]" : "bg-[#CAC4D0]"}`}
              >
                <div className={`absolute top-[2px] w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform ${feature.toleranceOverride != null ? "translate-x-[20px]" : "translate-x-[2px]"}`} />
              </button>
            </div>

            <div className="p-4 rounded-[14px] bg-[#FAFAFA] border border-[#F0F0F0] mb-5">
              <ToleranceEditor
                value={feature.toleranceOverride ?? project.globalTolerance}
                onChange={(v) => updateFeature(project.id, feature.id, { toleranceOverride: v })}
                source={feature.toleranceOverride != null ? "feature" : "project"}
                showSource
                isOverride={feature.toleranceOverride != null}
                onClearOverride={() => updateFeature(project.id, feature.id, { toleranceOverride: null })}
              />
            </div>

            <button onClick={() => setShowFeatureTolerance(false)} className="w-full py-3 rounded-[12px] bg-[#F5F5F5] text-[#49454F] text-[14px] hover:bg-[#EEEEEE] transition-all cursor-pointer" style={{ fontWeight: 500 }}>Done</button>
          </motion.div>
        </div>
      )}
    </div>
  );
}