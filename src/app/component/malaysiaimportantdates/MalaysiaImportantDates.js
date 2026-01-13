"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import bgimportdates from "../../../../public/img/bgimportandates.jpg";
import { useDestination } from "../../context/DestinationContext";

const MalaysiaImportantDates = () => {
  const [openIndex, setOpenIndex] = useState(4);

  const { getDates } = useDestination();
  const dates = getDates("Kuala Lumpur, Malaysia") || {};

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
                  Registration for World Diplomats is now open.
                  {dates.registrationDeadline && (
                    <>
                      <br />
                      <strong>Deadline:</strong> {dates.registrationDeadline}
                    </>
                  )}
                </p>
              </div>

              {/* Right Button */}
              <div className="flex-shrink-0 self-stretch sm:self-auto flex items-center">
                <Link href={dates.registerLink || "/Register-Now?destination=Kuala%20Lumpur,%20Malaysia"}>
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
                  World Diplomats offers three tailored simulations:<br />
                  Junior Diplomats (Middle School)<br />
                  Senior Diplomats (High School)<br />
                  Advanced Diplomats (University)<br />
                  Individual Delegates (No Institutions)
                </p>

                <p>
                  While each level is structured separately, all simulations run simultaneously, creating a dynamic and diverse environment where delegates of varying ages and backgrounds learn, collaborate, and grow together.
                </p>

                <p>
                  <strong>A Global Platform for Diplomacy</strong><br />
                  Designed as the largest UN simulation initiative in the world, World Diplomats provides professional training and committee sessions held entirely in English. Delegates will engage in high-level debates, develop critical thinking and leadership skills, and immerse themselves in real-world global challenges, all while being part of a truly international diplomatic community.
                </p>

                <p>
                  This extraordinary journey begins in <strong>Kuala Lumpur, Malaysia</strong>, setting the stage for a global platform that aims to redefine MUN experiences worldwide.
                </p>

                <p>
                  <strong>Registration</strong><br />
                  <em>For Students:</em> Choose your preferred package, complete the form, and secure your spot at World Diplomats.<br /><br />
                  <em>For Teachers & Delegation Leaders:</em> Use the delegation option to register your entire group efficiently.
                </p>

                <p>
                  <strong>Start Your Diplomatic Journey</strong><br />
                  Join us in shaping the world’s largest and most transformative UN simulation experience. Step into diplomacy, expand your perspectives, and become part of a global movement. We look forward to welcoming you to World Diplomats.
                </p>

                <Link href="/Register-Now?destination=Kuala%20Lumpur,%20Malaysia">
                  <button className="mt-4 bg-[#2563eb] cursor-pointer hover:bg-blue-700 transition px-7 py-3 rounded-lg text-white text-base">
                    Register Now
                  </button>
                </Link>

                <p>
                  <strong>Visa Information for World Diplomats Participants</strong><br />
                  Participation in World Diplomats does not require a study visa. Delegates traveling to Kuala Lumpur, Malaysia are required to obtain a tourist or conference visa, unless they are citizens of visa-exempt countries under Malaysian immigration regulations.
                </p>

                <p>
                  <strong>Traveling to Malaysia</strong><br />
                  We advise all participants to review the official entry requirements and travel regulations before planning their trip. Complete and updated information can be found on the official government website.<br /><br />
                  You may apply for your visa from your country of residence. At the time of submission, please ensure that all required documents are provided, including:
                </p>

                <ul className="list-disc pl-6">
                  <li>A recent passport-sized color photograph</li>
                  <li>A clear color copy of your passport, valid for at least six (6) months from the intended date of travel</li>
                </ul>

                <p>
                  If you are traveling to Malaysia, kindly consult the Malaysian Embassy or Consulate in your country of residence for the most up-to-date visa requirements, eligibility criteria, and application procedures, as these may vary by nationality.
                </p>

                <p>
                  <strong>Visa Support Letter from World Diplomats</strong><br />
                  Once you register, World Diplomats can issue an official confirmation-of-participation letter to support your visa application. This letter does not guarantee visa approval and cannot replace an official visa. Visas are granted only by the Malaysian government authorities.
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
                  The World Diplomats conference Malaysia will be organised at<br />
                  100, Jalan Putra, Chow Kit, 50350 Kuala Lumpur,<br />
                  Wilayah Persekutuan Kuala Lumpur, Malaysia
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

                {dates.positionPaperDeadline && (
                  <p>
                    <strong>Deadline for submitting Position Papers:</strong> {dates.positionPaperDeadline}
                  </p>
                )}

                <p>
                  <strong>Disclaimer:</strong>
                </p>

                <ul className="list-disc pl-6 space-y-1">
                  <li>Get a personalized quote for flights, accommodation and transfers only if you need them.</li>
                  <li>
                    Write to us at{" "}
                    <a href="mailto:info@worlddiplomats.org" className="text-blue-600 underline">
                      info@worlddiplomats.org
                    </a>{" "}
                    and we will give you all the support you need.
                  </li>
                  <li>
                    Include our MUN in your program to incentivize and encourage students to embrace active citizenship and develop soft skills through an innovative and exciting training program like this UN Simulation.
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
                      ["09:00 am – 01:00 pm", "City Tour"],
                      ["01:00 pm – 05:00 pm", "Batu Caves"],
                      ["05:00 pm – 07:00 pm", "Back to Hotel"],
                      ["08:00 pm – Onwards", "Dinner"],
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
              <div className="px-8 py-7 bg-white text-gray-700 text-base leading-relaxed space-y-5">

                {/* UNHRC */}
                <h3 className="font-semibold text-[#0b1d4d] text-lg">
                  1. United Nations Human Rights Council (UNHRC)
                </h3>

                <p className="font-semibold">
                  Committee Agenda:<br />
                  “Upholding Human Rights and International Humanitarian Law During Protracted Armed Conflicts.”
                </p>

                <p className="font-semibold">Topics for Debate:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Ensuring the Protection of Civilians in Gaza Under International Human Rights and Humanitarian Law</strong><br />
                    Focus on civilian casualties, protection of women and children, access to humanitarian assistance, and the responsibilities of state and non-state actors under international law.
                  </li>
                  <li>
                    <strong>Accountability Mechanisms for Alleged Human Rights Violations in Occupied and Conflict-Affected Territories</strong><br />
                    Examining fact-finding missions, international investigations, the role of UN bodies, and challenges in enforcing accountability while maintaining diplomatic engagement.
                  </li>
                </ul>

                {/* UNSC */}
                <h3 className="font-semibold text-[#0b1d4d] text-lg mt-6">
                  2. United Nations Security Council (UNSC)
                </h3>

                <p className="font-semibold">
                  Committee Agenda:<br />
                  “Preserving International Peace and Security Amid Escalating Regional Conflicts.”
                </p>

                <p className="font-semibold">Topics for Debate:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>The Gaza Conflict and Its Implications for Regional Stability in the Middle East</strong><br />
                    Analyzing ceasefire efforts, cross-border tensions, regional power involvement, and the impact of veto politics on conflict resolution.
                  </li>
                  <li>
                    <strong>The Effectiveness and Limitations of the United Nations Security Council in Responding to Protracted Conflicts</strong><br />
                    Assessing peace enforcement tools, sanctions, diplomatic mediation, and structural reforms to enhance UNSC responsiveness in crises like Gaza.
                  </li>
                </ul>

                {/* WHO */}
                <h3 className="font-semibold text-[#0b1d4d] text-lg mt-6">
                  3. World Health Organization (WHO)
                </h3>

                <p className="font-semibold">
                  Committee Agenda:<br />
                  “Safeguarding Public Health Systems in Conflict and Post-Conflict Environments.”
                </p>

                <p className="font-semibold">Topics for Debate:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Protecting Healthcare Infrastructure and Medical Personnel in Active Conflict Zones</strong><br />
                    Addressing attacks on hospitals, shortages of medical supplies, protection of health workers, and international obligations to ensure uninterrupted healthcare services in Gaza.
                  </li>
                  <li>
                    <strong>Managing Public Health Emergencies Arising from Armed Conflicts</strong><br />
                    Examining disease outbreaks, mental health crises, displacement-related health risks, and the role of international cooperation in rebuilding health systems during and after conflict.
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


export default MalaysiaImportantDates
