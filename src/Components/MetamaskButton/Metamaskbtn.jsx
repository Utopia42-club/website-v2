import React from "react";
import { ButtonIcons } from '../../assets/index.js'
import './metamaskbtn.scss'
import { useMetaMask } from "metamask-react";
const Metamastbtn = () => {
    //     const ConnectMeta = () => {
    //         const { status, connect, account, chainId, ethereum } = useMetaMask();
    // console.log()
    //         if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

    //         if (status === "unavailable") return <div>MetaMask not available :(</div>

    //         if (status === "notConnected") return <button onClick={connect}>Connect to MetaMask</button>

    //         if (status === "connecting") return <div>Connecting...</div>

    //         if (status === "connected") return <div>Connected account {account} on chain ID {chainId}</div>

    //         return null;
    //     }
    return (
        <div className="meta_btn" >
            <div className="maskicon">
                <div className="metaicon-area">
                    <img src={ButtonIcons.Meta} alt="" />
                </div>
            </div>
            <h4>Connect to Metamask</h4>
        </div>
    )
}
export default Metamastbtn