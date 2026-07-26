import React from "react";

/** Radio — single-choice control. Selected = violet ring + violet dot (maps to BaseRadio). */
export function Radio({ checked = false, onChange, label, disabled = false, name, value, style, ...rest }) {
  const ring = {
    width: 24, height: 24, flexShrink: 0, borderRadius: "var(--radius-pill)", display: "grid", placeItems: "center", boxSizing: "border-box",
    border: `2px solid ${checked ? "var(--color-primary)" : "var(--color-outline-variant)"}`,
    background: "var(--color-surface-variant)", transition: "all var(--dur-fast) var(--ease-standard)",
  };
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 16, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style }}>
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={ring}>{checked && <span style={{ width: 12, height: 12, borderRadius: "var(--radius-pill)", background: "var(--color-primary)" }} />}</span>
      {label && <span className="kz-label-lg" style={{ color: "var(--color-on-surface)" }}>{label}</span>}
    </label>
  );
}
