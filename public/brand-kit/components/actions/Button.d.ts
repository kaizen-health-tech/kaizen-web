import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. contained = violet fill (default), outlined = hairline, ghost = quiet text. */
  mode?: "contained" | "outlined" | "ghost";
  /** Height ramp: sm 42 · md 48 · lg 58 (default). */
  size?: "sm" | "md" | "lg";
  /** Icon registry name shown before the label. */
  leftIcon?: string;
  /** Icon registry name shown after the label. */
  rightIcon?: string;
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
