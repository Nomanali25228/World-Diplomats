"use client";
import React from "react";
import bg from "../../../../public/img/Ourstages.jpg"; // Local background
import istanbull from "../../../../public/img/istun.jpg"; // Local Istanbul image
import baku from "../../../../public/img/Baku.jpeg"; // Local Baku image

const destinations = [
  {
    title: "Istanbul, Turkey",
    image: istanbull,
    description: "Where East meets West, a cultural hub with rich history and scenic landscapes.",
  },
  {
    title: "Baku, Azerbaijan",
    image: baku,
    description: "The City of Winds on the Caspian Sea, blending ancient and futuristic architecture.",
  },
  {
    title: "London, UK",
    image: "https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=800&q=60",
    description: "A global hub of politics, finance, and culture with iconic landmarks.",
  },
  {
    title: "Pan–European",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    description: "A unique conference spanning multiple historic European capitals.",
  },
  {
    title: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60",
    description: "A futuristic global city known for innovation, culture, and skyscrapers.",
  },
];

const DestinationCard = ({ title, image, description, size, delay }) => (
  <div
    className={`relative rounded-3xl overflow-hidden bg-white/10 border border-white/20 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
      size === "large" ? "h-[400px]" : "h-[300px]"
    }`}
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="group h-full w-full [perspective:1000px]">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <img
            src={image.src ? image.src : image}
            alt={title}
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute bottom-0 w-full bg-[#0d1b4c]/80 p-4 text-white rounded-tl-2xl rounded-tr-2xl">
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img
            src={image.src ? image.src : image}
            alt={title}
            className="w-full h-full object-cover brightness-30"
          />
          <div className="absolute inset-0 p-5 flex flex-col justify-center text-white">
            <h3 className="text-xl font-bold mb-3 ">{title}</h3>
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
      {/* ================= Heading Section ================= */}
      <section className="py-20 text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d1b4c]"
          data-aos="fade-up"
        >
          
                              Iconic Global <span className="text-[#b00000]">Destinations</span>

        </h2>
        <p
          className="text-gray-500 text-lg mt-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our Stages
        </p>
          <div
          className="flex items-center justify-center gap-2 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="w-10 h-[2px] bg-[#1a2a9c] side-line-animate"></span>
          <span className="w-3 h-3 bg-[#b00000] rounded-full dot-animate"></span>
          <span className="w-10 h-[2px] bg-[#1a2a9c] side-line-animate"></span>
        </div>
      </section>

      {/* ================= Background Image Section ================= */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img
            src={bg.src}
            alt="background"
            className="w-full h-full object-cover brightness-30"
          />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/95 via-[#1a2a9c]/85 to-[#b00000]/80"></div>
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
                delay={i * 100}
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
                delay={i * 100 + 200}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
