"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [storeHref, setStoreHref] = useState(appleStoreUrl);

  useEffect(() => {
    const updateProgress = () => {
      if (frameRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;

        const section = containerRef.current;
        if (!section) return;

        const viewportHeight = window.innerHeight;
        const scrollDistance = Math.max(
          section.offsetHeight - viewportHeight,
          1,
        );
        const progress = Math.min(
          1,
          Math.max(0, -section.getBoundingClientRect().top / scrollDistance),
        );
        const next = Math.min(total - 1, Math.floor(progress * total));

        setScrollProgress(progress);
        setActiveIndex((prev) => (prev === next ? prev : next));
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    window.visualViewport?.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.visualViewport?.removeEventListener("resize", updateProgress);
      if (frameRef.current !== null)
        window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

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
      style={{ height: `${total * 100}svh` }}
    >
      <div
        className={`sticky top-0 flex h-[100svh] items-center overflow-hidden transition-colors duration-700 ${
          isDark
            ? "bg-gradient-to-br from-[#281B55] via-[#3B2470] to-[#5338A0]"
            : "bg-[radial-gradient(circle_at_8%_18%,rgba(199,214,236,0.58),transparent_27%),radial-gradient(circle_at_92%_82%,rgba(238,207,202,0.48),transparent_29%)] bg-[#EEEAF4]"
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
          className={`pointer-events-none select-none object-cover transition-opacity duration-700 ${isDark ? "opacity-30" : "opacity-10"}`}
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
          <div className="grid items-center gap-4 sm:gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-xl">
              <AnimatePresence initial={false} mode="wait">
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
                    className={`mt-3 text-2xl font-bold leading-[1.12] sm:text-4xl md:text-5xl ${
                      isDark ? "text-white" : "text-[#17161D]"
                    }`}
                  >
                    {active.title}
                  </h2>
                  <p
                    className={`mt-3 text-sm leading-6 sm:mt-4 sm:text-lg sm:leading-normal ${
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
              <div className="mt-4 flex items-center gap-3 sm:mt-10 sm:gap-4 md:mt-14">
                <div
                  className={`relative h-1.5 w-28 overflow-hidden rounded-full sm:w-40 ${
                    isDark ? "bg-white/20" : "bg-[#E3E3FB]"
                  }`}
                >
                  <motion.div
                    className={`absolute inset-y-0 left-0 origin-left rounded-full ${
                      isDark ? "bg-aquamarine" : "bg-violet"
                    }`}
                    style={{ scaleX: scrollProgress, width: "100%" }}
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

            <div className="relative min-h-[230px] sm:min-h-[280px] lg:min-h-[320px]">
              <AnimatePresence initial={false} mode="wait">
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
