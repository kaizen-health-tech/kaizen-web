import React from "react";
export interface AccordionProps {
  title: string;
  defaultOpen?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Accordion(props: AccordionProps): JSX.Element;
