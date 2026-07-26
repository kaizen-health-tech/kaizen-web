import React from "react";
export interface BadgeProps {
  children?: React.ReactNode;
  /** Semantic tone. */
  tone?: "neutral" | "violet" | "success" | "notice" | "error" | "info";
  /** Render as a bare status dot (no label). */
  dot?: boolean;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
