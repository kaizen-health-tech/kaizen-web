import React from "react";
export interface TabItem { value: string; icon: string; label: string; }
export interface TabBarProps {
  /** Destinations. Defaults to Home / Groups / Kai / Records. */
  items?: TabItem[];
  value: string;
  onChange?: (value: string) => void;
  /** When provided, renders the elevated violet "+" action in the centre. */
  onAdd?: () => void;
  style?: React.CSSProperties;
}
export function TabBar(props: TabBarProps): JSX.Element;
