import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  ChevronDown,
  CircleGauge,
  Cpu,
  Factory,
  Gauge,
  Home,
  Menu,
  Network,
  Smartphone,
  Users,
  X,
  Zap,
} from "lucide-react";

import Logo from "../assets/logo_evdock.png";

type MenuItem = {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
};

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setActiveMenu(null);
    setMobileMenu(null);
  };

  const toggleDesktopMenu = (menu: string) => {
    setActiveMenu((current) =>
      current === menu ? null : menu
    );
  };

  const toggleMobileMenu = (menu: string) => {
    setMobileMenu((current) =>
      current === menu ? null : menu
    );
  };

  /* =========================================================
     PRODUCTS
  ========================================================= */

  const products: MenuItem[] = [
    {
      title: "AC Chargers",
      description: "Smart charging for homes and businesses",
      href: "/home-charger",
      icon: Home,
    },
    {
      title: "DC Fast Chargers",
      description: "High-speed charging for public locations",
      href: "/public-charger",
      icon: BatteryCharging,
    },
  ];

  /* =========================================================
     PLATFORM
  ========================================================= */

  const platform: MenuItem[] = [
    {
      title: "CMS Dashboard",
      description: "Manage stations, chargers and analytics",
      href: "/cms",
      icon: CircleGauge,
    },
    {
      title: "Mobile App",
      description: "Find, charge and pay from one app",
      href: "/mobile-app",
      icon: Smartphone,
    },
    {
      title: "EV Dock Network",
      description: "Connect multiple charging networks",
      href: "/evnetwork",
      icon: Network,
    },
    {
      title: "Hardware + Software",
      description: "One connected charging ecosystem",
      href: "/#platform",
      icon: Cpu,
    },
  ];

  /* =========================================================
     SOLUTIONS
  ========================================================= */

  const solutions: MenuItem[] = [
    {
      title: "White-Label Solutions",
      description: "Launch your EV charging business under your brand",
      href: "/white-label",
      icon: Users,
    },
    {
      title: "Businesses",
      description: "Charging solutions for workplaces",
      href: "/#business",
      icon: Building2,
    },
    {
      title: "Fleet Operators",
      description: "Smart charging for electric fleets",
      href: "/#fleet",
      icon: Factory,
    },
    {
      title: "Charging Operators",
      description: "Manage and grow your charging network",
      href: "/#operators",
      icon: Gauge,
    },
  ];

  /* =========================================================
     PARTNERS
  ========================================================= */

  const partners: MenuItem[] = [
    {
      title: "Become a Partner",
      description: "Connect your charging infrastructure",
      href: "/partner",
      icon: Users,
    },
    {
      title: "Partner Network",
      description: "Grow with the EV Dock ecosystem",
      href: "/#network",
      icon: Network,
    },
    {
      title: "Franchise",
      description: "Build your own EV charging business",
      href: "/#franchise",
      icon: Building2,
    },
  ];

  /* =========================================================
     DROPDOWN COMPONENT
  ========================================================= */

  const DesktopDropdown = ({
    name,
    items,
    large = false,
  }: {
    name: string;
    items: MenuItem[];
    large?: boolean;
  }) => {
    const isOpen = activeMenu === name;

    return (
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu(name)}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          type="button"
          onClick={() => toggleDesktopMenu(name)}
          className={`group flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-300 ${
            scrolled
              ? "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              : "text-white hover:bg-white/10 hover:text-cyan-300"
          }`}
        >
          {name}

          <ChevronDown
            size={15}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${
            large ? "w-[650px]" : "w-[570px]"
          } ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-[0_25px_70px_rgba(15,23,42,0.18)]">

            {/* Header */}
            <div className="mb-2 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                  EV Dock
                </p>

                <p className="mt-0.5 text-sm font-bold text-slate-900">
                  {name}
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Zap size={15} className="fill-blue-600" />
              </div>
            </div>

            {/* Items */}
            <div
              className={`grid gap-2 ${
                items.length > 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    to={item.href}
                    onClick={closeAll}
                    className="group flex items-start gap-3 rounded-2xl p-3.5 transition-all duration-200 hover:bg-blue-50"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-bold text-slate-900">
                          {item.title}
                        </p>

                        <ArrowRight
                          size={14}
                          className="shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-blue-600"
                        />
                      </div>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom */}
            <div className="mt-2 flex items-center justify-between border-t border-slate-100 px-3 pt-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Connected EV ecosystem
              </span>

              <ArrowRight
                size={14}
                className="text-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* =========================================================
     MOBILE DROPDOWN
  ========================================================= */

  const MobileDropdown = ({
    name,
    items,
  }: {
    name: string;
    items: MenuItem[];
  }) => {
    const isOpen = mobileMenu === name;

    return (
      <div>
        <button
          type="button"
          onClick={() => toggleMobileMenu(name)}
          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
        >
          <span>{name}</span>

          <ChevronDown
            size={17}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="ml-3 border-l-2 border-blue-100 pl-2">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={closeAll}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-blue-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Icon size={17} />
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-slate-800">
                      {item.title}
                    </span>

                    <span className="block text-xs text-slate-400">
                      {item.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  /* =========================================================
     NAVBAR
  ========================================================= */

  return (
    <header
      ref={navRef}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">

        {/* ===================================================
            MAIN NAVBAR
        ==================================================== */}

        <div
          className={`mt-3 flex h-[72px] items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-6 ${
            scrolled
              ? "border border-slate-200/80 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-2xl"
              : "border border-white/10 bg-slate-950/35 backdrop-blur-xl"
          }`}
        >

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeAll}
            className="flex shrink-0 items-center"
          >
            <img
              src={Logo}
              alt="EV Dock"
              className="h-14 w-auto object-contain sm:h-[62px]"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden items-center gap-0.5 lg:flex">

            {/* HOME */}
            <Link
              to="/"
              className={`rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                scrolled
                  ? "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  : "text-white hover:bg-white/10 hover:text-cyan-300"
              }`}
            >
              Home
            </Link>

            {/* ABOUT */}
            <Link
              to="/about"
              className={`rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                scrolled
                  ? "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  : "text-white hover:bg-white/10 hover:text-cyan-300"
              }`}
            >
              About
            </Link>

            {/* PRODUCTS */}
            <DesktopDropdown
              name="Products"
              items={products}
            />

            {/* PLATFORM */}
            <DesktopDropdown
              name="Platform"
              items={platform}
              large
            />

            {/* SOLUTIONS */}
            <DesktopDropdown
              name="Solutions"
              items={solutions}
              large
            />

            {/* PARTNERS */}
            <DesktopDropdown
              name="Partners"
              items={partners}
            />

            {/* CONTACT */}
            <Link
              to="/#contact"
              className={`rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                scrolled
                  ? "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  : "text-white hover:bg-white/10 hover:text-cyan-300"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================== */}

          <div className="hidden lg:flex">
            <Link
              to="/#contact"
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Get Started

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition lg:hidden ${
              scrolled
                ? "bg-slate-100 text-slate-900"
                : "bg-white/10 text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* ===================================================
            MOBILE MENU
        ==================================================== */}

        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            mobileOpen
              ? "mt-3 max-h-[800px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/15">

            <div className="flex flex-col gap-1">

              {/* HOME */}
              <Link
                to="/"
                onClick={closeAll}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Home
              </Link>

              {/* ABOUT */}
              <Link
                to="/#about"
                onClick={closeAll}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                About
              </Link>

              {/* PRODUCTS */}
              <MobileDropdown
                name="Products"
                items={products}
              />

              {/* PLATFORM */}
              <MobileDropdown
                name="Platform"
                items={platform}
              />

              {/* SOLUTIONS */}
              <MobileDropdown
                name="Solutions"
                items={solutions}
              />

              {/* PARTNERS */}
              <MobileDropdown
                name="Partners"
                items={partners}
              />

              {/* CONTACT */}
              <Link
                to="/#contact"
                onClick={closeAll}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                Contact
              </Link>

              {/* CTA */}
              <Link
                to="/#contact"
                onClick={closeAll}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20"
              >
                Get Started

                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;