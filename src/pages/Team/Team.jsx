import React, {useState} from "react";
import OurParnter from "../../Components/OurPartners/OurPartners";
import './team.scss'
import Github from '../../assets/icons8-github-24.svg'
import linkedin from '../../assets/icons8-linkedin-24.png'
import ManagementsUser from './Data'
const Team = () => {
    const [userData, setUserData] = useState(ManagementsUser);
    return (
        <div className="team">
            <div className="t_hero">
                <div className="heading-area">
                    <div className="head">
                        <h1>Our Team</h1>
                    </div>
                    <div className="desc">
                        <h2>To be the company our customers want us to be, it takes an eclectic group passionate about the customer experience. Get to know the people leading the way at UTOPIA42.</h2>
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
                            <img src={require("../../assets/Matthew Ready.png")} alt="" />
                        </div>
                        <h2>Matthew Ready</h2>
                        <h4>Co-founder</h4>
                        <a style={{marginRight: "10px"}} href="https://github.com/MeditationMatt"><img src={Github}/></a><a href="https://www.linkedin.com/in/matthew-ready-8a31221/"><img src={linkedin}/></a>
                        
                    </div>
                    <div className="im ">
                        <div className="image-area c2">
                            <img src={require("../../assets/rezabakhshandeh.JPEG")} alt="" />
                        </div>
                        <h2>Reza Bakhshandeh</h2>
                        <h4>Co-founder, Blockchain Lead Developer</h4>
                        <a style={{marginRight: "10px"}} href="https://github.com/bakhshandeh"><img src={Github}/></a><a href=""><img src={linkedin}/></a>
                    </div>
                </div>
            </div>
            <div className="management">
                <h1>MANAGEMENT</h1>
                <div className="imgs">
                {userData.map((data) => (
                    <div className="im ">
                        <div className="image-area">
                            <img src= {data.imgUrl} alt="" />
                        </div>
                        <h2>{data.name}</h2>
                        <h4 style={{marginBottom:"5px"}}>{data.jobTitle}</h4>
                        <a style={{marginRight: "10px"}} href={data.gitHubLink} target="_blank"><img src={Github}/></a><a href={data.linkedinLink} target="_blank"><img src={linkedin}/></a>
                    </div>
                    ))}
                </div>
            </div>
            <OurParnter />
        </div >
    )
}
export default Team