import React from 'react'
import Navbar from '../component/navbar/Navbar'
import DestinationHeroSection from '../component/destination-hero-section/DestinationHeroSection'
import DestinationOverview from '../component/destination-overview/DestinationOverview'
import DestinationParticipantsExpected from '../component/destination-participants-expected/DestinationParticipantsExpected'
import istanbulbgImage from "../../../public/img/Istanbul-Hero-Section.jpg";
import IstanbulcityImg from "../../../public/img/Istanbul-Participants-Expected.jpg";
import DestinationPrice from '../component/destination-price/DestinationPrice'
import DestinationCityTour from '../component/destination-city-tour/DestinationCityTour'
import IstanbulImportantDates from '../component/istanbul-important-dates/IstanbulImportantDates'
import DestinationQuestions from '../component/destinationquestions/DestinationQuestions'

import DestinationMap from '../component/destination-map/DestinationMap'
import hotelx1 from "../../../public/img/bghotelistanbul1.jpg";
import hotelx2 from "../../../public/img/hotelistanbul2.jpg";
import hotelx3 from "../../../public/img/hotelistanbul3.jpg";
import hotelx4 from "../../../public/img/hotelistanbul4.jpg";
import hotelx5 from "../../../public/img/hotelistanbul5.jpg";
import taksimImg from "../../../public/img/IstanbulCityTour1.jpg";
import arastaImg from "../../../public/img/IstanbulCityTour2.jpg";
import bosporusImg from "../../../public/img/IstanbulCityTour3.jpg";
import DestinationSeriesofEveent from '../component/destination-seriesofeveent/DestinationSeriesofEveent';
import culturalImage from "../../../public/img/culturalglobalvillageTurkey.jpg";
import CountdownSection from '../component/countdown-section/CountdownSection';



const page = () => {

  // Example props data
  const heroData = {
    title: "Istanbul",
    subtitle: "Turkey",
    dates: "22 - 23 - 24 - 25 April, 2026",
    agenda: "Conference Agenda: Reimagining Global Governance, Protecting Human Rights, Peace, and Public Health in an Era of Uncertainty.",
    bgImage: istanbulbgImage,
    registerlinke: "/Register-Now?destination=Istanbul,%20Turkey",
    pricinglink: "#pricing",
    targetDate: "2026-04-22T00:00:00", // Event start date
  }

  const delegatesData = {
    title: "Istanbul Conference ",

    DelegatesAttending: 500,
    Location: "Istanbul, Turkey",
  }

  const participantsData = {
    title: "The most competitive United Nations Simulation in the World",
    ParticipantsExpected: 500,
    subtitle1: "World Diplomats centers on the urgent need to strengthen global cooperation as the world faces rising conflicts, rapid technological change, and unprecedented public health challenges.",
    subtitle2: "This year's agenda invites delegates to explore innovative frameworks for safeguarding human rights, promoting sustainable peace, and building resilient health systems.",
    cardimage: istanbulbgImage,
  };
  const DestinationPriceData = {
    tital: "Istanbul Turkey",
    Basic: "$289",
    DelegateAccommodationExperience: "$498",
    DelegatefullExperience: "$568",
    Experience1: [
      "✔ Everything in Delegate Accommodation Experience",
      "✔ Istanbul City Tour",
      "✔ Bosphorus Rooftop Lunch Tour",
      "✔ Cruise Trip & Dinner at Bosphorus"
    ],

  };

  const DestinationCityTourData = {
    title1: "Taksim Square",
    image1: taksimImg,
    title2: "Arasta Bazar",
    image2: arastaImg,
    title3: "Bosporus Cruise Dinner",
    image3: bosporusImg,
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
        targetDate={heroData.targetDate}        // countdown date
      />

      {/* Countdown Section */}
      <CountdownSection targetDate={heroData.targetDate} />

      {/* Pass props to Delegates Attending */}
      <DestinationOverview
        title={delegatesData.title}
        DelegatesAttending={delegatesData.DelegatesAttending}
        Location={delegatesData.Location}
      />

      {/* Pass props to Participants Expected */}
      <DestinationParticipantsExpected
        title={participantsData.title}
        ParticipantsExpected={participantsData.ParticipantsExpected}
        subtitle1={participantsData.subtitle1}
        subtitle2={participantsData.subtitle2}
        cardimage={participantsData.cardimage}
      />

      <DestinationSeriesofEveent culturImagee={culturalImage} />


      <DestinationPrice

        tital={DestinationPriceData.tital}
        Basic={DestinationPriceData.Basic}
        DelegateAccommodationExperience={DestinationPriceData.DelegateAccommodationExperience}
        DelegatefullExperience={DestinationPriceData.DelegatefullExperience}
        Experience1={DestinationPriceData.Experience1}
      />

      <DestinationCityTour
        title1={DestinationCityTourData.title1}
        image1={DestinationCityTourData.image1}
        title2={DestinationCityTourData.title2}
        image2={DestinationCityTourData.image2}
        title3={DestinationCityTourData.title3}
        image3={DestinationCityTourData.image3}
      />
      <IstanbulImportantDates />

      <DestinationMap
        bgimg5={hotelx1}
        img1={hotelx4}
        img2={hotelx3}
        img3={hotelx2}
        img4={hotelx5}
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2510.9473144053363!2d28.809779175186865!3d41.05945921627315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5d52a209bfd%3A0xc941d8ad912e1418!2sG%20Rotana!5e1!3m2!1sen!2sus!4v1744738203590!5m2!1sen!2sus"
        hname="G Rotana Hotel."
        disc="Our aim is to be noticed in Turkey and Istanbul with our service and quality standards, to combine national and international standards with Turkish hospitality so that our guests prefer us, to be one of the actors that directs the sector and to create our brand value. G Rotana Hotel also aims for new investments in the tourism and hotel management field, which is the rising value of Turkey."
      />


      <DestinationQuestions destination="Istanbul, Türkiye" />

    </div>
  )
}

export default page
