"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = (target) => {
        const now = new Date();
        const tgt = new Date(target);
        let difference = tgt - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0, completed: true };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds, completed: false };
    };

    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (timeLeft.completed) {
        return (
            <div className="mt-8 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    🎉 Event Has Started! 🎉
                </p>
            </div>
        );
    }

    const timeUnits = [
        { value: timeLeft.days, label: "Days" },
        { value: String(timeLeft.hours).padStart(2, "0"), label: "Hours" },
        { value: String(timeLeft.minutes).padStart(2, "0"), label: "Minutes" },
        { value: String(timeLeft.seconds).padStart(2, "0"), label: "Seconds" },
    ];

    return (
        <div className=" w-full">
            {/* Countdown Title */}


            {/* Countdown Cards */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid mt-4 grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
            >
                {timeUnits.map((unit, index) => (
                    <motion.div
                        key={unit.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className="relative group"
                    >
                        {/* Card */}
                        <div className="relative bg-gradient-to-b from-[#e3f2fd] to-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-white/60">

                            {/* Decorative Blobs */}
                            <div
                                className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-30"
                                style={{ backgroundColor: "#b00000" }}
                            ></div>
                            <div
                                className="absolute top-10 -left-6 w-10 h-10 rounded-full opacity-20 bg-[#0D1B4C]"
                            ></div>

                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Value */}
                            <div className="relative z-10 text-center">
                                <motion.p
                                    key={unit.value}
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0d1b4c] mb-2 sm:mb-3"
                                >
                                    {unit.value}
                                </motion.p>

                                {/* Label */}
                                <p className="text-sm sm:text-base font-semibold text-gray-500 uppercase tracking-wider">
                                    {unit.label}
                                </p>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1  rounded-b-2xl opacity-80" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CountdownTimer;
