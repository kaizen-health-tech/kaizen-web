import React from "react";

/** Spinner — indeterminate circular loader in brand violet. */
export function Spinner({ size = 28, color = "var(--color-primary)", thickness = 3, style, ...rest }) {
  return (
    <span style={{ display: "inline-block", width: size, height: size, ...style }} {...rest}>
      <span style={{ display: "block", width: "100%", height: "100%", borderRadius: "50%",
        border: `${thickness}px solid color-mix(in srgb, ${color} 22%, transparent)`, borderTopColor: color,
        animation: "kz-spin .8s linear infinite" }} />
      <style>{"@keyframes kz-spin{to{transform:rotate(360deg)}}"}</style>
    </span>
  );
}
