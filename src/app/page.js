import Image from "next/image";

import Navbar from "./component/navbar/Navbar";
import HeroSection from "./component/hero section/HeroSection";
import WorldDiplomats from "./component/world diplomats/WorldDiplomats";
import EligibilityCriteria from "./component/eligibility criteria/EligibilityCriteria";
import Ourstages from "./component/ourStages/Ourstages";
import OurYouthLeaders from "./component/our youth leaders/OurYouthLeaders";
import BecomeDiplomets from "./component/becomeDiplomets/BecomeDiplomets";
import OurImpact from "./component/ourimpact/OurImpact";
import Gallery from "./component/gallery/Gallery";
import ContactUS from "./component/contactus/ContactUS";
import Footer from "./component/footer/Footer";
import ScrollToTop from "./component/Scrolltotop/ScrollToTop";
import Whatsapp from "./component/whatsapp/Whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorldDiplomats />
      <Ourstages />
      <EligibilityCriteria />
      <BecomeDiplomets />
      <OurYouthLeaders />
      <OurImpact />
      <Gallery />
      <ContactUS />
    </>
  );
}
