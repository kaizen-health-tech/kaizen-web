import React from "react";
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon registry glyph name. */
  name: string;
  size?: number;
  color?: string;
  /** plain = transparent (default) · tonal = cloud surface fill. */
  variant?: "plain" | "tonal";
  disabled?: boolean;
}
export function IconButton(props: IconButtonProps): JSX.Element;
