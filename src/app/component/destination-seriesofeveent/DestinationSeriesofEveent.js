import React from "react";
import Image from "next/image"; // Import Next.js Image component
import commitImage from "../../../../public/img/CommitteeSessions.jpg"; // Import images
import openingCeremonyImage from "../../../../public/img/prom.png";


const DestinationSeriesofEveent = ({culturImagee}) => {
  
  // Mock data for the events
  const events = [
    {      
      title: "Committee Sessions",
      image: commitImage,
    },
    {
      title: "Cultural Global Village",
      image: culturImagee,
    },
    {
      title: "Masquerade Prom",
      image: openingCeremonyImage,
    },
 
  ];


  return (
    <div className="bg-gray-50 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
       <div className="text-center mb-12 sm:mb-14">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                       font-bold text-[#0d1b4c]"
            data-aos="fade-up"
          >
            Series Of <span className="text-[#b00000]">  Events </span>
          </h2>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image
                  src={event.image} // Imported image reference
                  alt={event.title}
                  layout="fill" // Ensures the image fills the container
                  objectFit="cover" // Maintains aspect ratio and covers the area
                  className="rounded-t-lg"
                />
                {/* Decorative Elements */}
              
             
              </div>
              {/* Title */}
              <div className="p-4 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                  {event.title}{" "}
                  <span className="text-gray-400 transition hover:text-gray-600">
                    ▼
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default DestinationSeriesofEveent
