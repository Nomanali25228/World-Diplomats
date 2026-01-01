"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import bgimportdates from "../../../../public/img/bgimportandates.jpg";
import { useDestination } from "../../context/DestinationContext";

const RiyadhImportantDates = () => {
  const [openIndex, setOpenIndex] = useState(4);

  const { getDates } = useDestination();
  const dates = getDates("Riyadh, Saudi Arabia") || {};

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#EEEEEE] py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.3fr] gap-14">

        {/* LEFT SIDE (SMALLER) */}
        <div>
        <p className="text-xs font-semibold text-gray-500 mb-2 tracking-widest text-center sm:text-left">
  WORLD DIPLOMATS
</p>

<h2 className="text-2xl md:text-3xl font-bold text-[#2C3E50] mb-6 leading-snug text-center sm:text-left">
  Registrations and Important<br /> Dates
</h2>


 <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[220px]">
  {/* Background Image */}
  <Image
    src={bgimportdates} // yaha apni image ka path do
    alt="Background"
    fill
    className="object-cover z-0"
    priority
  />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-80 z-10"></div>

  {/* Content */}
  <div className="relative z-10 p-8 mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    
{/* Registration for World Diplomats Emirates
Early Bird Registration Deadline: January 15th, 2026
 */}


    {/* Left Content */}
    <div className="flex-1">
      <p className="text-base sm:text-lg text-white leading-relaxed">
        Registration for World Diplomats is now open. <br />
        <strong>Deadline:</strong> {dates.registrationDeadline || "TBA"}
      </p>
    </div>

    {/* Right Button */}
      <div className="flex-shrink-0 self-stretch sm:self-auto flex items-center">
      <Link href={dates.registerLink || "/Register-Now?destination=Riyadh,%20Saudi%20Arabia"}>
        <button className="bg-white cursor-pointer text-blue-600 font-semibold hover:bg-gray-100 transition px-8 py-3 rounded-lg text-base shadow-lg">
          Register Now
        </button>
      </Link>
    </div>

  </div>
</div>




        </div>

        {/* RIGHT SIDE (BIGGER) */}
        <div className="space-y-5">

          {/* SIGN UP */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <button
              onClick={() => toggle(0)}
              className="w-full bg-[#14144b] px-8 py-5 flex items-center justify-between text-white text-lg font-medium"
            >
              <span className="flex items-center cursor-pointer gap-4">
                <span className="text-3xl font-light">
                  {openIndex === 0 ? "−" : "+"}
                </span>
                Sign up
              </span>
            </button>

{openIndex === 0 && (
  <div className="px-8 py-7 bg-white text-gray-700 text-base leading-relaxed space-y-5">

    <p>
      <strong>Registration for World Diplomats</strong>
    </p>

    <p>
      <strong>Who Can Join World Diplomats?</strong><br />
      World Diplomats welcomes participants from all backgrounds. Whether you are in middle school, high school, university, or simply someone passionate about global affairs, diplomacy, and leadership, this program is designed to offer a meaningful learning experience for everyone. World Diplomats goes beyond traditional student-focused simulations, opening its doors to any individual who wants to take part in one of the world’s most ambitious and expansive UN simulation programs.
    </p>

    <p>
      <strong>Four Levels. One Global Experience.</strong><br />
      World Diplomats offers three tailored simulations:
    </p>

    <ul className="list-disc pl-6">
      <li>Junior Diplomats (Middle School)</li>
      <li>Senior Diplomats (High School)</li>
      <li>Advanced Diplomats (University)</li>
      <li>Individual Delegates (No Institutions)</li>
    </ul>

    <p>
      While each level is structured separately, all simulations run simultaneously, creating a dynamic and diverse environment where delegates of varying ages and backgrounds learn, collaborate, and grow together.
    </p>

    <p>
      <strong>A Global Platform for Diplomacy</strong><br />
      Designed as the largest UN simulation initiative in the world, World Diplomats provides professional training and committee sessions held entirely in English. Delegates will engage in high-level debates, develop critical thinking and leadership skills, and immerse themselves in real-world global challenges, all while being part of a truly international diplomatic community.
    </p>

    <p>
      This extraordinary journey begins in <strong>Riyadh, Saudi Arabia</strong>, setting the stage for a global platform that aims to redefine MUN experiences worldwide.
    </p>

    <p>
      <strong>Registration</strong><br />
      <em>For Students:</em> Choose your preferred package, complete the form, and secure your spot at World Diplomats.<br /><br />
      <em>For Teachers & Delegation Leaders:</em> Use the delegation option to register your entire group efficiently.
    </p>

    <p>
      <strong>Start Your Diplomatic Journey</strong><br />
      Join us in shaping the world’s largest and most transformative UN simulation experience. Step into diplomacy, expand your perspectives, and become part of a global movement.<br />
      We look forward to welcoming you to World Diplomats.
    </p>

    <Link href="/Register-Now?destination=Riyadh,%20Saudi%20Arabia">
      <button className="mt-4 bg-[#2563eb] cursor-pointer hover:bg-blue-700 transition px-7 py-3 rounded-lg text-white text-base">
        Register Now
      </button>
    </Link>

    <p>
      <strong>Visa Information for World Diplomats Participants</strong><br />
      Participation in World Diplomats does not require a study visa. Delegates traveling to Saudi Arabia for the conference are generally required to obtain a tourist or conference-related visa, unless they are citizens of a visa-exempt country or a GCC member state.
    </p>

    <p>
      Citizens of Gulf Cooperation Council (GCC) countries may enter Saudi Arabia without a visa using valid national identification or a passport, in accordance with GCC travel regulations. Nationals of eligible countries may apply for a Saudi tourist e-Visa or obtain a visa on arrival, subject to current Saudi immigration policies.
    </p>

    <p>
      Delegates from countries not eligible for the e-Visa or visa-on-arrival program are required to apply for a standard visa through a Saudi embassy or consulate in their country of residence. Applicants are strongly advised to review entry requirements well in advance of travel.
    </p>

    <p>
      All non-Saudi nationals should consult the official Saudi government visa portal to confirm eligibility, visa type, documentation requirements, and entry conditions prior to making travel arrangements.
    </p>

    <p>
      <strong>Visa Support Letter from World Diplomats</strong><br />
      Once you register, World Diplomats can issue an official confirmation-of-participation letter to support your visa application. This letter does not guarantee visa approval and cannot replace an official visa. Visas are granted only by the relevant government authorities.
    </p>

    <p>
      <strong>How to Request Your Visa Support Letter</strong><br />
      1- Register yourself or your delegation for World Diplomats and confirm your participation by completing the payment.<br />
      2- After we receive your payment, send an email to{" "}
      <a href="mailto:info@worlddiplomats.org" className="text-blue-600 underline">
        info@worlddiplomats.org
      </a>{" "}
      or contact us on WhatsApp at (number) to request your letter.<br />
      3- Our Secretariat will process your request within 2–3 working days and send you the document.
    </p>

    <p>
      <strong>Location:</strong><br />
      6623 Eastern Ring Rd, Ghirnatah,<br />
      Riyadh 13241, Saudi Arabia
    </p>

  </div>
)}




          </div>

          {/* PREPARATION */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <button
              onClick={() => toggle(1)}
              className="w-full bg-[#14144b] px-8 py-5 flex items-center justify-between text-white text-lg font-medium"
            >
              <span className="flex cursor-pointer items-center gap-4">
                <span className="text-3xl font-light">
                  {openIndex === 1 ? "−" : "+"}
                </span>
                Preparing yourself for the project
              </span>
            </button>

          {openIndex === 1 && (
  <div className="px-8 py-7 bg-white text-gray-700 text-base leading-relaxed space-y-5">

    <p>
      <strong>Preparation for World Diplomats</strong>
    </p>

    <p>
      <strong>General Information</strong><br />
      Once you receive your country and committee assignments, each delegate must submit a Position Paper representing their nation’s official stance on the committee topic. This document should briefly outline key issues, your country’s policies, and any relevant international agreements or resolutions that support your position. It should also include practical recommendations your country would advocate for during the conference.
    </p>

    <p>
      <strong>Format and Guidelines</strong>
    </p>

    <ul className="list-disc pl-6 space-y-1">
      <li>The length of the document must not exceed one page.</li>
      <li>Standard margins, with Arial 10pt font and justified text.</li>
      <li>The inclusion of the flag or national coat of arms in the header is accepted.</li>
      <li>The represented country, the committee, and the topic must be clearly indicated before the text.</li>
      <li>
        Do not include citations or bibliography: the Position Paper is a political statement and must be written as if it were a real diplomatic representative writing it; it is not an academic paper.
      </li>
      <li>The document must be submitted in a PDF format.</li>
      <li>Each delegate may submit only one Position Paper related to their assignment.</li>
      <li>Each delegate will represent the country in the committee individually.</li>
    </ul>

    <p>
      Please note that Position Papers must consist entirely of original writing. Based on their research, delegates must develop their own ideas and recommendations and present them in their own words.
    </p>

    <p>
      <strong>Deadline for submitting Position Papers:</strong> 05th October, 2026 at 23:59
    </p>

    <p>
      <strong>Disclaimer:</strong>
    </p>

    <ul className="list-disc pl-6 space-y-1">
      <li>
        Get a personalized quote for flights, accommodation and transfers only if you need them.
      </li>
      <li>
        Write to us at{" "}
        <a href="mailto:info@worlddiplomats.org" className="text-blue-600 underline">
          info@worlddiplomats.org
        </a>{" "}
        and we will give you all the support you need.
      </li>
      <li>
        Include our MUN in your program to incentivize and encourage students to embrace active citizenship and develop soft skills through an innovative and exciting training program like the Simulation.
      </li>
      <li>
        Write to us at{" "}
        <a href="mailto:info@worlddiplomats.org" className="text-blue-600 underline">
          info@worlddiplomats.org
        </a>{" "}
        to become our official partner.
      </li>
    </ul>

  </div>
)}



          </div>

          {/* DURING CONFERENCE */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <button
              onClick={() => toggle(2)}
              className="w-full bg-[#14144b] px-8 py-5 flex items-center justify-between text-white text-lg font-medium"
            >
              <span className="flex cursor-pointer items-center gap-4">
                <span className="text-3xl font-light">
                  {openIndex === 2 ? "−" : "+"}
                </span>
                During the conference
              </span>
            </button>

            {openIndex === 2 && (
  <div className="px-8 py-7 bg-white text-base space-y-6">

    <h3 className="font-semibold text-[#0b1d4d] text-xl mb-4">
      Conference Schedule and Committee Topics of Discussion
    </h3>

    <p className="font-semibold mb-4">Preliminary Schedule:</p>

    {[
      {
        day: "Day 1",
        items: [
          ["02:00 pm – 03:00 pm", "Arrival and Registrations"],
          ["03:00 pm – 04:00 pm", "Check-In"],
          ["05:00 pm – 06:00 pm", "Preparation Opening Ceremony"],
          ["06:00 pm – 07:00 pm", "Opening Ceremony"],
          ["07:00 pm – 08:00 pm", "Opening Dinner"],
          ["08:00 pm – 09:00 pm", "Masquerade Prom Dance"],
          ["09:00 pm – 10:00 pm", "Ice Breaking – First Committee Session"],
          ["10:00 pm – Onwards", "Free Night"],
        ],
      },
      {
        day: "Day 2",
        items: [
          ["06:00 am – 08:00 am", "Breakfast"],
          ["08:00 am – 09:00 am", "Committee Session Preparation"],
          ["09:00 am – 11:00 am", "Committee Session 2"],
          ["11:00 am – 11:30 am", "Break"],
          ["11:30 am – 01:30 pm", "Committee Session 3"],
          ["01:30 pm – 03:00 pm", "Lunch"],
          ["03:00 pm – 04:30 pm", "Committee Session 4"],
          ["04:30 pm – 04:45 pm", "Break"],
          ["04:45 pm – 05:30 pm", "Crisis Session"],
          ["05:30 pm – 06:15 pm", "Preparation for Cultural Global Village"],
          ["06:30 pm – 07:30 pm", "Awarding Ceremony"],
          ["07:30 pm – 08:15 pm", "Dinner"],
          ["08:15 pm – 11:00 pm", "Cultural Global Village"],
        ],
      },
      {
        day: "Day 3",
        items: [
          ["06:00 am – 08:00 am", "Breakfast"],
          ["08:00 am – 09:00 am", "Lobby for City Tour"],
          ["09:00 am – 07:00 pm", "City Tour"],
          ["06:00 pm – 08:00 pm", "Dinner"],
          ["09:00 pm – Onwards", "Back to Hotel"],
        ],
      },
      {
        day: "Day 4",
        items: [
          ["06:00 am – 09:00 am", "Breakfast"],
          ["12:00 pm – Onwards", "Check-Out"],
        ],
      },
    ].map((day, idx) => (
      <div key={idx}>
        <h4 className="font-semibold text-[#2563eb] mb-3 text-lg">
          {day.day}
        </h4>

        <div className="space-y-2">
          {day.items.map((item, i) => (
            <div
              key={i}
              className="flex gap-6 bg-[#f1f3f8] rounded-lg px-5 py-3"
            >
              <span className="w-44 sm:w-52 font-semibold text-[#2563eb]">
                {item[0]}
              </span>
              <span className="text-gray-700">
                {item[1]}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)}


  


          </div>


          {/* PREPARATION */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <button
              onClick={() => toggle(3)}
              className="w-full bg-[#14144b] px-8 py-5 flex items-center justify-between text-white text-lg font-medium"
            >
              <span className="flex cursor-pointer items-center gap-4">
                <span className="text-3xl font-light">
                  {openIndex === 3 ? "−" : "+"}
                </span>
                Committee and topics
              </span>
            </button>

        {openIndex === 3 && (
  <div className="px-8 py-7 bg-white text-gray-700 text-base leading-relaxed space-y-6">

    {/* UNSC */}
    <h3 className="font-semibold text-[#0b1d4d] text-lg">
      1. United Nations Security Council (UNSC)
    </h3>

    <p className="font-semibold">
      Agenda:<br />
      “Maintaining International Peace and Security Amid Regional Rivalries and Global Power Shifts.”
    </p>

    <p className="font-semibold">Topics for Debate:</p>

    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Ensuring Collective Security and De-Escalation Mechanisms in the Middle East</strong><br />
        Focus on regional dialogue, confidence-building measures, and preventive diplomacy.
      </li>
      <li>
        <strong>Reforming Peace Operations and Mandates in Protracted Conflict Zones</strong><br />
        Assessing effectiveness of peacekeeping, enforcement tools, and diplomatic mediation.
      </li>
    </ul>

    <p className="font-semibold">SDGs: 16, 17</p>

    {/* WHO */}
    <h3 className="font-semibold text-[#0b1d4d] text-lg mt-6">
      2. World Health Organization (WHO)
    </h3>

    <p className="font-semibold">
      Agenda:<br />
      “Strengthening Global Health Security and Resilient Healthcare Systems.”
    </p>

    <p className="font-semibold">Topics for Debate:</p>

    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Improving Preparedness for Pandemics and Transnational Health Emergencies</strong><br />
        Focusing on early warning systems, vaccine equity, and international coordination.
      </li>
      <li>
        <strong>Ensuring Universal Access to Healthcare in Developing and Conflict-Affected Regions</strong><br />
        Addressing infrastructure gaps, workforce shortages, and health financing.
      </li>
    </ul>

    <p className="font-semibold">SDGs: 3, 10</p>

    {/* ECOSOC */}
    <h3 className="font-semibold text-[#0b1d4d] text-lg mt-6">
      3. Economic and Social Council (ECOSOC)
    </h3>

    <p className="font-semibold">
      Agenda:<br />
      “Inclusive Economic Growth and Social Resilience in a Transforming Global Economy.”
    </p>

    <p className="font-semibold">Topics for Debate:</p>

    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Diversifying Economies and Reducing Dependence on Natural Resources</strong><br />
        Exploring sustainable growth models, innovation, and job creation.
      </li>
      <li>
        <strong>Reducing Global Inequalities Through Social Protection and Development Policies</strong><br />
        Addressing poverty alleviation, education access, and labor inclusion.
      </li>
    </ul>

  </div>
)}




          </div>

        </div>
      </div>
    </section>
  );
};



export default RiyadhImportantDates
