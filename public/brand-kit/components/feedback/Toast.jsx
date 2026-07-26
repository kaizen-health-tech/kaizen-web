import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Toast — transient status message (maps to BaseToast). 70px min height, 16px radius. */
const TOAST = {
  success: { bg: "var(--light-sea-green)", fg: "var(--sea-green)", icon: "CircleCheck" },
  warning: { bg: "var(--orange-100)", fg: "var(--orange-300)", icon: "AlertCircle" },
  danger: { bg: "var(--red-100)", fg: "var(--error)", icon: "DangerTriangle" },
  info: { bg: "var(--light-lilac)", fg: "var(--light-plum)", icon: "Kai" },
};
export function Toast({ message, type = "success", style, ...rest }) {
  const t = TOAST[type] || TOAST.info;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, minHeight: 70, padding: "5px 22px",
      borderRadius: "var(--radius-lg)", background: t.bg, color: t.fg, boxShadow: "var(--shadow-soft)", ...style }} {...rest}>
      <Icon name={t.icon} size={24} color={t.fg} />
      <span className="kz-body-lg" style={{ color: t.fg, marginRight: 22 }}>{message}</span>
    </div>
  );
}
