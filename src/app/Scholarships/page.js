import React from "react";
import Navbar from "../component/navbar/Navbar";

const page = () => {
  return (
    <>
    <Navbar />
    <div
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        background: `
          linear-gradient(
            145deg,
            #b00000 0%,
            #d32f2f 30%,
            #1a2a9c 65%,
            #0d1b4c 100%
          )
        `,
      }}
    >
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide">
          🎓 Scholarships
        </h1>

        <p className="mt-4 text-lg sm:text-xl opacity-90">
          Coming Soon
        </p>

        <div className="mt-6 text-sm opacity-70">
          We are working on something amazing for you ✨
        </div>
      </div>
    </div>
    </>
  );
};

export default page;
