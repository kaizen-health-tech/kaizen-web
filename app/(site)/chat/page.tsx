import type { Metadata } from "next";
import Chat from "@/components/Chat";

export const metadata: Metadata = {
  title: "Chat with Kai | Kaizen Health",
  description:
    "Chat with Kai, your AI health assistant. Get answers to health questions and understand your medical records.",
  alternates: {
    canonical: "https://www.kaizenhealth.io/chat",
  },
  openGraph: {
    title: "Chat with Kai | Kaizen Health",
    description:
      "Chat with Kai, your AI health assistant. Get answers to health questions and understand your medical records.",
    url: "https://www.kaizenhealth.io/chat",
    siteName: "Kaizen Health",
    type: "website",
    images: [
      {
        url: "https://www.kaizenhealth.io/images/open-graph/home.png",
        width: 1200,
        height: 630,
        alt: "Chat with Kai - Kaizen Health AI Assistant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat with Kai | Kaizen Health",
    description:
      "Chat with Kai, your AI health assistant. Get answers to health questions and understand your medical records.",
    images: ["https://www.kaizenhealth.io/images/open-graph/home.png"],
  },
};

export default function ChatPage() {
  return <Chat />;
}
