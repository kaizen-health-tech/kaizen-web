import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "About Kaizen Health",
  description:
    "Learn how Kaizen Health was built for caregivers and families to simplify health collaboration with secure records, shared timelines, and practical AI support.",
  path: "/about",
});

const milestones = [
  {
    title: "Built for real families",
    description:
      "We designed Kaizen Health after hearing from parents and adult children who were juggling medications, labs, and specialist visits across multiple apps and email threads.",
  },
  {
    title: "Privacy-first architecture",
    description:
      "End-to-end encryption, audit trails, and granular permissions give every family member or caregiver the confidence to participate without compromising security.",
  },
  {
    title: "Designed with clinicians",
    description:
      "Health coaches and physicians advised on our summaries, helping us highlight the exact insights care teams ask for during appointments.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-16 px-4 py-24 sm:px-6 lg:px-8">
      <header className="space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          About Kaizen Health
        </p>
        <h1 className="text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
          We exist to simplify care collaboration for every family.
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-200">
          From pediatric specialists to aging parents, healthcare is a team
          sport. Kaizen Health brings everyone together with a single source of
          truth for records, care plans, and ongoing communication.
        </p>
      </header>

      <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 sm:grid-cols-3">
        {milestones.map((milestone) => (
          <article key={milestone.title} className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {milestone.title}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-200">
              {milestone.description}
            </p>
          </article>
        ))}
      </section>

      <section className="space-y-6 rounded-3xl border border-primary/10 bg-primary/5 p-8 dark:border-primary/30 dark:bg-primary/10">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Our promise
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-100">
          We believe families deserve the same level of coordination as any
          world-class care team. Every feature we ship—secure file sharing,
          smart summaries, role-based permissions—is evaluated through that
          lens.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/team"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primaryho"
          >
            Meet the team
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center rounded-full border border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary/10"
          >
            See how it works
          </Link>
        </div>
      </section>
    </main>
  );
}
