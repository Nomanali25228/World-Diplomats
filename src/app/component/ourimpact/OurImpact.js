'use client';
import React, { useEffect, useRef, useState } from "react";

const statsLeft = [
  { value: 50, label: "Industry Leaders and Professionals as Speakers" },
  { value: 15, label: "Government Officials Engaged" },
];

const statsRight = [
  { value: 50, label: "Conferences" },
  { value: 10000, label: "Participants" },
  { value: 120, label: "Nationalities" },
  { value: 10, label: "Destinations" },
];

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

const OurImpact = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-14 px-8  sm:px-12 max-w-7xl mx-auto">

      {/* MOBILE → SHOW OUR IMPACT AT TOP */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 md:hidden">
        OUR <span className="text-blue-600">IMPACT</span>
      </h2>

      {/* FULL WRAPPER CENTERED */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-20">

        {/* LEFT SIDE */} 
        <div className="flex flex-col w-full md:w-auto gap-10 text-center">

          {/* Top Card */}
          <div className="bg-white rounded-lg shadow-xl border-t-4 border-red-400 p-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
              {useCountUp(statsLeft[0].value, visible)}+
            </h3>
            <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">{statsLeft[0].label}</p>
          </div>

          {/* DESKTOP → SHOW OUR IMPACT IN MIDDLE */}
          <h2 className="hidden md:block text-3xl sm:text-4xl font-bold">
            OUR <span className="text-blue-600">IMPACT</span>
          </h2>

          {/* Bottom Card */}
          <div className="bg-white rounded-lg shadow-xl border-t-4 border-red-400 p-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
              {useCountUp(statsLeft[1].value, visible)}+
            </h3>
            <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">{statsLeft[1].label}</p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-6 place-items-center w-full md:w-auto">
          {statsRight.map((item, i) => {
            const count = useCountUp(item.value, visible);

            return (
              <div
                key={i}
                className="bg-white rounded-lg shadow-xl border-t-4 border-red-400
                p-6 text-center w-full max-w-[180px]
                min-h-[120px] flex flex-col items-center justify-center"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">
                  {count}+
                </h3>
                <p className="text-gray-600 mt-1 text-xs sm:text-sm md:text-base">{item.label}</p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default OurImpact;
