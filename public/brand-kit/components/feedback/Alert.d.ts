import React from "react";
export interface AlertProps {
  open?: boolean;
  title?: string;
  message?: string;
  icon?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  /** Red confirm button + red icon tile for irreversible actions. */
  destructive?: boolean;
  style?: React.CSSProperties;
}
export function Alert(props: AlertProps): JSX.Element;
