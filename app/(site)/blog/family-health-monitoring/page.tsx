import HeadingWithAnchor from "@/components/HeadingWithAnchor";
import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import BlogPostWrapper from "@/components/Blog/BlogPostWrapper";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Family Health Monitoring for Hereditary Risk",
  description:
    "Learn how tracking family health history helps prevent hereditary disease, support early screening, and improve long-term outcomes with proactive care planning.",
  path: "/blog/family-health-monitoring",
  type: "article",
  image: "/images/blog/family-generations.png",
  keywords: [
    "family health history",
    "hereditary diseases",
    "preventive medicine",
    "genetic risk",
    "family health monitoring",
    "disease prevention",
    "BRCA mutations",
    "Lynch syndrome",
    "diabetes prevention",
    "cardiovascular disease risk",
  ],
});

const FamilyHealthMonitoringArticle = () => {
  return (
    <BlogPostWrapper
      title="The Critical Role of Family Health Monitoring in Preventing Hereditary Diseases"
      description="Discover how family health history is the most underutilized tool in preventive medicine. Learn how monitoring hereditary patterns can prevent up to 60% of colorectal cancer deaths, reduce breast cancer risk by 90%, and enable lifestyle interventions that prevent 58% of type 2 diabetes cases."
      image="/images/blog/family-generations.png"
      datePublished="2025-12-20"
      url="/blog/family-health-monitoring"
      category="Family History"
      authorName="Kaizen Health Research Team"
      authorCredentials="Reviewed by healthcare professionals"
      keywords={[
        "family health history",
        "hereditary diseases",
        "preventive medicine",
        "genetic risk",
        "disease prevention",
      ]}
    >
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="blog-details animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
            {/* Hero Image */}
            <div className="mb-10 w-full overflow-hidden">
              <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                <Image
                  src="/images/blog/family-generations.png"
                  alt="Multi-generational family representing family health history"
                  fill
                  sizes="(min-width: 1280px) 1200px, 90vw"
                  className="rounded-md object-cover object-center"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl lg:text-[40px]">
              The Critical Role of Family Health Monitoring in Preventing
              Hereditary Diseases
            </h1>

            {/* Article Meta */}
            <ul className="mb-9 flex flex-wrap gap-5 text-sm text-body-color dark:text-manatee 2xl:gap-7.5">
              <li>
                <span className="font-medium text-black dark:text-white">
                  Author:
                </span>{" "}
                Kaizen Health Research Team
              </li>
              <li>
                <span className="font-medium text-black dark:text-white">
                  Published:
                </span>{" "}
                December 20, 2025
              </li>
              <li>
                <span className="font-medium text-black dark:text-white">
                  Category:
                </span>{" "}
                Family Health Research
              </li>
            </ul>

            {/* Executive Summary */}
            <div className="mb-10 rounded-lg border-l-4 border-primary bg-gray-50 p-6 dark:bg-black/20">
              <h2 className="mb-3 text-xl font-semibold text-black dark:text-white">
                Executive Summary
              </h2>
              <p className="text-lg leading-relaxed">
                Family health history represents the single most underutilized
                tool in preventive medicine today—
                <strong>
                  96% of Americans recognize its importance, yet only 37% have
                  actively collected it
                </strong>
                . This paradox creates both a public health crisis and a
                transformative market opportunity. With genetic factors
                contributing to 30-80% of risk for major diseases including
                cancer, heart disease, and diabetes, systematic family health
                monitoring could prevent up to 60% of colorectal cancer deaths,
                reduce breast cancer risk by 90% in high-risk individuals, and
                enable lifestyle interventions that prevent 58% of type 2
                diabetes cases. The convergence of AI advancement, FHIR
                interoperability standards, and consumer health data ownership
                laws has created an unprecedented inflection point for
                family-centric health platforms.
              </p>
            </div>

            {/* Section 1: The Awareness-to-Action Gap */}
            <HeadingWithAnchor id="awareness-action-gap" size="text-3xl">
              1. Introduction: The Awareness-to-Action Gap
            </HeadingWithAnchor>
            <p className="mb-6">
              Despite twenty years of public health initiatives, Americans'
              knowledge of their family health history has barely improved. The
              CDC's landmark 2004 HealthStyles survey found that while{" "}
              <strong>96.3% of Americans</strong> believe family health history
              is important to their personal health, only <strong>29.8%</strong>{" "}
              had ever actively collected health information from relatives. (
              <a
                href="https://www.cdc.gov/pcd/issues/2005/apr/04_0131.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                CDC Preventing Chronic Disease, 2005
              </a>
              )
            </p>
            <p className="mb-6">
              A decade later, the American Journal of Medical Genetics reported
              this figure had increased to just <strong>36.9%</strong>—a modest
              7-point gain representing what researchers termed "little change
              in Americans' knowledge and use of family health history
              information."
            </p>
            <p className="mb-6">
              The NIH All of Us Research Program provides even more sobering
              data from its 2018-2021 cohort of 116,799 participants: only{" "}
              <strong>37% endorsed having "a lot" of knowledge</strong> about
              their family health history, while 63% reported only "some" or
              "none at all." (
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6814221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                PLOS ONE, 2019
              </a>
              )
            </p>
            <p className="mb-6">
              Among young adults, a 2019 study found that 93% were "highly
              aware" of the family health history concept, yet only{" "}
              <strong>39%</strong> had actually collected it and a mere{" "}
              <strong>4%</strong> use any digital tool to track this
              information. (
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/31652289/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                PubMed, 2019
              </a>
              )
            </p>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              The Clinical Underutilization Problem
            </h3>
            <p className="mb-6">
              This gap translates directly into missed clinical opportunities:
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-2">
              <li>
                Family history is discussed during only{" "}
                <strong>22% of follow-up visits</strong> and averages less than
                2.5 minutes even during new patient encounters (
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3728505/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  PMC Qualitative Study
                </a>
                )
              </li>
              <li>
                A 2024 JAMA Network Open study revealed that{" "}
                <strong>82% of patients meeting family history criteria</strong>{" "}
                for hereditary breast and ovarian cancer genetic testing had no
                evidence of prior testing in their electronic health records
              </li>
              <li>
                Family history can identify{" "}
                <strong>72% of early-onset coronary heart disease cases</strong>{" "}
                and <strong>86% of early stroke events</strong>, yet these
                predictions largely go unmade
              </li>
            </ul>
            <p className="mb-8">
              As The Lancet concluded: family health history remains "underused
              for actionable risk assessment" despite being "the most useful
              means of assessing risk for common chronic diseases." (
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S0140673619312759"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                The Lancet, 2019
              </a>
              )
            </p>

            <hr className="my-12 border-t border-stroke dark:border-strokedark" />

            {/* Section 2: Current Research */}
            <HeadingWithAnchor id="research-validation" size="text-3xl">
              2. Current Research: Validating Family History as a Risk
              Stratification Tool
            </HeadingWithAnchor>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              2.1 Foundational Research Findings (2020-2025)
            </h3>
            <p className="mb-6">
              Research from 2020-2025 has reinforced family health history's
              position as a primary risk stratification tool. A foundational
              2019 Lancet study established that the odds ratio for developing
              disease with positive family history is{" "}
              <strong>frequently greater than 2</strong>, while systematic FHH
              tools improve data recording quality by <strong>46-78%</strong>{" "}
              compared to standard practice. (
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6822265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                PMC Family Health History
              </a>
              )
            </p>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              2.2 Implementation Trial Results
            </h3>
            <p className="mb-6">
              The 2022 BMC Health Services Research implementation trial across
              19 primary care clinics at four geographically diverse U.S.
              healthcare systems delivered critical findings:
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-2">
              <li>
                <strong>41.2% of primary care patients</strong> meet guideline
                criteria for enhanced surveillance due to familial risk of
                breast or colon cancer
              </li>
              <li>
                Following family history-based intervention, 90.5% of providers
                would recommend standardized risk assessment to their peers
              </li>
              <li>70% reported enhanced patient communication</li>
            </ul>
            <p className="mb-6">
              (
              <a
                href="https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-022-08879-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                BMC Health Services Research, 2022
              </a>
              )
            </p>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              2.3 Cardiovascular Research
            </h3>
            <p className="mb-6">
              Cardiovascular research has been particularly compelling:
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-3">
              <li>
                The 2022 SWEDEHEART study of 25,615 first-time myocardial
                infarction patients demonstrated that family history of
                early-onset atherosclerotic cardiovascular disease independently
                predicts recurrent ASCVD events—
                <strong>beyond traditional risk factors</strong> (
                <a
                  href="https://www.ahajournals.org/doi/10.1161/JAHA.121.022264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Journal of the American Heart Association, 2022
                </a>
                )
              </li>
              <li>
                A 2023 Journal of the American Heart Association study concluded
                that family history of cardiovascular disease alone is
                "generally sufficient to capture susceptibility to future CVD in
                offspring" (
                <a
                  href="https://www.ahajournals.org/doi/10.1161/JAHA.122.027881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  JAHA, 2023
                </a>
                )
              </li>
            </ul>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              2.4 Clinical Guidelines Based on Research
            </h3>
            <p className="mb-6">
              Major medical institutions have codified these findings into
              clinical guidelines:
            </p>
            <div className="mb-8 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Organization
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Recommendation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      American Cancer Society
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Women with ≥20-25% lifetime breast cancer risk based on
                      family history should receive annual mammogram plus breast
                      MRI screening (
                      <a
                        href="https://www.cancer.org/cancer/types/breast-cancer/screening-tests-and-early-detection/american-cancer-society-recommendations-for-the-early-detection-of-breast-cancer.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        ACS Guidelines
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      American Heart Association
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Family history included as "risk-enhancing factor" in 2019
                      ACC/AHA Primary Prevention guidelines
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      USPSTF
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Colorectal cancer screening at age 40 or 10 years before
                      youngest affected relative's diagnosis for those with
                      significant family history (
                      <a
                        href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        USPSTF Colorectal Screening
                      </a>
                      )
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <hr className="my-12 border-t border-stroke dark:border-strokedark" />

            {/* Section 3: Technology, AI, and Why Now */}
            <HeadingWithAnchor id="technology-inflection" size="text-3xl">
              3. Change in Technology, AI, and Why It's Important Now
            </HeadingWithAnchor>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              3.1 Evolution of Health Technology
            </h3>
            <p className="mb-4">
              The health technology landscape has evolved through three distinct
              eras:
            </p>
            <p className="mb-2">
              <strong>Era 1: Paper Records (Pre-1990s)</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>Illegible handwriting</li>
              <li>Incomplete information</li>
              <li>Facility-locked access</li>
            </ul>
            <p className="mb-2">
              <strong>Era 2: EHR Emergence (1960s-2009)</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>Accelerated by HITECH Act's Meaningful Use incentives</li>
              <li>
                By 2010, only <strong>54.5% of hospital-owned clinics</strong>{" "}
                had implemented EHRs
              </li>
              <li>Created siloed, non-interoperable systems</li>
            </ul>
            <p className="mb-2">
              <strong>
                Era 3: AI-Powered Health Intelligence (2022-Present)
              </strong>
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-3">
              <li>Large language models enable pattern recognition</li>
              <li>Predictive analytics at scale</li>
              <li>Consumer-facing health AI becoming viable</li>
            </ul>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              3.2 Current AI Capabilities
            </h3>
            <p className="mb-4">Contemporary AI can now:</p>
            <ul className="mb-6 list-disc pl-6 space-y-2">
              <li>
                Predict disease up to <strong>10 years in advance</strong> using
                blood protein patterns (University of Edinburgh, 2024)
              </li>
              <li>
                Estimate timing of <strong>1,200+ diseases</strong> using health
                records (
                <a
                  href="https://www.nature.com/articles/d41586-025-02971-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Nature, 2025
                </a>
                )
              </li>
              <li>
                Achieve <strong>0.93-0.95 AUROC</strong> for in-hospital
                mortality prediction
              </li>
              <li>
                Enable personalized risk prediction with explainable AI (XAI)
                through SHAP methodology
              </li>
              <li>
                PicnicHealth's specialized medical AI reportedly performs{" "}
                <strong>3x better than GPT-4</strong> for clinical entity
                extraction
              </li>
            </ul>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              3.3 Regulatory Developments Enabling Interoperability
            </h3>
            <p className="mb-4">
              Three regulatory developments have simultaneously matured the
              interoperability landscape:
            </p>
            <div className="mb-8 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Regulation
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Status
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      FHIR R4
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Normative standard (2018)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Data interoperability increased from{" "}
                      <strong>11% to 66%</strong> (
                      <a
                        href="https://eajournals.org/ijeats/wp-content/uploads/sites/55/2025/04/Interoperability.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        FHIR Interoperability Study
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      HTI-1 Rule
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Effective 2025
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Requires USCDIv3 support via FHIR APIs (
                      <a
                        href="https://dynamichealthit.com/post/2025-is-on-fhir/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Dynamic Health IT
                      </a>
                      )
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      CMS Prior Authorization Rule
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      2026-2027
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Mandates FHIR-based APIs
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      TEFCA
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Growing adoption
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      National data exchange network (
                      <a
                        href="https://www.sprypt.com/blog/fhir-guide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        SPRY FHIR Guide
                      </a>
                      )
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              3.4 Consumer Health Data Ownership Revolution
            </h3>
            <p className="mb-4">
              Consumer health data ownership has emerged as a parallel force:
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-2">
              <li>
                <strong>Washington My Health My Data Act</strong> (March 2024) -
                extends consumer protections beyond HIPAA (
                <a
                  href="https://www.faegredrinker.com/en/insights/publications/2024/2/so-whats-consumer-health-data-anyway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Faegre Drinker
                </a>
                )
              </li>
              <li>
                <strong>Nevada</strong> similar legislation enacted
              </li>
              <li>
                <strong>New York Health Information Privacy Act</strong> (2025)
                (
                <a
                  href="https://law.stanford.edu/2025/02/26/digital-diagnosis-health-data-privacy-in-the-u-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Stanford Law School
                </a>
                )
              </li>
              <li>
                FTC enforcement actions exceeding{" "}
                <strong>$7 million in fines</strong> signal regulatory
                commitment (
                <a
                  href="https://www.ey.com/en_us/insights/health/navigating-data-privacy-evolution-in-health-care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  EY Health Data Privacy
                </a>
                )
              </li>
            </ul>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              3.5 Competitive Landscape Analysis
            </h3>

            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              Personal Health Records (Apple Health, MyChart, Patient Portals)
            </h4>
            <p className="mb-2">
              <strong>Limitations:</strong>
            </p>
            <ul className="mb-3 list-disc pl-6 space-y-3">
              <li>
                Apple Health: iOS-only (excluding ~50% of users), requires
                manual provider connections, no family health management
              </li>
              <li>
                MyChart: Tied to Epic's EHR system, non-Epic organizations have
                limited connectivity, steep learning curves
              </li>
              <li>
                Patient Portals: Single-facility focused, no cross-provider
                consolidation, no pattern analysis
              </li>
            </ul>
            <p className="mb-4">
              <strong>Gap:</strong> No family view, no AI insights, no
              prevention focus, reactive not proactive
            </p>

            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              Medical Record Aggregation (Picnic Health, Citizen Health, Human
              API, Seqster)
            </h4>
            <p className="mb-2">
              <strong>Limitations:</strong>
            </p>
            <ul className="mb-3 list-disc pl-6 space-y-3">
              <li>
                PicnicHealth: Focuses on life sciences research, consumer
                products secondary
              </li>
              <li>
                Human API: Acquired by LexisNexis (2023), B2B SaaS model serving
                clinical trials
              </li>
              <li>
                Seqster: Enterprise-focused, pharmaceutical and insurer
                customers
              </li>
            </ul>
            <p className="mb-4">
              <strong>Gap:</strong> No family patterns, no consumer-facing AI
              analysis, no risk prediction, record collection only
            </p>

            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              Family Health Trackers (Acensa Health)
            </h4>
            <p className="mb-2">
              <strong>Limitations:</strong>
            </p>
            <ul className="mb-3 list-disc pl-6 space-y-3">
              <li>Apple-only with no Android support</li>
              <li>Requires manual data entry</li>
              <li>No automatic EHR integration</li>
              <li>No AI-powered insights or genetic data integration</li>
            </ul>
            <p className="mb-4">
              <strong>Gap:</strong> No AI analysis, no health insights, no risk
              prediction, reactive approach
            </p>

            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              Genetic & At-Home Testing (Ancestry, LetsGetChecked, Quest)
            </h4>
            <p className="mb-2">
              <strong>Limitations:</strong>
            </p>
            <ul className="mb-3 list-disc pl-6 space-y-3">
              <li>
                AncestryHealth: Not FDA-approved, unavailable in NY, NJ, RI,
                detects only 3 BRCA variants vs 5,000+ known pathogenic
                mutations (
                <a
                  href="https://www.fiercebiotech.com/medtech/ancestry-relaunches-dna-health-offerings-employing-quest-s-next-gen-sequencing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Fierce Biotech
                </a>
                )
              </li>
              <li>
                LetsGetChecked: Point-in-time snapshots without longitudinal
                monitoring (
                <a
                  href="https://www.generationlab.com/blog/letsgetchecked-accuracy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Generation Lab
                </a>
                )
              </li>
              <li>
                Quest: Limited genetic variant coverage, no integration into
                ongoing health management (
                <a
                  href="https://www.360dx.com/business-news/ancestry-begins-genetic-testing-services-health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  360Dx
                </a>
                )
              </li>
            </ul>
            <p className="mb-6">
              <strong>Gap:</strong> No family action plans, genetic-only without
              full medical history, one-time tests, patient-initiated
            </p>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              3.6 The Unaddressed Market Gap
            </h3>
            <p className="mb-4">
              <strong>No platform integrates:</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>Family-wide record aggregation</li>
              <li>AI-driven predictive analytics</li>
              <li>Genetic data correlation</li>
              <li>Consumer-friendly design</li>
            </ul>
            <p className="mb-8">Into a unified solution.</p>

            <hr className="my-12 border-t border-stroke dark:border-strokedark" />

            {/* Section 4: Types of Diseases That Can Be Prevented */}
            <HeadingWithAnchor id="diseases-prevented" size="text-3xl">
              4. Types of Diseases That Can Be Prevented
            </HeadingWithAnchor>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              4.1 Common Conditions
            </h3>

            {/* 4.1.1 Type 2 Diabetes */}
            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              4.1.1 Type 2 Diabetes
            </h4>
            <p className="mb-2">
              <strong>Prevalence and Impact</strong>
            </p>
            <p className="mb-4">
              Type 2 diabetes affects <strong>38.4 million Americans</strong>{" "}
              (11.6% of the population), with another 97.6 million having
              prediabetes. The total annual cost burden exceeds{" "}
              <strong>$413 billion</strong>. (
              <a
                href="https://www.singlecare.com/blog/news/diabetes-statistics/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                SingleCare Diabetes Statistics
              </a>
              )
            </p>
            <p className="mb-2">
              <strong>Genetic and Hereditary Factors</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Factor
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Risk Increase
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Heritability estimates
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      25-72% based on twin/family studies
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      One parent with T2D
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      2-3x increased risk
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Both parents with T2D
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      5.14x increased risk (EPIC-InterAct Study)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Sibling with T2D
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      3x increased risk
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4">
              Key susceptibility genes include TCF7L2 (strongest association),
              KCNQ1, KCNJ11, and over 150 additional DNA variants. However,
              currently identified genetic variants explain only ~10% of
              observed heritability, making family history capture essential. (
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3746083/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                PMC Genetics of Type 2 Diabetes
              </a>
              )
            </p>
            <p className="mb-2">
              <strong>Family History Monitoring Enables Prevention</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-2">
              <li>
                CDC data shows individuals with family history have{" "}
                <strong>14.3% diabetes prevalence vs 3.2%</strong> without—a
                crude odds ratio of 5.0 (
                <a
                  href="https://www.cdc.gov/pcd/issues/2005/apr/04_0131.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  CDC Family History Study
                </a>
                )
              </li>
              <li>
                Risk increases to nearly{" "}
                <strong>15-fold with three or more affected relatives</strong>
              </li>
              <li>
                Combined high familial risk plus BMI ≥25 creates{" "}
                <strong>22-fold increased diabetes incidence</strong> (
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/23052052/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  PubMed EPIC-InterAct
                </a>
                )
              </li>
            </ul>
            <p className="mb-2">
              <strong>Clinical Guidelines and Prevention Impact</strong>
            </p>
            <div className="mb-8 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Intervention
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Outcome
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Lifestyle intervention (DPP study)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>58% reduction</strong> in diabetes progression
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      ADA screening recommendation
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Any age when first-degree relative affected
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Metformin in high-risk individuals
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      31% reduction in progression
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 4.1.2 Cardiovascular Disease */}
            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              4.1.2 Cardiovascular Disease
            </h4>
            <p className="mb-2">
              <strong>Prevalence and Impact</strong>
            </p>
            <p className="mb-4">
              Cardiovascular disease remains the leading cause of death,
              claiming approximately{" "}
              <strong>697,000 American lives annually</strong>—25% of all
              deaths. The condition affects 48.6% of US adults when including
              hypertension. (
              <a
                href="https://cvrti.utah.edu/2024-heart-disease-statistics-and-their-implications/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                CVRTI Heart Disease Statistics
              </a>
              )
            </p>
            <p className="mb-4">
              Alarmingly, more than half of U.S. adults don't know heart disease
              is the leading cause of death despite its 100-year reign. (
              <a
                href="https://newsroom.heart.org/news/more-than-half-of-u-s-adults-dont-know-heart-disease-is-leading-cause-of-death-despite-100-year-reign"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                American Heart Association
              </a>
              )
            </p>
            <p className="mb-2">
              <strong>Genetic and Hereditary Factors</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Factor
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Risk Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Heritability of CHD
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      30-60%
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Family history
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Doubles or triples risk (Framingham Study)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      One parent with MI
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      OR 1.67 (INTERHEART)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Both parents with MI before 50
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      OR 6.56
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4">
              Genetic architecture involves hundreds of variants with
              individually small effects. (
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7006335/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                PMC Genetics in CVD
              </a>
              )
            </p>
            <p className="mb-2">
              <strong>Family History Monitoring Enables Prevention</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-2">
              <li>
                First-degree relatives with premature CVD face{" "}
                <strong>50% increase in lifetime CVD death risk</strong> (Cooper
                Center Longitudinal Study)
              </li>
              <li>
                Siblings with CVD approximately <strong>double</strong> an
                individual's risk
              </li>
              <li>
                Identical twins show <strong>3.8-15x increased hazard</strong>{" "}
                if sibling died of CAD before age 75
              </li>
              <li>
                <strong>12.5% of US adults</strong> report family history of
                premature heart disease (
                <a
                  href="https://www.ahajournals.org/doi/10.1161/JAHA.119.012364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  JAHA NHANES Analysis
                </a>
                )
              </li>
            </ul>
            <p className="mb-4">
              Family history conveys relative risk increase similar to
              smoking—yet it's modifiable through earlier intervention. (
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4229162/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                PMC Family History of CVD
              </a>
              )
            </p>
            <p className="mb-2">
              <strong>Clinical Guidelines and Prevention Impact</strong>
            </p>
            <div className="mb-8 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Guideline
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Recommendation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      ACC/AHA 2019
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Family history as "risk-enhancing factor"
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Statin initiation
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Earlier in those with family history
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      BP control targets
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      More aggressive monitoring
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Outcome
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Death rates from CVD have declined{" "}
                      <strong>60% since 1950</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 4.1.3 Breast Cancer */}
            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              4.1.3 Breast Cancer
            </h4>
            <p className="mb-2">
              <strong>Prevalence and Impact</strong>
            </p>
            <p className="mb-4">
              Breast cancer is the most common cancer in women after skin
              cancer, with <strong>43,170 deaths in 2023</strong>. It affects 1
              in 8 women over their lifetime.
            </p>
            <p className="mb-2">
              <strong>Genetic and Hereditary Factors</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Factor
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Risk Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Hereditary factors
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Account for 5-10% of all breast cancers
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      In women under 30
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Up to 25% hereditary
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      BRCA1/BRCA2 carriers
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      45-72% lifetime risk (vs 13% general)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      First-degree relative affected
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      2x increased risk
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      PALB2 mutation
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      35% risk by age 70
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4">
              Other high-risk genes include TP53, ATM, and CHEK2.
            </p>
            <p className="mb-2">
              <strong>Family History Monitoring Enables Prevention</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-2">
              <li>
                USPSTF 2024 recommendations lowered general mammography start to
                age 40 (
                <a
                  href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  USPSTF Breast Cancer Screening
                </a>
                )
              </li>
              <li>
                High-risk women (≥20% lifetime risk based on family history)
                should receive:
                <ul className="mt-2 list-disc pl-6 space-y-3">
                  <li>Genetic counseling</li>
                  <li>Possible BRCA testing</li>
                  <li>MRI screening in addition to mammography</li>
                  <li>Screening starting at age 25-30</li>
                </ul>
              </li>
            </ul>
            <p className="mb-2">
              <strong>Clinical Guidelines and Prevention Impact</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Stage at Detection
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      5-Year Survival
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Localized
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>99%</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Regional
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      86%
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Distant
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      31%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mb-8 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Intervention
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Risk Reduction
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Risk-reducing bilateral mastectomy (BRCA carriers)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>~90%</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Risk-reducing salpingo-oophorectomy
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      80-90% ovarian cancer risk
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Enhanced MRI + mammography surveillance
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Earlier stage detection
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 4.1.4 Colorectal Cancer */}
            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              4.1.4 Colorectal Cancer
            </h4>
            <p className="mb-2">
              <strong>Prevalence and Impact</strong>
            </p>
            <p className="mb-4">
              Colorectal cancer is the{" "}
              <strong>fourth most common cancer</strong> and second leading
              cause of cancer death in the United States, with approximately
              135,000 new cases and 51,000 deaths annually.
            </p>
            <p className="mb-2">
              <strong>Genetic and Hereditary Factors</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Factor
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Contribution
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Hereditary syndromes
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      30-35% of all cases
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Lynch syndrome
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      2-4% of all CRC (1 in 279 people)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Family history (no identified syndrome)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      2-4x increased risk
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Relative diagnosed before 50
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Highest risk category
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-2">
              <strong>Family History Monitoring Enables Prevention</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-2">
              <li>
                <strong>
                  Up to 60% of colorectal cancer deaths could be prevented
                </strong>{" "}
                with proper screening
              </li>
              <li>
                Colonoscopy can <strong>prevent cancer entirely</strong> by
                removing precancerous polyps during 10-15 year development
                window
              </li>
              <li>
                Screen-detected cancers achieve{" "}
                <strong>83.4% five-year survival vs 57.5%</strong> for
                non-screen-detected (
                <a
                  href="https://www.moffitt.org/cancers/colon-cancer/survival-rate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Moffitt Cancer Center
                </a>
                )
              </li>
            </ul>
            <p className="mb-2">
              <strong>Clinical Guidelines and Prevention Impact</strong>
            </p>
            <div className="mb-8 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Population
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Screening Recommendation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      General population
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Age 45 (USPSTF/ACS)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Positive family history
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Age 40 or 10 years before youngest affected relative
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Multiple affected relatives
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Every 3-5 years
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Lynch syndrome
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Every 1-2 years starting age 20-25
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 4.1.5 Alzheimer's Disease */}
            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              4.1.5 Alzheimer's Disease and Dementia
            </h4>
            <p className="mb-2">
              <strong>Prevalence and Impact</strong>
            </p>
            <p className="mb-4">
              Alzheimer's disease affects over{" "}
              <strong>6.7 million Americans</strong>, with annual costs
              exceeding <strong>$360 billion</strong>. It is the 7th leading
              cause of death.
            </p>
            <p className="mb-2">
              <strong>Genetic and Hereditary Factors</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Factor
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Risk Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Heritability
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Up to 80%
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      APOE-ε4 (one copy)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      3x increased risk
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      APOE-ε4 (two copies)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      8-15x increased risk
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      APOE-ε4 prevalence
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      20-30% of US population
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      First-degree relative
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      ~30% increased relative risk
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4">
              Early-onset familial Alzheimer's (APP, PSEN1, PSEN2 mutations)
              shows virtually <strong>100% penetrance</strong> with autosomal
              dominant inheritance. (
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3475404/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                PMC Genetics of Alzheimer Disease
              </a>
              ) (
              <a
                href="https://www.alz.org/alzheimers-dementia/what-is-alzheimers/causes-and-risk-factors/genetics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Alzheimer's Association Genetics
              </a>
              )
            </p>
            <p className="mb-2">
              <strong>Family History Monitoring Enables Prevention</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-2">
              <li>
                <strong>Up to 40% of dementia cases may be preventable</strong>{" "}
                through modifiable risk factors
              </li>
              <li>
                Key interventions: cardiovascular health optimization, sleep,
                exercise, cognitive engagement
              </li>
              <li>
                New anti-amyloid therapies (lecanemab, donanemab) show greatest
                efficacy in early stages
              </li>
              <li>
                People with APOE-ε4 demonstrate{" "}
                <strong>greater benefit from lifestyle interventions</strong>
              </li>
            </ul>
            <p className="mb-2">
              <strong>Clinical Guidelines</strong>
            </p>
            <div className="mb-8 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Recommendation
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Rationale
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Family history documentation
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Risk stratification for enhanced monitoring
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Cardiovascular risk management
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Reduces vascular contribution to dementia
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Cognitive screening
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Earlier in those with family history
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Emerging: genetic counseling
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      For early-onset family patterns
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 4.2: Rare but Significant Conditions */}
            <h3 className="mt-10 mb-4 text-xl font-semibold text-black dark:text-white">
              4.2 Rare but Significant Conditions
            </h3>

            {/* 4.2.1 BRCA1/BRCA2 */}
            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              4.2.1 BRCA1/BRCA2 Mutations (Hereditary Breast and Ovarian Cancer
              Syndrome)
            </h4>
            <p className="mb-2">
              <strong>Prevalence</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>
                General population: <strong>1 in 400</strong>
              </li>
              <li>
                Ashkenazi Jewish individuals: <strong>1 in 40</strong>
              </li>
            </ul>
            <p className="mb-2">
              <strong>Cancer Risk Profile</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Cancer Type
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      BRCA1 Risk
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      BRCA2 Risk
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      General Population
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Breast (lifetime)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      55-72%
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      45-69%
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      13%
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Ovarian (by 80)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      39-58%
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      13-29%
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      1.1%
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Contralateral breast (20 yr)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      30-40%
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      30-40%
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      5-10%
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Male breast
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      1-2%
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      6-8%
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      0.1%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4">
              (
              <a
                href="https://www.cancer.gov/about-cancer/causes-prevention/genetics/brca-fact-sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                National Cancer Institute BRCA Fact Sheet
              </a>
              )
            </p>
            <p className="mb-2">
              <strong>Inheritance Pattern and Family Implications</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>
                Autosomal dominant: each first-degree relative has{" "}
                <strong>50% chance</strong> of carrying mutation
              </li>
              <li>Cascade family screening is essential</li>
              <li>Three-generation family history analysis recommended</li>
            </ul>
            <p className="mb-2">
              <strong>Prevention and Risk Reduction</strong>
            </p>
            <div className="mb-8 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Intervention
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Risk Reduction
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Risk-reducing bilateral mastectomy
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>~90%</strong> breast cancer risk
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Risk-reducing salpingo-oophorectomy
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>80-90%</strong> ovarian cancer risk
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      RRSO all-cause mortality reduction
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      77%
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Enhanced surveillance (MRI + mammography)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Earlier detection, improved survival
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 4.2.2 Lynch Syndrome */}
            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              4.2.2 Lynch Syndrome (Hereditary Nonpolyposis Colorectal Cancer)
            </h4>
            <p className="mb-2">
              <strong>Prevalence</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>
                <strong>1 in 279 people</strong> (most common inherited CRC
                syndrome)
              </li>
              <li>
                Accounts for <strong>3% of all colorectal cancers</strong>
              </li>
            </ul>
            <p className="mb-2">
              <strong>Cancer Risk Profile</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Cancer Type
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Lynch Syndrome Risk
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      General Population
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Colorectal (lifetime)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      50-80%
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      4.5%
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Average age at CRC diagnosis
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      44 years
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      64 years
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Endometrial
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      25-60%
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      2.8%
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Ovarian
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      4-12%
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      1.1%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4">
              Also increases risk for gastric, urinary tract, brain, and other
              cancers. (
              <a
                href="https://www.cancer.org/cancer/types/colon-rectal-cancer/causes-risks-prevention/genetic-tests-screening-prevention.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                American Cancer Society Lynch Syndrome
              </a>
              )
            </p>
            <p className="mb-2">
              <strong>Prevention Impact</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Intervention
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Outcome
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Colonoscopic surveillance
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>56% reduction</strong> in CRC incidence
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Colonoscopic surveillance
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>65% reduction</strong> in CRC mortality
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Prophylactic hysterectomy/oophorectomy
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Eliminates endometrial/ovarian cancer risk
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-2">
              <strong>Screening Guidelines</strong>
            </p>
            <div className="mb-8 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Recommendation
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Colonoscopy frequency
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Every 1-2 years
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Start age
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      20-25 years or 2-5 years before youngest family diagnosis
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Women: endometrial surveillance
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Annual starting age 30-35
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 4.2.3 Hereditary Hemochromatosis */}
            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              4.2.3 Hereditary Hemochromatosis
            </h4>
            <p className="mb-2">
              <strong>Prevalence</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>
                <strong>1 in 300</strong> non-Hispanic white individuals (most
                common genetic disease in Northern European ancestry)
              </li>
              <li>
                Over <strong>650,000 Americans</strong> carry C282Y homozygous
                genotype
              </li>
              <li>Most remain undiagnosed</li>
            </ul>
            <p className="mb-2">
              <strong>Disease Mechanism and Complications</strong>
            </p>
            <p className="mb-2">
              Without treatment, progressive iron overload causes:
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>Cirrhosis</li>
              <li>
                Hepatocellular carcinoma (
                <strong>200-fold increased risk</strong>)
              </li>
              <li>Cardiomyopathy</li>
              <li>Diabetes ("bronze diabetes")</li>
              <li>Arthritis</li>
            </ul>
            <p className="mb-2">
              <strong>Prevention: The Success Story</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Intervention
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Outcome
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Phlebotomy treatment
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>100% effective</strong> at preventing iron
                      accumulation when started before organ damage
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Treatment before cirrhosis
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>Normal life expectancy</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Cost of treatment
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Minimal (therapeutic blood removal)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-2">
              <strong>Family Screening Approach</strong>
            </p>
            <p className="mb-2">
              USPSTF designates family-based screening as primary approach:
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-3">
              <li>
                First-degree relatives (especially siblings) have{" "}
                <strong>25% probability</strong> of being homozygous
              </li>
              <li>HFE genotyping recommended for all first-degree relatives</li>
              <li>Transferrin saturation and ferritin monitoring</li>
            </ul>

            {/* 4.2.4 Familial Hypercholesterolemia */}
            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              4.2.4 Familial Hypercholesterolemia (FH)
            </h4>
            <p className="mb-2">
              <strong>Prevalence and Underdiagnosis</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>
                Affects <strong>1 in 200-250 people</strong> (~1.3 million
                Americans)
              </li>
              <li>Most common genetic cause of cardiovascular disease</li>
              <li>
                <strong>Only 10% of cases identified</strong> despite CDC Tier 1
                Genomic Application designation
              </li>
            </ul>
            <p className="mb-2">
              <strong>Clinical Presentation</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Feature
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Heterozygous FH
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Homozygous FH
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      LDL-C levels
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      190-400 mg/dL
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      &gt;400 mg/dL
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Untreated first MI (men)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Average age 50
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Childhood/teens
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Untreated first MI (women)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Average age 60
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Childhood/teens
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Premature CAD risk
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>20-fold increased</strong>
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Severe, early
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-2">
              <strong>Prevention Impact</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Intervention
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Outcome
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Statin therapy
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Reduces LDL-C by 50%
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Statin + ezetimibe
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Additional 15-20% reduction
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      PCSK9 inhibitors
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Additional 50-60% reduction
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      CVD event reduction
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>48-76%</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Treatment from childhood
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Near-normal life expectancy
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-2">
              <strong>Cascade Screening Value</strong>
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-3">
              <li>Highly cost-effective: ~$25,000 per life-year saved</li>
              <li>
                Each diagnosed patient leads to identification of{" "}
                <strong>3-4 additional affected family members</strong>
              </li>
              <li>
                Dutch Lipid Clinic Network criteria enable systematic
                identification
              </li>
            </ul>

            {/* 4.2.5 Huntington's Disease */}
            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              4.2.5 Huntington's Disease
            </h4>
            <p className="mb-2">
              <strong>Prevalence</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>
                <strong>3-7 per 100,000</strong> people of European ancestry
              </li>
              <li>~30,000 symptomatic individuals in US</li>
              <li>~200,000 at-risk individuals</li>
            </ul>
            <p className="mb-2">
              <strong>Genetic Characteristics</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Feature
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Inheritance
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Autosomal dominant
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Penetrance
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Essentially complete
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Child of affected parent
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>50% inheritance risk</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Cause
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      CAG repeat expansion in HTT gene
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Mean onset age
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      35-44 years
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Median survival
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      15-18 years after symptom onset
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-2">
              <strong>Value of Family Monitoring</strong>
            </p>
            <p className="mb-2">
              While no disease-modifying treatments currently exist, family
              monitoring enables:
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Benefit
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Predictive testing
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Enables life planning, career decisions
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Family planning
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Preimplantation genetic diagnosis available
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Clinical trial access
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Presymptomatic carriers eligible for prevention trials
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Psychological preparation
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Counseling and support systems
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-6">
              Active research on gene-silencing therapies may prove most
              effective in presymptomatic carriers.
            </p>

            {/* 4.2.6 ADPKD */}
            <h4 className="mt-8 mb-4 text-xl font-semibold text-black dark:text-white">
              4.2.6 Autosomal Dominant Polycystic Kidney Disease (ADPKD)
            </h4>
            <p className="mb-2">
              <strong>Prevalence</strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>
                <strong>1 in 400-1,000</strong> people (~600,000 Americans)
              </li>
              <li>
                <strong>Fourth leading cause</strong> of kidney failure in US
              </li>
              <li>Among most common genetic diseases</li>
            </ul>
            <p className="mb-2">
              <strong>Disease Progression</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Gene
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Median Age to ESRD
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Severity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      PKD1 (85% of cases)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      54 years
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      More severe
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      PKD2 (15% of cases)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      74 years
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Milder course
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-4">
              ~50% of ADPKD patients reach kidney failure by age 60.
            </p>
            <p className="mb-2">
              <strong>Prevention Through Early Identification</strong>
            </p>
            <div className="mb-6 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Intervention
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Impact
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Blood pressure control
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Slows kidney function decline
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Tolvaptan (FDA approved 2018)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Decreases cyst growth, delays decline by{" "}
                      <strong>~30%</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Surveillance for aneurysms
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Present in 5-10%; screening prevents rupture
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Liver cyst monitoring
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Affects 70-80% of patients
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mb-2">
              <strong>Family Screening Protocol</strong>
            </p>
            <ul className="mb-8 list-disc pl-6 space-y-3">
              <li>
                Ultrasound screening criteria based on age and number of cysts
              </li>
              <li>Genetic testing for at-risk family members</li>
              <li>Early intervention significantly improves outcomes</li>
            </ul>

            <hr className="my-12 border-t border-stroke dark:border-strokedark" />

            {/* Section 5: Kaizen Health - Addressing the Market Gap */}
            <HeadingWithAnchor id="kaizen-health" size="text-3xl">
              5. Kaizen Health: Addressing the Market Gap
            </HeadingWithAnchor>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              5.1 The Five Critical Gaps in Current Solutions
            </h3>
            <p className="mb-4">
              The research synthesized in this document reveals substantial
              unmet needs:
            </p>

            <p className="mb-2">
              <strong>
                Gap 1: No Unified Family Health Intelligence Platform
              </strong>
            </p>
            <p className="mb-2">Current tools address either:</p>
            <ul className="mb-2 list-disc pl-6 space-y-3">
              <li>
                Individual record aggregation (PicnicHealth, Seqster) with
                enterprise/research focus, OR
              </li>
              <li>
                Family organization (Acensa) without AI or automated aggregation
              </li>
            </ul>
            <p className="mb-4 italic">
              No solution provides family-wide health dashboards with inherited
              condition pattern identification across generations.
            </p>

            <p className="mb-2">
              <strong>
                Gap 2: Consumer-Facing Predictive Health AI Unavailable
              </strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>
                AI disease prediction exists in clinical/research settings
              </li>
              <li>
                AI can estimate 1,200+ disease risks up to 20 years in advance (
                <a
                  href="https://www.nature.com/articles/d41586-025-02971-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Nature, 2025
                </a>
                )
              </li>
              <li>No consumer tool delivers this capability to families</li>
            </ul>

            <p className="mb-2">
              <strong>
                Gap 3: Cross-Platform Family Caregiver Tools Absent
              </strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>~80% of family healthcare decisions made by mothers</li>
              <li>Managing disparate apps, portals, and records</li>
              <li>
                Failed attempts (Microsoft HealthVault, Google Health)
                demonstrated demand but couldn't sustain engagement
              </li>
            </ul>

            <p className="mb-2">
              <strong>
                Gap 4: Prevention-Focused Health Management Lacks Coordination
              </strong>
            </p>
            <ul className="mb-4 list-disc pl-6 space-y-3">
              <li>Current tools are reactive (showing historical data)</li>
              <li>No proactive recommendations based on family patterns</li>
              <li>
                NHGRI identifies family health history implementation as "urgent
                need" that "could improve both primary and secondary disease
                prevention" (
                <a
                  href="https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-022-08879-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  BMC Health Services Research
                </a>
                )
              </li>
            </ul>

            <p className="mb-2">
              <strong>
                Gap 5: Genetic and Clinical Data Remain Disconnected
              </strong>
            </p>
            <ul className="mb-6 list-disc pl-6 space-y-3">
              <li>
                Genetic testing (23andMe, Ancestry) exists in isolation from
                clinical records
              </li>
              <li>
                No tool correlates genetic risks with emerging clinical patterns
              </li>
              <li>
                No alerts when clinical trajectories align with genetic
                predispositions
              </li>
            </ul>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              5.2 Kaizen Health's Positioning
            </h3>
            <p className="mb-4">
              Kaizen Health is uniquely positioned to address these gaps
              through:
            </p>
            <div className="mb-8 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Capability
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Value Delivered
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      Centralized Family Records
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      One secure place for entire family's health data across
                      generations
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      AI-Powered Pattern Recognition
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Kai identifies inherited disease patterns doctors miss
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      Predictive Risk Insights
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Personalized prevention plans based on family health
                      intelligence
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      Cross-Platform Accessibility
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      iOS and Android support for all family members
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      EHR Integration (In development)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Automated data collection reduces friction
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3 font-semibold">
                      Privacy-First Architecture
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      HIPAA-aligned, user-controlled data sharing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              5.3 Market Opportunity Supported by Research
            </h3>
            <div className="mb-8 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Metric
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Value
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Primary care patients meeting family history criteria
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>41.2%</strong>
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      BMC Health Services Research
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Americans with inadequate family health knowledge
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>63%</strong>
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      NIH All of Us Program
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Americans carrying unidentified pathogenic variants
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>~3 million</strong> (1.5% of population)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      CDC estimates
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Annual diabetes cost burden
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>$413 billion</strong>
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      ADA
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Annual Alzheimer's cost burden
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>$360+ billion</strong>
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Alzheimer's Association
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Colorectal cancer deaths preventable with screening
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>Up to 60%</strong>
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Multiple studies
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              5.4 The Inflection Point
            </h3>
            <p className="mb-4">
              Simultaneous maturation of three forces creates unprecedented
              opportunity:
            </p>
            <ol className="mb-6 list-decimal pl-6 space-y-2">
              <li>
                <strong>AI Pattern Recognition</strong> - LLMs and specialized
                medical AI now capable of consumer-facing applications
              </li>
              <li>
                <strong>FHIR Interoperability</strong> - Data accessibility
                increased from 11% to 66%; mandatory standards taking effect
                2025-2027 (
                <a
                  href="https://eajournals.org/ijeats/wp-content/uploads/sites/55/2025/04/Interoperability.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  EAJournals FHIR Study
                </a>
                )
              </li>
              <li>
                <strong>Consumer Data Rights</strong> - State laws empowering
                individuals to aggregate their health information (
                <a
                  href="https://law.stanford.edu/2025/02/26/digital-diagnosis-health-data-privacy-in-the-u-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Stanford Law School
                </a>
                )
              </li>
            </ol>
            <p className="mb-8">
              Combined with behavioral shifts toward proactive health management
              accelerated by COVID-19, the timing for family-centric health
              intelligence platforms is optimal.
            </p>

            <hr className="my-12 border-t border-stroke dark:border-strokedark" />

            {/* Section 6: Conclusion */}
            <HeadingWithAnchor id="conclusion" size="text-3xl">
              6. Conclusion
            </HeadingWithAnchor>
            <p className="mb-6">
              Family health history represents the most cost-effective tool in
              preventive medicine—yet two decades after the Surgeon General's
              Family History Initiative, the awareness-to-action gap remains
              largely unchanged.
            </p>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              The Research is Unambiguous:
            </h3>
            <div className="mb-8 overflow-x-auto rounded-lg border border-stroke dark:border-strokedark">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-blacksection">
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Condition
                    </th>
                    <th className="border border-stroke dark:border-strokedark px-4 py-3 text-left font-semibold">
                      Prevention Potential
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Type 2 Diabetes
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>58% prevention</strong> through lifestyle
                      intervention in high-risk individuals
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Colorectal Cancer
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>60% death prevention</strong> through appropriate
                      screening
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Breast Cancer (BRCA carriers)
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>90% risk reduction</strong> through prophylactic
                      measures
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Hemochromatosis
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>100% prevention</strong> of complications through
                      early phlebotomy
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      Cardiovascular Disease
                    </td>
                    <td className="border border-stroke dark:border-strokedark px-4 py-3">
                      <strong>60% mortality decline</strong> since 1950 through
                      intervention
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              The Technology Barriers Have Dissolved:
            </h3>
            <ul className="mb-6 list-disc pl-6 space-y-2">
              <li>FHIR interoperability: 11% → 66% data accessibility</li>
              <li>
                AI capabilities: Predicting 1,200+ diseases up to decades in
                advance
              </li>
              <li>
                Consumer rights: State laws enabling personal health data
                aggregation
              </li>
            </ul>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              The Market Gap is Clear:
            </h3>
            <p className="mb-6">
              The current competitive landscape—fragmented across siloed
              personal health records, enterprise-focused aggregation platforms,
              limited family trackers, and isolated genetic testing—leaves the
              family-centric, AI-driven, predictive health space substantially
              unaddressed.
            </p>

            <h3 className="mt-10 mb-5 text-2xl font-semibold text-black dark:text-white">
              The Opportunity:
            </h3>
            <p className="mb-4">
              For investors and medical advisors, the opportunity is defined by:
            </p>
            <ol className="mb-6 list-decimal pl-6 space-y-2">
              <li>
                <strong>Demonstrated clinical value</strong> of family health
                monitoring supported by decades of peer-reviewed research
              </li>
              <li>
                <strong>Technology maturation</strong> enabling previously
                impossible predictive capabilities
              </li>
              <li>
                <strong>Massive economic inefficiency</strong> of reactive
                rather than preventive care
              </li>
            </ol>
            <p className="mb-8">
              The platform that successfully integrates family-wide health
              intelligence with AI-driven prediction will capture not merely a
              product market, but a fundamental transformation in how American
              families approach their health.
            </p>

            <hr className="my-12 border-t border-stroke dark:border-strokedark" />

            {/* References */}
            <HeadingWithAnchor id="references" size="text-3xl">
              References
            </HeadingWithAnchor>
            <ol className="mb-8 list-decimal pl-6 space-y-3 text-sm">
              <li>
                CDC. (2005). Awareness of Family Health History as a Risk Factor
                for Disease. <em>Preventing Chronic Disease</em>.{" "}
                <a
                  href="https://www.cdc.gov/pcd/issues/2005/apr/04_0131.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://www.cdc.gov/pcd/issues/2005/apr/04_0131.htm
                </a>
              </li>
              <li>
                Yoon, P.W., et al. (2019). Awareness of family health history in
                a predominantly young adult population. <em>PLOS ONE</em>.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6814221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://pmc.ncbi.nlm.nih.gov/articles/PMC6814221/
                </a>
              </li>
              <li>
                Qureshi, N., et al. (2019). Family health history: underused for
                actionable risk assessment. <em>The Lancet</em>.{" "}
                <a
                  href="https://www.sciencedirect.com/science/article/abs/pii/S0140673619312759"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://www.sciencedirect.com/science/article/abs/pii/S0140673619312759
                </a>
              </li>
              <li>
                Doerr, M., et al. (2022). Implementation-effectiveness trial of
                systematic family health history based risk assessment.{" "}
                <em>BMC Health Services Research</em>.{" "}
                <a
                  href="https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-022-08879-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-022-08879-2
                </a>
              </li>
              <li>
                Leander, K., et al. (2022). Cardiovascular Family History
                Increases Risk of Disease Recurrence.{" "}
                <em>Journal of the American Heart Association</em>.{" "}
                <a
                  href="https://www.ahajournals.org/doi/10.1161/JAHA.121.022264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://www.ahajournals.org/doi/10.1161/JAHA.121.022264
                </a>
              </li>
              <li>
                American Cancer Society. (2024). ACS Breast Cancer Screening
                Guidelines.{" "}
                <a
                  href="https://www.cancer.org/cancer/types/breast-cancer/screening-tests-and-early-detection/american-cancer-society-recommendations-for-the-early-detection-of-breast-cancer.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://www.cancer.org/cancer/types/breast-cancer/screening-tests-and-early-detection/american-cancer-society-recommendations-for-the-early-detection-of-breast-cancer.html
                </a>
              </li>
              <li>
                USPSTF. (2021). Colorectal Cancer: Screening Recommendation.{" "}
                <a
                  href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening
                </a>
              </li>
              <li>
                USPSTF. (2024). Breast Cancer: Screening Recommendation.{" "}
                <a
                  href="https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/breast-cancer-screening
                </a>
              </li>
              <li>
                Nature. (2025). AI uses medical records to accurately predict
                onset of disease 20 years into the future.{" "}
                <a
                  href="https://www.nature.com/articles/d41586-025-02971-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://www.nature.com/articles/d41586-025-02971-3
                </a>
              </li>
              <li>
                National Cancer Institute. (2024). BRCA Gene Changes: Cancer
                Risk and Genetic Testing Fact Sheet.{" "}
                <a
                  href="https://www.cancer.gov/about-cancer/causes-prevention/genetics/brca-fact-sheet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://www.cancer.gov/about-cancer/causes-prevention/genetics/brca-fact-sheet
                </a>
              </li>
              <li>
                American Cancer Society. (2024). Colorectal Cancer Genetic
                Testing.{" "}
                <a
                  href="https://www.cancer.org/cancer/types/colon-rectal-cancer/causes-risks-prevention/genetic-tests-screening-prevention.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://www.cancer.org/cancer/types/colon-rectal-cancer/causes-risks-prevention/genetic-tests-screening-prevention.html
                </a>
              </li>
              <li>
                PMC. (2013). Genetics of Type 2 Diabetes.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3746083/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://pmc.ncbi.nlm.nih.gov/articles/PMC3746083/
                </a>
              </li>
              <li>
                PMC. (2012). The Genetics of Alzheimer Disease.{" "}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3475404/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://pmc.ncbi.nlm.nih.gov/articles/PMC3475404/
                </a>
              </li>
              <li>
                Alzheimer's Association. (2024). Is Alzheimer's
                Hereditary/Genetic?{" "}
                <a
                  href="https://www.alz.org/alzheimers-dementia/what-is-alzheimers/causes-and-risk-factors/genetics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://www.alz.org/alzheimers-dementia/what-is-alzheimers/causes-and-risk-factors/genetics
                </a>
              </li>
              <li>
                American Heart Association. (2024). Heart Disease Statistics.{" "}
                <a
                  href="https://newsroom.heart.org/news/more-than-half-of-u-s-adults-dont-know-heart-disease-is-leading-cause-of-death-despite-100-year-reign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://newsroom.heart.org/news/more-than-half-of-u-s-adults-dont-know-heart-disease-is-leading-cause-of-death-despite-100-year-reign
                </a>
              </li>
              <li>
                SingleCare. (2025). Diabetes Statistics.{" "}
                <a
                  href="https://www.singlecare.com/blog/news/diabetes-statistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://www.singlecare.com/blog/news/diabetes-statistics/
                </a>
              </li>
              <li>
                Dynamic Health IT. (2025). 2025 is on FHIR.{" "}
                <a
                  href="https://dynamichealthit.com/post/2025-is-on-fhir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://dynamichealthit.com/post/2025-is-on-fhir/
                </a>
              </li>
              <li>
                Stanford Law School. (2025). Digital Diagnosis: Health Data
                Privacy in the U.S.{" "}
                <a
                  href="https://law.stanford.edu/2025/02/26/digital-diagnosis-health-data-privacy-in-the-u-s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  https://law.stanford.edu/2025/02/26/digital-diagnosis-health-data-privacy-in-the-u-s/
                </a>
              </li>
            </ol>

            <SharePost
              url="https://kaizenhealth.io/blog/family-health-monitoring"
              text="Learn how family health monitoring can prevent hereditary diseases"
              hashtags={[
                "familyhealth",
                "preventivemedicine",
                "genetichealth",
                "healthtech",
              ]}
            />
          </div>
        </div>
      </section>
    </BlogPostWrapper>
  );
};

export default FamilyHealthMonitoringArticle;
