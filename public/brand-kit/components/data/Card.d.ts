import React from "react";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: number;
  radius?: number;
  /** Soft shadow on/off. Default true. */
  elevated?: boolean;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
