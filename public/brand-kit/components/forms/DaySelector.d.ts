import React from "react";
export interface DaySelectorProps {
  /** Day labels (default Mon–Sun). */
  days?: string[];
  /** Selected indices (or labels). */
  selected?: (number | string)[];
  onToggle?: (index: number) => void;
  style?: React.CSSProperties;
}
export function DaySelector(props: DaySelectorProps): JSX.Element;
