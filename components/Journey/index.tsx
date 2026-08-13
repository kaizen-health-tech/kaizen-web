"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ReactElement, useEffect, useRef, useState } from "react";
import journeyData from "./journeyData";
import {
  ClearMockup,
  ConnectedMockup,
  OrganizedMockup,
  PreparedMockup,
  ScatteredMockup,
} from "./Mockups";

const MOCKUPS: Record<string, () => ReactElement> = {
  scattered: ScatteredMockup,
  organized: OrganizedMockup,
  clear: ClearMockup,
  connected: ConnectedMockup,
  prepared: PreparedMockup,
};

const androidStoreUrl = "https://bit.ly/kz-android-store";
const appleStoreUrl = "https://bit.ly/kz-app-store";

const total = journeyData.length;

const Journey = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [storeHref, setStoreHref] = useState(appleStoreUrl);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(total - 1, Math.max(0, Math.floor(v * total)));
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor;
    setStoreHref(/android/i.test(ua) ? androidStoreUrl : appleStoreUrl);
  }, []);

  const active = journeyData[activeIndex];
  const isDark = active.theme === "dark";
  const Mockup = MOCKUPS[active.id];

  return (
    <section
      ref={containerRef}
      id="features"
      className="relative"
      style={{ height: `${total * 100}vh` }}
    >
      <div
        className={`sticky top-0 flex h-screen items-center overflow-hidden transition-colors duration-700 ${
          isDark
            ? "bg-gradient-to-br from-[#281B55] via-[#3B2470] to-[#5338A0]"
            : "bg-gradient-to-br from-[#F5F7FC] via-[#F5F7FC] to-[#EDEBFB]"
        }`}
      >
        {/* dotted backdrop */}
        <Image
          src={
            isDark
              ? "/images/shape/shape-dotted-dark.svg"
              : "/images/shape/shape-dotted-light.svg"
          }
          alt="Decorative dotted pattern"
          fill
          className="pointer-events-none select-none object-cover opacity-40 transition-opacity duration-700"
        />
        {/* glow orbs */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-40 blur-3xl transition-colors duration-700"
          style={{ background: isDark ? "#8A6FE8" : "#C9C2F7" }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full opacity-30 blur-3xl transition-colors duration-700"
          style={{ background: isDark ? "#66E6B5" : "#8FD3D1" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <span
                    className={`text-xs font-bold tracking-[0.15em] ${
                      isDark ? "text-aquamarine" : "text-violet"
                    }`}
                  >
                    {active.eyebrow}
                  </span>

                  <h2
                    className={`mt-3 text-3xl font-bold leading-[1.15] sm:text-4xl md:text-5xl ${
                      isDark ? "text-white" : "text-[#17161D]"
                    }`}
                  >
                    {active.title}
                  </h2>
                  <p
                    className={`mt-4 text-base sm:text-lg ${
                      isDark ? "text-white/70" : "text-[#5C5567]"
                    }`}
                  >
                    {active.description}
                  </p>

                  {active.cta && (
                    <div className="mt-6 flex items-center gap-4">
                      <a
                        href={storeHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full bg-aquamarine px-6 py-3 text-sm font-bold text-[#17161D] shadow-lg transition hover:brightness-95"
                      >
                        {active.cta.label}
                      </a>
                      <span className="text-sm font-medium text-white/60">
                        {active.cta.domain}
                      </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* progress */}
              <div className="mt-10 flex items-center gap-4 md:mt-14">
                <div
                  className={`relative h-1.5 w-40 overflow-hidden rounded-full ${
                    isDark ? "bg-white/20" : "bg-[#E3E3FB]"
                  }`}
                >
                  <motion.div
                    className={`absolute inset-y-0 left-0 origin-left rounded-full ${
                      isDark ? "bg-aquamarine" : "bg-violet"
                    }`}
                    style={{ scaleX: scrollYProgress, width: "100%" }}
                  />
                </div>
                <span
                  className={`text-xs font-bold tracking-[0.15em] ${
                    isDark ? "text-white/80" : "text-[#5C5567]"
                  }`}
                >
                  {active.progressLabel.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="relative min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <Mockup />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
