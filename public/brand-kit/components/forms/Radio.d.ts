import React from "react";
export interface RadioProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  name?: string;
  value?: string;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
