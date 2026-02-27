import { useState, useCallback } from "react";
import { X, Ruler } from "lucide-react";
import type { MeasurePoint, Measurement } from "../types";

// Re-export for backward compatibility
export type { MeasurePoint, Measurement };

export interface MeasureToolOverlayProps {
  /** All saved measurements */
  measurements: Measurement[];
  /** Currently drawing measurement (incomplete) */
  activeMeasure: { start: MeasurePoint; current: MeasurePoint } | null;
  /** Natural image dimensions */
  imageNaturalWidth: number;
  imageNaturalHeight: number;
  /** Container (display) dimensions in px */
  containerW: number;
  containerH: number;
  /** Remove a measurement */
  onRemove: (id: string) => void;
  /** Hovered measurement id */
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}

/* ================================================================== */
/* Helpers                                                              */
/* ================================================================== */
const LINE_COLOR = "#D32F2F";
const LABEL_BG = "#D32F2F";
const LABEL_TEXT = "#FFFFFF";
const SERIF_SIZE = 5; // length of the endpoint serif caps

function natToPct(val: number, max: number) {
  return (val / max) * 100;
}

function natToPx(val: number, naturalMax: number, containerPx: number) {
  return (val / naturalMax) * containerPx;
}

/* ================================================================== */
/* Single Measurement Line                                              */
/* ================================================================== */
function MeasureLine({
  m, imageNaturalWidth, imageNaturalHeight, containerW, containerH,
  isHovered, onHover, onLeave, onRemove,
}: {
  m: Measurement;
  imageNaturalWidth: number;
  imageNaturalHeight: number;
  containerW: number;
  containerH: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onRemove: () => void;
}) {
  const x1 = natToPx(m.start.x, imageNaturalWidth, containerW);
  const y1 = natToPx(m.start.y, imageNaturalHeight, containerH);
  const x2 = natToPx(m.end.x, imageNaturalWidth, containerW);
  const y2 = natToPx(m.end.y, imageNaturalHeight, containerH);

  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const angle = Math.atan2(dy, dx);

  // Serif perpendicular direction
  const perpX = -Math.sin(angle) * SERIF_SIZE;
  const perpY = Math.cos(angle) * SERIF_SIZE;

  const displayDist = Math.round(m.distance);
  const isHorizontal = Math.abs(m.dy) < 2;
  const isVertical = Math.abs(m.dx) < 2;

  // Decide label offset direction
  const labelOffsetX = isVertical ? 12 : 0;
  const labelOffsetY = isHorizontal ? -12 : isVertical ? 0 : -14;

  return (
    <g
      className="cursor-pointer"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ pointerEvents: "all" }}
    >
      {/* Invisible wider hit area */}
      <line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="transparent"
        strokeWidth={12}
      />

      {/* Main line */}
      <line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={LINE_COLOR}
        strokeWidth={isHovered ? 2 : 1.5}
        strokeDasharray={isHovered ? "none" : "none"}
      />

      {/* Start serif */}
      <line
        x1={x1 + perpX} y1={y1 + perpY}
        x2={x1 - perpX} y2={y1 - perpY}
        stroke={LINE_COLOR}
        strokeWidth={1.5}
      />

      {/* End serif */}
      <line
        x1={x2 + perpX} y1={y2 + perpY}
        x2={x2 - perpX} y2={y2 - perpY}
        stroke={LINE_COLOR}
        strokeWidth={1.5}
      />

      {/* Label background */}
      <g transform={`translate(${midX + labelOffsetX}, ${midY + labelOffsetY})`}>
        <rect
          x={-((displayDist.toString().length * 6 + 20) / 2)}
          y={-9}
          width={displayDist.toString().length * 6 + 20}
          height={18}
          rx={3}
          fill={LABEL_BG}
        />
        <text
          x={0}
          y={1}
          textAnchor="middle"
          dominantBaseline="central"
          fill={LABEL_TEXT}
          fontSize={10}
          fontWeight={700}
          fontFamily="Inter, system-ui, sans-serif"
        >
          {displayDist} px
        </text>
      </g>

      {/* Horizontal / Vertical component guides (when diagonal and hovered) */}
      {isHovered && !isHorizontal && !isVertical && (
        <>
          {/* Horizontal guide */}
          <line
            x1={x1} y1={y2} x2={x2} y2={y2}
            stroke={LINE_COLOR}
            strokeWidth={0.75}
            strokeDasharray="3,3"
            opacity={0.5}
          />
          {/* Vertical guide */}
          <line
            x1={x1} y1={y1} x2={x1} y2={y2}
            stroke={LINE_COLOR}
            strokeWidth={0.75}
            strokeDasharray="3,3"
            opacity={0.5}
          />
          {/* Dx label */}
          <g transform={`translate(${(x1 + x2) / 2}, ${y2 + 12})`}>
            <rect
              x={-(Math.abs(Math.round(m.dx)).toString().length * 5 + 16) / 2}
              y={-7}
              width={Math.abs(Math.round(m.dx)).toString().length * 5 + 16}
              height={14}
              rx={2}
              fill={LINE_COLOR}
              opacity={0.7}
            />
            <text x={0} y={1} textAnchor="middle" dominantBaseline="central"
              fill={LABEL_TEXT} fontSize={8} fontWeight={600} fontFamily="Inter, system-ui, sans-serif">
              {Math.abs(Math.round(m.dx))} px
            </text>
          </g>
          {/* Dy label */}
          <g transform={`translate(${x1 - 16}, ${(y1 + y2) / 2})`}>
            <rect
              x={-(Math.abs(Math.round(m.dy)).toString().length * 5 + 16) / 2}
              y={-7}
              width={Math.abs(Math.round(m.dy)).toString().length * 5 + 16}
              height={14}
              rx={2}
              fill={LINE_COLOR}
              opacity={0.7}
            />
            <text x={0} y={1} textAnchor="middle" dominantBaseline="central"
              fill={LABEL_TEXT} fontSize={8} fontWeight={600} fontFamily="Inter, system-ui, sans-serif">
              {Math.abs(Math.round(m.dy))} px
            </text>
          </g>
        </>
      )}

      {/* Delete button on hover */}
      {isHovered && (
        <g
          transform={`translate(${x2 + 8}, ${y2 - 8})`}
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          className="cursor-pointer"
        >
          <circle cx={0} cy={0} r={8} fill="white" stroke="#E0E0E0" strokeWidth={1} />
          <line x1={-3} y1={-3} x2={3} y2={3} stroke="#D32F2F" strokeWidth={1.5} strokeLinecap="round" />
          <line x1={3} y1={-3} x2={-3} y2={3} stroke="#D32F2F" strokeWidth={1.5} strokeLinecap="round" />
        </g>
      )}
    </g>
  );
}

