// ---------------------------------------------------------------
//  UI VISUAL QA -- Claude Opus 4 integration
//  AI-powered visual regression analysis using multi-region scanning.
//
//  Calls go through a Supabase Edge Function proxy to avoid CORS
//  issues and keep the Anthropic API key server-side.
// ---------------------------------------------------------------

import type { OpusIssue } from "../types";

// Re-export type for backward compatibility
export type { OpusIssue };

/** Supabase Edge Function proxy endpoint */
let OPUS_PROXY_URL =
  "https://woadmikcidskdtnmdhmo.supabase.co/functions/v1/quick-function";

/** Publishable Supabase token for the proxy */
let OPUS_PROXY_TOKEN =
  "sb_publishable_TbbMBmyFOXYnB30CODmj9Q_9xlAAfcQ";

/** When true, returns mock AI issues instead of calling the real API */
let OPUS_USE_MOCK = true;

export function configureOpus(opts: {
  proxyUrl?: string;
  proxyToken?: string;
  useMock?: boolean;
}) {
  if (opts.proxyUrl) OPUS_PROXY_URL = opts.proxyUrl;
  if (opts.proxyToken) OPUS_PROXY_TOKEN = opts.proxyToken;
  if (opts.useMock !== undefined) OPUS_USE_MOCK = opts.useMock;
}

// --- System prompt ---

const OPUS_SYSTEM_PROMPT = `
You are a senior pixel-perfect UI QA engineer embedded inside a visual regression testing tool.
Your ONLY job is to compare two UI images and return structured JSON issue reports.

BEHAVIORAL RULES -- you must follow these without exception:
1. Never explain your reasoning in prose. Never add introductory text. Never add a summary after the JSON.
2. Always return a raw JSON array as your ENTIRE response -- nothing before, nothing after.
3. If you find zero issues in the given region, return exactly: []
4. Coordinates x,y are always percentages (0-100) relative to the image or region passed to you.
5. Be exhaustive. Do not skip minor issues. A 1px padding difference is worth reporting.
6. Never hallucinate issues. Only report what you can visually confirm.
7. De-duplicate: if the same issue appears in multiple sub-regions, report it only once.
8. Estimate pixel values wherever possible ("~8px instead of 16px").

SEVERITY RULES:
- "critical" -> wrong color, wrong font family, wrong font weight, missing/extra element, border-radius off >4px, padding off >8px
- "major"    -> font size off >2px, spacing off 4-8px, wrong shadow, wrong border width/style, wrong alignment
- "minor"    -> spacing off 1-3px, slight color tint, letter-spacing, line-height, text-transform mismatch

ISSUE SCHEMA -- each item must match exactly:
{
  "id": number,
  "type": string,
  "desc": string,
  "severity": string,
  "x": number,
  "y": number
}

CATEGORIES TO INSPECT EVERY TIME:
1. COLORS          -- background, text, icon, border, gradient stops, shadow color+opacity, all states
2. TYPOGRAPHY      -- font family, size (px estimate), weight, line-height, letter-spacing, alignment, decoration, transform, truncation
3. PADDING         -- top / bottom / left / right inside every element separately
4. MARGINS & GAPS  -- between every pair of adjacent elements, horizontal and vertical
5. SIZING          -- width, height, icon size, avatar, button, input
6. BORDER & RADIUS -- radius per corner (estimate px), border width, style, color, missing/extra border
7. SHADOWS         -- blur, spread, direction, color, opacity, missing/extra
8. ALIGNMENT       -- centering (horizontal+vertical), baseline, flex/grid direction
9. ICONS & IMAGES  -- outline vs filled variant, wrong icon, size, rotation, crop, aspect ratio
10. ELEMENTS       -- anything in master missing from screenshot, anything extra in screenshot
`.trim();


// --- Prompt builders ---

function buildRegionPrompt({ rx, ry, rw, rh, label, startId = 1 }: {
  rx: number; ry: number; rw: number; rh: number;
  label: string; startId?: number;
}) {
  return `
Analyze the region: x ${Math.round(rx)}%-${Math.round(rx + rw)}%, y ${Math.round(ry)}%-${Math.round(ry + rh)}% of the images.
Focus ONLY on what is visible inside this region: "${label}".
Start issue IDs from ${startId}.
Report x,y coordinates relative to this region (0,0 = top-left of region).
Return raw JSON array only.
`.trim();
}

