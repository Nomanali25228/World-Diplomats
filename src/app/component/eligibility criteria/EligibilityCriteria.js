import React from "react";
import { FaUserAlt, FaUsers, FaLightbulb, FaLanguage } from "react-icons/fa";

const EligibilityCriteria = () => {
  const items = [
    {
      icon: <FaUserAlt size={30} />,
      title: "Who Should Register",
      text: "Individuals aged 8–35 years, regardless of nationality or background."
    },
    {
      icon: <FaUsers size={30} />,
      title: "Ideal Participant Profile",
      text: "As it is a learning experience, we invite everyone: youth leaders, students, entrepreneurs, professionals, activists, and community builders."
    },
    {
      icon: <FaLightbulb size={30} />,
      title: "Driven by Purpose",
      text: "Individuals committed to social change, civic impact, or policy innovation."
    },
    {
      icon: <FaLanguage size={30} />,
      title: "Language Requirement",
      text: "English proficiency is recommended, as the program will be conducted in English."
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50]">
          Eligibility Criteria
        </h2>

        <p className="text-gray-500 mt-2 mb-2">
          To ensure Learning, World Diplomats 2026 accepts applications from:
        </p>

       <div  className="flex items-center justify-center gap-2">
  <span className="w-12 h-[2px] bg-blue-400 side-line-animate"></span>
  <span className="w-3 h-3 bg-blue-500 rounded-full dot-animate"></span>
  <span className="w-12 h-[2px] bg-blue-400 side-line-animate"></span>
</div>

      </div>

      {/* Icons Row */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">

        {/* Animated Back Line */}
<div className="absolute top-[35px] w-full z-0 hidden md:block flow-wave-line"></div>

        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs mx-auto z-10 wave-animation"
          >
            <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full shadow-md">
              {item.icon}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-blue-900">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-600 text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EligibilityCriteria;
