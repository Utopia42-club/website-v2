import React from "react";
import './download.scss'
import { DownloadLogos } from '../../assets/index'
const Download = () => {
    return (
        <div className="downlaod_now" id="download">
            <div className="bg-area">
                <div className="head">
                    <h1>DOWNLOAD UTOPIA42 ON YOUR <br />FAVORITE PLATFORM</h1>
                    <div className="d-img">
                        <img src={DownloadLogos.d_img} alt="" />
                    </div>
                </div>
                <h4>Utopia42 is available on Windows.</h4>

                <div className="plateforms">
                    <div className="d2-img">
                        <img src={require('../../assets/download-area-img-2.png')} alt="" />
                    </div>
                    <a href="#"><img src={DownloadLogos.p1_b} alt="windos" /></a>
                    {/* <a href="#"><img src={DownloadLogos.p2_b} alt="ios" /></a> */}
                    {/* <a href="#"><img src={DownloadLogos.p3_b} alt="android" className="and" /></a> */}
                </div>
            </div>
        </div>
    )
}
export default Download