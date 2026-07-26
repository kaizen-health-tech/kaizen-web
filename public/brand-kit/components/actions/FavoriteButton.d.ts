import React from "react";
export interface FavoriteButtonProps {
  active?: boolean;
  onToggle?: () => void;
  size?: number;
  style?: React.CSSProperties;
}
export function FavoriteButton(props: FavoriteButtonProps): JSX.Element;
