import { Metadata } from "next";
import { DocsLayout } from "@/components/Docs/DocsLayout";
import { createPageMetadata } from "@/lib/seo";
import type { DocsTocItem } from "@/types/legal";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "End User License Agreement",
  description:
    "Read the Kaizen Health EULA for subscription terms, app usage rights, HIPAA commitments, and responsibilities related to family health record management.",
  path: "/docs/eula",
});

const eulaToc: DocsTocItem[] = [
  { id: "acceptance-of-terms", label: "1. Acceptance of Terms" },
  { id: "eligibility", label: "2. Eligibility" },
  { id: "license-grant", label: "3. License Grant" },
  { id: "subscription-services", label: "4. Subscription Services" },
  {
    id: "health-information-and-hipaa-compliance",
    label: "5. Health Information and HIPAA Compliance",
  },
  {
    id: "ai-chatbot-services-and-medical-disclaimer",
    label: "6. AI Chatbot Services and Medical Disclaimer",
  },
  {
    id: "data-collection-and-privacy",
    label: "7. Data Collection and Privacy",
  },
  { id: "user-content-and-sharing", label: "8. User Content and Sharing" },
  { id: "third-party-services", label: "9. Third-Party Services" },
  { id: "termination", label: "10. Termination" },
  {
    id: "disclaimers-and-limitations-of-liability",
    label: "11. Disclaimers and Limitations of Liability",
  },
  {
    id: "governing-law-and-jurisdiction",
    label: "12. Governing Law and Jurisdiction",
  },
  { id: "contact-information", label: "13. Contact Information" },
  { id: "changes-to-this-agreement", label: "14. Changes to This Agreement" },
];

