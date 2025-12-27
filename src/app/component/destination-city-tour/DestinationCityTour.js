"use client";
import React, { useState } from "react";
import Image from "next/image";

// Example images
import taksimImg from "../../../../public/img/IstanbulCityTour1.jpg";
import arastaImg from "../../../../public/img/IstanbulCityTour2.jpg";
import bosporusImg from "../../../../public/img/IstanbulCityTour3.jpg";
// import unLogo from "../../../../public/img/un-logo.png"; // Background UN logo (commented for now)

const DestinationCityTour = () => {
  const tours = [
    { title: "Taksim Square", image: taksimImg },
    { title: "Arasta Bazar", image: arastaImg },
    { title: "Bosporus Cruise Dinner", image: bosporusImg },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + tours.length) % tours.length);
  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % tours.length);

  return (
    <section className="relative w-full py-16 bg-gray-100">
      {/* Background UN Logo */}
      {/*
      <div className="absolute inset-0 opacity-10 flex justify-center items-center pointer-events-none">
        <Image 
          src={unLogo} 
          alt="UN Logo" 
          className="w-1/2 h-auto object-contain" 
        />
      </div>
      */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       

       <div className="text-center mb-16">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     font-bold text-[#0d1b4c]"
          data-aos="fade-up"
        >
          City Tour 
                    <span className="text-[#b00000]"> Highlights</span>

        </h2>

        {/* Divider */}
         <div
          className="flex items-center justify-center gap-2 mt-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span className="w-10 h-[2px] bg-[#1a2a9c] side-line-animate"></span>
          <span className="w-3 h-3 bg-[#b00000] rounded-full dot-animate"></span>
          <span className="w-10 h-[2px] bg-[#1a2a9c] side-line-animate"></span>
        </div>
      </div>

        {/* City Tour Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
              onClick={() => openModal(index)}
            >
              <Image
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 sm:h-56 lg:h-60 object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-1 text-sm sm:text-base font-semibold">
                {tour.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
       <div className="fixed inset-0 z-50 bg-[#000000b2] flex flex-col items-center justify-center p-4">
  {/* Close Button */}
  <button
    onClick={closeModal}
    className="absolute top-4 right-4 z-50 text-white cursor-pointer text-2xl font-bold bg-black/30 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/50 transition"
  >
    &times;
  </button>

  {/* Image */}
  <div className="relative w-full flex justify-center mt-6">
    <div className="w-full max-w-3xl h-[60vh] sm:h-[70vh] lg:h-[80vh] relative">
      <Image
        src={tours[currentIndex].image}
        alt={tours[currentIndex].title}
        fill
        className="object-contain rounded-lg"
        priority
      />
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-lg sm:text-xl font-semibold">
        {tours[currentIndex].title}
      </p>
    </div>
  </div>

  {/* Navigation Buttons Below Image */}
  <div className="mt-4 flex gap-4 justify-center">
    <button
      onClick={prevImage}
      className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition"
    >
      &larr; Previous
    </button>
    <button
      onClick={nextImage}
      className="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition"
    >
      Next &rarr;
    </button>
  </div>
</div>

      )}
    </section>
  );
};

export default DestinationCityTour;
