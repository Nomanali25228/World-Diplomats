import React from 'react'
import Navbar from '../component/navbar/Navbar'
import DestinationHeroSection from '../component/destination-hero-section/DestinationHeroSection'
import DestinationDelegatesAttending from '../component/destination-overview/DestinationOverview'
import DestinationParticipantsExpected from '../component/destination-participants-expected/DestinationParticipantsExpected'
import DubaibgImage from "../../../public/img/Dubai-Hero-Section.jpg";
import DubaicityImg from "../../../public/img/Dubai-Participants-Expected.jpg";
import DestinationPrice from '../component/destination-price/DestinationPrice'
import DestinationQuestions from '../component/destinationquestions/DestinationQuestions'
import DestinationMap from '../component/destination-map/DestinationMap'
import hotelx1 from "../../../public/img/bghotelistanbul1.jpg";
import hotelx2 from "../../../public/img/hotelistanbul2.jpg";
import hotelx3 from "../../../public/img/hotelistanbul3.jpg";
import hotelx4 from "../../../public/img/hotelistanbul4.jpg";
import hotelx5 from "../../../public/img/hotelistanbul5.jpg";
import DestinationCityTour from '../component/destination-city-tour/DestinationCityTour'
import MalaysiaImportantDates from '../component/malaysiaimportantdates/MalaysiaImportantDates'

const page = () => {

  // Example props data
  const heroData = {
    title: "Kuala Lumpur",
    subtitle: "Malaysia",
    dates: "09 - 10 - 11 - 12 July, 2026",
    agenda: "Conference Agenda: Diplomacy in an Era of Armed Conflict, Human Rights Accountability, and Global Systemic Resilience.",
    bgImage: DubaibgImage,
    registerlinke: "/Register-Now",
    pricinglink: "#pricing",
  }

  const delegatesData = {
    title: "Kuala Lumpur Conference",
    DelegatesAttending: 500,
    Location: "Kuala Lumpur, Malaysia",
  }

  const participantsData = {
    title: "The most competitive United Nations Simulation in the World",
    subtitle1: "World Diplomats centers on the urgent need to strengthen global cooperation as the world faces rising conflicts, rapid technological change, and unprecedented public health challenges. This year's agenda invites delegates to explore innovative frameworks for safeguarding human rights, promoting sustainable peace, and building resilient health systems.",
    subtitle2: " Through thoughtful diplomacy and informed debate, participants will work toward reimagining international governance for a more secure and equitable future.",
    cardimage: DubaicityImg,
  }

  const DestinationPriceData = {
    tital: "Kuala Lumpur ",
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
            <DestinationCityTour  />
      

      <MalaysiaImportantDates />

      
             <DestinationMap
              bgimg5={hotelx1}
              img1={hotelx4}
              img2={hotelx3}
              img3={hotelx2}
              img4={hotelx5}
              map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d376.7757589586041!2d55.299970984918254!3d25.15581725010392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f688c5516ea0f%3A0x44800f32689f57e2!2sThe%20Meydan%20Hotel!5e1!3m2!1sen!2sus!4v1742271411150!5m2!1sen!2sus"
              hname="Meydan Hotel, Dubai, UAE"
              disc="The Meydan Hotel is Dubai’s ultimate destination for contemporary rooms, social dining and trackside views, with Dubai’s thrilling racing culture at its core."
            />


      <DestinationQuestions />

    </div>
  )
}

export default page
