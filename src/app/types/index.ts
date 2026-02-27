/* ================================================================== */
/* Shared types for the UI Testing Visual Regression Platform          */
/* ================================================================== */

/* ---- Data model (3-level hierarchy) ---- */

export type DeviceType = "phone" | "tablet" | "desktop" | "tv" | "watch";
export type TestStatus = "pending" | "pass" | "issues" | "not-tested";

export interface ComparisonIssue {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  severity: "minor" | "moderate" | "major" | "critical";
  description: string;
  diffPercentage: number;
}

export interface ComparisonReport {
  totalPixels: number;
  matchingPixels: number;
  diffPixels: number;
  matchPercentage: number;
  severity: "perfect" | "minor" | "layout-shift" | "structural" | "high-severity";
  issues: ComparisonIssue[];
  diffImageData: string;
  heatmapImageData: string;
  generatedAt: string;
}

/** Level 3 -- A single device-specific test within a Feature */
export interface DeviceTest {
  id: string;
  name: string;
  deviceType: DeviceType;
  masterScreenUrl: string | null;
  screenshotUrls: string[];
  toleranceOverride: number | null;
  ignoreColor: boolean;
  ignoreFontRendering: boolean;
  structuralOnly: boolean;
  ignoreBackgroundImg: boolean;
  status: TestStatus;
  reports: ComparisonReport[];
  createdAt: string;
  updatedAt: string;
}

/** Level 2 -- A feature / test module inside a Project */
export interface Feature {
  id: string;
  title: string;
  toleranceOverride: number | null;
  deviceTests: DeviceTest[];
  createdAt: string;
  updatedAt: string;
}

/** Level 1 -- Root container */
export interface Project {
  id: string;
  title: string;
  devices: DeviceType[];
  globalTolerance: number;
  features: Feature[];
  createdAt: string;
  updatedAt: string;
}

/* ---- Tolerance resolution ---- */

export type ToleranceSource = "project" | "feature" | "device";

export interface EffectiveTolerance {
  value: number;
  source: ToleranceSource;
}

/* ---- PixelEngine types ---- */

export type DevicePresetId =
  | "auto"
  | "iphoneSE"
  | "iphone14"
  | "iphone14pm"
  | "s24"
  | "ipad"
  | "ipadpro11"
  | "ipadair5"
  | "desktop1080"
  | "mbp14"
  | "mbp16"
  | "manual";

export interface DevicePreset {
  id: DevicePresetId;
  label: string;
  w: number;
  h: number;
  /** Which DeviceType category this preset belongs to */
  category: DeviceType | "any";
}

export const DEVICE_PRESETS: DevicePreset[] = [
  { id: "auto",        label: "Auto-detect",       w: 0,    h: 0,    category: "any" },
  { id: "iphoneSE",    label: "iPhone SE",          w: 375,  h: 667,  category: "phone" },
  { id: "iphone14",    label: "iPhone 14/15",       w: 390,  h: 844,  category: "phone" },
  { id: "iphone14pm",  label: "iPhone 14 Pro Max",  w: 430,  h: 932,  category: "phone" },
  { id: "s24",         label: "Samsung S24",        w: 412,  h: 915,  category: "phone" },
  { id: "ipad",        label: "iPad",               w: 768,  h: 1024, category: "tablet" },
  { id: "ipadpro11",   label: "iPad Pro 11\"",      w: 834,  h: 1194, category: "tablet" },
  { id: "ipadair5",    label: "iPad Air 5",         w: 1180, h: 820,  category: "tablet" },
  { id: "desktop1080", label: "Desktop 1080p",      w: 1920, h: 1080, category: "desktop" },
  { id: "mbp14",       label: "MacBook Pro 14\"",   w: 1512, h: 982,  category: "desktop" },
  { id: "mbp16",       label: "MacBook Pro 16\"",   w: 1728, h: 1080, category: "desktop" },
  { id: "manual",      label: "Manual",             w: 0,    h: 0,    category: "any" },
];

/** Common device pixel ratios to check during auto-detection */
const COMMON_DPRS = [1, 1.5, 2, 2.625, 3, 3.5, 4];

/** Per-axis tolerance for auto-detection matching (5%) */
const AUTO_DETECT_TOLERANCE = 0.05;

/**
 * Auto-detect which device preset matches the given screenshot dimensions.
 * Checks if the screenshot is a DPR multiple of any known preset.
 * Also tries landscape orientation (swapped w/h) for every preset.
 * Returns the matching preset + detected DPR, or null if no match.
 */
