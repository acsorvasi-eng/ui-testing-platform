// ---------------------------------------------------------------
//  DESIGN VALIDATION ENGINE
//  A 5-step structural validation engine that works alongside
//  PixelEngine. Uses normalized coordinates, Claude Vision for
//  component detection, spatial relationship graphs, and
//  Procrustes alignment for constraint matching.
//
//  Does NOT modify or depend on PixelEngine internals.
// ---------------------------------------------------------------

/* ================================================================== */
/* Types                                                                */
/* ================================================================== */

/** Normalized image representation (0-1 coordinate space) */
export interface NormalizedImage {
  url: string;
  naturalW: number;
  naturalH: number;
  aspectRatio: number;
  /** Base64 data (without mime prefix) for API calls */
  base64: string;
  mime: string;
}

/** UI element types that Claude can detect */
export type ElementType =
  | "button"
  | "text"
  | "image"
  | "icon"
  | "card"
  | "header"
  | "input"
  | "nav"
  | "container"
  | "divider"
  | "badge"
  | "toggle"
  | "list-item"
  | "unknown";

/** A detected UI element with normalized coordinates (0-1 range) */
export interface DetectedElement {
  id: string;
  type: ElementType;
  /** Normalized x position (0-1, left edge) */
  x_norm: number;
  /** Normalized y position (0-1, top edge) */
  y_norm: number;
  /** Normalized width (0-1) */
  w_norm: number;
  /** Normalized height (0-1) */
  h_norm: number;
  /** Human-readable label (e.g. "Submit Button", "Header Text") */
  label: string;
  /** Confidence score from Claude (0-1) */
  confidence: number;
}

/** Spatial relationship types */
export type SpatialRelation =
  | "ABOVE"
  | "BELOW"
  | "LEFT_OF"
  | "RIGHT_OF"
  | "CONTAINED_IN"
  | "CONTAINS"
  | "CENTER_ALIGNED_H"
  | "CENTER_ALIGNED_V"
  | "OVERLAPS";

/** An edge in the layout graph */
export interface LayoutEdge {
  from: string; // element id
  to: string;   // element id
  relation: SpatialRelation;
  /** Distance metric (normalized, 0 = perfectly adjacent/aligned) */
  distance: number;
}

/** Spatial relationship graph built from detected elements */
export interface LayoutGraph {
  elements: DetectedElement[];
  edges: LayoutEdge[];
  /** Adjacency map: elementId → list of connected edge indices */
  adjacency: Record<string, number[]>;
}

/** Per-element match result from constraint checking */
export interface ElementMatch {
  masterId: string;
  masterLabel: string;
  masterType: ElementType;
  /** Best-matching screenshot element (null if missing) */
  screenshotId: string | null;
  screenshotLabel: string | null;
  /** Position deviation (Euclidean distance in normalized coords) */
  positionDeviation: number;
  /** Size deviation (area difference ratio) */
  sizeDeviation: number;
  /** Combined deviation score (0 = perfect, 1 = totally wrong) */
  deviationScore: number;
  /** Whether this element is missing from screenshot */
  missing: boolean;
  /** Constraint errors for this element */
  constraintErrors: string[];
}

/** An individual constraint violation */
export interface ConstraintError {
  elementId: string;
  elementLabel: string;
  expectedRelation: SpatialRelation;
  actualRelation: SpatialRelation | "MISSING";
  relatedElementId: string;
  relatedElementLabel: string;
  severity: "critical" | "major" | "minor";
  description: string;
}

/** Result from constraint matching (Step 4) */
export interface ConstraintMatchResult {
  elementMatches: ElementMatch[];
  constraintErrors: ConstraintError[];
  /** Overall structural similarity (0-1, 1 = identical) */
  structuralScore: number;
  /** Whether Procrustes alignment was applied */
  procrustesApplied: boolean;
  /** Alignment rotation angle in degrees (0 if not applied) */
  alignmentAngle: number;
  /** Scale factor from Procrustes (1.0 if not applied) */
  alignmentScale: number;
}

/** The final validation report (Step 5) */
export interface ValidationReport {
  /** Overall combined score (0-1, 1 = perfect) */
  overallScore: number;
  /** Layout structural score (0-1) */
  layoutScore: number;
  /** Element-level match details */
  elements: ElementMatch[];
  /** All constraint violations found */
  constraintErrors: ConstraintError[];
  /** Detected device info (if any) */
  deviceDetected: string | null;
  /** Number of master elements */
  masterElementCount: number;
  /** Number of screenshot elements */
  screenshotElementCount: number;
  /** Number of matched elements */
  matchedCount: number;
  /** Number of missing elements */
  missingCount: number;
  /** Processing time in ms */
  processingTimeMs: number;
  /** Timestamp */
  generatedAt: string;
}

