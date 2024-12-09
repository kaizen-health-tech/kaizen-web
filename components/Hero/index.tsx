"use client";
import Image from "next/image";
import React, {useState} from "react";

const Hero = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
                        <div className="md:w-1/2">
                            <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                                Connecting Families, Simplifying Health.
                            </h1>
                            <p>
                                Kaizen Health empowers users for better health control and secure health data
                                management.
                                Tailored for individuals, families, and healthcare enthusiasts, it offers
                                a user-friendly platform compliant with HIPAA. Available on the app store now and
                                launching soon for
                                Android.
                            </p>

                            <div className="w-1/3 md:w-1/3 sm:block">
                                <div className="relative 2xl:-mr-7.5">
                                    <div className="relative aspect-[700/333] w-full">
                                        <a href="https://bit.ly/3Skmqgj" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src="/images/hero/app-store-light.svg"
                                                alt="App Store"
                                                className="dark:hidden"
                                                fill
                                            />

                                            <Image
                                                src="/images/about/app-store-dark.svg"
                                                alt="App Store"
                                                className="hidden dark:block"
                                                fill
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/*<a*/}
                            {/*    className="inline-flex items-center m-3 gap-2.5 bg-primary rounded-full px-6 py-3 font-medium text-white hover:bg-blackho dark:bg-btndark"*/}
                            {/*    href="/#support"*/}
                            {/*>*/}
                            {/*  Sign up now*/}
                            {/*  <svg*/}
                            {/*      className="fill-white"*/}
                            {/*      width="14"*/}
                            {/*      height="14"*/}
                            {/*      viewBox="0 0 14 14"*/}
                            {/*      fill="none"*/}
                            {/*      xmlns="http://www.w3.org/2000/svg"*/}
                            {/*  >*/}
                            {/*    <path*/}
                            {/*        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"*/}
                            {/*        fill=""*/}
                            {/*    />*/}
                            {/*  </svg>*/}
                            {/*</a>*/}
                        </div>

                        <div className="md:w-1/2 lg:block">
                            <div className="relative 2xl:-mr-7.5">
                                <div className="relative aspect-[700/444] w-full">
                                    <Image
                                        className="dark:hidden"
                                        src="/images/hero/hero.png"
                                        alt="Hero"
                                        fill
                                    />
                                    <Image
                                        className="hidden dark:block"
                                        src="/images/hero/hero.png"
                                        alt="Hero"
                                        fill
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
