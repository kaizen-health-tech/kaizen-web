import React from "react";
export interface GroupCardProps {
  name: string;
  /** Member names — first four render as stacked avatars. */
  members?: string[];
  meta?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function GroupCard(props: GroupCardProps): JSX.Element;
