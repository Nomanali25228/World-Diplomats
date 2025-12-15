"use client";
import React from "react";
import CountUp from "react-countup";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
// import unBg from "@/public/un-bg.png"; // 👈 BG IMAGE COMMENTED

const DestinationParticipantsExpected = ({   title,
subtitle1,subtitle2,cardimage}) => {
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 md:py-24">

      {/* UN watermark background */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right opacity-[0.05]"
        // style={{
        //   backgroundImage: `url(${unBg.src})`,
        //   backgroundSize: "520px",
        // }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* LEFT TEXT */}
        <div className="order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2C3E50] leading-snug mb-6">
            {title}
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
           { subtitle1}
          </p>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            {subtitle2}
           
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-1 lg:order-2 flex justify-center mt-8 lg:mt-0">
          <Image
            src={cardimage}
            alt="Conference city"
            className="w-full max-w-[750px] sm:max-w-[700px] md:max-w-[720px] lg:max-w-[750px] rounded-3xl shadow-2xl object-cover"
          />

          {/* Floating Card */}
       <div className="absolute -top-6 -left-6 sm:-top-4 sm:-left-4 md:-top-5 md:-left-5 bg-white shadow-2xl px-4 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 flex items-center gap-3 sm:gap-4 md:gap-5 floating-card rounded-tr-2xl rounded-bl-2xl">
  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-br-2xl rounded-tl-2xl flex items-center justify-center bg-blue-100 text-blue-700 text-lg sm:text-2xl md:text-3xl">
    👤
  </div>
  <div className="text-center sm:text-left" ref={ref}>
<p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b1d4d]">
  {inView ? <>+<CountUp start={1} end={500} duration={2.5} /></> : "+0"}
</p>


    <p className="text-xs sm:text-sm md:text-base text-gray-500">
      Participants
    </p>
     <p className="text-xs sm:text-sm md:text-base text-gray-500">
      expected
    </p>
  </div>
</div>

        </div>

      </div>

      {/* Floating animation */}
      <style jsx>{`
        .floating-card {
          animation: float 3.5s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(0px); }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .floating-card {
            top: -1rem;
            left: -1rem;
            transform: none;
            padding: 2px 6px;
            gap: 2px;
          }
        }

        @media (max-width: 640px) {
          .floating-card {
            top: -0.5rem;
            left: -0.5rem;
            padding: 1px 4px;
            gap: 1px;
          }
        }
      `}</style>
    </section>
  );
};

export default DestinationParticipantsExpected;
