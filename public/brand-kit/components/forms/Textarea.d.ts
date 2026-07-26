import React from "react";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  rows?: number;
  errorText?: string;
  disabled?: boolean;
}
export function Textarea(props: TextareaProps): JSX.Element;
