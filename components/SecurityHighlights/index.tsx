/* ------------------------------------------------------------------
   Built to Empower Family, Designed Securely
------------------------------------------------------------------ */

import Image from "next/image";

type Highlight = {
  id: number;
  icon: string; // 96×96 SVG/PNG in /public
  title: string;
  desc: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    id: 1,
    icon: "/images/icon/slider-control.svg",
    title: "Complete Control",
    desc: "Choose what to share, when, and with whom—or keep it to yourself.",
  },
  {
    id: 2,
    icon: "/images/icon/hipaa.svg",
    title: "Fully Compliant",
    desc: "HIPAA-aligned. Protected end to end.",
  },
  {
    id: 3,
    icon: "/images/icon/shield-check.svg",
    title: "Respect for Your Privacy",
    desc: "Your files stay encrypted and never leave your hands.",
  },
];

export default function SecurityHighlights() {
  return (
    <section id="security-highlights" className="my-12">
      {/* Heading */}
      <h2 className="mb-12 text-center text-3xl font-semibold leading-tight text-[#17161D] sm:text-4xl">
        Built To Empower Family, Designed Securely
      </h2>
      {/* Gradient container */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 rounded-2xl relative">
        {/* Background squiggle SVG */}
        <Image
          src="/images/security-highlights/security-highlight-bg.svg" /* <- place the supplied SVG here */
          alt=""
          width={1200}
          height={600}
          priority
          className="pointer-events-none absolute left-0 top-4 w-full max-w-none select-none h-full object-cover"
        />
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 md:p-12">
          {/* gradient layer */}
          <div className="pointer-events-none absolute inset-0 -z-10" />

          {/* card grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {HIGHLIGHTS.map(({ id, icon, title, desc }) => (
              <div
                key={id}
                className="flex flex-col items-center rounded-3xl bg-white/70 py-12 px-6  text-center shadow-md backdrop-blur-md"
              >
                {/* Icon */}
                <Image
                  src={icon}
                  alt=""
                  width={96}
                  height={96}
                  className="mb-6 h-16 w-16 object-contain text-primary"
                />
                {/* Copy */}
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
