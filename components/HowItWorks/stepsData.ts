import type { HowItWorksStep } from "@/types/howItWorks";

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: "account",
    shortTitle: "Create your account",
    title: "Create your account",
    description:
      "Sign up and set up your profile. It becomes the home base where you organize and manage your family's health care.",
    showStoreLinks: true,
  },
  {
    id: "invite",
    shortTitle: "Invite your care circle",
    title: "Invite your loved ones to your care circle",
    description:
      "Bring in the people who help with care, from a partner to a sibling to a parent.",
    points: [
      "Tap the + button, choose Invite Family Member, and send a secure email invite.",
      "They download the app and join your care circle.",
    ],
  },
  {
    id: "home",
    shortTitle: "Add family to home",
    title: "Add family to your home screen",
    description:
      "Keep the people you care for one tap away from the moment you open the app.",
    points: [
      "Once they join, either of you can add the other to the family bubble on your home screen.",
      "See the updates they share with you in real time.",
    ],
  },
  {
    id: "upload",
    shortTitle: "Upload and share",
    title: "Upload health records and choose who sees them",
    description:
      "Add records in whatever form you have them, then decide who can see each one.",
    points: [
      "Scan documents, upload photos and files, or record audio.",
      "Choose whether to share each record, and change it anytime.",
    ],
  },
  {
    id: "insights",
    shortTitle: "Ask Kai",
    title: "Get AI-powered insights from Kai",
    description:
      "Kai summarizes your documents and answers questions about them, so you can understand your records and make clearer, informed decisions.",
    note: "Kai explains and organizes your records. It does not diagnose or replace your care team.",
  },
];
