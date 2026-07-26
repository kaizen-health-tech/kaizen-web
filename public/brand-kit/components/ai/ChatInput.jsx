import React, { useState } from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * ChatInput — the Kai compose bar (maps to ChatInput). Attachment + text field + send;
 * send turns violet once there's text.
 */
export function ChatInput({ value, placeholder = "Ask Kai…", onChange, onSend, onAttach, style, ...rest }) {
  const [internal, setInternal] = useState(value ?? "");
  const v = value ?? internal;
  const set = (t) => { setInternal(t); onChange && onChange(t); };
  const send = () => { if ((v || "").trim()) { onSend && onSend(v); setInternal(""); } };
  const has = (v || "").trim().length > 0;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", ...style }} {...rest}>
      <button type="button" onClick={onAttach} style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", border: "none", background: "transparent", display: "grid", placeItems: "center", cursor: "pointer" }}>
        <Icon name="AiAttachment" size={22} color="var(--color-text-muted)" />
      </button>
      <input value={v} placeholder={placeholder} onChange={(e) => set(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()}
        style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "var(--color-surface-input)", borderRadius: "var(--radius-pill)", padding: "11px 16px", font: "inherit", fontSize: 15, color: "var(--color-on-surface)" }} />
      <button type="button" onClick={send} style={{ width: 42, height: 42, flexShrink: 0, borderRadius: "var(--radius-pill)", border: "none", cursor: "pointer", display: "grid", placeItems: "center", background: has ? "var(--color-primary)" : "var(--color-surface-variant)" }}>
        <Icon name="Publish" size={20} color={has ? "var(--color-on-primary)" : "var(--color-text-muted)"} />
      </button>
    </div>
  );
}
