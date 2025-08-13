import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Kaizen Health",
  description: "This is Docs page for Kaizen Health",
  // other metadata
};

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
                    <h1>Privacy Policy Documentation</h1>

                    <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                      We never sell or share your health data.
                    </div>

                    <p className="text-body-color dark:text-body-color-dark text-base">
                      This Privacy Policy Agreement ("Agreement") is entered
                      into by and between Kaizen Health ("Company"), and the
                      user ("User") of Company's Services. By accessing or using
                      the Services, User agrees to be bound by the privacy
                      policy set forth in this Agreement.
                    </p>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      <strong>Effective Date: March 1st 2024</strong> <br />
                      <strong>Last updated: Dec 12th, 2024</strong>
                    </p>

                    <p className="text-body-color dark:text-body-color-dark text-base">
                      Kaizen Health ("we", "us", or "our") is committed to
                      protecting the privacy of our users ("user" or "you").
                      This Privacy Policy explains how we collect, use,
                      disclose, and safeguard your information when you visit
                      our mobile application (the "App"). Please read this
                      Privacy Policy carefully. IF YOU DO NOT AGREE WITH THE
                      TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE
                      APP.
                    </p>
                    <p className="text-body-color dark:text-body-color-dark text-base font-bold">
                      Kaizen Health does not monetize user health data. Our
                      business model is fully supported by user subscriptions,
                      and this is currently the only way we generate revenue.
                    </p>

                    <p className="text-body-color dark:text-body-color-dark text-base">
                      We reserve the right to make changes to this Privacy
                      Policy at any time and for any reason. We will alert you
                      about any changes by updating the "Effective Date" of this
                      Privacy Policy. You are encouraged to periodically review
                      this Privacy Policy to stay informed of updates.
                    </p>

                    <h2>Collection of Your Information</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      We may collect information about you in a variety of ways.
                      The information we may collect via the App includes:
                    </p>
                    <ul>
                      <li>
                        <strong>Personal Data</strong>: Personally identifiable
                        information, such as your name, email address, and
                        demographic information, that you voluntarily give to us
                        when you register with the App.
                      </li>
                      <li>
                        <strong>Health Information</strong>: All health-related
                        information you provide us is HIPAA compliant and stored
                        securely. This information may include, but is not
                        limited to, medical history, treatment plans, and health
                        conditions.
                      </li>
                    </ul>

                    <h2>Use of Your Information</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      Having accurate information about you permits us to
                      provide you with a smooth, efficient, and customized
                      experience. Specifically, we may use information collected
                      about you via the App to:
                    </p>
                    <ul>
                      <li>Create and manage your account.</li>
                      <li>
                        Compile anonymous statistical data and analysis for use
                        internally.
                      </li>
                      <li>
                        Deliver targeted advertising, coupons, newsletters, and
                        other information regarding promotions and the App to
                        you.
                      </li>
                      <li>Increase the efficiency and operation of the App.</li>
                      <li>
                        Monitor and analyze usage and trends to improve your
                        experience with the App.
                      </li>
                      <li>Notify you of updates to the App.</li>
                    </ul>

                    <h2>User Control & Data Deletion Policy</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      You have control over your personal health data. You can
                      access, update, or delete your data at any time through
                      the app’s settings. If you choose to delete your account,
                      all associated data will be permanently removed from our
                      servers. Account deletion can be accessed via the
                      following ways:
                    </p>
                    <ul>
                      <li>
                        In-app via the profile settings. (Recommended method)
                      </li>
                      <li>
                        Reach out to us using this{" "}
                        <a
                          href="https://kaizenhealth.io/support"
                          className="underline"
                        >
                          support link
                        </a>{" "}
                        and select "Account & Data Deletion".
                      </li>
                      <li>
                        You can also email us at{" "}
                        <a
                          href="mailto:info@kaizenhealth.io?subject=Account Deletion"
                          className="underline"
                        >
                          info@kaizenhealth.io
                        </a>{" "}
                        with "Account & Data Deletion" in the subject line from
                        the email address linked to your account.
                      </li>
                    </ul>

                    <h2>Disclosure of Your Information</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      We may share information we have collected about you in
                      certain situations. Your information may be disclosed as
                      follows:
                    </p>
                    <ul>
                      <li>
                        <strong>By Law or to Protect Rights</strong>: If we
                        believe the release of information about you is
                        necessary to respond to legal process, to investigate or
                        remedy potential violations of our policies, or to
                        protect the rights, property, and safety of others, we
                        may share your information as permitted or required by
                        any applicable law, rule, or regulation.
                      </li>
                      <li>
                        <strong>Third-Party Service Providers</strong>: We may
                        share your information with third parties that perform
                        services for us or on our behalf, including payment
                        processing, data analysis, email delivery, hosting
                        services, customer service, and marketing assistance. We
                        currently do not have a Business Associate Agreement
                        (BAA) with OpenAI or Anthropic. To ensure HIPAA
                        compliance, we do not send any personally identifiable
                        or protected health information (PHI) to these providers
                        unless the user has provided explicit consent, and most
                        sensitive data is redacted prior to processing.
                      </li>
                    </ul>

                    <h2>Security of Your Information</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      We use administrative, technical, and physical security
                      measures to help protect your personal information. While
                      we have taken reasonable steps to secure the personal
                      information you provide to us, please be aware that
                      despite our efforts, no security measures are perfect or
                      impenetrable, and no method of data transmission can be
                      guaranteed against any interception or other types of
                      misuse.
                    </p>

                    <h2>Use by Minors</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      The App is intended for use by individuals 18 years of age
                      and older. The App is not directed to individuals under
                      the age of 18, and we do not knowingly collect personal
                      information from individuals under 18.
                    </p>

                    <h2>Data Storage</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      Your personal information and health data are stored on
                      Firebase (Google Inc), ensuring HIPAA compliance and
                      secure storage of health information. We also use AI
                      models (such as OpenAI and Anthropic) in specific app
                      features. These systems are not under BAA, and we take
                      precautions to ensure PHI is not shared unless authorized
                      by the user.
                    </p>

                    <h2>Contact Us</h2>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      If you have questions or comments about this Privacy
                      Policy, please contact us at{" "}
                      <a href="mailto:info@kaizenhealth.io">
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
