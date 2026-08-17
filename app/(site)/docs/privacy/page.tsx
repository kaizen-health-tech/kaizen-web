import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import Breadcrumbs from "@/components/Common/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Privacy Policy",
  description:
    "Review the Kaizen Health privacy policy to understand how we collect, protect, and process personal and health data with subscription-first practices.",
  path: "/docs/privacy",
});

const paragraph = "text-body-color dark:text-body-color-dark text-base";
const inShort = "text-body-color dark:text-body-color-dark text-base italic";
const cell = "border border-stroke dark:border-strokedark p-3 align-top";

type CategoryRow = {
  category: string;
  examples: string;
  collected: string;
};

const categoryRows: CategoryRow[] = [
  {
    category: "A. Identifiers",
    examples:
      "Real name, alias, unique personal identifier, online identifier, Internet Protocol address, email address, and account name",
    collected: "Yes",
  },
  {
    category:
      "B. Personal information as defined in the California Customer Records statute",
    examples: "Name and contact information",
    collected: "Yes",
  },
  {
    category:
      "C. Protected classification characteristics under state or federal law",
    examples: "Sex or gender, age, and date of birth",
    collected: "Yes",
  },
  {
    category: "D. Commercial information",
    examples:
      "Subscription plan, transaction identifiers, purchase and renewal dates, and entitlement status",
    collected: "Yes",
  },
  {
    category: "E. Biometric information",
    examples: "Fingerprints and voiceprints",
    collected: "No",
  },
  {
    category: "F. Internet or other similar network activity",
    examples:
      "Screens viewed, features used, session timing, and interactions with our website and App",
    collected: "Yes",
  },
  {
    category: "G. Geolocation data",
    examples: "Device location, where you grant permission",
    collected: "Yes",
  },
  {
    category: "H. Audio, electronic, sensory, or similar information",
    examples:
      "Documents and images you upload or scan, and voice recordings you create in the App",
    collected: "Yes",
  },
  {
    category: "I. Professional or employment-related information",
    examples: "Job title, work history, and professional qualifications",
    collected: "No",
  },
  {
    category: "J. Education information",
    examples: "Student records and directory information",
    collected: "No",
  },
  {
    category: "K. Inferences drawn from collected personal information",
    examples:
      "Your health score, and summaries or health facts our AI features derive from your records",
    collected: "Yes",
  },
  {
    category: "L. Sensitive personal information",
    examples: "Health data, account login credentials, and precise geolocation",
    collected: "Yes",
  },
];

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
                        { name: "Privacy Policy", url: "/docs/privacy" },
                      ]}
                    />
                    <h1>Privacy Policy</h1>

                    <div className="mb-4 inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                      We never sell your health data or use it for advertising.
                    </div>

                    <p className={paragraph}>
                      <strong>Effective Date: March 1, 2024</strong> <br />
                      <strong>Last updated: August 17, 2026</strong>
                    </p>

                    <p className={paragraph}>
                      This Privacy Notice for{" "}
                      <strong>Kaizen Healthcare Inc</strong> ("Kaizen Health",
                      "we", "us", or "our"), 1875 Mission St Ste 103, San
                      Francisco, CA 94103, United States, describes how and why
                      we access, collect, store, use, and share ("process") your
                      personal information. Kaizen Healthcare Inc is the
                      controller of your personal data. This Notice applies when
                      you:
                    </p>
                    <ul>
                      <li>
                        Visit our website at{" "}
                        <a href="https://kaizenhealth.io" className="underline">
                          kaizenhealth.io
                        </a>
                        , including the website AI chat and contact forms, or
                        any other website of ours that links to this Notice.
                      </li>
                      <li>
                        Download and use our mobile application, Kaizen - Family
                        Health &amp; AI, and its home screen widgets, or any
                        other application of ours that links to this Notice.
                      </li>
                      <li>
                        Engage with us in other related ways, including support,
                        marketing, or events.
                      </li>
                    </ul>
                    <p className={paragraph}>
                      We refer to all of the above together as the "Services".{" "}
                      <strong>Questions or concerns?</strong> If you do not
                      agree with our policies and practices, please do not use
                      the Services. If you have questions, contact us at{" "}
                      <a
                        href="mailto:info@kaizenhealth.io?subject=Privacy Question"
                        className="underline"
                      >
                        info@kaizenhealth.io
                      </a>
                      .
                    </p>

                    <h2>Summary of key points</h2>
                    <ul>
                      <li>
                        <strong>
                          We do not sell your personal information
                        </strong>
                        , share it for cross-context behavioral advertising, or
                        use your health data to target ads. Subscriptions are
                        our only revenue.
                      </li>
                      <li>
                        <strong>What we process.</strong> Account details,
                        health information you record, documents and voice notes
                        you add, device and usage data, and, with your
                        permission, health metrics from Apple Health or Health
                        Connect, contacts, and location. See{" "}
                        <a href="#infocollect" className="underline">
                          what information we collect
                        </a>
                        .
                      </li>
                      <li>
                        <strong>Sensitive information.</strong> We process
                        health data, account login credentials, and precise
                        geolocation, with your consent or as permitted by law.
                        We do not collect genetic data or biometric identifiers.
                      </li>
                      <li>
                        <strong>Third parties.</strong> We receive limited data
                        from Apple and Google when you sign in with them or buy
                        a subscription. See{" "}
                        <a href="#thirdparties" className="underline">
                          information we receive from third parties
                        </a>
                        .
                      </li>
                      <li>
                        <strong>AI features.</strong> We have Business Associate
                        Agreements with OpenAI, Anthropic, and Google Cloud, and
                        zero data retention terms with OpenAI and Anthropic. No
                        provider may train on your data. See{" "}
                        <a href="#ai" className="underline">
                          AI products
                        </a>
                        .
                      </li>
                      <li>
                        <strong>Analytics and crash reporting</strong> collect
                        usage and diagnostic data. They are not given your
                        health records, documents, or chat content. See{" "}
                        <a href="#cookies" className="underline">
                          cookies and tracking
                        </a>
                        .
                      </li>
                      <li>
                        <strong>How long we keep it.</strong> Your account is
                        the retention period. Delete your account and we delete
                        your data. See{" "}
                        <a href="#inforetain" className="underline">
                          how long we keep your information
                        </a>
                        .
                      </li>
                      <li>
                        <strong>Your rights.</strong> You can access, export,
                        correct, or delete your data at any time, in the App,
                        through support, or by email. See{" "}
                        <a href="#privacyrights" className="underline">
                          your privacy rights
                        </a>
                        .
                      </li>
                    </ul>

                    <h2 id="toc">Table of contents</h2>
                    <ol>
                      <li>
                        <a href="#infocollect" className="underline">
                          What information do we collect?
                        </a>
                      </li>
                      <li>
                        <a href="#infouse" className="underline">
                          How do we process your information?
                        </a>
                      </li>
                      <li>
                        <a href="#legalbases" className="underline">
                          What legal bases do we rely on?
                        </a>
                      </li>
                      <li>
                        <a href="#whoshare" className="underline">
                          When and with whom do we share your information?
                        </a>
                      </li>
                      <li>
                        <a href="#cookies" className="underline">
                          Do we use cookies and other tracking technologies?
                        </a>
                      </li>
                      <li>
                        <a href="#ai" className="underline">
                          Do we offer artificial intelligence-based products?
                        </a>
                      </li>
                      <li>
                        <a href="#sociallogins" className="underline">
                          How do we handle your social logins?
                        </a>
                      </li>
                      <li>
                        <a href="#inforetain" className="underline">
                          How long do we keep your information?
                        </a>
                      </li>
                      <li>
                        <a href="#infosafe" className="underline">
                          How do we keep your information safe?
                        </a>
                      </li>
                      <li>
                        <a href="#infominors" className="underline">
                          Do we collect information from minors?
                        </a>
                      </li>
                      <li>
                        <a href="#privacyrights" className="underline">
                          What are your privacy rights?
                        </a>
                      </li>
                      <li>
                        <a href="#dnt" className="underline">
                          Controls for Do-Not-Track and Global Privacy Control
                        </a>
                      </li>
                      <li>
                        <a href="#uslaws" className="underline">
                          Do United States residents have specific privacy
                          rights?
                        </a>
                      </li>
                      <li>
                        <a href="#transfers" className="underline">
                          International data transfers
                        </a>
                      </li>
                      <li>
                        <a href="#automated" className="underline">
                          Automated processing
                        </a>
                      </li>
                      <li>
                        <a href="#hipaa" className="underline">
                          Health privacy laws and our status
                        </a>
                      </li>
                      <li>
                        <a href="#policyupdates" className="underline">
                          Do we make updates to this Notice?
                        </a>
                      </li>
                      <li>
                        <a href="#contact" className="underline">
                          How can you contact us about this Notice?
                        </a>
                      </li>
                      <li>
                        <a href="#request" className="underline">
                          How can you review, update, or delete your data?
                        </a>
                      </li>
                    </ol>

                    <h2 id="infocollect">1. What information do we collect?</h2>

                    <h3>1.1 Personal information you disclose to us</h3>
                    <p className={inShort}>
                      In Short: We collect personal information that you provide
                      to us.
                    </p>
                    <ul>
                      <li>
                        <strong>Account and profile data</strong>: name, email
                        address, password (stored only as a salted hash) or the
                        identifier returned by Sign in with Apple or Google Sign
                        In, date of birth or age, sex or gender, height, weight,
                        phone number if you provide one, profile photo,
                        language, and time zone.
                      </li>
                      <li>
                        <strong>Health information</strong>: conditions,
                        symptoms, medications, allergies, immunizations,
                        procedures, family history, lab and test results,
                        appointments, care notes, and anything else you record
                        or ask about in the App.
                      </li>
                      <li>
                        <strong>Documents and media</strong>: medical records,
                        lab reports, prescriptions, insurance documents, and
                        images you upload, scan with the in-app document
                        scanner, or attach to a chat. We extract text from these
                        documents so we can summarize and search them.
                      </li>
                      <li>
                        <strong>Voice recordings</strong>: audio you record in
                        the App, which is transcribed to text so the feature can
                        work. We do not create voiceprints and do not use audio
                        to identify you.
                      </li>
                      <li>
                        <strong>Family and group data</strong>: information
                        about family members or dependents you add to your
                        account or a care group, including their name,
                        relationship to you, and any health information you
                        record about them. You must have that person's
                        permission (or legal authority) before you add their
                        information.
                      </li>
                      <li>
                        <strong>Support and survey content</strong>: messages,
                        feedback, bug reports, and any attachments you send us.
                      </li>
                    </ul>
                    <p className={paragraph}>
                      <strong>Sensitive information.</strong> With your consent
                      or as otherwise permitted by applicable law, we process
                      health data, account login credentials, and precise
                      geolocation.{" "}
                      <strong>
                        We do not collect genetic data, and we do not collect
                        biometric identifiers such as fingerprints or
                        voiceprints
                      </strong>
                      . If you enable Face ID, Touch ID, or Android biometric
                      unlock, that check happens on your device through the
                      operating system and we never receive or store the
                      underlying data.
                    </p>
                    <p className={paragraph}>
                      All personal information that you provide to us must be
                      true, complete, and accurate, and you must notify us of
                      any changes to it.
                    </p>

                    <h3>1.2 Information collected with your permission</h3>
                    <ul>
                      <li>
                        <strong>Apple Health and Google Health Connect</strong>:
                        if you grant access, we read health and fitness metrics
                        such as steps, heart rate and resting heart rate, sleep,
                        weight, height, blood pressure, blood glucose, and
                        activity. We only request the metric types the features
                        you use need, we do not write ad-related data back, and
                        you can revoke access at any time in iOS Settings,
                        Health Connect, or the App. Health data received through
                        these APIs is never used for advertising or marketing
                        and is never sold or shared with data brokers.
                      </li>
                      <li>
                        <strong>
                          Camera, photo library, microphone, and files
                        </strong>
                        : used only to capture or select the documents, images,
                        and audio you choose to add.
                      </li>
                      <li>
                        <strong>Contacts</strong>: if you choose to add a family
                        member from your address book, the App reads your
                        contact list on your device so you can pick one. Only
                        the details of the contact you select are sent to us. We
                        do not upload your full address book.
                      </li>
                      <li>
                        <strong>Location</strong>: if you grant access, we use
                        your device location for location-dependent features. We
                        do not track your location in the background and we do
                        not build location profiles. You can disable this in
                        your device settings, though some features may stop
                        working.
                      </li>
                      <li>
                        <strong>Push notifications</strong>: if you allow them,
                        we store a device push token so we can send reminders
                        and updates. You can turn these off in your device
                        settings.
                      </li>
                    </ul>

                    <h3>1.3 Information collected automatically</h3>
                    <p className={inShort}>
                      In Short: Some information, such as your IP address and
                      device characteristics, is collected automatically when
                      you use the Services.
                    </p>
                    <ul>
                      <li>
                        <strong>Device data</strong>: device model and
                        manufacturer, operating system and version, App version,
                        language and region, hardware settings, mobile carrier
                        or internet service provider, device and installation
                        identifiers, and IP address.
                      </li>
                      <li>
                        <strong>Log and usage data</strong>: screens you open,
                        how long you spend on them, features you use, session
                        timing, searches, and the date and time stamps of your
                        activity.
                      </li>
                      <li>
                        <strong>Diagnostic and crash data</strong>: error
                        messages, stack traces, performance traces, and the
                        sequence of app events leading up to a problem.
                      </li>
                      <li>
                        <strong>Website data</strong>: pages viewed, referring
                        URL, approximate location derived from IP address,
                        browser and device type, and cookie or similar
                        identifiers set by the analytics tools described in{" "}
                        <a href="#cookies" className="underline">
                          section 5
                        </a>
                        .
                      </li>
                      <li>
                        <strong>Security and abuse-prevention data</strong>: IP
                        address and request counts, which we use to rate-limit
                        the website AI chat and to detect abuse.
                      </li>
                    </ul>

                    <h3 id="thirdparties">
                      1.4 Information we receive from third parties
                    </h3>
                    <ul>
                      <li>
                        <strong>Apple and Google sign-in</strong>: if you
                        register using Sign in with Apple or Google Sign In, we
                        receive the profile information described in{" "}
                        <a href="#sociallogins" className="underline">
                          section 7
                        </a>
                        .
                      </li>
                      <li>
                        <strong>Apple and Google billing</strong>: we receive
                        your transaction identifier, product identifier,
                        purchase and renewal dates, and entitlement status so we
                        can unlock paid features.
                      </li>
                    </ul>
                    <p className={paragraph}>
                      We do not buy personal information from data brokers, and
                      we do not enrich your profile with data purchased from
                      third parties.
                    </p>

                    <h3>1.5 Subscription and payment information</h3>
                    <p className={paragraph}>
                      Subscriptions are sold and billed by Apple and Google.{" "}
                      <strong>
                        We never receive or store your card number, bank
                        details, security code, or billing address.
                      </strong>{" "}
                      Payment data is handled entirely by Apple and Google under
                      their own privacy policies.
                    </p>

                    <h3>1.6 Website AI chat</h3>
                    <p className={paragraph}>
                      The AI chat on our website asks for your email address and
                      verifies it with a one-time code. Your questions, any
                      files you attach, and your email address are processed to
                      produce a response, and your IP address is used to apply
                      rate limits. Please do not enter information in the
                      website chat that you would not want associated with your
                      email address.
                    </p>

                    <h3>1.7 Google API Services</h3>
                    <p className={paragraph}>
                      Our use of information received from Google APIs adheres
                      to the{" "}
                      <a
                        href="https://developers.google.com/terms/api-services-user-data-policy"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google API Services User Data Policy
                      </a>
                      , including its{" "}
                      <a
                        href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Limited Use requirements
                      </a>
                      .
                    </p>

                    <h2 id="infouse">2. How do we process your information?</h2>
                    <p className={inShort}>
                      In Short: We process your information to provide, improve,
                      and administer the Services, to communicate with you, for
                      security and fraud prevention, and to comply with law. We
                      process it only when we have a valid legal reason.
                    </p>
                    <ul>
                      <li>
                        <strong>To provide the Services</strong>: create and
                        manage your account, store your records, generate
                        summaries and your health score, run reminders, and
                        deliver the features you request.
                      </li>
                      <li>
                        <strong>To operate AI features</strong>: answer your
                        questions, summarize documents, extract clinical facts,
                        and transcribe voice notes.
                      </li>
                      <li>
                        <strong>To enable family and group sharing</strong>:
                        share the records you choose with the care groups you
                        choose, and enable communication between members.
                      </li>
                      <li>
                        <strong>To respond to your inquiries</strong> and
                        provide support.
                      </li>
                      <li>
                        <strong>
                          To keep the Services secure and reliable
                        </strong>
                        : authenticate you, prevent fraud and abuse, apply rate
                        limits, and diagnose crashes and errors.
                      </li>
                      <li>
                        <strong>To identify usage trends</strong> and understand
                        how the Services are used so we can improve them.
                      </li>
                      <li>
                        <strong>To communicate with you</strong>: service and
                        security notices, and marketing messages you have opted
                        into.
                      </li>
                      <li>
                        <strong>To save or protect a vital interest</strong>,
                        such as to prevent harm to you or another person.
                      </li>
                      <li>
                        <strong>
                          To meet legal and accounting obligations
                        </strong>{" "}
                        and respond to lawful requests.
                      </li>
                    </ul>
                    <p className={paragraph}>
                      <strong>
                        We do not use your health information, documents, or
                        chat content to target advertising, and we do not
                        profile you for advertising purposes.
                      </strong>{" "}
                      Marketing communications we send are based only on your
                      contact details and your subscription status.
                    </p>

                    <h2 id="legalbases">
                      3. What legal bases do we rely on to process your
                      information?
                    </h2>
                    <p className={inShort}>
                      In Short: We process your personal information only when
                      we have a valid legal reason to do so under applicable
                      law.
                    </p>

                    <h3>
                      If you are located in the EEA, UK, or Switzerland, this
                      section applies to you
                    </h3>
                    <p className={paragraph}>
                      The GDPR and UK GDPR require us to explain the legal bases
                      we rely on. For each purpose in section 2, we rely on:
                    </p>
                    <ul>
                      <li>
                        <strong>Consent</strong>: where you have given us
                        permission for a specific purpose. For health data we
                        rely on your <strong>explicit consent</strong> under
                        GDPR Article 9(2)(a), which you give when you enable
                        health features, and which you can{" "}
                        <a href="#withdrawconsent" className="underline">
                          withdraw at any time
                        </a>
                        .
                      </li>
                      <li>
                        <strong>Performance of a contract</strong>: to deliver
                        the Services you signed up for, including your account,
                        records, AI features, and subscription.
                      </li>
                      <li>
                        <strong>Legitimate interests</strong>: to secure the
                        Services, diagnose problems, prevent fraud, and analyze
                        how the Services are used so we can improve them, where
                        those interests do not override your rights.
                      </li>
                      <li>
                        <strong>Legal obligations</strong>: to comply with law,
                        cooperate with law enforcement or a regulator, or
                        exercise or defend legal claims.
                      </li>
                      <li>
                        <strong>Vital interests</strong>: where processing is
                        necessary to protect your life or that of another
                        person.
                      </li>
                    </ul>

                    <h3>
                      If you are located in Canada, this section applies to you
                    </h3>
                    <p className={paragraph}>
                      We process your information where you have given us
                      express consent, or where consent can be inferred from the
                      circumstances (implied consent). You can{" "}
                      <a href="#withdrawconsent" className="underline">
                        withdraw your consent
                      </a>{" "}
                      at any time. In limited cases, applicable law permits us
                      to process without consent, for example: where collection
                      is clearly in your interest and consent cannot be obtained
                      in time; for investigations, fraud detection, and
                      prevention; for business transactions meeting certain
                      conditions; to identify injured, ill, or deceased persons
                      and communicate with next of kin; where we have reasonable
                      grounds to believe someone has been a victim of financial
                      abuse; where disclosure is required by subpoena, warrant,
                      or court order; or where the information is publicly
                      available and specified by the regulations.
                    </p>

                    <h2 id="whoshare">
                      4. When and with whom do we share your personal
                      information?
                    </h2>
                    <p className={inShort}>
                      In Short: We share information only in the situations
                      described below.{" "}
                      <strong>
                        We do not sell your personal information and we do not
                        share it for cross-context behavioral advertising.
                      </strong>
                    </p>
                    <p className={paragraph}>
                      We do not disclose your health data to data brokers,
                      insurers, or employers.
                    </p>

                    <h3>4.1 With people you choose</h3>
                    <p className={paragraph}>
                      If you add a document or record to a care group, every
                      member of that group can see it, and members can
                      communicate with each other in the App. You control what
                      you share and can turn sharing off at any time, but
                      members may already have seen or saved the content.
                      Removing sharing does not undo what someone has already
                      read. Content shared into a care group is visible only to
                      that group. It is not public, and it is not published
                      outside the Services.
                    </p>

                    <h3 id="service-providers">4.2 With service providers</h3>
                    <p className={paragraph}>
                      These vendors process data on our behalf, under written
                      contract, and only for the purposes we specify:
                    </p>
                    <ul>
                      <li>
                        <strong>Amazon Web Services</strong>: hosting and
                        operation of our backend application servers.
                      </li>
                      <li>
                        <strong>Google (Firebase and Google Cloud)</strong>:
                        authentication, database, file storage, push
                        notifications, analytics, and remote configuration.
                      </li>
                      <li>
                        <strong>OpenAI, Anthropic, and Google</strong>: AI
                        processing, as described in{" "}
                        <a href="#ai" className="underline">
                          section 6
                        </a>
                        .
                      </li>
                      <li>
                        <strong>Supabase</strong>: storage of health-fact
                        memories and vector embeddings.
                      </li>
                      <li>
                        <strong>Sentry</strong>: crash and error monitoring.
                      </li>
                      <li>
                        <strong>Twilio SendGrid</strong>: transactional and
                        product email, including verification codes.
                      </li>
                      <li>
                        <strong>Apple and Google</strong>: app distribution,
                        subscription billing, and receipt validation.
                      </li>
                    </ul>

                    <h3>4.3 For legal reasons and to protect people</h3>
                    <p className={paragraph}>
                      We may disclose information where we believe it is
                      required by law, or reasonably necessary to comply with
                      legal process, enforce our terms, investigate suspected
                      fraud or abuse, or protect the rights, property, or safety
                      of you, us, or others. Where we are legally permitted, we
                      will notify you before disclosing your information in
                      response to a legal request.
                    </p>

                    <h3>4.4 Business transfers</h3>
                    <p className={paragraph}>
                      If we are involved in a merger, acquisition, financing,
                      reorganization, or sale of assets, your information may
                      transfer as part of that transaction. We will notify you
                      before your information becomes subject to a materially
                      different privacy policy, and we will require the
                      recipient to honor the commitments in this Notice. Your
                      health data is not an asset we will market or sell
                      separately from the Services.
                    </p>

                    <h2 id="cookies">
                      5. Do we use cookies and other tracking technologies?
                    </h2>
                    <p className={inShort}>
                      In Short: We use a small set of cookies and analytics
                      tools. We do not use advertising or retargeting trackers.
                    </p>
                    <p className={paragraph}>
                      We use strictly necessary cookies and local storage for
                      sign-in, security, and remembering your preferences. These
                      cannot be turned off without breaking the Services. We use
                      the measurement tools listed below. None of them is given
                      your health records, documents, or chat content.
                    </p>
                    <ul>
                      <li>
                        <strong>Google Analytics 4 (website)</strong>: provided
                        by Google, to measure page views, traffic sources, and
                        general site usage. It sets cookies and similar
                        identifiers in your browser and processes your IP
                        address, which Google anonymizes before storage.{" "}
                        <strong>
                          We have not enabled Google Signals, Demographics and
                          Interests Reporting, advertising features, or
                          remarketing on this property.
                        </strong>{" "}
                        You can opt out with the{" "}
                        <a
                          href="https://tools.google.com/dlpage/gaoptout"
                          className="underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Google Analytics opt-out browser add-on
                        </a>
                        , by declining analytics cookies where we present that
                        choice, or by sending a Global Privacy Control signal.
                      </li>
                      <li>
                        <strong>Firebase Analytics (App)</strong>: provided by
                        Google. Records which screens you open, how long you
                        spend on them, and similar product-usage events, tied to
                        an app instance identifier. It is not given health
                        record content. You can turn off analytics collection in
                        the App's privacy settings.
                      </li>
                      <li>
                        <strong>Sentry (App, website, and backend)</strong>:
                        crash and error monitoring. Sentry receives error
                        messages, stack traces, performance traces, device and
                        OS details, and a pseudonymous identifier so we can tell
                        how many users an error affects. We have disabled
                        Sentry's collection of personally identifying request
                        data on our backend. Error reports can incidentally
                        contain technical fragments of a request; we configure
                        our systems to scrub and redact sensitive values, and we
                        do not intentionally send health data to Sentry.
                      </li>
                      <li>
                        <strong>
                          Firebase Remote Config and Cloud Messaging
                        </strong>
                        : provided by Google, to roll features out safely and
                        deliver notifications you have opted into.
                      </li>
                    </ul>
                    <p className={paragraph}>
                      <strong>
                        We do not use advertising, retargeting, or social media
                        tracking pixels on the website or in the App, we do not
                        display third-party advertising or offer walls, and we
                        do not permit third parties to collect data through the
                        Services for their own advertising purposes.
                      </strong>{" "}
                      Because we do not use tracking technologies for targeted
                      advertising, there is no advertising opt-out for us to
                      offer.
                    </p>
                    <p className={paragraph}>
                      Analytics data collected through Google Analytics 4 and
                      Firebase Analytics is retained for no longer than 14
                      months. Error and diagnostic data in Sentry is retained
                      for no longer than 90 days. For more on Google's
                      practices, see the{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Google Privacy &amp; Terms page
                      </a>
                      .
                    </p>

                    <h2 id="ai">
                      6. Do we offer artificial intelligence-based products?
                    </h2>
                    <p className={inShort}>
                      In Short: Yes. We offer features powered by artificial
                      intelligence, and this section explains how your data is
                      handled when you use them.
                    </p>
                    <p className={paragraph}>
                      Our AI features provide chat responses, document and image
                      analysis, text summarization, health insights, and voice
                      transcription. The providers we use are:
                    </p>
                    <ul>
                      <li>
                        <strong>OpenAI</strong>: chat responses, document
                        summarization, and extraction of clinical facts.
                      </li>
                      <li>
                        <strong>Anthropic</strong>: chat responses and document
                        analysis.
                      </li>
                      <li>
                        <strong>Google Cloud</strong>: transcription of voice
                        recordings through Speech-to-Text, and redaction of
                        identifying details through Data Loss Prevention.
                      </li>
                      <li>
                        <strong>Google Gemini</strong>: document and content
                        analysis. This runs under Google's API data processing
                        terms rather than the Business Associate Agreement
                        described below.
                      </li>
                    </ul>
                    <p className={paragraph}>How we handle this processing:</p>
                    <ul>
                      <li>
                        We have Business Associate Agreements with OpenAI,
                        Anthropic, and Google Cloud covering the health
                        information processed under them.
                      </li>
                      <li>
                        <strong>Your data is not used for training.</strong>{" "}
                        Under our agreements, none of these providers may use
                        your input or the generated output to train or improve
                        their models.
                      </li>
                      <li>
                        <strong>Zero data retention.</strong> Under zero data
                        retention terms with OpenAI and Anthropic, your input
                        and the generated output are not stored on their systems
                        after the response is returned to us. They are not kept
                        for abuse monitoring, human review, or any other
                        purpose, so there is no copy on their side to retain or
                        disclose.
                      </li>
                      <li>
                        We apply automated redaction and de-identification,
                        including Google Cloud Data Loss Prevention, to remove
                        directly identifying details before content is sent for
                        processing where the feature allows it. Redaction is not
                        perfect, and content you write yourself may still
                        contain identifying details.
                      </li>
                      <li>
                        No provider receives your Kaizen Health account
                        credentials. Where a provider is not covered by zero
                        data retention terms, it may hold the request briefly
                        for abuse monitoring before deleting it, and never uses
                        it for training.
                      </li>
                      <li>
                        AI features are optional. You consent to this processing
                        when you accept the in-app AI Use Disclaimer, and you
                        can stop using AI features at any time. You must not use
                        the AI features in any way that violates the terms or
                        policies of these providers.
                      </li>
                    </ul>
                    <p className={paragraph}>
                      To give you continuity across conversations, we store
                      extracted health facts ("memories") and their vector
                      embeddings in a database hosted on{" "}
                      <strong>Supabase</strong>. You can view and delete
                      individual memories, or all of them, in the App.
                    </p>
                    <p className={paragraph}>
                      AI output is informational only and is not medical advice.
                      See our{" "}
                      <a href="/docs/disclaimer" className="underline">
                        Medical Disclaimer
                      </a>
                      .
                    </p>

                    <h2 id="sociallogins">
                      7. How do we handle your social logins?
                    </h2>
                    <p className={inShort}>
                      In Short: If you register or log in using Apple or Google,
                      we receive limited profile information from them.
                    </p>
                    <p className={paragraph}>
                      You can register and log in using Sign in with Apple or
                      Google Sign In. When you do, we receive a unique account
                      identifier, your email address (or Apple's private relay
                      address if you choose to hide it), and your name where you
                      choose to share it. We use this information only for the
                      purposes described in this Notice, principally to create
                      and authenticate your account.
                    </p>
                    <p className={paragraph}>
                      We do not control, and are not responsible for, other uses
                      of your personal information by Apple or Google. We
                      recommend reviewing their privacy notices to understand
                      how they collect, use, and share your information, and how
                      to set your preferences.
                    </p>

                    <h2 id="inforetain">
                      8. How long do we keep your information?
                    </h2>
                    <p className={inShort}>
                      In Short: We keep your information for as long as you have
                      an account with us. When you delete your account, we
                      delete your data.
                    </p>
                    <p className={paragraph}>
                      <strong>
                        Your account is the retention period. Your profile,
                        health records, documents and media, voice recordings,
                        health-fact memories, and group memberships are kept
                        while your account exists, and are deleted when you
                        delete your account.
                      </strong>{" "}
                      We do not keep your health data on some separate clock,
                      and we do not retain it after you leave. You can also
                      delete individual records, documents, and memories at any
                      time without closing your account.
                    </p>
                    <p className={paragraph}>
                      Four narrow things cannot disappear at the same instant,
                      and we would rather say so than imply otherwise:
                    </p>
                    <ul>
                      <li>
                        <strong>Encrypted backups</strong>: deletion removes
                        your data from our live systems immediately, but
                        residual copies persist in encrypted backups until they
                        rotate out, which happens within 90 days. These backups
                        are isolated from further processing and are only ever
                        used to recover from a disaster.
                      </li>
                      <li>
                        <strong>Analytics and crash diagnostics</strong>: usage
                        and error records are tied to a device or app-instance
                        identifier rather than to your account, so deleting your
                        account does not reach into them. They contain no health
                        data and age out automatically, within 14 months for
                        analytics and 90 days for crash data.
                      </li>
                      <li>
                        <strong>Transaction and tax records</strong>: we are
                        legally required to keep records of subscription
                        payments, typically for seven years. These contain no
                        health data.
                      </li>
                      <li>
                        <strong>Records we must keep by law</strong>: where we
                        need information to comply with a legal obligation,
                        resolve a dispute, prevent fraud, assist an
                        investigation, or enforce our terms, we keep only what
                        is necessary and only for as long as necessary.
                      </li>
                    </ul>
                    <p className={paragraph}>
                      Two further notes. Content you shared into a care group
                      may already have been saved or exported by other members,
                      and we cannot reach those copies. And the website AI chat
                      is keyed to an email address rather than an account, so it
                      is not covered by account deletion: verification codes
                      expire within minutes and chat rate-limit records are kept
                      no longer than 24 hours, both independently of whether you
                      have an account.
                    </p>
                    <p className={paragraph}>
                      Where we no longer have a legitimate need to process your
                      information and cannot delete it immediately, we securely
                      store it and isolate it from further processing until
                      deletion is possible.
                    </p>

                    <h2 id="infosafe">
                      9. How do we keep your information safe?
                    </h2>
                    <p className={inShort}>
                      In Short: We protect your information with organizational
                      and technical security measures, though no system can be
                      guaranteed completely secure.
                    </p>
                    <p className={paragraph}>
                      Our safeguards include encryption in transit with TLS,
                      encryption at rest, per-user access rules enforced at the
                      database level, scoped file storage, optional biometric
                      app lock, credentials stored in your device's secure
                      keychain or keystore, least-privilege access for our team,
                      and audit logging of administrative access. Despite these
                      efforts, no electronic transmission or storage technology
                      can be guaranteed to be 100% secure, so we cannot promise
                      that unauthorized third parties will never defeat our
                      security. Transmission of personal information to and from
                      the Services is at your own risk, and you should only use
                      the Services in a secure environment.
                    </p>
                    <p className={paragraph}>
                      If a breach affects your personal or health information,
                      we will notify you and the relevant regulators as required
                      by applicable law, including the FTC Health Breach
                      Notification Rule, state breach notification laws, and
                      GDPR Articles 33 and 34.
                    </p>

                    <h2 id="infominors">
                      10. Do we collect information from minors?
                    </h2>
                    <p className={inShort}>
                      In Short: We do not knowingly collect data from or market
                      to children under 18 years of age.
                    </p>
                    <p className={paragraph}>
                      The Services are for people 18 and over. We do not
                      knowingly collect, solicit data from, or market to
                      children under 18, nor do we knowingly sell such personal
                      information. By using the Services, you represent that you
                      are at least 18, or that you are the parent or guardian of
                      a minor dependent and consent to that minor's information
                      being recorded.
                    </p>
                    <p className={paragraph}>
                      Adult account holders can record information about a child
                      as a family member or dependent. When you do, you are
                      responsible for having the legal authority to provide that
                      information, you act as that child's parent or guardian
                      for consent purposes, and the child's information is
                      treated with the same protections as your own. It is never
                      used for advertising or profiling. If we learn that a
                      child under 18 has created an account, we will deactivate
                      it and promptly delete the data. If you become aware of
                      any data we may have collected from a child, contact us at{" "}
                      <a
                        href="mailto:info@kaizenhealth.io"
                        className="underline"
                      >
                        info@kaizenhealth.io
                      </a>
                      .
                    </p>

                    <h2 id="privacyrights">
                      11. What are your privacy rights?
                    </h2>
                    <p className={inShort}>
                      In Short: Depending on where you live, you may review,
                      change, or terminate your account at any time, and you
                      have rights that give you greater access to and control
                      over your personal information.
                    </p>

                    <h3>11.1 EEA, UK, Switzerland, and Canada</h3>
                    <p className={paragraph}>
                      In these regions you have the right to request access to
                      and a copy of your personal information; rectification or
                      erasure; restriction of processing; portability of data
                      you provided to us; and not to be subject to solely
                      automated decision-making. In certain circumstances you
                      may also object to processing based on our legitimate
                      interests. Exercising these rights is free and we will not
                      treat you differently for doing so.
                    </p>
                    <p className={paragraph}>
                      To exercise any of these rights, email{" "}
                      <a
                        href="mailto:info@kaizenhealth.io?subject=Data Rights Request"
                        className="underline"
                      >
                        info@kaizenhealth.io
                      </a>{" "}
                      with "Data Rights Request" in the subject line, or use our{" "}
                      <a
                        href="https://kaizenhealth.io/support"
                        className="underline"
                      >
                        support form
                      </a>
                      . We respond within one month and may extend by two
                      further months for complex requests, telling you if we do.
                      We may need to verify your identity first.
                    </p>
                    <p className={paragraph}>
                      If you are in the EEA or UK and believe we are unlawfully
                      processing your personal information, you have the right
                      to complain to your{" "}
                      <a
                        href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Member State data protection authority
                      </a>{" "}
                      or the{" "}
                      <a
                        href="https://ico.org.uk/make-a-complaint/"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        UK Information Commissioner's Office
                      </a>
                      . If you are in Switzerland, you may contact the{" "}
                      <a
                        href="https://www.edoeb.admin.ch/en"
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Federal Data Protection and Information Commissioner
                      </a>
                      .
                    </p>

                    <h3>11.2 Complaining to us first</h3>
                    <p className={paragraph}>
                      You can complain directly to us before going to a
                      regulator, and we would appreciate the chance to put
                      things right. Contact us online at our{" "}
                      <a
                        href="https://kaizenhealth.io/support"
                        className="underline"
                      >
                        support form
                      </a>
                      , by email at{" "}
                      <a
                        href="mailto:info@kaizenhealth.io"
                        className="underline"
                      >
                        info@kaizenhealth.io
                      </a>
                      , or by post at the address in{" "}
                      <a href="#contact" className="underline">
                        section 18
                      </a>
                      . We will acknowledge your complaint within 30 days,
                      investigate without undue delay, keep you informed of
                      progress, and explain the outcome. For UK users, this is
                      in addition to your rights under the UK GDPR and the Data
                      Protection Act 2018.
                    </p>

                    <h3 id="withdrawconsent">11.3 Withdrawing your consent</h3>
                    <p className={paragraph}>
                      Where we rely on your consent, including explicit consent
                      for health data, you can withdraw it at any time by
                      contacting us using the details in{" "}
                      <a href="#contact" className="underline">
                        section 18
                      </a>
                      , or by turning off the relevant feature or device
                      permission. Withdrawal does not affect the lawfulness of
                      processing before it, nor processing we carry out on
                      another lawful basis.
                    </p>

                    <h3>11.4 Opting out of marketing</h3>
                    <p className={paragraph}>
                      You can unsubscribe from marketing messages at any time
                      using the link in any marketing email, or by contacting
                      us. You will then be removed from our marketing lists. We
                      will still send service-related messages necessary for the
                      administration of your account, responses to your
                      requests, and security notices.
                    </p>

                    <h3>11.5 Account information and other controls</h3>
                    <ul>
                      <li>
                        <strong>Review and edit</strong>: view and correct your
                        profile, records, documents, and health-fact memories in
                        the App at any time.
                      </li>
                      <li>
                        <strong>Export</strong>: request a machine-readable copy
                        of your data by contacting us.
                      </li>
                      <li>
                        <strong>Withdraw device permissions</strong>: revoke
                        access to Apple Health, Health Connect, contacts,
                        location, camera, microphone, and notifications in your
                        device settings, or in the App.
                      </li>
                      <li>
                        <strong>Turn off analytics</strong>: disable analytics
                        collection in the App's privacy settings, and use the
                        browser controls described in section 5 for the website.
                      </li>
                      <li>
                        <strong>Stop sharing</strong>: turn off group sharing or
                        leave a care group at any time.
                      </li>
                      <li>
                        <strong>Terminate your account</strong>: see{" "}
                        <a href="#request" className="underline">
                          section 19
                        </a>
                        .
                      </li>
                    </ul>

                    <h2 id="dnt">
                      12. Controls for Do-Not-Track and Global Privacy Control
                    </h2>
                    <p className={paragraph}>
                      Most browsers and some mobile operating systems offer a
                      Do-Not-Track ("DNT") setting. No uniform technology
                      standard for recognizing and implementing DNT signals has
                      been finalized, so we do not currently respond to DNT
                      browser signals. If a standard is adopted that we must
                      follow, we will update this Notice.
                    </p>
                    <p className={paragraph}>
                      <strong>
                        We do honor Global Privacy Control (GPC) signals
                      </strong>{" "}
                      as a valid opt-out preference signal where applicable law
                      requires it. Because we do not sell personal information
                      or share it for cross-context behavioral advertising, a
                      GPC signal does not change how we handle your data, but we
                      recognize and respect it.
                    </p>

                    <h2 id="uslaws">
                      13. Do United States residents have specific privacy
                      rights?
                    </h2>
                    <p className={inShort}>
                      In Short: If you live in a US state with a comprehensive
                      privacy law, you may have rights to access, correct,
                      delete, and obtain a copy of your personal information,
                      and to withdraw your consent.
                    </p>
                    <p className={paragraph}>
                      This section applies if you are a resident of California,
                      Colorado, Connecticut, Delaware, Florida, Indiana, Iowa,
                      Kentucky, Maryland, Minnesota, Montana, Nebraska, New
                      Hampshire, New Jersey, Oregon, Rhode Island, Tennessee,
                      Texas, Utah, Virginia, or another state with a comparable
                      law. These rights may be limited in some circumstances by
                      applicable law.
                    </p>

                    <h3>Categories of personal information we collect</h3>
                    <p className={paragraph}>
                      The table below shows the categories of personal
                      information we have collected in the past twelve months.
                      For the full detail, see{" "}
                      <a href="#infocollect" className="underline">
                        section 1
                      </a>
                      .
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse text-sm">
                        <thead>
                          <tr>
                            <th className={`${cell} text-left`}>Category</th>
                            <th className={`${cell} text-left`}>Examples</th>
                            <th className={`${cell} text-left`}>Collected</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categoryRows.map((row) => (
                            <tr key={row.category}>
                              <td className={cell}>{row.category}</td>
                              <td className={cell}>{row.examples}</td>
                              <td className={cell}>{row.collected}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className={paragraph}>
                      We retain each category for as long as you have an account
                      with us, subject to the exceptions in{" "}
                      <a href="#inforetain" className="underline">
                        section 8
                      </a>
                      . We may also collect personal information outside these
                      categories when you interact with us through customer
                      support, surveys, or in the course of delivering the
                      Services and responding to your inquiries.
                    </p>
                    <p className={paragraph}>
                      We collect sensitive personal information, including
                      health information and precise geolocation where you
                      permit it. We use it only to provide the Services you
                      requested and for the purposes permitted by law.{" "}
                      <strong>
                        We do not collect or process sensitive personal
                        information for the purpose of inferring characteristics
                        about you for advertising.
                      </strong>{" "}
                      You may have the right to limit our use and disclosure of
                      your sensitive personal information.
                    </p>

                    <h3>Sale, sharing, and disclosure</h3>
                    <p className={paragraph}>
                      <strong>
                        We have not sold personal information, and we have not
                        shared it for cross-context behavioral advertising, in
                        the preceding twelve months. We will not do so in the
                        future, and we do not knowingly sell or share the
                        personal information of anyone under 16.
                      </strong>{" "}
                      We do disclose personal information to the service
                      providers named in{" "}
                      <a href="#service-providers" className="underline">
                        section 4.2
                      </a>{" "}
                      for business purposes, under written contracts that
                      restrict what they may do with it. Using your information
                      for our own internal research and technological
                      development is not a sale.
                    </p>

                    <h3>Your rights</h3>
                    <ul>
                      <li>
                        <strong>Right to know</strong> whether we are processing
                        your personal data.
                      </li>
                      <li>
                        <strong>Right to access</strong> your personal data and
                        details about how we have processed it.
                      </li>
                      <li>
                        <strong>Right to correct</strong> inaccuracies.
                      </li>
                      <li>
                        <strong>Right to delete</strong> your personal data.
                      </li>
                      <li>
                        <strong>Right to obtain a copy</strong> of the data you
                        previously shared with us.
                      </li>
                      <li>
                        <strong>Right to non-discrimination</strong> for
                        exercising your rights.
                      </li>
                      <li>
                        <strong>Right to opt out</strong> of processing for
                        targeted advertising, sale, or profiling with legal or
                        similarly significant effects. We do not carry out any
                        of these activities.
                      </li>
                      <li>
                        <strong>Right to limit</strong> the use and disclosure
                        of sensitive personal data (California).
                      </li>
                      <li>
                        <strong>
                          Right to a list of categories or specific third
                          parties
                        </strong>{" "}
                        to which we have disclosed personal data, where your
                        state law provides it (including California, Delaware,
                        Maryland, Minnesota, and Oregon).
                      </li>
                      <li>
                        <strong>
                          Right to review, understand, and question profiling
                        </strong>{" "}
                        (including Connecticut and Minnesota).
                      </li>
                      <li>
                        <strong>Right to opt out</strong> of the collection of
                        sensitive data and data collected through a voice or
                        facial recognition feature (Florida).
                      </li>
                    </ul>

                    <h3>Washington, Nevada, and consumer health data</h3>
                    <p className={paragraph}>
                      Under the Washington My Health My Data Act and Nevada SB
                      370, consumer health data receives specific protections.
                      We collect the consumer health data described in section 1
                      for the purposes in section 2, we share it only with the
                      service providers and processors named in section 4.2, and
                      we{" "}
                      <strong>
                        do not sell consumer health data and will not do so
                        without your separate written authorization
                      </strong>
                      . You may withdraw consent to the collection or sharing of
                      your consumer health data, and request its deletion, using
                      the contact details below. This Notice, together with the
                      deletion terms in section 19, serves as our consumer
                      health data privacy notice.
                    </p>

                    <h3>
                      California Confidentiality of Medical Information Act
                    </h3>
                    <p className={paragraph}>
                      We handle medical information in line with the California
                      Confidentiality of Medical Information Act, which applies
                      to businesses offering health applications to California
                      residents.
                    </p>

                    <h3>California "Shine The Light" law</h3>
                    <p className={paragraph}>
                      California Civil Code Section 1798.83 permits California
                      residents to request, once a year and free of charge,
                      information about the categories of personal information
                      we disclosed to third parties for their direct marketing
                      purposes, and the names and addresses of those third
                      parties.{" "}
                      <strong>
                        We do not disclose personal information to third parties
                        for their own direct marketing purposes.
                      </strong>{" "}
                      To make a request, contact us using the details in{" "}
                      <a href="#contact" className="underline">
                        section 18
                      </a>
                      .
                    </p>

                    <h3>How to exercise your rights</h3>
                    <p className={paragraph}>
                      Use our{" "}
                      <a
                        href="https://kaizenhealth.io/support"
                        className="underline"
                      >
                        support form
                      </a>
                      , email{" "}
                      <a
                        href="mailto:info@kaizenhealth.io?subject=Data Rights Request"
                        className="underline"
                      >
                        info@kaizenhealth.io
                      </a>{" "}
                      with "Data Rights Request" in the subject line, or write
                      to us at the address in section 18. We acknowledge
                      requests within 10 business days and respond within 45
                      days, extending once by a further 45 days where necessary
                      and telling you if we do.
                    </p>
                    <p className={paragraph}>
                      <strong>Authorized agents.</strong> You may designate an
                      authorized agent to make a request on your behalf. We may
                      deny a request from an agent who does not submit proof of
                      valid authorization, and we may need to collect additional
                      information from you to verify your identity.
                    </p>
                    <p className={paragraph}>
                      <strong>Request verification.</strong> We will need to
                      verify your identity before acting on a request. We use
                      the personal information in your request only to verify
                      your identity or authority. If we cannot verify you from
                      the information we already hold, we may ask for additional
                      details for verification and fraud-prevention purposes.
                    </p>
                    <p className={paragraph}>
                      <strong>Appeals.</strong> If we decline to act on your
                      request, you may appeal by emailing{" "}
                      <a
                        href="mailto:info@kaizenhealth.io?subject=Privacy Request Appeal"
                        className="underline"
                      >
                        info@kaizenhealth.io
                      </a>{" "}
                      with "Privacy Request Appeal" in the subject line. We will
                      inform you in writing of any action taken or not taken,
                      with our reasons. If your appeal is denied, you may submit
                      a complaint to your state attorney general.
                    </p>

                    <h2 id="transfers">14. International data transfers</h2>
                    <p className={paragraph}>
                      Our backend application servers are hosted on Amazon Web
                      Services. Your account data, health records, and uploaded
                      documents are stored on Google Cloud and Firebase
                      infrastructure, and health-fact memories and their vector
                      embeddings are stored on Supabase. This infrastructure is
                      located in the United States, and our service providers
                      are located primarily in the United States.
                    </p>
                    <p className={paragraph}>
                      If you use the Services from outside the United States,
                      your information will be transferred to and processed in
                      the United States, which may have different data
                      protection laws than your country. For transfers of
                      personal data out of the EEA, the United Kingdom, or
                      Switzerland, we rely on the European Commission's Standard
                      Contractual Clauses (and the UK International Data
                      Transfer Addendum where applicable), together with
                      additional technical and organizational safeguards. You
                      can request a copy of the relevant transfer mechanism by
                      contacting us.
                    </p>

                    <h2 id="automated">15. Automated processing</h2>
                    <p className={paragraph}>
                      Two features process your data automatically: your health
                      score, which compares metrics such as age, sex, height,
                      weight, step count, and resting heart rate against
                      published population averages (see{" "}
                      <a href="/docs/healthscore" className="underline">
                        how the health score is calculated
                      </a>
                      ), and our AI features, which generate summaries and
                      responses. Neither makes decisions about you that have
                      legal effects or similarly significant consequences, and
                      neither is used to determine eligibility for insurance,
                      credit, employment, or care. If a decision producing legal
                      or similarly significant effects were ever made solely by
                      automated means, we would tell you, explain the main
                      factors, and offer a simple way to request human review.
                      You can ask us to explain a result, contest it, or stop
                      using these features.
                    </p>

                    <h2 id="hipaa">16. Health privacy laws and our status</h2>
                    <p className={paragraph}>
                      We apply HIPAA-aligned administrative, technical, and
                      physical safeguards to health information, and we have
                      Business Associate Agreements in place with OpenAI,
                      Anthropic, and Google Cloud. Kaizen Health is a
                      direct-to-consumer service, so when you use it on your own
                      behalf we are generally not acting as a HIPAA covered
                      entity or business associate, and the health information
                      you give us is not protected health information under
                      HIPAA. Instead, it is protected by this Notice, by the
                      consumer health privacy laws described in section 13, and
                      by the FTC Health Breach Notification Rule. Where we
                      provide services on behalf of a HIPAA covered entity, we
                      act as a business associate under a written agreement and
                      HIPAA applies to that processing.
                    </p>

                    <h2 id="policyupdates">
                      17. Do we make updates to this Notice?
                    </h2>
                    <p className={paragraph}>
                      Yes. We update this Notice as necessary to stay compliant
                      with relevant laws and to reflect changes to the Services.
                      When we do, we will change the "Last updated" date above.
                      If a change materially affects how we handle your personal
                      or health data, we will notify you in the App or by email
                      before it takes effect, and where the law requires it we
                      will ask for your consent. Previous versions are available
                      on request.
                    </p>

                    <h2 id="contact">
                      18. How can you contact us about this Notice?
                    </h2>
                    <p className={paragraph}>
                      Kaizen Healthcare Inc
                      <br />
                      1875 Mission St Ste 103
                      <br />
                      San Francisco, CA 94103
                      <br />
                      United States
                      <br />
                      <a
                        href="mailto:info@kaizenhealth.io?subject=Privacy Question"
                        className="underline"
                      >
                        info@kaizenhealth.io
                      </a>
                    </p>
                    <p className={paragraph}>
                      For privacy questions, put "Privacy Question" in the
                      subject line. For rights requests, see section 13.
                    </p>

                    <h2 id="request">
                      19. How can you review, update, or delete the data we
                      collect from you?
                    </h2>
                    <p className={paragraph}>
                      You have the right to request access to the personal
                      information we collect from you, details about how we have
                      processed it, correction of inaccuracies, and deletion.
                      You can delete your account and its data at any time,
                      using any of these methods:
                    </p>
                    <ul>
                      <li>
                        In the App, under profile settings. (Recommended,
                        because it takes effect immediately.)
                      </li>
                      <li>
                        Through our{" "}
                        <a
                          href="https://kaizenhealth.io/support"
                          className="underline"
                        >
                          support form
                        </a>
                        , selecting "Account &amp; Data Deletion".
                      </li>
                      <li>
                        By emailing{" "}
                        <a
                          href="mailto:info@kaizenhealth.io?subject=Account Deletion"
                          className="underline"
                        >
                          info@kaizenhealth.io
                        </a>{" "}
                        from the address on your account, with "Account &amp;
                        Data Deletion" in the subject line.
                      </li>
                    </ul>
                    <p className={paragraph}>
                      <strong>What deletion removes:</strong> your profile and
                      account record, your health records and entries, uploaded
                      documents and media, your health-fact memories and their
                      embeddings, your group memberships and invitations, your
                      stored device push tokens, and your sign-in credentials.
                      Deletion is permanent and cannot be undone. We complete
                      deletion immediately for in-app requests, and within 30
                      days for requests sent by email or through support.
                    </p>
                    <p className={paragraph}>
                      <strong>What may remain, and why:</strong> encrypted
                      backups until the rotation described in section 8;
                      aggregated or de-identified statistics that can no longer
                      be linked to you; transaction and tax records we are
                      legally required to keep; records we must retain to
                      prevent fraud, resolve a dispute, assist an investigation,
                      or enforce our legal terms; content you shared into a care
                      group that other members have already saved or exported;
                      and short-lived diagnostic logs held by our analytics and
                      error-monitoring providers, which age out on the schedules
                      in section 8.
                    </p>
                    <p className={paragraph}>
                      Deleting your Kaizen Health account does not cancel your
                      Apple or Google subscription. Cancel that in your App
                      Store or Google Play account settings.
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
