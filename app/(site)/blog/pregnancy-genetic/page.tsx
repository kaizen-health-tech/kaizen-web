import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import NumberedPoints from "@/components/Blog/content/NumberedPoints";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "What genetic conditions are commonly screened for during pregnancy?",
    answer:
      "The most commonly screened genetic conditions during pregnancy include Down syndrome (Trisomy 21), cystic fibrosis, sickle cell disease, Tay-Sachs disease, and hemophilia. Screening approach depends on family history, ethnicity, and personal risk factors, so an OB/GYN or genetic counselor should guide which tests are appropriate.",
  },
  {
    question: "Can at-home genetic carrier tests replace a doctor's genetic counseling?",
    answer:
      "No. At-home carrier tests, which typically screen for conditions like cystic fibrosis, spinal muscular atrophy, and Fragile X syndrome via a saliva or cheek swab, offer convenience but should not replace professional medical advice. Results should always be confirmed and interpreted with a genetic counselor or OB/GYN.",
  },
  {
    question: "How can AI help identify genetic risks during pregnancy?",
    answer:
      "AI can help review large genetic datasets, flag possible risk factors, and translate complex terminology into plain language. A qualified clinician should still interpret the results and explain what they mean for a pregnancy.",
  },
];

const sections = [
  { id: "common-conditions", label: "Common genetic conditions during pregnancy" },
  { id: "ai-help", label: "How AI can help identify genetic risks" },
  { id: "at-home-tests", label: "At-home genetic tests before pregnancy" },
  { id: "kaizen-assists", label: "Tracking and sharing your records" },
  { id: "what-to-do", label: "What to do with the information" },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Genetic Conditions During Pregnancy",
  description:
    "Learn common genetic conditions in pregnancy, screening considerations, and how AI-supported analysis can help families prepare for informed prenatal decisions.",
  path: "/blog/pregnancy-genetic",
  type: "article",
  image: "/images/blog/pregnancy-genetic.jpeg",
});

