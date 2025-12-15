"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLongDown } from "react-icons/hi2";
import heroImg from "../../../../public/img/destinationPageBG.jpg";

const DestiHeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Destination Background"
        className="object-cover w-full h-full"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
        
        {/* Main Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
          World Diplomats
        </h1>

        {/* Upcoming Event */}
        <p className="text-white font-bold text-xl sm:text-2xl mb-2">
          Upcoming Event
        </p>

        {/* Arrow Icon */}
        <HiArrowLongDown className="text-white text-3xl mb-3 animate-bounce" />

        {/* Date & Destination */}
        <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-8">
          Istanbul, Turkey | 26th–29th March, 2026
        </p>

        {/* Register Button */}
        <Link href="/Register-Now">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 cursor-pointer rounded-lg text-lg transition">
            Register Now
          </button>
        </Link>

        {/* Scroll Mouse */}
        <div
          onClick={scrollToNext}
          className="absolute bottom-8 flex flex-col items-center cursor-pointer"
        >
          <div className="w-10 h-16 border-2 border-white rounded-full flex justify-center items-start p-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
          <span className="mt-2 text-white/70 text-sm">Scroll</span>
        </div>
      </div>
    </div>
  );
};

export default DestiHeroSection;
