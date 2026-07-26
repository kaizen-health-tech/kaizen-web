import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Dialog — centered modal card with title, body, and stacked/So actions (maps to BaseDialog / Alert). */
export function Dialog({ open = true, title, children, actions, onClose, icon, style, ...rest }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, background: "var(--backdrop)", display: "grid", placeItems: "center", padding: 24, zIndex: 1000 }} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: "min(420px,100%)", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", padding: 28, boxShadow: "var(--shadow-lg)", ...style }} {...rest}>
        {icon && (
          <div style={{ width: 52, height: 52, borderRadius: "var(--radius-lg)", background: "var(--light-lilac)", display: "grid", placeItems: "center", marginBottom: 16 }}>
            <Icon name={icon} size={26} color="var(--color-primary)" />
          </div>
        )}
        {title && <h3 className="kz-headline-md" style={{ margin: 0, color: "var(--color-text)" }}>{title}</h3>}
        {children && <div className="kz-body-lg" style={{ color: "var(--color-text-body)", marginTop: 8 }}>{children}</div>}
        {actions && <div style={{ display: "flex", gap: 10, marginTop: 24, flexWrap: "wrap" }}>{actions}</div>}
      </div>
    </div>
  );
}
