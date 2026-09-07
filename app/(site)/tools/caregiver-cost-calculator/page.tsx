import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import CTA from "@/components/CTA";
import CaregiverCostCalculator from "@/components/Tools/CaregiverCostCalculator";
import CaregiverCostEmbedSnippet from "@/components/Tools/CaregiverCostEmbedSnippet";
import { buildCaregiverCalculatorEmbed } from "@/lib/embeds";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Caregiver Cost Calculator",
  description:
    "Estimate how reduced work hours for family caregiving may affect your lifetime wages, employer match, and retirement savings with this free calculator.",
  path: "/tools/caregiver-cost-calculator",
  // A tool needs a preview that shows the tool. The site-wide default is the
  // Kaizen logo, which tells nobody scrolling LinkedIn what this link is.
  image: "/api/og/caregiver-cost-calculator",
  keywords: [
    "caregiver cost calculator",
    "caregiving lost wages calculator",
    "caregiver retirement calculator",
    "cost of leaving work to care for parent",
  ],
});

const embedSnippet = buildCaregiverCalculatorEmbed();

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Caregiver Cost Calculator",
  url: absoluteUrl("/tools/caregiver-cost-calculator"),
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  description:
    "A free calculator that estimates wages and retirement savings lost when family caregiving reduces paid work hours.",
  provider: {
    "@type": "Organization",
    name: "Kaizen Health",
    url: absoluteUrl("/"),
  },
};

const insights = [
  {
    number: "63M",
    text: "Americans provided care to an adult or child with a complex condition in 2025.",
  },
  {
    number: "50%",
    text: "of employed caregivers reported at least one work disruption.",
  },
  {
    number: "35 years",
    text: "of earnings are used in the Social Security retirement benefit calculation.",
  },
];

