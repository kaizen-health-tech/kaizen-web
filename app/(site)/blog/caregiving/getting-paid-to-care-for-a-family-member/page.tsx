// Committed as a draft: blogData has `draft: true` for this URL, so the page
// returns 404 and stays out of listings and sitemaps. To publish, delete that
// flag, then:
//  1. hero image is final (generated 2026-10-25)
//  2. re-check on the publish date that every figure below still matches its
//     source page. KFF numbers are from the January 2026 report on a survey
//     fielded April to July 2025; VA numbers and rules change. The VA
//     Veteran-Directed Care fact sheet is dated February 2022
//  3. fact-checked 2026-10-25 against primary pages (see the report in the
//     session). Medicare coverage, the CMS legally-responsible definition, VA
//     Veteran-Directed Care and the Open Enrollment dates are all confirmed
import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import KeyTakeaways from "@/components/Blog/content/KeyTakeaways";
import StatTrio from "@/components/Blog/content/StatTrio";
import NumberedPoints from "@/components/Blog/content/NumberedPoints";
import WhenPublished from "@/components/Blog/WhenPublished";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Can I get paid to take care of my mother or father?",
    answer:
      "Sometimes. Every state that responded to KFF's 2025 survey pays family caregivers through at least one Medicaid home care program, and 43 of 45 states with waivers for older adults and people with physical disabilities allow it. The person you care for has to qualify for the program, and each state sets its own rules. Start by calling your state Medicaid agency or your area agency on aging.",
  },
  {
    question: "Does Medicare pay family caregivers?",
    answer:
      "No. Original Medicare generally does not pay for custodial care, which is help with bathing, dressing, eating or using the bathroom when that is the only care a person needs. It can cover home health aide visits when a person also needs skilled care such as nursing or therapy. Medicaid, the VA and some long-term care insurance policies are the usual routes to paid care.",
  },
  {
    question: "Can a spouse be paid as a caregiver?",
    answer:
      "Often not, but it depends on the program. Under a regular Medicaid state plan, federal rules bar payment for services provided by spouses and parents of minor children. In waiver programs, 44 states allow payment to legally responsible relatives, usually only for extraordinary care that goes beyond what a spouse would ordinarily do. Ask the program how it treats spouses before you plan around the income.",
  },
  {
    question: "Does the VA pay family caregivers?",
    answer:
      "It can. The VA's Program of Comprehensive Assistance for Family Caregivers pays a monthly stipend to a primary family caregiver. The veteran needs a service-connected disability rating of 70% or more and a need for in-person personal care for at least six continuous months. Other VA programs help with care costs but work differently, so ask the VA Caregiver Support Program which one fits.",
  },
  {
    question: "Will being paid change how the family splits the work?",
    answer:
      "It can, so talk about it before you start. A paid caregiver often takes on more hours, and siblings may step back because the job now looks covered. Agree in writing which tasks are yours, which are shared and how you will each be updated. Pay is set by the program and is often modest.",
  },
];

const sections = [
  { id: "short-answer", label: "The short answer" },
  { id: "what-medicare-covers", label: "What Medicare does not cover" },
  { id: "medicaid", label: "Medicaid: the main route" },
  { id: "who-can-be-paid", label: "Who can be paid, and who often cannot" },
  { id: "va", label: "VA programs for veterans" },
  { id: "what-the-pay-looks-like", label: "What the pay looks like" },
  { id: "how-to-find-out", label: "How to find out what your state offers" },
  { id: "before-you-say-yes", label: "Before you say yes" },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Get Paid to Care for a Family Member",
  description:
    "Medicaid, VA and state programs can pay a family caregiver, but states set the rules and the person you care for must qualify. How to find out what applies.",
  path: "/blog/caregiving/getting-paid-to-care-for-a-family-member",
  type: "article",
  image: "/images/blog/getting-paid-to-care-for-a-family-member-hero.png",
});

