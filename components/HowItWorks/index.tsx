"use client";
import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 px-8 py-16 md:px-16 lg:px-32">
      <div className="mx-auto max-w-4xl text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-black md:text-4xl">
          How it works
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Follow these simple steps to take control of your health journey.
        </p>
      </div>

      {/* Steps List */}
      <div className="mx-auto max-w-4xl text-center">
        <ol className="mt-12 space-y-8 md:space-y-10">
          {/* Step 1 */}
          <li className="flex items-start space-x-4">
            <div className="flex h-10 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white max-sm:h-8 max-sm:w-20">
              1
            </div>
            <p className="text-lg text-gray-800">
              Create an account and add your loved ones’ health details. Sync
              with Apple Health, Google Fit, or other devices for seamless
              tracking.
            </p>
          </li>

          {/* Step 2 */}
          <li className="flex items-start space-x-4">
            <div className="flex h-10 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white max-sm:h-8 max-sm:w-20">
              2
            </div>
            <p className="text-lg text-gray-800">
              Monitor vitals, fitness data, and health trends through a
              personalized Health Score that gives a quick snapshot of overall
              well-being.
            </p>
          </li>

          {/* Step 3 */}
          <li className="flex items-start space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white max-sm:h-8 max-sm:w-20">
              3
            </div>
            <p className="text-lg text-gray-800">
              Upload, store, and access medical records, prescriptions, and test
              results in a secure, centralized location.
            </p>
          </li>

          {/* Step 4 */}
          <li className="flex items-start space-x-4">
            <div className="flex h-10 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white max-sm:h-8 max-sm:w-20">
              4
            </div>
            <p className="text-lg text-gray-800">
              Use AI to answer health-related questions, summarize medical
              documents, and get insights in the language of your choice.
            </p>
          </li>

          {/* Step 5 */}
          <li className="flex items-start space-x-4">
            <div className="flex h-10 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white max-sm:h-8 max-sm:w-20">
              5
            </div>
            <p className="text-lg text-gray-800">
              Receive real-time updates, reminders, and notifications about your
              family’s health, giving you peace of mind no matter the distance.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
