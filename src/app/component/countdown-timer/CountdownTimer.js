"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        completed: false,
    });

    const calculateTimeLeft = useCallback(() => {
        const now = new Date();
        const target = new Date(targetDate);
        let difference = target - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0, completed: true };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return { days, hours, minutes, seconds, completed: false };
    }, [targetDate]);

    useEffect(() => {
        // Update every second
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Initial calculation
        setTimeLeft(calculateTimeLeft());

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4"
            >
                <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                    EVENT DESTINATION
                </h3>
            </motion.div>

            {/* Countdown Cards */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
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
                        <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Value */}
                            <div className="relative z-10 text-center">
                                <motion.p
                                    key={unit.value}
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 sm:mb-3"
                                >
                                    {unit.value}
                                </motion.p>

                                {/* Label */}
                                <p className="text-sm sm:text-base font-semibold text-blue-100 uppercase tracking-wider">
                                    {unit.label}
                                </p>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-b-2xl" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CountdownTimer;
