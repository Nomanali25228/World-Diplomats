"use client";
import React, { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://picsum.photos/800/500?random=1",
  "https://picsum.photos/800/500?random=2",
  "https://picsum.photos/800/500?random=3",
  "https://picsum.photos/800/500?random=4",
  "https://picsum.photos/800/500?random=5",
  "https://picsum.photos/800/500?random=6",
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeModal = () => setActiveIndex(null);

  const prevImage = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">

      {/* HEADING */}
      <div className="text-center mb-10">

        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     font-bold text-[#0d1b4c]"
        >
          OUR PREVIOUS <span className="text-[#b00000]">ENGAGEMENTS</span>
        </h2>

      
      </div>

      {/* SCROLLING GALLERY */}
      <div className="relative overflow-hidden">

        {/* Row 1 */}
        <div className="flex gap-4 animate-scroll-left whitespace-nowrap">
          {[...images, ...images].map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setActiveIndex(i % images.length)}
              className="cursor-pointer rounded-lg shadow object-cover
                w-28 h-20 sm:w-36 sm:h-24 md:w-44 md:h-32 lg:w-64 lg:h-40"
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-4 mt-6 animate-scroll-right whitespace-nowrap">
          {[...images, ...images].map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setActiveIndex(i % images.length)}
              className="cursor-pointer rounded-lg shadow object-cover
                w-28 h-20 sm:w-36 sm:h-24 md:w-44 md:h-32 lg:w-64 lg:h-40"
            />
          ))}
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
     {/* FULLSCREEN MODAL */}
{activeIndex !== null && (
  <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4">

    {/* Close Button */}
    <button
      onClick={closeModal}
      className="absolute top-6 right-6 text-white text-2xl cursor-pointer"
    >
      <FaTimes />
    </button>

    {/* Desktop Left Button */}
    <button
      onClick={prevImage}
      className="hidden md:block absolute left-6 text-white text-4xl cursor-pointer hover:scale-110 transition"
    >
      <FaChevronLeft />
    </button>

    {/* Content Wrapper */}
    <div className="flex flex-col items-center">

      {/* Image */}
      <img
        src={images[activeIndex]}
        className="max-w-full max-h-[70vh] rounded-xl shadow-2xl"
      />

      {/* Mobile Buttons (Below Image) */}
      <div className="flex md:hidden items-center gap-10 mt-6 text-white text-3xl">
        <button
          onClick={prevImage}
          className="cursor-pointer hover:scale-110 transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextImage}
          className="cursor-pointer hover:scale-110 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>

    {/* Desktop Right Button */}
    <button
      onClick={nextImage}
      className="hidden md:block absolute right-6 text-white text-4xl cursor-pointer hover:scale-110 transition"
    >
      <FaChevronRight />
    </button>
  </div>
)}

    </section>
  );
};

export default Gallery;
