import type { LegalDoc, LegalDocHref } from "@/types/legal";

/**
 * The documents under /docs, in navigation order. Dates must match the dates
 * the legal text itself states; update both together when a policy changes.
 */
export const legalDocs: LegalDoc[] = [
  {
    href: "/docs/privacy",
    title: "Privacy Policy",
    navLabel: "Privacy Policy",
    summary:
      "What we collect, why we collect it, who we share it with, and how to export or delete your family's data.",
    effectiveDate: "March 1, 2024",
    lastUpdated: "August 17, 2026",
  },
  {
    href: "/docs/terms",
    title: "Terms & Conditions",
    navLabel: "Terms & Conditions",
    summary:
      "The agreement that covers your account, subscriptions, acceptable use, and how disputes are resolved.",
    effectiveDate: "March 1, 2024",
    lastUpdated: "August 17, 2026",
  },
  {
    href: "/docs/disclaimer",
    title: "Medical Disclaimer",
    navLabel: "Medical Disclaimer",
    summary:
      "Kaizen Health organizes information. It does not diagnose or treat, and it never replaces your care team.",
    effectiveDate: "March 1, 2024",
  },
  {
    href: "/docs/eula",
    title: "End User License Agreement",
    navLabel: "End User License",
    summary:
      "The license terms for the Kaizen Health mobile app, including subscriptions and AI features.",
    effectiveDate: "March 1, 2024",
    lastUpdated: "August 17, 2026",
  },
  {
    href: "/docs/healthscore",
    title: "How Your Health Score Is Calculated",
    navLabel: "Health Score Method",
    summary:
      "The metrics behind your health score and the clinical sources we benchmark them against.",
    effectiveDate: "March 1, 2024",
  },
];

export const getLegalDoc = (href: LegalDocHref): LegalDoc => {
  const doc = legalDocs.find((item) => item.href === href);
  if (!doc) throw new Error(`Unknown legal document: ${href}`);
  return doc;
};
