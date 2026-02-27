import type { ToleranceSource } from "../context/ProjectContext";

const sourceLabels: Record<ToleranceSource, string> = {
  project: "Project Default",
  feature: "Feature Override",
  device: "Device Override",
};

const sourceColors: Record<ToleranceSource, string> = {
  project: "#2962FF",
  feature: "#7C4DFF",
  device: "#00BFA5",
};

interface ToleranceEditorProps {
  value: number;
  onChange: (value: number) => void;
  source?: ToleranceSource;
  /** Show the "inherited from" indicator */
  showSource?: boolean;
  /** Allow clearing override (revert to parent) */
  isOverride?: boolean;
  onClearOverride?: () => void;
  compact?: boolean;
}

export function ToleranceEditor({
  value,
  onChange,
  source,
  showSource = false,
  isOverride = false,
  onClearOverride,
  compact = false,
}: ToleranceEditorProps) {
  const toleranceDescriptions = [
    "Pixel-perfect",
    "Ultra-strict",
    "Very strict",
    "Strict",
    "Balanced",
    "Relaxed",
    "Very relaxed",
    "Maximum tolerance",
  ];

  if (compact) {
    return (
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={0}
          max={7}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 h-1 accent-[#2962FF] cursor-pointer"
        />
        <span
          className="text-[12px] px-2 py-0.5 rounded-[6px] bg-[#E8EAF6] text-[#2962FF] min-w-[36px] text-center"
          style={{ fontWeight: 600 }}
        >
          {value}px
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Header with source indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[13px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>
            Tolerance
          </span>
          {showSource && source && (
            <span
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{
                fontWeight: 600,
                color: sourceColors[source],
                backgroundColor: `${sourceColors[source]}12`,
              }}
            >
              {sourceLabels[source]}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isOverride && onClearOverride && (
            <button
              onClick={onClearOverride}
              className="text-[10px] text-[#79747E] hover:text-[#D32F2F] transition-colors cursor-pointer px-1.5 py-0.5 rounded-[4px] hover:bg-red-50"
              style={{ fontWeight: 500 }}
            >
              Reset to inherited
            </button>
          )}
          <span
            className="text-[13px] px-2.5 py-0.5 rounded-[8px] bg-[#E8EAF6] text-[#2962FF]"
            style={{ fontWeight: 700 }}
          >
            {value}px
          </span>
        </div>
      </div>

      {/* Slider */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-[#9E9E9E] w-5">0px</span>
          <div className="flex-1 relative">
            <input
              type="range"
              min={0}
              max={7}
              step={1}
              value={value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="w-full h-1.5 accent-[#2962FF] cursor-pointer"
            />
            {/* Tick marks */}
            <div className="flex justify-between px-[2px] mt-0.5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: i <= value ? "#2962FF" : "#E0E0E0" }}
                />
              ))}
            </div>
          </div>
          <span className="text-[10px] text-[#9E9E9E] w-5">7px</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-[#BDBDBD]">Strict</span>
          <span className="text-[10px] text-[#79747E] italic" style={{ fontWeight: 400 }}>
            {toleranceDescriptions[value]}
          </span>
          <span className="text-[9px] text-[#BDBDBD]">Soft</span>
        </div>
      </div>
    </div>
  );
}

/* ---- Badge for top navigation ---- */
interface ToleranceBadgeProps {
  value: number;
  source: ToleranceSource;
  onClick?: () => void;
}

export function ToleranceBadge({ value, source, onClick }: ToleranceBadgeProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] border border-[#E0E0E0] bg-white hover:bg-[#FAFAFA] transition-all cursor-pointer"
      title={`Effective tolerance: ${value}px (${sourceLabels[source]})`}
    >
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: sourceColors[source] }}
      />
      <span className="text-[11px] text-[#49454F]" style={{ fontWeight: 500 }}>
        {value}px
      </span>
      <span
        className="text-[9px] px-1.5 py-0.5 rounded-[4px]"
        style={{
          fontWeight: 600,
          color: sourceColors[source],
          backgroundColor: `${sourceColors[source]}10`,
        }}
      >
        {source === "project" ? "Proj" : source === "feature" ? "Feat" : "Dev"}
      </span>
    </button>
  );
}

/* ---- Modal for "Apply to all?" ---- */
interface ToleranceApplyModalProps {
  isOpen: boolean;
  newValue: number;
  onApplyAll: () => void;
  onKeepExisting: () => void;
  onCancel: () => void;
}

export function ToleranceApplyModal({
  isOpen,
  newValue,
  onApplyAll,
  onKeepExisting,
  onCancel,
}: ToleranceApplyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div
        className="bg-white rounded-[20px] w-full max-w-[420px] overflow-hidden"
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.15)" }}
      >
        <div className="p-6">
          <h3 className="text-[18px] text-[#1C1B1F] mb-2" style={{ fontWeight: 600 }}>
            Apply new tolerance?
          </h3>
          <p className="text-[14px] text-[#79747E] mb-1" style={{ fontWeight: 400, lineHeight: 1.5 }}>
            You changed the project tolerance to <strong className="text-[#2962FF]">{newValue}px</strong>.
          </p>
          <p className="text-[13px] text-[#79747E]" style={{ fontWeight: 400, lineHeight: 1.5 }}>
            Do you want to apply this to all existing features and device tests, or keep their current overrides?
          </p>
        </div>

        <div className="px-6 pb-6 flex flex-col gap-2">
          <button
            onClick={onApplyAll}
            className="w-full py-3 rounded-[12px] bg-[#2962FF] text-white text-[14px] hover:shadow-lg hover:shadow-[#2962FF]/20 transition-all cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            Apply to all — remove overrides
          </button>
          <button
            onClick={onKeepExisting}
            className="w-full py-3 rounded-[12px] bg-[#F5F5F5] text-[#49454F] text-[14px] hover:bg-[#EEEEEE] transition-all cursor-pointer"
            style={{ fontWeight: 500 }}
          >
            Keep existing overrides
          </button>
          <button
            onClick={onCancel}
            className="w-full py-2 text-[13px] text-[#9E9E9E] hover:text-[#79747E] transition-colors cursor-pointer"
            style={{ fontWeight: 400 }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
