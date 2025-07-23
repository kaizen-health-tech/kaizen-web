export interface Feature {
  id: number;
  title: string;
  description: string;
  icon?: string; // keeps old icon cards working
  /** New fields ↓ */
  image: string; // mock-up JPG/PNG/SVG (1200 × 800 or so)
  linkText?: string;
  linkUrl?: string;
  /** `left` | `right`  ➜ image position on desktop */
  orientation?: "left" | "right";
  disclaimer?: string; // optional *Not real patient data… line
}
