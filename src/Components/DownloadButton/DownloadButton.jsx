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
            <a href="https://app.utopia42.club/home"><h4>Download now</h4></a>
        </div>
    )
}
export default DownloadButton