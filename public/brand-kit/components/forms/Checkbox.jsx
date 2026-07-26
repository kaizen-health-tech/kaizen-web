import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Checkbox — 24px rounded box. Checked = violet fill, aquamarine tick & border
 * (mirrors BaseCheckbox: fill primary, border/icon tertiary).
 */
export function Checkbox({ checked = false, onChange, label, disabled = false, style, ...rest }) {
  const box = {
    width: 24, height: 24, flexShrink: 0, borderRadius: "var(--radius-sm)",
    display: "grid", placeItems: "center", boxSizing: "border-box",
    border: `2px solid ${checked ? "var(--color-tertiary)" : "var(--color-outline-variant)"}`,
    background: checked ? "var(--color-primary)" : "var(--color-surface-variant)",
    transition: "all var(--dur-fast) var(--ease-standard)",
  };
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 16, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, ...style }}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={(e) => onChange && onChange(e.target.checked)} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} {...rest} />
      <span style={box}>{checked && <Icon name="Check" size={16} color="var(--color-tertiary)" strokeWidth={3} />}</span>
      {label && <span className="kz-label-lg" style={{ color: "var(--color-on-surface)" }}>{label}</span>}
    </label>
  );
}
