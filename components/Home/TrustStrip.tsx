import {
  AdjustmentsHorizontalIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import { BODY, SECTION_X, SHELL } from "./primitives";

const MARKS = [
  { icon: ShieldCheckIcon, label: "HIPAA compliant" },
  { icon: LockClosedIcon, label: "Encrypted by default" },
  { icon: AdjustmentsHorizontalIcon, label: "You control every share" },
  { icon: SparklesIcon, label: "Never used to train AI" },
];

/**
 * The credibility strip under the hero: one quiet lead-in line, then a row of
 * monochrome marks spread across the full column.
 */
const TrustStrip = () => (
  <section
    aria-label="How Kaizen Health protects your data"
    className={`bg-lavender pb-16 pt-24 md:pt-32 ${SECTION_X}`}
  >
    <div className={SHELL}>
      <p className={`${BODY} text-center text-dark-plum`}>Private by design</p>

      <ul className="mx-auto mt-12 flex max-w-[1000px] flex-wrap items-center justify-center gap-x-10 gap-y-6 md:mt-16 md:justify-between md:gap-x-6">
        {MARKS.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-2.5 text-dark-plum/80"
          >
            <Icon aria-hidden="true" className="h-6 w-6 shrink-0" />
            <span className="text-[15px] font-semibold leading-5 tracking-[-0.01em] md:text-base">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TrustStrip;
