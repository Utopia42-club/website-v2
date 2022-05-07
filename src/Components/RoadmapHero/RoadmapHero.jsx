import React from "react";
import './RoadmapHero.scss'
const RoadmapHero = () => {
    return (
        <div className="road-hero">
            <div className="main">
                <div className="logo">
                    <img src={require('../../assets/Icon.png')} alt="" />
                </div>
                <img src={require('../../assets/why1.png')} alt="" className="hero-img1" />
                <h1>Utopia42 ROADMAP</h1>
                <div className="desc">
                    <h2>JOIN UTOPIA42 IN A JOURNEY OF MAKING METAVERSER HUGE, BEAUTIFUL AND ENJOYABLE</h2>
                </div>
                <div className="explore">
                    <div className="bt">
                        <h4>EXPLORE MORE</h4>
                        <div className="icon"><img src={require('../../assets/exploredash.png')} alt="" /></div>

                    </div>
                </div>
                <img src={require('../../assets/why3.png')} alt="" className="hero-img2" />

            </div>
        </div>
    )
}
export default RoadmapHero