export default function CaregiverCostCalculatorPage() {
  return (
    <main className="overflow-hidden bg-[#FBFBFD] dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />

      <section className="relative px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:px-8">
        <div className="absolute inset-x-0 top-0 -z-0 h-[620px] bg-[radial-gradient(circle_at_15%_20%,rgba(102,230,181,0.28),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(110,64,243,0.20),transparent_30%),linear-gradient(180deg,#F7F4FF_0%,#FBFBFD_78%)] dark:bg-[radial-gradient(circle_at_15%_20%,rgba(102,230,181,0.10),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(110,64,243,0.20),transparent_30%),linear-gradient(180deg,#201839_0%,#000_78%)]" />
        <div className="relative mx-auto max-w-c-1235">
          <div className="mx-auto max-w-4xl text-center">
            <Breadcrumbs
              center
              items={[
                { name: "Home", url: "/" },
                {
                  name: "Caregiver cost calculator",
                  url: "/tools/caregiver-cost-calculator",
                },
              ]}
            />
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-violet">
              Free caregiver planning tool
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-midnight dark:text-white sm:text-6xl lg:text-7xl">
              See the career cost of care before it compounds.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-body dark:text-space sm:text-xl">
              A few reduced work hours can add up to years of lost pay and
              retirement growth. Estimate the cost, then bring the number to
              your family.
            </p>
            <p className="mt-4 text-sm font-medium text-graphite dark:text-space">
              Free to use. Your inputs stay in your browser.
            </p>
          </div>

          <div className="mt-12">
            <CaregiverCostCalculator />
          </div>

          <p className="mx-auto mt-5 max-w-4xl text-center text-xs leading-5 text-graphite dark:text-space">
            This is an educational estimate, not financial advice. It does not
            model taxes, raises, Social Security benefits, pensions, health
            insurance, or career re-entry costs. Investment returns are not
            guaranteed.
          </p>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="why-this-matters"
      >
        <div className="mx-auto max-w-c-1154">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet">
              The cost behind the care
            </p>
            <h2
              id="why-this-matters"
              className="mt-3 text-3xl font-semibold tracking-tight text-midnight dark:text-white sm:text-5xl"
            >
              The receipts are only the visible part.
            </h2>
            <p className="mt-5 text-lg leading-8 text-text-body dark:text-space">
              Cutting your schedule can shrink your pay, break up your work
              history, and leave retirement contributions with less time to
              grow.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {insights.map((insight) => (
              <article
                key={insight.number}
                className="rounded-3xl border border-cloud bg-white p-7 shadow-card-soft dark:border-white/10 dark:bg-dark-plum"
              >
                <p className="text-3xl font-semibold text-violet">
                  {insight.number}
                </p>
                <p className="mt-3 leading-6 text-text-body dark:text-space">
                  {insight.text}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-graphite dark:text-space">
            Sources:{" "}
            <Link
              className="font-semibold text-violet underline decoration-violet/30 underline-offset-4"
              href="https://www.aarp.org/pri/topics/ltss/family-caregiving/caregiving-in-the-us-2025/"
              target="_blank"
            >
              AARP and National Alliance for Caregiving, Caregiving in the U.S.
              2025
            </Link>
            ;{" "}
            <Link
              className="font-semibold text-violet underline decoration-violet/30 underline-offset-4"
              href="https://www.ssa.gov/oact/progdata/retirebenefit1.html"
              target="_blank"
            >
              Social Security Administration
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-c-1154 gap-10 rounded-[32px] bg-lavender p-7 dark:bg-dark-plum sm:p-10 lg:grid-cols-2 lg:p-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet">
              How the estimate works
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-midnight dark:text-white">
              How we calculate your estimate
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-text-body dark:text-space">
            <p>
              <strong className="text-midnight dark:text-white">
                Lost wages
              </strong>{" "}
              use your salary divided across a 40-hour, 52-week work year,
              multiplied by the paid work hours reduced and the caregiving
              duration.
            </p>
            <p>
              <strong className="text-midnight dark:text-white">
                Missed retirement contributions
              </strong>{" "}
              apply your contribution rate and employer match to that reduced
              pay.
            </p>
            <p>
              <strong className="text-midnight dark:text-white">
                Retirement value
              </strong>{" "}
              compounds each missed monthly contribution until retirement. If
              caregiving extends past retirement, only pre-retirement months are
              counted.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet">
            Use the estimate
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-midnight dark:text-white sm:text-4xl">
            Bring the number to your family.
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-body dark:text-space">
            Compare the estimate with part-time paid help, flexible work, family
            contributions, and benefits available to the person receiving care.
            It gives your family a concrete way to see how much one caregiver
            would otherwise absorb.
          </p>
          <Link
            href="/blog/caregiving/retirement-cost-of-caregiving"
            className="mt-7 inline-flex items-center rounded-full border border-violet px-6 py-3 font-semibold text-violet transition hover:bg-violet hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet/20"
          >
            Read the full caregiving cost guide
          </Link>
        </div>
      </section>

      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="embed-calculator"
      >
        <div className="mx-auto max-w-c-1154">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet">
              For publishers and advisors
            </p>
            <h2
              id="embed-calculator"
              className="mt-3 text-3xl font-semibold tracking-tight text-midnight dark:text-white sm:text-5xl"
            >
              Put this calculator on your own site.
            </h2>
            <p className="mt-5 text-lg leading-8 text-text-body dark:text-space">
              Free to embed, no account and no attribution fee. If you write for
              caregivers, advise families on retirement, or run a caregiver
              support program, your readers can run their numbers without
              leaving your page.
            </p>
          </div>

          <CaregiverCostEmbedSnippet snippet={embedSnippet} />

          <p className="mt-4 max-w-3xl text-sm leading-6 text-graphite dark:text-space">
            Paste the whole block. The stylesheet sizes the frame on its own, so
            the calculator still displays in full if your CMS strips the
            script — the script only trims the leftover space to an exact fit.
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}
