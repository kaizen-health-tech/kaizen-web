import type { Metadata } from "next";

import { DocsLayout } from "@/components/Docs/DocsLayout";
import { createPageMetadata } from "@/lib/seo";
import type { DocsTocItem } from "@/types/legal";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Consumer Health Data Privacy Policy",
  description:
    "The consumer health data Kaizen Health collects, its purposes, sources and recipients, and how to access it, withdraw consent, or request deletion.",
  path: "/docs/consumer-health",
});

const healthDataToc: DocsTocItem[] = [
  { id: "categories-and-purposes", label: "Data and purposes" },
  { id: "sources", label: "Sources" },
  { id: "data-shared", label: "Data we disclose" },
  { id: "recipients", label: "Recipients" },
  { id: "rights", label: "Your rights" },
];

const ConsumerHealthDataPage = () => (
  <DocsLayout href="/docs/consumer-health" toc={healthDataToc}>
    <h2 id="categories-and-purposes">Consumer health data and its purposes</h2>
    <p>
      Kaizen Healthcare Inc collects the following consumer health data when you
      use the health features you request, including through our WhatsApp number
      where available:
    </p>
    <ul>
      <li>
        Conditions, symptoms, medications and doses, allergies, medical and
        family history, appointments, care notes, and information in medical
        records, prescriptions, images, and lab reports you provide. We use
        these to organize, store, find, and summarize your health information
        and support sharing you request.
      </li>
      <li>
        Health and fitness measurements you provide or allow us to read, such as
        activity, sleep, heart rate, weight, blood pressure, and glucose. We use
        these for the tracking and health features you enable.
      </li>
      <li>
        Health information in chat messages, voice recordings, voice
        transcripts, and our replies, including text repeated after "I heard:"
        on WhatsApp. We use these to transcribe audio, screen messages for
        safety, and generate responses. WhatsApp audio conversion uses temporary
        files; transcripts are included in recent chat history.
      </li>
      <li>
        Health facts, summaries, and health scores derived from the information
        you provide. We use these for the summaries, recall, and insights you
        request.
      </li>
      <li>
        Identifiers, such as your account details and WhatsApp number, when
        linked to this health information. We use these to associate the
        information with you, deliver the requested service, and protect access.
      </li>
    </ul>

    <h2 id="sources">Sources of consumer health data</h2>
    <p>
      We receive health data from you; family members or caregivers you
      authorize; documents, messages, and recordings you submit; WhatsApp (Meta)
      when you use that channel; and Apple Health or Google Health Connect when
      you grant access. Our automated features also derive health facts and
      summaries from that information.
    </p>

    <h2 id="data-shared">Categories of consumer health data we disclose</h2>
    <p>
      We disclose the health content needed for the feature you request,
      including records and documents for storage or analysis, audio for
      transcription, message text and transcripts for safety screening and AI
      responses, and replies for delivery. Limited identifiers accompany content
      where needed to store it under your account or deliver it to your WhatsApp
      number. Information you choose to share with a care group is disclosed to
      that group. We do not sell consumer health data or use it for targeted
      advertising.
    </p>

    <h2 id="recipients">Categories of recipients and affiliates</h2>
    <ul>
      <li>
        Hosting and storage processors: Amazon Web Services, Google Cloud and
        Firebase, and Supabase, for the information held in the features they
        support.
      </li>
      <li>
        AI and transcription processors: OpenAI, Anthropic, and Google, for the
        content processed by the AI features you use. Google Cloud
        Speech-to-Text receives WhatsApp voice audio. OpenAI receives WhatsApp
        message text and relevant recent chat context for replies. TypeSafe
        receives message text and clarification context for automated safety
        screening where configured.
      </li>
      <li>
        Messaging services: WhatsApp (Meta), for messages, voice notes, files,
        and replies you exchange through WhatsApp. Meta also processes
        information to operate WhatsApp under its own policies.
      </li>
      <li>
        People you choose: care group members or other recipients when you
        direct us to share your information.
      </li>
      <li>
        Recipients of disclosures required or permitted by applicable law, such
        as authorities responding to valid legal process.
      </li>
    </ul>
    <p>
      We do not share consumer health data with corporate affiliates. If that
      changes, we will identify the specific affiliates here and obtain consent
      where required before the disclosure.
    </p>

    <h2 id="rights">How to exercise your consumer health data rights</h2>
    <p>
      You may request confirmation of our collection, sharing, or sale of your
      consumer health data; access to that data; a list of third parties and
      affiliates that received it and a way to contact them; withdrawal of
      consent to collection or sharing; and deletion. You can also ask us to
      correct inaccurate information. We do not require a new account to make a
      request or discriminate against you for exercising these rights.
      Withdrawing consent may prevent a feature that needs that information from
      working.
    </p>
    <p>
      Email{" "}
      <a
        href="mailto:info@kaizenhealth.io?subject=Consumer Health Data Request"
        className="underline"
      >
        info@kaizenhealth.io
      </a>{" "}
      with "Consumer Health Data Request" in the subject line, use our{" "}
      <a href="/support" className="underline">
        support form
      </a>
      , or write to Kaizen Healthcare Inc, 1875 Mission St Ste 103, San
      Francisco, CA 94103, United States. We verify your identity or authority
      before releasing or deleting data. We respond within 45 days, or sooner
      where required. Where the law allows an extension, we explain the reason
      within that period and respond within a further 45 days.
    </p>
    <p>
      For WhatsApp, send DELETE MY DATA and complete the account deletion
      verification and confirmation steps, or unlink WhatsApp in the App to
      remove its chat thread, transcripts, and delivery-retry replies. Unlinking
      can preserve health records you choose to keep in Kaizen. STOP pauses
      WhatsApp interactions; it does not delete data or close your account.
      Contact us to withdraw consent or request deletion of additional data. We
      notify processors and other recipients of deletion requests as applicable
      law requires. Copies in your devices or independently controlled WhatsApp
      history also require WhatsApp's own deletion controls.
    </p>
    <p>
      If we refuse a request, appeal by emailing{" "}
      <a
        href="mailto:info@kaizenhealth.io?subject=Privacy Request Appeal"
        className="underline"
      >
        info@kaizenhealth.io
      </a>{" "}
      with "Privacy Request Appeal" in the subject line. We respond with our
      decision and reasons within 45 days, or sooner where required. If we deny
      your appeal, you may complain to your state attorney general, including
      the{" "}
      <a
        href="https://www.atg.wa.gov/file-complaint"
        className="underline"
        target="_blank"
        rel="noreferrer"
      >
        Washington Attorney General
      </a>{" "}
      or the{" "}
      <a
        href="https://ag.nv.gov/Complaints/File_Complaint/"
        className="underline"
        target="_blank"
        rel="noreferrer"
      >
        Nevada Attorney General
      </a>
      .
    </p>
  </DocsLayout>
);

export default ConsumerHealthDataPage;
