import React from 'react'
import Navbar from '../component/navbar/Navbar'
import DestinationHeroSection from '../component/destination-hero-section/DestinationHeroSection'
import DestinationDelegatesAttending from '../component/destination-delegates-attending/DestinationDelegatesAttending'
import DestinationParticipantsExpected from '../component/destination-participants-expected/DestinationParticipantsExpected'
import istanbulbgImage from "../../../public/img/Istanbul-Hero-Section.jpg";
import IstanbulcityImg from "../../../public/img/Istanbul-Participants-Expected.jpg"; 
import DestinationPrice from '../component/destination-price/DestinationPrice'
import DestinationCityTour from '../component/destination-city-tour/DestinationCityTour'
import IstanbulImportantDates from '../component/istanbul-important-dates/IstanbulImportantDates'
import DestinationQuestions from '../component/destinationquestions/DestinationQuestions'

const page = () => {

  // Example props data
  const heroData = {
    title: "Istanbul",
    subtitle: "Turkey",
    dates: "26 – 27 – 28 – 29 March 2026",
    agenda: "Conference Agenda: Reimagining Global Governance — Protecting Human Rights, Peace, and Public Health in an Era of Uncertainty.",
    bgImage: istanbulbgImage,
    registerlinke: "/registrations",
    pricinglink: "/pricing",
  }

  const delegatesData = {
    title: "Istanbul Conference Overview",
    DelegatesAttending: 500,
    Location: "Istanbul, Turkey",
  }

  const participantsData = {
    title: "The most competitive United Nations Simulation in the World",
    subtitle1: "World Diplomats centers on the urgent need to strengthen global cooperation as the world faces rising conflicts, rapid technological change, and unprecedented public health challenges.",
    subtitle2: "This year's agenda invites delegates to explore innovative frameworks for safeguarding human rights, promoting sustainable peace, and building resilient health systems.",
    cardimage: IstanbulcityImg,
  };
   const DestinationPriceData = {
    tital: "Istanbul Turkey Packages",
    Basic: "$289",
    DelegateAccommodationExperience: "$498",
    DelegatefullExperience: "$568",
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

      <DestinationCityTour  />

      <IstanbulImportantDates  />

      <DestinationQuestions />

    </div>
  )
}

export default page
