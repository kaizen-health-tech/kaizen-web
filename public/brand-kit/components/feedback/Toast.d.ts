import React from "react";
export interface ToastProps {
  message: string;
  type?: "success" | "warning" | "danger" | "info";
  style?: React.CSSProperties;
}
export function Toast(props: ToastProps): JSX.Element;
