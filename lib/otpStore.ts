import { OTPEntry } from "@/types/chat";

const otpStore = new Map<string, OTPEntry>();

const OTP_EXPIRY_MINUTES = 5;

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function setOTP(email: string, otp: string): void {
  const expiresAt = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000);
  otpStore.set(email.toLowerCase(), { otp, expiresAt });
}

export function getOTP(email: string): OTPEntry | null {
  const entry = otpStore.get(email.toLowerCase());
  if (!entry) return null;

  if (new Date() > entry.expiresAt) {
    otpStore.delete(email.toLowerCase());
    return null;
  }

  return entry;
}

export function verifyOTP(email: string, otp: string): boolean {
  const entry = getOTP(email);
  if (!entry) return false;

  const isValid = entry.otp === otp;
  if (isValid) {
    otpStore.delete(email.toLowerCase());
  }

  return isValid;
}

export function deleteOTP(email: string): void {
  otpStore.delete(email.toLowerCase());
}
