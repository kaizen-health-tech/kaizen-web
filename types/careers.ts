export type RoleSection = {
  heading: string;
  /** A paragraph, a bullet list, or both. */
  body?: string;
  items?: string[];
};

export type Role = {
  /** URL-safe id, used as the in-page anchor. */
  slug: string;
  title: string;
  team: string;
  location: string;
  employmentType: string;
  isFilled: boolean;
  /** One or two sentences shown on the role card. */
  summary: string;
  sections: RoleSection[];
};

export type RoleCardProps = {
  role: Role;
};
