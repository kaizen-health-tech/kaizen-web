import { DISPLAY, SECTION_X, SHELL } from "./primitives";

type Ask = {
  question: string;
  source: string;
  tag: string;
};

/**
 * Illustrative examples of what Kai can be asked, not customer quotes.
 * Each one is answerable from records a family has already added.
 */
const ROW_ONE: Ask[] = [
  {
    question: "What changed in Mom's blood work since June?",
    source: "from two uploaded lab panels",
    tag: "Records",
  },
  {
    question: "What is the A1C number on this report, and is it high?",
    source: "from an uploaded lab result",
    tag: "Results",
  },
  {
    question: "Summarize the discharge instructions in plain English.",
    source: "from an uploaded hospital summary",
    tag: "Documents",
  },
  {
    question: "Which of Dad's medications were added after the last visit?",
    source: "from the medication list",
    tag: "Medications",
  },
  {
    question: "What should I ask at the cardiology appointment on Thursday?",
    source: "from recent visit notes",
    tag: "Appointments",
  },
  {
    question: "Has anyone in the family had this condition before?",
    source: "from family health history",
    tag: "History",
  },
  {
    question: "What did the radiologist actually conclude?",
    source: "from an uploaded imaging report",
    tag: "Imaging",
  },
  {
    question: "When was the last tetanus shot?",
    source: "from immunization records",
    tag: "Immunizations",
  },
];

const ROW_TWO: Ask[] = [
  {
    question: "Do these two prescriptions do the same thing?",
    source: "from the medication list",
    tag: "Medications",
  },
  {
    question: "Put together a one-page summary I can hand the new doctor.",
    source: "from the records you shared",
    tag: "Summaries",
  },
  {
    question: "What follow-ups were recommended and never booked?",
    source: "from visit notes",
    tag: "Follow-ups",
  },
  {
    question: "Which results are outside the normal range?",
    source: "from an uploaded lab panel",
    tag: "Results",
  },
  {
    question: "What does my sister currently have access to?",
    source: "from your sharing settings",
    tag: "Sharing",
  },
  {
    question: "Track the baby's weight across every well-child visit.",
    source: "from pediatric visit records",
    tag: "Children",
  },
  {
    question: "What was the dose before it was changed?",
    source: "from the medication timeline",
    tag: "Medications",
  },
  {
    question: "Explain this bill code from the hospital.",
    source: "from an uploaded statement",
    tag: "Documents",
  },
];

const AskCard = ({ ask, duplicate }: { ask: Ask; duplicate?: boolean }) => (
  <li
    aria-hidden={duplicate ? "true" : undefined}
    className="flex w-[228px] shrink-0 flex-col gap-2 rounded-xl bg-white p-4"
  >
    <p className="text-xs font-medium leading-4 text-dark-plum">
      &ldquo;{ask.question}&rdquo;
    </p>
    <p className="text-xs leading-[1.2] tracking-[-0.02em] text-dark-plum/70">
      {ask.source}
    </p>
    <p className="text-xs leading-[1.2] text-dark-plum/45">{ask.tag}</p>
  </li>
);

const MarqueeRow = ({
  items,
  direction,
  duration,
}: {
  items: Ask[];
  direction: "left" | "right";
  duration: string;
}) => (
  <div
    className="overflow-hidden [--fade:linear-gradient(90deg,transparent_0%,#000_10%,#000_90%,transparent_100%)] [mask-image:var(--fade)] [-webkit-mask-image:var(--fade)]"
    style={{ ["--marquee-duration" as string]: duration }}
  >
    <ul
      className={`flex w-max items-start gap-5 ${
        direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
      } hover:[animation-play-state:paused] motion-reduce:animate-none`}
    >
      {items.map((ask) => (
        <AskCard key={ask.question} ask={ask} />
      ))}
      {/* Second copy exists only so the loop can wrap without a visible seam. */}
      {items.map((ask) => (
        <AskCard key={`${ask.question}-dup`} ask={ask} duplicate />
      ))}
    </ul>
  </div>
);

/**
 * Two marquee rows drifting in opposite directions behind a soft edge fade —
 * the same treatment the source uses for its wall of short quotes.
 */
const QuestionMarquee = () => (
  <section
    aria-labelledby="asks-heading"
    className={`bg-lavender pt-20 md:pt-28 lg:pt-32 ${SECTION_X}`}
  >
    <div className={SHELL}>
      <h2 id="asks-heading" className={`${DISPLAY} text-center`}>
        What families ask Kai
      </h2>

      <div className="mt-10 flex flex-col gap-5">
        <MarqueeRow items={ROW_ONE} direction="left" duration="70s" />
        <MarqueeRow items={ROW_TWO} direction="right" duration="85s" />
      </div>

      <p className="mt-8 text-center text-xs leading-4 text-dark-plum/50">
        Examples of questions Kai can answer from records you add. Not customer
        quotes.
      </p>
    </div>
  </section>
);

export default QuestionMarquee;
