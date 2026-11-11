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
    question: "What medical records should I keep for an aging parent?",
    answer:
      "Start with a dated summary of current medicines, allergies and reactions, diagnoses, doctors, and emergency contacts. Keep insurance details, recent visit and discharge summaries, relevant test results, and copies of applicable advance directives behind it. Ask the care team which older records matter for upcoming care.",
  },
  {
    question: "Is a binder or a digital system better for medical records?",
    answer:
      "Use the system your parent and authorized helpers can update and reach. A binder works without an account or internet connection. Digital files are easier to search and share with distant family. A hybrid system needs one clearly identified main copy so its paper and digital versions do not drift apart.",
  },
  {
    question: "Do I need power of attorney to help with a parent's records?",
    answer:
      "Not for every task. Your parent can share their own copies or arrange provider-approved proxy access. A provider may also share information relevant to your involvement in care under HIPAA's family-sharing rules. Full record access and decision-making authority are different questions; ask the provider what permission or legal documentation applies.",
  },
  {
    question: "How do I collect records from several doctors?",
    answer:
      "List the providers and the specific records you need. With your parent's permission or applicable legal authority, use each provider's portal or records-request process. Track the request date, records requested, response, and next follow-up. Do not assume that one portal contains every provider's records.",
  },
  {
    question: "How often should I update a parent's medical record?",
    answer:
      "Update the working summary after a clinician changes medicines or instructions, after a hospital stay, and when contacts or access arrangements change. Choose a recurring check, such as monthly, to find gaps. Date each version, identify who maintains it, and keep older records separate from the current summary.",
  },
];

const sections = [
  { id: "quick-checklist", label: "Start with this checklist" },
  { id: "getting-started", label: "Which records to gather" },
  { id: "summary-template", label: "Copy the summary template" },
  { id: "choosing-system", label: "Binder, digital, or hybrid?" },
  {
    id: "building-from-scratch",
    label: "Set up folders and request missing records",
  },
  { id: "why-organization-matters", label: "Prepare for an appointment" },
  { id: "pro-tips", label: "Keep one current copy" },
  { id: "common-challenges", label: "When records or permission are missing" },
  { id: "special-situations", label: "Long-distance and shared caregiving" },
  { id: "for-agencies", label: "Handing information to a home care agency" },
  { id: "technology-tools", label: "Use the free planning tools" },
  { id: "legal-privacy", label: "Permission and privacy" },
  { id: "when-to-update", label: "When to update the record" },
  { id: "bottom-line", label: "Choose your first task" },
  { id: "sources", label: "Sources" },
];

const summaryFields = [
  [
    "Last checked",
    "Date, person maintaining this copy, and where the main record is kept.",
  ],
  [
    "Medicines",
    "Name, dose, schedule, prescriber, and pharmacy. Include nonprescription medicines and supplements; confirm uncertain entries with the care team.",
  ],
  [
    "Allergies",
    "Substance and reaction, or mark the information as unknown until confirmed.",
  ],
  [
    "Current conditions",
    "Diagnosed conditions and the clinician managing each. Keep your observations separate from diagnoses.",
  ],
  [
    "Care contacts",
    "Primary clinician, specialists, pharmacy, and their phone numbers.",
  ],
  [
    "Emergency contacts",
    "Main contact, backup contact, relationship, and phone numbers.",
  ],
  [
    "Supporting documents",
    "Location of insurance details, recent visit notes, and applicable advance directives or healthcare-agent documents.",
  ],
] as const;

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Organize a Parent's Medical Records: Checklist",
  description:
    "Organize an aging parent's medical records with a checklist, blank summary, folder examples, and steps for requesting and sharing missing documents.",
  path: "/blog/family-history/organizing-medical-records",
  type: "article",
  image: "/images/blog/organizing-medical-records.jpg",
});

