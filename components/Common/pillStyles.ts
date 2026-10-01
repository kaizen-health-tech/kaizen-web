import type { PillSize, PillStyleOptions, PillVariant } from "@/types/ui";

export const PILL_VARIANTS: Record<
  PillVariant,
  { pill: string; icon: string }
> = {
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
  // Secondary action on a light surface.
  outline: {
    pill: "border border-steel text-midnight hover:border-violet hover:text-violet dark:border-white/20 dark:text-white dark:hover:border-white/60 dark:hover:text-white",
    icon: "bg-lavender dark:bg-white/10",
  },
  // Secondary action on a dark surface, in either theme.
  outlineInverse: {
    pill: "border border-white/25 text-white hover:border-white/60",
    icon: "bg-white/10",
  },
};

export const PILL_SIZES: Record<
  PillSize,
  { base: string; forward: string; back: string; plain: string; icon: string }
> = {
  md: {
    base: "min-h-12 text-base",
    forward: "py-1.5 pl-6 pr-1.5",
    back: "py-1.5 pl-1.5 pr-6",
    plain: "px-6 py-2.5",
    icon: "h-9 w-9",
  },
  sm: {
    base: "min-h-10 text-sm",
    forward: "py-1.5 pl-4.5 pr-1.5",
    back: "py-1.5 pl-1.5 pr-4.5",
    plain: "px-5 py-2",
    icon: "h-7 w-7",
  },
};

/**
 * Classes for the site's pill: one shape, weight, motion curve, press and
 * focus ring for every call to action, whether it renders as a link or a
 * button.
 */
export const pillClassName = ({
  variant = "violet",
  size = "md",
  arrow = "forward",
  fullWidth = false,
  className = "",
}: PillStyleOptions): string => {
  const sizes = PILL_SIZES[size];
  const padding = arrow === "none" ? sizes.plain : sizes[arrow];
  const justify =
    fullWidth && arrow !== "none" ? "justify-between" : "justify-center";

  return [
    "group inline-flex items-center gap-3 rounded-full font-bold transition duration-500 ease-out-soft active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
    justify,
    fullWidth ? "w-full" : "",
    sizes.base,
    padding,
    PILL_VARIANTS[variant].pill,
    className,
  ]
    .filter(Boolean)
    .join(" ");
};
