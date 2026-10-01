import { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/Common/PageHero";
import { PillLink } from "@/components/Common/PillLink";
import { Reveal } from "@/components/Common/Reveal";
import { ReleaseExplorer } from "@/components/Updates";
import { ReleaseImpactSummary } from "@/components/Updates/ReleaseImpactSummary";
import {
  IMPACT_STYLES,
  countImpacts,
  formatReleaseDate,
} from "@/components/Updates/releaseImpact";
import { getAllTags, getSortedReleases } from "@/data/releases";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Product Updates",
  description:
    "Track Kaizen Health release notes, roadmap improvements, and feature rollouts so your family or care team stays ready for every new capability.",
  path: "/updates",
  image: "/images/open-graph/home.png",
  keywords: [
    "Kaizen Health release notes",
    "Kaizen Health updates",
    "healthcare product roadmap",
    "HIPAA platform releases",
  ],
});

const UpdatesPage = () => {
  const releases = getSortedReleases();
  const latest = releases[0];
  const tags = getAllTags();
  const latestCounts = countImpacts(latest);

  return (
    <>
      <PageHero
        align="left"
        eyebrow="Release notes"
        title="What's new in Kaizen Health."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Product Updates", url: "/updates" },
        ]}
        description={
          <p>
            Every app update, in plain words. Each release lists what is new,
            what got better, and what we fixed, so you can see what changed for
            your family before you open the app.
          </p>
        }
      >
        {/* Latest release, featured in the dark card used for the lead item
            on /docs. */}
        <Reveal delay={80} className="mt-14 md:mt-16">
          <article className="rounded-[2rem] bg-violet/15 p-1.5 ring-1 ring-violet/25">
            <div
              className={`grid gap-10 rounded-[calc(2rem-0.375rem)] bg-midnight p-7 text-white shadow-[0_24px_60px_rgba(40,27,85,0.28),inset_0_1px_1px_rgba(255,255,255,0.12)] md:p-12 ${
                latest.heroImage ? "lg:grid-cols-[minmax(0,1fr)_22rem]" : ""
              }`}
            >
              <div className="flex flex-col">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-aquamarine">
                  Latest · Version {latest.version} ·{" "}
                  <time dateTime={latest.publishedAt}>
                    {formatReleaseDate(latest.publishedAt)}
                  </time>
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-balance md:text-[44px]">
                  {latest.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  {latest.summary}
                </p>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {latest.highlights.slice(0, 4).map((highlight) => (
                    <li
                      key={highlight.title}
                      className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10"
                    >
                      <span
                        aria-hidden="true"
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                          highlight.impact
                            ? IMPACT_STYLES[highlight.impact].dot
                            : "bg-white/40"
                        }`}
                      />
                      <span className="text-[15px] font-semibold leading-6">
                        {highlight.impact && (
                          <span className="sr-only">
                            {IMPACT_STYLES[highlight.impact].label}:{" "}
                          </span>
                        )}
                        {highlight.title}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <PillLink
                    href={`/updates/${latest.slug}`}
                    variant="aquamarine"
                  >
                    See everything that changed
                  </PillLink>
                  <ReleaseImpactSummary
                    counts={latestCounts}
                    className="[&>li]:bg-white/10 [&>li]:text-white"
                  />
                </div>
              </div>

              {latest.heroImage && (
                <div className="self-center overflow-hidden rounded-[1.5rem] ring-1 ring-white/10">
                  <Image
                    src={latest.heroImage}
                    alt={latest.heroImageAlt ?? latest.title}
                    width={latest.heroImageWidth ?? 1080}
                    height={latest.heroImageHeight ?? 1080}
                    sizes="(min-width: 1024px) 352px, calc(100vw - 88px)"
                    className="h-auto w-full"
                    priority
                  />
                </div>
              )}
            </div>
          </article>
        </Reveal>
      </PageHero>

      <section
        className="px-4 pb-24 pt-8 md:px-8 md:pb-32 md:pt-12"
        aria-label="All releases"
      >
        <div className="mx-auto max-w-c-1235">
          <ReleaseExplorer releases={releases} tags={tags} />
        </div>
      </section>
    </>
  );
};

export default UpdatesPage;
