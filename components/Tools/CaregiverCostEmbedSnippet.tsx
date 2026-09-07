"use client";

import { useState } from "react";

export default function CaregiverCostEmbedSnippet({
  snippet,
}: {
  snippet: string;
}) {
  const [copied, setCopied] = useState(false);

  const copySnippet = async () => {
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-cloud bg-white shadow-card-soft dark:border-white/10 dark:bg-dark-plum">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cloud px-6 py-4 dark:border-white/10">
        <p className="text-sm font-semibold text-midnight dark:text-white">
          Paste this where you want the calculator to appear
        </p>
        <button
          type="button"
          onClick={copySnippet}
          className="rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet/20"
        >
          {copied ? "Copied" : "Copy embed code"}
        </button>
      </div>
      <pre className="max-h-80 overflow-auto bg-midnight px-6 py-5 text-left text-xs leading-5 text-white/85">
        <code>{snippet}</code>
      </pre>
    </div>
  );
}
