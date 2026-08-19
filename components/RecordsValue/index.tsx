import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  FolderIcon,
  HeartIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: "/images/koboyo-benefits/files.svg",
    title: "Find the right record",
    description:
      "Keep lab results, visit summaries, images, notes, and recordings with the right person instead of hunting through folders and inboxes.",
  },
  {
    icon: "/images/koboyo-benefits/sparkles.svg",
    title: "Understand the record",
    description:
      "Kai can summarize uploaded documents and answer questions in plain language before your next appointment.",
  },
  {
    icon: "/images/koboyo-benefits/users.svg",
    title: "Share with the right people",
    description:
      "Choose which health information to share and who can see it. Change access whenever you need to.",
  },
];

const audiences = [
  {
    icon: UserIcon,
    title: "Managing your own care",
    description:
      "Keep test results, medication details, and visit notes together when your care spans more than one doctor.",
  },
  {
    icon: UserGroupIcon,
    title: "Keeping a family organized",
    description:
      "Track records, appointments, and updates for your children, your partner, or the whole household.",
  },
  {
    icon: HeartIcon,
    title: "Supporting someone you love",
    description:
      "Stay current on an aging parent or relative's care, whether they live nearby or across the world.",
  },
];

const comparison = [
  {
    label: "Built for",
    drive: "Storing and syncing general files",
    kaizen: "Managing a family's health information",
  },
  {
    label: "Organization",
    drive: "Folders and filenames you maintain",
    kaizen: "Records connected to the right person",
  },
  {
    label: "Understanding",
    drive: "Open and read each document yourself",
    kaizen: "Get summaries and ask Kai questions",
  },
  {
    label: "Sharing",
    drive: "Share a link, file, or folder",
    kaizen: "Choose what health information to share and with whom",
  },
  {
    label: "Other health details",
    drive: "Documents remain separate from daily care",
    kaizen: "Keep records alongside medications, events, and updates",
  },
];

export default function RecordsValue() {
  return (
    <section className="overflow-hidden bg-lavender py-20 text-midnight lg:py-28">
      <div className="mx-auto max-w-c-1280 px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
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
            <Link
              href="/how-it-works"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-violet px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
            >
              See how Kaizen works
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <ol className="space-y-4">
            {benefits.map(({ icon, title, description }) => (
              <li
                key={title}
                className="group rounded-3xl border border-white bg-white p-6 shadow-[0_18px_55px_rgba(40,27,85,0.07)] transition duration-300 hover:-translate-y-1 sm:p-8"
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
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24 border-t border-light-heather pt-20 lg:mt-32 lg:pt-24">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.14em] text-violet">
              Who Kaizen is for
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-midnight sm:text-5xl">
              Made for the person who keeps everyone&apos;s health story
              straight.
            </h2>
            <p className="mt-5 text-lg leading-8 text-text-body">
              Kaizen is for people doing the practical work of care, whether
              it&apos;s for themselves or someone who depends on them.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {audiences.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-3xl border border-light-heather bg-white/70 p-7"
              >
                <Icon aria-hidden="true" className="h-8 w-8 text-violet" />
                <h3 className="mt-8 text-xl font-semibold text-midnight">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-text-body">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-[32px] bg-midnight text-white shadow-[0_28px_80px_rgba(40,27,85,0.2)] lg:mt-28">
          <div className="grid gap-8 border-b border-white/10 p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:p-14">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-aquamarine">
                Why not a shared drive?
              </span>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                Kaizen connects medical records to the people and care they
                belong to.
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/70 lg:text-right">
              A shared drive works well for backup. It still leaves you to name
              folders, read every file, and piece together what changed. Kaizen
              keeps records with each person&apos;s health profile and can
              summarize what you upload.
            </p>
          </div>

          <div className="p-4 sm:p-8 lg:p-10">
            <div className="hidden grid-cols-[0.55fr_1fr_1fr] gap-5 px-5 pb-4 text-xs font-bold uppercase tracking-[0.14em] text-white/50 md:grid">
              <span>Compare</span>
              <span className="flex items-center gap-2">
                <FolderIcon aria-hidden="true" className="h-4 w-4" /> Shared
                drive
              </span>
              <span className="flex items-center gap-2 text-aquamarine">
                <CheckCircleIcon aria-hidden="true" className="h-4 w-4" />
                Kaizen
              </span>
            </div>

            <dl className="space-y-3">
              {comparison.map(({ label, drive, kaizen }) => (
                <div
                  key={label}
                  className="grid gap-4 rounded-2xl bg-white/[0.06] p-5 md:grid-cols-[0.55fr_1fr_1fr] md:items-center"
                >
                  <dt className="font-semibold text-white">{label}</dt>
                  <dd className="flex gap-2 text-white/60">
                    <FolderIcon
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 md:hidden"
                    />
                    <span>{drive}</span>
                  </dd>
                  <dd className="flex gap-2 font-medium text-white">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-aquamarine"
                    />
                    <span>{kaizen}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mx-auto max-w-3xl px-4 pb-3 pt-8 text-center text-sm leading-6 text-white/55">
              If you only need a place to archive documents, a shared drive may
              be enough. Kaizen is for families who also need to understand
              those records and use them to coordinate care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
