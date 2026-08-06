import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import KeyTakeaways from "@/components/Blog/content/KeyTakeaways";
import StatTrio from "@/components/Blog/content/StatTrio";
import PullQuote from "@/components/Blog/content/PullQuote";
import NumberedPoints from "@/components/Blog/content/NumberedPoints";
import ProductCallout from "@/components/Blog/content/ProductCallout";
import ImagePlaceholder from "@/components/Blog/content/ImagePlaceholder";
import InlineImage from "@/components/Blog/content/InlineImage";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "How many people in the US are waiting for a kidney transplant?",
    answer:
      "Roughly 90,000 people are on the national kidney transplant waiting list at any given time, and most face a wait of three to five years or longer before an offer, according to the National Kidney Foundation. That number only counts people who made it onto the list. It does not count the larger group referred for a transplant who never got that far.",
  },
  {
    question:
      "Why do nearly half of people referred for a kidney transplant never start the evaluation?",
    answer:
      "A 2026 study in the Journal of the American Society of Nephrology, led by researchers at NYU Langone Health, found that 48% of the 720,348 patients referred for a kidney transplant between 2014 and 2025 never began the evaluation process, and only 19% completed it and reached the waitlist. Patients who were unmarried, had severe obesity, lived in rural areas, were older, spoke Spanish, had lower incomes, or were treated at smaller centers or in the South were significantly less likely to progress.",
  },
  {
    question: "What does a kidney transplant evaluation involve?",
    answer:
      "It typically means blood work, imaging like a chest X-ray or CT scan, cancer screenings, a cardiac workup, and meetings with a transplant surgeon, nephrologist, social worker, and dietitian, spread across several appointments over a period of months. All of that has to happen while a patient is also managing dialysis and, often, other chronic conditions.",
  },
  {
    question:
      "What can I do if a family member's kidney transplant evaluation has stalled?",
    answer:
      "Call the transplant center's coordinator directly and ask which specific tests or appointments are still outstanding, since evaluations often stall on one missing piece of paperwork rather than a medical disqualification. Ask whether the center has a social worker who can help with transportation, lodging, or insurance issues, and ask whether a second opinion at another transplant center is worth pursuing, since completion rates vary significantly by center.",
  },
];

const sections = [
  { id: "the-number-behind-the-number", label: "The number behind the number" },
  { id: "what-the-study-found", label: "What the study found" },
  { id: "four-places-to-fall-through", label: "Four places to fall through the cracks" },
  { id: "who-is-least-likely-to-make-it", label: "Who is least likely to make it through" },
  { id: "why-the-evaluation-itself-is-the-bottleneck", label: "Why the evaluation itself is the bottleneck" },
  { id: "the-scale-of-kidney-failure-in-the-us", label: "The scale of kidney failure in the US" },
  { id: "if-you-are-navigating-this-for-someone", label: "If you're navigating this for yourself or someone else" },
  { id: "questions-worth-asking-the-transplant-center", label: "Questions worth asking the transplant center" },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Kidney Transplant Evaluation Process",
  description:
    "A 2026 study of 720,000+ patients found 48% referred for a kidney transplant never start the evaluation. Here's where people fall through, and what helps.",
  path: "/blog/health/kidney-transplant-evaluation-gap",
  type: "article",
  image: "/images/blog/kidney-transplant.png",
});

