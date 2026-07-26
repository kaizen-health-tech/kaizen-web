import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Alert — native-style centered confirm with 1–2 stacked buttons (maps to the Alert family). */
export function Alert({ open = true, title, message, icon, confirmLabel = "OK", cancelLabel, onConfirm, onCancel, destructive = false, style, ...rest }) {
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, background: "var(--backdrop)", display: "grid", placeItems: "center", padding: 24, zIndex: 1000 }} onClick={onCancel}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: "min(320px,100%)", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", padding: 24, textAlign: "center", boxShadow: "var(--shadow-lg)", ...style }} {...rest}>
        {icon && <div style={{ width: 52, height: 52, margin: "0 auto 14px", borderRadius: "var(--radius-lg)", background: destructive ? "var(--red-100)" : "var(--light-lilac)", display: "grid", placeItems: "center" }}><Icon name={icon} size={26} color={destructive ? "var(--error)" : "var(--color-primary)"} /></div>}
        {title && <div className="kz-title-lg" style={{ color: "var(--color-text)" }}>{title}</div>}
        {message && <div className="kz-body-md" style={{ color: "var(--color-text-body)", marginTop: 6 }}>{message}</div>}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 20 }}>
          <button type="button" onClick={onConfirm} className="kz-label-lg" style={{ height: 48, borderRadius: "var(--radius-lg)", border: "none", cursor: "pointer", background: destructive ? "var(--error)" : "var(--color-primary)", color: destructive ? "var(--white)" : "var(--color-on-primary)" }}>{confirmLabel}</button>
          {cancelLabel && <button type="button" onClick={onCancel} className="kz-label-lg" style={{ height: 48, borderRadius: "var(--radius-lg)", border: "none", cursor: "pointer", background: "transparent", color: "var(--color-text-muted)" }}>{cancelLabel}</button>}
        </div>
      </div>
    </div>
  );
}
