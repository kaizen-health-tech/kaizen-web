import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  primaryKeyword: "Yogurt and Colorectal Cancer Risk",
  description:
    "Explore emerging evidence on yogurt intake, gut microbiome factors, and potential colorectal cancer risk reduction, including practical dietary takeaways.",
  path: "/blog/cancer/colorectal-cancer-risk",
  type: "article",
  image: "/images/blog/yogurt.jpeg",
});

const ColorectalCancerRisk = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="lg:w-full">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src="/images/blog/yogurt.jpeg"
                      alt="Vitamin D and Magnesium in Diabetes Management"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>
                <h1 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Could Your Yogurt Habit Be Shielding You From Colon Cancer?
                  New Study Says Yes!
                </h1>

                <p>
                  Emerging research suggests yogurt might play a surprising role
                  in protecting against **colon cancer**. A groundbreaking study
                  published in <em>Gut Microbes</em> reveals that eating just
                  **two servings of yogurt per week** could lower the risk of
                  certain aggressive colon cancers by **20%**.
                </p>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  The Spoonful That Packs a Punch: Study Highlights
                </h2>

                <h3 className="pt-4">What Did Researchers Find?</h3>
                <p>
                  Scientists tracked over 130,000 people for 30+ years and
                  discovered that yogurt lovers (≥2 servings weekly) had a **20%
                  lower risk** of developing *Bifidobacterium*-positive proximal
                  colon cancer.
                </p>

                <h3 className="pt-4">Why Focus on *Bifidobacterium*?</h3>
                <p>
                  *Bifidobacterium* is a beneficial probiotic strain found in
                  yogurt. Tumors harboring this bacteria made up **31% of cases
                  studied**, and yogurt’s benefits were strongest against these
                  specific tumors.
                </p>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  The Science Behind the Spoonful
                </h2>

                <h3 className="pt-4">
                  Yogurt’s Secret Weapons: Probiotics and Your Gut
                </h3>
                <ul className="list-disc pl-5 pt-2">
                  <li>
                    **Strengthens gut lining**, preventing harmful bacteria from
                    causing inflammation.
                  </li>
                  <li>
                    **Produces butyrate**, a compound that helps repair DNA and
                    suppress cancer growth.
                  </li>
                  <li>
                    **Outcompetes bad bacteria**, reducing toxin production
                    linked to tumor growth.
                  </li>
                </ul>

                <h3 className="pt-4">Why Right-Sided Colon Cancer?</h3>
                <p>
                  The study found yogurt’s benefits were strongest for
                  right-sided (proximal) colon cancers, which are harder to
                  detect early and more lethal.
                </p>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  How Much Yogurt Should You Eat?
                </h2>
                <p>
                  **At least two 6-ounce servings per week** is recommended.
                  Avoid sugar-loaded varieties and opt for **plain Greek
                  yogurt**.
                </p>

                <h3 className="pt-4">Lactose Intolerant?</h3>
                <p>
                  Fermented yogurts like Greek or skyr are lower in lactose, and
                  plant-based yogurts with live cultures can be a good
                  alternative.
                </p>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Public Health Implications
                </h2>
                <ul className="list-disc pl-5">
                  <li>
                    Colon cancer rates are rising among adults under 50—up **45%
                    since 1995**.
                  </li>
                  <li>
                    Yogurt offers an **accessible, affordable prevention tool**.
                  </li>
                  <li>
                    Advocating for yogurt subsidies in food deserts could bridge
                    health gaps.
                  </li>
                </ul>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Conclusion
                </h2>
                <p>
                  Yogurt isn’t a cure, but this study highlights its potential
                  as part of a **gut-friendly cancer prevention strategy**.
                  Combining it with regular screenings, exercise, and a balanced
                  diet is key.
                </p>

                <SharePost
                  url="https://kaizenhealth.io/blog/yogurt-colon-cancer"
                  text="Checkout this blog post on Kaizen Health!"
                  hashtags={["health", "wellness", "nutrition"]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ColorectalCancerRisk;
