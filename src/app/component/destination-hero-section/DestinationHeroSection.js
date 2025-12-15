"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const DestinationHeroSection = ({
  title,
  subtitle,
  dates,
  agenda,
  bgImage,
  registerlinke,
  pricinglink,
}) => {
  const targetDate = new Date("2026-03-29T23:59:59");
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    completed: false,
  });

  const calculateTimeLeft = () => {
    const now = new Date();
    let difference = targetDate - now;

    if (difference <= 0) {
      return { months: 0, weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0, completed: true };
    }

    let seconds = Math.floor((difference / 1000) % 60);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    let weeks = Math.floor(totalDays / 7);
    let days = totalDays % 7;

    let months = 0;
    if (weeks >= 4) {
      months = Math.floor(weeks / 4);
      weeks = weeks % 4;
    }

    return { months, weeks, days, hours, minutes, seconds, completed: false };
  };

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "M", value: timeLeft.months },
    { label: "W", value: timeLeft.weeks },
    { label: "D", value: timeLeft.days },
    { label: "H", value: timeLeft.hours },
    { label: "M", value: timeLeft.minutes },
    { label: "S", value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <Image
        src={bgImage}
        alt={title}
        fill
        priority
        className="object-cover absolute inset-0 -z-30 scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/10 -z-20"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-10 lg:px-20 text-white flex flex-col justify-center min-h-screen">

        
      

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-center sm:text-left"
        >

          <h1 className="font-extrabold leading-tight tracking-tight flex items-center flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
            <span className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl 
              bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent 
              drop-shadow-[0_0_18px_rgba(59,130,246,0.35)]">
              {title}
            </span>

            <span className="text-3xl sm:text-4xl  md:text-5xl lg:text-5xl text-white/90">
              {subtitle}
            </span>
          </h1>

          {/* Dates */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-sm md:text-base text-blue-200 tracking-widest uppercase">
            {dates}
          </p>

        {/* Countdown Cards */}


{/* <div className="mt-3 flex flex-wrap gap-3 sm:gap-4 text-white font-semibold text-sm sm:text-base md:text-lg justify-center sm:justify-start">
  {timeLeft.completed ? (
    <span className="text-lg sm:text-xl md:text-2xl">Event Started!</span>
  ) : (
    <>
      {timeLeft.months > 0 && <span>{timeLeft.months} Month{timeLeft.months > 1 ? "s" : ""}</span>}
      {timeLeft.weeks > 0 && <span>{timeLeft.weeks} Week{timeLeft.weeks > 1 ? "s" : ""}</span>}
      {timeLeft.days > 0 && <span>{timeLeft.days} Day{timeLeft.days > 1 ? "s" : ""}</span>}
      <span>{timeLeft.hours.toString().padStart(2, "0")}h</span>
      <span>{timeLeft.minutes.toString().padStart(2, "0")}m</span>
      <span>{timeLeft.seconds.toString().padStart(2, "0")}s</span>
    </>
  )}
</div> */}




          {/* Agenda */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed max-w-full sm:max-w-xl px-2 sm:px-0">
            {agenda}
          </p>

          {/* Actions */}
        <div className="
  mt-8 sm:mt-10
  flex flex-col sm:flex-row
  gap-4 sm:gap-8
  items-center
  justify-center sm:justify-start
">

  {/* Registration */}
  <Link
    href={registerlinke}
    className="
      group
      relative
      text-sm sm:text-base
      font-semibold
      text-white
      px-4 py-2
      rounded-lg
      transition
     
    "
  >
    <span className="relative z-10">
      Registrations →
    </span>

    {/* underline */}
    <span
      className="
        absolute left-4 right-4 -bottom-1 h-[2px]
        bg-blue-400
        scale-x-0 group-hover:scale-x-100
        origin-left
        transition-transform duration-300
      "
    />
  </Link>

  {/* Pricing */}
  <Link
    href={pricinglink}
    className="
      group
      relative
      text-sm sm:text-base
      font-semibold
      text-white/80 hover:text-white
      px-4 py-2
      rounded-lg
      transition
      
    "
  >
    <span className="relative z-10">
      Pricing & Details →
    </span>

    {/* underline */}
    <span
      className="
        absolute left-4 right-4 -bottom-1 h-[2px]
        bg-white/70
        scale-x-0 group-hover:scale-x-100
        origin-left
        transition-transform duration-300
      "
    />
  </Link>

</div>

        </motion.div>
      </div>
    </section>
  );
};

export default DestinationHeroSection;
