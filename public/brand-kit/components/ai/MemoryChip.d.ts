import React from "react";
export interface MemoryChipProps {
  label: string;
  /** default = lilac · added = violet confirmation. */
  state?: "default" | "added";
  onToggle?: () => void;
  style?: React.CSSProperties;
}
export function MemoryChip(props: MemoryChipProps): JSX.Element;
