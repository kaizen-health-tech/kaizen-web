import { Release } from "@/types/release";

const impactCopy: Record<
  NonNullable<Release["highlights"][number]["impact"]>,
  { label: string; className: string }
> = {
  new: { label: "New", className: "bg-emerald-100 text-emerald-700" },
  improved: { label: "Improved", className: "bg-blue-100 text-blue-700" },
  fixed: { label: "Fixed", className: "bg-purple-100 text-purple-700" },
};

type ReleaseHighlightsProps = {
  release: Release;
};

const ReleaseHighlights = ({ release }: ReleaseHighlightsProps) => {
  if (!release.highlights.length) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-black/5 bg-white p-8 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-blacksection dark:shadow-none lg:p-10">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
        What&apos;s in this release
      </h2>
      <p className="mt-2 text-base text-slate-600 dark:text-slate-200">
        The key moments, improvements, and fixes you can expect after updating.
      </p>

      <dl className="mt-6 grid gap-6 md:grid-cols-2">
        {release.highlights.map((highlight) => {
          const impact = highlight.impact
            ? impactCopy[highlight.impact]
            : undefined;
          return (
            <div
              key={highlight.title}
              className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6 dark:border-white/10 dark:bg-[#12151f]"
            >
              <dt className="flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
                <span>{highlight.title}</span>
                {impact && (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${impact.className}`}
                  >
                    {impact.label}
                  </span>
                )}
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {highlight.description}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
};

export default ReleaseHighlights;
