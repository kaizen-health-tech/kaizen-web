import Image from "next/image";

import { BODY, DISPLAY, LEAD, SECTION_X, SHELL, SUB } from "./primitives";

const CHAPTERS = [
  {
    title: "The first week",
    body: "You add what you already have — a photo of the medication list on the fridge, last year's lab results, the discharge summary still in the glovebox. Kaizen files each one under the right person instead of leaving it in a folder nobody opens.",
    image: "/images/blog/organizing-medical-records.jpg",
    alt: "Hands sorting through a stack of printed medical paperwork",
  },
  {
    title: "Before the appointment",
    body: "The night before a visit, you ask Kai what changed since last time and what is still unanswered. You walk in with a short list instead of a shoebox, and the questions you meant to ask get asked.",
    image: "/images/blog/family-history.png",
    alt: "A family going over health notes together at home",
  },
  {
    title: "A year in",
    body: "New results land next to the old ones. Your sister can see the parts you shared with her without a single group-chat screenshot. When a new doctor asks what happened last spring, the answer takes a minute, not an afternoon.",
    image: "/images/blog/family-health.jpeg",
    alt: "A family together in their living room",
  },
];

/**
 * The long-form section: a short intro, then three chapters that each pair a
 * centred title and paragraph with a full-width image.
 *
 * This is an illustrative walkthrough of using Kaizen, not a customer story —
 * the copy describes the product, not a specific person.
 */
const FamilyStory = () => (
  <>
    <section
      aria-labelledby="story-heading"
      className={`bg-lavender pt-16 ${SECTION_X}`}
    >
      <div className={`${SHELL} flex flex-col items-center gap-8`}>
        <h2 id="story-heading" className={`${DISPLAY} text-center`}>
          What a year looks like
        </h2>
        <p
          className={`${LEAD} max-w-[488px] text-balance text-center text-dark-plum`}
        >
          Nobody reorganizes a decade of records in one sitting. Here is how it
          usually goes instead.
        </p>
      </div>
    </section>

    <section
      aria-label="Using Kaizen over a year"
      className={`bg-lavender py-20 md:py-28 lg:py-32 ${SECTION_X}`}
    >
      <div className={`${SHELL} flex flex-col gap-20 md:gap-32`}>
        {CHAPTERS.map((chapter) => (
          <article key={chapter.title} className="flex flex-col">
            <div className="mx-auto flex max-w-[592px] flex-col gap-4 pb-8 text-center">
              <h3 className={`${SUB} text-dark-plum`}>{chapter.title}</h3>
              <p className={`${BODY} text-balance text-dark-plum`}>
                {chapter.body}
              </p>
            </div>

            <div className="relative aspect-[1201/875] w-full overflow-hidden rounded-2xl bg-cloud">
              <Image
                src={chapter.image}
                alt={chapter.alt}
                fill
                sizes="(max-width: 1376px) 100vw, 1201px"
                className="object-cover"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default FamilyStory;
