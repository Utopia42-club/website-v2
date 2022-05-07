import React from "react";
import { Proto } from "../../assets";
import './Protocol.scss'
const Protocol = () => {
    return (
        <div className="protocol">
            <h1>Protocol</h1>
            <div className="m-pr">
                <div className="pr">
                    <img src={Proto.p1} alt="" />
                    <h2>Blockchain</h2>
                    <h4>Utopia is using Polygon and IPFS.</h4>
                </div>
                <div className="pr">
                    <img src={Proto.p2} alt="" />
                    <h2>Decentralized</h2>

                    <h4>There is not any central server.</h4>
                </div>
                <div className="pr">
                    <img src={Proto.p3} alt="" />
                    <h2>Open Source</h2>

                    <h4>The protocol and codes are open source.</h4>
                </div>
                <div className="pr">
                    <img src={Proto.p4} alt="" />
                    <h2>Multi Platform</h2>

                    <h4>Web, Mobile, PC, ... </h4>
                </div>
            </div>


        </div>
    )
}
export default Protocol