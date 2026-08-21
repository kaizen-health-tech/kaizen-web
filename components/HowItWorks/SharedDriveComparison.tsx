import { CheckCircleIcon, FolderIcon } from "@heroicons/react/24/outline";

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

export default function SharedDriveComparison() {
  return (
    <section
      aria-labelledby="shared-drive-heading"
      className="overflow-hidden bg-gradient-to-b from-gray-50 to-lavender px-4 pb-20 md:px-8 md:pb-28"
    >
      <div className="mx-auto max-w-c-1280 overflow-hidden rounded-[32px] bg-midnight text-white shadow-[0_28px_80px_rgba(40,27,85,0.2)]">
        <div className="grid gap-8 border-b border-white/10 p-7 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:p-14">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.14em] text-aquamarine">
              Why not a shared drive?
            </span>
            <h2
              id="shared-drive-heading"
              className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl"
            >
              Kaizen connects medical records to the people and care they belong
              to.
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
              <FolderIcon aria-hidden="true" className="h-4 w-4" /> Shared drive
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
            If you only need a place to archive documents, a shared drive may be
            enough. Kaizen is for families who also need to understand those
            records and use them to coordinate care.
          </p>
        </div>
      </div>
    </section>
  );
}
