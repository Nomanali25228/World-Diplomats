"use client";
import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const ContactUS = () => {
  const items = [
    {
      icon: <MdEmail size={22} className="text-[#1a2a9c]" />,
      title: "Email",
      value: (
        <a
          href="mailto:info@worlddiplomats.org"
          className="hover:text-[#1a2a9c] transition hover:underline"
        >
          info@worlddiplomats.org
        </a>
      ),
    },

    {
      icon: <MdPhone size={22} className="text-[#1a2a9c]" />,
      title: "Phone",
      value: (
        <a
          href="tel:+447490344639"
          className="hover:text-[#1a2a9c] transition hover:underline"
        >
          +44 7490 344639
        </a>
      ),
    },


    {
      icon: <FaWhatsapp size={22} className="text-[#1a2a9c]" />,
      title: "Whatsapp",
      value: (
        <a
          href="https://wa.me/447490344639"
          target="_blank"
          className="hover:text-[#1a2a9c] transition hover:underline"
        >
          +44 7490 344639
        </a>
      ),
    },

    {
      icon: <FaTiktok size={22} className="text-[#1a2a9c]" />,
      title: "TikTok",
      value: (
        <a
          href="https://www.tiktok.com/@worlddiplomatsmun"
          target="_blank"
          className="hover:text-[#1a2a9c] transition hover:underline"
        >
          tiktok/@worlddiplomatsmun
        </a>
      ),
    },

    {
      icon: <FaFacebook size={22} className="text-[#1a2a9c]" />,
      title: "Facebook",
      value: (
        <a
          href="https://www.facebook.com/worlddiplomats"
          target="_blank"
          className="hover:text-[#1a2a9c] transition hover:underline"
        >
          facebook/worlddiplomats
        </a>
      ),
    },
    {
      icon: <FaInstagram size={22} className="text-[#1a2a9c]" />,
      title: "Instagram",
      value: (
        <a
          href="https://www.instagram.com/worlddiplomatsmun"
          target="_blank"
          className="hover:text-[#1a2a9c] transition hover:underline"
        >
          instagram/worlddiplomatsmun
        </a>
      ),
    },
  ];

  return (
    <section className="py-10 bg-[#F1F2F4]">

      {/* ================= TITLE ================= */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                       font-bold text-[#0d1b4c]">
          Contact <span className="text-[#b00000]">US</span>

        </h2>


        <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-2">
          WE ARE HERE TO HELP
        </p>

        {/* PREMIUM DIVIDER */}

      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 p-6">

        {/* LEFT — Google Map */}
        <div className="w-full lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2071.7566587553797!2d-0.0913811241433754!3d51.52735020924676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca67029c68f%3A0x84546ca9a80ef179!2s128%20City%20Rd%2C%20London%20EC1V%202NX%2C%20UK!5e1!3m2!1sen!2s!4v1768235368324!5m2!1sen!2s"
            width="100%"
            height="350"
            className="rounded-3xl border border-gray-200 shadow-lg"
            loading="lazy"
          ></iframe>
        </div>

        {/* RIGHT — Contact List */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border-l-2 border-[#1a2a9c] pl-4"
            >
              <div className="text-[#1a2a9c] mt-1">{item.icon}</div>
              <div>
                <h3 className="text-[#0d1b4c] text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContactUS;
