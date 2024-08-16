import 'core-js/proposals/promise-with-resolvers';

import { Metadata } from "next";
import InvestorSidebarLink from "@/components/Docs/InvestorSidebarLink";
import PdfViewer from "@/components/PdfViewer";


export const metadata: Metadata = {
    title: "Return on Investment Example - Kaizen Health",
    description: "This is ROI page for Kaizen Health",
    // other metadata
};

export default function RoiPage() {
    return (
        <>
            <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-1/4">
                            <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                                <ul className="space-y-2">
                                    <InvestorSidebarLink />
                                </ul>
                            </div>
                        </div>

                        <div className="w-full px-4 lg:w-3/4">
                            <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                                <PdfViewer url="/document/roi.pdf" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
