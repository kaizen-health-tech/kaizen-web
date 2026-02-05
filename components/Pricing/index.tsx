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
            loading={"lazy"}
            className="pointer-events-none absolute md:w-[60%] w-full max-w-none select-none
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
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-10">
            {/*FREE PLAN*/}
            <div className="animate_top group relative w-full rounded-3xl border-2 border-[#E6E6EE] bg-white px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:w-[95%] lg:w-1/3 xl:px-10 xl:py-12">
              <h3 className="mb-3 text-2xl font-semibold uppercase tracking-wide text-[#6B6F7A]">
                Free - Starter
              </h3>
              <p className="mb-6 text-sm text-[#5D6270]">
                Who it's for: First-time users, small families, skeptics
              </p>
              <div className="mb-6 flex items-baseline">
                <span className="text-3xl font-semibold text-[#6B6F7A]">$0</span>
              </div>

              <a href="#cta">
                <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F2EEFF] px-6 py-3 text-sm font-semibold text-[#4C2A90] transition-colors hover:bg-[#E8E0FF]">
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

              <div className="mt-7">
                <p className="mb-4 text-sm font-semibold text-[#2B2F3A]">
                  Limits that make sense:
                </p>
                <ul className="space-y-4 text-left text-sm text-[#2B2F3A]">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> 1 care group
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Up to 6 members
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Basic health
                    score visibility
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Limited summaries
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> No long-term
                    memory
                  </li>
                  <li className="flex items-start gap-2 text-[#A0A4B1]">
                    <span className="text-[#C7CBD6]">✕</span> No EHR sync
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative w-full rounded-3xl border-2 border-[#4C2A90] bg-white px-8 py-10 shadow-[0_18px_45px_rgba(76,42,144,0.22)] md:w-[95%] lg:w-1/3 xl:px-10 xl:py-12">
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-2xl font-semibold uppercase tracking-wide text-[#4C2A90]">
                  Family - Plus
                </h3>
                <span className="rounded-full bg-[#EFE8FF] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#4C2A90]">
                  Recommended
                </span>
              </div>
              <p className="mb-4 text-sm text-[#5D6270]">
                Who it's for: Couples, parents + aging parents, caretakers
              </p>
              <div className="mb-1 flex items-baseline text-[#5D6270]">
                <span className="text-3xl font-semibold text-[#6B6F7A]">
                  $9.99
                </span>
                <span className="ml-2 text-sm">
                  / month
                </span>
              </div>
              <p className="text-sm text-[#5D6270]">or $100 / year</p>

              <a href="#cta">
                <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#4C2A90] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3E2378]">
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

              <div className="mt-7">
                <p className="mb-4 text-sm font-semibold text-[#2B2F3A]">
                  Limits:
                </p>
                <ul className="space-y-4 text-left text-sm text-[#2B2F3A]">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Up to 5 care
                    groups
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Up to 6 members
                    per group
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Everyone gets
                    full features
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Flexible
                    document summaries
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> 30-day memory
                    window
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Multiple EHR
                    connections
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Expanded storage
                    (10GB each)
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative w-full rounded-3xl border-2 border-[#E6E6EE] bg-white px-8 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:w-[95%] lg:w-1/3 xl:px-10 xl:py-12">
              <h3 className="mb-3 text-2xl font-semibold uppercase tracking-wide text-[#6B6F7A]">
                Family - Pro
              </h3>
              <p className="mb-4 text-sm text-[#5D6270]">
                Who it's for: Large families, caregivers, chronic care
                households
              </p>
              <div className="mb-1 flex items-baseline text-[#5D6270]">
                <span className="text-3xl font-semibold text-[#6B6F7A]">
                  $14.99
                </span>
                <span className="ml-2 text-sm">/ month</span>
              </div>
              <p className="text-sm text-[#5D6270]">or $150 / year</p>

              <a href="#cta">
                <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F2EEFF] px-6 py-3 text-sm font-semibold text-[#4C2A90] transition-colors hover:bg-[#E8E0FF]">
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

              <div className="mt-7">
                <p className="mb-4 text-sm font-semibold text-[#2B2F3A]">
                  Limits:
                </p>
                <ul className="space-y-4 text-left text-sm text-[#2B2F3A]">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Up to 10 care
                    groups
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Up to 10 members
                    per group
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Extended memory
                    (90-180 days)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Trend analysis
                    and alerts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Priority
                    processing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> Higher storage
                    (120 GB total)
                  </li>
                </ul>
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
