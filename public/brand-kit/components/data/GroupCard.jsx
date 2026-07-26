import React from "react";
import { Avatar } from "./Avatar.jsx";
import { Icon } from "../core/Icon.jsx";

/** GroupCard — a family/care group summary (maps to Group card). Stacked avatars, name, meta. */
export function GroupCard({ name, members = [], meta, onClick, style, ...rest }) {
  return (
    <button type="button" onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left",
      padding: 16, borderRadius: "var(--radius-lg)", background: "var(--color-surface)", border: "1px solid var(--color-border)",
      boxShadow: "var(--shadow-soft)", cursor: "pointer", ...style }} {...rest}>
      <span style={{ display: "flex" }}>
        {members.slice(0, 4).map((m, i) => <span key={i} style={{ marginLeft: i ? -12 : 0, borderRadius: "var(--radius-pill)", boxShadow: "0 0 0 2px var(--color-surface)" }}><Avatar name={m} size={40} /></span>)}
      </span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span className="kz-title-sm" style={{ color: "var(--color-on-surface)", display: "block" }}>{name}</span>
        {meta && <span className="kz-body-sm" style={{ color: "var(--color-text-muted)" }}>{meta}</span>}
      </span>
      <Icon name="ChevronRight" size={20} color="var(--color-outline)" />
    </button>
  );
}
