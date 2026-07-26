import React from "react";
export interface AvatarProps {
  /** Image URL; falls back to initials from `name`. */
  src?: string;
  name?: string;
  size?: number;
  /** Violet→aquamarine story ring. */
  ring?: boolean;
  style?: React.CSSProperties;
}
export function Avatar(props: AvatarProps): JSX.Element;
