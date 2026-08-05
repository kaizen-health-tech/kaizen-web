import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import StatTrio from "@/components/Blog/content/StatTrio";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "What is a polygenic risk score?",
    answer:
      "A polygenic risk score combines the small effects of many different genetic variants into a single number that estimates your inherited risk for a particular condition. Unlike single-gene tests (like BRCA testing for breast cancer), it accounts for the fact that most common diseases, including heart disease and type 2 diabetes, are influenced by hundreds or thousands of genetic variants working together.",
  },
  {
    question: "Is this new heart disease genetic test available to the public?",
    answer:
      "The integrated polygenic risk score is currently available to clinicians through the Mass General Brigham Laboratory for Molecular Medicine and Broad Clinical Labs. It's designed to be ordered as part of clinical care rather than purchased directly as a consumer test, so accessing it currently means talking to a physician who can order it through those labs.",
  },
  {
    question: "Does a high genetic risk score mean I'll definitely get heart disease?",
    answer:
      "No. A high polygenic risk score means your odds are higher than those of someone with average genetic risk; it does not guarantee disease. Clinicians can consider the score alongside blood pressure, cholesterol, family history, and other risk factors when discussing earlier or more intensive prevention.",
  },
];

const sections = [
  { id: "cholesterol-panel", label: "Your cholesterol panel isn't the whole story" },
  { id: "what-it-screens", label: "What the test actually screens for" },
  { id: "numbers-show", label: "What the numbers show" },
  { id: "family-history-link", label: "How this relates to family health history" },
  { id: "limits", label: "Limits of the test" },
  { id: "when-to-ask", label: "When to ask your doctor" },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Genetic Risk Score for Heart Disease",
  description:
    "A polygenic risk score can estimate inherited risk for 8 cardiovascular and metabolic conditions. Learn what the research found and where the test falls short.",
  path: "/blog/heart/genetic-risk-score-heart-disease",
  type: "article",
  image: "/images/blog/blog.png",
});

