type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;
  const isOpen = activeFaq === id;
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="flex flex-col border-b border-midnight/[0.06] last-of-type:border-none dark:border-strokedark">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => handleFaqToggle(id)}
          className="group flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left text-metatitle3 font-semibold text-midnight transition-colors duration-500 ease-out-soft hover:text-violet focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-violet dark:text-white lg:px-9 lg:py-7"
        >
          {quest}

          {/* A plus whose vertical bar folds flat into a minus when open. */}
          <span
            aria-hidden="true"
            className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ease-out-soft ${
              isOpen ? "bg-violet text-white" : "bg-lavender text-midnight"
            }`}
          >
            <span className="absolute h-px w-3 bg-current" />
            <span
              className={`absolute h-3 w-px bg-current transition-transform duration-500 ease-out-soft ${
                isOpen ? "rotate-90 scale-y-0" : ""
              }`}
            />
          </span>
        </button>
      </h3>

      {/* Animating grid rows from 0fr to 1fr opens the panel to its natural
          height without measuring it. `inert` keeps the collapsed answer out
          of the tab order and the accessibility tree while it stays in the
          HTML for search engines. */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out-soft ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-base leading-7 text-text-body dark:text-manatee lg:px-9 lg:pb-8">
            {ans}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
