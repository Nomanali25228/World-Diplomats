import Image from "next/image";
import React from "react";

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
  return (
    <section className="py-16">

      {/* TITLE */}
      <div className="text-center mb-10">
        <p className="text-gray-500 text-lg mt-2">Our Youth Leaders</p>
        <h3 className="text-[#2C3E50] text-3xl sm:text-4xl font-extrabold">
          Empowering the Diplomats
        </h3>

       <div className="flex items-center justify-center gap-2 mt-3">
  <span className="w-12 h-[2px] bg-blue-400 side-line-animate"></span>
  <span className="w-3 h-3 bg-blue-500 rounded-full dot-animate"></span>
  <span className="w-12 h-[2px] bg-blue-400 side-line-animate"></span>
</div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center w-full"
          >
            {/* CARD WRAPPER – keeps proportions perfect */}
            <div
              className="
                relative
                w-full
                max-w-[320px]
                h-[280px]
                sm:h-[320px]
                md:h-[340px]
                bg-gradient-to-b from-[#fdf0d9] to-[#f7dbae]
                rounded-2xl shadow-lg
                overflow-hidden
              "
            >
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

              {/* HOVER OVERLAY */}
              <div
                className="
                  absolute inset-0 bg-black/60 rounded-2xl
                  flex flex-col items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500
                "
              >
                <h3 className="text-white text-2xl font-bold">{speaker.name}</h3>
                <p className="text-green-300 text-sm mt-1">{speaker.country}</p>
                <p className="text-gray-200 text-sm mt-1">{speaker.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurYouthLeaders;
