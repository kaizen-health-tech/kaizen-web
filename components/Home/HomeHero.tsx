"use client";

import { useEffect, useRef } from "react";

import { AccentButton, DISPLAY, SUB } from "./primitives";

const HERO_VIDEO = "/videos/hero-background-5.mp4";
const HERO_POSTER = "/videos/hero-background-5-poster.jpg";

/**
 * Full-bleed video hero. The clip fills the viewport, the headline and
 * sub-headline sit centred in the upper third, and a single proof pill
 * carrying the CTA is pinned near the bottom edge.
 */
const HomeHero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Autoplay is rejected on some browsers until the tab has been
    // interacted with; the poster frame stands in until it can play.
    videoRef.current?.play().catch(() => {});
  }, []);

  // Mobile stops short of a full viewport so the proof pill clears the sticky
  // download bar; desktop takes the whole screen.
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative flex h-[78svh] min-h-[560px] w-full flex-col items-center justify-start overflow-hidden bg-dark-plum px-5 pt-[24vh] text-white md:h-[100svh] md:px-8 md:pt-[34vh]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO}
        poster={HERO_POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      />
      {/* The clip is bright in places, so a soft vertical scrim keeps the
          headline legible without flattening the footage. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-dark-plum/45 via-dark-plum/25 to-dark-plum/55"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1376px]">
        <h1
          id="home-hero-heading"
          className={`${DISPLAY} mx-auto max-w-[1000px] text-balance text-center !text-white`}
        >
          Your family&rsquo;s health, in one place.
        </h1>
        <p
          className={`${SUB} mx-auto mt-8 max-w-[912px] text-balance text-center text-white`}
        >
          One private place for every record, plus an assistant that can answer
          questions about them.
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex w-[calc(100%-2.5rem)] max-w-[450px] -translate-x-1/2 items-center justify-between gap-4 rounded-2xl bg-white px-4 py-4 md:bottom-4">
        <p className="text-[15px] font-medium leading-5 text-dark-plum md:text-base">
          Free to start. HIPAA compliant.
        </p>
        <AccentButton href="/chat">Try Kai free</AccentButton>
      </div>
    </section>
  );
};

export default HomeHero;
