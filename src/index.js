import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import { Web3ReactProvider } from '@web3-react/core'
// import { getLibrary } from '../src/utils/web3-react'
import Web3ReactManager from '../src/utils/web3ReactManager'
// import { MetaMaskProvider } from "metamask-react";
ReactDOM.render(
  <HashRouter hashType="hashbang">
     <Web3ReactProvider>
     {/* <Web3ReactManager> */}
      {/* <MetaMaskProvider> */}
        <App />
      {/* </MetaMaskProvider> */}
      {/* </Web3ReactManager> */}
      </Web3ReactProvider>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
