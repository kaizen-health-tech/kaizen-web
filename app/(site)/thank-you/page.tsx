import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Common/PageHero";
import { PillLink } from "@/components/Common/PillLink";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Thank You",
  description:
    "Thanks for reaching out to Kaizen Health. Our team will reply to your message soon, and these links can help while you wait.",
  path: "/thank-you",
  noIndex: true,
});

const nextSteps = [
  {
    title: "Browse the support center",
    description:
      "Find answers to the questions families ask us most about accounts, documents, and family groups.",
    href: "/support",
    linkLabel: "Visit support",
  },
  {
    title: "See how Kaizen works",
    description:
      "A quick walkthrough of how families organize records and share updates with Kai.",
    href: "/how-it-works",
    linkLabel: "How it works",
  },
  {
    title: "Read the family health blog",
    description:
      "Practical guides on caregiving, records, and preparing for appointments.",
    href: "/blog",
    linkLabel: "Read the blog",
  },
];

const ThankYouPage = () => {
  return (
    <main id="thank-you">
      <PageHero
        eyebrow="Message sent"
        title="Thanks — we&apos;ve got your message"
        description="A member of the Kaizen Health team will reply to the email address you provided. In the meantime, here are a few places to look around."
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Thank You", url: "/thank-you" },
        ]}
        actions={<PillLink href="/">Return to Home</PillLink>}
      />

      <section className="mx-auto max-w-c-1390 px-4 pb-24 md:px-8 xl:px-20">
        <div className="grid gap-8 sm:grid-cols-3">
          {nextSteps.map((step) => (
            <article
              key={step.href}
              className="flex flex-col rounded-lg border border-stroke bg-white p-7.5 shadow-solid-8 dark:border-strokedark dark:bg-blacksection"
            >
              <h2 className="text-xl font-semibold text-black dark:text-white">
                {step.title}
              </h2>
              <p className="mt-3 flex-1 text-base text-gray-700 dark:text-gray-300">
                {step.description}
              </p>
              <Link
                href={step.href}
                className="mt-5 font-semibold text-primary hover:underline"
              >
                {step.linkLabel} &rarr;
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ThankYouPage;
