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
                    
                    <div className="partner-logo">
                        <a href="https://www.newperspectivellc.info/" target="_blank"><img height="55px;" src={PartnerLogos.NewPerspectivellc} alt="" /></a>
                    </div>
                    <div className="partner-logo">
                        <a href="https://readyplayer.me/" target="_blank"><img height="55px;" src={PartnerLogos.ReadPlayer} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurParnter