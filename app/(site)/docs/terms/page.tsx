import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Terms and Conditions",
  description:
    "Review Kaizen Health terms and conditions for service usage, user obligations, privacy alignment, and platform rules that protect all families on the app.",
  path: "/docs/terms",
});

const paragraph = "text-body-color dark:text-body-color-dark text-base";

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
                    <Breadcrumbs
                      items={[
                        { name: "Home", url: "/" },
                        { name: "Policies & Docs", url: "/docs" },
                        { name: "Terms & Conditions", url: "/docs/terms" },
                      ]}
                    />
                    <h1>Terms &amp; Conditions</h1>

                    <p className={paragraph}>
                      <strong>Effective Date: March 1, 2024</strong> <br />
                      <strong>Last updated: August 17, 2026</strong>
                    </p>

                    <p className={paragraph}>
                      <strong>
                        These Terms of Service ("Terms") are an agreement
                        between Kaizen Healthcare Inc ("Kaizen Health",
                        "Company", "we", "us", or "our"), 1875 Mission St Ste
                        103, San Francisco, CA 94103, United States, and you
                        ("User" or "you"). By accessing or using our Services,
                        you agree to be bound by these Terms.
                      </strong>
                    </p>

                    <p className={paragraph}>
                      Please read section 14 carefully. It requires most
                      disputes to be resolved by binding individual arbitration
                      and contains a class action waiver.
                    </p>

                    <h2>1. Services Description</h2>
                    <p className={paragraph}>
                      Kaizen Health provides access to a collection of
                      resources, including communication tools, health record
                      management, AI-assisted health information, family and
                      care group sharing, and personalized content, through the
                      Kaizen Health mobile application, the kaizenhealth.io
                      website, and any medium or device now known or later
                      developed (the "Services"). Unless we state otherwise, any
                      new feature that augments or enhances the Services is
                      subject to these Terms.
                    </p>
                    <p className={paragraph}>
                      The Services are an informational and organizational tool.
                      They are not a medical device, they do not provide medical
                      diagnosis or treatment, and they are not a substitute for
                      professional medical care. See section 8 and our{" "}
                      <a href="/docs/disclaimer" className="underline">
                        Medical Disclaimer
                      </a>
                      .
                    </p>

                    <h2>2. Acceptance and Changes to These Terms</h2>
                    <p className={paragraph}>
                      By using the Services you agree to these Terms. If you do
                      not agree, do not use the Services. We may update these
                      Terms; when we do, we will change the "Last updated" date
                      above. If a change is material, we will give you notice in
                      the App or by email at least 30 days before it takes
                      effect. Continuing to use the Services after a change
                      takes effect means you accept the updated Terms. If you do
                      not accept them, stop using the Services and delete your
                      account.
                    </p>

                    <h2>3. Eligibility and Your Account</h2>
                    <p className={paragraph}>
                      You must be at least 18 years old and able to enter a
                      binding contract to use the Services. You agree to provide
                      accurate registration information, to keep your
                      credentials confidential, and to be responsible for
                      activity under your account. Tell us promptly at{" "}
                      <a
                        href="mailto:info@kaizenhealth.io"
                        className="underline"
                      >
                        info@kaizenhealth.io
                      </a>{" "}
                      if you believe your account has been compromised.
                    </p>

                    <h2>4. Privacy and Data Protection</h2>
                    <p className={paragraph}>
                      Your use of the Services is subject to our{" "}
                      <a href="/docs/privacy" className="underline">
                        Privacy Policy
                      </a>
                      , which explains what we collect, the third-party
                      analytics and error monitoring tools we use, how AI
                      features process your data, how we share information, how
                      long we keep it, and how you can access, export, or delete
                      it. The Privacy Policy is incorporated into these Terms.
                    </p>

                    <h2>5. Subscriptions, Billing, and Cancellation</h2>
                    <p className={paragraph}>
                      Some features require a paid subscription. Subscriptions
                      are sold and billed by Apple or Google through your App
                      Store or Google Play account, and are subject to that
                      store's terms as well as these Terms. Current plans and
                      prices are set out in our{" "}
                      <a href="/docs/eula" className="underline">
                        End User License Agreement
                      </a>{" "}
                      and shown in the App before you purchase.
                    </p>
                    <ul>
                      <li>
                        Subscriptions renew automatically for the same period
                        unless canceled at least 24 hours before the current
                        period ends.
                      </li>
                      <li>
                        Manage or cancel your subscription in your App Store or
                        Google Play account settings. We cannot cancel a
                        store-billed subscription on your behalf.
                      </li>
                      <li>
                        Canceling stops future renewals. Access continues until
                        the end of the period you have already paid for.
                      </li>
                      <li>
                        Refunds are handled by Apple or Google under their
                        policies. We do not process refunds for store purchases,
                        except where required by law.
                      </li>
                      <li>
                        We may change prices or plan features. We will give at
                        least 30 days' notice before a price change affects your
                        renewal, and you may cancel before it takes effect.
                      </li>
                      <li>
                        Free trials, where offered, convert to a paid
                        subscription unless canceled before the trial ends.
                      </li>
                      <li>
                        Deleting your Kaizen Health account does not cancel your
                        store subscription. Cancel it separately.
                      </li>
                    </ul>

                    <h2>6. Acceptable Use</h2>
                    <p className={paragraph}>
                      You agree to use the Services only for lawful and proper
                      purposes, in accordance with these Terms and applicable
                      law. You must not:
                    </p>
                    <ul>
                      <li>
                        Damage, disable, overburden, or impair our servers or
                        networks, or interfere with anyone else's use of the
                        Services.
                      </li>
                      <li>
                        Attempt to gain unauthorized access to any account,
                        data, or system, or probe, scan, or test the
                        vulnerability of our systems without our written
                        permission.
                      </li>
                      <li>
                        Scrape, crawl, or use automated means to extract data
                        from the Services, or use the Services to train a
                        machine learning model.
                      </li>
                      <li>
                        Reverse engineer, decompile, or attempt to derive the
                        source code of the Services, except where that
                        restriction is prohibited by law.
                      </li>
                      <li>
                        Upload malware, or content that is unlawful, infringing,
                        harassing, or that you do not have the right to share.
                      </li>
                      <li>
                        Resell, sublicense, or make the Services available to
                        third parties, or use them for commercial clinical
                        decision-making.
                      </li>
                      <li>
                        Misrepresent your identity, or record another person's
                        health information without their consent or your legal
                        authority.
                      </li>
                      <li>
                        Rely on the Services in an emergency. In an emergency,
                        call your local emergency number.
                      </li>
                    </ul>
                    <p className={paragraph}>
                      To report abuse or a security issue, contact{" "}
                      <a
                        href="mailto:info@kaizenhealth.io"
                        className="underline"
                      >
                        info@kaizenhealth.io
                      </a>
                      .
                    </p>

                    <h2>7. Your Content, and Sharing With Others</h2>
                    <p className={paragraph}>
                      You keep ownership of the records, documents, and other
                      content you add to the Services ("Your Content"). You
                      grant us a worldwide, non-exclusive, royalty-free license
                      to host, store, process, transmit, and display Your
                      Content solely to operate and provide the Services to you
                      and to the people you choose to share with. This license
                      ends when you delete the content or your account, except
                      for copies retained as described in our Privacy Policy.
                    </p>
                    <p className={paragraph}>
                      We do not use Your Content to train AI models, and we do
                      not sell it. You are responsible for Your Content,
                      including for having the consent or legal authority to add
                      information about another person. If you share content
                      into a care group, every member of that group can see it.
                      You can stop sharing at any time, but you cannot undo what
                      other members have already seen or saved.
                    </p>

                    <h2>8. AI Features and Medical Disclaimer</h2>
                    <p className={paragraph}>
                      Some features use artificial intelligence to generate
                      summaries, transcriptions, and health information. AI
                      output may be incomplete, outdated, or wrong. It is
                      provided for informational and educational purposes only,
                      is not medical advice, and does not create a
                      doctor-patient relationship. Always consult a qualified
                      healthcare provider before acting on anything you read in
                      the Services, and never delay seeking care because of it.
                      Our{" "}
                      <a href="/docs/disclaimer" className="underline">
                        Medical Disclaimer
                      </a>{" "}
                      and the in-app AI Use Disclaimer apply to these features
                      and are incorporated into these Terms.
                    </p>

                    <h2>9. Our Content and Intellectual Property</h2>
                    <p className={paragraph}>
                      The Services and their content, including messages, data,
                      text, audio, photos, graphics, video, icons, software, and
                      code, and the infrastructure used to provide them, are
                      owned by us or our licensors and are protected by
                      intellectual property law. Except as these Terms allow,
                      you may not modify, rent, lease, loan, sell, distribute,
                      or create derivative works based on the Services.
                    </p>
                    <p className={paragraph}>
                      All Kaizen Health trademarks, service marks, logos, and
                      trade names are ours. Other marks belong to their
                      respective owners. If you believe content on the Services
                      infringes your copyright, send a notice with the
                      information required by the DMCA to{" "}
                      <a
                        href="mailto:info@kaizenhealth.io"
                        className="underline"
                      >
                        info@kaizenhealth.io
                      </a>
                      .
                    </p>

                    <h2>10. Third-Party Services</h2>
                    <p className={paragraph}>
                      The Services integrate with third parties, including cloud
                      hosting, AI providers, email delivery, analytics, error
                      monitoring, app stores, and Apple Health and Google Health
                      Connect. These are listed in our{" "}
                      <a href="/docs/privacy" className="underline">
                        Privacy Policy
                      </a>
                      . Your use of a third-party service is governed by that
                      party's own terms and privacy policy, and we are not
                      responsible for third-party services or content.
                    </p>

                    <h2>11. Suspension and Termination</h2>
                    <p className={paragraph}>
                      You may stop using the Services and delete your account at
                      any time, as described in our Privacy Policy. We may
                      suspend or terminate your access if you materially breach
                      these Terms, if your use creates a legal or security risk
                      for us or other users, or if we discontinue the Services.
                      Except where a breach requires immediate action, we will
                      give you reasonable notice and an opportunity to resolve
                      the problem. If we discontinue the Services, we will give
                      you notice and a reasonable period to export your data. On
                      termination, your license to use the Services ends, and
                      the sections that by their nature survive termination
                      continue to apply.
                    </p>

                    <h2>12. Disclaimer of Warranties</h2>
                    <p className={paragraph}>
                      The Services are provided "as is" and "as available". To
                      the fullest extent permitted by law, we disclaim all
                      warranties of any kind, express or implied, including the
                      implied warranties of merchantability, fitness for a
                      particular purpose, and non-infringement, and we do not
                      warrant that the Services will be uninterrupted,
                      error-free, or that any content is accurate or complete.
                      Some jurisdictions do not allow the exclusion of certain
                      warranties, so some of these exclusions may not apply to
                      you.
                    </p>

                    <h2>13. Limitation of Liability</h2>
                    <p className={paragraph}>
                      To the fullest extent permitted by law, we will not be
                      liable for any indirect, incidental, special,
                      consequential, exemplary, or punitive damages, including
                      loss of profits, data, use, or goodwill, arising from (i)
                      your access to, use of, or inability to use the Services;
                      (ii) any conduct or content of any third party or other
                      user; or (iii) any reliance on AI-generated or other
                      informational content.
                    </p>
                    <p className={paragraph}>
                      Our total liability for all claims relating to the
                      Services will not exceed the greater of the amount you
                      paid us in the 12 months before the event giving rise to
                      the claim, or USD 100. Nothing in these Terms limits
                      liability that cannot be limited by law, including for
                      death or personal injury caused by negligence, or for
                      fraud. If you are a consumer, these Terms do not affect
                      your statutory rights.
                    </p>

                    <h2>14. Governing Law and Dispute Resolution</h2>
                    <p className={paragraph}>
                      These Terms and your use of the Services are governed by
                      the laws of the State of California, United States,
                      without regard to its conflict of law provisions. If you
                      are a consumer resident in the EEA or the United Kingdom,
                      this does not deprive you of the protection of the
                      mandatory consumer law of your country of residence, and
                      you may bring proceedings in your local courts.
                    </p>
                    <p className={paragraph}>
                      Before starting a formal proceeding, please contact us at{" "}
                      <a
                        href="mailto:info@kaizenhealth.io"
                        className="underline"
                      >
                        info@kaizenhealth.io
                      </a>{" "}
                      so we can try to resolve the issue informally within 30
                      days.
                    </p>
                    <p className={paragraph}>
                      If we cannot resolve a dispute informally, you and we
                      agree that any dispute will be resolved by binding
                      individual arbitration administered by JAMS under its
                      applicable rules, seated in San Francisco, California,
                      rather than in court.{" "}
                      <strong>
                        You and we waive the right to a jury trial and to
                        participate in a class, collective, or representative
                        action.
                      </strong>{" "}
                      Either party may bring a qualifying claim in small claims
                      court instead, and either party may seek injunctive relief
                      in court to protect intellectual property or prevent
                      unauthorized access. This arbitration agreement does not
                      apply where it is unenforceable under the law applicable
                      to you, including for many consumers outside the United
                      States; in that case, disputes will be resolved in the
                      courts of San Francisco, California, or your local courts
                      where the law gives you that right.
                    </p>

                    <h2>15. General Terms</h2>
                    <p className={paragraph}>
                      These Terms, together with our Privacy Policy, Medical
                      Disclaimer, and End User License Agreement, are the entire
                      agreement between you and us about the Services and
                      supersede any earlier agreements. If a provision is found
                      unenforceable, the rest remains in effect. Our failure to
                      enforce a provision is not a waiver of it. You may not
                      assign these Terms without our consent; we may assign them
                      in connection with a merger, acquisition, or sale of
                      assets. Neither party is liable for delays caused by
                      events beyond its reasonable control. You may not use the
                      Services in violation of export control or sanctions laws.
                      These Terms create no third-party beneficiary rights.
                    </p>
                    <p className={paragraph}>
                      Where these Terms conflict with the End User License
                      Agreement regarding your use of the mobile application,
                      the End User License Agreement controls for that subject
                      matter.
                    </p>

                    <h2>16. Contact Information</h2>
                    <p className={paragraph}>
                      Kaizen Healthcare Inc
                      <br />
                      1875 Mission St Ste 103
                      <br />
                      San Francisco, CA 94103, United States
                      <br />
                      <a
                        href="mailto:info@kaizenhealth.io"
                        className="underline"
                      >
                        info@kaizenhealth.io
                      </a>
                    </p>

                    <p className={paragraph}>
                      <em>
                        By using the Services, you agree to these Terms and
                        Conditions.
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
