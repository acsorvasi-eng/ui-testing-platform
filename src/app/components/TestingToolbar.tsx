import { useState, useCallback } from "react";
import {
  Eye, Grid3X3, Move,
  ZoomIn, ZoomOut, Maximize2, RotateCcw,
  Cpu, Sparkles, LayoutGrid,
} from "lucide-react";
import type { ViewMode, AnalysisPhase, OverlayTransform, ScanEngine } from "../types";
import { MAX_SCALE } from "../types";

interface TestingToolbarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  phase: AnalysisPhase;
  onSetPhase: (phase: AnalysisPhase) => void;
  hasScreenshot: boolean;
  hasMaster: boolean;

  // Overlay opacity
  overlayOpacity: number;
  onOverlayOpacityChange: (v: number) => void;

  // Zoom
  currentTransform: OverlayTransform;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onAutoFit: () => void;
  onResetTransform: () => void;
  onApplyZoom: (scale: number) => void;

  // Selection clear
  onClearSelection: () => void;
  onCancelMeasure: () => void;

  // Scan engine
  scanEngine: ScanEngine;
  onScanEngineChange: (engine: ScanEngine) => void;
}

export function TestingToolbar({
  viewMode,
  onViewModeChange,
  phase,
  onSetPhase,
  hasScreenshot,
  hasMaster,
  overlayOpacity,
  onOverlayOpacityChange,
  currentTransform,
  onZoomIn,
  onZoomOut,
  onAutoFit,
  onResetTransform,
  onApplyZoom,
  onClearSelection,
  onCancelMeasure,
  scanEngine,
  onScanEngineChange,
}: TestingToolbarProps) {
  const [zoomInputValue, setZoomInputValue] = useState("");
  const [zoomInputFocused, setZoomInputFocused] = useState(false);

  const handleZoomInputCommit = useCallback(() => {
    const val = parseInt(zoomInputValue, 10);
    if (!isNaN(val) && val >= 1 && val <= MAX_SCALE * 100) onApplyZoom(val / 100);
    setZoomInputFocused(false);
  }, [zoomInputValue, onApplyZoom]);

  if (!hasMaster) return null;

  return (
    <div className="bg-white border-b border-[#E0E0E0]/60 px-4 py-2 flex items-center gap-2.5 flex-wrap">
      {/* View mode */}
      <div className="flex gap-0.5 bg-[#F5F5F5] rounded-[10px] p-0.5">
        {([
          { mode: "overlay" as ViewMode, label: "Overlay", icon: <Eye className="w-3.5 h-3.5" /> },
          { mode: "sideBySide" as ViewMode, label: "Side by Side", icon: <Grid3X3 className="w-3.5 h-3.5" /> },
        ] as const).map(({ mode, label, icon }) => (
          <button
            key={mode}
            onClick={() => onViewModeChange(mode)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12px] transition-all cursor-pointer ${
              viewMode === mode
                ? "bg-white text-[#1C1B1F] shadow-sm"
                : "text-[#79747E] hover:text-[#49454F]"
            }`}
            style={{ fontWeight: viewMode === mode ? 600 : 400 }}
          >
            {icon} {label}
          </button>
        ))}
      </div>

      {/* Mode buttons */}
      {viewMode === "overlay" && hasScreenshot && (
        <>
          <div className="w-px h-5 bg-[#E0E0E0]" />
          <button
            onClick={() => { onSetPhase("adjust"); onClearSelection(); onCancelMeasure(); }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] text-[12px] border transition-all cursor-pointer ${
              phase === "adjust"
                ? "bg-[#2962FF] text-white border-[#2962FF] shadow-md"
                : "border-[#E0E0E0] text-[#79747E] hover:bg-[#FAFAFA]"
            }`}
            style={{ fontWeight: phase === "adjust" ? 600 : 400 }}
          >
            <Move className="w-3.5 h-3.5" /> Adjust
          </button>
        </>
      )}

      {/* Scan engine selector */}
      {hasScreenshot && (
        <>
          <div className="w-px h-5 bg-[#E0E0E0]" />
          <div className="flex gap-0.5 bg-[#F5F5F5] rounded-[10px] p-0.5">
            <button
              onClick={() => onScanEngineChange("pixel")}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[8px] text-[11px] transition-all cursor-pointer ${
                scanEngine === "pixel"
                  ? "bg-[#1565C0] text-white shadow-sm"
                  : "text-[#79747E] hover:text-[#49454F]"
              }`}
              style={{ fontWeight: scanEngine === "pixel" ? 600 : 400 }}
              title="Pixel-by-pixel comparison"
            >
              <Cpu className="w-3 h-3" /> Pixel
            </button>
            <button
              onClick={() => onScanEngineChange("ai")}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[8px] text-[11px] transition-all cursor-pointer ${
                scanEngine === "ai"
                  ? "bg-[#7B1FA2] text-white shadow-sm"
                  : "text-[#79747E] hover:text-[#49454F]"
              }`}
              style={{ fontWeight: scanEngine === "ai" ? 600 : 400 }}
              title="AI-powered visual QA"
            >
              <Sparkles className="w-3 h-3" /> AI
            </button>
            <button
              onClick={() => onScanEngineChange("structural")}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-[8px] text-[11px] transition-all cursor-pointer ${
                scanEngine === "structural"
                  ? "bg-[#0D9488] text-white shadow-sm"
                  : "text-[#79747E] hover:text-[#49454F]"
              }`}
              style={{ fontWeight: scanEngine === "structural" ? 600 : 400 }}
              title="Device-independent layout validation"
            >
              <LayoutGrid className="w-3 h-3" /> Structural
            </button>
          </div>
        </>
      )}

      {/* Zoom controls */}
      {viewMode === "overlay" && hasScreenshot && (
        <div className="flex items-center gap-1 border-l border-[#E0E0E0] pl-2.5">
          <button
            onClick={onZoomOut}
            className="p-1.5 rounded-[6px] text-[#79747E] hover:bg-[#F5F5F5] transition-all cursor-pointer"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <input
            type="text"
            value={
              zoomInputFocused
                ? zoomInputValue
                : `${Math.round(currentTransform.scale * 100)}%`
            }
            onChange={(e) => setZoomInputValue(e.target.value.replace(/[^0-9]/g, ""))}
            onFocus={() => {
              setZoomInputFocused(true);
              setZoomInputValue(Math.round(currentTransform.scale * 100).toString());
            }}
            onBlur={handleZoomInputCommit}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleZoomInputCommit();
              if (e.key === "Escape") setZoomInputFocused(false);
            }}
            className="w-[56px] h-[28px] text-center text-[11px] text-[#49454F] bg-[#F5F5F5] rounded-[6px] border border-transparent focus:border-[#2962FF] focus:ring-1 focus:ring-[#2962FF]/20 outline-none transition-all"
            style={{ fontWeight: 600 }}
          />
          <button
            onClick={onZoomIn}
            className="p-1.5 rounded-[6px] text-[#79747E] hover:bg-[#F5F5F5] transition-all cursor-pointer"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <div className="w-px h-4 bg-[#E0E0E0] mx-0.5" />
          <button
            onClick={onAutoFit}
            className="p-1.5 rounded-[6px] text-[#79747E] hover:bg-[#F5F5F5] transition-all cursor-pointer"
            title="Auto fit"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onResetTransform}
            className="p-1.5 rounded-[6px] text-[#79747E] hover:bg-[#F5F5F5] transition-all cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Opacity */}
      {viewMode === "overlay" && (
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-[11px] text-[#9E9E9E]" style={{ fontWeight: 500 }}>
            Opacity
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={overlayOpacity}
            onChange={(e) => onOverlayOpacityChange(Number(e.target.value))}
            className="w-[100px] h-1 accent-[#2962FF] cursor-pointer"
          />
          <span className="text-[11px] text-[#2962FF] w-9 text-right" style={{ fontWeight: 600 }}>
            {overlayOpacity}%
          </span>
        </div>
      )}
    </div>
  );
}