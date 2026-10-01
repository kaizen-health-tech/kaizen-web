import { PILL_SIZES, PILL_VARIANTS } from "@/components/Common/pillStyles";

import type { PillArrowProps } from "@/types/ui";

/**
 * The arrow circle that sits flush with a pill's edge. A forward arrow nudges
 * up and right on hover; a back arrow nudges left.
 */
export const PillArrow = ({
  direction,
  variant,
  size,
  isButton = false,
}: PillArrowProps) => {
  // Full class names only, so Tailwind's scanner can see them.
  const motion = isButton
    ? direction === "forward"
      ? "group-enabled:group-hover:-translate-y-px group-enabled:group-hover:translate-x-0.5 group-enabled:group-hover:scale-105"
      : "group-enabled:group-hover:-translate-x-0.5 group-enabled:group-hover:scale-105"
    : direction === "forward"
      ? "group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105"
      : "group-hover:-translate-x-0.5 group-hover:scale-105";

  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-out-soft ${PILL_SIZES[size].icon} ${PILL_VARIANTS[variant].icon} ${motion}`}
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
        {direction === "forward" ? (
          <path d="M7 17 17 7M8 7h9v9" />
        ) : (
          <path d="M19 12H5m6 6-6-6 6-6" />
        )}
      </svg>
    </span>
  );
};
