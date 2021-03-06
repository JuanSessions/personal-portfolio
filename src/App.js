import React from 'react';
import logo from './images/juanEar.jpg';
import './style/App.scss';
import { HashRouter } from "react-router-dom"
import Routes from './Routes';
import Navbar from "./components/Navbar"
// import Countdown from './components/Countdown';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <h4 className="juan">Juan</h4>
          <div className="trigger">

            <img src={logo} className="App-logo" alt="logo" />

          </div>
          <h4 className="sessions">Sessions</h4>
        </header>
        <Navbar />
        <Routes />

      </div>
    </HashRouter>
  );
}

export default App;
