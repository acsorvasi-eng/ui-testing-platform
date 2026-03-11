/**
 * FigmaService – thin wrapper around the Figma REST API.
 * Token is read from localStorage key "FIGMA_PAT".
 */

export interface FigmaFile {
  key: string;
  name: string;
  thumbnail_url?: string;
  last_modified: string;
}

export interface FigmaFrame {
  nodeId: string;
  name: string;
  thumbnailUrl?: string;
}

const BASE = "https://api.figma.com/v1";

function getToken(): string {
  return localStorage.getItem("FIGMA_PAT") ?? "";
}

function headers() {
  return { "X-Figma-Token": getToken() };
}

export function saveFigmaPAT(token: string) {
  localStorage.setItem("FIGMA_PAT", token);
}

export function hasFigmaPAT(): boolean {
  return !!localStorage.getItem("FIGMA_PAT");
}

export function parseFigmaProjectUrl(url: string): { projectId: string } | null {
  try {
    const u = new URL(url);
    const m1 = u.pathname.match(/\/project\/(\d+)/);
    if (m1) return { projectId: m1[1] };
    return null;
  } catch {
    return null;
  }
}

export function parseFigmaFileUrl(url: string): { fileKey: string; nodeId?: string } | null {
  try {
    const u = new URL(url);
    const m = u.pathname.match(/\/(design|file)\/([A-Za-z0-9_-]+)/);
    if (!m) return null;
    const fileKey = m[2];
    const nodeId = u.searchParams.get("node-id")?.replace("-", ":") ?? undefined;
    return { fileKey, nodeId };
  } catch {
    return null;
  }
}

export async function fetchProjectFiles(projectId: string): Promise<FigmaFile[]> {
  const res = await fetch(`${BASE}/projects/${projectId}/files`, {
    headers: headers(),
  });
  if (!res.ok) throw new Error(`Figma API error: ${res.status}`);
  const data = await res.json();
  return (data.files ?? []) as FigmaFile[];
}

export async function fetchFileFrames(fileKey: string): Promise<FigmaFrame[]> {
  const res = await fetch(`${BASE}/files/${fileKey}?depth=2`, {
    headers: headers(),
  });
  if (!res.ok) throw new Error(`Figma API error: ${res.status}`);
  const data = await res.json();

  const frames: FigmaFrame[] = [];
  const pages = data.document?.children ?? [];
  for (const page of pages) {
    for (const node of page.children ?? []) {
      if (node.type === "FRAME" || node.type === "COMPONENT") {
        frames.push({
          nodeId: node.id,
          name: `${page.name} / ${node.name}`,
        });
      }
    }
  }
  return frames;
}

export async function exportFrameAsPng(fileKey: string, nodeId: string): Promise<string> {
  const apiId = nodeId.replace(":", "-");
  const res = await fetch(
    `${BASE}/images/${fileKey}?ids=${encodeURIComponent(nodeId)}&format=png&scale=2`,
    { headers: headers() }
  );
  if (!res.ok) throw new Error(`Figma export error: ${res.status}`);
  const data = await res.json();
  const url = data.images?.[nodeId] ?? data.images?.[apiId];
  if (!url) throw new Error("No image URL returned");
  return url;
}
