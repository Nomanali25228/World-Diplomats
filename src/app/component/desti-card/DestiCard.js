"use client";
import React from "react";
import { useRouter } from 'next/navigation';
import { useDestination } from '@/app/context/DestinationContext';
import istanbulImg from "../../../../public/img/cardIstanbul.jpg";
import dubaiImg from "../../../../public/img/cardDubai.jpg";
import kualaLumpurImg from "../../../../public/img/cardMalaysia.jpg";
import londonImg from "../../../../public/img/cardUK.jpg";
import riyadhImg from "../../../../public/img/cardSaudi.jpg";
import { HiArrowLongRight } from "react-icons/hi2";

const destinations = [
  {
    title: "World Diplomats Istanbul, Türkiye",
    date: "22nd-25th April, 2026",
    description:
      "Attending the World Diplomats in Istanbul, which is situated at the intersection of civilizations, is open to aspiring diplomatic leaders.",
    cardimg: istanbulImg,
    link: "/Register-Now",
    link1: "/Istanbul-Türkiye",
  },
  {
    title: "World Diplomats Dubai, UAE",
    date: "14th-17th May, 2026",
    description:
      "Young leaders may gain from a futuristic platform offered by World Diplomats in Dubai.",
    cardimg: dubaiImg,
    link: "/Register-Now",
    link1: "/Dubai-UAE",
  },
  {
    title: "World Diplomats Kuala Lumpur, Malaysia",
    date: "9th-12th July, 2026",
    description:
      "The World Diplomats contestants are immersed in Kuala Lumpur, which is a multicultural hub.",
    cardimg: kualaLumpurImg,
    link: "/Register-Now",
    link1: "/Kuala-Lumpur-Malaysia",
  },
  {
    title: "World Diplomats London, UK",
    date: "TBD September, 2026",
    description:
      "The World Diplomats contestants are immersed in London, which is a multicultural hub.",
    cardimg: londonImg,
    link: "/Register-Now",
    link1: "/London-UK",
  },
  {
    title: "World Diplomats Riyadh, Saudi Arabia",
    date: "TBD October, 2026",
    description:
      "By fusing modern vision with cultural heritage, World Diplomats in Riyadh offers a life-changing event.",
    cardimg: riyadhImg,
    link: "/Register-Now",
    link1: "/Riyadh-Saudi-Arabia",
  },
];

destinations.sort((a, b) => new Date(a.date) - new Date(b.date));

const DestiCard = () => {
  return (
    <div id="next-section" className="flex flex-col gap-6 mt-10 py-10">
      {/* Top Row */}
      <div className="flex justify-center gap-6 flex-wrap">
        {destinations.slice(0, 3).map((dest, index) => (
          <Card key={index} dest={dest} />
        ))}
      </div>

      {/* Bottom Row */}
      <div className="flex justify-center gap-6 flex-wrap">
        {destinations.slice(3).map((dest, index) => (
          <Card key={index} dest={dest} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ dest }) => {
  const router = useRouter();
  const { selectDestination } = useDestination();

  const PATH_TO_DEST = {
    '/Istanbul-Türkiye': 'Istanbul, Türkiye',
    '/Dubai-UAE': 'Dubai, UAE',
    '/Kuala-Lumpur-Malaysia': 'Kuala Lumpur, Malaysia',
    '/London-UK': 'London, UK',
    '/Riyadh-Saudi-Arabia': 'Riyadh, Saudi Arabia',
    '/Baku-Azerbaijan': 'Baku, Azerbaijan',
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const destLabel = PATH_TO_DEST[dest.link1] || (dest.title.split(',')[1] ? dest.title.split(',')[0].trim() : dest.title);
    selectDestination(destLabel, true);
    router.push('/Register-Now');
  };

  return (
    <div className="group relative w-72 h-96 [perspective:1000px]">
      <div className="absolute w-full h-full duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* FRONT */}
        <div className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl [backface-visibility:hidden]">
          <img
            src={dest.cardimg.src}
            alt={dest.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 w-full bg-[#0d1b4c]/80 text-white text-center py-2 text-sm font-semibold tracking-wide">
            {dest.title.split(",")[1]
              ? dest.title.split(",")[1].trim()
              : dest.title}
          </div>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center p-4">
          <img
            src={dest.cardimg.src}
            alt={dest.title}
            className="absolute w-full h-full object-cover opacity-90 sm:blur-[1px]"
          />
          <div className="absolute w-full h-full bg-[#0d1b4c]/50"></div>

          <div className="relative z-10 text-center text-white">
            <h2 className="text-lg font-bold mb-1">{dest.title}</h2>
            <p className="text-sm mb-2  text-white">{dest.date}</p>
            <p className="text-xs mb-4 text-white/90">{dest.description}</p>

            <div className="flex flex-col gap-3 mt-6 items-center">
              {/* REGISTER */}
              <button
                onClick={handleRegister}
                className="
                px-5 py-2 rounded-lg font-semibold text-sm
                bg-gradient-to-r from-[#1a2a9c] to-[#1a2a9c]
                text-white shadow-md
                hover:scale-105 transition-all duration-300
              "
              >
                Register Now
              </button>

              {/* VIEW */}
              <a
                href={dest.link1}
                className="
                inline-flex items-center gap-2
                text-blue-200 font-semibold
                border-b-2 border-blue-200
                hover:text-white hover:border-white
                transition-all duration-300
              "
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
};

export default DestiCard;
