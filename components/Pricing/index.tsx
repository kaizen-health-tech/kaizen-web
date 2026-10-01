import { PillLink } from "@/components/Common/PillLink";
import { Reveal } from "@/components/Common/Reveal";
import SectionHeader from "@/components/Common/SectionHeader";

type PlanFeature = {
  label: string;
  included: boolean;
};

type Plan = {
  tier: string;
  name: string;
  audience: string;
  price: string;
  period?: string;
  yearly?: string;
  recommended?: boolean;
  features: PlanFeature[];
};

const included = (label: string): PlanFeature => ({ label, included: true });
const excluded = (label: string): PlanFeature => ({ label, included: false });

const PLANS: Plan[] = [
  {
    tier: "Free",
    name: "Starter",
    audience: "For individuals and families trying Kaizen",
    price: "$0",
    features: [
      included("1 care group"),
      included("Up to 6 members"),
      included("Basic health score visibility"),
      included("Limited summaries"),
      excluded("No long-term memory"),
      excluded("No EHR sync"),
    ],
  },
  {
    tier: "Family",
    name: "Plus",
    audience: "For couples, parents, and caregivers helping aging relatives",
    price: "$9.99",
    period: "/ month",
    yearly: "or $100 / year",
    recommended: true,
    features: [
      included("Up to 5 care groups"),
      included("Up to 6 members per group"),
      included("Everyone gets full features"),
      included("Flexible document summaries"),
      included("30-day memory window"),
      included("Multiple EHR connections"),
      included("Expanded storage (10GB each)"),
    ],
  },
  {
    tier: "Family",
    name: "Pro",
    audience: "For large families and households managing ongoing care",
    price: "$14.99",
    period: "/ month",
    yearly: "or $150 / year",
    features: [
      included("Up to 10 care groups"),
      included("Up to 10 members per group"),
      included("Extended memory (90-180 days)"),
      included("Trend analysis and alerts"),
      included("Priority processing"),
      included("Higher storage (120 GB total)"),
    ],
  },
];

const FeatureMark = ({
  isIncluded,
  onDark,
}: {
  isIncluded: boolean;
  onDark: boolean;
}) => (
  <span
    aria-hidden="true"
    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
      isIncluded
        ? onDark
          ? "bg-aquamarine/20 text-aquamarine"
          : "bg-aquamarine/25 text-midnight"
        : onDark
          ? "bg-white/10 text-white/50"
          : "bg-cloud text-graphite"
    }`}
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3 w-3"
    >
      {isIncluded ? (
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      ) : (
        <path d="M7 7l10 10M17 7 7 17" />
      )}
    </svg>
  </span>
);

const PlanCard = ({ plan }: { plan: Plan }) => {
  const onDark = Boolean(plan.recommended);

  return (
    // Two nested rounded boxes: a thin tinted shell around the card itself,
    // with radii offset by the shell padding so the corners stay concentric.
    <div
      className={`h-full rounded-[2rem] p-1.5 ring-1 ${
        onDark ? "bg-violet/15 ring-violet/25" : "bg-white/50 ring-midnight/5"
      }`}
    >
      <div
        className={`flex h-full flex-col rounded-[calc(2rem-0.375rem)] px-7 py-9 xl:px-9 ${
          onDark
            ? "bg-midnight text-white shadow-[0_24px_60px_rgba(40,27,85,0.28),inset_0_1px_1px_rgba(255,255,255,0.12)]"
            : "bg-white text-midnight shadow-card-soft"
        }`}
      >
        <div className="flex h-8 items-center justify-between gap-3">
          <p
            className={`text-xs font-bold uppercase tracking-[0.16em] ${
              onDark ? "text-aquamarine" : "text-violet"
            }`}
          >
            {plan.tier}
          </p>
          {plan.recommended && (
            <span className="rounded-full bg-aquamarine px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-dark-plum">
              Recommended
            </span>
          )}
        </div>

        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.02em]">
          {plan.name}
        </h3>
        <p
          className={`mt-2 min-h-12 text-base leading-6 ${
            onDark ? "text-white/70" : "text-text-body"
          }`}
        >
          {plan.audience}
        </p>

        <div className="mt-7 flex items-baseline gap-2">
          <span className="text-5xl font-semibold tracking-[-0.03em]">
            {plan.price}
          </span>
          {plan.period && (
            <span className={onDark ? "text-white/70" : "text-graphite"}>
              {plan.period}
            </span>
          )}
        </div>
        <p
          className={`mt-1 min-h-6 text-sm ${
            onDark ? "text-white/60" : "text-graphite"
          }`}
        >
          {plan.yearly}
        </p>

        <PillLink
          href="#cta"
          variant={onDark ? "aquamarine" : "soft"}
          className="mt-7 w-full justify-between"
        >
          Start Free Trial
        </PillLink>

        <div
          className={`mt-8 border-t pt-7 ${
            onDark ? "border-white/10" : "border-midnight/[0.06]"
          }`}
        >
          <p
            className={`text-sm font-semibold ${
              onDark ? "text-white" : "text-midnight"
            }`}
          >
            Included:
          </p>
          <ul className="mt-4 space-y-3.5 text-left text-base">
            {plan.features.map((feature) => (
              <li
                key={feature.label}
                className={`flex items-start gap-3 ${
                  feature.included
                    ? onDark
                      ? "text-white/90"
                      : "text-text-longform"
                    : onDark
                      ? "text-white/45"
                      : "text-graphite"
                }`}
              >
                <FeatureMark isIncluded={feature.included} onDark={onDark} />
                {feature.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] py-20 md:py-28">
      <div className="relative mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            eyebrow: `Plans`,
            title: `Choose the plan that fits your family`,
            subtitle: ``,
            description: `Start free. Move to a family plan when you need more care groups, storage, or memory.`,
          }}
        />
      </div>

      <div className="relative mx-auto mt-15 grid max-w-[1207px] gap-6 px-4 md:px-8 lg:grid-cols-3 xl:mt-20 xl:gap-8 xl:px-0">
        {PLANS.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 100} className="h-full">
            <PlanCard plan={plan} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
