"use client";
import React, { useEffect, useRef } from "react";

import istanbul from "../../../../public/img/Istanbul-Hero-Section.jpg";
import dubai from "../../../../public/img/Dubai-Hero-Section.jpg";
import malaysia from "../../../../public/img/Malaysia-Hero-Section.jpg";
import london from "../../../../public/img/London-Hero-Section1.jpg";
import riyadh from "../../../../public/img/Riyadh-Hero-Section.jpg";

const destinations = [
  {
    title: "Istanbul, Turkey",
    image: istanbul,
    description:
      "Where East meets West, a cultural hub with rich history and scenic landscapes.",
  },
  {
    title: "Dubai, UAE",
    image: dubai,
    description:
      "A futuristic global city known for innovation, culture, and skyscrapers.",
  },
  {
    title: "Kuala Lumpur, Malaysia",
    image: malaysia,
    description:
      "A modern Asian capital blending tradition with skyline architecture.",
  },
  {
    title: "London, UK",
    image: london,
    description:
      "A global hub of politics, finance, and culture with iconic landmarks.",
  },
  {
    title: "Riyadh, Saudi Arabia",
    image: riyadh,
    description:
      "The heart of Saudi Arabia, rapidly transforming into a global city.",
  },
];

const Card = ({ item }) => {
  return (
    <div className="w-[320px] sm:w-[380px] md:w-[420px] h-[420px] flex-shrink-0">
      <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/10">
        <div className="group h-full w-full [perspective:1200px]">
          <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

            {/* FRONT */}
            <div className="absolute inset-0 [backface-visibility:hidden]">
              <img
                src={item.image.src}
alt="Stage image"
                className="w-full h-full object-cover"
              />
              <div className="absolute justify-center flex bottom-0 w-full bg-[#0d1b4c]/80 p-4 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </div>

            {/* BACK */}
            <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
  <img
    src={item.image.src}
alt="Stage image"
    className="w-full h-full object-cover brightness-50"
  />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/95 via-[#1a2a9c]/25 to-[#b00000]/80"></div>

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
    <h3
      className="
        font-bold
        mb-4
        text-lg
        sm:text-xl
        md:text-2xl
        lg:text-3xl
      "
    >
      {item.title}
    </h3>

    <p
      className="
        leading-relaxed
        text-sm
        sm:text-base
        md:text-lg
        lg:text-xl
        max-w-[280px]
        sm:max-w-[320px]
        md:max-w-[380px]
      "
    >
      {item.description}
    </p>
  </div>
</div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default function IconicDestinationsHorizontal() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;

      const start = sectionTop;
      const end = sectionTop + sectionHeight - window.innerHeight;

      if (scrollY >= start && scrollY <= end) {
        const progress = (scrollY - start) / (end - start);
        const maxTranslate =
          trackRef.current.scrollWidth - window.innerWidth;

        trackRef.current.style.transform = `translateX(-${
          progress * maxTranslate
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= HEADING ================= */}
      <section className="pt-10 text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d1b4c]">
          Iconic Global <span className="text-[#b00000]">Destinations</span>
        </h2>
      </section>

      {/* ================= HORIZONTAL SCROLL SECTION ================= */}
      <section
        ref={sectionRef}
        className="relative h-[300vh] bg-white"
      >
        {/* STICKY VIEW */}
        <div className="sticky top-10 h-screen overflow-hidden flex items-center">
          <div
            ref={trackRef}
            className="flex gap-8 px-10 will-change-transform"
          >
            {destinations.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
