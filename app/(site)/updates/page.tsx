import { getAllTags, getSortedReleases } from "@/data/releases";
import { ReleaseCard, ReleaseExplorer } from "@/components/Updates";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const UpdatesPage = () => {
  const releases = getSortedReleases();
  const latestRelease = releases[0];
  const tags = getAllTags();

  return (
    <>
      <section className="relative overflow-hidden py-24 pt-32 md:py-28 md:pt-36">
        <Image
          src="/images/hero/hero_blog.svg"
          alt=""
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(102,126,234,0.18),_rgba(255,255,255,0))]" />
        <div className="mx-auto mt-12 max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Product updates that keep your care teams ready
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-200">
            Explore new releases, rollout guidance, and upcoming improvements
            across Kaizen Health. Use the filters below to find the changes that
            matter to your organization.
          </p>

          <div className="mt-10 flex flex-col items-center gap-5 text-sm text-slate-600 dark:text-slate-200">
            <div className="flex max-w-sm items-center gap-3 rounded-2xl bg-white/80 p-4 text-left shadow-sm shadow-primary/10 backdrop-blur dark:bg-white/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                {latestRelease.version}
              </span>
              <div>
                <p className="text-xs uppercase tracking-wide text-primary">
                  Latest release
                </p>
                <p className="font-semibold text-slate-900 dark:text-white">
                  {latestRelease.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-300">
                  Published{" "}
                  {dateFormatter.format(new Date(latestRelease.publishedAt))}
                </p>
              </div>
            </div>

            <Link
              href={`/updates/${latestRelease.slug}`}
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-primaryho"
            >
              Read the latest release
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 pb-32">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            <ReleaseExplorer releases={releases} tags={tags} />
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdatesPage;
