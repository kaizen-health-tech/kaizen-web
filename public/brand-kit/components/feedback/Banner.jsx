import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Banner — inline informational strip with an icon, message, and optional action (maps to Banner). */
const BANNER = {
  info: { bg: "var(--light-lilac)", fg: "var(--light-plum)", icon: "AlertCircle" },
  success: { bg: "var(--grass-100)", fg: "var(--grass-300)", icon: "CircleCheck" },
  notice: { bg: "var(--orange-100)", fg: "var(--orange-300)", icon: "AlertCircle" },
  ai: { bg: "var(--light-lilac)", fg: "var(--violet)", icon: "AiSparkleRounded" },
};
export function Banner({ title, message, tone = "info", action, onAction, style, ...rest }) {
  const t = BANNER[tone] || BANNER.info;
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 16, borderRadius: "var(--radius-lg)", background: t.bg, ...style }} {...rest}>
      <Icon name={t.icon} size={22} color={t.fg} style={{ marginTop: 1 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div className="kz-title-sm" style={{ color: "var(--color-text)" }}>{title}</div>}
        {message && <div className="kz-body-md" style={{ color: "var(--color-text-body)", marginTop: title ? 2 : 0 }}>{message}</div>}
      </div>
      {action && (
        <button type="button" onClick={onAction} className="kz-label-md" style={{ border: "none", background: "transparent", color: t.fg, cursor: "pointer", whiteSpace: "nowrap", padding: "2px 4px" }}>{action}</button>
      )}
    </div>
  );
}
