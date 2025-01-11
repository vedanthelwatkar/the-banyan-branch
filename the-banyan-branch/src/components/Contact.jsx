import React from "react";
import { useSelector } from "react-redux";
import {
  configurationSelector,
  contactsSelector,
} from "../redux/selector/selector";

const Contact = ({ sectionRefs }) => {
  const { contactsData } = useSelector(contactsSelector);
  const { configurationData } = useSelector(configurationSelector);
  console.log("configurationData: ", configurationData);

  return (
    <section ref={sectionRefs.contact} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl  font-semibold text-center text-primary mb-8">
          {configurationData?.contact && configurationData?.contact[0]?.title}
        </h2>
        <div className="max-w-md mx-auto">
          <p className="text-center text-secondary mb-4">
            {configurationData?.contact &&
              configurationData?.contact[0]?.description}
          </p>
          <div className="my-2 text-center">
            <p className="text-primary">{contactsData.name}</p>
            <p className="text-primary">Email: {contactsData.email}</p>
            <p className="text-primary">Phone: {contactsData.phone}</p>
            <p className="text-primary">{contactsData.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
