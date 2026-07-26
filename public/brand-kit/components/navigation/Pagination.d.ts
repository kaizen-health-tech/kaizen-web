import React from "react";
export interface PaginationProps {
  count?: number;
  /** Active page index. */
  index?: number;
  color?: string;
  style?: React.CSSProperties;
}
export function Pagination(props: PaginationProps): JSX.Element;
