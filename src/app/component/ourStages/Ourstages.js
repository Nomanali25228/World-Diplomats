"use client";
import React, { useEffect, useRef } from "react";

import bg from "../../../../public/img/Ourstages.jpg"; // Local background
import istanbul from "../../../../public/img/Istanbul-Hero-Section.jpg";
import dubai from "../../../../public/img/Dubai-Hero-Section.jpg";
import malaysia from "../../../../public/img/Malaysia-Hero-Section.jpg";
import london from "../../../../public/img/London-Hero-Section1.jpg";
import riyadh from "../../../../public/img/Riyadh-Hero-Section.jpg";

const destinations = [
  {
    title: "Istanbul, Turkey",
    image: istanbul,
    description:
      "Where East meets West, a cultural hub with rich history and scenic landscapes.",
  },
  {
    title: "Dubai, UAE",
    image: dubai,
    description:
      "A futuristic global city known for innovation, culture, and skyscrapers.",
  },
  {
    title: "Kuala Lumpur, Malaysia",
    image: malaysia,
    description:
      "A modern Asian capital blending tradition with skyline architecture.",
  },
  {
    title: "London, UK",
    image: london,
    description:
      "A global hub of politics, finance, and culture with iconic landmarks.",
  },
  {
    title: "Riyadh, Saudi Arabia",
    image: riyadh,
    description:
      "The heart of Saudi Arabia, rapidly transforming into a global city.",
  },
];
const DestinationCard = ({ title, image, description, size, delay }) => (
  <div
    className={`relative rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
      size === "large" ? "h-[400px]" : "h-[300px]"
    }`}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="group h-full w-full [perspective:1000px]">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <img src={image.src ? image.src : image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 w-full bg-black/40 p-4 text-white">
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
        </div>
        {/* BACK */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img src={image.src ? image.src : image} alt={title} className="w-full h-full object-cover brightness-[0.35]" />
          <div className="absolute inset-0 p-5 flex flex-col justify-center text-white">
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="opacity-95">{description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Ourstages() {
  return (
    <>
      {/* Heading Section */}
      <section className="py-20 text-center">
 <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     font-bold text-[#0d1b4c] mt-2"
        >Iconic Global <span className="text-[#b00000]">Destinations</span>     
        </h2>
       
      </section>

      {/* Background Image Section */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img src={bg.src} alt="background" className="w-full h-full object-cover brightness-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/95 via-[#1a2a9c]/25 to-[#b00000]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          {/* Top 2 Large Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {destinations.slice(0, 2).map((dest, i) => (
              <DestinationCard
                key={i}
                title={dest.title}
                image={dest.image}
                description={dest.description}
                size="large"
                delay={i * 100} // staggered animation
              />
            ))}
          </div>
          {/* Bottom 3 Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {destinations.slice(2, 5).map((dest, i) => (
              <DestinationCard
                key={i}
                title={dest.title}
                image={dest.image}
                description={dest.description}
                size="small"
                delay={i * 100 + 200} // staggered animation
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