const GettingPaidToCareForAFamilyMember = () => {
  return (
    <ArticleLayout
      title="Getting Paid to Care for a Family Member: Medicaid, VA, and State Programs in 2026"
      description="Medicaid, VA and state programs can pay a family caregiver, but the rules are set by state and the person you care for must qualify. Here is how to find out what applies to you."
      image="/images/blog/getting-paid-to-care-for-a-family-member-hero.png"
      imageAlt="A woman at a table in the evening light writing on a paper form, with a laptop, a folder and a mug beside her, while her elderly father reads in an armchair behind her"
      datePublished="2026-11-03"
      url="/blog/caregiving/getting-paid-to-care-for-a-family-member"
      categoryKey="aging-well"
      authorCredentials="Reviewed by the Kaizen Health editorial team"
      readTime="9 min read"
      tags={["Aging well", "Caregiving"]}
      sections={sections}
    >
      <KeyTakeaways
        items={[
          "Many families can be paid to care for a relative, but not through Medicare. Medicaid and the VA are the main routes, and each state runs its own rules.",
          "Every state that responded to KFF's 2025 survey pays family caregivers through at least one Medicaid home care program.",
          "The person you care for is the one who has to qualify. You are hired as their paid caregiver.",
          "Spouses are often excluded, or paid only for extraordinary care. Adult children and other relatives are allowed in more programs.",
          "Pay is set by the program and is often modest. Treat it as partial support until you know the rate.",
        ]}
      />

      <p>
        If you are caring for a parent, spouse or other relative, you may have
        wondered whether anyone pays you for it. Some programs do. Which ones depends on your state, the program and the person you care for, and most families never hear about the options until they have been caregiving for years.
      </p>
      <p>
        This guide explains the main routes, who they usually cover, what the pay looks like and the questions to ask. It cannot tell you what you qualify for, because your state and your family&rsquo;s situation decide that. Medicare
        Open Enrollment runs through December 7, which is a good moment to
        review the person&rsquo;s coverage at the same time.
      </p>

      <HeadingWithAnchor id="short-answer">The short answer</HeadingWithAnchor>
      <p>
        Three things pay family caregivers in the United States, plus some
        private arrangements. Medicaid home care programs are the biggest. VA
        programs pay some veterans&rsquo; caregivers. A few other sources, such as long-term care insurance the person already holds, may pay for care at home. Medicare generally does not.
      </p>
      <StatTrio
        stats={[
          {
            figure: "All responding states",
            caption:
              "Pay family caregivers through at least one Medicaid home care program (KFF, January 2026)",
          },
          {
            figure: "43 of 45",
            caption:
              "States with waivers for older adults and people with physical disabilities that allow payments to family caregivers (KFF, January 2026)",
          },
          {
            figure: "11.2 million",
            caption:
              "Family caregivers who receive some compensation (AARP, 2025)",
          },
        ]}
      />
      <p>
        That last number comes from{" "}
        <Link
          href="https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers.html"
          target="_blank"
        >
          AARP&rsquo;s 2025 caregiving report
        </Link>
        , and most caregivers are still unpaid. The share who are paid varies a
        great deal by state, from 10% in Iowa to 28% in New Jersey, according
        to{" "}
        <Link
          href="https://www.aarp.org/press/releases/2025-10-28-new-data-expose-financial-strain-of-family-caregiving.html"
          target="_blank"
        >
          AARP&rsquo;s state-level data
        </Link>
        .
      </p>

      <HeadingWithAnchor id="what-medicare-covers">
        What Medicare does not cover
      </HeadingWithAnchor>
      <p>
        Original Medicare generally does not pay for custodial care. That is
        help with bathing, dressing, eating, getting in and out of a chair, or
        using the bathroom, when it is the only care a person needs.{" "}
        <Link href="https://www.medicare.gov/coverage/nursing-home-care" target="_blank">
          Medicare.gov
        </Link>{" "}
        says the same about nursing homes: long stays are generally not
        covered unless the person needs skilled nursing. Home health aide
        visits can be covered when a person also needs skilled services such as
        nursing or therapy, but that is short-term help for a medical need, not
        a way to pay a relative for daily care.
      </p>
      <p>
        If the person has a Medicare Advantage plan, check the plan&rsquo;s own
        materials for any extra home benefits instead of assuming.
      </p>

      <HeadingWithAnchor id="medicaid">Medicaid: the main route</HeadingWithAnchor>
      <p>
        Medicaid is where most paid family caregiving comes from. KFF&rsquo;s{" "}
        <Link
          href="https://www.kff.org/medicaid/medicaids-home-care-support-for-family-caregivers-in-2025/"
          target="_blank"
        >
          2025 survey of state Medicaid programs
        </Link>
        , published in January 2026, found that every responding state pays
        family caregivers through one or more Medicaid home care programs. The
        survey went to states between April and July 2025, and Florida did not
        respond.
      </p>
      <p>
        Two things shape how it works.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "The person you care for has to qualify, not you.",
            text: "Medicaid home care programs have financial and care-need rules for the person receiving care. If that person qualifies and the program allows relatives, you can be hired as their paid caregiver. Qualifying rules vary by state.",
          },
          {
            lead: "Programs differ in how they let you hire family.",
            text: "Under the self-directed personal assistance option, the participant hires and trains their own assistants and sets the qualifications for them. Participation is voluntary, and each state decides whether to offer it and how widely. Other states pay relatives through waiver programs, and some use a model called structured family caregiving.",
          },
        ]}
      />
      <p>
        Federal details are on the{" "}
        <Link
          href="https://www.medicaid.gov/medicaid/home-community-based-services/home-community-based-services-authorities/self-directed-personal-assistant-services-1915-j"
          target="_blank"
        >
          Medicaid.gov page for self-directed personal assistance services
        </Link>
        . It is written for states, so use it as background, not a sign-up guide.
      </p>

      <HeadingWithAnchor id="who-can-be-paid">
        Who can be paid, and who often cannot
      </HeadingWithAnchor>
      <p>
        Whether a relative can be paid depends on how the person is related to the care recipient.
      </p>
      <ul>
        <li>
          <strong>Other relatives and friends.</strong> Every responding state
          allows payments to family and friends through at least one waiver.
          In regular state plan services, 24 states allow it.
        </li>
        <li>
          <strong>Spouses and parents of minor children.</strong> Medicaid calls
          these legally responsible relatives. In state plan services, federal
          rules bar payment for care by spouses and parents of minor
          children. In waiver programs, 44 states allow payment to legally
          responsible relatives, but generally only for extraordinary care,
          meaning care beyond what such a relative would ordinarily provide and
          that is necessary to keep the person healthy and out of an institution.
        </li>
        <li>
          <strong>Adult children.</strong> CMS gives the{" "}
          <Link
            href="https://www.medicaid.gov/medicaid/home-community-based-services/downloads/leveraging-family-care.pdf"
            target="_blank"
          >
            customary definition
          </Link>{" "}
          of a legally responsible individual as the parent of a minor child or
          a spouse. An adult child is not on that list, which is why many
          adult-child caregivers can be paid where a spouse cannot. States set
          their own rules, so confirm it locally.
        </li>
      </ul>
      <p>
        Coverage also depends on why the person needs care. Of the states with
        waivers for older adults and people with physical disabilities, 43 of
        45 allow payments to family caregivers. The figure is 47 of 47 for
        waivers serving people with intellectual or developmental disabilities,
        and 19 of 21 for traumatic brain and spinal cord injury waivers.
      </p>
      <p>
        A caution on the data: more than two-thirds of states could not tell
        KFF what share of their waiver participants actually receive paid
        family care.
      </p>

      <HeadingWithAnchor id="va">VA programs for veterans</HeadingWithAnchor>
      <p>
        If the person you care for is a veteran, there are VA programs to ask
        about. They work differently from each other, so do not assume one
        answer covers all of them.
      </p>
      <p>
        <strong>
          Program of Comprehensive Assistance for Family Caregivers (PCAFC).
        </strong>{" "}
        This one pays the caregiver directly. According to the{" "}
        <Link
          href="https://www.caregiver.va.gov/support/support_benefits.asp"
          target="_blank"
        >
          VA Caregiver Support Program
        </Link>
        , the veteran needs a single or combined service-connected disability
        rating of 70% or more and a need for in-person personal care services
        for at least six continuous months. A veteran can name one primary
        family caregiver and up to two secondary caregivers. The primary
        caregiver receives a monthly stipend, and the page lists other
        benefits: health coverage through CHAMPVA if the caregiver has no other
        insurance, mental health counseling, certain travel benefits and at
        least 30 days of respite care a year for the veteran. Secondary
        caregivers get mental health counseling and certain travel benefits.
        The VA says people already in the program have a transition period
        through September 30, 2028, before reassessment can lower a stipend,
        with some exceptions.
      </p>
      <p>
        <strong>Veteran-Directed Care.</strong> According to a{" "}
        <Link
          href="https://www.va.gov/geriatrics/docs/Veteran-Directed_Care.pdf"
          target="_blank"
        >
                    VA Veteran-Directed Care fact sheet
        </Link>{" "}
        (revised February 2022), veterans in this program get a flexible budget
        that the veteran or the family caregiver can manage, and they can hire
        their own personal care aides, who might include a family member or
        neighbor. The program is only available in certain locations, and a
        copay may be charged based on service-connected disability status. Ask
        a VA social worker whether it is offered near you.
      </p>
      <p>
        <strong>Aid and Attendance.</strong> This is an extra monthly amount
        added to a VA pension for qualified veterans and survivors who need
        help with everyday tasks. It goes to the veteran or survivor. The{" "}
        <Link href="https://www.va.gov/pension/aid-attendance-housebound/" target="_blank">
          VA Aid and Attendance page
        </Link>{" "}
        does not say whether it can be used to pay a relative, so ask the VA or
        an accredited representative before you plan on it.
      </p>
      <p>
        The number to call is the VA Caregiver Support Line, 1-855-260-3274.
      </p>

      <HeadingWithAnchor id="what-the-pay-looks-like">
        What the pay looks like
      </HeadingWithAnchor>
      <p>
        Do not assume the pay matches what the work is worth. Medicaid
        generally pays family caregivers hourly wages, like other home care
        workers, and the state sets the rates. We do not give a national figure because there is no good one. Ask your state for its rate.
      </p>
      <p>
        One model is different. In structured family caregiving, an agency
        receives a daily stipend and pays the family caregiver part of it.
        KFF reports that 11 states use this model, that family payments are
        around $40 to $70 a day, and that agencies usually pass on 50% to 65% of
        the stipend.
      </p>
      <p>
        <WhenPublished url="/blog/caregiving/real-cost-of-family-caregiving">
          Our guide to{" "}
          <Link href="/blog/caregiving/real-cost-of-family-caregiving">
            the real cost of family caregiving
          </Link>{" "}
          prices the same hours at market rates, so you can compare them with
          what a program pays.{" "}
        </WhenPublished>
        Run your own hours in the free{" "}
        <Link href="/tools/caregiver-cost-calculator">
          caregiver cost calculator
        </Link>{" "}
        to see what time off work could cost your retirement, and compare that
        with what a program would pay.
      </p>
      <p>
        Pay from any of these programs may count as income. Ask a tax
        professional how it will be treated for you before you plan around it.
      </p>

      <HeadingWithAnchor id="how-to-find-out">
        How to find out what your state offers
      </HeadingWithAnchor>
      <p>
        There is no single national application. These steps get you to the
        right office quickly.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Call the Eldercare Locator.",
            text: "It is a public service of the Administration for Community Living, at 1-800-677-1116. Ask for your area agency on aging, which can explain local programs.",
          },
          {
            lead: "Contact your state Medicaid agency.",
            text: "Ask for the home and community-based services office. Use the person's state, not yours, if they live somewhere else.",
          },
          {
            lead: "If the person is a veteran, call the VA.",
            text: "Use the Caregiver Support Line at 1-855-260-3274, or ask a VA social worker at the veteran's facility.",
          },
          {
            lead: "Ask about caregiver support too.",
            text: "The National Family Caregiver Support Program funds respite, counseling, training and support groups through grants to states. Your area agency on aging can tell you what is available locally.",
          },
        ]}
      />
      <p>Questions to ask the program, written down so you do not forget them:</p>
      <ul>
        <li>Does this program let a family member be the paid caregiver?</li>
        <li>
          Which relatives are allowed? Is a spouse or a parent of a minor
          child treated differently?
        </li>
        <li>What does the person I care for need to qualify, and how long does approval take?</li>
        <li>How many hours a week can be paid, and at what hourly rate?</li>
        <li>Is training or an agency required, and who handles payroll?</li>
        <li>Is there a waiting list?</li>
      </ul>
      <p>
        Many programs ask for proof of the person&rsquo;s care needs. Keeping
        diagnoses, medication lists and doctor notes in one place saves time at
        the application stage. Our guide to{" "}
        <Link href="/blog/family-history/organizing-medical-records">
          organizing medical records for an aging parent
        </Link>{" "}
        shows one way to do it.
      </p>

      <HeadingWithAnchor id="before-you-say-yes">
        Before you say yes
      </HeadingWithAnchor>
      <p>
        Getting paid solves one problem and can add others. Consider these before you sign anything.
      </p>
      <ul>
        <li>
          <strong>You may become an employee.</strong> Some programs treat the
          caregiver as a worker with timesheets, training and limits on paid
          hours. That is more structure than informal caring.
        </li>
        <li>
          <strong>The rest of the family may step back.</strong> When one person
          is paid, siblings sometimes assume the job is handled. Agree on who
          does what, in writing, and keep the person who is paid from becoming
          the only one who knows the details.
        </li>
        <li>
          <strong>Paid hours may not match real hours.</strong> A program may
          pay for fewer hours a week than you actually work. Count both.
        </li>
        <li>
          <strong>Medicaid has income and asset rules for the person.</strong>{" "}
          They vary by state. If you are thinking about moving money or
          property to help the person qualify, talk to an elder-law attorney
          first, because the rules about transfers are strict and vary by state.
        </li>
        <li>
          <strong>Do not leave your job lightly.</strong> If the program pays less
          than your salary, leaving work can cost your retirement more than the
          pay brings in now. Run the numbers first.
        </li>
      </ul>
      <p>
        This is general information, not financial, legal or tax advice. Rules
        and eligibility vary by state and change over time, so confirm details
        with the program or a professional before you decide.
      </p>
      <p>
        For the money side, our article on{" "}
        <Link href="/blog/caregiving/retirement-cost-of-caregiving">
          the hidden retirement cost of caregiving
        </Link>{" "}
        works through the numbers. For the emotional side, read{" "}
        <Link href="/blog/caregiving/grieving-the-years-lost-to-caregiving">
          grieving the years caregiving took
        </Link>
        .
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default GettingPaidToCareForAFamilyMember;
