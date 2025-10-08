export type ReleaseHighlight = {
  title: string;
  description: string;
  impact?: "new" | "improved" | "fixed";
};

export type ReleaseLinkBullet = {
  label: string;
  url?: string;
};

export type ReleaseSection = {
  heading: string;
  body: string;
  bullets?: Array<string | ReleaseLinkBullet>;
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
  estimatedRollout?: string;
};

export type ReleaseGrouping = {
  version: string;
  releaseDate: Date;
};
