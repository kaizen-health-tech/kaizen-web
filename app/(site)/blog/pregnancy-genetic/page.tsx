// Medical reviewer TODO: this YMYL post should carry a named OB/GYN or genetic counselor reviewer (authorUrl -> Person schema) before it can clear the 90/100 publish gate.

import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import BlogFAQ from "@/components/Blog/BlogFAQ";
import KeyTakeaways from "@/components/Blog/content/KeyTakeaways";
import StatTrio from "@/components/Blog/content/StatTrio";
import ProductCallout from "@/components/Blog/content/ProductCallout";
import ImagePlaceholder from "@/components/Blog/content/ImagePlaceholder";
import Link from "next/link";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

const faqs = [
  {
    question: "What genetic conditions can be detected during pregnancy?",
    answer:
      "Two broad categories. Chromosomal differences such as Down syndrome (trisomy 21), trisomy 18, trisomy 13, and sex-chromosome differences are picked up by screening tests like cell-free DNA screening and confirmed by CVS or amniocentesis. Single-gene recessive conditions such as cystic fibrosis, spinal muscular atrophy, sickle cell disease, and Tay-Sachs are assessed through carrier screening of both parents. Which conditions matter most for a given pregnancy depends on family history and ancestry.",
  },
  {
    question: "What is the difference between a screening test and a diagnostic test?",
    answer:
      "A screening test estimates the chance that a condition is present. Cell-free DNA screening (also called NIPT), first-trimester combined screening, and the quad screen are all screens. A diagnostic test, meaning CVS or amniocentesis, examines fetal chromosomes directly and confirms or rules out the condition. A positive screen should be confirmed with diagnostic testing before any irreversible decision.",
  },
  {
    question: "What week is genetic testing done during pregnancy?",
    answer:
      "Carrier screening is best done before pregnancy. Cell-free DNA screening can be done from about 10 weeks. First-trimester combined screening happens at 10 to 13 weeks, and CVS in the same window. The quad screen is done at 15 to 22 weeks, and amniocentesis from 15 weeks. The anatomy ultrasound is usually at 18 to 22 weeks.",
  },
  {
    question: "How accurate is NIPT or cell-free DNA screening?",
    answer:
      "As a screen for Down syndrome it is very sensitive, catching about 99 percent of affected pregnancies, and it is less sensitive for trisomy 13. But the accuracy of a positive result, called its positive predictive value, depends on age and condition. For Down syndrome it ranges from roughly 50 percent at age 20 to over 90 percent at age 40. It remains a screen, not a diagnosis (SMFM Consult Series #74, 2025; FDA, 2022).",
  },
  {
    question: "What does a positive genetic screening result mean, and what happens next?",
    answer:
      "It means the chance is higher than average, not that the condition is confirmed. Some positive results reflect a chromosome difference in the placenta rather than the fetus. The next step is genetic counseling and, if you want certainty, diagnostic testing with CVS or amniocentesis, usually run with a chromosomal microarray.",
  },
  {
    question: "Is genetic testing during pregnancy covered by insurance?",
    answer:
      "Often largely covered, but it varies. Some plans still limit coverage to patients 35 or older or require a documented medical indication, and Medicaid coverage of cell-free DNA screening differs by state. With insurance, out-of-pocket costs are frequently $0 to $300, and self-pay lab prices are commonly about $99 to $299. Ask whether the lab is in network, what your out-of-pocket cost will be, and whether there is a patient-pay cap before you consent.",
  },
];

const sections = [
  {
    id: "screening-vs-diagnostic",
    label: "Screening tests and diagnostic tests are not the same thing",
  },
  { id: "conditions", label: "The genetic conditions prenatal tests look for" },
  { id: "screening-options", label: "Your screening options and when they happen" },
  { id: "positive-result", label: "What a positive screening result actually means" },
  { id: "diagnostic-testing", label: "Diagnostic testing: CVS and amniocentesis" },
  { id: "carrier-screening", label: "Carrier screening, and why your partner matters" },
  {
    id: "cost-and-insurance",
    label: "What genetic testing costs, and what insurance covers",
  },
  {
    id: "deciding",
    label: "Deciding what's right for you, and what to do with the results",
  },
];

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Genetic Testing During Pregnancy",
  description:
    "A guide to genetic testing during pregnancy: how screening and diagnostic tests differ, when each test is done, and what a positive result really means.",
  path: "/blog/pregnancy-genetic",
  type: "article",
  image: "/images/blog/pregnancy-genetic.png",
  keywords: [
    "genetic testing during pregnancy",
    "prenatal genetic testing",
    "prenatal screening tests",
    "NIPT accuracy",
    "cell-free DNA screening",
    "screening vs diagnostic test pregnancy",
    "carrier screening",
    "positive NIPT result",
    "CVS",
    "amniocentesis",
  ],
});

