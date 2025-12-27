"use client";
import React, { useState } from 'react';
import Image from 'next/image';



const DestinationMap = (props) => {
 const [selectedImage, setSelectedImage] = useState(null);

  // Defining images array
  const images = [props.img3, props.img2, props.img1, props.img4];
  var bgimg = [props.bgimg5];

  const handlePrev = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  return (
    <section id="venue">
      {/* Title */}
      <div data-aos="fade-up" className="text-center mt-12 mb-6">
       
          <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                     font-bold text-[#0d1b4c]"
          data-aos="fade-up"
        >
          City 
                    <span className="text-[#b00000]"> Venue</span>

        </h2>

        <p className="text-gray-500 text-lg mt-2">
          Event venue location info and gallery
        </p>

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

      {/* Map & Description Section */}
      <div className="flex flex-col md:flex-row items-stretch px-4 bg-white">
        {/* Left: Google Map */}
        <div data-aos="fade-right" className="w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <div className="h-full">
            <iframe
              src={props.map}
              width="99.6%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border border-gray-200"
            ></iframe>
          </div>
        </div>

        {/* Right: Hotel Description with background image */}
        <div
          data-aos="fade-up"
          className="w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative overflow-hidden rounded-0 shadow-none"
          >
            <Image
              src={props.bgimg5?.src || props.bgimg5}
              alt={props.hname || "background"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0d1b33]/90  z-10"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {props.hname}
            </h1>
            <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed">
              {props.disc}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div
        data-aos="fade-up"
        className="px-4 mt-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1"
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[20vh] sm:h-[29vh] md:h-[29vh] lg:h-[33vh]">
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              className="cursor-pointer  object-cover"
              layout="fill"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {/* Image Viewer Modal with Text Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 pt-8">
          {/* Left Arrow */}
          <button
            className="absolute z-10 left-4 text-white text-3xl"
            onClick={handlePrev}
          >
            &#8592;
          </button>
          
          {/* Modal Image */}
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected"
              className="max-h-[80vh] w-[70vw] sm:w-[80vw] md:w-[80vw] lg:w-[100vw] object-contain"
            />
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={handleNext}
          >
            &#8594;
          </button>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

export default DestinationMap
