import React from "react";
import logo from '../../../../public/img/logo.png';
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#071429] text-gray-300  py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT: LOGO + DESCRIPTION */}
       <div className="flex flex-wrap items-start gap-4">
  {/* Logo */}
  <div className="flex-shrink-0 ">
    <Image
      src={logo}
      alt="Logo"
      className="w-24"
    />
  </div>

  {/* Text */}
  <p className="text-sm leading-relaxed max-w-[calc(100%-6rem)]">
    IstanbulMUN is an international platform where participants will experience 
    the truest simulation of the United Nations. We aim to provide the most immersive 
    and adventurous experience to our delegates. Join us now for a journey of a lifetime.
  </p>
</div>


        {/* CENTER: USEFUL LINKS */}
        {/* CENTER: USEFUL LINKS */}
<div>
  <h3 className="text-white text-lg font-semibold border-b border-blue-500 pb-2 mb-4">
    USEFUL LINKS
  </h3>
  <ul className="space-y-3 text-sm">

    <li className="pb-2 border-b border-gray-600 flex items-center gap-2">
      <span className="text-blue-400">›</span> Home
    </li>

    <li className="pb-2 border-b border-gray-600 flex items-center gap-2">
      <span className="text-blue-400">›</span> Pricing
    </li>

    <li className="pb-2 border-b border-gray-600 flex items-center gap-2">
      <span className="text-blue-400">›</span> Overview
    </li>

    <li className="pb-2 border-b border-gray-600 flex items-center gap-2">
      <span className="text-blue-400">›</span> Terms & Conditions
    </li>

  </ul>
</div>


        {/* RIGHT: CONTACT INFO */}
        <div>
          <h3 className="text-white text-lg font-semibold border-b border-blue-500 pb-2 mb-4">
            CONTACT US
          </h3>

          <p className="text-sm leading-relaxed">
            1309 Coffeen Avenue STE 1200 <br />
            Sheridan, WY, 82801 <br />
            United States <br />
            <strong>Phone:</strong> +1 (424) 535-1631 <br />
            <strong>Email:</strong> support@istanbulmun.com
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaWhatsapp className="cursor-pointer hover:text-white" />
            <FaLinkedinIn className="cursor-pointer hover:text-white" />
            <FaEnvelope className="cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-5">
        © Copyright <span className="text-white">World Diplomats</span>.
        All Rights Reserved
        <br />
        A project of <span className="text-blue-400"> World Diplomats</span>
        
        
      </div>
      
    </footer>
  );
};

export default Footer;
