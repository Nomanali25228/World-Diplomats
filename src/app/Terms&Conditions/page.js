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
            Terms & Conditions
          </h1>
          <p className="mt-3 text-[12px] sm:text-md md:text-lg text-blue-200">
            World Diplomats
          </p>

          
        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 space-y-10 text-black leading-relaxed">

          <p>
            These <strong>Terms & Conditions</strong> (“Terms”) constitute a
            legally binding agreement between <strong>World Diplomats</strong>
            (“we,” “us,” or “our”) and the participant (“you,” “your”). By
            registering, making payment, or participating in any event organised
            by World Diplomats, you agree to these Terms.
          </p>

          <div>
            <h2 className="text-xl font-bold mb-3">1. Eligibility & Registration</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Participation is open to students and professionals interested
                in Model United Nations, diplomacy, or related fields.
              </li>
              <li>
                Registration is confirmed only after submission of required
                details and receipt of applicable conference fees.
              </li>
              <li>
                Providing false or misleading information may result in
                cancellation without refund or transfer.
              </li>
              <li>
                <strong>Acknowledgement:</strong> By submitting registration or
                payment, you confirm acceptance of these Terms.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">
              2. Fees, Payments & Financial Terms
            </h2>

            <p className="font-semibold mt-3">2.1 Conference Fees</p>
            <p>
              Fees are published on official World Diplomats platforms and cover
              conference participation only. Bank charges, taxes, and currency
              conversion fees are the participant’s responsibility.
            </p>

            <p className="font-semibold mt-3">2.2 Payment Confirmation</p>
            <p>
              Registration becomes valid only after payment is received and
              confirmed.
            </p>

            <p className="font-semibold mt-3">2.3 Partial / Instalment Payments</p>
            <p>
              Failure to complete instalment payments may result in cancellation,
              with amounts paid retained as administrative charges.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">
              3. Fee Transfer & Refund Policy
            </h2>

            <p className="font-semibold">3.1 General Rule</p>
            <p>Conference fees are generally non-refundable.</p>

            <p className="font-semibold mt-3">3.2 Conference Fee Transfer</p>
            <p>
              Transfers to another World Diplomats conference may be requested
              at least 60 days prior to the event start date.
            </p>

            <p className="font-semibold mt-3">3.3 Partial Refund & Credit Policy</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>60–45 days:</strong> 70% credit voucher (30% retained)
              </li>
              <li>
                <strong>45–30 days:</strong> 50% credit voucher (50% retained)
              </li>
              <li>
                <strong>Less than 30 days / No-show:</strong> No refund or credit
              </li>
            </ul>

            <p className="mt-3">
              Credit vouchers are non-transferable, non-cashable, and valid for
              up to two future World Diplomats conferences.
            </p>

            <p className="font-semibold mt-3">3.4 Partial Payment Limitation</p>
            <p>
              Partial payments may be treated as non-refundable in case of
              cancellation.
            </p>

            <p className="font-semibold mt-3">3.5 Force Majeure</p>
            <p>
              In circumstances beyond our control, World Diplomats may offer
              credits or transfers. Cash refunds are not guaranteed unless
              required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">
              4. Visa, Travel & Accommodation
            </h2>
            <p>
              Visa invitation letters may be provided; however, visa approval is
              solely the responsibility of embassies or consulates. Participants
              are responsible for travel, accommodation, and insurance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">5. Participant Conduct</h2>
            <p>
              Participants must maintain professional conduct. World Diplomats
              may remove disruptive participants without refund.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">
              6. Intellectual Property & Media
            </h2>
            <p>
              All materials remain the property of World Diplomats. Participation
              grants permission for event media usage unless objected in writing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              Liability is limited to the amount of fees paid, to the fullest
              extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the United Kingdom, with
              disputes subject to UK courts.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">9. Amendments</h2>
            <p>
              World Diplomats reserves the right to update these Terms at any
              time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">10. Contact Information</h2>
            <p>
              Email: <strong>info@worlddiplomats.org</strong>
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
