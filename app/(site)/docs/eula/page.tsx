import { Metadata } from "next";
import SidebarLink from "@/components/Docs/SidebarLink";

export const metadata: Metadata = {
  title: "End User License Agreement - Kaizen Health",
  description:
    "End User License Agreement (EULA) for Kaizen Health - Family app. Terms and conditions for using our health tracking, medical records management, and AI health chat services. Important information about subscriptions, privacy, HIPAA compliance, and user rights.",
  // other metadata
};

export default function Eula() {
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
                    <h1>END USER LICENSE AGREEMENT (EULA)</h1>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      <strong>Effective Date: March 1st 2024</strong> <br />
                      <strong>Last updated: Dec 12th, 2024</strong>
                    </p>

                    <h3>1. ACCEPTANCE OF TERMS</h3>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      By downloading, installing, or using the Kaizen Health -
                      Family mobile application ("App"), you agree to be bound
                      by this End User License Agreement ("Agreement") between
                      you and Kaizen Healthcare Inc ("Company," "we," "us," or
                      "our"), located at 1875 Mission St Ste 103 San Francisco,
                      CA 94103. If you do not agree to these terms, do not
                      download, install, or use the App.
                    </p>

                    <h3>2. ELIGIBILITY</h3>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      You must be at least 18 years old to use the App. By using
                      the App, you represent and warrant that you are at least
                      18 years of age and have the legal capacity to enter into
                      this Agreement.
                    </p>

                    <h3>3. LICENSE GRANT</h3>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      Subject to your compliance with this Agreement, we grant
                      you a limited, non-exclusive, non-transferable, revocable
                      license to download, install, and use the App for your
                      personal, non-commercial use.
                    </p>

                    <h3>4. SUBSCRIPTION SERVICES</h3>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      4.1. The App offers the following subscription options:
                    </p>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>Kaizen Duo: $4.99 per month</li>
                      <li>Kaizen Family: $9.99 per month</li>
                    </ul>

                    <p className="text-body-color dark:text-body-color-dark text-base">
                      4.2. Important subscription information:
                    </p>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>
                        Subscription fees are billed through your Apple App
                        Store or Google Play Store account
                      </li>
                      <li>
                        Subscriptions automatically renew unless canceled at
                        least 24 hours before the end of the current period
                      </li>
                      <li>
                        You can manage and cancel subscriptions through your app
                        store account settings
                      </li>
                    </ul>

                    <h3>5. HEALTH INFORMATION AND HIPAA COMPLIANCE</h3>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>
                        The App complies with the Health Insurance Portability
                        and Accountability Act (HIPAA)
                      </li>
                      <li>
                        You acknowledge that any health information you provide
                        is voluntary
                      </li>
                      <li>
                        We maintain appropriate administrative, technical, and
                        physical safeguards to protect your health information
                      </li>
                    </ul>

                    <h3>6. AI CHATBOT SERVICES AND MEDICAL DISCLAIMER</h3>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>
                        The AI chatbot feature ("Health Chatbot") provides
                        general health information and suggestions only
                      </li>
                      <li>
                        The Health Chatbot does not provide medical diagnosis,
                        treatment, or professional medical advice
                      </li>
                      <li>
                        Never disregard professional medical advice or delay
                        seeking it because of information provided by the Health
                        Chatbot
                      </li>
                      <li>
                        Users can report inappropriate or concerning AI
                        responses through the app's reporting feature
                      </li>
                      <li>
                        The Company does not guarantee the accuracy,
                        completeness, or usefulness of any AI-generated content
                      </li>
                    </ul>

                    <h3>7. DATA COLLECTION AND PRIVACY</h3>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      7.1. We collect and process the following types of
                      information:
                    </p>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>Personal information</li>
                      <li>Health data</li>
                      <li>Device information</li>
                      <li>Usage data</li>
                    </ul>

                    <p className="text-body-color dark:text-body-color-dark text-base">
                      7.2. Additional privacy information:
                    </p>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>
                        Third-party service providers may collect additional
                        information according to their own privacy policies
                      </li>
                      <li>
                        Our detailed Privacy Policy, available{" "}
                        <a
                          href={"https://kaizenhealth.io/docs/privacy"}
                          target="_blank"
                        >
                          here
                        </a>
                        , describes how we collect, use, and protect your
                        information.
                      </li>
                    </ul>

                    <h3>8. USER CONTENT AND SHARING</h3>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>
                        You retain ownership of any content you create or upload
                        to the App
                      </li>
                      <li>
                        By uploading content, you grant us a worldwide,
                        non-exclusive, royalty-free license to use, display, and
                        share your content for the purpose of providing our
                        services
                      </li>
                      <li>
                        You may only share health information about others with
                        their explicit consent
                      </li>
                      <li>
                        You are solely responsible for any content you share
                        through the App
                      </li>
                    </ul>

                    <h3>9. THIRD-PARTY SERVICES</h3>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>
                        The App integrates with Google Cloud and AWS backend
                        services
                      </li>
                      <li>
                        Your use of third-party services is subject to their
                        respective terms and privacy policies
                      </li>
                      <li>
                        We are not responsible for any third-party services or
                        content
                      </li>
                    </ul>

                    <h3>10. TERMINATION</h3>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      10.1. We may terminate or suspend your access to the App
                      immediately, without prior notice, for any reason.
                    </p>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      10.2. Upon termination:
                    </p>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>Your license to use the App will end</li>
                      <li>You must cease all use of the App</li>
                      <li>
                        You remain bound by sections that by their nature
                        continue after termination
                      </li>
                    </ul>

                    <h3>11. DISCLAIMERS AND LIMITATIONS OF LIABILITY</h3>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>
                        THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY
                        KIND
                      </li>
                      <li>WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED</li>
                      <li>
                        IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT,
                        INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES
                      </li>
                      <li>
                        OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID
                        FOR THE APP IN THE PAST 12 MONTHS
                      </li>
                    </ul>

                    <h3>12. GOVERNING LAW AND JURISDICTION</h3>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>
                        This Agreement is governed by the laws of the State of
                        California, United States
                      </li>
                      <li>
                        For users in India, additional terms may apply as
                        required by local law
                      </li>
                      <li>
                        Any disputes shall be resolved in the courts of San
                        Francisco, California
                      </li>
                    </ul>

                    <h3>13. CONTACT INFORMATION</h3>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      For questions about this Agreement, please contact:
                    </p>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>Kaizen Healthcare Inc</li>
                      <li>1875 Mission St Ste 103</li>
                      <li>San Francisco, CA 94103</li>
                      <li>Email: info@kaizenhealth.io</li>
                    </ul>

                    <h3>14. CHANGES TO THIS AGREEMENT</h3>
                    <ul className="text-body-color dark:text-body-color-dark text-base">
                      <li>
                        We reserve the right to modify this Agreement at any
                        time
                      </li>
                      <li>
                        We will notify you of any material changes through the
                        App or via email
                      </li>
                      <li>
                        Your continued use of the App after such modifications
                        constitutes acceptance of the updated Agreement
                      </li>
                    </ul>

                    <p className="text-body-color dark:text-body-color-dark text-base">
                      By using the App, you acknowledge that you have read,
                      understood, and agree to be bound by this Agreement.
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
