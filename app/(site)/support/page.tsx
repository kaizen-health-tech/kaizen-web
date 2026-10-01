import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { PillLink } from "@/components/Common/PillLink";
import { Reveal } from "@/components/Common/Reveal";
import { SupportCenter } from "@/components/Support/SupportCenter";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import type { SupportFaq, SupportTopic } from "@/types/support";

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

const formTopics = [
  "General",
  "Account Maintenance",
  "Account & Data Deletion",
  "Data Request",
  "Billing",
  "Technical Issue",
];

const supportTopics: SupportTopic[] = [
  {
    title: "Account and sign-in",
    formTopic: "Account Maintenance",
    description:
      "Reset a password, update the email address on your account, or recover access when a verification code does not arrive. If you signed up on a phone and now want to use a tablet, the same login works across every device.",
  },
  {
    title: "Documents and records",
    formTopic: "Technical Issue",
    description:
      "Upload lab results, visit summaries, and imaging reports, then tag them so they surface in the right place on the timeline. We can help if a scanned file fails to process or a document appears under the wrong family member.",
  },
  {
    title: "Family groups and sharing",
    formTopic: "General",
    description:
      "Invite a partner, sibling, or caregiver to a family group and set what each person is allowed to see. Permissions are per person and per record, so you control exactly how much a new member can access.",
  },
  {
    title: "Kai, the AI assistant",
    formTopic: "Technical Issue",
    description:
      "Kai answers questions about documents you have uploaded and helps you prepare for appointments. If a Kai answer looks wrong or is missing a record you know you added, tell us which document and we will investigate.",
  },
  {
    title: "Billing and subscriptions",
    formTopic: "Billing",
    description:
      "Subscriptions are billed through the App Store or Google Play. We can help you confirm what plan you are on, but cancellations and refunds are processed by Apple or Google under their own policies.",
  },
  {
    title: "Privacy and data requests",
    formTopic: "Data Request",
    description:
      "Request an export of your data or ask us to delete your account and everything stored with it. Choose Data Request or Account & Data Deletion in the form below so it reaches the right person.",
  },
];

const faqs: SupportFaq[] = [
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
      <section className="relative overflow-hidden px-4 pb-12 pt-[calc(var(--site-header-height,4.5rem)+4rem)] md:px-8 md:pb-16 lg:pt-[calc(var(--site-header-height,4.5rem)+7rem)]">
        <Image
          src="/images/hero/contact-us-hero-bg.png"
          alt=""
          fill
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <Reveal className="relative mx-auto max-w-3xl text-center">
          <Breadcrumbs
            center
            className="text-gray-700"
            items={[
              { name: "Home", url: "/" },
              { name: "Support Center", url: "/support" },
            ]}
          />
          <p className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-violet ring-1 ring-midnight/5">
            Support Center
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-midnight text-balance md:text-6xl">
            We&apos;re here to help.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-body">
            Find answers to the questions families ask us most, or send our
            support team a message and we will get back to you as soon as
            possible. For press, partnership, and general inquiries, use the{" "}
            <Link
              href="/contact"
              className="font-semibold text-violet underline decoration-violet/30 underline-offset-4 transition-colors duration-500 ease-out-soft hover:decoration-violet"
            >
              contact page
            </Link>{" "}
            instead.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <PillLink href="#contact-support">Contact support</PillLink>
            <PillLink href="/docs" variant="soft">
              Policies &amp; docs
            </PillLink>
          </div>
        </Reveal>
      </section>

      <SupportCenter
        topics={supportTopics}
        faqs={faqs}
        formTopics={formTopics}
      />
    </main>
  );
};

export default SupportPage;
