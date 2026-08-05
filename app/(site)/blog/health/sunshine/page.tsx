import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import NumberedPoints from "@/components/Blog/content/NumberedPoints";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Why is sunlight important for older adults?",
    answer:
      "Sunlight helps older adults produce vitamin D3, which improves calcium absorption and supports stronger bones, reducing the risk of osteoporosis and hip fractures. It also boosts mood by activating serotonin and dopamine, regulates sleep by helping set the body's internal clock, and supports immune function, which naturally declines with age.",
  },
  {
    question: "How much sun exposure do seniors need each day?",
    answer:
      "A common starting point is 15 to 30 minutes outdoors, 3 to 5 times a week, preferably outside peak UV hours. Needs vary by skin tone, location, season, health, and medication use, so a clinician can give more specific advice.",
  },
  {
    question: "What are safe sun exposure practices for older adults?",
    answer:
      "Older adults should avoid the strongest midday sun between 10 a.m. and 3 p.m., use SPF 30+ sunscreen on exposed skin for outings longer than 30 minutes, stay hydrated, and check with a doctor or pharmacist about medications that can increase sun sensitivity.",
  },
];

const sections = [
  { id: "sun-exposure-senior-health", label: "Sunlight and health after 65" },
  { id: "sun-exposure-importance", label: "Why sunshine matters for older adults" },
  { id: "sun-exposure-top-benefits", label: "Top health benefits of sunshine" },
  { id: "sun-exposure-more-sunshine", label: "Getting more sunshine safely" },
  { id: "sun-exposure-safety-tips", label: "What to avoid" },
  { id: "sun-exposure-top-summary", label: "Make outdoor time part of the routine" },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Sunlight Benefits for Older Adults",
  description:
    "Learn how daily sunshine supports bone strength, mood, sleep, and immunity in older adults, with practical guidance for safe and consistent exposure.",
  path: "/blog/health/sunshine",
  type: "article",
  image: "/images/blog/sunshine.png",
});

