"use client";

import { useRef, useEffect } from "react";
import { Message, Attachment } from "@/types/chat";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import Image from "next/image";

type ChatInterfaceProps = {
  messages: Message[];
  onSendMessage: (content: string, attachments: Attachment[]) => void;
  isLoading: boolean;
  chatCount: number;
  chatLimit: number;
};

export default function ChatInterface({
  messages,
  onSendMessage,
  isLoading,
  chatCount,
  chatLimit,
}: ChatInterfaceProps) {
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Small delay to ensure content is rendered
    const timeoutId = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeoutId);
  }, [messages, isLoading]);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1ECFF]">
            <Image src="/images/icon/ai.svg" alt="Kai" width={22} height={22} />
          </div>
          <div>
            <h1 className="font-semibold text-gray-900 dark:text-white">
              Chat with <span className="text-[#7B4DFF]">Kai</span>
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Your AI health assistant
            </p>
          </div>
        </div>
        <div className="text-xs text-gray-400">
          {chatCount}/{chatLimit} chats today
        </div>
      </div>

      {/* Messages */}
      <div ref={messagesContainerRef} className="min-h-0 flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F1ECFF]">
              <Image
                src="/images/icon/ai.svg"
                alt="Kai"
                width={32}
                height={32}
              />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Hi! I&apos;m Kai
            </h2>
            <p className="max-w-sm text-sm text-gray-500 dark:text-gray-400">
              Ask me anything about health, wellness, or understanding your
              medical records. I&apos;m here to help!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1ECFF]">
                  <Image
                    src="/images/icon/ai.svg"
                    alt="Kai"
                    width={18}
                    height={18}
                  />
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-[#7B4DFF]" />
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-[#7B4DFF]"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-[#7B4DFF]"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="shrink-0 border-t border-gray-200 p-3 dark:border-gray-700">
        <ChatInput
          onSend={onSendMessage}
          disabled={isLoading}
          placeholder="Ask Kai anything..."
        />
      </div>
    </div>
  );
}
