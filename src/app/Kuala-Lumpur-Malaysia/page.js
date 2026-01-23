import React from 'react'
import Navbar from '../component/navbar/Navbar'
import DestinationHeroSection from '../component/destination-hero-section/DestinationHeroSection'
import DestinationDelegatesAttending from '../component/destination-overview/DestinationOverview'
import DestinationParticipantsExpected from '../component/destination-participants-expected/DestinationParticipantsExpected'
import MalaysiabgImage from "../../../public/img/Malaysia-Hero-Section.jpg";
import DubaicityImg from "../../../public/img/Dubai-Participants-Expected.jpg";
import DestinationPrice from '../component/destination-price/DestinationPrice'
import DestinationQuestions from '../component/destinationquestions/DestinationQuestions'
import DestinationMap from '../component/destination-map/DestinationMap'
import hotelx1 from "../../../public/img/bghotelmalaysia1.jpg";
import hotelx2 from "../../../public/img/hotelmalaysia2.jpeg";
import hotelx3 from "../../../public/img/hotelmalaysia3.jpeg";
import hotelx4 from "../../../public/img/hotelmalaysia4.jpeg";
import hotelx5 from "../../../public/img/hotelmalaysia5.jpeg";
import DestinationCityTour from '../component/destination-city-tour/DestinationCityTour'
import MalaysiaImportantDates from '../component/malaysiaimportantdates/MalaysiaImportantDates'
import taksimImg from "../../../public/img/MalaysiaCityTour1.jpg";
import arastaImg from "../../../public/img/MalaysiaCityTour2.jpg";
import bosporusImg from "../../../public/img/MalaysiaCityTour3.jpg";
import DestinationSeriesofEveent from '../component/destination-seriesofeveent/DestinationSeriesofEveent';
import culturalImage from "../../../public/img/CulturalGloblVillageMalaysia.jpg";
import CountdownSection from '../component/countdown-section/CountdownSection';


const page = () => {

  // Example props data
  const heroData = {
    title: "Kuala Lumpur",
    subtitle: "Malaysia",
    dates: "TBD July 2026",
    agenda: "Conference Agenda: Diplomacy in an Era of Armed Conflict, Human Rights Accountability, and Global Systemic Resilience.",
    bgImage: MalaysiabgImage,
    registerlinke: "/Register-Now?destination=Kuala%20Lumpur,%20Malaysia",
    pricinglink: "#pricing",
    targetDate: "2026-07-09T00:00:00", // Event start date
  }

  const delegatesData = {
    title: "Kuala Lumpur Conference",
    DelegatesAttending: 355,
    Location: "Kuala Lumpur, Malaysia",
  }

  const participantsData = {
    title: "The most competitive United Nations Simulation in the World",
    ParticipantsExpected: 355,
    subtitle1: "World Diplomats centers on the urgent need to strengthen global cooperation as the world faces rising conflicts, rapid technological change, and unprecedented public health challenges. This year's agenda invites delegates to explore innovative frameworks for safeguarding human rights, promoting sustainable peace, and building resilient health systems.",
    subtitle2: " Through thoughtful diplomacy and informed debate, participants will work toward reimagining international governance for a more secure and equitable future.",
    cardimage: MalaysiabgImage,
  }

  const DestinationPriceData = {
    tital: "Kuala Lumpur ",
    Basic: "$501",
    DelegateAccommodationExperience: "$678",
    DelegatefullExperience: "$809",
    Experience1: [
      "✔ Everything in Delegate Accommodation Experience",
      "✔ Batu Caves",
      "✔ Petronas Twin Towers",
      "✔ Merdeka Square"
    ]
  };


  const DestinationCityTourData = {
    title1: "Batu Caves",
    image1: taksimImg,
    title2: "Petronas Twin Towers",
    image2: arastaImg,
    title3: "Merdeka Square",
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

      <MalaysiaImportantDates />


      <DestinationMap
        bgimg5={hotelx1}
        img1={hotelx4}
        img2={hotelx3}
        img3={hotelx2}
        img4={hotelx5}
        map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.9596922084174!2d101.68984447403369!3d3.16643095304813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc483c7fac3693%3A0xd019d8372997004b!2s100%2C%20Jalan%20Putra%2C%20Chow%20Kit%2C%2050350%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur%2C%20Malaysia!5e1!3m2!1sen!2sus!4v1766931843898!5m2!1sen!2sus"
        hname="Jalan Putra Kuala Lumpur, Malaysia"
        disc="Located opposite the World Trade Centre Kuala Lumpur, the 5-star Sunway Putra Hotel offers a prime conference venue with modern meeting rooms, a grand ballroom, and easy access to public transport."
      />

      <DestinationQuestions destination="Kuala Lumpur, Malaysia" />

    </div>
  )
}

export default page
