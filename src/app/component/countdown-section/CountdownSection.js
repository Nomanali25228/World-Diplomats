"use client";

import React from "react";
import CountdownTimer from "../countdown-timer/CountdownTimer";

const CountdownSection = ({ targetDate }) => {
    if (!targetDate) return null;

    return (
        //  <section className="relative -mt-24 sm:-mt-32 z-30 pb-12 sm:pb-16 bg-transparent">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //         <CountdownTimer targetDate={targetDate} />
        //     </div>
        // </section>
        <section className="pt-6 pb-12 sm:pt-8 sm:pb-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <CountdownTimer targetDate={targetDate} />
            </div>
        </section>
    );
};

export default CountdownSection;
