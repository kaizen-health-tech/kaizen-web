import React from "react";
export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: number;
  style?: React.CSSProperties;
}
export function Skeleton(props: SkeletonProps): JSX.Element;
