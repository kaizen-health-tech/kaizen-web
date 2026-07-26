import React from "react";
import { Icon } from "../core/Icon.jsx";

/** DocumentCard — a saved document tile (maps to Document card). Type icon, title, meta, category tag. */
const DTONE = {
  file: { bg: "var(--cyan-100)", fg: "var(--cyan-400)", icon: "FileText" },
  medication: { bg: "var(--candy-pink-100)", fg: "var(--candy-pink-400)", icon: "Pill" },
  note: { bg: "var(--yellow-100)", fg: "var(--yellow-400)", icon: "Bill" },
  event: { bg: "var(--light-lilac)", fg: "var(--violet)", icon: "Calendar" },
};
export function DocumentCard({ type = "file", title, meta, tag, onClick, style, ...rest }) {
  const t = DTONE[type] || DTONE.file;
  return (
    <button type="button" onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 14, width: "100%", textAlign: "left",
      padding: 14, borderRadius: "var(--radius-lg)", background: "var(--color-surface)", border: "1px solid var(--color-border)",
      boxShadow: "var(--shadow-soft)", cursor: "pointer", ...style }} {...rest}>
      <span style={{ width: 48, height: 48, flexShrink: 0, borderRadius: "var(--radius-md)", background: t.bg, display: "grid", placeItems: "center" }}>
        <Icon name={t.icon} size={24} color={t.fg} />
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span className="kz-title-sm" style={{ color: "var(--color-on-surface)", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>
        {meta && <span className="kz-body-sm" style={{ color: "var(--color-text-muted)" }}>{meta}</span>}
      </span>
      {tag && <span className="kz-label-xxs" style={{ padding: "3px 9px", borderRadius: "var(--radius-pill)", background: t.bg, color: t.fg, textTransform: "uppercase", letterSpacing: ".5px" }}>{tag}</span>}
    </button>
  );
}
