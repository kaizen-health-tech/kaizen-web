import Image from "next/image";

const Inspiration = () => {
  return (
    <section
      id="inspiration"
      aria-labelledby="inspiration-heading"
      className="relative overflow-hidden bg-[#201839] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#6E40F3]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#66E6B5]/12 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
        <p className="text-sm text-white/55">The story behind Kaizen Health</p>
        <h2
          id="inspiration-heading"
          className="mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl"
        >
          Inspiration
        </h2>

        <p className="mx-auto mt-10 max-w-4xl text-xl leading-relaxed text-white/90 md:text-[28px] md:leading-[1.5]">
          Every family keeps a folder somewhere. Discharge papers in a drawer,
          lab results screenshotted on a phone, a sibling thread trying to
          remember what the specialist said. Health tools are built for one
          person at a time, while the work of caring gets split across a whole
          family.
        </p>

        <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
          We built Kaizen after listening to the people doing that work, from
          parents chasing a child&apos;s specialist visits to adult children
          tracking a parent&apos;s medications from another time zone. Their
          records were scattered across portals and inboxes, their minds went
          blank in the exam room, and underneath it all they worried they were
          missing something.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
          Kaizen means continuous improvement, which is about the pace this work
          moves at: one record filed, one summary read the night before an
          appointment, one sibling brought up to speed. Health coaches and
          physicians helped shape what those summaries say. Families decide who
          gets to see them.
        </p>

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl">
          <Image
            src="/images/whykaizen/why_we_built_kaizen.jpeg"
            alt="An adult daughter holding her mother's hand at home"
            width={1600}
            height={900}
            quality={75}
            sizes="(min-width: 1024px) 896px, 100vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
