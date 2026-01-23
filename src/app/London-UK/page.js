import React from 'react'
import Navbar from '../component/navbar/Navbar'
import DestinationHeroSection from '../component/destination-hero-section/DestinationHeroSection'
import DestinationDelegatesAttending from '../component/destination-overview/DestinationOverview'
import DestinationParticipantsExpected from '../component/destination-participants-expected/DestinationParticipantsExpected'
import LondonbgImage from "../../../public/img/London-Hero-Section.png";
import DubaicityImg from "../../../public/img/Dubai-Participants-Expected.jpg";
import DestinationPrice from '../component/destination-price/DestinationPrice'
import DestinationQuestions from '../component/destinationquestions/DestinationQuestions'
import DestinationMap from '../component/destination-map/DestinationMap'
import hotelx1 from "../../../public/img/bghotellondon1.jpg";
import hotelx2 from "../../../public/img/hotellondon2.jpg";
import hotelx3 from "../../../public/img/hotellondon3.jpg";
import hotelx4 from "../../../public/img/hotellondon4.jpg";
import hotelx5 from "../../../public/img/hotellondon5.jpg";
import DestinationCityTour from '../component/destination-city-tour/DestinationCityTour'
import taksimImg from "../../../public/img/LondonCityTour1.jpeg";
import arastaImg from "../../../public/img/LondonCityTour2.jpg";
import bosporusImg from "../../../public/img/LondonCityTour3.jpeg";
import LondonImportantDates from '../component/londonimportantdates/LondonImportantDates'
import DestinationSeriesofEveent from '../component/destination-seriesofeveent/DestinationSeriesofEveent';
import culturalImage from "../../../public/img/CulturalGlobalVillagelondon.jpg";
import CountdownSection from '../component/countdown-section/CountdownSection';



const page = () => {

  // Example props data
  const heroData = {
    title: "London",
    subtitle: "UK",
    dates: "TBD September 2026",
    agenda: "Conference Agenda: Multilateral Governance, Sustainable Development, and Global Stability in a Fragmented World.",
    bgImage: LondonbgImage,
    registerlinke: "/Register-Now?destination=London,%20UK",
    pricinglink: "#pricing",
    targetDate: "2026-09-15T00:00:00", // Event start date (placeholder - TBD)
  }

  const delegatesData = {
    title: "London Conference",
    DelegatesAttending: 250,
    Location: "London, UK",
  }

  const participantsData = {
    title: "The most competitive United Nations Simulation in the World",
    ParticipantsExpected: 250,
    subtitle1: "World Diplomats places a strong emphasis on strengthening multilateral cooperation as the international community confronts widening inequalities, climate challenges, and rapid technological transformation. This year’s London agenda invites delegates to examine forward-looking policy frameworks that advance sustainable development, inclusive governance, and global resilience.",
    subtitle2: "Through constructive diplomacy and informed debate, participants will engage in reimagining international cooperation to build a more just, innovative, and sustainable future.",
    cardimage: LondonbgImage,
  }

  const DestinationPriceData = {
    tital: "London UK",
    Basic: "$859",
    DelegateAccommodationExperience: "$1191",
    DelegatefullExperience: "$1628",
    Experience1: [
      "✔ Everything in Delegate Accommodation Experience",
      "✔ London city tour",

    ]
  };

  const DestinationCityTourData = {
    title1: "London Bridge",
    image1: taksimImg,
    title2: "Big Ben",
    image2: arastaImg,
    title3: "Tower Bridge",
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
      <DestinationDelegatesAttending
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


      <LondonImportantDates />


      <DestinationMap
        bgimg5={hotelx1}
        img1={hotelx4}
        img2={hotelx3}
        img3={hotelx2}
        img4={hotelx5}
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2073.8410809691873!2d-0.44376192414652993!3d51.48152681259408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767248b4db8263%3A0x13eaaf45e2a032b0!2sRadisson%20Blu%20Hotel%2C%20London%20Heathrow!5e1!3m2!1sen!2sus!4v1766936521239!5m2!1sen!2sus"
        hname="Radisson Blu Hotel, London "
        disc="Radisson Blu Hotel, London Heathrow is unique from the outset. Perfect for weekend stays, relaxing breaks, and business travel, the hotel features 464 bedrooms and suites, two restaurants, as well as a health club with state-of-the-art Technogym equipment, perfect for morning energizing and evening downtime"
      />

      <DestinationQuestions destination="London, UK" />

    </div>
  )
}

export default page
