"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";

export default function HowItWorksClient() {
  const stepsData = [
    {
      title: "Create Your Account",
      body: "Start by signing up and setting up your personal profile. This is your home base for organizing and managing family health‑care.\n\nKaizen Health is available on both App Store and Google Play Store.",
      image: "/images/how-it-works/how_it_works_1.png",
      icon: "/images/icon/pencil.svg",
      cta: (
        <>
          <Image
            src="/images/hero/app-store-light.svg"
            alt="App Store"
            width={140}
            height={44}
          />
          <Image
            src="/images/hero/android-store-dark.svg"
            alt="Google Play"
            width={140}
            height={44}
          />
        </>
      ),
    },
    {
      title: "Invite Your Loved Ones in your care circle",
      body:
        "- Tap the “+” button, choose Invite Family Member, and send a secure email invite.\n" +
        "- They’ll download the app and join your care circle..",
      image: "/images/how-it-works/how_it_works_2.png",
      icon: "/images/icon/invite.svg",
    },
    {
      title: "Add a favorite member to your Home Screen",
      body:
        "- Once they join, both of you can add them to your family bubble on the home screen.\n" +
        "- See shared updates in real-time.",
      image: "/images/how-it-works/how_it_works_3.png",
      icon: "/images/icon/home.svg",
    },
    {
      title: "Upload Health Records & Share",
      body:
        "Securely upload health record in any format like scanning documents, upload photos and file, even recordings.\n" +
        "Choose whether to share and adjust anytime.",
      image: "/images/how-it-works/how_it_works_4.png",
      icon: "/images/icon/share.svg",
    },
    {
      title: "Get AI‑powered insights",
      body: "Kaizen’s AI summarizes documents and answers questions, so you can be self aware and make clearer, informed decisions.",
      image: "/images/how-it-works/how_it_works_5.png",
      icon: "/images/icon/ai.svg",
    },
  ];

  const stepRefs = useRef<Array<React.RefObject<HTMLElement>>>(
    stepsData.map(() => ({ current: null })),
  );
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = stepRefs.current.findIndex(
              (r) => r.current === entry.target,
            );
            if (idx !== -1) setActiveStep(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    stepRefs.current.forEach(
      (ref) => ref.current && observer.observe(ref.current),
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#E7E8FF] via-[#F0EFFF] to-white py-24">
        {/* Background squiggle */}
        <Image
          src="/images/whykaizen/why_we_built_bg.svg"
          alt=""
          width={1600}
          height={800}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
          priority
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center mt-25">
          <h1 className="text-3xl font-extrabold leading-tight text-black md:text-5xl">
            How <span className="text-primary">Kaizen</span> Works
          </h1>
          <h2 className="mt-6 text-xl font-semibold text-primary md:text-2xl">
            Upload once. Share easily. Support better care together.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
            Kaizen helps you store, organize, and understand your family’s
            health information in one secure place.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex rounded-md bg-primary px-8 py-3 font-semibold text-white shadow-md hover:bg-primary/90"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-gray-50 px-4 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl lg:flex lg:gap-16">
          {/* Sidebar */}
          <ol className="sticky top-32 hidden lg:block lg:w-1/4 self-start">
            {[
              "Create your account",
              "Invite your loved ones in your care circle",
              "Add Member to Home Screen",
              "Upload Health Record & Share",
              "Get AI‑powered insights",
            ].map((text, idx) => (
              <li
                key={idx}
                className={`mb-8 flex items-center gap-3 text-lg font-medium
                ${activeStep === idx ? "text-primary" : "text-gray-500"}`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border
                ${activeStep === idx ? "bg-primary text-white border-primary" : "border-gray-300"}`}
                >
                  {idx + 1}
                </span>
                {text}
              </li>
            ))}
          </ol>

          {/* Steps content */}
          <div className="lg:w-3/4 lg:pl-16">
            {stepsData.map((step, idx) => (
              <section
                key={idx}
                id={`step-${idx}`}
                ref={stepRefs.current[idx]}
                className="mb-24 flex flex-col gap-8 lg:flex-row lg:items-start"
              >
                {/* Text block */}
                <div className="lg:w-1/2">
                  <h3 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-primary">
                    {step.icon && (
                      <Image
                        src={step.icon as string}
                        alt=""
                        width={24}
                        height={24}
                        className="h-6 w-6"
                      />
                    )}{" "}
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 whitespace-pre-line">
                    {step.body}
                  </p>
                  {step.cta && (
                    <div className="mt-6 flex gap-4">{step.cta}</div>
                  )}
                </div>
                {/* Image */}
                <div className="lg:w-1/2">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={500}
                    height={420}
                    className="w-full rounded-xl object-contain"
                  />
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
