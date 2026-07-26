import React from "react";
export interface TagProps {
  label: string;
  /** contained = solid fill (default) · outlined = 2px ring. */
  mode?: "contained" | "outlined";
  leftIcon?: string;
  rightIcon?: string;
  /** Accent color; defaults to the heather relationship color. */
  color?: string;
  style?: React.CSSProperties;
}
export function Tag(props: TagProps): JSX.Element;
