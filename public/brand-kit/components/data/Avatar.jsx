import React from "react";

/**
 * Avatar — circular person/entity image or initials (maps to the Avatar family).
 * Optional violet→aquamarine story ring.
 */
export function Avatar({ src, name = "", size = 44, ring = false, style, ...rest }) {
  const initials = name.split(" ").map((w) => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const inner = size - (ring ? 6 : 0);
  const img = (
    <span style={{ width: inner, height: inner, borderRadius: "var(--radius-pill)", overflow: "hidden",
      display: "grid", placeItems: "center", background: "var(--color-surface-strong)", color: "var(--color-primary)",
      fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: inner * 0.4, flexShrink: 0 }}>
      {src ? <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : initials}
    </span>
  );
  if (!ring) return <span style={{ display: "inline-flex", ...style }} {...rest}>{img}</span>;
  return (
    <span style={{ display: "inline-grid", placeItems: "center", width: size, height: size, borderRadius: "var(--radius-pill)",
      background: "linear-gradient(135deg,var(--violet),var(--aquamarine))", padding: 3, ...style }} {...rest}>
      {img}
    </span>
  );
}
