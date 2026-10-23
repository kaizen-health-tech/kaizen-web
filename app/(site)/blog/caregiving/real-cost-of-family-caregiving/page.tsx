// Committed as a draft: blogData has `draft: true` for this URL, so the page
// returns 404 and stays out of listings and sitemaps. To publish, delete that
// flag, then:
//  1. re-check on the publish date: Credit for Caring Act status (Congress.gov),
//     and that every figure below still matches its source page
import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import KeyTakeaways from "@/components/Blog/content/KeyTakeaways";
import StatTrio from "@/components/Blog/content/StatTrio";
import NumberedPoints from "@/components/Blog/content/NumberedPoints";
import ProductCallout from "@/components/Blog/content/ProductCallout";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "How much does the average family caregiver spend each year?",
    answer:
      "AARP and the National Alliance for Caregiving put the average at about $7,200 a year in their 2025 report. AARP's more detailed 2021 out-of-pocket study found a typical $7,242 a year, about 26% of a caregiver's income. Those figures cover spending only. They do not include lost wages or missed retirement contributions.",
  },
  {
    question: "How much is unpaid family caregiving worth?",
    answer:
      "AARP's Public Policy Institute valued unpaid family caregiving at $1.01 trillion for 2024. That is 49.5 billion hours of care at an average of $20.41 an hour. It is an estimate of what the labor would be worth at market wages, not money that changes hands.",
  },
  {
    question: "Is a nursing home or home care more expensive?",
    answer:
      "It depends on the hours. In the 2025 CareScout Cost of Care Survey, the national median for a non-medical in-home caregiver was $35 an hour, or $80,080 a year at 44 hours a week. A semi-private nursing home room was $114,975 a year, and assisted living was $74,400. These are national medians, and prices vary widely by region, so check rates for your own area.",
  },
  {
    question: "Is it normal to resent the person you care for?",
    answer:
      "Yes. Resentment and guilt are common in caregivers and do not mean you love the person less. They are a reasonable response to losing time, money and sleep. If the feelings are constant or you are struggling to cope, talk to your own doctor or a caregiver support group. Our article on grieving the years caregiving takes covers the research and where to find support.",
  },
  {
    question: "Can I be paid to care for a family member?",
    answer:
      "Sometimes. Some state Medicaid self-directed programs let participants hire relatives as paid assistants, and the VA pays a monthly stipend to primary family caregivers of eligible veterans. Eligibility depends on the care recipient's needs, income and state. AARP reports that 11.2 million family caregivers receive some compensation, and the share varies a great deal by state.",
  },
];

const sections = [
  { id: "three-costs", label: "Three costs, not one" },
  { id: "what-you-pay", label: "Ledger one: what you pay" },
  { id: "what-you-dont-earn", label: "Ledger two: what you don't earn" },
  { id: "what-it-costs-to-buy", label: "What the same care costs to buy" },
  { id: "what-it-costs-your-health", label: "Ledger three: your health" },
  { id: "the-self-on-hold", label: "The self you put on hold" },
  { id: "one-person-knows-everything", label: "When one person knows everything" },
  { id: "what-reduces-the-cost", label: "What reduces each cost" },
  { id: "your-first-week", label: "Your first week" },
];

const spending = [
  { label: "General household expenses", value: 50, note: "about half" },
  { label: "Rent or mortgage help for the person cared for", value: 30 },
  { label: "Home modifications", value: 21 },
];

const paidCare = [
  { label: "Adult day health care (5 days a week)", value: 24700 },
  { label: "Assisted living", value: 74400 },
  { label: "Non-medical in-home caregiver (44 hours a week)", value: 80080 },
  { label: "Nursing home, semi-private room", value: 114975 },
  { label: "Nursing home, private room", value: 129575 },
];

const maxPaidCare = Math.max(...paidCare.map((item) => item.value));

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Cost of Family Caregiving",
  description:
    "Family caregivers spend about $7,200 a year, give up income and savings, and often neglect their own health. What each cost looks like, with sources.",
  path: "/blog/caregiving/real-cost-of-family-caregiving",
  type: "article",
  image: "/images/blog/real-cost-of-family-caregiving-hero.png",
});

