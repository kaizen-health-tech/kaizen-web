import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Kaizen Health",
  // other metadata
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
            {/*  <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">*/}
            {/*    <form*/}
            {/*      action="https://formbold.com/s/unique_form_id"*/}
            {/*      method="POST"*/}
            {/*    >*/}
            {/*      <div className="relative">*/}
            {/*        <input*/}
            {/*          type="text"*/}
            {/*          placeholder="Search Here..."*/}
            {/*          className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"*/}
            {/*        />*/}

            {/*        <button*/}
            {/*          className="absolute right-0 top-0 p-5"*/}
            {/*          aria-label="search-icon"*/}
            {/*        >*/}
            {/*          <svg*/}
            {/*            className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"*/}
            {/*            width="21"*/}
            {/*            height="21"*/}
            {/*            viewBox="0 0 21 21"*/}
            {/*            fill="none"*/}
            {/*            xmlns="http://www.w3.org/2000/svg"*/}
            {/*          >*/}
            {/*            <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />*/}
            {/*          </svg>*/}
            {/*        </button>*/}
            {/*      </div>*/}
            {/*    </form>*/}
            {/*  </div>*/}

            {/*  <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">*/}
            {/*    <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">*/}
            {/*      Categories*/}
            {/*    </h4>*/}

            {/*    <ul>*/}
            {/*      <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">*/}
            {/*        <a href="#">Blog</a>*/}
            {/*      </li>*/}
            {/*      <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">*/}
            {/*        <a href="#">Events</a>*/}
            {/*      </li>*/}
            {/*      <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">*/}
            {/*        <a href="#">Grids</a>*/}
            {/*      </li>*/}
            {/*      <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">*/}
            {/*        <a href="#">News</a>*/}
            {/*      </li>*/}
            {/*      <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">*/}
            {/*        <a href="#">Rounded</a>*/}
            {/*      </li>*/}
            {/*    </ul>*/}
            {/*  </div>*/}

              <RelatedPost />
            </div>

            <div className="lg:w-full">
              <div
                  className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                        src={"/images/blog/blog-01.png"}
                        alt="Kobe Steel plant that supplied"
                        fill
                        className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  The Power of Knowing: Why Family Health History Matters
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Kaizen
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: Apr 30, 2024
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>
                    health
                  </li>
                </ul>

                <div className="blog-details">
                  <p>
                    Understanding your family health history is more than just a precaution—it’s a proactive approach to
                    personalized health care.
                    Every family passes along genes to the next generation, not just eye color and hair texture, but
                    also a
                    predisposition for diseases and health conditions. By knowing what's come before you, you can arm
                    yourself with
                    knowledge and possibly prevent or mitigate health issues.
                  </p>

                  {/*<div className="flex flex-wrap gap-5">*/}
                  {/*  <Image*/}
                  {/*      src={"/images/blog/blog-01.png"}*/}
                  {/*      width={350}*/}
                  {/*      height={200}*/}
                  {/*      alt="image"*/}
                  {/*  />*/}
                  {/*  <Image*/}
                  {/*      src={"/images/blog/blog-02.png"}*/}
                  {/*      width={350}*/}
                  {/*      height={200}*/}
                  {/*      alt="image"*/}
                  {/*  />*/}
                  {/*</div>*/}

                  <h3 className="pt-8">
                    Prediction of Potential Health Risks
                  </h3>

                  <p>
                    Genetics play a huge role in health. Diseases like heart disease, diabetes, and cancer can run in
                    families, showing up generation after generation. If you’re aware that these conditions are common
                    in your family, you and your healthcare provider can create a screening and monitoring plan tailored
                    to your specific risks. Early detection can often lead to better outcomes and less invasive
                    treatments.
                  </p>

                  <h3 className="pt-8">
                    Tailored Preventative Measures
                  </h3>

                  <p>
                    With knowledge comes power—the power to act. If you know you have a high risk of heart disease based
                    on your family history, lifestyle changes like a healthier diet, regular exercise, and quitting
                    smoking can be lifesaving. Genetic knowledge helps tailor these preventative measures so they’re
                    more effective, rather than taking a one-size-fits-all approach.
                  </p>

                  <h3 className="pt-8">
                    Informing Family Members
                  </h3>

                  <p>
                    Your health history isn’t just about you. It’s about your siblings, your children, and even extended
                    family members. Sharing what you learn about your family health history can help others in your
                    family take precautionary steps. It’s a domino effect of health awareness that can benefit everyone
                    connected to you.
                  </p>

                  <h3 className="pt-8">
                    Guiding Family Planning
                  </h3>

                  <p>
                    For prospective parents, family health history can guide decisions about family planning. Genetic
                    counseling can help you understand the risks of transmitting certain conditions to your children.
                    This knowledge can be crucial in making informed decisions about pregnancy and childbearing.
                  </p>
                </div>

                <div className="blog-details">
                  <h2 className="pt-8">
                    How to Collect and Use Your Family Health History
                  </h2>
                  <p>
                    Now that you’re convinced about the importance of knowing your family health history, how do you actually gather this information? Here’s a quick guide:
</p>
                  <h4 className="pt-4">Gather Information </h4>
                    <p>Start conversations with your relatives at family gatherings, or make phone calls to ask about the health issues that have affected your family. Aim to get information about three generations if possible—your grandparents, your parents, and your siblings.</p>

                  <h4 className="pt-2">Record and Update the Information</h4>
                    <p>Keep a record of the health information you gather. Tools like family health history charts or online genetic tracking tools can help organize this information efficiently. Remember, this should be a living document—updated with new information as it comes in, including diagnoses and health changes.</p>

                  <h4 className="pt-4">Share With Your Healthcare Provider</h4>
                    <p>Make sure to share any significant findings with your healthcare provider. They can help interpret the information and suggest appropriate screenings and preventive measures.</p>

                  <h4 className="pt-4">Privacy and Sensitivity</h4>
                  <p>When collecting family health data, remember to be sensitive and respectful of privacy. Share your purposes and how the information will benefit family health overall.</p>

                  <h4 className="pt-4">Conclusion: Embrace Your Family's Health Legacy</h4>
                  <p>Knowing your family health history is a gateway to personalized healthcare. It empowers you to preemptively tackle potential health issues and to live a healthier life. It’s about taking what’s in your genes and making informed decisions to influence what’s in your control.</p>

                    <p>So, why not start today? Ask questions, gather information, and use it to guide your health journey. Your future self—and your family—will thank you for it.</p>
                </div>

                <SharePost/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
