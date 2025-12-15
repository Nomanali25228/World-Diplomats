"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgimg from '../../../public/img/registerbg.jpg';
import Confetti from 'react-confetti';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import * as Flags from "country-flag-icons/react/1x1";
import { countryOptions } from "@/app/utils/countryList";
import Navbar from "../component/navbar/Navbar";

export default function FunRegistration() {
const [step, setStep] = useState(1);
const [submitted, setSubmitted] = useState(false);

const [form, setForm] = useState({
name: "",
email: "",
number: "",
countryResidence: "",
nationality: "",
gender: "",
dob: "",
institution: "",
reason: "",
representCountry: "",
committee: "",
shirtSize: "",
foodPreference: "",
destination: ""
});

const selectStyles = {
control: (provided) => ({
...provided,
minHeight: "48px",
borderRadius: "0.75rem",
border: "2px solid #d1d5db",
paddingLeft: "8px",
boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
"&:hover": { borderColor: "#6366f1" },
}),
valueContainer: (provided) => ({ ...provided, padding: "0 6px" }),
singleValue: (provided) => ({ ...provided, fontSize: "14px" }),
menu: (provided) => ({ ...provided, borderRadius: "0.75rem", overflow: "hidden" }),
};

const totalFields = Object.keys(form).length;
const filledFields = Object.values(form).filter(v => v !== "").length;
const progressPercent = (filledFields / totalFields) * 100;

const step1Required = [];
const step2Required = [];

const validateStep = (fields) => {
const notFilled = fields.filter((f) => form[f].trim() === "");
return notFilled.length === 0;
};

const next = () => {
if (step === 1 && !validateStep(step1Required)) {
toast.error("Please fill all required fields in Step 1");
return;
}
setStep(2);
};

const handleSubmit = (e) => {
e.preventDefault();
if (!validateStep(step2Required)) {
toast.error("Please fill all required fields in Step 2");
return;
}
setSubmitted(true);
setStep(3);
toast.success("Registration Completed!");
console.log("Form submitted", form);
};

const handleChange = (e) => {
const { name, value } = e.target;
setForm(prev => ({ ...prev, [name]: value }));
};

const formatOptionLabel = ({ label, code }) => {
const Flag = Flags[code];
return ( <div className="flex items-center gap-2">
{Flag && <Flag style={{ width: "20px", height: "20px" }} />} <span>{label}</span> </div>
);
};

const back = () => setStep(prev => Math.max(prev - 1, 1));

const inputClass =
"w-full px-4 py-3 border-2 mt-1 border-gray-300 rounded-xl bg-white shadow-md text-sm " +
"focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 " +
"hover:shadow-xl";

return (
<> <Navbar />

  <div className="min-h-screen flex flex-col items-center justify-center relative bg-gray-100 overflow-hidden">
    <ToastContainer />

    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${bgimg.src})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-[#0d1b33]/80"></div>
    </div>

    {submitted && <Confetti recycle={false} numberOfPieces={150} />}

    {/* Form wrapper with left card inside */}
    <div className="relative z-10 w-full max-w-6xl p-4 ">

      {/* Heading on top of background */}
    <div className="mt-20 md:mt-32 text-center">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
    Registration for World Diplomats
  </h1>
</div>


      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row mt-12 md:mt-20 mb-20"
      >

       <div className="md:w-1/3 w-full bg-gradient-to-b from-purple-500 to-pink-500 p-10 md:p-4 flex items-center justify-center">
    <div className="text-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 ">World Diplomats</h2>
      <p className="text-sm md:text-lg">Dubai, UAE</p>
      <p className="mt-1 text-xs md:text-sm">13th – 16th February</p>
    </div>
  </div>  
        {/* Form Fields */}
        <div className="md:w-2/3 w-full p-8 md:p-12">
          {step < 3 && (
            <div className="w-full bg-gray-300 h-2 rounded-full mb-8 overflow-hidden">
              <motion.div
                className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">

              {/* STEP 1 */}
              {step === 1 && (
                <motion.div
                  key="s1"
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className={inputClass} />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className={inputClass} />
                  </div>

                  {/* Country Residence */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Country of Residence *</label>
                    <Select
                      options={countryOptions}
                      formatOptionLabel={formatOptionLabel}
                      placeholder="Country of Residence"
                      onChange={(selected) => setForm(prev => ({ ...prev, countryResidence: selected.label }))}
                      styles={selectStyles}
                    />
                  </div>

                  {/* Nationality */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nationality *</label>
                    <Select
                      options={countryOptions}
                      formatOptionLabel={formatOptionLabel}
                      placeholder="Nationality"
                      onChange={(selected) => setForm(prev => ({ ...prev, nationality: selected.label }))}
                      styles={selectStyles}
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative w-full overflow-visible">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <PhoneInput
                      country="ae"
                      value={form.number}
                      placeholder="Number"
                      onChange={(phone) => setForm(prev => ({ ...prev, number: phone }))}
                      inputStyle={{
                        width: "100%",
                        height: "48px",
                        borderRadius: "0.75rem",
                        border: "2px solid #d1d5db",
                        paddingLeft: "48px",
                        fontSize: "14px",
                        background: "#fff",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
                      }}
                      containerClass="transition duration-300"
                      buttonStyle={{ border: "none", background: "transparent" }}
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Gender *</label>
                    <select name="gender" value={form.gender} onChange={handleChange} className={inputClass}>
                      <option value="">Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
                    <input type="date" name="dob" value={form.dob} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Destination *</label>
                    <select name="destination" value={form.destination} onChange={handleChange} className={inputClass}>
                      <option value="">Destination</option>
                      <option>Dubai</option>
                      <option>Abu Dhabi</option>
                    </select>
                  </div>

                  {/* Institution */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Institution *</label>
                    <input name="institution" value={form.institution} placeholder="Institution" onChange={handleChange} className={inputClass} />
                  </div>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div
                  key="s2"
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  {/* Reason */}
                  <label className="block text-sm font-medium text-gray-700">Why do you want to join? *</label>
                  <textarea name="reason" value={form.reason} onChange={handleChange} placeholder="Why join?" className={inputClass + " min-h-[100px]"} />

                  {/* Represent Country */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Country you want to represent</label>
                    <Select
                      options={countryOptions}
                      formatOptionLabel={formatOptionLabel}
                      placeholder="Country you want..."
                      onChange={(selected) => setForm(prev => ({ ...prev, representCountry: selected.label }))}
                      styles={selectStyles}
                    />
                  </div>

                  {/* Committee */}
                  <label className="block text-sm font-medium text-gray-700">Committee *</label>
                  <input name="committee" value={form.committee} onChange={handleChange} placeholder="Committee" className={inputClass} />

                  {/* Shirt Size + Food */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="">
                      <label className="block text-sm font-medium text-gray-700">Shirt Size *</label>
                      <select name="shirtSize" value={form.shirtSize} onChange={handleChange} className={inputClass}>
                        <option value="">Shirt Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                      </select>
                    </div>
                    <div className="">
                      <label className="block text-sm font-medium text-gray-700">Food Preference *</label>
                      <select name="foodPreference" value={form.foodPreference} onChange={handleChange} className={inputClass}>
                        <option value="">Food Preference</option>
                        <option>Vegetarian</option>
                        <option>Non-Vegetarian</option>
                        <option>Vegan</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
              {step === 3 && (
  <motion.div
    key="s3"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center py-16 text-center px-6 sm:px-10 md:px-16 lg:px-20"
  >
    <div className="text-2xl bg-[#366fda] bg-clip-text text-transparent sm:text-3xl md:text-4xl font-semibold mb-6">
      <p>Open Email</p>
    </div>

    <p className="text-gray-800 text-lg sm:text-xl mb-4">
      Thank you for registering for World Diplomats . 
      We have sent an email to you.
    </p>

    <p className="text-blue-500 text-base sm:text-lg mb-10">
      Please follow our Instagram to 
      <span className="text-red-500"> win exclusive merchandise</span>.
    </p>

    <a
      href="https://www.instagram.com/atsasmun/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center mb-16"
    >
      <FaInstagram size={60} className="text-pink-600 mb-2 sm:mb-3" />
      <span className="text-gray-700 font-medium text-sm sm:text-base">
        @Example
      </span>
      <span className="text-xs text-gray-500 sm:text-sm">
        Tap above to follow
      </span>
    </a>

    <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-10 mb-8">
      <a
        href="https://wa.me/+447487302322"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-red-600 text-sm sm:text-base"
      >
        <FaWhatsapp size={20} className="mr-2" />
        +00000000000
      </a>
      <a
        href="mailto:info@worlddiplomats.org"
        className="flex items-center text-blue-600 text-sm sm:text-base"
      >
        <FaEnvelope size={20} className="mr-2" />
        info@worlddiplomats.org
      </a>
    </div>

    <p className="text-gray-600 text-xs sm:text-sm mt-4">
      Want to register a delegation? Email us at{" "}
      <a  href="mailto:info@worlddiplomats.org" className="text-blue-500 hover:underline">
        info@worlddiplomats.org
      </a>
     
      .
    </p>
  </motion.div>
)}



            </AnimatePresence>

            <div className="flex justify-between mt-6">
              {step > 1 && step < 3 && (
                <button type="button" onClick={back} className="px-6 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 text-gray-800">← Back</button>
              )}
              {step === 1 && (
                <button type="button" onClick={next} className="ml-auto px-6 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600">Next →</button>
              )}
              {step === 2 && (
                <button type="submit" className="ml-auto px-6 py-2 rounded-xl bg-indigo-500 text-white hover:bg-indigo-600">Submit</button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  </div>

</>
);
}