function buildFullPrompt({ startId = 1 } = {}) {
  return `
Compare the full images. Start issue IDs from ${startId}.
x,y coordinates are relative to the full image (0,0 = top-left).
Return raw JSON array only.
`.trim();
}


// --- Mock data generator ---

const MOCK_ISSUE_TEMPLATES: Array<{ type: string; descTemplate: string; severity: "critical" | "major" | "minor" }> = [
  { type: "color", descTemplate: "Background color mismatch: master #FFFFFF vs screenshot #F8F8F8", severity: "minor" },
  { type: "typography", descTemplate: "Font weight difference: master 600 vs screenshot 400", severity: "critical" },
  { type: "padding", descTemplate: "Left padding off: master ~16px vs screenshot ~12px (~4px difference)", severity: "major" },
  { type: "margin", descTemplate: "Vertical spacing between elements: master ~24px vs screenshot ~20px", severity: "minor" },
  { type: "sizing", descTemplate: "Button height mismatch: master ~40px vs screenshot ~36px", severity: "major" },
  { type: "radius", descTemplate: "Border radius off: master ~8px vs screenshot ~4px", severity: "major" },
  { type: "shadow", descTemplate: "Drop shadow missing on card element", severity: "critical" },
  { type: "alignment", descTemplate: "Text not vertically centered in container (~2px offset)", severity: "minor" },
  { type: "icon", descTemplate: "Icon size mismatch: master ~20px vs screenshot ~16px", severity: "major" },
  { type: "color", descTemplate: "Border color difference: master #E0E0E0 vs screenshot #CCCCCC", severity: "minor" },
  { type: "typography", descTemplate: "Line-height difference: master ~1.5 vs screenshot ~1.4", severity: "minor" },
  { type: "padding", descTemplate: "Right padding off: master ~20px vs screenshot ~16px", severity: "major" },
];

function generateMockIssues(
  rx: number, ry: number, rw: number, rh: number,
  startId: number, cellLabel: string,
): OpusIssue[] {
  const seed = Math.floor(rx * 7 + ry * 13 + rw + rh);
  const count = 1 + (seed % 3);
  const issues: OpusIssue[] = [];

  for (let i = 0; i < count; i++) {
    const templateIdx = (seed + i * 5) % MOCK_ISSUE_TEMPLATES.length;
    const tmpl = MOCK_ISSUE_TEMPLATES[templateIdx];
    issues.push({
      id: startId + i,
      type: tmpl.type,
      desc: tmpl.descTemplate,
      severity: tmpl.severity,
      x: rx + ((15 + ((seed * (i + 1) * 37) % 70)) / 100) * rw,
      y: ry + ((15 + ((seed * (i + 1) * 53) % 70)) / 100) * rh,
      fromRegion: true,
      regionLabel: cellLabel,
    });
  }

  return issues;
}


// --- Core API call ---

