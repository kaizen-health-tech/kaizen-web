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
    <section className="w-full bg-white pt-24 pb-8 mt-4">
      {/* Copy block */}
      <div className="px-4 md:px-8 max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl text-black font-semibold leading-tight mt-6">
          Connecting Families,
        </h1>
        <h1 className="text-[#6C42E3] mt-6 text-4xl md:text-5xl font-semibold leading-tight">
          Simplifying Health
        </h1>
        <p className="mt-4 text-lg text-gray-700 mx-auto">
          Kaizen Health helps families stay connected and take control of their
          health together.
        </p>

        {/* Store badges */}
        <div className="mt-0 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/hero/android-store-dark.svg"
              alt="Get it on Google Play"
              width={180}
              height={24}
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/hero/app-store-dark.svg"
              alt="Download on the App Store"
              width={180}
              height={24}
            />
          </a>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative mt-2 mx-4 rounded-lg">
        <Image
          src="/images/hero/hero_new.png"
          alt="Happy multi-generation family"
          width={1600}
          height={800}
          className="w-full h-96 md:h-[480px] object-cover rounded-3xl object-top"
          priority
        />

        {/* Overlay card */}
        <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
          <div className="backdrop-blur-md bg-black/50 rounded-2xl w-[90%] md:w-4/5 px-6 py-8 text-white flex flex-col md:flex-row md:items-center gap-6">
            {/* Left copy */}
            <div className="md:w-1/3">
              <h3 className="text-2xl font-semibold leading-snug">
                Built With Families <br /> In Mind
              </h3>
              <p className="mt-2 text-sm text-gray-200">
                Stay informed, stay in control, and support the people who
                matter most.
              </p>
            </div>

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
