import React from "react";
import { ButtonIcons } from '../../assets/index.js'
import Discord from '../../assets/icons8-discord.svg';
import './PlayButton.scss'
const PlayButton = () => {
    return (
        <div className="bt">
            <div className="icon-2" style={{marginRight:"4px"}}>
                <div className="play-area">
                    <img width="30px" src={Discord} alt="" className="white-play" />
                </div>
            </div>
            <h4>
            <a href="https://discord.gg/TphaKUZzHx" target="_blank" >
                    Join our Discord
            </a></h4>
        </div>
    )
}
export default PlayButton

// ButtonIcons.PlayW}