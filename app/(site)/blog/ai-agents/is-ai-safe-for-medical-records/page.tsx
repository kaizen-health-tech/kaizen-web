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
    question: "Has anyone studied whether caregivers feel differently about sharing a parent's data with AI than their own?",
    answer:
      "Not yet, as far as the major pollsters have published. KFF and Pew Research Center have both measured whether people use AI for health information and how worried they are about privacy in general, but neither has asked respondents to compare their comfort sharing their own health data with an AI tool against sharing a parent's or dependent's data. That specific family question is an open gap in the public polling record, not a settled \"caregivers are fine with it\" or \"caregivers are worried about it\" finding either way.",
  },
  {
    question: "What happened in the Xsolis data breach?",
    answer:
      "Xsolis, a healthcare AI vendor used by hospital systems including Mayo Clinic, Legacy Health, Rochester Regional Health, and UW Medicine, suffered a phishing-based breach beginning January 20, 2026. It exposed names, Social Security numbers, dates of birth, insurance information, and medical treatment records for 1,396,519 people. The breach was publicly disclosed via the HHS Office for Civil Rights breach portal on June 22, 2026.",
  },
  {
    question: "Is a healthcare AI vendor breach the same risk as typing data into a chatbot?",
    answer:
      "No, and the distinction matters. The Xsolis breach was a phishing attack against the vendor's own infrastructure, the systems hospitals use behind the scenes, not a case of an AI chatbot mishandling or leaking what a family typed into it directly. Both are real risks worth understanding, but they're different failure modes: one is a security breach of a company's systems, the other would be a product mishandling your input in the moment you give it. Evaluating an AI tool means asking about both.",
  },
  {
    question: "Are regulators doing anything about AI and family health data right now?",
    answer:
      "Yes, two active actions as of mid-2026. In September 2025, the FTC issued 6(b) orders to seven companies operating consumer AI chatbots, requiring disclosure of data-collection and safety practices, including how they inform minor users and their guardians. In June 2026, a coalition of 42 state attorneys general, led by New York's Letitia James, subpoenaed OpenAI over data handling practices that explicitly named consumer and health data and the treatment of minors and seniors. Neither action has concluded, so neither has produced a public finding yet, but both signal that regulators consider this an open question worth investigating.",
  },
  {
    question: "How was this article's research conducted?",
    answer:
      "By reviewing tier 1-3 sources published in 2025 and 2026: Pew Research Center and KFF polling, AARP's Tech Trends survey, HHS Office for Civil Rights breach disclosures, and reporting from TechCrunch, HIPAA Journal, TechTarget, and the FTC's own press releases. Where a specific family-caregiving question hasn't been publicly polled, that's stated directly rather than filled in with an estimate.",
  },
];

const sections = [
  { id: "what-polling-covers", label: "What the polling actually asks, and what it leaves out" },
  { id: "the-xsolis-breach", label: "The one confirmed incident on record" },
  { id: "what-regulators-are-doing", label: "Regulators are asking the family question, even if pollsters aren't" },
  { id: "older-adults-and-ai", label: "What older adults are actually doing with AI right now" },
  { id: "the-unanswered-questions", label: "The questions nobody has publicly answered yet" },
  { id: "a-risk-framework", label: "A risk framework for families, until the data catches up" },
  { id: "where-kaizen-fits", label: "Where Kaizen Health fits" },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Is It Safe to Share Medical Records with AI",
  description:
    "Pollsters ask if people use AI for health questions and worry about privacy — almost none ask the family-specific version. Here's what the data shows.",
  path: "/blog/ai-agents/is-ai-safe-for-medical-records",
  type: "article",
  image: "/images/blog/is-ai-safe-for-medical-records.png",
});

