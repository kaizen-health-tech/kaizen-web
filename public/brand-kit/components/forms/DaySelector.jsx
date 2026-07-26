import React from "react";

const DOW = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
/** DaySelector — horizontal day chips for schedules (maps to Day / Day Selector). */
export function DaySelector({ days = DOW, selected = [], onToggle, style, ...rest }) {
  return (
    <div style={{ display: "flex", gap: 8, ...style }} {...rest}>
      {days.map((d, i) => {
        const on = selected.includes(i) || selected.includes(d);
        return (
          <button key={i} type="button" onClick={() => onToggle && onToggle(i)} className="kz-label-md"
            style={{ width: 42, height: 42, flexShrink: 0, borderRadius: "var(--radius-pill)", cursor: "pointer",
              border: on ? "none" : "1px solid var(--color-outline-variant)",
              background: on ? "var(--color-primary)" : "transparent",
              color: on ? "var(--color-on-primary)" : "var(--color-text-muted)" }}>
            {d.slice(0, 1)}
          </button>
        );
      })}
    </div>
  );
}
