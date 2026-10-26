// Committed as a draft: blogData has `draft: true` for this URL, so the page
// returns 404 and stays out of listings and sitemaps. To publish, delete that
// flag, then:
//  1. this post is date-bound to Thanksgiving (Nov 26, 2026) and the calendar
//     publishes it Nov 12 so it can be indexed first. Do not publish after
//     the holiday without rewording the intro
//  2. the CDC page that hosted My Family Health Portrait (phgkb.cdc.gov/FHH)
//     is offline (checked 2026-10-25), so the post does not recommend the
//     tool. Re-check whether CDC or NHGRI has a replacement before adding it
//  3. the "what to ask" list and the age-at-diagnosis point were read from
//     CDC search summaries and the 2017 CDC genomics blog. Open the current
//     CDC family health history pages and confirm the wording
//  4. the shared-note ProductCallout follows the calendar's wording (creator
//     edits, group members read). Do not add to it
//  5. hero image is final (generated 2026-10-25)
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
    question: "Why is Thanksgiving called National Family History Day?",
    answer:
      "In 2004, the U.S. Surgeon General declared that Thanksgiving would be National Family History Day. The idea was to use a day when relatives are already together to encourage families to learn about and write down their family health history.",
  },
  {
    question: "Which relatives matter most for family health history?",
    answer:
      "Start with first-degree relatives: parents, siblings and children. CDC notes that having a first-degree relative with some diseases can double a person's risk for the same disease. Grandparents, aunts, uncles, nieces and nephews add useful context, especially on the side of the family where a condition appears more than once.",
  },
  {
    question: "What should I write down about each relative?",
    answer:
      "For each relative, write down their relationship to you, any health conditions they have or had, the age each condition was first diagnosed, and whether they have died and at what age and from what cause. Age at diagnosis matters because an earlier age is generally linked with higher risk to other family members. If nobody knows an exact age, write an approximate one.",
  },
  {
    question: "What if relatives do not want to share, or do not know?",
    answer:
      "Respect it. Health information is personal, and some relatives will not want to talk about it. Record what you do know, mark the rest as unknown, and try again another time. If family records, obituaries or older relatives can fill in a gap, use them. An incomplete history is still useful to a doctor, and \"unknown\" is a legitimate entry.",
  },
  {
    question: "What do I do with my family health history once I have it?",
    answer:
      "Bring it to your doctor, who can use it to decide whether earlier or more frequent screening makes sense for you. Keep a copy where relatives can reach it, and update it when someone in the family receives a new diagnosis. This article is general information and is not medical advice.",
  },
];

const sections = [
  { id: "why-thanksgiving", label: "Why Thanksgiving works" },
  { id: "what-to-ask", label: "What to ask each relative" },
  { id: "how-to-ask", label: "How to ask without making it heavy" },
  { id: "what-to-write-down", label: "How to write it down" },
  { id: "when-information-is-missing", label: "When information is missing" },
  { id: "after-the-holiday", label: "After the holiday" },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Family Health History Thanksgiving",
  description:
    "Thanksgiving is National Family History Day. What to ask relatives, how to start the conversation, and how to write down family health history for your doctor.",
  path: "/blog/family-history/family-health-history-thanksgiving",
  type: "article",
  image: "/images/blog/family-health-history-thanksgiving-hero.png",
});

