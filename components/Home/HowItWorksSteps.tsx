import Image from "next/image";

import { BODY, CARD_TITLE, DISPLAY, SECTION_X, SHELL } from "./primitives";

const STEPS = [
  {
    title: "Add your records",
    body: "Upload a lab result, a discharge summary, or a photo of a paper form. Kaizen files it with the right person in your family.",
    image: "/images/how-it-works/how_it_works_1.png",
    alt: "Kaizen Health onboarding screens on a phone",
  },
  {
    title: "Ask Kai",
    body: "Ask what a result means or what changed since the last visit. Kai answers from the records you have chosen to add.",
    image: "/images/how-it-works/how_it_works_3.png",
    alt: "A family health timeline and dashboard in the Kaizen Health app",
  },
  {
    title: "Share what you choose",
    body: "Give a sibling, a partner, or a clinician access to exactly what they need — and change that access whenever you want.",
    image: "/images/how-it-works/how_it_works_5.png",
    alt: "Sharing controls in the Kaizen Health app",
  },
];

/**
 * Three steps, three columns. A numbered pill sits above each card; the card
 * itself is a fixed-height media panel with the copy block beneath it.
 */
const HowItWorksSteps = () => (
  <section
    aria-labelledby="how-it-works-heading"
    className={`bg-lavender py-20 md:py-28 lg:py-32 ${SECTION_X}`}
  >
    <div className={SHELL}>
      <h2 id="how-it-works-heading" className={`${DISPLAY} text-center`}>
        How it works
      </h2>

      <ol className="mt-20 grid gap-10 md:grid-cols-3 md:gap-4 lg:mt-32">
        {STEPS.map((step, index) => (
          <li key={step.title} className="flex flex-col items-center">
            <span
              aria-hidden="true"
              className="flex h-10 w-20 items-center justify-center rounded-xl bg-dark-plum text-base font-medium leading-5 text-white"
            >
              {index + 1}
            </span>

            <div className="mt-8 flex w-full flex-col overflow-hidden rounded-2xl bg-white">
              {/* The step art is a tall device mockup; cropping it to the top
                  of the panel keeps the screen itself readable and lets the
                  phones run off the bottom edge the way a photo would. */}
              <div className="relative h-[240px] shrink-0 overflow-hidden bg-light-lilac lg:h-[292px]">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="scale-[1.06] object-cover object-top"
                />
              </div>

              <div className="flex flex-col gap-4 p-4">
                <h3 className={CARD_TITLE}>{step.title}</h3>
                <p className={`${BODY} text-dark-plum`}>{step.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorksSteps;
