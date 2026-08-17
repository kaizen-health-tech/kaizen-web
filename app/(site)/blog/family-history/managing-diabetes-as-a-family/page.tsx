// DRAFT — NOT PUBLISH-READY. Paid physician-partnership piece with Dr. Prabhleen Kaur.
// Before this ships, resolve everything in the on-page "Publication status" banner below:
// disclosure wording + NMC compliance sign-off, Dr. Kaur's bio/credentials, her direct
// contribution for the 4 PhysicianQuotePlaceholder blocks + the physician's-perspective
// section + 2 attributed FAQ answers, a real hero/supporting image, and /blog factcheck
// on the ICMR-INDIAB and diet-timing statistics. See
// briefs/managing-diabetes-as-a-family-dr-kaur-brief.md for full context.
import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import KeyTakeaways from "@/components/Blog/content/KeyTakeaways";
import StatTrio from "@/components/Blog/content/StatTrio";
import NumberedPoints from "@/components/Blog/content/NumberedPoints";
import ProductCallout from "@/components/Blog/content/ProductCallout";
import PhysicianQuotePlaceholder from "@/components/Blog/content/PhysicianQuotePlaceholder";
import ImagePlaceholder from "@/components/Blog/content/ImagePlaceholder";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "How often should someone with diabetes see their diabetologist?",
    answer:
      "There's no single interval that fits everyone. RSSDI (the Research Society for the Study of Diabetes in India) recommends individualizing self-monitoring frequency to the patient, with glucose monitoring, including HbA1c, typically reassessed roughly every 2-3 months whenever treatment has recently changed or a dose is being adjusted. Someone on a stable regimen with well-controlled readings may be seen less often than someone whose medication was just changed.",
  },
  {
    question: "What should I bring to a diabetes check-up?",
    answer:
      "Bring the organized log described in this guide (blood sugar readings with context, not just numbers), a complete and current medicine list including any Ayurvedic or herbal supplements, notes on any hypoglycemic or hyperglycemic episodes since the last visit, and a short list of questions. If the family has been keeping records on a platform like Kaizen Health, bring that instead of loose paper notes.",
  },
  {
    question: "What's the one thing families forget to track that you wish they wouldn't?",
    answer:
      "[RESERVED FOR DR. KAUR — her direct answer, not yet written. Do not publish this FAQ item until she supplies it.]",
  },
  {
    question: "How is tracking different when several family members share caregiving in one household?",
    answer:
      "[RESERVED FOR DR. KAUR — her direct answer, not yet written. Do not publish this FAQ item until she supplies it.]",
  },
  {
    question: "Is a CGM worth it for most patients in India, or is a glucometer log enough?",
    answer:
      "For many people on a stable oral-medication routine, a consistent glucometer log covering fasting, pre-meal, and post-meal readings gives a diabetologist enough to work with. A continuous glucose monitor (CGM) adds real-time pattern data that's especially useful around insulin dosing, unexplained swings, or hypoglycemia unawareness, but it's an added cost (typically around ₹2,500-5,500 per 14-day sensor depending on the brand). It's worth raising with your diabetologist as an option rather than assuming it's required.",
  },
];

const sections = [
  { id: "blood-sugar-readings", label: "Blood sugar readings: what to log beyond the number" },
  { id: "medicines", label: "Medicines and supplements: the full list, every time" },
  { id: "symptoms-red-flags", label: "Symptoms and red flags worth reporting" },
  { id: "diet-daily-patterns", label: "Diet and daily patterns: tracking what you actually eat" },
  { id: "preparing-for-checkup", label: "Preparing for the check-up" },
  { id: "kaizen-health", label: "Using Kaizen Health to keep it all in one place" },
  { id: "physicians-perspective", label: "A physician's perspective on family diabetes tracking" },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Managing Diabetes as a Family: What to Track Between Doctor Visits",
  description:
    "What to log between diabetes check-ups in India — blood sugar, medicines, symptoms, and diet — reviewed and co-authored with Dr. Prabhleen Kaur for families managing diabetes together.",
  path: "/blog/family-history/managing-diabetes-as-a-family",
  type: "article",
});

