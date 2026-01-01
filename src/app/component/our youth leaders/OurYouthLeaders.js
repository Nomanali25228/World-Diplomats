"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import speaker1 from "../../../../public/img/speaker1.webp";
import speaker2 from "../../../../public/img/speaker2.webp";
import speaker3 from "../../../../public/img/speaker3.webp";

const speakers = [
  {
    name: "Speaker One",
    country: "Country",
    position: "Their Position",
    img: speaker1,
  },
  {
    name: "Speaker Two",
    country: "Country",
    position: "Their Position",
    img: speaker2,
  },
  {
    name: "ANNACHIARA",
    country: "Italy",
    position: "Director of Protection4Kids",
    img: speaker3,
  },
];

const OurYouthLeaders = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-[#F1F2F4]">

      {/* ================= TITLE ================= */}
      <div className="text-center mb-12" data-aos="fade-up">

        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     font-bold text-[#0d1b4c] mt-2"
        >
          Empowering the{" "}
          <span className="text-[#b00000]">Diplomats</span>
        </h2>

        {/* Decorative Line */}
       
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                      gap-10 max-w-6xl mx-auto px-4">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center w-full"
            data-aos="fade-up"
            data-aos-delay={index * 150 + 100}
          >
            {/* ================= CARD ================= */}
            <div
              className="
                relative
                w-full
                max-w-[320px]
                h-[280px]
                sm:h-[320px]
                md:h-[340px]
                bg-gradient-to-b 
                from-[#e3f2fd] 
                to-white
                rounded-3xl
                shadow-lg
                border border-gray-200
                overflow-hidden
                transition-all duration-300
                group-hover:shadow-2xl
              "
            >
              {/* Decorative Blob */}
              <div
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full opacity-40"
                style={{ backgroundColor: "#b00000" }}
              ></div>

              {/* IMAGE */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
                <Image
                  src={speaker.img}
                  alt={speaker.name}
                  className="
                    w-[95%]
                    sm:w-[95%]
                    md:w-[90%]
                    h-auto
                    object-contain
                    transition-all duration-500
                    group-hover:scale-105
                  "
                />
              </div>

              {/* ================= HOVER OVERLAY ================= */}
              <div
                className="
                  absolute inset-0 
                  bg-[#0d1b4c]/60
                  rounded-3xl
                  flex flex-col items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500
                  text-center px-4
                "
              >
                
                <h3 className="text-white text-xl sm:text-2xl font-bold">
                  {speaker.name}
                </h3>

                <p className="text-white text-sm mt-1 font-bold">
                  {speaker.country}
                </p>

                <p className="text-gray-200 text-sm mt-1">
                  {speaker.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurYouthLeaders;