const PregnancyGenetic = () => {
  return (
    <ArticleLayout
      title="Genetic Conditions During Pregnancy"
      description="Common prenatal genetic conditions, screening options, and the role AI can play in making complex results easier to understand."
      image="/images/blog/pregnancy-genetic.jpeg"
      imageAlt="Genetic conditions during pregnancy"
      datePublished="2025-01-06"
      url="/blog/pregnancy-genetic"
      categoryKey="pregnancy"
      readTime="6 min read"
      tags={["Pregnancy"]}
      sections={sections}
    >
      <p>
        Expectant parents often have questions about their baby&apos;s
        health, including the chance of passing along a genetic
        condition. According to the
        Centers for Disease Control and Prevention (CDC), genetic
        disorders are caused by changes or mutations in the DNA{" "}
        <span className="text-sm italic">
          [1] CDC - &quot;What are Genetic Disorders?&quot;
        </span>
        . Knowing how these conditions may be inherited can make
        conversations with an OB/GYN or genetic counselor more
        useful.
      </p>

      <HeadingWithAnchor id="common-conditions">
        Common genetic conditions during pregnancy
      </HeadingWithAnchor>
      <p>
        Clinicians commonly discuss the following conditions during
        pregnancy because of their prevalence or effects on fetal
        development:
      </p>
      <NumberedPoints
        points={[
          {
            lead: "Down syndrome (Trisomy 21).",
            text: "Occurs when there is an extra copy of chromosome 21, leading to developmental and intellectual disabilities [2].",
          },
          {
            lead: "Cystic fibrosis.",
            text: "A recessive genetic disorder affecting the lungs and digestive system. Both parents must carry the gene for the child to be at risk.",
          },
          {
            lead: "Sickle cell disease.",
            text: "An inherited blood disorder more prevalent in certain ethnic groups. It causes red blood cells to become misshapen, resulting in various complications.",
          },
          {
            lead: "Tay-Sachs disease.",
            text: "A rare disorder primarily affecting the central nervous system. It's most common in certain ethnic groups, such as people of Eastern European Jewish heritage.",
          },
          {
            lead: "Hemophilia.",
            text: "A recessive disorder affecting the blood's ability to clot, commonly passed on through the X chromosome.",
          },
        ]}
      />

      <HeadingWithAnchor id="ai-help">
        How AI can help identify potential genetic risks
      </HeadingWithAnchor>
      <p>
        Artificial intelligence can help clinicians analyze genetic
        data and flag potential complications earlier in pregnancy:
      </p>
      <ul>
        <li>
          <strong>Risk analysis models:</strong> AI algorithms can
          review large genetic datasets and flag risk factors for
          clinical review.
        </li>
        <li>
          <strong>Gene editing insights:</strong> While still in
          early stages, AI can help researchers analyze work on gene
          editing methods such as CRISPR.
        </li>
        <li>
          <strong>Personalized recommendations:</strong> Kaizen
          Health&apos;s own Kai AI chat can simplify medical terms and
          offer you personalized information. This feature helps
          explain genetic terminology in plain language before you
          speak with a healthcare provider.
        </li>
      </ul>

      <p>
        These tools can help parents prepare questions, but a
        genetic counselor or other qualified clinician should
        interpret test results and explain what they mean.
      </p>

      <HeadingWithAnchor id="at-home-tests">
        At-home genetic tests prior to pregnancy
      </HeadingWithAnchor>
      <p>
        Genetic testing isn&apos;t limited to when you&apos;re already
        pregnant. Prospective parents who want to screen for known
        hereditary issues can opt for at-home test kits, often
        referred to as &quot;carrier tests.&quot; These usually involve
        providing a saliva or cheek swab sample and sending it to a
        lab for analysis. Some popular tests on the market screen
        for conditions like cystic fibrosis, spinal muscular
        atrophy, and Fragile X syndrome{" "}
        <span className="text-sm italic">
          [3] American College of Medical Genetics - &quot;Carrier
          Screening&quot;
        </span>
        .
      </p>

      <p>
        <strong>Important note:</strong> While at-home tests offer
        convenience, they should not replace professional medical
        advice. Always consult with a genetic counselor or OB/GYN
        for confirmation and additional guidance.
      </p>

      <HeadingWithAnchor id="kaizen-assists">
        Tracking and sharing your records
      </HeadingWithAnchor>
      <p>
        Kaizen Health offers features for organizing genetic
        information and preparing for discussions
        with healthcare providers:
      </p>
      <ul>
        <li>
          <strong>Document storage:</strong> Securely upload genetic
          test results, ultrasound images, and other important
          documentation. Share them easily with family members or
          medical professionals through Kaizen&apos;s Family Groups
          feature.
        </li>
        <li>
          <strong>Health Score:</strong> Our proprietary scoring
          algorithm can provide an overview of your well-being,
          taking into account variables like heart rate and weight,
          which can be crucial during pregnancy.
        </li>
        <li>
          <strong>Timeline view:</strong> Keep track of your
          pregnancy milestones, doctor visits, and test results in a
          chronological manner. This visualization aids you and your
          healthcare provider in spotting any trends or
          complications early.
        </li>
      </ul>

      <HeadingWithAnchor id="what-to-do">
        What to do with the information
      </HeadingWithAnchor>
      <p>
        Genetic conditions can be a source of anxiety for expectant
        parents. Medical guidance, clear records, and plain-language
        tools can make the testing process easier to follow.
        At-home carrier tests offer an accessible starting point to
        learn about potential risks even before pregnancy begins. As
        always, review the results with a healthcare professional.
        Kaizen Health can store the records you choose to share with
        your care team.
      </p>

      <p>
        Bring your family history and any prior test results to your
        next appointment so your clinician can recommend the right
        screening for you.
      </p>

      <p className="text-sm text-graphite italic">
        <strong>References:</strong>
        <br />
        [1]{" "}
        <a
          href="https://www.cdc.gov/genomics-and-health/about/genetic-disorders.html?utm_source=kaizenhealth.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          CDC - &quot;What Are Genetic Disorders?&quot;
        </a>{" "}
        . Accessed February 2025.
        <br />
        [2]{" "}
        <a
          href="https://www.mayoclinic.org/diseases-conditions/down-syndrome/symptoms-causes/syc-20355977?utm_source=kaizenhealth.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mayo Clinic - &quot;Down Syndrome&quot;
        </a>{" "}
        . Accessed February 2025.
        <br />
        [3]{" "}
        <a
          href="https://www.acmg.net/PDFLibrary/Prenatal-Preconeption-Expanded-Carrier-Screening.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          American College of Medical Genetics - &quot;Carrier Screening&quot;
        </a>{" "}
        . Accessed February 2025.
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default PregnancyGenetic;
