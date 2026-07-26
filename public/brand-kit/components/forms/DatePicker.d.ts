import React from "react";
export interface DatePickerProps {
  /** Selected date (Date or ISO string). */
  value?: Date | string;
  onChange?: (date: Date) => void;
  /** Initial month to display (Date or ISO string). */
  month?: Date | string;
  style?: React.CSSProperties;
}
export function DatePicker(props: DatePickerProps): JSX.Element;
