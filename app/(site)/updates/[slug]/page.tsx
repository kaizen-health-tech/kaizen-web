import {
  getReleaseBySlug,
  getSortedReleases,
  releases,
} from "@/data/releases";
import {
  ReleaseDetailHero,
  ReleaseHighlights,
} from "@/components/Updates";
import { Release } from "@/types/release";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type ReleasePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export const generateStaticParams = () =>
  releases.map((release) => ({ slug: release.slug }));

const buildMetadata = (release: Release): Metadata => ({
  title: `${release.title} | Kaizen Health Product Updates`,
  description: release.summary,
  alternates: {
    canonical: `https://www.kaizenhealth.io/updates/${release.slug}`,
  },
  openGraph: {
    title: `${release.title} | Kaizen Health Product Updates`,
    description: release.summary,
    url: `https://www.kaizenhealth.io/updates/${release.slug}`,
    siteName: "Kaizen Health",
    type: "article",
    tags: release.tags,
    publishedTime: new Date(release.publishedAt).toISOString(),
    images: [
      {
        url:
          release.heroImage ??
          "https://www.kaizenhealth.io/images/open-graph/updates.png",
        width: 1200,
        height: 630,
        alt: release.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${release.title} | Kaizen Health Product Updates`,
    description: release.summary,
    images: [
      release.heroImage ??
        "https://www.kaizenhealth.io/images/open-graph/updates.png",
    ],
  },
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

const ReleasePage = async ({ params }: ReleasePageProps) => {
  const { slug } = await params;
  const release = getReleaseBySlug(slug) ?? notFound();

  const sortedReleases = getSortedReleases();
  const currentIndex = sortedReleases.findIndex(
    (entry) => entry.slug === release.slug,
  );
  const previous = sortedReleases[currentIndex - 1];
  const next = sortedReleases[currentIndex + 1];

  return (
    <main className="bg-gradient-to-b from-white via-white to-[#f6f8fb] dark:from-[#040609] dark:via-[#080B12] dark:to-[#0E1015]">
      <section className="pb-20 pt-28 md:pb-24 md:pt-32 lg:pb-28 lg:pt-36">
        <div className="container mx-auto px-4">
          <ReleaseDetailHero release={release} />
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[minmax(0,_1fr)]">
          <ReleaseHighlights release={release} />

          <article className="rounded-3xl border border-black/5 bg-white p-8 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-blacksection dark:shadow-none lg:p-12">
            <div className="prose prose-slate max-w-none dark:prose-invert">
              {release.sections.map((section) => (
                <section key={section.heading} className="not-prose mb-10">
                  <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
                    {section.body}
                  </p>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-5 list-disc space-y-2 pl-6 text-base text-slate-700 marker:text-primary dark:text-slate-200">
                      {section.bullets.map((bullet) => {
                        if (typeof bullet === "string") {
                          return <li key={bullet}>{bullet}</li>;
                        }

                        const key = `${section.heading}-${bullet.label}`;
                        const isExternalLink =
                          bullet.url &&
                          (bullet.url.startsWith("http://") ||
                            bullet.url.startsWith("https://"));

                        return (
                          <li key={key}>
                            {bullet.url ? (
                              <a
                                href={bullet.url}
                                className="text-primary underline-offset-4 transition hover:text-primaryho hover:underline"
                                target={isExternalLink ? "_blank" : undefined}
                                rel={
                                  isExternalLink
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                              >
                                {bullet.label}
                              </a>
                            ) : (
                              bullet.label
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {release.resources && release.resources.length > 0 && (
              <aside className="mt-12 rounded-2xl bg-slate-50 p-6 dark:bg-[#12151f]">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Resources
                </h3>
                <ul className="mt-4 space-y-3">
                  {release.resources.map((resource) => (
                    <li key={resource.label}>
                      <Link
                        href={resource.url}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primaryho"
                      >
                        {resource.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-4 w-4"
                          aria-hidden
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </article>
        </div>
      </section>

      <section className="pb-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-5 rounded-3xl border border-black/5 bg-white p-8 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-blacksection dark:shadow-none md:flex-row md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary">
                Continue exploring
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-slate-900 dark:text-white">
                Browse other Kaizen Health releases
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {previous && (
                <Link
                  href={`/updates/${previous.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
                >
                  ← {previous.version}
                </Link>
              )}
              <Link
                href="/updates"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primaryho"
              >
                Back to all updates
              </Link>
              {next && (
                <Link
                  href={`/updates/${next.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
                >
                  {next.version} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReleasePage;
