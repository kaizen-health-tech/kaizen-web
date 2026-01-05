"use client";

import { Message } from "@/types/chat";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

type MessageBubbleProps = {
  message: Message;
};

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === "user";
  const attachments = message.attachments || [];

  return (
    <div
      className={`flex items-start gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1ECFF]">
          <Image src="/images/icon/ai.svg" alt="Kai" width={18} height={18} />
        </div>
      )}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-gradient-to-br from-[#7B4DFF] to-[#6B4BFF] text-white"
            : "border border-gray-200 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
        }`}
      >
        {/* Attachments */}
        {attachments.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {attachments.map((att) => (
              <div key={att.id} className="overflow-hidden rounded-lg">
                {att.type === "image" ? (
                  <Image
                    src={att.url}
                    alt={att.name}
                    width={200}
                    height={150}
                    className="max-h-[150px] w-auto rounded-lg object-cover"
                  />
                ) : (
                  <div className="flex items-center gap-2 rounded-lg bg-white/20 px-3 py-2">
                    <svg
                      className="h-5 w-5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="max-w-[120px] truncate text-xs">
                      {att.name}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Message content */}
        {message.content && (
          <>
            {isUser ? (
              <p className="whitespace-pre-wrap text-sm leading-relaxed">
                {message.content}
              </p>
            ) : (
              <div className="prose prose-sm max-w-none dark:prose-invert prose-headings:mb-2 prose-headings:mt-3 prose-headings:text-sm prose-headings:font-semibold prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-a:text-[#7B4DFF] prose-a:no-underline hover:prose-a:underline">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="!mt-0 first:!mt-0">{children}</h2>
                    ),
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7B4DFF] hover:underline"
                      >
                        {children}
                      </a>
                    ),
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
