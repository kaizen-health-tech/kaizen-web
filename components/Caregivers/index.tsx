import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const caregiverPromises = [
  "The latest records, kept with the right person",
  "Clear answers before the next appointment",
  "Updates the family can share without the group-chat scramble",
];

export default function Caregivers() {
  return (
    <section
      aria-labelledby="caregivers-heading"
      className="overflow-hidden bg-[#F3F0E8] py-20 text-midnight sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-c-1280 px-4 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[720px] lg:mx-0">
            <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-aquamarine/25 blur-3xl" />
            <div className="absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-[#D9CDF8]/55 blur-3xl" />

            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] bg-[#DDD8CD] shadow-[0_28px_80px_rgba(40,27,85,0.13)] sm:rounded-[44px]">
              <Image
                src="/images/blog/caregiver-guide.png"
                alt="A daughter spending time at home with her parents"
                fill
                sizes="(max-width: 1024px) 100vw, 56vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/35 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-[0_12px_35px_rgba(28,24,36,0.12)] backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-[340px] sm:rounded-3xl sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-violet">
                  Ready when you need it
                </p>
                <p className="mt-2 text-base font-semibold leading-snug text-midnight sm:text-lg">
                  “What changed after Mom&apos;s last appointment?”
                </p>
              </div>
            </div>

            <div className="absolute -right-3 top-8 hidden rounded-full border border-white/70 bg-white/90 px-5 py-3 text-sm font-semibold text-midnight shadow-[0_12px_32px_rgba(40,27,85,0.1)] backdrop-blur-md sm:block lg:-right-8">
              Everyone has the same update
            </div>
          </div>

          <div className="mx-auto max-w-[590px] lg:mx-0">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet">
              For family caregivers
            </p>
            <h2
              id="caregivers-heading"
              className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.025em] text-midnight sm:text-5xl lg:text-[64px]"
            >
              Caregiving already asks a lot. The health admin shouldn&apos;t.
            </h2>
            <p className="mt-7 max-w-[540px] text-lg leading-8 text-text-body sm:text-xl sm:leading-9">
              Kaizen keeps the records, questions, and family updates behind
              someone&apos;s care in one place. Spend less time piecing together
              what happened and more time with the person you love.
            </p>

            <ul
              className="mt-8 space-y-4"
              aria-label="Ways Kaizen helps caregivers"
            >
              {caregiverPromises.map((promise) => (
                <li
                  key={promise}
                  className="flex items-start gap-3 text-base font-medium leading-7 text-midnight sm:text-lg"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-aquamarine ring-4 ring-aquamarine/20"
                  />
                  <span>{promise}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/how-it-works"
              className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-midnight px-6 py-3 font-bold text-white shadow-[0_14px_34px_rgba(40,27,85,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-light-plum focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
            >
              See how Kaizen helps
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