export function autoDetectDevice(
  ssW: number,
  ssH: number,
  deviceType?: DeviceType,
): { preset: DevicePreset; dpr: number; landscape: boolean } | null {
  const candidates = DEVICE_PRESETS.filter(
    (p) => p.w > 0 && p.h > 0 && (deviceType == null || p.category === deviceType || p.category === "any"),
  );

  let bestMatch: { preset: DevicePreset; dpr: number; error: number; landscape: boolean } | null = null;

  for (const preset of candidates) {
    // Try both portrait (w,h) and landscape (h,w) orientations
    const orientations: { pw: number; ph: number; isLandscape: boolean }[] = [
      { pw: preset.w, ph: preset.h, isLandscape: false },
    ];
    // Only add landscape variant if w !== h (square doesn't need it)
    if (preset.w !== preset.h) {
      orientations.push({ pw: preset.h, ph: preset.w, isLandscape: true });
    }

    for (const { pw, ph, isLandscape } of orientations) {
      for (const dpr of COMMON_DPRS) {
        const expectedW = Math.round(pw * dpr);
        const expectedH = Math.round(ph * dpr);
        const errW = Math.abs(ssW - expectedW) / expectedW;
        const errH = Math.abs(ssH - expectedH) / expectedH;
        const totalErr = errW + errH;
        if (errW <= AUTO_DETECT_TOLERANCE && errH <= AUTO_DETECT_TOLERANCE) {
          if (!bestMatch || totalErr < bestMatch.error) {
            bestMatch = { preset, dpr, error: totalErr, landscape: isLandscape };
          }
        }
      }
    }
  }

  console.log(
    `[AutoDetect] ${ssW}×${ssH} → ${
      bestMatch
        ? `${bestMatch.preset.label} @${bestMatch.dpr}x${bestMatch.landscape ? " (landscape)" : ""} (err: ${(bestMatch.error * 100).toFixed(2)}%)`
        : "no match"
    }`,
  );

  return bestMatch ? { preset: bestMatch.preset, dpr: bestMatch.dpr, landscape: bestMatch.landscape } : null;
}

export interface CompareOptions {
  tolerance: number;
  ignoreColor: boolean;
  ignoreFontRendering: boolean;
  structuralOnly: boolean;
  ignoreBackgroundImg?: boolean;
  /** When set, PixelEngine smart-scales the screenshot to match master proportions */
  devicePreset?: DevicePreset;
  /** Manual logical dimensions override (used when preset.id === "manual") */
  manualDims?: { w: number; h: number };
}

export interface RegionRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

/* ---- OpusQA types ---- */

export interface OpusIssue {
  id: number;
  type: string;
  desc: string;
  severity: "critical" | "major" | "minor";
  x: number;
  y: number;
  fromRegion?: boolean;
  regionLabel?: string;
}

/* ---- IssueSeverityMarker types ---- */

export interface IssueComment {
  id: string;
  author: string;
  avatarColor: string;
  text: string;
  timestamp: string;
}

export interface SeverityMarkerIssue {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  severity: "minor" | "moderate" | "major" | "critical";
  description: string;
  diffPercentage: number;
  comments?: IssueComment[];
  isAI?: boolean;
}

/* ---- MeasureTool types ---- */

export interface MeasurePoint {
  x: number;
  y: number;
}

export interface Measurement {
  id: string;
  start: MeasurePoint;
  end: MeasurePoint;
  distance: number;
  dx: number;
  dy: number;
}

/* ---- TestingScreen types ---- */

export type ViewMode = "overlay" | "sideBySide";

export type AnalysisPhase =
  | "idle"
  | "ready"
  | "mismatch"
  | "adjust"
  | "select"
  | "anchor"
  | "grid-scan"
  | "comparing"
  | "results";

export interface OverlayTransform {
  x: number;
  y: number;
  scale: number;
}

export interface SelectionRect {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface TestedRegion {
  id: string;
  masterRect: RegionRect;
  screenshotIdx: number;
  transform: OverlayTransform;
  report: ComparisonReport;
  selectionPct: SelectionRect;
}

export type ScanEngine = "pixel" | "ai" | "structural";

/* ---- Constants ---- */

export const LONG_PRESS_MS = 400;
export const MIN_SCALE = 0.05;
export const MAX_SCALE = 50;
export const ZOOM_SENSITIVITY = 0.002;
export const DIM_MATCH_THRESHOLD = 0.12;
export const GRID_CELL_SIZE = 128;
export const RING_COLOR = "#3D2C7C";

export const SEVERITY_COLORS: Record<string, string> = {
  critical: "#D32F2F",
  major: "#D32F2F",
  moderate: "#E65100",
  minor: "#F9A825",
};