const ManagingDiabetesAsAFamily = () => {
  return (
    <ArticleLayout
      title="Managing Diabetes as a Family: What to Track Between Doctor Visits"
      description="Blood sugar readings, medicines, symptoms, and diet: a practical tracking system for families managing diabetes together between check-ups, reviewed and co-authored with Dr. Prabhleen Kaur."
      datePublished="2026-08-31"
      url="/blog/family-history/managing-diabetes-as-a-family"
      categoryKey="health-records"
      authorName="Kaizen Health Editorial Team & Dr. Prabhleen Kaur"
      authorCredentials="[PENDING — confirm Dr. Kaur's title, specialty, and practice/hospital affiliation before publish]"
      authorBio="[PENDING — Dr. Kaur's bio, to be supplied and approved by her before publish. Do not paraphrase or draft this on her behalf.]"
      readTime="11 min read"
      tags={["Health records", "Nutrition", "Caregiving"]}
      sections={sections}
    >
      <div className="my-9 flex flex-col gap-3 rounded-2xl border-2 border-dashed border-ash bg-lavender/40 px-6 py-7">
        <span className="text-sm font-bold uppercase tracking-[1.1px] text-violet">
          Publication status — do not publish as-is
        </span>
        <ul className="flex flex-col gap-2 pl-5 text-base leading-[1.5] text-graphite">
          <li className="list-disc">
            Disclosure wording below is a draft. Confirm with Dr. Kaur and Kaizen&rsquo;s
            legal/partnerships contact that this named, paid-co-authorship format is
            permitted under India&rsquo;s National Medical Commission professional-conduct
            rules before this goes further.
          </li>
          <li className="list-disc">
            Four sections below are reserved for Dr. Kaur&rsquo;s own words and are marked
            visibly &mdash; do not fill them in on her behalf.
          </li>
          <li className="list-disc">
            Hero and supporting images are placeholders; generate or source real images
            before publish.
          </li>
          <li className="list-disc">
            The ICMR-INDIAB and food-order statistics below were verified against primary
            sources during writing (see citations inline), but re-run{" "}
            <code>/blog factcheck</code> on this file before it goes to Dr. Kaur for review.
          </li>
        </ul>
      </div>

      <p className="mb-8 rounded-xl border border-cloud bg-lavender/40 px-5 py-4 text-base italic leading-[1.5] text-graphite">
        This article is a paid partnership between Kaizen Health and Dr. Prabhleen Kaur.
        [Confirm final disclosure wording before publish.]
      </p>

      <KeyTakeaways
        items={[
          "An estimated 101 million people in India live with diabetes and another 136 million with prediabetes (ICMR-INDIAB), so most families will manage this for someone at some point.",
          "A blood sugar reading alone tells a diabetologist little; log the time, what was eaten, activity, and how the person felt alongside it.",
          "Bring a complete, current medicine list every visit, including over-the-counter drugs and any Ayurvedic or herbal supplements, not just prescribed diabetes medication.",
          "Eating vegetables and protein before rice or roti lowered the post-meal glucose rise by 73% in a controlled study (Shukla et al., Diabetes Care, 2015), a small sequencing change, not a diet overhaul.",
          "Visit and testing frequency isn't one-size-fits-all: RSSDI guidance points to roughly every 2-3 months when treatment has recently changed, individualized from there.",
        ]}
      />

      <p>
        Between diabetes check-ups, most families track something, a glucometer
        reading here, a reminder to take medicine there. Far fewer end up with
        a record that helps the diabetologist at the next visit. That gap is
        widespread. An estimated 101 million people in India live with
        diabetes today, and another 136 million have prediabetes, according
        to the{" "}
        <Link
          href="https://www.thelancet.com/journals/landia/article/PIIS2213-8587(23)00119-5/fulltext"
          target="_blank"
        >
          ICMR-INDIAB national study
        </Link>
        , published in <em>The Lancet Diabetes &amp; Endocrinology</em> from
        data collected across all 31 states and union territories between
        2008 and 2020. For most families, diabetes care is an ongoing
        tracking job, often shared across a household, not a one-time
        diagnosis conversation.
      </p>
      <p>
        This guide covers what to track in five categories, how to prepare
        for the check-up itself, and where a family can keep it all in one
        place. Dr. Prabhleen Kaur, who co-authored this piece, adds her own
        perspective throughout on what she wants to see from a
        patient&rsquo;s family.
      </p>

      <ImagePlaceholder
        suggestion="A multi-generational Indian family at home, ideally showing more than one adult involved in a relative's care (source via Pixabay/Unsplash; avoid anything reading as a Western suburban household)."
        altText="Multi-generational Indian family reviewing health records together at home"
      />

      <HeadingWithAnchor id="blood-sugar-readings">
        Blood sugar readings: what to log beyond the number
      </HeadingWithAnchor>
      <p>
        A glucometer reading by itself is close to meaningless without
        context. The same fasting number can mean something different
        depending on what was eaten the night before, whether the person was
        unwell, or whether a dose was missed. Log the time, the reading, its
        relation to a meal (fasting, pre-meal, or a set interval after
        eating), and anything unusual about that day: illness, stress, a
        skipped walk, a family function with different food than usual.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Log fasting, pre-meal, and post-meal readings consistently,",
            text: "rather than only testing when something feels off. A pattern across a week is more useful to a diabetologist than a single alarming number.",
          },
          {
            lead: "Note what the reading followed,",
            text: "specifically what was eaten and roughly how much, since portion and food choice affect the number as much as the medicine does.",
          },
          {
            lead: "Record hypoglycemic episodes with the same care as high readings,",
            text: "including the time, symptoms, and what was done to treat it. Families often log highs consistently but under-report lows.",
          },
        ]}
      />
      <p>
        More families are also weighing a continuous glucose monitor (CGM)
        alongside or instead of a glucometer log. India&rsquo;s CGM market
        was valued at roughly USD 207.5 million in 2025 and is projected to
        nearly double by 2031, according to{" "}
        <Link
          href="https://www.mordorintelligence.com/industry-reports/india-continuous-glucose-monitoring-market"
          target="_blank"
        >
          Mordor Intelligence&rsquo;s India CGM market report
        </Link>
        , with a typical 14-day sensor costing roughly ₹2,500-5,500 depending
        on the brand. A CGM isn&rsquo;t a requirement for good tracking, but
        it&rsquo;s worth a direct conversation with your diabetologist about
        whether the added pattern detail is useful for your specific
        situation.
      </p>
      <PhysicianQuotePlaceholder
        physicianName="Dr. Kaur"
        prompt="Reserved: her guidance on which glucose pattern details matter most in a visit, beyond the raw numbers — collect during her review, do not pre-write."
      />

      <HeadingWithAnchor id="medicines">
        Medicines and supplements: the full list, every time
      </HeadingWithAnchor>
      <p>
        Bring a complete, current medicine list to every visit, not just the
        diabetes-specific prescriptions. That includes over-the-counter
        drugs, and, just as importantly, any Ayurvedic formulations, herbal
        supplements, or home remedies being taken alongside prescribed
        medicine. Concurrent use is common enough in Indian households that
        it&rsquo;s worth disclosing directly rather than leaving it out of
        the conversation. A diabetologist can only account for interactions
        and dosing effects they know about.
      </p>
      <p>
        Track dosing changes and missed-dose patterns as they happen, not
        from memory at the appointment. If a family member manages insulin
        dosing, log the actual dose taken alongside the blood sugar reading
        it followed, since the two numbers together tell the more complete
        story. Vitamin D and magnesium status are also worth tracking
        alongside medicine, since both nutrients interact with insulin
        sensitivity and blood sugar control; see our{" "}
        <Link href="/blog/diabetes-magnesium-vitamin-d">
          guide to vitamin D and magnesium in diabetes management
        </Link>{" "}
        for what the research shows.
      </p>
      <PhysicianQuotePlaceholder
        physicianName="Dr. Kaur"
        prompt="Reserved: the most common medicine-tracking mistake she sees from families, and specifically how she wants concurrent Ayurvedic or home-remedy use disclosed."
      />

      <HeadingWithAnchor id="symptoms-red-flags">
        Symptoms and red flags worth reporting
      </HeadingWithAnchor>
      <p>
        Hypoglycemic and hyperglycemic episodes deserve the same logging
        discipline as routine readings, and mild episodes are the ones
        families most often let slide. Dizziness, unusual fatigue, blurred
        vision, slow-healing cuts, and changes in urination frequency are all
        worth writing down, even when they seem minor or pass quickly on
        their own.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Log the time, the symptom, and what was happening,",
            text: "such as before or after a meal, during exercise, or after a missed dose, so a pattern is easier to spot later.",
          },
          {
            lead: "Note what was done to treat it,",
            text: "and whether it worked, especially for a low blood sugar episode.",
          },
          {
            lead: "Don't wait for the next scheduled visit to report something severe,",
            text: "such as confusion, fainting, or a reading far outside the person's usual range.",
          },
        ]}
      />
      <PhysicianQuotePlaceholder
        physicianName="Dr. Kaur"
        prompt="Reserved: which symptoms she'd want flagged to her directly and immediately, versus which are fine to simply note for the next scheduled visit."
      />

      <HeadingWithAnchor id="diet-daily-patterns">
        Diet and daily patterns: tracking what you actually eat
      </HeadingWithAnchor>
      <p>
        A full Western-style food diary usually isn&rsquo;t necessary, and
        it&rsquo;s rarely sustainable for a busy household. What&rsquo;s more
        useful is tracking a few specific, culturally familiar choices:
        roti-versus-rice portions, how much dal and vegetables are on the
        plate, and whether foods commonly discussed for blood sugar support,
        bitter gourd (karela), fenugreek (methi), millets like jowar, bajra,
        and ragi, and curd, are part of the regular rotation.
      </p>
      <p>
        One specific, evidence-backed habit is worth logging on its own:
        meal order. In a controlled crossover study of adults with type 2
        diabetes,{" "}
        <Link
          href="https://diabetesjournals.org/care/article/38/7/e98/30914/Food-Order-Has-a-Significant-Impact-on"
          target="_blank"
        >
          Shukla and colleagues, published in Diabetes Care (2015)
        </Link>
        , found that eating vegetables and protein 15 minutes before
        carbohydrate lowered the post-meal glucose rise by 73% compared with
        eating carbohydrate first, with mean glucose reductions of 28.6%,
        36.7%, and 16.8% at 30, 60, and 120 minutes respectively. That&rsquo;s
        a sequencing change, not a diet overhaul: dal and sabzi first, rice
        or roti after.
      </p>
      <StatTrio
        stats={[
          {
            figure: "73%",
            caption: "lower post-meal glucose rise when vegetables and protein were eaten before carbohydrate (Shukla et al., Diabetes Care, 2015)",
          },
          {
            figure: "101M+",
            caption: "people in India estimated to be living with diabetes (ICMR-INDIAB, 2023)",
          },
          {
            figure: "136M",
            caption: "more estimated to have prediabetes in India (ICMR-INDIAB, 2023)",
          },
        ]}
      />
      <ImagePlaceholder
        suggestion="A home-cooked Indian plate showing portion-controlled rice or roti alongside dal and vegetables (source via Pixabay/Unsplash)."
        altText="Portion-controlled Indian meal with dal, vegetables, and roti for diabetes management"
      />

      <p>
        A short walk after lunch or dinner is another habit worth logging
        alongside meals, since activity right after eating affects the
        reading that follows. None of this requires
        logging every meal in detail; a quick daily note of portion, order,
        and post-meal activity is usually enough to spot patterns over weeks.
      </p>
      <PhysicianQuotePlaceholder
        physicianName="Dr. Kaur"
        prompt="Reserved: her take on how much daily dietary detail is actually useful versus overkill for most patients, and any India-diet-specific guidance she gives."
      />

      <HeadingWithAnchor id="preparing-for-checkup">
        Preparing for the check-up
      </HeadingWithAnchor>
      <p>
        Organize the log before the visit rather than during it. Most
        families arrive with scattered notes, a few photos of glucometer
        readings, a half-remembered symptom from two weeks ago, instead of a
        summary a diabetologist can scan in the first minute of the
        appointment.
      </p>
      <p>
        Visit frequency isn&rsquo;t one-size-fits-all. RSSDI (the Research
        Society for the Study of Diabetes in India) guidance points to
        glucose monitoring, including HbA1c, being reassessed roughly every
        2-3 months when treatment has recently changed or a dose is being
        adjusted, with self-monitoring frequency individualized to the
        patient from there, per the{" "}
        <Link
          href="https://journals.sagepub.com/doi/10.1177/30502071241293567"
          target="_blank"
        >
          RSSDI Expert Consensus for Optimal Glucose Monitoring in Diabetes
          Mellitus in India
        </Link>
        . That means the right interval for a stable, well-controlled patient
        can look different from one for someone whose medicine just changed
        &mdash; ask directly rather than assume a fixed schedule. If the rest
        of the family&rsquo;s
        medical records are still scattered across notebooks and phone
        photos, our{" "}
        <Link href="/blog/family-history/organizing-medical-records">
          guide to organizing a family&rsquo;s medical records
        </Link>{" "}
        covers the broader system this tracking habit fits into.
      </p>

      <HeadingWithAnchor id="kaizen-health">
        Using Kaizen Health to keep it all in one place
      </HeadingWithAnchor>
      <p>
        A single, shared place for logs, medicine lists, and appointment
        notes removes the &ldquo;which notebook did I write that in&rdquo;
        problem that shows up when tracking is split across several family
        members. This matters even more in households where caregiving for
        one person&rsquo;s diabetes is shared: a spouse handles daily
        readings, an adult child manages appointments, another family member
        tracks medicine refills.
      </p>
      <ProductCallout body="Keep blood sugar logs, medicine lists, and appointment notes in one shared place with Kaizen Health, so every family member tracking a loved one's diabetes is working from the same record." />
      <p>
        Whatever system a family uses, paper, an app, or both, the goal is
        the same: one place everyone tracking this person&rsquo;s diabetes
        can find and update, so the record at the next check-up reflects the
        whole picture, not just whoever remembered to write it down. For the
        broader coordination questions that come up once several family
        members are involved, our{" "}
        <Link href="/blog/family-history/caregiver-guide-aging-parents">
          caregiver guide for aging parents
        </Link>{" "}
        covers the ground this tracking habit fits into.
      </p>

      <HeadingWithAnchor id="physicians-perspective">
        A physician&rsquo;s perspective on family diabetes tracking
      </HeadingWithAnchor>
      <PhysicianQuotePlaceholder
        physicianName="Dr. Kaur"
        prompt="Reserved: a 200-300 word section in Dr. Kaur's own voice. Suggested prompts: What do you wish every family tracked but few actually do? What's a tracking habit that seems helpful but usually isn't? What changes in a patient's data make you adjust treatment fastest? Anything specific to managing diabetes within a joint-family household worth mentioning? Write from her direct contribution (interview or her own draft), not paraphrased by editorial."
      />

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default ManagingDiabetesAsAFamily;
