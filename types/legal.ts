import type { ReactNode } from "react";

export type LegalDocHref =
  | "/docs/privacy"
  | "/docs/terms"
  | "/docs/disclaimer"
  | "/docs/eula"
  | "/docs/healthscore";

export type LegalDoc = {
  href: LegalDocHref;
  /** Page heading and card title. */
  title: string;
  /** Shorter label for the docs navigation. */
  navLabel: string;
  /** One or two sentences for the /docs index card. */
  summary: string;
  effectiveDate: string;
  /** Omitted when the document has never been revised. */
  lastUpdated?: string;
};

export type DocsTocItem = {
  /** Matches the `id` of a heading inside the document. */
  id: string;
  label: string;
};

export type DocsLayoutProps = {
  href: LegalDocHref;
  /** "On this page" links, shown beside long documents on large screens. */
  toc?: DocsTocItem[];
  children: ReactNode;
};