const KidneyTransplantEvaluationGap = () => {
  return (
    <ArticleLayout
      title="Why Nearly Half of Kidney Transplant Candidates Never Start the Evaluation"
      description="A study of more than 720,000 patients found 48% referred for a kidney transplant never begin the evaluation, and only 19% reach the waitlist. Here's what determines who makes it through."
      image="/images/blog/kidney-transplant.png"
      imageAlt="A patient reviewing paperwork with a clipboard during a kidney transplant evaluation appointment"
      datePublished="2026-08-06"
      url="/blog/health/kidney-transplant-evaluation-gap"
      categoryKey="health-records"
      readTime="7 min read"
      tags={["Health records", "Kidney disease"]}
      sections={sections}
    >
      <KeyTakeaways
        items={[
          "A 2026 study of 720,348 referred patients found 48% never began a kidney transplant evaluation, and only 19% reached the waitlist.",
          "Being unmarried, living rurally, having severe obesity, speaking Spanish, having a lower income, or being treated at a smaller center were all linked to lower odds of completing the process.",
          "The evaluation itself is an obstacle course: blood work, imaging, cancer screening, a cardiac workup, and appointments with multiple specialists, spread over months, on top of ongoing dialysis.",
          "Evaluations often stall on one missing test or piece of paperwork rather than a medical disqualification, which is where an organized advocate can make the most difference.",
        ]}
      />

      <p>
        Roughly 90,000 people in the United States are on the national kidney
        transplant waiting list right now, and most of them will wait three to
        five years for an offer. That number, grim as it is, describes only the
        people who made it onto the list. A study published in June 2026 looked
        at everyone who did not, and found that the biggest drop-off happens
        long before anyone gets near a waiting list at all.
      </p>
      <p>
        Researchers at NYU Langone Health tracked 720,348 patients referred for
        a kidney transplant between 2014 and 2025. Nearly half of them, 48%,
        never even began the evaluation process their transplant center
        required. Only 19% completed it and reached the waitlist.
      </p>

      <HeadingWithAnchor id="the-number-behind-the-number">
        The number behind the number
      </HeadingWithAnchor>
      <p>
        Transplant research and transplant advocacy have both spent years
        focused on what happens after someone reaches the waiting list: how long
        they wait, who gets an organ first, how to grow the donor pool. The{" "}
        <Link href="https://doi.org/10.1681/ASN.0000001162" target="_blank">
          study, published in the Journal of the American Society of Nephrology
        </Link>{" "}
        and{" "}
        <Link
          href="https://nyulangone.org/news/most-people-seeking-kidney-transplant-never-reach-waitlist"
          target="_blank"
        >
          simultaneously presented at the American Transplant Congress
        </Link>
        , points at the much larger and less examined stage before that: the
        months between a referral and a completed evaluation, where most
        candidates are lost.
      </p>
      <p>
        Lead author Conor Donnelly, MD, and co-senior authors Allan B. Massie,
        PhD, and Michal A. Mankowski, PhD, pulled their data from Epic Cosmos, a
        research database drawing on more than 300 million patient records
        across over 1,850 hospitals, including roughly a third of US transplant
        centers. That scale is what makes the finding hard to write off as one
        region's problem or one hospital's paperwork backlog.
      </p>

      <InlineImage
        src="/images/blog/kidney-transplant-center.png"
        alt="Patient waiting in a dialysis center, illustrating the long evaluation process before a kidney transplant"
      />

      <HeadingWithAnchor id="what-the-study-found">
        What the study found
      </HeadingWithAnchor>
      <p>
        Framed as a funnel, the numbers are stark. Of every 100 people referred
        for a kidney transplant:
      </p>

      <StatTrio
        stats={[
          {
            figure: "48%",
            caption:
              "Never begin the transplant evaluation after being referred",
          },
          {
            figure: "19%",
            caption: "Complete evaluation and reach the national waitlist",
          },
          {
            figure: "720,348",
            caption:
              "Patients tracked in the study, referred between 2014 and 2025",
          },
        ]}
      />

      <p>
        That leaves roughly a third of referred patients somewhere in between:
        they started the evaluation but did not finish it, or finished it but
        were not listed for other medical or administrative reasons. Being
        referred by a nephrologist, in other words, is closer to the starting
        gun than the halfway point.
      </p>

      <HeadingWithAnchor id="four-places-to-fall-through">
        Four places to fall through the cracks
      </HeadingWithAnchor>
      <p>
        A kidney transplant referral is not a single event; it is a sequence,
        and the study's design tracked each step separately:
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Referral.",
            text: "A nephrologist or dialysis clinic refers the patient to a transplant center. This is the step counted in most public statistics, and the one that gets the least scrutiny after it happens.",
          },
          {
            lead: "Evaluation start.",
            text: "The patient has an initial visit or intake appointment at the transplant center. 48% of referred patients never reach this point.",
          },
          {
            lead: "Evaluation completion.",
            text: "The patient finishes the required testing, imaging, and specialist appointments, and the transplant committee reviews the case.",
          },
          {
            lead: "Waitlisting.",
            text: "The transplant center formally adds the patient to the national waiting list managed by the Organ Procurement and Transplantation Network. Only 19% of referred patients reach this step.",
          },
        ]}
      />
      <p>
        Each step is a place where a missed appointment, an unreachable phone
        number, an unpaid bill, or a form that never got returned can quietly
        end the process, without anyone officially deciding the patient is
        ineligible.
      </p>

      <HeadingWithAnchor id="who-is-least-likely-to-make-it">
        Who is least likely to make it through
      </HeadingWithAnchor>
      <p>
        The study did not find a uniform drop-off. Specific groups were
        significantly less likely to progress from referral to the waitlist:
      </p>
      <ul>
        <li>Unmarried patients</li>
        <li>Patients with severe obesity</li>
        <li>Patients living in rural areas</li>
        <li>Older patients</li>
        <li>Spanish-speaking patients</li>
        <li>Patients with lower household income</li>
        <li>Patients treated at smaller transplant centers</li>
        <li>Patients in transplant programs in the South</li>
      </ul>
      <p>
        Urban patients, by contrast, were generally more likely to advance. None
        of these are medical exclusion criteria on their own. A person is not
        too unmarried or too rural to receive a kidney. What they describe
        instead is how much unpaid logistical and social support the process
        quietly assumes a patient already has: a spouse to help track
        appointments and drive to them, proximity to a well-resourced center,
        fluency in the language the paperwork is written in, and the income to
        absorb the cost of repeated travel and time off work.
      </p>

      <PullQuote quote="Which transplant center you go to, where you live, and even whether you are married all appear to influence your chances of moving forward to the waitlist for a new kidney." />

      <HeadingWithAnchor id="why-the-evaluation-itself-is-the-bottleneck">
        Why the evaluation itself is the bottleneck
      </HeadingWithAnchor>
      <p>
        A kidney transplant evaluation is not one visit. It typically includes
        extensive blood work, chest imaging, age-appropriate cancer screening, a
        cardiac workup, and separate appointments with a transplant surgeon, a
        nephrologist, a social worker, and a dietitian. Depending on a patient's
        other conditions, it can also mean a psychological evaluation and a
        review of financial and insurance coverage for both the surgery and the
        anti-rejection medications that follow it for life.
      </p>
      <p>
        All of that has to happen on top of an existing dialysis schedule, which
        for most patients already means three sessions a week, four hours at a
        time. A patient managing that schedule, plus a job, plus other health
        conditions, has to coordinate several more appointments with several
        more providers, often at a center that is not the one where they get
        their regular dialysis care, over a period that can run several months.
        Every one of those appointments is a point where transportation, cost,
        or a scheduling conflict can cause a delay that compounds into the
        patient falling out of the process entirely.
      </p>

      <HeadingWithAnchor id="the-scale-of-kidney-failure-in-the-us">
        The scale of kidney failure in the US
      </HeadingWithAnchor>
      <p>
        The evaluation gap matters because of how many people it touches. More
        than{" "}
        <Link
          href="https://www.kidneyfund.org/all-about-kidneys/quick-kidney-disease-facts-and-stats"
          target="_blank"
        >
          808,000 Americans
        </Link>{" "}
        are living with kidney failure. As of{" "}
        <Link
          href="https://www.ajkd.org/article/S0272-6386(26)00710-9/fulltext"
          target="_blank"
        >
          USRDS 2025 data
        </Link>
        , about 517,000 of them are on dialysis and roughly 317,000 are living
        with a functioning transplant. A transplant generally offers a longer
        life expectancy and a far better quality of life than years on dialysis,
        which is part of why the size of the group stalled somewhere between
        referral and the waiting list is so consequential.
      </p>
      <p>
        For the people who do reach the waitlist, the wait is not short. Roughly{" "}
        <Link
          href="https://www.kidney.org/kidney-topics/kidney-transplant-waitlist"
          target="_blank"
        >
          90,000 people
        </Link>{" "}
        are listed at any given time, and most wait three to five years or
        longer. On average,{" "}
        <Link
          href="https://www.organdonor.gov/learn/organ-donation-statistics"
          target="_blank"
        >
          13 people die every day
        </Link>{" "}
        waiting for a kidney. None of that changes for the better if half of
        referred patients never reach the starting line.
      </p>

      <HeadingWithAnchor id="if-you-are-navigating-this-for-someone">
        If you're navigating this for yourself or someone else
      </HeadingWithAnchor>
      <p>
        The study's authors were careful to note what their data cannot show: it
        cannot tell you, for any single patient, whether a stalled evaluation
        reflects a real medical barrier or a logistical one that better support
        could fix. What it does make clear is that the odds are not even, and
        that the difference often comes down to who has help managing the
        paperwork and the schedule.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Get the evaluation checklist in writing.",
            text: "Ask the transplant coordinator for the full list of required tests, screenings, and appointments up front, rather than learning about each one visit by visit.",
          },
          {
            lead: "Track results in one place, not across several portals.",
            text: "Evaluations often involve labs, imaging, and specialists who don't share a single medical record system. A missing result from one provider can stall the whole file.",
          },
          {
            lead: "Ask what's actually holding things up.",
            text: "If weeks have passed without an update, call and ask specifically which test, form, or appointment is outstanding. Coordinators manage large caseloads, and stalled files don't always surface on their own.",
          },
          {
            lead: "Ask about support for logistics, not just medical care.",
            text: "Many transplant centers have social workers who can help with transportation, lodging near the center, or insurance appeals. That support often goes unused simply because no one asked about it.",
          },
        ]}
      />

      <InlineImage
        src="/images/blog/kidney-adult-help.png"
        alt="Adult child helping a parent organize medical test results during a kidney transplant evaluation"
      />

      <ProductCallout body="Kaizen keeps every test result, referral, and appointment note from a transplant evaluation in one shared record, so nothing gets lost between the nephrologist, the transplant center, and the specialists in between, and everyone helping with care can see what's still outstanding." />

      <HeadingWithAnchor id="questions-worth-asking-the-transplant-center">
        Questions worth asking the transplant center
      </HeadingWithAnchor>
      <p>
        A few direct questions can surface where a case actually stands, rather
        than waiting for a call that may not come:
      </p>
      <ul>
        <li>What specific tests or appointments are still outstanding?</li>
        <li>
          Is there a target date for when the transplant committee will review
          the file?
        </li>
        <li>
          Does this center have data on its own evaluation completion rate, and
          how does it compare to other centers nearby?
        </li>
        <li>
          Is a second opinion at another transplant center worth pursuing, given
          that completion rates vary significantly by center and region?
        </li>
        <li>
          Is there a social worker or financial counselor who can help with
          transportation, lodging, or insurance issues?
        </li>
      </ul>
      <p>
        The researchers behind this study argue that transplant centers and
        policymakers need to look upstream of the waiting list, not just at it.
        Until that shifts, the most reliable lever most families have is the one
        inside the process already: staying organized enough that a stalled file
        gets caught before it quietly becomes a closed one.
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default KidneyTransplantEvaluationGap;
