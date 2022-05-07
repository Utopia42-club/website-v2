import React from "react"
import './whyUNBC.scss'
import './bgstyle.css'
const UNBCWhy = () => {

    return (
        <div className="whyUnbc">
            <h1>WHY UNBC</h1>
            <div className="content">
                <div className="w1">
                    <div className="whybg" >
                        <img src={require('../../assets/UNBCwhy1.png')} alt="" />
                        <h2>Free coins daily</h2>
                        <h4>Get 10 free coins daily by spinning the wheel and spend that coins</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="w2r">
                        <div className="bgi">
                            <img src={require('../../assets/UNBCwhy2.png')} alt="" />
                            <div className="text">
                                <h2>Secure on blockchain</h2>
                                <h4>UNBC coin is based on blockchain technology and is highly secured .</h4>
                            </div>
                        </div>
                    </div>
                    <div className="w2r">
                        <div className="bgi">
                            <img src={require('../../assets/UNBCwhy3.png')} alt="" />
                            <div className="text">
                                <h2>play utopia42 for free</h2>
                                <h4>With UNBC coin you are able to access free metverse game</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default UNBCWhy