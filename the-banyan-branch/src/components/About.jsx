import React from "react";
import nature from "../assets/image.png";
import { useSelector } from "react-redux";
import { configurationSelector } from "../redux/selector/selector";

const About = ({ sectionRefs }) => {
  const { configurationData } = useSelector(configurationSelector);

  if (!configurationData.about)
    return (
      <section className="py-32 bg-tertiary animate-pulse">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-8">
            <div className="h-6 bg-tertiary rounded w-1/2 mx-auto"></div>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="h-64 w-64 rounded-full bg-tertiary md:h-96 md:w-96"></div>
            </div>
            <div className="flex-1 space-y-4">
              <div className="h-4 bg-tertiary rounded w-full"></div>
              <div className="h-4 bg-tertiary rounded w-full"></div>
              <div className="h-4 bg-tertiary rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section ref={sectionRefs?.about} className="py-16 bg-tertiary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-8">
          {configurationData?.about && configurationData?.about[0]?.title}
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <img
              src={nature}
              alt="Priya's portrait"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="flex-1 space-y-4">
            <p className="text-lg text-secondary">
              {configurationData?.about &&
                configurationData?.about[0]?.description}
            </p>
            <p className="text-lg text-secondary">
              {configurationData?.about &&
                configurationData?.about[1]?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
