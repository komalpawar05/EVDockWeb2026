import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "../assets/logo_evdock.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Stations",
    "Franchise",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-5">

        {/* Navbar */}
        <div
          className={`mt-4 h-20 rounded-full transition-all duration-500 flex items-center justify-between px-8 ${
            scrolled
              ? "bg-slate-900/75 backdrop-blur-2xl border border-white/10 shadow-2xl"
              : "bg-transparent"
          }`}
        >

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="EV Dock"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-2">

            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative rounded-full px-5 py-2 text-[15px] font-medium text-white transition-all duration-300 hover:text-cyan-400"
              >
                {item}

                <span className="absolute left-1/2 bottom-1 h-[2px] w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-300 group-hover:w-8"></span>
              </a>
            ))}

          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">

            <button className="group flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/20 backdrop-blur-xl px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-500 hover:scale-105">

              Get Started

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            open ? "max-h-[500px] mt-4" : "max-h-0"
          }`}
        >

          <div className="rounded-3xl border border-white/10 bg-slate-900/95 backdrop-blur-2xl p-6 shadow-2xl">

            <div className="flex flex-col gap-2">

              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  {item}
                </a>
              ))}

              <button className="mt-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white transition hover:opacity-90">
                Get Started
              </button>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
};

export default Navbar;