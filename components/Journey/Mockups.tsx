import {
  ArrowDownTrayIcon,
  ClipboardDocumentListIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HeartIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

/* ---------- shared bits ---------- */

const MiniCard = ({
  icon,
  tint,
  title,
  subtitle,
  style,
  rotate = "",
}: {
  icon: ReactNode;
  tint: string;
  title: string;
  subtitle: string;
  style: React.CSSProperties;
  rotate?: string;
}) => (
  <div
    className={`absolute flex w-[168px] items-center gap-3 rounded-xl bg-white px-3.5 py-3 shadow-lg ring-1 ring-black/5 ${rotate}`}
    style={style}
  >
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
      style={{ backgroundColor: tint }}
    >
      {icon}
    </div>
    <div className="min-w-0">
      <p className="truncate text-sm font-semibold text-[#1C1824]">{title}</p>
      <p className="truncate text-xs text-[#8B879A]">{subtitle}</p>
    </div>
  </div>
);

const Node = ({
  label,
  x,
  y,
  children,
  ring = "",
}: {
  label: string;
  x: number;
  y: number;
  children: ReactNode;
  ring?: string;
}) => (
  <div
    className="absolute flex flex-col items-center gap-2"
    style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
  >
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold shadow-md ${ring}`}
    >
      {children}
    </div>
    <span className="text-xs font-medium text-[#5C5567]">{label}</span>
  </div>
);

/* ---------- 01 · Scattered ---------- */

export const ScatteredMockup = () => (
  <div className="relative mx-auto aspect-[6/5] w-full max-w-[420px]">
    <div className="absolute inset-[18%] rounded-full border border-dashed border-violet/25" />
    <div className="absolute inset-[30%] rounded-full border border-dashed border-violet/25" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl ring-1 ring-black/5">
        <MagnifyingGlassIcon
          className="h-9 w-9 text-violet"
          strokeWidth={1.75}
        />
      </div>
    </div>

    <MiniCard
      icon={<DocumentDuplicateIcon className="h-5 w-5 text-[#E0538A]" />}
      tint="#FBE3ED"
      title="Lab results"
      subtitle="PDF · March"
      style={{ top: "4%", left: "0%" }}
      rotate="-rotate-2"
    />
    <MiniCard
      icon={<LinkIcon className="h-5 w-5 text-aquamarine" />}
      tint="#E4FBF2"
      title="Medication list"
      subtitle="Updated last week"
      style={{ top: "18%", right: "0%" }}
      rotate="rotate-2"
    />
    <MiniCard
      icon={<ClipboardDocumentListIcon className="h-5 w-5 text-[#D9A441]" />}
      tint="#FBF1DD"
      title="Visit notes"
      subtitle="Specialist follow-up"
      style={{ bottom: "16%", left: "-2%" }}
      rotate="rotate-1"
    />
    <MiniCard
      icon={<ArrowDownTrayIcon className="h-5 w-5 text-[#4F8FE0]" />}
      tint="#E3EEFB"
      title="Portal download"
      subtitle="4 pages"
      style={{ bottom: "2%", right: "-2%" }}
      rotate="-rotate-1"
    />
  </div>
);

/* ---------- 02 · Organized ---------- */

export const OrganizedMockup = () => (
  <div className="mx-auto w-full max-w-[420px]">
    <div className="relative aspect-[6/5] w-full">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <line x1="50" y1="50" x2="16" y2="18" className="journey-dashed" />
        <line x1="50" y1="50" x2="84" y2="14" className="journey-dashed" />
        <line x1="50" y1="50" x2="14" y2="82" className="journey-dashed" />
        <line x1="50" y1="50" x2="84" y2="86" className="journey-dashed" />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet to-dark-plum shadow-2xl sm:h-36 sm:w-36">
          <FolderIcon
            className="h-11 w-11 text-white/90 sm:h-14 sm:w-14"
            strokeWidth={1.5}
          />
          <HeartIcon
            className="absolute h-6 w-6 text-aquamarine"
            style={{
              top: "52%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            fill="currentColor"
          />
        </div>
      </div>

      <MiniCard
        icon={<div className="h-4 w-4 rounded bg-violet/40" />}
        tint="#F1ECFF"
        title="Record"
        subtitle="Kept private"
        style={{ top: "2%", left: "-2%" }}
        rotate="-rotate-3"
      />
      <MiniCard
        icon={<div className="h-4 w-4 rounded bg-aquamarine/50" />}
        tint="#E4FBF2"
        title="Record"
        subtitle="Kept private"
        style={{ top: "0%", right: "-4%" }}
        rotate="rotate-3"
      />
      <MiniCard
        icon={<div className="h-4 w-4 rounded bg-violet/40" />}
        tint="#F1ECFF"
        title="Record"
        subtitle="Kept private"
        style={{ bottom: "6%", left: "-4%" }}
        rotate="rotate-2"
      />
    </div>

    <div className="mt-4 flex justify-center sm:mt-5">
      <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1C1824] shadow-md ring-1 ring-black/5">
        <ShieldCheckIcon className="h-4 w-4 text-violet" />
        Private by design
      </div>
    </div>
  </div>
);

/* ---------- 03 · Clear ---------- */

const InsightRow = ({
  title,
  subtitle,
  last = false,
}: {
  title: string;
  subtitle: string;
  last?: boolean;
}) => (
  <div
    className={`flex items-start gap-2 py-2 sm:gap-3 sm:py-3 ${
      last ? "" : "border-b border-cloud"
    }`}
  >
    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-aquamarine sm:h-5 sm:w-5" />
    <div>
      <p className="text-xs font-semibold text-[#1C1824] sm:text-sm">{title}</p>
      <p className="text-[10px] leading-4 text-[#8B879A] sm:text-xs">
        {subtitle}
      </p>
    </div>
  </div>
);

export const ClearMockup = () => (
  <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
    <div className="flex items-center gap-3 border-b border-cloud p-3 sm:p-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-[#8A6FE8] sm:h-10 sm:w-10">
        <SparklesIcon className="h-5 w-5 text-white" />
      </div>
      <div>
        <p className="text-sm font-semibold text-[#1C1824]">Kai</p>
        <p className="text-xs text-[#8B879A]">Your health assistant</p>
      </div>
      <span className="ml-auto h-2.5 w-2.5 rounded-full bg-aquamarine" />
    </div>

    <div className="space-y-2.5 p-2.5 sm:space-y-4 sm:p-4">
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-violet/10 px-3 py-2 text-xs font-medium text-[#2B2436] sm:px-4 sm:py-2.5 sm:text-sm">
          What should we review before Dad’s visit?
        </div>
      </div>

      <div className="rounded-xl bg-lavender/70 p-3 sm:p-4">
        <div className="mb-1 flex items-center gap-1 text-[10px] font-bold tracking-wide text-violet sm:gap-1.5 sm:text-xs">
          <SparklesIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          FROM THE RECORDS YOU SHARED
        </div>
        <InsightRow title="Recent visit notes" subtitle="2 documents" />
        <InsightRow title="Medication changes" subtitle="1 update to review" />
        <InsightRow
          title="Questions for the appointment"
          subtitle="Saved to your care plan"
          last
        />
      </div>
    </div>
  </div>
);

/* ---------- 04 · Connected ---------- */

export const ConnectedMockup = () => (
  <div className="mx-auto w-full max-w-[420px] rounded-3xl bg-white p-4 shadow-2xl ring-1 ring-black/5 sm:p-6">
    <p className="mb-2 text-sm font-semibold text-[#1C1824]">
      Dad’s care circle
    </p>

    <div className="relative h-[220px] sm:h-[250px] lg:h-[290px]">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <line x1="20" y1="12" x2="50" y2="34" className="journey-dashed" />
        <line x1="80" y1="12" x2="50" y2="34" className="journey-dashed" />
        <line x1="50" y1="40" x2="50" y2="58" className="journey-dashed" />
        <line x1="50" y1="76" x2="50" y2="88" className="journey-dashed" />
      </svg>

      <Node label="Anna" x={20} y={12} ring="bg-[#F1ECFF] text-violet">
        AM
      </Node>
      <Node label="James" x={80} y={12} ring="bg-[#E4FBF2] text-[#2FA57C]">
        JR
      </Node>
      <Node label="Dad" x={50} y={34} ring="bg-lavender text-violet">
        <UserIcon className="h-6 w-6" strokeWidth={1.75} />
      </Node>

      <div
        className="absolute flex w-[86%] items-center gap-3 rounded-xl bg-[#201839] px-3 py-2.5 shadow-xl sm:px-4 sm:py-3"
        style={{ left: "50%", top: "58%", transform: "translate(-50%, 0)" }}
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-aquamarine/20">
          <ShieldCheckIcon className="h-5 w-5 text-aquamarine" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">
            Sharing controls
          </p>
          <p className="truncate text-xs text-white/50">
            You decide who sees what
          </p>
        </div>
        <span className="ml-auto inline-flex h-5 w-9 shrink-0 items-center rounded-full bg-gradient-to-r from-violet to-aquamarine p-0.5">
          <span className="ml-auto h-4 w-4 rounded-full bg-white" />
        </span>
      </div>

      <Node label="Care team" x={50} y={90} ring="bg-[#FBF1DD] text-[#B8862F]">
        DR
      </Node>
    </div>
  </div>
);

/* ---------- 05 · Prepared ---------- */

const ChecklistRow = ({
  icon,
  title,
  subtitle,
  last = false,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  last?: boolean;
}) => (
  <div
    className={`flex items-center gap-3 p-3 sm:p-4 ${last ? "" : "border-b border-cloud"}`}
  >
    <div className="flex h-9 w-9 shrink-0 items-center justify-center text-violet">
      {icon}
    </div>
    <div className="min-w-0 flex-1">
      <p className="truncate text-sm font-semibold text-[#1C1824]">{title}</p>
      <p className="truncate text-xs text-[#8B879A]">{subtitle}</p>
    </div>
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aquamarine/20">
      <CheckCircleIcon className="h-4 w-4 text-aquamarine" />
    </div>
  </div>
);

export const PreparedMockup = () => (
  <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
    <div className="flex items-center gap-3 border-b border-cloud p-3 sm:p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-dark-plum sm:h-11 sm:w-11">
        <ShieldCheckIcon className="h-6 w-6 text-white" />
      </div>
      <div>
        <p className="text-sm font-bold text-[#1C1824]">Ready for the visit</p>
        <p className="text-xs text-[#8B879A]">Family health overview</p>
      </div>
    </div>

    <ChecklistRow
      icon={<FolderIcon className="h-5 w-5" strokeWidth={1.75} />}
      title="Records together"
      subtitle="Notes, labs, and medications"
    />
    <ChecklistRow
      icon={<SparklesIcon className="h-5 w-5" strokeWidth={1.75} />}
      title="Key context reviewed"
      subtitle="With help from Kai"
    />
    <ChecklistRow
      icon={<UsersIcon className="h-5 w-5" strokeWidth={1.75} />}
      title="Family in sync"
      subtitle="Sharing choices confirmed"
      last
    />
  </div>
);
