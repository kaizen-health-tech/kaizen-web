import Link from "next/link";

import { PillArrow } from "@/components/Common/PillArrow";
import { formatReleaseDate } from "@/components/Updates/releaseImpact";

import type { Release, ReleasePagerProps } from "@/types/release";

const PagerCard = ({
  release,
  direction,
}: {
  release: Release;
  direction: "older" | "newer";
}) => {
  const isNewer = direction === "newer";

  return (
    <Link
      href={`/updates/${release.slug}`}
      className="group block h-full rounded-[2rem] bg-lavender/60 p-1.5 ring-1 ring-midnight/5 transition duration-500 ease-out-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet active:scale-[0.99]"
    >
      <span
        className={`flex h-full items-center gap-5 rounded-[calc(2rem-0.375rem)] bg-white p-6 shadow-card-soft transition-shadow duration-500 ease-out-soft group-hover:shadow-card-hover md:p-7 ${
          isNewer ? "flex-row-reverse text-right" : ""
        }`}
      >
        <PillArrow
          direction={isNewer ? "forward" : "back"}
          variant="outline"
          size="md"
        />
        <span className="min-w-0 flex-1">
          <span className="block text-xs font-bold uppercase tracking-[0.16em] text-violet">
            {isNewer ? "Newer" : "Older"} · Version {release.version}
          </span>
          <span className="mt-2 block text-lg font-semibold leading-snug text-midnight text-balance">
            {release.title}
          </span>
          <span className="mt-1 block text-sm text-graphite">
            {formatReleaseDate(release.publishedAt, "short")}
          </span>
        </span>
      </span>
    </Link>
  );
};

/** Older release on the left, newer on the right, like a timeline read left to right. */
const ReleasePager = ({ newer, older }: ReleasePagerProps) => {
  if (!newer && !older) return null;

  return (
    <nav aria-label="More releases" className="grid gap-4 md:grid-cols-2">
      <div>{older && <PagerCard release={older} direction="older" />}</div>
      <div>{newer && <PagerCard release={newer} direction="newer" />}</div>
    </nav>
  );
};

export default ReleasePager;
