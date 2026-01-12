"use client";
import React from "react";
import Link from "next/link";

import bg from "../../../../public/img/Ourstages.png";
import istanbul from "../../../../public/img/Istanbul-Hero-Section.jpg";
import dubai from "../../../../public/img/Dubai-Hero-Section.jpg";
import malaysia from "../../../../public/img/Malaysia-Hero-Section.jpg";
import london from "../../../../public/img/London-Hero-Section1.jpg";
import riyadh from "../../../../public/img/Riyadh-Hero-Section.jpg";

const destinations = [
  {
    title: "Istanbul, Türkiye",
    image: istanbul,
    date: "22nd – 25th April 2026",
    slug: "Istanbul-Turkey",
  },
  {
    title: "Dubai, UAE",
    image: dubai,
    date: "14th – 17th May 2026",
    slug: "Dubai-UAE",
  },
  {
    title: "Kuala Lumpur, Malaysia",
    image: malaysia,
    date: "9th – 12th July 2026",
    slug: "Kuala-Lumpur-Malaysia",
  },
  {
    title: "London, UK",
    image: london,
    date: "TBD September 2026",
    slug: "London-UK",
  },
  {
    title: "Riyadh, Saudi Arabia",
    image: riyadh,
    date: "TBD – 21 October 2026",
    slug: "Riyadh-Saudi-Arabia",
  },
];

const DestinationCard = ({ title, image, date, slug, size }) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-xl
      cursor-pointer transition-transform duration-300 hover:scale-[1.02]
      ${size === "large" ? "h-[420px]" : "h-[320px]"}`}
      onClick={() => (window.location.href = `/${slug}`)}
    >
      {/* Image */}
      <img
        src={image.src}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Bottom content */}
      <div className="absolute bottom-0 w-full">
        <div
          className="flex items-center justify-between gap-4
          bg-black/50 px-4 py-3"
        >
          {/* Left */}
          <div>
            <h3 className="text-white text-lg font-semibold">
              {title}
            </h3>
            <p className="text-white/80 text-sm mt-1">
              {date}
            </p>
          </div>

          {/* Register Button */}
          <Link
            href="/Register-Now"
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 bg-blue-600 text-white text-sm
            px-4 py-2 rounded-lg font-semibold
            hover:bg-blue-700 transition"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Ourstages() {
  return (
    <>
      {/* Heading */}
      <section className="pb-14 text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-bold text-[#0d1b4c]"
        >
          Iconic Global{" "}
          <span className="text-[#b00000]">Destinations</span>
        </h2>
      </section>

      {/* Background */}
      <section className="relative">
        <div className="absolute inset-0 -z-10">
          <img
            src={bg.src}
            alt="background"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/90 via-[#1a2a9c]/30 to-[#b00000]/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          {/* Top 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {destinations.slice(0, 2).map((dest, i) => (
              <DestinationCard key={i} {...dest} size="large" />
            ))}
          </div>

          {/* Bottom 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {destinations.slice(2).map((dest, i) => (
              <DestinationCard key={i} {...dest} size="small" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
