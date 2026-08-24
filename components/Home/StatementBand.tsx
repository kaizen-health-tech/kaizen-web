import Image from "next/image";

import { LEAD, SECTION_X, SHELL } from "./primitives";

/**
 * A single full-bleed statement. The panel is inset by the page gutter, keeps
 * the section's own 16px radius, and carries no vertical padding of its own —
 * the 128px of air above and below comes from its neighbours.
 */
const StatementBand = () => (
  <section aria-label="Why Kaizen exists" className={`bg-lavender ${SECTION_X}`}>
    <div className={SHELL}>
      <div className="relative flex h-[280px] items-center justify-center overflow-hidden rounded-2xl md:h-[367px]">
        <Image
          src="/images/whykaizen/why_we_built_kaizen.jpeg"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-dark-plum/55"
        />
        <p
          className={`${LEAD} relative mx-auto max-w-[680px] text-balance px-6 text-center text-white`}
        >
          Every result, every visit note, every medication — in one place the
          whole family can reach, so the next appointment doesn&rsquo;t start
          from scratch.
        </p>
      </div>
    </div>
  </section>
);

export default StatementBand;
