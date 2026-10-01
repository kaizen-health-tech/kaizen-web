import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  PAGE_HERO_PADDING,
  PageHeroBackground,
} from "@/components/Common/PageHero";
import { PillLink } from "@/components/Common/PillLink";
import { Reveal } from "@/components/Common/Reveal";
import {
  ReleaseDetailHero,
  ReleaseHighlights,
  ReleasePager,
} from "@/components/Updates";
import { sectionAnchor } from "@/components/Updates/releaseImpact";
import { getReleaseBySlug, getSortedReleases, releases } from "@/data/releases";
import { createPageMetadata } from "@/lib/seo";
import { Release } from "@/types/release";

type ReleasePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = () =>
  releases.map((release) => ({ slug: release.slug }));

const buildMetadata = (release: Release): Metadata =>
  createPageMetadata({
    primaryKeyword: `${release.title} Release Notes`,
    description: release.summary,
    path: `/updates/${release.slug}`,
    type: "article",
    image: release.heroImage ?? "/images/open-graph/home.png",
    keywords: release.tags,
  });

export const generateMetadata = async ({
  params,
}: ReleasePageProps): Promise<Metadata> => {
  const { slug } = await params;
  const release = getReleaseBySlug(slug);
  if (!release) {
    return {};
  }
  return buildMetadata(release);
};

const isExternal = (url: string) =>
  url.startsWith("http://") || url.startsWith("https://");

const ReleasePage = async ({ params }: ReleasePageProps) => {
  const { slug } = await params;
  const release = getReleaseBySlug(slug) ?? notFound();

  // Sorted newest first, so the entry before this one is the newer release.
  const sortedReleases = getSortedReleases();
  const currentIndex = sortedReleases.findIndex(
    (entry) => entry.slug === release.slug,
  );
  const newer = sortedReleases[currentIndex - 1];
  const older = sortedReleases[currentIndex + 1];

  const sections = release.sections.map((section) => ({
    ...section,
    anchor: sectionAnchor(section.heading),
  }));

  return (
    <>
      <section className={`relative overflow-hidden ${PAGE_HERO_PADDING}`}>
        <PageHeroBackground />
        <div className="mx-auto max-w-c-1235">
          <ReleaseDetailHero release={release} />
        </div>
      </section>

      <div className="px-4 pb-24 pt-8 md:px-8 md:pb-32 md:pt-12">
        <div className="mx-auto max-w-c-1235">
          <ReleaseHighlights release={release} />

          {sections.length > 0 && (
            <section
              aria-labelledby="the-details"
              className="mt-24 grid gap-10 md:mt-32 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16"
            >
              <aside className="lg:sticky lg:top-[calc(var(--site-header-height,4.5rem)+2rem)] lg:self-start">
                <h2
                  id="the-details"
                  className="text-3xl font-semibold tracking-[-0.02em] text-midnight md:text-4xl lg:text-2xl"
                >
                  The details
                </h2>
                <nav
                  aria-label="In this release"
                  className="mt-6 hidden lg:block"
                >
                  <ul className="space-y-0.5 border-l border-cloud">
                    {sections.map((section) => (
                      <li key={section.anchor}>
                        <a
                          href={`#${section.anchor}`}
                          className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[15px] leading-6 text-text-body transition-colors duration-500 ease-out-soft hover:border-violet hover:text-midnight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              <div className="max-w-[46rem] space-y-16">
                {sections.map((section) => (
                  <Reveal key={section.anchor}>
                    <article
                      id={section.anchor}
                      className="scroll-mt-[calc(var(--site-header-height,4.5rem)+2rem)]"
                    >
                      <h3 className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-midnight text-balance">
                        {section.heading}
                      </h3>
                      <p className="mt-4 text-lg leading-8 text-text-longform">
                        {section.body}
                      </p>

                      {section.media && (
                        <figure className="mt-8 rounded-[2rem] bg-lavender/60 p-1.5 ring-1 ring-midnight/5">
                          <div className="rounded-[calc(2rem-0.375rem)] bg-white p-5 shadow-card-soft sm:p-7">
                            <Image
                              src={section.media.src}
                              alt={section.media.alt}
                              width={section.media.width}
                              height={section.media.height}
                              sizes="(min-width: 640px) 384px, calc(100vw - 96px)"
                              className="mx-auto h-auto w-full max-w-sm rounded-2xl"
                              unoptimized={section.media.src
                                .toLowerCase()
                                .endsWith(".gif")}
                            />
                            {section.media.caption && (
                              <figcaption className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-graphite">
                                {section.media.caption}
                              </figcaption>
                            )}
                          </div>
                        </figure>
                      )}

                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="mt-6 space-y-3">
                          {section.bullets.map((bullet) => {
                            const label =
                              typeof bullet === "string"
                                ? bullet
                                : bullet.label;
                            const url =
                              typeof bullet === "string"
                                ? undefined
                                : bullet.url;

                            return (
                              <li
                                key={`${section.anchor}-${label}`}
                                className="flex gap-3.5 text-base leading-7 text-text-longform"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/60"
                                />
                                {url ? (
                                  <a
                                    href={url}
                                    className="font-semibold text-violet underline decoration-violet/30 underline-offset-4 transition-colors duration-500 ease-out-soft hover:text-violet-hover hover:decoration-violet"
                                    target={
                                      isExternal(url) ? "_blank" : undefined
                                    }
                                    rel={
                                      isExternal(url)
                                        ? "noopener noreferrer"
                                        : undefined
                                    }
                                  >
                                    {label}
                                  </a>
                                ) : (
                                  <span>{label}</span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          {release.resources && release.resources.length > 0 && (
            <Reveal className="mt-24 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-lavender p-8 md:mt-32 md:flex-row md:items-center md:p-12">
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.02em] text-midnight">
                  Questions about this update?
                </h2>
                <p className="mt-2 max-w-xl text-base leading-7 text-text-body">
                  Tell us what you think, or find answers in the support center.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {release.resources.map((resource, index) => (
                  <PillLink
                    key={resource.label}
                    href={resource.url}
                    native={!resource.url.startsWith("/")}
                    variant={index === 0 ? "midnight" : "outline"}
                    arrow={index === 0 ? "forward" : "none"}
                  >
                    {resource.label}
                  </PillLink>
                ))}
              </div>
            </Reveal>
          )}

          <div className="mt-16">
            <ReleasePager newer={newer} older={older} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReleasePage;
