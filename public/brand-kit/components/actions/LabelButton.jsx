import React from "react";

/**
 * LabelButton — a step/segment label chip used in multi-step flows (maps to LabelButton).
 * Steps: active (violet), done (aquamarine tick tone), or idle (muted).
 */
export function LabelButton({ label, step, state = "idle", onClick, style, ...rest }) {
  const styles = {
    active: { background: "var(--color-primary)", color: "var(--color-on-primary)" },
    done: { background: "var(--light-lilac)", color: "var(--light-plum)" },
    idle: { background: "var(--color-surface-variant)", color: "var(--color-text-muted)" },
  }[state];
  return (
    <button type="button" onClick={onClick} className="kz-label-md"
      style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 34, padding: "0 14px", borderRadius: "var(--radius-pill)",
        border: "none", cursor: onClick ? "pointer" : "default", ...styles, ...style }} {...rest}>
      {step != null && <span style={{ width: 20, height: 20, borderRadius: "var(--radius-pill)", display: "grid", placeItems: "center",
        background: "rgba(255,255,255,.25)", fontSize: 11, fontWeight: 700 }}>{step}</span>}
      {label}
    </button>
  );
}
