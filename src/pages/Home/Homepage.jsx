import React from 'react'
import Footer from '../../Components/Footer/Footer'
import HomeHero from '../../Components/Hero/Home-hero'
import WhyUtopia from '../../Components/WhyUtopia/WhyUtopia'
import Protocol from '../../Components/Protocol/Protocol'
import OurVideo from '../../Components/Our Video/OurVideo'
import OurParnter from '../../Components/OurPartners/OurPartners'
import Announcements from '../../Components/Announcements/Announcements'
import Download from '../../Components/Download Utopia42/Download'
import FAQ from '../../Components/FAQ/FAQ'
// import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";

const HomePage = () => {
    return (
        <div className="home">
            <HomeHero />
            <WhyUtopia />
            <Protocol />
            <OurVideo />
            <OurParnter />
            <FAQ />
            <Download />
            <Announcements />

            {/* <CookieConsent
            location="bottom"
            acceptButton
            buttonText="Accept All Cookies"
            declineButtonText = "Reject All"
            declineCookieValue
            cookieValue
            enableDeclineButton
            cookieName="Utopia42"
            declineButtonStyle = {{ backgroundColor:'#fff',border:'1px solid #ccc',color: "#0b0f3b", fontSize: "14px"}}
            style={{ background: "#FFF" }}
            buttonStyle={{  backgroundColor:'#fff',border:'1px solid #ccc',color: "#0b0f3b", fontSize: "14px" }}
            expires={150}
            debug={true}
            onAccept = {(co) => {console.log(co)}}
            onDecline = {(co) => {console.log(resetCookieConsentValue(), getCookieConsentValue(), co)}}
            >
            <p style={{color:'#000'}}>This website uses cookies to enhance the user experience.</p>
            </CookieConsent> */}
        </div>
    )
    
}
export default HomePage