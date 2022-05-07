import React from "react"
import './spin.scss'
const Spin = () => {
    return (
        <div className="spin">
            <h1>SPIN THE WHEEL</h1>
            <div className="spining-area">
                {/* <img src={require("../../assets/spinimg1.png")} className='im1' alt="" /> */}
                <img src={require("../../assets/unbc-spinwheel.png")} alt="" />
                {/* <img src={require("../../assets/spinimg2.png")} className='im1' alt="" /> */}

            </div>
            <div className="spinbtn">
                <div className="icon">
                    <div className="spin-area">
                        <img src={require("../../assets/spinye.png")} alt="" className="white-play" />
                    </div>
                </div>
                <h4>SPIN THE WHEEL</h4>
            </div>
        </div>
    )
}
export default Spin