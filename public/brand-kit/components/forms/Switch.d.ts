import React from "react";
export interface SwitchProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
  /** Optional leading label; renders label + switch on one row. */
  label?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;
