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
                                    At Kaizen Health, we understand that you may be curious about how your health score is determined within our app. While the exact algorithm is proprietary, we want to provide you with a general overview of the process.
                                </p>

                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    Your health score is calculated based on a combination of key health metrics, including your age, gender, weight, height, daily step count, and resting heart rate. These metrics are compared to average values derived from reputable health and nutrition surveys, such as the National Health and Nutrition Examination Survey (NHANES) conducted by the U.S. Department of Health and Human Services [<a className="hover:text-primaryho text-primary" href="#1">1</a>]
                                </p>
                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    For example, let's say you are a 35-year-old female with a weight of 68 kg, a height of 165 cm, a daily step count of 7,500, and a resting heart rate of 72 beats per minute (BPM). Our algorithm compares these values to the average metrics for your age group and gender.
                                </p>
                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    According to NHANES data, the average weight for females aged 30-39 is 73.4 kg, and the average height is 161.3 cm [<a className="hover:text-primaryho text-primary" href="#1">1</a>]. Your weight and height are relatively close to these averages. For resting heart rate, a study published in the Harvard Health Publishing suggests that the average resting heart rate for adult women is around 76 BPM [<a className="hover:text-primaryho text-primary" href="#2">2</a>], which is also close to your value.
                                </p>
                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    Regarding daily step count, a review published in the European Journal of Sport Science indicates that the average daily step count for adults is approximately 6,500 to 7,000 steps [<a className="hover:text-primaryho text-primary" href="#3">3</a>]. Your daily step count of 7,500 is slightly above this average.
                                </p>
                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    Our algorithm then assigns scores to each metric based on how close they are to the ideal values for your age group and gender. These individual scores are combined to calculate your overall health score, which ranges from 0 to 100. A score closer to 100 suggests that your health metrics are relatively close to the ideal values, while a lower score indicates potential areas for improvement.
                                </p>
                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    It's important to note that this health score is intended to be a general indicator of your health status and should not be considered a definitive medical assessment. It is based on a limited set of parameters and does not take into account your complete medical history or other unique circumstances that may impact your health.
                                </p>
                                <p className="text-body-color dark:text-body-color-dark text-base">
                                    We encourage you to use your health score as a starting point for conversations with your healthcare provider, who can offer personalized guidance based on your specific needs and medical history.
                                    Always consult with a qualified healthcare provider before making any
                                    decisions or taking any actions regarding your health, particularly if you
                                    have concerns about your health score or any other aspect of your well-being.
                                    Your healthcare provider can provide personalized guidance based on your
                                    specific needs and medical history.
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
