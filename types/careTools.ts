import type { ReactNode } from "react";

export type ToolFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  hint?: string;
  multiline?: boolean;
  type?: "text" | "date";
};

export type ToolPageProps = {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
  steps: string[];
  faqs: { question: string; answer: string }[];
};

export type ToolResultProps = {
  title: string;
  children: ReactNode;
  onCopy: () => Promise<void>;
  copyStatus: string;
  cta: string;
};
