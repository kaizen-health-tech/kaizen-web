"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { DISPLAY, LEAD, SECTION_X, SHELL } from "./primitives";

type AudienceCard = {
  title: string;
  role: string;
  image: string;
  alt: string;
};

const CARDS: AudienceCard[] = [
  {
    title: "Caring for a parent",
    role: "Family caregiver",
    image: "/images/blog/caregiver-guide.png",
    alt: "An adult daughter sitting with her mother at home",
  },
  {
    title: "Care from another time zone",
    role: "Long-distance family",
    image: "/images/user/user-story-2.jpeg",
    alt: "A person checking health updates on a phone",
  },
  {
    title: "Getting ready for a visit",
    role: "Before every appointment",
    image: "/images/user/user-story-1-1.png",
    alt: "A family reviewing notes before a doctor's appointment",
  },
  {
    title: "Family history worth keeping",
    role: "Across generations",
    image: "/images/blog/family-generation.png",
    alt: "Two generations filling in a family health history together",
  },
  {
    title: "A pregnancy, tracked",
    role: "Expecting parents",
    image: "/images/blog/pregnancy-genetic.png",
    alt: "An expecting parent at a prenatal ultrasound appointment",
  },
  {
    title: "Time for yourself, too",
    role: "Caregiver wellbeing",
    image: "/images/blog/caregiver-grief.png",
    alt: "A caregiver taking a quiet moment at the kitchen table",
  },
  {
    title: "The binder, replaced",
    role: "One family record",
    image: "/images/blog/family-health.png",
    alt: "A paper family health binder open on a table",
  },
];

const AUTOPLAY_MS = 4500;

/**
 * Coverflow carousel. The focused card sits centred and oversized; neighbours
 * step down in scale and opacity as they fan out to either side. Offsets are
 * expressed as multiples of the card width so the whole thing scales with the
 * viewport.
 *
 *   offset 0  → scale 1.18, opacity 1
 *   offset 1  → scale 0.75, opacity 0.88, ±1.017w
 *   offset 2  → scale 0.48, opacity 0.75, ±1.682w
 *   offset 3+ → scale 0.48, opacity 0.75, ±2.212w then ±0.53w per step
 */
const layoutFor = (offset: number) => {
  const abs = Math.abs(offset);
  const sign = Math.sign(offset);

  if (abs === 0) return { x: 0, scale: 1.18, opacity: 1, z: 100 };
  if (abs === 1) return { x: sign * 1.0166, scale: 0.75, opacity: 0.88, z: 80 };
  if (abs === 2) return { x: sign * 1.682, scale: 0.48, opacity: 0.75, z: 60 };
  return {
    x: sign * (2.212 + 0.53 * (abs - 3)),
    scale: 0.48,
    opacity: 0.75,
    z: Math.max(20, 40 - (abs - 3) * 10),
  };
};

const AudienceCarousel = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = CARDS.length;

  // Shortest way round the ring, so the fan animates the way it looks like it
  // should rather than unwinding the long way.
  const offsetOf = useCallback(
    (index: number) => {
      const raw = index - active;
      const half = total / 2;
      if (raw > half) return raw - total;
      if (raw < -half) return raw + total;
      return raw;
    },
    [active, total],
  );

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const id = window.setInterval(
      () => setActive((current) => (current + 1) % total),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, total]);

  const step = (delta: number) =>
    setActive((current) => (current + delta + total) % total);

  return (
    <section
      aria-labelledby="audience-heading"
      className={`bg-lavender py-20 md:py-28 lg:py-32 ${SECTION_X}`}
    >
      <div className={SHELL}>
        <div className="mx-auto max-w-[912px] text-center">
          <h2 id="audience-heading" className={DISPLAY}>
            Built for whoever keeps track
          </h2>
          <p className={`${LEAD} mt-8 text-balance text-dark-plum`}>
            Most families have one person holding the records, the questions,
            and the calendar. Kaizen is the place that work can finally live.
          </p>
        </div>

        <div
          className="relative -mx-5 mt-20 flex h-[calc(1.291*var(--card-w)+2.5rem)] items-center justify-center overflow-hidden [--card-w:min(78vw,20.5625rem)] md:mx-0 md:mt-32"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              step(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              step(1);
            }
          }}
        >
          {CARDS.map((card, index) => {
            const offset = offsetOf(index);
            const { x, scale, opacity, z } = layoutFor(offset);
            const isActive = offset === 0;

            return (
              <button
                key={card.title}
                type="button"
                aria-label={
                  isActive
                    ? `${card.title}. ${card.role}.`
                    : `Show ${card.title}`
                }
                aria-current={isActive ? "true" : undefined}
                onClick={() => setActive(index)}
                style={{
                  transform: `translateX(calc(-50% + ${x} * var(--card-w))) scale(${scale})`,
                  opacity,
                  zIndex: z,
                }}
                /* Type and chrome inside the card are sized in `em` off a
                   font-size derived from the card width, so the label bar
                   scales with the card instead of overwhelming it on small
                   screens. 0.0486 = 16px at the 329px base width. */
                className="absolute left-1/2 h-[calc(1.0942*var(--card-w))] w-[var(--card-w)] overflow-hidden rounded-2xl text-[calc(var(--card-w)*0.0486)] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark-plum motion-reduce:transition-none"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 60vw, 33vw"
                  className="object-cover"
                  priority={index < 3}
                />

                <span className="absolute inset-x-[1em] bottom-[1em] flex items-center justify-between gap-[0.75em] rounded-[1em] bg-white p-[1em] text-left">
                  <span className="flex min-w-0 flex-col gap-[0.125em]">
                    <span className="truncate text-[1em] font-medium leading-[1.25] text-dark-plum">
                      {card.title}
                    </span>
                    <span className="truncate text-[1em] font-medium leading-[1.25] text-dark-plum/70">
                      {card.role}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-[2.5em] w-[4em] shrink-0 items-center justify-center rounded-[0.75em] bg-aquamarine text-dark-plum"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-[1em] w-[1em]"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="sr-only">
          {CARDS[active].title}, {CARDS[active].role}
        </p>
      </div>
    </section>
  );
};

export default AudienceCarousel;
