import React from "react";
import { PartnerLogos } from "../../assets";
import Pl from '../../assets/partner-logo.svg'
import './OurPartners.scss'
const OurParnter = () => {
    return (
        <div className="partners">
            <h1>Our Partners</h1>
            <div className="slider">
                <div className="slide-track">
                    <div className="partner-logo">
                        <a href="https://www.muon.net/" target="_blank"><img src={PartnerLogos.Muon} alt="" /></a>
                    </div>
                    <div className="partner-logo">
                        <a href="https://www.brightid.org/" target="_blank"><img src={PartnerLogos.Brightid} alt="" /></a>
                    </div>
                    {/* <div className="partner-logo">
                        <img src={PartnerLogos.Logic} alt="" />
                    </div>
                    <div className="partner-logo">
                        <img src={PartnerLogos.coursea} alt="" />
                    </div>
                    <div className="partner-logo">
                        <img src={PartnerLogos.Gpe} alt="" />
                    </div>
                    <div className="partner-logo">
                        <img src={PartnerLogos.Inter} alt="" />
                    </div>
                    <div className="partner-logo">
                        <img src={PartnerLogos.Nvidia} alt="" />
                    </div>
                    <div className="partner-logo">
                        <img src={PartnerLogos.Cambridge} alt="" />
                    </div>
                    <div className="partner-logo">
                        <img src={Pl} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default OurParnter