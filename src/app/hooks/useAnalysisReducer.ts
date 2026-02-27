import { useReducer, useCallback } from "react";
import type {
  AnalysisPhase, SelectionRect, ScanEngine, OpusIssue,
} from "../types";

/* ================================================================== */
/* State                                                                */
/* ================================================================== */
export interface AnalysisState {
  phase: AnalysisPhase;
  isComparing: boolean;
  useRegionMode: boolean;
  sanityBlocked: { matchPct: number } | null;

  // Selection
  selectionRect: SelectionRect | null;
  isDrawingSelection: boolean;

  // Grid scan
  anchorPoint: { xPct: number; yPct: number } | null;
  gridScanProgress: { current: number; total: number; found: number; label?: string } | null;

  // AI scan
  scanEngine: ScanEngine;
  aiIssues: OpusIssue[];

  // Structural validation metadata (set when scanEngine === "structural")
  lastScanEngine: ScanEngine | null;
  structuralMeta: {
    layoutScore: number;
    masterElementCount: number;
    screenshotElementCount: number;
    matchedCount: number;
    missingCount: number;
    constraintErrorCount: number;
  } | null;
}

const initialState: AnalysisState = {
  phase: "idle",
  isComparing: false,
  useRegionMode: false,
  sanityBlocked: null,
  selectionRect: null,
  isDrawingSelection: false,
  anchorPoint: null,
  gridScanProgress: null,
  scanEngine: "pixel",
  aiIssues: [],
  lastScanEngine: null,
  structuralMeta: null,
};

/* ================================================================== */
/* Actions                                                              */
/* ================================================================== */
type Action =
  | { type: "SET_PHASE"; phase: AnalysisPhase }
  | { type: "SET_COMPARING"; value: boolean }
  | { type: "SET_REGION_MODE"; value: boolean }
  | { type: "SET_SANITY_BLOCKED"; value: { matchPct: number } | null }
  | { type: "SET_SELECTION_RECT"; rect: SelectionRect | null }
  | { type: "SET_DRAWING_SELECTION"; value: boolean }
  | { type: "SET_ANCHOR_POINT"; point: { xPct: number; yPct: number } | null }
  | { type: "SET_GRID_SCAN_PROGRESS"; progress: AnalysisState["gridScanProgress"] | ((prev: AnalysisState["gridScanProgress"]) => AnalysisState["gridScanProgress"]) }
  | { type: "SET_SCAN_ENGINE"; engine: ScanEngine }
  | { type: "SET_AI_ISSUES"; issues: OpusIssue[] }
  | { type: "APPEND_AI_ISSUES"; issues: OpusIssue[] }
  | { type: "START_COMPARING" }
  | { type: "CANCEL_SELECTION"; fallbackPhase: AnalysisPhase }
  | { type: "RESET_FOR_IMAGE_CHANGE" }
  | { type: "SET_LAST_SCAN_ENGINE"; engine: ScanEngine }
  | { type: "SET_STRUCTURAL_META"; meta: AnalysisState["structuralMeta"] };

/* ================================================================== */
/* Reducer                                                              */
/* ================================================================== */
function analysisReducer(state: AnalysisState, action: Action): AnalysisState {
  switch (action.type) {
    case "SET_PHASE":
      return { ...state, phase: action.phase };
    case "SET_COMPARING":
      return { ...state, isComparing: action.value };
    case "SET_REGION_MODE":
      return { ...state, useRegionMode: action.value };
    case "SET_SANITY_BLOCKED":
      return { ...state, sanityBlocked: action.value };
    case "SET_SELECTION_RECT":
      return { ...state, selectionRect: action.rect };
    case "SET_DRAWING_SELECTION":
      return { ...state, isDrawingSelection: action.value };
    case "SET_ANCHOR_POINT":
      return { ...state, anchorPoint: action.point };
    case "SET_GRID_SCAN_PROGRESS":
      return { ...state, gridScanProgress: typeof action.progress === "function" ? action.progress(state.gridScanProgress) : action.progress };
    case "SET_SCAN_ENGINE":
      return { ...state, scanEngine: action.engine };
    case "SET_AI_ISSUES":
      return { ...state, aiIssues: action.issues };
    case "APPEND_AI_ISSUES":
      return { ...state, aiIssues: [...state.aiIssues, ...action.issues] };
    case "START_COMPARING":
      return { ...state, phase: "comparing", isComparing: true, sanityBlocked: null };
    case "CANCEL_SELECTION":
      return {
        ...state,
        phase: action.fallbackPhase,
        selectionRect: null,
        isDrawingSelection: false,
      };
    case "RESET_FOR_IMAGE_CHANGE":
      return { ...state, phase: "idle", sanityBlocked: null };
    case "SET_LAST_SCAN_ENGINE":
      return { ...state, lastScanEngine: action.engine };
    case "SET_STRUCTURAL_META":
      return { ...state, structuralMeta: action.meta };
    default:
      return state;
  }
}

/* ================================================================== */
/* Hook                                                                 */
/* ================================================================== */
export function useAnalysisReducer() {
  const [state, dispatch] = useReducer(analysisReducer, initialState);

  /* Convenience setters that mirror the old useState API for gradual migration */
  const setPhase = useCallback((p: AnalysisPhase) => dispatch({ type: "SET_PHASE", phase: p }), []);
  const setIsComparing = useCallback((v: boolean) => dispatch({ type: "SET_COMPARING", value: v }), []);
  const setUseRegionMode = useCallback((v: boolean) => dispatch({ type: "SET_REGION_MODE", value: v }), []);
  const setSanityBlocked = useCallback((v: { matchPct: number } | null) => dispatch({ type: "SET_SANITY_BLOCKED", value: v }), []);
  const setSelectionRect = useCallback((r: SelectionRect | null) => dispatch({ type: "SET_SELECTION_RECT", rect: r }), []);
  const setIsDrawingSelection = useCallback((v: boolean) => dispatch({ type: "SET_DRAWING_SELECTION", value: v }), []);
  const setAnchorPoint = useCallback((p: { xPct: number; yPct: number } | null) => dispatch({ type: "SET_ANCHOR_POINT", point: p }), []);
  const setGridScanProgress = useCallback((p: AnalysisState["gridScanProgress"] | ((prev: AnalysisState["gridScanProgress"]) => AnalysisState["gridScanProgress"])) => dispatch({ type: "SET_GRID_SCAN_PROGRESS", progress: p }), []);
  const setScanEngine = useCallback((e: ScanEngine) => dispatch({ type: "SET_SCAN_ENGINE", engine: e }), []);
  const setAiIssues = useCallback((i: OpusIssue[]) => dispatch({ type: "SET_AI_ISSUES", issues: i }), []);

  return {
    ...state,
    dispatch,
    // Convenience setters
    setPhase,
    setIsComparing,
    setUseRegionMode,
    setSanityBlocked,
    setSelectionRect,
    setIsDrawingSelection,
    setAnchorPoint,
    setGridScanProgress,
    setScanEngine,
    setAiIssues,
    setLastScanEngine: useCallback((e: ScanEngine) => dispatch({ type: "SET_LAST_SCAN_ENGINE", engine: e }), []),
    setStructuralMeta: useCallback((m: AnalysisState["structuralMeta"]) => dispatch({ type: "SET_STRUCTURAL_META", meta: m }), []),
  };
}