"use client";
import Image from "next/image";
import React from "react";

/**
 * Hero section – full-width layout.
 * Features:
 *  • Brand headline with accent colour (#6C42E3).
 *  • App-store badges.
 *  • Responsive family hero image.
 *  • Glass-blur overlay card with USP + stats.
 */
const Hero = () => {
  return (
    <section className="w-full pt-24 pb-8 lg:mt-4 mt-2 bg-gradient-to-b from-[#FFFFFF] to-[#F5F6FC]">
      {/* Copy block */}
      <div className="px-4 md:px-8 max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl text-black font-semibold leading-tight lg:mt-6 mt-4">
          Connecting Families,
        </h1>
        <h1 className="text-[#6C42E3] lg:mt-6 mt-2 text-4xl md:text-5xl font-semibold leading-tight">
          Simplifying Health
        </h1>
        <p className="mt-4 text-lg text-gray-700 mx-auto">
          Kaizen Health helps families stay connected and take control of their
          health together.
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
              width={124}
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
              width={124}
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
          quality="100"
          className="w-full h-96 object-cover object-center rounded-3xl"
          sizes="(min-width: 1024px) 50vw, 100vw"
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
            <div className="flex-1 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold">250K+</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
