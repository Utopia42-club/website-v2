import React from "react";
import './announcements.scss'
import { ButtonIcons } from '../../assets/index.js'
import Imf from '../../assets/announcement_img.png'
const Announcements = () => {
    return (
        <div className="announce">
            <h1>Announcements</h1>
            <div className="main-anno">
                <div className="content">
                    <h1>New Build Contest</h1>
                    <h4>
                        Be the first to build in Utopia42
                        The Utopia42 DAO is sponsoring the first Utopia42.club building contest.  First prize will be $1000 in matic on the polygon mainnet.  There will only be 20 spots available for this first contest.  All participants will receive a plot of land where they can spend 2 weeks building whatever they can dream up to show off the abilities of Utopia42 and your own creativity.  After the contest, the builds will be judged by the Utopia42 DAO members as well as by the community.  At least $2000 of prizes will be distributed after this first contest.  After the contest, participants are free to continue to own their land or sell it.  To register for the contest, please fill out this form
                    </h4>
                    <div className="openForm">
                        <div className="icon">
                            <div className="open-area">
                                <img src={ButtonIcons.Form} alt="" className="white-play" />
                            </div>
                        </div>
                        <h4>Open Form</h4>
                    </div>
                </div>
                <div className="div"></div>
                <img src={Imf} alt="" className="m-img" />
            </div>
        </div>
    )
}
export default Announcements