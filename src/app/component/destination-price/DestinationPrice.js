import React from "react";

const DestinationPrice = ({
    tital,
    Basic,
    DelegateAccommodationExperience,
    DelegatefullExperience
}) => {
  return (
    <section className="bg-[#eeeeee] py-14 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E50]" data-aos="fade-up">
            {tital}
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Choose the experience that best fits your diplomatic journey at
            World Diplomats.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {/* BASIC */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition flex flex-col h-full">
            
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-[#0b1d4d] mb-2 text-center">
              Basic
            </h3>

            {/* Price */}
            <p className="text-3xl sm:text-4xl font-bold text-blue-700 mb-5 sm:mb-6 text-center">
                {Basic}
            </p>

            {/* List (LEFT) */}
            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li>✔ UN Simulation committee sessions</li>
              <li>✔ Background Study Guides</li>
              <li>✔ Official UNHCR endorsed Certificate</li>
              <li>✔ 1 committee lunch</li>
              <li>✔ Opening ceremony Diplomatic dinner</li>
              <li>✔ Closing ceremony Grand Dinner</li>
              <li>✔ Cultural Performance</li>
              <li>✔ Musical Night</li>
              <li>✔ Scavenger Hunt</li>
              <li>✔ World Diplomats merch and Kit</li>
            </ul>

            {/* Button */}
            <button className="mt-5  w-full rounded-xl bg-blue-700 text-white py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-blue-800 transition">
              Choose Basic
            </button>
          </div>

          {/* ACCOMMODATION (POPULAR) */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-blue-700 flex flex-col h-full">

            {/* Badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-[10px] sm:text-xs px-3 sm:px-4 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-lg sm:text-xl font-semibold text-[#0b1d4d] mb-2 text-center">
              Delegate Accommodation Experience
            </h3>

            <p className="text-3xl sm:text-4xl font-bold text-blue-700 mb-5 sm:mb-6 text-center">
              {DelegateAccommodationExperience}
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li>✔ Everything in Basic package</li>
              <li>✔ 5-star premium hotel accommodation (Twin Shared)</li>
              <li>✔ Gourmet Morning Breakfast everyday</li>
            </ul>

            <button className="mt-5 md:mt-auto w-full rounded-xl bg-blue-700 text-white py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-blue-800 transition">
              Choose Package
            </button>
          </div>

          {/* FULL EXPERIENCE */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition flex flex-col h-full">

            <h3 className="text-lg sm:text-xl font-semibold text-[#0b1d4d] mb-2 text-center">
              Delegate Full Experience
            </h3>

            <p className="text-3xl sm:text-4xl font-bold text-blue-700 mb-5 sm:mb-6 text-center">
                {DelegatefullExperience}
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li>✔ Everything in Delegate Accommodation Experience</li>
              <li>✔ Istanbul City Tour</li>
              <li>✔ Bosphorus Rooftop Lunch Tour</li>
              <li>✔ Cruise Trip & Dinner at Bosphorus</li>
            </ul>

            <button className="mt-5 md:mt-auto w-full rounded-xl bg-blue-700 text-white py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:bg-blue-800 transition">
              Choose Full Experience
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DestinationPrice;
