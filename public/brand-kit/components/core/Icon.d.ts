import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Registry glyph name, e.g. "Kai", "Heart", "Pill", "FileText". See window.KaizenIcons for the full set. */
  name: string;
  /** Pixel size (width & height). Default 24. */
  size?: number;
  /** Icon color — stroke for outline glyphs, fill for solid ones. Default currentColor. */
  color?: string;
  /** Override the stroke width on outline glyphs. */
  strokeWidth?: number;
}

/**
 * Kaizen Health line-icon set (24px grid, 1.5 stroke). The single source of iconography
 * across the product — always prefer a registry glyph over a hand-drawn SVG.
 */
export function Icon(props: IconProps): JSX.Element;
