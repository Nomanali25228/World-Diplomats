"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaPaperPlane, FaWhatsapp, FaTimes, FaSmile } from "react-icons/fa";
import Image from "next/image";
import logo from "../../../../public/img/logo.png";

const Whatsapp = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [message, setMessage] = useState(
    "Hello! I have questions regarding World Diplomats."
  );
  const [showEmojis, setShowEmojis] = useState(false);
  const chatRef = useRef(null);

  const phoneNumber = "+447487302322";

  // ✅ FIX: NO useEffect, NO setState
  const isMobile =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatRef.current &&
        !chatRef.current.contains(event.target)
      ) {
        setIsChatVisible(false);
        setShowEmojis(false);
      }
    };

    if (isChatVisible || showEmojis) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatVisible, showEmojis]);

  const getWhatsAppUrl = (msg) => {
    const encoded = encodeURIComponent(msg);
    return isMobile
      ? `https://wa.me/${phoneNumber}?text=${encoded}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encoded}`;
  };

  const emojis = ["😊", "😇", "❤️", "👍", "🎉", "😢"];

  return (
    <div className="relative">
      {/* Floating Button */}
      <button
        onClick={() => setIsChatVisible((prev) => !prev)}
        className="fixed bottom-20 right-5 z-50 flex items-center justify-center bg-green-500 text-white w-14 h-14 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </button>

      {/* Chat Box */}
      {isChatVisible && (
        <div
          ref={chatRef}
          className="fixed bottom-[150px] right-4 z-50 bg-[#ece5dd] w-64 sm:w-80 rounded-lg shadow-2xl border"
        >
          {/* Header */}
          <div className="bg-[#075e54] text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="World Diplomats"
                className="rounded-full"
                width={32}
                height={32}
              />
              <div className="ml-3">
                <p className="text-sm font-bold">WORLD DIPLOMATS</p>
                <p className="text-xs text-gray-200">Online</p>
              </div>
            </div>
            <button onClick={() => setIsChatVisible(false)}>
              <FaTimes size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-3 h-40 overflow-y-auto text-sm space-y-3">
            <div className="bg-white p-2 rounded-lg max-w-[75%]">
              Hello! How can we assist you today?
            </div>
            <div className="bg-[#dcf8c6] p-2 rounded-lg max-w-[75%] ml-auto">
              Hi, I need help with registration.
            </div>
          </div>

          {/* Input */}
          <div className="bg-white flex items-center p-2 relative">
            <button
              onClick={() => setShowEmojis((p) => !p)}
              className="text-gray-500 mr-2"
            >
              <FaSmile size={20} />
            </button>

            {showEmojis && (
              <div className="absolute bottom-14 left-2 bg-white border rounded-lg p-2 flex space-x-1 z-10">
                {emojis.map((e, i) => (
                  <button
                    key={i}
                    onClick={() => setMessage((m) => m + e)}
                    className="text-lg"
                  >
                    {e}
                  </button>
                ))}
              </div>
            )}

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow text-sm px-2 py-2 bg-gray-100 rounded resize-none outline-none"
              rows={1}
            />

            <a
              href={getWhatsAppUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#075e54] ml-2"
            >
              <FaPaperPlane size={22} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Whatsapp;
