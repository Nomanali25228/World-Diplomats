"use client";
import React from "react";
import bgImage from "../../../../public/img/BECOMEDIPLOMAT.jpg";
import { usePathname, useRouter } from 'next/navigation';
import { useDestination } from '@/app/context/DestinationContext';

const BecomeDiplomets = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { selectDestination } = useDestination();

  const PATH_TO_DEST = {
    '/Istanbul-Turkey': 'Istanbul, Turkey',
    '/Dubai-UAE': 'Dubai, UAE',
    '/Kuala-Lumpur-Malaysia': 'Kuala Lumpur, Malaysia',
    '/London-UK': 'London, UK',
    '/Riyadh-Saudi-Arabia': 'Riyadh, Saudi Arabia',
    '/Baku-Azerbaijan': 'Baku, Azerbaijan',
  };

  const handleRegisterNow = () => {
    const dest = PATH_TO_DEST[pathname];
    if (dest) selectDestination(dest, true);
    router.push('/Register-Now');
  };

  return (
    <section className="w-full mt-12">

      {/* ================= WHITE PADDING WRAPPER ================= */}
      <div className="w-full bg-white py-6 sm:py-8 md:py-10">

        {/* ================= IMAGE BACKGROUND SECTION ================= */}
        <div className="relative w-full max-w-[1200px] mx-auto rounded-lg overflow-hidden">
          <div
            className="w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] bg-center bg-cover rounded-lg"
            style={{ backgroundImage: `url(${bgImage.src})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/95 via-[#1a2a9c]/25 to-[#b00000]/80"></div>

            {/* ================= GLASS CONTENT BOX ================= */}
             <div className="relative z-10 px-4 sm:px-6 md:px-16 h-full flex flex-col justify-center">

        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">

          {/* Title */}
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center sm:text-left max-w-full break-words">
            BECOME A DIPLOMAT
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto items-center sm:items-end">
            <button className="
              px-6 py-3 
              text-white font-semibold 
              text-sm md:text-base
              rounded-xl 
              bg-gradient-to-r from-[#1a2a9c] to-[#0d1b4c]
              shadow-lg shadow-[#1a2a9c]/30
              hover:shadow-[#0d1b4c]/40
              hover:scale-105 
              transition-all duration-300 cursor-pointer
            "
              onClick={handleRegisterNow}
            >
              Register Now ➤
            </button>

            <button className="
              px-6 py-3  cursor-pointer
              font-semibold
              text-sm md:text-base
              rounded-xl 
              bg-white/90 backdrop-blur-md
              text-[#0d1b4c] 
              shadow-md hover:shadow-lg 
              border border-[#0d1b4c]/30
              hover:bg-white hover:scale-105
              transition-all duration-300
            ">
              Contact Now ➤
            </button>

          </div>

        </div>
      </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeDiplomets;
