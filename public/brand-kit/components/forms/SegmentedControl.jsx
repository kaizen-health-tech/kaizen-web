import React from "react";

/**
 * SegmentedControl — pill container with a sliding violet indicator (maps to BaseSegmentedButtons).
 * Active label uses aquamarine (tertiary); inactive is muted.
 */
export function SegmentedControl({ options = [], value, onChange, style, ...rest }) {
  const idx = Math.max(0, options.findIndex((o) => (o.value ?? o) === value));
  const n = options.length || 1;
  return (
    <div style={{ position: "relative", display: "flex", width: "100%", height: 50, border: "1px solid var(--color-outline)", borderRadius: "var(--radius-chip)", overflow: "hidden", ...style }} {...rest}>
      <span style={{ position: "absolute", top: "10%", height: "80%", width: `calc(${100 / n}% - 10px)`, left: 5,
        transform: `translateX(calc(${idx} * (100% + 10px)))`, background: "var(--color-primary)", borderRadius: "var(--radius-chip)",
        transition: "transform var(--dur-med) var(--ease-standard)" }} />
      {options.map((o) => {
        const val = o.value ?? o, label = o.label ?? o, active = val === value;
        return (
          <button key={val} type="button" onClick={() => onChange && onChange(val)}
            className="kz-label-lg"
            style={{ position: "relative", flex: 1, border: "none", background: "transparent", cursor: "pointer",
              color: active ? "var(--color-tertiary)" : "var(--color-on-surface-disabled)", transition: "color var(--dur-med) var(--ease-standard)" }}>
            {label}
          </button>
        );
      })}
    </div>
  );
}
