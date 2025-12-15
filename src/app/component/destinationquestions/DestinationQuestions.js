"use client";

import React from "react";
import Link from "next/link";
import { FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

const DestinationQuestions = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Animated Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 text-center shadow-md hover:shadow-xl transition-shadow"
        >

          {/* Floating gradient blob */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          />

          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative z-10 w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-inner"
          >
            <FaComments className="text-2xl" />
          </motion.div>

          {/* Heading */}
          <h2 className="relative z-10 text-xl sm:text-2xl font-semibold text-[#0b1d4d] mb-3 leading-snug">
            Are you an institutional partner? <br />
            School, University, or Professor?
          </h2>

          {/* Text */}
          <p className="relative z-10 text-sm sm:text-base text-gray-600 mb-7">
            Questions about MUN? Talk with our Specialist
          </p>

          {/* Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10"
          >
            <Link href="/contact">
              <button className="inline-flex cursor-pointer items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition rounded-lg text-white text-sm sm:text-base font-medium shadow-lg">
                Talk with us
              </button>
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default DestinationQuestions;
