import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * ListItem — a row with a leading icon tile, title/subtitle, and trailing content
 * (maps to list/HealthRecord + listItem/Small). Use inside a Card or list.
 */
export function ListItem({ icon, iconTone, title, subtitle, trailing, onClick, style, ...rest }) {
  const tile = iconTone || { bg: "var(--light-lilac)", fg: "var(--color-primary)" };
  const Tag = onClick ? "button" : "div";
  return (
    <Tag onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "12px 4px",
      border: "none", background: "transparent", textAlign: "left", cursor: onClick ? "pointer" : "default", ...style }} {...rest}>
      {icon && (
        <span style={{ width: 44, height: 44, flexShrink: 0, borderRadius: "var(--radius-md)", background: tile.bg,
          display: "grid", placeItems: "center" }}>
          <Icon name={icon} size={22} color={tile.fg} />
        </span>
      )}
      <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 2 }}>
        <span className="kz-title-sm" style={{ color: "var(--color-on-surface)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>
        {subtitle && <span className="kz-body-sm" style={{ color: "var(--color-text-muted)" }}>{subtitle}</span>}
      </span>
      {trailing != null ? trailing : onClick ? <Icon name="ChevronRight" size={20} color="var(--color-outline)" /> : null}
    </Tag>
  );
}
