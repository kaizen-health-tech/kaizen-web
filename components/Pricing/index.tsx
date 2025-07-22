"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="relative mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* Background squiggle SVG */}
          <Image
            src="/images/whykaizen/why_we_built_bg.svg" /* <- place the supplied SVG here */
            alt=""
            width={1600}
            height={1200}
            priority
            className="pointer-events-none absolute w-[60%] max-w-none select-none
                 lg:left-10 lg:top-10"
          />
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Flexible plans for every stage of care`,
                subtitle: ``,
                description: `Start for free, grow as your needs do. Kaizen supports you every step of the way.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/*FREE PLAN*/}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full md:w-[95%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Starter
              </h3>
              <div className="mb-6 flex items-baseline">
                <span className="text-5xl font-extrabold text-black">$0</span>
                <span className="ml-1 text-xl font-medium text-gray-700">
                  / month
                </span>
              </div>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span> 1 GB health record
                    storage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span> 5 document summaries
                    / month
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span> 10 AI insights /
                    month
                  </li>
                  <li className="flex items-start gap-2 text-gray-400">
                    ✕ EHR integration
                  </li>
                </ul>
                <a href="#cta">
                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-md border border-primary bg-primary/10 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
                    Start Free Trial
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12l5-5-5-5" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border-2 border-primary bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full md:w-[95%] lg:w-1/3 xl:p-12.5">
              <div className="absolute left-1/2 -top-4 -translate-x-1/2 rounded-b-md bg-primary px-4 py-1.5 text-xs font-semibold uppercase text-white">
                Duo Event
              </div>
              <h3 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Duo
              </h3>
              <div className="mb-6 flex items-baseline">
                <span className="mr-2 text-base font-medium line-through text-gray-500">
                  $5
                </span>
                <span className="text-5xl font-extrabold">$0</span>
                <span className="ml-1 text-xl font-medium text-gray-700">
                  / month
                </span>
              </div>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span> 5 GB health record
                    storage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span> Unlimited AI
                    document analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span> Unlimited AI
                    insights
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span> EHR integration
                    (coming soon)
                  </li>
                </ul>
                <a href="#cta">
                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90">
                    Start Free Trial
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12l5-5-5-5" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full md:w-[95%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Family
              </h3>
              <div className="mb-6 flex items-baseline">
                <span className="text-5xl font-extrabold text-black">$10</span>
                <span className="ml-1 text-xl font-medium text-gray-700">
                  / month
                </span>
              </div>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul className="space-y-4 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span> 100 GB health record
                    storage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span> Everything in Duo,
                    plus
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>Access to advanced AI
                    models
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>Integration to EHR's
                    and providers
                  </li>
                </ul>
                <a href="#cta">
                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
                    Start Free Trial
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12l5-5-5-5" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
