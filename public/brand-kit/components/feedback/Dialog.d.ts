import React from "react";
export interface DialogProps {
  open?: boolean;
  title?: string;
  /** Leading icon in a lilac tile above the title. */
  icon?: string;
  children?: React.ReactNode;
  /** Footer action buttons (usually <Button/> elements). */
  actions?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Dialog(props: DialogProps): JSX.Element;
