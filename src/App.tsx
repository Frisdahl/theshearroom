import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingSection from './components/BookingSection';
import ServicesMenu from './components/ServicesMenu';
import MarqueeSlider from './components/MarqueeSlider';
import SpecialOffer from './components/SpecialOffer';
import Reviews from './components/Reviews';
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
        {/* Other sections will go here */}
      </main>
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} FRESH CUT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
