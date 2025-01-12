import React from "react";
import { ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";
import nature from "../assets/logo.png";
import { configurationSelector } from "../redux/selector/selector";
import SplitText from "./global/SplitText";
const Landing = ({ sectionRefs, scrollToSection }) => {
  const { configurationData } = useSelector(configurationSelector);

  if (!configurationData.home)
    return (
      <section className="pt-24 pb-16 animate-pulse">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6">
              <div className="h-16 bg-tertiary rounded w-3/4"></div>
              <div className="h-10 bg-tertiary rounded w-full"></div>
              <div className="h-12 bg-tertiary rounded w-1/4"></div>
            </div>
            <div className="flex-1">
              <div className="h-[300px]  md:h-[500px] bg-tertiary rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section ref={sectionRefs?.home} className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              <SplitText
                text={
                  configurationData?.home && configurationData?.home[0]?.title
                }
              />
            </h1>
            <p className="text-lg md:text-xl text-secondary">
              <SplitText
                delay={2}
                text={
                  configurationData?.home &&
                  configurationData?.home[0]?.description
                }
              />
            </p>
            <button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 p-3 flex rounded"
              onClick={() => scrollToSection("book")}
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="flex-1">
            <img
              src={nature}
              alt="Beautiful nature scene"
              width={600}
              height={600}
              className="object-cover w-full md:w-[500px] h-[300px] md:h-[500px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
