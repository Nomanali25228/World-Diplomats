"use client";
import React from "react";
import bgImage from "../../../../public/img/BECOMEDIPLOMAT.jpg";
import { usePathname, useRouter } from "next/navigation";
import { useDestination } from "@/app/context/DestinationContext";

const BecomeDiplomets = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { selectDestination } = useDestination();

  const PATH_TO_DEST = {
    "/Istanbul-Turkey": "Istanbul, Turkey",
    "/Dubai-UAE": "Dubai, UAE",
    "/Kuala-Lumpur-Malaysia": "Kuala Lumpur, Malaysia",
    "/London-UK": "London, UK",
    "/Riyadh-Saudi-Arabia": "Riyadh, Saudi Arabia",
    "/Baku-Azerbaijan": "Baku, Azerbaijan",
  };

  const handleRegisterNow = () => {
    const dest = PATH_TO_DEST[pathname];
    if (dest) selectDestination(dest, true);
    router.push("/Register-Now");
  };

  return (
    <section className="w-full mt-12 bg-white py-8">
      <div className="relative w-full max-w-[1400px] mx-auto rounded-2xl overflow-hidden">

        {/* Background Image */}
        <div
          className="w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh]
          bg-center bg-cover relative"
          style={{ backgroundImage: `url(${bgImage.src})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/95 via-[#1a2a9c]/25 to-[#b00000]/80"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center px-6 sm:px-10 lg:px-16">
            <div
              className="
                w-full flex flex-col lg:flex-row
                items-center lg:items-center
                justify-between gap-8
              "
            >

              {/* LEFT TEXT */}
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-white text-xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  BECOME A DIPLOMAT
                </h2>

                <p className="text-gray-200 text-sm sm:text-base lg:text-lg mt-4 leading-relaxed">
                  Join the world{"'"}s most prestigious youth diplomatic network
                  and connect with leaders from over 150+ countries.
                </p>
              </div>

              {/* RIGHT BUTTONS */}
              <div
                className="
                  flex flex-col sm:flex-row gap-4
                  w-full lg:w-auto
                  justify-center lg:justify-end
                "
              >
                <button
                  onClick={handleRegisterNow}
                  className="
                    px-7 py-3 text-white font-semibold
                    text-sm md:text-base rounded-xl
                    bg-gradient-to-r from-[#1a2a9c] to-[#0d1b4c]
                    shadow-lg shadow-[#1a2a9c]/30
                    hover:shadow-[#0d1b4c]/40
                    hover:scale-105 transition-all duration-300
                    w-full sm:w-auto
                  "
                >
                  Register Now ➤
                </button>

                <button
                  className="
                    px-7 py-3 font-semibold
                    text-sm md:text-base rounded-xl
                    bg-white/90 backdrop-blur-md
                    text-[#0d1b4c]
                    shadow-md hover:shadow-lg
                    border border-[#0d1b4c]/30
                    hover:scale-105 transition-all duration-300
                    w-full sm:w-auto
                  "
                >
                  Contact Now ➤
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeDiplomets;
