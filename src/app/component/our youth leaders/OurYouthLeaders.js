"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import speaker1 from "../../../../public/img/speaker1.png";
import speaker2 from "../../../../public/img/speaker2.png";
import speaker3 from "../../../../public/img/speaker3.png";

const speakers = [
  {
    name: "Aras Yılmaz",
    country: "Türkiye",
    // position: "Chief of Strategy",
    img: speaker1,
  },
  {
    name: "Isabella Moreau",
    country: "France",
    // position: "Global Outreach Lead",
    img: speaker2,
  },
  {
    name: "Fasih ur rehman",
    country: "United Kingdom",
    // position: "Head of International Affairs",
    img: speaker3,
  },
];

const OurYouthLeaders = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-10 bg-[#F1F2F4]">
      {/* ================= TITLE ================= */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d1b4c] mt-2">
          Empowering the <span className="text-[#b00000]">Diplomats</span>
        </h2>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto px-4">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="group w-full max-w-[360px]"
            data-aos="fade-up"
            data-aos-delay={index * 150 + 100}
          >
            {/* ================= CARD ================= */}
            <div
              className="
                relative
                w-full
                h-[300px] sm:h-[300px]
                md:h-[350px]
                bg-gradient-to-b 
                from-[#e3f2fd] 
                to-white
                rounded-[2rem]
                shadow-lg
                border border-white/60
                overflow-hidden
                transition-all duration-300
                group-hover:-translate-y-2
                group-hover:shadow-2xl
              "
            >
              {/* Decorative Blob */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-30"
                style={{ backgroundColor: "#b00000" }}
              ></div>
              <div
                className="absolute top-10 -left-6 w-16 h-16 rounded-full opacity-20 bg-[#0D1B4C]"
              ></div>

              {/* IMAGE CONTAINER */}
              <div className="absolute inset-0 flex items-end justify-center pb-0">
                <div className="relative w-full h-[98%] flex justify-center items-end">
                  <Image
                    src={speaker.img}
                    alt={speaker.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      object-top
                      transition-transform duration-500
                      group-hover:scale-105
                    "
                  />
                </div>
              </div>

              {/* ================= HOVER OVERLAY ================= */}
              <div
                className="
                  absolute inset-0 
                  bg-gradient-to-t from-[#0d1b4c]/90 via-[#0d1b4c]/40 to-transparent
                  flex flex-col items-center justify-end
                  pb-10
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500
                  text-center px-6
                "
              >
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl font-bold tracking-wide">
                    {speaker.name}
                  </h3>

                  <div className="h-1 w-12 bg-[#b00000] mx-auto my-3 rounded-full"></div>

                  <p className="text-gray-100 text-sm font-semibold uppercase tracking-wider">
                    {speaker.country}
                  </p>

                  <p className="text-gray-300 text-sm mt-1 font-light">
                    {speaker.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurYouthLeaders;
