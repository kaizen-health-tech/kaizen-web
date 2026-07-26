import React from "react";

/** Switch — track fills violet when on, cloud when off; white thumb (maps to BaseSwitch). */
export function Switch({ value = false, onChange, label, disabled = false, style, ...rest }) {
  const track = {
    width: 52, height: 32, flexShrink: 0, borderRadius: "var(--radius-pill)", padding: 3, boxSizing: "border-box",
    background: value ? "var(--color-primary)" : "var(--color-surface-variant)", cursor: disabled ? "not-allowed" : "pointer",
    display: "flex", alignItems: "center", transition: "background var(--dur-fast) var(--ease-standard)", border: "none",
  };
  const thumb = {
    width: 26, height: 26, borderRadius: "var(--radius-pill)", background: "var(--white)",
    boxShadow: "0 2px 6px rgba(0,0,0,.2)", transform: value ? "translateX(20px)" : "translateX(0)",
    transition: "transform var(--dur-fast) var(--ease-standard)",
  };
  const control = (
    <button type="button" role="switch" aria-checked={value} disabled={disabled} onClick={() => onChange && onChange(!value)} style={{ ...track, opacity: disabled ? 0.5 : 1 }} {...rest}>
      <span style={thumb} />
    </button>
  );
  if (!label) return control;
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 16, justifyContent: "space-between", ...style }}>
      <span className="kz-body-lg" style={{ color: "var(--color-on-surface)" }}>{label}</span>
      {control}
    </label>
  );
}
