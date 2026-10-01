import { Metadata } from "next";
import { DocsLayout } from "@/components/Docs/DocsLayout";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Medical Disclaimer",
  description:
    "Read the Kaizen Health medical disclaimer to understand informational limits, emergency guidance, and when to contact licensed healthcare professionals directly.",
  path: "/docs/disclaimer",
});

export default function MedicalDisclaimer() {
  return (
    <DocsLayout href="/docs/disclaimer">
      <p>
        This Medical Disclaimer ("Agreement") is entered into by and between
        Kaizen Health ("Company"), and the user ("User") of Company's Services.
        By accessing or using the Services, User agrees to be bound by the terms
        in this Agreement and acknowledges they have read and abode by the
        medical disclaimer.
      </p>
      <p>
        The information provided by Kaizen Health is for informational purposes
        only and is not intended to substitute professional medical advice,
        diagnosis, or treatment. Always seek the advice of your physician or
        other qualified healthcare provider with any questions you may have
        regarding a medical condition. Never disregard professional medical
        advice or delay in seeking it because of something you have read on this
        app.
      </p>

      <p>
        Kaizen Health does not recommend or endorse any specific tests,
        physicians, products, procedures, opinions, or other information that
        may be mentioned in the app. Reliance on any information provided by
        Kaizen Health is solely at your own risk.
      </p>

      <p>
        If you think you may have a medical emergency, call your doctor, go to
        the nearest emergency department, or call emergency services
        immediately.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions or comments about this, please contact us at{" "}
        <a href="mailto:info@kaizenhealth.io">info@kaizenhealth.io</a>.
      </p>
    </DocsLayout>
  );
}
