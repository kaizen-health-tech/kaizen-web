import Image from "next/image";

const Inspiration = () => {
  return (
    <section
      id="inspiration"
      aria-labelledby="inspiration-heading"
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-64 lg:min-h-full">
          <Image
            src="/images/whykaizen/why_we_built_kaizen.jpeg"
            alt="An adult daughter holding her mother's hand at home"
            fill
            quality={75}
            sizes="(min-width: 1024px) 512px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="space-y-5 p-8 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            The story behind Kaizen Health
          </p>
          <h2
            id="inspiration-heading"
            className="text-2xl font-semibold text-slate-900 dark:text-white"
          >
            Inspiration
          </h2>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-100">
            Every family keeps a folder somewhere. Discharge papers in a
            drawer, lab results screenshotted on a phone, a sibling thread
            trying to remember what the specialist said. Health tools are built
            for one person at a time, while the work of caring gets split across
            a whole family.
          </p>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-200">
            We built Kaizen after listening to the people doing that work, from
            parents chasing a child&apos;s specialist visits to adult children
            tracking a parent&apos;s medications from another time zone. Their
            records were scattered across portals and inboxes, their minds went
            blank in the exam room, and underneath it all they worried they were
            missing something.
          </p>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-200">
            Kaizen means continuous improvement, which is about the pace this
            work moves at: one record filed, one summary read the night before
            an appointment, one sibling brought up to speed. Health coaches and
            physicians helped shape what those summaries say. Families decide
            who gets to see them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