const SunshineBlogPage = () => {
  return (
    <ArticleLayout
      title="How Sunlight Supports Health in Older Adults"
      description="How regular sunlight exposure can support bone health, mood, immunity, and sleep in older adults."
      image="/images/blog/sunshine.png"
      imageAlt="Older adult enjoying sunshine in a park"
      datePublished="2025-02-01"
      url="/blog/health/sunshine"
      categoryKey="aging-well"
      readTime="5 min read"
      tags={["Aging well"]}
      sections={sections}
    >
      <HeadingWithAnchor id="sun-exposure-senior-health">
        Sunlight and health after 65
      </HeadingWithAnchor>
      <p>
        Sunlight helps the body make vitamin D and helps regulate the
        sleep-wake cycle. Time outdoors can also support mood, movement,
        and social contact. Many older adults get little direct sun,
        especially when mobility or health problems keep them indoors.
      </p>

      <HeadingWithAnchor id="sun-exposure-importance">
        Why sunshine is important for older adults
      </HeadingWithAnchor>
      <p>
        Older adults need vitamin D, but production
        decreases with age. Since the skin&apos;s ability to synthesize
        vitamin D from sunlight weakens over time, and many seniors
        spend more time indoors, deficiencies are common. Together with
        calcium, vitamin D helps protect against osteoporosis by
        supporting normal bone mineralization, according to the{" "}
        <Link
          href="https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/"
          target="_blank"
        >
          NIH Office of Dietary Supplements
        </Link>
        . Deficiency can contribute to fatigue, weak bones, poor
        immunity, and higher risk of depression. Supplements can help
        when sunlight and diet do not provide enough vitamin D.
      </p>

      <HeadingWithAnchor id="sun-exposure-top-benefits">
        Top health benefits of sunshine for seniors
      </HeadingWithAnchor>
      <NumberedPoints
        points={[
          {
            lead: "Stronger bones and fracture prevention.",
            text: "Sunlight helps convert cholesterol in the skin into vitamin D3, which improves calcium absorption. This strengthens bones and helps prevent osteoporosis and hip fractures, a leading cause of disability in seniors.",
          },
          {
            lead: "Mood and mental health support.",
            text: "Sunlight activates serotonin and dopamine production, reducing low mood. For older adults living alone or in care homes, time outside may also ease isolation.",
          },
          {
            lead: "Better sleep regulation.",
            text: "Bright light during the day helps set the body's internal clock. Regular sunlight helps regulate melatonin production, making it easier to fall asleep and stay asleep.",
          },
          {
            lead: "Immune system boost.",
            text: "Sunlight stimulates vitamin D, which enhances immune cell function. This is especially important for older adults, whose immune systems naturally decline with age.",
          },
          {
            lead: "More movement and social interaction.",
            text: "Spending time outside often encourages gentle exercise and connection, two factors linked to healthy aging. Activities like walking, gardening, or sitting at a park can offer sunlight exposure while promoting social well-being.",
          },
        ]}
      />

      <HeadingWithAnchor id="sun-exposure-more-sunshine">
        How older adults can get more sunshine safely
      </HeadingWithAnchor>
      <ul>
        <li>
          <strong>Set a daily routine:</strong> Encourage going
          outside in the early morning or late afternoon when the sun
          is gentle. Just 15–30 minutes a day, 3 to 5 times a week,
          can be a practical starting point. Set a reminder or build it into
          daily activities like having coffee or reading outdoors.
        </li>
        <li>
          <strong>Create sun-friendly spaces:</strong> Make outdoor
          areas accessible and inviting. A comfortable chair on a
          porch, balcony, or backyard can encourage routine use. For
          those with mobility limitations, even sitting near a sunny
          window helps.
        </li>
        <li>
          <strong>Take short walks:</strong> Daily short
          walks in sunny weather combine
          sunshine with physical activity. Use flat, even sidewalks or
          accessible trails and wear supportive shoes.
        </li>
        <li>
          <strong>Garden or do light yard work:</strong> Gardening
          provides light exercise, stress relief, and sun exposure.
          Even tending to potted plants on a patio or windowsill
          counts.
        </li>
        <li>
          <strong>Join outdoor social activities:</strong> Group
          walks, tai chi in the park, or outdoor classes combine sun,
          activity, and time with other people.
        </li>
        <li>
          <strong>Dress smart for the sun:</strong> Wear light,
          breathable clothing and a hat for comfort. Use sunscreen on
          exposed areas if spending longer than 30 minutes in direct
          sun. Aim for enough exposure to produce vitamin
          D without risking sunburn.
        </li>
        <li>
          <strong>Combine sunshine with routine tasks:</strong> Take
          phone calls outside, eat lunch on the porch, or read the
          paper in the garden. Layering sunlight exposure with daily
          routines makes it easier to remember.
        </li>
      </ul>

      <HeadingWithAnchor id="sun-exposure-safety-tips">
        What to avoid: sun exposure safety tips
      </HeadingWithAnchor>
      <ul>
        <li>
          <strong>Avoid midday sun (10 a.m. to 3 p.m.):</strong> This
          is when UV rays are strongest and pose the highest risk for
          sunburn and skin damage.
        </li>
        <li>
          <strong>Use SPF 30+ sunscreen:</strong> Apply to the face,
          arms, and any exposed skin if you&apos;ll be outdoors for more
          than 30 minutes.
        </li>
        <li>
          <strong>Stay hydrated:</strong> Drink water regularly,
          especially in warm weather, to avoid dehydration while
          outdoors.
        </li>
        <li>
          <strong>
            Monitor medications that increase sun sensitivity:
          </strong>{" "}
          Some medications can make skin more sensitive to sunlight.
          Always consult your doctor or pharmacist.
        </li>
      </ul>

      <HeadingWithAnchor id="sun-exposure-top-summary">
        Make outdoor time part of the routine
      </HeadingWithAnchor>
      <p>
        Regular outdoor time can support bone health, sleep, mood, and
        movement. Start with a short walk, coffee on the porch, or a
        few minutes in the garden, while following sun-safety advice
        from your doctor or pharmacist.
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default SunshineBlogPage;
