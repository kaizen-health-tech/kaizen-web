import {
  IMPACT_ORDER,
  IMPACT_STYLES,
} from "@/components/Updates/releaseImpact";

import type { ReleaseImpactSummaryProps } from "@/types/release";

/** "4 New · 1 Improved · 2 Fixed" as chips, so the size of a release reads at a glance. */
export const ReleaseImpactSummary = ({
  counts,
  className = "",
}: ReleaseImpactSummaryProps) => {
  const present = IMPACT_ORDER.filter((impact) => counts[impact] > 0);
  if (present.length === 0) return null;

  return (
    <ul
      className={`flex flex-wrap gap-2 ${className}`}
      aria-label="Changes in this release"
    >
      {present.map((impact) => (
        <li
          key={impact}
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${IMPACT_STYLES[impact].chip}`}
        >
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full ${IMPACT_STYLES[impact].dot}`}
          />
          {counts[impact]} {IMPACT_STYLES[impact].label}
        </li>
      ))}
    </ul>
  );
};
