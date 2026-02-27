import { useState, useCallback, useRef } from "react";
import type { OverlayTransform } from "../types";
import { MIN_SCALE, MAX_SCALE, ZOOM_SENSITIVITY } from "../types";

export function useImageTransform(activeScreenshotIdx: number) {
  const [transforms, setTransforms] = useState<Record<number, OverlayTransform>>({});

  const currentTransform = transforms[activeScreenshotIdx] ?? { x: 0, y: 0, scale: 1 };

  const setCurrentTransform = useCallback(
    (t: OverlayTransform | ((prev: OverlayTransform) => OverlayTransform)) => {
      setTransforms((prev) => {
        const prevT = prev[activeScreenshotIdx] ?? { x: 0, y: 0, scale: 1 };
        const newT = typeof t === "function" ? t(prevT) : t;
        return { ...prev, [activeScreenshotIdx]: newT };
      });
    },
    [activeScreenshotIdx]
  );

  /* ---- Corner resize state ---- */
  const [isCornerResizing, setIsCornerResizing] = useState(false);
  const [shiftHeld, setShiftHeld] = useState(false);
  const cornerRef = useRef({
    corner: "",
    startScale: 1,
    startX: 0,
    startY: 0,
    anchorScreenX: 0,
    anchorScreenY: 0,
    anchorContainerX: 0,
    anchorContainerY: 0,
    origDist: 1,
  });

  /* ---- Drag state ---- */
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  /* ---- Zoom helpers ---- */
  const applyZoom = useCallback(
    (newScale: number, containerEl?: HTMLDivElement | null) => {
      const clamped = Math.min(MAX_SCALE, Math.max(MIN_SCALE, newScale));
      if (!containerEl) {
        setCurrentTransform((p) => ({ ...p, scale: clamped }));
        return;
      }
      const rect = containerEl.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      setCurrentTransform((prev) => {
        const ratio = clamped / prev.scale;
        return {
          x: cx - ratio * (cx - prev.x),
          y: cy - ratio * (cy - prev.y),
          scale: clamped,
        };
      });
    },
    [setCurrentTransform]
  );

  const zoomIn = useCallback(
    (containerEl?: HTMLDivElement | null) =>
      applyZoom(currentTransform.scale * 1.25, containerEl),
    [currentTransform.scale, applyZoom]
  );

  const zoomOut = useCallback(
    (containerEl?: HTMLDivElement | null) =>
      applyZoom(currentTransform.scale / 1.25, containerEl),
    [currentTransform.scale, applyZoom]
  );

  const resetTransform = useCallback(() => {
    setCurrentTransform({ x: 0, y: 0, scale: 1 });
  }, [setCurrentTransform]);

  const autoFit = useCallback(
    (masterDims: { w: number; h: number }, ssDim: { w: number; h: number } | undefined) => {
      if (masterDims.w === 0 || !ssDim) return;
      const scaleX = masterDims.w / ssDim.w;
      const scaleY = masterDims.h / ssDim.h;
      setCurrentTransform({ x: 0, y: 0, scale: Math.min(scaleX, scaleY) });
    },
    [setCurrentTransform]
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent, phaseAllowed: boolean) => {
      if (!phaseAllowed) return;
      e.preventDefault();
      e.stopPropagation();
      const container = (e.currentTarget as HTMLElement).closest("[data-overlay-area]") as HTMLDivElement | null;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      setCurrentTransform((prev) => {
        const factor = 1 - e.deltaY * ZOOM_SENSITIVITY;
        const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev.scale * factor));
        const ratio = newScale / prev.scale;
        return {
          x: mx - ratio * (mx - prev.x),
          y: my - ratio * (my - prev.y),
          scale: newScale,
        };
      });
    },
    [setCurrentTransform]
  );

  const handleCornerDown = useCallback(
    (
      e: React.PointerEvent,
      corner: string,
      containerEl: HTMLDivElement | null,
      ssDim: { w: number; h: number } | undefined
    ) => {
      e.preventDefault();
      e.stopPropagation();
      if (!containerEl || !ssDim) return;

      setIsCornerResizing(true);

      const containerRect = containerEl.getBoundingClientRect();
      const containerW = containerRect.width;

      const oldW = currentTransform.scale * containerW;
      const oldH = (ssDim.h / ssDim.w) * oldW;

      const ssLeft = currentTransform.x;
      const ssTop = currentTransform.y;
      const ssRight = ssLeft + oldW;
      const ssBottom = ssTop + oldH;

      let anchorCX: number, anchorCY: number;
      if (corner === "tl") { anchorCX = ssRight; anchorCY = ssBottom; }
      else if (corner === "tr") { anchorCX = ssLeft; anchorCY = ssBottom; }
      else if (corner === "bl") { anchorCX = ssRight; anchorCY = ssTop; }
      else { anchorCX = ssLeft; anchorCY = ssTop; }

      const anchorSX = containerRect.left + anchorCX;
      const anchorSY = containerRect.top + anchorCY;

      const origDist = Math.hypot(e.clientX - anchorSX, e.clientY - anchorSY);

      cornerRef.current = {
        corner,
        startScale: currentTransform.scale,
        startX: currentTransform.x,
        startY: currentTransform.y,
        anchorScreenX: anchorSX,
        anchorScreenY: anchorSY,
        anchorContainerX: anchorCX,
        anchorContainerY: anchorCY,
        origDist: Math.max(origDist, 1),
      };

      const onMove = (ev: PointerEvent) => {
        const cr = cornerRef.current;
        const newDist = Math.hypot(ev.clientX - cr.anchorScreenX, ev.clientY - cr.anchorScreenY);
        const ratio = newDist / cr.origDist;
        const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, cr.startScale * ratio));
        const nw = newScale * containerW;
        const nh = (ssDim.h / ssDim.w) * nw;

        let newX: number, newY: number;
        if (cr.corner === "tl") { newX = cr.anchorContainerX - nw; newY = cr.anchorContainerY - nh; }
        else if (cr.corner === "tr") { newX = cr.anchorContainerX; newY = cr.anchorContainerY - nh; }
        else if (cr.corner === "bl") { newX = cr.anchorContainerX - nw; newY = cr.anchorContainerY; }
        else { newX = cr.anchorContainerX; newY = cr.anchorContainerY; }

        setCurrentTransform({ x: newX, y: newY, scale: newScale });
      };

      const onUp = () => {
        setIsCornerResizing(false);
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerup", onUp);
      };
      document.addEventListener("pointermove", onMove);
      document.addEventListener("pointerup", onUp);
    },
    [currentTransform, setCurrentTransform]
  );

  return {
    transforms,
    currentTransform,
    setCurrentTransform,
    isDragging,
    setIsDragging,
    dragStart,
    isCornerResizing,
    setIsCornerResizing,
    shiftHeld,
    setShiftHeld,
    cornerRef,
    applyZoom,
    zoomIn,
    zoomOut,
    resetTransform,
    autoFit,
    handleWheel,
    handleCornerDown,
  };
}
