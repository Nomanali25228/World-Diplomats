"use client";
import React from "react";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
];

const Gallery = () => {
  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">

      {/* Heading */}
     

       <div className="text-center mb-10">
        <p className="text-gray-500 text-lg mt-2">EVENT GALLERY</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50]" data-aos="fade-up">
          OUR PREVIOUS ENGAGEMENTS
        </h2>

          <div className="flex items-center justify-center gap-2 mt-3">
  <span className="w-12 h-[2px] bg-blue-400 side-line-animate"></span>
  <span className="w-3 h-3 bg-blue-500 rounded-full dot-animate"></span>
  <span className="w-12 h-[2px] bg-blue-400 side-line-animate"></span>
</div>
      </div>

      {/* SCROLLING GALLERY */}
      <div className="relative overflow-hidden">

        {/* Row 1 — moves left */}
        <div className="flex gap-4 animate-scroll-left whitespace-nowrap">
          {[...images, ...images].map((img, i) => (
            <img
              key={i}
              src={`https://picsum.photos/400/260?random=${i}`}
              className="
                rounded-lg shadow object-cover
                w-28 h-20         /* mobile */
                sm:w-36 sm:h-24   /* small tablet */
                md:w-44 md:h-32   /* large tablet */
                lg:w-64 lg:h-40   /* desktop */
              "
            />
          ))}
        </div>

        {/* Row 2 — moves right */}
        <div className="flex gap-4 mt-6 animate-scroll-right whitespace-nowrap">
          {[...images, ...images].map((img, i) => (
            <img
              key={i}
              src={`https://picsum.photos/400/260?random=${i + 20}`}
              className="
                rounded-lg shadow object-cover
                w-28 h-20         /* mobile */
                sm:w-36 sm:h-24   /* small tablet */
                md:w-44 md:h-32   /* large tablet */
                lg:w-64 lg:h-40   /* desktop */
              "
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
