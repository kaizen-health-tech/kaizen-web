import Link from "next/link";

import type { PillLinkProps, PillLinkVariant } from "@/types/ui";

const VARIANTS: Record<PillLinkVariant, { pill: string; icon: string }> = {
  violet: {
    pill: "bg-violet text-white hover:bg-violet-hover",
    icon: "bg-white/15",
  },
  midnight: {
    pill: "bg-midnight text-white hover:bg-light-plum",
    icon: "bg-white/15",
  },
  soft: {
    pill: "bg-light-lilac text-midnight hover:bg-light-heather",
    icon: "bg-white",
  },
  aquamarine: {
    pill: "bg-aquamarine text-dark-plum hover:brightness-95",
    icon: "bg-dark-plum/10",
  },
};

/**
 * The site's call-to-action pill. The arrow sits in its own circle flush with
 * the right edge and nudges up and right on hover; the whole pill presses in
 * slightly when clicked.
 */
export const PillLink = ({
  href,
  children,
  variant = "violet",
  className = "",
}: PillLinkProps) => {
  const { pill, icon } = VARIANTS[variant];

  return (
    <Link
      href={href}
      className={`group inline-flex min-h-12 items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 font-bold transition duration-500 ease-out-soft active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet ${pill} ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-out-soft group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105 ${icon}`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </span>
    </Link>
  );
};
