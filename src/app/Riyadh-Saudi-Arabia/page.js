import React from 'react'
import Navbar from '../component/navbar/Navbar'
import DestinationHeroSection from '../component/destination-hero-section/DestinationHeroSection'
import DestinationDelegatesAttending from '../component/destination-overview/DestinationOverview'
import DestinationParticipantsExpected from '../component/destination-participants-expected/DestinationParticipantsExpected'
import RiyadhbgImage from "../../../public/img/Riyadh-Hero-Section.jpg";
import DubaicityImg from "../../../public/img/Dubai-Participants-Expected.jpg";
import DestinationPrice from '../component/destination-price/DestinationPrice'
import DestinationQuestions from '../component/destinationquestions/DestinationQuestions'
import DestinationMap from '../component/destination-map/DestinationMap'
import hotelx1 from "../../../public/img/bghotelriyadh1.jpg";
import hotelx2 from "../../../public/img/hotelriyadh2.jpg";
import hotelx3 from "../../../public/img/hotelriyadh3.jpg";
import hotelx4 from "../../../public/img/hotelriyadh4.jpg";
import hotelx5 from "../../../public/img/hotelriyadh5.jpg";
import DestinationCityTour from '../component/destination-city-tour/DestinationCityTour'
import taksimImg from "../../../public/img/RiyadhCityTour1.jpg";
import arastaImg from "../../../public/img/RiyadhCityTour2.jpg";
import bosporusImg from "../../../public/img/RiyadhCityTour3.jpg";
import RiyadhImportantDates from '../component/riyadhimportantdates/RiyadhImportantDates'
import DestinationSeriesofEveent from '../component/destination-seriesofeveent/DestinationSeriesofEveent';
import culturalImage from "../../../public/img/culturalglobalvillageriyadh.jpg";
import CountdownSection from '../component/countdown-section/CountdownSection';



const page = () => {

  // Example props data
  const heroData = {
    title: "Riyadh Saudi",
    subtitle: "Arabia",
    dates: " TBD October , 2026",
    agenda: "Conference Agenda: Strategic Stability, Sustainable Development, and Global Cooperation in a Multipolar World.",
    bgImage: RiyadhbgImage,
    registerlinke: "/Register-Now?destination=Riyadh,%20Saudi%20Arabia",
    pricinglink: "#pricing",
    targetDate: "2026-10-15T00:00:00", // Event start date (placeholder - TBD)
  }

  const delegatesData = {
    title: "Riyadh Conference",
    DelegatesAttending: 400,
    Location: "Riyadh, Saudi Arabia",
  }

  const participantsData = {
    title: "The most competitive United Nations Simulation in the World",
    ParticipantsExpected: 355,
    subtitle1: "World Diplomats emphasize the strategic importance of strengthening multilateral cooperation as the international system navigates widening socioeconomic disparities, regional and global security challenges, and accelerated technological transformation. The Riyadh conference agenda invites delegates to undertake a critical examination of policy frameworks that advance sustainable development,",
    subtitle2: "inclusive governance, and long-term systemic resilience. Through structured diplomatic dialogue and analytical debate, participants will contribute to re-envisioning international cooperation in support of stability, innovation, and a more balanced global order.",
    cardimage: RiyadhbgImage,
  }

  const DestinationPriceData = {
    tital: "Riyadh-Saudi",
    Basic: "$499",
    DelegateAccommodationExperience: "$879",
    DelegatefullExperience: "$1050",
    Experience1: [
      "✔ Everything in Delegate Accommodation Experience",
      "✔ Riyadh City Tour ",
    ]
  };


  const DestinationCityTourData = {
    title1: "Kingdom Centre Tower",
    image1: taksimImg,
    title2: "Ruins of Diriyah",
    image2: arastaImg,
    title3: "Al Masmak Souq",
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

      <RiyadhImportantDates />


      <DestinationMap
        bgimg5={hotelx1}
        img1={hotelx4}
        img2={hotelx3}
        img3={hotelx2}
        img4={hotelx5}
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.290112078169!2d46.72617367442707!3d24.78557934825164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efdbf823ed409%3A0x832121db88558104!2s6623%20Eastern%20Ring%20Rd%2C%20Ghirnatah%2C%20Riyadh%2013241%2C%20Saudi%20Arabia!5e1!3m2!1sen!2s!4v1766952557982!5m2!1sen!2s"
        hname="Hilton Riyadh Hotel"
        disc="The venue is near Granada Mall and Granada Metro Station, with Riyadh’s Financial Plaza and major cultural attractions within easy reach"
      />

      <DestinationQuestions />

    </div>
  )
}

export default page
