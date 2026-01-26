"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { animate, stagger, createTimeline } from "animejs";

const headlines = [
  {
    line1: "Your Family's Health History,",
    line2: "Clear, Organized, Always Accessible",
  },
  {
    line1: "Lab Results Made Simple,",
    line2: "Understood in Seconds",
  },
  {
    line1: "Stop Juggling Patient Portals.",
    line2: "One App for Your Family's Health.",
  },
  {
    line1: "Managing Your Parents' Health",
    line2: "Shouldn't Feel This Hard",
  },
  {
    line1: "Medical Records That Actually",
    line2: "Make Sense to You",
  },
];

/**
 * Hero section – full-width layout.
 * Features:
 *  • Brand headline with accent colour (#6C42E3).
 *  • Animated rotating headlines using anime.js.
 *  • App-store badges.
 *  • Responsive family hero image.
 *  • Glass-blur overlay card with USP + stats.
 */
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const line1Ref = useRef<HTMLHeadingElement>(null);
  const line2Ref = useRef<HTMLHeadingElement>(null);
  const isAnimatingRef = useRef(false);

  const animateIn = useCallback(() => {
    if (!line1Ref.current || !line2Ref.current) return;

    const line1Words = line1Ref.current.querySelectorAll(".word");
    const line2Words = line2Ref.current.querySelectorAll(".word");

    const timeline = createTimeline();

    timeline
      .add(line1Words, {
        opacity: [0, 1],
        translateY: ["20px", "0px"],
        duration: 1000,
        delay: stagger(80),
        ease: "outExpo",
      })
      .add(
        line2Words,
        {
          opacity: [0, 1],
          translateY: ["20px", "0px"],
          duration: 1000,
          delay: stagger(80),
          ease: "outExpo",
        },
        "-=400",
      );
  }, []);

  const animateOut = useCallback(() => {
    return new Promise<void>((resolve) => {
      if (!line1Ref.current || !line2Ref.current) {
        resolve();
        return;
      }

      const line1Words = line1Ref.current.querySelectorAll(".word");
      const line2Words = line2Ref.current.querySelectorAll(".word");

      const timeline = createTimeline({
        onComplete: () => resolve(),
      });

      timeline
        .add(line2Words, {
          opacity: [1, 0],
          translateY: ["0px", "-20px"],
          duration: 800,
          delay: stagger(50),
          ease: "inExpo",
        })
        .add(
          line1Words,
          {
            opacity: [1, 0],
            translateY: ["0px", "-20px"],
            duration: 800,
            delay: stagger(50),
            ease: "inExpo",
          },
          "-=300",
        );
    });
  }, []);

  useEffect(() => {
    // Initial animation
    const timeout = setTimeout(() => {
      animateIn();
    }, 100);

    return () => clearTimeout(timeout);
  }, [animateIn]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      await animateOut();
      setCurrentIndex((prev) => (prev + 1) % headlines.length);

      // Small delay for DOM to update
      setTimeout(() => {
        animateIn();
        isAnimatingRef.current = false;
      }, 50);
    }, 4000);

    return () => clearInterval(interval);
  }, [animateIn, animateOut]);

  const renderWords = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className="word inline-block opacity-0"
        style={{ marginRight: "0.3em" }}
      >
        {word}
      </span>
    ));
  };

  return (
    <section className="w-full pt-24 pb-8 lg:mt-4 mt-2 bg-gradient-to-b from-[#FFFFFF] to-[#F5F6FC]">
      {/* Copy block */}
      <div className="px-4 md:px-8 max-w-screen-xl mx-auto text-center">
        <h1
          ref={line1Ref}
          className="text-3xl md:text-5xl text-black font-semibold leading-tight lg:mt-6 mt-2 min-h-[2.5rem] md:min-h-[3.5rem]"
        >
          {renderWords(headlines[currentIndex].line1)}
        </h1>
        <h1
          ref={line2Ref}
          className="text-[#6C42E3] text-3xl md:text-5xl font-semibold leading-tight min-h-[2.5rem] md:min-h-[3.5rem]"
        >
          {renderWords(headlines[currentIndex].line2)}
        </h1>
        <p className="mt-4 text-xl text-gray-700 mx-auto max-w-md">
          Upload lab results and doctor's notes. Ask questions in plain English.
          Share securely with family. All in one HIPAA-compliant app.
        </p>

        {/* Store badges */}
        <div className="lg:my-8 my-6 flex flex-row justify-center items-center gap-4">
          <a
            href="https://bit.ly/kz-android-store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/hero/android-store-dark.svg"
              alt="Get it on Google Play"
              width={172}
              height={48}
            />
          </a>
          <a
            href="https://bit.ly/kz-app-store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/hero/app-store-dark.svg"
              alt="Download on the App Store"
              width={172}
              height={48}
            />
          </a>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative mt-2 mx-4 bg-transparent">
        <Image
          src="/images/hero/hero.png"
          alt="Happy multi-generation family"
          width={1600}
          height={800}
          quality={100}
          className="w-full h-96 object-cover object-center rounded-3xl"
          sizes="(min-width: 1280px) 1200px, (min-width: 768px) 90vw, 100vw"
          priority
        />

        {/* Overlay card */}
        <div className="rounded-3xl absolute inset-0 flex items-end justify-between pb-6 px-6 md:px-8 pointer-events-none bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(23,22,29,1)]">
          {/* Left copy */}
          <div className="md:w-1/3 text-white mr-12">
            <h3 className="text-2xl font-semibold leading-snug">
              Built With Families <br /> In Mind
            </h3>
            <p className="mt-2 text-lg text-[#EDEFF7]">
              Stay informed, stay in control, and support the people who matter
              most.
            </p>
          </div>
          <div className="hidden lg:flex lg:flex-row lg:items-center bg-gradient-to-r from-[rgba(227,227,251,0.7)] to-[rgba(0,0,0,0.4)] rounded-2xl w-full lg:w-2/3 px-6 py-8 text-white gap-6 ring-1 ring-white/25">
            {/* Stats */}
            <div className="flex-1 grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">25K+</p>
                <p className="text-xs uppercase tracking-wide mt-1">
                  Health Records Uploaded
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">92%</p>
                <p className="text-xs uppercase tracking-wide mt-1">
                  Feel More Prepared
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">HIPAA</p>
                <p className="text-xs uppercase tracking-wide mt-1">
                  Compliant &amp; Secure
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold">Medical AI</p>
                <p className="text-xs uppercase tracking-wide mt-1">
                  Free & available in 50+ languages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
