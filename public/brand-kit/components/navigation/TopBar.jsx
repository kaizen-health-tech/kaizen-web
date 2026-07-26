import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * TopBar — screen header (maps to Navbar / Header). Optional back button, centered
 * or leading title, and trailing action icons.
 */
export function TopBar({ title, onBack, actions, align = "left", style, ...rest }) {
  return (
    <header style={{ display: "flex", alignItems: "center", gap: 8, height: 60, padding: "0 12px", background: "var(--color-background)", ...style }} {...rest}>
      {onBack && (
        <button type="button" onClick={onBack} style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", border: "none", background: "transparent", display: "grid", placeItems: "center", cursor: "pointer" }}>
          <Icon name="ArrowNarrowLeft" size={24} color="var(--color-on-background)" />
        </button>
      )}
      <span className="kz-title-lg" style={{ flex: 1, color: "var(--color-on-background)", textAlign: align === "center" ? "center" : "left", paddingLeft: align === "left" && !onBack ? 4 : 0 }}>{title}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>{actions}</div>
    </header>
  );
}
