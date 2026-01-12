"use client";
import React, { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Imports 1-63
import img1 from "../../../../public/img/galleryimg (1).JPG";
import img2 from "../../../../public/img/galleryimg (2).JPG";
import img3 from "../../../../public/img/galleryimg (3).JPG";
import img4 from "../../../../public/img/galleryimg (4).JPG";
import img5 from "../../../../public/img/galleryimg (5).jpg";
import img6 from "../../../../public/img/galleryimg (6).jpg";
import img7 from "../../../../public/img/galleryimg (7).jpg";
import img8 from "../../../../public/img/galleryimg (8).JPG";
import img9 from "../../../../public/img/galleryimg (9).JPG";
import img10 from "../../../../public/img/galleryimg (10).JPG";
import img11 from "../../../../public/img/galleryimg (11).JPG";
import img12 from "../../../../public/img/galleryimg (12).JPG";
import img13 from "../../../../public/img/galleryimg (13).JPG";
import img14 from "../../../../public/img/galleryimg (14).JPG";
import img15 from "../../../../public/img/galleryimg (15).JPG";
import img16 from "../../../../public/img/galleryimg (16).JPG";
import img17 from "../../../../public/img/galleryimg (17).JPG";
import img18 from "../../../../public/img/galleryimg (18).JPG";
import img19 from "../../../../public/img/galleryimg (19).JPG";
import img20 from "../../../../public/img/galleryimg (20).JPG";
import img21 from "../../../../public/img/galleryimg (21).JPG";
import img22 from "../../../../public/img/galleryimg (22).JPG";
import img23 from "../../../../public/img/galleryimg (23).JPG";
import img24 from "../../../../public/img/galleryimg (24).JPG";
import img25 from "../../../../public/img/galleryimg (25).JPG";
import img26 from "../../../../public/img/galleryimg (26).JPG";
import img27 from "../../../../public/img/galleryimg (27).JPG";
import img28 from "../../../../public/img/galleryimg (28).JPG";
import img29 from "../../../../public/img/galleryimg (29).JPG";
import img30 from "../../../../public/img/galleryimg (30).JPG";
import img31 from "../../../../public/img/galleryimg (31).JPG";
import img32 from "../../../../public/img/galleryimg (32).JPG";
import img33 from "../../../../public/img/galleryimg (33).JPG";
import img34 from "../../../../public/img/galleryimg (34).JPG";
import img35 from "../../../../public/img/galleryimg (35).JPG";
import img36 from "../../../../public/img/galleryimg (36).JPG";
import img37 from "../../../../public/img/galleryimg (37).JPG";
import img38 from "../../../../public/img/galleryimg (38).JPG";
import img39 from "../../../../public/img/galleryimg (39).JPG";
import img40 from "../../../../public/img/galleryimg (40).JPG";
import img41 from "../../../../public/img/galleryimg (41).JPG";
import img42 from "../../../../public/img/galleryimg (42).JPG";
import img43 from "../../../../public/img/galleryimg (43).JPG";
import img44 from "../../../../public/img/galleryimg (44).JPG";
import img45 from "../../../../public/img/galleryimg (45).JPG";
import img46 from "../../../../public/img/galleryimg (46).JPG";
import img47 from "../../../../public/img/galleryimg (47).JPG";
import img48 from "../../../../public/img/galleryimg (48).JPG";
import img49 from "../../../../public/img/galleryimg (49).JPG";
import img50 from "../../../../public/img/galleryimg (50).JPG";
import img51 from "../../../../public/img/galleryimg (51).JPG";
import img52 from "../../../../public/img/galleryimg (52).JPG";
import img53 from "../../../../public/img/galleryimg (53).JPG";
import img54 from "../../../../public/img/galleryimg (54).JPG";
import img55 from "../../../../public/img/galleryimg (55).JPG";
import img56 from "../../../../public/img/galleryimg (56).JPG";
import img57 from "../../../../public/img/galleryimg (57).JPG";
import img58 from "../../../../public/img/galleryimg (58).JPG";
import img59 from "../../../../public/img/galleryimg (59).JPG";
import img60 from "../../../../public/img/galleryimg (60).JPG";
import img61 from "../../../../public/img/galleryimg (61).JPG";
import img62 from "../../../../public/img/galleryimg (62).JPG";
import img63 from "../../../../public/img/galleryimg (63).JPG";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
  img51, img52, img53, img54, img55, img56, img57, img58, img59, img60,
  img61, img62, img63
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Split images into two halves
  const half = Math.ceil(images.length / 2);
  const row1Images = images.slice(0, half);
  const row2Images = images.slice(half);

  const closeModal = () => setActiveIndex(null);

  const prevImage = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-12 px-4 sm:px-8 max-w-[1450px] mx-auto">

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
          {/* Quadrupled for seamless loop and wide screen coverage */}
          {[...row1Images, ...row1Images, ...row1Images, ...row1Images].map((img, i) => (
            <img
              alt="Gallery image"
              key={i}
              src={img.src || img} // Handle both Next.js import object and string path
              onClick={() => setActiveIndex(i % row1Images.length)}
              className="cursor-pointer rounded-lg shadow object-cover
                w-28 h-20 sm:w-36 sm:h-24 md:w-44 md:h-32 lg:w-64 lg:h-40"
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-4 mt-6 animate-scroll-right whitespace-nowrap">
          {/* Quadrupled for seamless loop */}
          {[...row2Images, ...row2Images, ...row2Images, ...row2Images].map((img, i) => (
            <img
              alt="Gallery image"
              key={i}
              src={img.src || img}
              onClick={() => setActiveIndex(half + (i % row2Images.length))} // Offset index for correct modal opening
              className="cursor-pointer rounded-lg shadow object-cover
                w-28 h-20 sm:w-36 sm:h-24 md:w-44 md:h-32 lg:w-64 lg:h-40"
            />
          ))}
        </div>
      </div>

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
              alt="Gallery image"
              src={images[activeIndex]?.src || images[activeIndex]}
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
