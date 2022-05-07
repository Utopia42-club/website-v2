import React from "react";
import { HeaderImg, DownloadLogos } from "../../assets";
import './Footer.scss'
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <img src={HeaderImg.Logo} alt="" />
                <h1>Utopia42</h1>
            </div>
            <div className="links">
                {/* <div className="area-1">
                    <h2>Explore</h2>
                    <h4>Connect to Metamask</h4>
                    <h4><a href="https://app.utopia42.club/home" target="_blank" >Play on Browser</a></h4>
                </div> */}
                <div className="area-2">
                    <h2>About</h2>
                    <li><Link to='/team'>Our Team</Link></li>
                    <li><Link to='/'>Whitepaper</Link></li>
                    <li><Link to='/roadmap'>Roadmap</Link></li>
                </div>
                <div className="area-3">
                    <h2>Others</h2>
                    <a href="#FAQ">Support & FAQ</a>
                    {/* <a href=".social"><h4>Social</h4></a> */}
                    {/* <h4>UNBC</h4> */}
                </div>
                <div className="area-4">
                    <div className="head-area-3">
                        <h2>Downloads</h2>
                        <h3>Download Utopia42 from your desired plateforms</h3>
                    </div>
                    <div className="download-sec">
                        <img src={DownloadLogos.p1} alt="" />
                        {/* <img src={DownloadLogos.p2} alt="" /> */}
                        {/* <img src={DownloadLogos.p3} alt="" /> */}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;