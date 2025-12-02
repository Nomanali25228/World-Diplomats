import React from "react";
import bgImage from "../../../../public/img/BECOMEDIPLOMAT.jpg";

const BecomeDiplomets = () => {
  return (
    <section
      className="relative w-full h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] rounded-sm overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-16 h-full flex flex-col justify-center">

        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">

          {/* Title */}
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center sm:text-left max-w-full break-words">
            BECOME A DIPLOMAT
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto items-center sm:items-end">
          <button className="
  px-6 py-3 
  text-white font-semibold 
  text-sm md:text-base
  rounded-xl 
  bg-gradient-to-r from-blue-600 to-blue-700
  shadow-lg shadow-blue-500/30
  hover:shadow-blue-600/40
  hover:scale-105 
  transition-all duration-300 cursor-pointer
">
  Register Now ➤
</button>

<button className="
  px-6 py-3  cursor-pointer
  font-semibold
  text-sm md:text-base
  rounded-xl 
  bg-white/90 backdrop-blur-md
  text-gray-900 
  shadow-md hover:shadow-lg 
  border border-gray-200
  hover:bg-white hover:scale-105
  transition-all duration-300
">
  Contact Now ➤
</button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BecomeDiplomets;
