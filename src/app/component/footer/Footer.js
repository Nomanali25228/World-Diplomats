"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../../public/img/logo1.png";
// import unbg from "../../../../public/img/logo2.png"; // UN Logo background

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative text-gray-300 py-10 px-6"
      style={{ backgroundColor: "#071429" }}
    >
      {/* Background UN Logo */} 
       {/* <div className="absolute inset-0 opacity-10 bg-center bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${unbg.src})` }}
      ></div> */}

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">

        {/* LEFT — Logo + Description */}
        <div>
          <Image src={logo} alt="Logo" className="w-24 mb-4" />
          <p className="text-sm leading-relaxed">
            The United Nations simulation organised by <b>World Diplomats</b> is
            globally recognised for its exceptional quality and unmatched
            commitment to preparing students for real diplomatic excellence.
          </p>
        </div>

        {/* CENTER — United Nations Simulations */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            United Nations Simulations
          </h3>
          <ul className="space-y-3 text-sm ">
            <li className="cursor-pointer hover:text-[#60A5FA]">Istanbul, Turkey</li>
            <li className="cursor-pointer hover:text-[#60A5FA]">Dubai, UAE</li>
            <li className="cursor-pointer hover:text-[#60A5FA]">Kuala Lumpur, Malaysia</li>
            <li className="cursor-pointer hover:text-[#60A5FA]">London, UK</li>
            <li className="cursor-pointer hover:text-[#60A5FA]">Riyadh, Saudi Arabia</li>
          </ul>
        </div>

        {/* INFORMATION SECTION */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Information
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:text-[#60A5FA]">Pricing</li>
            <li className="cursor-pointer hover:text-[#60A5FA]">Terms and Conditions</li>
            <li className="cursor-pointer hover:text-[#60A5FA]">FAQs</li>
            <li className="cursor-pointer hover:text-[#60A5FA]">Privacy Policy</li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Get In Touch
          </h3>

        <p className="text-sm leading-relaxed">
  <strong>Email:</strong>{" "}
  <a
    href="mailto:info@worlddiplomats.org"
    className="text-blue-400 hover:underline"
  >
    info@worlddiplomats.org
  </a>
  <br />

  <strong>Phone Number:</strong>{" "}
  <a
    href="tel:+10000000000"
    className="text-blue-400 hover:underline"
  >
    +1 (000) 000-0000
  </a>
  <br />

  <strong>Address:</strong> Coming Soon
</p>


          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaLinkedinIn className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative text-center text-gray-400 text-sm mt-12 border-t border-gray-700 pt-4">
        © Copyright <span className="text-white">World Diplomats</span>. All
        Rights Reserved
        <br />
        A project of <span className="text-blue-400">World Diplomats</span>
      </div>
    </footer>
  );
};

export default Footer;
