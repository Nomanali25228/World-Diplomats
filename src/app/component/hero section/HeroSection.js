'use client';
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

/* ===================== DATA ===================== */
const destinations = [
  "Istanbul, Turkey",
  "Dubai, UAE",
  "Kuala Lumpur, Malaysia",
  "London, UK",
  "Riyadh, Saudi Arabia",
];

const cities = [
  'Istanbul, Turkey',
  'London, UK',
  'Riyadh, Saudi Arabia',
  'Baku, Azerbaijan',
  'Dubai, UAE',
  'New York, USA',
];

/* ===================== Destinations Marquee ===================== */
const DestinationsMarquee = () => {
  return (
    <div className="overflow-hidden w-full py-2 bg-transparent">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {[...destinations, ...destinations].map((dest, i) => (
          <span
            key={i}
            className="text-[#0d1b4c] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold px-4"
          >
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
          <source src="/video/three.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0d1b33]/70 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-4xl w-full px-4 sm:px-6 text-center flex flex-col items-center">

          {/* WORLD DIPLOMATS */}
          <div data-aos="fade-up" className="mb-2">
            <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest">
              WORLD <span>DIPLOMATS</span>
            </span>
          </div>

          {/* MAIN HEADING */}
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            className="
              text-center font-bold leading-tight
              text-[26px]
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              whitespace-normal sm:whitespace-nowrap
            "
          >
            <span className="text-white">
              Crowning the Future{" "}
            </span>
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
  className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-200"
>
  26<sup className="text-[0.6em] align-super">th</sup> to 29
  <sup className="text-[0.6em] align-super">th</sup> March, 2026 at Istanbul, Turkiye
</p>

          {/* TYPING CITY */}
          <div className="text-center py-6">
            <h1
              data-aos="fade-down"
              className="text-3xl lg:text-4xl font-bold text-white bg-clip-text text-transparent"
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
              <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg">
                Explore Conferences
              </button>
            </Link>

            <Link href="/Register-Now" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/50 hover:bg-white/20 backdrop-blur-md transition font-semibold">
                Register Now
              </button>
            </Link>
          </div>

        </div>
      </header>

      {/* Marquee */}
      <div className="mt-6">
        <DestinationsMarquee />
      </div>
    </>
  );
};

export default HeroSection;
