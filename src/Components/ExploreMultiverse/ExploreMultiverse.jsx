import React from "react";
import { ButtonIcons } from '../../assets/index.js'
import Discord from '../../assets/icons8-discord.svg';
import './PlayButton.scss'
const ExploreMultiverse = () => {
    return (
        <div className="bt">
            <div className="icon">
                <div className="play-area">
                    <img src={ButtonIcons.PlayW} alt="" className="white-play" />
                </div>
            </div>
            <h4>
            <a href="https://discord.gg/TphaKUZzHx" target="_blank" >
                    Explore Multiverse
            </a></h4>
        </div>
    )
}
export default ExploreMultiverse