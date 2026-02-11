import type { Metadata } from "next";
import Chat from "@/components/Chat";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "AI Health Assistant Chat",
  description:
    "Chat with Kai to understand lab results, ask health questions, and get family-focused guidance based on the records you choose to share securely.",
  path: "/chat",
  image: "/images/open-graph/home.png",
});

export default function ChatPage() {
  return <Chat />;
}
