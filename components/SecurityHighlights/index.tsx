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
    title: "You choose what to share",
    desc: "Share a record or keep it private. Change access whenever you need to.",
  },
  {
    id: 2,
    icon: "/images/icon/hipaa.svg",
    title: "Built for health information",
    desc: "Kaizen is HIPAA compliant and protects the health data you add.",
  },
  {
    id: 3,
    icon: "/images/icon/shield-check.svg",
    title: "Encrypted by default",
    desc: "Kaizen encrypts your files and protects access to them.",
  },
];

export default function SecurityHighlights() {
  return (
    <section
      id="security-highlights"
      className="relative overflow-hidden bg-[#E2EFEA] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#B8D8D2]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#DDE4BD]/55 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet">
            Privacy and sharing
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#17161D] md:text-5xl">
            Your family&apos;s records stay in your control.
          </h2>
        </div>

        <div className="mt-12 rounded-[36px] border border-white/70 bg-white/35 p-5 shadow-[0_24px_70px_rgba(40,27,85,0.08)] backdrop-blur-sm sm:p-8 md:p-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {HIGHLIGHTS.map(({ id, icon, title, desc }) => (
              <div
                key={id}
                className="flex flex-col items-center rounded-3xl border border-white bg-white/80 px-6 py-10 text-center shadow-[0_14px_40px_rgba(40,27,85,0.07)] backdrop-blur-md"
              >
                {/* Icon */}
                <Image
                  src={icon}
                  alt={`${title} icon`}
                  width={96}
                  height={96}
                  className="mb-6 h-16 w-16 object-contain text-primary"
                />
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
