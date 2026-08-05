import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import NumberedPoints from "@/components/Blog/content/NumberedPoints";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "What is a pedigree in family health history?",
    answer:
      "A pedigree is a visual representation of at least three generations of a family, using standardized symbols to mark affected individuals. Commonly used by genetics professionals, it helps identify inheritance patterns, detect people at increased risk of a specific condition, and document age, cause of death, and relevant genetic testing results.",
  },
  {
    question: "When is the best time to review family health history for reproductive planning?",
    answer:
      "The preconception period is the ideal time to evaluate family health history, since it allows for risk assessment and genetic counseling before pregnancy. Women planning a pregnancy should discuss family medical history with their healthcare provider so that lifestyle changes or interventions like carrier screening can be considered early.",
  },
  {
    question: "How often should family health history records be updated?",
    answer:
      "Family health history should be reviewed and updated regularly, especially whenever a new diagnosis occurs within the family. Regular updates improve the accuracy of risk assessments over time and help healthcare providers stratify risk levels and tailor preventive strategies as new information becomes available.",
  },
];

const sections = [
  { id: "what-runs-in-family", label: "Start with what runs in the family" },
  { id: "how-clinicians-use-it", label: "How clinicians use family history" },
  { id: "collection-tools", label: "Tools for collecting family health history" },
  { id: "screening-tool", label: "Family health history as a screening tool" },
  { id: "reproductive-planning", label: "Reproductive planning" },
  { id: "when-missing", label: "When information is missing" },
  { id: "keep-current", label: "Keep the record current" },
  { id: "references", label: "References" },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Documenting Family Health History",
  description:
    "Learn how documenting family health history improves risk assessment, early intervention, and personalized prevention plans for inherited health conditions.",
  path: "/blog/family-history/documenting-family-health",
  type: "article",
  image: "/images/blog/family-health.png",
});

const DocumentingFamilyHealth = () => {
  return (
    <ArticleLayout
      title="Why Family Health History Matters for Longevity and Disease Prevention"
      description="How to document family health history so clinicians can assess inherited risks and plan appropriate screening."
      image="/images/blog/family-health.png"
      imageAlt="Family reviewing health documents"
      datePublished="2025-01-10"
      url="/blog/family-history/documenting-family-health"
      categoryKey="health-records"
      readTime="5 min read"
      tags={["Health records"]}
      sections={sections}
    >
      <HeadingWithAnchor id="what-runs-in-family">
        Start with what runs in the family
      </HeadingWithAnchor>
      <p>
        A family health history records the diseases, disorders, and
        medical conditions that have affected your relatives. It can
        help a clinician assess inherited risk, decide whether earlier
        screening makes sense, and identify conditions caused by a
        mix of genetic and environmental factors.
      </p>

      <HeadingWithAnchor id="how-clinicians-use-it">
        How clinicians use family history
      </HeadingWithAnchor>
      <p>
        Clinicians use family history to assess the risk of
        various medical conditions, including cancers (like breast and
        colon cancer), coronary artery disease, type 2 diabetes
        mellitus, depression, thrombophilias, and adverse birth
        outcomes. Certain conditions are more prevalent within
        families due to genetic predispositions or shared
        environmental factors. Collecting accurate and updated family
        history information enables healthcare providers to stratify
        risk levels and tailor preventive or diagnostic strategies
        accordingly.
      </p>

      <HeadingWithAnchor id="collection-tools">
        Tools for collecting family health history
      </HeadingWithAnchor>
      <p>Two common tools can help you gather the information:</p>
      <NumberedPoints
        points={[
          {
            lead: "Family history questionnaire or checklist.",
            text: "Lets patients gather details from relatives at home. A clinician can follow up on relevant answers to confirm the diagnosis, relationship of the affected family member, age of onset, and severity of the disease.",
          },
          {
            lead: "Pedigree analysis.",
            text: "Commonly used by genetics professionals, this method visually represents at least three generations of a family using standardized symbols to mark affected individuals. It helps identify inheritance patterns and detect individuals at increased risk, and includes age, cause of death, relevant medical history, and any known genetic testing results.",
          },
        ]}
      />

      <HeadingWithAnchor id="screening-tool">
        Family health history as a screening tool
      </HeadingWithAnchor>
      <p>
        The U.S. Surgeon General&apos;s Family History Initiative helped
        bring family history into routine preventive care. Pedigrees
        and questionnaires can reveal high-risk patients whose risk
        may not be obvious in a standard medical record.
      </p>

      <HeadingWithAnchor id="reproductive-planning">
        Reproductive planning and family health history
      </HeadingWithAnchor>
      <p>
        The preconception period is ideal for evaluating family health
        history, as it allows for risk assessment and genetic
        counseling. Women planning pregnancy should discuss their
        family medical history with healthcare providers to identify
        any inherited risks. Early assessment may prompt lifestyle
        changes or specific interventions, such as carrier screening
        for genetic conditions.
      </p>

      <HeadingWithAnchor id="when-missing">
        When information is missing
      </HeadingWithAnchor>
      <p>
        Adopted individuals or those with limited family history may
        face challenges in risk assessment. In such cases, healthcare
        providers should exercise caution and consider a lower
        threshold for further evaluation. Regular updates to family
        history records are essential, especially when new diagnoses
        occur within the family.
      </p>

      <HeadingWithAnchor id="keep-current">
        Keep the record current
      </HeadingWithAnchor>
      <p>
        Family health history can inform care for inherited and
        multifactorial conditions. Use a consistent collection method,
        update the record when a relative receives a new diagnosis,
        and share the relevant details with your clinician.
      </p>

      <HeadingWithAnchor id="references">References</HeadingWithAnchor>
      <ul>
        <li>
          Yoon P, Scheuner M. The family history public health
          initiative. In: Centers for Disease Control and Prevention.
          Genomics and population health: United States 2003. Atlanta
          (GA): CDC; 2004. p. 39–45.
        </li>
        <li>
          Rich EC, Burke W, Heaton CJ, Haga S, Pinsky L, Short MP, et
          al. Reconsidering the family history in primary care. J Gen
          Intern Med 2004;19: 273–80.
        </li>
        <li>
          Bennett RL. The practical guide to the genetic family
          history. 2nd ed. Hoboken (NJ): Wiley-Blackwell; 2010.
        </li>
        <li>
          Plunkett KS, Simpson JL. A general approach to genetic
          counseling. Obstet Gynecol Clin North Am 2002; 29: 265–76.
        </li>
        <li>
          Scheuner MT, Wang SJ, Raffel LJ, Larabell SK, Rotter JI.
          Family history: a comprehensive genetic risk assessment
          method for the chronic conditions of adulthood. Am J Med
          Genet 1997;71: 315–24.
        </li>
        <li>
          Fuchs CS, Giovannucci EL, Colditz GA, Hunter DJ, Speizer FE,
          Willett WC. A prospective study of family history and the
          risk of colorectal cancer. N Engl J Med 1994; 331: 1669–74.
        </li>
        <li>
          Frezzo TM, Rubinstein WS, Dunham D, Ormond KE. The genetic
          family history as a risk assessment tool in internal
          medicine. Genet Med 2003; 5: 84–91.
        </li>
        <li>
          Dolan SM, Moore C. Linking family history in obstetric and
          pediatric care: assessing risk for genetic disease and birth
          defects. Pediatrics 2007; 120(suppl 2):S66–70.
        </li>
      </ul>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default DocumentingFamilyHealth;
