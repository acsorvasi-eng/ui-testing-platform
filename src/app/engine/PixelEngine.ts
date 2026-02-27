import type { ComparisonReport, ComparisonIssue, CompareOptions, RegionRect, DevicePreset } from "../types";

// Re-export types for backward compatibility
export type { CompareOptions, RegionRect };

/* ------------------------------------------------------------------ */
/* Canvas-based pixel comparison engine                                 */
/* ------------------------------------------------------------------ */

/** Load an image URL into an HTMLImageElement */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/** Get ImageData from an image, resized to target dimensions */
function getImageData(img: HTMLImageElement, w: number, h: number): ImageData {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, 0, 0, w, h);
  return ctx.getImageData(0, 0, w, h);
}

/** Convert RGB to grayscale for structural comparison */
function toGray(r: number, g: number, b: number): number {
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

/** Calculate color distance between two pixels */
function colorDist(
  r1: number, g1: number, b1: number,
  r2: number, g2: number, b2: number,
  ignoreColor: boolean
): number {
  if (ignoreColor) {
    return Math.abs(toGray(r1, g1, b1) - toGray(r2, g2, b2));
  }
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

/** Tolerance threshold mapping: 0=strict(5), 7=soft(80) */
function toleranceToThreshold(tol: number): number {
  return 5 + (tol / 7) * 75;
}

/* ------------------------------------------------------------------ */
/* Background image detection                                           */
/* ------------------------------------------------------------------ */
function buildBackgroundImgMask(data: ImageData, w: number, h: number): Uint8Array {
  const mask = new Uint8Array(w * h);
  const blockSize = 16;
  const bw = Math.ceil(w / blockSize);
  const bh = Math.ceil(h / blockSize);

  for (let by = 0; by < bh; by++) {
    for (let bx = 0; bx < bw; bx++) {
      let sumR = 0, sumG = 0, sumB = 0;
      let sumR2 = 0, sumG2 = 0, sumB2 = 0;
      let count = 0;
      const uniqueColors = new Set<number>();

      for (let dy = 0; dy < blockSize && by * blockSize + dy < h; dy++) {
        for (let dx = 0; dx < blockSize && bx * blockSize + dx < w; dx++) {
          const px = by * blockSize + dy;
          const py = bx * blockSize + dx;
          const pi = (px * w + py) * 4;
          const r = data.data[pi], g = data.data[pi + 1], b = data.data[pi + 2];
          sumR += r; sumG += g; sumB += b;
          sumR2 += r * r; sumG2 += g * g; sumB2 += b * b;
          count++;
          const qColor = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
          uniqueColors.add(qColor);
        }
      }

      if (count < 4) continue;

      const varR = (sumR2 / count) - (sumR / count) ** 2;
      const varG = (sumG2 / count) - (sumG / count) ** 2;
      const varB = (sumB2 / count) - (sumB / count) ** 2;
      const totalVar = varR + varG + varB;
      const colorRichness = uniqueColors.size / count;
      const isPhoto = totalVar > 800 && colorRichness > 0.2;

      if (isPhoto) {
        for (let dy = 0; dy < blockSize && by * blockSize + dy < h; dy++) {
          for (let dx = 0; dx < blockSize && bx * blockSize + dx < w; dx++) {
            const idx = (by * blockSize + dy) * w + (bx * blockSize + dx);
            mask[idx] = 1;
          }
        }
      }
    }
  }

  return mask;
}

/** Detect connected regions of diff pixels using flood-fill */
function findRegions(
  diffMap: boolean[],
  width: number,
  height: number
): { x: number; y: number; w: number; h: number; pixelCount: number }[] {
  const regions: { x: number; y: number; w: number; h: number; pixelCount: number }[] = [];
  const blockSize = 8;
  const bw = Math.ceil(width / blockSize);
  const bh = Math.ceil(height / blockSize);

  const blockDiff = new Float32Array(bw * bh);
  for (let by = 0; by < bh; by++) {
    for (let bx = 0; bx < bw; bx++) {
      let count = 0;
      let total = 0;
      for (let dy = 0; dy < blockSize && by * blockSize + dy < height; dy++) {
        for (let dx = 0; dx < blockSize && bx * blockSize + dx < width; dx++) {
          const idx = (by * blockSize + dy) * width + (bx * blockSize + dx);
          total++;
          if (diffMap[idx]) count++;
        }
      }
      blockDiff[by * bw + bx] = count / total;
    }
  }

  const blockVisited = new Uint8Array(bw * bh);
  for (let by = 0; by < bh; by++) {
    for (let bx = 0; bx < bw; bx++) {
      const bi = by * bw + bx;
      if (blockVisited[bi] || blockDiff[bi] < 0.15) continue;
      let minBx = bx, maxBx = bx, minBy = by, maxBy = by;
      let totalPixels = 0;
      const queue = [bi];
      blockVisited[bi] = 1;
      while (queue.length > 0) {
        const ci = queue.pop()!;
        const cy = Math.floor(ci / bw);
        const cx = ci % bw;
        minBx = Math.min(minBx, cx);
        maxBx = Math.max(maxBx, cx);
        minBy = Math.min(minBy, cy);
        maxBy = Math.max(maxBy, cy);
        for (let dy = 0; dy < blockSize && cy * blockSize + dy < height; dy++) {
          for (let dx = 0; dx < blockSize && cx * blockSize + dx < width; dx++) {
            if (diffMap[(cy * blockSize + dy) * width + (cx * blockSize + dx)]) totalPixels++;
          }
        }
        for (const [nx, ny] of [[cx-1,cy],[cx+1,cy],[cx,cy-1],[cx,cy+1]]) {
          if (nx >= 0 && nx < bw && ny >= 0 && ny < bh) {
            const ni = ny * bw + nx;
            if (!blockVisited[ni] && blockDiff[ni] >= 0.10) {
              blockVisited[ni] = 1;
              queue.push(ni);
            }
          }
        }
      }
      if (totalPixels > 20) {
        regions.push({
          x: minBx * blockSize,
          y: minBy * blockSize,
          w: (maxBx - minBx + 1) * blockSize,
          h: (maxBy - minBy + 1) * blockSize,
          pixelCount: totalPixels,
        });
      }
    }
  }
  return regions;
}

/** Classify severity based on region size and diff density */
function classifySeverity(
  region: { w: number; h: number; pixelCount: number },
  totalPixels: number
): "minor" | "moderate" | "major" | "critical" {
  const areaRatio = (region.w * region.h) / totalPixels;
  const density = region.pixelCount / (region.w * region.h);
  if (areaRatio > 0.1 || (density > 0.7 && region.pixelCount > 500)) return "critical";
  if (areaRatio > 0.04 || (density > 0.5 && region.pixelCount > 200)) return "major";
  if (areaRatio > 0.01 || region.pixelCount > 100) return "moderate";
  return "minor";
}

/** Generate issue description based on position and size */
function describeIssue(
  region: { x: number; y: number; w: number; h: number },
  imgW: number,
  imgH: number,
  severity: string
): string {
  const cx = region.x + region.w / 2;
  const cy = region.y + region.h / 2;
  const hPos = cx < imgW * 0.33 ? "left" : cx > imgW * 0.66 ? "right" : "center";
  const vPos = cy < imgH * 0.33 ? "top" : cy > imgH * 0.66 ? "bottom" : "middle";
  const sizeDesc = region.w > 200 || region.h > 200 ? "large" : region.w > 80 || region.h > 80 ? "medium" : "small";
  return `${severity === "critical" ? "Significant" : severity === "major" ? "Notable" : "Minor"} visual difference detected in ${vPos}-${hPos} area (${sizeDesc} region, ${region.w}×${region.h}px)`;
}

/** Get cropped ImageData from an image at a specific region */
function getCroppedImageData(
  img: HTMLImageElement,
  region: RegionRect,
  targetW: number,
  targetH: number,
): ImageData {
  const canvas = document.createElement("canvas");
  canvas.width = targetW;
  canvas.height = targetH;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(img, region.x, region.y, region.w, region.h, 0, 0, targetW, targetH);
  return ctx.getImageData(0, 0, targetW, targetH);
}

/* ------------------------------------------------------------------ */
/* Region comparison                                                    */
/* ------------------------------------------------------------------ */
export async function compareRegion(
  masterUrl: string,
  screenshotUrl: string,
  masterRegion: RegionRect,
  ssRegion: RegionRect,
  options: CompareOptions,
): Promise<ComparisonReport> {
  const [masterImg, ssImg] = await Promise.all([loadImage(masterUrl), loadImage(screenshotUrl)]);

  const w = Math.round(masterRegion.w);
  const h = Math.round(masterRegion.h);
  if (w < 2 || h < 2) {
    return {
      totalPixels: 0, matchingPixels: 0, diffPixels: 0,
      matchPercentage: 100, severity: "perfect", issues: [],
      diffImageData: "", heatmapImageData: "", generatedAt: new Date().toISOString(),
    };
  }

  const masterData = getCroppedImageData(masterImg, masterRegion, w, h);
  const ssData = getCroppedImageData(ssImg, ssRegion, w, h);

  const threshold = toleranceToThreshold(options.tolerance);
  const totalPixels = w * h;
  const diffMap = new Array<boolean>(totalPixels);
  const diffMagnitude = new Float32Array(totalPixels);
  let diffCount = 0;

  let bgMask: Uint8Array | null = null;
  if (options.ignoreBackgroundImg) {
    const masterMask = buildBackgroundImgMask(masterData, w, h);
    const ssMask = buildBackgroundImgMask(ssData, w, h);
    bgMask = new Uint8Array(totalPixels);
    for (let i = 0; i < totalPixels; i++) {
      bgMask[i] = masterMask[i] | ssMask[i];
    }
  }

  let skippedBgPixels = 0;

  for (let i = 0; i < totalPixels; i++) {
    if (bgMask && bgMask[i]) {
      diffMap[i] = false;
      diffMagnitude[i] = 0;
      skippedBgPixels++;
      continue;
    }
    const pi = i * 4;
    const r1 = masterData.data[pi], g1 = masterData.data[pi + 1], b1 = masterData.data[pi + 2];
    const r2 = ssData.data[pi], g2 = ssData.data[pi + 1], b2 = ssData.data[pi + 2];
    let dist: number;
    if (options.structuralOnly) {
      dist = Math.abs(toGray(r1, g1, b1) - toGray(r2, g2, b2));
    } else {
      dist = colorDist(r1, g1, b1, r2, g2, b2, options.ignoreColor);
    }
    const isDiff = dist > threshold;
    diffMap[i] = isDiff;
    diffMagnitude[i] = Math.min(dist / 255, 1);
    if (isDiff) diffCount++;
  }

  const effectiveTotal = totalPixels - skippedBgPixels;

  // Diff image
  const diffCanvas = document.createElement("canvas");
  diffCanvas.width = w; diffCanvas.height = h;
  const diffCtx = diffCanvas.getContext("2d")!;
  const diffImgData = diffCtx.createImageData(w, h);
  for (let i = 0; i < totalPixels; i++) {
    const pi = i * 4;
    if (bgMask && bgMask[i]) {
      diffImgData.data[pi] = masterData.data[pi]; diffImgData.data[pi+1] = masterData.data[pi+1];
      diffImgData.data[pi+2] = masterData.data[pi+2]; diffImgData.data[pi+3] = 25;
    } else if (diffMap[i]) {
      diffImgData.data[pi] = 220; diffImgData.data[pi+1] = 50;
      diffImgData.data[pi+2] = 50; diffImgData.data[pi+3] = 180;
    } else {
      diffImgData.data[pi] = masterData.data[pi]; diffImgData.data[pi+1] = masterData.data[pi+1];
      diffImgData.data[pi+2] = masterData.data[pi+2]; diffImgData.data[pi+3] = 60;
    }
  }
  diffCtx.putImageData(diffImgData, 0, 0);

  // Heatmap
  const heatCanvas = document.createElement("canvas");
  heatCanvas.width = w; heatCanvas.height = h;
  const heatCtx = heatCanvas.getContext("2d")!;
  const heatImgData = heatCtx.createImageData(w, h);
  for (let i = 0; i < totalPixels; i++) {
    const pi = i * 4;
    if (bgMask && bgMask[i]) {
      heatImgData.data[pi+3] = 0;
      continue;
    }
    const mag = diffMagnitude[i];
    if (mag > 0.02) {
      if (mag < 0.33) { heatImgData.data[pi] = Math.floor(mag*3*255); heatImgData.data[pi+1] = 200; heatImgData.data[pi+2] = 50; }
      else if (mag < 0.66) { heatImgData.data[pi] = 255; heatImgData.data[pi+1] = Math.floor((1-(mag-0.33)*3)*200); heatImgData.data[pi+2] = 30; }
      else { heatImgData.data[pi] = 255; heatImgData.data[pi+1] = 20; heatImgData.data[pi+2] = 20; }
      heatImgData.data[pi+3] = Math.floor(50 + mag * 200);
    }
  }
  heatCtx.putImageData(heatImgData, 0, 0);

  const regions = findRegions(diffMap, w, h);
  const matchPercentage = effectiveTotal > 0 ? ((effectiveTotal - diffCount) / effectiveTotal) * 100 : 100;

  const pixelIssues: ComparisonIssue[] = regions.map((region, idx) => {
    const sev = classifySeverity(region, totalPixels);
    return {
      id: `region-issue-${idx}`,
      x: region.x + masterRegion.x,
      y: region.y + masterRegion.y,
      width: region.w,
      height: region.h,
      severity: sev,
      description: describeIssue(region, w, h, sev),
      diffPercentage: (region.pixelCount / totalPixels) * 100,
    };
  });

  const offsets = analyzeElementOffsets(masterData, ssData, w, h, masterRegion, options.tolerance);
  const offsetIssues: ComparisonIssue[] = offsets.map((off) => ({
    id: off.id,
    x: off.x,
    y: off.y,
    width: off.width,
    height: off.height,
    severity: off.severity,
    description: off.description,
    diffPercentage: off.maxShift,
  }));

  const issues: ComparisonIssue[] = [...pixelIssues];
  for (const oi of offsetIssues) {
    const alreadyCovered = pixelIssues.some((pi) => {
      const overlapX = Math.max(0, Math.min(pi.x + pi.width, oi.x + oi.width) - Math.max(pi.x, oi.x));
      const overlapY = Math.max(0, Math.min(pi.y + pi.height, oi.y + oi.height) - Math.max(pi.y, oi.y));
      const overlapArea = overlapX * overlapY;
      const oiArea = oi.width * oi.height;
      return oiArea > 0 && overlapArea / oiArea > 0.5;
    });
    if (alreadyCovered) {
      const overlapping = pixelIssues.find((pi) => {
        const overlapX = Math.max(0, Math.min(pi.x + pi.width, oi.x + oi.width) - Math.max(pi.x, oi.x));
        const overlapY = Math.max(0, Math.min(pi.y + pi.height, oi.y + oi.height) - Math.max(pi.y, oi.y));
        const overlapArea = overlapX * overlapY;
        const oiArea = oi.width * oi.height;
        return oiArea > 0 && overlapArea / oiArea > 0.5;
      });
      if (overlapping && !overlapping.description.includes("Margin changes:")) {
        overlapping.description += ` | ${oi.description}`;
      }
    } else {
      issues.push(oi);
    }
  }

  let severity: ComparisonReport["severity"];
  if (matchPercentage >= 99.5 && offsets.length === 0) severity = "perfect";
  else if (matchPercentage >= 99.5 && offsets.length > 0) severity = "minor";
  else if (matchPercentage >= 97) severity = "minor";
  else if (matchPercentage >= 93) severity = "layout-shift";
  else if (matchPercentage >= 85) severity = "structural";
  else severity = "high-severity";

  return {
    totalPixels, matchingPixels: totalPixels - diffCount, diffPixels: diffCount,
    matchPercentage, severity, issues,
    diffImageData: diffCanvas.toDataURL("image/png"),
    heatmapImageData: heatCanvas.toDataURL("image/png"),
    generatedAt: new Date().toISOString(),
  };
}

/* ------------------------------------------------------------------ */
/* Smart scaling helper                                                 */
/* ------------------------------------------------------------------ */

/**
 * When a device preset is selected and the screenshot dimensions differ
 * from the master, this computes the correct scale and returns an ImageData
 * that has been proportionally scaled to match the master canvas size.
 *
 * Strategy:
 *  1. Determine the logical dims of the screenshot device (preset or manual).
 *  2. Derive the DPR of the screenshot: ssDPR = ssNatural / logicalW.
 *  3. Compute the "content scale" = masterW / (logicalW * ssDPR).
 *     If the master is @2x of a 390pt design (780px) and the SS is @3x
 *     of 390pt (1170px), scale = 780/1170 = 0.667.
 *  4. Draw the screenshot at the scaled size onto a canvas the size of
 *     the master, centered (extra space filled with the screenshot's
 *     edge pixels to avoid false-positive borders).
 */
function smartScaleScreenshot(
  ssImg: HTMLImageElement,
  masterW: number,
  masterH: number,
  preset: DevicePreset,
  manualDims?: { w: number; h: number },
): ImageData {
  const ssW = ssImg.naturalWidth;
  const ssH = ssImg.naturalHeight;

  // Determine logical dims
  let logicalW = preset.w;
  let logicalH = preset.h;
  if (preset.id === "manual" && manualDims && manualDims.w > 0 && manualDims.h > 0) {
    logicalW = manualDims.w;
    logicalH = manualDims.h;
  }
  if (logicalW <= 0 || logicalH <= 0) {
    // Fallback — just stretch to master dims (original behavior)
    return getImageData(ssImg, masterW, masterH);
  }

  // Detect DPR of screenshot (pick the axis with the closer aspect match)
  const dprW = ssW / logicalW;
  const dprH = ssH / logicalH;
  // Use average DPR (handles slight aspect ratio differences gracefully)
  const ssDPR = (dprW + dprH) / 2;

  // Target: scale screenshot so its logical content maps to master pixels
  const scaleX = masterW / ssW;
  const scaleY = masterH / ssH;

  const scaledW = Math.round(ssW * scaleX);
  const scaledH = Math.round(ssH * scaleY);

  const canvas = document.createElement("canvas");
  canvas.width = masterW;
  canvas.height = masterH;
  const ctx = canvas.getContext("2d")!;

  // Use high-quality scaling
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  // Draw scaled screenshot to fill master canvas
  ctx.drawImage(ssImg, 0, 0, scaledW, scaledH);

  console.log(
    "[SmartScale]",
    `\n  preset: ${preset.label} (${logicalW}×${logicalH})`,
    `\n  screenshot natural: ${ssW}×${ssH}`,
    `\n  master: ${masterW}×${masterH}`,
    `\n  detected DPR: ${ssDPR.toFixed(2)}`,
    `\n  scale: ${scaleX.toFixed(4)} × ${scaleY.toFixed(4)}`,
    `\n  scaled: ${scaledW}×${scaledH}`,
  );

  return ctx.getImageData(0, 0, masterW, masterH);
}

/* ------------------------------------------------------------------ */
/* Main comparison function                                             */
/* ------------------------------------------------------------------ */
export async function compareImages(
  masterUrl: string,
  screenshotUrl: string,
  options: CompareOptions
): Promise<ComparisonReport> {
  const [masterImg, screenshotImg] = await Promise.all([
    loadImage(masterUrl),
    loadImage(screenshotUrl),
  ]);

  const w = masterImg.naturalWidth;
  const h = masterImg.naturalHeight;

  const masterData = getImageData(masterImg, w, h);

  // Smart scaling: if a device preset is selected and dims differ, scale intelligently
  const ssW = screenshotImg.naturalWidth;
  const ssH = screenshotImg.naturalHeight;
  const dimsMatch = ssW === w && ssH === h;
  const hasPreset = options.devicePreset && options.devicePreset.id !== "auto";

  let ssData: ImageData;
  if (!dimsMatch && hasPreset) {
    ssData = smartScaleScreenshot(screenshotImg, w, h, options.devicePreset!, options.manualDims);
  } else {
    ssData = getImageData(screenshotImg, w, h);
  }

  const threshold = toleranceToThreshold(options.tolerance);
  const totalPixels = w * h;
  const diffMap = new Array<boolean>(totalPixels);
  const diffMagnitude = new Float32Array(totalPixels);

  let diffCount = 0;

  let bgMask: Uint8Array | null = null;
  if (options.ignoreBackgroundImg) {
    const masterMask = buildBackgroundImgMask(masterData, w, h);
    const ssMask = buildBackgroundImgMask(ssData, w, h);
    bgMask = new Uint8Array(totalPixels);
    for (let i = 0; i < totalPixels; i++) {
      bgMask[i] = masterMask[i] | ssMask[i];
    }
  }

  let skippedBgPixels = 0;

  for (let i = 0; i < totalPixels; i++) {
    if (bgMask && bgMask[i]) {
      diffMap[i] = false;
      diffMagnitude[i] = 0;
      skippedBgPixels++;
      continue;
    }

    const pi = i * 4;
    const r1 = masterData.data[pi], g1 = masterData.data[pi + 1], b1 = masterData.data[pi + 2];
    const r2 = ssData.data[pi], g2 = ssData.data[pi + 1], b2 = ssData.data[pi + 2];

    let dist: number;
    if (options.structuralOnly) {
      dist = Math.abs(toGray(r1, g1, b1) - toGray(r2, g2, b2));
    } else {
      dist = colorDist(r1, g1, b1, r2, g2, b2, options.ignoreColor);
    }

    const isDiff = dist > threshold;
    diffMap[i] = isDiff;
    diffMagnitude[i] = Math.min(dist / 255, 1);
    if (isDiff) diffCount++;
  }

  const effectiveTotal = totalPixels - skippedBgPixels;

  // Generate diff image
  const diffCanvas = document.createElement("canvas");
  diffCanvas.width = w;
  diffCanvas.height = h;
  const diffCtx = diffCanvas.getContext("2d")!;
  const diffImgData = diffCtx.createImageData(w, h);

  for (let i = 0; i < totalPixels; i++) {
    const pi = i * 4;
    if (bgMask && bgMask[i]) {
      diffImgData.data[pi] = masterData.data[pi];
      diffImgData.data[pi + 1] = masterData.data[pi + 1];
      diffImgData.data[pi + 2] = masterData.data[pi + 2];
      diffImgData.data[pi + 3] = 25;
    } else if (diffMap[i]) {
      diffImgData.data[pi] = 220;
      diffImgData.data[pi + 1] = 50;
      diffImgData.data[pi + 2] = 50;
      diffImgData.data[pi + 3] = 180;
    } else {
      diffImgData.data[pi] = masterData.data[pi];
      diffImgData.data[pi + 1] = masterData.data[pi + 1];
      diffImgData.data[pi + 2] = masterData.data[pi + 2];
      diffImgData.data[pi + 3] = 60;
    }
  }
  diffCtx.putImageData(diffImgData, 0, 0);

  // Generate heatmap
  const heatCanvas = document.createElement("canvas");
  heatCanvas.width = w;
  heatCanvas.height = h;
  const heatCtx = heatCanvas.getContext("2d")!;
  const heatImgData = heatCtx.createImageData(w, h);

  for (let i = 0; i < totalPixels; i++) {
    const pi = i * 4;
    if (bgMask && bgMask[i]) {
      heatImgData.data[pi + 3] = 0;
      continue;
    }
    const mag = diffMagnitude[i];
    if (mag > 0.02) {
      if (mag < 0.33) {
        heatImgData.data[pi] = Math.floor(mag * 3 * 255);
        heatImgData.data[pi + 1] = 200;
        heatImgData.data[pi + 2] = 50;
      } else if (mag < 0.66) {
        heatImgData.data[pi] = 255;
        heatImgData.data[pi + 1] = Math.floor((1 - (mag - 0.33) * 3) * 200);
        heatImgData.data[pi + 2] = 30;
      } else {
        heatImgData.data[pi] = 255;
        heatImgData.data[pi + 1] = 20;
        heatImgData.data[pi + 2] = 20;
      }
      heatImgData.data[pi + 3] = Math.floor(50 + mag * 200);
    } else {
      heatImgData.data[pi + 3] = 0;
    }
  }
  heatCtx.putImageData(heatImgData, 0, 0);

  const regions = findRegions(diffMap, w, h);
  const matchPercentage = effectiveTotal > 0 ? ((effectiveTotal - diffCount) / effectiveTotal) * 100 : 100;

  const issues: ComparisonIssue[] = regions.map((region, idx) => {
    const sev = classifySeverity(region, totalPixels);
    return {
      id: `issue-${idx}`,
      x: region.x,
      y: region.y,
      width: region.w,
      height: region.h,
      severity: sev,
      description: describeIssue(region, w, h, sev),
      diffPercentage: (region.pixelCount / totalPixels) * 100,
    };
  });

  let severity: ComparisonReport["severity"];
  if (matchPercentage >= 99.5) severity = "perfect";
  else if (matchPercentage >= 97) severity = "minor";
  else if (matchPercentage >= 93) severity = "layout-shift";
  else if (matchPercentage >= 85) severity = "structural";
  else severity = "high-severity";

  return {
    totalPixels,
    matchingPixels: totalPixels - diffCount,
    diffPixels: diffCount,
    matchPercentage,
    severity,
    issues,
    diffImageData: diffCanvas.toDataURL("image/png"),
    heatmapImageData: heatCanvas.toDataURL("image/png"),
    generatedAt: new Date().toISOString(),
  };
}

/* ------------------------------------------------------------------ */
/* Quick sanity check                                                   */
/* ------------------------------------------------------------------ */
const SANITY_SIZE = 64;
const SANITY_THRESHOLD = 25;

export async function quickSanityCheck(
  masterUrl: string,
  screenshotUrl: string,
): Promise<{ similar: boolean; matchPct: number }> {
  const [masterImg, ssImg] = await Promise.all([loadImage(masterUrl), loadImage(screenshotUrl)]);

  const masterData = getImageData(masterImg, SANITY_SIZE, SANITY_SIZE);
  const ssData = getImageData(ssImg, SANITY_SIZE, SANITY_SIZE);
  const total = SANITY_SIZE * SANITY_SIZE;
  let matches = 0;

  for (let i = 0; i < total; i++) {
    const pi = i * 4;
    const g1 = toGray(masterData.data[pi], masterData.data[pi + 1], masterData.data[pi + 2]);
    const g2 = toGray(ssData.data[pi], ssData.data[pi + 1], ssData.data[pi + 2]);
    if (Math.abs(g1 - g2) < 60) matches++;
  }

  const matchPct = (matches / total) * 100;
  return { similar: matchPct >= SANITY_THRESHOLD, matchPct };
}

/* ------------------------------------------------------------------ */
/* Element offset analysis                                              */
/* ------------------------------------------------------------------ */

interface ElementBlob {
  x: number; y: number; w: number; h: number;
  pixelCount: number;
  marginTop: number; marginBottom: number;
  marginLeft: number; marginRight: number;
}

function binarizeForElements(data: ImageData, w: number, h: number): Uint8Array {
  const binary = new Uint8Array(w * h);
  let sumLum = 0;
  for (let i = 0; i < w * h; i++) {
    const pi = i * 4;
    sumLum += toGray(data.data[pi], data.data[pi + 1], data.data[pi + 2]);
  }
  const meanLum = sumLum / (w * h);
  const darkBg = meanLum < 128;
  const threshold = darkBg ? meanLum + 40 : meanLum - 40;

  for (let i = 0; i < w * h; i++) {
    const pi = i * 4;
    const lum = toGray(data.data[pi], data.data[pi + 1], data.data[pi + 2]);
    if (darkBg) {
      binary[i] = lum > threshold ? 1 : 0;
    } else {
      binary[i] = lum < threshold ? 1 : 0;
    }
  }
  return binary;
}

function findElementBlobs(binary: Uint8Array, w: number, h: number, regionW: number, regionH: number): ElementBlob[] {
  const visited = new Uint8Array(w * h);
  const blobs: ElementBlob[] = [];
  const minArea = Math.max(16, Math.round(w * h * 0.001));

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      if (visited[idx] || !binary[idx]) continue;

      let minX = x, maxX = x, minY = y, maxY = y;
      let count = 0;
      const queue: number[] = [idx];
      visited[idx] = 1;

      while (queue.length > 0) {
        const ci = queue.pop()!;
        const cx = ci % w;
        const cy = (ci - cx) / w;
        count++;
        if (cx < minX) minX = cx;
        if (cx > maxX) maxX = cx;
        if (cy < minY) minY = cy;
        if (cy > maxY) maxY = cy;

        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const nx = cx + dx, ny = cy + dy;
          if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
          const ni = ny * w + nx;
          if (!visited[ni] && binary[ni]) {
            visited[ni] = 1;
            queue.push(ni);
          }
        }
      }

      if (count >= minArea) {
        const bw = maxX - minX + 1;
        const bh = maxY - minY + 1;
        blobs.push({
          x: minX, y: minY, w: bw, h: bh,
          pixelCount: count,
          marginTop: minY,
          marginBottom: regionH - (maxY + 1),
          marginLeft: minX,
          marginRight: regionW - (maxX + 1),
        });
      }
    }
  }

  return blobs;
}

