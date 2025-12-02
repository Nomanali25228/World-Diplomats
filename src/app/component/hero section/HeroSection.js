'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const DestinationsMarquee = () => {
  const destinations = [
    "Istanbul, Turkey",
    "Dubai, UAE",
    "Kuala Lumpur, Malaysia",
    "London, UK",
    "Riyadh, Saudi Arabia",
  ];

  return (
    <div className="overflow-hidden w-full py-2 bg-transparent">
      <div
        className="flex gap-12 whitespace-nowrap animate-marquee"
      >
        {destinations.map((dest, i) => (
          <span key={i} className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold px-4">
            {dest}
          </span>
        ))}
        {destinations.map((dest, i) => (
          <span key={i + destinations.length} className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-semibold px-4">
            {dest}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <header className="relative h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/three.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0d1b33]/70 backdrop-blur-sm z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 text-center max-w-4xl px-4 sm:px-6 md:px-8 lg:px-10 mt-16 sm:mt-20 flex flex-col items-center">
          
          {/* Top Badge */}
          <div
            data-aos="fade-up"
            className="inline-block mb-4 px-4 sm:px-5 py-1 sm:py-2 rounded-full bg-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wide"
          >
            WORLD DIPLOMATS
          </div>

          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-tight"
          >
            Crowning the Future of
          </h1>

          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-tight text-blue-300 mt-2 sm:mt-3"
          >
            Global Diplomats
          </h1>

          {/* Sub Text */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2 sm:px-0"
          >
            Join the world's most prestigious youth diplomatic network and connect with leaders from over 150 countries.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mt-6 sm:mt-8 px-4 w-full"
          >
            <Link href="/conferences" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition text-sm sm:text-base md:text-base lg:text-lg">
                Explore Conferences
              </button>
            </Link>

            <Link href="/RegisterNow" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full border border-white/50 hover:bg-white/20 backdrop-blur-md font-semibold transition text-sm sm:text-base md:text-base lg:text-lg">
                Register Now
              </button>
            </Link>
          </div>

        </div>

      </header>


<div className='mt-6'>
        <DestinationsMarquee  />
  </div>
    </>
  );
};

export default HeroSection;
