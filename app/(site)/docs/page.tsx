import { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Common/PageHero";
import { PillLink } from "@/components/Common/PillLink";
import { Reveal } from "@/components/Common/Reveal";
import { legalDocs } from "@/data/legalDocs";
import { createPageMetadata } from "@/lib/seo";
import type { LegalDoc } from "@/types/legal";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Health App Legal Policies",
  description:
    "Read Kaizen Health legal policies in one place, including privacy, terms, medical disclaimers, EULA details, and documentation about health score methods.",
  path: "/docs",
});

const ArrowCircle = ({ featured }: { featured: boolean }) => (
  <span
    aria-hidden="true"
    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-out-soft group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105 ${
      featured ? "bg-white/10 text-white" : "bg-lavender text-midnight"
    }`}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  </span>
);

const DocCard = ({ doc, featured }: { doc: LegalDoc; featured: boolean }) => (
  // Two nested rounded boxes: a thin tinted shell around the card itself,
  // with radii offset by the shell padding so the corners stay concentric.
  <Link
    href={doc.href}
    className={`group block h-full rounded-[2rem] p-1.5 ring-1 transition duration-500 ease-out-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet active:scale-[0.99] ${
      featured
        ? "bg-violet/15 ring-violet/25"
        : "bg-lavender/60 ring-midnight/5"
    }`}
  >
    <span
      className={`flex h-full flex-col rounded-[calc(2rem-0.375rem)] p-7 transition-shadow duration-500 ease-out-soft md:p-9 ${
        featured
          ? "bg-midnight text-white shadow-[0_24px_60px_rgba(40,27,85,0.28),inset_0_1px_1px_rgba(255,255,255,0.12)]"
          : "bg-white text-midnight shadow-card-soft group-hover:shadow-card-hover"
      }`}
    >
      <span
        className={`text-xs font-bold uppercase tracking-[0.16em] ${
          featured ? "text-aquamarine" : "text-violet"
        }`}
      >
        {doc.lastUpdated
          ? `Updated ${doc.lastUpdated}`
          : `Effective ${doc.effectiveDate}`}
      </span>
      <span
        className={`mt-4 block font-semibold tracking-[-0.02em] ${
          featured ? "text-3xl md:text-4xl" : "text-2xl"
        }`}
      >
        {doc.title}
      </span>
      <span
        className={`mt-3 block max-w-md text-base leading-7 ${
          featured ? "text-white/70" : "text-text-body"
        }`}
      >
        {doc.summary}
      </span>
      {featured && (
        <span className="mt-6 inline-flex w-max items-center gap-2 rounded-full bg-aquamarine/15 px-3.5 py-1.5 text-sm font-medium text-aquamarine">
          We never sell your health data or use it for advertising.
        </span>
      )}
      <span className="mt-auto flex justify-end pt-8">
        <ArrowCircle featured={featured} />
      </span>
    </span>
  </Link>
);

// Bento spans on the six-column grid: a wide featured card beside a narrow
// one, then three equal cards.
const SPANS = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-2",
];

export default function DocsPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies & Docs"
        align="left"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Policies & Docs", url: "/docs" },
        ]}
        title="Privacy policy, terms, and the rest of the fine print."
        description="Every policy that covers your family's account and health records, in full. Each document shows when it took effect and when it last changed."
      />

      <section className="px-4 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-c-1235">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-6">
            {legalDocs.map((doc, index) => (
              <Reveal
                key={doc.href}
                as="li"
                delay={index * 80}
                className={SPANS[index] ?? "md:col-span-2"}
              >
                <DocCard doc={doc} featured={index === 0} />
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-24 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-lavender p-8 md:flex-row md:items-center md:p-12">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-midnight">
                Questions about a policy?
              </h2>
              <p className="mt-2 max-w-xl text-base leading-7 text-text-body">
                Ask us about your data, request an export, or delete your account
                from the support center.
              </p>
            </div>
            <PillLink href="/support" variant="midnight">
              Visit support
            </PillLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
