import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * ChatBubble — a message in the Kai conversation (maps to the bubble family).
 * role "user" = violet fill, right-aligned; role "assistant" = soft surface with a Kai avatar.
 */
export function ChatBubble({ role = "assistant", children, style, ...rest }) {
  const isUser = role === "user";
  const bubble = {
    maxWidth: "78%", padding: "12px 16px", fontSize: 16, lineHeight: 1.45,
    borderRadius: 20,
    ...(isUser
      ? { background: "var(--color-primary)", color: "var(--color-on-primary)", borderBottomRightRadius: 6 }
      : { background: "var(--color-surface-variant)", color: "var(--color-on-surface)", borderBottomLeftRadius: 6 }),
  };
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 8, justifyContent: isUser ? "flex-end" : "flex-start", ...style }} {...rest}>
      {!isUser && (
        <span style={{ width: 32, height: 32, flexShrink: 0, borderRadius: "var(--radius-pill)", background: "var(--light-lilac)", display: "grid", placeItems: "center" }}>
          <Icon name="Kai" size={20} color="var(--color-primary)" />
        </span>
      )}
      <div style={bubble}>{children}</div>
    </div>
  );
}
