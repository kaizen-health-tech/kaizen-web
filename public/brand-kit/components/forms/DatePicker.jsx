import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";

const DOW = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

/**
 * DatePicker — month calendar grid (maps to baseDatePicker / baseDateCalendar).
 * Selected day is a violet disc; today is ringed.
 */
export function DatePicker({ value, onChange, month, style, ...rest }) {
  const today = new Date();
  const [view, setView] = useState(() => { const d = value ? new Date(value) : (month ? new Date(month) : today); return new Date(d.getFullYear(), d.getMonth(), 1); });
  const sel = value ? new Date(value) : null;
  const first = new Date(view.getFullYear(), view.getMonth(), 1).getDay();
  const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
  const same = (d, o) => o && d === o.getDate() && view.getMonth() === o.getMonth() && view.getFullYear() === o.getFullYear();
  const shift = (n) => setView(new Date(view.getFullYear(), view.getMonth() + n, 1));
  return (
    <div style={{ width: 300, background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: 16, ...style }} {...rest}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <span className="kz-title-sm" style={{ color: "var(--color-text)" }}>{MONTHS[view.getMonth()]} {view.getFullYear()}</span>
        <div style={{ display: "flex", gap: 4 }}>
          <button type="button" onClick={() => shift(-1)} style={{ border: "none", background: "none", cursor: "pointer", display: "grid" }}><Icon name="ChevronLeft" size={20} color="var(--color-text-muted)" /></button>
          <button type="button" onClick={() => shift(1)} style={{ border: "none", background: "none", cursor: "pointer", display: "grid" }}><Icon name="ChevronRight" size={20} color="var(--color-text-muted)" /></button>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 2 }}>
        {DOW.map((d, i) => <div key={i} className="kz-label-xxs" style={{ textAlign: "center", color: "var(--color-text-muted)", padding: "4px 0" }}>{d}</div>)}
        {cells.map((d, i) => {
          if (!d) return <div key={i} />;
          const isSel = same(d, sel), isToday = same(d, today);
          return (
            <button key={i} type="button" onClick={() => onChange && onChange(new Date(view.getFullYear(), view.getMonth(), d))}
              className="kz-body-md"
              style={{ height: 34, borderRadius: "var(--radius-pill)", cursor: "pointer",
                border: isToday && !isSel ? "1.5px solid var(--color-primary)" : "none",
                background: isSel ? "var(--color-primary)" : "transparent",
                color: isSel ? "var(--color-on-primary)" : "var(--color-on-surface)" }}>{d}</button>
          );
        })}
      </div>
    </div>
  );
}
