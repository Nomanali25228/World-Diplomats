"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useDestination } from '@/app/context/DestinationContext';
import { motion, AnimatePresence } from "framer-motion";
import CountdownTimer from "../countdown-timer/CountdownTimer";

const DestinationHeroSection = ({
  title,
  subtitle,
  dates,
  agenda,
  bgImage,
  registerlinke,
  pricinglink,
  targetDate, // New prop for countdown
}) => {
  const router = useRouter();
  const { selectDestination } = useDestination();

  const handleRegisterClick = (e) => {
    // if this component has title/subtitle, set destination in context and navigate
    if (title && subtitle) {
      const dest = `${title}, ${subtitle}`;
      selectDestination(dest, true);
      e.preventDefault();
      router.push('/Register-Now');
      return;
    }
  };

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
          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl lg:text-2xl text-blue-200 tracking-widest uppercase">
            {dates}
          </p>




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
              onClick={handleRegisterClick}
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
