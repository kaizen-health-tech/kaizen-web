"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Connecting Families, Simplifying Health.
              </h1>
              <p>
                Kaizen Health empowers users for better health control and secure health data management.
                Tailored for individuals, families, and healthcare enthusiasts, it offers
                a user-friendly platform compliant with HIPAA. Join our closed beta for early access to the app,
                available on Android and iOS.
              </p>
            </div>

            <div className="hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className="relative aspect-[700/444] w-full">
                  <Image
                    className="dark:hidden"
                    src="/images/hero/hero.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block"
                    src="/images/hero/hero.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;