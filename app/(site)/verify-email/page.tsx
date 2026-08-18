import type { Metadata } from "next";
import { Suspense } from "react";

import { createPageMetadata } from "@/lib/seo";

import VerificationClient from "./VerificationClient";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Verify Your Email",
  description:
    "Confirm the email address connected to your Kaizen Health account, then return securely to the app to finish account setup and onboarding.",
  path: "/verify-email",
  noIndex: true,
});

export default function VerifyEmailPage() {
  return (
    <Suspense>
      <VerificationClient />
    </Suspense>
  );
}
