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
    question: "Is ChatGPT Health HIPAA compliant?",
    answer:
      "No, not for the consumer product. HIPAA Journal and the health-privacy trade press Paubox have both confirmed OpenAI does not sign a consumer business associate agreement for ChatGPT Health. A separate enterprise offering, ChatGPT for Healthcare, is HIPAA-BAA-eligible, but that's a different product sold to healthcare organizations, not the health mode inside the consumer app most families would use.",
  },
  {
    question: "Is Microsoft Copilot Health HIPAA compliant?",
    answer:
      "It isn't confirmed either way for the consumer product. Microsoft has published HIPAA business associate agreement terms for enterprise products like Copilot for Security and Copilot Studio, but no official Microsoft page states that consumer Copilot Health itself is HIPAA-covered. Treat this as unconfirmed rather than assuming coverage just because other Microsoft products carry it.",
  },
  {
    question: "Does Amazon Health AI use my health data to train its models?",
    answer:
      "Partially, and it's the one product of the three that does. Amazon says it trains on \"abstracted patterns without directly identifying information\" rather than raw records. Some privacy reporters, including Yahoo Tech and TechRadar, have publicly questioned whether de-identification alone is a sufficient protection, since re-identification research suggests it isn't always foolproof. Copilot Health and ChatGPT Health both state they don't train on health data at all.",
  },
  {
    question: "Can my whole family share one AI health assistant account?",
    answer:
      "Not in the way the marketing might suggest. Copilot Health's AI access is tied to an individual subscriber even on Microsoft 365 Family and Premium plans, so a spouse or adult child on the same plan doesn't automatically share Copilot Health access. ChatGPT Health is also a single-account product. Amazon Health AI comes closest to a family structure through One Medical's discounted additional-household-member pricing, but whether the AI assistant itself lets one account holder view a linked parent's or child's data inside the chat is not documented in any source we could find.",
  },
  {
    question: "How long do these companies keep my health data?",
    answer:
      "None of the three discloses a specific retention period. An April 2026 analysis from the International Association of Privacy Professionals reviewed all five major 2026 health AI launches, including these three, and found that only Perplexity Health partially specified a retention duration for uploaded health data. If a retention window matters to you, that's a question worth asking the company directly rather than assuming a short, session-only lifespan.",
  },
];

const sections = [
  { id: "what-each-one-does", label: "What each one actually does" },
  { id: "hipaa-status-compared", label: "HIPAA status, compared" },
  { id: "training-and-retention", label: "Does it train on your data, and how long is it kept?" },
  { id: "pricing-and-family-access", label: "Pricing and family access" },
  { id: "what-critics-are-saying", label: "What the critics are saying" },
  { id: "the-trust-gap", label: "The gap between asking and sharing" },
  { id: "what-to-check", label: "What to check before you connect one" },
  { id: "where-kaizen-fits", label: "Where Kaizen Health fits" },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Copilot Health vs. ChatGPT Health vs. Amazon Health AI",
  description:
    "A side-by-side look at HIPAA status, data training, retention, and pricing across 2026's three biggest AI health assistants — and which one to trust.",
  path: "/blog/ai-agents/ai-health-assistant-comparison",
  type: "article",
  image: "/images/blog/ai-health-assistant-comparison.jpg",
});