/** Options for the validate function */
export interface ValidationOptions {
  /** Skip Claude API and use structural heuristics only */
  skipAI?: boolean;
  /** Minimum confidence for element detection (0-1, default 0.5) */
  minConfidence?: number;
  /** Maximum elements to detect per image (default 50) */
  maxElements?: number;
  /** Progress callback */
  onProgress?: (step: number, total: number, label: string) => void;
}

/* ================================================================== */
/* Config                                                               */
/* ================================================================== */

const PROXY_URL =
  "https://woadmikcidskdtnmdhmo.supabase.co/functions/v1/quick-function";
const PROXY_TOKEN =
  "sb_publishable_TbbMBmyFOXYnB30CODmj9Q_9xlAAfcQ";
const MODEL = "claude-opus-4-5-20250514";

/* ================================================================== */
/* STEP 1 — Normalization                                               */
/* ================================================================== */

/**
 * Convert an image URL to a NormalizedImage with base64 data.
 * All coordinates will be expressed in 0-1 normalized space,
 * independent of actual pixel resolution.
 */
export async function normalizeImage(
  imageUrl: string,
  naturalW: number,
  naturalH: number,
): Promise<NormalizedImage> {
  // Extract base64 and mime from data URL
  let base64: string;
  let mime: string;

  if (imageUrl.startsWith("data:")) {
    const match = imageUrl.match(/^data:([^;]+);base64,(.+)$/);
    if (!match) throw new Error("Invalid data URL format");
    mime = match[1];
    base64 = match[2];
  } else {
    // Fetch external URL and convert to base64
    const res = await fetch(imageUrl);
    const blob = await res.blob();
    mime = blob.type || "image/png";
    const arrayBuf = await blob.arrayBuffer();
    base64 = btoa(
      new Uint8Array(arrayBuf).reduce((s, b) => s + String.fromCharCode(b), ""),
    );
  }

  return {
    url: imageUrl,
    naturalW,
    naturalH,
    aspectRatio: naturalW / naturalH,
    base64,
    mime,
  };
}

/* ================================================================== */
/* STEP 2 — Component Detection (Claude Vision)                         */
/* ================================================================== */

const DETECTION_SYSTEM_PROMPT = `You are a UI element detection system. Your job is to analyze a UI screenshot and identify all visible UI elements with their bounding boxes.

RULES:
1. Return ONLY a raw JSON array. No explanations, no markdown fences.
2. All coordinates must be normalized to 0-1 range (0=top/left, 1=bottom/right).
3. Be thorough — detect every visible element including small icons, badges, dividers.
4. Assign a confidence score (0-1) to each detection.
5. Use descriptive labels that identify the element's purpose.

ELEMENT TYPES (use exactly these strings):
"button", "text", "image", "icon", "card", "header", "input", "nav", "container", "divider", "badge", "toggle", "list-item", "unknown"

RESPONSE SCHEMA — each array item:
{
  "id": "el_1",
  "type": "button",
  "x_norm": 0.05,
  "y_norm": 0.12,
  "w_norm": 0.25,
  "h_norm": 0.06,
  "label": "Submit Button",
  "confidence": 0.95
}`;

/**
 * Send an image to Claude Vision and get detected UI elements back.
 */
