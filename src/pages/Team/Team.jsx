import React from "react";
import OurParnter from "../../Components/OurPartners/OurPartners";
import './team.scss'
const Team = () => {
    return (
        <div className="team">
            <div className="t_hero">
                <div className="heading-area">
                    <div className="head">
                        <h1>Our Team</h1>
                    </div>
                    <div className="desc">
                        <h2>To be the company our customers want us to be, it takes an eclectic group passionate about the customer experience. Get to know the people leading the way at UTOPIA42 animal-themed offsite at a time.</h2>
                    </div>

                </div>
                <div className="team_img">
                    <img src={require('../../assets/teamimg.png')} alt="" className="team_img" />
                </div>
            </div>
            < div className="founder">
                <h1>FOUNDERS</h1>
                <div className="imgs">
                    <div className="im ">
                        <div className="image-area c1">
                            <img src={require("../../assets/f1.png")} alt="" />
                        </div>
                        <h2>Matthew Ready</h2>
                        <h4>Founder</h4>
                    </div>
                    <div className="im ">
                        <div className="image-area c2">
                            <img src={require("../../assets/f2.png")} alt="" />
                        </div>
                        <h2>Reza Bakhshandeh</h2>
                        <h4>Founder</h4>
                    </div>
                    {/* <div className="im ">
                        <div className="image-area c3">
                            <img src={require("../../assets/f3.png")} alt="" />
                        </div>
                        <h2>LIA Johansan</h2>
                        <h4>Founder ceo</h4>
                    </div> */}
                </div>
            </div>
            <div className="management">
                <h1>Mangement</h1>
                <div className="imgs">
                    <div className="im ">
                        <div className="image-area c1">
                            <img src={require("../../assets/f1.png")} alt="" />
                        </div>
                        <h2>Matt mardock</h2>
                        <h4>Founder ceo</h4>
                    </div>
                    <div className="im ">
                        <div className="image-area c2">
                            <img src={require("../../assets/f2.png")} alt="" />
                        </div>
                        <h2>Sarah Butt</h2>
                        <h4>Founder ceo</h4>
                    </div><div className="im ">
                        <div className="image-area c3">
                            <img src={require("../../assets/f3.png")} alt="" />
                        </div>
                        <h2>LIA Johansan</h2>
                        <h4>Founder ceo</h4>
                    </div>

                </div></div>
            <OurParnter />
        </div >
    )
}
export default Team