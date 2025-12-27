'use client';
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

// ---------------- Destinations Marquee ----------------
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
  <div className="flex gap-12 whitespace-nowrap animate-marquee">
    {destinations.map((dest, i) => (
      <span
        key={i}
        className="text-[#0d1b4c] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold px-4"
      >
        {dest}
      </span>
    ))}
    {destinations.map((dest, i) => (
      <span
        key={i + destinations.length}
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

// ---------------- Letter Component ----------------
const Letter = ({ char, mousePos }) => {
  const letterRef = useRef(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const update = () => {
      if (!letterRef.current) return;

      const rect = letterRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = mousePos.x - centerX;
      const dy = mousePos.y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const weight = Math.min(900, Math.max(400, 900 - dist * 5));
      const scale = 1 + Math.max(0, (120 - dist) / 600);

      setStyle({
        fontVariationSettings: `'wght' ${weight}`,
        transform: `scale(${scale})`,
        transformOrigin: 'center center',
        display: 'inline-flex',
        backfaceVisibility: 'hidden',
        transition: 'font-variation-settings 0.1s linear, transform 0.1s linear',
      });
    };

    const frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [mousePos]);

  return <span ref={letterRef} style={style}>{char}</span>;
};

// ---------------- LetterHeading Component ----------------
const LetterHeading = ({ text, className, delay = 0 }) => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <h1 ref={containerRef} data-aos="fade-up" data-aos-delay={delay} className={className}>
      {text.split('').map((char, i) => {
        if (char === ' ') {
          return <span key={i} style={{ display: 'inline-block', width: '0.35em' }}>&nbsp;</span>;
        }
        return <Letter key={i} char={char} mousePos={mousePos} />;
      })}
    </h1>
  );
};

// ---------------- HeroSection Component ----------------
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
            className="inline-block -mt-8 mb-8 px-4 sm:px-5 py-1 sm:py-2 rounded-full bg-white/20 backdrop-blur-md text-xs sm:text-sm font-semibold tracking-wide"
          >
            WORLD <span className=' text-[#EB9336]'> DIPLOMATS </span>
          </div>

          {/* Headings */}



          {/* <LetterHeading
            text="Crowning the Future of"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-tight"
          />

          <LetterHeading
            text="Global Diplomats"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-tight text-blue-300 mt-2 sm:mt-3"
            delay={150}
          /> */}


          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-tight"
          >
            Crowning the Future of

          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent 
              drop-shadow-[0_0_18px_rgba(59,130,246,0.35)] mt-2 sm:mt-3"
          >
            Global  Diplomats
          </h1>


          {/* Sub Text */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed px-2 sm:px-0"
          >
            Join the world{"'"}s most prestigious youth diplomatic network and connect with leaders from over 150 countries.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mt-6 sm:mt-8 px-4 w-full"
          >
            <Link href="/Destinations" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition text-sm sm:text-base md:text-base lg:text-lg">
                Explore Conferences
              </button>
            </Link>

            <Link href="/Register-Now" className="w-full sm:w-auto">
              <button className="w-full cursor-pointer sm:w-auto px-5 sm:px-6 py-3 rounded-full border border-white/50 hover:bg-white/20 backdrop-blur-md font-semibold transition text-sm sm:text-base md:text-base lg:text-lg">
                Register Now
              </button>
            </Link>
          </div>

        </div>
      </header>

      <div className='mt-6'>
        <DestinationsMarquee />
      </div>
    </>
  );
};

export default HeroSection;