export async function detectComponents(
  image: NormalizedImage,
  options: { maxElements?: number; minConfidence?: number } = {},
): Promise<DetectedElement[]> {
  const maxEl = options.maxElements ?? 50;
  const minConf = options.minConfidence ?? 0.5;

  const userPrompt = `Analyze this UI screenshot (${image.naturalW}x${image.naturalH}px). Detect up to ${maxEl} UI elements. Return normalized coordinates (0-1). Only include elements with confidence >= ${minConf}.`;

  try {
    const response = await fetch(PROXY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PROXY_TOKEN}`,
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 4096,
        system: DETECTION_SYSTEM_PROMPT,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image",
                source: {
                  type: "base64",
                  media_type: image.mime,
                  data: image.base64,
                },
              },
              { type: "text", text: userPrompt },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error(`[DVE] Claude API error: ${response.status}`);
      return [];
    }

    const data = await response.json();
    const text =
      data?.content?.[0]?.text ?? data?.choices?.[0]?.message?.content ?? "";
    const cleaned = text.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
    const parsed: DetectedElement[] = JSON.parse(cleaned);

    // Validate and filter
    return parsed
      .filter(
        (el) =>
          el.confidence >= minConf &&
          el.x_norm >= 0 && el.x_norm <= 1 &&
          el.y_norm >= 0 && el.y_norm <= 1 &&
          el.w_norm > 0 && el.h_norm > 0,
      )
      .slice(0, maxEl);
  } catch (err) {
    console.error("[DVE] Component detection failed:", err);
    return [];
  }
}

/* ================================================================== */
/* STEP 3 — Layout Graph                                                */
/* ================================================================== */

/** Threshold for "center aligned" — normalized distance */
const CENTER_ALIGN_THRESHOLD = 0.03;
/** Threshold for "contained" — how much of child must be inside parent */
const CONTAINMENT_THRESHOLD = 0.85;
/** Maximum gap (normalized) to consider elements as spatially related */
const PROXIMITY_THRESHOLD = 0.3;

function centerX(el: DetectedElement) { return el.x_norm + el.w_norm / 2; }
function centerY(el: DetectedElement) { return el.y_norm + el.h_norm / 2; }
function right(el: DetectedElement) { return el.x_norm + el.w_norm; }
function bottom(el: DetectedElement) { return el.y_norm + el.h_norm; }

function overlapArea(a: DetectedElement, b: DetectedElement): number {
  const x1 = Math.max(a.x_norm, b.x_norm);
  const y1 = Math.max(a.y_norm, b.y_norm);
  const x2 = Math.min(right(a), right(b));
  const y2 = Math.min(bottom(a), bottom(b));
  if (x2 <= x1 || y2 <= y1) return 0;
  return (x2 - x1) * (y2 - y1);
}

function area(el: DetectedElement): number {
  return el.w_norm * el.h_norm;
}

/**
 * Build a spatial relationship graph from detected elements.
 */
export function buildLayoutGraph(elements: DetectedElement[]): LayoutGraph {
  const edges: LayoutEdge[] = [];
  const adjacency: Record<string, number[]> = {};

  // Initialize adjacency
  for (const el of elements) {
    adjacency[el.id] = [];
  }

  for (let i = 0; i < elements.length; i++) {
    const a = elements[i];
    for (let j = i + 1; j < elements.length; j++) {
      const b = elements[j];

      // Check containment (a contains b)
      const overlap = overlapArea(a, b);
      const areaB = area(b);
      const areaA = area(a);

      if (areaB > 0 && overlap / areaB >= CONTAINMENT_THRESHOLD && areaA > areaB * 1.5) {
        const edgeIdx = edges.length;
        edges.push({ from: a.id, to: b.id, relation: "CONTAINS", distance: 0 });
        adjacency[a.id].push(edgeIdx);
        adjacency[b.id].push(edgeIdx);

        const edgeIdx2 = edges.length;
        edges.push({ from: b.id, to: a.id, relation: "CONTAINED_IN", distance: 0 });
        adjacency[b.id].push(edgeIdx2);
        adjacency[a.id].push(edgeIdx2);
        continue;
      }

      if (areaA > 0 && overlap / areaA >= CONTAINMENT_THRESHOLD && areaB > areaA * 1.5) {
        const edgeIdx = edges.length;
        edges.push({ from: b.id, to: a.id, relation: "CONTAINS", distance: 0 });
        adjacency[b.id].push(edgeIdx);
        adjacency[a.id].push(edgeIdx);

        const edgeIdx2 = edges.length;
        edges.push({ from: a.id, to: b.id, relation: "CONTAINED_IN", distance: 0 });
        adjacency[a.id].push(edgeIdx2);
        adjacency[b.id].push(edgeIdx2);
        continue;
      }

      // Check overlaps
      if (overlap > 0) {
        const edgeIdx = edges.length;
        edges.push({
          from: a.id,
          to: b.id,
          relation: "OVERLAPS",
          distance: overlap / Math.max(areaA, areaB),
        });
        adjacency[a.id].push(edgeIdx);
        adjacency[b.id].push(edgeIdx);
      }

      // Spatial relations (non-overlapping elements)
      const gapX = Math.max(0, Math.max(a.x_norm - right(b), b.x_norm - right(a)));
      const gapY = Math.max(0, Math.max(a.y_norm - bottom(b), b.y_norm - bottom(a)));

      if (gapX + gapY > PROXIMITY_THRESHOLD) continue;

      // Vertical relations
      if (bottom(a) <= b.y_norm + 0.01) {
        const dist = b.y_norm - bottom(a);
        const edgeIdx = edges.length;
        edges.push({ from: a.id, to: b.id, relation: "ABOVE", distance: dist });
        adjacency[a.id].push(edgeIdx);
        adjacency[b.id].push(edgeIdx);

        const edgeIdx2 = edges.length;
        edges.push({ from: b.id, to: a.id, relation: "BELOW", distance: dist });
        adjacency[b.id].push(edgeIdx2);
        adjacency[a.id].push(edgeIdx2);
      } else if (bottom(b) <= a.y_norm + 0.01) {
        const dist = a.y_norm - bottom(b);
        const edgeIdx = edges.length;
        edges.push({ from: b.id, to: a.id, relation: "ABOVE", distance: dist });
        adjacency[b.id].push(edgeIdx);
        adjacency[a.id].push(edgeIdx);

        const edgeIdx2 = edges.length;
        edges.push({ from: a.id, to: b.id, relation: "BELOW", distance: dist });
        adjacency[a.id].push(edgeIdx2);
        adjacency[b.id].push(edgeIdx2);
      }

      // Horizontal relations
      if (right(a) <= b.x_norm + 0.01) {
        const dist = b.x_norm - right(a);
        const edgeIdx = edges.length;
        edges.push({ from: a.id, to: b.id, relation: "LEFT_OF", distance: dist });
        adjacency[a.id].push(edgeIdx);
        adjacency[b.id].push(edgeIdx);

        const edgeIdx2 = edges.length;
        edges.push({ from: b.id, to: a.id, relation: "RIGHT_OF", distance: dist });
        adjacency[b.id].push(edgeIdx2);
        adjacency[a.id].push(edgeIdx2);
      } else if (right(b) <= a.x_norm + 0.01) {
        const dist = a.x_norm - right(b);
        const edgeIdx = edges.length;
        edges.push({ from: b.id, to: a.id, relation: "LEFT_OF", distance: dist });
        adjacency[b.id].push(edgeIdx);
        adjacency[a.id].push(edgeIdx);

        const edgeIdx2 = edges.length;
        edges.push({ from: a.id, to: b.id, relation: "RIGHT_OF", distance: dist });
        adjacency[a.id].push(edgeIdx2);
        adjacency[b.id].push(edgeIdx2);
      }

      // Center alignment checks
      if (Math.abs(centerX(a) - centerX(b)) < CENTER_ALIGN_THRESHOLD) {
        const edgeIdx = edges.length;
        edges.push({
          from: a.id,
          to: b.id,
          relation: "CENTER_ALIGNED_H",
          distance: Math.abs(centerX(a) - centerX(b)),
        });
        adjacency[a.id].push(edgeIdx);
        adjacency[b.id].push(edgeIdx);
      }

      if (Math.abs(centerY(a) - centerY(b)) < CENTER_ALIGN_THRESHOLD) {
        const edgeIdx = edges.length;
        edges.push({
          from: a.id,
          to: b.id,
          relation: "CENTER_ALIGNED_V",
          distance: Math.abs(centerY(a) - centerY(b)),
        });
        adjacency[a.id].push(edgeIdx);
        adjacency[b.id].push(edgeIdx);
      }
    }
  }

  console.log(
    `[DVE] Layout graph: ${elements.length} elements, ${edges.length} edges`,
  );

  return { elements, edges, adjacency };
}

/* ================================================================== */
/* STEP 4 — Constraint Matching                                         */
/* ================================================================== */

/**
 * Procrustes analysis: find optimal rotation, scale, translation
 * to align screenshot points onto master points.
 * Uses simplified 2D rigid-body alignment (scale + rotation).
 */
function procrustesAlign(
  masterCenters: [number, number][],
  screenshotCenters: [number, number][],
): { scale: number; angle: number; tx: number; ty: number; transformed: [number, number][] } {
  const n = Math.min(masterCenters.length, screenshotCenters.length);
  if (n < 2) {
    return {
      scale: 1,
      angle: 0,
      tx: 0,
      ty: 0,
      transformed: screenshotCenters.map((c) => [...c] as [number, number]),
    };
  }

  // Compute centroids
  let mxSum = 0, mySum = 0, sxSum = 0, sySum = 0;
  for (let i = 0; i < n; i++) {
    mxSum += masterCenters[i][0];
    mySum += masterCenters[i][1];
    sxSum += screenshotCenters[i][0];
    sySum += screenshotCenters[i][1];
  }
  const mcx = mxSum / n, mcy = mySum / n;
  const scx = sxSum / n, scy = sySum / n;

  // Center the points
  const mCentered = masterCenters.map(
    (c) => [c[0] - mcx, c[1] - mcy] as [number, number],
  );
  const sCentered = screenshotCenters.slice(0, n).map(
    (c) => [c[0] - scx, c[1] - scy] as [number, number],
  );

  // Compute optimal rotation and scale using SVD-like approach
  let num = 0, den = 0;
  let ssNorm = 0;
  for (let i = 0; i < n; i++) {
    num += sCentered[i][0] * mCentered[i][1] - sCentered[i][1] * mCentered[i][0];
    den += sCentered[i][0] * mCentered[i][0] + sCentered[i][1] * mCentered[i][1];
    ssNorm += sCentered[i][0] ** 2 + sCentered[i][1] ** 2;
  }

  const angle = Math.atan2(num, den);
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);

  // Compute scale
  let numerator = 0;
  for (let i = 0; i < n; i++) {
    const rx = sCentered[i][0] * cosA - sCentered[i][1] * sinA;
    const ry = sCentered[i][0] * sinA + sCentered[i][1] * cosA;
    numerator += rx * mCentered[i][0] + ry * mCentered[i][1];
  }
  const scale = ssNorm > 0 ? numerator / ssNorm : 1;

  // Translation
  const tx = mcx - scale * (scx * cosA - scy * sinA);
  const ty = mcy - scale * (scx * sinA + scy * cosA);

  // Transform all screenshot centers
  const transformed = screenshotCenters.map((c) => {
    const x = scale * (c[0] * cosA - c[1] * sinA) + tx;
    const y = scale * (c[0] * sinA + c[1] * cosA) + ty;
    return [x, y] as [number, number];
  });

  return {
    scale,
    angle: (angle * 180) / Math.PI,
    tx,
    ty,
    transformed,
  };
}

/**
 * Find the best matching screenshot element for each master element.
 * Uses Hungarian-like greedy matching based on type + position proximity.
 */
function matchElements(
  masterElements: DetectedElement[],
  screenshotElements: DetectedElement[],
  transformedCenters?: [number, number][],
): Map<string, string> {
  const matches = new Map<string, string>();
  const usedScreenshot = new Set<string>();

  // Score function: lower is better
  function matchScore(
    mEl: DetectedElement,
    sEl: DetectedElement,
    sIdx: number,
  ): number {
    // Type mismatch penalty
    const typePenalty = mEl.type === sEl.type ? 0 : 0.5;

    // Position distance (use transformed centers if available)
    let dx: number, dy: number;
    if (transformedCenters && sIdx < transformedCenters.length) {
      dx = centerX(mEl) - transformedCenters[sIdx][0];
      dy = centerY(mEl) - transformedCenters[sIdx][1];
    } else {
      dx = centerX(mEl) - centerX(sEl);
      dy = centerY(mEl) - centerY(sEl);
    }
    const posDist = Math.sqrt(dx * dx + dy * dy);

    // Size similarity
    const sizeDiff =
      Math.abs(mEl.w_norm - sEl.w_norm) + Math.abs(mEl.h_norm - sEl.h_norm);

    return typePenalty + posDist * 2 + sizeDiff;
  }

  // Greedy matching: for each master element, find best unused screenshot element
  // Sort master elements by size (larger first for better structural matching)
  const sortedMaster = [...masterElements].sort(
    (a, b) => area(b) - area(a),
  );

  for (const mEl of sortedMaster) {
    let bestScore = Infinity;
    let bestSIdx = -1;
    let bestSEl: DetectedElement | null = null;

    for (let sIdx = 0; sIdx < screenshotElements.length; sIdx++) {
      const sEl = screenshotElements[sIdx];
      if (usedScreenshot.has(sEl.id)) continue;

      const score = matchScore(mEl, sEl, sIdx);
      if (score < bestScore) {
        bestScore = score;
        bestSIdx = sIdx;
        bestSEl = sEl;
      }
    }

    // Only accept match if score is reasonable (< 1.0)
    if (bestSEl && bestScore < 1.0) {
      matches.set(mEl.id, bestSEl.id);
      usedScreenshot.add(bestSEl.id);
    }
  }

  return matches;
}

/**
 * Compare master layout graph vs screenshot layout graph.
 * Applies Procrustes alignment if aspect ratios differ >5%.
 */
export function matchConstraints(
  masterGraph: LayoutGraph,
  screenshotGraph: LayoutGraph,
  masterAspectRatio: number,
  screenshotAspectRatio: number,
): ConstraintMatchResult {
  const aspectDiff = Math.abs(masterAspectRatio - screenshotAspectRatio) / masterAspectRatio;
  const usesProcrustes = aspectDiff > 0.05;

  let transformedCenters: [number, number][] | undefined;
  let alignAngle = 0;
  let alignScale = 1;

  if (usesProcrustes && masterGraph.elements.length >= 2 && screenshotGraph.elements.length >= 2) {
    console.log(
      `[DVE] Aspect ratio diff ${(aspectDiff * 100).toFixed(1)}% > 5%, applying Procrustes alignment`,
    );

    const masterCenters: [number, number][] = masterGraph.elements.map(
      (el) => [centerX(el), centerY(el)],
    );
    const ssCenters: [number, number][] = screenshotGraph.elements.map(
      (el) => [centerX(el), centerY(el)],
    );

    // Pre-match elements for Procrustes input (use only type-matched pairs)
    const preMatch = matchElements(masterGraph.elements, screenshotGraph.elements);
    const pairedMaster: [number, number][] = [];
    const pairedSS: [number, number][] = [];

    for (const [mId, sId] of preMatch) {
      const mEl = masterGraph.elements.find((e) => e.id === mId);
      const sEl = screenshotGraph.elements.find((e) => e.id === sId);
      if (mEl && sEl) {
        pairedMaster.push([centerX(mEl), centerY(mEl)]);
        pairedSS.push([centerX(sEl), centerY(sEl)]);
      }
    }

    if (pairedMaster.length >= 2) {
      const procResult = procrustesAlign(pairedMaster, pairedSS);
      alignAngle = procResult.angle;
      alignScale = procResult.scale;
      // Transform ALL screenshot centers (not just paired ones)
      transformedCenters = ssCenters.map((c) => {
        const cosA = Math.cos((procResult.angle * Math.PI) / 180);
        const sinA = Math.sin((procResult.angle * Math.PI) / 180);
        return [
          procResult.scale * (c[0] * cosA - c[1] * sinA) + procResult.tx,
          procResult.scale * (c[0] * sinA + c[1] * cosA) + procResult.ty,
        ] as [number, number];
      });
    }
  }

  // Match elements with (possibly) transformed coordinates
  const elementMap = matchElements(
    masterGraph.elements,
    screenshotGraph.elements,
    transformedCenters,
  );

  // Build per-element match results
  const elementMatches: ElementMatch[] = [];
  const constraintErrors: ConstraintError[] = [];

  for (const mEl of masterGraph.elements) {
    const sId = elementMap.get(mEl.id) ?? null;
    const sEl = sId
      ? screenshotGraph.elements.find((e) => e.id === sId) ?? null
      : null;

    if (!sEl) {
      // Missing element
      elementMatches.push({
        masterId: mEl.id,
        masterLabel: mEl.label,
        masterType: mEl.type,
        screenshotId: null,
        screenshotLabel: null,
        positionDeviation: 1,
        sizeDeviation: 1,
        deviationScore: 1,
        missing: true,
        constraintErrors: ["Element missing from screenshot"],
      });

      constraintErrors.push({
        elementId: mEl.id,
        elementLabel: mEl.label,
        expectedRelation: "CONTAINED_IN",
        actualRelation: "MISSING",
        relatedElementId: "screenshot",
        relatedElementLabel: "Screenshot",
        severity: "critical",
        description: `"${mEl.label}" (${mEl.type}) is missing from the screenshot`,
      });
      continue;
    }

    // Compute deviations
    const sIdx = screenshotGraph.elements.indexOf(sEl);
    let dx: number, dy: number;
    if (transformedCenters && sIdx >= 0 && sIdx < transformedCenters.length) {
      dx = centerX(mEl) - transformedCenters[sIdx][0];
      dy = centerY(mEl) - transformedCenters[sIdx][1];
    } else {
      dx = centerX(mEl) - centerX(sEl);
      dy = centerY(mEl) - centerY(sEl);
    }
    const posDev = Math.sqrt(dx * dx + dy * dy);
    const sizeDev = Math.abs(area(mEl) - area(sEl)) / Math.max(area(mEl), 0.0001);
    const devScore = Math.min(1, posDev * 2 + sizeDev * 0.5);

    const elErrors: string[] = [];

    // Check constraint preservation
    const mEdges = masterGraph.adjacency[mEl.id] ?? [];
    for (const edgeIdx of mEdges) {
      const edge = masterGraph.edges[edgeIdx];
      if (edge.from !== mEl.id) continue; // only check outgoing edges

      const relatedMasterId = edge.to;
      const relatedSSId = elementMap.get(relatedMasterId);
      if (!relatedSSId) continue; // related element is missing (already reported)

      // Check if same relation exists in screenshot graph
      const sEdges = screenshotGraph.adjacency[sEl.id] ?? [];
      const hasRelation = sEdges.some((seIdx) => {
        const se = screenshotGraph.edges[seIdx];
        return (
          se.from === sEl.id &&
          se.to === relatedSSId &&
          se.relation === edge.relation
        );
      });

      if (!hasRelation) {
        const relatedMasterEl = masterGraph.elements.find(
          (e) => e.id === relatedMasterId,
        );
        const errMsg = `Expected "${mEl.label}" ${edge.relation} "${relatedMasterEl?.label ?? relatedMasterId}", but relationship not found in screenshot`;
        elErrors.push(errMsg);

        constraintErrors.push({
          elementId: mEl.id,
          elementLabel: mEl.label,
          expectedRelation: edge.relation,
          actualRelation: "MISSING",
          relatedElementId: relatedMasterId,
          relatedElementLabel: relatedMasterEl?.label ?? relatedMasterId,
          severity: posDev > 0.15 ? "critical" : posDev > 0.05 ? "major" : "minor",
          description: errMsg,
        });
      }
    }

    elementMatches.push({
      masterId: mEl.id,
      masterLabel: mEl.label,
      masterType: mEl.type,
      screenshotId: sEl.id,
      screenshotLabel: sEl.label,
      positionDeviation: posDev,
      sizeDeviation: sizeDev,
      deviationScore: devScore,
      missing: false,
      constraintErrors: elErrors,
    });
  }

  // Compute structural score
  const totalElements = masterGraph.elements.length;
  const structuralScore =
    totalElements > 0
      ? elementMatches.reduce(
          (sum, m) => sum + (1 - m.deviationScore),
          0,
        ) / totalElements
      : 1;

  console.log(
    `[DVE] Constraint matching: ${elementMatches.filter((m) => !m.missing).length}/${totalElements} matched, ` +
    `${constraintErrors.length} constraint errors, structural score: ${structuralScore.toFixed(3)}`,
  );

  return {
    elementMatches,
    constraintErrors,
    structuralScore,
    procrustesApplied: usesProcrustes,
    alignmentAngle: alignAngle,
    alignmentScale: alignScale,
  };
}

/* ================================================================== */
/* STEP 5 — Scoring & Report                                            */
/* ================================================================== */

/**
 * Generate the final validation report from constraint match results.
 */
export function generateValidationReport(
  matchResult: ConstraintMatchResult,
  masterElementCount: number,
  screenshotElementCount: number,
  deviceDetected: string | null,
  processingTimeMs: number,
): ValidationReport {
  const matchedCount = matchResult.elementMatches.filter((m) => !m.missing).length;
  const missingCount = matchResult.elementMatches.filter((m) => m.missing).length;

  // Layout score considers structural integrity
  const layoutScore = matchResult.structuralScore;

  // Overall score: weighted combination
  // - 60% structural/layout score
  // - 20% element coverage (matched / total master)
  // - 20% penalty for constraint errors
  const coverageScore = masterElementCount > 0 ? matchedCount / masterElementCount : 1;
  const errorPenalty = Math.min(
    1,
    matchResult.constraintErrors.length * 0.05,
  );

  const overallScore = Math.max(
    0,
    layoutScore * 0.6 + coverageScore * 0.2 + (1 - errorPenalty) * 0.2,
  );

  return {
    overallScore,
    layoutScore,
    elements: matchResult.elementMatches,
    constraintErrors: matchResult.constraintErrors,
    deviceDetected,
    masterElementCount,
    screenshotElementCount,
    matchedCount,
    missingCount,
    processingTimeMs,
    generatedAt: new Date().toISOString(),
  };
}

/* ================================================================== */
/* Main entry point                                                     */
/* ================================================================== */

/**
 * Run the full 5-step design validation pipeline.
 *
 * @param masterUrl    - Data URL or HTTP URL of the master design
 * @param screenshotUrl - Data URL or HTTP URL of the screenshot
 * @param masterDims   - Natural dimensions of the master image
 * @param screenshotDims - Natural dimensions of the screenshot
 * @param options      - Validation options
 * @returns Promise<ValidationReport>
 */
export async function validateDesign(
  masterUrl: string,
  screenshotUrl: string,
  masterDims: { w: number; h: number },
  screenshotDims: { w: number; h: number },
  options: ValidationOptions = {},
): Promise<ValidationReport> {
  const startTime = performance.now();
  const progress = options.onProgress ?? (() => {});
  const totalSteps = 5;

  console.log("[DVE] Starting design validation pipeline...");

  // ---- STEP 1: Normalization ----
  progress(1, totalSteps, "Normalizing images...");
  console.log("[DVE] Step 1/5: Normalization");

  const [masterNorm, screenshotNorm] = await Promise.all([
    normalizeImage(masterUrl, masterDims.w, masterDims.h),
    normalizeImage(screenshotUrl, screenshotDims.w, screenshotDims.h),
  ]);

  console.log(
    `[DVE] Normalized: master ${masterNorm.naturalW}x${masterNorm.naturalH} ` +
    `(AR: ${masterNorm.aspectRatio.toFixed(3)}), ` +
    `screenshot ${screenshotNorm.naturalW}x${screenshotNorm.naturalH} ` +
    `(AR: ${screenshotNorm.aspectRatio.toFixed(3)})`,
  );

  // ---- STEP 2: Component Detection ----
  progress(2, totalSteps, "Detecting UI components...");
  console.log("[DVE] Step 2/5: Component Detection (Claude Vision)");

  let masterElements: DetectedElement[];
  let screenshotElements: DetectedElement[];

  if (options.skipAI) {
    console.log("[DVE] AI skipped — using empty element lists");
    masterElements = [];
    screenshotElements = [];
  } else {
    [masterElements, screenshotElements] = await Promise.all([
      detectComponents(masterNorm, {
        maxElements: options.maxElements,
        minConfidence: options.minConfidence,
      }),
      detectComponents(screenshotNorm, {
        maxElements: options.maxElements,
        minConfidence: options.minConfidence,
      }),
    ]);
  }

  console.log(
    `[DVE] Detected: ${masterElements.length} master elements, ${screenshotElements.length} screenshot elements`,
  );

  // ---- STEP 3: Layout Graph ----
  progress(3, totalSteps, "Building layout graphs...");
  console.log("[DVE] Step 3/5: Layout Graph Construction");

  const masterGraph = buildLayoutGraph(masterElements);
  const screenshotGraph = buildLayoutGraph(screenshotElements);

  // ---- STEP 4: Constraint Matching ----
  progress(4, totalSteps, "Matching constraints...");
  console.log("[DVE] Step 4/5: Constraint Matching");

  const matchResult = matchConstraints(
    masterGraph,
    screenshotGraph,
    masterNorm.aspectRatio,
    screenshotNorm.aspectRatio,
  );

  // ---- STEP 5: Scoring & Report ----
  progress(5, totalSteps, "Generating report...");
  console.log("[DVE] Step 5/5: Scoring & Report Generation");

  // Detect device from auto-detect system (import not needed — just pass through)
  const processingTimeMs = performance.now() - startTime;

  const report = generateValidationReport(
    matchResult,
    masterElements.length,
    screenshotElements.length,
    null, // deviceDetected — caller can set this from autoDetectDevice result
    processingTimeMs,
  );

  console.log(
    `[DVE] Validation complete in ${processingTimeMs.toFixed(0)}ms. ` +
    `Overall: ${(report.overallScore * 100).toFixed(1)}%, ` +
    `Layout: ${(report.layoutScore * 100).toFixed(1)}%, ` +
    `Matched: ${report.matchedCount}/${report.masterElementCount}, ` +
    `Missing: ${report.missingCount}, ` +
    `Errors: ${report.constraintErrors.length}`,
  );

  return report;
}
