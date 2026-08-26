import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Offer from "./components/Offer";
import Features from "./components/Features";
import Franchise from "./components/Franchise";
import Appsection from "./components/AppSection";
import Footer from "./components/Footer";

import PublicCharger from "./pages/public-charger";
import HomeCharger from "./pages/home-charger";
import About from "./pages/about";
import PartnerwithUs from "./pages/partner";
import CMS from "./pages/cms";
import MobileApp from "./pages/mobile-app";
import EVNetwork from "./pages/evnetwork";
import ContactUs from "./pages/contact-us";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsConditions from "./pages/terms-conditions";
import GeneralTerms from "./pages/general-terms";
import DataPolicy from "./pages/data-policy";
import RefundPolicy from "./pages/refund-cancellation";
import ScrollToTop from "./components/Common/ScrollToTop";
import BackToTop from "./components/Common/BackToTop";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
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

         {/* About */}
         <Route path="/about" element={<About/>} />
        
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
        {/* EV Network */}
        <Route path="/evnetwork" element={<EVNetwork/>}
        />
        {/* Contact Us */}
        <Route path="/contact-us" element={<ContactUs/>}
        />

          {/* Privacy-Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}
          />
          {/* TermsConditions  */}
          <Route path="/terms-conditions" element={<TermsConditions />}
          />
          {/* Data-Policy */}
          <Route path="/data-policy" element={<DataPolicy/>}
          />
          {/* Refund Policy */}
          <Route path="/refund-cancellation" element={<RefundPolicy/>}
          />
          {/* General-Terms */}
          <Route path="/general-terms" element={<GeneralTerms/>}
          />
          </Routes>
    </BrowserRouter>
  );
}

export default App;