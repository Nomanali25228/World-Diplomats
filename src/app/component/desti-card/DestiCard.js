"use client";
import React from "react";
import istanbulImg from "../../../../public/img/cardIstanbul.jpg";
import dubaiImg from "../../../../public/img/cardDubai.jpg";
import kualaLumpurImg from "../../../../public/img/cardMalaysia.jpg";
import londonImg from "../../../../public/img/cardUK.jpg";
import riyadhImg from "../../../../public/img/cardSaudi.jpg";
import { HiArrowLongRight } from "react-icons/hi2";


const destinations = [
  {
    title: "World Diplomats Istanbul, Turkey",
    date: "26th-29th March, 2026",
    description: "Attending the World Diplomats in Istanbul, which is situated at the intersection of civilizations, is open to aspiring diplomatic leaders.",
    cardimg: istanbulImg,
    link: "/Register-Now",
    link1: "/Istanbul-Turkey"
  },
  {
    title: "World Diplomats Dubai, UAE",
    date: "14th-17th May, 2026",
    description: "Young leaders may gain from a futuristic platform offered by World Diplomats in Dubai.",
    cardimg: dubaiImg,
    link: "/Register-Now",
    link1: "/Dubai-UAE"
  },
  {
    title: "World Diplomats Kuala Lumpur, Malaysia",
    date: "9th-12th July, 2026",
    description: "The World Diplomats contestants are immersed in Kuala Lumpur, which is a multicultural hub.",
    cardimg: kualaLumpurImg,
    link: "/Register-Now",
    link1: "/Kuala-Lumpur"
  },
  {
    title: "World Diplomats London, UK",
    date: "2026",
    description: "The World Diplomats contestants are immersed in London, which is a multicultural hub.",
    cardimg: londonImg,
    link: "/Register-Now",
    link1: "/London-UK"
  },
  {
    title: "World Diplomats Riyadh, Saudi Arabia",
    date: "2026",
    description: "By fusing modern vision with cultural heritage, World Diplomats in Riyadh offers a life-changing event.",
    cardimg: riyadhImg,
    link: "/Register-Now",
    link1: "/Riyadh-Saudi-Arabia"
  },
];

// Sort destinations by date
destinations.sort((a, b) => new Date(a.date) - new Date(b.date));

const DestiCard = () => {
  return (
    <div id="next-section" className="flex flex-col gap-6 mt-10 py-10">
      {/* Top Row - 3 Cards */}
      <div className="flex justify-center gap-6 flex-wrap">
        {destinations.slice(0, 3).map((dest, index) => (
          <Card key={index} dest={dest} />
        ))}
      </div>

      {/* Bottom Row - 2 Cards Centered */}
      <div className="flex justify-center gap-6 flex-wrap">
        {destinations.slice(3).map((dest, index) => (
          <Card key={index} dest={dest} />
        ))}
      </div>
    </div>
  );
};

// Single Flip Card Component
const Card = ({ dest }) => (
  <div className="group relative w-72 h-96 [perspective:1000px]">
    <div className="absolute w-full h-full duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      
      {/* Front Side */}
      <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden]">
        <img
          src={dest.cardimg.src}
          alt={dest.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-2 text-sm font-bold">
          {dest.title.split(",")[1] ? dest.title.split(",")[1].trim() : dest.title}
        </div>
      </div>

      {/* Back Side */}
      <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center p-4">
        {/* Background Image with Blur on desktop only */}
        <img
          src={dest.cardimg.src}
          alt={dest.title}
          className="absolute w-full h-full object-cover opacity-70 filter sm:blur-[2px] blur-0"
        />
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/60"></div>

        <div className="relative z-10 text-center text-white">
          <h2 className="text-lg font-bold mb-1 drop-shadow-lg">{dest.title}</h2>
          <p className="text-sm mb-2 drop-shadow-md">{dest.date}</p>
          <p className="text-xs mb-4 drop-shadow-md">{dest.description}</p>
         <div className="flex flex-col gap-3 mt-8 items-center">
  <a
    href={dest.link}
    className="w-auto text-center px-4 py-2 bg-white text-blue-500 rounded-lg font-semibold hover:bg-gray-100 transition"
  >
    Register Now
  </a>

 <a
  href={dest.link1}
  className="inline-flex items-center gap-2 text-white font-semibold
             border-b-2 border-white pb-0
             transition-all duration-300
             hover:border-blue-300 hover:text-blue-300"
>
  View
  <HiArrowLongRight className="text-lg" />
</a>


</div>

        </div>
      </div>

    </div>
  </div>
);

export default DestiCard;
