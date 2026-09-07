"use client";

import { useMemo, useState } from "react";
import {
  calculateCaregiverCost,
  type CaregiverCostInputs,
} from "@/lib/caregiverCost";

const DEFAULT_INPUTS: CaregiverCostInputs = {
  annualSalary: 75_000,
  reducedHoursPerWeek: 10,
  caregivingYears: 3,
  yearsUntilRetirement: 20,
  employeeContributionRate: 6,
  employerMatchRate: 3,
  annualReturnRate: 7,
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const compactMoney = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1,
});

type FieldProps = {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  onChange: (value: number) => void;
};

function NumberField({
  label,
  hint,
  value,
  min,
  max,
  step = 1,
  prefix,
  suffix,
  onChange,
}: FieldProps) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <label htmlFor={id} className="block">
      <span className="flex items-end justify-between gap-4">
        <span className="font-semibold text-midnight dark:text-white">
          {label}
        </span>
        <span className="text-xs text-graphite dark:text-space">{hint}</span>
      </span>
      <span className="mt-2 flex min-h-14 items-center rounded-2xl border border-cloud bg-white px-4 shadow-sm transition focus-within:border-violet focus-within:ring-4 focus-within:ring-violet/10 dark:border-white/10 dark:bg-white/5">
        {prefix ? (
          <span
            className="mr-2 text-lg font-semibold text-graphite"
            aria-hidden="true"
          >
            {prefix}
          </span>
        ) : null}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="min-w-0 flex-1 bg-transparent text-lg font-semibold text-midnight outline-none dark:text-white"
        />
        {suffix ? (
          <span className="ml-2 text-sm font-medium text-graphite dark:text-space">
            {suffix}
          </span>
        ) : null}
      </span>
    </label>
  );
}

function ResultRow({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-white/10 py-4 last:border-0">
      <div>
        <p className="font-medium text-white">{label}</p>
        <p className="mt-1 text-sm leading-5 text-white/55">{detail}</p>
      </div>
      <p className="shrink-0 text-lg font-semibold text-aquamarine">{value}</p>
    </div>
  );
}

