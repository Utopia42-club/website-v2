import './App.css';
import HomePage from './pages/Home/Homepage';
import { Routes,Route } from 'react-router-dom';
import OurTeam from './pages/Team/Team';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import UNBC from './pages/UNBC/UNBC';
import Roadmap from './pages/Roadmap/Roadmap';
import CookieConsent, { Cookies, getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";
function App() {
  return (
    <div className="App" >
      <Header className='none'/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/team' element={<OurTeam />}/>
        <Route path='/roadmap' element={<Roadmap/>} />
        <Route path='/unbc' element={<UNBC/>}/>
      </Routes>
      <Footer/>
      <CookieConsent
                location="bottom"
                acceptButton
                buttonText="Accept All Cookies"
                declineButtonText = "Reject All"
                declineCookieValue = {true}
                cookieValue = {true}
                enableDeclineButton
                cookieName="Utopia42"
                declineButtonStyle ={{ cursor: 'pointer',
                    alignItems: 'center',
                    border: '2px solid #814F8C',
                    borderRadius: '15px',
                    width: 'fit-content',
                    backgroundColor: '#fff',
                    color:'#000'
                }}
                style={{ background: "#fff", borderTop:'2px solid #814F8C',}}
                buttonStyle= {{ cursor: 'pointer',
                    alignItems: 'center',
                    border: '2px solid #814F8C',
                    borderRadius: '15px',
                    width: 'fit-content',
                    backgroundColor: '#fff',
                    color:'#000'
                }}
                expires={150}
                onAccept = {(co) => {console.log(co)}}
                onDecline = {(co) => {console.log(co)}}
                declineButtonClasses = "btnCookie"
                buttonClasses = "btnCookie"
                setDeclineCookie = {true}
            >
            <p style={{color:'#000', fontSize:'14px'}}>We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</p>
      </CookieConsent>
    </div>
  );
}

export default App;
