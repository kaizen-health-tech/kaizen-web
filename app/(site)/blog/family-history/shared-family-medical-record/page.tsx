import type { Metadata } from "next";
import Link from "next/link";

import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import KeyTakeaways from "@/components/Blog/content/KeyTakeaways";
import ProductCallout from "@/components/Blog/content/ProductCallout";
import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Can medication records be shared with caregivers?",
    answer:
      "A patient can share their own medicine list with a caregiver. A provider may also share information relevant to a person's involvement in care under HIPAA's family-sharing rules. For ongoing access to provider records, ask about proxy access or an authorization. Being a caregiver does not automatically grant access to the full chart or authority to change treatment.",
  },
  {
    question:
      "What platforms let parents share emergency contacts and medical records?",
    answer:
      "Patient portals can offer proxy access to records held by that health system. A shared record app or a restricted folder can hold copies and an emergency-contact list. Compare separate accounts, permission controls, export, and access without internet. Check what the service actually supports; none of these tools grants legal authority over another person's care.",
  },
  {
    question:
      "Can I see my spouse's medical records just because we are married?",
    answer:
      "Marriage alone does not provide a general right to an adult spouse's chart. The patient can arrange sharing, and applicable law may give someone personal-representative authority. A provider may also disclose information relevant to a family member's involvement in care. Ask the records office which arrangement applies to your situation.",
  },
  {
    question:
      "Does a financial power of attorney give access to medical records?",
    answer:
      "Do not assume that it does. The document's authority and applicable law matter. Financial authority alone is different from healthcare decision-making authority. Ask the provider and a qualified local adviser whether the document supports the particular access or decision you need.",
  },
  {
    question: "Why did my access to my teenager's patient portal change?",
    answer:
      "Access can change because some care is confidential under applicable law and because health systems configure proxy accounts differently. There is no universal HIPAA portal cutoff age. Ask the provider what you can see, what consent is needed, and what changes when your child becomes an adult.",
  },
  {
    question:
      "Does the Cures Act give caregivers access to a family member's records?",
    answer:
      "The information-blocking rules do not give family members an automatic right to someone else's records. Permission and applicable access rights still matter. Ask the provider to confirm your proxy or representative status rather than assuming that a result visible to the patient must also be visible to you.",
  },
  {
    question: "Who can access records after a family member dies?",
    answer:
      "A person with authority under applicable law, such as an estate's executor, may exercise relevant HIPAA rights. A provider may also share information relevant to the involvement of someone who helped with care or payment before death, unless that conflicts with the deceased person's known wishes. Ask the records office which documents it needs.",
  },
];

const sections = [
  { id: "why-sharing-is-hard", label: "Start with who needs what" },
  {
    id: "three-access-routes",
    label: "Permission, authorization, and legal authority",
  },
  { id: "setting-up-access", label: "Set up caregiver portal access" },
  { id: "choose-a-platform", label: "Compare ways to share records" },
  { id: "pre-event-checklist", label: "Copy the family access worksheet" },
  { id: "spouses-adult-children", label: "Spouses and adult children" },
  { id: "aging-parents", label: "Healthcare and financial powers of attorney" },
  { id: "kids-teens", label: "Children, teenagers, and changing access" },
  { id: "cures-act", label: "What the Cures Act changes" },
  { id: "crisis-ready", label: "Prepare emergency information" },
  { id: "after-a-death", label: "Records after a death" },
  { id: "recap", label: "Test one access arrangement" },
  { id: "sources", label: "Sources" },
];

const platformOptions = [
  {
    name: "Provider patient portal",
    use: "View records, messages, and appointments held by that health system, within the proxy access it offers.",
    check:
      "Ask what a proxy can see and do, whether separate providers need separate setup, and how access changes for teens or adults.",
  },
  {
    name: "Shared medical-record app",
    use: "Keep uploaded copies together, with other functions depending on the product.",
    check:
      "Verify each sharing control, supported provider connections, export format, account recovery, and any offline access.",
  },
  {
    name: "Restricted folder",
    use: "Share selected documents and an emergency-contact list with named people.",
    check:
      "Check individual accounts and permissions. A folder may offer access to everything inside it rather than a clinical permission system.",
  },
  {
    name: "Paper summary and supporting file",
    use: "Keep selected information available without a phone, account, or internet connection.",
    check:
      "Agree where it lives, who can reach it, and who replaces old copies after an update.",
  },
] as const;

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Shared Family Medical Records: Access and Setup",
  description:
    "Set up caregiver access to family medical records. Compare permissions, patient portals, shared files, and emergency contacts with a blank access worksheet.",
  path: "/blog/family-history/shared-family-medical-record",
  type: "article",
  image: "/images/blog/shared-family-record-hero.png",
});

