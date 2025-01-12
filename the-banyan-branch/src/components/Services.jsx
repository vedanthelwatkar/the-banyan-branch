import { Heart, Leaf, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { configurationSelector } from "../redux/selector/selector";

const Services = ({ sectionRefs }) => {
  const { configurationData } = useSelector(configurationSelector);
  const [services, setServices] = useState([]);

  const icons = [Leaf, Heart, Sun];

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
      <section className="animate-pulse py-16 bg-white">
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
    <section ref={sectionRefs?.services} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-tertiary rounded-lg shadow-md"
            >
              <item.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
