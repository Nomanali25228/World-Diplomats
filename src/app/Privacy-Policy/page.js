"use client";
import React from "react";
import bgImage from "../../../public/img/registerbg.jpg";
import Navbar from "../component/navbar/Navbar";

const Page = () => {
  return (
    <>
    <Navbar/>
    <section
      className="relative min-h-screen py-20 px-4 sm:px-6 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* UK THEME OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b4c]/95 via-[#1a2a9c]/85 to-[#b00000]/80"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mt-12 mb-14">
  <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[12px] sm:text-md md:text-lg text-blue-200">
            World Diplomats
          </p>

         
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 space-y-10 text-black leading-relaxed">

          {/* INTRO */}
          <p>
            <strong>World Diplomats</strong> (“we,” “us,” or “our”) is committed to
            protecting your personal data in accordance with the UK General Data
            Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            This Privacy Policy explains how we collect, use, store, and protect
            personal data when you visit our website, register for our
            conferences, or interact with us.
          </p>

          {/* SECTION */}
          <div>
            <h2 className="text-xl font-bold mb-3">1. Data Controller</h2>
            <p>
              For the purposes of UK data protection law, <strong>Globenix Youth
              Forum Ltd</strong> acts as the Data Controller.
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Legal Entity: Globenix Youth Forum Ltd</li>
              <li>Registered Country: United Kingdom</li>
              <li>Company Registration Number: 16913427</li>
              <li>Nature of Business: Educational conferences and MUN programs</li>
              <li>Email: info@worlddiplomats.org</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">2. Personal Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Full name, email, phone number, nationality</li>
              <li>Institutional affiliation</li>
              <li>Committee preferences and participation records</li>
              <li>Visa support documents (passport copy, DOB)</li>
              <li>IP address, browser and device data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">3. Lawful Basis for Processing</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Consent</li>
              <li>Contractual necessity</li>
              <li>Legal obligations</li>
              <li>Legitimate interests</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">4. How We Use Your Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process registrations and applications</li>
              <li>Communicate official conference information</li>
              <li>Issue certificates and invitation letters</li>
              <li>Provide visa support where applicable</li>
              <li>Improve our services and website</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">5. Data Sharing</h2>
            <p>
              We do not sell or rent personal data. Data may be shared only with
              embassies, payment processors, event partners, or legal authorities
              when required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">6. International Transfers</h2>
            <p>
              Data may be transferred outside the UK with appropriate UK GDPR
              safeguards in place.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">7. Data Security</h2>
            <p>
              We apply technical and organisational measures to protect personal
              data, though no online system is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">8. Data Retention</h2>
            <p>
              Data is retained as necessary for conferences, legal compliance,
              historical records, and future outreach related to World
              Diplomats.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">9. Cookies</h2>
            <p>
              Cookies are used to improve functionality, analyse traffic, and
              enhance user experience. Users can manage cookies via browser
              settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">10. Your UK GDPR Rights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access, correction, and erasure</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">11. Children’s Data</h2>
            <p>
              We do not knowingly collect data from children under 13 without
              consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">12. Third-Party Links</h2>
            <p>
              We are not responsible for privacy practices of third-party
              websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">13. Policy Updates</h2>
            <p>
              Updates will be posted on this page. Continued use implies
              acceptance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">14. Contact & Complaints</h2>
            <p>
              Email: <strong>info@worlddiplomats.org</strong><br />
              You may also lodge a complaint with the UK Information
              Commissioner’s Office (ICO).
            </p>
          </div>

          <p className="text-center font-semibold pt-6 border-t">
            © World Diplomats. All Rights Reserved.
          </p>

        </div>
      </div>
    </section>
    </>
  );
};

export default Page;
