import faqData from "@/components/FAQ/faqData";

import { BODY, LEAD, SECTION_X, SHELL } from "./primitives";

/**
 * Two-column FAQ: a standing label on the left, a stack of disclosure rows on
 * the right. Native <details> keeps the keyboard and screen-reader behaviour
 * without any client JavaScript.
 */
const HomeFAQ = () => (
  <section
    id="faq"
    aria-labelledby="faq-heading"
    className={`bg-lavender py-20 md:py-28 lg:py-32 ${SECTION_X}`}
  >
    <div
      className={`${SHELL} flex flex-col gap-10 md:flex-row md:items-start md:gap-8`}
    >
      <h2
        id="faq-heading"
        className={`${LEAD} text-dark-plum md:w-[219px] md:shrink-0 md:text-center`}
      >
        Common Questions
      </h2>

      <div className="flex w-full flex-col gap-4 md:w-[638px]">
        {faqData.map((item) => (
          <details
            key={item.id}
            className="group rounded-2xl bg-white p-4 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span
                className={`${BODY} text-dark-plum`}
              >
                {item.quest}
              </span>
              <span
                aria-hidden="true"
                className="flex h-6 w-10 shrink-0 items-center justify-center rounded-full border border-dark-plum/15 text-dark-plum/70"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="h-3 w-3"
                >
                  <path d="M12 5v14" className="group-open:hidden" />
                  <path d="M5 12h14" />
                </svg>
              </span>
            </summary>

            <p className="mt-4 text-base leading-6 text-text-body">
              {item.ans}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default HomeFAQ;
