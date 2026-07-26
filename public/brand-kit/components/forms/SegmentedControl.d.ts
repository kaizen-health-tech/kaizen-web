import React from "react";
export interface SegmentOption { label: string; value: string; }
export interface SegmentedControlProps {
  /** Options as {label,value} objects or bare strings. */
  options: (SegmentOption | string)[];
  value: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
