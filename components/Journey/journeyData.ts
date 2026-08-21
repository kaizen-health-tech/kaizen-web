import { JourneyStep } from "@/types/journey";

const CALMER_TAGLINE = "A calmer way to manage family health".toUpperCase();

const journeyData: JourneyStep[] = [
  {
    id: "scattered",
    eyebrow: CALMER_TAGLINE,
    title: "Your family’s health info is everywhere.",
    description: "Portal downloads. Lab PDFs. Medication lists. Visit notes.",
    progressLabel: "Scattered",
    theme: "light",
  },
  {
    id: "organized",
    eyebrow: CALMER_TAGLINE,
    title: "Put every record in one secure place.",
    description: "Kaizen sorts every record under the right person.",
    progressLabel: "Organized",
    theme: "light",
  },
  {
    id: "clear",
    eyebrow: CALMER_TAGLINE,
    title: "Ask Kai. Get the short version.",
    description: "Kai helps you find the details buried in your records.",
    progressLabel: "Clear",
    theme: "light",
  },
  {
    id: "connected",
    eyebrow: CALMER_TAGLINE,
    title: "Keep the right people in the loop.",
    description:
      "Invite family, choose what to share, and coordinate care together.",
    progressLabel: "Connected",
    theme: "light",
  },
  {
    id: "prepared",
    eyebrow: "Family health, in one place".toUpperCase(),
    title: "Show up prepared.",
    description:
      "Your records, context, and questions are ready when care happens.",
    progressLabel: "Prepared",
    theme: "dark",
    cta: {
      label: "Get Kaizen Health",
      domain: "kaizenhealth.io",
    },
  },
];

export default journeyData;
