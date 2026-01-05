export type Attachment = {
  id: string;
  type: "image" | "pdf";
  name: string;
  url: string; // base64 data URL for preview
  base64: string; // raw base64 data for API
  mimeType: string;
};

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  attachments?: Attachment[];
};

export type ChatSession = {
  email: string;
  verifiedAt: string;
  chatCount: number;
  lastChatDate: string;
};

export type OTPEntry = {
  otp: string;
  expiresAt: Date;
};

export type ChatState = "email_input" | "otp_verification" | "chat_active";