/* ================================================================== */
/* Active (drawing) Measurement Line                                    */
/* ================================================================== */
function ActiveMeasureLine({
  start, current, imageNaturalWidth, imageNaturalHeight, containerW, containerH,
}: {
  start: MeasurePoint;
  current: MeasurePoint;
  imageNaturalWidth: number;
  imageNaturalHeight: number;
  containerW: number;
  containerH: number;
}) {
  const x1 = natToPx(start.x, imageNaturalWidth, containerW);
  const y1 = natToPx(start.y, imageNaturalHeight, containerH);
  const x2 = natToPx(current.x, imageNaturalWidth, containerW);
  const y2 = natToPx(current.y, imageNaturalHeight, containerH);

  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  const dx = current.x - start.x;
  const dy = current.y - start.y;
  const dist = Math.round(Math.sqrt(dx * dx + dy * dy));

  const angle = Math.atan2(y2 - y1, x2 - x1);
  const perpX = -Math.sin(angle) * SERIF_SIZE;
  const perpY = Math.cos(angle) * SERIF_SIZE;

  return (
    <g style={{ pointerEvents: "none" }}>
      {/* Main line */}
      <line
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={LINE_COLOR}
        strokeWidth={1.5}
        strokeDasharray="4,3"
      />

      {/* Start serif */}
      <line
        x1={x1 + perpX} y1={y1 + perpY}
        x2={x1 - perpX} y2={y1 - perpY}
        stroke={LINE_COLOR}
        strokeWidth={1.5}
      />

      {/* End serif */}
      <line
        x1={x2 + perpX} y1={y2 + perpY}
        x2={x2 - perpX} y2={y2 - perpY}
        stroke={LINE_COLOR}
        strokeWidth={1.5}
      />

      {/* Start dot */}
      <circle cx={x1} cy={y1} r={3} fill={LINE_COLOR} />

      {/* End dot (cursor) */}
      <circle cx={x2} cy={y2} r={3} fill={LINE_COLOR} stroke="white" strokeWidth={1.5} />

      {/* Distance label */}
      {dist > 0 && (
        <g transform={`translate(${midX}, ${midY - 14})`}>
          <rect
            x={-((dist.toString().length * 6 + 20) / 2)}
            y={-9}
            width={dist.toString().length * 6 + 20}
            height={18}
            rx={3}
            fill={LABEL_BG}
            opacity={0.9}
          />
          <text
            x={0} y={1}
            textAnchor="middle"
            dominantBaseline="central"
            fill={LABEL_TEXT}
            fontSize={10}
            fontWeight={700}
            fontFamily="Inter, system-ui, sans-serif"
          >
            {dist} px
          </text>
        </g>
      )}
    </g>
  );
}

