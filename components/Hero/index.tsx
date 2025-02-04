"use client";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 bg-primary">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Responsive Flex Container */}
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
          {/* Content Section */}
          <div className="md:w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="mb-5 text-3xl font-bold text-white xl:text-hero">
              Connecting Families, Simplifying Health.
            </h1>
            <p className="text-white mb-6">
              Kaizen Health empowers users for better health control and secure
              health data management. Tailored for individuals, families, and
              healthcare enthusiasts, it offers a user-friendly platform
              compliant with HIPAA. Available on the app store now and launching
              soon for Android.
            </p>

            {/* App Store Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://bit.ly/3Skmqgj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/hero/app-store-light.svg"
                  alt="App Store"
                  className="dark:hidden w-40"
                  width={160}
                  height={50}
                />
                <Image
                  src="/images/about/app-store-dark.svg"
                  alt="App Store"
                  className="hidden dark:block w-40"
                  width={160}
                  height={50}
                />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
            <div className="relative aspect-[4/3] w-full max-w-md md:max-w-lg lg:max-w-full">
              <Image src="/images/hero/hero.png" alt="Hero" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
