"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";

const androidStoreUrl = "https://bit.ly/kz-android-store";
const appleStoreUrl = "https://bit.ly/kz-app-store";

const heroVideos = [
  "/videos/hero-background-5.mp4",
  "/videos/hero-background-2.mp4",
  "/videos/hero-background-6.mp4",
  "/videos/hero-background-4.mp4",
];

/**
 * Hero section – simple video-backed landing moment.
 */
const Hero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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

  return (
    <section className="relative flex min-h-[820px] w-full items-end overflow-hidden bg-[#101918] px-4 pb-10 pt-28 text-white md:min-h-[860px] md:px-8 md:pb-12 lg:min-h-[900px] lg:items-center lg:pb-0 lg:pt-24">
      {heroVideos.map((videoSrc, index) => (
        <video
          key={videoSrc}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            index === currentVideoIndex ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/75 lg:to-black/35" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/35 to-transparent lg:hidden" />

      <div className="relative z-20 mx-auto w-full max-w-c-1390">
        <div className="max-w-[760px] text-center lg:max-w-[480px] lg:text-left xl:max-w-[550px]">
          <h1 className="text-5xl font-normal leading-[0.98] text-white sm:text-6xl md:text-5xl lg:text-[66px] xl:text-[74px]">
            When family health gets complicated, Kai keeps it clear.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-white md:text-2xl md:leading-9 lg:mx-0 lg:max-w-[560px] lg:text-xl lg:leading-8">
            Building AI agents that monitor and maintain your family health
          </p>

          <div className="mt-10 flex justify-center lg:justify-start">
            <Link
              href="/chat"
              onClick={handleTryKaiClick}
              className="flex min-h-[74px] w-full max-w-[420px] items-center justify-between rounded-full bg-primary px-8 text-xl font-medium text-white shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-primaryho sm:min-h-[82px] sm:max-w-[460px] sm:text-2xl lg:min-h-[64px] lg:max-w-[285px] lg:text-lg"
            >
              <span className="flex items-center gap-5">
                <span className="h-3 w-3 rounded-full bg-white" />
                Try Kai free
              </span>
              <svg
                aria-hidden="true"
                className="h-5 w-5 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
