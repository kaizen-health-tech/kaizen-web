import React from "react";
export interface TopBarProps {
  title?: string;
  /** Shows a back chevron and fires this. */
  onBack?: () => void;
  /** Trailing nodes, usually <IconButton/>s. */
  actions?: React.ReactNode;
  align?: "left" | "center";
  style?: React.CSSProperties;
}
export function TopBar(props: TopBarProps): JSX.Element;
