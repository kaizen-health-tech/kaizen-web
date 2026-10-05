import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import KeyTakeaways from "@/components/Blog/content/KeyTakeaways";
import NumberedPoints from "@/components/Blog/content/NumberedPoints";
import StatTrio from "@/components/Blog/content/StatTrio";
import PullQuote from "@/components/Blog/content/PullQuote";
import ProductCallout from "@/components/Blog/content/ProductCallout";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Is speech-to-text better than typing for kids?",
    answer:
      "For some writing tasks, it helps children say more. In a 2025 Swedish study of 81 students in Grades 4 and 5, dictated stories were longer, took less time, and used more varied vocabulary than typed ones. That measures one kind of task performance. It doesn't show that speech should replace typing or literacy instruction, and dictated text still needs reviewing and editing.",
  },
  {
    question: "Do young people prefer voice notes to texting?",
    answer:
      "Young adults like voice notes more than older adults do, but they still prefer text for most messages. In YouGov's 2022 UK polling, 43% of 18- to 24-year-old smartphone users liked receiving voice notes, compared with 11% of those 55 and older. Yet 71% of 18- to 24-year-olds preferred a text for sending a long message, versus 24% who preferred a voice note. No representative study we found measures the same preference among children.",
  },
  {
    question: "What's the difference between a voice assistant and a voice agent?",
    answer:
      "A voice assistant answers questions or runs a fixed set of supported commands, such as setting a timer. A voice agent takes a spoken request and uses context or tools, like your saved records or a web search, to help finish a task, and it can ask follow-up questions when the request is unclear. Dictation is different from both: it only turns speech into editable text.",
  },
  {
    question: "Is voice AI safe for children to use?",
    answer:
      "It depends on the product and the supervision around it, not on voice itself. Recognition of young children's speech is still uneven, and a 2026 Common Sense Media survey found that 17% of 9- to 17-year-olds who use AI chatbots had seen something they felt was inappropriate for their age. Use products designed for a child's age, keep a trusted adult involved, and treat AI answers about health as a starting point for a conversation with a clinician.",
  },
];

const sections = [
  { id: "the-popular-story", label: "The popular story: a generation done with typing" },
  { id: "what-polling-shows", label: "What the polling actually shows" },
  { id: "what-kids-can-say", label: "Where speaking does help: saying more" },
  { id: "hearing-is-not-understanding", label: "Hearing words isn't understanding them" },
  { id: "dictation-assistant-agent", label: "Dictation, assistants, and agents are different things" },
  { id: "why-voice-agents", label: "Why voice agents could matter more to the next generation" },
  { id: "what-voice-does-not-fix", label: "What voice doesn't fix" },
  { id: "for-families", label: "What this means for families" },
];

