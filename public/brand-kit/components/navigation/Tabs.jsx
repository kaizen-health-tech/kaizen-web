import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Tabs — scrollable pill tabs (maps to BaseTabs). Selected = tinted violet fill,
 * unselected = white with a hairline. Optional leading icon per tab.
 */
export function Tabs({ items = [], value, onChange, style, ...rest }) {
  const [internal, setInternal] = useState(value ?? (items[0] && (items[0].value ?? items[0])));
  const active = value ?? internal;
  const pick = (v) => { setInternal(v); onChange && onChange(v); };
  return (
    <div style={{ display: "flex", gap: 8, overflowX: "auto", ...style }} {...rest}>
      {items.map((it) => {
        const v = it.value ?? it, label = it.label ?? it, sel = v === active;
        return (
          <button key={v} type="button" onClick={() => pick(v)}
            style={{ display: "inline-flex", alignItems: "center", gap: 4, height: 38, padding: "0 14px", flexShrink: 0,
              borderRadius: "var(--radius-sm)", cursor: "pointer",
              background: sel ? "color-mix(in srgb, var(--violet) 10%, transparent)" : "var(--color-surface)",
              border: sel ? "none" : "1px solid var(--color-smoke)",
              color: sel ? "var(--color-on-background)" : "var(--color-text-muted)",
              fontFamily: "var(--font-sans)", fontWeight: sel ? 700 : 500, fontSize: 15 }}>
            {it.icon && <Icon name={it.icon} size={18} color="currentColor" />}
            {label}
          </button>
        );
      })}
    </div>
  );
}
