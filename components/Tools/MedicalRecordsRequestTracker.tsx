"use client";

import { useRef, useState } from "react";

import {
  ResultField,
  ToolField,
  ToolResult,
  toolButtonClass,
} from "@/components/Tools/CareToolFields";
import { copyToolResult, displayToolDate } from "@/lib/careTools";

const statuses = [
  "Not requested",
  "Requested",
  "Partly received",
  "Received",
] as const;
type RequestStatus = (typeof statuses)[number];
type RecordRequest = {
  id: number;
  provider: string;
  documents: string;
  requested: string;
  followUp: string;
  status: RequestStatus;
  notes: string;
};
const emptyRequest = (id: number): RecordRequest => ({
  id,
  provider: "",
  documents: "",
  requested: "",
  followUp: "",
  status: "Not requested",
  notes: "",
});
const hasEntry = (entry: RecordRequest) =>
  Boolean(
    entry.provider.trim() ||
    entry.documents.trim() ||
    entry.requested ||
    entry.followUp ||
    entry.notes.trim() ||
    entry.status !== "Not requested",
  );

export default function MedicalRecordsRequestTracker() {
  const [requests, setRequests] = useState<RecordRequest[]>([emptyRequest(1)]);
  const [copyStatus, setCopyStatus] = useState("");
  const nextId = useRef(2);
  const entries = requests.filter(hasEntry);
  const received = entries.filter(
    (entry) => entry.status === "Received",
  ).length;
  const progress = `${entries.length} ${entries.length === 1 ? "request" : "requests"} · ${received} received · ${entries.length - received} still to complete`;
  const update = (id: number, changes: Partial<Omit<RecordRequest, "id">>) => {
    setRequests((previous) =>
      previous.map((entry) =>
        entry.id === id ? { ...entry, ...changes } : entry,
      ),
    );
    setCopyStatus("");
  };
  const copy = async () => {
    const text = [
      "Medical records request tracker",
      progress,
      ...(entries.length ? entries : requests.slice(0, 1)).map((entry, index) =>
        [
          `Request ${index + 1}: ${entry.provider.trim() || "Provider not recorded"}`,
          `Documents and date range: ${entry.documents.trim() || "Not recorded"}`,
          `Requested on: ${displayToolDate(entry.requested) || "Not recorded"}`,
          `Chosen follow-up date: ${displayToolDate(entry.followUp) || "Not recorded"}`,
          `Status: ${entry.status}`,
          `Missing items and notes: ${entry.notes.trim() || "Not recorded"}`,
        ].join("\n"),
      ),
      "Planning worksheet only. Use each provider's approved request process.",
    ].join("\n\n");
    setCopyStatus(await copyToolResult(text));
  };

  return (
    <div className="tool-layout grid items-start gap-8 lg:grid-cols-2">
      <section
        className="tool-inputs min-w-0"
        aria-labelledby="tracker-input-title"
      >
        <h2 id="tracker-input-title" className="text-2xl font-semibold">
          Track your requests
        </h2>
        <p className="mb-6 mt-2 leading-6 text-text-body dark:text-gray-300">
          Add one entry per provider or document request. No records are
          requested or sent by this tool.
        </p>
        <div className="space-y-5">
          {requests.map((entry, index) => (
            <fieldset
              key={entry.id}
              className="min-w-0 rounded-2xl border border-cloud bg-white p-5 dark:border-white/20 dark:bg-dark-plum sm:p-6"
            >
              <legend className="px-2 text-lg font-semibold">
                Request {index + 1}
              </legend>
              <div className="space-y-5">
                <ToolField
                  id={`request-${entry.id}-provider`}
                  label="Provider or records office"
                  value={entry.provider}
                  onChange={(provider) => update(entry.id, { provider })}
                />
                <ToolField
                  id={`request-${entry.id}-documents`}
                  label="Documents and date range"
                  hint="For example: visit notes and lab reports from a chosen date range. Avoid patient IDs or access codes."
                  multiline
                  value={entry.documents}
                  onChange={(documents) => update(entry.id, { documents })}
                />
                <ToolField
                  id={`request-${entry.id}-requested`}
                  label="Requested on"
                  type="date"
                  value={entry.requested}
                  onChange={(requested) => update(entry.id, { requested })}
                />
                <ToolField
                  id={`request-${entry.id}-followup`}
                  label="Your follow-up date"
                  hint="Choose when you want to check in. This is not a legal deadline or an automatic reminder."
                  type="date"
                  value={entry.followUp}
                  onChange={(followUp) => update(entry.id, { followUp })}
                />
                <div>
                  <label
                    htmlFor={`request-${entry.id}-status`}
                    className="font-semibold"
                  >
                    Request status
                  </label>
                  <select
                    id={`request-${entry.id}-status`}
                    value={entry.status}
                    onChange={(event) =>
                      update(entry.id, {
                        status: event.target.value as RequestStatus,
                      })
                    }
                    className="mt-2 block min-h-11 w-full rounded-xl border border-ash bg-white px-3 py-2 text-base text-midnight focus:outline-2 focus:outline-violet dark:border-white/30 dark:bg-black dark:text-white"
                  >
                    {statuses.map((status) => (
                      <option key={status}>{status}</option>
                    ))}
                  </select>
                </div>
                <ToolField
                  id={`request-${entry.id}-notes`}
                  label="Missing items and follow-up notes"
                  multiline
                  value={entry.notes}
                  onChange={(notes) => update(entry.id, { notes })}
                />
                {requests.length > 1 && (
                  <button
                    type="button"
                    className={toolButtonClass}
                    aria-label={`Remove request ${index + 1}`}
                    onClick={() => {
                      setRequests((previous) =>
                        previous.filter((request) => request.id !== entry.id),
                      );
                      setCopyStatus("");
                    }}
                  >
                    Remove request
                  </button>
                )}
              </div>
            </fieldset>
          ))}
        </div>
        <button
          type="button"
          className={`${toolButtonClass} mt-5 bg-white dark:bg-dark-plum`}
          onClick={() => {
            const id = nextId.current++;
            setRequests((previous) => [...previous, emptyRequest(id)]);
            setCopyStatus("");
          }}
        >
          Add another request
        </button>
      </section>
      <ToolResult
        title="Your medical records request tracker"
        onCopy={copy}
        copyStatus={copyStatus}
        cta="Organize received records in Kaizen"
      >
        <p className="mt-4 text-text-body dark:text-gray-300">{progress}</p>
        <div className="mt-6 space-y-6">
          {(entries.length ? entries : requests.slice(0, 1)).map(
            (entry, index) => (
              <div key={entry.id}>
                <h3 className="break-words text-lg font-semibold">
                  {index + 1}.{" "}
                  {entry.provider.trim() || "Provider not recorded"}
                </h3>
                <dl className="mt-3">
                  <ResultField
                    label="Documents and date range"
                    value={entry.documents}
                  />
                  <ResultField
                    label="Requested on"
                    value={displayToolDate(entry.requested)}
                  />
                  <ResultField
                    label="Chosen follow-up date"
                    value={displayToolDate(entry.followUp)}
                  />
                  <ResultField label="Status" value={entry.status} />
                  <ResultField
                    label="Missing items and notes"
                    value={entry.notes}
                  />
                </dl>
              </div>
            ),
          )}
        </div>
        <p className="mt-4 text-sm leading-6 text-text-body dark:text-gray-300">
          Planning worksheet only. Use each provider's approved request process.
          Mark a request received after checking that the requested items
          arrived.
        </p>
      </ToolResult>
    </div>
  );
}
