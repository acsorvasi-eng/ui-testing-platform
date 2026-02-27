import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText, CheckCircle2, ChevronDown, Sparkles, Ruler,
} from "lucide-react";
import type { ComparisonIssue, IssueComment } from "../types";
import { RING_COLOR, SEVERITY_COLORS } from "../types";

interface IssuesPanelProps {
  allIssues: ComparisonIssue[];
  resolvedIssues: Set<string>;
  hoveredIssueId: string | null;
  selectedIssueId: string | null;
  issueComments: Record<string, IssueComment[]>;
  onHoverIssue: (id: string | null) => void;
  onSelectIssue: (id: string | null) => void;
  onResolveIssue: (id: string) => void;
}

export function IssuesPanel({
  allIssues,
  resolvedIssues,
  hoveredIssueId,
  selectedIssueId,
  issueComments,
  onHoverIssue,
  onSelectIssue,
  onResolveIssue,
}: IssuesPanelProps) {
  const [issuesExpanded, setIssuesExpanded] = useState(false);

  if (allIssues.length === 0) return null;

  const critCount = allIssues.filter((i) => i.severity === "critical" || i.severity === "major").length;
  const modCount = allIssues.filter((i) => i.severity === "moderate").length;
  const minorCount = allIssues.filter((i) => i.severity === "minor").length;

  return (
    <div
      className="bg-white rounded-[16px] border border-[#E0E0E0]/60 overflow-hidden"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.03)" }}
    >
      {/* Collapsible header */}
      <button
        onClick={() => setIssuesExpanded((p) => !p)}
        className="w-full px-4 py-3 flex items-center gap-2.5 hover:bg-[#FAFAFA] transition-colors cursor-pointer"
      >
        <FileText className="w-4 h-4 text-[#79747E] shrink-0" />
        <span className="text-[13px] text-[#1C1B1F]" style={{ fontWeight: 600 }}>
          Issues
        </span>
        <span
          className="text-[11px] px-2 py-0.5 rounded-full bg-[#F5F5F5] text-[#49454F]"
          style={{ fontWeight: 600 }}
        >
          {allIssues.length}
        </span>
        {/* Severity mini-badges */}
        <div className="flex items-center gap-1.5 ml-1">
          {critCount > 0 && (
            <span className="flex items-center gap-1 text-[10px] text-[#D32F2F]" style={{ fontWeight: 600 }}>
              <span className="w-2 h-2 rounded-full bg-[#D32F2F]" />
              {critCount}
            </span>
          )}
          {modCount > 0 && (
            <span className="flex items-center gap-1 text-[10px] text-[#E65100]" style={{ fontWeight: 600 }}>
              <span className="w-2 h-2 rounded-full bg-[#E65100]" />
              {modCount}
            </span>
          )}
          {minorCount > 0 && (
            <span className="flex items-center gap-1 text-[10px] text-[#F9A825]" style={{ fontWeight: 600 }}>
              <span className="w-2 h-2 rounded-full bg-[#F9A825]" />
              {minorCount}
            </span>
          )}
        </div>
        <ChevronDown
          className="w-4 h-4 text-[#BDBDBD] ml-auto shrink-0 transition-transform"
          style={{ transform: issuesExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {issuesExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 34, mass: 0.8 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#F0F0F0] divide-y divide-[#F5F5F5] max-h-[420px] overflow-y-auto">
              {allIssues.map((issue, issueIdx) => {
                const iColor = resolvedIssues.has(issue.id)
                  ? "#9E9E9E"
                  : (SEVERITY_COLORS[issue.severity] ?? "#9E9E9E");
                const isHighlighted = hoveredIssueId === issue.id;
                const resolved = resolvedIssues.has(issue.id);
                return (
                  <div
                    key={issue.id}
                    className={`flex items-center gap-3 transition-all cursor-pointer ${
                      isHighlighted || selectedIssueId === issue.id
                        ? "bg-[#FAFAFA]"
                        : "hover:bg-[#FAFAFA]/60"
                    }`}
                    style={{
                      padding: "10px 16px",
                      borderLeft:
                        isHighlighted || selectedIssueId === issue.id
                          ? `3px solid ${iColor}`
                          : "3px solid transparent",
                      opacity: resolved ? 0.55 : 1,
                    }}
                    onClick={() =>
                      onSelectIssue(selectedIssueId === issue.id ? null : issue.id)
                    }
                    onMouseEnter={() => onHoverIssue(issue.id)}
                    onMouseLeave={() => onHoverIssue(null)}
                  >
                    {/* Pin badge */}
                    <div
                      className="flex items-center justify-center rounded-full shrink-0"
                      style={{
                        width: 24,
                        height: 24,
                        backgroundColor: iColor,
                        boxShadow: `0 0 0 2.5px ${RING_COLOR}, 0 1px 4px ${iColor}30`,
                      }}
                    >
                      <span
                        className="text-white select-none"
                        style={{ fontSize: 10, fontWeight: 800, lineHeight: 1 }}
                      >
                        {issueIdx + 1}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {issue.description.includes("Margin changes:") ? (
                        (() => {
                          const mainPart = issue.description.split(". Margin changes:")[0];
                          const marginPart = issue.description.split(". Margin changes:")[1] ?? "";
                          const margins = marginPart
                            .split(";")
                            .map((s: string) => s.trim())
                            .filter(Boolean);
                          return (
                            <>
                              <p
                                className={`text-[11px] ${
                                  resolved ? "text-[#9E9E9E] line-through" : "text-[#1C1B1F]"
                                }`}
                                style={{ fontWeight: 500 }}
                              >
                                {mainPart}
                              </p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {margins.map((m: string, mi: number) => {
                                  const match = m.match(
                                    /(\w+): master (\d+)px → actual (\d+)px \(([+-]?\d+)px\)/
                                  );
                                  if (!match) return null;
                                  const [, edge, , , delta] = match;
                                  const deltaNum = parseInt(delta, 10);
                                  const clr =
                                    Math.abs(deltaNum) > 4
                                      ? "#D32F2F"
                                      : Math.abs(deltaNum) > 2
                                      ? "#E65100"
                                      : "#F9A825";
                                  return (
                                    <span
                                      key={mi}
                                      className="inline-flex items-center gap-0.5 text-[8px] px-1.5 py-0.5 rounded-[4px]"
                                      style={{
                                        fontWeight: 700,
                                        color: clr,
                                        backgroundColor: `${clr}12`,
                                      }}
                                    >
                                      {edge}: {deltaNum > 0 ? "+" : ""}
                                      {delta}px
                                    </span>
                                  );
                                })}
                              </div>
                            </>
                          );
                        })()
                      ) : (
                        <p
                          className={`text-[12px] ${
                            resolved ? "text-[#9E9E9E] line-through" : "text-[#1C1B1F]"
                          }`}
                          style={{ fontWeight: 500 }}
                        >
                          {issue.description}
                        </p>
                      )}
                      <div className="flex items-center gap-2.5 mt-1">
                        <span className="text-[10px] text-[#BDBDBD]">
                          ({issue.x}, {issue.y})
                        </span>
                        <span className="text-[10px] text-[#BDBDBD]">
                          {issue.width}&times;{issue.height}
                        </span>
                        <span
                          className="text-[10px] px-1.5 py-0.5 rounded-[4px]"
                          style={{
                            fontWeight: 600,
                            color: iColor,
                            backgroundColor: `${iColor}12`,
                          }}
                        >
                          {issue.severity}
                        </span>
                        {issue.id.toString().startsWith("ai-") && (
                          <span
                            className="flex items-center gap-0.5 text-[9px] px-1.5 py-0.5 rounded-[4px] bg-[#F3E5F5] text-[#7B1FA2]"
                            style={{ fontWeight: 700 }}
                          >
                            <Sparkles className="w-2.5 h-2.5" /> AI
                          </span>
                        )}
                        {issue.id.toString().startsWith("offset-") && (
                          <span
                            className="flex items-center gap-0.5 text-[9px] px-1.5 py-0.5 rounded-[4px] bg-[#E3F2FD] text-[#1565C0]"
                            style={{ fontWeight: 700 }}
                          >
                            <Ruler className="w-2.5 h-2.5" /> Shift
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Resolve check + diff */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onResolveIssue(issue.id);
                      }}
                      className="shrink-0 cursor-pointer"
                      title={resolved ? "Unresolve" : "Resolve"}
                    >
                      <CheckCircle2
                        className="w-4 h-4"
                        style={{ color: resolved ? "#2E7D32" : "#E0E0E0" }}
                      />
                    </button>
                    <span
                      className="text-[11px] text-[#BDBDBD] shrink-0"
                      style={{ fontWeight: 500 }}
                    >
                      {issue.diffPercentage.toFixed(2)}%
                    </span>
                    {(issueComments[issue.id]?.length ?? 0) > 0 && (
                      <span
                        className="flex items-center gap-0.5 text-[9px] text-[#9E9E9E] shrink-0 px-1.5 py-0.5 rounded-full bg-[#F5F5F5]"
                        style={{ fontWeight: 600 }}
                      >
                        <span>{"\uD83D\uDCAC"}</span> {issueComments[issue.id].length}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
