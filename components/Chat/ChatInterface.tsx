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
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
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
              AI Response <span className="text-[#7B4DFF]">Comparison</span>
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Kai (Medical AI) vs Generic AI
            </p>
          </div>
        </div>
        <div className="text-xs text-gray-400">
          {chatCount}/{chatLimit} chats today
        </div>
      </div>

      {/* Messages */}
      <div
        ref={messagesContainerRef}
        className="min-h-0 flex-1 overflow-y-auto p-4"
      >
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
              AI Response Comparison
            </h2>
            <p className="max-w-md text-sm text-gray-500 dark:text-gray-400">
              Ask a health question to see how Kai (medical AI) responds
              compared to a generic model.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex gap-4">
                {/* Kai loading panel */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F1ECFF]">
                      <Image
                        src="/images/icon/ai.svg"
                        alt="Kai"
                        width={14}
                        height={14}
                      />
                    </div>
                    <span className="text-xs font-semibold text-[#7B4DFF]">
                      Kai (Medical AI)
                    </span>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
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
                {/* Generic loading panel */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                      <svg
                        className="h-3.5 w-3.5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-500">
                      Generic
                    </span>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
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
