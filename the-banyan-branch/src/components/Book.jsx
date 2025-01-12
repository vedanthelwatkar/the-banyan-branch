import { Calendar } from "lucide-react";
import React from "react";

const Book = ({ sectionRefs }) => {
  return (
    <section ref={sectionRefs?.book} className="py-16 bg-tertiary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-8">
          Book an Appointment
        </h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-primary mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-primary rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-primary rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-primary mb-1"
              >
                Your Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full p-2 border border-primary rounded-md"
                required
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-primary mb-1"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full p-2 border border-primary rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white hover:bg-secondary py-2 px-4 rounded-md transition-colors flex items-center justify-center"
            >
              Book Now
              <Calendar className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Book;
