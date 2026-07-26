import React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  label?: string;
  required?: boolean;
  /** Icon registry name shown at the leading edge. */
  leftIcon?: string;
  /** Icon registry name shown at the trailing edge (tappable). */
  rightIcon?: string;
  onRightIconClick?: () => void;
  /** Static text before the value (e.g. a unit or "+1"). */
  prefix?: string;
  /** Error string rendered below; also turns the outline red. */
  errorText?: string;
  disabled?: boolean;
}
export function Input(props: InputProps): JSX.Element;
