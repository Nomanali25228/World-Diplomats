"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../../public/img/logo3.png";
// import unbg from "../../../../public/img/logo2.png"; // UN Logo background

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

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
          <Link href="/">
          <Image src={logo} alt="Logo" className="w-24 mb-4" />
          </Link>
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
            <li className="cursor-pointer hover:text-[#60A5FA]"><Link href="/Istanbul-Turkey">Istanbul, Turkey</Link></li>
            <li className="cursor-pointer hover:text-[#60A5FA]"><Link href="/Dubai-UAE">Dubai, UAE</Link></li>
            <li className="cursor-pointer hover:text-[#60A5FA]"><Link href="/Kuala-Lumpur-Malaysia">Kuala Lumpur, Malaysia</Link></li>
            <li className="cursor-pointer hover:text-[#60A5FA]"><Link href="">London, UK</Link></li>
            <li className="cursor-pointer hover:text-[#60A5FA]"><Link href="">Riyadh, Saudi Arabia</Link></li>
          </ul>
        </div>

        {/* INFORMATION SECTION */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Information
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:text-[#60A5FA]"><Link href="/About-US">About Us</Link></li>
            <li className="cursor-pointer hover:text-[#60A5FA]"><Link href="/Pricing">Pricing</Link></li>
            <li className="cursor-pointer hover:text-[#60A5FA]"><Link href="/FAQs">FAQs</Link></li>
            <li className="cursor-pointer hover:text-[#60A5FA]"><Link href="/Terms&Conditions">Terms and Conditions</Link></li>
            <li className="cursor-pointer hover:text-[#60A5FA]"><Link href="/Privacy-Policy">Privacy Policy</Link></li>
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
<div className="relative mt-12 border-t border-gray-700 pt-4">
  <div className="max-w-7xl mx-auto relative text-sm text-gray-400">

    {/* Center – Copyright */}
    <div className="text-center">
      © Copyright <span className="text-white">World Diplomats</span>. All
      Rights Reserved
      <br />
      A project of <span className="text-blue-400">World Diplomats</span>
    </div>

    {/* Right Bottom – Design & Development */}
    <div className="mt-4 md:mt-0 md:absolute md:right-0 md:bottom-0 text-center md:text-right">
      Design & Development by{" "}
      <a
        href="mailto:websitedeveloper431@gmail.com"
        className="text-white hover:underline"
      >
        Noman & Abdullah
      </a>
    </div>

  </div>
</div>

    </footer>
  );
};

export default Footer;
