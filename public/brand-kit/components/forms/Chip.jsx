import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Chip — compact filled token (maps to BaseChip). shape round (25px) or rec (5px);
 * sizes sm/md. Optional leading icon and a close affordance.
 */
export function Chip({ label, shape = "round", size = "md", leftIcon, tone, onClose, onClick, style, ...rest }) {
  const height = size === "sm" ? 24 : 30;
  const bg = tone ? tone.bg : "var(--color-surface-strong)";
  const fg = tone ? tone.fg : "var(--color-on-background)";
  const Tag = onClick ? "button" : "span";
  return (
    <Tag onClick={onClick} className={size === "sm" ? "kz-label-sm" : "kz-label-lg"}
      style={{ display: "inline-flex", alignItems: "center", gap: 4, height, padding: shape === "round" ? "0 12px" : "0 8px",
        borderRadius: shape === "round" ? "var(--radius-chip)" : "5px", background: bg, color: fg, border: "none",
        cursor: onClick ? "pointer" : "default", whiteSpace: "nowrap", ...style }} {...rest}>
      {leftIcon && <Icon name={leftIcon} size={size === "sm" ? 14 : 16} color="currentColor" />}
      {label}
      {onClose && (
        <span onClick={(e) => { e.stopPropagation(); onClose(); }} style={{ display: "inline-flex", marginLeft: 2, cursor: "pointer", opacity: 0.7 }}>
          <Icon name="Close" size={size === "sm" ? 14 : 16} color="currentColor" />
        </span>
      )}
    </Tag>
  );
}