async function callOpusQA({ masterB64, masterMime, shotB64, shotMime, userPrompt }: {
  masterB64: string; masterMime: string;
  shotB64: string; shotMime: string;
  userPrompt: string;
}): Promise<OpusIssue[]> {
  const response = await fetch(OPUS_PROXY_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPUS_PROXY_TOKEN}`,
    },
    body: JSON.stringify({
      model: "claude-opus-4-5-20250514",
      max_tokens: 4096,
      system: OPUS_SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image",
              source: { type: "base64", media_type: masterMime, data: masterB64 },
            },
            {
              type: "image",
              source: { type: "base64", media_type: shotMime, data: shotB64 },
            },
            {
              type: "text",
              text: userPrompt,
            },
          ],
        },
      ],
    }),
  });

  const data = await response.json();

  if (data.error) throw new Error(data.error.message || JSON.stringify(data.error));

  const raw = (data.content || [])
    .filter((b: { type: string }) => b.type === "text")
    .map((b: { text: string }) => b.text)
    .join("");

  const match = raw.match(/\[[\s\S]*\]/);
  if (!match) return [];

  return JSON.parse(match[0]);
}


// --- Public API ---

/** Quick single-pass full analysis */
export async function runFullAnalysis({ masterB64, masterMime, shotB64, shotMime }: {
  masterB64: string; masterMime: string;
  shotB64: string; shotMime: string;
}): Promise<OpusIssue[]> {
  if (OPUS_USE_MOCK) {
    await new Promise((r) => setTimeout(r, 800));
    return generateMockIssues(0, 0, 100, 100, 1, "Full Image");
  }
  return callOpusQA({
    masterB64, masterMime, shotB64, shotMime,
    userPrompt: buildFullPrompt(),
  });
}

/** Isolated region test */
export async function runRegionAnalysis({
  masterB64, masterMime, shotB64, shotMime,
  rx, ry, rw, rh, label = "Region", startId = 1,
}: {
  masterB64: string; masterMime: string;
  shotB64: string; shotMime: string;
  rx: number; ry: number; rw: number; rh: number;
  label?: string; startId?: number;
}): Promise<OpusIssue[]> {
  if (OPUS_USE_MOCK) {
    await new Promise((r) => setTimeout(r, 400));
    return generateMockIssues(rx, ry, rw, rh, startId, label);
  }

  const issues = await callOpusQA({
    masterB64, masterMime, shotB64, shotMime,
    userPrompt: buildRegionPrompt({ rx, ry, rw, rh, label, startId }),
  });

  return issues.map((iss) => ({
    ...iss,
    x: rx + (iss.x / 100) * rw,
    y: ry + (iss.y / 100) * rh,
    regionLabel: label,
    fromRegion: true,
  }));
}


// --- Grid cell definitions ---
const GRID_CELLS = [
  { x: 0, y: 0, w: 50, h: 50, label: "Top Left" },
  { x: 25, y: 0, w: 50, h: 50, label: "Top Center" },
  { x: 50, y: 0, w: 50, h: 50, label: "Top Right" },
  { x: 0, y: 50, w: 50, h: 50, label: "Bottom Left" },
  { x: 25, y: 50, w: 50, h: 50, label: "Bottom Center" },
  { x: 50, y: 50, w: 50, h: 50, label: "Bottom Right" },
];

/** Grid scan -- splits image into overlapping cells, calls Opus per cell, deduplicates */
export async function runDetailedScan({
  masterB64, masterMime, shotB64, shotMime,
  onProgress,
  onPartial,
  abortSignal,
}: {
  masterB64: string; masterMime: string;
  shotB64: string; shotMime: string;
  onProgress?: (current: number, total: number, label: string) => void;
  onPartial?: (allIssues: OpusIssue[]) => void;
  abortSignal?: { current: boolean };
}): Promise<OpusIssue[]> {
  let allIssues: OpusIssue[] = [];
  let globalId = 1;

  for (let i = 0; i < GRID_CELLS.length; i++) {
    if (abortSignal?.current) break;

    const cell = GRID_CELLS[i];
    onProgress?.(i + 1, GRID_CELLS.length, cell.label);

    try {
      let raw: OpusIssue[];

      if (OPUS_USE_MOCK) {
        await new Promise((r) => setTimeout(r, 350 + Math.random() * 300));
        raw = generateMockIssues(0, 0, 100, 100, globalId, cell.label);
      } else {
        raw = await callOpusQA({
          masterB64, masterMime, shotB64, shotMime,
          userPrompt: buildRegionPrompt({
            rx: cell.x, ry: cell.y, rw: cell.w, rh: cell.h,
            label: cell.label,
            startId: globalId,
          }),
        });
      }

      const mapped: OpusIssue[] = [];
      for (const iss of raw) {
        const absX = OPUS_USE_MOCK ? iss.x : cell.x + (iss.x / 100) * cell.w;
        const absY = OPUS_USE_MOCK ? iss.y : cell.y + (iss.y / 100) * cell.h;

        const dupe = allIssues.some(
          (ex) => ex.type === iss.type && Math.abs(ex.x - absX) < 4 && Math.abs(ex.y - absY) < 4,
        );
        if (!dupe) {
          mapped.push({
            ...iss,
            id: globalId++,
            x: absX,
            y: absY,
            fromRegion: true,
            regionLabel: cell.label,
          });
        }
      }

      allIssues = [...allIssues, ...mapped];
      onPartial?.(allIssues);
    } catch (e: unknown) {
      console.warn(`Cell "${cell.label}" failed:`, e instanceof Error ? e.message : e);
    }
  }

  return allIssues;
}


// --- Utility: dataURL -> base64 + mime ---

export function dataUrlToBase64(dataUrl: string): { base64: string; mime: string } {
  const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) return { base64: "", mime: "image/png" };
  return { base64: match[2], mime: match[1] };
}