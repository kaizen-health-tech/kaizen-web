import type { Metadata } from "next";
import CaregiverCostCalculator from "@/components/Tools/CaregiverCostCalculator";
import { EmbedFrameSync } from "@/components/Tools/EmbedFrameSync";
import { CAREGIVER_CALCULATOR_EMBED_ID } from "@/lib/embeds";
import { COMPANY_NAME, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: `Caregiver Cost Calculator | ${COMPANY_NAME}`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function CaregiverCostCalculatorEmbedPage() {
  return (
    <main className="p-3 sm:p-4">
      <EmbedFrameSync id={CAREGIVER_CALCULATOR_EMBED_ID} />

      <h1 className="sr-only">
        Caregiver cost calculator by {COMPANY_NAME}
      </h1>

      <CaregiverCostCalculator variant="embed" />

      <p className="mt-3 text-center text-xs leading-5 text-graphite">
        Free tool by{" "}
        <a
          href={absoluteUrl("/?utm_source=embed&utm_medium=referral")}
          target="_blank"
          rel="noopener"
          className="font-semibold text-violet underline decoration-violet/30 underline-offset-2"
        >
          {COMPANY_NAME}
        </a>
        . Educational estimate, not financial advice. Inputs stay in the
        visitor&rsquo;s browser.
      </p>
    </main>
  );
}
