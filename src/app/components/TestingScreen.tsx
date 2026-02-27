import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft, Layers, Grid3X3, Download,
  X, AlertTriangle, CheckCircle2, Info, Flame, Move,
  RotateCcw, MousePointerClick, Play, Crosshair,
  Scan, Target, Hash, Sparkles, Cpu, ChevronRight,
  Ruler, LayoutGrid,
} from "lucide-react";
import type {
  Project, Feature, DeviceTest, ComparisonIssue, EffectiveTolerance,
  SelectionRect, TestedRegion, ViewMode,
  RegionRect, MeasurePoint, IssueComment, DevicePreset,
} from "../types";
import {
  LONG_PRESS_MS, DIM_MATCH_THRESHOLD, GRID_CELL_SIZE, SEVERITY_COLORS,
  DEVICE_PRESETS, autoDetectDevice,
} from "../types";
import { compareImages, compareRegion, quickSanityCheck } from "../engine/PixelEngine";
import { ToleranceBadge } from "./ToleranceEditor";
import { IssueSeverityMarker } from "./IssueSeverityMarker";
import { MeasureToolOverlay, useMeasureTool } from "./MeasureTool";
import {
  runDetailedScan, runFullAnalysis,
  dataUrlToBase64,
} from "../engine/OpusQA";
import { validateDesign } from "../engine/DesignValidationEngine";
import type { ValidationReport } from "../engine/DesignValidationEngine";
import { TestingSidebar } from "./TestingSidebar";
import { TestingToolbar } from "./TestingToolbar";
import { IssuesPanel } from "./IssuesPanel";
import { useImageTransform } from "../hooks/useImageTransform";
import { useAnalysisReducer } from "../hooks/useAnalysisReducer";

/* ================================================================== */
/* Types                                                                */
/* ================================================================== */
interface TestingScreenProps {
  project: Project;
  feature: Feature;
  deviceTest: DeviceTest;
  effectiveTolerance: EffectiveTolerance;
  onBack: () => void;
  onUpdateTest: (updates: Partial<DeviceTest>) => void;
}

/* ================================================================== */
/* Constants                                                            */
/* ================================================================== */
const severityColors = SEVERITY_COLORS;

const severityConfig: Record<string, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  perfect: { label: "Perfect Match", color: "#2E7D32", bg: "#E8F5E9", icon: <CheckCircle2 className="w-5 h-5" /> },
  minor: { label: "Minor Variance", color: "#ED6C02", bg: "#FFF3E0", icon: <Info className="w-5 h-5" /> },
  "layout-shift": { label: "Layout Shift", color: "#E65100", bg: "#FFF3E0", icon: <AlertTriangle className="w-5 h-5" /> },
  structural: { label: "Structural Issue", color: "#D32F2F", bg: "#FFEBEE", icon: <AlertTriangle className="w-5 h-5" /> },
  "high-severity": { label: "High Severity", color: "#B71C1C", bg: "#FFCDD2", icon: <Flame className="w-5 h-5" /> },
};

function nextRegionId() { return `tr-${crypto.randomUUID()}`; }

