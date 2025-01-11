import { useState, useEffect, useRef } from "react";
import { ArrowRight, Leaf, Heart, Sun, Calendar } from "lucide-react";
import nature from "./assets/image.png";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    book: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const { offsetTop, offsetHeight } = element;

          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs[sectionId].current;
    if (element) {
      const offset = 80; // Adjust this value as needed
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center py-4 px-2" style={{}}>
            {["Home", "About", "Services", "Book", "Contact"].map((item) => (
              <li key={item}>
                <button
                  className={`text-primary rounded-md transition-colors ${
                    activeSection === item.toLowerCase().split(" ")[0]
                      ? "bg-tertiary font-semibold"
                      : "hover:bg-tertiary/50"
                  }`}
                  style={{
                    padding: isMobile
                      ? "4px 12px 4px 12px"
                      : "8px 16px 8px 16px",
                  }}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().split(" ")[0])
                  }
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section ref={sectionRefs.home} className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex-1 space-y-6">
              <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                Transforming Lives <br />
                With Care
              </h1>
              <p className="text-lg md:text-xl text-secondary">
                Embrace nature's healing power and discover a path to wellness
                that nurtures your body, mind, and soul.
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
                className="object-cover w-full md:w-[500px] h-[300px] md:h-[500px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRefs.about} className="py-16 bg-tertiary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-8">
            About Priya
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
                Priya is a dedicated wellness practitioner with over 10 years of
                experience in holistic healing. Her approach combines
                traditional wisdom with modern techniques to provide
                personalized care for each individual.
              </p>
              <p className="text-lg text-secondary">
                With a background in naturopathy and mindfulness practices,
                Priya is committed to helping her clients achieve balance and
                vitality in their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRefs.services} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Natural Healing",
                description:
                  "Harness the power of nature for holistic wellness",
              },
              {
                icon: Heart,
                title: "Compassionate Care",
                description: "Personalized attention to your unique needs",
              },
              {
                icon: Sun,
                title: "Renewed Energy",
                description: "Revitalize your spirit and embrace life fully",
              },
            ].map((item, index) => (
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

      <section ref={sectionRefs.book} className="py-16 bg-tertiary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-8">
            Book an Appointment
          </h2>
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-green-800 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-green-800 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-green-800 mb-1"
                >
                  Your Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-green-800 mb-1"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full p-2 border border-green-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white hover:bg-green-700 py-2 px-4 rounded-md transition-colors flex items-center justify-center"
              >
                Book Now
                <Calendar className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section ref={sectionRefs.contact} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-primary mb-8">
            Contact Us
          </h2>
          <div className="max-w-md mx-auto">
            <p className="text-center text-secondary mb-4">
              Get in touch with us for any inquiries or to schedule a
              consultation.
            </p>
            <div className="space-y-2 text-center">
              <p className="text-primary">Email: contact@priyawellness.com</p>
              <p className="text-primary">Phone: (123) 456-7890</p>
              <p className="text-primary">
                Address: 123 Wellness Street, Harmony City
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
