"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const DestinationDelegatesAttending = ({ title,
  DelegatesAttending,
  Location,}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-gray-100">
      
      {/* Section Header */}
      <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50]" data-aos="fade-up">
        {title}
        </h2>

        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></span>
          <span className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></span>
          <span className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Delegates Card */}
        <div
          ref={ref}
          className="bg-white/30 backdrop-blur-lg rounded-3xl shadow-xl p-8 sm:p-10 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500"
        >
          <h3 className="text-lg md:text-xl font-semibold text-[#0b3c5d] mb-2">Delegates Attending</h3>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600">
            {inView ? <CountUp start={1} end={DelegatesAttending} duration={2.5} /> : 0}
          </p>
          <p className="mt-2 text-sm sm:text-base text-gray-600">Representing schools & universities worldwide</p>
        </div>

        {/* Location Card */}
        <div className="bg-gradient-to-tr from-green-100/70 to-green-200/60 backdrop-blur-lg rounded-3xl shadow-xl p-8 sm:p-10 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500">
          <h3 className="text-lg md:text-xl font-semibold text-[#0b3c5d] mb-2">Location</h3>
          <p className="text-xl md:text-2xl font-bold text-gray-700">{Location}</p>
          <p className="mt-2 text-sm sm:text-base text-gray-600">A city bridging continents & cultures</p>
        </div>

        {/* Registrations Card */}
        <div className="bg-gradient-to-tr from-yellow-100/70 to-yellow-200/60 backdrop-blur-lg rounded-3xl shadow-xl p-8 sm:p-10 hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500">
          <h3 className="text-lg md:text-xl font-semibold text-[#0b3c5d] mb-3">Accepting Registrations From</h3>
          <ul className="text-sm md:text-base text-gray-700 space-y-1">
            <li>• Middle & High School Students</li>
            <li>• University Students</li>
            <li>• Alumni</li>
          </ul>
        </div>

        {/* Age Requirements Card */}
      <div className="md:col-span-2 lg:col-span-3 
                bg-gradient-to-tr from-purple-100/70 to-purple-200/60 
                backdrop-blur-lg rounded-3xl shadow-xl 
                p-2 sm:p-4 md:p-6 lg:p-10 
                hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500">

  <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-semibold text-[#0b3c5d] mb-4 sm:mb-6">
    Age Requirements
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-xs sm:text-sm md:text-base lg:text-lg text-gray-700">
    <div className="flex flex-col items-center">
      <p className="font-semibold text-sm sm:text-base md:text-lg">Middle School</p>
      <p className="text-xs sm:text-sm md:text-base">8 – 13</p>
    </div>
    <div className="flex flex-col items-center">
      <p className="font-semibold text-sm sm:text-base md:text-lg">High School</p>
      <p className="text-xs sm:text-sm md:text-base">14 – 18</p>
    </div>
    <div className="flex flex-col items-center">
      <p className="font-semibold text-sm sm:text-base md:text-lg">University</p>
      <p className="text-xs sm:text-sm md:text-base">18 – 28</p>
    </div>
    <div className="flex flex-col items-center">
      <p className="font-semibold text-sm sm:text-base md:text-lg">Alumni</p>
      <p className="text-xs sm:text-sm md:text-base">29 – 35</p>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default DestinationDelegatesAttending;
