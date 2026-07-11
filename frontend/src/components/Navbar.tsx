import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "../assets/logo_evdock.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Services",
    "Stations",
    "Franchise",
    "Contact",
  ];

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-5">

        <div className="backdrop-blur-xl bg-white/80 border border-white/50 shadow-xl rounded-full px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src={Logo}
              alt="EV Dock"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-2">

            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-5 py-2 rounded-full text-[15px] font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-black group"
              >
                {item}

                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-8 group-hover:-translate-x-1/2"></span>

              </a>
            ))}

          </nav>

          {/* CTA */}
          <div className="hidden lg:flex">

            <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105">

              Get Started

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-slate-800"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {/* Mobile Menu */}

        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            open ? "max-h-96 mt-3" : "max-h-0"
          }`}
        >
          <div className="rounded-3xl bg-white shadow-xl border border-slate-100 p-6">

            <div className="flex flex-col gap-4">

              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-slate-700 font-medium hover:bg-slate-100 transition"
                >
                  {item}
                </a>
              ))}

              <button className="mt-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-white font-semibold">
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