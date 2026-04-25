"use client";

import Image from "next/image";

/**
 * Hero section – simple video-backed landing moment.
 */
const Hero = () => {
  return (
    <section className="relative flex min-h-[760px] w-full items-start overflow-hidden bg-[#f7fbf6] pt-32 text-black md:min-h-[820px] md:pt-36 lg:min-h-[900px]">
      <video
        className="absolute inset-0 h-full w-full object-cover object-bottom"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/hero.png"
        aria-hidden="true"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/5" />
      <div className="absolute inset-x-0 top-0 h-52 bg-white/80 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-c-1016 px-4 text-center md:px-8">
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-medium text-black shadow-solid-5 ring-1 ring-black/5 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-primary" />
          AI health agents for the whole family
        </div>

        <h1 className="mx-auto max-w-5xl text-4xl font-semibold leading-[1.08] text-black sm:text-5xl md:text-6xl lg:text-[72px]">
          Family Health,
          <span className="block text-primary">Handled Together.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/70 sm:text-lg md:text-xl">
          Kaizen organizes records, surfaces insights, and helps families
          coordinate care with HIPAA-compliant AI agents.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://bit.ly/kz-android-store"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:-translate-y-0.5"
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
            className="transition duration-200 hover:-translate-y-0.5"
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
    </section>
  );
};

export default Hero;
