import React from "react";
export interface ProgressBarProps {
  /** 0–100. */
  value?: number;
  /** generic = teal (default) · brand = violet · ai = pink in a gradient frame with a sparkle. */
  mode?: "generic" | "brand" | "ai";
  style?: React.CSSProperties;
}
export function ProgressBar(props: ProgressBarProps): JSX.Element;
