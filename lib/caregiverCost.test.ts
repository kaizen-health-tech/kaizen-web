import assert from "node:assert/strict";
import { test } from "node:test";
import {
  calculateCaregiverCost,
  parseCaregiverCostInputs,
  serializeCaregiverCostInputs,
  DEFAULT_CAREGIVER_COST_INPUTS,
  type CaregiverCostInputs,
} from "./caregiverCost.ts";

// The 11 September 2026 audit example: $75K salary, 10 hours a week, 3 years,
// 20 years to retirement, 6% contribution, 3% match, 7% return.
test("audited example reconciles across every displayed figure", () => {
  const results = calculateCaregiverCost(DEFAULT_CAREGIVER_COST_INPUTS);

  assert.equal(results.annualLostWages, 18_750);
  assert.deepEqual(results.breakdown, {
    lostWages: 56_250,
    missedEmployerMatch: 1_688,
    lostInvestmentGrowth: 13_331,
    total: 71_269,
    missedEmployeeContributions: 3_375,
    retirementShortfall: 18_394,
    wageSharePct: 79,
    retirementSharePct: 21,
  });
});

test("zero hours or zero years returns $0 without NaN", () => {
  for (const override of [
    { reducedHoursPerWeek: 0 },
    { caregivingYears: 0 },
    { yearsUntilRetirement: 0 },
    { annualSalary: 0 },
  ]) {
    const { breakdown } = calculateCaregiverCost({
      ...DEFAULT_CAREGIVER_COST_INPUTS,
      ...override,
    });

    assert.equal(breakdown.total, 0);
    assert.equal(breakdown.retirementShortfall, 0);
    assert.equal(breakdown.wageSharePct, 0);
    assert.equal(breakdown.retirementSharePct, 0);
  }
});

test("rows, shortfall, and shares reconcile for every input combination", () => {
  const salaries = [0, 1, 33_333, 75_000, 123_457, 10_000_000];
  const hours = [0, 0.5, 1, 7, 10, 40];
  const years = [0, 0.5, 1, 2.04, 3, 50];
  const retire = [0, 1, 2, 20, 60];
  const rates = [
    [0, 0, 0],
    [6, 3, 7],
    [4.5, 2.5, 5.5],
    [100, 100, 20],
  ];

  for (const annualSalary of salaries)
    for (const reducedHoursPerWeek of hours)
      for (const caregivingYears of years)
        for (const yearsUntilRetirement of retire)
          for (const [contribution, match, annualReturn] of rates) {
            const inputs: CaregiverCostInputs = {
              annualSalary,
              reducedHoursPerWeek,
              caregivingYears,
              yearsUntilRetirement,
              employeeContributionRate: contribution,
              employerMatchRate: match,
              annualReturnRate: annualReturn,
            };
            const results = calculateCaregiverCost(inputs);
            const b = results.breakdown;
            const label = JSON.stringify(inputs);

            for (const value of Object.values(b)) {
              assert.ok(Number.isInteger(value) && value >= 0, label);
            }
            assert.equal(
              b.lostWages + b.missedEmployerMatch + b.lostInvestmentGrowth,
              b.total,
              label,
            );
            assert.equal(
              b.missedEmployeeContributions +
                b.missedEmployerMatch +
                b.lostInvestmentGrowth,
              b.retirementShortfall,
              label,
            );
            assert.ok(
              Math.abs(b.total - results.totalFinancialImpact) <= 0.5,
              label,
            );
            assert.equal(
              b.wageSharePct + b.retirementSharePct,
              results.totalFinancialImpact > 0 ? 100 : 0,
              label,
            );
          }
});

test("a shared link restores the same result", () => {
  const inputs: CaregiverCostInputs = {
    annualSalary: 91_500,
    reducedHoursPerWeek: 12.5,
    caregivingYears: 4.5,
    yearsUntilRetirement: 18,
    employeeContributionRate: 8,
    employerMatchRate: 4,
    annualReturnRate: 6.5,
  };
  const restored = parseCaregiverCostInputs(
    serializeCaregiverCostInputs(inputs),
  );

  assert.deepEqual(restored, inputs);
  assert.deepEqual(
    calculateCaregiverCost(restored),
    calculateCaregiverCost(inputs),
  );
});

test("out-of-range link values clamp to finite results", () => {
  const inputs = parseCaregiverCostInputs(
    "salary=999999999&hours=90&years=-4&retire=500&match=abc&return=1e9",
  );
  const { breakdown } = calculateCaregiverCost(inputs);

  assert.equal(inputs.annualSalary, 10_000_000);
  assert.equal(inputs.reducedHoursPerWeek, 40);
  assert.equal(inputs.caregivingYears, 0);
  assert.equal(inputs.employerMatchRate, 3);
  assert.equal(inputs.annualReturnRate, 20);
  assert.equal(breakdown.total, 0);
});
