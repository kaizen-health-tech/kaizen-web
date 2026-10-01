"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";

import { Reveal } from "@/components/Common/Reveal";
import { STEP_SCENES } from "@/components/HowItWorks/StepScenes";
import { howItWorksSteps } from "@/components/HowItWorks/stepsData";
import type { HowItWorksSceneId } from "@/types/howItWorks";

const EASE = [0.32, 0.72, 0, 1] as const;
const TOTAL = howItWorksSteps.length;

const STORE_LINKS = [
  {
    href: "https://bit.ly/kz-app-store",
    src: "/images/hero/app-store-dark.svg",
    alt: "Download on the App Store",
  },
  {
    href: "https://bit.ly/kz-android-store",
    src: "/images/hero/android-store-dark.svg",
    alt: "Get it on Google Play",
  },
];

const formatStep = (index: number) => String(index + 1).padStart(2, "0");

/** Below `lg` each step carries its own scene, which plays once in view. */
const InlineScene = ({ id }: { id: HowItWorksSceneId }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const Scene = STEP_SCENES[id];

  return (
    <div
      ref={ref}
      className="mt-10 rounded-[2rem] bg-lavender/70 p-1.5 ring-1 ring-midnight/5 lg:hidden"
    >
      <div className="overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[radial-gradient(circle_at_20%_15%,rgba(227,227,251,0.9),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(102,230,181,0.18),transparent_45%)] bg-white px-2 py-4">
        <Scene play={inView} />
      </div>
    </div>
  );
};

/**
 * The five setup steps as a scroll story. On large screens the steps scroll
 * past a pinned stage that plays each step's scene as it reaches the middle
 * of the viewport; an IntersectionObserver tracks that, so there is no scroll
 * listener.
 */
