import React from 'react';
import logo from './images/brain.png';
import './style/App.scss';
import { BrowserRouter } from "react-router-dom"
import Routes from './Routes';
import Navbar from "./components/Navbar"
// import Countdown from './components/Countdown';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Navbar />
        <Routes />

        {/* <Countdown /> */}


      </div>
    </BrowserRouter>
  );
}

export default App;
