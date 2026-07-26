import React from "react";

/**
 * Card — the standard content surface (maps to BaseBox / BaseSection).
 * White surface, 1px cloud hairline, soft plum-tinted shadow, 20px radius.
 */
export function Card({ padding = 20, radius = 20, elevated = true, children, style, ...rest }) {
  return (
    <div style={{
      background: "var(--color-surface)", border: "1px solid var(--color-border)",
      borderRadius: radius, padding, boxShadow: elevated ? "var(--shadow-soft)" : "none",
      ...style,
    }} {...rest}>
      {children}
    </div>
  );
}
