import { useRef, useState, useMemo } from "react";
import { Upload, X, ChevronDown, Smartphone, Monitor, Tablet, Search } from "lucide-react";
import type {
  DeviceTest, EffectiveTolerance, TestedRegion, DevicePreset,
} from "../types";
import { DEVICE_PRESETS } from "../types";
import { ToleranceEditor } from "./ToleranceEditor";
import { MeasureToolPanel } from "./MeasureTool";
import type { Measurement } from "../types";
import { configureOpus } from "../engine/OpusQA";

/* ================================================================== */
/* Severity config (display only)                                       */
/* ================================================================== */
const severityConfig: Record<string, { color: string }> = {
  perfect: { color: "#2E7D32" },
  minor: { color: "#ED6C02" },
  "layout-shift": { color: "#E65100" },
  structural: { color: "#D32F2F" },
  "high-severity": { color: "#B71C1C" },
};

/* ================================================================== */
/* Helpers                                                              */
/* ================================================================== */

/** Icon for a preset based on its category */
function PresetIcon({ preset, className }: { preset: DevicePreset; className?: string }) {
  if (preset.category === "desktop") return <Monitor className={className} />;
  if (preset.category === "tablet") return <Tablet className={className} />;
  return <Smartphone className={className} />;
}

/* ================================================================== */
/* Props                                                                */
/* ================================================================== */
interface TestingSidebarProps {
  deviceTest: DeviceTest;
  effectiveTolerance: EffectiveTolerance;
  onUpdateTest: (updates: Partial<DeviceTest>) => void;

  // Master
  masterDims: { w: number; h: number };
  onMasterLoad: (e: React.SyntheticEvent<HTMLImageElement>) => void;

  // Screenshots
  activeScreenshotIdx: number;
  ssDims: Record<number, { w: number; h: number }>;
  onSelectScreenshot: (idx: number) => void;
  onRemoveScreenshot: (idx: number) => void;

  // File handling
  onFileUpload: (file: File, target: "master" | "screenshot") => void;
  onDrop: (e: React.DragEvent, target: "master" | "screenshot") => void;

  // Tested regions
  testedRegions: TestedRegion[];
  hoveredRegionId: string | null;
  onHoverRegion: (id: string | null) => void;
  onRemoveRegion: (id: string) => void;

  // Measure tool
  isMeasuring: boolean;
  measurements: Measurement[];
  onRemoveMeasurement: (id: string) => void;
  onClearAllMeasurements: () => void;
  hoveredMeasureId: string | null;
  onHoverMeasure: (id: string | null) => void;

  // Phase control
  onClearMaster: () => void;

  // Device preset (AI Smart Test)
  selectedPreset: DevicePreset;
  onPresetChange: (preset: DevicePreset) => void;
  manualDims: { w: number; h: number };
  onManualDimsChange: (dims: { w: number; h: number }) => void;
  /** Auto-detected preset result from TestingScreen (null if no match) */
  autoDetectedPreset: { preset: DevicePreset; dpr: number; landscape?: boolean } | null;
}

