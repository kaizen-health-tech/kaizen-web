"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

const androidStoreUrl = "https://bit.ly/kz-android-store";
const appleStoreUrl = "https://bit.ly/kz-app-store";

const heroVideos = [
  {
    src: "/videos/hero-background-5.mp4",
    poster: "/videos/hero-background-5-poster.jpg",
  },
  {
    src: "/videos/hero-background-2.mp4",
    poster: "/videos/hero-background-2-poster.jpg",
  },
  {
    src: "/videos/hero-background-6.mp4",
    poster: "/videos/hero-background-6-poster.jpg",
  },
  {
    src: "/videos/hero-background-4.mp4",
    poster: "/videos/hero-background-4-poster.jpg",
  },
];

/**
 * Hero section – simple video-backed landing moment.
 *
 * Only the active clip and the one about to play are ever mounted, so the
 * browser downloads at most two videos at a time instead of all four up
 * front (the previous approach tanked LCP on every page load).
 */
const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const nextVideoIndex = (currentVideoIndex + 1) % heroVideos.length;
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const handleTryKaiClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      event.preventDefault();
      window.location.href = androidStoreUrl;
      return;
    }

    if (/iPad|iPhone|iPod|Macintosh|Mac OS X/i.test(userAgent)) {
      event.preventDefault();
      window.location.href = appleStoreUrl;
    }
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentVideoIndex((current) => (current + 1) % heroVideos.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    // Toggling the `autoPlay` prop on an already-mounted <video> doesn't
    // trigger playback in most browsers — autoplay only fires on initial
    // load. Since the active/preloading pair now stays mounted across
    // rotations instead of remounting, we have to kick off playback
    // ourselves whenever a clip becomes active.
    const activeSrc = heroVideos[currentVideoIndex].src;
    const activeVideo = videoRefs.current[activeSrc];
    activeVideo?.play().catch(() => {
      // Autoplay can be rejected before the tab has been interacted with;
      // the video will still show its poster frame until it can play.
    });
  }, [currentVideoIndex]);

  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-[#101918] px-4 pb-20 pt-[calc(var(--site-header-height,4.5rem)+2rem)] text-white md:px-8 md:pb-12 md:pt-[calc(var(--site-header-height,4.5rem)+2.5rem)] lg:items-start lg:pb-0 lg:pt-[calc(var(--site-header-height,4.5rem)+clamp(5rem,12vh,10rem))]">
      {heroVideos.map((video, index) => {
        const isActive = index === currentVideoIndex;
        const isPreloading = index === nextVideoIndex;

        // Skip mounting clips that are neither on screen nor up next, so at
        // most two videos are ever being fetched/decoded at once.
        if (!isActive && !isPreloading) return null;

        return (
          <video
            key={video.src}
            ref={(el) => {
              videoRefs.current[video.src] = el;
              // The very first render mounts the active clip directly (no
              // prop change to react to), so kick it off here too.
              if (el && isActive && el.paused) {
                el.play().catch(() => {});
              }
            }}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            muted
            loop
            playsInline
            preload="auto"
            poster={video.poster}
            aria-hidden="true"
          >
            <source src={video.src} type="video/mp4" />
          </video>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/75 lg:to-black/35" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/35 to-transparent lg:hidden" />

      <div className="relative z-20 mx-auto w-full max-w-[1600px]">
        <div className="max-w-[700px] text-center lg:max-w-[540px] lg:text-left xl:max-w-[640px]">
          <h1 className="text-4xl font-normal leading-[1.02] text-white sm:text-5xl md:text-5xl lg:text-[clamp(3.25rem,4.2vw,4.5rem)] xl:text-[clamp(3.5rem,4vw,5rem)]">
            Care for your family without carrying every detail.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-7 text-white md:text-xl md:leading-8 lg:mx-0 lg:max-w-[520px] lg:text-[19px] lg:leading-7 xl:text-xl xl:leading-8">
            Keep records in one place. Kai helps you find the right detail when
            care gets complicated.
          </p>

          {/*
            App-store badges, above the fold. On mobile these previously
            only showed up ~9000px down the homepage, with nothing here to
            signal that Kaizen is even an app — see the SEO audit's
            "buried CTA" finding.
          */}
          <div className="mt-5 hidden flex-wrap justify-center gap-3 md:flex lg:justify-start">
            <a
              href={appleStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-xl transition hover:-translate-y-0.5"
            >
              <Image
                src="/images/hero/app-store-dark.svg"
                alt="Download on the App Store"
                width={190}
                height={60}
              />
            </a>
            <a
              href={androidStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-xl transition hover:-translate-y-0.5"
            >
              <Image
                src="/images/hero/android-store-dark.svg"
                alt="Get it on Google Play"
                width={190}
                height={60}
              />
            </a>
          </div>

          {/*<div className="mt-5 flex justify-center lg:justify-start">*/}
          {/*  <Link*/}
          {/*    href="/chat"*/}
          {/*    onClick={handleTryKaiClick}*/}
          {/*    className="flex min-h-[54px] w-full max-w-[420px] items-center justify-between rounded-full bg-primary px-4 text-xl font-medium text-white shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-primaryho sm:min-h-[82px] sm:max-w-[460px] sm:text-2xl lg:min-h-[64px] lg:max-w-[285px] lg:text-lg"*/}
          {/*  >*/}
          {/*    <span className="flex items-center gap-5">*/}
          {/*      <span className="h-3 w-3 rounded-full bg-white" />*/}
          {/*      Try Kai free*/}
          {/*    </span>*/}
          {/*    <svg*/}
          {/*      aria-hidden="true"*/}
          {/*      className="h-5 w-5 shrink-0"*/}
          {/*      fill="none"*/}
          {/*      viewBox="0 0 24 24"*/}
          {/*    >*/}
          {/*      <path*/}
          {/*        d="M5 12h14m-6-6 6 6-6 6"*/}
          {/*        stroke="currentColor"*/}
          {/*        strokeLinecap="round"*/}
          {/*        strokeLinejoin="round"*/}
          {/*        strokeWidth="2"*/}
          {/*      />*/}
          {/*    </svg>*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;
