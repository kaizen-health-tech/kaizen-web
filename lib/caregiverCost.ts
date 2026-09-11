export type CaregiverCostInputs = {
  annualSalary: number;
  reducedHoursPerWeek: number;
  caregivingYears: number;
  yearsUntilRetirement: number;
  employeeContributionRate: number;
  employerMatchRate: number;
  annualReturnRate: number;
};

// Whole-dollar amounts for display. Every number the calculator shows reads
// from here, never from the exact fields, so any sum a visitor does on screen
// reconciles: lostWages + missedEmployerMatch + lostInvestmentGrowth === total,
// and retirementShortfall is rebuilt from the same rounded parts.
export type CaregiverCostBreakdown = {
  lostWages: number;
  missedEmployerMatch: number;
  lostInvestmentGrowth: number;
  total: number;
  missedEmployeeContributions: number;
  retirementShortfall: number;
  wageSharePct: number;
  retirementSharePct: number;
};

export type CaregiverCostResults = {
  hourlyRate: number;
  annualLostWages: number;
  lifetimeLostWages: number;
  missedEmployeeContributions: number;
  missedEmployerMatch: number;
  lostInvestmentGrowth: number;
  retirementSavingsLost: number;
  totalFinancialImpact: number;
  hoursReducedPerYear: number;
  workingCaregivingYears: number;
  buyBackFiveHoursCost: number;
  buyBackFiveHoursValue: number;
  breakdown: CaregiverCostBreakdown;
};

const WORK_HOURS_PER_WEEK = 40;
const WEEKS_PER_YEAR = 52;
const MONTHS_PER_YEAR = 12;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(Number.isFinite(value) ? value : min, min), max);

// Rounds non-negative amounts to whole numbers that still add up to the
// rounded sum: floor everything, then give the leftover units to the amounts
// that lost the most to flooring (largest-remainder method).
const allocateWhole = (amounts: number[]): number[] => {
  const target = Math.round(amounts.reduce((sum, amount) => sum + amount, 0));
  const whole = amounts.map((amount) => Math.floor(amount));
  let leftover = target - whole.reduce((sum, amount) => sum + amount, 0);

  const byRemainder = amounts
    .map((amount, index) => ({ index, remainder: amount - whole[index] }))
    .sort((a, b) => b.remainder - a.remainder);

  for (const { index } of byRemainder) {
    if (leftover <= 0) break;
    whole[index] += 1;
    leftover -= 1;
  }

  return whole;
};

export const DEFAULT_CAREGIVER_COST_INPUTS: CaregiverCostInputs = {
  annualSalary: 75_000,
  reducedHoursPerWeek: 10,
  caregivingYears: 3,
  yearsUntilRetirement: 20,
  employeeContributionRate: 6,
  employerMatchRate: 3,
  annualReturnRate: 7,
};

// Short query-param names keep a shared estimate readable in a chat message or
// a journalist's link. Bounds match the clamps applied in
// calculateCaregiverCost so a hand-edited URL can never produce a result the
// UI itself could not.
const FIELD_BOUNDS: Record<
  keyof CaregiverCostInputs,
  { param: string; min: number; max: number }
> = {
  annualSalary: { param: "salary", min: 0, max: 10_000_000 },
  reducedHoursPerWeek: { param: "hours", min: 0, max: WORK_HOURS_PER_WEEK },
  caregivingYears: { param: "years", min: 0, max: 50 },
  yearsUntilRetirement: { param: "retire", min: 0, max: 60 },
  employeeContributionRate: { param: "contrib", min: 0, max: 100 },
  employerMatchRate: { param: "match", min: 0, max: 100 },
  annualReturnRate: { param: "return", min: 0, max: 20 },
};

const FIELDS = Object.keys(FIELD_BOUNDS) as (keyof CaregiverCostInputs)[];

export const parseCaregiverCostInputs = (
  source: URLSearchParams | string,
): CaregiverCostInputs => {
  const params =
    typeof source === "string" ? new URLSearchParams(source) : source;
  const parsed = { ...DEFAULT_CAREGIVER_COST_INPUTS };

  for (const field of FIELDS) {
    const { param, min, max } = FIELD_BOUNDS[field];
    const raw = params.get(param);

    if (raw === null || raw.trim() === "") continue;

    const value = Number(raw);
    if (!Number.isFinite(value)) continue;

    parsed[field] = clamp(value, min, max);
  }

  return parsed;
};

// Only values that differ from the defaults are serialized, so an untouched
// calculator keeps the clean canonical URL and a shared link carries just the
// numbers the person actually changed.
export const serializeCaregiverCostInputs = (
  inputs: CaregiverCostInputs,
): string => {
  const params = new URLSearchParams();

  for (const field of FIELDS) {
    const { param, min, max } = FIELD_BOUNDS[field];
    const value = clamp(inputs[field], min, max);

    if (value === DEFAULT_CAREGIVER_COST_INPUTS[field]) continue;

    params.set(param, String(Number(value.toFixed(2))));
  }

  return params.toString();
};

