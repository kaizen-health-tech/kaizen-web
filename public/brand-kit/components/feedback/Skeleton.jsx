import React from "react";

/** Skeleton — shimmering placeholder (maps to BaseSkeleton). */
export function Skeleton({ width = "100%", height = 16, radius = 8, style, ...rest }) {
  return (
    <span style={{ display: "block", width, height, borderRadius: radius,
      background: "linear-gradient(90deg,var(--color-surface-variant) 25%,color-mix(in srgb,var(--color-surface-variant) 55%,var(--white)) 37%,var(--color-surface-variant) 63%)",
      backgroundSize: "400% 100%", animation: "kz-shimmer 1.4s ease infinite", ...style }} {...rest}>
      <style>{"@keyframes kz-shimmer{0%{background-position:100% 0}100%{background-position:0 0}}"}</style>
    </span>
  );
}
