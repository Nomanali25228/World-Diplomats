"use client";
import React, { useState } from "react";
import Navbar from "../component/navbar/Navbar";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const MIN_DELEGATES = 2;
const STRAPI_URL = "https://world-diplomats-backend.onrender.com"; // 👈 STRAPI URL HERE

const Page = () => {
  const [delegationName, setDelegationName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [headChaperone, setHeadChaperone] = useState("");
  const [chaperone2, setChaperone2] = useState("");
  const [chaperone3, setChaperone3] = useState("");

  const [delegates, setDelegates] = useState(["", ""]);

  const [additionalEmail, setAdditionalEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [accommodation, setAccommodation] = useState(null);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const addDelegate = () => {
    if (delegates.length < 25) setDelegates([...delegates, ""]);
  };

  const removeDelegate = (idx) => {
    if (delegates.length > MIN_DELEGATES) {
      setDelegates(delegates.filter((_, i) => i !== idx));
    }
  };

  const updateDelegateName = (idx, value) => {
    const updated = [...delegates];
    updated[idx] = value;
    setDelegates(updated);
  };

  // 🔥 STRAPI SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${STRAPI_URL}/api/delegation-applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            delegationName,
            phone,
            email,
            headChaperone,
            chaperone2,
            chaperone3,
            delegates: delegates.filter((d) => d.trim() !== ""),
            additionalEmail,
            institution,
            accommodation,
          },
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section
        className="relative min-h-screen py-16 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/registerbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/90 via-[#1a2a9c]/80 to-[#b00000]/75"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mt-16 mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Delegation Application Form
            </h1>
            <p className="mt-3 text-blue-200">World Diplomats</p>
          </div>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white/95 rounded-2xl shadow-xl p-6 space-y-8"
            >
              <Grid>
                <Field label="Delegation Name" required small value={delegationName} onChange={(e)=>setDelegationName(e.target.value)} />
                <Field label="Phone Number" required small value={phone} onChange={(e)=>setPhone(e.target.value)} />
                <Field label="Email" type="email" required small value={email} onChange={(e)=>setEmail(e.target.value)} />
              </Grid>

              <Grid>
                <Field label="Head Chaperone Name" required small value={headChaperone} onChange={(e)=>setHeadChaperone(e.target.value)} />
                <Field label="Chaperone 2 (optional)" small value={chaperone2} onChange={(e)=>setChaperone2(e.target.value)} />
                <Field label="Chaperone 3 (optional)" small value={chaperone3} onChange={(e)=>setChaperone3(e.target.value)} />
              </Grid>

              <div>
                <h2 className="font-semibold mb-3 text-lg">Delegates</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {delegates.map((name, idx) => (
                    <div key={idx} className="relative p-2 border rounded-md">
                      <label className="text-sm font-medium">
                        Delegate {idx + 1}
                      </label>
                      <input
                        value={name}
                        onChange={(e) => updateDelegateName(idx, e.target.value)}
                        className="w-full px-3 py-2 border rounded-md mt-1 text-sm"
                        required
                      />
                      {delegates.length > MIN_DELEGATES && (
                        <button
                          type="button"
                          onClick={() => removeDelegate(idx)}
                          className="absolute top-2 right-2"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                {delegates.length < 25 && (
                  <button type="button" onClick={addDelegate} className="mt-3 text-blue-600 text-sm">
                    ➜ Add more delegates
                  </button>
                )}
              </div>

              <Grid>
                <Field label="Additional Email" type="email" small value={additionalEmail} onChange={(e)=>setAdditionalEmail(e.target.value)} />
                <Field label="Institution (optional)" small value={institution} onChange={(e)=>setInstitution(e.target.value)} />
              </Grid>

              <div>
                <label className="font-semibold text-sm block mb-2">
                  Will your delegation require accommodation?
                </label>
                <div className="flex gap-6 text-sm">
                  <label><input type="radio" name="acc" onChange={()=>setAccommodation(true)} /> Yes</label>
                  <label><input type="radio" name="acc" onChange={()=>setAccommodation(false)} /> No</label>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-600 to-indigo-700 text-white py-3 rounded-lg"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          ) : (
            <div className="bg-white rounded-2xl p-10 text-center">
              <h2 className="text-2xl font-bold mb-3">🎉 Application Submitted!</h2>
              <p>Total Delegates: <b>{delegates.length}</b></p>

              <div className="mt-4 flex justify-center gap-4 text-sm">
                <a href="mailto:info@worlddiplomats.org" className="flex items-center gap-1">
                  <SiGmail /> info@worlddiplomats.org
                </a>
                <a href="https://instagram.com/WorldDiplomats" className="flex items-center gap-1">
                  <FaInstagram /> @WorldDiplomats
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

/* Helpers */
const Grid = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">{children}</div>
);

const Field = ({ label, type="text", required=false, small=false, value, onChange }) => (
  <div>
    <label className="block font-semibold mb-1 text-sm">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    <input
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full border rounded-lg px-3 py-2 text-sm"
    />
  </div>
);

export default Page;
