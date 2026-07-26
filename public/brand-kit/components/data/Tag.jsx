import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Tag — relationship / status label (maps to BaseTag). Contained fills with the
 * heather relationship color; outlined draws a 2px ring.
 */
export function Tag({ label, mode = "contained", leftIcon, rightIcon, color, style, ...rest }) {
  const accent = color || "var(--heather-300)";
  const filled = mode === "contained";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 5,
      borderRadius: "var(--radius-sm)", padding: "5px 12px",
      background: filled ? accent : "transparent",
      border: filled ? "none" : `2px solid ${accent}`,
      color: filled ? "var(--white)" : accent, ...style }} {...rest}>
      {leftIcon && <Icon name={leftIcon} size={18} color="currentColor" />}
      <span className="kz-label-lg">{label}</span>
      {rightIcon && <Icon name={rightIcon} size={18} color="currentColor" />}
    </span>
  );
}
