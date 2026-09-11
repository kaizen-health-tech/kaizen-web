// Reviewer TODO: a named reviewer with health-privacy-law or patient-advocacy
// credentials is expected soon (per the brief) and should replace the
// editorial-team byline before this clears the 90/zero-P0 publish gate.
// Update authorName/authorCredentials/authorUrl and add reviewedBy schema
// support once confirmed.

import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import KeyTakeaways from "@/components/Blog/content/KeyTakeaways";
import NumberedPoints from "@/components/Blog/content/NumberedPoints";
import PullQuote from "@/components/Blog/content/PullQuote";
import ImagePlaceholder from "@/components/Blog/content/ImagePlaceholder";
import ProductCallout from "@/components/Blog/content/ProductCallout";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Can I see my spouse's medical records without their permission?",
    answer:
      "Not just because you're married. You need a signed HIPAA authorization on file, portal proxy access your spouse has granted, or personal-representative status, typically through a healthcare power of attorney. In some states, a spouse automatically becomes a personal representative if the patient is incapacitated and state law names a spouse as a default decision-maker. Confirm your state's rule rather than assuming either way.",
  },
  {
    question: "What documents do I need to make medical decisions for my parent?",
    answer:
      "A signed healthcare power of attorney is the main one, naming you as agent while your parent still has the capacity to sign it. If they've already lost capacity and there's no POA in place, a court-ordered guardianship (called conservatorship of the person in some states) is the fallback, and it takes longer to put in place. A financial power of attorney alone usually isn't enough for medical decisions or records.",
  },
  {
    question: "Does a financial power of attorney let me see medical records?",
    answer:
      "Usually not. A financial POA covers money matters, like bank accounts, bills, and property, unless the document specifically adds HIPAA or health-information authorization language. Check the actual document instead of assuming. Some are drafted broadly enough to include it, and most aren't.",
  },
  {
    question: "Why did I lose access to my child's patient portal?",
    answer:
      "Most health systems step a parent's proxy access down to a limited view around age 12 to 13, then end it at 18. That's not a glitch. State laws let adolescents consent to certain confidential care on their own, and once that applies, a parent stops being the automatic personal representative for that particular information.",
  },
  {
    question: "Does the Cures Act give family members access to my records?",
    answer:
      "No. The 21st Century Cures Act's information-blocking rule secures your own timely access to your own record. It doesn't create any new right for a spouse, adult child, or other family member to see it. Family access still requires an authorization, portal proxy access you grant, or personal-representative status.",
  },
  {
    question: "How do I combine records from different doctors?",
    answer:
      "Set up patient-portal access at each health system first, since there's no single login that covers all of them. Then, if you want one combined view, connect an app like Apple Health Records, an Android health app, or a third-party aggregator using the patient-access API each provider is required to support. Coverage is uneven (older records, imaging, and free-text notes often don't come through), and the resulting view is typically read-only.",
  },
  {
    question: "Who can access my records after I die?",
    answer:
      "Generally the executor or administrator of your estate, acting as your personal representative for HIPAA purposes. If there's no will and no appointed executor, your state's next-of-kin rules decide who that is. This is one of the more state-dependent parts of the whole picture, so it's worth checking your own state if it matters to your family.",
  },
  {
    question: "How do first responders see my medical info if my phone is locked?",
    answer:
      "Only what you've entered into your phone's emergency information screen, like iPhone's Medical ID or the Android equivalent. There's no automatic connection to your medical record. First responders can see conditions, allergies, medications, and emergency contacts from the lock screen without unlocking the phone, but only if you've filled that in ahead of time.",
  },
];

const sections = [
  { id: "why-sharing-is-hard", label: "Why sharing one family record is its own problem" },
  { id: "three-access-routes", label: "The three ways a family member can legally reach a record" },
  { id: "spouses-adult-children", label: "Spouses and adult children: relationship isn't access" },
  { id: "aging-parents", label: "Aging parents: healthcare POA, financial POA, and guardianship" },
  { id: "kids-teens", label: "Kids and teens: why portal access changes around age 12 to 13 and ends at 18" },
  { id: "cures-act", label: "What the Cures Act information-blocking rule did, and didn't do, for your family" },
  { id: "setting-up-access", label: "Setting up shared access, step by step" },
  { id: "crisis-ready", label: "A crisis-ready setup: emergency and break-glass access" },
  { id: "pre-event-checklist", label: "The pre-event checklist and your family access map" },
  { id: "after-a-death", label: "Records after a family member dies" },
  { id: "recap", label: "The bottom line" },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Shared Family Medical Records",
  description:
    "When several people share one person's care, the hard part is who's allowed to see what. A guide to shared family medical records, access, and setup.",
  path: "/blog/family-history/shared-family-medical-record",
  type: "article",
  image: "/images/blog/shared-family-medical-record.png",
  keywords: [
    "shared family medical records",
    "family member access to medical records",
    "how to get access to a parent's medical records",
    "patient portal proxy access",
    "HIPAA authorization family member",
    "can I see my spouse's medical records",
    "medical power of attorney records access",
  ],
});

