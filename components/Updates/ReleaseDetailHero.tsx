import { Release } from "@/types/release";
import Link from "next/link";

const dateFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

type ReleaseDetailHeroProps = {
  release: Release;
};

const ReleaseDetailHero = ({ release }: ReleaseDetailHeroProps) => {
  const formattedDate = dateFormatter.format(new Date(release.publishedAt));

  return (
    <header className="rounded-3xl bg-gradient-to-br from-primary/10 via-white to-primary/5 p-8 shadow-lg shadow-primary/10 dark:from-primary/10 dark:via-[#0E1015] dark:to-[#10121a] lg:p-12">
      <div className="flex flex-wrap items-center gap-3 text-sm text-primary">
        <span className="rounded-full bg-white/80 px-3 py-1 font-semibold uppercase tracking-wide text-primary shadow-sm dark:bg-black/50">
          Version {release.version}
        </span>
        <span aria-hidden className="text-primary/70">
          •
        </span>
        <span className="text-primary/80">Published {formattedDate}</span>
        {release.estimatedRollout && (
          <>
            <span aria-hidden className="text-primary/70">
              •
            </span>
            <span className="text-primary/80">
              Rollout window: {release.estimatedRollout}
            </span>
          </>
        )}
      </div>

      <div className="mt-6 space-y-4">
        <h1 className="text-3xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-4xl">
          {release.title}
        </h1>
        <p className="max-w-4xl text-lg text-slate-700 dark:text-slate-200">
          {release.summary}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {release.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-primary/20 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-primary">
        <Link
          href="/updates"
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-white px-5 py-2 font-semibold text-primary transition hover:border-primary hover:bg-primary/10 dark:bg-transparent dark:hover:bg-primary/10"
        >
          ← All updates
        </Link>
        {release.resources && release.resources.length > 0 && (
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-primary/70">Helpful links:</span>
            {release.resources.slice(0, 2).map((resource) => (
              <Link
                key={resource.label}
                href={resource.url}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-4 py-1.5 font-semibold text-primary transition hover:border-primary/40 hover:bg-primary/10 dark:bg-transparent dark:hover:bg-primary/10"
              >
                {resource.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default ReleaseDetailHero;
