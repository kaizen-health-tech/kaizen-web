import React from "react";

/**
 * BottomSheet — modal sheet anchored to the bottom (maps to BaseBottomSheet).
 * Grab handle, optional title, rounded top corners. Set `inline` to render in flow (for previews).
 */
export function BottomSheet({ open = true, title, onClose, children, inline = false, style, ...rest }) {
  if (!open) return null;
  const sheet = (
    <div style={{ background: "var(--color-surface)", borderTopLeftRadius: "var(--radius-2xl)", borderTopRightRadius: "var(--radius-2xl)",
      padding: "12px 20px 24px", boxShadow: "0 -12px 40px rgba(40,27,85,.16)", ...(inline ? { borderRadius: "var(--radius-2xl)" } : null), ...style }} {...rest}>
      <div style={{ width: 40, height: 4, borderRadius: 2, background: "var(--color-outline-variant)", margin: "0 auto 16px" }} />
      {title && <div className="kz-title-lg" style={{ color: "var(--color-on-surface)", marginBottom: 12 }}>{title}</div>}
      {children}
    </div>
  );
  if (inline) return sheet;
  return (
    <div style={{ position: "fixed", inset: 0, background: "var(--backdrop)", display: "flex", alignItems: "flex-end", zIndex: 1000 }} onClick={onClose}>
      <div style={{ width: "100%" }} onClick={(e) => e.stopPropagation()}>{sheet}</div>
    </div>
  );
}
