import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * MemoryChip — a fact Kai remembers about a family member (maps to MemoryChip).
 * Lilac pill with a brain glyph; `state="added"` fills violet to confirm.
 */
export function MemoryChip({ label, state = "default", onToggle, style, ...rest }) {
  const added = state === "added";
  return (
    <button type="button" onClick={onToggle} className="kz-label-md"
      style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 32, padding: "0 12px",
        borderRadius: "var(--radius-pill)", cursor: onToggle ? "pointer" : "default",
        background: added ? "var(--color-primary)" : "var(--light-lilac)",
        color: added ? "var(--color-on-primary)" : "var(--light-plum)",
        border: "none", ...style }} {...rest}>
      <Icon name={added ? "Check" : "Brain"} size={16} color="currentColor" strokeWidth={added ? 3 : undefined} />
      {label}
    </button>
  );
}
