/* ------------------------------------------------------------------
   Built With Real Stories / Backed By Real Needs Section
------------------------------------------------------------------ */

import Image from "next/image";

type Story = {
  id: number;
  quote: string;
  featureIcon: string; // 48 × 48 px SVG/PNG
  featureTitle: string;
  featureDesc: string;
  bgImage: string; // 600 × 800 px-ish jpg
};

const STORIES: Story[] = [
  {
    id: 1,
    quote:
      "Our records are all over the place. It is challenging to find information when needed.",
    featureIcon: "/images/stories/records.svg",
    featureTitle: "One Place",
    featureDesc:
      "Kaizen gives you one place to upload, organize, and access everything securely.",
    bgImage: "/images/stories/stories_1.png",
  },
  {
    id: 2,
    quote:
      "Every new doctor visit feels like starting over and repeating the symptoms.",
    featureIcon: "/images/stories/ai.svg",
    featureTitle: "AI-Powered Insight",
    featureDesc:
      "Kaizen AI summarizes your documents, so you can share clear insights faster.",
    bgImage: "/images/stories/stories_2.png",
  },
  {
    id: 3,
    quote:
      "I want to choose what medical information I share with my family so they're aware.",
    featureIcon: "/images/stories/share.svg",
    featureTitle: "Under Your Control",
    featureDesc:
      "Kaizen lets you choose what to share and with whom. No oversharing, no surprises.",
    bgImage: "/images/stories/stories_3.png",
  },
];

export default function BuiltWithStories() {
  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Heading */}
        <h2 className="mb-4 text-center text-3xl leading-[1.25] md:text-5xl md:leading-[1.25] font-semibold text-[#17161D]">
          Built with Real Stories, <br className="hidden sm:block" />
          Backed by Real Needs.
        </h2>

        {/* Sub-copy */}
        <p className="mx-auto mb-8 max-w-3xl text-center text-gray-600">
          We spoke with hundreds of families navigating modern healthcare.
          <br />
          <span className="font-semibold">
            Over 70%<sup>*</sup> of family caregivers say they feel overwhelmed
            trying to manage medical information.
          </span>{" "}
          <br />
          And{" "}
          <span className="font-semibold">
            60%<sup>*</sup> say they’ve had to repeat a health story to every
            new doctor.
          </span>
        </p>

        {/* Card grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map(
            ({
              id,
              quote,
              featureIcon,
              featureTitle,
              featureDesc,
              bgImage,
            }) => (
              <article
                key={id}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                {/* Background photo */}
                <Image
                  src={bgImage}
                  alt={featureTitle}
                  width={600}
                  height={640}
                  quality={75}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Purple overlay for quote readability */}
                <div className="absolute inset-0" />

                {/* Quote */}
                <blockquote className="absolute inset-x-0 top-0 p-6 text-xl font-medium leading-snug text-white">
                  {quote}
                </blockquote>

                {/* Bottom feature card */}
                <div className="absolute inset-x-0 bottom-0 z-10">
                  <div className="flex flex-col gap-4 m-6 p-3 bg-white rounded-2xl">
                    {/* Icon */}
                    <Image
                      src={featureIcon}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 flex-shrink-0 rounded-md object-contain"
                    />
                    {/* Text */}
                    <div>
                      <h3 className="mb-1 text-2xl font-semibold text-[#281B55]">
                        {featureTitle}
                      </h3>
                      <p className="text-lg text-[#17161D]">{featureDesc}</p>
                    </div>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
