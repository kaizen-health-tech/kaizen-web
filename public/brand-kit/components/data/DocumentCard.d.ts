import React from "react";
export interface DocumentCardProps {
  /** file · medication · note · event — sets the icon + category tint. */
  type?: "file" | "medication" | "note" | "event";
  title: string;
  meta?: string;
  tag?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function DocumentCard(props: DocumentCardProps): JSX.Element;
