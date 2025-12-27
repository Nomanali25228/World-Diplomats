"use client";
import React from "react";
import bgImage from "../../../public/img/registerbg.jpg";
import Navbar from "../component/navbar/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />

      <section
        className="relative min-h-screen py-20 px-4 sm:px-6 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/95 via-[#1a2a9c]/85 to-[#b00000]/80"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          
          {/* HEADER */}
          <div className="text-center mt-12 mb-14">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              About Us
            </h1>
            <p className="mt-3 text-[12px] sm:text-md md:text-lg text-blue-200">
              World Diplomats
            </p>
          </div>

          {/* CONTENT */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 space-y-6 text-black leading-relaxed">

            <p>
              <strong>World Diplomats</strong> is an international diplomacy and
              leadership platform committed to advancing global dialogue through
              high-level United Nations simulations. The initiative is designed
              to provide an intellectually rigorous and professionally structured
              environment where participants engage with complex global issues
              through the principles and practices of multilateral diplomacy.
            </p>

            <p>
              Grounded in the core values of human rights, international peace and
              security, and global cooperation, World Diplomats offers
              participants an opportunity to analyze policy challenges,
              represent state and institutional perspectives, and negotiate
              consensus-driven solutions. The program emphasizes critical
              thinking, diplomacy, public speaking, policy research, and
              cross-cultural engagement.
            </p>

            <p>
              Established in <strong>Istanbul, Turkey</strong>, World Diplomats
              aims to position itself among the leading global UN simulation
              initiatives by fostering inclusive participation across academic
              levels and professional backgrounds. Its structured committee
              formats and academic approach ensure an authentic and impactful
              simulation experience aligned with real-world international
              governance frameworks.
            </p>

            <p>
              World Diplomats believes that diplomacy is an essential instrument
              for global stability and sustainable development. By cultivating
              informed, ethical, and globally conscious leaders, the initiative
              seeks to contribute meaningfully to international understanding
              and cooperation.
            </p>

            <p className="text-center font-semibold pt-6 border-t">
              © World Diplomats. All Rights Reserved.
            </p>

          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
