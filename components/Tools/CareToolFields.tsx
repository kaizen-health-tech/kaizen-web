"use client";

import GetAppButton from "@/components/Blog/GetAppButton";
import type { ToolFieldProps, ToolResultProps } from "@/types/careTools";

export const toolButtonClass =
  "min-h-11 rounded-xl border border-cloud px-4 py-2 text-sm font-semibold text-midnight hover:bg-light-lilac focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet dark:border-white/30 dark:text-white dark:hover:bg-dark-plum";

export const ToolField = ({
  id,
  label,
  value,
  onChange,
  hint,
  multiline,
  type = "text",
}: ToolFieldProps) => {
  const shared = {
    id,
    name: id,
    value,
    maxLength: multiline ? 4000 : 200,
    autoComplete: "off",
    "aria-describedby": hint ? `${id}-hint` : undefined,
    className:
      "mt-2 block min-h-11 w-full min-w-0 rounded-xl border border-ash bg-white px-3 py-2 text-base text-midnight focus:border-violet focus:outline-2 focus:outline-violet dark:border-white/30 dark:bg-black dark:text-white",
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => onChange(event.target.value),
  };
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      {hint && (
        <p
          id={`${id}-hint`}
          className="mt-1 text-sm leading-5 text-text-body dark:text-gray-300"
        >
          {hint}
        </p>
      )}
      {multiline ? (
        <textarea {...shared} rows={3} />
      ) : (
        <input {...shared} type={type} />
      )}
    </div>
  );
};

export const ToolResult = ({
  title,
  children,
  onCopy,
  copyStatus,
  cta,
}: ToolResultProps) => (
  <section aria-label="Your result" className="min-w-0">
    <div className="tool-result-actions mb-4 flex flex-wrap items-center gap-3">
      <button type="button" className={toolButtonClass} onClick={onCopy}>
        Copy result
      </button>
      <button
        type="button"
        className={toolButtonClass}
        onClick={() => window.print()}
      >
        Print / Save PDF
      </button>
      <p role="status" className="text-sm text-text-body dark:text-gray-300">
        {copyStatus}
      </p>
    </div>
    <div className="tool-result rounded-2xl border border-cloud bg-white p-5 dark:border-white/20 dark:bg-dark-plum sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary dark:text-light-lilac">
        Kaizen Health · Caregiver worksheet
      </p>
      <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
      {children}
    </div>
    <div className="tool-product-cta mt-6">
      <GetAppButton fullWidth>{cta}</GetAppButton>
    </div>
  </section>
);

export const ResultField = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <div className="break-inside-avoid border-t border-cloud py-4 dark:border-white/20">
    <dt className="text-sm font-semibold">{label}</dt>
    <dd className="mt-1 whitespace-pre-wrap break-words text-text-body dark:text-gray-300">
      {value.trim() || "Not recorded"}
    </dd>
  </div>
);
