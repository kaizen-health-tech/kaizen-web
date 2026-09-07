export type CaregiverCostInputs = {
  annualSalary: number;
  reducedHoursPerWeek: number;
  caregivingYears: number;
  yearsUntilRetirement: number;
  employeeContributionRate: number;
  employerMatchRate: number;
  annualReturnRate: number;
};

export type CaregiverCostResults = {
  hourlyRate: number;
  annualLostWages: number;
  lifetimeLostWages: number;
  missedEmployeeContributions: number;
  missedEmployerMatch: number;
  missedRetirementContributions: number;
  retirementSavingsLost: number;
  retirementImpactBeyondWages: number;
  totalFinancialImpact: number;
  hoursReducedPerYear: number;
  workingCaregivingYears: number;
  buyBackFiveHoursCost: number;
  buyBackFiveHoursValue: number;
};

const WORK_HOURS_PER_WEEK = 40;
const WEEKS_PER_YEAR = 52;
const MONTHS_PER_YEAR = 12;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(Number.isFinite(value) ? value : min, min), max);

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
  const missedRetirementContributions =
    missedEmployeeContributions + missedEmployerMatch;

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
  // The caregiver's own missed contributions come from the gross wages already
  // counted above. Only match and growth are additive in the headline total.
  const retirementImpactBeyondWages = Math.max(
    retirementSavingsLost - missedEmployeeContributions,
    0,
  );
  const totalFinancialImpact = lifetimeLostWages + retirementImpactBeyondWages;

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
    missedRetirementContributions,
    retirementSavingsLost,
    retirementImpactBeyondWages,
    totalFinancialImpact,
    hoursReducedPerYear,
    workingCaregivingYears,
    buyBackFiveHoursCost: hourlyRate * buyBackHours * WEEKS_PER_YEAR,
    buyBackFiveHoursValue: totalFinancialImpact * buyBackFraction,
  };
};
