"use client";

import reactSvg from "../../assets/react.svg";
import About from "../About";
import Home from "../Home";
import Contact from "../Contact";
import { Tabs } from "../ui/tabs";
import Services from "../Services";
import Book from "../Book";
import { BasicTabs } from "../ui/basicTabs";

export function TabsConfig({ cards }) {
  const tabs = [
    {
      title: "Home",
      value: "home",
      content: cards ? (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Home />
        </div>
      ) : (
        <Home />
      ),
    },
    {
      title: "About",
      value: "about",
      content: cards ? (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <About />
        </div>
      ) : (
        <About />
      ),
    },
    {
      title: "Book",
      value: "book",
      content: cards ? (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Book />
        </div>
      ) : (
        <Book />
      ),
    },
    {
      title: "Services",
      value: "services",
      content: cards ? (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Services />
        </div>
      ) : (
        <Services />
      ),
    },
    {
      title: "Contact",
      value: "contact",
      content: cards ? (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <Contact />
        </div>
      ) : (
        <Contact />
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full items-start justify-start">
      <BasicTabs tabs={tabs} className="mt-20" />
    </div>
  );
}
