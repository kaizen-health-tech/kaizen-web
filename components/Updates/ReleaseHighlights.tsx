import { Reveal } from "@/components/Common/Reveal";
import {
  IMPACT_STYLES,
  groupHighlights,
} from "@/components/Updates/releaseImpact";

import type { ReleaseCardProps } from "@/types/release";

/**
 * "What changed": the release's highlights grouped into new features,
 * improvements and fixes, so a visitor can skip straight to the kind of
 * change they care about.
 */
const ReleaseHighlights = ({ release }: ReleaseCardProps) => {
  const groups = groupHighlights(release);
  if (groups.length === 0) return null;

  return (
    <section aria-labelledby="what-changed">
      <Reveal>
        <h2
          id="what-changed"
          className="text-3xl font-semibold tracking-[-0.02em] text-midnight md:text-4xl"
        >
          What changed
        </h2>
      </Reveal>

      <div className="mt-10 space-y-14">
        {groups.map((group) => {
          const style =
            group.impact === "other" ? undefined : IMPACT_STYLES[group.impact];
          const headingId = `changes-${group.impact}`;

          return (
            <div key={group.impact} aria-labelledby={headingId} role="group">
              <Reveal className="flex items-center gap-3">
                <h3
                  id={headingId}
                  className="text-lg font-semibold text-midnight"
                >
                  {style ? style.groupLabel : "Other changes"}
                </h3>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-sm font-semibold ${
                    style ? style.chip : "bg-cloud text-arsenic"
                  }`}
                >
                  {group.items.length}
                </span>
              </Reveal>

              <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                {group.items.map((highlight, index) => (
                  <Reveal
                    key={highlight.title}
                    as="li"
                    delay={Math.min(index, 3) * 60}
                    className="rounded-[1.75rem] bg-lavender/60 p-1.5 ring-1 ring-midnight/5"
                  >
                    <div className="flex h-full gap-4 rounded-[calc(1.75rem-0.375rem)] bg-white p-6 shadow-card-soft">
                      <span
                        aria-hidden="true"
                        className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          style ? style.dot : "bg-steel"
                        }`}
                      />
                      <div>
                        <p className="text-lg font-semibold leading-snug text-midnight">
                          {highlight.title}
                        </p>
                        <p className="mt-2 text-base leading-7 text-text-body">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReleaseHighlights;
