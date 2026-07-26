import React from "react";

/** Pagination — carousel position dots (maps to BasePagination). The active dot expands into a violet pill. */
export function Pagination({ count = 3, index = 0, color = "var(--color-primary)", style, ...rest }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", justifyContent: "center", height: 20, ...style }} {...rest}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ height: 8, width: i === index ? 24 : 8, borderRadius: 5,
          background: color, opacity: i === index ? 1 : 0.3, transition: "all var(--dur-med) var(--ease-standard)" }} />
      ))}
    </div>
  );
}
