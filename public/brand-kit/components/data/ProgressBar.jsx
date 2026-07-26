import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * ProgressBar — 8px track, 50px radius (maps to BaseProgressBar).
 * mode "generic" = teal fill · "brand" = violet · "ai" = pink fill in a gradient frame.
 */
export function ProgressBar({ value = 0, mode = "generic", style, ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  const fill = mode === "brand" ? "var(--color-primary)" : mode === "ai" ? "#E876F9" : "#1FA5A3";
  const bar = (
    <div style={{ height: 8, borderRadius: 50, background: mode === "ai" ? "var(--color-surface-light)" : "var(--color-surface-variant)", overflow: "hidden", width: "100%" }}>
      <div style={{ height: "100%", width: pct + "%", borderRadius: 50, background: fill, transition: "width var(--dur-med) var(--ease-standard)" }} />
    </div>
  );
  if (mode !== "ai") return <div style={{ width: "100%", ...style }} {...rest}>{bar}</div>;
  return (
    <div style={{ padding: 2, borderRadius: "var(--radius-lg)", background: "linear-gradient(90deg,var(--violet),#E876F9)", ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 14px", borderRadius: 14, background: "var(--color-surface-light)" }}>
        <Icon name="AiSparkleRounded" size={20} color="var(--violet)" />
        <div style={{ flex: 1 }}>{bar}</div>
      </div>
    </div>
  );
}