/* ================================================================== */
/* Main component                                                       */
/* ================================================================== */
export function TestingScreen({
  project, feature, deviceTest, effectiveTolerance, onBack, onUpdateTest,
}: TestingScreenProps) {

  /* ---- Core view state ---- */
  const [viewMode, setViewMode] = useState<ViewMode>("overlay");
  const [overlayOpacity, setOverlayOpacity] = useState(100);
  const [hoveredIssueId, setHoveredIssueId] = useState<string | null>(null);
  const [resolvedIssues, setResolvedIssues] = useState<Set<string>>(new Set());

  /* ---- Active screenshot ---- */
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  /* ---- Transforms (extracted hook) ---- */
  const imgTransform = useImageTransform(activeScreenshotIdx);
  const {
    currentTransform, setCurrentTransform,
    isDragging, setIsDragging, dragStart,
    isCornerResizing, shiftHeld, setShiftHeld, cornerRef,
  } = imgTransform;

  /* ---- Analysis state (useReducer) ---- */
  const analysis = useAnalysisReducer();
  const {
    phase, setPhase,
    isComparing, setIsComparing,
    useRegionMode, setUseRegionMode,
    sanityBlocked, setSanityBlocked,
    selectionRect, setSelectionRect,
    isDrawingSelection, setIsDrawingSelection,
    anchorPoint, setAnchorPoint,
    gridScanProgress, setGridScanProgress,
    scanEngine, setScanEngine,
    aiIssues, setAiIssues,
    lastScanEngine, setLastScanEngine,
    structuralMeta, setStructuralMeta,
  } = analysis;

  /* ---- Long-press timer (drag-specific, not in hook) ---- */
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);



  /* ---- Selection draw start ref ---- */
  const selDrawStart = useRef({ x: 0, y: 0 });

  /* ---- Tested regions (baked results) ---- */
  const [testedRegions, setTestedRegions] = useState<TestedRegion[]>([]);
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  /* ---- Issue comment threads ---- */
  const [selectedIssueId, setSelectedIssueId] = useState<string | null>(null);
  const [issueComments, setIssueComments] = useState<Record<string, IssueComment[]>>({});
  const handleAddComment = useCallback((issueId: string, text: string) => {
    const newComment: IssueComment = {
      id: crypto.randomUUID(),
      author: "You",
      avatarColor: "#F9A825",
      text,
      timestamp: "Just now",
    };
    setIssueComments((prev) => ({
      ...prev,
      [issueId]: [...(prev[issueId] ?? []), newComment],
    }));
  }, []);

  /* ---- Measure tool ---- */
  const measureTool = useMeasureTool();

  /* ---- Grid scan refs ---- */
  const gridScanAbort = useRef(false);
  const gridScanRef = useRef<(xPct: number, yPct: number) => void>(() => {});
  const aiScanAbort = useRef(false);

  /* ---- (Zoom input now managed by TestingToolbar) ---- */

  /* ---- Dimensions ---- */
  const [masterDims, setMasterDims] = useState({ w: 0, h: 0 });
  const [ssDims, setSsDims] = useState<Record<number, { w: number; h: number }>>({});
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  const overlayAreaRef = useRef<HTMLDivElement>(null);

  /* ---- Device preset (Smart Scale) ---- */
  const [screenshotPreset, setScreenshotPreset] = useState<DevicePreset>(DEVICE_PRESETS[0]);
  const [manualDims, setManualDims] = useState({ w: 0, h: 0 });

  /** Auto-detect device from active screenshot dimensions (no category filter for broader matching) */
  const autoDetectedPreset = useMemo(() => {
    const sd = ssDims[activeScreenshotIdx];
    if (!sd || sd.w === 0) return null;
    // First try with deviceType filter
    let result = autoDetectDevice(sd.w, sd.h, deviceTest.deviceType);
    if (!result) {
      // Fallback: try without deviceType filter for cross-category matches
      result = autoDetectDevice(sd.w, sd.h);
    }
    return result;
  }, [ssDims, activeScreenshotIdx, deviceTest.deviceType]);

  /* ---- 9-zone scan state ---- */
  const zoneScanAbort = useRef(false);
  const zoneScanTriggered = useRef(false);

  /* ---- Preset change handler (ISSUE 3: auto-run comparison on manual selection) ---- */
  const presetJustChanged = useRef(false);
  const handlePresetChange = useCallback((preset: DevicePreset) => {
    setScreenshotPreset(preset);
    console.log(`[PresetChange] Selected: ${preset.label} (${preset.id})`);
    // Signal that the user manually changed the preset — will trigger comparison in useEffect below
    if (preset.id !== "auto" && preset.id !== "manual") {
      presetJustChanged.current = true;
    }
  }, []);

  /* ---- Derived ---- */
  const activeReport = deviceTest.reports[activeScreenshotIdx] ?? null;
  const activeSSUrl = deviceTest.screenshotUrls[activeScreenshotIdx] ?? null;
  const activeSsDim = ssDims[activeScreenshotIdx];

  const testLabel = deviceTest.name && deviceTest.name !== "New Test"
    ? deviceTest.name
    : deviceTest.deviceType.charAt(0).toUpperCase() + deviceTest.deviceType.slice(1);

  /** Are dimensions compatible for full analysis? */
  const dimensionsMatch = useMemo(() => {
    if (!activeSsDim || masterDims.w === 0) return false;
    const wRatio = Math.abs(1 - activeSsDim.w / masterDims.w);
    const hRatio = Math.abs(1 - activeSsDim.h / masterDims.h);
    return wRatio <= DIM_MATCH_THRESHOLD && hRatio <= DIM_MATCH_THRESHOLD;
  }, [masterDims, activeSsDim]);

  const canCompare = !!deviceTest.masterScreenUrl && deviceTest.screenshotUrls.length > 0;

  /* ---- (Transform setter now provided by useImageTransform hook) ---- */

  /* ---- Auto-detect analysis phase when images change ---- */
  useEffect(() => {
    if (!deviceTest.masterScreenUrl || !activeSSUrl) {
      setPhase("idle");
      setSanityBlocked(null);
      return;
    }
    if (masterDims.w === 0 || !activeSsDim) return; // still loading
    // If we already have results, show them
    if (activeReport && phase !== "adjust" && phase !== "select" && phase !== "anchor" && phase !== "grid-scan") {
      setPhase("results");
      return;
    }
    if (phase === "adjust" || phase === "select" || phase === "comparing" || phase === "results" || phase === "anchor" || phase === "grid-scan") return;
    // Determine match
    setSanityBlocked(null);
    if (dimensionsMatch) {
      setPhase("ready");
    } else {
      setPhase("mismatch");
    }
  }, [deviceTest.masterScreenUrl, activeSSUrl, masterDims, activeSsDim, dimensionsMatch, activeReport, phase]);

  /* ---- Track container size ---- */
  useEffect(() => {
    const el = overlayAreaRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerSize({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* ---- Track Shift key for corner resize in any phase ---- */
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Shift") setShiftHeld(true);
      if (e.key === "Escape") {
        setSelectedIssueId(null);
        if (measureTool.isMeasuring) {
          measureTool.cancelMeasure();
          measureTool.setIsMeasuring(false);
        }
        if (phase === "select") {
          setSelectionRect(null);
          setIsDrawingSelection(false);
          setPhase(activeReport || testedRegions.length > 0 ? "results" : dimensionsMatch ? "ready" : "mismatch");
        }
        if (phase === "adjust") {
          setPhase(activeReport || testedRegions.length > 0 ? "results" : dimensionsMatch ? "ready" : "mismatch");
        }
      }
    };
    const up = (e: KeyboardEvent) => { if (e.key === "Shift") setShiftHeld(false); };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    // Also reset on blur (user switches tab while Shift held)
    const blur = () => setShiftHeld(false);
    window.addEventListener("blur", blur);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); window.removeEventListener("blur", blur); };
  }, [phase, activeReport, testedRegions.length, dimensionsMatch, measureTool]);

  /* ---- (Zoom input sync now in TestingToolbar) ---- */

  /* ---- File handling ---- */
  const handleFile = useCallback((file: File, target: "master" | "screenshot") => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const url = e.target?.result as string;
      if (target === "master") {
        onUpdateTest({ masterScreenUrl: url });
        setPhase("idle");
      } else {
        onUpdateTest({ screenshotUrls: [...deviceTest.screenshotUrls, url] });
        setActiveScreenshotIdx(deviceTest.screenshotUrls.length);
        setPhase("idle");
      }
    };
    reader.readAsDataURL(file);
  }, [deviceTest.screenshotUrls, onUpdateTest]);

  const handleDrop = useCallback((e: React.DragEvent, target: "master" | "screenshot") => {
    e.preventDefault();
    if (target === "screenshot") {
      Array.from(e.dataTransfer.files).filter((f) => f.type.startsWith("image/")).forEach((f) => handleFile(f, "screenshot"));
    } else {
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file, "master");
    }
  }, [handleFile]);

  const removeScreenshot = useCallback((idx: number) => {
    onUpdateTest({ screenshotUrls: deviceTest.screenshotUrls.filter((_, i) => i !== idx) });
    if (activeScreenshotIdx >= deviceTest.screenshotUrls.length - 1) {
      setActiveScreenshotIdx(Math.max(0, deviceTest.screenshotUrls.length - 2));
    }
    setPhase("idle");
  }, [deviceTest.screenshotUrls, onUpdateTest, activeScreenshotIdx]);

  const handleMasterLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget; if (!img) return;
    const w = img.naturalWidth; const h = img.naturalHeight;
    if (w > 0 && h > 0) setMasterDims({ w, h });
  }, []);

  const handleSSLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>, idx: number) => {
    const img = e.currentTarget; if (!img) return;
    const w = img.naturalWidth; const h = img.naturalHeight;
    if (w > 0 && h > 0) setSsDims((prev) => ({ ...prev, [idx]: { w, h } }));
  }, []);

  /* ---- Pointer events: drag (adjust mode) or selection drawing ---- */
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    // Measure tool mode
    if (measureTool.isMeasuring && masterDims.w > 0 && masterDims.h > 0) {
      const container = overlayAreaRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const pxX = ((e.clientX - rect.left) / rect.width) * masterDims.w;
      const pxY = ((e.clientY - rect.top) / rect.height) * masterDims.h;
      const pt: MeasurePoint = { x: pxX, y: pxY };
      if (!measureTool.activeMeasure) {
        measureTool.startMeasure(pt);
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      }
      return;
    }

    // Anchor placement — click to set anchor point (user then chooses next step)
    if (phase === "anchor") {
      const container = overlayAreaRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;
      setAnchorPoint({ xPct, yPct });
      return;
    }

    if (phase === "select") {
      // Start drawing selection rectangle
      const container = overlayAreaRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      selDrawStart.current = { x: px, y: py };
      setSelectionRect({ x1: px, y1: py, x2: px, y2: py });
      setIsDrawingSelection(true);
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      return;
    }

    if (phase === "adjust") {
      e.preventDefault();
      setIsDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY, tx: currentTransform.x, ty: currentTransform.y };
      return;
    }

    // Long press to enter adjust mode from ready/mismatch
    if (phase === "ready" || phase === "mismatch" || phase === "results") {
      longPressTimer.current = setTimeout(() => setPhase("adjust"), LONG_PRESS_MS);
    }
  }, [phase, currentTransform, measureTool.isMeasuring, measureTool.activeMeasure, masterDims.w, masterDims.h]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    // Measure tool drag
    if (measureTool.isMeasuring && measureTool.activeMeasure && masterDims.w > 0) {
      const container = overlayAreaRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const pxX = ((e.clientX - rect.left) / rect.width) * masterDims.w;
      const pxY = ((e.clientY - rect.top) / rect.height) * masterDims.h;
      measureTool.updateMeasure({ x: pxX, y: pxY });
      return;
    }

    if (isDrawingSelection && phase === "select") {
      const container = overlayAreaRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const px = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      const py = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
      setSelectionRect((prev) => prev ? { ...prev, x2: px, y2: py } : null);
      return;
    }
    if (isDragging && phase === "adjust") {
      setCurrentTransform({
        ...currentTransform,
        x: dragStart.current.tx + (e.clientX - dragStart.current.x),
        y: dragStart.current.ty + (e.clientY - dragStart.current.y),
      });
    }
  }, [isDrawingSelection, isDragging, phase, currentTransform, setCurrentTransform, measureTool.isMeasuring, measureTool.activeMeasure, masterDims.w, masterDims.h]);

  const handlePointerUp = useCallback((e?: React.PointerEvent) => {
    if (longPressTimer.current) { clearTimeout(longPressTimer.current); longPressTimer.current = null; }
    setIsDragging(false);
    if (isDrawingSelection) setIsDrawingSelection(false);

    // Finish measure
    if (measureTool.isMeasuring && measureTool.activeMeasure && masterDims.w > 0 && e) {
      const container = overlayAreaRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const pxX = ((e.clientX - rect.left) / rect.width) * masterDims.w;
        const pxY = ((e.clientY - rect.top) / rect.height) * masterDims.h;
        measureTool.finishMeasure({ x: pxX, y: pxY });
      }
    }
  }, [isDrawingSelection, measureTool]);

  /* ---- Delegated to useImageTransform hook ---- */
  const handleCornerDown = useCallback(
    (e: React.PointerEvent, corner: string) =>
      imgTransform.handleCornerDown(e, corner, overlayAreaRef.current, activeSsDim),
    [imgTransform.handleCornerDown, activeSsDim]
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent) =>
      imgTransform.handleWheel(e, phase === "adjust" || phase === "select"),
    [imgTransform.handleWheel, phase]
  );

  const applyZoom = useCallback(
    (newScale: number) => imgTransform.applyZoom(newScale, overlayAreaRef.current),
    [imgTransform.applyZoom]
  );
  const zoomIn = useCallback(() => imgTransform.zoomIn(overlayAreaRef.current), [imgTransform.zoomIn]);
  const zoomOut = useCallback(() => imgTransform.zoomOut(overlayAreaRef.current), [imgTransform.zoomOut]);
  const resetTransform = imgTransform.resetTransform;
  const autoFit = useCallback(
    () => imgTransform.autoFit(masterDims, activeSsDim),
    [imgTransform.autoFit, masterDims, activeSsDim]
  );

  /* ---- Full comparison (transform-aware) ---- */
  const handleFullCompare = useCallback(async () => {
    if (!deviceTest.masterScreenUrl || !activeSSUrl) return;
    setPhase("comparing"); setIsComparing(true); setSanityBlocked(null);
    setLastScanEngine("pixel"); setStructuralMeta(null);
    try {
      // Quick sanity check — block if images are completely unrelated
      const sanity = await quickSanityCheck(deviceTest.masterScreenUrl, activeSSUrl);
      if (!sanity.similar) {
        setSanityBlocked({ matchPct: sanity.matchPct });
        setPhase(dimensionsMatch ? "ready" : "mismatch");
        setIsComparing(false);
        return;
      }

      const isIdentity = Math.abs(currentTransform.scale - 1) < 0.001
        && Math.abs(currentTransform.x) < 1
        && Math.abs(currentTransform.y) < 1;

      const compareOpts = {
        tolerance: effectiveTolerance.value,
        ignoreColor: deviceTest.ignoreColor,
        ignoreFontRendering: deviceTest.ignoreFontRendering,
        structuralOnly: deviceTest.structuralOnly,
        ignoreBackgroundImg: deviceTest.ignoreBackgroundImg,
        devicePreset: screenshotPreset.id !== "auto" ? screenshotPreset : undefined,
        manualDims: screenshotPreset.id === "manual" ? manualDims : undefined,
      };

      let report;

      if (isIdentity || containerSize.w === 0 || !activeSsDim || masterDims.w === 0) {
        // Identity transform or missing dimensions — full-image comparison
        report = await compareImages(deviceTest.masterScreenUrl, activeSSUrl, compareOpts);
      } else {
        // Transform-aware: compare only the visible overlap region
        const cW = containerSize.w;
        const cH = containerSize.h;
        const ssDim = activeSsDim;
        const ssDisplayW = currentTransform.scale * cW;
        const ssDisplayH = (ssDim.h / ssDim.w) * ssDisplayW;

        const overlapLeft = Math.max(0, currentTransform.x);
        const overlapTop = Math.max(0, currentTransform.y);
        const overlapRight = Math.min(cW, currentTransform.x + ssDisplayW);
        const overlapBottom = Math.min(cH, currentTransform.y + ssDisplayH);

        if (overlapRight <= overlapLeft || overlapBottom <= overlapTop) {
          // No overlap — fall back to full comparison
          report = await compareImages(deviceTest.masterScreenUrl, activeSSUrl, compareOpts);
        } else {
          const masterRect: RegionRect = {
            x: (overlapLeft / cW) * masterDims.w,
            y: (overlapTop / cH) * masterDims.h,
            w: ((overlapRight - overlapLeft) / cW) * masterDims.w,
            h: ((overlapBottom - overlapTop) / cH) * masterDims.h,
          };
          const ssRect: RegionRect = {
            x: ((overlapLeft - currentTransform.x) / ssDisplayW) * ssDim.w,
            y: ((overlapTop - currentTransform.y) / ssDisplayH) * ssDim.h,
            w: ((overlapRight - overlapLeft) / ssDisplayW) * ssDim.w,
            h: ((overlapBottom - overlapTop) / ssDisplayH) * ssDim.h,
          };

          const regionReport = await compareRegion(
            deviceTest.masterScreenUrl, activeSSUrl,
            masterRect, ssRect, compareOpts,
          );

          // Offset issue coordinates to master-space absolute positions
          report = {
            ...regionReport,
            issues: regionReport.issues.map((issue) => ({
              ...issue,
              x: issue.x + Math.round(masterRect.x),
              y: issue.y + Math.round(masterRect.y),
            })),
          };
        }
      }

      const newReports = [...deviceTest.reports];
      newReports[activeScreenshotIdx] = report;
      const hasIssues = newReports.some((r) => r.severity !== "perfect");
      onUpdateTest({ reports: newReports, status: hasIssues ? "issues" : "pass" });
      setPhase("results");
    } catch (err) {
      console.error("Comparison failed:", err);
      setPhase(dimensionsMatch ? "ready" : "mismatch");
    } finally {
      setIsComparing(false);
    }
  }, [deviceTest, activeSSUrl, activeScreenshotIdx, effectiveTolerance, onUpdateTest, dimensionsMatch, currentTransform, containerSize, activeSsDim, masterDims, screenshotPreset, manualDims]);

  /* ---- Structural validation (DesignValidationEngine) ---- */
  const handleStructuralValidation = useCallback(async () => {
    if (!deviceTest.masterScreenUrl || !activeSSUrl) return;
    if (!activeSsDim || masterDims.w === 0) return;

    setPhase("comparing");
    setIsComparing(true);
    setSanityBlocked(null);
    setLastScanEngine("structural");
    setStructuralMeta(null);

    try {
      console.log("[Structural] Starting design validation...");
      const vReport: ValidationReport = await validateDesign(
        deviceTest.masterScreenUrl,
        activeSSUrl,
        masterDims,
        activeSsDim,
        {
          onProgress: (step, total, label) => {
            console.log(`[Structural] Step ${step}/${total}: ${label}`);
          },
        },
      );

      // --- Convert ValidationReport → ComparisonReport ---
      const overallPct = vReport.overallScore * 100;

      // Map element matches with significant deviation to ComparisonIssues
      // NOTE: ElementMatch doesn't expose actual element x/y coordinates,
      // only deviation scores. We spread markers in a grid so they're
      // at least visible and clickable until DVE is properly tested.
      const filteredElements = vReport.elements
        .filter((el) => el.deviationScore > 0.1);
      const cols = Math.max(1, Math.ceil(Math.sqrt(filteredElements.length)));
      const rows = Math.max(1, Math.ceil(filteredElements.length / cols));
      const cellW = masterDims.w / cols;
      const cellH = masterDims.h / rows;
      const issues: import("../types").ComparisonIssue[] = filteredElements
        .map((el, idx) => {
          const severity: "minor" | "moderate" | "major" | "critical" =
            el.missing ? "critical"
              : el.deviationScore > 0.5 ? "major"
              : el.deviationScore > 0.3 ? "moderate"
              : "minor";
          const row = Math.floor(idx / cols);
          const col = idx % cols;
          return {
            id: `structural-${idx}`,
            x: Math.round(col * cellW + cellW * 0.1),
            y: Math.round(row * cellH + cellH * 0.1),
            width: Math.round(cellW * 0.8),
            height: Math.round(cellH * 0.8),
            severity,
            description: el.missing
              ? `Missing: ${el.masterLabel} (${el.masterType})`
              : `${el.masterLabel}: position deviation ${(el.positionDeviation * 100).toFixed(1)}%, size deviation ${(el.sizeDeviation * 100).toFixed(1)}%${el.constraintErrors.length > 0 ? ` | ${el.constraintErrors[0]}` : ""}`,
            diffPercentage: el.deviationScore * 100,
          };
        });

      // Classify severity from layoutScore
      const layoutPct = vReport.layoutScore;
      const severity: import("../types").ComparisonReport["severity"] =
        layoutPct >= 0.95 ? "perfect"
          : layoutPct >= 0.85 ? "minor"
          : layoutPct >= 0.7 ? "layout-shift"
          : layoutPct >= 0.5 ? "structural"
          : "high-severity";

      const report: import("../types").ComparisonReport = {
        totalPixels: masterDims.w * masterDims.h,
        matchingPixels: Math.round(overallPct / 100 * masterDims.w * masterDims.h),
        diffPixels: vReport.missingCount + vReport.constraintErrors.length,
        matchPercentage: overallPct,
        severity,
        issues,
        diffImageData: "",  // structural mode doesn't produce diff images
        heatmapImageData: "",
        generatedAt: vReport.generatedAt,
      };

      // Store structural metadata for the results bar
      setStructuralMeta({
        layoutScore: vReport.layoutScore * 100,
        masterElementCount: vReport.masterElementCount,
        screenshotElementCount: vReport.screenshotElementCount,
        matchedCount: vReport.matchedCount,
        missingCount: vReport.missingCount,
        constraintErrorCount: vReport.constraintErrors.length,
      });

      const newReports = [...deviceTest.reports];
      newReports[activeScreenshotIdx] = report;
      const hasIssues = newReports.some((r) => r.severity !== "perfect");
      onUpdateTest({ reports: newReports, status: hasIssues ? "issues" : "pass" });
      setPhase("results");
    } catch (err) {
      console.error("[Structural] Validation failed:", err);
      setPhase(dimensionsMatch ? "ready" : "mismatch");
    } finally {
      setIsComparing(false);
    }
  }, [deviceTest, activeSSUrl, activeScreenshotIdx, masterDims, activeSsDim, onUpdateTest, dimensionsMatch, setPhase, setIsComparing, setSanityBlocked, setLastScanEngine, setStructuralMeta]);

  /* ---- Auto re-scan on tolerance change (300ms debounce) ---- */
  const toleranceAutoRef = useRef(effectiveTolerance.value);
  useEffect(() => {
    // Skip the initial mount — only trigger on actual changes
    if (toleranceAutoRef.current === effectiveTolerance.value) return;
    toleranceAutoRef.current = effectiveTolerance.value;

    // Only auto-re-run if we already have results, both images are loaded, and not mid-scan
    if (!activeReport) return;
    if (!deviceTest.masterScreenUrl || !activeSSUrl) return;
    if (isComparing) return;

    const timer = setTimeout(() => {
      handleFullCompare();
    }, 300);
    return () => clearTimeout(timer);
  }, [effectiveTolerance.value, activeReport, deviceTest.masterScreenUrl, activeSSUrl, isComparing, handleFullCompare]);

  /* ---- Auto-compare on manual preset selection (ISSUE 3) ---- */
  useEffect(() => {
    if (!presetJustChanged.current) return;
    presetJustChanged.current = false;

    if (!deviceTest.masterScreenUrl || !activeSSUrl) return;
    if (isComparing) return;

    console.log(`[PresetAutoCompare] Preset changed to ${screenshotPreset.label}, auto-running comparison`);
    const timer = setTimeout(() => {
      handleFullCompare();
    }, 150);
    return () => clearTimeout(timer);
  }, [screenshotPreset, deviceTest.masterScreenUrl, activeSSUrl, isComparing, handleFullCompare]);

  /* ---- Region comparison ---- */
  const handleRegionCompare = useCallback(async () => {
    if (!deviceTest.masterScreenUrl || !activeSSUrl || !selectionRect) return;
    if (masterDims.w === 0 || containerSize.w === 0) return;

    setPhase("comparing"); setIsComparing(true);
    try {
      // Convert selection rect from container % to master image pixels
      const sel = normalizeSelection(selectionRect);
      const masterRect: RegionRect = {
        x: (sel.x1 / 100) * masterDims.w,
        y: (sel.y1 / 100) * masterDims.h,
        w: ((sel.x2 - sel.x1) / 100) * masterDims.w,
        h: ((sel.y2 - sel.y1) / 100) * masterDims.h,
      };

      // Convert to screenshot image coordinates (accounting for transform)
      const ssDim = activeSsDim;
      if (!ssDim) return;
      const containerW = containerSize.w;
      const containerH = containerSize.h;
      // Screenshot overlay: left = transform.x, width = scale * containerW
      const ssDisplayW = currentTransform.scale * containerW;
      const ssDisplayH = (ssDim.h / ssDim.w) * ssDisplayW;
      // Selection in container px
      const selPxX1 = (sel.x1 / 100) * containerW;
      const selPxY1 = (sel.y1 / 100) * containerH;
      const selPxX2 = (sel.x2 / 100) * containerW;
      const selPxY2 = (sel.y2 / 100) * containerH;
      // Map to screenshot natural pixels
      const ssRect: RegionRect = {
        x: ((selPxX1 - currentTransform.x) / ssDisplayW) * ssDim.w,
        y: ((selPxY1 - currentTransform.y) / ssDisplayH) * ssDim.h,
        w: ((selPxX2 - selPxX1) / ssDisplayW) * ssDim.w,
        h: ((selPxY2 - selPxY1) / ssDisplayH) * ssDim.h,
      };

      const report = await compareRegion(deviceTest.masterScreenUrl, activeSSUrl, masterRect, ssRect, {
        tolerance: effectiveTolerance.value,
        ignoreColor: deviceTest.ignoreColor,
        ignoreFontRendering: deviceTest.ignoreFontRendering,
        structuralOnly: deviceTest.structuralOnly,
        ignoreBackgroundImg: deviceTest.ignoreBackgroundImg,
        devicePreset: screenshotPreset.id !== "auto" ? screenshotPreset : undefined,
        manualDims: screenshotPreset.id === "manual" ? manualDims : undefined,
      });

      // Save as a tested region
      const newRegion: TestedRegion = {
        id: nextRegionId(),
        masterRect,
        screenshotIdx: activeScreenshotIdx,
        transform: { ...currentTransform },
        report,
        selectionPct: { ...normalizeSelection(selectionRect) },
      };
      setTestedRegions((prev) => [...prev, newRegion]);
      setSelectionRect(null);
      setPhase("results");
    } catch (err) {
      console.error("Region comparison failed:", err);
      setPhase("select");
    } finally {
      setIsComparing(false);
    }
  }, [deviceTest, activeSSUrl, activeScreenshotIdx, selectionRect, masterDims, containerSize, currentTransform, activeSsDim, effectiveTolerance, onUpdateTest, screenshotPreset, manualDims]);

  /* ---- Grid Scan — auto-divide image into cells and test each ---- */
  const handleGridScan = useCallback(async (_anchorXPct: number, _anchorYPct: number) => {
    if (!deviceTest.masterScreenUrl || !activeSSUrl) return;
    if (masterDims.w === 0 || !activeSsDim || containerSize.w === 0) return;

    gridScanAbort.current = false;
    setPhase("grid-scan");

    const mW = masterDims.w;
    const mH = masterDims.h;
    const cols = Math.ceil(mW / GRID_CELL_SIZE);
    const rows = Math.ceil(mH / GRID_CELL_SIZE);
    const totalCells = cols * rows;

    setGridScanProgress({ current: 0, total: totalCells, found: 0, label: "Starting..." });

    const containerW = containerSize.w;
    const containerH = containerSize.h;
    const ssDim = activeSsDim;
    const ssDisplayW = currentTransform.scale * containerW;
    const ssDisplayH = (ssDim.h / ssDim.w) * ssDisplayW;

    const allNewRegions: TestedRegion[] = [];
    let issuesFound = 0;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (gridScanAbort.current) {
          setPhase("results");
          setGridScanProgress(null);
          return;
        }

        const cellIdx = row * cols + col;
        const cellLabel = `R${row + 1}C${col + 1}`;
        const cellX = col * GRID_CELL_SIZE;
        const cellY = row * GRID_CELL_SIZE;
        const cellW = Math.min(GRID_CELL_SIZE, mW - cellX);
        const cellH = Math.min(GRID_CELL_SIZE, mH - cellY);

        if (cellW < 4 || cellH < 4) continue;

        const masterRect: RegionRect = { x: cellX, y: cellY, w: cellW, h: cellH };

        // Map master cell → container px → screenshot px
        const cellContainerX1 = (cellX / mW) * containerW;
        const cellContainerY1 = (cellY / mH) * containerH;
        const cellContainerX2 = ((cellX + cellW) / mW) * containerW;
        const cellContainerY2 = ((cellY + cellH) / mH) * containerH;

        const ssRect: RegionRect = {
          x: ((cellContainerX1 - currentTransform.x) / ssDisplayW) * ssDim.w,
          y: ((cellContainerY1 - currentTransform.y) / ssDisplayH) * ssDim.h,
          w: ((cellContainerX2 - cellContainerX1) / ssDisplayW) * ssDim.w,
          h: ((cellContainerY2 - cellContainerY1) / ssDisplayH) * ssDim.h,
        };

        // Skip cells that fall entirely outside the screenshot
        if (ssRect.x + ssRect.w < 0 || ssRect.y + ssRect.h < 0 ||
            ssRect.x > ssDim.w || ssRect.y > ssDim.h) {
          setGridScanProgress({ current: cellIdx + 1, total: totalCells, found: issuesFound, label: cellLabel });
          continue;
        }

        // Clamp to screenshot bounds
        const clampedSsRect: RegionRect = {
          x: Math.max(0, ssRect.x),
          y: Math.max(0, ssRect.y),
          w: Math.min(ssRect.w, ssDim.w - Math.max(0, ssRect.x)),
          h: Math.min(ssRect.h, ssDim.h - Math.max(0, ssRect.y)),
        };

        if (clampedSsRect.w < 4 || clampedSsRect.h < 4) {
          setGridScanProgress({ current: cellIdx + 1, total: totalCells, found: issuesFound, label: cellLabel });
          continue;
        }

        try {
          const report = await compareRegion(
            deviceTest.masterScreenUrl, activeSSUrl,
            masterRect, clampedSsRect,
            {
              tolerance: effectiveTolerance.value,
              ignoreColor: deviceTest.ignoreColor,
              ignoreFontRendering: deviceTest.ignoreFontRendering,
              structuralOnly: deviceTest.structuralOnly,
              ignoreBackgroundImg: deviceTest.ignoreBackgroundImg,
              devicePreset: screenshotPreset.id !== "auto" ? screenshotPreset : undefined,
              manualDims: screenshotPreset.id === "manual" ? manualDims : undefined,
            }
          );

          // Only keep cells that have actual issues
          if (report.severity !== "perfect" && report.issues.length > 0) {
            const selPct: SelectionRect = {
              x1: (cellX / mW) * 100,
              y1: (cellY / mH) * 100,
              x2: ((cellX + cellW) / mW) * 100,
              y2: ((cellY + cellH) / mH) * 100,
            };
            allNewRegions.push({
              id: nextRegionId(),
              masterRect,
              screenshotIdx: activeScreenshotIdx,
              transform: { ...currentTransform },
              report,
              selectionPct: selPct,
            });
            issuesFound += report.issues.length;
          }
        } catch {
          // Skip failed cells
        }

        setGridScanProgress({ current: cellIdx + 1, total: totalCells, found: issuesFound, label: cellLabel });

        // Yield to UI thread every few cells
        if (cellIdx % 3 === 0) await new Promise((r) => setTimeout(r, 0));
      }
    }

    // Add all found regions
    if (allNewRegions.length > 0) {
      setTestedRegions((prev) => [...prev, ...allNewRegions]);
    }

    setGridScanProgress(null);
    setAnchorPoint(null);
    setPhase("results");
  }, [deviceTest, activeSSUrl, activeScreenshotIdx, masterDims, activeSsDim, containerSize, currentTransform, effectiveTolerance]);

  /* ---- AI Grid Scan (Opus) ---- */
  const handleAiGridScan = useCallback(async () => {
    if (!deviceTest.masterScreenUrl || !activeSSUrl) return;

    aiScanAbort.current = false;
    setPhase("grid-scan");
    setGridScanProgress({ current: 0, total: 6, found: 0, label: "Initializing..." });

    const master = dataUrlToBase64(deviceTest.masterScreenUrl);
    const shot = dataUrlToBase64(activeSSUrl);

    if (!master.base64 || !shot.base64) {
      console.error("Failed to extract base64 from image URLs");
      setPhase("results");
      setGridScanProgress(null);
      return;
    }

    try {
      const issues = await runDetailedScan({
        masterB64: master.base64,
        masterMime: master.mime,
        shotB64: shot.base64,
        shotMime: shot.mime,
        onProgress: (current, total, label) => {
          setGridScanProgress((prev) => ({
            current,
            total,
            found: prev?.found ?? 0,
            label,
          }));
        },
        onPartial: (allIssues) => {
          setAiIssues(allIssues);
          setGridScanProgress((prev) => ({
            current: prev?.current ?? 0,
            total: prev?.total ?? 6,
            found: allIssues.length,
            label: prev?.label,
          }));
        },
        abortSignal: aiScanAbort,
      });

      setAiIssues(issues);
    } catch (err) {
      console.error("AI scan failed:", err);
    }

    setGridScanProgress(null);
    setAnchorPoint(null);
    setPhase("results");
  }, [deviceTest.masterScreenUrl, activeSSUrl]);

  // Keep grid scan ref up to date
  useEffect(() => {
    gridScanRef.current = (xPct: number, yPct: number) => {
      if (scanEngine === "ai") {
        handleAiGridScan();
      } else {
        handleGridScan(xPct, yPct);
      }
    };
  }, [scanEngine, handleAiGridScan, handleGridScan]);

  /* ---- Map AI issues → ComparisonIssue for markers ---- */
  const aiMappedIssues = useMemo<ComparisonIssue[]>(() => {
    if (aiIssues.length === 0 || masterDims.w === 0) return [];
    return aiIssues.map((ai) => {
      const issueW = Math.round(masterDims.w * 0.04); // ~4% of image as box size
      const issueH = Math.round(masterDims.h * 0.04);
      const severity: ComparisonIssue["severity"] =
        ai.severity === "critical" ? "critical" :
        ai.severity === "major" ? "major" : "minor";
      return {
        id: `ai-${ai.id}`,
        x: Math.round((ai.x / 100) * masterDims.w - issueW / 2),
        y: Math.round((ai.y / 100) * masterDims.h - issueH / 2),
        width: issueW,
        height: issueH,
        severity,
        description: `[AI] ${ai.desc}`,
        diffPercentage: ai.severity === "critical" ? 5 : ai.severity === "major" ? 2 : 0.5,
      };
    });
  }, [aiIssues, masterDims]);

  /* ---- 9-zone scan sequence ---- */
  const ZONE_ORDER: { label: string; xFrac: number; yFrac: number }[] = [
    { label: "Top-right",      xFrac: 2/3, yFrac: 0   },
    { label: "Mid-right",      xFrac: 2/3, yFrac: 1/3 },
    { label: "Bottom-right",   xFrac: 2/3, yFrac: 2/3 },
    { label: "Bottom-center",  xFrac: 1/3, yFrac: 2/3 },
    { label: "Bottom-left",    xFrac: 0,   yFrac: 2/3 },
    { label: "Mid-left",       xFrac: 0,   yFrac: 1/3 },
    { label: "Top-left",       xFrac: 0,   yFrac: 0   },
    { label: "Top-center",     xFrac: 1/3, yFrac: 0   },
    { label: "Center",         xFrac: 1/3, yFrac: 1/3 },
  ];

  const handleNineZoneScan = useCallback(async () => {
    if (!deviceTest.masterScreenUrl || !activeSSUrl || !activeSsDim) return;
    if (masterDims.w === 0 || containerSize.w === 0) return;

    zoneScanAbort.current = false;
    setScanEngine("pixel");
    setPhase("grid-scan");
    setGridScanProgress({ current: 0, total: 9, found: 0, label: "Starting 9-zone scan..." });

    const mW = masterDims.w;
    const mH = masterDims.h;
    const zoneW = Math.round(mW / 3);
    const zoneH = Math.round(mH / 3);

    const cW = containerSize.w;
    const cH = containerSize.h;
    const ssDim = activeSsDim;
    const ssDisplayW = currentTransform.scale * cW;
    const ssDisplayH = (ssDim.h / ssDim.w) * ssDisplayW;

    const allNewRegions: TestedRegion[] = [];
    let issuesFound = 0;

    for (let i = 0; i < ZONE_ORDER.length; i++) {
      if (zoneScanAbort.current) break;

      const zone = ZONE_ORDER[i];
      const cellX = Math.round(zone.xFrac * mW);
      const cellY = Math.round(zone.yFrac * mH);
      const cellW = Math.min(zoneW, mW - cellX);
      const cellH = Math.min(zoneH, mH - cellY);

      if (cellW < 4 || cellH < 4) continue;

      setGridScanProgress({ current: i, total: 9, found: issuesFound, label: zone.label });

      const masterRect: RegionRect = { x: cellX, y: cellY, w: cellW, h: cellH };

      // Map to container then to screenshot
      const cellContainerX1 = (cellX / mW) * cW;
      const cellContainerY1 = (cellY / mH) * cH;
      const cellContainerX2 = ((cellX + cellW) / mW) * cW;
      const cellContainerY2 = ((cellY + cellH) / mH) * cH;

      const ssRect: RegionRect = {
        x: ((cellContainerX1 - currentTransform.x) / ssDisplayW) * ssDim.w,
        y: ((cellContainerY1 - currentTransform.y) / ssDisplayH) * ssDim.h,
        w: ((cellContainerX2 - cellContainerX1) / ssDisplayW) * ssDim.w,
        h: ((cellContainerY2 - cellContainerY1) / ssDisplayH) * ssDim.h,
      };

      // Clamp
      const clampedSsRect: RegionRect = {
        x: Math.max(0, ssRect.x),
        y: Math.max(0, ssRect.y),
        w: Math.min(ssRect.w, ssDim.w - Math.max(0, ssRect.x)),
        h: Math.min(ssRect.h, ssDim.h - Math.max(0, ssRect.y)),
      };

      if (clampedSsRect.w < 4 || clampedSsRect.h < 4) continue;

      try {
        const report = await compareRegion(
          deviceTest.masterScreenUrl, activeSSUrl,
          masterRect, clampedSsRect,
          {
            tolerance: effectiveTolerance.value,
            ignoreColor: deviceTest.ignoreColor,
            ignoreFontRendering: deviceTest.ignoreFontRendering,
            structuralOnly: deviceTest.structuralOnly,
            ignoreBackgroundImg: deviceTest.ignoreBackgroundImg,
            devicePreset: screenshotPreset.id !== "auto" ? screenshotPreset : undefined,
            manualDims: screenshotPreset.id === "manual" ? manualDims : undefined,
          },
        );

        if (report.severity !== "perfect" && report.issues.length > 0) {
          const selPct: SelectionRect = {
            x1: (cellX / mW) * 100,
            y1: (cellY / mH) * 100,
            x2: ((cellX + cellW) / mW) * 100,
            y2: ((cellY + cellH) / mH) * 100,
          };
          allNewRegions.push({
            id: nextRegionId(),
            masterRect,
            screenshotIdx: activeScreenshotIdx,
            transform: { ...currentTransform },
            report,
            selectionPct: selPct,
          });
          issuesFound += report.issues.length;
        }
      } catch {
        // Skip failed zones
      }

      // Yield to UI
      await new Promise((r) => setTimeout(r, 0));
    }

    if (allNewRegions.length > 0) {
      setTestedRegions((prev) => [...prev, ...allNewRegions]);
    }

    setGridScanProgress(null);
    setPhase("results");
  }, [deviceTest, activeSSUrl, activeScreenshotIdx, masterDims, activeSsDim, containerSize, currentTransform, effectiveTolerance, screenshotPreset, manualDims]);

  /* ---- Auto-trigger 9-zone scan when match < 10% + auto-detected device ---- */
  useEffect(() => {
    // Only reset the trigger guard when we leave the results/grid-scan cycle
    // (e.g. new images, new screenshot, etc.)
    if (phase !== "results" && phase !== "grid-scan" && phase !== "comparing") {
      if (zoneScanTriggered.current) {
        console.log(`[9ZoneTrigger] Resetting guard — phase=${phase}`);
      }
      zoneScanTriggered.current = false;
    }
    if (phase !== "results") {
      return;
    }

    console.log(`[9ZoneTrigger] Checking conditions:`, {
      phase,
      zoneScanTriggered: zoneScanTriggered.current,
      hasReport: !!activeReport,
      matchPct: activeReport?.matchPercentage,
      autoDetected: autoDetectedPreset ? `${autoDetectedPreset.preset.label} @${autoDetectedPreset.dpr}x` : null,
      presetId: screenshotPreset.id,
      hasMaster: !!deviceTest.masterScreenUrl,
      hasScreenshot: !!activeSSUrl,
      hasActiveSsDim: !!activeSsDim,
      containerW: containerSize.w,
    });

    if (zoneScanTriggered.current) {
      console.log(`[9ZoneTrigger] SKIP — already triggered`);
      return;
    }
    if (!activeReport) {
      console.log(`[9ZoneTrigger] SKIP — no activeReport`);
      return;
    }
    if (activeReport.matchPercentage >= 10) {
      console.log(`[9ZoneTrigger] SKIP — match ${activeReport.matchPercentage.toFixed(1)}% >= 10%`);
      return;
    }
    if (!autoDetectedPreset) {
      console.log(`[9ZoneTrigger] SKIP — no auto-detected preset`);
      return;
    }
    // Trigger for both auto-detect and manual preset selection
    // (removed the screenshotPreset.id !== "auto" gate)

    console.log(`[9ZoneTrigger] ✓ ALL CONDITIONS MET — launching 9-zone scan in 500ms`);
    zoneScanTriggered.current = true;
    const timer = setTimeout(() => {
      handleNineZoneScan();
    }, 500);
    return () => clearTimeout(timer);
  }, [phase, activeReport, autoDetectedPreset, screenshotPreset.id, handleNineZoneScan, deviceTest.masterScreenUrl, activeSSUrl, activeSsDim, containerSize.w]);

  /* ---- Export ---- */
  const handleExportJSON = useCallback(() => {
    const data = {
      project: project.title, feature: feature.title, device: deviceTest.deviceType,
      effectiveTolerance, testedRegions,
      devicePreset: screenshotPreset.id !== "auto" ? { id: screenshotPreset.id, label: screenshotPreset.label, w: screenshotPreset.w, h: screenshotPreset.h } : undefined,
      manualDims: screenshotPreset.id === "manual" ? manualDims : undefined,
      aiIssues: aiIssues.length > 0 ? aiIssues : undefined,
      reports: deviceTest.reports.map((r) => ({ ...r, diffImageData: "[omitted]", heatmapImageData: "[omitted]" })),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url;
    a.download = `${feature.title.replace(/\s+/g, "-")}-report.json`; a.click();
    URL.revokeObjectURL(url);
  }, [project, feature, deviceTest, effectiveTolerance, testedRegions, aiIssues, screenshotPreset, manualDims]);

  /* ---- Hidden loaders ---- */
  const hiddenImgLoaders = useMemo(() => (
    deviceTest.screenshotUrls.map((url, idx) => (
      <img key={`loader-${idx}`} src={url} className="hidden" onLoad={(e) => handleSSLoad(e, idx)} alt="" />
    ))
  ), [deviceTest.screenshotUrls, handleSSLoad]);

  /* ---- Helper: normalize selection so x1<x2, y1<y2 ---- */
  function normalizeSelection(s: SelectionRect): SelectionRect {
    return {
      x1: Math.min(s.x1, s.x2), y1: Math.min(s.y1, s.y2),
      x2: Math.max(s.x1, s.x2), y2: Math.max(s.y1, s.y2),
    };
  }

  const selNorm = selectionRect ? normalizeSelection(selectionRect) : null;
  const selectionIsValid = selNorm ? (selNorm.x2 - selNorm.x1) > 1 && (selNorm.y2 - selNorm.y1) > 1 : false;

  // All issues from tested regions for this screenshot
  const regionIssues = useMemo(() =>
    testedRegions.filter((r) => r.screenshotIdx === activeScreenshotIdx).flatMap((r) => r.report.issues),
    [testedRegions, activeScreenshotIdx]
  );

  const isAdjustOrSelect = phase === "adjust" || phase === "select" || phase === "anchor" || phase === "grid-scan";

  /* ================================================================ */
  /* RENDER                                                             */
  /* ================================================================ */
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      {hiddenImgLoaders}

      {/* ---- Header ---- */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#E0E0E0]/60" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
        <div className="max-w-[1440px] mx-auto px-5 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-2 rounded-[8px] text-[#79747E] hover:text-[#49454F] hover:bg-[#F5F5F5] transition-all cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-[15px] text-[#1C1B1F]" style={{ fontWeight: 700 }}>{feature.title} — {testLabel}</h1>
              <p className="text-[11px] text-[#9E9E9E]" style={{ fontWeight: 400 }}>
                {project.title} &middot; {deviceTest.deviceType.charAt(0).toUpperCase() + deviceTest.deviceType.slice(1)} &middot; Tolerance: {effectiveTolerance.value}px ({effectiveTolerance.source})
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ToleranceBadge value={effectiveTolerance.value} source={effectiveTolerance.source} />
            {(activeReport || testedRegions.length > 0) && (
              <button onClick={handleExportJSON} className="flex items-center gap-1.5 px-3 py-2 rounded-[10px] text-[12px] text-[#49454F] border border-[#E0E0E0] hover:bg-[#F5F5F5] transition-all cursor-pointer" style={{ fontWeight: 500 }}>
                <Download className="w-3.5 h-3.5" /> Export
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ---- Main layout ---- */}
      <div className="flex-1 flex max-w-[1440px] mx-auto w-full">

        {/* ======== LEFT SIDEBAR ======== */}
        <TestingSidebar
          deviceTest={deviceTest}
          effectiveTolerance={effectiveTolerance}
          onUpdateTest={onUpdateTest}
          masterDims={masterDims}
          onMasterLoad={handleMasterLoad}
          activeScreenshotIdx={activeScreenshotIdx}
          ssDims={ssDims}
          onSelectScreenshot={(idx) => { setActiveScreenshotIdx(idx); setPhase("idle"); }}
          onRemoveScreenshot={removeScreenshot}
          onFileUpload={handleFile}
          onDrop={handleDrop}
          testedRegions={testedRegions}
          hoveredRegionId={hoveredRegionId}
          onHoverRegion={setHoveredRegionId}
          onRemoveRegion={(id) => setTestedRegions((prev) => prev.filter((r) => r.id !== id))}
          isMeasuring={measureTool.isMeasuring}
          measurements={measureTool.measurements}
          onRemoveMeasurement={measureTool.removeMeasurement}
          onClearAllMeasurements={measureTool.clearAllMeasurements}
          hoveredMeasureId={measureTool.hoveredMeasureId}
          onHoverMeasure={measureTool.setHoveredMeasureId}
          onClearMaster={() => { onUpdateTest({ masterScreenUrl: null }); setPhase("idle"); }}
          selectedPreset={screenshotPreset}
          onPresetChange={handlePresetChange}
          manualDims={manualDims}
          onManualDimsChange={setManualDims}
          autoDetectedPreset={autoDetectedPreset}
        />

        {/* ======== MAIN CONTENT ======== */}
        <main className="flex-1 flex flex-col overflow-hidden">

          {/* Toolbar */}
          <TestingToolbar
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            phase={phase}
            onSetPhase={setPhase}
            hasScreenshot={!!activeSSUrl}
            hasMaster={!!deviceTest.masterScreenUrl}
            overlayOpacity={overlayOpacity}
            onOverlayOpacityChange={setOverlayOpacity}
            currentTransform={currentTransform}
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
            onAutoFit={autoFit}
            onResetTransform={resetTransform}
            onApplyZoom={applyZoom}
            onClearSelection={() => setSelectionRect(null)}
            onCancelMeasure={() => measureTool.setIsMeasuring(false)}
            scanEngine={scanEngine}
            onScanEngineChange={setScanEngine}
          />

          {/* ---- COMPARISON AREA ---- */}
          <div className="flex-1 overflow-auto p-5">
            {phase === "grid-scan" && gridScanProgress ? (
              <div className="flex-1 flex flex-col items-center justify-center py-24 bg-white rounded-[16px] border border-[#E0E0E0]/60">
                {scanEngine === "ai" ? (
                  <Sparkles className="w-10 h-10 text-[#7B1FA2] mb-4 animate-pulse" />
                ) : scanEngine === "structural" ? (
                  <LayoutGrid className="w-10 h-10 text-[#0D9488] mb-4 animate-pulse" />
                ) : (
                  <Grid3X3 className="w-10 h-10 text-[#1565C0] mb-4 animate-pulse" />
                )}
                <p className="text-[15px] text-[#1C1B1F] mb-1" style={{ fontWeight: 600 }}>
                  {scanEngine === "ai" ? "AI Scan in Progress..." : scanEngine === "structural" ? "Structural Scan in Progress..." : "Grid Scan in Progress..."}
                </p>
                <p className="text-[12px] text-[#9E9E9E] mb-1" style={{ fontWeight: 400 }}>
                  {scanEngine === "ai" ? "Region" : scanEngine === "structural" ? "Step" : "Cell"} {gridScanProgress.current} of {gridScanProgress.total}
                  {gridScanProgress.label && <> &middot; <span className="text-[#7B1FA2]">{gridScanProgress.label}</span></>}
                </p>
                <p className="text-[11px] text-[#BDBDBD] mb-4" style={{ fontWeight: 500 }}>
                  {gridScanProgress.found} issue{gridScanProgress.found !== 1 ? "s" : ""} found
                </p>
                {/* Progress bar */}
                <div className="w-72 h-2.5 bg-[#F0F0F0] rounded-full overflow-hidden mb-3">
                  <div className="h-full rounded-full transition-all"
                    style={{
                      width: `${(gridScanProgress.current / gridScanProgress.total) * 100}%`,
                      backgroundColor: scanEngine === "ai" ? "#7B1FA2" : scanEngine === "structural" ? "#0D9488" : "#1565C0",
                    }} />
                </div>
                <p className="text-[10px] text-[#BDBDBD]" style={{ fontWeight: 500 }}>
                  {Math.round((gridScanProgress.current / gridScanProgress.total) * 100)}% complete
                </p>
                {scanEngine === "ai" && (
                  <p className="text-[9px] text-[#CE93D8] mt-1" style={{ fontWeight: 500 }}>
                    Powered by Claude Opus &middot; Visual QA Analysis
                  </p>
                )}
                {scanEngine === "structural" && (
                  <p className="text-[9px] text-[#5EEAD4] mt-1" style={{ fontWeight: 500 }}>
                    Design Validation Engine &middot; Layout Constraint Analysis
                  </p>
                )}
                <button
                  onClick={() => { gridScanAbort.current = true; aiScanAbort.current = true; zoneScanAbort.current = true; }}
                  className="mt-4 px-4 py-2 rounded-[8px] text-[12px] text-[#D32F2F] border border-[#D32F2F]/30 hover:bg-[#FFEBEE] transition-colors cursor-pointer"
                  style={{ fontWeight: 600 }}
                >
                  Cancel Scan
                </button>
              </div>
            ) : isComparing ? (
              <div className="flex-1 flex flex-col items-center justify-center py-24 bg-white rounded-[16px] border border-[#E0E0E0]/60">
                <div className="relative mb-6"><div className={`w-16 h-16 rounded-full border-3 ${scanEngine === "structural" ? "border-[#0D9488]" : "border-[#2962FF]"} border-t-transparent animate-spin`} /></div>
                <p className="text-[15px] text-[#1C1B1F] mb-1" style={{ fontWeight: 600 }}>
                  {scanEngine === "structural" ? "Structural validation..." : `Analyzing${useRegionMode ? " region" : ""}...`}
                </p>
                <p className="text-[12px] text-[#9E9E9E]" style={{ fontWeight: 400 }}>
                  {scanEngine === "structural"
                    ? "Detecting UI elements & validating layout constraints"
                    : `Pixel-level comparison with ${effectiveTolerance.value}px tolerance`}
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-4">

                {/* ============ SANITY CHECK BLOCK ============ */}
                {sanityBlocked && (
                  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                    className="rounded-[14px] border border-[#FFCDD2] bg-[#FFEBEE] p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#D32F2F]/10">
                      <X className="w-5 h-5 text-[#D32F2F]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] text-[#D32F2F]" style={{ fontWeight: 600 }}>
                        Images appear completely different — comparison blocked
                      </p>
                      <p className="text-[11px] text-[#79747E] mt-0.5" style={{ fontWeight: 400 }}>
                        Structural similarity: {sanityBlocked.matchPct.toFixed(1)}% (minimum 25% required).
                        Make sure both images show the same screen or UI element.
                      </p>
                    </div>
                    <button onClick={() => setSanityBlocked(null)}
                      className="px-3 py-1.5 rounded-[8px] text-[11px] text-[#D32F2F] bg-white border border-[#FFCDD2] hover:bg-[#FFF5F5] transition-all cursor-pointer shrink-0"
                      style={{ fontWeight: 600 }}>
                      Dismiss
                    </button>
                  </motion.div>
                )}

                {/* ============ DIMENSION STATUS CARD ============ */}
                {canCompare && phase !== "results" && phase !== "adjust" && phase !== "select" && phase !== "anchor" && phase !== "grid-scan" && activeSsDim && !sanityBlocked && (
                  <AnimatePresence>
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                      className={`rounded-[14px] border p-4 flex items-center gap-4 ${dimensionsMatch ? "bg-[#E8F5E9] border-[#C8E6C9]" : "bg-[#FFF3E0] border-[#FFE0B2]"}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${dimensionsMatch ? "bg-[#2E7D32]/10" : "bg-[#E65100]/10"}`}>
                        {dimensionsMatch
                          ? <CheckCircle2 className="w-5 h-5 text-[#2E7D32]" />
                          : <AlertTriangle className="w-5 h-5 text-[#E65100]" />
                        }
                      </div>
                      <div className="flex-1">
                        <p className="text-[13px]" style={{ fontWeight: 600, color: dimensionsMatch ? "#2E7D32" : "#E65100" }}>
                          {dimensionsMatch ? "Dimensions match — Ready for analysis" : "Dimension mismatch — Screenshot will be scaled to match"}
                        </p>
                        <p className="text-[11px] text-[#79747E] mt-0.5" style={{ fontWeight: 400 }}>
                          Master: {masterDims.w}×{masterDims.h}px &middot; Screenshot: {activeSsDim.w}×{activeSsDim.h}px
                          {!dimensionsMatch && " — auto-scaled for comparison"}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button onClick={scanEngine === "structural" ? handleStructuralValidation : handleFullCompare}
                          className={`flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-white shadow-md transition-all cursor-pointer ${
                            scanEngine === "structural"
                              ? "bg-[#0D9488] shadow-[#0D9488]/20 hover:bg-[#0F766E]"
                              : "bg-[#2E7D32] shadow-[#2E7D32]/20 hover:bg-[#1B5E20]"
                          }`}
                          style={{ fontWeight: 600, fontSize: 13 }}>
                          {scanEngine === "structural"
                            ? <><LayoutGrid className="w-4 h-4" /> Run Structural</>
                            : <><Play className="w-4 h-4" fill="currentColor" /> Run Analysis</>
                          }
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* ============ RESULTS SUMMARY ============ */}
                {activeReport && (phase === "results" || phase === "adjust") && (() => {
                  const isStructural = lastScanEngine === "structural" && structuralMeta != null;
                  const sColor = isStructural ? "#0D9488" : severityConfig[activeReport.severity]?.color;
                  const sBg = isStructural ? "#F0FDFA" : severityConfig[activeReport.severity]?.bg;
                  const sIcon = isStructural
                    ? <LayoutGrid className="w-5 h-5" />
                    : severityConfig[activeReport.severity]?.icon;
                  const sLabel = isStructural
                    ? `Layout Validation — ${structuralMeta.matchedCount}/${structuralMeta.masterElementCount} elements matched`
                    : severityConfig[activeReport.severity]?.label;
                  const sDetail = isStructural
                    ? `Layout score: ${structuralMeta.layoutScore.toFixed(1)}% · ${structuralMeta.missingCount} missing · ${structuralMeta.constraintErrorCount} constraint errors`
                    : `${activeReport.matchPercentage.toFixed(2)}% match · ${activeReport.diffPixels.toLocaleString()} diff pixels · ${activeReport.issues.length} issues`;
                  const sBigLabel = isStructural ? "Layout Score" : "match rate";
                  const sBigValue = isStructural
                    ? `${structuralMeta.layoutScore.toFixed(1)}%`
                    : `${activeReport.matchPercentage.toFixed(1)}%`;
                  const rerunHandler = isStructural ? handleStructuralValidation : handleFullCompare;
                  const rerunColor = isStructural ? "bg-[#0D9488] hover:bg-[#0F766E]" : "bg-[#2E7D32] hover:bg-[#1B5E20]";

                  return (
                    <div className="rounded-[14px] border p-4 flex items-center gap-5"
                      style={{ backgroundColor: sBg, borderColor: `${sColor}20` }}>
                      <div style={{ color: sColor }}>{sIcon}</div>
                      <div className="flex-1">
                        <p className="text-[14px]" style={{ fontWeight: 600, color: sColor }}>
                          {sLabel}
                        </p>
                        <p className="text-[11px] text-[#79747E]" style={{ fontWeight: 400 }}>
                          {sDetail}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[26px] tracking-tight" style={{ fontWeight: 700, color: sColor }}>
                          {sBigValue}
                        </p>
                        <p className="text-[9px] text-[#9E9E9E]" style={{ fontWeight: 400 }}>{sBigLabel}</p>
                      </div>
                      <button onClick={rerunHandler}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-[10px] ${rerunColor} text-white text-[12px] shadow-md transition-all cursor-pointer shrink-0`}
                        style={{ fontWeight: 600 }}>
                        <RotateCcw className="w-3.5 h-3.5" /> Re-run
                      </button>
                    </div>
                  );
                })()}

                {/* AI issues summary badge */}
                {aiMappedIssues.length > 0 && phase === "results" && (
                  <div className="rounded-[12px] border border-[#CE93D8]/30 bg-[#F3E5F5] px-4 py-2.5 flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-[#7B1FA2] shrink-0" />
                    <div className="flex-1">
                      <p className="text-[12px] text-[#7B1FA2]" style={{ fontWeight: 600 }}>
                        AI Visual QA &middot; {aiMappedIssues.length} issue{aiMappedIssues.length !== 1 ? "s" : ""} detected
                      </p>
                      <p className="text-[10px] text-[#9E9E9E]" style={{ fontWeight: 400 }}>
                        {aiMappedIssues.filter((i) => i.severity === "critical").length} critical &middot;{" "}
                        {aiMappedIssues.filter((i) => i.severity === "major").length} major &middot;{" "}
                        {aiMappedIssues.filter((i) => i.severity === "minor").length} minor
                      </p>
                    </div>
                    <button
                      onClick={() => { setAiIssues([]); }}
                      className="text-[10px] text-[#9E9E9E] hover:text-[#D32F2F] transition-colors cursor-pointer px-2 py-1"
                      style={{ fontWeight: 500 }}
                      title="Clear AI issues"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* ============ OVERLAY VIEW ============ */}
                {viewMode === "overlay" && deviceTest.masterScreenUrl ? (
                  <div className="relative" style={{ isolation: "isolate" }}>
                    <div
                      ref={overlayAreaRef}
                      className={`relative bg-[#1C1B1F] rounded-[16px] overflow-hidden select-none ${
                        measureTool.isMeasuring ? "cursor-crosshair" :
                        phase === "adjust" ? (isCornerResizing ? "" : isDragging ? "cursor-grabbing" : "cursor-grab") :
                        phase === "select" ? "cursor-crosshair" :
                        phase === "anchor" ? "cursor-crosshair" : ""
                      }`}
                      onPointerDown={handlePointerDown}
                      onPointerMove={handlePointerMove}
                      onPointerUp={handlePointerUp}
                      onPointerLeave={handlePointerUp}
                      onWheel={handleWheel}
                      style={{ touchAction: (isAdjustOrSelect || measureTool.isMeasuring) ? "none" : "auto", zIndex: 1 }}
                    >
                      {/* Master image */}
                      <img src={deviceTest.masterScreenUrl} alt="Master" className="w-full block" onLoad={handleMasterLoad} draggable={false} />

                      {/* Screenshot overlay */}
                      {activeSSUrl && (
                        <div className="absolute inset-0 pointer-events-none" style={{ opacity: overlayOpacity / 100 }}>
                          <img src={activeSSUrl} alt="Overlay" className="origin-top-left max-w-none"
                            style={{
                              position: "absolute", left: currentTransform.x, top: currentTransform.y,
                              width: `${currentTransform.scale * 100}%`, height: "auto",
                            }} draggable={false} />
                        </div>
                      )}

                      {/* Corner resize handles (Shift held or adjust mode) */}
                      {(phase === "adjust" || ((phase === "ready" || phase === "results" || phase === "mismatch") && shiftHeld) || isCornerResizing) && activeSSUrl && activeSsDim && (() => {
                        const containerW = containerSize.w || 1;
                        const ssDisplayW = currentTransform.scale * containerW;
                        const ssDisplayH = (activeSsDim.h / activeSsDim.w) * ssDisplayW;
                        const corners = [
                          { id: "tl", left: currentTransform.x, top: currentTransform.y, cursor: "nwse-resize" },
                          { id: "tr", left: currentTransform.x + ssDisplayW, top: currentTransform.y, cursor: "nesw-resize" },
                          { id: "bl", left: currentTransform.x, top: currentTransform.y + ssDisplayH, cursor: "nesw-resize" },
                          { id: "br", left: currentTransform.x + ssDisplayW, top: currentTransform.y + ssDisplayH, cursor: "nwse-resize" },
                        ];
                        return (
                          <>
                            {/* Bounding box outline */}
                            <div className="absolute pointer-events-none border-2 border-dashed border-white/50 rounded-[2px]"
                              style={{
                                left: currentTransform.x, top: currentTransform.y,
                                width: ssDisplayW, height: ssDisplayH,
                                boxShadow: "0 0 0 1px rgba(0,0,0,0.2)",
                              }}
                            />
                            {corners.map((c) => (
                              <div key={c.id}
                                className="absolute z-20 pointer-events-auto"
                                style={{
                                  left: c.left - 7, top: c.top - 7,
                                  width: 14, height: 14,
                                  cursor: c.cursor,
                                }}
                                onPointerDown={(e) => handleCornerDown(e, c.id)}
                              >
                                <div className="w-full h-full bg-white border-2 border-[#2962FF] rounded-[3px] shadow-md
                                  hover:bg-[#E8EAF6] hover:border-[#2962FF] hover:scale-125 transition-transform" />
                              </div>
                            ))}
                          </>
                        );
                      })()}

                      {/* Diff overlay (full comparison results) */}
                      {activeReport?.diffImageData && !isAdjustOrSelect && (
                        <img src={activeReport.diffImageData} alt="Diff" className="absolute inset-0 w-full h-full pointer-events-none"
                          style={{ opacity: 0.55, mixBlendMode: "multiply" }} draggable={false} />
                      )}

                      {/* Tested region overlays — baked results */}
                      {!isAdjustOrSelect && testedRegions.filter((r) => r.screenshotIdx === activeScreenshotIdx).map((region, rIdx) => {
                        const sel = region.selectionPct;
                        const isHoveredR = hoveredRegionId === region.id;
                        const sConf = severityConfig[region.report.severity];
                        return (
                          <div key={region.id}
                            className="absolute pointer-events-none"
                            style={{
                              left: `${sel.x1}%`, top: `${sel.y1}%`,
                              width: `${sel.x2 - sel.x1}%`, height: `${sel.y2 - sel.y1}%`,
                            }}
                            onMouseEnter={() => setHoveredRegionId(region.id)}
                            onMouseLeave={() => setHoveredRegionId(null)}
                          >
                            {/* Region diff overlay */}
                            {region.report.diffImageData && (
                              <img src={region.report.diffImageData} alt="" className="absolute inset-0 w-full h-full"
                                style={{ opacity: 0.5, mixBlendMode: "multiply" }} />
                            )}
                            {/* Dashed border */}
                            <div className={`absolute inset-0 border-2 border-dashed rounded-[4px] transition-all ${isHoveredR ? "border-[#7B1FA2]" : "border-[#7B1FA2]/60"}`}
                              style={{ boxShadow: isHoveredR ? "0 0 12px rgba(123,31,162,0.3)" : "none" }} />
                            {/* Label */}
                            <div className="absolute -top-6 left-0 flex items-center gap-1.5 px-2 py-0.5 rounded-[6px]"
                              style={{ backgroundColor: sConf?.color ?? "#9E9E9E" }}>
                              <Hash className="w-2.5 h-2.5 text-white" />
                              <span className="text-[9px] text-white" style={{ fontWeight: 700 }}>
                                R{rIdx + 1} &middot; {region.report.matchPercentage.toFixed(1)}%
                              </span>
                            </div>
                          </div>
                        );
                      })}

                      {/* Issue markers rendered as sibling of overlayAreaRef — see below */}

                      {/* Measure tool overlay */}
                      {containerSize.w > 0 && masterDims.w > 0 && (measureTool.measurements.length > 0 || measureTool.activeMeasure) && (
                        <MeasureToolOverlay
                          measurements={measureTool.measurements}
                          activeMeasure={measureTool.activeMeasure}
                          imageNaturalWidth={masterDims.w}
                          imageNaturalHeight={masterDims.h}
                          containerW={containerSize.w}
                          containerH={containerSize.h}
                          onRemove={measureTool.removeMeasurement}
                          hoveredId={measureTool.hoveredMeasureId}
                          onHover={measureTool.setHoveredMeasureId}
                        />
                      )}

                      {/* Selection rectangle being drawn */}
                      {selNorm && phase === "select" && (
                        <div className="absolute pointer-events-none z-20"
                          style={{
                            left: `${selNorm.x1}%`, top: `${selNorm.y1}%`,
                            width: `${selNorm.x2 - selNorm.x1}%`, height: `${selNorm.y2 - selNorm.y1}%`,
                          }}>
                          <div className="absolute inset-0 border-2 border-dashed border-white rounded-[4px]"
                            style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(0,0,0,0.1)" }} />
                          {/* Corner handles */}
                          {[["left-0 top-0", "-2px", "-2px"], ["right-0 top-0", "-2px", "-2px"],
                            ["left-0 bottom-0", "-2px", "-2px"], ["right-0 bottom-0", "-2px", "-2px"]].map(([pos], i) => (
                            <div key={i} className={`absolute ${pos} w-2.5 h-2.5 bg-white border-2 border-[#7B1FA2] rounded-[2px]`}
                              style={{ margin: -5 }} />
                          ))}
                          {/* Size label */}
                          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-[6px] bg-[#7B1FA2] text-white text-[9px] whitespace-nowrap"
                            style={{ fontWeight: 600 }}>
                            {Math.round(((selNorm.x2 - selNorm.x1) / 100) * masterDims.w)}×{Math.round(((selNorm.y2 - selNorm.y1) / 100) * masterDims.h)}px
                          </div>
                        </div>
                      )}

                      {/* Persisted anchor marker (visible in select mode too) */}
                      {phase === "select" && anchorPoint && (
                        <div className="absolute pointer-events-none z-10" style={{ left: `${anchorPoint.xPct}%`, top: `${anchorPoint.yPct}%` }}>
                          <div className="w-5 h-5 -ml-2.5 -mt-2.5 rounded-full border-2 border-[#2E7D32] bg-[#2E7D32]/20" />
                          <div className="absolute w-2.5 h-2.5 rounded-full bg-[#2E7D32] shadow-sm" style={{ left: -5, top: -5 }} />
                        </div>
                      )}

                      {/* Measure tool HUD */}
                      {measureTool.isMeasuring && (
                        <div className="absolute top-3 left-3 z-30 flex items-center gap-2">
                          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[8px] bg-[#D32F2F]/90 text-white text-[10px] shadow-lg backdrop-blur-sm" style={{ fontWeight: 600 }}>
                            <Ruler className="w-3 h-3" /> Click & drag to measure
                          </div>
                          {measureTool.measurements.length > 0 && (
                            <div className="flex items-center gap-1 px-2 py-1.5 rounded-[8px] bg-black/60 text-white/90 text-[10px] backdrop-blur-sm" style={{ fontWeight: 500 }}>
                              {measureTool.measurements.length} measured
                            </div>
                          )}
                        </div>
                      )}

                      {/* Adjust mode HUD */}
                      {phase === "adjust" && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/15" />
                          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/15" />
                        </div>
                      )}

                      {/* Select mode hint — step 2 */}
                      {phase === "select" && !selNorm && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center gap-4 px-10 py-8 rounded-[20px] bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl">

                            {/* Step indicator */}
                            <div className="flex items-center gap-2 mb-1">
                              {anchorPoint && (
                                <>
                                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32] text-white text-[10px]" style={{ fontWeight: 700 }}>
                                    <CheckCircle2 className="w-3 h-3" /> Anchor
                                  </div>
                                  <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                                </>
                              )}
                              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B1FA2] text-white text-[10px]" style={{ fontWeight: 700 }}>
                                <Scan className="w-3 h-3" /> Step 2 — Select
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/30 text-[10px]" style={{ fontWeight: 500 }}>
                                Run Test
                              </div>
                            </div>

                            <div className="w-12 h-12 rounded-full bg-[#7B1FA2]/20 flex items-center justify-center">
                              <Scan className="w-6 h-6 text-[#CE93D8]" />
                            </div>
                            <div className="text-center">
                              <p className="text-[16px] text-white mb-1.5" style={{ fontWeight: 700 }}>Select Test Region</p>
                              <p className="text-[12px] text-white/50 max-w-[280px]" style={{ fontWeight: 400 }}>
                                Click and drag on the image to draw a rectangle around the area you want to test.
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      )}

                      {/* Select mode — cancel/back button */}
                      {phase === "select" && (
                        <div className="absolute top-3 right-3 z-20">
                          <button
                            onClick={() => { setPhase(anchorPoint ? "anchor" : (activeReport ? "results" : "mismatch")); setSelectionRect(null); }}
                            className="flex items-center gap-1 px-3 py-2 rounded-[10px] bg-black/60 text-white/80 text-[11px] hover:bg-black/80 transition-colors cursor-pointer backdrop-blur-sm"
                            style={{ fontWeight: 600 }}
                          >
                            <X className="w-3.5 h-3.5" /> Cancel
                          </button>
                        </div>
                      )}

                      {/* Anchor placement mode — step-by-step wizard */}
                      {phase === "anchor" && (
                        <>
                          {/* Subtle crosshair guides */}
                          {!anchorPoint && (
                            <div className="absolute inset-0 pointer-events-none">
                              <div className="absolute left-0 right-0 top-1/2 h-px bg-white/10" />
                              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10" />
                            </div>
                          )}

                          {/* Anchor point marker */}
                          {anchorPoint && (
                            <div className="absolute pointer-events-none z-20" style={{ left: `${anchorPoint.xPct}%`, top: `${anchorPoint.yPct}%` }}>
                              <div className="w-8 h-8 -ml-4 -mt-4 rounded-full border-3 border-[#2E7D32] bg-[#2E7D32]/15 animate-pulse" />
                              <div className="absolute w-4 h-4 -ml-2 -mt-6 rounded-full bg-[#2E7D32] shadow-lg shadow-[#2E7D32]/40" />
                              {/* Crosshair lines from anchor */}
                              <div className="absolute w-px h-[9999px] bg-[#2E7D32]/30 left-0 -top-[4999px]" />
                              <div className="absolute h-px w-[9999px] bg-[#2E7D32]/30 top-0 -left-[4999px]" />
                            </div>
                          )}

                          {/* Step 1: Place Anchor — centered instruction */}
                          {!anchorPoint && (
                            <div className="absolute inset-0 flex items-center justify-center" style={{ pointerEvents: "none" }}>
                              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center gap-4 px-10 py-8 rounded-[20px] bg-black/70 backdrop-blur-xl border border-white/10 shadow-2xl" style={{ pointerEvents: "auto" }}>

                                {/* Step indicator */}
                                <div className="flex items-center gap-2 mb-1">
                                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2962FF] text-white text-[10px]" style={{ fontWeight: 700 }}>
                                    <Target className="w-3 h-3" /> Step 1
                                  </div>
                                  <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/30 text-[10px]" style={{ fontWeight: 500 }}>
                                    Step 2
                                  </div>
                                  <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/30 text-[10px]" style={{ fontWeight: 500 }}>
                                    Step 3
                                  </div>
                                </div>

                                <div className="w-12 h-12 rounded-full bg-[#2962FF]/20 flex items-center justify-center">
                                  <Target className="w-6 h-6 text-[#64B5F6]" />
                                </div>
                                <div className="text-center">
                                  <p className="text-[16px] text-white mb-1.5" style={{ fontWeight: 700 }}>Place Anchor Point</p>
                                  <p className="text-[12px] text-white/50 max-w-[280px]" style={{ fontWeight: 400 }}>
                                    Click on a reference point where both images should align perfectly (e.g. a logo, icon, or corner).
                                  </p>
                                </div>
                              </motion.div>
                            </div>
                          )}

                          {/* Step 2 choice: Anchor placed → show next-step options */}
                          {anchorPoint && (
                            <div className="absolute inset-0 flex items-end justify-center pb-8" style={{ pointerEvents: "none" }}>
                              <motion.div initial={{ opacity: 0, y: 24, scale: 0.92 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                                className="flex flex-col items-center gap-4 px-8 py-6 rounded-[20px] bg-black/75 backdrop-blur-xl border border-white/10 shadow-2xl" style={{ pointerEvents: "auto" }}>

                                {/* Step indicator */}
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2E7D32] text-white text-[10px]" style={{ fontWeight: 700 }}>
                                    <CheckCircle2 className="w-3 h-3" /> Anchor Set
                                  </div>
                                  <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2962FF] text-white text-[10px]" style={{ fontWeight: 700 }}>
                                    Choose Next Step
                                  </div>
                                </div>

                                <p className="text-[13px] text-white/70 text-center" style={{ fontWeight: 500 }}>
                                  Anchor placed! What would you like to do?
                                </p>

                                <div className="flex items-center gap-3">
                                  {/* Option A: Select Region manually */}
                                  <button
                                    onClick={(e) => { e.stopPropagation(); setPhase("select"); setSelectionRect(null); }}
                                    className="flex items-center gap-2.5 px-6 py-3.5 rounded-[14px] bg-[#7B1FA2] text-white shadow-xl shadow-[#7B1FA2]/30 hover:bg-[#6A1B9A] transition-all cursor-pointer active:scale-95"
                                    style={{ fontWeight: 700, fontSize: 14 }}>
                                    <Scan className="w-5 h-5" /> Select Region
                                    <ChevronRight className="w-4 h-4 ml-1 opacity-60" />
                                  </button>

                                  {/* Option B: Run auto grid scan */}
                                  <button
                                    onClick={(e) => { e.stopPropagation(); setTimeout(() => gridScanRef.current(anchorPoint.xPct, anchorPoint.yPct), 50); }}
                                    className="flex items-center gap-2.5 px-6 py-3.5 rounded-[14px] bg-[#1565C0] text-white shadow-xl shadow-[#1565C0]/30 hover:bg-[#0D47A1] transition-all cursor-pointer active:scale-95"
                                    style={{ fontWeight: 700, fontSize: 14 }}>
                                    <Grid3X3 className="w-5 h-5" /> Grid Scan
                                    <Play className="w-4 h-4 ml-1 opacity-60" fill="currentColor" />
                                  </button>
                                </div>

                                {/* Engine selector */}
                                <div className="flex items-center gap-1 p-1 rounded-[10px] bg-white/8">
                                  <button
                                    onClick={(e) => { e.stopPropagation(); setScanEngine("pixel"); }}
                                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-[7px] text-[10px] transition-all cursor-pointer ${
                                      scanEngine === "pixel" ? "bg-[#1565C0] text-white shadow-sm" : "text-white/40 hover:text-white/60"
                                    }`}
                                    style={{ fontWeight: 600 }}>
                                    <Cpu className="w-2.5 h-2.5" /> Pixel
                                  </button>
                                  <button
                                    onClick={(e) => { e.stopPropagation(); setScanEngine("ai"); }}
                                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-[7px] text-[10px] transition-all cursor-pointer ${
                                      scanEngine === "ai" ? "bg-[#7B1FA2] text-white shadow-sm" : "text-white/40 hover:text-white/60"
                                    }`}
                                    style={{ fontWeight: 600 }}>
                                    <Sparkles className="w-2.5 h-2.5" /> AI
                                  </button>
                                  <button
                                    onClick={(e) => { e.stopPropagation(); setScanEngine("structural"); }}
                                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-[7px] text-[10px] transition-all cursor-pointer ${
                                      scanEngine === "structural" ? "bg-[#0D9488] text-white shadow-sm" : "text-white/40 hover:text-white/60"
                                    }`}
                                    style={{ fontWeight: 600 }}>
                                    <LayoutGrid className="w-2.5 h-2.5" /> Structural
                                  </button>
                                </div>

                                {/* Reposition anchor */}
                                <button
                                  onClick={(e) => { e.stopPropagation(); setAnchorPoint(null); }}
                                  className="text-[11px] text-white/40 hover:text-white/70 transition-colors cursor-pointer"
                                  style={{ fontWeight: 500 }}>
                                  Click elsewhere to reposition anchor
                                </button>
                              </motion.div>
                            </div>
                          )}

                          {/* Cancel button */}
                          <div className="absolute top-3 right-3 z-20">
                            <button
                              onClick={() => { setPhase(activeReport ? "results" : "mismatch"); setAnchorPoint(null); }}
                              className="flex items-center gap-1 px-3 py-2 rounded-[10px] bg-black/60 text-white/80 text-[11px] hover:bg-black/80 transition-colors cursor-pointer backdrop-blur-sm"
                              style={{ fontWeight: 600 }}
                            >
                              <X className="w-3.5 h-3.5" /> Cancel
                            </button>
                          </div>
                        </>
                      )}

                      {/* Idle hint */}
                      {phase !== "adjust" && phase !== "select" && phase !== "anchor" && phase !== "grid-scan" && activeSSUrl && !activeReport && testedRegions.length === 0 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-black/60 text-white/80 text-[10px] backdrop-blur-sm" style={{ fontWeight: 500 }}>
                          <MousePointerClick className="w-3 h-3" />
                          Long press to adjust overlay position
                        </div>
                      )}
                    </div>

                    {/* ===== DIAGNOSTIC: Simple red circle markers =====
                        Replaces IssueSeverityMarker temporarily to confirm
                        positioning and z-index work. If circles appear,
                        the coordinate math is correct and we restore
                        IssueSeverityMarker. If not, the problem is elsewhere. ===== */}
                    {!isAdjustOrSelect && containerSize.w > 0 && containerSize.h > 0 && (() => {
                      const allIssues: Array<{ issue: ComparisonIssue; isAI?: boolean }> = [
                        ...(activeReport?.issues ?? []).map((i) => ({ issue: i })),
                        ...regionIssues.map((i) => ({ issue: i })),
                        ...aiMappedIssues.map((i) => ({ issue: i, isAI: true })),
                      ];
                      if (allIssues.length === 0) return null;
                      if (masterDims.w === 0 || masterDims.h === 0) return null;

                      console.log(
                        "[MARKER DIAG]",
                        "issues:", allIssues.length,
                        "container:", containerSize.w, "×", containerSize.h,
                        "master:", masterDims.w, "×", masterDims.h,
                        "first:", allIssues[0].issue.id,
                        "x:", allIssues[0].issue.x, "y:", allIssues[0].issue.y,
                        "→ left%:", ((allIssues[0].issue.x + allIssues[0].issue.width / 2) / masterDims.w * 100).toFixed(1),
                        "top%:", ((allIssues[0].issue.y + allIssues[0].issue.height / 2) / masterDims.h * 100).toFixed(1),
                      );

                      return (
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: containerSize.w,
                            height: containerSize.h,
                            zIndex: 9999,
                            pointerEvents: "none",
                            borderRadius: 16,
                          }}
                        >
                          {allIssues.map(({ issue }, idx) => {
                            const leftPct = ((issue.x + issue.width / 2) / masterDims.w) * 100;
                            const topPct = ((issue.y + issue.height / 2) / masterDims.h) * 100;
                            return (
                              <div
                                key={issue.id}
                                style={{
                                  position: "absolute",
                                  left: `${leftPct}%`,
                                  top: `${topPct}%`,
                                  width: 24,
                                  height: 24,
                                  marginLeft: -12,
                                  marginTop: -12,
                                  background: issue.severity === "critical" ? "#B71C1C"
                                    : issue.severity === "major" ? "#D32F2F"
                                    : issue.severity === "moderate" ? "#E65100"
                                    : "#ED6C02",
                                  borderRadius: "50%",
                                  color: "white",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: 11,
                                  fontWeight: 700,
                                  boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
                                  border: "2px solid white",
                                  pointerEvents: "auto",
                                  cursor: "pointer",
                                }}
                                title={issue.description}
                                onClick={() => setSelectedIssueId(selectedIssueId === issue.id ? null : issue.id)}
                              >
                                {idx + 1}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })()}

                    {/* Floating action buttons */}
                    <AnimatePresence>
                      {/* Select mode: Step 3 — "Run Test" button */}
                      {phase === "select" && selectionIsValid && !isDrawingSelection && (
                        <motion.div initial={{ opacity: 0, y: 24, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 24, scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">

                          {/* Step indicator bar */}
                          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                            {anchorPoint && (
                              <>
                                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#2E7D32]/30 text-[#81C784] text-[9px]" style={{ fontWeight: 600 }}>
                                  <CheckCircle2 className="w-2.5 h-2.5" /> Anchor
                                </div>
                                <ChevronRight className="w-3 h-3 text-white/20" />
                              </>
                            )}
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#7B1FA2]/30 text-[#CE93D8] text-[9px]" style={{ fontWeight: 600 }}>
                              <CheckCircle2 className="w-2.5 h-2.5" /> Region
                            </div>
                            <ChevronRight className="w-3 h-3 text-white/20" />
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#2E7D32] text-white text-[9px]" style={{ fontWeight: 700 }}>
                              <Play className="w-2.5 h-2.5" fill="currentColor" /> Run Test
                            </div>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <button onClick={handleRegionCompare}
                              className="flex items-center gap-2.5 px-8 py-3.5 rounded-[16px] bg-[#2E7D32] text-white shadow-xl shadow-[#2E7D32]/40 hover:bg-[#1B5E20] transition-all cursor-pointer active:scale-95 ring-2 ring-[#2E7D32]/30 ring-offset-2 ring-offset-transparent"
                              style={{ fontWeight: 700, fontSize: 15 }}>
                              <Play className="w-5 h-5" fill="currentColor" /> Run Test
                            </button>
                            <button onClick={() => setSelectionRect(null)}
                              className="px-4 py-3.5 rounded-[16px] bg-white/15 text-white/80 shadow-lg hover:bg-white/25 transition-all cursor-pointer text-[13px] backdrop-blur-sm"
                              style={{ fontWeight: 600 }}>
                              Redraw
                            </button>
                          </div>
                          {selNorm && (
                            <p className="text-[10px] text-white/50" style={{ fontWeight: 400 }}>
                              Region: {Math.round(((selNorm.x2 - selNorm.x1) / 100) * masterDims.w)}×{Math.round(((selNorm.y2 - selNorm.y1) / 100) * masterDims.h)}px
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                ) : viewMode === "sideBySide" && deviceTest.masterScreenUrl ? (
                  <div className="bg-white rounded-[16px] border border-[#E0E0E0]/60 overflow-hidden" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.03)" }}>
                    <div className="flex">
                      <div className="flex-1 border-r border-[#E0E0E0]">
                        <div className="px-3 py-2 bg-[#FAFAFA] border-b border-[#F5F5F5]">
                          <span className="text-[11px] text-[#79747E]" style={{ fontWeight: 500 }}>Master</span>
                        </div>
                        <img src={deviceTest.masterScreenUrl} alt="Master" className="w-full block" />
                      </div>
                      <div className="flex-1">
                        <div className="px-3 py-2 bg-[#FAFAFA] border-b border-[#F5F5F5]">
                          <span className="text-[11px] text-[#79747E]" style={{ fontWeight: 500 }}>Screenshot {activeScreenshotIdx + 1}</span>
                        </div>
                        {activeSSUrl ? (
                          <div className="relative">
                            <img src={activeSSUrl} alt="Screenshot" className="w-full block" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center py-20 text-[#BDBDBD]">
                            <p className="text-[12px]" style={{ fontWeight: 400 }}>No screenshot</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : !deviceTest.masterScreenUrl ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-24 bg-white rounded-[16px] border border-[#E0E0E0]/60">
                    <div className="w-16 h-16 rounded-full bg-[#E8EAF6] flex items-center justify-center mb-4">
                      <Layers className="w-8 h-8 text-[#2962FF]/50" strokeWidth={1.5} />
                    </div>
                    <p className="text-[15px] text-[#49454F] mb-1" style={{ fontWeight: 500 }}>Upload images to start</p>
                    <p className="text-[12px] text-[#9E9E9E] max-w-[280px] text-center" style={{ fontWeight: 400 }}>Upload a master design on the left, then add screenshots to compare against</p>
                  </div>
                ) : null}

                {/* ============ ISSUES LIST ============ */}
                <IssuesPanel
                  allIssues={[
                    ...(activeReport?.issues ?? []),
                    ...regionIssues,
                    ...aiMappedIssues,
                  ]}
                  resolvedIssues={resolvedIssues}
                  hoveredIssueId={hoveredIssueId}
                  selectedIssueId={selectedIssueId}
                  issueComments={issueComments}
                  onHoverIssue={setHoveredIssueId}
                  onSelectIssue={setSelectedIssueId}
                  onResolveIssue={(id) => setResolvedIssues((prev) => {
                    const next = new Set(prev);
                    next.has(id) ? next.delete(id) : next.add(id);
                    return next;
                  })}
                />

                {/* Heatmap */}
                {activeReport?.heatmapImageData && (
                  <div className="bg-white rounded-[16px] border border-[#E0E0E0]/60 overflow-hidden" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.03)" }}>
                    <div className="px-4 py-3 border-b border-[#F5F5F5] flex items-center gap-2">
                      <Flame className="w-4 h-4 text-[#E65100]" />
                      <span className="text-[13px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>Heatmap</span>
                    </div>
                    <div className="relative bg-[#1C1B1F]">
                      <img src={deviceTest.masterScreenUrl!} alt="Base" className="w-full block opacity-40" />
                      <img src={activeReport.heatmapImageData} alt="Heatmap" className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