const SharedFamilyMedicalRecord = () => {
  return (
    <ArticleLayout
      title="Shared Family Medical Records: Access, Permissions, and Setup"
      description="Work out who needs which information, arrange caregiver access, and keep an emergency plan your family can use."
      image="/images/blog/shared-family-record-hero.png"
      imageAlt="An adult daughter and her older mother reviewing paperwork and a tablet together"
      url="/blog/family-history/shared-family-medical-record"
      categoryKey="health-records"
      authorName="Kaizen Health Editorial Team"
      authorCredentials="Editorial guide"
      authorBio="The Kaizen Health editorial team prepared this U.S. caregiver guide using the government and provider sources linked below. It explains general access arrangements; confirm requirements with the provider and a qualified local adviser for your situation."
      readTime="10 min read"
      tags={["Health records", "Caregiving"]}
      sections={sections}
      keywords={[
        "shared family medical records",
        "caregiver access to medical records",
        "patient portal proxy access",
        "family emergency contacts",
      ]}
    >
      <p>
        A shared family medical record is a way to organize and share selected
        health information with the people helping with care. Start by asking
        the person whose records they are what they want shared. Then arrange
        access with each provider or service and test it using the caregiver's
        own account.
      </p>
      <p>
        Keep three questions separate: who may receive information, who can sign
        into a portal, and who has authority to make healthcare decisions. A
        family relationship or an app invitation does not settle all three.
      </p>
      <KeyTakeaways
        items={[
          "Share information for a defined task, with the patient's agreement or other applicable authority.",
          "A provider may share relevant information with someone involved in care without granting a general right to the full chart.",
          "A HIPAA authorization, portal proxy account, and healthcare decision-making authority serve different purposes.",
          "Use separate accounts, confirm what access allows, and keep a current emergency summary with a backup contact.",
        ]}
      />

      <HeadingWithAnchor id="why-sharing-is-hard">
        Start with who needs which information
      </HeadingWithAnchor>
      <p>
        A spouse may help with daily medicines, an adult child with
        appointments, and a sibling with insurance paperwork. Ask what each
        person needs for that job before sending the whole file. The patient
        should have a say in those choices wherever they can make them.
      </p>
      <p>
        A planning example: the person handling appointments needs the schedule
        and follow-up instructions; the helper handling bills needs the relevant
        statements. Neither role, by itself, establishes a right to all clinical
        notes or to make treatment decisions. Write down the chosen scope and
        confirm that the provider or service can support it.
      </p>
      <p>
        If your immediate problem is finding the documents, use the{" "}
        <Link href="/blog/family-history/organizing-medical-records">
          medical records organization checklist
        </Link>{" "}
        alongside this access guide. Filing and permission need to work
        together.
      </p>

      <HeadingWithAnchor id="three-access-routes">
        Permission, authorization, and legal authority
      </HeadingWithAnchor>
      <h3>Sharing information with someone involved in care</h3>
      <p>
        Under HIPAA, a provider may share relevant information with someone
        involved in care when the patient agrees or does not object. If the
        patient cannot communicate, professional judgment may permit relevant
        sharing in the patient's best interest. This does not create a general
        right to the whole record.{" "}
        <a
          href="https://www.hhs.gov/hipaa/for-individuals/family-members-friends/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          HHS describes these family-sharing situations
        </a>
        .
      </p>
      <h3>A written HIPAA authorization</h3>
      <p>
        An authorization identifies what information may be disclosed, to whom,
        and for what purpose. It includes an expiration date or event. It can
        generally be revoked in writing, subject to exceptions such as actions
        already taken in reliance on it. It does not itself appoint a medical
        decision-maker or create a portal login. Ask the records office which
        form and process it accepts. These requirements appear in{" "}
        <a
          href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.508"
          target="_blank"
          rel="noopener noreferrer"
        >
          45 CFR 164.508
        </a>
        .
      </p>
      <h3>A personal representative</h3>
      <p>
        Someone with healthcare decision-making authority under applicable law
        may exercise HIPAA rights within that authority's scope. A healthcare
        agent or guardian may qualify, depending on the document, law, and
        circumstances. A provider can apply exceptions involving abuse, neglect,
        or endangerment. See{" "}
        <a
          href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/personal-representatives/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          HHS guidance on personal representatives
        </a>
        .
      </p>

      <HeadingWithAnchor id="setting-up-access">
        How to set up caregiver portal access
      </HeadingWithAnchor>
      <p>
        Proxy access lets a helper use their own account to reach the
        information and functions a health system permits. The exact process
        varies. Some systems accept an invitation from the patient; others
        require a request form or supporting documents.
      </p>
      <ol>
        <li>
          Ask the provider's portal team how the patient can authorize a
          caregiver or how a legal representative can apply.
        </li>
        <li>
          Confirm which records and functions the access includes, such as
          scheduling, messages, or results.
        </li>
        <li>
          Have each helper use a separate account and complete identity checks.
        </li>
        <li>
          Finish any invitation or approval process, then sign in and test the
          agreed task.
        </li>
        <li>
          Repeat with other providers where needed; do not assume access
          transfers between organizations.
        </li>
        <li>
          Record whom to contact to change or end access, and review it when
          roles change.
        </li>
      </ol>
      <p>
        For a concrete provider example,{" "}
        <a
          href="https://www.hopkinsmedicine.org/patient-care/mychart/proxy-access"
          target="_blank"
          rel="noopener noreferrer"
        >
          Johns Hopkins explains its MyChart proxy options
        </a>
        , including adult full or scheduling-only access. Other providers may
        offer different choices. Ask what happens to old messages and downloaded
        files when access ends; changing permissions does not retrieve copies
        already shared.
      </p>

      <HeadingWithAnchor id="choose-a-platform">
        Which platforms can share medical records and emergency contacts?
      </HeadingWithAnchor>
      <p>
        A provider portal can offer access to that system's records. A shared
        app or restricted folder can hold copies and a contact list. A paper
        summary can cover an account or connectivity problem. Choose based on
        the job and permissions you need, then verify the features with the
        service rather than assuming every option supports them.
      </p>
      <div
        role="region"
        aria-label="Compare ways to share medical records"
        tabIndex={0}
        className="overflow-x-auto rounded-xl border border-cloud focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
      >
        <table className="w-full min-w-[40rem] text-left">
          <caption className="px-4 py-3 text-left font-semibold">
            Ways a family can share records and contacts
          </caption>
          <thead className="bg-lavender">
            <tr>
              <th scope="col" className="border-b border-cloud px-4 py-3">
                Option
              </th>
              <th scope="col" className="border-b border-cloud px-4 py-3">
                Useful for
              </th>
              <th scope="col" className="border-b border-cloud px-4 py-3">
                What to check
              </th>
            </tr>
          </thead>
          <tbody>
            {platformOptions.map(({ name, use, check }) => (
              <tr key={name}>
                <th
                  scope="row"
                  className="border-b border-cloud px-4 py-3 align-top font-semibold"
                >
                  {name}
                </th>
                <td className="border-b border-cloud px-4 py-3 align-top">
                  {use}
                </td>
                <td className="border-b border-cloud px-4 py-3 align-top">
                  {check}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Before putting real records into a service, check:</p>
      <ul>
        <li>
          Can you invite named people with separate accounts and change their
          access?
        </li>
        <li>
          Can you limit sharing to the documents or tasks agreed with the
          patient?
        </li>
        <li>
          Can you export a readable copy and recover access if a phone is lost?
        </li>
        <li>
          What information does the service collect, retain, or share under its
          privacy policy?
        </li>
        <li>
          Can your backup contact reach the summary when the usual coordinator
          is unavailable?
        </li>
      </ul>
      <p>
        A contact list is useful on its own. It does not authorize a contact to
        see all records or make medical decisions. Keep account passwords out of
        the shared contact list.
      </p>

      <HeadingWithAnchor id="pre-event-checklist">
        Make a family access worksheet
      </HeadingWithAnchor>
      <p>
        For each provider or service, record these details. Keep the completed
        worksheet private, with a separate entry for each person's access:
      </p>
      <ul>
        <li>Patient, helper, and the task the helper handles.</li>
        <li>Information or functions agreed for that task.</li>
        <li>
          Provider or service, and the permission or authority it has accepted.
        </li>
        <li>
          Setup status: requested, approved, invitation accepted, or tested.
        </li>
        <li>
          Date checked, support contact, and how to change or stop access.
        </li>
        <li>Backup contact and location of any supporting documents.</li>
      </ul>
      <p>
        <a href="/downloads/family-record-access-worksheet.txt" download>
          Download the blank family access worksheet (.txt)
        </a>
        . Fill it in or print it using a text editor. The worksheet records your
        plan; it is not a HIPAA authorization, power of attorney, or provider
        access request. Do not enter passwords.
      </p>
      <p>
        Track missing provider documents with the{" "}
        <Link href="/tools/medical-records-request-tracker">
          records request tracker
        </Link>
        . After a visit, use the{" "}
        <Link href="/tools/doctor-visit-summary">visit summary template</Link>{" "}
        to prepare the update you have agreed to share. Copy or print either
        worksheet before closing it; neither is a saved medical-record system.
      </p>

      <HeadingWithAnchor id="spouses-adult-children">
        Spouses and adult children need an access arrangement
      </HeadingWithAnchor>
      <p>
        Being married or being someone's adult child does not establish a
        general right to that adult's chart. Ask the patient what help they
        want, then ask the provider which arrangement fits. The provider's{" "}
        <a
          href="https://www.hhs.gov/hipaa/for-individuals/family-members-friends/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          ability to share relevant care information
        </a>{" "}
        is different from a helper's right to request the whole record.
      </p>
      <p>
        When someone cannot make decisions, applicable law may identify a
        representative or surrogate. Ask the care team to confirm who may act
        and what documentation it needs. Do not assume a spouse is always the
        decision-maker, or that a court appointment is always the only option.
      </p>

      <HeadingWithAnchor id="aging-parents">
        Healthcare and financial powers of attorney
      </HeadingWithAnchor>
      <p>
        A healthcare power of attorney can name an agent for healthcare matters.
        Whether the agent can act now, and on which matters, depends on the
        document and applicable law. Financial authority alone should not be
        treated as healthcare authority. The federal representative rule ties
        access to the scope of the person's legal authority:{" "}
        <a
          href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.502"
          target="_blank"
          rel="noopener noreferrer"
        >
          45 CFR 164.502(g)
        </a>
        .
      </p>
      <p>
        Ask a qualified local adviser about the document you have or need. Ask
        the provider how it verifies an agent's authority. Keep copies
        accessible to the authorized person and note where originals are stored.
        A portal invitation does not replace that legal planning.
      </p>

      <HeadingWithAnchor id="kids-teens">
        Children, teenagers, and changing portal access
      </HeadingWithAnchor>
      <p>
        Parents usually act as a minor child's personal representative, but
        exceptions and state-law rules apply, including for some confidential
        care. There is no single HIPAA age when every parent's portal access
        must change. HHS explains the{" "}
        <a
          href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/personal-representatives/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          rules for parents and minors
        </a>
        .
      </p>
      <p>
        Ask the child's provider which information is visible now, whether
        consent can change that view, and what happens at adulthood. For
        example, Johns Hopkins offers different proxy arrangements for children,
        teens, and adults. Its age bands are that provider's policy, not a
        universal rule for every health system.
      </p>
      <p>
        If a teenager has confidential information, check who can see downloaded
        copies before putting documents into a family folder. A folder's access
        settings may not reproduce the portal's privacy restrictions.
      </p>

      <HeadingWithAnchor id="cures-act">
        What the Cures Act changes for family access
      </HeadingWithAnchor>
      <p>
        The information-blocking rules address certain practices that interfere
        with access, exchange, or use of electronic health information. They do
        not give relatives an automatic right to someone else's records. Privacy
        rules and the person's applicable access rights still matter. See the{" "}
        <a
          href="https://healthit.gov/information-blocking/"
          target="_blank"
          rel="noopener noreferrer"
        >
          federal information-blocking overview
        </a>
        .
      </p>
      <p>
        If a result is missing from your proxy view, ask whether it is available
        to the patient, restricted by the access arrangement, or still awaiting
        a response to a records request. Confirm the reason with the provider
        before assuming a technical error or a legal violation.
      </p>

      <HeadingWithAnchor id="crisis-ready">
        Make emergency contacts and key information reachable
      </HeadingWithAnchor>
      <p>
        With the patient's agreement or applicable authority, keep a dated
        medicine and allergy summary, clinician contacts, and main and backup
        family contacts where authorized helpers can find them. Use the{" "}
        <Link href="/blog/family-history/organizing-medical-records#summary-template">
          blank medical summary
        </Link>{" "}
        to choose what belongs in it.
      </p>
      <p>
        Test the plan when a phone is unavailable or internet access fails. Keep
        insurance and legal documents protected; an emergency-contact sheet does
        not need to contain every sensitive document. If you use a phone's
        emergency-information feature, check its instructions and decide what
        the owner is comfortable making visible.
      </p>
      <p>
        An emergency does not create a family login to the hospital record. Tell
        the care team who you are and what you know. HIPAA may permit the
        provider to share relevant information using professional judgment when
        the patient cannot communicate; it does not guarantee full record access
        to every family member.
      </p>

      <HeadingWithAnchor id="after-a-death">
        Access to records after a death
      </HeadingWithAnchor>
      <p>
        A deceased person's information remains protected under HIPAA for 50
        years. A representative with authority under applicable law, such as an
        executor, may exercise relevant rights. Providers may also disclose
        information relevant to someone who helped with care or payment before
        death, unless this conflicts with the deceased person's known wishes.{" "}
        <a
          href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/health-information-of-deceased-individuals/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          HHS explains both routes
        </a>
        .
      </p>
      <p>
        Ask the records office which documents it requires. Do not assume that a
        previously working portal login establishes continuing authority. For
        family-risk questions, ask the clinician what history is useful and use
        the{" "}
        <Link href="/blog/family-history/documenting-family-health">
          family health history guide
        </Link>{" "}
        to record what you know.
      </p>

      <HeadingWithAnchor id="recap">
        Test one access arrangement this week
      </HeadingWithAnchor>
      <p>
        Pick one provider and one agreed task, such as helping with an upcoming
        appointment. Complete the access process and have the helper test their
        own account. Write down the support contact, any missing permissions,
        and the next step in your worksheet.
      </p>
      <ProductCallout
        body="Kaizen Health helps families keep uploaded medical records together and ask Kai questions about them. Review the app's sharing controls and privacy information against your family's needs. App access does not replace provider permissions or legal authority."
        buttonLabel="Try it with a document"
      />

      <HeadingWithAnchor id="sources">Sources and scope</HeadingWithAnchor>
      <p>
        This editorial guide describes general U.S. access arrangements, not
        individualized legal or medical advice. State law, specific records, and
        provider procedures can change what applies. The sources below support
        the access explanations; they do not endorse Kaizen Health.
      </p>
      <ul>
        <li>
          <a
            href="https://www.hhs.gov/hipaa/for-individuals/family-members-friends/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            HHS: Family Members and Friends
          </a>
        </li>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.508"
            target="_blank"
            rel="noopener noreferrer"
          >
            45 CFR 164.508: HIPAA authorizations
          </a>
        </li>
        <li>
          <a
            href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.502"
            target="_blank"
            rel="noopener noreferrer"
          >
            45 CFR 164.502(g): Personal representatives
          </a>
        </li>
        <li>
          <a
            href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/personal-representatives/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            HHS: Personal Representatives, including parents and minors
          </a>
        </li>
        <li>
          <a
            href="https://www.hopkinsmedicine.org/patient-care/mychart/proxy-access"
            target="_blank"
            rel="noopener noreferrer"
          >
            Johns Hopkins Medicine: MyChart Proxy Access
          </a>
        </li>
        <li>
          <a
            href="https://healthit.gov/information-blocking/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ASTP/ONC: Information Blocking
          </a>
        </li>
        <li>
          <a
            href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/health-information-of-deceased-individuals/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            HHS: Health Information of Deceased Individuals
          </a>
        </li>
      </ul>
      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default SharedFamilyMedicalRecord;
