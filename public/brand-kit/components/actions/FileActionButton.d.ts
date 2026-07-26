import React from "react";
export interface FileActionButtonProps {
  /** download · share · delete · ai · edit · tag. */
  purpose?: "download" | "share" | "delete" | "ai" | "edit" | "tag";
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function FileActionButton(props: FileActionButtonProps): JSX.Element;
