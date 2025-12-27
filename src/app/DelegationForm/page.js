"use client";
import React, { useState } from "react";
import Navbar from "../component/navbar/Navbar";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const MIN_DELEGATES = 2;

const Page = () => {
  const [delegationName, setDelegationName] = useState("");
  const [delegates, setDelegates] = useState(["", ""]); // Initial 2 delegates
  const [submitted, setSubmitted] = useState(false);

  const addDelegate = () => {
    if (delegates.length < 25) {
      setDelegates([...delegates, ""]);
    }
  };

  const removeDelegate = (idx) => {
    if (delegates.length > MIN_DELEGATES) {
      setDelegates(delegates.filter((_, i) => i !== idx));
    }
  };

  const updateDelegateName = (idx, value) => {
    const newDelegates = [...delegates];
    newDelegates[idx] = value;
    setDelegates(newDelegates);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <section
        className="relative min-h-screen py-16 px-4 sm:px-6 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/img/registerbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/90 via-[#1a2a9c]/80 to-[#b00000]/75"></div>
        <div className="relative z-10 max-w-5xl mx-auto">

          {/* HEADER */}
          <div className="text-center mt-16 mb-12">
            <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold text-white">
              Delegation Application Form
            </h1>
            <p className="mt-3 text-[12px] sm:text-md md:text-lg text-blue-200">
              World Diplomats
            </p>
          </div>

          {/* FORM OR SUCCESS CARD */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 space-y-8 text-black"
            >
              {/* DELEGATION NAME & CONTACT */}
              <Grid>
                <Field
                  label="Delegation Name"
                  required
                  small
                  value={delegationName}
                  onChange={(e) => setDelegationName(e.target.value)}
                />
                <Field label="Phone Number" required small />
                <Field label="Email" type="email" required small />
              </Grid>

              {/* CHAPERONES */}
              <Grid>
                <Field label="Head Chaperone Name" required small />
                <Field label="Chaperone 2 (optional) (if any)" small />
                <Field label="Chaperone 3 (optional) (if any)" small />
              </Grid>

              {/* DELEGATES */}
              <div>
                <h2 className="font-semibold mb-3 text-lg">Delegates</h2>
                <div className={delegates.length > 6 ? "max-h-[420px] md:max-h-[220px] overflow-auto pr-2" : "pr-2"}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {delegates.map((name, idx) => (
                      <div key={idx} className="relative p-2 border rounded-md bg-white/10">
                        <label className="block text-sm font-medium text-gray-700">
                          Delegate {idx + 1} Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => updateDelegateName(idx, e.target.value)}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 mt-1 text-sm"
                          placeholder={`Delegate ${idx + 1} full name`}
                          required
                        />
                        {delegates.length > MIN_DELEGATES && (
                          <button
                            type="button"
                            onClick={() => removeDelegate(idx)}
                            className="absolute top-2 right-2 text-black rounded-full w-6 h-6 flex items-center justify-center shadow-sm hover:scale-110 transition"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {delegates.length < 25 && (
                  <button
                    type="button"
                    onClick={addDelegate}
                    className="mt-3 text-blue-700 font-semibold hover:underline flex items-center gap-2 text-sm"
                  >
                    ➜ Add more delegates
                  </button>
                )}
              </div>

              {/* ADDITIONAL INFO */}
              <Grid>
                <Field label="Additional Email" type="email" small />
                <Field label="Institution (optional) (if any)" small />
              </Grid>

              {/* ACCOMMODATION */}
              <div>
                <label className="block font-semibold mb-2 text-sm">
                  Will your delegation require accommodation?
                </label>
                <div className="flex gap-6 text-sm">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="accommodation" />
                    Yes
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="accommodation" />
                    No
                  </label>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-700">
                Once your application is submitted, a member of our Outreach Team will contact you.
              </p>

              <button
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-[#b00000] to-[#1a2a9c] text-white py-2.5 rounded-lg font-semibold text-sm sm:text-base hover:opacity-90 transition"
              >
                Submit Application
              </button>
            </form>
          ) : (
            <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10 text-center space-y-4">
              <div className="text-6xl animate-bounce">🎉</div>
              <h2 className="text-2xl font-bold text-gray-800">
                🎓 Thanks <span className="text-indigo-600">{delegates[0] || "Lead Delegate"}</span> for submitting your delegation application!
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Total Delegates: <span className="font-semibold">{delegates.length}</span>
              </p>
              <p className="text-green-600 font-semibold text-sm sm:text-base">
                ✅ Your application has been successfully submitted!
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                Our Outreach Team will contact you soon with instructions. Keep an eye on your inbox!
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                🎯 Get ready to lead your team to success in the upcoming conference! ✨
              </p>

              {/* Gmail + Instagram */}
              <p className="text-gray-500 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="mailto:info@worlddiplomats.org" className="flex items-center gap-1 text-red-500 hover:underline transition">
                  <SiGmail /> info@worlddiplomats.org
                </a>
                <a href="https://www.instagram.com/WorldDiplomats" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-pink-500 hover:underline transition">
                  <FaInstagram /> @WorldDiplomats
                </a>
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-5 rounded-2xl hover:opacity-90 transition font-semibold"
              >
                Submit Another
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

/* GRID → 3 per line on desktop */
const Grid = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">{children}</div>
);

/* FIELD with optional small variant */
const Field = ({ label, type = "text", required = false, small = false, value, onChange }) => (
  <div>
    <label className={`block font-semibold mb-1 ${small ? "text-sm" : ""}`}>
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className={`w-full border rounded-lg px-${small ? "3" : "4"} py-${small ? "2" : "3"} ${small ? "text-sm" : ""} focus:outline-none focus:ring-2 focus:ring-indigo-300`}
    />
  </div>
);

export default Page;
