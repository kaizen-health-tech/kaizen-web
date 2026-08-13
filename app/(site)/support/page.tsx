import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/Contact/ContactForm";
import ContactDetails from "@/components/Contact/ContactDetails";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Support Center",
  description:
    "Get help with your Kaizen Health account, uploaded documents, family groups, billing, and privacy requests, or send our support team a message directly.",
  path: "/support",
  image: "/images/open-graph/support.png",
  keywords: [
    "Kaizen Health support",
    "family health app help",
    "HIPAA secure healthcare platform",
    "contact Kaizen Health",
    "health record management assistance",
  ],
});

const supportTopics = [
  {
    title: "Account and sign-in",
    description:
      "Reset a password, update the email address on your account, or recover access when a verification code does not arrive. If you signed up on a phone and now want to use a tablet, the same login works across every device.",
  },
  {
    title: "Documents and records",
    description:
      "Upload lab results, visit summaries, and imaging reports, then tag them so they surface in the right place on the timeline. We can help if a scanned file fails to process or a document appears under the wrong family member.",
  },
  {
    title: "Family groups and sharing",
    description:
      "Invite a partner, sibling, or caregiver to a family group and set what each person is allowed to see. Permissions are per person and per record, so you control exactly how much a new member can access.",
  },
  {
    title: "Kai, the AI assistant",
    description:
      "Kai answers questions about documents you have uploaded and helps you prepare for appointments. If a Kai answer looks wrong or is missing a record you know you added, tell us which document and we will investigate.",
  },
  {
    title: "Billing and subscriptions",
    description:
      "Subscriptions are billed through the App Store or Google Play. We can help you confirm what plan you are on, but cancellations and refunds are processed by Apple or Google under their own policies.",
  },
  {
    title: "Privacy and data requests",
    description:
      "Request an export of your data or ask us to delete your account and everything stored with it. Choose Data Request or Account & Data Deletion in the form below so it reaches the right person.",
  },
];

const faqs = [
  {
    question: "How do I delete my Kaizen Health account and data?",
    answer:
      "Send a message using the form on this page and select Account & Data Deletion as the topic. We remove your account, uploaded documents, and associated health records. Confirm the request from the email address on the account so we can verify it belongs to you.",
  },
  {
    question: "Is my family health information secure?",
    answer:
      "Records are encrypted, access is permission-based, and every family group member only sees what you have explicitly shared with them. Our full data handling practices are described in the Kaizen Health privacy policy.",
  },
  {
    question: "Why is my uploaded document not showing up?",
    answer:
      "Large scans and photos take a few moments to process before they appear on the timeline. If a document is still missing after a few minutes, or it was filed under the wrong family member, contact support with the file name and upload date.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Kaizen Health subscriptions are managed by the App Store or Google Play, so cancellations happen in your Apple or Google account settings rather than in the app. Contact us if you need help confirming which plan is active.",
  },
  {
    question: "Can I add a caregiver who is not a family member?",
    answer:
      "Yes. Anyone you invite to a family group can be given a narrow set of permissions, so a professional caregiver can see medications and appointments without gaining access to your full record history.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const supportPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Kaizen Health Support Center",
  url: absoluteUrl("/support"),
  description:
    "Help with Kaizen Health accounts, documents, family groups, billing, and privacy requests.",
};

const SupportPage = () => {
  return (
    <main id="support">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(supportPageSchema) }}
      />

      {/* Hero */}
      <section className="relative py-24">
        <Image
          src="/images/hero/contact-us-hero-bg.png"
          alt="Decorative background gradient"
          fill
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="relative mx-auto mt-20 max-w-4xl px-4 text-center">
          <Breadcrumbs
            center
            className="text-gray-700"
            items={[
              { name: "Home", url: "/" },
              { name: "Support Center", url: "/support" },
            ]}
          />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Support Center
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-black md:text-6xl">
            We&apos;re Here to Help
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-800">
            Find answers to the questions families ask us most, or send our
            support team a message and we will get back to you as soon as
            possible. For press, partnership, and general inquiries, use the{" "}
            <Link href="/contact" className="font-semibold text-primary">
              contact page
            </Link>{" "}
            instead.
          </p>
        </div>
      </section>

      {/* What we can help with */}
      <section className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-20">
        <h2 className="text-3xl font-semibold text-black dark:text-white">
          What we can help with
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-700 dark:text-gray-300">
          Most questions fall into one of the areas below. Including the family
          member, document, or date involved helps us resolve things on the
          first reply.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {supportTopics.map((topic) => (
            <article
              key={topic.title}
              className="rounded-lg border border-stroke bg-white p-7.5 shadow-solid-8 dark:border-strokedark dark:bg-blacksection"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {topic.title}
              </h3>
              <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
                {topic.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-20 max-w-c-1390 px-4 md:px-8 xl:px-20">
        <h2 className="text-3xl font-semibold text-black dark:text-white">
          Frequently asked questions
        </h2>

        <div className="mt-10 space-y-8">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="border-b border-stroke pb-8 dark:border-strokedark"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {faq.question}
              </h3>
              <p className="mt-3 max-w-4xl text-base text-gray-700 dark:text-gray-300">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-base text-gray-700 dark:text-gray-300">
          Still deciding whether Kaizen Health fits your family? Read{" "}
          <Link href="/how-it-works" className="font-semibold text-primary">
            how Kaizen works
          </Link>{" "}
          for a walkthrough of records, family groups, and appointment prep, or
          review our{" "}
          <Link href="/docs/privacy" className="font-semibold text-primary">
            privacy policy
          </Link>{" "}
          to see how health data is handled.
        </p>
      </section>

      {/* Contact form */}
      <section className="px-4 md:px-8 2xl:px-0 mb-20">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <ContactForm
              heading="Contact support"
              defaultTopic="General"
              topics={[
                "General",
                "Account Maintenance",
                "Data Deletion",
                "Data Request",
                "Billing",
                "Technical Issue",
              ]}
            />
            <ContactDetails />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
