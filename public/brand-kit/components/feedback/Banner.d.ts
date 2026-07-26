import React from "react";
export interface BannerProps {
  title?: string;
  message?: string;
  tone?: "info" | "success" | "notice" | "ai";
  /** Trailing text action label. */
  action?: string;
  onAction?: () => void;
  style?: React.CSSProperties;
}
export function Banner(props: BannerProps): JSX.Element;
