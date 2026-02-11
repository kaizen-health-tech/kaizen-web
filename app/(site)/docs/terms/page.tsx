import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Terms and Conditions",
  description:
    "Review Kaizen Health terms and conditions for service usage, user obligations, privacy alignment, and platform rules that protect all families on the app.",
  path: "/docs/terms",
});

export default function DocsPage() {
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
                    <h1>
                      Welcome to Terms & Conditions of using Kaizen Health
                    </h1>

                    <p className="text-body-color dark:text-body-color-dark text-base">
                      <strong>
                        This Terms of Service Agreement ("Agreement") is entered
                        into by and between Kaizen Health ("Company"), and the
                        user ("User") of Company's Services. By accessing or
                        using the Services, User agrees to be bound by the terms
                        and conditions set forth in this Agreement.
                      </strong>
                    </p>

                    <h2>1. Services Description</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      Kaizen Health provides users with access to a collection
                      of resources, including various communication tools,
                      health information services, and personalized content
                      through its network of properties which may be accessed
                      through any various medium or device now known or
                      hereafter developed (the "Services"). Unless explicitly
                      stated otherwise, any new features that augment or enhance
                      the current Services shall be subject to this Agreement.
                    </p>

                    <h2>2. Acceptance of Terms</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      By using the Services provided by the Company, User agrees
                      to the terms of this Agreement. If User does not agree to
                      these terms, they should not use the Services. The Company
                      reserves the right to update or change these terms at any
                      time, with notice to User.
                    </p>

                    <h2>3. Privacy Policy</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      User's use of the Services is subject to Kaizen Health's
                      Privacy Policy. Please review our Privacy Policy, which
                      also governs the Site and informs users of our data
                      collection practices.
                    </p>

                    <h2>4. User Obligations</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      User agrees to use the Services only for purposes that are
                      legal, proper, and in accordance with this Agreement and
                      any applicable laws and regulations. User must not use the
                      Services in any manner that could damage, disable,
                      overburden, or impair any Company server, or the
                      network(s) connected to any Company server, or interfere
                      with any other party's use and enjoyment of any Services.
                    </p>

                    <h2>5. Content and Conduct</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      The content and information on the Services (including,
                      but not limited to, messages, data, information, text,
                      music, sound, photos, graphics, video, maps, icons,
                      software, code, or other material), as well as the
                      infrastructure used to provide such Content and
                      information, is proprietary to the Company. User agrees
                      not to modify, rent, lease, loan, sell, distribute, or
                      create derivative works based on the Services, in any
                      manner.
                    </p>

                    <h2>6. Intellectual Property Rights</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      All trademarks, service marks, logos, trade names, and any
                      other proprietary designations of Kaizen Health used
                      herein are trademarks or registered trademarks of the
                      Company. Any other trademarks, service marks, and trade
                      names are the trademarks or registered trademarks of their
                      respective parties.
                    </p>

                    <h2>7. Disclaimer of Warranties</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      The Services are provided "as is" and "as available". The
                      Company hereby disclaims all warranties of any kind,
                      whether express or implied, including, but not limited to,
                      the implied warranties of merchantability, fitness for a
                      particular purpose, and non-infringement.
                    </p>

                    <h2>8. Limitation of Liability</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      The Company shall not be liable for any indirect,
                      incidental, special, consequential, or punitive damages,
                      including without limitation, loss of profits, data, use,
                      goodwill, or other intangible losses, resulting from (i)
                      your access to or use of or inability to access or use the
                      Services; (ii) any conduct or content of any third party
                      on the Services.
                    </p>

                    <h2>9. General Terms</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      This Agreement constitutes the entire agreement between
                      User and Company and governs User's use of the Services,
                      superseding any prior agreements between User and Company.
                      The laws of [Your Jurisdiction], without regard to its
                      conflict of law provisions, will govern this Agreement and
                      User's use of the Services.
                    </p>

                    <h2>10. Contact Information</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      For any questions about this Agreement, please contact
                      Kaizen Health at{" "}
                      <a href="mailto:info@kaizenhealth.io">
                        this email address
                      </a>
                      .
                    </p>

                    <p className="text-body-color dark:text-body-color-dark text-base">
                      <em>
                        By using the Services, User agrees to these terms and
                        conditions.
                      </em>
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
