"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// DATA
const stats = [
  { value: 50, label: "Industry Leaders & Speakers" },
  { value: 100, label: "Participants Worldwide" },
  { value: 15, label: "Government Officials Engaged" },
  { value: 120, label: "Represented Nationalities" },
  { value: 500, label: "Total Events Organized" },
  { value: 10, label: "Global Destinations" },
];

// COUNT-UP HOOK
const useCountUp = (end, active) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let current = 0;
    const duration = 1500;
    const increment = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setCount(current);
    }, 16);

    return () => clearInterval(timer);
  }, [active, end]);

  return count;
};

// SINGLE CARD COMPONENT
const ImpactCard = ({ value, label, visible, index }) => {
  const count = useCountUp(value, visible);

  return (
    <div
      className="dancing-card bg-white border border-gray-200 rounded-3xl
                 shadow-lg hover:shadow-2xl transition-all duration-300 p-2
                 flex flex-col justify-center items-center overflow-hidden min-h-[120px] sm:min-h-[130px] relative"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Decorative Blob from OurYouthLeaders */}
      <div
        className="absolute -top-6 -right-6 w-20 h-20 sm:-top-8 sm:-right-8 sm:w-24 sm:h-24 lg:-top-10 lg:-right-10 lg:w-32 lg:h-32 rounded-full opacity-30"
        style={{ backgroundColor: "#b00000" }}
      ></div>
      <div
        className="absolute top-6 -left-4 w-10 h-10 sm:top-8 sm:-left-5 sm:w-12 sm:h-12 lg:top-10 lg:-left-6 lg:w-16 lg:h-16 rounded-full opacity-20 bg-[#0D1B4C]"
      ></div>

      <h3 className="font-extrabold relative z-10 text-[#0d1b4c]" style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
        {count}+
      </h3>
      <p className="text-gray-700 mt-2 relative z-10 flex text-sm sm:text-base" style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', textAlign: 'center' }}>
        {label}
      </p>
    </div>
  );
};

const OurImpact = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10 bg-[#F1F2F4] px-4 sm:px-8 lg:px-12  mx-auto relative" data-aos="fade-up">



      <div className="text-center mb-12">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     font-bold text-[#0d1b4c]"
          data-aos="fade-up"
        >
          Our <span className="text-[#b00000]">Impact</span>
        </h2>




        {/* Decorative line */}

      </div>


      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT BOX */}
        <div className="bg-white shadow-xl border border-gray-200 rounded-3xl p-6 sm:p-10 relative overflow-hidden flex flex-col justify-center" data-aos="fade-up" data-aos-delay="100">
          <div className="absolute -top-6 -right-6 w-20 h-20 sm:-top-8 sm:-right-8 sm:w-24 sm:h-24 lg:-top-10 lg:-right-10 lg:w-32 lg:h-32 rounded-full opacity-60" style={{ backgroundColor: '#b00000' }}></div>
          {/* Blue Blob match */}
          <div className="absolute top-6 -left-4 w-10 h-10 sm:top-8 sm:-left-5 sm:w-12 sm:h-12 lg:top-10 lg:-left-6 lg:w-16 lg:h-16 rounded-full opacity-20 bg-[#0D1B4C]"></div>

          <h3 className="mb-4 font-bold" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
            Why We Matter
          </h3>


          <p className="text-gray-700 leading-relaxed" style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>
            Over the years, we have shaped global dialogues by engaging high-level speakers,
            creating international opportunities, and opening doors for participants from 100+ nations.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-2 gap-2">
          {stats.map((stat, index) => (
            <ImpactCard key={index} {...stat} visible={visible} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .dancing-card {
          animation: cardFloat 5s ease-in-out infinite;
        }
        .dancing-card:hover {
          transform: translateY(-8px) scale(1.03);
        }
        @keyframes cardFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default OurImpact;
