import React from "react";
export interface PickerOption { label: string; value: string; }
export interface PickerProps {
  options: (PickerOption | string)[];
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export function Picker(props: PickerProps): JSX.Element;
