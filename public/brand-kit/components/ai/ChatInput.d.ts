import React from "react";
export interface ChatInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSend?: (value: string) => void;
  onAttach?: () => void;
  style?: React.CSSProperties;
}
export function ChatInput(props: ChatInputProps): JSX.Element;
