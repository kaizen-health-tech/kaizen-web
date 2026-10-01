"use client";

import { useId, useMemo, useState } from "react";

import ReleaseCard from "@/components/Updates/ReleaseCard";

import type { ReleaseExplorerProps } from "@/types/release";

const ALL_TOPICS = "all";

const normalize = (value: string) =>
  value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

const chipClassName = (isActive: boolean) =>
  `flex whitespace-nowrap rounded-full px-4 py-2 text-[15px] ring-1 transition duration-500 ease-out-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet active:scale-[0.98] ${
    isActive
      ? "bg-midnight font-semibold text-white ring-midnight"
      : "bg-white text-text-body ring-midnight/[0.08] hover:bg-lavender hover:text-midnight"
  }`;

const ReleaseExplorer = ({ releases, tags }: ReleaseExplorerProps) => {
  const [activeTag, setActiveTag] = useState<string>(ALL_TOPICS);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchInputId = useId();
  const resultsId = useId();

  const filteredReleases = useMemo(() => {
    const normalizedTerm = normalize(searchTerm.trim());
    return releases.filter((release) => {
      const matchesTag =
        activeTag === ALL_TOPICS || release.tags.includes(activeTag);
      const matchesSearch =
        normalizedTerm.length === 0 ||
        normalize(
          [
            release.version,
            release.title,
            release.summary,
            release.highlights
              .map((highlight) => `${highlight.title} ${highlight.description}`)
              .join(" "),
            release.tags.join(" "),
          ].join(" "),
        ).includes(normalizedTerm);

      return matchesTag && matchesSearch;
    });
  }, [activeTag, releases, searchTerm]);

  const clearFilters = () => {
    setActiveTag(ALL_TOPICS);
    setSearchTerm("");
  };

  return (
    <div>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-midnight md:text-4xl">
            Every release
          </h2>
          <p
            id={resultsId}
            aria-live="polite"
            className="mt-2 text-base text-graphite"
          >
            {filteredReleases.length === releases.length
              ? `${releases.length} releases, newest first.`
              : `Showing ${filteredReleases.length} of ${releases.length} releases.`}
          </p>
        </div>

        <div className="w-full rounded-full bg-lavender/60 p-1.5 ring-1 ring-midnight/5 md:max-w-sm">
          <label htmlFor={searchInputId} className="sr-only">
            Search updates
          </label>
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-graphite"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              id={searchInputId}
              placeholder="Search a feature or version"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-controls={resultsId}
              className="min-h-11 w-full rounded-full bg-white py-2.5 pl-11 pr-5 text-base text-midnight shadow-card-soft placeholder:text-space focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
            />
          </div>
        </div>
      </div>

      <div className="mt-8" role="group" aria-label="Filter by topic">
        <ul className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
          {[ALL_TOPICS, ...tags].map((tag) => (
            <li key={tag} className="shrink-0">
              <button
                type="button"
                aria-pressed={activeTag === tag}
                onClick={() => setActiveTag(tag)}
                className={chipClassName(activeTag === tag)}
              >
                {tag === ALL_TOPICS ? "All topics" : tag}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {filteredReleases.length === 0 ? (
        <div className="mt-14 rounded-[2rem] bg-lavender p-10 text-center md:p-14">
          <p className="text-lg font-semibold text-midnight">
            No releases match that search.
          </p>
          <p className="mt-2 text-base text-text-body">
            Try a different word, or clear the filters to see every release.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 text-base font-semibold text-violet underline decoration-violet/30 underline-offset-4 transition-colors duration-500 ease-out-soft hover:text-violet-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="mt-14 space-y-12 md:space-y-16">
          {filteredReleases.map((release) => (
            <ReleaseCard key={release.slug} release={release} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReleaseExplorer;
