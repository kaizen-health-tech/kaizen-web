import Link from "next/link";

import { absoluteUrl } from "@/lib/seo";
import type { ToolPageProps } from "@/types/careTools";
import "./care-tools.css";

export const CareToolPage = ({
  title,
  description,
  path,
  children,
  steps,
  faqs,
}: ToolPageProps) => (
  <main className="care-tool-page bg-lavender px-4 pb-20 pt-32 text-midnight dark:bg-black dark:text-white sm:px-6 lg:pt-40">
    <div className="mx-auto max-w-6xl">
      <div className="tool-page-intro mb-10 max-w-3xl">
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
          <Link href="/tools" className="underline underline-offset-4">
            Free caregiver tools
          </Link>
        </nav>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary dark:text-light-lilac">
          Free tool · No signup
        </p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-7 text-text-body dark:text-gray-300">
          {description}
        </p>
        <p className="mt-4 text-sm leading-6 text-text-body dark:text-gray-300">
          Your entries stay in this page's memory. Copy or print before leaving;
          refreshing clears your work. Use only details you want to share.
        </p>
        <noscript>
          <p className="mt-4 font-semibold">
            Enable JavaScript for the live builder. The blank worksheet and
            guidance below are still readable.
          </p>
        </noscript>
      </div>
      {children}
      <section className="tool-support mt-16 grid gap-10 border-t border-cloud pt-10 dark:border-white/20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold">How to use this template</h2>
          <ol className="mt-5 list-decimal space-y-4 pl-5 leading-7 text-text-body dark:text-gray-300">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Common questions</h2>
          <div className="mt-5 space-y-6">
            {faqs.map(({ question, answer }) => (
              <div key={question}>
                <h3 className="text-lg font-semibold">{question}</h3>
                <p className="mt-2 leading-7 text-text-body dark:text-gray-300">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: title,
          url: absoluteUrl(path),
          applicationCategory: "HealthApplication",
          operatingSystem: "Any",
          isAccessibleForFree: true,
          description,
        }).replace(/</g, "\\u003c"),
      }}
    />
  </main>
);