const RealCostOfFamilyCaregiving = () => {
  return (
    <ArticleLayout
      title="The Real Cost of Family Caregiving: Money, Health, and the Self You Put on Hold"
      description="Caring for a parent costs money, income and health, and most families count only the first. Here is what each cost looks like, what the same care costs to buy, and what helps."
      image="/images/blog/real-cost-of-family-caregiving-hero.png"
      imageAlt="A woman at a kitchen table looking out the window, with household bills and a calculator, a laptop and work lanyard, and a pill organizer and blood pressure monitor spread in front of her"
      datePublished="2026-10-29"
      url="/blog/caregiving/real-cost-of-family-caregiving"
      categoryKey="aging-well"
      authorCredentials="Reviewed by the Kaizen Health editorial team"
      readTime="14 min read"
      tags={["Aging well", "Caregiving"]}
      sections={sections}
    >
      <KeyTakeaways
        items={[
          "Caregiving has three costs: what you pay, what you do not earn, and what it does to your health. Most families count only the first.",
          "AARP and the National Alliance for Caregiving put average out-of-pocket spending at about $7,200 a year. Six in ten caregivers are also employed, and half of those report disruptions at work.",
          "AARP values unpaid family care at $1.01 trillion a year. Bought at market rates, 44 hours a week of in-home help has a national median of $80,080 a year.",
          "One in five caregivers rate their own health as fair or poor. Nearly one in four say caregiving makes it hard to look after themselves.",
          "The costs compound when one person holds all the knowledge about a parent's care. Writing it down where the family can read it spreads the load.",
        ]}
      />

      <p>
        About 63 million Americans, nearly one in four adults, provided care for
        someone in the past year, according to the{" "}
        <Link
          href="https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers.html"
          target="_blank"
        >
          2025 AARP and National Alliance for Caregiving report
        </Link>
        . That is 20 million more than a decade earlier. If you are one of them,
        you already know the cost is more than the receipts.
      </p>
      <p>
        This guide adds up the whole bill. It covers the money you spend, the
        income you do not earn, and the toll on your health. It also prices
        the same care at market rates, because that is the number that makes
        the others easier to see. It ends with a plan for your first week, for
        when the total feels like too much to look at.
      </p>

      <HeadingWithAnchor id="three-costs">
        Three costs, not one
      </HeadingWithAnchor>
      <p>
        Families usually count caregiving the way they count a trip: by adding
        up what they paid. That is the smallest of three ledgers.
      </p>
      <StatTrio
        stats={[
          {
            figure: "~$7,200",
            caption:
              "Average yearly out-of-pocket spending by a family caregiver (AARP and NAC, 2025)",
          },
          {
            figure: "6 in 10",
            caption:
              "Caregivers who are also employed; half of them report disruptions at work (AARP and NAC, 2025)",
          },
          {
            figure: "1 in 5",
            caption:
              "Caregivers who rate their own health as fair or poor (AARP and NAC, 2025)",
          },
        ]}
      />
      <p>
        The first number is cash. The second is income and career. The third is
        you. The sections below take them in that order, then look at what
        helps.
      </p>

      <HeadingWithAnchor id="what-you-pay">
        Ledger one: what you pay
      </HeadingWithAnchor>
      <p>
        AARP&rsquo;s{" "}
        <Link
          href="https://www.aarp.org/pri/topics/ltss/family-caregiving/family-caregivers-cost-survey/"
          target="_blank"
        >
          2021 out-of-pocket costs study
        </Link>{" "}
        surveyed about 2,400 family caregivers and found a typical $7,242 a
        year, or about 26% of their income. The 2025 report found a similar
        average, roughly $7,200. These are two separate AARP studies from
        different years, not two measurements of the same thing, and they point
        the same way.
      </p>
      <p>
        The surprise is what the money goes to. In the 2021 study, about half
        of caregivers said they used their own money for household expenses.
        Thirty percent covered rent or mortgage payments for the person they
        care for, and 21% paid for home modifications such as grab bars or a
        ramp. Medical costs accounted for just 17% of caregiver spending. Only
        5% of caregivers reported no expenses at all.
      </p>
      <figure className="my-9 rounded-2xl bg-lavender p-6">
        <figcaption className="mb-4 text-lg font-semibold text-midnight">
          Share of caregivers who paid for each, 2021
        </figcaption>
        <ul className="m-0 flex list-none flex-col gap-4 p-0">
          {spending.map((item) => (
            <li key={item.label}>
              <div className="mb-1 flex items-baseline justify-between gap-4 text-[17px] text-text-body">
                <span>{item.label}</span>
                <span className="font-semibold text-midnight">
                  {item.note ?? `${item.value}%`}
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-white">
                <div
                  className="h-3 rounded-full bg-violet"
                  style={{ width: `${item.value}%` }}
                  role="presentation"
                />
              </div>
            </li>
          ))}
        </ul>
        <p className="mb-0 mt-4 text-sm text-graphite">
          Categories overlap, so they add up to more than 100%. Medical costs
          are not shown: AARP reports them as 17% of caregiver spending, a
          different measure. Source: AARP 2021 Caregiving Out-of-Pocket Costs
          Study.
        </p>
      </figure>
      <p>
        There is a harder number in the 2025 report. Nearly half of caregivers
        had at least one major financial impact, such as taking on debt,
        stopping saving, or being unable to afford food. Spending is the visible
        part of a larger squeeze.
      </p>

      <HeadingWithAnchor id="what-you-dont-earn">
        Ledger two: what you don&rsquo;t earn
      </HeadingWithAnchor>
      <p>
        Six in ten caregivers hold a job. Half of those say caregiving
        disrupts their work: arriving late, leaving early, cutting hours or
        taking leave. In AARP&rsquo;s 2021 study, about a third of caregivers
        reported two or more of these work strains, with an average cost of
        $10,525 a year. That is a larger number than the typical out-of-pocket
        spend, and it never appears on a receipt.
      </p>
      <p>
        The damage does not stop when the strain does. Lower pay today means
        lower retirement contributions, a smaller employer match and a weaker
        earnings record. A frequently cited{" "}
        <Link
          href="https://www.aarp.org/content/dam/aarp/livable-communities/old-learn/health/metlife-study-of-caregiving-costs-to-working-caregivers-2011-aarp.pdf"
          target="_blank"
        >
          2011 MetLife study
        </Link>{" "}
        with the National Alliance for Caregiving estimated a lifetime loss of $303,880
        in wages, Social Security and pension value for a caregiver aged 50 or
        older who leaves work. That study is old and models people who stop
        working entirely, so treat it as an order of magnitude, not a quote.
        The retirement math is worked through in our article on{" "}
        <Link href="/blog/caregiving/retirement-cost-of-caregiving">
          the hidden retirement cost of caregiving
        </Link>
        , and you can run your own numbers in the free{" "}
        <Link href="/tools/caregiver-cost-calculator">
          caregiver cost calculator
        </Link>
        .
      </p>
      <p>
        Caregiving also rarely arrives in an empty calendar. Nearly one in
        three caregivers is raising a child under 18, and among caregivers
        under 50 the figure is 47%. Every dollar and hour in that household has
        several claimants.
      </p>

      <HeadingWithAnchor id="what-it-costs-to-buy">
        What the same care costs to buy
      </HeadingWithAnchor>
      <p>
        The clearest way to see what family caregivers give is to price it.
        AARP&rsquo;s Public Policy Institute estimates that unpaid family
        caregiving was worth{" "}
        <Link
          href="https://www.aarp.org/pri/topics/ltss/family-caregiving/valuing-the-invaluable-2026-update/"
          target="_blank"
        >
          $1.01 trillion in 2024
        </Link>
        : 49.5 billion hours of care valued at an average $20.41 an hour. That
        is an economic estimate, not money anyone is paid.
      </p>
      <p>
        You can do the same sum for yourself. At AARP&rsquo;s rate, 20 hours of
        care a week is about $21,200 a year (20 hours x 52 weeks x $20.41).
        That is an illustration using the national average rate, not a
        measure of your situation. Your hours, your region and the kind of care
        all change it.
      </p>
      <p>
        For comparison, here is what families pay when they buy care. These
        are national medians from the{" "}
        <Link
          href="https://investor.genworth.com/news-events/press-releases/detail/1054/carescout-releases-2025-cost-of-care-survey-results"
          target="_blank"
        >
          2025 CareScout Cost of Care Survey
        </Link>
        , which collected more than 25,000 rates between July and November
        2025.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3">Type of care</th>
              <th className="border border-gray-300 px-4 py-3">National median rate</th>
              <th className="border border-gray-300 px-4 py-3">Annual cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Non-medical in-home caregiver
              </td>
              <td className="border border-gray-300 px-4 py-3">$35 per hour</td>
              <td className="border border-gray-300 px-4 py-3">
                $80,080 (44 hours a week)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Adult day health care
              </td>
              <td className="border border-gray-300 px-4 py-3">$95 per day</td>
              <td className="border border-gray-300 px-4 py-3">
                $24,700 (5 days a week)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Assisted living
              </td>
              <td className="border border-gray-300 px-4 py-3">$6,200 per month</td>
              <td className="border border-gray-300 px-4 py-3">$74,400</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Nursing home, semi-private room
              </td>
              <td className="border border-gray-300 px-4 py-3">$315 per day</td>
              <td className="border border-gray-300 px-4 py-3">$114,975</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">
                Nursing home, private room
              </td>
              <td className="border border-gray-300 px-4 py-3">$355 per day</td>
              <td className="border border-gray-300 px-4 py-3">$129,575</td>
            </tr>
          </tbody>
        </table>
      </div>
      <figure className="my-9 rounded-2xl bg-lavender p-6">
        <figcaption className="mb-4 text-lg font-semibold text-midnight">
          Annual cost of paid care, national medians, 2025
        </figcaption>
        <ul className="m-0 flex list-none flex-col gap-4 p-0">
          {paidCare.map((item) => (
            <li key={item.label}>
              <div className="mb-1 flex items-baseline justify-between gap-4 text-[17px] text-text-body">
                <span>{item.label}</span>
                <span className="font-semibold text-midnight">
                  ${item.value.toLocaleString("en-US")}
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-white">
                <div
                  className="h-3 rounded-full bg-violet"
                  style={{ width: `${(item.value / maxPaidCare) * 100}%` }}
                  role="presentation"
                />
              </div>
            </li>
          ))}
        </ul>
        <p className="mb-0 mt-4 text-sm text-graphite">
          Source: CareScout 2025 Cost of Care Survey. Prices vary widely by
          region.
        </p>
      </figure>
      <p>
        Full-time paid care is expensive, and most families cannot buy it. But
        a few paid hours a week, enough to keep a caregiver at their job, costs
        far less than the full amount. That comparison is the one families
        tend to skip.
      </p>

      <HeadingWithAnchor id="what-it-costs-your-health">
        Ledger three: what it costs your health
      </HeadingWithAnchor>
      <p>
        The third ledger is the hardest to price. In the 2025 AARP and NAC
        survey of 6,858 caregivers:
      </p>
      <ul>
        <li>1 in 5 rated their own health as fair or poor.</li>
        <li>
          Nearly 1 in 4 said they struggle to care for their own health because
          of caregiving.
        </li>
        <li>Nearly 1 in 4 reported feeling socially isolated.</li>
        <li>
          Reports of emotional stress have risen since 2020, though the survey
          release gives no figure for it.
        </li>
      </ul>
      <p>
        The load is heavy and often unplanned. Nearly one in four caregivers
        provides 40 or more hours of care a week, a third have been caregiving
        for five years or more, and over half manage complex medical or nursing
        tasks. Only about one in five has had formal training on those tasks.
      </p>
      <p>
        This is not a reason to avoid caregiving. It is a reason to treat your
        own health as part of the plan, not what gives way first. Your own
        checkups, sleep and time with friends are not extras. They are what
        keeps the care going.
      </p>

      <HeadingWithAnchor id="the-self-on-hold">
        The cost with no price tag: the self you put on hold
      </HeadingWithAnchor>
      <p>
        The last cost does not fit in a ledger. Caregivers put plans, work they
        liked, hobbies and friendships on hold, sometimes for years. Many feel
        resentment, then guilt about the resentment. Both are common, and
        neither means you care less.
      </p>
      <p>
        Researchers describe this as a real kind of grief, with clinical names
        and known patterns. If it sounds familiar, our article on{" "}
        <Link href="/blog/caregiving/grieving-the-years-lost-to-caregiving">
          grieving the years caregiving took from you
        </Link>{" "}
        covers what the research says and where to find support.
      </p>

      <HeadingWithAnchor id="one-person-knows-everything">
        Why the cost compounds: when one person knows everything
      </HeadingWithAnchor>
      <p>
        There is a pattern in how caregiving falls on families. One person
        becomes the one who knows. They know which pills their parent takes and
        when, when the next appointment is, and what the nurse said last
        Tuesday. When anyone else has a question, they call that person.
      </p>
      <p>
        Here is how it often plays out, told as a composite rather than one
        family&rsquo;s story. A parent needs help at home. Three relatives pitch
        in, but the details live in one relative&rsquo;s head. She is always on
        call. She cannot take a weekend off because no one else knows enough to
        step in. The others want to help and do not know what to take on,
        because none of it is written down.
      </p>
      <p>
        That is a cost in all three ledgers. It pushes one person toward cutting
        work hours, spending more of their own money, and neglecting their own
        health. The fix is dull and works: get what is in one person&rsquo;s
        head onto a page the whole family can read.
      </p>
      <p>A short weekly handoff covers most of it:</p>
      <NumberedPoints
        points={[
          {
            lead: "Medications.",
            text: "What each one is, the dose, and who gave or filled it this week.",
          },
          {
            lead: "Appointments.",
            text: "What is coming up, who is taking your parent, and what the last visit changed.",
          },
          {
            lead: "What your parent can and cannot do.",
            text: "Which tasks they still manage on their own and where they now need help. This changes over time and is the first thing a new helper needs to know.",
          },
          {
            lead: "What is not covered.",
            text: "Tasks no one has picked up, such as bills, rides or checking in on days. A gap that is written down is easier to fill.",
          },
        ]}
      />
      <ProductCallout
        body="In Kaizen, you can write a note that sits with a parent's other health records, such as what they can still do on their own and where they need help. You can edit the notes you create, and every member of the group you share it with can read it."
        buttonLabel="Get the Kaizen app"
      />
      <p>
        If you are starting from paper, our guide to{" "}
        <Link href="/blog/family-history/organizing-medical-records">
          organizing medical records for an aging parent
        </Link>{" "}
        covers a setup that works on paper, online, or both. For how access
        works across a family, see{" "}
        <Link href="/blog/family-history/shared-family-medical-record">
          the shared family medical record
        </Link>
        .
      </p>

      <HeadingWithAnchor id="what-reduces-the-cost">
        What reduces each cost
      </HeadingWithAnchor>
      <p>
        No single program removes the cost of caregiving. Each ledger does have
        something that helps.
      </p>
      <p>
        <strong>Money and work.</strong> Two programs pay family caregivers
        directly. Under Medicaid&rsquo;s{" "}
        <Link
          href="https://www.medicaid.gov/medicaid/home-community-based-services/home-community-based-services-authorities/self-directed-personal-assistant-services-1915-j"
          target="_blank"
        >
          self-directed personal assistance option
        </Link>
        , a state can let participants hire relatives, such as a spouse or
        parent, as paid assistants, and each state decides whether to offer it.
        The VA&rsquo;s{" "}
        <Link
          href="https://www.caregiver.va.gov/support/support_benefits.asp"
          target="_blank"
        >
          Program of Comprehensive Assistance for Family Caregivers
        </Link>{" "}
        pays a monthly stipend to primary family caregivers of eligible
        veterans. Among other requirements, the veteran needs a
        service-connected disability rating of 70% or more. AARP reports that 11.2 million family caregivers
        receive some compensation, and{" "}
        <Link
          href="https://www.aarp.org/press/releases/2025-10-28-new-data-expose-financial-strain-of-family-caregiving.html"
          target="_blank"
        >
          the share varies by state
        </Link>
        , from 10% in Iowa to 28% in New Jersey. At the time of writing there is no general federal
        caregiver tax credit. The bipartisan Credit for Caring Act, which would
        create one, has been introduced but has not become law. Check{" "}
        <Link href="https://www.congress.gov/" target="_blank">
          Congress.gov
        </Link>{" "}
        for its current status.
      </p>
      <p>
        <strong>Time and rest.</strong> Almost 40% of caregivers in the 2025
        survey said respite services would help. The{" "}
        <Link
          href="https://acl.gov/programs/support-caregivers/national-family-caregiver-support-program"
          target="_blank"
        >
          National Family Caregiver Support Program
        </Link>{" "}
        funds information, counseling, support groups, caregiver training and
        respite care through grants to states, and the{" "}
        <Link href="https://eldercare.acl.gov/" target="_blank">
          Eldercare Locator
        </Link>{" "}
        can point you to your area agency on aging.
      </p>
      <p>
        <strong>Support.</strong> A caregiver group, in person or online, helps
        with the isolation that nearly one in four caregivers report. The{" "}
        <Link href="https://www.caregiver.org/" target="_blank">
          Family Caregiver Alliance
        </Link>{" "}
        publishes guides for family caregivers, and the{" "}
        <Link href="https://www.caregiveraction.org/help-desk/" target="_blank">
          Caregiver Action Network
        </Link>{" "}
        runs a help desk.
      </p>
      <p>
        This is general information, not financial, legal or medical advice.
        Rules and eligibility vary by state, so confirm details with the
        program or a professional before you decide.
      </p>

      <HeadingWithAnchor id="your-first-week">
        Your first week: a short plan
      </HeadingWithAnchor>
      <p>
        If the total feels like too much, do not try to fix it all. Pick this
        week&rsquo;s steps.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Write down what you spent this month.",
            text: "Include gas, groceries you bought for your parent, supplies and any hours of work you missed. An accurate number is what lets you ask a sibling to share the cost.",
          },
          {
            lead: "Run the numbers on your own hours.",
            text: "The caregiver cost calculator shows what a reduction in work hours could cost your retirement, and what keeping a few paid hours could protect.",
          },
          {
            lead: "List every task and who does it.",
            text: "Include the invisible ones, such as calling the pharmacy or tracking appointments. Then see which ones someone else could take.",
          },
          {
            lead: "Put medications and appointments in one shared place.",
            text: "A shared note, a shared document or a shared record all work. The test is whether someone else could step in tomorrow.",
          },
          {
            lead: "Pick one relief step.",
            text: "Call the Eldercare Locator, ask your parent's doctor about respite, or find one caregiver group to try. One step is enough for a week.",
          },
        ]}
      />
      <p>
        None of this makes the cost disappear. Naming it is the first move
        toward sharing it, and families that share it have more options than
        families where one person carries everything. For the money side in
        detail, start with{" "}
        <Link href="/blog/caregiving/retirement-cost-of-caregiving">
          the hidden retirement cost of caregiving
        </Link>
        . For the emotional side, read{" "}
        <Link href="/blog/caregiving/grieving-the-years-lost-to-caregiving">
          grieving the years caregiving took
        </Link>
        .
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default RealCostOfFamilyCaregiving;
