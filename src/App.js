import './App.css';
import HomePage from './pages/Home/Homepage';
import { Routes, Route } from 'react-router-dom';
import OurTeam from './pages/Team/Team';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import UNBC from './pages/UNBC/UNBC';
import Roadmap from './pages/Roadmap/Roadmap';
import Popup from './Components/Popups/Popup';

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
      <Popup />
    </div>
  );
}

export default App;
