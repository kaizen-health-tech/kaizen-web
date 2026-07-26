import React from "react";
export interface GoBackButtonProps {
  onClick?: () => void;
  /** surface = white pill with hairline · glass = translucent dark blur for over-image use. */
  variant?: "surface" | "glass";
  style?: React.CSSProperties;
}
export function GoBackButton(props: GoBackButtonProps): JSX.Element;