const IsAiSafeForMedicalRecords = () => {
  return (
    <ArticleLayout
      title="Is It Safe to Share Family Medical Records with AI?"
      description="Pollsters have measured whether people use AI for health questions and how worried they are about privacy in general. Almost nobody has asked the family-specific version of that question yet. Here's what the data on record actually shows, and what it doesn't."
      image="/images/blog/is-ai-safe-for-medical-records.png"
      imageAlt="An adult daughter and her senior mother looking together at a smartphone screen, smiling, in natural outdoor light"
      datePublished="2026-08-20"
      url="/blog/ai-agents/is-ai-safe-for-medical-records"
      categoryKey="kai-ai"
      authorCredentials="Reviewed by the Kaizen Health editorial team"
      readTime="11 min read"
      tags={["Kai & AI", "Health records"]}
      sections={sections}
    >
      <KeyTakeaways
        items={[
          "The people most likely to say they get health information from AI chatbots are the youngest adults, not the parents or grandparents whose records families are often the ones deciding whether to share: 32% of adults 18-29 do, versus 16% of those 50-64 and 10% of those 65+ (Pew Research Center, April 2026).",
          "The one confirmed, publicly disclosed incident involving a healthcare AI vendor in 2026 is the Xsolis breach: 1,396,519 people's records exposed after a phishing attack, disclosed via HHS OCR in June 2026. It was a breach of vendor infrastructure, not a case of a chatbot mishandling what someone typed into it.",
          "Two federal and state regulatory actions launched in the past year, an FTC 6(b) inquiry (September 2025) and a 42-state attorneys general subpoena of OpenAI (June 2026), both explicitly name health data and how companies treat minors and seniors. Neither has concluded, but both signal regulators see this as unsettled.",
          "AI use among adults 50+ nearly doubled in a year, from 18% in 2024 to 30% in 2025, with privacy concerns cited as the top adoption barrier (AARP Tech Trends, April 2026). Older adults aren't sitting this out; they're already deciding, often without family-specific guidance.",
          "No major pollster has yet asked the questions that actually determine a family's risk: whether people feel differently sharing a parent's data than their own, which types of health information they'd share versus withhold, or who in the family is actually the one typing it in. That's a real gap in the evidence, not a settled answer either way, and it's the reason a framework matters more than a single stat here.",
        ]}
      />

      <p>
        Search &ldquo;is it safe to share medical records with AI&rdquo; and
        most answers you&rsquo;ll find borrow the same handful of statistics:
        how many adults use AI chatbots for health questions, how worried
        people say they are about privacy in general. Those numbers are
        real, and our{" "}
        <Link href="/blog/ai-agents">guide to AI agents in family health</Link>{" "}
        and{" "}
        <Link href="/blog/ai-agents/agent-vs-chatbot">
          AI agent vs. chatbot breakdown
        </Link>{" "}
        already cover them, along with the HIPAA, training, and retention
        checklist every family should run before connecting any tool to a
        parent&rsquo;s or child&rsquo;s records. What none of that polling
        actually asks is the family-specific version of the question: do
        people feel differently sharing a parent&rsquo;s data than their
        own? Which kinds of health information would they share, and which
        would they hold back? Who, in practice, is the one doing the typing?
      </p>
      <p>
        This piece is built around what the evidence on record actually
        supports, including where it runs out. That gap, paired with the one
        confirmed 2026 incident involving a healthcare AI vendor and two
        live regulatory actions, is itself the honest, sourced answer to
        &ldquo;is this safe&rdquo; right now: safer than the general
        headlines suggest in some ways, less settled than a confident yes or
        no in others.
      </p>

      <HeadingWithAnchor id="what-polling-covers">
        What the polling actually asks, and what it leaves out
      </HeadingWithAnchor>
      <p>
        A{" "}
        <Link
          href="https://www.pewresearch.org/science/2026/04/07/where-do-americans-get-health-information-and-what-do-they-trust/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pew Research Center report published April 7, 2026
        </Link>{" "}
        (surveying 5,111 U.S. adults, fielded October 20-26, 2025) found a
        clear age gradient in who turns to AI chatbots for health
        information at least sometimes: 32% of adults 18-29, compared with
        16% of adults 50-64 and just 10% of adults 65 and older. That&rsquo;s
        a meaningfully different picture than a single topline number
        suggests. The people asking AI chatbots health questions directly
        skew young, while the parents and grandparents whose records a
        family often has to decide whether to share skew toward the group
        least likely to be the one asking.
      </p>
      <p>
        Separately,{" "}
        <Link
          href="https://www.kff.org/health-information-trust/poll-1-in-3-adults-are-turning-to-ai-chatbots-for-health-information-equaling-the-share-who-use-social-media-for-health/"
          target="_blank"
          rel="noopener noreferrer"
        >
          KFF&rsquo;s March 2026 tracking poll
        </Link>{" "}
        found 32% of adults had turned to AI for health information in the
        past year, and among those who had entered personal medical
        information into an AI tool, 65% said they were concerned about its
        privacy. Both figures are useful, and both stop short of the
        question this article&rsquo;s title actually asks. Neither KFF nor
        Pew has published data comparing how someone feels about sharing
        their own health information with AI versus sharing a parent&rsquo;s
        or a dependent&rsquo;s, and neither has broken down willingness to
        share by the type of information involved, a medication list versus
        a mental health note versus a genetic test result. Those are real,
        specific gaps in the public record, not numbers this article is
        choosing to omit.
      </p>

      <HeadingWithAnchor id="the-xsolis-breach">
        The one confirmed incident on record
      </HeadingWithAnchor>
      <p>
        Rather than a general warning, here is a specific, documented case.
        Xsolis, a healthcare AI vendor whose clinical-decision tools are used
        by hospital systems including Mayo Clinic, Legacy Health, Rochester
        Regional Health, and UW Medicine, suffered a phishing-based breach
        beginning January 20, 2026. According to{" "}
        <Link
          href="https://www.hipaajournal.com/xsolis-data-breach/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HIPAA Journal&rsquo;s reporting
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.techtarget.com/healthtechsecurity/news/366645116/Healthcare-AI-platform-Xsolis-suffers-data-breach-impacting-14M-individuals"
          target="_blank"
          rel="noopener noreferrer"
        >
          TechTarget&rsquo;s coverage
        </Link>
        , the breach exposed names, Social Security numbers, dates of birth,
        insurance information, and medical treatment records belonging to
        1,396,519 people. It was publicly disclosed through the HHS Office
        for Civil Rights breach portal on June 22, 2026, five months after
        the intrusion began.{" "}
        <Link
          href="https://www.beckershospitalreview.com/healthcare-information-technology/cybersecurity/8-health-systems-affected-by-ai-company-data-breach/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Becker&rsquo;s Hospital Review
        </Link>{" "}
        counted eight health systems affected in total.
      </p>
      <StatTrio
        stats={[
          {
            figure: "1.4M",
            caption: "people's records exposed in the Xsolis healthcare AI vendor breach, disclosed via HHS OCR in June 2026",
          },
          {
            figure: "5 mo.",
            caption: "gap between the January 2026 phishing intrusion and its public disclosure that June",
          },
          {
            figure: "8",
            caption: "hospital systems confirmed affected, including Mayo Clinic and UW Medicine (Becker's Hospital Review)",
          },
        ]}
      />
      <p>
        The distinction worth holding onto is what kind of risk this was.
        Xsolis is infrastructure hospitals use behind the scenes for
        clinical decision support, not a consumer chatbot a family types
        questions into directly. The breach happened because someone
        clicked a phishing link inside the vendor&rsquo;s systems, the same
        way breaches have happened at healthcare vendors for years before AI
        was part of the story. It is not evidence that an AI tool
        misread, leaked, or misused what a person typed into it in the
        moment. Both are real categories of risk. They are not the same
        risk, and a family evaluating any AI health tool should ask about
        both separately: what happens to data behind the scenes, and what
        happens to what you type in directly.
      </p>

      <HeadingWithAnchor id="what-regulators-are-doing">
        Regulators are asking the family question, even if pollsters aren&rsquo;t
      </HeadingWithAnchor>
      <p>
        Two active actions launched in the past year, and both explicitly
        reference family-relevant data handling rather than AI privacy in
        the abstract. The{" "}
        <Link
          href="https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-launches-inquiry-ai-chatbots-acting-companions"
          target="_blank"
          rel="noopener noreferrer"
        >
          FTC&rsquo;s September 2025 6(b) inquiry
        </Link>{" "}
        and a{" "}
        <Link
          href="https://techcrunch.com/2026/06/13/openai-faces-investigation-from-state-attorneys-general/"
          target="_blank"
          rel="noopener noreferrer"
        >
          42-state attorneys general subpoena of OpenAI
        </Link>{" "}
        in June 2026 both name health data specifically.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "FTC 6(b) orders, September 11, 2025.",
            text: "The Federal Trade Commission ordered seven companies operating consumer AI chatbots, including OpenAI, Meta, and Alphabet, to disclose their data-collection and safety practices, with specific reference to how they inform minor users and their guardians or parents.",
          },
          {
            lead: "42-state attorneys general subpoena of OpenAI, June 12, 2026.",
            text: "A coalition led by New York Attorney General Letitia James subpoenaed OpenAI over data handling practices, with the document demand explicitly naming consumer and health data alongside the treatment of minors and seniors, corroborated by MLQ News.",
          },
        ]}
      />
      <p>
        Neither action has produced a public finding as of this writing, and
        neither should be read as evidence of wrongdoing on its own. What
        they show is that regulators, not just pollsters, now consider
        family-relevant health data handling by consumer AI companies an
        open question worth formally investigating. That&rsquo;s a different
        kind of signal than a survey number, and it&rsquo;s one families
        weighing whether to use these tools should know is actively
        unfolding, not settled.
      </p>

      <HeadingWithAnchor id="older-adults-and-ai">
        What older adults are actually doing with AI right now
      </HeadingWithAnchor>
      <p>
        AI adoption among older adults nearly doubled in a single year.{" "}
        <Link
          href="https://www.aarp.org/pri/topics/technology/internet-media-devices/2026-technology-trends-older-adults/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AARP&rsquo;s 2026 Tech Trends survey
        </Link>{" "}
        (3,838 adults, fielded September-October 2025, published April 7,
        2026) found AI usage among adults 50 and older rose from 18% in 2024
        to 30% in 2025, with privacy concerns cited as the top barrier for
        those who haven&rsquo;t adopted it. Combined with the Pew figure
        above, the picture is that older adults are already using these
        tools, at a fast-growing rate, even though they&rsquo;re the age
        group least likely to be asking AI health questions directly and the
        group least represented in the polling on this specific topic.
      </p>
      <p>
        That combination matters for a family caregiving context. It means
        an aging parent may already be experimenting with an AI tool on
        their own, independent of any decision an adult child makes about
        sharing records with one. The safety question this article is
        answering isn&rsquo;t hypothetical for a future decision; for a
        meaningful share of families, it&rsquo;s already in progress.
      </p>

      <HeadingWithAnchor id="the-unanswered-questions">
        The questions nobody has publicly answered yet
      </HeadingWithAnchor>
      <p>
        Three specific questions, the ones that would most directly answer
        &ldquo;is this safe for my family,&rdquo; don&rsquo;t have a public,
        tier 1-3 answer as of this writing.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Do people feel differently sharing a parent's data than their own?",
            text: "No major pollster has run this comparison. It's plausible people are more cautious with a parent's or dependent's data than their own, or the reverse; the honest answer is that nobody has asked yet.",
          },
          {
            lead: "Which types of health information would people share, and which would they withhold?",
            text: "KFF and Pew report general willingness to use AI for health information, not a breakdown by information sensitivity, such as a medication list versus a mental health note versus a genetic result.",
          },
          {
            lead: "Who, within a family, actually does the typing?",
            text: "AARP's data shows older adults are adopting AI fast, but no survey has asked whether it's the parent, an adult child, or another family member entering health information on a shared or family member's behalf.",
          },
        ]}
      />
      <p>
        That absence isn&rsquo;t a reason to distrust the data that does
        exist; it&rsquo;s a reason to treat this as a decision each family
        currently has to make on its own judgment, not one a national
        average can settle for them.
      </p>

      <HeadingWithAnchor id="a-risk-framework">
        A risk framework for families, until the data catches up
      </HeadingWithAnchor>
      <p>
        Given what the evidence does and doesn&rsquo;t cover, a family can
        still make a reasoned decision by treating the open questions above
        as things to decide deliberately, rather than default into.
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Separate vendor risk from input risk.",
            text: "Ask both what happens if the company behind the tool is breached (the Xsolis scenario) and what happens to what you type in directly. A strong answer to one isn't a strong answer to both.",
          },
          {
            lead: "Decide together, not unilaterally.",
            text: "Since no research shows whether a parent and their adult child would answer the sharing question the same way, don't assume consent on someone else's behalf. Have the specific conversation.",
          },
          {
            lead: "Segment by sensitivity yourself.",
            text: "In the absence of published guidance on which record types are safer to share, apply your own judgment: a medication list carries different stakes than a mental health note or genetic result, and you don't need a survey to know that.",
          },
          {
            lead: "Assume the regulatory picture is still moving.",
            text: "With an active FTC inquiry and a 42-state subpoena underway, a company's current privacy policy could look different in a year. Recheck it periodically rather than deciding once and forgetting.",
          },
          {
            lead: "Ask if a parent is already using AI independently.",
            text: "Given AARP's adoption numbers, don't assume the family's AI decision starts from zero. Ask directly whether a parent has already started using a tool on their own.",
          },
        ]}
      />
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 font-semibold">Date</th>
              <th className="p-2 font-semibold">Event</th>
              <th className="p-2 font-semibold">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">Sept. 11, 2025</td>
              <td className="p-2">FTC issues 6(b) orders to 7 AI chatbot companies on data-collection and safety practices</td>
              <td className="p-2">FTC.gov</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Oct. 20-26, 2025</td>
              <td className="p-2">Pew Research fields its AI health-information survey (published April 2026)</td>
              <td className="p-2">Pew Research Center</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Jan. 20, 2026</td>
              <td className="p-2">Phishing intrusion begins against Xsolis, a healthcare AI vendor</td>
              <td className="p-2">HIPAA Journal</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">June 12, 2026</td>
              <td className="p-2">42 state attorneys general subpoena OpenAI over data handling, naming health data and seniors</td>
              <td className="p-2">TechCrunch</td>
            </tr>
            <tr className="border-t">
              <td className="p-2">June 22, 2026</td>
              <td className="p-2">Xsolis breach publicly disclosed via HHS OCR: 1,396,519 people affected</td>
              <td className="p-2">HHS OCR / HIPAA Journal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <HeadingWithAnchor id="where-kaizen-fits">
        Where Kaizen Health fits
      </HeadingWithAnchor>
      <p>
        Kaizen Health was built around the family decision this article
        describes, not around a general-purpose product that happens to
        touch health topics. Sharing is something a family sets and can
        change at any time, record by record, rather than an all-or-nothing
        default. Kai, Kaizen&rsquo;s AI assistant, summarizes the records a
        family chooses to upload on a HIPAA-compliant platform where
        personal health data is never used to train the underlying model.
      </p>
      <ProductCallout body="Decide as a family which records to share, and with whom, before any AI tool touches them. Kaizen's sharing controls are set by your family and can be changed at any time." />
      <p>
        For the deeper walkthrough of what to check on any AI product, HIPAA
        status, training policy, and retention, before you connect it to a
        parent&rsquo;s or child&rsquo;s records, see our{" "}
        <Link href="/blog/ai-agents/agent-vs-chatbot">
          HIPAA, training, and retention checklist
        </Link>
        . For a feature-by-feature look at how the biggest 2026 products
        compare on those same questions, see{" "}
        <Link href="/blog/ai-agents/ai-health-assistant-comparison">
          Copilot Health, ChatGPT Health &amp; Amazon Health AI, Compared
        </Link>
        . And if the records themselves aren&rsquo;t organized yet, our
        guide to{" "}
        <Link href="/blog/family-history/organizing-medical-records">
          organizing medical records for aging parents
        </Link>{" "}
        is worth doing first. It makes every question in this article
        easier to answer, because you&rsquo;ll actually know what
        you&rsquo;re deciding whether to share.
      </p>
      <p>
        Whoever ends up asking a parent these questions, and deciding what
        to share on the family&rsquo;s behalf, is usually the same person
        already carrying the rest of that coordination. Our guide to{" "}
        <Link href="/blog/caregiving/retirement-cost-of-caregiving">
          the hidden retirement cost of family caregiving
        </Link>{" "}
        covers the part of that role that a privacy settings screen never
        shows.
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default IsAiSafeForMedicalRecords;
