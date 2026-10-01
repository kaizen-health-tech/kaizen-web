import type {
  Release,
  ReleaseHighlight,
  ReleaseImpact,
  ReleaseImpactCounts,
  ReleaseImpactStyle,
} from "@/types/release";

/** Display order: what is new first, then what got better, then fixes. */
export const IMPACT_ORDER: ReleaseImpact[] = ["new", "improved", "fixed"];

export const IMPACT_STYLES: Record<ReleaseImpact, ReleaseImpactStyle> = {
  new: {
    label: "New",
    groupLabel: "New features",
    chip: "bg-aquamarine/25 text-midnight",
    dot: "bg-aquamarine",
  },
  improved: {
    label: "Improved",
    groupLabel: "Improvements",
    chip: "bg-light-lilac text-light-plum",
    dot: "bg-violet",
  },
  fixed: {
    label: "Fixed",
    groupLabel: "Fixes",
    chip: "bg-cloud text-arsenic",
    dot: "bg-graphite",
  },
};

export const countImpacts = (release: Release): ReleaseImpactCounts =>
  release.highlights.reduce<ReleaseImpactCounts>(
    (counts, highlight) => {
      if (highlight.impact) counts[highlight.impact] += 1;
      return counts;
    },
    { new: 0, improved: 0, fixed: 0 },
  );

/** Highlights grouped by impact, in display order, skipping empty groups. */
export const groupHighlights = (
  release: Release,
): Array<{ impact: ReleaseImpact | "other"; items: ReleaseHighlight[] }> => {
  const groups: Array<{
    impact: ReleaseImpact | "other";
    items: ReleaseHighlight[];
  }> = IMPACT_ORDER.map((impact) => ({
    impact,
    items: release.highlights.filter((item) => item.impact === impact),
  }));
  groups.push({
    impact: "other",
    items: release.highlights.filter((item) => !item.impact),
  });
  return groups.filter((group) => group.items.length > 0);
};

/** Stable in-page anchor for a release section heading. */
export const sectionAnchor = (heading: string): string =>
  heading
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const formatReleaseDate = (
  publishedAt: string,
  month: "long" | "short" = "long",
): string =>
  // Dates are calendar days ("2026-08-10"); format in UTC so they never shift
  // a day in the visitor's time zone.
  new Intl.DateTimeFormat("en", {
    year: "numeric",
    month,
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(publishedAt));