const GeneticRiskScoreHeartDisease = () => {
  return (
    <ArticleLayout
      title="A DNA Test Can Estimate Risk for 8 Heart Conditions"
      description="A polygenic risk score can estimate inherited risk for 8 cardiovascular and metabolic conditions. Learn what the research found and where the test falls short."
      image="/images/blog/heart-disease.png"
      imageAlt="DNA strand illustration representing a genetic risk score for heart disease"
      datePublished="2026-07-02"
      url="/blog/heart/genetic-risk-score-heart-disease"
      categoryKey="health-records"
      readTime="5 min read"
      tags={["Health records", "Aging well"]}
      sections={sections}
    >
      <p>
        People with a high genetic risk for heart disease may still
        have normal cholesterol and blood pressure, especially when
        they are young and active. Routine measurements do not capture
        inherited risk.
      </p>
      <p>
        Researchers at Mass General Brigham published a{" "}
        <Link href="https://www.jacc.org/doi/10.1016/j.jacc.2026.03.035" target="_blank">
          validation study
        </Link>{" "}
        in the <em>Journal of the American College of Cardiology</em>{" "}
        introducing an integrated polygenic risk score, a single
        genetic test that estimates inherited risk for eight
        different cardiovascular and metabolic conditions at once.
        It&apos;s already available to clinicians through the Mass
        General Brigham Laboratory for Molecular Medicine and
        Broad Clinical Labs.
      </p>

      <HeadingWithAnchor id="cholesterol-panel">
        Your cholesterol panel isn&apos;t the whole story
      </HeadingWithAnchor>
      <p>
        Cardiovascular disease is still the number one killer
        worldwide, responsible for roughly a third of all deaths
        globally. The standard playbook for catching it early has
        barely changed in decades: check your age, blood pressure,
        cholesterol, and lifestyle habits, then estimate your risk
        from there.
      </p>
      <p>
        The problem is that this approach measures the{" "}
        <em>symptoms</em> of risk, not the <em>source</em> of it.
        Plenty of people carry a heavy genetic predisposition
        toward heart disease and related conditions but
        don&apos;t raise a single red flag during a routine
        physical, because they&apos;re young, active, and
        haven&apos;t accumulated the traditional warning signs
        yet. By the time cholesterol or blood pressure numbers
        start looking scary, the genetic risk has often been
        sitting there for decades.
      </p>

      <HeadingWithAnchor id="what-it-screens">
        What the test actually screens for
      </HeadingWithAnchor>
      <p>
        The researchers built their tool by pulling validated
        genetic risk models from the Polygenic Score Catalog, a
        public database of DNA-based risk scores, and combining
        them into one integrated report. It was trained on genetic
        and health data from more than <strong>245,000</strong>{" "}
        participants in the NIH&apos;s All of Us Research Program,
        then validated against over <strong>53,000</strong> people
        in the Mass General Brigham Biobank. This was a large
        validation cohort rather than a small pilot.
      </p>
      <p>The single test evaluates inherited risk across:</p>
      <ul>
        <li>Coronary artery disease</li>
        <li>Atrial fibrillation</li>
        <li>Type 2 diabetes</li>
        <li>Venous thromboembolism</li>
        <li>Thoracic aortic aneurysm</li>
        <li>Extreme hypertension</li>
        <li>Severe hypercholesterolemia</li>
        <li>Elevated lipoprotein(a)</li>
      </ul>

      <HeadingWithAnchor id="numbers-show">
        What the numbers show
      </HeadingWithAnchor>
      <StatTrio
        stats={[
          { figure: "3.7×", caption: "Higher coronary artery disease risk for the top 10% genetic-risk group" },
          { figure: "3.1×", caption: "Higher type 2 diabetes risk for the top 10% genetic-risk group" },
          { figure: "17–18%", caption: "Improvement in risk reclassification for borderline CAD cases" },
        ]}
      />
      <p>
        People in the top 10% of genetic risk for coronary artery
        disease were <strong>3.7 times</strong> more likely to
        develop it, compared to people with average genetic risk.
        For type 2 diabetes, the top 10% genetic risk group was{" "}
        <strong>3.1 times</strong> more likely to develop the
        disease.
      </p>
      <p>
        For context,{" "}
        <Link
          href="https://www.massgeneralbrigham.org/en/about/newsroom/press-releases/polygenic-risk-score-predicts-risk-of-cardiovascular-conditions"
          target="_blank"
        >
          co-senior author Dr. Aniruddh Patel pointed out
        </Link>{" "}
        that those effect sizes are larger than what
        you&apos;d typically see from established risk factors
        like high blood pressure or high cholesterol, which
        usually carry around a two-fold increased risk. Genetic
        risk is present from birth, before lifestyle-related warning
        signs appear.
      </p>
      <p>
        When the researchers added the polygenic score to
        standard risk calculators, it improved risk
        reclassification for borderline coronary artery disease
        cases by roughly <strong>17-18%</strong>. Some patients with
        borderline results moved into a category that could change
        clinical decisions.
      </p>

      <HeadingWithAnchor id="family-history-link">
        How this relates to family health history
      </HeadingWithAnchor>
      <p>
        Family health history offers another view of inherited risk.
        What happened to your parents,
        grandparents, aunts, and uncles. A polygenic risk score is
        basically a more precise, lab-verified version of the
        question every doctor asks at your first appointment:
        &quot;Does heart disease run in your family?&quot; A score can
        add genetic data to that account, but it does not replace it.
      </p>
      <p>
        The difference is that most people can&apos;t answer that
        question with any real confidence. Family health details
        get lost, misremembered, or never discussed. Tools that help
        families track and share that history remain useful alongside
        genetic tests. A DNA report is only as useful as your ability
        to act on it, and that starts with knowing what to watch
        for and who in your family already dealt with it.
      </p>

      <HeadingWithAnchor id="limits">Limits of the test</HeadingWithAnchor>
      <p>
        This tool isn&apos;t a crystal ball, and the researchers
        are upfront about its limits. Most of the underlying
        genetic models were developed primarily using data from
        people of European ancestry, so accuracy may be lower for
        people outside that group. The researchers say broader
        validation is needed.
      </p>
      <p>
        There&apos;s also no large randomized trial yet proving
        that acting on a polygenic risk score actually changes
        outcomes, meaning that fewer people go on to have heart
        attacks or strokes because they knew their score. That
        evidence is still being built. And right now, insurance
        coverage is inconsistent, so access may depend heavily on
        where you live and which health system you use.
      </p>
      <p>
        Dr. Patel put it plainly: clinicians should treat a
        polygenic risk score the way they&apos;d treat any other
        risk factor: one input among several, not a standalone
        verdict. It&apos;s a nudge toward earlier screening or
        more aggressive prevention, not a diagnosis.
      </p>

      <HeadingWithAnchor id="when-to-ask">
        When to ask your doctor
      </HeadingWithAnchor>
      <p>
        If heart disease, diabetes, or blood clotting disorders
        run in your family, or if your traditional risk numbers
        keep landing in that maddening &quot;borderline&quot;
        zone, this is worth a conversation with your doctor. It
        won&apos;t replace your annual bloodwork, and it&apos;s
        not going to be available or necessary for everyone. But
        for people with a family history that feels heavier than
        their lab results suggest, a test like this could finally
        put a number on the risk that&apos;s been circling the
        family for generations.
      </p>
      <p>
        Bring a written family health history to that conversation.
        It will help your doctor decide whether genetic testing would
        add useful information to your current risk profile.
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default GeneticRiskScoreHeartDisease;
