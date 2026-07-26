import React from "react";
export interface LabelButtonProps {
  label: string;
  /** Optional step number shown in a leading pill. */
  step?: number;
  /** active = violet · done = lilac · idle = muted. */
  state?: "active" | "done" | "idle";
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function LabelButton(props: LabelButtonProps): JSX.Element;
