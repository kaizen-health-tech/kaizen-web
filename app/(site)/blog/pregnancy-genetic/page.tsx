import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";
import { ArticleSchema, BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Genetic Conditions During Pregnancy",
  description:
    "Learn common genetic conditions in pregnancy, screening considerations, and how AI-supported analysis can help families prepare for informed prenatal decisions.",
  path: "/blog/pregnancy-genetic",
  type: "article",
  image: "/images/blog/pregnancy-genetic.jpeg",
});

const PregnancyGenetic = async () => {
  return (
    <>
      <ArticleSchema
        title="Genetic Conditions During Pregnancy"
        description="Learn common genetic conditions in pregnancy, screening considerations, and how AI-supported analysis can help families prepare for informed prenatal decisions."
        image="/images/blog/pregnancy-genetic.jpeg"
        datePublished="2025-01-06"
        url="/blog/pregnancy-genetic"
        section="Health"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Genetic Conditions During Pregnancy", url: "/blog/pregnancy-genetic" },
        ]}
      />
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="lg:w-full">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/blog/pregnancy-genetic.jpeg"}
                      alt="Genetic conditions during pregnancy"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  What Conditions During Pregnancy Are Genetic?
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Kaizen Health
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: Jan 9, 2025
                    </span>
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>{" "}
                    health
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    Pregnancy is a transformative journey that often comes with
                    many questions about the baby’s health and development. One
                    of the most common concerns for expectant parents is the
                    risk of passing along genetic conditions. According to the
                    Centers for Disease Control and Prevention (CDC), genetic
                    disorders are caused by changes or mutations in the DNA{" "}
                    <span className="font-italic text-sm">
                      [1] CDC - “What are Genetic Disorders?”
                    </span>
                    . Understanding what these conditions are and how they might
                    be inherited can help you make informed decisions and
                    prepare for a healthier pregnancy.
                  </p>

                  <h3 className="pt-8">
                    Common Genetic Conditions During Pregnancy
                  </h3>
                  <p>
                    While there are numerous genetic conditions, some are more
                    commonly discussed during pregnancy due to their prevalence
                    or impact on fetal development:
                  </p>
                  <ul className="list-disc pl-5 pt-2">
                    <li>
                      <strong>Down Syndrome (Trisomy 21):</strong> Occurs when
                      there is an extra copy of chromosome 21, leading to
                      developmental and intellectual disabilities{" "}
                      <span className="font-italic text-sm">
                        [2] Mayo Clinic - "Down Syndrome"
                      </span>
                      .
                    </li>
                    <li>
                      <strong>Cystic Fibrosis:</strong> A recessive genetic
                      disorder affecting the lungs and digestive system. Both
                      parents must carry the gene for the child to be at risk.
                    </li>
                    <li>
                      <strong>Sickle Cell Disease:</strong> An inherited blood
                      disorder more prevalent in certain ethnic groups. It
                      causes red blood cells to become misshapen, resulting in
                      various complications.
                    </li>
                    <li>
                      <strong>Tay-Sachs Disease:</strong> A rare disorder
                      primarily affecting the central nervous system. It's most
                      common in certain ethnic groups, such as people of Eastern
                      European Jewish heritage.
                    </li>
                    <li>
                      <strong>Hemophilia:</strong> A recessive disorder
                      affecting the blood’s ability to clot, commonly passed on
                      through the X chromosome.
                    </li>
                  </ul>

                  <h3 className="pt-8">
                    How AI Can Help in Identifying Potential Genetic Risks
                  </h3>
                  <p>
                    Modern healthcare is increasingly leveraging Artificial
                    Intelligence (AI) to detect genetic markers and predict
                    potential complications early in pregnancy:
                  </p>
                  <ul className="list-disc pl-5 pt-2">
                    <li>
                      <strong>Risk Analysis Models:</strong> AI algorithms can
                      sift through massive amounts of genetic data to pinpoint
                      risk factors more accurately than traditional methods.
                    </li>
                    <li>
                      <strong>Gene Editing Insights:</strong> While still in
                      early stages, AI can offer data-driven insights into
                      cutting-edge research areas like CRISPR, potentially
                      preventing certain heritable conditions.
                    </li>
                    <li>
                      <strong>Personalized Recommendations:</strong> Kaizen
                      Health’s own Kai - AI Chat can simplify medical terms and
                      offer you personalized information. This feature breaks
                      down genetic jargon into accessible language, empowering
                      you to have more informed discussions with healthcare
                      providers.
                    </li>
                  </ul>

                  <p>
                    By utilizing AI tools, parents can gain a more refined
                    understanding of potential issues, thereby collaborating
                    more effectively with genetic counselors and healthcare
                    professionals.
                  </p>

                  <h3 className="pt-8">
                    At-Home Genetic Tests Prior to Pregnancy
                  </h3>
                  <p>
                    Genetic testing isn’t limited to when you’re already
                    pregnant. Prospective parents who want to screen for known
                    hereditary issues can opt for at-home test kits, often
                    referred to as “carrier tests.” These usually involve
                    providing a saliva or cheek swab sample and sending it to a
                    lab for analysis. Some popular tests on the market screen
                    for conditions like cystic fibrosis, spinal muscular
                    atrophy, and Fragile X syndrome{" "}
                    <span className="font-italic text-sm">
                      [3] American College of Medical Genetics - "Carrier
                      Screening"
                    </span>
                    .
                  </p>

                  <p>
                    <strong>Important Note:</strong> While at-home tests offer
                    convenience, they should not replace professional medical
                    advice. Always consult with a genetic counselor or OB/GYN
                    for confirmation and additional guidance.
                  </p>

                  <h3 className="pt-8">
                    How Kaizen Health Assists in Tracking and Sharing Your
                    Journey
                  </h3>
                  <p>
                    Kaizen Health offers features that help you manage the
                    influx of genetic information and prepare for discussions
                    with healthcare providers:
                  </p>
                  <ul className="list-disc pl-5 pt-2">
                    <li>
                      <strong>Document Storage:</strong> Securely upload genetic
                      test results, ultrasound images, and other important
                      documentation. Share them easily with family members or
                      medical professionals through Kaizen’s Family Groups
                      feature.
                    </li>
                    <li>
                      <strong>Health Score:</strong> Our proprietary scoring
                      algorithm can provide an overview of your well-being,
                      taking into account variables like heart rate and weight,
                      which can be crucial during pregnancy.
                    </li>
                    <li>
                      <strong>Timeline View:</strong> Keep track of your
                      pregnancy milestones, doctor visits, and test results in a
                      chronological manner. This visualization aids you and your
                      healthcare provider in spotting any trends or
                      complications early.
                    </li>
                  </ul>

                  <h3 className="pt-8">Final Thoughts</h3>
                  <p>
                    Genetic conditions can be a source of anxiety for expectant
                    parents, but modern medicine, AI tools, and reliable
                    documentation can significantly demystify the process.
                    At-home carrier tests offer an accessible starting point to
                    learn about potential risks even before pregnancy begins. As
                    always, partner with healthcare professionals and consider
                    using platforms like Kaizen Health to streamline and
                    securely share your journey.
                  </p>

                  <p className="pt-4">
                    By proactively understanding and managing your genetic
                    risks, you empower yourself and your growing family to
                    navigate pregnancy with greater peace of mind.
                  </p>

                  {/* Updated references section */}
                  <p className="mt-8 text-sm italic">
                    <strong>References:</strong>
                    <br />
                    [1]{" "}
                    <a
                      href="https://www.cdc.gov/genomics-and-health/about/genetic-disorders.html?utm_source=kaizenhealth.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={"text-primaryho underline"}
                    >
                      CDC - “What Are Genetic Disorders?”
                    </a>{" "}
                    . Accessed February 2025.
                    <br />
                    [2]{" "}
                    <a
                      href="https://www.mayoclinic.org/diseases-conditions/down-syndrome/symptoms-causes/syc-20355977?utm_source=kaizenhealth.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={"text-primaryho underline"}
                    >
                      Mayo Clinic - “Down Syndrome”
                    </a>{" "}
                    . Accessed February 2025.
                    <br />
                    [3]{" "}
                    <a
                      href="https://www.acmg.net/PDFLibrary/Prenatal-Preconeption-Expanded-Carrier-Screening.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={"text-primaryho underline"}
                    >
                      American College of Medical Genetics - “Carrier Screening”
                    </a>{" "}
                    . Accessed February 2025.
                  </p>
                </div>

                <SharePost
                  url="https://kaizenhealth.io/blog/pregnancy-genetic"
                  text="Checkout this blog post on Kaizen Health!"
                  hashtags={["health", "wellness", "AI"]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PregnancyGenetic;
