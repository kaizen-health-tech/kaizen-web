import { Release } from "@/types/release";
import Link from "next/link";

const dateFormatter = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

const statusCopy: Record<
  NonNullable<Release["status"]>,
  { label: string; className: string }
> = {
  preview: {
    label: "Preview",
    className: "bg-amber-100 text-amber-700",
  },
  beta: {
    label: "Beta",
    className: "bg-blue-100 text-blue-700",
  },
  "general-availability": {
    label: "Generally available",
    className: "bg-emerald-100 text-emerald-700",
  },
};

const impactCopy: Record<
  NonNullable<Release["highlights"][number]["impact"]>,
  { label: string; className: string }
> = {
  new: {
    label: "New",
    className: "bg-emerald-900/10 text-emerald-600",
  },
  improved: {
    label: "Improved",
    className: "bg-blue-900/10 text-blue-600",
  },
  fixed: {
    label: "Fixed",
    className: "bg-purple-900/10 text-purple-600",
  },
};

type ReleaseCardProps = {
  release: Release;
};

const ReleaseCard = ({ release }: ReleaseCardProps) => {
  const formattedDate = dateFormatter.format(new Date(release.publishedAt));
  const status = release.status ? statusCopy[release.status] : undefined;

  return (
    <li className="group flex flex-col gap-6 rounded-2xl border border-black/5 bg-white p-7 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-blacksection dark:shadow-none">
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-200">
        <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold uppercase tracking-wide text-slate-600 dark:bg-slate-900 dark:text-slate-200">
          {release.version}
        </span>
        <span aria-hidden className="text-slate-400">
          •
        </span>
        <span>{formattedDate}</span>
        {release.estimatedRollout && (
          <>
            <span aria-hidden className="text-slate-400">
              •
            </span>
            <span className="text-slate-500 dark:text-slate-300">
              Rollout: {release.estimatedRollout}
            </span>
          </>
        )}
        {status && (
          <>
            <span aria-hidden className="text-slate-400">
              •
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
            >
              {status.label}
            </span>
          </>
        )}
      </div>

      <div className="space-y-3">
        <h3
          id={`${release.slug}-title`}
          className="text-2xl font-semibold leading-tight text-slate-900 dark:text-white"
        >
          <Link
            href={`/updates/${release.slug}`}
            className="transition-colors group-hover:text-primary"
          >
            {release.title}
          </Link>
        </h3>
        <p className="text-base text-slate-600 dark:text-slate-200">
          {release.summary}
        </p>
      </div>

      {release.highlights.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
            Highlights
          </p>
          <ul className="space-y-3">
            {release.highlights.slice(0, 3).map((highlight, index) => {
              const impact = highlight.impact
                ? impactCopy[highlight.impact]
                : undefined;
              return (
                <li key={highlight.title} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-primary/80"></span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-medium text-slate-900 dark:text-white">
                        {highlight.title}
                      </span>
                      {impact && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${impact.className}`}
                        >
                          {impact.label}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-200">
                      {highlight.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
        <div className="flex flex-wrap gap-2">
          {release.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/updates/${release.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primaryho"
          aria-describedby={`${release.slug}-title`}
        >
          Read update
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
      </div>
    </li>
  );
};

export default ReleaseCard;
