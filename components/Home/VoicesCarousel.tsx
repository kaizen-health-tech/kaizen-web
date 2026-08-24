"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { LEAD } from "./primitives";

type Voice = {
  quote: string;
  name: string;
  role: string;
  image: string;
  alt: string;
};

/**
 * Real, published Kaizen Health testimonials. Quotes are excerpted, never
 * reworded — see components/Testimonial/testimonialData.ts for the full text.
 */
const VOICES: Voice[] = [
  {
    quote:
      "I live in the Bay Area while my parents are in India… Now they upload their lab results directly from their doctor visits, and I can see everything in real time. The AI assistant Kai has been invaluable for translating Indian medical reports into plain English.",
    name: "Jinen S.",
    role: "Caring for parents overseas",
    image: "/images/user/user-story-1.png",
    alt: "A multigenerational family at home",
  },
  {
    quote:
      "Kaizen Health is simple, organized, and perfect for keeping track of appointments, medications, and records. Uploading and sharing info is quick, and I love knowing my family's health data is secure.",
    name: "Samantha Q.",
    role: "Kaizen Health user",
    image: "/images/user/user-story-3.png",
    alt: "A parent with a young child at home",
  },
];

const STORE_LINKS = [
  {
    href: "https://bit.ly/kz-app-store",
    src: "/images/hero/app-store-dark.svg",
    alt: "Download Kaizen Health on the App Store",
  },
  {
    href: "https://bit.ly/kz-android-store",
    src: "/images/hero/android-store-dark.svg",
    alt: "Get Kaizen Health on Google Play",
  },
];

/**
 * Full-bleed dark quote carousel. Heading and store badges hold the left
 * column, the quote and attribution the right, with the pager bottom-right.
 */
const VoicesCarousel = () => {
  const [index, setIndex] = useState(0);
  const voice = VOICES[index];
  const step = (delta: number) =>
    setIndex((current) => (current + delta + VOICES.length) % VOICES.length);

  return (
    <section
      aria-labelledby="voices-heading"
      className="relative isolate flex min-h-[560px] w-full flex-col justify-between overflow-hidden p-5 text-white md:h-[660px] md:p-8"
    >
      {VOICES.map((item, itemIndex) => (
        <Image
          key={item.name}
          src={item.image}
          alt={itemIndex === index ? item.alt : ""}
          fill
          sizes="100vw"
          aria-hidden={itemIndex === index ? undefined : "true"}
          className={`-z-10 object-cover transition-opacity duration-700 ${
            itemIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />

      <div className="grid gap-10 md:grid-cols-[408px_1fr] md:gap-8">
        <div>
          <h2 id="voices-heading" className={`${LEAD} max-w-[408px]`}>
            From the families using Kaizen
          </h2>

          <ul className="mt-8 flex items-center gap-4 md:mt-24">
            {STORE_LINKS.map((store) => (
              <li key={store.href}>
                <Link
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={store.src}
                    alt={store.alt}
                    width={136}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="max-w-[596px] md:justify-self-end">
          <p className={LEAD}>&ldquo;{voice.quote}&rdquo;</p>
        </blockquote>
      </div>

      <div className="mt-10 flex items-end justify-between gap-6 md:mt-0">
        <div className="md:ml-[440px]">
          <p className="text-base font-medium leading-5">{voice.name}</p>
          <p className="mt-0.5 text-base font-medium leading-5 text-white/70">
            {voice.role}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous quote"
            className="flex h-10 w-16 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next quote"
            className="flex h-10 w-16 items-center justify-center rounded-xl bg-aquamarine text-dark-plum transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VoicesCarousel;
