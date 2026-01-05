"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Image from "next/image";

type EmailVerificationProps = {
  onVerified: (email: string) => void;
};

type Step = "email" | "otp";

export default function EmailVerification({
  onVerified,
}: EmailVerificationProps) {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Verification code sent!");
        setStep("otp");
      } else {
        toast.error(data.message || "Failed to send code");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp.trim()) {
      toast.error("Please enter the verification code");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();

      if (data.success && data.verified) {
        toast.success("Verified successfully!");
        onVerified(email);
      } else {
        toast.error(data.message || "Invalid code");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("New code sent!");
        setOtp("");
      } else {
        toast.error(data.message || "Failed to resend code");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F1ECFF]">
            <Image src="/images/icon/ai.svg" alt="Kai" width={32} height={32} />
          </div>
          <h1 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            Chat with <span className="text-[#7B4DFF]">Kai</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            {step === "email"
              ? "Enter your email to start chatting"
              : `Enter the code sent to ${email}`}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-[0_16px_30px_rgba(46,32,90,0.12)] dark:bg-gray-800">
          {step === "email" ? (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendOTP()}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#7B4DFF] focus:outline-none focus:ring-2 focus:ring-[#7B4DFF]/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
                  disabled={isLoading}
                />
              </div>
              <button
                onClick={handleSendOTP}
                disabled={isLoading || !email.trim()}
                className="w-full rounded-lg bg-gradient-to-br from-[#7B4DFF] to-[#6B4BFF] py-3 font-medium text-white shadow-[0_10px_20px_rgba(123,77,255,0.35)] transition-opacity disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Continue"}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="otp"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Verification code
                </label>
                <input
                  id="otp"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  onKeyDown={(e) => e.key === "Enter" && handleVerifyOTP()}
                  placeholder="123456"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-center text-2xl font-semibold tracking-[0.5em] text-gray-900 placeholder-gray-400 focus:border-[#7B4DFF] focus:outline-none focus:ring-2 focus:ring-[#7B4DFF]/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500"
                  disabled={isLoading}
                />
              </div>
              <button
                onClick={handleVerifyOTP}
                disabled={isLoading || otp.length !== 6}
                className="w-full rounded-lg bg-gradient-to-br from-[#7B4DFF] to-[#6B4BFF] py-3 font-medium text-white shadow-[0_10px_20px_rgba(123,77,255,0.35)] transition-opacity disabled:opacity-50"
              >
                {isLoading ? "Verifying..." : "Verify"}
              </button>
              <div className="flex items-center justify-between text-sm">
                <button
                  onClick={() => {
                    setStep("email");
                    setOtp("");
                  }}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  disabled={isLoading}
                >
                  Change email
                </button>
                <button
                  onClick={handleResendOTP}
                  className="text-[#7B4DFF] hover:underline"
                  disabled={isLoading}
                >
                  Resend code
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </div>
  );
}
