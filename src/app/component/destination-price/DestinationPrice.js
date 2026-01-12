import Link from "next/link";
import React from "react";

const DestinationPrice = ({
  tital,
  Basic,
  DelegateAccommodationExperience,
  DelegatefullExperience,
  Experience1,

}) => {
  const getOriginalPrice = (priceStr) => {
    if (!priceStr) return "";
    const numericPrice = parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
    return isNaN(numericPrice) ? "" : `$${numericPrice + 200}`;
  };

  return (
    <section id="pricing"
      className="py-16 sm:py-18 md:py-20 px-4 sm:px-6
                 bg-gradient-to-b from-[#e3f2fd] to-[#F1F2F4]"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12 sm:mb-14">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                       font-bold text-[#0d1b4c]"
            data-aos="fade-up"
          >
            {tital} <span className="text-[#b00000]"> Pricing</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-2xl mx-auto">
            Choose the experience that best fits your diplomatic journey at
            World Diplomats.
          </p>

          {/* Divider */}

        </div>

        {/* PRICING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

          {/* BASIC */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl
                          shadow-lg p-6 sm:p-8
                          hover:shadow-2xl hover:-translate-y-2
                          transition-all duration-500 flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold text-[#0d1b4c] mb-2 text-center">
              Basic
            </h3>

            <p className="text-3xl sm:text-4xl font-extrabold text-[#1a2a9c] mb-1 text-center">
              {Basic}
            </p>

            <p className="text-sm text-gray-400 text-center line-through mb-1">
              {getOriginalPrice(Basic)} Early Applicant Discount
            </p>

            <span className="text-xs text-gray-500 mb-6 text-center block">
              +5% processing fee
            </span>

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

            <Link href="/Register-Now" className="mt-3 md:mt-auto">
              <button
                className="w-full  rounded-xl cursor-pointer
               bg-[#1a2a9c] text-white py-3
               text-xs sm:text-sm font-semibold
               hover:bg-[#0d1b4c]
               transition-all"
              >
                Register Now →
              </button>
            </Link>

          </div>

          {/* ACCOMMODATION – POPULAR */}
          <div
            className="relative bg-white/90 backdrop-blur-xl rounded-3xl
                       shadow-2xl p-6 sm:p-8
                       border-2 border-[#b00000]
                       hover:-translate-y-2 transition-all duration-500
                       flex flex-col"
          >
            {/* Badge */}
            <span
              className="absolute -top-4 left-1/2 -translate-x-1/2
                         bg-[#b00000] text-white
                         text-[10px] sm:text-xs px-4 py-1 rounded-full"
            >
              Most Popular
            </span>

            <h3 className="text-lg sm:text-xl font-semibold text-[#0d1b4c] mb-2 text-center">
              Shepandum Experience
            </h3>

            <p className="text-3xl sm:text-4xl font-extrabold text-[#1a2a9c] mb-1 text-center">
              {DelegateAccommodationExperience}
            </p>

            <p className="text-sm text-gray-400 text-center line-through mb-1">
              {getOriginalPrice(DelegateAccommodationExperience)} Early Applicant Discount
            </p>

            <span className="text-xs text-gray-500 mb-6 text-center block">
              +5% processing fee
            </span>

            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              <li>✔ Everything in Basic package</li>
              <li>✔ 5-star premium hotel accommodation (Twin Shared)</li>
              <li>✔ Gourmet Morning Breakfast everyday</li>
            </ul>


            <Link href="/Register-Now" className="mt-3 md:mt-auto">
              <button
                className="w-full rounded-xl cursor-pointer
               bg-[#1a2a9c] text-white py-3
               text-xs sm:text-sm font-semibold
               hover:bg-[#0d1b4c]
               transition-all"
              >
                Register Now →
              </button>
            </Link>

          </div>

          {/* FULL EXPERIENCE */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl
                          shadow-lg p-6 sm:p-8
                          hover:shadow-2xl hover:-translate-y-2
                          transition-all duration-500 flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold text-[#0d1b4c] mb-2 text-center">
              Zagatiya Experience
            </h3>

            <p className="text-3xl sm:text-4xl font-extrabold text-[#1a2a9c] mb-1 text-center">
              {DelegatefullExperience}
            </p>

            <p className="text-sm text-gray-400 text-center line-through mb-1">
              {getOriginalPrice(DelegatefullExperience)} Early Applicant Discount
            </p>

            <span className="text-xs text-gray-500 mb-6 text-center block">
              +5% processing fee
            </span>

            <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
              {Experience1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <Link href="/Register-Now" className="mt-3 md:mt-auto">
              <button
                className="w-full rounded-xl cursor-pointer
               bg-[#1a2a9c] text-white py-3
               text-xs sm:text-sm font-semibold
               hover:bg-[#0d1b4c]
               transition-all"
              >
                Register Now →
              </button>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DestinationPrice;
