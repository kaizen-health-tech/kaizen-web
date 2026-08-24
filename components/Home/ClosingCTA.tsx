import { AccentButton, DISPLAY, SECTION_X, SHELL } from "./primitives";

/**
 * Closing band. The page steps out of the lavender canvas into the cooler
 * cloud tone here so the last ask reads as its own moment.
 */
const ClosingCTA = () => (
  <section
    id="cta"
    aria-labelledby="closing-cta-heading"
    className={`relative overflow-hidden bg-gradient-to-b from-lavender via-cloud to-cloud pb-32 pt-32 md:pb-56 md:pt-56 ${SECTION_X}`}
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[140%] -translate-x-1/2 rounded-[50%] bg-light-lilac/50 blur-2xl"
    />

    <div className={`${SHELL} relative flex flex-col items-center gap-8`}>
      <h2
        id="closing-cta-heading"
        className={`${DISPLAY} max-w-[588px] text-balance text-center`}
      >
        Give your family one place for all of it
      </h2>
      <AccentButton href="/chat">Try Kai free</AccentButton>
    </div>
  </section>
);

export default ClosingCTA;
