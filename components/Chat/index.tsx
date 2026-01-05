"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Message, ChatSession, ChatState, Attachment } from "@/types/chat";
import EmailVerification from "./EmailVerification";
import ChatInterface from "./ChatInterface";
import AppStoreModal from "./AppStoreModal";

const STORAGE_KEY = "kaizen_chat_session";
const CHAT_LIMIT = 5;

function getChatSession(): ChatSession | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as ChatSession;
  } catch {
    return null;
  }
}

function saveChatSession(session: ChatSession): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

function getTodayDate(): string {
  return new Date().toISOString().split("T")[0];
}

function generateMessageId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export default function Chat() {
  const [hasMounted, setHasMounted] = useState(false);
  const [chatState, setChatState] = useState<ChatState>("email_input");
  const [session, setSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const storedSession = getChatSession();
    if (storedSession) {
      const today = getTodayDate();

      if (storedSession.lastChatDate !== today) {
        storedSession.chatCount = 0;
        storedSession.lastChatDate = today;
        saveChatSession(storedSession);
      }

      setSession(storedSession);
      setChatState("chat_active");
    }
  }, []);

  const handleVerified = (email: string) => {
    const newSession: ChatSession = {
      email,
      verifiedAt: new Date().toISOString(),
      chatCount: 0,
      lastChatDate: getTodayDate(),
    };
    saveChatSession(newSession);
    setSession(newSession);
    setChatState("chat_active");
  };

  const handleSendMessage = async (content: string, attachments: Attachment[]) => {
    if (!session || isLoading) return;

    if (session.chatCount >= CHAT_LIMIT) {
      setShowLimitModal(true);
      return;
    }

    const userMessage: Message = {
      id: generateMessageId(),
      role: "user",
      content,
      timestamp: new Date(),
      attachments: attachments.length > 0 ? attachments : undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    const payload = {
      messages: [...messages, userMessage],
      userEmail: session.email,
    };

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success && data.message) {
        const assistantMessage: Message = {
          id: generateMessageId(),
          role: "assistant",
          content: data.message,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);

        const updatedSession: ChatSession = {
          ...session,
          chatCount: session.chatCount + 1,
          lastChatDate: getTodayDate(),
        };
        saveChatSession(updatedSession);
        setSession(updatedSession);
      } else {
        toast.error(data.message || "Failed to get response");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 pt-24 dark:bg-gray-900 md:pt-28">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 pb-6">
        {chatState === "email_input" || chatState === "otp_verification" ? (
          <EmailVerification onVerified={handleVerified} />
        ) : (
          <div className="flex max-h-[calc(100vh-10rem)] flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 md:max-h-[calc(100vh-12rem)]">
            <ChatInterface
              messages={messages}
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              chatCount={session?.chatCount || 0}
              chatLimit={CHAT_LIMIT}
            />
          </div>
        )}
      </div>

      {showLimitModal && <AppStoreModal />}
    </div>
  );
}
