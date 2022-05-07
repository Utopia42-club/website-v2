import React from "react";
import './Home-hero.scss'
import { Hro } from '../../assets/index.js'
import Header from "../Header/Header";
import PlayButton from "../PlayButton/PlayButton";
import DownloadButton from "../DownloadButton/DownloadButton";
const HomeHero = () => {
    return (
        <div className="hero">
            <div className="main-hero">
                <div className="dummy"></div>
                <img src={Hro.HeroImage} alt="" className="hero-img" />
                <div className="main-text">
                    <div className="main">
                        <h1>Utopia42</h1>
                        <h2>a metaverse without limits where land owners can build skyhigh buildings.</h2>
                        <div className="buttons">
                            <PlayButton />
                            <a href="#download">                            <DownloadButton />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeHero