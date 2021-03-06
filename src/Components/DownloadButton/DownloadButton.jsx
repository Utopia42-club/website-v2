import React from "react";
import './Downloadbutton.scss'
import { ButtonIcons } from '../../assets/index'
const DownloadButton = () => {
    return (
        <div className="downloadBtn">
            <div className="icon">
                <div className="down-area">
                    <img src={ButtonIcons.Download} alt="" className="white-play" />
                </div>
            </div>
            <a href={require('../../Files/Utopia42_Whitepaper_v1.pdf')} target="_blank"><h4>Download Whitepaper</h4></a>
        </div>
    )
}
export default DownloadButton

// https://app.utopia42.club/home