const FamilyHealthHistoryThanksgiving = () => {
  return (
    <ArticleLayout
      title="Collect Your Family Health History This Thanksgiving"
      description="Thanksgiving is National Family History Day. What to ask relatives, how to start the conversation, and how to write down family health history for your doctor."
      image="/images/blog/family-health-history-thanksgiving-hero.png"
      imageAlt="A young woman writing in a notebook as her grandmother tells a story on a sofa, with a box of old family photographs on the coffee table and a holiday dinner table blurred in the background"
      datePublished="2026-11-12"
      url="/blog/family-history/family-health-history-thanksgiving"
      categoryKey="health-records"
      authorCredentials="Reviewed by the Kaizen Health editorial team"
      readTime="5 min read"
      tags={["Health records", "Family history"]}
      sections={sections}
    >
      <KeyTakeaways
        items={[
          "In 2004, the U.S. Surgeon General declared Thanksgiving National Family History Day, because families are already together.",
          "Start with parents, siblings and children. For some diseases, having a first-degree relative with the disease doubles a person's risk, according to CDC.",
          "For each relative, write down their conditions, the age each was diagnosed, and the age and cause of death if they have died.",
          "Ask permission, keep it conversational, and write down \"unknown\" instead of guessing.",
          "Bring what you collect to your doctor, and update it when a new diagnosis happens.",
        ]}
      />

      <p>
        Most of us carry only a rough sense of what runs in our families. We know
        Grandpa had a bad heart, or that an aunt had cancer, but not at what age,
        or whether it was the same kind. Doctors use exactly that detail.
      </p>
      <p>
        Thanksgiving is a day when parents, siblings, cousins and
        grandparents are in the same room with time to talk. This guide shows
        you what to ask, how to bring it up without making dinner heavy, and how
        to write it down so your doctor can use it.
      </p>

      <HeadingWithAnchor id="why-thanksgiving">
        Why Thanksgiving works
      </HeadingWithAnchor>
      <p>
        In 2004, the U.S. Surgeon General declared that
        Thanksgiving would be National Family History Day. As CDC&rsquo;s{" "}
        <Link
          href="https://www.cdc.gov/mmwr/volumes/65/wr/mm6546a8.htm"
          target="_blank"
        >
          Morbidity and Mortality Weekly Report
        </Link>{" "}
        describes it, the day was designed to encourage American families to
        learn about and create a written record of their family health history.
      </p>
      <p>
        The gap it was meant to close was wide. In 2004, 96% of Americans
        said family health history was important, but only 30% were actively
        collecting it. CDC&rsquo;s{" "}
        <Link
          href="https://blogs.cdc.gov/genomics/2017/11/20/happy-thanksgiving-2017/"
          target="_blank"
        >
          2017 Thanksgiving post
        </Link>{" "}
        reports that a 2014 survey of more than 5,000 respondents found
        collection had risen only slightly, to 37%.
      </p>
      <StatTrio
        stats={[
          {
            figure: "96%",
            caption:
              "Americans who said family health history was important, in 2004 (CDC)",
          },
          {
            figure: "30%",
            caption:
              "Who were actively collecting it in 2004 (CDC)",
          },
          {
            figure: "37%",
            caption:
              "Collecting it in a 2014 survey of 5,000+ respondents (CDC)",
          },
        ]}
      />
      <p>
        These are older numbers, and we could not find a newer national figure.
      </p>
      <p>
        It matters because family patterns can change what your doctor
        recommends. CDC says that having at least one first-degree relative
        with some diseases doubles a person&rsquo;s risk for that disease. That is a reason to tell your doctor, not a diagnosis.
      </p>

      <HeadingWithAnchor id="what-to-ask">
        What to ask each relative
      </HeadingWithAnchor>
      <p>
        Start with your close relatives: your parents, your siblings and your
        children. If you can, add grandparents, aunts, uncles, nieces and
        nephews. For each person, the basics are:
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Conditions they have or had.",
            text: "Heart disease, cancer, diabetes, high blood pressure, stroke, depression and other conditions that came up in their life. If it was cancer, ask what type.",
          },
          {
            lead: "The age each one started.",
            text: "Age at diagnosis is often what a doctor cares about most. Earlier onset is generally linked with higher risk to other family members, and medical records often leave it out, so asking relatives directly helps.",
          },
          {
            lead: "If they have died, the age and cause.",
            text: "This can be hard to ask. Approach it gently, and let people stop whenever they want.",
          },
          {
            lead: "Where the family came from.",
            text: "Some conditions are more common in certain ancestries. Even a rough answer is worth writing down.",
          },
        ]}
      />
      <p>
        CDC&rsquo;s 2017 post lists conditions where family history matters,
        including heart disease, breast, colorectal and other cancers,
        diabetes, osteoporosis, glaucoma, depression and sickle cell disease. If
        a conversation drifts, use that list as a prompt. For mental health in
        particular, our article on{" "}
        <Link href="/blog/family-history/family-history-depression-children">
          family history of depression
        </Link>{" "}
        covers what is worth recording for each affected relative.
      </p>

      <HeadingWithAnchor id="how-to-ask">
        How to ask without making it heavy
      </HeadingWithAnchor>
      <p>
        Nobody wants a medical interview over pie. These habits keep it light.
      </p>
      <ul>
        <li>
          <strong>Ask permission and explain why.</strong> &ldquo;I am writing
          down our family health history for my doctor. Would you be okay
          sharing a few things?&rdquo; works better than starting with questions.
        </li>
        <li>
          <strong>Talk one on one.</strong> A quiet corner or a walk usually
          beats the dinner table. Some relatives will say things they would not
          say in front of everyone.
        </li>
        <li>
          <strong>Start with the person who knows the most.</strong> A
          grandparent, parent or older aunt often remembers what others have
          forgotten.
        </li>
        <li>
          <strong>Share your own first.</strong> Telling a relative what you know
          about your own health makes the exchange feel mutual.
        </li>
        <li>
          <strong>Let people skip.</strong> Some relatives find it painful or
          private. A &ldquo;no&rdquo; is an answer. Do not pass along what one
          relative told you to others without their agreement.
        </li>
      </ul>

      <HeadingWithAnchor id="what-to-write-down">
        How to write it down
      </HeadingWithAnchor>
      <p>
        You do not need special software. A notes app, a spreadsheet or a sheet
        of paper works, as long as you capture the same four things for every
        person. A simple layout that is easy to read later:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-3">Relative</th>
              <th className="border border-gray-300 px-4 py-3">Condition</th>
              <th className="border border-gray-300 px-4 py-3">Age at diagnosis</th>
              <th className="border border-gray-300 px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Mother</td>
              <td className="border border-gray-300 px-4 py-3">Type 2 diabetes</td>
              <td className="border border-gray-300 px-4 py-3">About 55</td>
              <td className="border border-gray-300 px-4 py-3">Managed with medication</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3">Maternal grandfather</td>
              <td className="border border-gray-300 px-4 py-3">Heart attack</td>
              <td className="border border-gray-300 px-4 py-3">Unknown</td>
              <td className="border border-gray-300 px-4 py-3">Died at about 70</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-sm">
        The rows above are synthetic examples to show the format, not real
        people.
      </p>
      <ProductCallout
        body="In Kaizen, you can write a note that sits with your other health records, such as a summary of the family history you collected. You can edit the notes you create, and every member of the group you share it with can read it."
        buttonLabel="Get the Kaizen app"
      />

      <HeadingWithAnchor id="when-information-is-missing">
        When information is missing
      </HeadingWithAnchor>
      <p>
        Gaps are normal. Relatives may not know, may not remember, or may not
        want to say. You may be adopted, estranged from part of the family, or
        have lost touch with the people who knew.
      </p>
      <ul>
        <li>
          Write &ldquo;unknown&rdquo; instead of guessing. A guess can mislead a
          doctor. A gap tells them what to ask.
        </li>
        <li>
          Use what you can find. Family records and obituaries may name causes
          and ages that nobody remembers.
        </li>
        <li>
          Tell your doctor about the gaps. They can still use what you have, and
          they can decide how much weight to give an incomplete history.
        </li>
      </ul>
      <p>
        For more on what clinicians do with this information, see our guide to{" "}
        <Link href="/blog/family-history/documenting-family-health">
          documenting family health history
        </Link>
        .
      </p>

      <HeadingWithAnchor id="after-the-holiday">
        After the holiday
      </HeadingWithAnchor>
      <p>
        Collecting is the start. Within a week or two, do three things.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Bring it to your doctor.",
            text: "Print it or have it on your phone at your next visit. Ask whether anything in it changes your screening schedule.",
          },
          {
            lead: "Share it with the relatives it describes.",
            text: "With their permission. A sibling may want to bring the same list to their own doctor.",
          },
          {
            lead: "Update it when something changes.",
            text: "CDC says family health history is dynamic and needs to be updated as new illnesses occur in the family. Set a reminder for next Thanksgiving.",
          },
        ]}
      />
      <p>
        If your history points to a specific condition, our articles on{" "}
        <Link href="/blog/heart/genetic-risk-score-heart-disease">
          genetic risk scores and heart disease
        </Link>{" "}
        and{" "}
        <Link href="/blog/family-history/managing-diabetes-as-a-family">
          managing diabetes as a family
        </Link>{" "}
        go deeper. For how relatives can keep one shared record, see{" "}
        <Link href="/blog/family-history/shared-family-medical-record">
          the shared family medical record
        </Link>
        .
      </p>
      <p>
        This is general information, not medical advice. A family history does
        not predict what will happen to you. Talk to your doctor about what yours
        means.
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default FamilyHealthHistoryThanksgiving;
