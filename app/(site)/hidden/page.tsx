import { Metadata } from "next";
import InvestorSidebarLink from "@/components/Docs/InvestorSidebarLink";

export const metadata: Metadata = {
  title: "Terms and Privacy Policy - Kaizen Health",
  description: "This is Docs page for Kaizen Health",
  // other metadata
};

export default function HiddenPage() {
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
                <h1>Welcome to the investor hub</h1>
                <div className="mb-5 text-body-color dark:text-body-color-dark text-sm">
                  You will find all the important information regarding investment and we will constantly keep this page updated to give you updates.
                </div>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  Kaizen Health is a family-focused healthcare app designed to help users monitor and manage the well-being of their loved ones. Our platform leverages a proprietary scoring algorithm to provide personalized health insights, ensuring families stay connected and informed about each other’s health. We prioritize data security and privacy, offering HIPAA-compliant document storage and anonymized data insights.
                </p>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  <b>Confidentiality Notice:</b> The information contained in this section is highly confidential. Please refrain from sharing this with any unauthorized individuals or third parties. Your discretion is appreciated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
