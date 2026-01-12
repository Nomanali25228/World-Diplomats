"use client";
import React from "react";
import bg from "../../../../public/img/worlddiplomats.png";

const WorldDiplomats = () => {
  return (
    <section id="world-diplomats" className="w-full mt-12">

      {/* ================= WHITE PADDING WRAPPER ================= */}
      <div className="w-full bg-white py-6 sm:py-8 md:py-10">

        {/* ================= IMAGE BACKGROUND SECTION ================= */}
        <div
          className="relative w-full h-screen overflow-hidden"
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/95 via-[#1a2a9c]/25 to-[#b00000]/80"></div>

          {/* ================= BOTTOM ATTACHED CENTERED GLASS CARD ================= */}
          <div
            className="
              absolute bottom-0
              left-1/2 transform -translate-x-1/2
              w-[95%] sm:w-[85%] md:w-[80%] lg:w-[800px]
              max-w-full
              bg-[#0d1b4c]/55
              
              p-6 sm:p-8 md:p-10 lg:p-12
              rounded-t-[30px]
              shadow-2xl
              flex flex-col items-center justify-center
              text-center
              z-10
            "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h2
              className="
                text-white font-bold tracking-wide mb-6
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
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
              World Diplomats is a global educational UN simulation platform connecting
              students and young leaders worldwide. Built on a learning-by-doing approach,
              it delivers immersive Model United Nations simulations and interactive workshops
              designed to amplify youth voices through inclusive, globally engaging conferences
              held in cities such as Istanbul, London, Riyadh, and Dubai.
              <br /><br />
              As an international educational youth diplomacy initiative, World Diplomats promotes
              human rights, international peace and security, and global cooperation. As the flagship
              project of Globnix Youth Forum Ltd, it provides an academically structured yet accessible
              environment for practical engagement with real-world global issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldDiplomats;