export default function CaregiverCostCalculator() {
  const [inputs, setInputs] = useState(DEFAULT_INPUTS);
  const [copied, setCopied] = useState(false);
  const [showAssumptions, setShowAssumptions] = useState(false);
  const results = useMemo(() => calculateCaregiverCost(inputs), [inputs]);

  const update = (field: keyof CaregiverCostInputs, value: number) => {
    setInputs((current) => ({ ...current, [field]: value }));
  };

  const copySummary = async () => {
    const summary = `My estimated caregiver career cost: ${money.format(results.totalFinancialImpact)} in gross wages, employer match, and investment growth. The projected retirement account shortfall is ${money.format(results.retirementSavingsLost)}. Calculated at kaizenhealth.io/tools/caregiver-cost-calculator`;
    await navigator.clipboard.writeText(summary);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const wageShare = results.totalFinancialImpact
    ? (results.lifetimeLostWages / results.totalFinancialImpact) * 100
    : 0;

  return (
    <div className="grid overflow-hidden rounded-[32px] border border-cloud bg-white shadow-[0_28px_80px_rgba(40,27,85,0.12)] dark:border-white/10 dark:bg-dark-plum lg:grid-cols-[1.02fr_0.98fr]">
      <section
        className="p-6 sm:p-9 lg:p-12"
        aria-labelledby="calculator-inputs"
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet">
              Your work
            </p>
            <h2
              id="calculator-inputs"
              className="mt-2 text-2xl font-semibold text-midnight dark:text-white"
            >
              Start with the work hours you have cut
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setInputs(DEFAULT_INPUTS)}
            className="rounded-full border border-cloud px-4 py-2 text-sm font-semibold text-graphite transition hover:border-violet hover:text-violet focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet/20 dark:border-white/15 dark:text-space"
          >
            Reset
          </button>
        </div>

        <p className="mt-3 max-w-xl text-sm leading-6 text-graphite dark:text-space">
          Enter the paid work hours you have reduced or expect to reduce. Leave
          the rest of your caregiving hours out.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <NumberField
            label="Annual salary"
            hint="Before tax"
            value={inputs.annualSalary}
            min={0}
            max={1_000_000}
            step={1_000}
            prefix="$"
            onChange={(value) => update("annualSalary", value)}
          />
          <NumberField
            label="Work hours reduced"
            hint="0 to 40 each week"
            value={inputs.reducedHoursPerWeek}
            min={0}
            max={40}
            suffix="hours / week"
            onChange={(value) => update("reducedHoursPerWeek", value)}
          />
          <NumberField
            label="Caregiving duration"
            hint="Your best estimate"
            value={inputs.caregivingYears}
            min={0}
            max={50}
            step={0.5}
            suffix="years"
            onChange={(value) => update("caregivingYears", value)}
          />
          <NumberField
            label="Years until retirement"
            hint="For compounding"
            value={inputs.yearsUntilRetirement}
            min={0}
            max={60}
            suffix="years"
            onChange={(value) => update("yearsUntilRetirement", value)}
          />
        </div>

        <button
          type="button"
          aria-expanded={showAssumptions}
          onClick={() => setShowAssumptions((current) => !current)}
          className="mt-8 flex w-full items-center justify-between rounded-2xl bg-lavender px-5 py-4 text-left font-semibold text-midnight transition hover:bg-light-lilac focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          <span>Retirement assumptions</span>
          <span className="text-violet" aria-hidden="true">
            {showAssumptions ? "−" : "+"}
          </span>
        </button>

        {showAssumptions ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            <NumberField
              label="Your contribution"
              hint="Of reduced pay"
              value={inputs.employeeContributionRate}
              min={0}
              max={100}
              step={0.5}
              suffix="%"
              onChange={(value) => update("employeeContributionRate", value)}
            />
            <NumberField
              label="Employer match"
              hint="Of reduced pay"
              value={inputs.employerMatchRate}
              min={0}
              max={100}
              step={0.5}
              suffix="%"
              onChange={(value) => update("employerMatchRate", value)}
            />
            <NumberField
              label="Annual return"
              hint="Not guaranteed"
              value={inputs.annualReturnRate}
              min={0}
              max={20}
              step={0.5}
              suffix="%"
              onChange={(value) => update("annualReturnRate", value)}
            />
          </div>
        ) : null}
      </section>

      <section
        className="relative overflow-hidden bg-midnight p-6 text-white sm:p-9 lg:p-12"
        aria-live="polite"
        aria-labelledby="calculator-result"
      >
        <div
          className="absolute -right-28 -top-28 h-64 w-64 rounded-full bg-violet/35 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-aquamarine/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aquamarine">
            Estimated impact
          </p>
          <h2
            id="calculator-result"
            className="mt-3 text-5xl font-semibold tracking-tight text-white sm:text-6xl"
          >
            {compactMoney.format(results.totalFinancialImpact)}
          </h2>
          <p className="mt-3 max-w-md text-base leading-6 text-white/65">
            This adds your lost gross pay to the employer match and investment
            growth you may miss. It does not count your own contributions twice.
          </p>

          <div
            className="mt-8 overflow-hidden rounded-full bg-white/10"
            aria-label={`${Math.round(wageShare)}% lost wages and ${Math.round(100 - wageShare)}% additional retirement impact`}
          >
            <div className="flex h-3 w-full">
              <span className="bg-violet" style={{ width: `${wageShare}%` }} />
              <span className="flex-1 bg-aquamarine" />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/60">
            <span className="flex items-center gap-2">
              <i className="h-2 w-2 rounded-full bg-violet" /> Lost wages
            </span>
            <span className="flex items-center gap-2">
              <i className="h-2 w-2 rounded-full bg-aquamarine" /> Employer
              match + growth
            </span>
          </div>

          <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.06] px-5">
            <ResultRow
              label="Lost wages"
              value={money.format(results.lifetimeLostWages)}
              detail={`${money.format(results.annualLostWages)} a year for ${results.workingCaregivingYears} pre-retirement years`}
            />
            <ResultRow
              label="Contributions not made"
              value={money.format(results.missedRetirementContributions)}
              detail={`${money.format(results.missedEmployeeContributions)} from you + ${money.format(results.missedEmployerMatch)} employer match`}
            />
            <ResultRow
              label="Retirement savings lost"
              value={money.format(results.retirementSavingsLost)}
              detail={`Projected value at retirement using a ${inputs.annualReturnRate}% annual return`}
            />
          </div>

          {inputs.reducedHoursPerWeek > 0 ? (
            <div className="mt-6 rounded-2xl bg-aquamarine p-5 text-midnight">
              <p className="text-xs font-bold uppercase tracking-[0.16em]">
                What five work hours could protect
              </p>
              <p className="mt-2 text-lg font-semibold leading-6">
                Keeping {Math.min(5, inputs.reducedHoursPerWeek)} paid work
                hours a week could protect about{" "}
                {money.format(results.buyBackFiveHoursValue)} of this value.
              </p>
              <p className="mt-2 text-sm leading-5 text-midnight/70">
                Those hours represent{" "}
                {money.format(results.buyBackFiveHoursCost)} in pay each year.
                Compare that with respite care, sibling support, or workplace
                flexibility.
              </p>
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={copySummary}
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-midnight transition hover:-translate-y-0.5 hover:bg-lavender focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              {copied ? "Copied" : "Copy my estimate"}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
            >
              Print results
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
