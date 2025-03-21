"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: ``,
                description: ``,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/*FREE PLAN*/}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Free
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Perfect if you want to try out the app
              </h4>
              <p>Free to use with features capped at daily limits.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    1gb of document storage
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Up to 5 AI analysed documents each month
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Exclusive AI driven insights (Max 10)
                  </li>
                </ul>
              </div>

              {/*<button*/}
              {/*  aria-label="Get the Plan button"*/}
              {/*  className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"*/}
              {/*>*/}
              {/*  <span className="duration-300 group-hover/btn:pr-2">*/}
              {/*    Get the Plan*/}
              {/*  </span>*/}
              {/*  <svg*/}
              {/*    width="14"*/}
              {/*    height="14"*/}
              {/*    viewBox="0 0 14 14"*/}
              {/*    xmlns="http://www.w3.org/2000/svg"*/}
              {/*  >*/}
              {/*    <path*/}
              {/*      d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"*/}
              {/*      fill="currentColor"*/}
              {/*    />*/}
              {/*  </svg>*/}
              {/*</button>*/}
            </div>
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Duo
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Perfect for a family of 2
              </h4>
              <p>
                Free to use. Add and manage a single family with up to 2
                members.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    5gb of document storage
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Unlimited AI supported document analysis and summary
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Exclusive AI driven insights
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    EHR Integration (Coming soon)
                  </li>
                </ul>
              </div>

              {/*<button*/}
              {/*  aria-label="Get the Plan button"*/}
              {/*  className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"*/}
              {/*>*/}
              {/*  <span className="duration-300 group-hover/btn:pr-2">*/}
              {/*    Get the Plan*/}
              {/*  </span>*/}
              {/*  <svg*/}
              {/*    width="14"*/}
              {/*    height="14"*/}
              {/*    viewBox="0 0 14 14"*/}
              {/*    xmlns="http://www.w3.org/2000/svg"*/}
              {/*  >*/}
              {/*    <path*/}
              {/*      d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"*/}
              {/*      fill="currentColor"*/}
              {/*    />*/}
              {/*  </svg>*/}
              {/*</button>*/}
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

              <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Family
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Perfect for large families
              </h4>
              <p>
                Everything in duo but for larger families with up to 6 members.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Up to 100gb of document storage
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Unlimited AI supported document analysis
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Exclusive AI driven insights for you and the entire family
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    EHR Integrations to automatically pull data from health
                    portals (Coming soon)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
