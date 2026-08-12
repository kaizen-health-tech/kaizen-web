export type JourneyTheme = "light" | "dark";

export interface JourneyStep {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  progressLabel: string;
  theme: JourneyTheme;
  cta?: {
    label: string;
    domain: string;
  };
}