const AIHealthAssistantComparison = () => {
  return (
    <ArticleLayout
      title="Copilot Health, ChatGPT Health & Amazon Health AI, Compared"
      description="Three of the biggest tech companies in the world now offer an AI health assistant. Here's how Microsoft, OpenAI, and Amazon actually differ on HIPAA status, data training, retention, and whether any of them are built for a family, not just one person."
      image="/images/blog/ai-health-assistant-comparison.jpg"
      imageAlt="An adult daughter and her senior mother sitting on a park bench together, looking closely at a smartphone screen"
      datePublished="2026-08-21"
      url="/blog/ai-agents/ai-health-assistant-comparison"
      categoryKey="kai-ai"
      authorCredentials="Reviewed by the Kaizen Health editorial team"
      readTime="10 min read"
      tags={["Kai & AI", "Health records"]}
      sections={sections}
    >
      <KeyTakeaways
        items={[
          "Of the three, only Amazon Health AI is built on a HIPAA-covered relationship (via One Medical). ChatGPT Health is explicitly not HIPAA-covered for consumers, and Copilot Health's consumer HIPAA status isn't confirmed anywhere in Microsoft's own documentation.",
          "Copilot Health and ChatGPT Health both say they don't train their models on your health data. Amazon Health AI does train on health data, but says it uses de-identified, abstracted patterns rather than records tied to your name — a distinction privacy reporters have publicly questioned.",
          "None of the three discloses a specific data retention period. An April 2026 review by the International Association of Privacy Professionals found this gap across four of the five major 2026 health AI launches.",
          "None of the three is really built for a family. Copilot Health's AI access is per-subscriber even on a Microsoft 365 Family plan; ChatGPT Health is single-account; Amazon Health AI comes closest only through One Medical's discounted extra-household-member pricing, not a documented shared-record view.",
          "AARP research on adults 50 and older found a wide gap between casual use and real trust: 41% have already asked an AI tool a health question, but only 11% have gone as far as sharing an actual health document with one.",
        ]}
      />

      <p>
        Between January and March 2026, Microsoft, OpenAI, and Amazon each
        shipped a consumer AI health assistant. Our{" "}
        <Link href="/blog/ai-agents">guide to AI agents in family health</Link>{" "}
        covered why that happened all at once and what &ldquo;agent&rdquo;
        actually means for your data; our piece on{" "}
        <Link href="/blog/ai-agents/agent-vs-chatbot">
          AI agent vs. chatbot
        </Link>{" "}
        covered the access questions every one of these tools raises. This
        piece answers the question those two left open: how do Copilot
        Health, ChatGPT Health, and Amazon Health AI actually differ, once
        you get past the marketing pages? (Anthropic&rsquo;s Claude for
        Healthcare and Perplexity Health, the other two products from the
        same early-2026 wave, are outside the scope of this comparison and
        worth a separate look.)
      </p>

      <HeadingWithAnchor id="what-each-one-does">
        What each one actually does
      </HeadingWithAnchor>
      <p>
        All three connect to outside medical records and answer questions
        about them, but the plumbing behind that differs.{" "}
        <Link
          href="https://www.microsoft.com/en-us/microsoft-copilot/blog/2026/05/29/copilot-health-now-in-preview/"
          target="_blank" rel="noopener noreferrer"
        >
          Copilot Health
        </Link>{" "}
        lives inside Microsoft Copilot and connects to records and wearable
        data through a network Microsoft calls HealthEx, which it says
        reaches more than 50,000 US hospitals and providers, plus 50-plus
        wearable and health-app platforms including Apple Health, Oura, and
        Fitbit. It surfaces trend insights, helps interpret results, and
        helps prepare questions for a clinician, and Microsoft is explicit
        that it isn&rsquo;t meant to diagnose or treat. It launched March 12,
        2026, and as of Microsoft&rsquo;s May 29, 2026 update, linked above,
        remains in preview rather than general availability.
      </p>
      <p>
        <Link
          href="https://openai.com/index/introducing-chatgpt-health/"
          target="_blank" rel="noopener noreferrer"
        >
          ChatGPT Health
        </Link>{" "}
        is a dedicated space inside ChatGPT that connects to medical records
        through b.well&rsquo;s network of roughly 2.2 million US providers,
        along with wellness apps like MyFitnessPal and Peloton. OpenAI has
        said 230 million people, about 29% of ChatGPT&rsquo;s weekly users,
        were already asking health and wellness questions before this
        feature existed, according to{" "}
        <Link
          href="https://techcrunch.com/2026/01/07/openai-unveils-chatgpt-health-says-230-million-users-ask-about-health-each-week/"
          target="_blank" rel="noopener noreferrer"
        >
          TechCrunch&rsquo;s coverage of the launch
        </Link>
        .
      </p>
      <p>
        <Link
          href="https://www.aboutamazon.com/news/retail/amazon-health-ai-agent-one-medical"
          target="_blank" rel="noopener noreferrer"
        >
          Amazon Health AI
        </Link>{" "}
        is the most &ldquo;agentic&rdquo; of the three: beyond answering
        questions, Amazon says it can help book appointments, manage
        prescriptions, and connect users directly to a licensed One Medical
        clinician, built on Amazon Bedrock and reviewing records pulled from
        state health information exchanges. It launched first for One
        Medical members in January 2026, then expanded to the general
        Amazon.com and Amazon app audience in March, per{" "}
        <Link
          href="https://www.fiercehealthcare.com/ai-and-machine-learning/amazon-launches-health-ai-assistant-its-website-expands-free-virtual-care"
          target="_blank" rel="noopener noreferrer"
        >
          Fierce Healthcare
        </Link>
        .
      </p>

      <HeadingWithAnchor id="hipaa-status-compared">
        HIPAA status, compared
      </HeadingWithAnchor>
      <p>
        This is the single biggest difference between the three, and it
        rarely shows up on a marketing page. Amazon Health AI is the only
        one of the three built on top of an actual HIPAA-covered
        relationship: it operates inside One Medical, a licensed medical
        practice, backed by a{" "}
        <Link
          href="https://health.amazon.com/onemedical/legal/hipaa"
          target="_blank" rel="noopener noreferrer"
        >
          published Notice of HIPAA Privacy Practices
        </Link>
        . ChatGPT Health is the opposite case, and the clearest of the
        three: {" "}
        <Link
          href="https://www.hipaajournal.com/is-chatgpt-hipaa-compliant/"
          target="_blank" rel="noopener noreferrer"
        >
          HIPAA Journal&rsquo;s analysis
        </Link>{" "}
        confirms OpenAI does not sign a consumer business associate
        agreement for ChatGPT, and{" "}
        <Link
          href="https://www.paubox.com/blog/chatgpt-health-launches-nationwide-but-medical-records-not-hipaa-protected"
          target="_blank" rel="noopener noreferrer"
        >
          Paubox&rsquo;s health-privacy reporting
        </Link>{" "}
        put it plainly in its headline: medical records shared with ChatGPT
        Health are not HIPAA-protected. A separate enterprise product,
        ChatGPT for Healthcare, is HIPAA-BAA-eligible, but that&rsquo;s sold
        to healthcare organizations, not to a family using the consumer app.
      </p>
      <p>
        Copilot Health sits in the middle by default, not by design: it
        simply isn&rsquo;t confirmed. Microsoft has published HIPAA business
        associate agreement terms for enterprise products like Copilot for
        Security and Copilot Studio, but no official Microsoft page states
        that consumer Copilot Health carries the same coverage. That absence
        is worth treating as a &ldquo;not currently confirmed&rdquo; answer,
        not a &ldquo;probably fine&rdquo; one, until Microsoft states
        otherwise directly.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 font-semibold">&nbsp;</th>
              <th className="p-2 font-semibold">Copilot Health</th>
              <th className="p-2 font-semibold">ChatGPT Health</th>
              <th className="p-2 font-semibold">Amazon Health AI</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2 font-medium">Launched</td>
              <td className="p-2">March 12, 2026</td>
              <td className="p-2">January 7, 2026</td>
              <td className="p-2">
                January 22, 2026 (One Medical); March 2026 (public)
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">HIPAA-covered</td>
              <td className="p-2">Not confirmed for the consumer product</td>
              <td className="p-2">No, confirmed by name</td>
              <td className="p-2">Yes, via One Medical</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Trains on your health data</td>
              <td className="p-2">No, per Microsoft&rsquo;s privacy FAQ</td>
              <td className="p-2">No, health-specific guarantee</td>
              <td className="p-2">
                Partially, using de-identified patterns only (per Amazon)
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Retention period disclosed</td>
              <td className="p-2">No</td>
              <td className="p-2">No</td>
              <td className="p-2">No</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Requires a paid subscription</td>
              <td className="p-2">
                Yes, Microsoft 365 Personal or Premium
              </td>
              <td className="p-2">
                No free tier available, full features skew paid
              </td>
              <td className="p-2">
                No standalone fee; rides on Prime plus a discounted One
                Medical membership
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Shared family access</td>
              <td className="p-2">
                No, AI access is per-subscriber even on Family/Premium
                plans
              </td>
              <td className="p-2">No, single-account product</td>
              <td className="p-2">
                Closest, with discounted extra household memberships, but
                an in-app shared record view isn&rsquo;t documented
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <HeadingWithAnchor id="training-and-retention">
        Does it train on your data, and how long is it kept?
      </HeadingWithAnchor>
      <p>
        Microsoft and OpenAI both say no. Microsoft&rsquo;s own{" "}
        <Link
          href="https://support.microsoft.com/en-us/microsoft-copilot/privacy-faq-for-microsoft-copilot"
          target="_blank" rel="noopener noreferrer"
        >
          Copilot privacy FAQ
        </Link>{" "}
        states users can opt out of model training while keeping
        personalization, and{" "}
        <Link
          href="https://www.axios.com/2026/03/12/microsoft-copilot-health"
          target="_blank" rel="noopener noreferrer"
        >
          Axios reported
        </Link>{" "}
        that Copilot Health data specifically won&rsquo;t be used to train
        Microsoft&rsquo;s models. OpenAI goes further for this feature
        specifically: connected medical records and any conversation that
        uses them are excluded from training regardless of your general
        ChatGPT training setting, according to{" "}
        <Link
          href="https://www.bleepingcomputer.com/news/artificial-intelligence/openai-says-chatgpt-wont-use-your-health-information-to-train-its-models/"
          target="_blank" rel="noopener noreferrer"
        >
          BleepingComputer&rsquo;s reporting
        </Link>{" "}
        on the policy. That&rsquo;s a stronger, more specific commitment than
        the general opt-out toggle that applies to the rest of ChatGPT.
      </p>
      <p>
        Amazon is the exception, and says so directly. As{" "}
        <Link
          href="https://tech.yahoo.com/articles/wouldnt-trust-amazons-health-ai-090000360.html"
          target="_blank" rel="noopener noreferrer"
        >
          Yahoo Tech reported
        </Link>
        , quoting the company&rsquo;s own statement: &ldquo;Amazon trains
        Health AI models on abstracted patterns without directly identifying
        information&mdash;for example, if multiple patients ask about
        medication interactions, those patterns may be used&hellip; without
        patient names.&rdquo;{" "}
        <Link
          href="https://www.techradar.com/health-fitness/amazons-new-health-ai-chatbot-is-ripe-with-misuse-potential"
          target="_blank" rel="noopener noreferrer"
        >
          TechRadar
        </Link>{" "}
        has separately pushed back on whether de-identification alone is a
        sufficient safeguard, pointing to research showing re-identification
        is sometimes possible even from patterns that don&rsquo;t include a
        name.
      </p>
      <p>
        On retention, all three come up short in the same way. A{" "}
        <Link
          href="https://iapp.org/news/a/the-health-ai-agent-rush-five-products-in-three-months-and-the-privacy-questions-that-got-left-behind"
          target="_blank" rel="noopener noreferrer"
        >
          April 2026 analysis from the International Association of Privacy
          Professionals
        </Link>{" "}
        reviewed all five major 2026 health AI launches, including these
        three, and found that only Perplexity Health partially specified a
        retention duration for uploaded health data. Copilot Health,
        ChatGPT Health, and Amazon Health AI don&rsquo;t publicly state how
        long they keep what you share, which means &ldquo;how long is this
        kept&rdquo; is a question you have to ask directly rather than one
        any of the three answers up front.
      </p>

      <HeadingWithAnchor id="pricing-and-family-access">
        Pricing and family access
      </HeadingWithAnchor>
      <p>
        Copilot Health requires an individual{" "}
        <Link
          href="https://www.microsoft.com/en-us/microsoft-365/p/microsoft-365-personal/cfq7ttc0k5bf"
          target="_blank" rel="noopener noreferrer"
        >
          Microsoft 365 subscription
        </Link>
        : Personal runs $9.99 a month or $99.99 a year, and Premium runs
        $19.99 a month or $199.99 a year, available to US subscribers 18 and
        up while the feature is in preview. The catch for families: even on
        the Microsoft 365 Family plan, which covers up to six people, AI
        features including Copilot Health aren&rsquo;t automatically shared
        across everyone on the plan. Each person needs their own
        individually qualifying subscription to actually use Copilot
        Health, according to{" "}
        <Link
          href="https://learn.microsoft.com/en-us/answers/questions/5817517/family-vs-individual-plan"
          target="_blank" rel="noopener noreferrer"
        >
          Microsoft&rsquo;s own Microsoft Q&amp;A support channel
        </Link>{" "}
        (a Microsoft-hosted forum, not an official policy page, so treat
        this specific point as the best available answer rather than a
        formal Microsoft statement). The word &ldquo;Family&rdquo; in the
        plan name describes the billing group, not shared AI access.
      </p>
      <p>
        <Link
          href="https://chatgpt.com/pricing/"
          target="_blank" rel="noopener noreferrer"
        >
          ChatGPT Health is available on Free, Go, Plus, and Pro tiers
        </Link>{" "}
        for logged-in US users 18 and older, so there&rsquo;s no hard
        paywall to try it, though full record-connection functionality
        appears to skew toward the paid tiers in practice. Like Copilot
        Health, it&rsquo;s a single-account product; there&rsquo;s no
        documented way for one account to see another family member&rsquo;s
        connected records.
      </p>
      <p>
        Amazon Health AI has no standalone subscription fee of its own. It
        sits on top of Amazon Prime plus a{" "}
        <Link
          href="https://www.onemedical.com/mediacenter/one-medical-amazon-prime-benefit/"
          target="_blank" rel="noopener noreferrer"
        >
          discounted One Medical membership
        </Link>
        : $99 a year for a Prime member&rsquo;s first membership
        versus $199 a year without Prime, and $66 a year for each additional
        household member, or pay-per-visit at $29 for a message-only
        consultation and $49 for video without any membership at all. That
        per-additional-member pricing is the closest thing to an actual
        family structure among the three, though it&rsquo;s a membership
        discount, not a confirmed shared view inside the AI chat itself; no
        source we reviewed documents whether a logged-in family member can
        see a linked parent&rsquo;s or child&rsquo;s records through the
        assistant. For a sense of what that spending adds up to over time,
        our{" "}
        <Link href="/blog/caregiving/retirement-cost-of-caregiving">
          guide to the hidden retirement cost of caregiving
        </Link>{" "}
        looks at the broader financial picture beyond any single
        subscription.
      </p>

      <HeadingWithAnchor id="what-critics-are-saying">
        What the critics are saying
      </HeadingWithAnchor>
      <p>
        None of the three has escaped scrutiny.{" "}
        <Link
          href="https://www.technologyreview.com/2026/03/30/1134795/there-are-more-ai-health-tools-than-ever-but-how-well-do-they-work/"
          target="_blank" rel="noopener noreferrer"
        >
          MIT Technology Review
        </Link>{" "}
        interviewed six academic experts about all three products in March
        2026, and every one of them raised safety-testing concerns. The
        piece cites a Mount Sinai study finding that ChatGPT Health
        sometimes recommends excessive care for minor issues while missing
        genuine emergencies, and notes that newer model versions performed
        worse at seeking patient context than older ones did. Separately, a
        study{" "}
        <Link
          href="https://www.wishtv.com/news/local-news/ai-health-advice-risks/"
          target="_blank" rel="noopener noreferrer"
        >
          reported by WISH-TV
        </Link>{" "}
        found ChatGPT-style tools failed to correctly identify a meaningful
        share of both non-emergency and emergency conditions in clinical
        vignette testing, and the patient-safety nonprofit ECRI named
        misuse of AI chatbots the top health technology hazard of 2026 in
        the same report.
      </p>
      <p>
        Copilot Health drew a different kind of scrutiny: a{" "}
        <Link
          href="https://www.forbes.com/sites/martinadilicosa/2026/03/12/microsoft-launches-co-pilot-feature-that-gives-medical-advice/"
          target="_blank" rel="noopener noreferrer"
        >
          Forbes contributor piece
        </Link>{" "}
        framed its launch as a shift toward AI offering more actionable
        medical guidance, raising scope-of-practice questions about where a
        general-purpose assistant&rsquo;s advice should stop. Amazon has
        faced the sharpest privacy pushback of the three: both{" "}
        <Link
          href="https://tech.yahoo.com/articles/wouldnt-trust-amazons-health-ai-090000360.html"
          target="_blank" rel="noopener noreferrer"
        >
          Yahoo Tech
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.techradar.com/health-fitness/amazons-new-health-ai-chatbot-is-ripe-with-misuse-potential"
          target="_blank" rel="noopener noreferrer"
        >
          TechRadar
        </Link>{" "}
        published pieces questioning whether a company that also runs a
        retail and pharmacy business should hold health conversations at
        all, citing concern that a mention of poor sleep could plausibly
        surface an Amazon product recommendation. Amazon&rsquo;s response,
        on record with{" "}
        <Link
          href="https://www.fiercehealthcare.com/ai-and-machine-learning/amazon-launches-health-ai-assistant-its-website-expands-free-virtual-care"
          target="_blank" rel="noopener noreferrer"
        >
          Fierce Healthcare
        </Link>
        : &ldquo;This isn&rsquo;t a chatbot with a healthcare skin. It&rsquo;s
        a system designed from the ground up to be safe, trustworthy, and
        useful.&rdquo;
      </p>

      <HeadingWithAnchor id="the-trust-gap">
        The gap between asking and sharing
      </HeadingWithAnchor>
      <p>
        Adoption and trust aren&rsquo;t the same thing, and the data on
        older adults specifically shows that gap clearly.{" "}
        <Link
          href="https://www.aarp.org/pri/topics/technology/internet-media-devices/artificial-intelligence-health-tools/"
          target="_blank" rel="noopener noreferrer"
        >
          AARP Research
        </Link>{" "}
        fielded a survey of 1,031 US adults 50 and older in mid-February
        2026, published in June 2026, and found that while a meaningful
        share have tried asking an AI tool a casual health question, far
        fewer have taken the bigger step of actually sharing a document.
      </p>
      <StatTrio
        stats={[
          {
            figure: "41%",
            caption:
              "of AI-using adults 50+ have already asked an AI tool a health question (AARP Research, June 2026)",
          },
          {
            figure: "11%",
            caption:
              "have gone further and shared an actual health document, like test results, with an AI tool",
          },
          {
            figure: "57%",
            caption:
              "are unsure who will have access to their health information once it's entered into a generative AI tool",
          },
        ]}
      />
      <p>
        That last number is the one worth sitting with. More than half of
        older adults who&rsquo;ve engaged with AI health tools at all
        don&rsquo;t actually know where their information goes once
        they&rsquo;ve shared it. Given that none of the three products in
        this comparison discloses a retention period, that uncertainty
        isn&rsquo;t a knowledge gap on the reader&rsquo;s part. It&rsquo;s
        a disclosure gap on the product&rsquo;s part.
      </p>

      <HeadingWithAnchor id="what-to-check">
        What to check before you connect one to family health data
      </HeadingWithAnchor>
      <p>
        The same checklist applies whether you&rsquo;re looking at one of
        these three or a different product entirely, and it&rsquo;s worth
        pairing with the broader access questions covered in our{" "}
        <Link href="/blog/ai-agents/agent-vs-chatbot">
          AI agent vs. chatbot breakdown
        </Link>
        .
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Is it actually HIPAA-covered, or just health-adjacent?",
            text: "Ask the company directly, or check its own privacy documentation by name. Being covered under a licensed medical practice, the way Amazon Health AI is through One Medical, is different from a general assistant that added a health feature.",
          },
          {
            lead: "Does training cover both typed messages and uploads?",
            text: "Copilot Health and ChatGPT Health both state they don't train on health data; Amazon Health AI trains on de-identified patterns. Confirm which category a product falls into rather than assuming the strictest policy.",
          },
          {
            lead: "Is a retention period actually stated anywhere?",
            text: "None of the three products in this comparison discloses one. If a company won't answer how long it keeps your data, treat that silence as the answer for now.",
          },
          {
            lead: "Does the pricing actually buy shared family access, or just a shared bill?",
            text: "A \"Family\" plan name doesn't guarantee shared AI access, as Copilot Health's Microsoft 365 Family plan shows. Confirm whether every family member gets their own usable access, not just a combined invoice.",
          },
          {
            lead: "Is there a documented way for a caregiver to see a parent's or child's data?",
            text: "None of the three clearly documents an in-app caregiver view. If that's what you need, ask the company directly before assuming a family or household plan provides it.",
          },
        ]}
      />

      <HeadingWithAnchor id="where-kaizen-fits">
        Where Kaizen Health fits
      </HeadingWithAnchor>
      <p>
        Copilot Health, ChatGPT Health, and Amazon Health AI are each a
        health feature inside a much larger, general-purpose product, and
        the comparison above shows what that trade-off costs: unclear or
        absent HIPAA status in two of the three cases, no disclosed
        retention period in any of them, and no product genuinely built
        for a family to share. Kaizen Health starts from the opposite
        direction. Kai, Kaizen&rsquo;s AI assistant, summarizes the records
        a family chooses to upload and answers questions about them on a
        HIPAA-compliant platform, with business associate agreements
        signed with the AI providers used in specific app features, and
        personal health data is never used to train the underlying model.
      </p>
      <ProductCallout body="Upload a lab result, a discharge summary, or a medication list, and ask Kai what changed. Sharing controls are set by your family and can be changed at any time — built from the start for more than one person to use." />
      <p>
        None of this means the three products compared here are unsafe to
        use for a quick, one-off health question; each is transparent about
        at least some of what it does and doesn&rsquo;t do, which is more
        than can be said for plenty of consumer software. It means the
        comparison changes once a parent&rsquo;s full record, or a shared
        family view of it, is what you actually need. For the broader
        evidence on whether sharing family records with AI is safe,
        including the one confirmed 2026 healthcare AI vendor breach and
        two active regulatory actions, see{" "}
        <Link href="/blog/ai-agents/is-ai-safe-for-medical-records">
          is it safe to share family medical records with AI
        </Link>
        . If you haven&rsquo;t
        organized what records exist yet, our guide to{" "}
        <Link href="/blog/family-history/organizing-medical-records">
          organizing medical records for aging parents
        </Link>{" "}
        is a reasonable place to start before connecting any AI tool,
        including this one.
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default AIHealthAssistantComparison;
