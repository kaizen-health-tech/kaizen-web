import { Metadata } from "next";
import InvestorSidebarLink from "@/components/Docs/InvestorSidebarLink";

export const metadata: Metadata = {
  title: "Return on Investment Example - Kaizen Health",
  description: "This is ROI page for Kaizen Health",
  // other metadata
};

export default function MilestonesPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <InvestorSidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <ul className="space-y-2">
                  Kaizen Health is committed to rapid, strategic growth to
                  enhance our platform's capabilities and expand our user base.
                  Our roadmap includes the following key milestones:
                  <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                    Q3 2024{" "}
                    <div className="text-sm">(Last updated Aug 16th 2024)</div>
                  </h2>
                  <li className="list-none mt-5 text-2xl font-light text-black dark:text-white md:text-4xl">
                    <input type="checkbox" className="mx-5" disabled />
                    AI Learning Data Enhancement (Q3 2024): We'll expand our
                    AI's learning capabilities to include X-rays and lab
                    reports. This will involve partnering with radiology centers
                    and laboratories to access anonymized data, developing image
                    recognition algorithms, and integrating lab result
                    interpretation. This enhancement will significantly improve
                    our AI's ability to provide comprehensive health insights.
                  </li>
                  <li className="list-none mt-5 text-2xl font-light text-black dark:text-white md:text-4xl">
                    <input type="checkbox" className="mx-5" disabled />
                    User Acquisition Target (End of September 2024): We aim to
                    reach 5,000 active users by implementing a multi-channel
                    growth strategy. This includes targeted social media
                    campaigns, partnerships with family health organizations,
                    referral programs, and content marketing focusing on family
                    health management. We'll closely monitor user acquisition
                    costs and engagement metrics to optimize our approach.
                  </li>
                  <li className="list-none mt-5 text-2xl font-light text-black dark:text-white md:text-4xl">
                    <input type="checkbox" className="mx-5" disabled />
                    Notification and Email System Upgrade (Q4 2024): We'll
                    revamp our notification and email systems to improve user
                    engagement and retention. This includes implementing
                    personalized health reminders, family care alerts, and
                    tailored health tips. We'll use A/B testing to optimize
                    message timing and content, ensuring our communications are
                    both effective and non-intrusive.
                  </li>
                  <li className="list-none mt-5 text-2xl font-light text-black dark:text-white md:text-4xl">
                    <input type="checkbox" className="mx-5" disabled />
                    EHR Integration Initiative (Q1 2025): We'll begin the
                    process of integrating with major Electronic Health Record
                    (EHR) systems to automatically pull patient data. This
                    involves:
                    <ul className="space-y-2 pl-10">
                      <li className="list-none">
                        <input type="checkbox" className="mx-5" disabled />
                        Identifying and prioritizing key EHR providers
                      </li>
                      <li className="list-none">
                        <input type="checkbox" className="mx-5" disabled />
                        Developing secure API connections
                      </li>
                      <li className="list-none">
                        <input type="checkbox" className="mx-5" disabled />
                        Ensuring HIPAA compliance for data transfer
                      </li>
                      <li className="list-none">
                        <input type="checkbox" className="mx-5" disabled />
                        Creating a user-friendly interface for connecting EHRs
                        to Kaizen Health accounts
                      </li>
                    </ul>
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
