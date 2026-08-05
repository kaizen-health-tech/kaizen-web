import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import NumberedPoints from "@/components/Blog/content/NumberedPoints";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "Can eating yogurt reduce colorectal cancer risk?",
    answer:
      "Emerging research published in Gut Microbes found that people eating at least two servings of yogurt per week had a 20% lower risk of developing Bifidobacterium-positive proximal (right-sided) colon cancer, based on a study that tracked over 130,000 people for more than 30 years. Yogurt is not a cure, but it appears to be part of a gut-friendly prevention strategy.",
  },
  {
    question: "How much yogurt should you eat for potential colon cancer protection?",
    answer:
      "The study associated benefits with at least two 6-ounce servings of yogurt per week. Plain Greek yogurt is recommended over sugar-loaded varieties, and those who are lactose intolerant can consider fermented options like Greek yogurt or skyr, or plant-based yogurts with live active cultures.",
  },
  {
    question: "Why does yogurt specifically protect against right-sided colon cancer?",
    answer:
      "The association was strongest for tumors containing Bifidobacterium. This probiotic strain is linked to a stronger gut lining, butyrate production, and competition with harmful bacteria. Researchers observed the clearest association in right-sided colon cancers, which can be harder to detect early.",
  },
];

const sections = [
  { id: "researchers-found", label: "What the researchers found" },
  { id: "how-yogurt-affects-gut", label: "How yogurt may affect the gut" },
  { id: "how-much-yogurt", label: "How much yogurt should you eat?" },
  { id: "what-this-means", label: "What this means in practice" },
  { id: "context", label: "Put the finding in context" },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Yogurt and Colorectal Cancer Risk",
  description:
    "Explore emerging evidence on yogurt intake, gut microbiome factors, and potential colorectal cancer risk reduction, including practical dietary takeaways.",
  path: "/blog/cancer/colorectal-cancer-risk",
  type: "article",
  image: "/images/blog/yogurt.jpeg",
});

const ColorectalCancerRisk = () => {
  return (
    <ArticleLayout
      title="What a Long-Running Study Found About Yogurt and Colon Cancer"
      description="Research published in Gut Microbes found an association between regular yogurt intake and a lower risk of one type of colon cancer."
      image="/images/blog/yogurt.jpeg"
      imageAlt="Bowl of yogurt with berries"
      datePublished="2025-01-25"
      url="/blog/cancer/colorectal-cancer-risk"
      categoryKey="nutrition"
      readTime="4 min read"
      tags={["Nutrition"]}
      sections={sections}
    >
      <p>
        <Link
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11834522/"
          target="_blank"
        >
          Research published in <em>Gut Microbes</em>
        </Link>{" "}
        found an
        association between eating at least two servings of yogurt per
        week and a 20% lower risk of one type of colon cancer. The
        study does not show that yogurt prevents or cures cancer.
      </p>

      <HeadingWithAnchor id="researchers-found">
        What the researchers found
      </HeadingWithAnchor>

      <h3>What did researchers find?</h3>
      <p>
        Scientists followed more than 130,000 people for over 30
        years. People who ate at least two servings of yogurt a week
        had a 20% lower risk of developing <em>Bifidobacterium</em>
        -positive proximal colon cancer.
      </p>

      <h3>Why focus on Bifidobacterium?</h3>
      <p>
        <em>Bifidobacterium</em> is a probiotic strain found in yogurt.
        Tumors containing this bacterium made up 31% of the cases
        studied, and the association with yogurt was strongest for
        these tumors.
      </p>

      <HeadingWithAnchor id="how-yogurt-affects-gut">
        How yogurt may affect the gut
      </HeadingWithAnchor>

      <h3>Probiotics and the gut</h3>
      <NumberedPoints
        points={[
          {
            lead: "Strengthen the gut lining,",
            text: "which can limit inflammation caused by harmful bacteria.",
          },
          {
            lead: "Produce butyrate,",
            text: "a compound involved in DNA repair and the suppression of cancer growth.",
          },
          {
            lead: "Compete with harmful bacteria,",
            text: "which may reduce the production of toxins linked to tumor growth.",
          },
        ]}
      />

      <h3>Why right-sided colon cancer?</h3>
      <p>
        The association was strongest for right-sided, or proximal,
        colon cancers. These cancers can be harder to detect early and
        have a higher mortality rate.
      </p>

      <HeadingWithAnchor id="how-much-yogurt">
        How much yogurt should you eat?
      </HeadingWithAnchor>
      <p>
        The study compared people who ate at least two 6-ounce
        servings per week with those who ate less. If you add yogurt
        to your diet, plain Greek yogurt has less added sugar than
        many flavored varieties.
      </p>

      <h3>Lactose intolerant?</h3>
      <p>
        Fermented yogurts like Greek or skyr are lower in lactose, and
        plant-based yogurts with live cultures can be a good
        alternative.
      </p>

      <HeadingWithAnchor id="what-this-means">
        What this means in practice
      </HeadingWithAnchor>
      <ul>
        <li>
          Colorectal cancer incidence has risen{" "}
          <Link
            href="https://pressroom.cancer.org/rectal-cancer-incidence-rising"
            target="_blank"
          >
            51% in adults under 50
          </Link>{" "}
          since 1994, according to the American Cancer Society.
        </li>
        <li>
          Yogurt is widely available and relatively affordable, but
          this observational study does not establish it as a
          prevention tool.
        </li>
        <li>
          Improving access to nutritious food in underserved areas
          could help more people include fermented foods in their
          diets.
        </li>
      </ul>

      <HeadingWithAnchor id="context">
        Put the finding in context
      </HeadingWithAnchor>
      <p>
        Yogurt is not a cure, and one observational result should not
        replace established prevention measures. Regular screening,
        exercise, and a balanced diet still matter most.
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default ColorectalCancerRisk;
