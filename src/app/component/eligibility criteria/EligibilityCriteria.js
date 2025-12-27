"use client";
import React, { useEffect } from "react";
import { FaUserAlt, FaUsers, FaLightbulb, FaLanguage } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const EligibilityCriteria = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const items = [
    {
      icon: <FaUserAlt size={28} />,
      title: "Who Should Register",
      text: "Individuals aged 8–35 years, regardless of nationality or background.",
    },
    {
      icon: <FaUsers size={28} />,
      title: "Ideal Participant Profile",
      text: "As it is a learning experience, we invite everyone: youth leaders, students, entrepreneurs, professionals, activists, and community builders.",
    },
    {
      icon: <FaLightbulb size={28} />,
      title: "Driven by Purpose",
      text: "Individuals committed to social change, civic impact, or policy innovation.",
    },
    {
      icon: <FaLanguage size={28} />,
      title: "Language Requirement",
      text: "English proficiency is recommended, as the program will be conducted in English.",
    },
  ];

  return (
    <section className="w-full bg-[#F1F2F4] py-16 px-4">

      {/* ================= TITLE ================= */}
      <div className="text-center mb-12">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     font-bold text-[#0d1b4c]"
          data-aos="fade-up"
        >
          Eligibility <span className="text-[#b00000]">Criteria</span>
        </h2>
        

        <p
          className="text-gray-600 mt-3 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          To ensure meaningful learning, World Diplomats 2026 accepts
          applications from:
        </p>

        {/* Decorative line */}
        <div
          className="flex items-center justify-center gap-2 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="w-10 h-[2px] bg-[#1a2a9c] side-line-animate"></span>
          <span className="w-3 h-3 bg-[#b00000] rounded-full dot-animate"></span>
          <span className="w-10 h-[2px] bg-[#1a2a9c] side-line-animate"></span>
        </div>
      </div>

   
      {/* ================= ITEMS ================= */}
      <div className="flex flex-col md:flex-row 
                      justify-between gap-12 
                      max-w-6xl mx-auto">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center 
                       max-w-xs mx-auto"
            data-aos="fade-up"
            data-aos-delay={index * 150 + 100}
          >
            {/* ICON — light blue CLEARLY visible */}
            <div
              className="
                w-16 h-16 
                flex items-center justify-center 
                rounded-full 
                bg-[#e3f2fd]
                text-[#1a2a9c]
                shadow-md
                transition-all duration-300
                hover:scale-110
              "
            >
              {item.icon}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-[#0d1b4c]">
              {item.title}
            </h3>

            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EligibilityCriteria;
