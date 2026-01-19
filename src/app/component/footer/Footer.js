"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/img/logo4.png";
import unbg from "../../../../public/img/unbg.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";


const Footer = () => {
  return (
    <footer
      className="relative text-gray-300 px-6 pt-12 pb-2 min-h-[500px] overflow-hidden"
      style={{ backgroundColor: "#071429" }}
    >
      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f44]/80 to-[#071429]/95 z-0"></div>

      {/* UN WATERMARK (large screens only) */}
      <div
        className="hidden lg:block absolute inset-0 bg-right bg-no-repeat bg-contain opacity-[0.02] z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${unbg.src})`,
          backgroundSize: "45%",
        }}
      ></div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">

        {/* LOGO + ABOUT */}
        <div className="flex flex-col">
          <Link href="/" className="inline-block p-0 -mt-8 -ml-2">
            <Image
              src={logo}
              alt="Logo"
              className="h-24 sm:h-28 w-auto max-w-[220px] object-contain block"
            />
          </Link>
          <p className="text-base leading-relaxed max-w-sm -mt-4">
            The United Nations simulation organised by{" "}
            <b>World Diplomats</b> is globally recognised for its exceptional
            quality and strong commitment to preparing future diplomats for
            real-world leadership.
          </p>
        </div>

        {/* LOCATIONS */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">
            United Nations Simulations
          </h3>
          <ul className="space-y-4 text-base">
            {[
              ["Istanbul, Türkiye", "/Istanbul-Turkey"],
              ["Dubai, UAE", "/Dubai-UAE"],
              ["Kuala Lumpur, Malaysia", "/Kuala-Lumpur-Malaysia"],
              ["London, UK", "/London-UK"],
              ["Riyadh, Saudi Arabia", "/Riyadh-Saudi-Arabia"],
            ].map(([name, link]) => (
              <li key={name}>
                <Link
                  href={link}
                  className="relative inline-block after:block after:absolute after:w-0 after:h-[2px] after:bg-blue-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-400"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* INFO */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">
            Information
          </h3>
          <ul className="space-y-4 text-base">
            {[
              ["Terms & Conditions", "/Terms&Conditions"],
              ["Privacy Policy", "/Privacy-Policy"],
              ["About Us", "/About-US"],
              ["Pricing", "/Pricing"],
              ["FAQs", "/FAQs"],
            ].map(([name, link]) => (
              <li key={name}>
                <Link
                  href={link}
                  className="relative inline-block after:block after:absolute after:w-0 after:h-[2px] after:bg-blue-400 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full hover:text-blue-400"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT (IMAGE JESA ALIGNMENT) */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">
            Contact Us
          </h3>

          <div className="space-y-3 text-base">

            {/* EMAIL */}
            <div>
              <p className="font-semibold text-white">Email</p>
              <a
                href="mailto:info@worlddiplomats.org"
                className="hover:text-blue-400 hover:underline"
              >
                info@worlddiplomats.org
              </a>
            </div>

            {/* PHONE */}
            <div>
              <p className="font-semibold text-white">Phone</p>
              <a
                href="tel:+447490344639"
                className="hover:text-blue-400 hover:underline"
              >
                +44 7490 344639
              </a>
            </div>

            {/* ADDRESS */}
            <div>
              <p className="font-semibold text-white">Address</p>
              <p className="leading-relaxed">
                128, City Road, London,<br />
                United Kingdom, EC1V 2NX
              </p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-6 text-2xl">
            <a href="https://www.facebook.com/profile.php?id=61585300508391" target="_blank">
              <FaFacebookF className="hover:text-white transition" />
            </a>
            <a href="https://www.instagram.com/worlddiplomats_?igsh=M3ppbG5hcmp5bnJr" target="_blank">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a href="https://www.tiktok.com/@worlddiplomats" target="_blank">
              <FaTiktok className="hover:text-white transition" />
            </a>
            <a href="https://www.threads.net/@worlddiplomats_" target="_blank">
              <SiThreads className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative z-10 mt-24 border-t border-gray-700 pt-4 text-base text-gray-400 max-w-[1400px] mx-auto">
        <div className="text-center">
          © Copyright <span className="text-white">World Diplomats</span>. All
          Rights Reserved
          <br />
          A project of <span className="text-blue-400"> Globenix Youth Forum Ltd</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
