import React from "react";
export interface LineChartProps {
  /** Series of numbers. */
  data?: number[];
  width?: number;
  height?: number;
  /** Area fill color (default aquamarine). */
  color?: string;
  /** Line color (default violet). */
  stroke?: string;
  /** Show a marker on the last point. */
  marker?: boolean;
  style?: React.CSSProperties;
}
export function LineChart(props: LineChartProps): JSX.Element;
