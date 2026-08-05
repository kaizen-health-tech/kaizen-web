// The seven topic categories from the blog redesign (README "Category colours").
// Each owns a tint (card/chip background) and a dark (text on that tint);
// darks are chosen to clear WCAG AA at 4.5:1 on their tint — never substitute
// the mid-tone palette values as text colours.
export type CategoryKey =
  | "aging-well"
  | "health-records"
  | "nutrition"
  | "pregnancy"
  | "sleep-mind"
  | "family-stories"
  | "kai-ai";

export interface CategoryDef {
  key: CategoryKey;
  label: string;
  tint: string;
  dark: string;
  /** Only needed where a large heading sits directly on the tint. */
  deep?: string;
}

export const CATEGORIES: Record<CategoryKey, CategoryDef> = {
  "aging-well": {
    key: "aging-well",
    label: "Aging well",
    tint: "#C7D0FF",
    dark: "#3C4499",
    deep: "#242A63",
  },
  "health-records": {
    key: "health-records",
    label: "Health records",
    tint: "#D9FBFB",
    dark: "#004144",
    deep: "#003C3F",
  },
  nutrition: {
    key: "nutrition",
    label: "Nutrition",
    tint: "#D2EDDB",
    dark: "#12703A",
    deep: "#0E4E29",
  },
  pregnancy: {
    key: "pregnancy",
    label: "Pregnancy",
    tint: "#EFD1E6",
    dark: "#853A6A",
  },
  "sleep-mind": {
    key: "sleep-mind",
    label: "Sleep & mind",
    tint: "#DEEDF3",
    dark: "#256F8F",
  },
  "family-stories": {
    key: "family-stories",
    label: "Family stories",
    tint: "#FBE9DD",
    dark: "#B25412",
  },
  "kai-ai": {
    key: "kai-ai",
    label: "Kai & AI",
    tint: "#E3E3FB",
    dark: "#6E40F3",
  },
};

export const CATEGORY_LIST: CategoryDef[] = [
  CATEGORIES["aging-well"],
  CATEGORIES["health-records"],
  CATEGORIES["nutrition"],
  CATEGORIES["pregnancy"],
  CATEGORIES["sleep-mind"],
  CATEGORIES["family-stories"],
  CATEGORIES["kai-ai"],
];

export const getCategory = (key: CategoryKey): CategoryDef => CATEGORIES[key];

// Single source of truth for where a category's hub page (1d) lives.
export const categoryHref = (key: CategoryKey): string => `/blog/category/${key}`;
