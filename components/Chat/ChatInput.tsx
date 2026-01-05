"use client";

import { useState, useRef, KeyboardEvent } from "react";
import Image from "next/image";
import { Attachment } from "@/types/chat";

type ChatInputProps = {
  onSend: (message: string, attachments: Attachment[]) => void;
  disabled?: boolean;
  placeholder?: string;
};

const ACCEPTED_TYPES = {
  "image/jpeg": "image",
  "image/png": "image",
  "image/gif": "image",
  "image/webp": "image",
  "application/pdf": "pdf",
} as const;

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

function generateId(): string {
  return `att_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export default function ChatInput({
  onSend,
  disabled = false,
  placeholder = "Ask Kai anything...",
}: ChatInputProps) {
  const [input, setInput] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    const trimmedInput = input.trim();
    if ((!trimmedInput && attachments.length === 0) || disabled) return;

    onSend(trimmedInput, attachments);
    setInput("");
    setAttachments([]);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newAttachments: Attachment[] = [];

    for (const file of Array.from(files)) {
      const mimeType = file.type as keyof typeof ACCEPTED_TYPES;

      if (!ACCEPTED_TYPES[mimeType]) {
        continue;
      }

      if (file.size > MAX_FILE_SIZE) {
        continue;
      }

      try {
        const base64 = await fileToBase64(file);
        const url = `data:${file.type};base64,${base64}`;

        newAttachments.push({
          id: generateId(),
          type: ACCEPTED_TYPES[mimeType],
          name: file.name,
          url,
          base64,
          mimeType: file.type,
        });
      } catch {
        console.error("Failed to read file:", file.name);
      }
    }

    if (newAttachments.length > 0) {
      setAttachments((prev) => [...prev, ...newAttachments].slice(0, 3)); // Max 3 attachments
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(",")[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const removeAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((att) => att.id !== id));
  };

  const canSend = input.trim() || attachments.length > 0;

  return (
    <div className="space-y-2">
      {/* Attachment previews */}
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {attachments.map((att) => (
            <div
              key={att.id}
              className="relative flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 dark:bg-gray-700"
            >
              {att.type === "image" ? (
                <Image
                  src={att.url}
                  alt={att.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded object-cover"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded bg-red-100 dark:bg-red-900/30">
                  <svg
                    className="h-4 w-4 text-red-600 dark:text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
              <span className="max-w-[100px] truncate text-xs text-gray-600 dark:text-gray-300">
                {att.name}
              </span>
              <button
                onClick={() => removeAttachment(att.id)}
                className="ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                type="button"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input area */}
      <div className="flex items-end gap-2 rounded-xl bg-gray-50 px-3 py-2.5 ring-1 ring-gray-200 dark:bg-gray-700 dark:ring-gray-600">
        {/* Attachment button */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/gif,image/webp,application/pdf"
          multiple
          onChange={handleFileSelect}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled || attachments.length >= 3}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600 disabled:opacity-50 dark:hover:bg-gray-600 dark:hover:text-gray-200"
          type="button"
          aria-label="Attach file"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
            />
          </svg>
        </button>

        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          rows={1}
          className="max-h-[120px] min-h-[24px] flex-1 resize-none bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none dark:text-gray-200 dark:placeholder-gray-500"
        />

        <button
          onClick={handleSend}
          disabled={disabled || !canSend}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7B4DFF] to-[#6B4BFF] text-white shadow-[0_10px_20px_rgba(123,77,255,0.35)] transition-opacity disabled:opacity-50"
          type="button"
          aria-label="Send message"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
