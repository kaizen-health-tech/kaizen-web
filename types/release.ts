export type ReleaseImpact = "new" | "improved" | "fixed";

export type ReleaseHighlight = {
  title: string;
  description: string;
  impact?: ReleaseImpact;
};

export type ReleaseLinkBullet = {
  label: string;
  url?: string;
};

export type ReleaseSectionMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ReleaseSection = {
  heading: string;
  body: string;
  bullets?: Array<string | ReleaseLinkBullet>;
  media?: ReleaseSectionMedia;
};

export type ReleaseResource = {
  label: string;
  url: string;
};

export type Release = {
  slug: string;
  version: string;
  title: string;
  summary: string;
  publishedAt: string;
  status?: "preview" | "beta" | "general-availability";
  audience?: "caregivers" | "providers" | "admins" | "everyone";
  tags: string[];
  highlights: ReleaseHighlight[];
  sections: ReleaseSection[];
  resources?: ReleaseResource[];
  heroImage?: string;
  heroImageAlt?: string;
  heroImageWidth?: number;
  heroImageHeight?: number;
  estimatedRollout?: string;
};

export type ReleaseGrouping = {
  version: string;
  releaseDate: Date;
};

export type ReleaseImpactCounts = Record<ReleaseImpact, number>;

export type ReleaseImpactStyle = {
  /** Short label for chips, such as "New". */
  label: string;
  /** Heading for a group of changes, such as "New features". */
  groupLabel: string;
  chip: string;
  dot: string;
};

export type ReleaseCardProps = {
  release: Release;
};

export type ReleaseExplorerProps = {
  releases: Release[];
  tags: string[];
};

export type ReleaseImpactSummaryProps = {
  counts: ReleaseImpactCounts;
  className?: string;
};

export type ReleasePagerProps = {
  newer?: Release;
  older?: Release;
};
