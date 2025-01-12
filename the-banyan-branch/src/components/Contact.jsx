import React from "react";
import { useSelector } from "react-redux";
import {
  configurationSelector,
  contactsSelector,
} from "../redux/selector/selector";
import SplitText from "./global/SplitText";
import BlurText from "./global/BlurText";

const Contact = ({ sectionRefs }) => {
  const { contactsData } = useSelector(contactsSelector);
  const { configurationData } = useSelector(configurationSelector);

  if (!configurationData.contact)
    return (
      <section className="py-16 bg-white animate-pulse">
        <div className="container mx-auto px-4">
          <div className="h-12 bg-tertiary rounded w-1/2 mx-auto mb-8"></div>
          <div className="max-w-md mx-auto">
            <div className="h-6 bg-tertiary rounded w-3/4 mx-auto mb-4"></div>
            <div className="my-2 text-center">
              <div className="h-4 bg-tertiary rounded w-3/4 mx-auto mb-2"></div>
              <div className="h-4 bg-tertiary rounded w-3/4 mx-auto mb-2"></div>
              <div className="h-4 bg-tertiary rounded w-3/4 mx-auto mb-2"></div>
              <div className="h-4 bg-tertiary rounded w-3/4 mx-auto mb-2"></div>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <section ref={sectionRefs?.contact} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl  font-semibold text-center text-primary mb-8">
          <SplitText
            text={
              configurationData?.contact && configurationData?.contact[0]?.title
            }
          />
        </h2>
        <div className="max-w-md mx-auto">
          <p className="text-center text-secondary mb-4">
            <SplitText
              text={
                configurationData?.contact &&
                configurationData?.contact[0]?.description
              }
            />
          </p>
          <div className="my-2 text-center">
            <p className="text-primary">
              <SplitText text={contactsData.name} />
            </p>
            <p className="text-primary">
              <SplitText text={`Email: ${contactsData.email}`} />
            </p>
            <p className="text-primary">
              <SplitText text={`Phone: ${contactsData.phone}`} />
            </p>
            <p className="text-primary">
              <SplitText text={contactsData.address} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
