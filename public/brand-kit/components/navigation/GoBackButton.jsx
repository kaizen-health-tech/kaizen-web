import React from "react";
import { Icon } from "../core/Icon.jsx";

/** GoBackButton — circular back control used on media/detail screens (maps to goBackButton). */
export function GoBackButton({ onClick, variant = "surface", style, ...rest }) {
  const bg = variant === "glass" ? "rgba(23,22,29,.38)" : "var(--color-surface)";
  const fg = variant === "glass" ? "var(--white)" : "var(--color-on-surface)";
  return (
    <button type="button" onClick={onClick} aria-label="Go back"
      style={{ width: 40, height: 40, borderRadius: "var(--radius-pill)", border: variant === "glass" ? "none" : "1px solid var(--color-border)",
        background: bg, color: fg, display: "grid", placeItems: "center", cursor: "pointer",
        backdropFilter: variant === "glass" ? "blur(10px)" : undefined, boxShadow: variant === "surface" ? "var(--shadow-soft)" : "none", ...style }} {...rest}>
      <Icon name="ArrowNarrowLeft" size={22} color="currentColor" />
    </button>
  );
}
