import React from "react";

/** Picker — inline wheel-style option list (maps to basePicker). Highlights the centered value. */
export function Picker({ options = [], value, onChange, style, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", maxHeight: 176, overflowY: "auto", padding: "4px 0",
      background: "var(--color-surface-input)", borderRadius: "var(--radius-lg)", ...style }} {...rest}>
      {options.map((o) => {
        const val = o.value ?? o, label = o.label ?? o, sel = val === value;
        return (
          <button key={val} type="button" onClick={() => onChange && onChange(val)}
            className={sel ? "kz-title-md" : "kz-body-lg"}
            style={{ padding: "10px 16px", border: "none", background: "transparent", cursor: "pointer", textAlign: "center",
              color: sel ? "var(--color-primary)" : "var(--color-text-muted)", opacity: sel ? 1 : 0.65 }}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
