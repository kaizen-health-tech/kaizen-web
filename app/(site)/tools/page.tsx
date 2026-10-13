import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Free Caregiver Tools",
  description:
    "Free caregiver tools for family care: create doctor visit summaries, track medical records requests, and estimate caregiving costs. No signup needed to start.",
  path: "/tools",
});

const tools = [
  {
    title: "Doctor visit summary",
    path: "/tools/doctor-visit-summary",
    task: "Before and after an appointment",
    description:
      "Record what the clinician said, medication changes, and who will handle each next step. Copy or print a clear summary for your family.",
    action: "Create a visit summary",
  },
  {
    title: "Medical records request tracker",
    path: "/tools/medical-records-request-tracker",
    task: "When gathering records",
    description:
      "Keep providers, requested documents, follow-up dates, and missing items in one checklist. See which requests still need attention.",
    action: "Track records requests",
  },
  {
    title: "Caregiver cost calculator",
    path: "/tools/caregiver-cost-calculator",
    task: "When planning the cost of care",
    description:
      "Estimate the wages and retirement savings you could lose when caregiving reduces paid work. Bring the estimate to a family conversation.",
    action: "Estimate caregiving costs",
  },
];

export default function FreeCaregiverToolsPage() {
  return (
    <main className="bg-lavender px-4 pb-24 pt-32 text-midnight dark:bg-black dark:text-white sm:px-6 lg:pt-40">
      <div className="mx-auto max-w-5xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-6 text-sm text-text-body dark:text-gray-300"
        >
          <Link href="/" className="underline underline-offset-4">
            Home
          </Link>
          <span aria-hidden="true" className="mx-3">
            /
          </span>
          Free caregiver tools
        </nav>
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary dark:text-light-lilac">
            For family caregivers · No signup
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Free caregiver tools
          </h1>
          <p className="mt-5 text-lg leading-8 text-text-body dark:text-gray-300">
            Prepare for an appointment, gather missing records, or plan the cost
            of care. Choose the task you need help with and start right away.
          </p>
        </div>
        <section
          aria-label="All free caregiver tools"
          className="mt-12 space-y-4"
        >
          {tools.map((tool) => (
            <Link
              key={tool.path}
              href={tool.path}
              className="group block rounded-2xl border border-cloud bg-white p-6 transition-colors hover:border-violet focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet dark:border-white/20 dark:bg-dark-plum dark:hover:border-light-lilac sm:p-8"
            >
              <article className="grid gap-4 md:grid-cols-[1fr_15rem] md:items-center md:gap-8">
                <div>
                  <p className="text-sm font-semibold text-primary dark:text-light-lilac">
                    {tool.task}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">{tool.title}</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-text-body dark:text-gray-300">
                    {tool.description}
                  </p>
                </div>
                <span className="flex items-center gap-3 font-semibold text-primary dark:text-light-lilac md:justify-end">
                  {tool.action}
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </article>
            </Link>
          ))}
        </section>
        <p className="mt-8 max-w-2xl text-sm leading-6 text-text-body dark:text-gray-300">
          These tools help you organize information and estimates. They do not
          replace your care team's advice or a provider's records request
          process.
        </p>
      </div>
    </main>
  );
}
