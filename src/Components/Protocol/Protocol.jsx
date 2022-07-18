import React from "react";
import { Proto } from "../../assets";
import './Protocol.scss'
const Protocol = () => {
    return (
        <div className="protocol">
            <h1>Multichain & Decentralized Protocol</h1>
            <div className="m-pr">
                <div className="pr">
                    <img src={Proto.p1} alt="" />
                    <h2>Blockchain</h2>
                    <h4>Utopia42 is launched on <a href="https://polygon.technology" target="_blank">Polygon</a>, a decentralized Ethereum scaling platform, and the distributed <a href="https://ipfs.io/" target="_blank">IPFS </a>protocol. We are implementing a multichain system, using the <a href="https://www.muon.net" target="_blank">Muon Network</a>.</h4>
                </div>
                <div className="pr">
                    <img src={Proto.p2} alt="" />
                    <h2>Decentralized</h2>

                    <h4>There is not any central server. Utopia42’s data and voice/video streaming is decentralized using the <a href="https://ipfs.io/" target="_blank">IPFS</a> protocol. It is a peer-to-peer system of nodes where data is cryptographically secure and not bound to a single location. </h4>
                </div>
                <div className="pr">
                    <img src={Proto.p3} alt="" />
                    <h2>Open Source</h2>

                    <h4>The protocol and codes are <a href="https://github.com/Utopia42-club" target="_blank">open source</a>. Our Open-source software is shared in a public <a href="https://github.com/Utopia42-club" target="_blank">repository</a> under a distribution license. </h4>
                </div>
                <div className="pr">
                    <img src={Proto.p4} alt="" />
                    <h2>Multi Platform</h2>

                    <h4><a target="_blank" href="https://dev.utopia42.club/game">Web-based version</a> is live. Mobile, PC will be supported soon.

</h4>
                </div>
            </div>


        </div>
    )
}
export default Protocol