import React from "react";
export interface ChipTone { bg: string; fg: string; }
export interface ChipProps {
  label: string;
  /** round = 25px pill (default) · rec = 5px rectangle. */
  shape?: "round" | "rec";
  size?: "sm" | "md";
  /** Icon registry name at the leading edge. */
  leftIcon?: string;
  /** {bg,fg} override — e.g. the cyan/pink/yellow/heather category tones. Defaults to light-lilac. */
  tone?: ChipTone;
  onClose?: () => void;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function Chip(props: ChipProps): JSX.Element;
