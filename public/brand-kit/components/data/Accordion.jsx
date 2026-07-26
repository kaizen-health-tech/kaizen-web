import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Accordion — expandable section with a title row and chevron (maps to BaseAccordion).
 * Bottom hairline; chevron flips up/down.
 */
export function Accordion({ title, defaultOpen = true, children, style, ...rest }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid var(--color-outline-subtle)", ...style }} {...rest}>
      <button type="button" onClick={() => setOpen(!open)}
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "12px 0",
          border: "none", background: "transparent", cursor: "pointer" }}>
        <span className="kz-title-lg" style={{ color: "var(--color-on-surface)" }}>{title}</span>
        <Icon name={open ? "ChevronUp" : "ChevronDown"} size={24} color="var(--color-text-muted)" />
      </button>
      {open && <div style={{ paddingBottom: 12 }}>{children}</div>}
    </div>
  );
}
