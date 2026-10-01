"use client";

import { useState } from "react";
import Link from "next/link";

import { Reveal } from "@/components/Common/Reveal";
import ContactDetails from "@/components/Contact/ContactDetails";
import ContactForm from "@/components/Contact/ContactForm";
import FAQItem from "@/components/FAQ/FAQItem";
import type { SupportCenterProps } from "@/types/support";

const DEFAULT_TOPIC = "General";

/**
 * Help topics, FAQ, and the support form. Choosing a topic card jumps to the
 * form with the matching topic already selected, so the request reaches the
 * right person without the reader having to map one list onto the other.
 */
export const SupportCenter = ({
  topics,
  faqs,
  formTopics,
}: SupportCenterProps) => {
  const [formTopic, setFormTopic] = useState(DEFAULT_TOPIC);
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    setActiveFaq(activeFaq === id ? 0 : id);
  };

  return (
    <>
      {/* What we can help with */}
      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-c-1235">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet">
              What we can help with
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.02em] text-midnight md:text-5xl md:leading-[1.1]">
              Pick a topic and we&apos;ll route your message.
            </h2>
            <p className="mt-5 text-lg leading-8 text-text-body">
              Including the family member, document, or date involved helps us
              resolve things on the first reply.
            </p>
          </Reveal>

          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <Reveal key={topic.title} as="li" delay={(index % 3) * 80}>
                {/* Two nested rounded boxes: a thin tinted shell around the
                    card, radii offset by the shell padding. */}
                <a
                  href="#contact-support"
                  onClick={() => setFormTopic(topic.formTopic)}
                  className="group block h-full rounded-[2rem] bg-lavender/60 p-1.5 ring-1 ring-midnight/5 transition duration-500 ease-out-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet active:scale-[0.99]"
                >
                  <span className="flex h-full flex-col rounded-[calc(2rem-0.375rem)] bg-white p-7 shadow-card-soft transition-shadow duration-500 ease-out-soft group-hover:shadow-card-hover md:p-8">
                    <span className="text-xl font-semibold tracking-[-0.01em] text-midnight">
                      {topic.title}
                    </span>
                    <span className="mt-3 block text-base leading-7 text-text-body">
                      {topic.description}
                    </span>
                    <span className="mt-auto flex items-center justify-between gap-4 pt-8 text-sm font-semibold text-violet">
                      Message us about this
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lavender text-midnight transition-transform duration-500 ease-out-soft group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:scale-105"
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
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-lavender px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-c-1235 gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20">
          <Reveal className="lg:sticky lg:top-[calc(var(--site-header-height,4.5rem)+2rem)] lg:self-start">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet">
              Common questions
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.02em] text-midnight md:text-5xl md:leading-[1.1]">
              Frequently asked questions
            </h2>
            <p className="mt-6 text-base leading-7 text-text-body">
              Still deciding whether Kaizen Health fits your family? Read{" "}
              <Link
                href="/how-it-works"
                className="font-semibold text-violet underline decoration-violet/30 underline-offset-4 transition-colors duration-500 ease-out-soft hover:decoration-violet"
              >
                how Kaizen works
              </Link>{" "}
              or review our{" "}
              <Link
                href="/docs/privacy"
                className="font-semibold text-violet underline decoration-violet/30 underline-offset-4 transition-colors duration-500 ease-out-soft hover:decoration-violet"
              >
                privacy policy
              </Link>{" "}
              to see how health data is handled.
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="rounded-[2rem] bg-white/50 p-1.5 ring-1 ring-midnight/5"
          >
            <div className="overflow-hidden rounded-[calc(2rem-0.375rem)] bg-white shadow-card-soft">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faqData={{
                    id: index + 1,
                    quest: faq.question,
                    ans: faq.answer,
                    activeFaq,
                    handleFaqToggle,
                  }}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact-support"
        className="scroll-mt-[var(--site-header-height,4.5rem)] px-4 py-24 md:px-8 md:py-32"
      >
        <div className="mx-auto flex max-w-c-1235 flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
          <ContactForm
            heading="Contact support"
            defaultTopic={DEFAULT_TOPIC}
            topics={formTopics}
            topic={formTopic}
            onTopicChange={setFormTopic}
          />
          <ContactDetails />
        </div>
      </section>
    </>
  );
};