/* ================================================================== */
/* SVG Overlay for all measurements                                     */
/* ================================================================== */
export function MeasureToolOverlay({
  measurements, activeMeasure,
  imageNaturalWidth, imageNaturalHeight, containerW, containerH,
  onRemove, hoveredId, onHover,
}: MeasureToolOverlayProps) {
  return (
    <svg
      className="absolute inset-0 w-full h-full z-20"
      style={{ pointerEvents: "none" }}
      viewBox={`0 0 ${containerW} ${containerH}`}
    >
      {/* Saved measurements */}
      {measurements.map((m) => (
        <MeasureLine
          key={m.id}
          m={m}
          imageNaturalWidth={imageNaturalWidth}
          imageNaturalHeight={imageNaturalHeight}
          containerW={containerW}
          containerH={containerH}
          isHovered={hoveredId === m.id}
          onHover={() => onHover(m.id)}
          onLeave={() => onHover(null)}
          onRemove={() => onRemove(m.id)}
        />
      ))}

      {/* Active drawing */}
      {activeMeasure && (
        <ActiveMeasureLine
          start={activeMeasure.start}
          current={activeMeasure.current}
          imageNaturalWidth={imageNaturalWidth}
          imageNaturalHeight={imageNaturalHeight}
          containerW={containerW}
          containerH={containerH}
        />
      )}
    </svg>
  );
}

