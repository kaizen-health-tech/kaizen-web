import React from "react";
export interface BottomSheetProps {
  open?: boolean;
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
  /** Render in normal flow instead of as a fixed overlay (useful for specimens). */
  inline?: boolean;
  style?: React.CSSProperties;
}
export function BottomSheet(props: BottomSheetProps): JSX.Element;
