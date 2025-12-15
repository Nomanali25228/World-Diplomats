import React from 'react'
import DestiHeroSection from '../component/desti-hero-setion/DestiHeroSetion'
import Navbar from '../component/navbar/Navbar'
import DestiCard from '../component/desti-card/DestiCard'

const page = () => {
  return (
    <div>
        <Navbar />
        <DestiHeroSection />
        <DestiCard  />
      
    </div>
  )
}

export default page
