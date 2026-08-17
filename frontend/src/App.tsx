import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import Features from "./components/Features";
import Franchise from "./components/Franchise";
import Appsection from "./components/AppSection";
import Footer from "./components/Footer";

import PublicCharger from "./pages/public-charger";
import HomeCharger from "./pages/home-charger";
import PartnerwithUs from "./pages/partner";
import CMS from "./pages/cms";
import MobileApp from "./pages/mobile-app";

import { Scroll } from "lucide-react";
import ScrollToTop from "./components/Common/ScrollToTop";
import BackToTop from "./components/Common/BackToTop";



function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Offer />
        <Features />
        <Franchise />
        <Appsection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Public DC Charger */}
        <Route path="/public-charger" element={<PublicCharger />}
     />
        {/* AC Home Charger */}
        <Route path="/home-charger" element={<HomeCharger />}
        />
        {/* Partner with us */}
        <Route path="/partner" element={<PartnerwithUs />}
        />
        {/* CMS */}
        <Route path="/cms" element={<CMS />}
        />
        {/* Mobile App */}
        <Route path="/mobile-app" element={<MobileApp />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;