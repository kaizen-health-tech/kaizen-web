import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Shared building blocks for the home page.
 *
 * The layout follows one tight type/space scale so every section lines up:
 *   display   64 / 60   (-0.01em)
 *   sub       32 / 36.5 (-0.03em)
 *   lead      26 / 29.6 (-0.03em)
 *   card      24 / 27   (-0.01em)
 *   body      20 / 24   (-0.01em)
 * Sections are 128px of vertical air on a 1376px max-width column with 32px
 * gutters. Everything sits at weight 500 — the hierarchy comes from size and
 * leading, not from bolding.
 */

export const SECTION_X = "px-5 md:px-8";
export const SHELL = "mx-auto w-full max-w-[1376px]";
export const SECTION_Y = "py-20 md:py-28 lg:py-32";

export const DISPLAY =
  "text-[clamp(2.75rem,5.4vw,4rem)] font-medium leading-[0.94] tracking-[-0.01em] text-dark-plum";
export const SUB =
  "text-[clamp(1.375rem,2.6vw,2rem)] font-medium leading-[1.14] tracking-[-0.03em]";
export const LEAD =
  "text-[clamp(1.125rem,2vw,1.625rem)] font-medium leading-[1.14] tracking-[-0.03em]";
export const CARD_TITLE =
  "text-[clamp(1.25rem,1.7vw,1.5rem)] font-medium leading-[1.125] tracking-[-0.01em] text-dark-plum";
export const BODY =
  "text-[clamp(1rem,1.4vw,1.25rem)] font-medium leading-[1.2] tracking-[-0.01em]";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

/**
 * The one button on the page. Pale accent, dark ink, 12px radius — the same
 * shape whether it sits on the dark nav pill, on the cream canvas, or on the
 * closing sky band.
 */
export const AccentButton = ({
  href,
  children,
  className = "",
  onClick,
}: ButtonProps) => (
  <Link
    href={href}
    onClick={onClick}
    className={`inline-flex shrink-0 items-center justify-center rounded-xl bg-aquamarine px-4 py-2.5 text-[17px] font-medium leading-5 tracking-[-0.01em] text-dark-plum transition duration-200 hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-plum ${className}`}
  >
    {children}
  </Link>
);

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
};

export const Section = ({
  children,
  className = "",
  id,
  labelledBy,
}: SectionProps) => (
  <section
    id={id}
    aria-labelledby={labelledBy}
    className={`bg-lavender ${SECTION_X} ${className}`}
  >
    <div className={SHELL}>{children}</div>
  </section>
);
