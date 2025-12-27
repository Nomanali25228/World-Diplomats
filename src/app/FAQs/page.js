"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import bgImage from "../../../public/img/registerbg.jpg";
import Navbar from "../component/navbar/Navbar";

const faqs = [
  {
    q: "How do I register for World Diplomats MUN?",
    a: "You can register by filling out the official registration form available on our website. Once submitted, our team will review your application and contact you via email."
  },
  {
    q: "Is the registration fee refundable?",
    a: "Registration fees are non-refundable and only transferable once paid with terms and conditions applied, except in exceptional circumstances."
  },
  {
    q: "What does the registration fee include?",
    a: "The fee covers conference access, committee participation, conference materials, certificates, and official sessions."
  },
  {
    q: "Are there any early-bird or group discounts?",
    a: "Yes, early-bird and group discounts may be available for a limited time."
  },
  {
    q: "What payment methods are accepted?",
    a: "International bank transfers and other payment methods shared after approval."
  },
  {
    q: "Do you provide visa assistance or invitation letters?",
    a: "Yes. Official visa invitation letters are provided after successful payment."
  },
  {
    q: "Does receiving an invitation letter guarantee a visa?",
    a: "No. Visa approval is at the discretion of the embassy or consulate."
  },
  {
    q: "What documents are required for visa support?",
    a: "Passport copy, registration form, proof of payment, and additional documents if required."
  },
  {
    q: "Is financial aid or sponsorship available?",
    a: "Limited financial assistance may be offered based on merit or need."
  }
];

const FAQItem = ({ item, index, activeIndex, setActiveIndex }) => {
  const isOpen = activeIndex === index;

  return (
    <div className="rounded-2xl  overflow-hidden border border-gray-200 bg-white shadow-lg">
      <button
        onClick={() =>
          setActiveIndex(isOpen ? null : index)
        }
        className="w-full flex justify-between items-center px-6 py-5 text-left text-black"
      >
        <span className="font-semibold text-sm sm:text-base">
          {index + 1}. {item.q}
        </span>

        <FaChevronDown
          className={`transition-transform  duration-300 ${
            isOpen ? "rotate-180 text-[#b00000]" : "text-black"
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-5 text-sm sm:text-base text-black leading-relaxed bg-[#f1f1f1] border-t border-gray-200">
          {item.a}
        </div>
      )}
    </div>
  );
};

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
    <Navbar/>
    <section
      className="relative min-h-screen py-20  px-4 sm:px-6 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* DARK UK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/95 via-[#1a2a9c]/85 to-[#b00000]/80"></div>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mt-12 mb-14">
  <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold text-white">
            World Diplomats MUN
          </h1>
          <p className="mt-3 text-[12px] sm:text-md md:text-lg text-blue-200">
            Frequently Asked Questions (FAQs)
          </p>

          
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>

      </div>
    </section>
    </>
  );
};

export default Page;
