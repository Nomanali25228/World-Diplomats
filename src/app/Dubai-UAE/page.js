import React from 'react'
import Navbar from '../component/navbar/Navbar'
import DestinationHeroSection from '../component/destination-hero-section/DestinationHeroSection'
import DestinationDelegatesAttending from '../component/destination-delegates-attending/DestinationDelegatesAttending'
import DestinationParticipantsExpected from '../component/destination-participants-expected/DestinationParticipantsExpected'
import DubaibgImage from "../../../public/img/Dubai-Hero-Section.jpg";
import DubaicityImg from "../../../public/img/Dubai-Participants-Expected.jpg";
import DestinationPrice from '../component/destination-price/DestinationPrice'
import DubaiImportantDates from '../component/dubai-important-dates/DubaiImportantDates'
import DestinationQuestions from '../component/destinationquestions/DestinationQuestions'

const page = () => {

  // Example props data
  const heroData = {
    title: "Dubai",
    subtitle: "UAE",
    dates: "14 - 15 - 16 - 17 May, 2026",
    agenda: "Conference Agenda: Reimagining Global Governance — Protecting Human Rights, Peace, and Public Health in an Era of Uncertainty.",
    bgImage: DubaibgImage,
    registerlinke: "/registrations",
    pricinglink: "/pricing",
  }

  const delegatesData = {
    title: "Dubai Conference Overview",
    DelegatesAttending: 500,
    Location: "Dubai, UAE",
  }

  const participantsData = {
    title: "The most competitive United Nations Simulation in the World",
    subtitle1: "World Diplomats centers on the urgent need to strengthen global cooperation as the world faces rising conflicts, rapid technological change, and unprecedented public health challenges. This year's agenda invites delegates to explore innovative frameworks for safeguarding human rights, promoting sustainable peace, and building resilient health systems.",
    subtitle2: "Through thoughtful diplomacy and informed debate, participants will work toward reimagining international governance for a more secure and equitable future.",
    cardimage: DubaicityImg,
  }

  const DestinationPriceData = {
    tital: "Dubai UAE Packages",
    Basic: "$389",
    DelegateAccommodationExperience: "$551",
    DelegatefullExperience: "$670",
  };
  return (
    <div>
      <Navbar />

      {/* Pass props to Hero Section */}
      <DestinationHeroSection
        title={heroData.title}
        subtitle={heroData.subtitle}
        dates={heroData.dates}
        agenda={heroData.agenda}
        bgImage={heroData.bgImage}
        registerlinke={heroData.registerlinke}  // match component prop
        pricinglink={heroData.pricinglink}      // match component prop
      />


      {/* Pass props to Delegates Attending */}
      <DestinationDelegatesAttending
        title={delegatesData.title}
        DelegatesAttending={delegatesData.DelegatesAttending}
        Location={delegatesData.Location}
      />

      {/* Pass props to Participants Expected */}
      <DestinationParticipantsExpected
        title={participantsData.title}
        subtitle1={participantsData.subtitle1}
        subtitle2={participantsData.subtitle2}
        cardimage={participantsData.cardimage}
      />



      <DestinationPrice
        tital={DestinationPriceData.tital}
        Basic={DestinationPriceData.Basic}
        DelegateAccommodationExperience={DestinationPriceData.DelegateAccommodationExperience}
        DelegatefullExperience={DestinationPriceData.DelegatefullExperience}
      />

      <DubaiImportantDates />


      <DestinationQuestions />

    </div>
  )
}

export default page