const OrganizingMedicalRecords = () => {
  return (
    <ArticleLayout
      title="How to Organize Medical Records for an Aging Parent"
      description="A checklist, blank summary, and filing examples for gathering a parent's records and keeping the right information ready to share."
      image="/images/blog/organizing-medical-records.jpg"
      imageAlt="Organizing medical records for aging parents"
      url="/blog/family-history/organizing-medical-records"
      categoryKey="health-records"
      authorCredentials="Editorial guide"
      authorBio="The Kaizen Health editorial team prepared this practical guide using the sources linked below. Confirm medical instructions with the care team and access requirements with the provider."
      readTime="9 min read"
      tags={["Health records", "Caregiving"]}
      sections={sections}
    >
      <p>
        Start with a dated summary of current medicines, allergies, diagnoses,
        doctors, and emergency contacts. Keep the supporting records behind it.
        Choose one person to maintain the main copy and agree with your parent
        how authorized helpers can reach it.
      </p>
      <p>
        You can build this with a binder, digital folders, or both. Begin with
        what your parent already has; request missing records as you go.
      </p>
      <KeyTakeaways
        items={[
          "Put a short, dated summary first so a helper can find current information without searching the whole file.",
          "Use the same categories on paper and online. Mark older versions clearly instead of mixing them with current instructions.",
          "Organizing documents, accessing a provider's records, and making medical decisions involve different permissions.",
          "Update the summary after care changes and tell the people who use it where the current version lives.",
        ]}
      />

      <HeadingWithAnchor id="quick-checklist">
        Start with this medical-records checklist
      </HeadingWithAnchor>
      <ul>
        <li>
          Ask your parent what help they want and who may see which information.
        </li>
        <li>
          Gather the current medicine list, including supplements, and known
          allergies and reactions.
        </li>
        <li>
          Write down current diagnoses, clinician and pharmacy contacts, and a
          backup family contact.
        </li>
        <li>
          Collect insurance details, recent visit notes, discharge instructions,
          and relevant test results.
        </li>
        <li>
          Locate any advance directives and healthcare-agent documents; note
          where originals are kept.
        </li>
        <li>
          Choose the main copy, its owner, and a place authorized helpers can
          find it.
        </li>
        <li>
          List missing records and confirm the request process with each
          provider.
        </li>
      </ul>
      <p>
        <a href="/downloads/medical-records-checklist.txt" download>
          Download the blank records checklist and summary (.txt)
        </a>
        . Open it in a text editor to fill in or print. Keep the completed copy
        private; this is a blank worksheet, not a form that sends information to
        Kaizen.
      </p>

      <HeadingWithAnchor id="getting-started">
        Which medical records should you gather?
      </HeadingWithAnchor>
      <p>
        Keep current care information easiest to reach. File visit summaries,
        discharge papers, test results, insurance documents, and relevant
        medical history behind it. Johns Hopkins Medicine's{" "}
        <a
          href="https://www.hopkinsmedicine.org/health/expert-qa/medical-records-getting-organized"
          target="_blank"
          rel="noopener noreferrer"
        >
          records organization guide
        </a>{" "}
        also recommends a provider directory and a record of symptoms or
        treatment responses to discuss with clinicians.
      </p>
      <p>
        Keep an allergy list with the current medicine list, rather than in a
        hard-to-find history section. Record what is known and what still needs
        confirmation. A photo of a medicine label can help you check an entry,
        but ask the clinician or pharmacist to resolve conflicting instructions.
      </p>
      <p>
        Keep copies of relevant legal documents with a note about where the
        originals are stored. Do not assume that a document's title tells you
        when it takes effect or what authority it grants.
      </p>

      <HeadingWithAnchor id="summary-template">
        Copy this medical-records summary template
      </HeadingWithAnchor>
      <p>
        Use these fields as the front page of the file. Leave unknown details
        marked as unknown. This summary helps a conversation with the care team;
        it does not replace the clinical record or prescribe treatment.
      </p>
      <div
        role="region"
        aria-label="Medical record summary fields"
        tabIndex={0}
        className="overflow-x-auto rounded-xl border border-cloud focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
      >
        <table className="w-full min-w-[32rem] text-left">
          <caption className="px-4 py-3 text-left font-semibold">
            Fields for your parent's working summary
          </caption>
          <thead className="bg-lavender">
            <tr>
              <th scope="col" className="border-b border-cloud px-4 py-3">
                Field
              </th>
              <th scope="col" className="border-b border-cloud px-4 py-3">
                What to record
              </th>
            </tr>
          </thead>
          <tbody>
            {summaryFields.map(([field, detail]) => (
              <tr key={field}>
                <th
                  scope="row"
                  className="border-b border-cloud px-4 py-3 align-top font-semibold"
                >
                  {field}
                </th>
                <td className="border-b border-cloud px-4 py-3 align-top">
                  {detail}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <HeadingWithAnchor id="choosing-system">
        Binder, digital folders, or a hybrid?
      </HeadingWithAnchor>
      <p>
        A binder is useful when your parent prefers paper or a helper needs
        information without signing in. Put the summary at the front and use
        labeled tabs. Keep the binder somewhere agreed with your parent, away
        from casual visitors.
      </p>
      <p>
        Digital folders make records searchable and easier to share across
        households. Check whether the service offers separate accounts,
        appropriate access controls, and a way to export your files. A scanned
        document still needs a readable name and the correct person's folder.
      </p>
      <p>
        A hybrid system gives you a paper summary and digital supporting
        records. Choose which copy is the source for updates, then replace the
        other version when something changes. Test what you can open without
        internet access before relying on it away from home.
      </p>

      <HeadingWithAnchor id="building-from-scratch">
        Set up folders and request missing records
      </HeadingWithAnchor>
      <p>
        Use the same sections on paper and online. A simple folder structure
        could look like this:
      </p>
      <pre className="overflow-x-auto rounded-xl bg-lavender p-5 text-base">
        <code>
          {
            "01 Current summary\n02 Medicines and allergies\n03 Visits and hospital stays\n04 Tests and imaging reports\n05 Insurance\n06 Advance directives and access documents\n07 Older records"
          }
        </code>
      </pre>
      <p>
        Name a visit file with its date, clinician or specialty, and document
        type. For example, <code>YYYY-MM-DD-cardiology-visit-summary.pdf</code>.
        Keep the provider's original document; add your questions separately.
      </p>
      <ol>
        <li>
          List the providers and the specific documents needed for current care.
        </li>
        <li>
          Ask each office how the patient or authorized representative should
          request copies.
        </li>
        <li>
          Record what was requested, when it was sent, and the office's stated
          response time.
        </li>
        <li>
          Check what arrives against the request and follow up on missing items.
        </li>
      </ol>
      <p>
        Use the free{" "}
        <Link href="/tools/medical-records-request-tracker">
          medical records request tracker
        </Link>{" "}
        to make that list, then copy or print it. For the patient's underlying
        rights, see{" "}
        <a
          href="https://www.hhs.gov/hipaa/for-individuals/guidance-materials-for-consumers/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          HHS guidance on health information rights
        </a>
        . Provider procedures and applicable state rules can differ.
      </p>

      <HeadingWithAnchor id="why-organization-matters">
        Prepare the right records for the appointment
      </HeadingWithAnchor>
      <p>
        Ask the office what it needs before the visit. Bring the current
        summary, relevant recent results, and the questions you want answered.
        For a new specialist, check whether the referral and imaging have
        actually arrived; a report and the image files may need separate
        requests.
      </p>
      <p>
        Use the{" "}
        <Link href="/tools/doctor-visit-summary">
          doctor visit summary template
        </Link>{" "}
        before the appointment for questions and afterward for the clinician's
        instructions and follow-up tasks. Compare your notes with the clinic's
        after-visit summary. Ask about anything that conflicts or remains
        unclear.
      </p>

      <HeadingWithAnchor id="pro-tips">
        Keep one current copy and a clear handoff
      </HeadingWithAnchor>
      <p>
        Name one person to maintain the working summary and a backup who can
        help. That practical role does not give either person legal authority
        over care. Date updates, record their source, and tell authorized
        helpers which version to use.
      </p>
      <p>
        After a visit, a short handoff can record: what the clinician changed,
        where the instructions are filed, who will arrange the next appointment,
        and when they will do it. Avoid separate, conflicting medicine lists in
        family chats. Preserve older versions in an archive rather than deleting
        clinical history because it is no longer current.
      </p>

      <HeadingWithAnchor id="common-challenges">
        When records or permission are missing
      </HeadingWithAnchor>
      <h3>My parent does not want to share everything</h3>
      <p>
        Ask which task they want help with. They may agree to share an
        appointment time or a medicine list while keeping other information
        private. Respect that choice. Our guide to{" "}
        <Link href="/blog/caregiving/when-your-parent-refuses-help">
          when a parent refuses help
        </Link>{" "}
        covers approaching that conversation.
      </p>
      <h3>The records disagree or contain an error</h3>
      <p>
        Keep the original records and note the discrepancy. Ask the relevant
        clinician or records office how to clarify or correct it. Do not decide
        which prescription instruction to follow by choosing the newest-looking
        file yourself.
      </p>
      <h3>There are several portals or technology feels overwhelming</h3>
      <p>
        Start with the provider used most often and one paper summary. Ask
        portal support to help set up a separate caregiver account where
        available. Record the support contact and outstanding requests instead
        of trying to solve every portal at once.
      </p>

      <HeadingWithAnchor id="special-situations">
        Long-distance care and several caregivers
      </HeadingWithAnchor>
      <p>
        Agree who will update the record, who will attend visits, and who can
        cover an absence. Before a handoff, have the backup try opening the
        agreed summary from their own account. Store emergency contacts
        somewhere they can reach if the main coordinator is unavailable.
      </p>
      <p>
        If your parent's ability to make decisions is changing, ask the care
        team and a qualified local adviser which arrangements apply. Keep
        observations dated and separate from diagnoses; an organization system
        cannot determine decision-making capacity.
      </p>

      <HeadingWithAnchor id="for-agencies">
        Sharing information with a home care agency
      </HeadingWithAnchor>
      <p>
        Ask the agency which information it needs, who receives updates, and how
        staff changes affect access. Confirm consent or other applicable
        authority before sending records. Agree how the family will receive new
        care notes and whom to contact about a discrepancy. A family folder
        supplements the agency's required documentation; it does not replace it.
      </p>

      <HeadingWithAnchor id="technology-tools">
        Use tools for the task in front of you
      </HeadingWithAnchor>
      <p>
        The{" "}
        <Link href="/tools/medical-records-request-tracker">
          request tracker
        </Link>{" "}
        organizes missing documents. The{" "}
        <Link href="/tools/doctor-visit-summary">visit summary builder</Link>{" "}
        formats questions, instructions, and follow-up tasks. Both offer copy
        and print without an account. Copy or print before closing the page;
        they are worksheets, not a saved medical record.
      </p>
      <p>
        When choosing a shared record service, check access controls, exports,
        and emergency availability using the{" "}
        <Link href="/blog/family-history/shared-family-medical-record#choose-a-platform">
          family-record platform checklist
        </Link>
        . Buying an app does not grant permission to access another person's
        provider records.
      </p>

      <HeadingWithAnchor id="legal-privacy">
        Permission and privacy come before sharing
      </HeadingWithAnchor>
      <p>
        Your parent can share their own copies and ask providers about proxy
        access. HIPAA also permits certain disclosures to people involved in
        care, including when the patient agrees or does not object. That is
        different from a general right to the full chart.{" "}
        <a
          href="https://www.hhs.gov/hipaa/for-individuals/family-members-friends/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          HHS explains when providers may share with family and friends
        </a>
        .
      </p>
      <p>
        For ongoing access, ask each provider what its proxy process covers and
        whether an authorization or evidence of legal authority is needed.
        Follow the{" "}
        <Link href="/blog/family-history/shared-family-medical-record">
          caregiver access and permissions guide
        </Link>{" "}
        for the differences between these arrangements.
      </p>
      <ul>
        <li>
          Use separate accounts and multifactor authentication where available.
        </li>
        <li>
          Share only the information agreed for the task; avoid public links.
        </li>
        <li>
          Keep completed worksheets and legal documents in a protected location.
        </li>
        <li>
          Review access when a helper's role changes. Previously downloaded
          copies may still exist.
        </li>
      </ul>

      <HeadingWithAnchor id="when-to-update">
        When should you update the record?
      </HeadingWithAnchor>
      <p>
        Update after a hospital stay, a clinician's change to medicines or
        instructions, a new diagnosis, or a change to contacts or insurance.
        Check the update against the care team's instructions before circulating
        it. Choose a recurring check, such as monthly, for unanswered requests,
        old copies, and access changes.
      </p>
      <p>
        Keep family health history separately from day-to-day care notes. Our{" "}
        <Link href="/blog/family-history/documenting-family-health">
          family health history guide
        </Link>{" "}
        explains what to collect from relatives for a clinician.
      </p>

      <HeadingWithAnchor id="bottom-line">
        Choose your first task
      </HeadingWithAnchor>
      <p>
        Gather the current medicine and allergy information with your parent,
        mark what needs confirmation, and write down the main and backup
        contacts. Put a date on that first summary. You can add the rest of the
        file as records arrive.
      </p>
      <ProductCallout
        body="Kaizen Health lets you upload medical records and ask Kai questions about them. Keep the original documents and confirm medical instructions with the care team. See how the app handles records and sharing before choosing it for your family."
        buttonLabel="Try it with a document"
      />

      <HeadingWithAnchor id="sources">Sources and scope</HeadingWithAnchor>
      <p>
        This is a practical organization guide for families, with U.S. access
        examples. It is not individualized medical or legal advice. The linked
        provider and government sources support the recordkeeping and access
        explanations; they do not endorse Kaizen Health.
      </p>
      <ul>
        <li>
          <a
            href="https://www.hopkinsmedicine.org/health/expert-qa/medical-records-getting-organized"
            target="_blank"
            rel="noopener noreferrer"
          >
            Johns Hopkins Medicine: Medical Records, Getting Organized
          </a>
        </li>
        <li>
          <a
            href="https://www.hhs.gov/hipaa/for-individuals/guidance-materials-for-consumers/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            HHS: Your Rights Under HIPAA
          </a>
        </li>
        <li>
          <a
            href="https://www.hhs.gov/hipaa/for-individuals/family-members-friends/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            HHS: Family Members and Friends
          </a>
        </li>
      </ul>
      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default OrganizingMedicalRecords;
