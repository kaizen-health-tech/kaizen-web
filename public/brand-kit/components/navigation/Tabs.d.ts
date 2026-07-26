import React from "react";
export interface TabItemObj { label: string; value: string; icon?: string; }
export interface TabsProps {
  /** Tabs as {label,value,icon} objects or bare strings. */
  items: (TabItemObj | string)[];
  /** Controlled selected value (optional; component also self-manages). */
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
