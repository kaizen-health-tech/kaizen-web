import Image from "next/image";

import { PillLink } from "@/components/Common/PillLink";
import { Reveal } from "@/components/Common/Reveal";

const benefits = [
  {
    icon: "/images/koboyo-benefits/files.svg",
    title: "Find the right record",
    description:
      "Keep lab results, visit summaries, images, notes, and recordings with the right person instead of hunting through folders and inboxes.",
  },
  {
    icon: "/images/koboyo-benefits/sparkles.svg",
    title: "Understand what it says",
    description:
      "Kai can summarize uploaded documents and answer questions in plain language before your next appointment.",
  },
  {
    icon: "/images/koboyo-benefits/users.svg",
    title: "Share it with the right people",
    description:
      "Choose which health information to share and who can see it. Change access whenever you need to.",
  },
];

export default function RecordsValue() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-midnight lg:py-28">
      <div className="mx-auto max-w-c-1280 px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <Reveal className="lg:sticky lg:top-28">
            <span className="inline-flex rounded-full bg-light-lilac px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-violet">
              Why upload medical records?
            </span>
            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.08] text-midnight sm:text-5xl lg:text-[56px]">
              Your medical records should help you make better care decisions.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-text-body">
              Kaizen keeps each person&apos;s records together, so the right
              information is easier to find before an appointment or during a
              health scare.
            </p>
            <PillLink href="/how-it-works" className="mt-8">
              See how Kaizen works
            </PillLink>
          </Reveal>

          <ol className="space-y-4">
            {benefits.map(({ icon, title, description }, index) => (
              <Reveal
                as="li"
                key={title}
                delay={index * 100}
                className="rounded-3xl border border-cloud bg-white p-6 shadow-[0_18px_55px_rgba(40,27,85,0.07)] sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <Image
                    src={icon}
                    alt=""
                    width={40}
                    height={40}
                    aria-hidden="true"
                    className="h-10 w-10 shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-midnight">
                      {title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-text-body sm:text-lg">
                      {description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