/* ================================================================== */
/* Measure Tool Sidebar Panel                                           */
/* ================================================================== */
export function MeasureToolPanel({
  measurements,
  onRemove,
  onClearAll,
  hoveredId,
  onHover,
}: {
  measurements: Measurement[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  if (measurements.length === 0) {
    return (
      <div className="px-4 py-6 flex flex-col items-center gap-2 text-center">
        <div className="w-10 h-10 rounded-full bg-[#FFEBEE] flex items-center justify-center">
          <Ruler className="w-5 h-5 text-[#D32F2F]" />
        </div>
        <p className="text-[11px] text-[#9E9E9E]" style={{ fontWeight: 500 }}>
          Click two points on the image to measure the distance between them.
        </p>
      </div>
    );
  }

  return (
    <div className="px-3 pb-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-[#9E9E9E]" style={{ fontWeight: 600 }}>
          {measurements.length} measurement{measurements.length !== 1 ? "s" : ""}
        </span>
        <button
          onClick={onClearAll}
          className="text-[9px] text-[#D32F2F] hover:text-[#B71C1C] transition-colors cursor-pointer"
          style={{ fontWeight: 600 }}
        >
          Clear all
        </button>
      </div>
      <div className="flex flex-col gap-1">
        {measurements.map((m, idx) => (
          <div
            key={m.id}
            className={`flex items-center gap-2 px-2.5 py-2 rounded-[8px] transition-all group cursor-default ${
              hoveredId === m.id ? "bg-[#FFEBEE]" : "hover:bg-[#FAFAFA]"
            }`}
            onMouseEnter={() => onHover(m.id)}
            onMouseLeave={() => onHover(null)}
          >
            <div className="w-5 h-5 rounded-[4px] bg-[#D32F2F] flex items-center justify-center shrink-0">
              <Ruler className="w-2.5 h-2.5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>
                  {Math.round(m.distance)} px
                </span>
                {(Math.abs(m.dx) >= 2 && Math.abs(m.dy) >= 2) && (
                  <span className="text-[8px] text-[#9E9E9E]" style={{ fontWeight: 500 }}>
                    ({Math.abs(Math.round(m.dx))}x{Math.abs(Math.round(m.dy))})
                  </span>
                )}
              </div>
              <span className="text-[8px] text-[#BDBDBD]" style={{ fontWeight: 500 }}>
                ({Math.round(m.start.x)},{Math.round(m.start.y)}) → ({Math.round(m.end.x)},{Math.round(m.end.y)})
              </span>
            </div>
            <button
              onClick={() => onRemove(m.id)}
              className="p-1 rounded-[4px] text-[#BDBDBD] hover:text-[#D32F2F] hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/* Hook — useMeasureTool                                                */
/* ================================================================== */
let measureIdCounter = 0;

export function useMeasureTool() {
  const [measurements, setMeasurements] = useState<Measurement[]>([]);
  const [activeMeasure, setActiveMeasure] = useState<{ start: MeasurePoint; current: MeasurePoint } | null>(null);
  const [hoveredMeasureId, setHoveredMeasureId] = useState<string | null>(null);
  const [isMeasuring, setIsMeasuring] = useState(false);

  const startMeasure = useCallback((point: MeasurePoint) => {
    setActiveMeasure({ start: point, current: point });
  }, []);

  const updateMeasure = useCallback((point: MeasurePoint) => {
    setActiveMeasure((prev) => prev ? { ...prev, current: point } : null);
  }, []);

  const finishMeasure = useCallback((point: MeasurePoint) => {
    setActiveMeasure((prev) => {
      if (!prev) return null;
      const dx = point.x - prev.start.x;
      const dy = point.y - prev.start.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Minimum 2px to count as a measurement
      if (distance < 2) return null;

      const newMeasurement: Measurement = {
        id: `measure-${Date.now()}-${++measureIdCounter}`,
        start: prev.start,
        end: point,
        distance,
        dx,
        dy,
      };

      setMeasurements((ms) => [...ms, newMeasurement]);
      return null;
    });
  }, []);

  const cancelMeasure = useCallback(() => {
    setActiveMeasure(null);
  }, []);

  const removeMeasurement = useCallback((id: string) => {
    setMeasurements((ms) => ms.filter((m) => m.id !== id));
  }, []);

  const clearAllMeasurements = useCallback(() => {
    setMeasurements([]);
  }, []);

  return {
    measurements,
    activeMeasure,
    hoveredMeasureId,
    isMeasuring,
    setIsMeasuring,
    setHoveredMeasureId,
    startMeasure,
    updateMeasure,
    finishMeasure,
    cancelMeasure,
    removeMeasurement,
    clearAllMeasurements,
  };
}
