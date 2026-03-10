import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingSection from './components/BookingSection';
import ServicesMenu from './components/ServicesMenu';
import MarqueeSlider from './components/MarqueeSlider';
import SpecialOffer from './components/SpecialOffer';
import Reviews from './components/Reviews';
import Locations from './components/Locations';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <BookingSection />
        <ServicesMenu />
        <MarqueeSlider />
        <SpecialOffer />
        <Reviews />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