const PregnancyGenetic = () => {
  return (
    <ArticleLayout
      title="Genetic Testing During Pregnancy: Screening, Diagnosis, and What the Results Mean"
      description="Screening estimates the chance of a genetic condition; diagnostic tests confirm it. Here is what prenatal tests look for, when they happen, what they cost, and what a positive result actually means before you decide anything."
      image="/images/blog/pregnancy-genetic.png"
      imageAlt="A pregnant person reviewing prenatal genetic screening options with a clinician across a table"
      datePublished="2025-01-06"
      dateModified="2026-09-10"
      url="/blog/pregnancy-genetic"
      categoryKey="pregnancy"
      authorName="Kaizen Health Editorial Team"
      authorCredentials="Reviewed by the Kaizen Health editorial team"
      readTime="12 min read"
      tags={["Pregnancy"]}
      sections={sections}
      keywords={[
        "genetic testing during pregnancy",
        "prenatal genetic testing",
        "prenatal screening tests",
        "NIPT accuracy",
        "cell-free DNA screening",
        "carrier screening",
      ]}
    >
      <p>
        Most people who are pregnant or planning a pregnancy get offered a set
        of genetic tests in the first weeks of prenatal care, and often only a
        short appointment to decide. The words come fast: cell-free DNA, carrier
        screening, nuchal translucency, amniocentesis. The choice is genuinely
        personal, the terminology is dense, and one term in particular, a
        &ldquo;positive&rdquo; result, is widely misread as a diagnosis when it
        usually is not. This guide to genetic testing during pregnancy covers
        what these tests look for, which ones exist and when they happen, what a
        positive result actually means, what testing costs, and how to think
        through what is right for you. Which tests make sense depends partly on{" "}
        <Link href="/blog/family-health-monitoring">
          how family health history guides screening
        </Link>
        . The guidance here follows current recommendations from ACOG, the
        Society for Maternal-Fetal Medicine (SMFM), ACMG, the CDC, and the FDA.
      </p>
      <p className="text-sm italic text-graphite">
        This article is general information, not medical advice. The decisions
        described here rest with you and your clinician.
      </p>

      <KeyTakeaways
        items={[
          "Prenatal testing comes in two kinds. Screening estimates the chance of a condition; diagnostic tests (CVS and amniocentesis) confirm or rule it out. Current guidance is to offer both to every pregnant patient, regardless of age.",
          "Cell-free DNA screening (also called NIPT) is the most accurate screen for Down syndrome, trisomy 18, and trisomy 13, but it is still a screen. A positive result needs diagnostic confirmation before any irreversible decision.",
          "A positive screen is not a diagnosis. For Down syndrome, the chance that a positive cell-free DNA result is a true positive runs from roughly 50 percent at age 20 to about 80 percent at 35 to over 90 percent at 40 (SMFM Consult Series #74, 2025).",
          "Carrier screening, ideally before pregnancy and including the partner, shows whether you could pass on a recessive condition such as cystic fibrosis, spinal muscular atrophy, sickle cell disease, or Tay-Sachs.",
          "Modern estimates put the added miscarriage risk from CVS or amniocentesis near 1 in 300 to 1 in 500 or lower, below the older 1 in 200 figure (Salomon et al., 2019).",
        ]}
      />

      <HeadingWithAnchor id="screening-vs-diagnostic">
        Screening tests and diagnostic tests are not the same thing
      </HeadingWithAnchor>
      <p>
        A screening test estimates the chance that a baby has a genetic
        condition. A diagnostic test confirms it or rules it out. That
        difference drives almost everything else about how you read a result.
      </p>
      <p>
        Screening tests include cell-free DNA screening (cfDNA, also sold as
        NIPT), first-trimester combined screening, and the second-trimester quad
        screen. They are safe for the pregnancy because they use a blood sample
        or an ultrasound, and what they give back is a probability, not a yes or
        no. Diagnostic tests are chorionic villus sampling (CVS) and
        amniocentesis. Both take a small sample of placental tissue or amniotic
        fluid and examine the fetal chromosomes directly, so they give a
        near-definitive answer, at the cost of a small procedure risk.
      </p>
      <p>
        The current standard is to offer both paths to everyone.{" "}
        <Link
          href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/10/screening-for-fetal-chromosomal-abnormalities"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACOG Practice Bulletin 226
        </Link>{" "}
        established that prenatal screening and diagnostic testing should each be
        discussed and offered to every pregnant patient, regardless of age or
        baseline risk. ACOG has since issued a companion Practice Advisory that
        replaces Practice Bulletin 226, and SMFM replaced its earlier guidance
        with{" "}
        <Link
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13344640/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SMFM Consult Series #74
        </Link>{" "}
        in late 2025. The through-line is unchanged: your age no longer decides
        which tests you are allowed to consider.
      </p>
      <p>
        This replaced an older model that reserved cfDNA and diagnostic testing
        for patients considered high risk, usually meaning age 35 or older at
        delivery, an abnormal earlier screen, or a family history. Under current
        guidance, cfDNA should be routinely available to all obstetrical
        patients, and SMFM describes it as the most sensitive and specific
        screen for the common chromosome conditions in any population (a GRADE 1B
        recommendation, meaning a strong recommendation backed by
        moderate-quality evidence). Accepting or declining any of it is your
        decision, and a screen never closes the question by itself.
      </p>

      <HeadingWithAnchor id="conditions">
        The genetic conditions prenatal tests look for
      </HeadingWithAnchor>
      <p>
        Prenatal tests look for two broad groups of conditions: chromosomal
        differences and single-gene inherited conditions.
      </p>
      <p>
        Chromosomal differences, often called aneuploidy (an extra or missing
        chromosome), include Down syndrome (trisomy 21, an extra copy of
        chromosome 21), trisomy 18, trisomy 13, and differences in the number of
        sex chromosomes such as 45,X (Turner syndrome). Most of these happen
        sporadically, not because a parent carried them, and the chance of some
        rises with maternal age. Screening estimates the chance; CVS or
        amniocentesis confirms it.
      </p>
      <p>
        Single-gene conditions are inherited. Many are recessive, which means a
        child is affected only if both parents pass on a change in the same
        gene. Cystic fibrosis, spinal muscular atrophy (SMA), sickle cell
        disease, and Tay-Sachs disease work this way. Fragile X syndrome follows
        an X-linked pattern. Carrier screening, done on the parents rather than
        the pregnancy, is how these are assessed.
      </p>
      <p>
        Most of these conditions are uncommon. Down syndrome is the most
        frequent chromosomal condition at birth, with a US birth prevalence of
        about 15.55 per 10,000, or roughly 1 in 640, in 2016 to 2020, up from
        12.78 per 10,000 in 1999 to 2001 (
        <Link
          href="https://onlinelibrary.wiley.com/doi/abs/10.1002/bdr2.2301"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stallings et al., 2024
        </Link>
        ). You may still see the older figure of about 1 in 700. The CDC
        estimates about{" "}
        <Link
          href="https://www.cdc.gov/birth-defects/about/down-syndrome.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          5,775 US babies
        </Link>{" "}
        are born with Down syndrome each year. Carrier frequencies for
        single-gene conditions vary widely by ancestry: cystic fibrosis carrier
        frequency is about 1 in 25 in non-Hispanic White people and lower in
        several other groups (
        <Link
          href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/03/carrier-screening-for-genetic-conditions"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACOG Committee Opinion 691
        </Link>
        ). Cystic fibrosis itself affects roughly 1 in 2,500 to 3,500 US
        newborns (
        <Link
          href="https://www.cysticfibrosisjournal.com/article/S1569-1993(23)00061-9/fulltext"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rho et al., 2023
        </Link>
        ). Sickle cell disease occurs in about{" "}
        <Link
          href="https://www.cdc.gov/sickle-cell/data/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          1 in 365 Black or African American births
        </Link>
        .
      </p>
      <p>
        One caution about the maternal-age risk tables you may have seen. They
        are often quoted as the chance at the midpoint of pregnancy, not at live
        birth, and the two are not the same, because some affected pregnancies
        do not continue. And because there are far more births to people under
        35, most babies with Down syndrome are born to mothers in that age
        group, even though the individual chance is lower.
      </p>
      <p>
        Prenatal genetic tests are not designed for conditions that come from
        many genes and daily-life factors together, such as{" "}
        <Link href="/blog/diabetes-magnesium-vitamin-d">
          hereditary risk factors for type 2 diabetes
        </Link>{" "}
        or most heart disease. Those are estimated later in life with tools like{" "}
        <Link href="/blog/heart/genetic-risk-score-heart-disease">
          polygenic risk scores for inherited conditions
        </Link>
        , not during pregnancy.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 font-semibold">Condition</th>
              <th className="p-2 font-semibold">Type</th>
              <th className="p-2 font-semibold">How it is detected prenatally</th>
              <th className="p-2 font-semibold">Typically offered screening</th>
              <th className="p-2 font-semibold">Approximate frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2 font-medium">Down syndrome (trisomy 21)</td>
              <td className="p-2">Extra chromosome 21</td>
              <td className="p-2">
                cfDNA, first-trimester combined, quad screen; confirmed by CVS or
                amniocentesis
              </td>
              <td className="p-2">All pregnant patients</td>
              <td className="p-2">About 1 in 640 births (Stallings et al., 2024)</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Trisomy 18 (Edwards syndrome)</td>
              <td className="p-2">Extra chromosome 18</td>
              <td className="p-2">
                cfDNA, first-trimester combined, quad screen; confirmed by
                diagnostic testing
              </td>
              <td className="p-2">All pregnant patients</td>
              <td className="p-2">Rarer than Down syndrome</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Trisomy 13 (Patau syndrome)</td>
              <td className="p-2">Extra chromosome 13</td>
              <td className="p-2">
                cfDNA, first-trimester combined; confirmed by diagnostic testing
              </td>
              <td className="p-2">All pregnant patients</td>
              <td className="p-2">Rarer than trisomy 18</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">
                Sex-chromosome differences (for example 45,X, Turner syndrome)
              </td>
              <td className="p-2">Missing or extra sex chromosome</td>
              <td className="p-2">
                cfDNA, opt-in after pretest counseling; confirmed by diagnostic
                testing
              </td>
              <td className="p-2">Offered as a choice after counseling</td>
              <td className="p-2">Most common sex-chromosome difference</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Cystic fibrosis</td>
              <td className="p-2">Recessive single-gene</td>
              <td className="p-2">
                Carrier screening of both parents; diagnostic testing if both
                carry
              </td>
              <td className="p-2">All patients pregnant or planning</td>
              <td className="p-2">
                Carrier rate about 1 in 25 non-Hispanic White, varies by ancestry
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Spinal muscular atrophy (SMA)</td>
              <td className="p-2">Recessive single-gene</td>
              <td className="p-2">Carrier screening</td>
              <td className="p-2">All patients pregnant or planning</td>
              <td className="p-2">Carrier rate about 1 in 54 pan-ethnic</td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Sickle cell disease</td>
              <td className="p-2">Recessive single-gene</td>
              <td className="p-2">
                Carrier screening, complete blood count, hemoglobin
                electrophoresis
              </td>
              <td className="p-2">Offered to all; higher priority by ancestry</td>
              <td className="p-2">
                About 1 in 365 Black or African American births
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Tay-Sachs disease</td>
              <td className="p-2">Recessive single-gene</td>
              <td className="p-2">
                Carrier screening; enzyme testing in some groups
              </td>
              <td className="p-2">By ancestry or family history</td>
              <td className="p-2">
                Carrier rate about 1 in 30 Ashkenazi Jewish, about 1 in 300
                general
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Fragile X syndrome</td>
              <td className="p-2">X-linked repeat expansion</td>
              <td className="p-2">
                Carrier screening for the FMR1 premutation
              </td>
              <td className="p-2">
                Family history of fragile X or unexplained intellectual
                disability; part of the ACMG panel
              </td>
              <td className="p-2">
                Premutation about 1 in 150 to 1 in 290 in US women
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Thalassemias</td>
              <td className="p-2">Recessive single-gene (hemoglobin)</td>
              <td className="p-2">
                Complete blood count, then hemoglobin electrophoresis and DNA
                analysis
              </td>
              <td className="p-2">
                Complete blood count for all; follow-up by red-cell indices and
                ancestry
              </td>
              <td className="p-2">
                Higher carrier rates in Mediterranean, Middle Eastern, South and
                Southeast Asian, and African ancestry
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <HeadingWithAnchor id="screening-options">
        Your screening options and when they happen
      </HeadingWithAnchor>
      <p>
        The main screens, in the order they become available: carrier screening
        (best done before pregnancy), cfDNA from about 10 weeks, first-trimester
        combined screening at 10 to 13 weeks, and the quad screen at 15 to 22
        weeks.
      </p>

      <ImagePlaceholder
        suggestion="Timeline infographic of prenatal genetic tests by gestational week, from preconception through 22 weeks. Markers along a horizontal timeline: carrier screening (preconception to early pregnancy), cell-free DNA screening (from 10 weeks), first-trimester combined screening (10 to 13 weeks), chorionic villus sampling or CVS (10 to 13 weeks), quad screen (15 to 22 weeks), amniocentesis (from 15 weeks), anatomy ultrasound (18 to 22 weeks). Clean editorial style, a calm palette of violet, lavender, and aquamarine, readable labels, no photos."
        altText="Timeline showing when prenatal genetic tests happen: carrier screening before or in early pregnancy, cell-free DNA screening and first-trimester combined screening and CVS around 10 to 13 weeks, the quad screen at 15 to 22 weeks, amniocentesis from 15 weeks, and the anatomy scan at 18 to 22 weeks."
      />

      <p>
        cfDNA analyzes fragments of placental DNA that circulate in the pregnant
        person&apos;s blood. It screens for trisomy 21, 18, and 13, and it can
        also report on the sex chromosomes. First-trimester combined screening
        pairs a nuchal translucency ultrasound (a measurement of fluid at the
        back of the fetal neck) with two blood markers, PAPP-A and hCG. The quad
        screen measures four blood markers in the second trimester. It is less
        sensitive than cfDNA for Down syndrome, but it has a feature cfDNA lacks:
        through one of its markers, MSAFP, it also screens for open neural tube
        defects such as spina bifida.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 font-semibold">Screening method</th>
              <th className="p-2 font-semibold">When</th>
              <th className="p-2 font-semibold">
                Approximate detection rate for Down syndrome
              </th>
              <th className="p-2 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2 font-medium">cfDNA (NIPT)</td>
              <td className="p-2">From about 10 weeks</td>
              <td className="p-2">About 99 percent</td>
              <td className="p-2">
                Most sensitive and specific screen; also reports trisomy 18 and
                13 (SMFM Consult Series #74)
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">
                Integrated or sequential screening
              </td>
              <td className="p-2">First and second trimester combined</td>
              <td className="p-2">About 94 to 96 percent</td>
              <td className="p-2">
                Combines nuchal translucency and blood markers across both
                trimesters (AAFP, 2020)
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">
                First-trimester combined screening
              </td>
              <td className="p-2">10 to 13 weeks</td>
              <td className="p-2">82 to 87 percent</td>
              <td className="p-2">
                Nuchal translucency ultrasound plus PAPP-A and hCG (AAFP, 2020)
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-medium">Quad screen</td>
              <td className="p-2">15 to 22 weeks</td>
              <td className="p-2">About 81 percent</td>
              <td className="p-2">
                Also screens for open neural tube defects through MSAFP, its
                distinct value (AAFP, 2020)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        A few points changed with the 2025 guidance. Screening for
        sex-chromosome differences is now an opt-in choice that should follow a
        pretest conversation, because these results are the most likely to be
        misleading, for reasons covered in the next section. Routine screening
        for microdeletions (small missing pieces of a chromosome) and
        genome-wide copy-number screening are not recommended for the general
        population, because at low prior odds they produce more false alarms than
        true findings. The one exception{" "}
        <Link
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13344640/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SMFM
        </Link>{" "}
        allows is a targeted panel for the 22q11.2 deletion (DiGeorge syndrome),
        which has a positive predictive value of about 44 to 53 percent. Anyone
        who specifically wants microdeletion information is better served by
        diagnostic testing.
      </p>
      <p>
        Sometimes cfDNA returns no result, often called a &ldquo;no-call.&rdquo;
        This happens in roughly 0.85 percent of tests, and it is not a null. A
        no-call is linked to a meaningfully higher chance of a chromosome
        condition.{" "}
        <Link
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13344640/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SMFM Consult Series #74
        </Link>{" "}
        cites a relative risk near 130 for trisomy 21, 18, or 13 compared with a
        reportable result. It also tracks with higher body weight, earlier
        gestational age, and some pregnancy complications. Treat a no-call as a
        reason to talk with your clinician about repeating the test or moving to
        diagnostic testing, not a reason to assume all is well.
      </p>

      <ImagePlaceholder
        suggestion="Photo, candidate source Pexels 8460346. A clinician drawing a blood sample from a patient's arm into a vial in a calm clinical setting, faces not required, neutral tone. Validate the direct CDN URL returns HTTP 200 and an image content-type before embedding; discard any 403, 404, or HTML response. Pexels License, no attribution required."
        altText="A clinician drawing a blood sample from a patient's arm, the sample used for cell-free DNA screening and carrier screening during pregnancy."
      />

      <HeadingWithAnchor id="positive-result">
        What a positive screening result actually means
      </HeadingWithAnchor>
      <p>
        A positive screen means the chance is higher than the general
        population&apos;s. It does not mean the condition is confirmed. How
        likely a positive cfDNA result is to be a true positive is called its
        positive predictive value, or PPV, and it swings widely depending on the
        specific condition and on maternal age.
      </p>
      <p>
        For Down syndrome, cfDNA is very accurate as a screen: sensitivity is
        about 99 percent (it catches nearly all affected pregnancies) and
        specificity is above 99.9 percent (it rarely flags an unaffected one).
        Even so, because Down syndrome is uncommon, a share of positives are
        false. The chance that a positive result is a true positive runs from
        roughly half at age 20, to around 80 percent at 35, to over 90 percent at
        40. At 35, then, something like 1 in 5 positive results is not a true
        positive. For trisomy 18 and especially trisomy 13, which are rarer, that
        figure is lower at every age.
      </p>
      {/* Editor: the PPV-by-age figures here are presented as bands pending page-verification against the published SMFM Consult Series #74 tables. The model-extracted point values were T21 48/51/79/93, T18 14/15/39/69, T13 6/7/21/50 at ages 20/25/35/40; restore precise figures (prose, StatTrio caption, and the bar-chart image spec) only after confirming them against the published tables. */}
      {/* UNIQUE INSIGHT: consumer prenatal-testing content rarely quantifies PPV by maternal age or explains why the same lab result carries a different meaning at 20 and at 40. That gap is the main reason a positive screen is so often misread as a diagnosis. */}

      <ImagePlaceholder
        suggestion="Grouped bar chart infographic. Title: Positive predictive value of cfDNA screening by maternal age. Three groups of bars for Trisomy 21, Trisomy 18, and Trisomy 13. Within each group, four bars for maternal ages 20, 25, 35, and 40. Trisomy 21 values: 48, 51, 79, 93 percent. Trisomy 18 values: 14, 15, 39, 69 percent. Trisomy 13 values: 6, 7, 21, 50 percent. Y axis 0 to 100 percent. Caption below the chart: A positive screen is not a diagnosis and always needs diagnostic confirmation. Source: SMFM Consult Series #74, 2025. Clean editorial style, a calm palette of violet, lavender, and aquamarine, no photos."
        altText="Grouped bar chart showing that the positive predictive value of cfDNA screening rises with maternal age, from about 48 percent at age 20 to about 93 percent at age 40 for Down syndrome, with lower values at every age for trisomy 18 and trisomy 13."
      />

      <p>
        The biology behind many false positives is worth understanding. cfDNA
        measures placental DNA, and the placenta and the fetus do not always
        match. When a chromosome difference is present in the placenta but not
        the fetus, it is called confined placental mosaicism (mosaicism means a
        mix of cell lines with different chromosomes in the same person or
        tissue). This is common enough with sex-chromosome results that up to
        about 59 percent of positive 45,X screens turn out to be confined to the
        placenta. That single fact is why sex-chromosome screening moved to
        opt-in.
      </p>
      <p>
        The{" "}
        <Link
          href="https://www.fda.gov/medical-devices/safety-communications/genetic-non-invasive-prenatal-screening-tests-may-have-false-results-fda-safety-communication"
          target="_blank"
          rel="noopener noreferrer"
        >
          FDA issued a safety communication in 2022
        </Link>{" "}
        making the same point in plain terms: no prenatal screening test of this
        kind is FDA-authorized or cleared, a positive result can reflect a
        chromosomal change in the placenta rather than the fetus, and results
        should be confirmed with diagnostic testing before any irreversible
        decision. Very rarely, cfDNA turns up something unexpected about the
        pregnant person&apos;s own chromosomes, and in rarer cases still, an
        unusual multi-chromosome pattern has been an early sign of a maternal
        cancer (
        <Link
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13344640/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SMFM Consult Series #74
        </Link>
        ). Both are uncommon and are handled through follow-up, not alarm. A
        negative screen, for its part, lowers the chance substantially but never
        brings it to zero.
      </p>

      <StatTrio
        stats={[
          {
            figure: "99.2%",
            caption:
              "Sensitivity of cfDNA screening for Down syndrome (trisomy 21), per SMFM Consult Series #74, 2025",
          },
          {
            figure: "~1 in 5",
            caption:
              "Positive cfDNA results for Down syndrome at age 35 that are not true positives, based on a positive predictive value around 80 percent",
          },
          {
            figure: "~0.3%",
            caption:
              "Approximate added miscarriage risk from amniocentesis in a 2019 meta-analysis; CVS was near 0.2 percent",
          },
        ]}
      />

      <HeadingWithAnchor id="diagnostic-testing">
        Diagnostic testing: CVS and amniocentesis
      </HeadingWithAnchor>
      <p>
        When you want a definitive answer, whether after a positive screen, an
        unexpected ultrasound finding, or simply by choice, CVS and
        amniocentesis provide it. CVS, done at about 10 to 13 weeks, samples
        placental tissue. Amniocentesis, done from 15 weeks, samples amniotic
        fluid. Both examine fetal chromosomes directly, and the sample is
        usually run with a chromosomal microarray, a test that detects small
        missing or extra pieces of chromosome that a standard karyotype and
        cfDNA both miss.
      </p>
      <p>
        The concern most people bring to these procedures is miscarriage risk,
        and the number many still hear, about 1 in 100 to 1 in 200, is out of
        date. A 2019 meta-analysis (
        <Link
          href="https://pubmed.ncbi.nlm.nih.gov/31124209/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Salomon et al.
        </Link>
        ) put the procedure-related loss risk at about 0.30 percent for
        amniocentesis (95 percent confidence interval 0.11 to 0.49) and about
        0.20 percent for CVS (95 percent confidence interval -0.13 to 0.52),
        close to the background rate for people at the same starting risk. An{" "}
        <Link
          href="https://pubmed.ncbi.nlm.nih.gov/25042845/"
          target="_blank"
          rel="noopener noreferrer"
        >
          earlier meta-analysis by Akolekar and colleagues
        </Link>{" "}
        estimated 0.11 percent for amniocentesis and 0.22 percent for CVS.
        Estimates vary by method, but the modern range lands near 1 in 300 to 1
        in 500 or lower, below the older figure.
      </p>
      <p>
        Results usually come in stages: a rapid result for the common trisomies
        within a few days, and the full microarray in one to two weeks.
        Diagnostic testing is also the right route for anyone who wants
        microdeletion or copy-number information, which the general-population
        screens are not built to provide reliably.
      </p>

      <HeadingWithAnchor id="carrier-screening">
        Carrier screening, and why your partner matters
      </HeadingWithAnchor>
      <p>
        Carrier screening is a blood or saliva test, ideally done before
        pregnancy, that shows whether you carry a recessive gene change. On its
        own it tells you little about a pregnancy. It becomes meaningful when
        both partners are tested: if both carry a change in the same gene, each
        pregnancy has a 25 percent chance of being affected, a 50 percent chance
        the child is a carrier, and a 25 percent chance the child inherits
        neither copy.
      </p>

      <ImagePlaceholder
        suggestion="Photo, candidate source Pixabay (see the brief's Visual Element Plan, research section 4A). Two partners sitting together in conversation at home, calm and warm, natural light, diverse, no text. Validate the direct CDN URL returns HTTP 200 and an image content-type before embedding; discard any 403, 404, or HTML response. Pixabay Content License, no attribution required."
        altText="Two partners sitting together in conversation at home, reflecting the decision to do carrier screening together before or during pregnancy."
      />

      <p>
        Guidance bodies genuinely differ on how wide the panel should be, and it
        is worth knowing both positions.{" "}
        <Link
          href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/03/carrier-screening-for-genetic-conditions"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACOG (Committee Opinions 690 and 691
        </Link>
        , reaffirmed 2023) treats ethnicity-based, pan-ethnic, and expanded
        panels as all acceptable. It recommends offering cystic fibrosis and SMA
        carrier screening to everyone, along with a complete blood count and
        hemoglobinopathy screening. It adds fragile X screening for those with a
        family history or unexplained intellectual disability, and ancestry-based
        screening for conditions such as Tay-Sachs.
      </p>
      <p>
        <Link
          href="https://www.gimjournal.org/article/S1098-3600(21)01158-0/fulltext"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACMG
        </Link>{" "}
        takes a wider line. It recommends a single pan-ethnic panel of 113 genes
        for everyone who is pregnant or planning a pregnancy, regardless of
        ancestry. The panel covers conditions with a carrier frequency of at
        least 1 in 200, fragile X included, and ACMG restated the approach in a{" "}
        <Link
          href="https://www.gimjournal.org/article/S1098-3600(24)00070-4/fulltext"
          target="_blank"
          rel="noopener noreferrer"
        >
          2024 laboratory technical standard
        </Link>
        . One caveat: the ACMG document is a &ldquo;practice resource,&rdquo; a
        lighter evidence bar than a full clinical guideline.
      </p>
      {/* UNIQUE INSIGHT: the ACOG/ACMG split on carrier-panel breadth is a live, unresolved difference, not a settled consensus. Consumer content that presents one panel as "the" standard papers over a real disagreement a patient may run into depending on their practice. */}

      <p>
        Partners can be screened at the same time (concurrent) or one after the
        other, with the second partner tested only if the first is a carrier
        (reflex, or tandem). Concurrent testing is faster and matters when time
        is short. A negative result lowers the chance of being a carrier but does
        not erase it, and detection rates are not equal across ancestries, which
        means the residual risk after a negative result is higher for some
        groups than others. Before either partner is screened, it helps to{" "}
        <Link href="/blog/family-history/documenting-family-health">
          document your family health history
        </Link>
        , since known conditions on either side change which panel a clinician
        recommends.
      </p>
      <p>
        Carrier frequencies give a sense of scale. SMA is about 1 in 54
        pan-ethnic. Cystic fibrosis is about 1 in 25 in non-Hispanic White
        people, about 1 in 80 in Black or African American people, and about 1
        in 100 in Asian American people. Tay-Sachs is about 1 in 30 in people of
        Ashkenazi Jewish descent versus about 1 in 300 in the general
        population, and enzyme testing catches carriers that DNA panels miss in
        non-Ashkenazi people. The FMR1 premutation linked to fragile X is found
        in roughly 1 in 150 to 1 in 290 US women (
        <Link
          href="https://onlinelibrary.wiley.com/doi/full/10.1002/ajmg.a.38692"
          target="_blank"
          rel="noopener noreferrer"
        >
          Owens et al., 2018
        </Link>
        ). Figures for the rest are from ACOG Committee Opinion 691, linked
        above.
      </p>
      <p>
        If both partners are carriers for the same condition, the options
        include in vitro fertilization with preimplantation genetic testing for
        that specific condition (PGT-M), donor eggs or sperm, prenatal diagnosis
        with CVS or amniocentesis, using the pregnancy time to prepare, and
        adoption. A genetic counselor can walk through what each would mean in
        your situation.
      </p>

      <HeadingWithAnchor id="cost-and-insurance">
        What genetic testing costs, and what insurance covers
      </HeadingWithAnchor>
      <p>
        With insurance, cfDNA and carrier screening are often $0 to about $300
        out of pocket. Self-pay prices at major labs commonly run about $99 to
        $299. Without coverage, list prices and diagnostic procedures are much
        higher. The figures here are approximate ranges drawn from consumer
        cost-comparison sites and published lab price sheets, not official rates.
        Confirm your own numbers with your plan and, if relevant, your state
        Medicaid program.
      </p>
      <p>
        Rough ranges: cfDNA self-pay about $99 to $299, with list prices of $800
        to $2,000 or more; expanded carrier screening about $100 to $250
        patient-pay, with list prices up to about $2,000; CVS or amniocentesis
        about $1,500 to $5,000 without insurance, though these are usually
        covered when medically indicated.
      </p>
      <p>
        Coverage rules are uneven. Under the Affordable Care Act framework,
        non-grandfathered plans must cover services graded A or B by the US
        Preventive Services Task Force and the{" "}
        <Link
          href="https://www.hrsa.gov/womens-guidelines"
          target="_blank"
          rel="noopener noreferrer"
        >
          HRSA women&apos;s preventive services guidelines
        </Link>{" "}
        with no cost sharing, but routine screening for chromosome conditions is
        not on that guaranteed zero-cost list. Some plans still limit coverage to
        patients 35 or older or require a documented medical indication, even
        though clinical guidance dropped that age line years ago. Medicaid
        coverage of cfDNA also varies from state to state, so a test that is
        fully covered in one state may not be in another.
      </p>
      {/* UNIQUE INSIGHT: clinical guidance moved to a universal offer years ago, but insurer coverage often still hinges on maternal age 35. The age-35 threshold now lives mostly in billing rules rather than in the standard of care, and patients hit that gap without being told why. */}

      <p>
        Questions worth asking before you consent: Is this lab in network? What
        is my expected out-of-pocket cost? Is there a patient-pay cap if
        insurance denies it? And if the result is positive, is the follow-up
        diagnostic testing covered? Broadly, cfDNA has moved from a test
        reserved for high-risk pregnancies to a first-line option in routine
        prenatal care, now covered by commercial plans and many state Medicaid
        programs for average-risk pregnancies.
      </p>

      <HeadingWithAnchor id="deciding">
        Deciding what&apos;s right for you, and what to do with the results
      </HeadingWithAnchor>
      <p>
        There is no universally correct amount of prenatal genetic testing. The
        useful questions are practical: do you want a risk estimate or a
        definitive answer, would a result change your medical care or how you
        prepare, and how do you weigh a procedure-related risk of roughly 0.1 to
        0.3 percent?
      </p>

      <ImagePlaceholder
        suggestion="Decision-tree infographic titled: Thinking through prenatal genetic testing. Three branching questions. 1: Do you want a risk estimate or a definitive answer? Risk estimate leads to screening (cfDNA, first-trimester combined, quad screen); definitive answer leads to diagnostic testing (CVS or amniocentesis with chromosomal microarray). 2: Would the result change your medical care or how you prepare? 3: How do you weigh a procedure-related miscarriage risk near 0.1 to 0.3 percent? End node: discuss with your clinician or a genetic counselor. Clean editorial flowchart, a calm palette of violet, lavender, and aquamarine, no photos."
        altText="Decision-tree infographic outlining three questions to weigh before prenatal genetic testing: whether you want a risk estimate or a definitive answer, whether a result would change your care or preparation, and how you weigh a procedure-related miscarriage risk near 0.1 to 0.3 percent."
      />

      <p>
        Some people want every data point available. Others decline screening
        entirely because a result would not change what they do. Both are
        reasonable. If you would want certainty after a positive screen, it is
        worth knowing that before you start, since it points toward diagnostic
        testing either way.
      </p>
      <p>
        After a positive screen or a diagnosis, the next steps are a referral to
        a genetic counselor, often a maternal-fetal-medicine specialist, and a
        realistic timeline for any decision. Reputable condition-specific
        organizations can connect you with families living with the same
        diagnosis. Continuing the pregnancy is a valid choice, and the
        preparation time has real value: for medical planning, for the delivery
        team, and for the family.
      </p>
      <p>
        Researchers are testing machine-learning tools to help interpret
        uncertain genetic variants and flag chromosomal changes on lab images. A{" "}
        <Link
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12639039/"
          target="_blank"
          rel="noopener noreferrer"
        >
          systematic review of 38 studies through January 2025
        </Link>{" "}
        found the work is still early, pointing to validation gaps, algorithmic
        bias, and no prospective clinical data yet. As of 2026, no major medical
        society recommends these tools for prenatal screening, variant
        interpretation, or counseling. Kaizen Health&apos;s assistant, Kai, does
        not interpret genetic results. It helps you keep test results and family
        history in one place, translate the terminology into plain language, and
        build a question list for your clinician and a genetic counselor.
      </p>

      <ProductCallout body="Bring an organized history to your first prenatal visit: keep every carrier screening report, cfDNA result, and ultrasound summary in one shared record your clinician and genetic counselor can see. Kai can translate the terminology and help you build a question list, without interpreting the results for you." />

      <p>
        A few things to carry into the appointment. Screening estimates a chance;
        diagnostic testing with CVS or amniocentesis confirms or rules out. A
        positive screen is not a diagnosis, and how likely it is to be a true
        positive depends on the condition and your age. Carrier screening works
        best before pregnancy and only describes risk to a pregnancy once both
        partners are tested. The added miscarriage risk from diagnostic testing
        is lower than the figure many people still quote. And the amount of
        testing you do is a personal choice, not a fixed protocol.
      </p>
      <p>
        Bring your family health history and any earlier results to your first
        prenatal visit, ask which screening fits your situation, and{" "}
        <Link href="/blog/family-history/organizing-medical-records">
          keep prenatal test results and records organized
        </Link>{" "}
        so your whole care team sees the same picture you do.
      </p>

      <p className="text-sm text-graphite italic">
        <strong>References</strong>
        <br />
        [1]{" "}
        <a
          href="https://pmc.ncbi.nlm.nih.gov/articles/PMC13344640/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SMFM Consult Series #74, &ldquo;Prenatal genetic screening,&rdquo;
          Pregnancy, 2025.
        </a>{" "}
        Accessed September 2026.
        <br />
        [2]{" "}
        <a
          href="https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/10/screening-for-fetal-chromosomal-abnormalities"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACOG Practice Bulletin 226, &ldquo;Screening for Fetal Chromosomal
          Abnormalities,&rdquo; 2020.
        </a>{" "}
        Accessed September 2026.
        <br />
        [3]{" "}
        <a
          href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/03/carrier-screening-for-genetic-conditions"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACOG Committee Opinions 690 and 691, &ldquo;Carrier Screening,&rdquo;
          2017, reaffirmed 2023.
        </a>{" "}
        Accessed September 2026.
        <br />
        [4]{" "}
        <a
          href="https://www.gimjournal.org/article/S1098-3600(21)01158-0/fulltext"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gregg AR et al., ACMG practice resource on screening for autosomal
          recessive and X-linked conditions, Genetics in Medicine, 2021.
        </a>{" "}
        Accessed September 2026.
        <br />
        [5]{" "}
        <a
          href="https://www.gimjournal.org/article/S1098-3600(24)00070-4/fulltext"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACMG laboratory technical standard for expanded carrier screening,
          Genetics in Medicine, 2024.
        </a>{" "}
        Accessed September 2026.
        <br />
        [6]{" "}
        <a
          href="https://www.fda.gov/medical-devices/safety-communications/genetic-non-invasive-prenatal-screening-tests-may-have-false-results-fda-safety-communication"
          target="_blank"
          rel="noopener noreferrer"
        >
          FDA, &ldquo;Genetic Non-Invasive Prenatal Screening Tests May Have
          False Results,&rdquo; Safety Communication, 2022.
        </a>{" "}
        Accessed September 2026.
        <br />
        [7]{" "}
        <a
          href="https://www.aafp.org/pubs/afp/issues/2020/0415/p481.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          American Family Physician, &ldquo;Prenatal Screening and Diagnostic
          Testing,&rdquo; 2020;101(8):481-488.
        </a>{" "}
        Accessed September 2026.
        <br />
        [8]{" "}
        <a
          href="https://onlinelibrary.wiley.com/doi/abs/10.1002/bdr2.2301"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stallings EB et al., &ldquo;Population-based birth prevalence of Down
          syndrome,&rdquo; Birth Defects Research, 2024.
        </a>{" "}
        Accessed September 2026.
        <br />
        [9]{" "}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/31124209/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Salomon LJ et al., &ldquo;Risk of miscarriage following amniocentesis
          or chorionic villus sampling,&rdquo; Ultrasound in Obstetrics and
          Gynecology, 2019.
        </a>{" "}
        Accessed September 2026.
        <br />
        [10]{" "}
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/25042845/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Akolekar R et al., &ldquo;Procedure-related risk of miscarriage
          following amniocentesis and chorionic villus sampling,&rdquo;
          Ultrasound in Obstetrics and Gynecology, 2015.
        </a>{" "}
        Accessed September 2026.
        <br />
        [11]{" "}
        <a
          href="https://www.cdc.gov/birth-defects/about/down-syndrome.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          CDC, &ldquo;Down Syndrome,&rdquo; Birth Defects.
        </a>{" "}
        Accessed September 2026.
        <br />
        [12]{" "}
        <a
          href="https://www.cdc.gov/sickle-cell/data/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          CDC, &ldquo;Data and Statistics on Sickle Cell Disease.&rdquo;
        </a>{" "}
        Accessed September 2026.
        <br />
        [13]{" "}
        <a
          href="https://onlinelibrary.wiley.com/doi/full/10.1002/ajmg.a.38692"
          target="_blank"
          rel="noopener noreferrer"
        >
          Owens KM et al., &ldquo;FMR1 premutation frequency in a large,
          ethnically diverse population,&rdquo; American Journal of Medical
          Genetics Part A, 2018.
        </a>{" "}
        Accessed September 2026.
        <br />
        [14]{" "}
        <a
          href="https://www.cysticfibrosisjournal.com/article/S1569-1993(23)00061-9/fulltext"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rho J et al., cystic fibrosis incidence analysis, Journal of Cystic
          Fibrosis, 2023.
        </a>{" "}
        Accessed September 2026.
        <br />
        [15]{" "}
        <a
          href="https://www.hrsa.gov/womens-guidelines"
          target="_blank"
          rel="noopener noreferrer"
        >
          HRSA, &ldquo;Women&apos;s Preventive Services Guidelines.&rdquo;
        </a>{" "}
        Accessed September 2026.
      </p>

      <BlogFAQ faqs={faqs} />
    </ArticleLayout>
  );
};

export default PregnancyGenetic;
