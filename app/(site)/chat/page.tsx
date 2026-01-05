import type { Metadata } from "next";
import Chat from "@/components/Chat";

export const metadata: Metadata = {
  title: "Chat with Kai",
  description:
    "Chat with Kai, your AI health assistant. Get answers to health questions and understand your medical records.",
};

export default function ChatPage() {
  return <Chat />;
}
