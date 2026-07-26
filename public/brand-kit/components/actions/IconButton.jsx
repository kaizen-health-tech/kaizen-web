import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * IconButton — a tappable icon with a comfortable hit area (maps to baseIconButton).
 */
export function IconButton({ name, size = 24, color = "var(--color-on-surface)", variant = "plain", disabled = false, style, ...rest }) {
  const wrap = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: 40, height: 40, borderRadius: "var(--radius-md)", border: "none",
    background: variant === "tonal" ? "var(--color-surface-variant)" : "transparent",
    color, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1,
    transition: "background var(--dur-fast) var(--ease-standard)", WebkitTapHighlightColor: "transparent",
  };
  return (
    <button
      type="button" disabled={disabled} style={{ ...wrap, ...style }}
      onMouseEnter={(e) => { if (!disabled && variant === "plain") e.currentTarget.style.background = "var(--color-surface-variant)"; }}
      onMouseLeave={(e) => { if (!disabled && variant === "plain") e.currentTarget.style.background = "transparent"; }}
      {...rest}
    >
      <Icon name={name} size={size} color="currentColor" />
    </button>
  );
}