function matchBlobs(masterBlobs: ElementBlob[], ssBlobs: ElementBlob[]): Array<{ master: ElementBlob; screenshot: ElementBlob; similarity: number }> {
  const matches: Array<{ master: ElementBlob; screenshot: ElementBlob; similarity: number }> = [];
  const usedSS = new Set<number>();

  for (const mb of masterBlobs) {
    let bestIdx = -1;
    let bestScore = -Infinity;
    const mCx = mb.x + mb.w / 2;
    const mCy = mb.y + mb.h / 2;

    for (let si = 0; si < ssBlobs.length; si++) {
      if (usedSS.has(si)) continue;
      const sb = ssBlobs[si];
      const sCx = sb.x + sb.w / 2;
      const sCy = sb.y + sb.h / 2;

      const sizeRatio = Math.min(mb.pixelCount, sb.pixelCount) / Math.max(mb.pixelCount, sb.pixelCount);
      const dist = Math.hypot(mCx - sCx, mCy - sCy);
      const maxDim = Math.max(mb.w, mb.h, sb.w, sb.h, 1);
      const distScore = Math.max(0, 1 - dist / (maxDim * 3));

      const score = sizeRatio * 0.6 + distScore * 0.4;
      if (score > bestScore && sizeRatio > 0.3) {
        bestScore = score;
        bestIdx = si;
      }
    }

    if (bestIdx >= 0 && bestScore > 0.3) {
      usedSS.add(bestIdx);
      matches.push({ master: mb, screenshot: ssBlobs[bestIdx], similarity: bestScore });
    }
  }

  return matches;
}

