import React from "react";
import Spin from "../../Components/Spinwheel/spinwheel";
import UNBCParnter from "../../Components/UNBC Partners/UNBCpartners";
import UNBCFAQ from "../../Components/UNBCfaq/UNBCfaq";
import UNBCHero from "../../Components/UNBCHero/UNBChero";
import UNBCWhy from "../../Components/Why UNBC/UNBCWhy";
import './unbc.scss'
const UNBC = () => {
    return (
        <div className="unbc">
            <UNBCHero />
            <UNBCWhy />
            <UNBCFAQ />
            <div className="road">
                <img src={require("../../assets/UNBCroadmap-min.png")} alt="" />
            </div>
            <Spin />
            <UNBCParnter />
        </div>
    )
}
export default UNBC;