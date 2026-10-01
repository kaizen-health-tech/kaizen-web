import Link from "next/link";

import { PillLink } from "@/components/Common/PillLink";
import { ReleaseImpactSummary } from "@/components/Updates/ReleaseImpactSummary";
import {
  IMPACT_STYLES,
  countImpacts,
  formatReleaseDate,
} from "@/components/Updates/releaseImpact";

import type { ReleaseCardProps } from "@/types/release";

const PREVIEW_COUNT = 3;

/**
 * One entry on the updates timeline: version and date on the left (sticky
 * while the card scrolls past on wide screens), and on the right a card that
 * says how big the release is and what the top changes are, in plain words.
 */
const ReleaseCard = ({ release }: ReleaseCardProps) => {
  const counts = countImpacts(release);
  const preview = release.highlights.slice(0, PREVIEW_COUNT);
  const remaining = release.highlights.length - preview.length;
  const titleId = `${release.slug}-title`;

  return (
    <li className="grid gap-4 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10">
      <div className="md:sticky md:top-[calc(var(--site-header-height,4.5rem)+2rem)] md:self-start md:pt-9">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet">
          Version {release.version}
        </p>
        <p className="mt-1 text-sm text-graphite">
          <time dateTime={release.publishedAt}>
            {formatReleaseDate(release.publishedAt, "short")}
          </time>
        </p>
      </div>

      {/* Two nested rounded boxes, as on /docs: a tinted shell around the
          card, radii offset by the shell padding so corners stay concentric. */}
      <article
        aria-labelledby={titleId}
        className="group rounded-[2rem] bg-lavender/60 p-1.5 ring-1 ring-midnight/5"
      >
        <div className="rounded-[calc(2rem-0.375rem)] bg-white p-7 shadow-card-soft transition-shadow duration-500 ease-out-soft group-hover:shadow-card-hover md:p-9">
          <ReleaseImpactSummary counts={counts} />

          <h3
            id={titleId}
            className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.02em] text-midnight text-balance md:text-[28px]"
          >
            <Link
              href={`/updates/${release.slug}`}
              className="transition-colors duration-500 ease-out-soft hover:text-violet focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
            >
              {release.title}
            </Link>
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-7 text-text-body">
            {release.summary}
          </p>

          {preview.length > 0 && (
            <ul className="mt-7 space-y-4 border-t border-cloud pt-7">
              {preview.map((highlight) => (
                <li key={highlight.title} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                      highlight.impact
                        ? IMPACT_STYLES[highlight.impact].dot
                        : "bg-steel"
                    }`}
                  />
                  <p className="text-[15px] leading-6 text-text-body">
                    {highlight.impact && (
                      <span className="sr-only">
                        {IMPACT_STYLES[highlight.impact].label}:{" "}
                      </span>
                    )}
                    <span className="font-semibold text-midnight">
                      {highlight.title}.
                    </span>{" "}
                    {highlight.description}
                  </p>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-graphite">
              {remaining > 0
                ? `+${remaining} more ${remaining === 1 ? "change" : "changes"} · `
                : ""}
              {release.tags.join(" · ")}
            </p>
            <PillLink
              href={`/updates/${release.slug}`}
              variant="soft"
              size="sm"
              aria-describedby={titleId}
            >
              See what changed
            </PillLink>
          </div>
        </div>
      </article>
    </li>
  );
};

export default ReleaseCard;
