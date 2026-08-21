import Image from "next/image";

const FEATURES = [
  {
    title: "Summarize a record",
    description:
      "Upload a lab result or medical record. Kai pulls out the details and explains them in plain language.",
    image: "/images/why-kai/summarize.png",
  },
  {
    title: "Ask about your records",
    description:
      "Ask about a file you uploaded. Kai answers from the information you chose to share.",
    image: "/images/why-kai/ask-anything.png",
  },
  {
    title: "Kai remembers what you share",
    description:
      "Kai keeps the context you share, so you do not have to explain the same record again.",
    image: "/images/why-kai/memory.png",
  },
  {
    title: "Privacy under your control",
    description:
      "You choose what to share and who can see it. Kaizen is HIPAA compliant and encrypts your data.",
    image: "/images/why-kai/privacy.png",
  },
];

export default function WhyKai() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        backgroundColor: "#E8EEF5",
        backgroundImage:
          "radial-gradient(circle at 0% 20%, rgba(201, 194, 232, 0.52), transparent 30%), radial-gradient(circle at 100% 78%, rgba(244, 212, 193, 0.5), transparent 29%)",
      }}
    >
      <div className="relative mx-auto w-full max-w-5xl px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight text-[#1C1824] md:text-5xl">
            Meet <span className="text-[#7B4DFF]">Kai</span>, your guide to the
            records you upload.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#5C5567] md:text-lg">
            Ask about a lab result, medication list, or visit note. Kai answers
            from the information you choose to share.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl items-center gap-3 rounded-full bg-white px-5 py-3 shadow-[0_12px_30px_rgba(61,39,108,0.14)] ring-1 ring-[#E7DFFB]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1ECFF]">
            <Image
              src="/images/icon/ai.svg"
              alt="AI icon"
              width={20}
              height={20}
            />
          </div>
          <span className="text-sm font-medium text-[#6E6A7A]">
            Ask Kai about your records
          </span>
          <button
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7B4DFF] to-[#6B4BFF] text-white shadow-[0_10px_20px_rgba(123,77,255,0.35)]"
            type="button"
            aria-label="Send message"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="mt-10">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-5 md:flex-row md:items-center">
            <div className="hidden w-[180px] shrink-0 md:flex lg:w-[210px]">
              <Image
                src="/images/why-kai/kai.png"
                alt="Kai assistant"
                width={420}
                height={420}
                quality={75}
                sizes="210px"
                className="h-auto w-full"
              />
            </div>
            <div className="w-full max-w-3xl">
              <Image
                src="/images/why-kai/kai-features.png"
                alt="Kai features preview"
                width={1200}
                height={900}
                quality={75}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="flex gap-4 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-[0_16px_30px_rgba(46,32,90,0.12)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl">
                <Image
                  src={feature.image}
                  alt={`${feature.title} icon`}
                  width={44}
                  height={44}
                  className="h-auto w-full"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#2B2436]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[#5C5567]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