const SharedFamilyMedicalRecord = () => {
  return (
    <ArticleLayout
      title="The Shared Family Medical Record: Who Needs Access to What, and How to Set It Up"
      description="A spouse, an adult child, and a sibling each need a different slice of the same record. Here's what HIPAA actually requires, how it changes for aging parents and teenagers, and how to set shared access up before you need it."
      image="/images/blog/shared-family-medical-record.png"
      imageAlt="An adult daughter and her older mother sitting together at a table, looking over paperwork and a tablet"
      datePublished="2026-09-15"
      dateModified="2026-09-15"
      url="/blog/family-history/shared-family-medical-record"
      categoryKey="health-records"
      authorName="Kaizen Health Editorial Team"
      authorCredentials="Reviewed by the Kaizen Health editorial team"
      authorBio="The Kaizen Health editorial team researches and writes family health content. This guide covers HIPAA and other health-privacy law rather than clinical care, and a reviewer with health-privacy-law or patient-advocacy credentials is being added before publication."
      readTime="23 min read"
      tags={["Health records"]}
      sections={sections}
      keywords={[
        "shared family medical records",
        "family member access to medical records",
        "patient portal proxy access",
        "HIPAA authorization family member",
        "personal representative HIPAA",
        "healthcare power of attorney",
      ]}
    >
      <p>
        When a family shares the work of caring for someone, the hardest part
        usually isn&apos;t where the medical records live. It&apos;s who gets to
        see them. A spouse manages the daily medications. An adult child
        handles the appointments and talks to the doctor&apos;s office. A
        sibling deals with insurance paperwork. Someone has to make decisions
        if the person can&apos;t. Each of those roles needs a different slice
        of the same record, and most families only learn how the access rules
        actually work after they&apos;ve hit a wall: a hospital that
        won&apos;t discuss a parent&apos;s condition over the phone, a patient
        portal that quietly locks a parent out of a teenager&apos;s account, a
        power of attorney that turns out not to cover what everyone assumed it
        covered.
      </p>
      <p>
        None of that is really a filing problem. It&apos;s a permissions
        problem, and it&apos;s governed by real law that varies by state. This
        guide covers the three ways a family member can legally reach
        someone&apos;s record, how that differs for a spouse, an adult child,
        an aging parent, and a minor, what the 21st Century Cures Act changed
        (and didn&apos;t), and how to set shared access up before a health
        event, not during one.
      </p>
      <p className="text-base italic text-graphite">
        This article explains general patterns in U.S. law and common
        health-system practice. It isn&apos;t legal or medical advice, and the
        specifics vary by state and by provider. Confirm details with your
        own providers and, where it matters, an attorney.
      </p>

      <KeyTakeaways
        items={[
          "Being someone's spouse, adult child, or sibling does not, by itself, give you access to their medical records. Access comes from one of three things: informal \"involved in care\" permission, a signed HIPAA authorization, or personal-representative status.",
          "A healthcare power of attorney makes you a personal representative for medical decisions and records. A financial power of attorney usually does not, unless it specifically says so.",
          "Parent access to a child's patient portal typically drops to a limited view around age 12 to 13 and ends at 18, because during adolescence a parent stops being the personal representative for confidential services. The exact age and rules vary by state and health system.",
          "The 21st Century Cures Act information-blocking rule secures your own access to your own records without delay. It does not give family members access to yours.",
          "Set it up before a health event: a healthcare POA for each adult, a HIPAA authorization on file with key providers, accepted portal proxy invitations, and an emergency-access plan. In a crisis, it's too late to start.",
        ]}
      />

      <HeadingWithAnchor id="why-sharing-is-hard">
        Why sharing one family record is its own problem
      </HeadingWithAnchor>
      <p>
        Filing systems solve where the records are. They don&apos;t solve who
        is allowed to see them, and in a family where care is a shared job,
        that second question is the real work.
      </p>
      <p>
        Think about how caregiving actually splits across a household. A
        spouse often tracks daily medications and day-to-day changes. An
        adult child schedules appointments and is the person a provider calls
        back. A sibling handles insurance claims and billing. And someone,
        sometimes one of those same people, needs the authority to make a
        decision if the patient can&apos;t make it themselves. Each role
        genuinely needs a different slice of the record, not full access to
        everything by default.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "A spouse often handles daily meds and monitoring.",
            text: "That means seeing what's currently prescribed, how it's supposed to be taken, and what changed recently, not necessarily the whole chart going back a decade.",
          },
          {
            lead: "An adult child often manages appointments and provider communication.",
            text: "Scheduling, following up on referrals, and being recognized when a doctor's office calls back requires being on the account, not just being related.",
          },
          {
            lead: "A sibling often handles insurance and paperwork.",
            text: "Claims, prior authorizations, and billing disputes need access to specific documents, not the full clinical record.",
          },
          {
            lead: "Someone needs decision-making authority if the person can't act for themselves.",
            text: "That's heavier than any of the roles above, and it requires its own legal instrument, not just an informal understanding.",
          },
        ]}
      />
      <ImagePlaceholder
        suggestion="Editorial-style photo of an adult child helping an older parent look at a smartphone together at a kitchen table, warm natural light, genuine expressions, no text overlay. Generation prompt: 'A candid, warm photo of an adult daughter sitting beside her older mother, both looking at a smartphone screen together at a kitchen table, soft natural daylight, diverse casting, realistic and unposed, editorial healthcare blog style, no text or logos.'"
        altText="An adult daughter and her older mother looking at a smartphone screen together at a kitchen table"
      />
      <p>
        Once you know who should see what, the practical work of{" "}
        <Link href="/blog/family-history/organizing-medical-records">
          gathering and filing the records themselves
        </Link>{" "}
        is a separate, more mechanical task, worth tackling once the
        permissions question is settled.
      </p>
      <p>
        The records themselves are scattered, too. Every provider tends to
        run its own patient portal, and there is no national &ldquo;family
        account&rdquo; that pulls a person&apos;s health information into one
        place automatically. Families are already stitching this together at
        real scale. Nearly 63 million U.S. adults, roughly one in four,
        provided unpaid care to a family member in the past year, and 29% of
        them are &ldquo;sandwich generation&rdquo; caregivers raising kids and
        caring for an aging parent at the same time, according to{" "}
        <Link
          href="https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          AARP and the National Alliance for Caregiving&apos;s 2025 Caregiving
          in the U.S. report
        </Link>
        . That work carries a real cost in time and money, covered in our
        breakdown of{" "}
        <Link href="/blog/caregiving/retirement-cost-of-caregiving">
          the time and financial cost of caregiving
        </Link>
        . Fighting for basic access to information on top of that shouldn&apos;t
        be part of the job, but it often is.
      </p>
      <p>
        The share of people accessing the portal of someone they help care
        for more than doubled in four years, from 24% in 2020 to 51% in 2024,
        according to a{" "}
        <Link
          href="https://www.healthit.gov/data/data-briefs/individuals-access-and-use-patient-portals-and-smartphone-health-apps-2024"
          target="_blank"
          rel="noopener noreferrer"
        >
          2024 data brief from the Assistant Secretary for Technology Policy
          and the Office of the National Coordinator for Health IT
          (ONC/ASTP)
        </Link>
        . That same data brief found that 59% of portal users have records
        spread across more than one portal, but only 7% use any app that
        pulls those separate portals into a single view. Portal access itself
        has grown too: 77% of people were offered access to a portal in 2024,
        up from 42% a decade earlier, and 65% of those offered access
        actually used it in the past year.
      </p>
      <p>
        The coordination load on caregivers has grown along with it. In a
        separate{" "}
        <Link
          href="https://www.aarp.org/pri/topics/ltss/family-caregiving/caregiving-in-the-united-states/"
          target="_blank"
          rel="noopener noreferrer"
        >
          2020 AARP and National Alliance for Caregiving report on caregivers
          of adults 50 and older
        </Link>
        , 66% of caregivers said they communicate with a care recipient&apos;s
        health care providers, 72% monitor how severe or serious the
        condition is, and about 58% perform medical or nursing tasks like
        wound care or medication management. In the same report, 26% of
        caregivers said they found it difficult to coordinate care, up from
        19% five years earlier. The record itself also carries information
        worth acting on beyond the immediate crisis; the same access that
        solves who-sees-what today is also what eventually lets a family put{" "}
        <Link href="/blog/family-health-monitoring">
          family health history to use for screening decisions
        </Link>
        , but only once the underlying information is complete and reachable
        by the people who need it.
      </p>
      <ImagePlaceholder
        suggestion="Original infographic: a role map showing one central medical record icon with four family roles arranged around it (spouse, adult child, sibling, decision-maker), each connected by a line to a scoped 'view' of the record (meds & monitoring / appointments & provider contact / insurance & paperwork / full decision authority). Clean, modern healthcare-editorial style, soft violet and mint color palette, no photographic elements, legible at small size. Generation prompt: 'A clean vector-style infographic showing a central medical record icon connected to four surrounding family-role icons (spouse, adult child, sibling, decision-maker), each with a small scoped-access label, healthcare editorial color palette of violet, mint, and off-white, minimal, no text paragraphs, icon-first design.'"
        altText="Infographic showing one shared medical record at the center with four family roles around it, each with a different scoped level of access"
      />

      <HeadingWithAnchor id="three-access-routes">
        The three ways a family member can legally reach a record
      </HeadingWithAnchor>
      <p>
        Under HIPAA, the federal law that controls who can see and share a
        person&apos;s health information, there are three distinct tiers of
        family access, and people mix them up constantly. There is informal
        &ldquo;involved in care&rdquo; permission, a signed HIPAA
        authorization, and personal-representative status. Each one unlocks a
        different amount of access, and confusing them is where most family
        access problems start.
      </p>
      <p>
        Informal sharing happens when a provider discusses care with someone
        present during an appointment, someone the patient has agreed to
        include, or someone the patient hasn&apos;t objected to when given the
        chance. It also covers situations where the patient is incapacitated
        and the provider believes sharing is in the patient&apos;s best
        interest. No form is required for this, and the{" "}
        <Link
          href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.510"
          target="_blank"
          rel="noopener noreferrer"
        >
          regulation governing it (45 CFR 164.510(b))
        </Link>{" "}
        leaves the decision to the provider&apos;s professional judgment case
        by case. It gets you a conversation, not the chart.
      </p>
      <p>
        A HIPAA authorization is a signed form in which the patient names who
        can receive their information and how much of it. It can be scoped
        narrowly, like immunization records only, or broadly, like the full
        chart, and it can cover a specific date range. It&apos;s revocable at
        any time, and because each provider keeps its own records, an adult
        acting on their own behalf generally needs to file one with every
        provider they want covered, not just one central form.
      </p>
      <p>
        Personal-representative status is the strongest of the three. Under{" "}
        <Link
          href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.502"
          target="_blank"
          rel="noopener noreferrer"
        >
          45 CFR 164.502(g)
        </Link>
        , a personal representative is treated as if they were the patient for
        the matters their authority covers, including the patient&apos;s{" "}
        <Link
          href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.524"
          target="_blank"
          rel="noopener noreferrer"
        >
          full right of access under 164.524
        </Link>
        .
      </p>
      <p>
        A healthcare power of attorney agent, a court-appointed guardian,
        the parent of a minor, and the executor of an estate can all count as
        personal representatives. But who actually qualifies, and how a
        provider verifies it, is decided by state law, not a single federal
        standard. According to{" "}
        <Link
          href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/personal-representatives/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          HHS Office for Civil Rights guidance on personal representatives
        </Link>
        , a provider may also decline to treat someone as a personal
        representative, even with the right paperwork, in situations
        involving suspected abuse, neglect, or endangerment.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3">Route</th>
              <th className="border border-gray-300 px-4 py-3">What it unlocks</th>
              <th className="border border-gray-300 px-4 py-3">Who grants it</th>
              <th className="border border-gray-300 px-4 py-3">How durable</th>
              <th className="border border-gray-300 px-4 py-3">Typical use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Involved-in-care sharing
              </td>
              <td className="border border-gray-300 px-4 py-3">
                A conversation about care in progress, not the record itself
              </td>
              <td className="border border-gray-300 px-4 py-3">
                The provider, case by case
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Not durable; reassessed at every visit
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Being present at an appointment or getting a status update
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                HIPAA authorization
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Exactly the records and date range named in the signed form
              </td>
              <td className="border border-gray-300 px-4 py-3">
                The patient, in writing
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Lasts until revoked, but usually must be filed with each
                provider separately
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Getting a specific record or result to a specific person
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Personal representative
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Full access to the record for matters the representative
                status covers
              </td>
              <td className="border border-gray-300 px-4 py-3">
                State law, based on the underlying legal instrument
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Lasts as long as the underlying authority lasts
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Ongoing coordination of someone&apos;s care
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <PullQuote quote="Personal representative means durable, chart-level access. An authorization means exactly what the patient wrote down, and nothing more. Involved-in-care sharing means a hallway conversation, not the chart." />
      <ImagePlaceholder
        suggestion="Original infographic: a three-column comparison card contrasting Involved-in-care sharing, HIPAA authorization, and Personal representative, each column with a simple icon (speech bubble, signed document, ID badge) and one short phrase summarizing the level of access. Clean healthcare-editorial style matching the role-map graphic above. Generation prompt: 'A clean three-column comparison infographic card titled with three headers: Involved-in-care sharing, HIPAA authorization, Personal representative, each with a simple line icon (speech bubble, signed document, ID badge) and one short descriptive phrase beneath, healthcare editorial palette of violet, mint, and off-white, no dense text blocks.'"
        altText="Three-column comparison card showing involved-in-care sharing, HIPAA authorization, and personal representative as three distinct levels of family access to medical records"
      />

      <HeadingWithAnchor id="spouses-adult-children">
        Spouses and adult children: relationship isn&apos;t access
      </HeadingWithAnchor>
      <p>
        An adult patient&apos;s records aren&apos;t automatically open to a
        spouse or adult child. To get real access, you need one of the three
        routes above: a signed HIPAA authorization on file with each
        provider, portal proxy access the patient grants, or
        personal-representative status through a healthcare power of
        attorney or guardianship.
      </p>
      <p>
        This surprises people constantly. An adult child calls a hospital to
        check on a parent, or a spouse calls about a spouse, and gets turned
        down flat, even when the relationship is obvious and the intentions
        are good. According to{" "}
        <Link
          href="https://www.hipaajournal.com/does-hipaa-apply-to-spouses/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HIPAA Journal&apos;s explainer on spouses and HIPAA
        </Link>
        , marriage alone does not create a right of access under the law. For
        a competent adult, the fastest low-friction path is usually setting
        up portal proxy access with a spouse or adult child, plus a broad
        HIPAA authorization on file at the main providers, well before it&apos;s
        needed.
      </p>
      <p>
        Incapacity changes the picture, and this is where state law does most
        of the work. Where state law gives someone default authority to make
        health care decisions for an incapacitated person, often naming a
        spouse first in the order of priority, a provider generally must
        recognize that person as a personal representative once incapacity is
        established. New York&apos;s Family Health Care Decisions Act works
        this way, giving a spouse (or, absent a spouse, other listed
        relatives) decision-making authority for an incapacitated patient
        without a prior POA, as{" "}
        <Link
          href="https://conaelderlaw.com/family-health-care-decisions-act/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cona Elder Law explains for New York specifically
        </Link>
        . Other states structure default-surrogate authority differently, and
        some don&apos;t include a spouse automatically at all. So an
        incapacitated patient&apos;s spouse becomes a representative
        automatically in some states and not in others. Never assume either
        way. Check your own state&apos;s surrogate decision-making law, or ask
        an elder-law attorney, before you count on it.
      </p>

      <ImagePlaceholder
        suggestion="Photo. Two adult siblings helping their mother, who is seated at a kitchen table, sort her medication into a weekly pill organizer. Warm, natural indoor light, everyday domestic setting, no text overlay. Illustrates two adult children sharing one parent's care and needing different scoped access to the same record."
        altText="Two adult siblings helping their mother organize her weekly medications at the kitchen table"
      />

      <HeadingWithAnchor id="aging-parents">
        Aging parents: healthcare POA, financial POA, and guardianship
      </HeadingWithAnchor>
      <p>
        For a parent, the instrument you actually want is a healthcare power
        of attorney (also called a healthcare proxy, or a durable power of
        attorney for health care), signed while your parent still has the
        mental capacity to sign it. It makes the named agent a personal
        representative for medical decisions and records. A financial power
        of attorney usually does not do the same thing, and guardianship is
        the slower, court-ordered fallback for when no POA exists and
        capacity has already been lost.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3">Instrument</th>
              <th className="border border-gray-300 px-4 py-3">
                What it grants for medical records
              </th>
              <th className="border border-gray-300 px-4 py-3">When it activates</th>
              <th className="border border-gray-300 px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Healthcare power of attorney
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Personal-representative access to records and decisions,
                within the scope the document grants
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Immediate on signing, or &ldquo;springing&rdquo;, meaning it
                only takes effect after a documented finding of incapacity,
                often by one or two physicians
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Sign it while your parent still has capacity; name a primary
                and a backup agent
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Financial power of attorney
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Typically none, unless the document separately adds a
                HIPAA/health-information authorization clause
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Depends on the document; can be immediate or springing
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Read the actual grant of authority; a broad-sounding
                financial POA still usually doesn&apos;t cover medical records
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Guardianship (or conservatorship of the person)
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Court-ordered personal-representative status once a judge
                finds the person incapacitated
              </td>
              <td className="border border-gray-300 px-4 py-3">
                Only after a court proceeding, which typically takes weeks to
                months
              </td>
              <td className="border border-gray-300 px-4 py-3">
                The fallback when there&apos;s no POA and capacity is already
                lost; more restrictive of a person&apos;s autonomy than a POA
                they chose themselves
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The terminology and activation rules in that table vary by state.
        Some states use &ldquo;conservator&rdquo; instead of
        &ldquo;guardian,&rdquo; the standards for what counts as a documented
        incapacity finding differ, and the default order of who can act as a
        surrogate decision-maker without any paperwork at all is set state by
        state, as covered by elder-law guidance like{" "}
        <Link
          href="https://www.tcklaw.com/healthcare-power-of-attorney-vs-financial-power-of-attorney/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TCK Law&apos;s comparison of healthcare and financial powers of
          attorney
        </Link>
        . Say &ldquo;healthcare POA, sometimes called a healthcare
        proxy,&rdquo; and point your family to your own state&apos;s statute
        or an elder-law attorney for the activation specifics that actually
        apply to you.
      </p>
      <p>
        Most people don&apos;t have this done. Roughly one in three U.S.
        adults, about 33%, has completed a healthcare power of attorney or
        other advance directive, based on 2011 to 2016 data published in{" "}
        <Link
          href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2017.0175"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yadav et al., Health Affairs, 2017
        </Link>
        . Among a narrower, older population, adults age 50 to 80, 46% have
        completed at least one advance-care-planning document, according to
        the{" "}
        <Link
          href="https://www.healthyagingpoll.org/reports-more/report/older-adults-experiences-advance-care-planning"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Michigan National Poll on Healthy Aging, 2024
        </Link>
        . Those are two different populations measured seven years apart,
        not one trend, and there isn&apos;t a current single figure covering
        all U.S. adults. Either way, the point stands: most families are
        starting this from zero, and it&apos;s far easier to do before a
        crisis than during one. For the fuller picture of supporting a parent
        day to day, not just the legal instruments, see{" "}
        <Link href="/blog/family-history/caregiver-guide-aging-parents">
          the broader caregiver guide for aging parents
        </Link>
        .
      </p>

      <HeadingWithAnchor id="kids-teens">
        Kids and teens: why portal access changes around age 12 to 13 and
        ends at 18
      </HeadingWithAnchor>
      <p>
        A parent is normally the personal representative for a minor child
        and can see their records without any extra paperwork. But during
        adolescence, that stops applying to confidential services the minor
        is legally allowed to consent to on their own, which is why patient
        portals step parent access down, commonly around age 12 to 13, and
        remove it entirely at 18.
      </p>
      <p>
        HIPAA sets out three specific situations where a parent is not the
        personal representative for a piece of information: when a minor
        lawfully consents to care and no parental consent is required, when
        care is court-directed, and when a parent has agreed to let the minor
        and provider have a confidential relationship for that care. Outside
        those carve-outs, HIPAA defers to whatever state law says. In
        practice, a &ldquo;limited&rdquo; teen portal view still commonly
        shows things like immunizations, allergies, and growth charts, and
        allows some scheduling, while withholding sensitive visit notes;
        exactly what&apos;s shown varies by health system. A teen can often
        extend proxy access further, through their own consent, using a
        separate teen-proxy-consent form where the health system offers one.
      </p>
      <p>
        The portal age threshold itself isn&apos;t a single fixed number.
        Different health systems and different states set it at 12, 13, or
        14, and what &ldquo;limited access&rdquo; actually includes varies by
        organization, according to{" "}
        <Link
          href="https://www.healthychildren.org/English/health-issues/conditions/prevention/Pages/parental-access-to-medical-records.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          the American Academy of Pediatrics&apos; guidance on parental
          access to medical records
        </Link>
        . Treat &ldquo;around age 12 to 13&rdquo; as a general pattern, not a
        guarantee for your own child&apos;s portal.
      </p>
      <ImagePlaceholder
        suggestion="Original infographic: a horizontal timeline showing a child's patient-portal access across four stages: full parent proxy access (birth to ~11), step-down to limited view (~12-13), teen-controlled access to sensitive services (13-17), and access ending at 18. Simple age markers, healthcare editorial color palette matching the rest of the piece. Generation prompt: 'A clean horizontal timeline infographic showing four labeled stages of a child's patient portal access by age: full parent access from birth, a step-down to limited parent access around age 12-13, teen-controlled access to sensitive services through the teen years, and access ending at 18, minimal healthcare-editorial style, violet and mint palette, small age markers, no dense paragraphs.'"
        altText="Timeline infographic showing how a parent's access to a child's patient portal steps down around age 12 to 13 and ends at 18"
      />
      <p>
        State law also decides which categories of care a minor can consent
        to without a parent, and this is one of the fastest-moving areas of
        health policy right now. According to{" "}
        <Link
          href="https://www.guttmacher.org/state-policy/explore/minors-access-sti-services"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guttmacher Institute&apos;s tracking of minors&apos; access to STI
          services
        </Link>
        , as of August 1, 2026, a minor may consent to STI testing and
        treatment in all 50 states and Washington, D.C., though 16 states have
        provisions allowing parental notification. For{" "}
        <Link
          href="https://www.guttmacher.org/state-policy/explore/minors-access-contraceptive-services"
          target="_blank"
          rel="noopener noreferrer"
        >
          contraceptive services, tracked separately by Guttmacher
        </Link>
        , also as of August 1, 2026, 23 states and D.C. let all minors
        consent on their own, 16 states allow it only in defined
        circumstances (such as being a parent already, or being married), and
        2 states require parental consent.
      </p>
      <p>
        For outpatient mental health and substance-use treatment, the rules
        vary widely by state and don&apos;t reduce to a simple count; check{" "}
        <Link
          href="https://www.guttmacher.org/state-policy/explore/overview-minors-consent-law"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guttmacher&apos;s live overview of minors&apos; consent law
        </Link>{" "}
        directly for your state, since this is an area where positions
        adopted by groups like the{" "}
        <Link
          href="https://www.adolescenthealth.org/Resources/Clinical-Care-Resources/Confidentiality.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Society for Adolescent Health and Medicine
        </Link>{" "}
        and state statutes don&apos;t always align.
      </p>
      <p>
        This is also actively
        changing: both Idaho and Tennessee enacted laws in 2024 that expand
        parental consent or access requirements for a minor&apos;s care,
        moving in the opposite direction from the states above. Date-stamp
        anything you read on this topic, and verify it against your own
        state before you rely on it.
      </p>
      <ImagePlaceholder
        suggestion="A clean choropleth-style US map infographic, keyed to Guttmacher's minor-contraception-consent categories: states shaded in three muted colors for all minors may consent, conditional consent, and parental consent required. Include a simple three-item color-key legend and a visible caption below the map reading: As of Aug. 2026, see Guttmacher Institute for current state-by-state rules. Editorial healthcare data-visualization style, muted violet, mint, and gray palette, not a bright political-campaign look."
        altText="US map showing which states allow minors to consent to contraceptive services on their own, which allow it conditionally, and which require parental consent, captioned as of August 2026"
      />
      <p>
        Access questions start even earlier than adolescence. If your family
        is weighing{" "}
        <Link href="/blog/pregnancy-genetic">prenatal genetic testing</Link>{" "}
        during a pregnancy, know that the results become part of the child&apos;s
        record once they&apos;re born, subject to the same parent-as-personal-
        representative rules described above, and the same step-down once
        adolescence starts.
      </p>

      <HeadingWithAnchor id="cures-act">
        What the Cures Act information-blocking rule did, and didn&apos;t do,
        for your family
      </HeadingWithAnchor>
      {/* Editor: a Dec 2025 ASTP/ONC deregulatory proposed rule may affect parts of the information-blocking framework described here. Verify current status before publish; this section describes the rules as of research in Sept 2026. */}
      <p>
        Since April 2021, the 21st Century Cures Act&apos;s
        &ldquo;information blocking&rdquo; rule has barred providers, EHR
        (electronic health record) vendors, and health information networks
        from unreasonably interfering with your access to your own
        electronic health information. In practice, that means test results,
        clinical notes (often called &ldquo;open notes&rdquo;), and other
        records show up in your patient portal without unnecessary delay.
        This rule secures your own access. It does not give your spouse,
        your adult child, or any other family caregiver access to your
        records.
      </p>
      <p>
        &ldquo;Open notes&rdquo; means a patient generally can&apos;t ask a
        provider to selectively hide specific notes from a family member
        they&apos;ve already granted proxy access to; once someone has proxy
        access, they typically see what the patient sees. If you want to keep
        certain information more private, the better tool is scoping the
        proxy grant itself more narrowly in the first place, not asking a
        provider to filter notes after the fact.
      </p>
      <p>
        Enforcement is where precision matters most, and where a lot of
        secondhand summaries get it wrong. Civil penalties of up to
        $1,000,000 per violation apply specifically to health IT developers
        and health information networks or exchanges, under an{" "}
        <Link
          href="https://www.federalregister.gov/documents/2023/06/27/2023-13561/information-blocking-enforcement"
          target="_blank"
          rel="noopener noreferrer"
        >
          HHS Office of Inspector General final rule effective September 1,
          2023
        </Link>
        . Health care providers themselves don&apos;t face that penalty.
        Instead, they face a separate &ldquo;disincentives&rdquo; framework
        finalized by HHS in 2024, tied to existing Medicare and other federal
        payment programs rather than a direct fine. It&apos;s not accurate to
        say providers can be fined $1 million for information blocking; that
        figure applies to a different set of actors entirely.
      </p>
      <ImagePlaceholder
        suggestion="Original infographic: a simple two-column 'Does / Doesn't' card summarizing what the Cures Act information-blocking rule does and doesn't do for families, e.g. 'Secures your own timely access to your records' vs. 'Give a spouse or adult child access to your records.' Clean editorial card layout, checkmark and X icons, matching the site's violet/mint palette. Generation prompt: 'A clean two-column comparison infographic card with a checkmark column titled DOES and an X-mark column titled DOESN'T, summarizing what a health information access rule secures versus what it does not grant to family members, healthcare editorial style, violet and mint color palette, minimal text, icon-forward design.'"
        altText="Two-column card summarizing what the Cures Act information-blocking rule does and doesn't do for family access to medical records"
      />
      <p>
        For deeper background on the rule generally,{" "}
        <Link
          href="https://www.healthit.gov/topic/information-blocking"
          target="_blank"
          rel="noopener noreferrer"
        >
          HealthIT.gov&apos;s information-blocking overview
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.opennotes.org/onc-federal-rule/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenNotes&apos; explanation of the federal rule
        </Link>{" "}
        are both useful starting points. A December 2025 ASTP/ONC
        deregulatory proposal could change parts of this framework; treat the
        description above as accurate as of research in September 2026, and
        check current status before relying on it for anything time-sensitive.
      </p>

      <HeadingWithAnchor id="setting-up-access">
        Setting up shared access, step by step
      </HeadingWithAnchor>
      <p>
        Most shared access is a one-time setup, not an ongoing chore. The
        core moves are: grant portal proxy access at every health system
        involved, put a HIPAA authorization on file with the main providers,
        and, if you want a combined view, connect a records app through the
        patient-access API.
      </p>
      <p>
        Here&apos;s how a generic portal proxy flow typically works. Exact
        screens and labels vary by vendor and health system, so treat this as
        the general shape rather than a screenshot of any specific product.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "The patient logs into their own portal account.",
            text: "Proxy access is granted by the patient, not requested by the family member first. If your parent isn't registered for the portal yet, that's step zero.",
          },
          {
            lead: "Open the Sharing Hub, sometimes labeled \"Share My Record.\"",
            text: "Most major systems put this under account or privacy settings, though the exact label varies.",
          },
          {
            lead: "Choose \"Manage friends and family access,\" then \"Invite friends or family.\"",
            text: "This is where the patient decides who gets invited.",
          },
          {
            lead: "Enter the family member's name and email, then choose the access level offered.",
            text: "Some systems offer full chart access; others offer a limited view, like scheduling and messaging without the full record.",
          },
          {
            lead: "The family member verifies their identity and accepts from their own account.",
            text: "They'll need their own separate portal login, linked to the patient's record by permission rather than a shared password.",
          },
          {
            lead: "Repeat at every health system the family member uses.",
            text: "Proxy access doesn't cross organizations. A grant at the hospital system doesn't carry over to a separate primary care group across town.",
          },
          {
            lead: "Guardians and POA agents typically use a different form.",
            text: "Instead of a simple invite, they usually submit the organization's proxy request form, often notarized, along with the court order or POA document attached.",
          },
        ]}
      />
      <ImagePlaceholder
        suggestion="UI mock, numbered: a stylized, generic patient-portal 'Sharing Hub' screen showing 'Manage friends and family access' and 'Invite friends or family,' with the six proxy-setup steps numbered on the interface. This must be an invented, generic interface, not a screenshot or recreation of any real vendor's portal (not MyChart, not Epic, not any specific health system's actual UI). Generation prompt: 'A clean, generic mobile app UI mockup of an invented patient portal screen titled Sharing Hub, showing a Manage Friends and Family Access section with an Invite Friends or Family button, six small numbered callouts pointing to the relevant UI elements, neutral fictional branding only, soft violet and white color scheme, flat modern UI design, explicitly NOT a recreation of any real health system's actual portal interface.'"
        altText="Stylized generic mock of a patient portal Sharing Hub screen showing the six steps to invite a family member as a proxy"
      />
      <p>
        Aggregation solves a different problem: seeing several providers&apos;
        records in one place instead of logging into each portal separately.
        Apps like Apple Health Records, Android health apps, and various
        third-party apps connect to participating providers through the HL7
        FHIR patient-access API, the standardized connection method the
        Cures Act requires certified health IT to support. Roughly nine in
        ten hospitals report enabling this kind of app-based access,
        according to an{" "}
        <Link
          href="https://www.healthit.gov/data/data-briefs/hospital-use-application-programming-interfaces-apis-certified-health-it-2023"
          target="_blank"
          rel="noopener noreferrer"
        >
          ONC/ASTP data brief on hospital use of APIs
        </Link>
        . It&apos;s still genuinely clunky in practice: coverage depends on
        each provider actually connecting its endpoint, historical records,
        imaging, and free-text notes often don&apos;t come through cleanly,
        and the resulting view is typically read-only and built for one
        patient at a time, with no native multi-person family view. That
        gap shows in the numbers, too; recall that only 7% of portal users
        use any app that consolidates multiple portals. A separate system,
        CMS&apos;s{" "}
        <Link
          href="https://www.cms.gov/priorities/key-initiatives/burden-reduction/interoperability/policies-and-regulations/patient-access-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Patient Access API
        </Link>
        , covers insurance and claims data rather than clinical records, and
        is worth knowing about separately.
      </p>
      <ImagePlaceholder
        suggestion="Original infographic: 'one parent, three health systems' diagram showing a single caregiver figure connecting separately to three distinct hospital/clinic icons (each requiring its own proxy setup), plus a fourth element showing a consolidating app pulling data from all three via a labeled FHIR API connection. Healthcare editorial style matching the rest of the piece. Generation prompt: 'A clean editorial infographic showing one caregiver figure with three separate lines connecting to three distinct clinic/hospital building icons, each line labeled with a small padlock representing a separate proxy setup, plus one additional line showing a mobile app icon pulling data from all three via a labeled FHIR API connector, violet and mint healthcare-editorial palette, minimal text, no dense paragraphs.'"
        altText="Diagram showing one family caregiver setting up separate proxy access at three different health systems, plus an aggregation app connecting to all three through the FHIR patient-access API"
      />
      <p>
        If your family is also comparing{" "}
        <Link href="/blog/family-history/research">
          at-home testing and family health documentation
        </Link>{" "}
        options, the same access questions apply once results come back: who
        can see them, and where they end up living alongside everything
        else.
      </p>

      <HeadingWithAnchor id="crisis-ready">
        A crisis-ready setup: emergency and break-glass access
      </HeadingWithAnchor>
      <p>
        There&apos;s no consumer version of &ldquo;break-glass&rdquo; access
        to someone else&apos;s medical record in an emergency.
        &ldquo;Break-glass&rdquo; is an internal term for an audited override
        clinicians can use inside their own EHR system during a genuine
        emergency; it isn&apos;t a right a family member can invoke from
        outside the system. What a family can actually do is make the
        information reachable in advance, so a crisis doesn&apos;t depend on
        anyone gaining new access in the moment.
      </p>
      <p>
        Start with what&apos;s already on the phone. iPhone&apos;s Medical ID
        (with &ldquo;Show When Locked&rdquo; turned on) and the equivalent
        Android emergency information feature let first responders see
        conditions, allergies, current medications, and emergency contacts
        directly from the lock screen, without unlocking the phone or
        needing any account access at all. Next, keep a shared secure
        document, reachable by more than one family member, with a current
        medication list, allergies, diagnoses, a provider directory,
        insurance ID numbers, and PDF copies of the healthcare POA and any
        HIPAA authorizations. And make sure portal proxy invitations are
        actually accepted, not just sent, and that a HIPAA authorization
        naming the crisis contact is already on file, before you need any of
        it.
      </p>
      <p>
        It also helps to remember the incapacity provision from earlier:
        when a patient can&apos;t communicate, a provider may share
        information with an involved family member using their own
        professional judgment. An accessible, current medication list in
        that moment genuinely helps a clinician move faster, even without a
        formal instrument in hand.
      </p>
      <ImagePlaceholder
        suggestion="Checklist-card infographic: a clean emergency-access checklist card listing four items with checkbox icons: phone Medical ID / lock-screen info set up, shared secure document with meds/allergies/providers/insurance IDs, POA and HIPAA authorization PDFs saved in that document, and portal proxy invitations accepted (not just sent). Editorial card style matching the piece's palette. Generation prompt: 'A clean checklist-card infographic with a header reading Emergency-Ready Checklist, four rows each with a checkbox icon and a short label: Phone Medical ID set up, Shared secure document with meds and providers, POA and authorization PDFs saved, Portal proxy invitations accepted, healthcare editorial style, violet and mint palette, card-based flat design, minimal text per row.'"
        altText="Checklist card showing the four steps to make a family member's medical information reachable in an emergency before it happens"
      />

      <HeadingWithAnchor id="pre-event-checklist">
        The pre-event checklist and your family access map
      </HeadingWithAnchor>
      <p>
        Do this while everyone involved still has capacity to sign documents
        and make choices. It comes down to four things per adult, plus one
        shared artifact for the whole family.
      </p>
      <ul>
        <li>
          A healthcare POA signed by each adult, naming a primary and backup
          agent, with a clear understanding of whether it&apos;s immediate or
          springing and what would trigger it.
        </li>
        <li>
          A HIPAA authorization on file with each key provider for the
          designated coordinator or coordinators, scoped to what they
          actually need.
        </li>
        <li>
          Portal proxy invitations sent and accepted at every health system,
          for every person who needs a defined role.
        </li>
        <li>
          An emergency-access plan: phone Medical ID or lock-screen info, a
          shared secure document, and PDF copies of the POA and
          authorizations.
        </li>
        <li>
          A written access map: who has access to what, when it was granted,
          and a date to review it again.
        </li>
      </ul>
      <ImagePlaceholder
        suggestion="Checklist-card infographic: a five-item pre-event checklist card (healthcare POA signed / HIPAA authorization on file / portal proxy invitations accepted / emergency-access plan in place / written access map completed), styled as a graphic checklist a reader could screenshot and follow. Same editorial palette as the other checklist card. Generation prompt: 'A clean checklist-card infographic titled Pre-Event Access Checklist with five rows, each with a checkbox icon and short label: Healthcare POA signed, HIPAA authorization on file, Portal proxy invitations accepted, Emergency-access plan in place, Written access map completed, healthcare editorial style, violet and mint palette, flat card design, screenshot-friendly layout.'"
        altText="Five-item pre-event checklist covering healthcare POA, HIPAA authorization, portal proxy access, emergency planning, and a written family access map"
      />
      <p>
        This is also a natural time to work on{" "}
        <Link href="/blog/family-history/documenting-family-health">
          documenting your family health history
        </Link>
        , since that context often shapes what a new provider needs to know,
        and it tends to get gathered alongside the access paperwork anyway.
      </p>
      <ImagePlaceholder
        suggestion="Editorial-style photo of a multi-generational family (an adult sibling pair and an older parent) having a conversation around a kitchen table with a folder of papers and a laptop open, warm and calm mood, representing the 'have the talk, sign the forms' moment. Generation prompt: 'A candid, warm editorial photo of two adult siblings and their older parent sitting together at a kitchen table, a folder of papers and an open laptop nearby, calm and genuine expressions mid-conversation, soft natural daylight, diverse casting, realistic and unposed, healthcare blog editorial style, no text or logos.'"
        altText="Two adult siblings and their older parent having a calm conversation at a kitchen table with paperwork and a laptop, setting up shared access together"
      />
      <p>
        A shared platform can hold this alongside the records themselves,
        instead of the map living in one person&apos;s head. Kaizen Health is
        built to keep a family&apos;s records and access roles in one place,
        so the spouse, the adult child, and the sibling each see the slice
        of the record their role actually needs.
      </p>
      <ProductCallout
        body="Kaizen Health keeps a shared record and an access map in one place, with per-person roles so a spouse, an adult child, and a sibling each see what they need without digging through separate portals. Kai, the built-in AI assistant, helps translate terminology and build a question list for the next appointment; it doesn't make legal or medical decisions on your family's behalf."
        buttonLabel="Try it with a document"
      />

      <HeadingWithAnchor id="after-a-death">
        Records after a family member dies
      </HeadingWithAnchor>
      <p>
        Access after death is handled almost entirely by state law rather
        than a federal standard. Generally, the executor or administrator of
        the deceased person&apos;s estate becomes the personal representative
        for HIPAA purposes and can request the records needed to settle the
        estate or handle related matters. If there&apos;s no will and no
        appointed executor, your state&apos;s next-of-kin rules decide who
        has that authority instead. Because this varies so much by state,
        it&apos;s worth checking your own state&apos;s probate rules, or
        asking an attorney, rather than assuming a specific family member is
        automatically in charge.
      </p>

      <HeadingWithAnchor id="recap">The bottom line</HeadingWithAnchor>
      <p>
        Being related to someone doesn&apos;t open their medical record.
        Access runs through one of three routes: a provider&apos;s informal
        judgment about who&apos;s involved in care, a signed HIPAA
        authorization, or personal-representative status. A healthcare power
        of attorney creates that representative status for medical decisions
        and records; a financial power of attorney usually doesn&apos;t,
        unless it says so explicitly. A parent&apos;s access to a child&apos;s
        portal steps down as the child reaches adolescence and ends at 18,
        because state law lets teens consent to some care on their own. The
        Cures Act secures your own access to your own records; it doesn&apos;t
        extend that access to your family. And all of this works far better
        set up in advance than assembled during a crisis.
      </p>
      <p>
        Pick the one adult in your family who will coordinate this. Then,
        this week, send the portal proxy invitations at each health system
        involved and start the healthcare POA conversation with a parent or
        spouse while everyone still has the capacity to sign. Keep the
        record and the access map together in one shared place your whole
        family can reach, not scattered across whoever happened to answer
        the phone last.
      </p>

      {/* Editor: [1] and [3] were cross-verified against the Cornell LII mirror
          of 45 CFR 164.502(g) since HHS.gov returned 403 to automated
          fetching, and [21], [22], [23] were corrected to match URLs
          verified during research. [17] (Federal Register document number),
          the AAP parental-access reference, the TCK Law elder-law post, and
          the SAHM/adolescenthealth.org confidentiality page were not
          independently re-verified in this pass; link-check all four before
          publish. */}
      <p className="text-sm text-graphite italic">
        <strong>References</strong>
        <br />
        [1]{" "}
        <a
          href="https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/personal-representatives/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          HHS Office for Civil Rights, &ldquo;Personal Representatives&rdquo;
          guidance.
        </a>{" "}
        Accessed September 2026. Mirrored at{" "}
        <a
          href="https://www.law.cornell.edu/cfr/text/45/164.502"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cornell Law School&apos;s Legal Information Institute
        </a>
        , which independently confirms the adult, minor-exception, and
        deceased-patient rules described in this guide.
        <br />
        [2]{" "}
        <a
          href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.510"
          target="_blank"
          rel="noopener noreferrer"
        >
          eCFR, 45 CFR 164.510(b), uses and disclosures requiring an
          opportunity to agree or object.
        </a>{" "}
        Accessed September 2026.
        <br />
        [3]{" "}
        <a
          href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.502"
          target="_blank"
          rel="noopener noreferrer"
        >
          eCFR, 45 CFR 164.502(g), personal representatives.
        </a>{" "}
        Accessed September 2026.
        <br />
        [4]{" "}
        <a
          href="https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-C/part-164/subpart-E/section-164.524"
          target="_blank"
          rel="noopener noreferrer"
        >
          eCFR, 45 CFR 164.524, right of access to protected health
          information.
        </a>{" "}
        Accessed September 2026.
        <br />
        [5]{" "}
        <a
          href="https://www.hipaajournal.com/does-hipaa-apply-to-spouses/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HIPAA Journal, &ldquo;Does HIPAA Apply to Spouses?&rdquo;
        </a>{" "}
        Accessed September 2026.
        <br />
        [6]{" "}
        <a
          href="https://conaelderlaw.com/family-health-care-decisions-act/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cona Elder Law, on New York&apos;s Family Health Care Decisions
          Act.
        </a>{" "}
        Accessed September 2026.
        <br />
        [7]{" "}
        <a
          href="https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          AARP &amp; National Alliance for Caregiving, &ldquo;Caregiving in
          the U.S. 2025.&rdquo;
        </a>{" "}
        Accessed September 2026.
        <br />
        [8]{" "}
        <a
          href="https://www.healthit.gov/data/data-briefs/individuals-access-and-use-patient-portals-and-smartphone-health-apps-2024"
          target="_blank"
          rel="noopener noreferrer"
        >
          ONC/ASTP, &ldquo;Individuals&apos; Access and Use of Patient
          Portals and Smartphone Health Apps, 2024&rdquo; data brief.
        </a>{" "}
        Accessed September 2026.
        <br />
        [9]{" "}
        <a
          href="https://www.aarp.org/pri/topics/ltss/family-caregiving/caregiving-in-the-united-states/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AARP &amp; National Alliance for Caregiving, &ldquo;Caregiving in
          the U.S. 2020,&rdquo; caregivers of adults 50+.
        </a>{" "}
        Accessed September 2026.
        <br />
        [10]{" "}
        <a
          href="https://www.tcklaw.com/healthcare-power-of-attorney-vs-financial-power-of-attorney/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TCK Law, &ldquo;Healthcare Power of Attorney vs. Financial Power of
          Attorney.&rdquo;
        </a>{" "}
        Accessed September 2026.
        <br />
        [11]{" "}
        <a
          href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2017.0175"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yadav et al., &ldquo;Approximately One In Three US Adults Completes
          Any Type Of Advance Directive For End-Of-Life Care,&rdquo; Health
          Affairs, 2017.
        </a>{" "}
        Accessed September 2026.
        <br />
        [12]{" "}
        <a
          href="https://www.healthyagingpoll.org/reports-more/report/older-adults-experiences-advance-care-planning"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Michigan National Poll on Healthy Aging, advance care
          planning report, 2024.
        </a>{" "}
        Accessed September 2026.
        <br />
        [13]{" "}
        <a
          href="https://www.healthychildren.org/English/health-issues/conditions/prevention/Pages/parental-access-to-medical-records.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          American Academy of Pediatrics (HealthyChildren.org), &ldquo;Parental
          Access to a Teen&apos;s Medical Records.&rdquo;
        </a>{" "}
        Accessed September 2026.
        <br />
        [14]{" "}
        <a
          href="https://www.guttmacher.org/state-policy/explore/minors-access-sti-services"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guttmacher Institute, &ldquo;Minors&apos; Access to STI
          Services.&rdquo;
        </a>{" "}
        As of Aug. 1, 2026. Accessed September 2026.
        <br />
        [15]{" "}
        <a
          href="https://www.guttmacher.org/state-policy/explore/minors-access-contraceptive-services"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guttmacher Institute, &ldquo;Minors&apos; Access to Contraceptive
          Services.&rdquo;
        </a>{" "}
        As of Aug. 1, 2026. Accessed September 2026.
        <br />
        [16]{" "}
        <a
          href="https://www.guttmacher.org/state-policy/explore/overview-minors-consent-law"
          target="_blank"
          rel="noopener noreferrer"
        >
          Guttmacher Institute, &ldquo;An Overview of Minors&apos; Consent
          Law.&rdquo;
        </a>{" "}
        Accessed September 2026.
        <br />
        [17]{" "}
        <a
          href="https://www.adolescenthealth.org/Resources/Clinical-Care-Resources/Confidentiality.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Society for Adolescent Health and Medicine, confidential care
          resources.
        </a>{" "}
        Accessed September 2026.
        <br />
        [18]{" "}
        <a
          href="https://www.healthit.gov/topic/information-blocking"
          target="_blank"
          rel="noopener noreferrer"
        >
          HealthIT.gov (ONC/ASTP), &ldquo;Information Blocking.&rdquo;
        </a>{" "}
        Accessed September 2026.
        <br />
        [19]{" "}
        <a
          href="https://www.federalregister.gov/documents/2023/06/27/2023-13561/information-blocking-enforcement"
          target="_blank"
          rel="noopener noreferrer"
        >
          HHS Office of Inspector General, information-blocking civil
          monetary penalty final rule, Federal Register, 2023.
        </a>{" "}
        Accessed September 2026.
        <br />
        [20]{" "}
        <a
          href="https://www.opennotes.org/onc-federal-rule/"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenNotes, &ldquo;The Federal Rule on Information Blocking.&rdquo;
        </a>{" "}
        Accessed September 2026.
        <br />
        [21]{" "}
        <a
          href="https://www.hopkinsmedicine.org/patient-care/mychart/proxy-access"
          target="_blank"
          rel="noopener noreferrer"
        >
          Johns Hopkins Medicine, &ldquo;MyChart for Parents and Caregivers:
          Proxy Access.&rdquo;
        </a>{" "}
        Accessed September 2026.
        <br />
        [22]{" "}
        <a
          href="https://healthit.gov/data/data-briefs/hospital-use-apis-enable-data-sharing-between-ehrs-and-apps/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ONC/ASTP, &ldquo;Hospital Use of APIs to Enable Data Sharing Between
          EHRs and Apps&rdquo; data brief, 2023 data.
        </a>{" "}
        Accessed September 2026.
        <br />
        [23]{" "}
        <a
          href="https://support.apple.com/guide/healthregister/health-records-directory-listing-faq-apd261e67474/web"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple, Health Records Directory Listing FAQ.
        </a>{" "}
        Accessed September 2026.
        <br />
        [24]{" "}
        <a
          href="https://www.cms.gov/priorities/key-initiatives/burden-reduction/interoperability/policies-and-regulations/patient-access-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          CMS, Patient Access API FAQ.
        </a>{" "}
        Accessed September 2026.
        <br />
        [25]{" "}
        <a
          href="https://support.apple.com/en-us/HT207021"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple, &ldquo;Set up and view your Medical ID.&rdquo;
        </a>{" "}
        Accessed September 2026.
        <br />
        [26]{" "}
        <a
          href="https://www.aarp.org/caregiving/health/info-2021/health-information-privacy-tips.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          AARP, &ldquo;Health Information Privacy Tips for Caregivers.&rdquo;
        </a>{" "}
        Accessed September 2026.
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default SharedFamilyMedicalRecord;
