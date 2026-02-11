import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Medical Disclaimer",
  description:
    "Read the Kaizen Health medical disclaimer to understand informational limits, emergency guidance, and when to contact licensed healthcare professionals directly.",
  path: "/docs/disclaimer",
});

export default function MedicalDisclaimer() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-3/4">
                  <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                    <h1>Medical Disclaimer</h1>

                    <p className="text-body-color dark:text-body-color-dark text-base">
                      This Medical Disclaimer ("Agreement") is entered into by
                      and between Kaizen Health ("Company"), and the user
                      ("User") of Company's Services. By accessing or using the
                      Services, User agrees to be bound by the terms in this
                      Agreement and acknowledges they have read and abode by the
                      medical disclaimer.
                    </p>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      <strong>Effective Date: March 1st 2024</strong>
                    </p>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      The information provided by Kaizen Health is for
                      informational purposes only and is not intended to
                      substitute professional medical advice, diagnosis, or
                      treatment. Always seek the advice of your physician or
                      other qualified healthcare provider with any questions you
                      may have regarding a medical condition. Never disregard
                      professional medical advice or delay in seeking it because
                      of something you have read on this app.
                    </p>

                    <p className="text-body-color dark:text-body-color-dark text-base">
                      Kaizen Health does not recommend or endorse any specific
                      tests, physicians, products, procedures, opinions, or
                      other information that may be mentioned in the app.
                      Reliance on any information provided by Kaizen Health is
                      solely at your own risk.
                    </p>

                    <p className="text-body-color dark:text-body-color-dark text-base">
                      If you think you may have a medical emergency, call your
                      doctor, go to the nearest emergency department, or call
                      emergency services immediately.
                    </p>

                    <h2>Contact Us</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      If you have questions or comments about this, please
                      contact us at{" "}
                      <a
                        className={"hover:text-primaryho text-primary"}
                        href="mailto:info@kaizenhealth.io"
                      >
                        this email address
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
