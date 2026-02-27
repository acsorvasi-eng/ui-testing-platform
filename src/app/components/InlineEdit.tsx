import { useState, useRef, useEffect, useCallback } from "react";
import { Check, Pencil } from "lucide-react";

interface InlineEditProps {
  value: string;
  onSave: (newValue: string) => void;
  /** CSS classes applied to text when NOT editing */
  className?: string;
  /** Inline style for the text */
  style?: React.CSSProperties;
  /** Placeholder when empty */
  placeholder?: string;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Max length */
  maxLength?: number;
}

export function InlineEdit({
  value,
  onSave,
  className = "",
  style,
  placeholder = "Untitled",
  size = "md",
  maxLength = 80,
}: InlineEditProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync draft when value changes externally
  useEffect(() => {
    if (!editing) setDraft(value);
  }, [value, editing]);

  // Auto-focus on edit start
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  const commit = useCallback(() => {
    const trimmed = draft.trim();
    if (trimmed && trimmed !== value) {
      onSave(trimmed);
    } else {
      setDraft(value);
    }
    setEditing(false);
  }, [draft, value, onSave]);

  const cancel = useCallback(() => {
    setDraft(value);
    setEditing(false);
  }, [value]);

  const sizeStyles = {
    sm: { input: "text-[13px] px-1.5 py-0.5", icon: "w-2.5 h-2.5" },
    md: { input: "text-[15px] px-2 py-1", icon: "w-3 h-3" },
    lg: { input: "text-[16px] px-2 py-1", icon: "w-3.5 h-3.5" },
  };

  if (editing) {
    return (
      <div className="flex items-center gap-1.5">
        <input
          ref={inputRef}
          type="text"
          value={draft}
          maxLength={maxLength}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={commit}
          onKeyDown={(e) => {
            if (e.key === "Enter") commit();
            if (e.key === "Escape") cancel();
          }}
          className={`${sizeStyles[size].input} rounded-[8px] bg-[#F5F5F5] border border-[#2962FF] text-[#1C1B1F] outline-none ring-2 ring-[#2962FF]/15 transition-all min-w-0 w-full`}
          style={{ ...style, fontWeight: style?.fontWeight ?? 600 }}
        />
        <button
          onMouseDown={(e) => { e.preventDefault(); commit(); }}
          className="p-1 rounded-[6px] bg-[#2962FF] text-white hover:bg-[#1E88E5] transition-colors cursor-pointer shrink-0"
        >
          <Check className={sizeStyles[size].icon} strokeWidth={2.5} />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setEditing(true)}
      className={`group/edit flex items-center gap-1.5 min-w-0 text-left cursor-pointer rounded-[6px] hover:bg-[#F5F5F5] transition-colors px-1 -mx-1 ${className}`}
      style={style}
      title="Click to edit"
    >
      <span className="truncate">{value || placeholder}</span>
      <Pencil
        className={`${sizeStyles[size].icon} text-[#BDBDBD] opacity-0 group-hover/edit:opacity-100 transition-opacity shrink-0`}
        strokeWidth={2}
      />
    </button>
  );
}