const DumbbellChart = () => (
  <figure className="my-9 rounded-[18px] bg-lavender p-4 sm:p-6">
    <svg
      viewBox="0 0 520 300"
      className="h-auto w-full"
      role="img"
      aria-labelledby="dumbbell-title dumbbell-desc"
    >
      <title id="dumbbell-title">Spoken versus typed answers from fifth and sixth graders</title>
      <desc id="dumbbell-desc">
        Spoken answers averaged about 33 words, compared with about 10 words for
        typed answers. Spoken answers contained 1.8 explanation arguments on
        average, compared with 0.6 for typed answers.
      </desc>
      <g fontSize="19" fill="#40424D">
        <circle cx="10" cy="22" r="8" fill="#9DA2B3" />
        <text x="26" y="29">Typed</text>
        <circle cx="110" cy="22" r="8" fill="#6E40F3" />
        <text x="126" y="29">Spoken</text>
      </g>

      <text x="0" y="88" fontSize="20" fontWeight="600" fill="#281B55">Words per answer</text>
      <line x1="20" y1="136" x2="500" y2="136" stroke="#DDDFE7" strokeWidth="3" />
      <text x="20" y="166" fontSize="16" fill="#6E7180" textAnchor="middle">0</text>
      <text x="500" y="166" fontSize="16" fill="#6E7180" textAnchor="middle">40</text>
      <line x1="140" y1="136" x2="416" y2="136" stroke="#B9A6F8" strokeWidth="8" strokeLinecap="round" />
      <circle cx="140" cy="136" r="13" fill="#9DA2B3" />
      <circle cx="416" cy="136" r="13" fill="#6E40F3" />
      <text x="140" y="114" fontSize="21" fontWeight="600" fill="#40424D" textAnchor="middle">~10</text>
      <text x="416" y="114" fontSize="21" fontWeight="600" fill="#6E40F3" textAnchor="middle">~33</text>

      <text x="0" y="212" fontSize="20" fontWeight="600" fill="#281B55">Explanation arguments per answer</text>
      <line x1="20" y1="260" x2="500" y2="260" stroke="#DDDFE7" strokeWidth="3" />
      <text x="20" y="290" fontSize="16" fill="#6E7180" textAnchor="middle">0</text>
      <text x="500" y="290" fontSize="16" fill="#6E7180" textAnchor="middle">2</text>
      <line x1="164" y1="260" x2="452" y2="260" stroke="#B9A6F8" strokeWidth="8" strokeLinecap="round" />
      <circle cx="164" cy="260" r="13" fill="#9DA2B3" />
      <circle cx="452" cy="260" r="13" fill="#6E40F3" />
      <text x="164" y="238" fontSize="21" fontWeight="600" fill="#40424D" textAnchor="middle">0.6</text>
      <text x="452" y="238" fontSize="21" fontWeight="600" fill="#6E40F3" textAnchor="middle">1.8</text>
    </svg>
    <figcaption className="mt-3 text-center text-sm text-graphite">
      Spoken answers were given by dictation or audio message. Different groups,
      different settings: 354 spoken answers from 53 students collected
      one-on-one, 595 typed answers collected in class. Source: Hankeln et al.,{" "}
      <em>Technology, Knowledge and Learning</em>, 2025.
    </figcaption>
  </figure>
);

const longMessageRows = [
  { age: "18–24", text: 71, voice: 24, unsure: 5 },
  { age: "25–34", text: 82, voice: 15, unsure: 3 },
  { age: "35–44", text: 76, voice: 18, unsure: 6 },
  { age: "45–54", text: 80, voice: 12, unsure: 8 },
  { age: "55+", text: 78, voice: 8, unsure: 14 },
];

