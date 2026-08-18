"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type VerificationStatus = "verifying" | "success" | "expired" | "error";

const copyByStatus: Record<
  VerificationStatus,
  { eyebrow: string; title: string; description: string }
> = {
  verifying: {
    eyebrow: "Securing your account",
    title: "Verifying your email…",
    description: "This should only take a moment. Please keep this page open.",
  },
  success: {
    eyebrow: "Email verified",
    title: "You’re all set",
    description:
      "Your email address has been verified. Return to Kaizen Health to finish setting up your account.",
  },
  expired: {
    eyebrow: "Link unavailable",
    title: "This verification link has expired",
    description:
      "The link may have expired or already been used. Return to the Kaizen Health app to request a fresh email.",
  },
  error: {
    eyebrow: "Couldn’t verify email",
    title: "Something went wrong",
    description:
      "We couldn’t verify your email with this link. Return to the app and request a new verification email.",
  },
};

export default function VerificationClient() {
  const searchParams = useSearchParams();
  const startedRef = useRef(false);
  const [status, setStatus] = useState<VerificationStatus>("verifying");

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const mode = searchParams.get("mode");
    const actionCode = searchParams.get("oobCode");
    const apiKey = searchParams.get("apiKey");

    if (mode !== "verifyEmail" || !actionCode || !apiKey) {
      setStatus("error");
      return;
    }

    const applyVerificationCode = async () => {
      try {
        const response = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${encodeURIComponent(apiKey)}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ oobCode: actionCode }),
          },
        );
        const result = await response.json();

        if (!response.ok) {
          const errorCode = result?.error?.message || "";
          setStatus(
            errorCode.includes("EXPIRED_OOB_CODE") ||
              errorCode.includes("INVALID_OOB_CODE")
              ? "expired"
              : "error",
          );
          return;
        }

        setStatus("success");
      } catch {
        setStatus("error");
      }
    };

    applyVerificationCode();
  }, [searchParams]);

  const copy = copyByStatus[status];

  return (
    <main className="relative flex min-h-[78vh] items-center justify-center px-4 pb-20 pt-36 sm:px-6">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-cloud bg-white px-6 py-12 text-center shadow-card-soft sm:px-12 sm:py-16 dark:border-strokedark dark:bg-blacksection">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-light-lilac/70 blur-3xl dark:bg-light-plum/20" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-aquamarine/30 blur-3xl dark:bg-aquamarine/10" />

        <div className="relative">
          <Image
            src="/images/logo/kaizen-logo.png"
            width={180}
            height={56}
            alt="Kaizen Health"
            priority
            className="mx-auto h-auto w-[180px]"
          />

          <div
            className={`mx-auto mt-10 flex h-20 w-20 items-center justify-center rounded-full ${
              status === "success"
                ? "bg-aquamarine/25 text-primary"
                : status === "verifying"
                  ? "bg-light-lilac text-violet"
                  : "bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-300"
            }`}
            aria-hidden="true"
          >
            {status === "verifying" ? (
              <span className="h-9 w-9 animate-spin rounded-full border-4 border-current border-r-transparent" />
            ) : status === "success" ? (
              <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none">
                <path
                  d="m5 12.5 4.2 4.2L19 7"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <span className="text-4xl font-semibold">!</span>
            )}
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-violet">
            {copy.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-midnight sm:text-5xl dark:text-white">
            {copy.title}
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-text-body dark:text-gray-300">
            {copy.description}
          </p>

          {status !== "verifying" && (
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="kaizenhealth://"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-violet px-7 py-3 font-semibold text-white transition hover:bg-violet-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
              >
                Open Kaizen Health
              </a>
              <Link
                href="/support"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-steel px-7 py-3 font-semibold text-midnight transition hover:border-violet hover:text-violet dark:text-white"
              >
                Contact support
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
