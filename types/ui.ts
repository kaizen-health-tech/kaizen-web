import type { BreadcrumbItem } from "@/components/Schema";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Milliseconds to wait after entering the viewport, for staggered groups. */
  delay?: number;
  as?: "div" | "li" | "article";
};

export type PillVariant =
  | "violet"
  | "midnight"
  | "soft"
  | "aquamarine"
  | "outline"
  | "outlineInverse";

export type PillSize = "sm" | "md";

/** "forward" puts an up-right arrow on the right, "back" a left arrow on the left. */
export type PillArrowDirection = "forward" | "back" | "none";

export type PillStyleOptions = {
  variant?: PillVariant;
  size?: PillSize;
  arrow?: PillArrowDirection;
  fullWidth?: boolean;
  className?: string;
};

export type PillArrowProps = {
  direction: Exclude<PillArrowDirection, "none">;
  variant: PillVariant;
  size: PillSize;
  /** Buttons only animate the arrow while enabled; links always do. */
  isButton?: boolean;
};

export type PillLinkProps = PillStyleOptions &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className"> & {
    href: string;
    children: ReactNode;
    /** Render a plain <a> instead of next/link, for pages with no router mounted. */
    native?: boolean;
  };

export type PillButtonProps = PillStyleOptions &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    children: ReactNode;
  };

export type PageHeroProps = {
  /** Small uppercase pill above the title. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  /** Centered for single-message pages; left when there is an aside. */
  align?: "center" | "left";
  /** Pill links or buttons under the description. */
  actions?: ReactNode;
  /** Optional right-hand column on wide screens (image, panel). Left-aligned heroes only. */
  aside?: ReactNode;
  /** Extra content inside the hero band, under the intro (for example a step track). */
  children?: ReactNode;
  className?: string;
  /** Max-width class for the inner container, to line up with the page body. */
  containerClassName?: string;
};

export type PageHeroBackgroundProps = {
  className?: string;
};