export const HowItWorksSteps = () => {
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [replay, setReplay] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  // Hold the first scene until the stage is on screen, so it isn't over
  // before the reader scrolls down to it.
  const stageSeen = useInView(stageRef, { once: true, amount: 0.5 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = stepRefs.current.indexOf(entry.target as HTMLLIElement);
          if (index !== -1) setActive(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    stepRefs.current.forEach((element) => element && observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const activeStep = howItWorksSteps[active];
  const ActiveScene = STEP_SCENES[activeStep.id];

  return (
    <section
      id="steps"
      aria-labelledby="steps-heading"
      className="scroll-mt-[var(--site-header-height,4.5rem)] px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-c-1235">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet">
            Five steps
          </p>
          <h2
            id="steps-heading"
            className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.02em] text-midnight md:text-5xl md:leading-[1.1]"
          >
            From sign-up to answers about your records.
          </h2>
        </Reveal>

        <div className="mt-12 lg:mt-4 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-24">
          <ol className="relative">
            {/* Progress rail: a hairline track with a violet fill that grows
                as each step becomes active. */}
            <span
              aria-hidden="true"
              className="absolute bottom-[12vh] left-[1.375rem] top-[12vh] hidden w-px bg-midnight/10 lg:block"
            />
            <motion.span
              aria-hidden="true"
              className="absolute bottom-[12vh] left-[1.375rem] top-[12vh] hidden w-px origin-top bg-violet lg:block"
              initial={false}
              animate={{ scaleY: (active + 1) / TOTAL }}
              transition={{ duration: 0.9, ease: EASE }}
            />

            {howItWorksSteps.map((step, index) => {
              const isActive = index === active;
              return (
                <li
                  key={step.id}
                  id={`step-${step.id}`}
                  ref={(element) => {
                    stepRefs.current[index] = element;
                  }}
                  className="scroll-mt-[calc(var(--site-header-height,4.5rem)+2rem)] border-t border-midnight/[0.06] py-14 first:border-t-0 first:pt-0 lg:flex lg:min-h-[76vh] lg:items-center lg:border-t-0 lg:py-0 lg:first:pt-0"
                >
                  <div
                    className={`relative transition-opacity duration-700 ease-out-soft lg:pl-20 ${
                      isActive ? "lg:opacity-100" : "lg:opacity-40"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-0 hidden h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition duration-700 ease-out-soft lg:flex ${
                        isActive
                          ? "scale-100 bg-violet text-white shadow-[0_0_0_8px_rgba(110,64,243,0.12)]"
                          : "scale-90 bg-white text-graphite ring-1 ring-midnight/10"
                      }`}
                    >
                      {formatStep(index)}
                    </span>

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet lg:hidden">
                      Step {formatStep(index)}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.02em] text-midnight text-balance md:text-[2rem] lg:mt-1.5">
                      <span className="sr-only">Step {index + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-lg leading-8 text-text-body">
                      {step.description}
                    </p>

                    {step.points && (
                      <ul className="mt-6 max-w-lg space-y-3">
                        {step.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-base leading-7 text-text-longform"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-light-lilac text-violet"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-3 w-3"
                              >
                                <path d="m5 12.5 4.5 4.5L19 7.5" />
                              </svg>
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {step.showStoreLinks && (
                      <div className="mt-8 flex flex-wrap gap-3">
                        {STORE_LINKS.map((store) => (
                          <a
                            key={store.href}
                            href={store.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl transition duration-500 ease-out-soft hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet active:scale-[0.98]"
                          >
                            <Image
                              src={store.src}
                              alt={store.alt}
                              width={150}
                              height={48}
                              className="h-12 w-auto"
                            />
                          </a>
                        ))}
                      </div>
                    )}

                    {step.note && (
                      <p className="mt-6 max-w-lg rounded-2xl bg-lavender px-4 py-3 text-sm leading-6 text-text-body">
                        {step.note}
                      </p>
                    )}

                    <InlineScene id={step.id} />
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Pinned stage, large screens only. */}
          <div className="hidden lg:block">
            <div
              ref={stageRef}
              className="sticky top-[calc(var(--site-header-height,4.5rem)+2rem)] h-[calc(100dvh-var(--site-header-height,4.5rem)-4rem)] max-h-[720px]"
            >
              <div className="h-full rounded-[2.5rem] bg-lavender/70 p-2 ring-1 ring-midnight/5">
                <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[calc(2.5rem-0.5rem)] bg-white bg-[radial-gradient(circle_at_18%_12%,rgba(227,227,251,0.95),transparent_42%),radial-gradient(circle_at_88%_92%,rgba(102,230,181,0.2),transparent_45%)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                  <div className="absolute left-7 top-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]">
                    <span className="text-violet">
                      {formatStep(active)}
                      <span className="text-graphite">
                        {" "}
                        / {formatStep(TOTAL - 1)}
                      </span>
                    </span>
                    <span className="h-px w-8 bg-midnight/15" />
                    <span className="text-graphite">
                      {activeStep.shortTitle}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setReplay((count) => count + 1)}
                    className="group absolute right-5 top-4 z-10 flex items-center gap-2 rounded-full bg-white/90 py-1.5 pl-3.5 pr-1.5 text-xs font-semibold text-midnight ring-1 ring-midnight/10 transition duration-500 ease-out-soft hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet active:scale-[0.97]"
                  >
                    Replay
                    <span
                      aria-hidden="true"
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-lavender transition-transform duration-700 ease-out-soft group-hover:-rotate-180"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3M4.5 4.5v3.75h3.75" />
                      </svg>
                    </span>
                    <span className="sr-only">
                      {" "}
                      the animation for this step
                    </span>
                  </button>

                  {/* Shrinks the scene on short viewports so the phone fits. */}
                  <div className="w-full [@media(max-height:820px)]:scale-[0.86] [@media(max-height:700px)]:scale-[0.72]">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={`${activeStep.id}-${replay}`}
                        initial={{ opacity: 0, y: 40, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -24, scale: 0.98 }}
                        transition={{ duration: 0.6, ease: EASE }}
                      >
                        <ActiveScene play={stageSeen} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
