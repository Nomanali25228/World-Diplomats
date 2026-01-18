"use client";
import React from "react";
import Navbar from "../component/navbar/Navbar";

const pricingData = [
  {
    destination: "Istanbul, Türkiye",
    date: "22nd – 25th April 2026",
    image: "/img/cardIstanbul.jpg",
    link: "/Istanbul-Türkiye#pricing",
    payNow: "Pay for Istanbul, Türkiye"
  },
  {
    destination: "Dubai, UAE",
    date: "4th – 7th June 2026",
    image: "/img/cardDubai.jpg",
    link: "/Dubai-UAE#pricing",
    payNow: "Pay for Dubai, UAE"
  },
  {
    destination: "Kuala Lumpur, Malaysia",
    date: "TBD July 2026",
    image: "/img/cardMalaysia.jpg",
    link: "/Kuala-Lumpur-Malaysia#pricing",
    payNow: "Pay for Kuala Lumpur, Malaysia"
  },

  {
    destination: "London, UK",
    date: "TBD September 2026",
    image: "/img/cardUK.jpg",
    link: "/London-UK#pricing",
    payNow: "Pay for London, UK"
  },
  {
    destination: "Riyadh, Saudi Arabia",
    date: "TBD October 2026",
    image: "/img/cardSaudi.jpg",
    link: "/Riyadh-Saudi-Arabia#pricing",
    payNow: "Pay for Riyadh, Saudi Arabia"
  },
];

const Card = ({ item }) => (
  <div className="relative w-72 h-[22rem] rounded-2xl overflow-hidden shadow-2xl group">

    {/* Image */}
    <img
      src={item.image}
      alt={item.destination}
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition duration-300"></div>

    {/* CENTER CONTENT */}
    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-5 text-white">
      <h2 className="text-xl font-bold">{item.destination}</h2>

      <p className="text-sm text-white/90 mt-2">{item.date}</p>

      <a
        href={item.link}
        className="mt-5 inline-block px-2 py-1 rounded-lg font-semibold
                   bg-white text-[#0d1b4c]
                   hover:bg-[#1a2a9c] hover:text-white
                   transition duration-300"
      >
        {item.payNow}
      </a>
    </div>

  </div>
);


const page = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-[#0d1b4c]  via-[#1a2a9c]  to-[#b00000]">

        {/* Heading */}
        <div className="text-center mt-12 mb-16">
          <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold text-white">
            Destinations Pricing
          </h1>
          <p className="mt-3 text-[12px] sm:text-md md:text-lg text-blue-200">
            Select your destination and register today
          </p>
        </div>

        {/* Top Row – 3 Cards */}
        <div className="flex justify-center gap-8 flex-wrap mb-10">
          {pricingData.slice(0, 3).map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        {/* Bottom Row – 2 Cards */}
        <div className="flex justify-center gap-8 flex-wrap">
          {pricingData.slice(3, 5).map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

      </section>
    </>
  );
};

export default page;
