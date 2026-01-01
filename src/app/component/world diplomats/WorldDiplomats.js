"use client";
import React from "react";
import bg from "../../../../public/img/worlddiplomats.jpg";

const WorldDiplomats = () => {
  return (
    <section id="world-diplomats" className="w-full mt-12">

      {/* ================= Heading Section ================= */}
      <div className="text-center mb-10 px-4">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-[#0d1b4c]"
          data-aos="fade-up"
        >
          World <span className="text-[#b00000]">Diplomats</span>
        </h2>
       
      </div>

      {/* ================= WHITE PADDING WRAPPER ================= */}
      <div className="w-full bg-white py-6 sm:py-8 md:py-10">

        {/* ================= IMAGE BACKGROUND SECTION ================= */}
        <div
          className="relative w-full h-screen overflow-hidden rounded-lg mx-auto max-w-[1200px]"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            
            // backgroundAttachment: "fixed",
          }}
        >
          {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/95 via-[#1a2a9c]/25 to-[#b00000]/80"></div>

          {/* ================= GLASS CONTENT BOX ================= */}
          <div
            className="
              absolute
              bottom-0
              w-[100%] sm:w-[85%] md:w-[70%] lg:w-[600px]
              max-w-full
              h-[65%] sm:h-[70%] md:h-[75%] lg:h-[70%]
              bg-[#0d1b4c]/20
              backdrop-blur-3xl
              p-6 sm:p-8 md:p-10 lg:p-12
              rounded-t-[30px]
              shadow-2xl
              flex flex-col justify-center
              z-10
              left-1/2 transform -translate-x-1/2
              lg:left-[10%] lg:translate-x-0
            "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2
              className="
                text-white font-bold tracking-wide mb-6
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                text-center lg:text-left
              "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              WORLD DIPLOMATS?
            </h2>

            <p
              className="text-white/95 text-[15px] sm:text-lg md:text-xl leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              World Diplomats is a global United Nations simulation movement bringing
              together students from South-East Asia, the Gulf, Europe, Latin America,
              and beyond. We believe every young leader deserves a voice on the world stage.
              <br /><br />
              Whether held in Istanbul, London, Riyadh, or Dubai, our conferences are
              designed to be creative, inclusive, and globally immersive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldDiplomats;
