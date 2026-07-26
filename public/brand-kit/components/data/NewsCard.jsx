import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * NewsCard — health article card (maps to NewsArticleCard / NewsCard).
 * 22px radius, a gradient cover, source row, title/deck, and read-more + save/share actions.
 */
export function NewsCard({ source = "Health News", date, title, deck, image, cover, saved = false, onSave, onShare, onOpen, style, ...rest }) {
  const grad = cover || "linear-gradient(135deg,var(--violet),var(--light-plum) 55%,var(--dark-plum))";
  const mono = (source[0] || "H").toUpperCase();
  return (
    <div style={{ padding: 12, border: "1px solid var(--color-outline-subtle)", borderRadius: 22, background: "var(--color-surface)", boxShadow: "var(--shadow-soft)", ...style }} {...rest}>
      <div style={{ height: 160, borderRadius: 14, background: grad, position: "relative", overflow: "hidden", display: "grid", placeItems: "center" }}>
        {image ? <img src={image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          : <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,.16)", border: "1px solid rgba(255,255,255,.3)", display: "grid", placeItems: "center", color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 18 }}>{mono}</div>}
      </div>
      <div style={{ padding: "16px 8px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{ width: 20, height: 20, borderRadius: 10, background: "var(--light-lilac)", display: "grid", placeItems: "center", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 10, color: "var(--light-plum)" }}>{mono}</span>
          <span className="kz-label-md" style={{ color: "var(--color-text-muted)" }}>{source}</span>
          {date && <><span style={{ width: 3, height: 3, borderRadius: 2, background: "var(--color-outline)" }} /><span className="kz-body-sm" style={{ color: "var(--color-on-surface-disabled)" }}>{date}</span></>}
        </div>
        <div className="kz-title-md" style={{ color: "var(--color-on-surface)", letterSpacing: "-.18px" }}>{title}</div>
        {deck && <div className="kz-body-sm" style={{ color: "var(--color-text-muted)", marginTop: 8 }}>{deck}</div>}
        <div style={{ height: 1, background: "var(--color-outline-subtle)", margin: "12px 0" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button type="button" onClick={onOpen} className="kz-label-md" style={{ display: "inline-flex", alignItems: "center", gap: 7, border: "none", background: "none", color: "var(--color-primary)", cursor: "pointer" }}>
            Read more <Icon name="Open" size={16} color="var(--color-primary)" />
          </button>
          <div style={{ display: "flex", gap: 6 }}>
            <button type="button" onClick={onShare} style={{ width: 34, height: 34, borderRadius: 17, border: "none", background: "var(--color-surface-variant)", display: "grid", placeItems: "center", cursor: "pointer" }}><Icon name="ShareBox" size={17} color="var(--color-text-muted)" /></button>
            <button type="button" onClick={onSave} style={{ width: 34, height: 34, borderRadius: 17, border: "none", background: "var(--color-surface-variant)", display: "grid", placeItems: "center", cursor: "pointer" }}><Icon name="Bookmark" size={17} color={saved ? "var(--color-primary)" : "var(--color-text-muted)"} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
