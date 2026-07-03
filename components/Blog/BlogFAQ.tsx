"use client";

import { useState } from "react";
import FAQItem from "@/components/FAQ/FAQItem";
import { FAQPageSchema } from "@/components/Schema";

export interface BlogFAQItem {
  question: string;
  answer: string;
}

interface BlogFAQProps {
  faqs: BlogFAQItem[];
}

const BlogFAQ = ({ faqs }: BlogFAQProps) => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    setActiveFaq((current) => (current === id ? 0 : id));
  };

  return (
    <div className="mt-14">
      <FAQPageSchema
        faqs={faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))}
      />
      <h2 className="mb-5 text-2xl font-semibold text-black dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="rounded-lg border border-stroke bg-white shadow-solid-8 dark:border-strokedark dark:bg-blacksection">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
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
    </div>
  );
};

export default BlogFAQ;