const StackedBarChart = () => {
  const left = 72;
  const width = 448;
  const pct = width / 100;
  return (
    <figure className="my-9 rounded-[18px] bg-lavender p-4 sm:p-6">
      <svg
        viewBox="0 0 520 330"
        className="h-auto w-full"
        role="img"
        aria-labelledby="stacked-title stacked-desc"
      >
        <title id="stacked-title">
          Preferred format for sending a long message, by age, UK smartphone users, 2022
        </title>
        <desc id="stacked-desc">
          A text or instant message was the most popular choice in every age
          group: 71% of 18- to 24-year-olds, 82% of 25- to 34-year-olds, 76% of
          35- to 44-year-olds, 80% of 45- to 54-year-olds, and 78% of those 55 and
          older. A voice note was preferred by 24%, 15%, 18%, 12%, and 8%
          respectively.
        </desc>
        <g fontSize="18" fill="#40424D">
          <rect x="0" y="10" width="16" height="16" rx="3" fill="#6E40F3" />
          <text x="24" y="24">Text message</text>
          <rect x="160" y="10" width="16" height="16" rx="3" fill="#66E6B5" />
          <text x="184" y="24">Voice note</text>
          <rect x="304" y="10" width="16" height="16" rx="3" fill="#DDDFE7" />
          <text x="328" y="24">Don&rsquo;t know</text>
        </g>
        {longMessageRows.map((row, i) => {
          const y = 56 + i * 54;
          const textW = row.text * pct;
          const voiceW = row.voice * pct;
          const unsureW = row.unsure * pct;
          return (
            <g key={row.age}>
              <text x={left - 12} y={y + 25} fontSize="19" fontWeight="600" fill="#281B55" textAnchor="end">
                {row.age}
              </text>
              <rect x={left} y={y} width={textW} height="38" fill="#6E40F3" />
              <rect x={left + textW} y={y} width={voiceW} height="38" fill="#66E6B5" />
              <rect x={left + textW + voiceW} y={y} width={unsureW} height="38" fill="#DDDFE7" />
              <text x={left + 12} y={y + 25} fontSize="19" fontWeight="600" fill="#FFFFFF">
                {row.text}%
              </text>
              <text x={left + textW + voiceW / 2} y={y + 25} fontSize="17" fontWeight="600" fill="#201839" textAnchor="middle">
                {row.voice}%
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 text-center text-sm text-graphite">
        &ldquo;Text message&rdquo; includes instant messages. Adults only; no
        children were surveyed. 1,956 UK smartphone users, fieldwork May 5&ndash;6,
        2022. Source:{" "}
        <Link
          href="https://docs.cdn.yougov.com/z8hhxi24ck/YouGov%20-%20Voice%20notes.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          YouGov survey tables
        </Link>
        , page 7.
      </figcaption>
    </figure>
  );
};

const chatbotUseRows = [
  { label: "Ages 9–12", value: 58, overall: false },
  { label: "Ages 13–15", value: 71, overall: false },
  { label: "Ages 16–17", value: 77, overall: false },
  { label: "All 9–17", value: 67, overall: true },
];

const ColumnChart = () => {
  const baseline = 236;
  const scale = 2;
  return (
    <figure className="my-9 rounded-[18px] bg-lavender p-4 sm:p-6">
      <svg
        viewBox="0 0 520 280"
        className="h-auto w-full"
        role="img"
        aria-labelledby="column-title column-desc"
      >
        <title id="column-title">Share of U.S. kids who have used an AI chatbot, by age, 2026</title>
        <desc id="column-desc">
          58% of 9- to 12-year-olds, 71% of 13- to 15-year-olds, and 77% of 16-
          to 17-year-olds have used an AI chatbot. Across all 9- to 17-year-olds,
          the figure is 67%.
        </desc>
        <line x1="0" y1={baseline} x2="520" y2={baseline} stroke="#BCBFCC" strokeWidth="2" />
        {chatbotUseRows.map((row, i) => {
          const x = 20 + i * 130;
          const h = row.value * scale;
          return (
            <g key={row.label}>
              <rect
                x={x}
                y={baseline - h}
                width="90"
                height={h}
                rx="8"
                fill={row.overall ? "#281B55" : "#6E40F3"}
              />
              <text x={x + 45} y={baseline - h - 12} fontSize="24" fontWeight="600" fill="#281B55" textAnchor="middle">
                {row.value}%
              </text>
              <text x={x + 45} y={baseline + 30} fontSize="19" fill="#40424D" textAnchor="middle">
                {row.label}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-3 text-center text-sm text-graphite">
        Any AI chatbot use, typed or spoken; the survey did not measure voice use
        separately. 1,204 U.S. 9- to 17-year-olds, March 18&ndash;26, 2026. Source:{" "}
        <Link
          href="https://www.commonsensemedia.org/sites/default/files/research/report/2026-ai-use-by-tweens-and-teens.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Common Sense Media Census: AI Use by Tweens and Teens, 2026
        </Link>
        .
      </figcaption>
    </figure>
  );
};

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Voice AI for Kids: Speaking vs. Typing",
  description:
    "Kids aren't abandoning the keyboard. School studies show something more useful: speaking helps many children say more. What that means for voice AI, and what voice doesn't fix.",
  path: "/blog/ai-agents/voice-ai-next-generation",
  type: "article",
  image: "/images/blog/voice-ai-next-generation-hero.png",
  keywords: [
    "voice ai for kids",
    "speech to text vs typing for kids",
    "voice agent vs voice assistant",
    "do young people prefer voice notes",
    "children dictation research",
    "voice ai next generation",
  ],
});

const VoiceAINextGeneration = () => {
  return (
    <ArticleLayout
      title="The Real Case for Voice AI Isn't That Kids Stopped Typing"
      description="Young people still prefer text for most messages. The stronger evidence is different: when children can speak instead of type, many of them say more. Here's what the research supports, what it doesn't, and where voice agents fit."
      image="/images/blog/voice-ai-next-generation-hero.png"
      imageAlt="Illustration of a microphone emitting a sound waveform that resolves into lines of written text with a blinking cursor, on a deep purple background"
      datePublished="2026-10-20"
      dateModified="2026-10-20"
      url="/blog/ai-agents/voice-ai-next-generation"
      categoryKey="kai-ai"
      authorCredentials="Reviewed by the Kaizen Health editorial team"
      authorBio="The Kaizen Health editorial team researches and writes about family health and the AI tools families use to manage it."
      readTime="10 min read"
      tags={["Kai & AI"]}
      sections={sections}
      keywords={[
        "voice ai for kids",
        "speech to text vs typing for kids",
        "voice agent vs voice assistant",
        "children dictation research",
      ]}
    >
      <p>
        The popular version of this story says a generation raised on voice
        notes and smart speakers is done with typing, so voice AI wins by
        default. The polling doesn&rsquo;t support that. Even 18- to
        24-year-olds, the age group that likes voice notes most, prefer a text
        for long messages by roughly three to one.
      </p>
      <p>
        There is a better case for voice AI, and it comes from classrooms
        rather than messaging habits. When children can speak instead of type,
        many of them say more: longer answers, richer vocabulary, more
        reasoning. That&rsquo;s a reason to build voice in, not as a
        replacement for text, but as a way to let people express a thought
        before they can polish it.
      </p>

      <KeyTakeaways
        items={[
          "Young adults like voice notes more than older adults do (43% of UK 18- to 24-year-olds vs. 11% of those 55 and older), but 71% of 18- to 24-year-olds still prefer a text for sending a long message (YouGov, 2022).",
          "In a German study, fifth and sixth graders' spoken answers averaged about 33 words with 1.8 explanation arguments, compared with about 10 words and 0.6 arguments typed. Different groups and settings mean the input method can't take all the credit.",
          "A voice assistant can transcribe a child correctly and still miss the point: in one lab study, child-led speech was transcribed with 84% accuracy, yet devices responded meaningfully only about half the time.",
          "67% of U.S. 9- to 17-year-olds have used an AI chatbot (Common Sense Media, 2026). Conversation with AI is already familiar, which makes voice a natural next input. That part is a forecast, not a finding.",
          "Voice doesn't make AI safer or healthier on its own. A four-week randomized study of 981 adults found no significant difference between text and voice chatbot conditions on psychosocial outcomes.",
        ]}
      />

      <HeadingWithAnchor id="the-popular-story">
        The popular story: a generation done with typing
      </HeadingWithAnchor>
      <p>
        The argument has real evidence behind it, which is why it spreads. In
        YouGov&rsquo;s May 2022 survey of UK adults, 43% of 18- to 24-year-old
        smartphone users said they liked receiving voice notes, compared with
        11% of those 55 and older (
        <Link
          href="https://yougov.com/en-gb/articles/42817-how-many-britons-voice-notes"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouGov, June 2022
        </Link>
        ). Teenagers have also taken to conversational AI quickly. Pew Research
        Center found that 64% of U.S. teens aged 13 to 17 had used an AI
        chatbot, and about three in ten used one every day (
        <Link
          href="https://www.pewresearch.org/internet/2025/12/09/teens-social-media-and-ai-chatbots-2025/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pew Research Center, December 2025
        </Link>
        ).
      </p>
      <p>
        Put those two trends side by side and the conclusion seems obvious:
        young people like talking, they like AI, so they&rsquo;ll talk to AI
        instead of typing to it. The trouble is that each data point measures
        something different. Liking voice notes is not a preference for
        dictation. Using a chatbot says nothing about whether you typed or
        spoke to it. And adult polling can&rsquo;t stand in for what
        school-age children prefer.
      </p>

      <HeadingWithAnchor id="what-polling-shows">
        What the polling actually shows
      </HeadingWithAnchor>
      <p>
        Text still wins, in every age group. The same 2022 YouGov tables that
        show young adults warming to voice notes also show that 71% of 18- to
        24-year-olds would rather send a long message as a text, against 24%
        who&rsquo;d choose a voice note. For short messages the gap is wider:
        91% text, 6% voice note.
      </p>
      <StackedBarChart />
      <p>
        Newer data points the same way. In March 2026 polling of Great Britain
        adults, 91% of adult Gen Z respondents regularly used messaging, while
        15% of all adults regularly used voice notes (
        <Link
          href="https://yougov.com/en-gb/articles/54490-how-brits-communicate-in-2026-messaging-dominates-while-ai-use-is-emerging"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouGov, April 2026
        </Link>
        ). Voice notes are growing at the margins, and messaging remains the
        default. Neither survey asked whether messages were typed or dictated,
        so neither measures keyboard use directly.
      </p>
      <p>
        We also looked for a representative study that asks today&rsquo;s
        children whether they&rsquo;d rather dictate or type everyday
        messages, and then connects that to how they use AI. We didn&rsquo;t
        find one. That doesn&rsquo;t prove it doesn&rsquo;t exist, but it does
        mean that &ldquo;Gen Alpha prefers talking to typing&rdquo; is, for
        now, an assumption.
      </p>

      <HeadingWithAnchor id="what-kids-can-say">
        Where speaking does help: saying more
      </HeadingWithAnchor>
      <p>
        The strongest evidence for voice isn&rsquo;t about preference. It&rsquo;s
        about expression. When children speak, many of them produce more
        complete thoughts than when they type, at least in the tasks
        researchers have tested.
      </p>
      <p>
        In a Swedish study of 81 students in Grades 4 and 5, mostly from
        regular classrooms, each child wrote stories both with speech-to-text
        and with a keyboard, in counterbalanced order. With speech-to-text they
        produced longer texts, in less time, with more varied vocabulary and
        longer sentences (
        <Link
          href="https://eric.ed.gov/?id=EJ1499721"
          target="_blank"
          rel="noopener noreferrer"
        >
          Almgren Bäck, Nordström, and Svensson, <em>Reading &amp; Writing
          Quarterly</em>, 2025
        </Link>
        ). Because every child used both methods, this is the most direct
        comparison available.
      </p>
      <p>
        A German study of fifth and sixth graders explaining math problems
        found a bigger gap. Spoken answers, given by dictation or audio
        message, averaged about 33 words and 1.8 explanation arguments. Typed
        answers averaged about 10 words and 0.6 arguments (
        <Link
          href="https://link.springer.com/article/10.1007/s10758-025-09905-y"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hankeln et al., <em>Technology, Knowledge and Learning</em>, 2025
        </Link>
        ).
      </p>
      <DumbbellChart />
      <p>
        The authors are explicit about the limit: spoken answers came from one
        group of students working one-on-one with a test administrator, and
        typed answers from different students in whole-class settings. The
        difference can&rsquo;t be attributed to the input method alone. The
        finding is about expression in a specific task, not intelligence.
        Speaking didn&rsquo;t make anyone smarter. It made more of what they
        already understood visible.
      </p>
      <p>
        Speech-to-text can also help children who find writing hard. In a
        small Swedish study of 16 children aged 10 to 13 with reading and
        writing difficulties and 12 comparison peers, final texts written with
        speech-to-text had fewer errors, with a bigger benefit for the
        difficulties group. Overall text quality didn&rsquo;t differ between
        methods, and recognition mistakes still had to be corrected (
        <Link
          href="https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2023.1133930/full"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kraft, <em>Frontiers in Education</em>, 2023
        </Link>
        ).
      </p>

      <HeadingWithAnchor id="hearing-is-not-understanding">
        Hearing words isn&rsquo;t understanding them
      </HeadingWithAnchor>
      <p>
        A system that transcribes a child correctly can still fail to help. In
        a lab study of 28 children aged 5 to 10 talking to a commercial voice
        assistant, child-led conversation was transcribed with 84% accuracy,
        but the device responded meaningfully and on topic only about half the
        time (
        <Link
          href="https://www.sciencedirect.com/science/article/pii/S2212868922000587"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kim et al., <em>International Journal of Child-Computer
          Interaction</em>, 2022
        </Link>
        ). Responses improved as children got older and their phrasing became
        more standard.
      </p>
      <StatTrio
        stats={[
          { figure: "84%", caption: "of child-led speech transcribed correctly by a commercial voice assistant (Kim et al., 2022)" },
          { figure: "~50%", caption: "of the time, those same children got a meaningful, on-topic response" },
          { figure: "2.93x", caption: "faster English text entry by speech than keyboard, for university students in a lab (Ruan et al., 2017)" },
        ]}
      />
      <p>
        Recognition itself is still uneven for the youngest speakers. A 2025
        study tested two versions of Siri and Alexa on speech from children
        aged 2, 3, and 5, and found that human listeners far outperformed the assistants at
        every age, especially for the youngest children, even though Siri had
        improved (
        <Link
          href="https://pubmed.ncbi.nlm.nih.gov/40029172/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bradley, Yu, and Johnson, <em>JASA Express Letters</em>, 2025
        </Link>
        ). These are specific systems, not every voice AI, and newer models may
        do better. They&rsquo;re still a good reason to doubt claims that any
        child can simply talk to any device.
      </p>
      <p>
        The often-quoted &ldquo;three times faster&rdquo; figure needs the
        same care. It comes from a controlled study of 48 university students (24 in English, 24 in
        Mandarin) transcribing short messages on an iPhone 6 Plus: English speech entry
        ran at 153 words per minute against 52 for the keyboard. Speech also
        left slightly more uncorrected errors in the final text, 1.30% versus
        0.79% (
        <Link
          href="https://arxiv.org/abs/1608.07323v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ruan et al., ACM IMWUT, 2017
        </Link>
        ). Adults, ideal conditions, copied text. It is not a speed estimate for
        a child composing their own thoughts.
      </p>

      <HeadingWithAnchor id="dictation-assistant-agent">
        Dictation, assistants, and agents are different things
      </HeadingWithAnchor>
      <p>
        Much of the confusion comes from treating every kind of speaking to a
        phone as the same behavior. They aren&rsquo;t, and the research above
        applies to some of them and not others.
      </p>
      <div className="my-9 overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 font-semibold">Term</th>
              <th className="p-2 font-semibold">What it does</th>
              <th className="p-2 font-semibold">Don&rsquo;t confuse it with</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2 font-semibold">Voice note</td>
              <td className="p-2">An audio recording sent to another person</td>
              <td className="p-2">Dictation, or a live conversation with AI</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-semibold">Dictation (speech-to-text)</td>
              <td className="p-2">Turns your speech into editable written text</td>
              <td className="p-2">AI writing for you, or AI talking back</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-semibold">Voice assistant</td>
              <td className="p-2">Answers questions or runs a fixed set of commands, like setting a timer</td>
              <td className="p-2">An agent with access to your information and tools</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-semibold">Voice agent</td>
              <td className="p-2">Takes a spoken request and uses context or tools to help finish a task, asking follow-up questions when needed</td>
              <td className="p-2">An AI companion built to simulate a relationship</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        The school studies are about dictation. The voice-assistant studies are
        about assistants. Neither tests a voice agent, which does something
        different with the words it hears. For a closer look at that line in
        a text context, see our explainer on{" "}
        <Link href="/blog/ai-agents/agent-vs-chatbot">
          the difference between an AI agent and a chatbot
        </Link>
        .
      </p>

      <HeadingWithAnchor id="why-voice-agents">
        Why voice agents could matter more to the next generation
      </HeadingWithAnchor>
      <p>
        Conversation with AI is already ordinary for most kids. Common Sense
        Media&rsquo;s 2026 census found that 67% of U.S. 9- to 17-year-olds had
        used an AI chatbot, rising with age from 58% of 9- to 12-year-olds to
        77% of 16- to 17-year-olds.
      </p>
      <ColumnChart />
      <p>
        Kids are also bringing personal questions to these tools. Among
        9- to 17-year-olds who use AI, 57% have used it for information or
        advice about their health or body. Most would still go to a trusted
        adult first with a health question (73%), but 12% would turn to an AI
        chatbot first.
      </p>
      <p>
        From here on, this is our reading of the evidence, not something any
        study has measured. Three things point toward voice agents mattering
        more for people growing up now:
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Expression before interface fluency.",
            text: "The school studies suggest writing mechanics can hide what a child understands. An agent that listens doesn't require a polished written prompt before it can help.",
          },
          {
            lead: "Room to clarify.",
            text: "Dictation captures words once. A conversation can repair a misunderstanding with a follow-up question, which is exactly where the voice-assistant studies show older systems falling short.",
          },
          {
            lead: "A familiar habit, with a new input.",
            text: "Talking to AI by text is already common. Speaking is a short step from there, though voice-specific adoption still needs to be measured on its own.",
          },
        ]}
      />
      <p>
        None of this is unique to children. A caregiver with a toddler on one
        arm, or an older parent who finds a phone keyboard hard to use, may get
        the same benefit from saying a question out loud. Those are plausible
        use cases, not populations the child studies measured.
      </p>

      <HeadingWithAnchor id="what-voice-does-not-fix">
        What voice doesn&rsquo;t fix
      </HeadingWithAnchor>
      <p>
        Speaking to an AI doesn&rsquo;t make the experience safer or better for
        wellbeing by itself. In a four-week randomized study of 981 adults
        assigned to text, neutral-voice, or engaging-voice chatbot conditions,
        researchers found no significant effects of the conditions on the
        psychosocial outcomes they studied. Participants who chose to use the
        chatbot more, in any condition, tended to have worse outcomes, including
        more loneliness and emotional dependence (
        <Link
          href="https://arxiv.org/abs/2503.17473v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fang et al., preprint revised October 2025
        </Link>
        ). That last finding is an association, not proof that heavy use causes
        harm, and the study did not include children.
      </p>
      <p>
        Content matters more than the input method. Among 9- to 17-year-olds who
        use AI chatbots, 17% reported seeing something they felt was
        inappropriate for their age, and only a third of them told a trusted
        adult (Common Sense Media, 2026). A voice interface carries that same
        risk into a format that&rsquo;s harder for a parent to glance over.
      </p>
      <PullQuote quote="Voice changes how easily a thought gets out. It doesn't change whether the answer that comes back is right." />
      <p>
        Text also keeps doing jobs voice can&rsquo;t. You can reread it, edit it,
        search it, and send it in a quiet room. The YouGov numbers suggest people
        already know this: voice for some moments, text for most. The products
        worth building offer both, and let the person choose.
      </p>

      <HeadingWithAnchor id="for-families">
        What this means for families
      </HeadingWithAnchor>
      <p>
        If you&rsquo;re a parent, the research supports a few practical moves,
        none of which require believing that typing is finished:
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Let a child talk it through, then edit.",
            text: "For a child who freezes at the keyboard, dictating a first draft and then revising it in text gets the thinking out without skipping the writing.",
          },
          {
            lead: "Keep keyboarding and handwriting in the mix.",
            text: "None of the studies suggest speech should replace literacy instruction. They suggest it's a useful complement.",
          },
          {
            lead: "Match the tool to the child's age.",
            text: "Recognition of young children's speech is still uneven, and general-purpose assistants aren't designed for them. Check a product's age guidance before handing it over.",
          },
          {
            lead: "Stay in the loop on health questions.",
            text: "Kids are already asking AI about their bodies. Make sure they know an AI answer is a starting point for a conversation with you or a clinician, not the last word.",
          },
        ]}
      />
      <p>
        For adults managing family health, the case for voice is the same one
        the classroom studies make, just with different hands full. It&rsquo;s
        often easier to say &ldquo;what did Mom&rsquo;s cardiologist change at
        the last visit?&rdquo; than to type it. For how agents handle that kind
        of question across a family&rsquo;s records, start with our{" "}
        <Link href="/blog/ai-agents">
          complete guide to AI agents in family health
        </Link>
        , and before connecting any tool to that data, read{" "}
        <Link href="/blog/ai-agents/is-ai-safe-for-medical-records">
          whether it&rsquo;s safe to share family medical records with AI
        </Link>
        .
      </p>
      <ProductCallout
        body="Kai, Kaizen's AI assistant, now takes live voice conversations. Ask about a parent's records out loud, follow the transcript as you talk, and come back to the saved conversation later. Kai is built for adults managing their family's health, not for children."
        buttonLabel="Talk with Kai"
      />
      <p>
        See everything that shipped with voice in{" "}
        <Link href="/updates/1-17-0-kai-voice-and-health-record-context">
          the Kaizen 1.17 release notes
        </Link>
        .
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default VoiceAINextGeneration;
