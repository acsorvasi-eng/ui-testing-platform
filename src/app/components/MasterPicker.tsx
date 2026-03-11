import { useState, useEffect, useRef } from "react";
import { ImageIcon, RefreshCw, FolderOpen } from "lucide-react";

interface MasterEntry {
  name: string;
  url: string;
}

interface MasterPickerProps {
  onSelect: (url: string) => void;
  currentUrl?: string;
}

export function MasterPicker({ onSelect, currentUrl }: MasterPickerProps) {
  const [masters, setMasters] = useState<MasterEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [panelPos, setPanelPos] = useState({ top: 0, left: 0 });

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(`/masters-manifest.json?t=${Date.now()}`);
      const data = await res.json();
      setMasters(data);
    } catch {
      setMasters([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  function handleOpen() {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPanelPos({ top: rect.bottom + 8, left: rect.left });
    }
    setOpen(true);
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleOpen}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium text-[#6750A4] bg-[#F3EDF7] hover:bg-[#EAD6FD] transition-colors"
      >
        <FolderOpen className="w-3.5 h-3.5" />
        Figma masters
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          />
          {/* Panel */}
          <div
            className="fixed z-50 w-[320px] bg-white rounded-[16px] shadow-xl border border-[#E0E0E0] overflow-hidden"
            style={{ top: panelPos.top, left: panelPos.left }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#F5F5F5]">
              <span className="text-[13px] font-semibold text-[#1C1B1F]">Figma Masters</span>
              <div className="flex items-center gap-2">
                <button onClick={load} className="p-1 rounded-md hover:bg-[#F5F5F5] transition-colors">
                  <RefreshCw className="w-3.5 h-3.5 text-[#49454F]" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-md hover:bg-[#F5F5F5] transition-colors text-[#49454F] text-[16px] leading-none"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="max-h-[360px] overflow-y-auto p-3">
              {loading ? (
                <div className="flex items-center justify-center py-8 text-[#9E9E9E] text-[12px]">
                  Loading...
                </div>
              ) : masters.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 gap-2">
                  <ImageIcon className="w-8 h-8 text-[#E0E0E0]" />
                  <p className="text-[12px] text-[#9E9E9E] text-center">
                    No masters found.<br />
                    Run <code className="bg-[#F5F5F5] px-1 rounded">npm run export:figma</code> first.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {masters.map((m) => {
                    const active = currentUrl?.includes(m.name);
                    return (
                      <button
                        key={m.url}
                        onClick={() => { onSelect(m.url); setOpen(false); }}
                        className={`relative rounded-[10px] overflow-hidden border-2 transition-all hover:scale-[1.02] ${
                          active ? "border-[#6750A4]" : "border-[#E0E0E0] hover:border-[#B0B0B0]"
                        }`}
                      >
                        <img
                          src={m.url}
                          alt={m.name}
                          className="w-full h-[120px] object-cover object-top"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-1.5">
                          <p className="text-[10px] text-white font-medium truncate">
                            {m.name.replace(".png", "")}
                          </p>
                        </div>
                        {active && (
                          <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#6750A4] rounded-full flex items-center justify-center">
                            <span className="text-white text-[8px]">✓</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
