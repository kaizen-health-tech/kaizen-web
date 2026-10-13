"use client";

import { useState } from "react";

import {
  ResultField,
  ToolField,
  ToolResult,
} from "@/components/Tools/CareToolFields";
import { copyToolResult, displayToolDate } from "@/lib/careTools";

const fields = [
  {
    key: "person",
    label: "Parent's name or nickname",
    hint: "A nickname is enough.",
  },
  { key: "date", label: "Visit date", type: "date" as const },
  { key: "provider", label: "Clinician or clinic" },
  { key: "reason", label: "Reason for the visit", multiline: true },
  {
    key: "questions",
    label: "Questions to ask",
    multiline: true,
    hint: "Before the visit, put your most important questions here.",
  },
  {
    key: "discussion",
    label: "What the clinician said",
    multiline: true,
    hint: "Record their words. Mark anything uncertain as a question.",
  },
  {
    key: "medications",
    label: "Medication or treatment changes",
    multiline: true,
    hint: "Copy the clinician's instructions. Confirm names, doses, and timing with the care team.",
  },
  {
    key: "tests",
    label: "Tests, referrals, and expected results",
    multiline: true,
  },
  { key: "actions", label: "Next steps: who, what, and when", multiline: true },
  {
    key: "contact",
    label: "When to contact the care team",
    multiline: true,
    hint: "Use the clinician's instructions; this tool does not suggest warning signs.",
  },
  { key: "unanswered", label: "Questions still unanswered", multiline: true },
];

export default function DoctorVisitSummary() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [copyStatus, setCopyStatus] = useState("");
  const resultValue = (key: string) =>
    key === "date" ? displayToolDate(values[key] || "") : values[key] || "";
  const copy = async () => {
    const text = [
      "Doctor visit summary",
      ...fields.map(
        ({ key, label }) =>
          `${label}: ${resultValue(key).trim() || "Not recorded"}`,
      ),
      "Personal notes only. Confirm against the clinic's after-visit summary.",
    ].join("\n\n");
    setCopyStatus(await copyToolResult(text));
  };

  return (
    <div className="tool-layout grid items-start gap-8 lg:grid-cols-2">
      <section
        className="tool-inputs min-w-0 rounded-2xl border border-cloud bg-white p-5 dark:border-white/20 dark:bg-dark-plum sm:p-8"
        aria-labelledby="visit-input-title"
      >
        <h2 id="visit-input-title" className="text-2xl font-semibold">
          Add your visit notes
        </h2>
        <p className="mb-6 mt-2 leading-6 text-text-body dark:text-gray-300">
          Every field is optional. Your summary updates as you type.
        </p>
        <div className="space-y-5">
          {fields.map(({ key, label, ...options }) => (
            <ToolField
              key={key}
              id={`visit-${key}`}
              label={label}
              {...options}
              value={values[key] || ""}
              onChange={(value) => {
                setValues((previous) => ({ ...previous, [key]: value }));
                setCopyStatus("");
              }}
            />
          ))}
        </div>
      </section>
      <ToolResult
        title="Your doctor visit summary"
        onCopy={copy}
        copyStatus={copyStatus}
        cta="Keep family visit records in Kaizen"
      >
        <dl className="mt-5">
          {fields.map(({ key, label }) => (
            <ResultField key={key} label={label} value={resultValue(key)} />
          ))}
        </dl>
        <p className="mt-4 text-sm leading-6 text-text-body dark:text-gray-300">
          Personal notes only. Confirm against the clinic's after-visit summary.
          Follow your care team's instructions.
        </p>
      </ToolResult>
    </div>
  );
}
