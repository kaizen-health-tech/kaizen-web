import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
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
      <section className="relative py-24">
        <div className="relative mx-auto mt-20 max-w-3xl px-4 text-center">
          <Breadcrumbs
            center
            items={[
              { name: "Home", url: "/" },
              { name: "Thank You", url: "/thank-you" },
            ]}
          />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Message sent
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-black dark:text-white md:text-6xl">
            Thanks — we&apos;ve got your message
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            A member of the Kaizen Health team will reply to the email address
            you provided. In the meantime, here are a few places to look
            around.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
          >
            Return to Home
          </Link>
        </div>
      </section>

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
