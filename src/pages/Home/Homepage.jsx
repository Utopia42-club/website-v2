import React from 'react'
import Footer from '../../Components/Footer/Footer'
import HomeHero from '../../Components/Hero/Home-hero'
import WhyUtopia from '../../Components/WhyUtopia/WhyUtopia'
import Protocol from '../../Components/Protocol/Protocol'
// import OurVideo from '../../Components/Our Video/OurVideo'
import OurParnter from '../../Components/OurPartners/OurPartners'
// import Announcements from '../../Components/Announcements/Announcements'
// import Download from '../../Components/Download Utopia42/Download'
import FAQ from '../../Components/FAQ/FAQ'

const HomePage = () => {
    return (
        <div className="home">
            <HomeHero />
            <WhyUtopia />
            <Protocol />
            {/* <OurVideo /> */}
            <OurParnter />
            <FAQ />
            {/* <Download /> */}
            {/* <Announcements /> */}
        </div>
    )
    
}
export default HomePage