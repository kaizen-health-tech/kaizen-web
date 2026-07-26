import React from "react";
import { Icon } from "../core/Icon.jsx";

/** FavoriteButton — heart toggle (maps to favoriteButton). Filled violet-pink when active. */
export function FavoriteButton({ active = false, onToggle, size = 40, style, ...rest }) {
  return (
    <button type="button" onClick={onToggle} aria-pressed={active}
      style={{ width: size, height: size, borderRadius: "var(--radius-pill)", border: "none", cursor: "pointer",
        background: active ? "var(--candy-pink-100)" : "var(--color-surface-variant)", display: "grid", placeItems: "center",
        transition: "background var(--dur-fast) var(--ease-standard)", ...style }} {...rest}>
      <Icon name="Heart" size={size * 0.5} color={active ? "var(--candy-pink-300)" : "var(--color-text-muted)"} />
    </button>
  );
}
