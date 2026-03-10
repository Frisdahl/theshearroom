import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingSection from './components/BookingSection';
import ServicesMenu from './components/ServicesMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <BookingSection />
        <ServicesMenu />
        {/* Other sections will go here */}
      </main>
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} THE SHEAR ROOM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
