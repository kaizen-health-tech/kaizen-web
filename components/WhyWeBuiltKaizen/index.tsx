/* -------------------------------------------------------
   Why We Built Kaizen Health Section
------------------------------------------------------- */

import Image from "next/image";

export const WhyWeBuiltKaizen = () => (
  <section className="relative overflow-hidden py-20 lg:py-28 bg-[#F5F6FC]">
    {/* Background squiggle SVG */}
    <Image
      src="/images/whykaizen/why_we_built_bg.svg" /* <- place the supplied SVG here */
      alt=""
      width={600}
      height={200}
      className="pointer-events-none absolute left-0 top-4 w-[100%] max-w-none select-none"
    />
    {/* 2-col layout */}
    <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 md:px-8 lg:flex-row">
      {/* LEFT column */}
      <div className="flex-1 lg:pt-10">
        {/* Pill label */}
        <span className="left-0 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white">
          Why We Built Kaizen Health
        </span>
        <h2 className="my-6 max-w-md text-4xl font-semibold leading-tight text-[#17161D] md:text-5xl">
          We’ve all been there.
        </h2>

        <p className="mb-4 max-w-md text-lg leading-relaxed text-gray-700">
          Families are doing more than ever—managing care, records and
          appointments. But most tools are built for individuals.
        </p>
        <p className="max-w-md text-lg leading-relaxed text-primary">
          Kaizen supports families, because healthcare is rarely a solo journey.
        </p>
      </div>

      {/* RIGHT column */}
      <div className="flex-1 lg:max-w-md">
        {/* top photo */}
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/whykaizen/why_we_built_kaizen.jpeg" /* replace it with the caregiving image */
            alt="Adult daughter holding hands with her mother"
            width={800}
            height={520}
            quality={75}
            sizes="(min-width: 1024px) 448px, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* issues list */}
        <div className="mt-6 pt-6">
          <h3 className="mb-4 text-base font-medium border-b border-black text-gray-800">
            Many families told us they struggle with:
          </h3>

          <ul className="space-y-4 text-xl">
            {[
              "Scattered health records",
              "Feeling overwhelmed at the doctor’s office",
              "Worrying about our loved one’s care",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                {/* circle icon */}
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
                <span className="text-primary">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
