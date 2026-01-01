"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const DestinationOverview = ({
  title,
  DelegatesAttending,
  Location,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 
      bg-gradient-to-b from-[#e3f2fd] to-[#F1F2F4]">

      {/* SECTION HEADER */}
      <div className="text-center mb-16">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     font-bold text-[#0d1b4c]"
          data-aos="fade-up"
        >
          {title}
                    <span className="text-[#b00000]"> Overview</span>

        </h2>

        {/* Divider */}
        
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Delegates */}
        <div
          ref={ref}
          className="bg-white/70 backdrop-blur-xl rounded-3xl 
                     shadow-lg p-8 sm:p-10
                     hover:shadow-2xl hover:-translate-y-2
                     transition-all duration-500"
        >
          <h3 className="text-lg md:text-xl font-semibold text-[#0d1b4c] mb-2">
            Delegates Attending
          </h3>

          <p className="text-3xl sm:text-4xl md:text-5xl 
                        font-extrabold text-[#b00000]">
            {inView ? (
              <CountUp start={1} end={DelegatesAttending} duration={2.5} />
            ) : (
              0
            )}
            +
          </p>

          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Representing schools & universities worldwide
          </p>
        </div>

        {/* Location */}
        <div
          className="bg-white/70 backdrop-blur-xl rounded-3xl 
                     shadow-lg p-8 sm:p-10
                     hover:shadow-2xl hover:-translate-y-2
                     transition-all duration-500"
        >
          <h3 className="text-lg md:text-xl font-semibold text-[#0d1b4c] mb-2">
            Location
          </h3>

          <p className="text-xl md:text-2xl font-bold text-[#1a2a9c]">
            {Location}
          </p>

          <p className="mt-2 text-sm sm:text-base text-gray-600">
            A city bridging continents & cultures
          </p>
        </div>

        {/* Registrations */}
        <div
          className="bg-white/70 backdrop-blur-xl rounded-3xl 
                     shadow-lg p-8 sm:p-10
                     hover:shadow-2xl hover:-translate-y-2
                     transition-all duration-500"
        >
          <h3 className="text-lg md:text-xl font-semibold text-[#0d1b4c] mb-3">
            Accepting Registrations From
          </h3>

          <ul className="text-sm md:text-base text-gray-700 space-y-1">
            <li>• Middle & High School Students</li>
            <li>• University Students</li>
            <li>• Alumni</li>
          </ul>
        </div>

        {/* AGE REQUIREMENTS */}
        <div
          className="md:col-span-2 lg:col-span-3
                     bg-white/80 backdrop-blur-xl rounded-3xl
                     shadow-lg p-6 sm:p-8 md:p-10
                     hover:shadow-2xl hover:-translate-y-2
                     transition-all duration-500"
        >
          <h3 className="text-base sm:text-lg md:text-2xl 
                         font-semibold text-[#0d1b4c] mb-6 text-center">
            Age Requirements
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 
                          text-sm sm:text-base md:text-lg text-gray-700">
            <div className="flex flex-col items-center">
              <p className="font-semibold text-[#1a2a9c]">Middle School</p>
              <p>8 – 13</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-semibold text-[#1a2a9c]">High School</p>
              <p>14 – 18</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-semibold text-[#1a2a9c]">University</p>
              <p>18 – 28</p>
            </div>

            <div className="flex flex-col items-center">
              <p className="font-semibold text-[#1a2a9c]">Alumni</p>
              <p>29 – 35</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DestinationOverview;