/* ================================================================== */
/* Component                                                            */
/* ================================================================== */
export function TestingSidebar({
  deviceTest,
  effectiveTolerance,
  onUpdateTest,
  masterDims,
  onMasterLoad,
  activeScreenshotIdx,
  ssDims,
  onSelectScreenshot,
  onRemoveScreenshot,
  onFileUpload,
  onDrop,
  testedRegions,
  hoveredRegionId,
  onHoverRegion,
  onRemoveRegion,
  isMeasuring,
  measurements,
  onRemoveMeasurement,
  onClearAllMeasurements,
  hoveredMeasureId,
  onHoverMeasure,
  onClearMaster,
  selectedPreset,
  onPresetChange,
  manualDims,
  onManualDimsChange,
  autoDetectedPreset,
}: TestingSidebarProps) {
  const masterInputRef = useRef<HTMLInputElement>(null);
  const ssInputRef = useRef<HTMLInputElement>(null);
  const [masterDragOver, setMasterDragOver] = useState(false);
  const [ssDragOver, setSsDragOver] = useState(false);
  const [presetOpen, setPresetOpen] = useState(false);
  const [aiModeLive, setAiModeLive] = useState(false);

  const activeRegions = testedRegions.filter(
    (r) => r.screenshotIdx === activeScreenshotIdx
  );

  /* ---- Filter presets by device type ---- */
  const filteredPresets = useMemo(() => {
    const dt = deviceTest.deviceType;
    return DEVICE_PRESETS.filter(
      (p) => p.category === "any" || p.category === dt,
    );
  }, [deviceTest.deviceType]);

  return (
    <aside
      className="w-[272px] shrink-0 border-r border-[#E0E0E0]/60 bg-white overflow-y-auto"
      style={{ maxHeight: "calc(100vh - 56px)" }}
    >
      {/* ---- Master ---- */}
      <div className="border-b border-[#F0F0F0]">
        <div className="px-4 py-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#2E7D32]" />
          <span className="text-[13px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>
            Master Design
          </span>
          {masterDims.w > 0 && (
            <span className="ml-auto text-[9px] text-[#9E9E9E]" style={{ fontWeight: 500 }}>
              {masterDims.w}&times;{masterDims.h}
            </span>
          )}
        </div>
        <div
          className={`px-3 pb-3 transition-colors ${masterDragOver ? "bg-[#E8EAF6]" : ""}`}
          onDrop={(e) => { onDrop(e, "master"); setMasterDragOver(false); }}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => setMasterDragOver(true)}
          onDragLeave={() => setMasterDragOver(false)}
        >
          {deviceTest.masterScreenUrl ? (
            <div className="relative group">
              <img
                src={deviceTest.masterScreenUrl}
                alt="Master"
                className="w-full rounded-[10px] border border-[#E0E0E0]"
                onLoad={onMasterLoad}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 rounded-[10px]">
                <div className="flex gap-1.5">
                  <button
                    onClick={() => masterInputRef.current?.click()}
                    className="px-3 py-1.5 rounded-[8px] bg-white/90 text-[11px] text-[#1C1B1F] shadow-lg cursor-pointer"
                    style={{ fontWeight: 600 }}
                  >
                    Replace
                  </button>
                  <button
                    onClick={onClearMaster}
                    className="px-3 py-1.5 rounded-[8px] bg-white/90 text-[11px] text-[#D32F2F] shadow-lg cursor-pointer"
                    style={{ fontWeight: 600 }}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => masterInputRef.current?.click()}
              className="w-full py-8 flex flex-col items-center gap-2 rounded-[12px] border-2 border-dashed border-[#E0E0E0] hover:border-[#2962FF]/40 hover:bg-[#2962FF]/[0.02] transition-all cursor-pointer"
            >
              <Upload className="w-5 h-5 text-[#BDBDBD]" />
              <span className="text-[11px] text-[#9E9E9E]" style={{ fontWeight: 500 }}>
                Drop or click to upload
              </span>
            </button>
          )}
          <input
            ref={masterInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onFileUpload(f, "master");
            }}
          />
        </div>
      </div>

      {/* ---- Screenshots ---- */}
      <div className="border-b border-[#F0F0F0]">
        <div className="px-4 py-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#2962FF]" />
          <span className="text-[13px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>
            Screenshots
          </span>
          {deviceTest.screenshotUrls.length > 0 && (
            <span
              className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-[#E8EAF6] text-[#2962FF]"
              style={{ fontWeight: 700 }}
            >
              {deviceTest.screenshotUrls.length}
            </span>
          )}
        </div>
        <div
          className={`px-3 pb-3 transition-colors ${ssDragOver ? "bg-[#E8EAF6]" : ""}`}
          onDrop={(e) => { onDrop(e, "screenshot"); setSsDragOver(false); }}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => setSsDragOver(true)}
          onDragLeave={() => setSsDragOver(false)}
        >
          {deviceTest.screenshotUrls.length > 0 && (
            <div className="flex flex-col gap-1.5 mb-2.5">
              {deviceTest.screenshotUrls.map((url, idx) => {
                const isActive = idx === activeScreenshotIdx;
                const sd = ssDims[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => onSelectScreenshot(idx)}
                    className={`relative group flex items-center gap-2.5 p-2 rounded-[10px] border-2 transition-all cursor-pointer ${
                      isActive
                        ? "border-[#2962FF] bg-[#E8EAF6]/40"
                        : "border-transparent hover:bg-[#FAFAFA] hover:border-[#E0E0E0]"
                    }`}
                  >
                    <img
                      src={url}
                      alt={`SS ${idx + 1}`}
                      className="w-[52px] h-[36px] rounded-[6px] object-cover object-top border border-[#E0E0E0]"
                    />
                    <div className="flex-1 min-w-0">
                      <span
                        className={`text-[11px] block truncate ${
                          isActive ? "text-[#2962FF]" : "text-[#49454F]"
                        }`}
                        style={{ fontWeight: isActive ? 600 : 500 }}
                      >
                        Screenshot {idx + 1}
                      </span>
                      {sd && (
                        <span className="text-[9px] text-[#9E9E9E]" style={{ fontWeight: 500 }}>
                          {sd.w}&times;{sd.h}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveScreenshot(idx);
                      }}
                      className="p-1 rounded-[6px] text-[#BDBDBD] hover:text-[#D32F2F] hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          <button
            onClick={() => ssInputRef.current?.click()}
            className="w-full py-4 flex flex-col items-center gap-1.5 rounded-[10px] border-2 border-dashed border-[#E0E0E0] hover:border-[#2962FF]/40 hover:bg-[#2962FF]/[0.02] transition-all cursor-pointer"
          >
            <Upload className="w-4 h-4 text-[#BDBDBD]" />
            <span className="text-[11px] text-[#9E9E9E]" style={{ fontWeight: 500 }}>
              Add screenshots
            </span>
          </button>
          <input
            ref={ssInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              Array.from(e.target.files ?? []).forEach((f) => onFileUpload(f, "screenshot"));
              e.target.value = "";
            }}
          />
        </div>
      </div>

      {/* ---- Device Preset (Smart Scale) ---- */}
      <div className="border-b border-[#F0F0F0]">
        <div className="px-4 py-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00BFA5]" />
          <span className="text-[13px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>
            Device Preset
          </span>
          {selectedPreset.id !== "auto" ? (
            <span
              className="ml-auto text-[9px] px-2 py-0.5 rounded-full bg-[#E0F2F1] text-[#00897B]"
              style={{ fontWeight: 600 }}
            >
              Smart Scale
            </span>
          ) : autoDetectedPreset ? (
            <span
              className="ml-auto text-[9px] px-2 py-0.5 rounded-full bg-[#E8EAF6] text-[#2962FF]"
              style={{ fontWeight: 600 }}
            >
              Detected
            </span>
          ) : null}
        </div>
        <div className="px-3 pb-3">
          {/* Dropdown trigger */}
          <div className="relative">
            <button
              onClick={() => setPresetOpen(!presetOpen)}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-[10px] border border-[#E0E0E0] hover:border-[#2962FF]/40 hover:bg-[#FAFAFA] transition-all cursor-pointer text-left"
            >
              <PresetIcon
                preset={selectedPreset.id === "auto" && autoDetectedPreset ? autoDetectedPreset.preset : selectedPreset}
                className={`w-3.5 h-3.5 ${selectedPreset.id === "auto" ? "text-[#9E9E9E]" : "text-[#00897B]"}`}
              />
              <div className="flex-1 min-w-0">
                <span className="text-[12px] text-[#1C1B1F] block truncate" style={{ fontWeight: 500 }}>
                  {selectedPreset.label}
                  {selectedPreset.w > 0 && (
                    <span className="text-[#9E9E9E] ml-1">
                      {selectedPreset.w}&times;{selectedPreset.h}
                    </span>
                  )}
                  {selectedPreset.id === "manual" && manualDims.w > 0 && (
                    <span className="text-[#9E9E9E] ml-1">
                      {manualDims.w}&times;{manualDims.h}
                    </span>
                  )}
                </span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 text-[#9E9E9E] transition-transform shrink-0 ${presetOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown list */}
            {presetOpen && (
              <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-[#E0E0E0] rounded-[10px] shadow-lg z-50 max-h-[280px] overflow-y-auto">
                {filteredPresets.map((preset) => {
                  const isSelected = selectedPreset.id === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => {
                        onPresetChange(preset);
                        setPresetOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 text-left hover:bg-[#F5F5F5] transition-colors cursor-pointer first:rounded-t-[10px] last:rounded-b-[10px] ${
                        isSelected ? "bg-[#E0F2F1]" : ""
                      }`}
                    >
                      <PresetIcon
                        preset={preset}
                        className={`w-3.5 h-3.5 shrink-0 ${preset.id === "auto" ? "text-[#9E9E9E]" : isSelected ? "text-[#00897B]" : "text-[#49454F]"}`}
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] text-[#1C1B1F] block" style={{ fontWeight: isSelected ? 600 : 500 }}>
                          {preset.label}
                        </span>
                        {preset.w > 0 && (
                          <span className="text-[9px] text-[#9E9E9E] block" style={{ fontWeight: 500 }}>
                            {preset.w}&times;{preset.h} logical px
                          </span>
                        )}
                        {preset.id === "auto" && (
                          <span className="text-[9px] text-[#9E9E9E] block" style={{ fontWeight: 500 }}>
                            Detects device from screenshot dimensions
                          </span>
                        )}
                        {preset.id === "manual" && (
                          <span className="text-[9px] text-[#9E9E9E] block" style={{ fontWeight: 500 }}>
                            Enter custom dimensions
                          </span>
                        )}
                      </div>
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-[#00897B] shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Auto-detect result display */}
          {selectedPreset.id === "auto" && (
            <div className="mt-2 px-1">
              {autoDetectedPreset ? (
                <div className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-[8px] bg-[#E8EAF6]/60 border border-[#C5CAE9]/40">
                  <Search className="w-3 h-3 text-[#2962FF] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#2962FF] block" style={{ fontWeight: 600 }}>
                      Detected: {autoDetectedPreset.preset.label} ({autoDetectedPreset.preset.w}&times;{autoDetectedPreset.preset.h})
                    </span>
                    <span className="text-[9px] text-[#5C6BC0]" style={{ fontWeight: 500 }}>
                      @{autoDetectedPreset.dpr}x DPR{autoDetectedPreset.landscape ? " · Landscape" : ""}
                    </span>
                  </div>
                </div>
              ) : ssDims[activeScreenshotIdx] ? (
                <div className="flex items-center gap-1.5 py-1.5 px-2.5 rounded-[8px] bg-[#FFF8E1]/60 border border-[#FFE082]/40">
                  <Search className="w-3 h-3 text-[#F9A825] shrink-0" />
                  <span className="text-[10px] text-[#F57F17]" style={{ fontWeight: 500 }}>
                    No match found &mdash; using original
                  </span>
                </div>
              ) : (
                <p className="text-[9px] text-[#9E9E9E] px-1" style={{ fontWeight: 500 }}>
                  Upload a screenshot to auto-detect device
                </p>
              )}
            </div>
          )}

          {/* Manual dims input */}
          {selectedPreset.id === "manual" && (
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1">
                <label className="text-[9px] text-[#9E9E9E] block mb-0.5" style={{ fontWeight: 500 }}>Width</label>
                <input
                  type="number"
                  min={1}
                  value={manualDims.w || ""}
                  onChange={(e) => onManualDimsChange({ ...manualDims, w: parseInt(e.target.value) || 0 })}
                  placeholder="e.g. 390"
                  className="w-full px-2 py-1.5 rounded-[8px] border border-[#E0E0E0] text-[11px] text-[#1C1B1F] outline-none focus:border-[#2962FF] transition-colors"
                  style={{ fontWeight: 500 }}
                />
              </div>
              <span className="text-[#BDBDBD] text-[10px] mt-3">&times;</span>
              <div className="flex-1">
                <label className="text-[9px] text-[#9E9E9E] block mb-0.5" style={{ fontWeight: 500 }}>Height</label>
                <input
                  type="number"
                  min={1}
                  value={manualDims.h || ""}
                  onChange={(e) => onManualDimsChange({ ...manualDims, h: parseInt(e.target.value) || 0 })}
                  placeholder="e.g. 844"
                  className="w-full px-2 py-1.5 rounded-[8px] border border-[#E0E0E0] text-[11px] text-[#1C1B1F] outline-none focus:border-[#2962FF] transition-colors"
                  style={{ fontWeight: 500 }}
                />
              </div>
            </div>
          )}

          {/* Active preset info badge */}
          {selectedPreset.id !== "auto" && selectedPreset.id !== "manual" && (
            <p className="text-[9px] text-[#00897B] mt-2 px-1" style={{ fontWeight: 500 }}>
              Smart-scaling from {selectedPreset.w}&times;{selectedPreset.h} logical px
            </p>
          )}
          {selectedPreset.id === "manual" && manualDims.w > 0 && manualDims.h > 0 && (
            <p className="text-[9px] text-[#00897B] mt-2 px-1" style={{ fontWeight: 500 }}>
              Smart-scaling from {manualDims.w}&times;{manualDims.h} logical px
            </p>
          )}
        </div>
      </div>

      {/* ---- Tested Regions ---- */}
      {activeRegions.length > 0 && (
        <div className="border-b border-[#F0F0F0]">
          <div className="px-4 py-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#7B1FA2]" />
            <span className="text-[13px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>
              Tested Regions
            </span>
            <span
              className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-[#F3E5F5] text-[#7B1FA2]"
              style={{ fontWeight: 700 }}
            >
              {activeRegions.length}
            </span>
          </div>
          <div className="px-3 pb-3 flex flex-col gap-1.5">
            {activeRegions.map((region, idx) => {
              const sConf = severityConfig[region.report.severity];
              return (
                <div
                  key={region.id}
                  className={`flex items-center gap-2.5 p-2.5 rounded-[10px] border transition-all cursor-pointer ${
                    hoveredRegionId === region.id
                      ? "border-[#7B1FA2] bg-[#F3E5F5]/40"
                      : "border-[#F0F0F0] hover:bg-[#FAFAFA]"
                  }`}
                  onMouseEnter={() => onHoverRegion(region.id)}
                  onMouseLeave={() => onHoverRegion(null)}
                >
                  <div
                    className="flex items-center justify-center w-6 h-6 rounded-full bg-[#7B1FA2] text-white text-[10px] shrink-0"
                    style={{ fontWeight: 800 }}
                  >
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-[11px] text-[#49454F] block truncate"
                      style={{ fontWeight: 500 }}
                    >
                      Region {idx + 1} &mdash; {Math.round(region.masterRect.w)}&times;
                      {Math.round(region.masterRect.h)}px
                    </span>
                    <span
                      className="text-[10px]"
                      style={{ fontWeight: 600, color: sConf?.color ?? "#9E9E9E" }}
                    >
                      {region.report.matchPercentage.toFixed(1)}% match &middot;{" "}
                      {region.report.issues.length} issues
                    </span>
                  </div>
                  <button
                    onClick={() => onRemoveRegion(region.id)}
                    className="p-1 rounded-[6px] text-[#BDBDBD] hover:text-[#D32F2F] hover:bg-red-50 transition-all cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ---- Settings ---- */}
      <div>
        <div className="px-4 py-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#ED6C02]" />
          <span className="text-[13px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>
            Settings
          </span>
        </div>
        <div className="px-4 pb-4 flex flex-col gap-4">
          <ToleranceEditor
            value={deviceTest.toleranceOverride ?? effectiveTolerance.value}
            onChange={(v) => onUpdateTest({ toleranceOverride: v })}
            source={effectiveTolerance.source}
            showSource
            isOverride={deviceTest.toleranceOverride != null}
            onClearOverride={() => onUpdateTest({ toleranceOverride: null })}
          />
          {(
            [
              { key: "ignoreColor" as const, label: "Ignore color" },
              { key: "ignoreFontRendering" as const, label: "Ignore fonts" },
              { key: "structuralOnly" as const, label: "Structural only" },
              { key: "ignoreBackgroundImg" as const, label: "Ignore background img" },
            ] as const
          ).map(({ key, label }) => (
            <label key={key} className="flex items-center justify-between cursor-pointer">
              <span className="text-[12px] text-[#49454F]" style={{ fontWeight: 500 }}>
                {label}
              </span>
              <button
                onClick={() => onUpdateTest({ [key]: !deviceTest[key] })}
                className={`w-10 h-[22px] rounded-full transition-colors relative cursor-pointer ${
                  deviceTest[key] ? "bg-[#2962FF]" : "bg-[#CAC4D0]"
                }`}
              >
                <div
                  className={`absolute top-[2px] w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform ${
                    deviceTest[key] ? "translate-x-[20px]" : "translate-x-[2px]"
                  }`}
                />
              </button>
            </label>
          ))}

          {/* AI Mode toggle (Mock vs Live) */}
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <span className="text-[12px] text-[#49454F] block" style={{ fontWeight: 500 }}>
                AI Mode
              </span>
              <span className="text-[9px] text-[#9E9E9E]" style={{ fontWeight: 400 }}>
                {aiModeLive ? "Live — calls Claude API" : "Mock — returns sample data"}
              </span>
            </div>
            <button
              onClick={() => {
                const next = !aiModeLive;
                setAiModeLive(next);
                configureOpus({
                  useMock: !next,
                  proxyUrl: "https://woadmikcidskdtnmdhmo.supabase.co/functions/v1/quick-function",
                  proxyToken: "sb_publishable_TbbMBmyFOXYnB30CODmj9Q_9xlAAfcQ",
                });
              }}
              className={`w-10 h-[22px] rounded-full transition-colors relative cursor-pointer ${
                aiModeLive ? "bg-[#7B1FA2]" : "bg-[#CAC4D0]"
              }`}
            >
              <div
                className={`absolute top-[2px] w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-transform ${
                  aiModeLive ? "translate-x-[20px]" : "translate-x-[2px]"
                }`}
              />
            </button>
          </label>
        </div>
      </div>

      {/* ---- Measurements ---- */}
      {isMeasuring && (
        <div className="border-b border-[#F0F0F0]">
          <div className="px-4 py-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#D32F2F]" />
            <span className="text-[13px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>
              Measurements
            </span>
            {measurements.length > 0 && (
              <span
                className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-[#FFEBEE] text-[#D32F2F]"
                style={{ fontWeight: 700 }}
              >
                {measurements.length}
              </span>
            )}
          </div>
          <MeasureToolPanel
            measurements={measurements}
            onRemove={onRemoveMeasurement}
            onClearAll={onClearAllMeasurements}
            hoveredId={hoveredMeasureId}
            onHover={onHoverMeasure}
          />
        </div>
      )}
    </aside>
  );
}