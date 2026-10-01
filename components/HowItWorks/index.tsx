import CTA from "@/components/CTA";
import { PillLink } from "@/components/Common/PillLink";
import { Reveal } from "@/components/Common/Reveal";
import SharedDriveComparison from "@/components/HowItWorks/SharedDriveComparison";
import { HowItWorksSteps } from "@/components/HowItWorks/Steps";
import { howItWorksSteps } from "@/components/HowItWorks/stepsData";

const HowItWorksHero = () => (
  <section className="relative overflow-hidden px-4 pb-16 pt-[calc(var(--site-header-height,4.5rem)+4rem)] md:px-8 md:pb-20 lg:pt-[calc(var(--site-header-height,4.5rem)+7rem)]">
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(214,213,249,0.9),transparent_60%),radial-gradient(circle_at_90%_70%,rgba(102,230,181,0.14),transparent_40%),radial-gradient(circle_at_8%_80%,rgba(227,227,251,0.8),transparent_40%)]"
    />

    <div className="mx-auto max-w-c-1235">
      <Reveal className="mx-auto max-w-4xl text-center">
        <h1 className="text-balance">
          <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-violet ring-1 ring-midnight/5">
            How Kaizen works
          </span>
          <span className="mt-6 block text-4xl font-semibold leading-[1.04] tracking-[-0.035em] text-midnight md:text-6xl lg:text-7xl">
            Upload once. Share easily. Care better together.
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-text-body">
          Kaizen helps you store, organize, and understand your family&apos;s
          health information in one secure place. Setup takes five steps.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <PillLink href="#steps">See the five steps</PillLink>
          <PillLink href="#cta" variant="soft">
            Get the app
          </PillLink>
        </div>
      </Reveal>

      {/* Step track: jump straight to any step. */}
      <Reveal delay={150} className="mt-16 md:mt-20">
        <nav aria-label="Steps">
          <ol className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0">
            {howItWorksSteps.map((step, index) => (
              <li
                key={step.id}
                className="w-[13.5rem] shrink-0 snap-start md:w-auto"
              >
                <a
                  href={`#step-${step.id}`}
                  className="group block h-full rounded-[1.5rem] bg-white/50 p-1 ring-1 ring-midnight/5 transition duration-500 ease-out-soft hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet active:scale-[0.98]"
                >
                  <span className="flex h-full flex-col rounded-[calc(1.5rem-0.25rem)] bg-white p-4 shadow-card-soft transition-shadow duration-500 ease-out-soft group-hover:shadow-card-hover">
                    <span className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.16em] text-violet">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-lavender text-midnight transition-transform duration-500 ease-out-soft group-hover:translate-y-0.5 group-hover:scale-105"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M12 5v14M6 13l6 6 6-6" />
                        </svg>
                      </span>
                    </span>
                    <span className="mt-6 block text-[15px] font-semibold leading-5 text-midnight">
                      {step.shortTitle}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Reveal>
    </div>
  </section>
);

const HowItWorks = () => (
  <>
    <HowItWorksHero />
    <HowItWorksSteps />
    <SharedDriveComparison />
    <CTA variant="home" />
  </>
);

export default HowItWorks;
