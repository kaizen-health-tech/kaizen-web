import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Upload Once, Access Anytime",
    description:
      "Organize documents from clinics, labs, or hospitals all in one secure place.",
    linkText: "See How Kaizen Health works →",
    linkUrl: "/how-it-works",
    image: "/images/features/feature_1.svg",
    orientation: "right",
    disclaimer: "*Not real patient data. For demonstration purposes only",
  },
  {
    id: 2,
    title: "Get Instant Clarity",
    description:
      "Kaizen AI turns your files into helpful, digestible summaries.",
    linkText: "Meet Your Personal AI Health Assistant Kai →",
    linkUrl: "/kai",
    image: "/images/features/feature_2.svg",
    orientation: "left",
    disclaimer: "*Not real patient data. For demonstration purposes only",
  },
  {
    id: 3,
    title: "Support Your Whole Family",
    description:
      "Track up to 6 people’s health info from your home screen, because care doesn’t stop with one person.",
    linkText: "Why family support matters →",
    linkUrl: "/family-support",
    image: "/images/features/feature_3.svg",
    orientation: "right",
    disclaimer: "*Not real patient data. For demonstration purposes only",
  },
  {
    id: 4,
    title: "Stay Private, Stay Connected",
    description:
      "You control what’s shared. Family caregiving with clear boundaries.",
    linkText: "See Our Privacy & Security Disclaimer →",
    linkUrl: "/docs/privacy",
    image: "/images/features/feature_4.svg",
    orientation: "left",
    disclaimer: "*Not real patient data. For demonstration purposes only",
  },
];

export default featuresData;
