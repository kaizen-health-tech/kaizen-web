import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import KeyTakeaways from "@/components/Blog/content/KeyTakeaways";
import StatTrio from "@/components/Blog/content/StatTrio";
import PullQuote from "@/components/Blog/content/PullQuote";
import NumberedPoints from "@/components/Blog/content/NumberedPoints";
import ProductCallout from "@/components/Blog/content/ProductCallout";
import InlineImage from "@/components/Blog/content/InlineImage";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "How much does family caregiving cost per year?",
    answer:
      "AARP's out-of-pocket costs study put the typical figure at $7,242 a year, which worked out to about 26% of a caregiver's income. Roughly half of that spending was not medical at all: household expenses, rent or mortgage help for the person receiving care, and home modifications made up the largest categories. Those numbers exclude the larger and less visible cost, which is lost wages and lost retirement contributions.",
  },
  {
    question: "How much retirement income can caregiving cost over a lifetime?",
    answer:
      "The most-cited estimate comes from a MetLife Mature Market Institute study with the National Alliance for Caregiving, which put the average lifetime loss for a caregiver aged 50 or older at $303,880 in combined wages, Social Security, and pension benefits: roughly $115,900 in wages, $137,980 in Social Security, and about $50,000 in pension value. Women averaged $324,044 and men $283,716. That study is from 2011, so treat it as an order of magnitude rather than a current price tag.",
  },
  {
    question:
      "Does taking time off work for caregiving reduce Social Security benefits?",
    answer:
      "It can. Social Security averages your 35 highest-earning years, indexed for wage growth, to produce the figure your benefit is calculated from. If you already have 35 or more solid earning years, a caregiving gap may not change much. If you have fewer than 35, each low or zero year pulls that average down directly. There is no credit in current law for time spent caregiving, though bills to create one have been introduced repeatedly without passing.",
  },
  {
    question: "Should I stop contributing to my 401(k) while caregiving?",
    answer:
      "Reducing contributions is sometimes unavoidable, but stopping entirely is worth resisting if there is any room at all, particularly if your employer matches. Contributing enough to capture the full match keeps money in the account that you are not paying for out of pocket. Three years of skipped $500-a-month contributions is $18,000 you did not save, but at a 7% annual return over 20 remaining years it is closer to $77,000 you will not have in retirement.",
  },
  {
    question: "Are there tax credits or benefits for family caregivers?",
    answer:
      "There is no general federal caregiver tax credit as of 2026. The bipartisan Credit for Caring Act, which would create a credit of up to $5,000 for working caregivers, has been reintroduced in Congress but has not become law. Depending on circumstances, families may qualify for Medicaid home and community-based services, state-level caregiver programs, VA caregiver benefits, or a long-term-care insurance policy the care recipient already holds. Eligibility varies enough that it is worth checking rather than assuming.",
  },
];

const sections = [
  {
    id: "what-caregiving-actually-costs",
    label: "What caregiving actually costs",
  },
  {
    id: "the-paycheck-you-never-receive",
    label: "The paycheck you never receive",
  },
  {
    id: "the-math-on-three-skipped-years",
    label: "The math on three skipped years",
  },
  {
    id: "why-a-career-break-keeps-costing",
    label: "Why a career break keeps costing",
  },
  {
    id: "the-social-security-connection",
    label: "The Social Security connection",
  },
  {
    id: "the-sandwich-generation-squeeze",
    label: "The sandwich generation squeeze",
  },
  {
    id: "dividing-the-cost-across-a-family",
    label: "Dividing the cost across a family",
  },
  {
    id: "protecting-your-own-retirement",
    label: "Protecting your own retirement",
  },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Retirement Cost of Caregiving",
  description:
    "Caring for an aging parent costs more than the receipts show. What the research says about lost wages, skipped retirement contributions, and Social Security.",
  path: "/blog/caregiving/retirement-cost-of-caregiving",
  type: "article",
  image: "/images/blog/cost-of-retirement.png",
});

