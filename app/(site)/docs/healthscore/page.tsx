import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Proprietary Health Score - Kaizen Health",
    description: "Proprietary Health Score, sources and citations for Kaizen Health",
    // other metadata
};

export default function HealthScore() {
    return (
        <>
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-3/4">
                            <div
                                className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                                <p className="text-body-color dark:text-body-color-dark text-base"><strong>Effective
                                    Date: March 1st 2024</strong></p>

                                <h2>Health Score Information</h2>
                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    Welcome to Kaizen Health's app! We are committed to providing you with valuable
                                    insights into your overall health and well-being. As part of our app's features,
                                    we offer a health score that aims to give you a general idea of how your
                                    current health metrics compare to average values within your age group and gender.
                                </p>

                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    Please note that the health score is calculated using a proprietary algorithm
                                    that takes into account various factors such as your age, gender, weight, height,
                                    daily step count, and resting heart rate. These metrics are compared to average
                                    values derived from reliable health and nutrition surveys, as well as scientific
                                    research on health-related topics.
                                </p>
                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    It is important to understand that the health score is intended to be a general
                                    indicator of your health status and should not be considered a definitive medical
                                    assessment. A score closer to 100 suggests that your health metrics are relatively
                                    close to the ideal values for your age group and gender, while a lower score
                                    indicates potential areas for improvement [<a href="#1">1</a>].
                                </p>
                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    However, please keep in mind that the health score is based on a limited set of
                                    parameters and does not take into account your complete medical history, lifestyle
                                    factors, or other unique circumstances that may impact your health. It is not a
                                    substitute for professional medical advice, diagnosis, or treatment.
                                </p>
                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    Always consult with a qualified healthcare provider before making any
                                    decisions or taking any actions regarding your health, particularly if you
                                    have concerns about your health score or any other aspect of your well-being.
                                    Your healthcare provider can provide personalized guidance based on your
                                    specific
                                    needs and medical history.
                                </p>
                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    By using the Kaizen Health app and its features, including the health score, you
                                    acknowledge that the information provided is for informational purposes only and
                                    does not constitute medical advice. Kaizen Health does not guarantee the accuracy,
                                    completeness, or reliability of the health score or any other information provided
                                    within the app.
                                </p>
                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    Thank you for choosing Kaizen Health as a partner in your health journey. We
                                    encourage you to use the health score as a starting point for conversations with
                                    your healthcare provider and to make informed decisions about your health and
                                    well-being.
                                </p>

                                <h2>Sources</h2>
                                <ul>
                                    <li className={"list-decimal"} id="1">
                                        National Health and Nutrition Examination Survey (NHANES) 2017-2018, U.S.
                                        Department of Health and Human Services: <br/>
                                        - [<a className="hover:text-primaryho text-primary" target={"_blank"}
                                              href={"https://www.cdc.gov/nchs/nhanes/index.htm"}>NHANES
                                        Website</a>]<br/>
                                        - [<a className="hover:text-primaryho text-primary" target={"_blank"}
                                              href={"https://wwwn.cdc.gov/nchs/nhanes/continuousnhanes/default.aspx?BeginYear=2017"}>NHANES
                                        2017-2018 Data</a>]
                                    </li>
                                    <li  className={"list-decimal"} id="2">
                                        "Resting Heart Rate and Health," Harvard Health Publishing, Harvard Medical
                                        School, 2021:
                                        - [<a className={"hover:text-primaryho text-primary"}
                                              href={"https://www.health.harvard.edu/blog/resting-heart-rate-can-reflect-current-future-health-201606179806"}
                                              target={"_blank"}>Article Link</a>]
                                    </li>
                                    <li  className={"list-decimal"} id="3">
                                        "Step counting: a review of measurement considerations and health-related
                                        applications," European Journal of Sport Science, 2021: <br/>
                                        - [<a className="hover:text-primaryho text-primary" target={"_blank"}
                                              href="https://www.tandfonline.com/doi/abs/10.1080/17461391.2020.1855073">Abstract
                                        Link</a>] <br/>
                                        - [<a className="hover:text-primaryho text-primary"
                                              href={"https://www.tandfonline.com/doi/full/10.1080/17461391.2020.1855073"}>
                                        Full-Text Link (may require subscription or institutional access)
                                    </a>]
                                    </li>

                                    <p>
                                        Please note that these links were accurate at the time of retrieval and
                                        sourcing, but the availability and content of the sources may change over time.
                                        If you encounter any issues accessing the links or require further information,
                                        please reach out to us as info@kaizenhealth.io.
                                    </p>
                                </ul>

                                <h2>Contact Us</h2>
                                <p className="text-body-color dark:text-body-color-dark text-base">If you have
                                    questions
                                    or comments about this, please
                                    contact us at <a className={"hover:text-primaryho text-primary"} href="mailto:info@kaizenhealth.io">this email address</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
