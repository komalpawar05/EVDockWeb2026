import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-white pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1E5FA8]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E04578]/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* CTA Section */}
        <div className="mb-16">
          <div className="rounded-[32px] p-[1px] bg-gradient-to-r from-[#1E5FA8] via-[#7A3FAF] to-[#E04578]">
            <div className="bg-[#081224] rounded-[32px] px-8 lg:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Ready to Join EV Dock?
                </h2>

                <p className="text-slate-300 mt-3 text-lg">
                  Start your EV charging business with our complete platform.
                </p>
              </div>

              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#1E5FA8] via-[#7A3FAF] to-[#E04578] font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300">
                Become a Partner
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 pb-12">
          {/* Company */}
          <div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-[#6FA8FF] via-[#B57EDC] to-[#F28BB5] bg-clip-text text-transparent">
              EV Dock
            </h2>

            <p className="mt-5 text-slate-400 leading-relaxed">
              Smart EV charging ecosystem providing CMS Dashboard,
              Mobile Applications, Payment Solutions and Franchise
              Opportunities for the future of electric mobility.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1E5FA8] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E04578] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#7A3FAF] transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#franchise" className="hover:text-white transition">
                  Franchise
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Platform
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>CMS Dashboard</li>
              <li>Mobile App</li>
              <li>Payment Gateway</li>
              <li>Analytics & Reports</li>
              <li>Fleet Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#6FA8FF] mt-1"
                />
                <span>Mumbai, Maharashtra, India</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="text-[#B57EDC] mt-1"
                />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="text-[#F28BB5] mt-1"
                />
                <span>info@evdock.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 EV Dock. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;