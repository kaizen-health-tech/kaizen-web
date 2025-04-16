import "core-js/proposals/promise-with-resolvers";

import { Metadata } from "next";
import InvestorSidebarLink from "@/components/Docs/InvestorSidebarLink";

export const metadata: Metadata = {
  title: "Return on Investment Example - Kaizen Health",
  description: "This is ROI page for Kaizen Health",
  // other metadata
};

export default function RoiPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <InvestorSidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] space-y-6">
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  Example for Return on Investment
                </h2>
                <p>
                  <strong>Example Investment Scenario:</strong>
                </p>
                <ul className="list-disc pl-5">
                  <li>Investment Amount: $5,000</li>
                  <li>Investment Vehicle: Convertible Note</li>
                </ul>
                <p>
                  <strong>Terms:</strong>
                </p>
                <ul className="list-disc pl-5">
                  <li>20% discount on the next priced round</li>
                  <li>18-month maturity</li>
                  <li>5% interest rate</li>
                  <li>$5 million valuation cap</li>
                </ul>
                <p>
                  <strong>Scenario:</strong> Let's say Kaizen Health raises a
                  Series A round 18 months after your investment at a $10
                  million valuation, with shares priced at $1 per share.
                </p>
                <p>
                  <strong>Here's how your investment would convert:</strong>
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Accrued Interest: $5,000 x 5% x 1.5 years = $375. Total
                    value: $5,000 + $375 = $5,375
                  </li>
                  <li>
                    Conversion price: The lower of:
                    <ul className="list-disc pl-5">
                      <li>$1 per share with a 20% discount: $0.80 per share</li>
                      <li>$5 million valuation cap price: $0.50 per share</li>
                    </ul>
                    In this case, the valuation cap gives you the better deal.
                  </li>
                  <li>Shares received: $5,375 / $0.50 = 10,750 shares</li>
                  <li>
                    Value of your shares at Series A: 10,750 shares x $1 per
                    share = $10,750
                  </li>
                </ol>
                <p className="mt-6">
                  In this scenario, your $5,000 investment would turn into
                  $10,750 worth of shares, representing a{" "}
                  <strong>115% return in 18 months</strong>.
                </p>
                <h3 className="text-xl font-semibold mt-6 text-black dark:text-white">
                  Important Notes:
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    This is a hypothetical scenario. Actual returns can vary
                    significantly and depend on future funding rounds and
                    company performance.
                  </li>
                  <li>
                    Startups are high-risk investments. There's always a
                    possibility of losing your entire investment.
                  </li>
                  <li>
                    The convertible note structure protects your investment by
                    giving you the best possible price when converting to
                    equity.
                  </li>
                  <li>
                    As an early investor, you're positioned to potentially
                    benefit from future growth if the company succeeds.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