export const calculateCaregiverCost = (
  values: CaregiverCostInputs,
): CaregiverCostResults => {
  const annualSalary = clamp(values.annualSalary, 0, 10_000_000);
  const reducedHoursPerWeek = clamp(
    values.reducedHoursPerWeek,
    0,
    WORK_HOURS_PER_WEEK,
  );
  const caregivingYears = clamp(values.caregivingYears, 0, 50);
  const yearsUntilRetirement = clamp(values.yearsUntilRetirement, 0, 60);
  const employeeRate = clamp(values.employeeContributionRate, 0, 100) / 100;
  const matchRate = clamp(values.employerMatchRate, 0, 100) / 100;
  const annualReturnRate = clamp(values.annualReturnRate, 0, 20) / 100;
  const workingCaregivingYears = Math.min(
    caregivingYears,
    yearsUntilRetirement,
  );

  const hourlyRate = annualSalary / (WORK_HOURS_PER_WEEK * WEEKS_PER_YEAR);
  const hoursReducedPerYear = reducedHoursPerWeek * WEEKS_PER_YEAR;
  const annualLostWages = hourlyRate * hoursReducedPerYear;
  const lifetimeLostWages = annualLostWages * workingCaregivingYears;
  const missedEmployeeContributions = lifetimeLostWages * employeeRate;
  const missedEmployerMatch = lifetimeLostWages * matchRate;

  // Model missed contributions monthly. Caregiving is assumed to begin now;
  // only months before retirement are counted, and each missed deposit then
  // compounds until the selected retirement date.
  const retirementMonths = Math.round(yearsUntilRetirement * MONTHS_PER_YEAR);
  const missedContributionMonths = Math.min(
    Math.round(workingCaregivingYears * MONTHS_PER_YEAR),
    retirementMonths,
  );
  const monthlyReturn = annualReturnRate / MONTHS_PER_YEAR;
  const monthlyMissedContribution =
    (annualLostWages * (employeeRate + matchRate)) / MONTHS_PER_YEAR;
  const monthsAfterCaregiving = retirementMonths - missedContributionMonths;

  const valueAtEndOfCaregiving =
    monthlyReturn === 0
      ? monthlyMissedContribution * missedContributionMonths
      : monthlyMissedContribution *
        ((Math.pow(1 + monthlyReturn, missedContributionMonths) - 1) /
          monthlyReturn);
  const retirementSavingsLost =
    valueAtEndOfCaregiving * Math.pow(1 + monthlyReturn, monthsAfterCaregiving);

  // The total adds three parts that never overlap. The caregiver's own
  // contributions come out of the gross wages already counted, so only the
  // employer match and the growth on both deposits sit on top of wages.
  // Month rounding can leave the projected balance a hair under the deposits
  // for odd durations, so growth floors at zero rather than going negative.
  const lostInvestmentGrowth = Math.max(
    retirementSavingsLost - missedEmployeeContributions - missedEmployerMatch,
    0,
  );
  const totalFinancialImpact =
    lifetimeLostWages + missedEmployerMatch + lostInvestmentGrowth;

  const [lostWagesDollars, employerMatchDollars, growthDollars] =
    allocateWhole([lifetimeLostWages, missedEmployerMatch, lostInvestmentGrowth]);
  const employeeContributionDollars = Math.round(missedEmployeeContributions);
  const totalDollars = lostWagesDollars + employerMatchDollars + growthDollars;

  // Shares come from the exact amounts, then round together to exactly 100.
  const [wageSharePct, retirementSharePct] =
    totalFinancialImpact > 0
      ? allocateWhole([
          (lifetimeLostWages / totalFinancialImpact) * 100,
          ((missedEmployerMatch + lostInvestmentGrowth) /
            totalFinancialImpact) *
            100,
        ])
      : [0, 0];

  const buyBackHours = Math.min(5, reducedHoursPerWeek);
  const buyBackFraction = reducedHoursPerWeek
    ? buyBackHours / reducedHoursPerWeek
    : 0;

  return {
    hourlyRate,
    annualLostWages,
    lifetimeLostWages,
    missedEmployeeContributions,
    missedEmployerMatch,
    lostInvestmentGrowth,
    retirementSavingsLost,
    totalFinancialImpact,
    hoursReducedPerYear,
    workingCaregivingYears,
    buyBackFiveHoursCost: hourlyRate * buyBackHours * WEEKS_PER_YEAR,
    buyBackFiveHoursValue: totalDollars * buyBackFraction,
    breakdown: {
      lostWages: lostWagesDollars,
      missedEmployerMatch: employerMatchDollars,
      lostInvestmentGrowth: growthDollars,
      total: totalDollars,
      missedEmployeeContributions: employeeContributionDollars,
      retirementShortfall:
        employeeContributionDollars + employerMatchDollars + growthDollars,
      wageSharePct,
      retirementSharePct,
    },
  };
};
