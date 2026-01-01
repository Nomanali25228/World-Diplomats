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
    These <strong>Terms & Conditions</strong> (“Terms”) constitute a legally
    binding agreement between <strong>World Diplomats</strong> (“we,” “us,” or
    “our”) and the participant (“you,” “your”). By registering, making payment,
    or participating in any event organized or administered by World
    Diplomats, you agree to these Terms.
  </p>

  <div>
    <h2 className="text-xl font-bold mb-3">1. Eligibility & Registration</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        Participation is open to students and professionals with an interest
        in Model United Nations, diplomacy, international relations, or related
        academic fields.
      </li>
      <li>
        Registration is confirmed only after successful submission of required
        details and receipt of the applicable conference fee through official
        World Diplomats channels.
      </li>
      <li>
        Participants must provide accurate and truthful information. Any false
        or misleading information may result in cancellation without refund or
        transfer.
      </li>
      <li>
        <strong>Acknowledgement Clause:</strong> By submitting your registration
        and/or payment, you acknowledge that you have read, understood, and
        agree to these Terms & Conditions.
      </li>
    </ul>
  </div>

  <div>
    <h2 className="text-xl font-bold mb-3">
      2. Fees, Payments & Financial Terms
    </h2>

    <p className="font-semibold">2.1 Conference Fees</p>
    <p>
      Conference fees are published on the official website or registration
      portal and cover participation and conference-related services only.
      Bank charges, taxes, or currency conversion fees are the responsibility
      of the participant.
    </p>

    <p className="font-semibold mt-3">2.2 Payment Confirmation</p>
    <p>
      A registration is considered valid only after full or agreed partial
      payment has been received and confirmed by World Diplomats.
    </p>

    <p className="font-semibold mt-3">2.3 Partial / Instalment Payments</p>
    <p>
      Where instalment options are offered, participants must comply with the
      agreed payment schedule. Failure to complete payments may result in
      cancellation, and amounts already paid may be retained as administrative
      charges.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold mb-3">
      3. Fee Transfer & Refund Policy
    </h2>

    <p className="font-semibold">3.1 General Rule</p>
    <p>
      Conference fees are generally non-refundable. However, World Diplomats
      may allow fee transfers or partial credits under the conditions outlined
      below.
    </p>

    <p className="font-semibold mt-3">3.2 Conference Fee Transfer</p>
    <p>
      Participants may request to transfer their paid conference fee to
      another World Diplomats conference if the request is submitted at least
      60 days prior to the start date of the registered conference. All
      transfer requests must be submitted in writing to the official World
      Diplomats email.
    </p>

    <p className="font-semibold mt-3">3.3 Partial Refund & Credit Policy</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>60–45 days prior:</strong> 70% credit voucher issued (30%
        retained as administrative and operational fees).
      </li>
      <li>
        <strong>45–30 days prior:</strong> 50% credit voucher issued (50%
        retained).
      </li>
      <li>
        <strong>Less than 30 days or no-show:</strong> No credit or refund; 100%
        of the fee retained.
      </li>
    </ul>

    <p className="mt-3">
      All credit vouchers are non-transferable, non-cashable, and may only be
      redeemed for up to two upcoming World Diplomats conferences.
    </p>

    <p className="font-semibold mt-3">3.4 Partial Payment Limitation</p>
    <p>
      If only a partial payment has been made, World Diplomats reserves the
      right to treat the amount as non-refundable in the event of cancellation
      or non-attendance.
    </p>

    <p className="font-semibold mt-3">3.5 Force Majeure</p>
    <p>
      In circumstances beyond our control, including political events, health
      emergencies, natural disasters, or venue issues, World Diplomats may
      offer a transfer or credit. Cash refunds are not guaranteed unless
      required by law.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold mb-3">
      4. Visa, Travel & Accommodation
    </h2>
    <p>
      World Diplomats may provide invitation or confirmation letters for visa
      purposes; however, visa approval is solely the responsibility of the
      relevant embassy or consulate. Participants are fully responsible for
      travel, accommodation, and obtaining adequate travel, health, and
      accident insurance.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold mb-3">5. Participant Conduct</h2>
    <p>
      Participants are expected to behave professionally and respectfully at
      all times. World Diplomats reserves the right to suspend or remove any
      participant whose conduct is deemed inappropriate or disruptive, without
      refund or compensation.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold mb-3">
      6. Intellectual Property & Media
    </h2>
    <p>
      All conference materials, content, and branding remain the intellectual
      property of World Diplomats. By participating, you grant permission for
      the use of photographs, videos, and recordings for promotional and
      documentation purposes unless expressly objected to in writing.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold mb-3">7. Limitation of Liability</h2>
    <p>
      To the fullest extent permitted by law, World Diplomats shall not be
      liable for indirect or consequential damages. Any liability shall be
      limited to the amount of fees actually paid by the participant.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold mb-3">8. Governing Law</h2>
    <p>
      These Terms & Conditions are governed by and construed in accordance
      with the laws of the United Kingdom. Any disputes shall be subject to the
      jurisdiction of UK courts.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold mb-3">9. Amendments</h2>
    <p>
      World Diplomats reserves the right to update or modify these Terms &
      Conditions at any time. Updated terms will be published on the official
      website.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-bold mb-3">10. Contact Information</h2>
    <p>
      For questions regarding these Terms & Conditions, please contact:
      <br />
      <strong>info@worlddiplomats.org</strong>
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
