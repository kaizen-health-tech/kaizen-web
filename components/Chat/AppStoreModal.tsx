"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type AppStoreModalProps = {
  onClose?: () => void;
};

export default function AppStoreModal({ onClose }: AppStoreModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="relative w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl dark:bg-gray-900"
      >
        {onClose && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="Close"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F1ECFF]">
          <Image src="/images/icon/ai.svg" alt="Kai" width={32} height={32} />
        </div>

        <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
          You&apos;ve reached today&apos;s limit
        </h2>

        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Download the Kaizen Health app for unlimited access to Kai and all
          premium features.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://bit.ly/kz-app-store"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/images/hero/app-store-dark.svg"
              alt="Download on App Store"
              width={140}
              height={42}
            />
          </a>
          <a
            href="https://bit.ly/kz-play-store"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/images/hero/android-store-dark.svg"
              alt="Get it on Google Play"
              width={140}
              height={42}
            />
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          Come back tomorrow for 5 more free chats!
        </p>
      </motion.div>
    </motion.div>
  );
}
