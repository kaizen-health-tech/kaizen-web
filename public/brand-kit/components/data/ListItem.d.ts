import React from "react";
export interface IconTone { bg: string; fg: string; }
export interface ListItemProps {
  /** Leading icon registry name. */
  icon?: string;
  /** {bg,fg} for the icon tile. Defaults to light-lilac / violet. */
  iconTone?: IconTone;
  title: string;
  subtitle?: string;
  /** Trailing node (badge, value, switch…). Falls back to a chevron when clickable. */
  trailing?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function ListItem(props: ListItemProps): JSX.Element;
