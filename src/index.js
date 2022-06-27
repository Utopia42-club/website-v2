import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
// import { MetaMaskProvider } from "metamask-react";
ReactDOM.render(
  <HashRouter hashType="hashbang">
      {/* <MetaMaskProvider> */}
        <App />
      {/* </MetaMaskProvider> */}
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