const RetirementCostOfCaregiving = () => {
  return (
    <ArticleLayout
      title="The Hidden Retirement Cost of Caregiving"
      description="Caring for a parent is usually counted in receipts. The larger number is the income never earned and the retirement contributions never made — and that one keeps growing after the caregiving ends."
      image="/images/blog/cost-of-retirement.png"
      imageAlt="An adult child sitting with an aging parent, reviewing paperwork and bills at a kitchen table"
      datePublished="2026-08-09"
      url="/blog/caregiving/retirement-cost-of-caregiving"
      categoryKey="aging-well"
      readTime="9 min read"
      tags={["Aging well", "Caregiving"]}
      sections={sections}
    >
      <KeyTakeaways
        items={[
          "AARP found family caregivers spend about $7,242 a year out of pocket, roughly 26% of their income — and about half of that spending is household costs, not medical bills.",
          "The larger cost is usually invisible: reduced hours, unpaid leave, and paused retirement contributions during peak earning years.",
          "Three years of skipped $500-a-month contributions is $18,000 not saved, but closer to $77,000 not held in retirement 20 years later at a 7% return.",
          "Social Security averages your 35 highest-earning years, so caregiving gaps can lower the benefit itself if you have fewer than 35 strong years on record.",
          "The most useful family conversation happens before a crisis: who provides care, who pays, and how the primary caregiver keeps earning and saving.",
        ]}
      />

      <p>
        Caring for an aging parent is usually described as a labor of love, and
        it is. It is also a financial event, and one that gets measured badly.
        Families tend to count what caregiving costs the way they count a
        vacation: by adding up receipts. Prescriptions, gas, a grab bar in the
        shower, a few days of unpaid leave.
      </p>
      <p>
        The receipts are the smaller number. The larger one is the income a
        caregiver never earns and the retirement contributions they never make
        during what are often their highest-earning years. That cost does not
        stop when the caregiving stops. It compounds — or rather, it fails to.
      </p>

      <HeadingWithAnchor id="what-caregiving-actually-costs">
        What caregiving actually costs
      </HeadingWithAnchor>
      <p>
        The scale of unpaid family caregiving in the United States is easy to
        underestimate. A{" "}
        <Link
          href="https://www.aarp.org/press/releases/2025-07-24-new-report-reveals-crisis-point-for-americas-63-million-family-caregivers.html"
          target="_blank"
        >
          2025 report from AARP and the National Alliance for Caregiving
        </Link>{" "}
        found that 63 million Americans — nearly one in four adults — provided
        ongoing care to an adult or a child with a complex condition in the past
        year, up about 20 million from a decade earlier. Six in ten of those
        caregivers were also employed. AARP&rsquo;s companion{" "}
        <Link
          href="https://www.aarp.org/pri/topics/ltss/family-caregiving/valuing-the-invaluable-2026-update/"
          target="_blank"
        >
          Valuing the Invaluable analysis
        </Link>{" "}
        put the market value of that unpaid work at roughly $1.01 trillion a
        year across 49.5 billion hours.
      </p>
      <p>
        For an individual family, the out-of-pocket piece is more concrete.
        AARP&rsquo;s{" "}
        <Link
          href="https://www.aarp.org/pri/topics/ltss/family-caregiving/family-caregivers-cost-survey/"
          target="_blank"
        >
          out-of-pocket costs study
        </Link>{" "}
        put average annual caregiving spending at $7,242, or about 26% of a
        caregiver&rsquo;s income. The composition is the surprising part. Only
        about 17% of caregivers reported medical costs as a spending category.
        Half reported general household expenses, 30% helped with rent or
        mortgage payments, and 21% paid for home modifications. Only 5% reported
        no caregiving expenses at all.
      </p>

      <StatTrio
        stats={[
          {
            figure: "63M",
            caption:
              "Americans providing ongoing care for an adult or child with a complex condition",
          },
          {
            figure: "$7,242",
            caption:
              "Average annual out-of-pocket spending per family caregiver, about 26% of income",
          },
          {
            figure: "$303,880",
            caption:
              "Estimated average lifetime loss in wages, Social Security, and pension for caregivers 50+",
          },
        ]}
      />

      <p>
        That last figure comes from a different kind of accounting, and it is
        the one this article is about.
      </p>

      <HeadingWithAnchor id="the-paycheck-you-never-receive">
        The paycheck you never receive
      </HeadingWithAnchor>
      <p>
        The most-cited estimate of caregiving&rsquo;s long-run financial cost
        comes from the{" "}
        <Link
          href="https://www.aarp.org/content/dam/aarp/livable-communities/old-learn/health/metlife-study-of-caregiving-costs-to-working-caregivers-2011-aarp.pdf"
          target="_blank"
        >
          MetLife Study of Caregiving Costs to Working Caregivers
        </Link>
        , produced with the National Alliance for Caregiving and the Center for
        Long Term Care Research and Policy. It estimated that a caregiver aged
        50 or older who leaves the workforce to care for a parent loses an
        average of $303,880 over a lifetime: about $115,900 in wages, $137,980
        in Social Security benefits, and conservatively $50,000 in pension
        value. Women averaged $324,044; men, $283,716.
      </p>
      <p>
        Two caveats matter. That study is from 2011, and it models people who
        leave work entirely, not everyone who cuts back. Treat it as an order of
        magnitude rather than a quote. What it establishes is the shape of the
        problem: in that estimate, lost wages are the smallest of the three
        components. Social Security and pension effects — the parts nobody sees
        until decades later — were more than half the total.
      </p>
      <p>
        Consider someone earning $75,000 who drops to $60,000 for three years to
        manage a parent&rsquo;s care. The obvious cost is $45,000 in forgone
        wages. The less obvious costs stack on top of it: a smaller 401(k)
        contribution base, a smaller employer match, three years of missed raise
        compounding, and three weaker years in the earnings record Social
        Security will eventually average.
      </p>

      <PullQuote quote="This research makes painfully clear that family caregiving is no longer a looming crisis — it's a daily reality." />

      <p>
        That is Jason Resendez, president of the National Alliance for
        Caregiving, on the 2025 findings. The everyday-ness is the point: the
        financial damage rarely arrives as one catastrophic bill. It arrives as
        a series of individually reasonable decisions to work a little less.
      </p>

      <HeadingWithAnchor id="the-math-on-three-skipped-years">
        The math on three skipped years
      </HeadingWithAnchor>
      <p>
        Take the single most common adjustment: pausing retirement
        contributions. Suppose a caregiver normally puts $500 a month into a
        401(k) and stops for three years.
      </p>
      <p>
        The contributions not made total $18,000. That is the number most people
        have in mind, and it is the wrong one. Assuming a 7% average annual
        return, those contributions would have been worth roughly $20,000 by the
        end of the three-year pause. Left alone after that, they would have
        grown to about:
      </p>
      <ul>
        <li>$39,000 if retirement is 10 years away</li>
        <li>$55,000 if retirement is 15 years away</li>
        <li>$77,000 if retirement is 20 years away</li>
        <li>$108,000 if retirement is 25 years away</li>
      </ul>
      <p>
        So an $18,000 decision made at 45 is closer to a $77,000 decision by 65.
        And that is before the employer match. If the employer matched 3% of a
        $75,000 salary, the forgone match over three years is $6,750 in free
        money — which itself would have been worth roughly $29,000 after 20 more
        years of growth.
      </p>
      <p>
        Returns are not guaranteed and 7% is an assumption, not a promise. But
        the direction is not in question: the cost of a contribution gap is set
        by how much time the money had left to grow, which is exactly why gaps
        in your 40s and 50s hurt more than the raw dollar amount suggests.
      </p>

      <InlineImage
        src="/images/blog/caregiver-guide.png"
        alt="An adult daughter helping her mother sort through medical bills and insurance paperwork"
      />

      <HeadingWithAnchor id="why-a-career-break-keeps-costing">
        Why a career break keeps costing
      </HeadingWithAnchor>
      <p>
        Leaving a job to provide full-time care often feels temporary. Returning
        is rarely as simple as picking back up. In the 2025 AARP and NAC survey,
        half of employed caregivers reported work disruptions — arriving late,
        leaving early, cutting hours — and nearly half reported a major
        financial impact such as taking on debt, stopping savings, or
        experiencing food insecurity.
      </p>
      <p>A break tends to cost in several directions at once:</p>
      <ul>
        <li>Missed promotions and the raises that would have followed them</li>
        <li>
          Salary growth that restarts from the old number, not the projected one
        </li>
        <li>Lost employer retirement match, which is not recoverable later</li>
        <li>
          Loss of employer health coverage, sometimes at an age when replacing
          it is expensive
        </li>
        <li>Professional networks that thin out while you are away</li>
        <li>Re-entry at a lower level or in a lower-paying role</li>
      </ul>
      <p>
        Because retirement saving is usually a percentage of income, a permanent
        step down in salary quietly becomes a permanent step down in saving
        rate, long after the caregiving has ended.
      </p>
      <p>
        It is worth weighing all of that against what the alternative actually
        costs. According to the{" "}
        <Link
          href="https://investor.genworth.com/news-events/press-releases/detail/1054/carescout-releases-2025-cost-of-care-survey-results"
          target="_blank"
        >
          2025 CareScout Cost of Care Survey
        </Link>
        , the national median for a non-medical in-home caregiver is $35 an
        hour, or about $80,080 a year at 44 hours a week, and a semi-private
        nursing home room runs a median $114,975 a year. Full-time paid care is
        genuinely expensive. But part-time paid help — enough coverage to keep a
        caregiver in their job — often is not, and that comparison is the one
        families skip.
      </p>

      <HeadingWithAnchor id="the-social-security-connection">
        The Social Security connection
      </HeadingWithAnchor>
      <p>
        Social Security is where caregiving gaps become permanent in a way most
        people do not anticipate. Your retirement benefit is calculated from
        Average Indexed Monthly Earnings, which the{" "}
        <Link
          href="https://www.ssa.gov/oact/progdata/retirebenefit1.html"
          target="_blank"
        >
          Social Security Administration
        </Link>{" "}
        derives from your 35 highest-earning years, adjusted for wage growth and
        divided across 420 months.
      </p>
      <p>
        The practical implication, laid out in the{" "}
        <Link
          href="https://www.congress.gov/crs-product/R46658"
          target="_blank"
        >
          Congressional Research Service&rsquo;s benefit calculation report
        </Link>
        , is that the impact of a caregiving gap depends entirely on your work
        record:
      </p>
      <NumberedPoints
        points={[
          {
            lead: "If you already have 35+ strong earning years.",
            text: "A few reduced years may drop out of the calculation entirely, since only your best 35 count. The effect can be small or none.",
          },
          {
            lead: "If you have fewer than 35 years.",
            text: "Every low or zero year is averaged in directly. Leaving work at 52 after 28 years of earnings means those caregiving years are counted as zeros against your average, not skipped.",
          },
          {
            lead: "If caregiving lands in your peak-earning decade.",
            text: "Those are the years most likely to be at the top of the 35 and therefore the most expensive ones to lose.",
          },
        ]}
      />
      <p>
        Current law offers no earnings credit for time spent caregiving.
        Legislation to create one, including the{" "}
        <Link
          href="https://www.congress.gov/bill/119th-congress/house-bill/8490/text"
          target="_blank"
        >
          Social Security Caregiver Credit Act
        </Link>
        , has been introduced repeatedly without passing. The same goes for the{" "}
        <Link
          href="https://www.congress.gov/bill/119th-congress/house-bill/2036/text"
          target="_blank"
        >
          Credit for Caring Act
        </Link>
        , a bipartisan bill that would create a federal tax credit of up to
        $5,000 for working family caregivers. It sits in committee. Until
        something passes, there is no federal caregiver credit to plan around.
      </p>

      <HeadingWithAnchor id="the-sandwich-generation-squeeze">
        The sandwich generation squeeze
      </HeadingWithAnchor>
      <p>
        Caregiving rarely arrives in an otherwise empty calendar. Nearly one in
        three family caregivers is also raising a child under 18, and among
        caregivers under 50 that figure is 47%. Pew Research found that{" "}
        <Link
          href="https://www.pewresearch.org/short-reads/2022/04/08/more-than-half-of-americans-in-their-40s-are-sandwiched-between-an-aging-parent-and-their-own-children/"
          target="_blank"
        >
          54% of Americans in their 40s
        </Link>{" "}
        have both a parent aged 65 or older and either a minor child or an adult
        child they supported financially in the past year.
      </p>
      <p>
        Every dollar in that household has several claimants: childcare, college
        savings, the mortgage, health insurance, a parent&rsquo;s care,
        emergency savings, retirement. Retirement is the one with no deadline
        attached, which makes it the easiest to defer and the most expensive to
        defer. The bill for a postponed tuition payment arrives in September.
        The bill for a postponed contribution arrives in 2050.
      </p>

      <HeadingWithAnchor id="dividing-the-cost-across-a-family">
        Dividing the cost across a family
      </HeadingWithAnchor>
      <p>
        In most families, caregiving is not distributed by decision. It settles
        on whoever lives closest, works the most flexible job, or says yes
        first. One sibling ends up providing the hands-on care while others
        contribute occasionally or not at all. Sometimes one person pays for
        professional help while another handles appointments.
      </p>
      <p>
        None of those arrangements is inherently unfair. The problem is when the
        financial consequences are never discussed, and one person absorbs a
        six-figure retirement hit that everyone else assumes was a personal
        choice.
      </p>
      <p>
        Before care becomes a crisis, these are the questions worth putting on
        the table:
      </p>
      <ul>
        <li>
          What care is actually needed now, and what is likely needed in two
          years?
        </li>
        <li>What income and assets does the person receiving care have?</li>
        <li>
          Is there a long-term-care insurance policy, and what does it actually
          cover?
        </li>
        <li>
          Do they qualify for Medicaid home and community-based services, or VA
          benefits?
        </li>
        <li>
          Which family members can contribute money rather than hours, and how
          much?
        </li>
        <li>
          What would it cost to buy enough paid help to keep the primary
          caregiver employed?
        </li>
        <li>
          If someone reduces work, is the family willing to offset their
          retirement contributions?
        </li>
      </ul>
      <p>
        That last question sounds unusual and rarely gets asked. It is often the
        cheapest way to make an unequal arrangement fair, because replacing a
        sibling&rsquo;s $500-a-month contribution costs far less than the
        retirement gap it prevents.
      </p>
      <p>
        A family does not need an equal division of caregiving. It needs a
        deliberate one.
      </p>

      <HeadingWithAnchor id="protecting-your-own-retirement">
        Protecting your own retirement
      </HeadingWithAnchor>
      <p>
        There is no arrangement that works for everyone, but a few moves
        reliably reduce the long-run damage.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Keep contributing something, especially up to the match.",
            text: "If the choice is between $500 a month and nothing, $150 a month is meaningfully better than zero — and if your employer matches, contributing to the match threshold is the highest-return move available to you.",
          },
          {
            lead: "Exhaust workplace flexibility before you exhaust your career.",
            text: "Ask specifically about flexible or compressed schedules, remote work, intermittent FMLA leave, paid family leave in your state, and any caregiver benefits in your plan. A temporary accommodation almost always beats a permanent exit.",
          },
          {
            lead: "Track the full cost, not just the medical receipts.",
            text: "Log transportation, groceries, home modifications, paid help, and hours of work missed. Families consistently underestimate the total, and an accurate number is what makes the case for hiring help or splitting costs with siblings.",
          },
          {
            lead: "Check your Social Security earnings record now.",
            text: "Create an account at ssa.gov and look at how many years of earnings you actually have. Whether you are above or below 35 changes how much a caregiving gap will cost you, and it is worth knowing before you decide, not after.",
          },
          {
            lead: "Look for benefits the care recipient already qualifies for.",
            text: "Medicaid home and community-based waivers, VA Aid and Attendance, state respite programs, and existing long-term-care policies all go unused because nobody checks. Some state Medicaid programs will even pay a family member for care hours.",
          },
          {
            lead: "Have the conversation before the hospitalization.",
            text: "Discussing money and care while a parent is healthy is uncomfortable. Doing it from a hospital hallway, with a discharge planner waiting for an answer, is worse and produces worse decisions.",
          },
        ]}
      />

      <ProductCallout body="Kaizen keeps a parent's records, medications, appointment notes, and test results in one shared place the whole family can see — so care coordination doesn't depend on one person's memory, one person's inbox, or one person's time off work." />

      <p>
        None of this argues against caring for the people you love. It argues
        that the caregiver&rsquo;s own financial future belongs in the
        conversation from the beginning, rather than being the variable that
        silently absorbs everything else.
      </p>
      <p>
        Caregiving is treated as a family matter and a personal one. It is both.
        It is also a retirement-planning event, and one of the largest most
        people will ever face. The earlier a family names the cost, the more
        options it has to share it — and the smaller the chance that helping
        someone through their last years quietly creates a crisis in the
        caregiver&rsquo;s own.
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default RetirementCostOfCaregiving;
