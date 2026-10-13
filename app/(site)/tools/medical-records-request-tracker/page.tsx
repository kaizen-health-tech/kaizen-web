import type { Metadata } from "next";

import { CareToolPage } from "@/components/Tools/CareToolPage";
import MedicalRecordsRequestTracker from "@/components/Tools/MedicalRecordsRequestTracker";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Medical Records Request Tracker Template | Kaizen Health",
  primaryKeyword: "Medical Records Request Tracker Template",
  description:
    "Track medical records requests with a free template. List providers, requested documents, follow-up dates, and missing items. Copy or print without signup.",
  path: "/tools/medical-records-request-tracker",
});

export default function MedicalRecordsRequestTrackerPage() {
  return (
    <CareToolPage
      title="Medical records request tracker template"
      description="Know which records you requested, which arrived, and what still needs a follow-up. Use this free tracker for your own records or a family member's care. Add requests on your phone, then copy or print the list."
      path="/tools/medical-records-request-tracker"
      steps={[
        "Add the provider or records office and the documents and date range you need. Check the receiving clinician's requirements when preparing for an appointment.",
        "Request records through the provider's approved process. Record the date and choose your own follow-up date here.",
        "Update the status as records arrive. List missing items, check that the request is complete, and copy or print your tracker before leaving the page.",
      ]}
      faqs={[
        {
          question: "What should a medical records request tracker include?",
          answer:
            "Track the provider, documents and date range, request date, your chosen follow-up date, status, and missing items. Use one entry per provider or separate request.",
        },
        {
          question: "Does this tool request records for me?",
          answer:
            "No. It organizes your checklist. Use the provider's portal, records office, or approved form to submit a request. This worksheet is not an authorization or a legal request form.",
        },
        {
          question: "What if only some records arrive?",
          answer:
            "Choose Partly received and list the missing documents in the notes. Change the status to Received once you have checked that the requested items arrived.",
        },
        {
          question: "Will it remind me, or calculate a legal deadline?",
          answer:
            "No. The follow-up date is a date you choose, not a calculated deadline. The tool sends no reminders. Use your calendar if you need an alert, and ask the records office about its process and timing.",
        },
        {
          question: "Can I track requests for a parent?",
          answer:
            "Yes. The worksheet can organize requests you manage for a family member. The provider still decides what consent or authorization it needs before releasing records; using this tracker does not grant access.",
        },
        {
          question: "Is the tracker free, and does it save my entries?",
          answer:
            "It is free with no signup. The tool does not upload entries or save them in browser storage. Copy or print before closing or refreshing; browser form restoration can vary. Site analytics do not receive the worksheet values from this tool.",
        },
      ]}
    >
      <MedicalRecordsRequestTracker />
    </CareToolPage>
  );
}
