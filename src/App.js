import React from 'react';
import Nav from './Components/Nav/Nav';
import LandingPage from './Components/LandingPage/LandingPage';
import About from './Components/About/About';
import Offer from './Components/Offer/Offer';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <LandingPage />
        <About />
        <Offer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
