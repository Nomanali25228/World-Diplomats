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
         {/* CONTENT */}
<div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 space-y-8 text-black leading-relaxed">

  <div>
    <h2 className="text-xl sm:text-2xl font-bold mb-3">Who We Are</h2>
    <p>
      <strong>World Diplomats</strong> is an international youth diplomacy
      initiative grounded in the core values of human rights, international
      peace and security, and global cooperation. Operating as a flagship
      project of <strong>Globnix Youth Forum Ltd (UK)</strong>, licence #
      <strong>16913427</strong>, the platform provides an inclusive and
      academically driven environment where young people engage with global
      issues aligned with the United Nations Sustainable Development Goals
      (SDGs).
    </p>
  </div>

  <div>
    <h2 className="text-xl sm:text-2xl font-bold mb-3">What We Do</h2>
    <p>
      World Diplomats offers participants the opportunity to analyze global
      policy challenges, represent state and institutional perspectives, and
      negotiate consensus-driven solutions through structured Model United
      Nations simulations, international forums, and leadership programs. Our
      approach emphasizes critical thinking, diplomacy, public speaking,
      policy research, and cross-cultural engagement.
    </p>
  </div>

  <div>
    <h2 className="text-xl sm:text-2xl font-bold mb-3">Our Academic Approach</h2>
    <p>
      World Diplomats aims to position itself among leading global United
      Nations simulation initiatives by fostering inclusive participation
      across diverse academic levels and professional backgrounds. Through
      structured committee formats, rigorous preparation, and an academically
      grounded methodology, we deliver an authentic and impactful simulation
      experience aligned with real-world international governance frameworks.
    </p>
  </div>

  <div>
    <h2 className="text-xl sm:text-2xl font-bold mb-3">Why It Matters</h2>
    <p>
      World Diplomats believes diplomacy is a vital instrument for global
      stability and sustainable development. By cultivating informed,
      ethical, and globally conscious leaders, the initiative seeks to
      contribute meaningfully to international understanding, cooperation,
      and responsible global citizenship.
    </p>
  </div>

  <p className="text-center font-medium pt-4">
    By empowering youth through dialogue and diplomacy, World Diplomats aims
    to shape a generation ready to lead with integrity and global
    responsibility.
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