export interface ElementOffset {
  id: string;
  x: number; y: number; width: number; height: number;
  label: string;
  deltaTop: number;
  deltaBottom: number;
  deltaLeft: number;
  deltaRight: number;
  maxShift: number;
  description: string;
  severity: "minor" | "moderate" | "major" | "critical";
}

function analyzeElementOffsets(
  masterData: ImageData,
  ssData: ImageData,
  w: number,
  h: number,
  masterRegion: RegionRect,
  tolerance: number,
): ElementOffset[] {
  const masterBinary = binarizeForElements(masterData, w, h);
  const ssBinary = binarizeForElements(ssData, w, h);

  const masterBlobs = findElementBlobs(masterBinary, w, h, w, h);
  const ssBlobs = findElementBlobs(ssBinary, w, h, w, h);

  if (masterBlobs.length === 0 || ssBlobs.length === 0) return [];

  const matches = matchBlobs(masterBlobs, ssBlobs);
  const results: ElementOffset[] = [];

  for (const match of matches) {
    const { master: mb, screenshot: sb } = match;

    const deltaTop = sb.marginTop - mb.marginTop;
    const deltaBottom = sb.marginBottom - mb.marginBottom;
    const deltaLeft = sb.marginLeft - mb.marginLeft;
    const deltaRight = sb.marginRight - mb.marginRight;
    const maxShift = Math.max(Math.abs(deltaTop), Math.abs(deltaBottom), Math.abs(deltaLeft), Math.abs(deltaRight));

    if (maxShift <= tolerance) continue;

    const cx = mb.x + mb.w / 2;
    const cy = mb.y + mb.h / 2;
    const hPos = cx < w * 0.25 ? "left" : cx > w * 0.75 ? "right" : cx > w * 0.4 && cx < w * 0.6 ? "center" : "center-" + (cx < w * 0.5 ? "left" : "right");
    const vPos = cy < h * 0.33 ? "top" : cy > h * 0.66 ? "bottom" : "middle";

    const shifts: string[] = [];
    if (Math.abs(deltaTop) > tolerance) {
      shifts.push(`top: master ${mb.marginTop}px \u2192 actual ${sb.marginTop}px (${deltaTop > 0 ? "+" : ""}${deltaTop}px)`);
    }
    if (Math.abs(deltaBottom) > tolerance) {
      shifts.push(`bottom: master ${mb.marginBottom}px \u2192 actual ${sb.marginBottom}px (${deltaBottom > 0 ? "+" : ""}${deltaBottom}px)`);
    }
    if (Math.abs(deltaLeft) > tolerance) {
      shifts.push(`left: master ${mb.marginLeft}px \u2192 actual ${sb.marginLeft}px (${deltaLeft > 0 ? "+" : ""}${deltaLeft}px)`);
    }
    if (Math.abs(deltaRight) > tolerance) {
      shifts.push(`right: master ${mb.marginRight}px \u2192 actual ${sb.marginRight}px (${deltaRight > 0 ? "+" : ""}${deltaRight}px)`);
    }

    let severity: ElementOffset["severity"];
    if (maxShift > 8) severity = "critical";
    else if (maxShift > 4) severity = "major";
    else if (maxShift > 2) severity = "moderate";
    else severity = "minor";

    const shiftDir = Math.abs(deltaTop) >= Math.abs(deltaLeft)
      ? (deltaTop > 0 ? "downward" : "upward")
      : (deltaLeft > 0 ? "rightward" : "leftward");

    const desc = `Element at ${vPos}-${hPos} (${mb.w}\u00d7${mb.h}px) shifted ${maxShift}px ${shiftDir}. Margin changes: ${shifts.join("; ")}`;

    results.push({
      id: `offset-${results.length}`,
      x: mb.x + masterRegion.x,
      y: mb.y + masterRegion.y,
      width: mb.w,
      height: mb.h,
      label: `${vPos}-${hPos}`,
      deltaTop, deltaBottom, deltaLeft, deltaRight,
      maxShift,
      description: desc,
      severity,
    });
  }

  results.sort((a, b) => b.maxShift - a.maxShift);
  return results;
}