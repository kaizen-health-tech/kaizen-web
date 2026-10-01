import Image from "next/image";

import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { PillLink } from "@/components/Common/PillLink";
import { Reveal } from "@/components/Common/Reveal";
import {
  IMPACT_ORDER,
  IMPACT_STYLES,
  countImpacts,
  formatReleaseDate,
} from "@/components/Updates/releaseImpact";

import type { ReleaseCardProps } from "@/types/release";

/**
 * Release title and summary, then an "at a glance" row that counts what is
 * new, improved and fixed before the visitor reads any detail.
 */
const ReleaseDetailHero = ({ release }: ReleaseCardProps) => {
  const counts = countImpacts(release);
  const present = IMPACT_ORDER.filter((impact) => counts[impact] > 0);

  return (
    <header>
      <div
        className={
          release.heroImage
            ? "grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end lg:gap-16"
            : ""
        }
      >
        <Reveal className="max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Product Updates", url: "/updates" },
              {
                name: `Version ${release.version}`,
                url: `/updates/${release.slug}`,
              },
            ]}
          />
          <p className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-violet ring-1 ring-midnight/5">
            Version {release.version}
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-midnight text-balance md:text-6xl">
            {release.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-body">
            {release.summary}
          </p>
          <p className="mt-6 text-sm text-graphite">
            Released{" "}
            <time dateTime={release.publishedAt}>
              {formatReleaseDate(release.publishedAt)}
            </time>
            {release.estimatedRollout &&
              ` · Rolling out ${release.estimatedRollout}`}
          </p>
        </Reveal>

        {release.heroImage && (
          <Reveal
            delay={120}
            className="rounded-[2rem] bg-lavender/60 p-1.5 ring-1 ring-midnight/5"
          >
            <div className="overflow-hidden rounded-[calc(2rem-0.375rem)] bg-midnight">
              <Image
                src={release.heroImage}
                alt={release.heroImageAlt ?? release.title}
                width={release.heroImageWidth ?? 1920}
                height={release.heroImageHeight ?? 1080}
                sizes="(min-width: 1024px) 352px, calc(100vw - 44px)"
                className="h-auto w-full"
                priority
              />
            </div>
          </Reveal>
        )}
      </div>

      <Reveal
        delay={80}
        className="mt-12 rounded-[2rem] bg-lavender/60 p-1.5 ring-1 ring-midnight/5"
      >
        <div className="grid gap-8 rounded-[calc(2rem-0.375rem)] bg-white p-7 shadow-card-soft md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:gap-12 md:p-9">
          {present.length > 0 && (
            <dl className="flex flex-wrap gap-x-10 gap-y-6">
              {present.map((impact) => (
                <div key={impact}>
                  <dt className="flex items-center gap-2 text-sm font-semibold text-graphite">
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${IMPACT_STYLES[impact].dot}`}
                    />
                    {IMPACT_STYLES[impact].groupLabel}
                  </dt>
                  <dd className="mt-1 text-4xl font-semibold tracking-[-0.03em] text-midnight">
                    {counts[impact]}
                  </dd>
                </div>
              ))}
            </dl>
          )}
          <div
            className={
              present.length > 0 ? "md:border-l md:border-cloud md:pl-12" : ""
            }
          >
            <p className="text-sm font-semibold text-graphite">Topics</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {release.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-lavender px-3 py-1 text-sm font-medium text-midnight"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <div className="mt-8">
        <PillLink href="/updates" variant="soft" size="sm" arrow="back">
          All updates
        </PillLink>
      </div>
    </header>
  );
};

export default ReleaseDetailHero;
