"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <section id="features">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title End --> */}

        <div className="mt-12 lg:mt-16 xl:mt-20 flex flex-col gap-20">
          {/* <!-- Features item Start --> */}

          {featuresData.map((feature, key) => (
            <SingleFeature feature={feature} key={key} />
          ))}
          {/* <!-- Features item End --> */}
        </div>
      </div>
    </section>
  );
};

export default Feature;
