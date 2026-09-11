import { ImageResponse } from "next/og";
import {
  calculateCaregiverCost,
  parseCaregiverCostInputs,
} from "@/lib/caregiverCost";

export const runtime = "nodejs";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

const compactMoney = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1,
});

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

/**
 * Social preview for the caregiver cost calculator.
 *
 * The page that references this is statically rendered, so by default this
 * draws the same scenario a visitor lands on. It reads the calculator's own
 * query params too, which is what a per-share preview would need if the tool
 * page ever switches to generateMetadata().
 */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const inputs = parseCaregiverCostInputs(searchParams);
  const results = calculateCaregiverCost(inputs);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 56,
          background: "linear-gradient(135deg, #835AF5 0%, #6E40F3 52%, #66E6B5 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "52px 60px",
            borderRadius: 40,
            backgroundColor: "#281B55",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: 5,
                color: "#66E6B5",
              }}
            >
              CAREGIVER COST CALCULATOR
            </div>
            <div
              style={{
                marginTop: 26,
                fontSize: 132,
                fontWeight: 700,
                lineHeight: 1,
                color: "#FFFFFF",
              }}
            >
              {compactMoney.format(results.breakdown.total)}
            </div>
            <div
              style={{
                marginTop: 20,
                fontSize: 34,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              in lost pay, employer match, and retirement growth
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                padding: "20px 28px",
                borderRadius: 20,
                backgroundColor: "rgba(255,255,255,0.08)",
                fontSize: 27,
                color: "#FFFFFF",
              }}
            >
              {`${inputs.reducedHoursPerWeek} work hours a week for ${results.workingCaregivingYears} years on a ${money.format(inputs.annualSalary)} salary`}
            </div>
            <div
              style={{
                marginTop: 30,
                display: "flex",
                justifyContent: "space-between",
                fontSize: 27,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <div style={{ display: "flex" }}>
                Free tool. Run your own numbers.
              </div>
              <div style={{ display: "flex", color: "#66E6B5" }}>
                kaizenhealth.io
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: OG_WIDTH,
      height: OG_HEIGHT,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400, immutable",
      },
    },
  );
}
