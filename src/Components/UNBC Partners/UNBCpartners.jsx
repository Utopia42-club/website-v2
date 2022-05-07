import React from "react";
import './UNBCpartner.scss'
const UNBCParnter = () => {
    return (
        <div className="UNBCpartners">
            <h1>Our Partners</h1>
            <div className="slider">
                <div className="slide-track">
                    <div className="partner-logo">
                        <img src={require('../../assets/Batch-1.png')} alt="" />
                    </div>
                    <div className="partner-logo">
                        <img src={require('../../assets/binance (1) (1) 1.png')} alt="" />
                    </div>
                    {/* <div className="partner-logo">
                        <img src={require('../../assets/cambridhge.png')} alt="" />
                    </div> */}
                    <div className="partner-logo">
                        <img src={require('../../assets/Group 8.png')} alt="" />
                    </div>
                    <div className="partner-logo">
                        <img src={require('../../assets/Group.png')} alt="" />
                    </div>
                    <div className="partner-logo">
                        <img src={require('../../assets/Group-1.png')} alt="" />
                    </div>
                    <div className="partner-logo">
                        <img src={require('../../assets/Batch-1.png')} alt="" />
                    </div>
                    {/* <div className="partner-logo">
                        <img src={require('../../assets/cambridhge.png')} alt="" />
                    </div> */}
                    <div className="partner-logo">
                        <img src={require('../../assets/Batch-1.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UNBCParnter