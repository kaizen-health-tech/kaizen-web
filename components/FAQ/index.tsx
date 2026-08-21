"use client";
import { useState } from "react";
import FAQItem from "./FAQItem";
import faqData from "./faqData";
import { FAQPageSchema } from "@/components/Schema";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id);
  };

  // Transform FAQ data for schema
  const schemaFaqs = faqData.map((faq) => ({
    question: faq.quest,
    answer: faq.ans,
  }));

  return (
    <>
      <FAQPageSchema faqs={schemaFaqs} />
      {/* <!-- ===== FAQ Start ===== --> */}
      <section className="relative overflow-hidden bg-[#E8EDF3] py-20 md:py-28">
        <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#CAC5E3]/62 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#C5DBDB]/55 blur-3xl" />
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5">
            <div className="relative mb-6 max-w-md md:w-2/5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet">
                Common questions
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight text-black dark:text-white xl:text-hero">
                A few things families ask us.
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white bg-white/85 shadow-[0_18px_50px_rgba(40,27,85,0.08)] backdrop-blur-sm dark:border-strokedark dark:bg-blacksection md:w-3/5">
              {faqData.map((faq, key) => (
                <FAQItem
                  key={key}
                  faqData={{ ...faq, activeFaq, handleFaqToggle }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  );
};

export default FAQ;
