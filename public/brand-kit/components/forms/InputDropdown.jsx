import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * InputDropdown — a select-style field that opens a list of options (maps to InputDropdown).
 * Soft cloud fill matching Input; chevron flips when open.
 */
export function InputDropdown({ label, value, placeholder = "Select", options = [], onChange, style, ...rest }) {
  const [open, setOpen] = useState(false);
  const current = options.find((o) => (o.value ?? o) === value);
  const shown = current ? (current.label ?? current) : null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, position: "relative", ...style }} {...rest}>
      {label && <span className="kz-label-md" style={{ color: "var(--color-on-surface)" }}>{label}</span>}
      <button type="button" onClick={() => setOpen(!open)}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 56, padding: "0 16px",
          background: "var(--color-surface-input)", borderRadius: "var(--radius-lg)", cursor: "pointer",
          border: `1.5px solid ${open ? "var(--color-primary)" : "transparent"}` }}>
        <span className="kz-body-lg" style={{ color: shown ? "var(--color-on-surface)" : "var(--color-on-surface-disabled)" }}>{shown || placeholder}</span>
        <Icon name={open ? "ChevronUp" : "ChevronDown"} size={22} color="var(--color-text-muted)" />
      </button>
      {open && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, marginTop: 6, zIndex: 20,
          background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow)", overflow: "hidden" }}>
          {options.map((o) => {
            const val = o.value ?? o, lbl = o.label ?? o, sel = val === value;
            return (
              <button key={val} type="button" onClick={() => { onChange && onChange(val); setOpen(false); }} className="kz-body-lg"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "12px 16px", border: "none",
                  background: sel ? "var(--color-surface-strong)" : "transparent", color: "var(--color-on-surface)", cursor: "pointer", textAlign: "left" }}>
                {lbl}{sel && <Icon name="Check" size={18} color="var(--color-primary)" strokeWidth={3} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
