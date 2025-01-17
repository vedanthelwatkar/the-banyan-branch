import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { configurationSelector } from "../redux/selector/selector";
import { HoverEffect } from "./ui/card-hover-effect";
import { Carousel } from "./ui/apple-cards-carousel";

import {
  BookHeart,
  Brain,
  Heart,
  Leaf,
  PersonStanding,
  Sun,
} from "lucide-react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Services = ({ sectionRefs }) => {
  const { configurationData } = useSelector(configurationSelector);
  const [services, setServices] = useState([]);

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  const icons = [Leaf, Heart, Sun, Brain, BookHeart, PersonStanding];

  useEffect(() => {
    const serviceData = configurationData?.services?.map((item, index) => ({
      icon: icons[index],
      title: item.title,
      description: item.description,
    }));
    setServices(serviceData);
  }, [configurationData]);

  if (!configurationData.services) {
    return (
      <section className="animate-pulse py-16 bg-gradient-to-b from-tertiary to-background">
        <div className="container mx-auto px-4">
          <div className="h-10 bg-primary rounded w-3/5 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-tertiary rounded-lg shadow-md"
                >
                  <div className="h-12 w-12 bg-primary rounded mb-4"></div>
                  <div className="h-6 bg-primary rounded w-40 mx-auto mb-2"></div>
                  <div className="h-10 bg-primary rounded w-56 mx-auto"></div>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRefs?.services}
      className="py-16 bg-gradient-to-b from-tertiary to-background"
    >
      <div className="container mx-auto px-4">
        <TextGenerateEffect
          words="Our Services"
          className="text-4xl md:text-4xl font-bold text-center text-primary mb-12"
          marginBottom={isMobile ? "24px" : "48x"}
        />
        <Carousel
          items={services?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-secondary rounded-lg shadow-md"
              style={{
                width: isMobile() ? "50vw" : "25vw",
                height: isMobile() ? "30vh" : "30vh",
                gap: isMobile() ? "4px" : "12px",
              }}
            >
              <item.icon className="h-12 w-12 text-textBase mb-4" />
              <h3 className="text-xl font-semibold text-textBase mb-2">
                {item.title}
              </h3>
              <p className="text-textSecondary overflow-auto">
                {item.description}
              </p>
            </div>
          ))}
        />
      </div>
    </section>
  );
};

export default Services;
