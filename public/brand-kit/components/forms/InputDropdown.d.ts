import React from "react";
export interface DropdownOption { label: string; value: string; }
export interface InputDropdownProps {
  label?: string;
  value?: string;
  placeholder?: string;
  /** Options as {label,value} objects or bare strings. */
  options: (DropdownOption | string)[];
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export function InputDropdown(props: InputDropdownProps): JSX.Element;
