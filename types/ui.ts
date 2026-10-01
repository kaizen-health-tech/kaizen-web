import type { ReactNode } from "react";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Milliseconds to wait after entering the viewport, for staggered groups. */
  delay?: number;
  as?: "div" | "li" | "article";
};

export type PillLinkVariant = "violet" | "midnight" | "soft" | "aquamarine";

export type PillLinkProps = {
  href: string;
  children: ReactNode;
  variant?: PillLinkVariant;
  className?: string;
};
