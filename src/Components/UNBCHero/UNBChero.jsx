import React from "react";
import './unbchero.scss'
const UNBCHero = () => {

    return (
        <div className="UNBCHero">
            <div className="h-main">
                <div className="a1">
                    <h1>UTOPIA42</h1>
                    <h2>Universal Basic Coin</h2>
                    <h4>a metaverse without limits where land owners can build skyhigh buildings.</h4>
                    <div className="unbcbt">
                        <div className="icon">
                            <div className="play-area">
                                <img src={require('../../assets/spin.png')} alt="" className="white-play" />
                            </div>
                        </div>
                        <h4>Spin the wheel</h4>
                    </div>
                </div>
                <div className="a2">
                    <div className="spinwheel">
                        <img src={require('../../assets/wheelspin.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UNBCHero