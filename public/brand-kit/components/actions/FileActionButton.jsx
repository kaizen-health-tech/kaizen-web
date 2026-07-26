import React from "react";
import { Icon } from "../core/Icon.jsx";

/** FileActionButton — square icon action tile for file rows (maps to fileActionButton). */
const PURPOSE = {
  download: { icon: "FileDownload", tone: "var(--sea-green)", bg: "var(--light-sea-green)" },
  share: { icon: "ShareBox", tone: "var(--color-primary)", bg: "var(--light-lilac)" },
  delete: { icon: "Trash", tone: "var(--error)", bg: "var(--red-100)" },
  ai: { icon: "AiSparkleRounded", tone: "var(--violet)", bg: "var(--light-lilac)" },
  edit: { icon: "Edit", tone: "var(--color-on-surface)", bg: "var(--color-surface-variant)" },
  tag: { icon: "Bookmark", tone: "var(--yellow-400)", bg: "var(--yellow-100)" },
};
export function FileActionButton({ purpose = "share", label, onClick, style, ...rest }) {
  const p = PURPOSE[purpose] || PURPOSE.share;
  return (
    <button type="button" onClick={onClick} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, border: "none", background: "transparent", cursor: "pointer", ...style }} {...rest}>
      <span style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: p.bg, display: "grid", placeItems: "center" }}>
        <Icon name={p.icon} size={22} color={p.tone} />
      </span>
      {label && <span className="kz-label-sm" style={{ color: "var(--color-text-muted)", letterSpacing: 0 }}>{label}</span>}
    </button>
  );
}
