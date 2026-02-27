import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2, X, MoreHorizontal, Send, MessageCircle,
} from "lucide-react";
import type { IssueComment, SeverityMarkerIssue } from "../types";

// Re-export for backward compatibility
export type { IssueComment, SeverityMarkerIssue };

export interface IssueSeverityMarkerProps {
  index: number;
  issue: SeverityMarkerIssue;
  containerW: number;
  containerH: number;
  imageNaturalWidth: number;
  imageNaturalHeight: number;
  isHovered: boolean;
  isResolved: boolean;
  isSelected: boolean;
  onHover: () => void;
  onLeave: () => void;
  onResolve: () => void;
  onSelect: () => void;
  onAddComment?: (issueId: string, text: string) => void;
}

/* ================================================================== */
/* Constants                                                            */
/* ================================================================== */
const RING_COLOR = "#3D2C7C";
const PIN_R = 13;
const PIN_TIP = 10;

const SEVERITY_COLORS: Record<string, string> = {
  critical: "#D32F2F",
  major: "#D32F2F",
  moderate: "#E65100",
  minor: "#F9A825",
};

const SEVERITY_BG: Record<string, string> = {
  critical: "#FFEBEE",
  major: "#FFEBEE",
  moderate: "#FFF3E0",
  minor: "#FFFDE7",
};

const SEVERITY_LABELS: Record<string, string> = {
  critical: "Critical",
  major: "Major",
  moderate: "Moderate",
  minor: "Minor",
};

/* ================================================================== */
/* Severity Badge (standalone, for use in sidebars etc)                 */
/* ================================================================== */
export function SeverityBadge({ severity, number, size = "md" }: {
  severity: "minor" | "moderate" | "major" | "critical";
  number: number;
  size?: "sm" | "md" | "lg";
}) {
  const fill = SEVERITY_COLORS[severity] ?? "#D32F2F";
  const dims = size === "sm" ? 20 : size === "lg" ? 32 : 26;
  const fontSize = size === "sm" ? 9 : size === "lg" ? 14 : 11;

  return (
    <div
      className="inline-flex items-center justify-center rounded-[4px] shrink-0 select-none"
      style={{
        width: dims,
        height: dims,
        backgroundColor: fill,
        boxShadow: `0 0 0 2px ${RING_COLOR}`,
      }}
    >
      <span className="text-white" style={{ fontSize, fontWeight: 800, fontFamily: "Inter, system-ui, sans-serif" }}>
        {number}
      </span>
    </div>
  );
}

