import React from "react";
export interface ChatBubbleProps {
  /** user = violet outgoing · assistant = Kai reply with avatar (default). */
  role?: "user" | "assistant";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function ChatBubble(props: ChatBubbleProps): JSX.Element;
