'use client';
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

/* ===================== DATA ===================== */
const destinations = [
  "Istanbul, Türkiye",
  "Dubai, UAE",
  "Kuala Lumpur, Malaysia",
  "London, UK",
  "Riyadh, Saudi Arabia",
];

const cities = [
  "Istanbul, Türkiye",
  "Dubai, UAE",
  "Kuala Lumpur, Malaysia",
  "London, UK",
  "Riyadh, Saudi Arabia",
];

/* ===================== Destinations Marquee ===================== */
const DestinationsMarquee = () => {
  return (
    <div className="overflow-hidden w-full pt-5 bg-white  ">
      <div className="flex gap-16 whitespace-nowrap animate-marquee w-max">
        {[...destinations, ...destinations].map((dest, i) => (
          <span
            key={i}
            className="text-[#0d1b4c] text-xl sm:text-2xl md:text-3xl font-bold px-4"
          >
            {dest}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

/* ===================== Letter Hover Effect ===================== */
const Letter = ({ char, mousePos }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const dx = mousePos.x - (rect.left + rect.width / 2);
    const dy = mousePos.y - (rect.top + rect.height / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);

    const weight = Math.min(900, Math.max(400, 900 - dist * 5));
    const scale = 1 + Math.max(0, (120 - dist) / 600);

    setStyle({
      fontVariationSettings: `'wght' ${weight}`,
      transform: `scale(${scale})`,
      transition: 'all 0.1s linear',
      display: 'inline-flex',
    });
  }, [mousePos]);

  return <span ref={ref} style={style}>{char}</span>;
};

const LetterHeading = ({ text, className, delay = 0 }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <h1 data-aos="fade-up" data-aos-delay={delay} className={className}>
      {text.split('').map((char, i) =>
        char === ' ' ? (
          <span key={i} className="inline-block w-2" />
        ) : (
          <Letter key={i} char={char} mousePos={mousePos} />
        )
      )}
    </h1>
  );
};

/* ===================== Hero Section ===================== */
const HeroSection = () => {
  /* Typing Cities Effect */
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const currentCity = cities[currentCityIndex];
    let timer;

    if (!isDeleting && charIndex < currentCity.length) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev + currentCity[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 70);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else if (!isDeleting && charIndex === currentCity.length) {
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setCurrentCityIndex(prev => (prev + 1) % cities.length);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentCityIndex]);

  return (
    <>
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/one.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0d1b33]/70 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-4xl w-full px-4 sm:px-6 text-center flex flex-col items-center">

          {/* WORLD DIPLOMATS */}
          <div data-aos="fade-up" className="mb-2 sm:mb-2">
            <span className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold sm:font-bold tracking-widest uppercase sm:normal-case text-white">
              WORLD <span>DIPLOMATS</span>
            </span>
          </div>

          {/* MAIN HEADING */}
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="
              text-center font-black sm:font-bold leading-tight
              text-[32px] sm:text-4xl md:text-5xl lg:text-6xl
              uppercase sm:normal-case
              whitespace-normal sm:whitespace-nowrap
            "
          >
            <span className="text-white">
              Crowning the Future{" "}
            </span>
            <br className="sm:hidden" />
            <span
              className="
                bg-gradient-to-r from-blue-400 to-cyan-300
                bg-clip-text text-transparent
                drop-shadow-[0_0_18px_rgba(59,130,246,0.35)]
              "
            >
              Diplomats
            </span>
          </h1>

          {/* DATE */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-4 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-200"
          >
            22<sup className="text-[0.6em] align-super">nd</sup> to 25
            <sup className="text-[0.6em] align-super">th</sup> April, 2026 at Istanbul, Türkiye
          </p>

          {/* TYPING CITY */}
          <div className="text-center py-6">
            <h1
              data-aos="fade-down"
              className="text-4xl sm:text-3xl lg:text-4xl font-bold text-white"
            >
              {currentText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>

          {/* BUTTONS */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-col mt-5 sm:flex-row gap-3 sm:gap-6 w-full justify-center"
          >
            <Link href="/Destinations" className="w-full sm:w-auto">
              <button className="  w-full cursor-pointer sm:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg">
                Explore Conferences
              </button>
            </Link>

            <Link href="/Register-Now" className="w-full sm:w-auto">
              <button className="w-full cursor-pointer sm:w-auto px-6 py-3 rounded-full border border-white/50 hover:bg-white/20  transition font-semibold">
                Register Now
              </button>
            </Link>
          </div>

        </div>
      </header>

      {/* Marquee Section */}
      <div className="w-full flex justify-center mt-2">
        <div className="w-full max-w-[1920px]">
          <DestinationsMarquee />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