/* ================================================================== */
/* Severity Grid — shows all severity badges in a grid (for palettes)  */
/* ================================================================== */
export function SeverityGrid({ onSelect }: { onSelect?: (severity: string, index: number) => void }) {
  const severities = ["critical", "major", "moderate", "minor"] as const;

  return (
    <div className="inline-flex flex-col gap-1 p-2 rounded-[8px] border-2 border-dashed border-[#E0E0E0]/60">
      {severities.map((sev) => (
        <div key={sev} className="flex items-center gap-1">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => onSelect?.(sev, num)}
              className="cursor-pointer transition-transform hover:scale-110 active:scale-95"
            >
              <SeverityBadge severity={sev} number={num} size="md" />
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ================================================================== */
/* Comment Thread Panel                                                 */
/* ================================================================== */
function CommentThread({
  issue,
  index,
  isResolved,
  onResolve,
  onClose,
  onAddComment,
}: {
  issue: SeverityMarkerIssue;
  index: number;
  isResolved: boolean;
  onResolve: () => void;
  onClose: () => void;
  onAddComment?: (text: string) => void;
}) {
  const [replyText, setReplyText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const fillColor = isResolved ? "#9E9E9E" : (SEVERITY_COLORS[issue.severity] ?? "#D32F2F");

  const handleSend = useCallback(() => {
    const trimmed = replyText.trim();
    if (!trimmed) return;
    onAddComment?.(trimmed);
    setReplyText("");
  }, [replyText, onAddComment]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  const comments = issue.comments ?? [];

  return (
    <div
      className="bg-white rounded-[12px] overflow-hidden"
      style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.08)", width: 300 }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-[#F0F0F0]">
        <span className="text-[12px] text-[#49454F] flex-1" style={{ fontWeight: 500 }}>
          Issue severity status:
        </span>
        <div className="flex items-center gap-1">
          <button className="p-1 rounded-[6px] hover:bg-[#F5F5F5] transition-colors cursor-pointer text-[#9E9E9E]">
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onResolve}
            className="p-1 rounded-[6px] transition-colors cursor-pointer"
            style={{ color: isResolved ? "#2E7D32" : "#9E9E9E", backgroundColor: isResolved ? "#E8F5E9" : "transparent" }}
            title={isResolved ? "Mark as unresolved" : "Mark as resolved"}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="p-1 rounded-[6px] hover:bg-[#F5F5F5] transition-colors cursor-pointer text-[#9E9E9E]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* System description */}
      <div className="px-3.5 py-2.5 border-b border-[#F5F5F5]">
        <div className="flex items-center gap-2 mb-1.5">
          <div
            className="flex items-center justify-center rounded-full shrink-0"
            style={{ width: 24, height: 24, backgroundColor: fillColor, boxShadow: `0 0 0 2px ${RING_COLOR}` }}
          >
            <span className="text-white text-[10px] select-none" style={{ fontWeight: 800 }}>{index}</span>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[12px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>
              {SEVERITY_LABELS[issue.severity] ?? "Issue"}
            </span>
            <span
              className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded-[4px] inline-block"
              style={{ backgroundColor: SEVERITY_BG[issue.severity], color: fillColor, fontWeight: 600 }}
            >
              {issue.diffPercentage.toFixed(1)}%
            </span>
          </div>
        </div>
        <div
          className={`ml-8 ${isResolved ? "text-[#9E9E9E] line-through" : "text-[#49454F]"}`}
          style={{ fontWeight: 400, lineHeight: 1.55 }}
        >
          {issue.description.includes("Margin changes:") ? (() => {
            const mainDesc = issue.description.split(". Margin changes:")[0];
            const marginPart = issue.description.split(". Margin changes:")[1] ?? "";
            const margins = marginPart.split(";").map((s) => s.trim()).filter(Boolean);
            return (
              <>
                <p className="text-[11px]">{mainDesc}</p>
                {margins.length > 0 && (
                  <div className="mt-1.5 flex flex-col gap-1">
                    {margins.map((m, i) => {
                      const match = m.match(/(\w+): master (\d+)px → actual (\d+)px \(([+-]?\d+)px\)/);
                      if (!match) return <span key={i} className="text-[9px] text-[#9E9E9E]">{m}</span>;
                      const [, edge, masterVal, actualVal, delta] = match;
                      const deltaNum = parseInt(delta, 10);
                      const color = Math.abs(deltaNum) > 4 ? "#D32F2F" : Math.abs(deltaNum) > 2 ? "#E65100" : "#F9A825";
                      return (
                        <div key={i} className="flex items-center gap-1.5 text-[9px]">
                          <span className="text-[#9E9E9E] w-[40px]" style={{ fontWeight: 600 }}>{edge}:</span>
                          <span className="text-[#BDBDBD]">{masterVal}px</span>
                          <span className="text-[#BDBDBD]">→</span>
                          <span className="text-[#49454F]" style={{ fontWeight: 600 }}>{actualVal}px</span>
                          <span className="px-1.5 py-0.5 rounded-[4px]" style={{ fontWeight: 700, color, backgroundColor: `${color}12` }}>
                            {deltaNum > 0 ? "+" : ""}{delta}px
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })() : (
            <p className="text-[11px]">{issue.description}</p>
          )}
        </div>
        <div className="flex items-center gap-2 ml-8 mt-1 text-[9px] text-[#BDBDBD]" style={{ fontWeight: 500 }}>
          <span>({issue.x}, {issue.y})</span>
          <span className="text-[#E0E0E0]">&middot;</span>
          <span>{issue.width}&times;{issue.height}px</span>
        </div>
      </div>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="px-3.5 py-2 max-h-[200px] overflow-y-auto">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start gap-2.5 py-2.5 group">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white text-[10px] select-none"
                style={{ backgroundColor: comment.avatarColor, fontWeight: 700 }}
              >
                {comment.author.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#1C1B1F] truncate" style={{ fontWeight: 600 }}>
                    {comment.author}
                  </span>
                  <span className="text-[9px] text-[#BDBDBD] shrink-0" style={{ fontWeight: 400 }}>
                    {comment.timestamp}
                  </span>
                  <button className="p-0.5 ml-auto rounded-[4px] hover:bg-[#F5F5F5] transition-colors cursor-pointer text-[#BDBDBD] opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-[11px] text-[#49454F] mt-0.5" style={{ fontWeight: 400, lineHeight: 1.5 }}>
                  {comment.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Reply input */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-t border-[#F0F0F0]">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white text-[10px] select-none"
          style={{ backgroundColor: "#F9A825", fontWeight: 700 }}
        >
          U
        </div>
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Reply"
            className="w-full text-[11px] px-3 py-1.5 pr-8 rounded-full bg-[#F5F5F5] border border-[#E0E0E0] text-[#1C1B1F] placeholder-[#BDBDBD] outline-none focus:border-[#2962FF] transition-colors"
            style={{ fontWeight: 400 }}
          />
          <button
            onClick={handleSend}
            disabled={!replyText.trim()}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 rounded-full transition-colors cursor-pointer disabled:opacity-30"
            style={{ color: replyText.trim() ? "#F9A825" : "#BDBDBD" }}
          >
            <Send className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Main IssueSeverityMarker                                             */
/* ================================================================== */
export function IssueSeverityMarker({
  index, issue, containerW, containerH,
  imageNaturalWidth, imageNaturalHeight,
  isHovered, isResolved, isSelected,
  onHover, onLeave, onResolve, onSelect, onAddComment,
}: IssueSeverityMarkerProps) {
  const fillColor = isResolved ? "#9E9E9E" : (SEVERITY_COLORS[issue.severity] ?? "#D32F2F");
  const markerRef = useRef<HTMLDivElement>(null);

  // Issue center in percentage coordinates
  const issueCx = ((issue.x + issue.width / 2) / imageNaturalWidth) * 100;
  const issueCy = ((issue.y + issue.height / 2) / imageNaturalHeight) * 100;

  // Place marker at edge of bounding box
  const boxRight = ((issue.x + issue.width) / imageNaturalWidth) * 100;
  const boxLeft = (issue.x / imageNaturalWidth) * 100;
  const boxTop = (issue.y / imageNaturalHeight) * 100;
  const boxBottom = ((issue.y + issue.height) / imageNaturalHeight) * 100;

  let pinLeftPct = boxRight + 2;
  let pinTopPct = boxTop;
  if (boxRight > 82) pinLeftPct = Math.max(0, boxLeft - 2);
  if (boxTop < 10) pinTopPct = boxBottom;

  // Angle from pin position toward issue center (the tip points there)
  const dxPx = (issueCx - pinLeftPct) / 100 * containerW;
  const dyPx = (issueCy - pinTopPct) / 100 * containerH;
  const angleDeg = Math.atan2(dyPx, dxPx) * (180 / Math.PI) + 90;

  const tooltipOnLeft = pinLeftPct > 50;
  const tooltipOnTop = pinTopPct > 35;

  const svgSize = (PIN_R + 3) * 2 + PIN_TIP;
  const svgCenter = PIN_R + 3;

  // Close on outside click
  useEffect(() => {
    if (!isSelected) return;
    const handler = (e: MouseEvent) => {
      if (markerRef.current && !markerRef.current.contains(e.target as Node)) {
        onSelect(); // toggle off
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isSelected, onSelect]);

  return (
    <div
      ref={markerRef}
      className="absolute pointer-events-auto"
      style={{ left: `${pinLeftPct}%`, top: `${pinTopPct}%`, zIndex: isSelected ? 50 : isHovered ? 40 : 10 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Hover bounding box highlight */}
      {(isHovered || isSelected) && (() => {
        const boxX = (issue.x / imageNaturalWidth) * containerW;
        const boxY = (issue.y / imageNaturalHeight) * containerH;
        const boxW = (issue.width / imageNaturalWidth) * containerW;
        const boxH = (issue.height / imageNaturalHeight) * containerH;
        const pinX = (pinLeftPct / 100) * containerW;
        const pinY = (pinTopPct / 100) * containerH;

        // Parse spacing/size deltas from description for px distance lines
        const marginMatch = issue.description.match(/Margin changes:(.+)/);
        const margins = marginMatch
          ? marginMatch[1].split(";").map((s) => s.trim()).filter(Boolean).map((m) => {
              const match = m.match(/(top|bottom|left|right): master (\d+)px → actual (\d+)px \(([+-]?\d+)px\)/i);
              if (!match) return null;
              return { edge: match[1].toLowerCase(), master: +match[2], actual: +match[3], delta: +match[4] };
            }).filter(Boolean) as Array<{ edge: string; master: number; actual: number; delta: number }>
          : [];

        return (
          <>
            {/* Bounding box outline */}
            <div className="pointer-events-none" style={{
              position: "absolute",
              left: boxX - pinX,
              top: boxY - pinY,
              width: boxW,
              height: boxH,
              border: `2px solid ${fillColor}`,
              borderRadius: 3,
              backgroundColor: `${fillColor}10`,
            }} />

            {/* Connecting arrow line from pin to issue center */}
            <svg className="absolute pointer-events-none overflow-visible" style={{ left: 0, top: 0, width: 1, height: 1 }}>
              <defs>
                <marker id={`arrow-${issue.id}`} markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
                  <path d="M0,0 L6,2 L0,4" fill={fillColor} />
                </marker>
              </defs>
              <line
                x1={0} y1={0}
                x2={(boxX + boxW / 2) - pinX}
                y2={(boxY + boxH / 2) - pinY}
                stroke={fillColor}
                strokeWidth={1.5}
                strokeDasharray="4 3"
                markerEnd={`url(#arrow-${issue.id})`}
                opacity={0.7}
              />
            </svg>

            {/* Px distance lines for spacing/size differences */}
            {margins.map((m, i) => {
              const absDelta = Math.abs(m.delta);
              const color = absDelta > 4 ? "#D32F2F" : absDelta > 2 ? "#E65100" : "#F9A825";
              let x1 = 0, y1 = 0, x2 = 0, y2 = 0, labelX = 0, labelY = 0;
              const oX = boxX - pinX;
              const oY = boxY - pinY;

              if (m.edge === "top") {
                const actualPx = (m.actual / imageNaturalHeight) * containerH;
                x1 = oX + boxW / 2; y1 = oY - actualPx; x2 = oX + boxW / 2; y2 = oY;
                labelX = x1 + 6; labelY = (y1 + y2) / 2;
              } else if (m.edge === "bottom") {
                const actualPx = (m.actual / imageNaturalHeight) * containerH;
                x1 = oX + boxW / 2; y1 = oY + boxH; x2 = oX + boxW / 2; y2 = oY + boxH + actualPx;
                labelX = x1 + 6; labelY = (y1 + y2) / 2;
              } else if (m.edge === "left") {
                const actualPx = (m.actual / imageNaturalWidth) * containerW;
                x1 = oX - actualPx; y1 = oY + boxH / 2; x2 = oX; y2 = oY + boxH / 2;
                labelX = (x1 + x2) / 2; labelY = y1 - 10;
              } else if (m.edge === "right") {
                const actualPx = (m.actual / imageNaturalWidth) * containerW;
                x1 = oX + boxW; y1 = oY + boxH / 2; x2 = oX + boxW + actualPx; y2 = oY + boxH / 2;
                labelX = (x1 + x2) / 2; labelY = y1 - 10;
              }

              return (
                <svg key={i} className="absolute pointer-events-none overflow-visible" style={{ left: 0, top: 0, width: 1, height: 1 }}>
                  {/* Distance line */}
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={2} />
                  {/* End caps */}
                  {(m.edge === "top" || m.edge === "bottom") ? (
                    <>
                      <line x1={x1 - 4} y1={y1} x2={x1 + 4} y2={y1} stroke={color} strokeWidth={2} />
                      <line x1={x2 - 4} y1={y2} x2={x2 + 4} y2={y2} stroke={color} strokeWidth={2} />
                    </>
                  ) : (
                    <>
                      <line x1={x1} y1={y1 - 4} x2={x1} y2={y1 + 4} stroke={color} strokeWidth={2} />
                      <line x1={x2} y1={y2 - 4} x2={x2} y2={y2 + 4} stroke={color} strokeWidth={2} />
                    </>
                  )}
                  {/* Label */}
                  <rect x={labelX - 16} y={labelY - 8} width={32} height={16} rx={4} fill={color} />
                  <text x={labelX} y={labelY + 4} textAnchor="middle" fill="white" fontSize={9} fontWeight={700} fontFamily="Inter, system-ui, sans-serif">
                    {m.delta > 0 ? "+" : ""}{m.delta}px
                  </text>
                </svg>
              );
            })}
          </>
        );
      })()}

      {/* Pulsing ring on hover */}
      {(isHovered || isSelected) && !isResolved && (
        <>
          <div className="absolute rounded-full pointer-events-none"
            style={{ width: 44, height: 44, left: -22, top: -22,
              border: `2px solid ${fillColor}`,
              animation: "severityPinRipple 1.3s ease-out infinite" }} />
          <div className="absolute rounded-full pointer-events-none"
            style={{ width: 44, height: 44, left: -22, top: -22,
              border: `2px solid ${fillColor}`,
              animation: "severityPinRipple 1.3s ease-out 0.4s infinite" }} />
          <style>{`
            @keyframes severityPinRipple {
              0% { transform: scale(0.5); opacity: 0.6; }
              100% { transform: scale(2.2); opacity: 0; }
            }
          `}</style>
        </>
      )}

      {/* Teardrop pin SVG */}
      <div
        className="cursor-pointer"
        onClick={(e) => { e.stopPropagation(); onSelect(); }}
        style={{
          width: svgSize, height: svgSize + PIN_TIP,
          marginLeft: -(svgSize / 2), marginTop: -(svgSize / 2),
          transform: `rotate(${angleDeg}deg)`,
          transformOrigin: `${svgSize / 2}px ${svgSize / 2}px`,
          filter: (isHovered || isSelected)
            ? `drop-shadow(0 3px 8px ${fillColor}60)`
            : "drop-shadow(0 1px 4px rgba(0,0,0,0.25))",
          transition: "filter 0.2s ease",
        }}
      >
        <svg width={svgSize} height={svgSize + PIN_TIP} viewBox={`0 0 ${svgSize} ${svgSize + PIN_TIP}`} className="overflow-visible">
          <path
            d={`
              M ${svgCenter} ${svgCenter + PIN_R + PIN_TIP}
              Q ${svgCenter - 5} ${svgCenter + PIN_R + 2} ${svgCenter - PIN_R * Math.sin(Math.PI / 4)} ${svgCenter + PIN_R * Math.cos(Math.PI / 4)}
              A ${PIN_R} ${PIN_R} 0 1 1 ${svgCenter + PIN_R * Math.sin(Math.PI / 4)} ${svgCenter + PIN_R * Math.cos(Math.PI / 4)}
              Q ${svgCenter + 5} ${svgCenter + PIN_R + 2} ${svgCenter} ${svgCenter + PIN_R + PIN_TIP}
              Z
            `}
            fill={fillColor}
            stroke={RING_COLOR}
            strokeWidth={3}
          />
          {issue.isAI ? (
            <text
              x={svgCenter} y={svgCenter + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fill="white"
              fontSize={11}
              fontWeight={800}
              fontFamily="Inter, system-ui, sans-serif"
              transform={`rotate(${-angleDeg}, ${svgCenter}, ${svgCenter})`}
            >
              AI
            </text>
          ) : (
            <text
              x={svgCenter} y={svgCenter + 1}
              textAnchor="middle"
              dominantBaseline="central"
              fill="white"
              fontSize={index >= 10 ? 10 : 12}
              fontWeight={800}
              fontFamily="Inter, system-ui, sans-serif"
              transform={`rotate(${-angleDeg}, ${svgCenter}, ${svgCenter})`}
            >
              {index}
            </text>
          )}
        </svg>
      </div>

      {/* Comment count badge */}
      {(issue.comments?.length ?? 0) > 0 && !isSelected && (
        <div
          className="absolute flex items-center gap-0.5 px-1 py-0.5 rounded-full bg-white shadow-md pointer-events-none"
          style={{ top: -8, right: -14, minWidth: 18 }}
        >
          <MessageCircle className="w-2 h-2 text-[#9E9E9E]" />
          <span className="text-[7px] text-[#49454F]" style={{ fontWeight: 700 }}>{issue.comments!.length}</span>
        </div>
      )}

      {/* Figma-style comment thread popup */}
      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: tooltipOnTop ? 6 : -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: tooltipOnTop ? 6 : -6 }}
            transition={{ type: "spring", stiffness: 520, damping: 30, mass: 0.7 }}
            className="absolute z-50"
            style={{
              [tooltipOnTop ? "bottom" : "top"]: "calc(100% + 14px)",
              [tooltipOnLeft ? "right" : "left"]: -8,
              pointerEvents: "auto",
            }}
          >
            <CommentThread
              issue={issue}
              index={index}
              isResolved={isResolved}
              onResolve={onResolve}
              onClose={onSelect}
              onAddComment={(text) => onAddComment?.(issue.id, text)}
            />
            {/* Arrow */}
            <div className="absolute w-2.5 h-2.5 bg-white rotate-45"
              style={{
                [tooltipOnTop ? "bottom" : "top"]: -5,
                [tooltipOnLeft ? "right" : "left"]: 18,
                boxShadow: tooltipOnTop
                  ? "2px 2px 3px rgba(0,0,0,0.04)"
                  : "-1px -1px 3px rgba(0,0,0,0.04)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simple hover tooltip (only when not selected) */}
      <AnimatePresence>
        {isHovered && !isSelected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 520, damping: 30, mass: 0.7 }}
            className="absolute z-40"
            style={{
              [tooltipOnTop ? "bottom" : "top"]: "calc(100% + 10px)",
              [tooltipOnLeft ? "right" : "left"]: -8,
              width: 220,
              pointerEvents: "none",
            }}
          >
            <div className="bg-white rounded-[10px] overflow-hidden px-3 py-2.5"
              style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center gap-2 mb-1.5">
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{ width: 20, height: 20, backgroundColor: fillColor }}
                >
                  <span className="text-white text-[8px] select-none" style={{ fontWeight: 800 }}>{index}</span>
                </div>
                <span className="text-[11px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>
                  {SEVERITY_LABELS[issue.severity]}
                </span>
                <span className="text-[9px] text-[#BDBDBD] ml-auto" style={{ fontWeight: 500 }}>
                  {issue.diffPercentage.toFixed(1)}%
                </span>
              </div>
              <p className="text-[10px] text-[#49454F] truncate" style={{ fontWeight: 400 }}>
                {issue.description}
              </p>
              <p className="text-[8px] text-[#BDBDBD] mt-1" style={{ fontWeight: 500 }}>
                Click to open thread
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}