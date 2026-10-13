import type { Metadata } from "next";

import { CareToolPage } from "@/components/Tools/CareToolPage";
import DoctorVisitSummary from "@/components/Tools/DoctorVisitSummary";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Doctor Visit Summary for Aging Parents | Kaizen Health",
  primaryKeyword: "Doctor Visit Summary Template for Aging Parents",
  description:
    "Create a free doctor visit summary for aging parents. Record clinician instructions, medication changes, and follow-up tasks. Copy or print it without signup.",
  path: "/tools/doctor-visit-summary",
});

export default function DoctorVisitSummaryPage() {
  return (
    <CareToolPage
      title="Doctor visit summary template for aging parents"
      description="Leave the appointment with a clear note for your family. Record what the clinician said, what changed, and who will handle each next step. Fill this free template on your phone, then copy or print your summary."
      path="/tools/doctor-visit-summary"
      steps={[
        "Before the visit, add the appointment details, reason for the visit, and questions you want answered.",
        "During the visit, record the clinician's instructions and any tests, referrals, or medication changes. Ask the care team to clarify anything uncertain.",
        "After the visit, compare your notes with the clinic's after-visit summary. Assign follow-up tasks, then copy or print the information you want to share.",
      ]}
      faqs={[
        {
          question: "What should a doctor visit summary include?",
          answer:
            "Include the visit date, clinician, reason for the appointment, what was discussed, treatment changes, tests, and next steps. Note who will handle each task and when. Keep unanswered questions visible.",
        },
        {
          question: "Is this the same as the clinic's after-visit summary?",
          answer:
            "No. This is your personal worksheet. The clinic's official summary contains its documented instructions. Compare the two and contact the care team about anything that conflicts or is unclear.",
        },
        {
          question: "Can I use it before the appointment?",
          answer:
            "Yes. Start with your questions and reason for the visit. Leave the other sections blank until you have information from the clinician.",
        },
        {
          question: "Can I print or share the summary with siblings?",
          answer:
            "Use Copy result to paste it into a place you choose, or Print / Save PDF for a paper or PDF copy. Get your parent's agreement before sharing their information and include only what the recipient needs.",
        },
        {
          question: "Do I need an account, and are my notes saved?",
          answer:
            "No account is needed. The builder does not upload your entries or store them in browser storage. Closing or refreshing the page clears its state; browser form restoration can vary. Copy or print first. Site analytics do not receive the worksheet values from this tool.",
        },
        {
          question: "Does the tool give medical advice?",
          answer:
            "No. It formats the notes you enter. It does not interpret records, recommend treatment, or check medication doses. Confirm instructions with your care team.",
        },
      ]}
    >
      <DoctorVisitSummary />
    </CareToolPage>
  );
}
