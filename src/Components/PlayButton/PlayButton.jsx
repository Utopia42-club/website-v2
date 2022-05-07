import React from "react";
import { ButtonIcons } from '../../assets/index.js'
import './PlayButton.scss'
const PlayButton = () => {
    return (
        <div className="bt">
            <div className="icon">
                <div className="play-area">
                    <img src={ButtonIcons.PlayW} alt="" className="white-play" />
                </div>
            </div>
            <h4><a href="https://app.utopia42.club/home" target="_blank" >Play on Browser</a></h4>
        </div>
    )
}
export default PlayButton