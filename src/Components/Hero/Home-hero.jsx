import React from "react";
import './Home-hero.scss'
import { Hro } from '../../assets/index.js'
import Header from "../Header/Header";
import PlayButton from "../PlayButton/PlayButton";
import DownloadButton from "../DownloadButton/DownloadButton";
import ExploreMultiverse from "../ExploreMultiverse/ExploreMultiverse";
const HomeHero = () => {
    return (
        <div className="hero">
            <div className="main-hero">
                <div className="dummy"></div>
                <img src={Hro.HeroImage} alt="" className="hero-img" />
                <div className="main-text">
                    <div className="main">
                        <h1>Utopia42</h1>
                        <h2>The Sky is not the limit. Utopia42 is a decentralized <a target="_blank" href="https://en.wikipedia.org/wiki/Multiverse">Multiverse</a> where everyone can build their own Metaverse.</h2>
                        <div className="buttons">
                            <PlayButton />
                            <DownloadButton />
                            <div className="buttonsExplore">
                                <ExploreMultiverse />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeHero