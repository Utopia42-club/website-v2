import React from "react";
import "./Popup.scss";
// Basic
// import CookieConsent from "react-cookie-consent";

// Option
import CookieConsent, { Cookies } from "react-cookie-consent";

const Popup = () => {
  return (
    <div className="cookies">
      {/* Basic */}
      {/* <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}

      {/* option */}
      <CookieConsent
        disableStyles
        location="none"
        buttonText="Accept All Cookies"
        cookieName="myAwesomeCookieName2"
        overlay
        overlayClasses="overlayclass"
        declineButtonText ="Reject All"
        enableDeclineButton = {true}
        declineButtonClasses = 'btnCookie'
        buttonClasses = 'btnCookie'
        // style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        // expires={150}
      >
        <p style={{marginBottom:'10px'}}>We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</p>
      </CookieConsent>
    </div>
  );
};

export default Popup;