export default function Eula() {
  return (
    <DocsLayout href="/docs/eula" toc={eulaToc}>
      <h2 id="acceptance-of-terms">1. Acceptance of Terms</h2>
      <p>
        By downloading, installing, or using the Kaizen Health - Family mobile
        application ("App"), you agree to be bound by this End User License
        Agreement ("Agreement") between you and Kaizen Healthcare Inc
        ("Company," "we," "us," or "our"), located at 1875 Mission St Ste 103
        San Francisco, CA 94103. If you do not agree to these terms, do not
        download, install, or use the App.
      </p>

      <h2 id="eligibility">2. Eligibility</h2>
      <p>
        You must be at least 18 years old to use the App. By using the App, you
        represent and warrant that you are at least 18 years of age and have the
        legal capacity to enter into this Agreement.
      </p>

      <h2 id="license-grant">3. License Grant</h2>
      <p>
        Subject to your compliance with this Agreement, we grant you a limited,
        non-exclusive, non-transferable, revocable license to download, install,
        and use the App for your personal, non-commercial use.
      </p>

      <h2 id="subscription-services">4. Subscription Services</h2>
      <p>4.1. The App offers the following subscription options:</p>
      <ul>
        <li>Kaizen Duo: $9.99 per month</li>
        <li>Kaizen Family: $14.99 per month</li>
      </ul>

      <p>4.2. Important subscription information:</p>
      <ul>
        <li>
          Subscription fees are billed through your Apple App Store or Google
          Play Store account
        </li>
        <li>
          Subscriptions automatically renew unless canceled at least 24 hours
          before the end of the current period
        </li>
        <li>
          You can manage and cancel subscriptions through your app store account
          settings
        </li>
      </ul>

      <h2 id="health-information-and-hipaa-compliance">
        5. Health Information and HIPAA Compliance
      </h2>
      <ul>
        <li>
          We apply safeguards aligned with the Health Insurance Portability and
          Accountability Act (HIPAA) to health information. Section 14 of our{" "}
          <a href={"/docs/privacy"}>Privacy Policy</a> explains when HIPAA does
          and does not apply to a direct-to-consumer service like ours, and
          which consumer health privacy laws protect your data instead.
        </li>
        <li>
          You acknowledge that any health information you provide is voluntary
        </li>
        <li>
          We maintain appropriate administrative, technical, and physical
          safeguards to protect your health information
        </li>
      </ul>

      <h2 id="ai-chatbot-services-and-medical-disclaimer">
        6. AI Chatbot Services and Medical Disclaimer
      </h2>
      <ul>
        <li>
          The AI chatbot feature ("Health Chatbot") provides general health
          information and suggestions only
        </li>
        <li>
          The Health Chatbot does not provide medical diagnosis, treatment, or
          professional medical advice
        </li>
        <li>
          Never disregard professional medical advice or delay seeking it
          because of information provided by the Health Chatbot
        </li>
        <li>
          Users can report inappropriate or concerning AI responses through the
          app's reporting feature
        </li>
        <li>
          The Company does not guarantee the accuracy, completeness, or
          usefulness of any AI-generated content
        </li>
      </ul>

      <h2 id="data-collection-and-privacy">7. Data Collection and Privacy</h2>
      <p>7.1. We collect and process the following types of information:</p>
      <ul>
        <li>Personal information</li>
        <li>Health data</li>
        <li>Device information</li>
        <li>Usage data</li>
      </ul>

      <p>7.2. Additional privacy information:</p>
      <ul>
        <li>
          Third-party service providers may collect additional information
          according to their own privacy policies
        </li>
        <li>
          Our detailed Privacy Policy, available{" "}
          <a href={"/docs/privacy"} target="_blank">
            here
          </a>
          , describes how we collect, use, and protect your information.
        </li>
      </ul>

      <h2 id="user-content-and-sharing">8. User Content and Sharing</h2>
      <ul>
        <li>
          You retain ownership of any content you create or upload to the App
        </li>
        <li>
          By uploading content, you grant us a worldwide, non-exclusive,
          royalty-free license to use, display, and share your content for the
          purpose of providing our services
        </li>
        <li>
          You may only share health information about others with their explicit
          consent
        </li>
        <li>
          You are solely responsible for any content you share through the App
        </li>
      </ul>

      <h2 id="third-party-services">9. Third-Party Services</h2>
      <ul>
        <li>
          The App runs on Amazon Web Services, Google Cloud, and Firebase
          backend services, and integrates with third-party AI providers, email
          delivery, analytics, error monitoring, app store billing, and Apple
          Health and Google Health Connect. Each is named in our{" "}
          <a href={"/docs/privacy"}>Privacy Policy</a>.
        </li>
        <li>
          Your use of third-party services is subject to their respective terms
          and privacy policies
        </li>
        <li>We are not responsible for any third-party services or content</li>
      </ul>

      <h2 id="termination">10. Termination</h2>
      <p>
        10.1. We may terminate or suspend your access to the App immediately,
        without prior notice, for any reason.
      </p>
      <p>10.2. Upon termination:</p>
      <ul>
        <li>Your license to use the App will end</li>
        <li>You must cease all use of the App</li>
        <li>
          You remain bound by sections that by their nature continue after
          termination
        </li>
      </ul>

      <h2 id="disclaimers-and-limitations-of-liability">
        11. Disclaimers and Limitations of Liability
      </h2>
      <ul>
        <li>THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND</li>
        <li>WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED</li>
        <li>
          IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          OR CONSEQUENTIAL DAMAGES
        </li>
        <li>
          OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE APP
          IN THE PAST 12 MONTHS
        </li>
      </ul>

      <h2 id="governing-law-and-jurisdiction">
        12. Governing Law and Jurisdiction
      </h2>
      <ul>
        <li>
          This Agreement is governed by the laws of the State of California,
          United States
        </li>
        <li>
          For users in India, additional terms may apply as required by local
          law
        </li>
        <li>
          Any disputes shall be resolved in the courts of San Francisco,
          California
        </li>
      </ul>

      <h2 id="contact-information">13. Contact Information</h2>
      <p>For questions about this Agreement, please contact:</p>
      <ul>
        <li>Kaizen Healthcare Inc</li>
        <li>1875 Mission St Ste 103</li>
        <li>San Francisco, CA 94103</li>
        <li>Email: info@kaizenhealth.io</li>
      </ul>

      <h2 id="changes-to-this-agreement">14. Changes to This Agreement</h2>
      <ul>
        <li>We reserve the right to modify this Agreement at any time</li>
        <li>
          We will notify you of any material changes through the App or via
          email
        </li>
        <li>
          Your continued use of the App after such modifications constitutes
          acceptance of the updated Agreement
        </li>
      </ul>

      <p>
        By using the App, you acknowledge that you have read, understood, and
        agree to be bound by this Agreement.
      </p>
    </DocsLayout>
  );
}
