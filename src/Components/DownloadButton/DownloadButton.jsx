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
            <h4>Download now</h4>
        </div>
    )
}
export default DownloadButton