"use client";

import { useId, useMemo, useState } from "react";
import ReleaseCard from "@/components/Updates/ReleaseCard";
import { Release } from "@/types/release";

type ReleaseExplorerProps = {
  releases: Release[];
  tags: string[];
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const ReleaseExplorer = ({ releases, tags }: ReleaseExplorerProps) => {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchInputId = useId();

  const filteredReleases = useMemo(() => {
    const normalizedTerm = normalize(searchTerm.trim());
    return releases.filter((release) => {
      const matchesTag =
        activeTag === "all" || release.tags.includes(activeTag);
      const matchesSearch =
        normalizedTerm.length === 0 ||
        normalize(
          [
            release.title,
            release.summary,
            release.highlights.map((highlight) => highlight.title).join(" "),
            release.tags.join(" "),
          ].join(" "),
        ).includes(normalizedTerm);

      return matchesTag && matchesSearch;
    });
  }, [activeTag, releases, searchTerm]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 rounded-2xl border border-black/5 bg-white p-6 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-blacksection dark:shadow-none lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:max-w-lg">
          <label
            htmlFor={searchInputId}
            className="mb-2 block text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300"
          >
            Search updates
          </label>
          <div className="relative">
            <input
              type="search"
              id={searchInputId}
              placeholder="Search by feature, tag, or version…"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-full border border-slate-200 bg-white px-5 py-3 text-base text-slate-800 shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:bg-[#0E1015] dark:text-white"
            />
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        <div className="w-full space-y-6 lg:max-w-xl">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
              Filter by tag
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveTag("all")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTag === "all"
                    ? "bg-primary text-white shadow"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                All
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeTag === tag
                      ? "bg-primary text-white shadow"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-6">
        {filteredReleases.length === 0 ? (
          <li className="rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center text-slate-500 dark:border-white/10 dark:bg-blacksection dark:text-slate-300">
            No updates match those filters yet. Try clearing your filters or
            check back soon—new releases ship every month.
          </li>
        ) : (
          filteredReleases.map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))
        )}
      </ul>
    </div>
  );
};

export default ReleaseExplorer;
