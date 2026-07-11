import React from 'react';
import Hero  from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Features from './components/Features';
import Franchise from './components/Franchise';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <Hero />
      <About />
      <Features />
      <Franchise />
      <Footer />

    </div>
  );
}

export default App;