import React from "react";
import {
MapPin,
Mail,
Phone,
ArrowUpRight,
ArrowRight,
} from "lucide-react";
import {
FaFacebookF,
FaInstagram,
FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
const exploreLinks = [
{ label: "Home", path: "/" },
{ label: "About Us", path: "/about" },
{ label: "Contact", path: "/contact-us" },
];

const platformLinks = [
{ label: "CMS Dashboard", path: "/cms" },
{ label: "Mobile Application", path: "/mobile-app" },
{ label: "Payment Solutions", path: "/payment-solutions" },
{ label: "White Label Solutions", path: "/white-label" },
{ label: "Become a Partner", path: "/partner" },
];

const legalLinks = [
{ label: "Privacy Policy", path: "/privacy-policy" },
{ label: "Terms & Conditions", path: "/terms-conditions" },
{ label: "Data Policy", path: "/data-policy" },
{ label: "Refund & Cancellation", path: "/refund-cancellation" },
{ label: "General Terms", path: "/general-terms" },
];

return ( <footer className="relative overflow-hidden bg-[#071321] text-white">
{/* ================= BACKGROUND ================= */}


  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-[#1E5FA8]/10 blur-[120px]"
  />

  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#E04578]/10 blur-[120px]"
  />

  <div className="relative z-10 mx-auto max-w-7xl px-5 py-10 lg:px-10">
    {/* ================= PARTNER CTA ================= */}

    <div className="relative mb-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#10243A] via-[#111827] to-[#171526] px-6 py-6 md:px-8">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#6FA8FF]/10 blur-[70px]"
      />

      <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#6FA8FF]"
            />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#6FA8FF]">
              Partner with EV Dock
            </span>
          </div>

          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Ready to join EV Dock?
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Build smarter charging infrastructure with our connected
            platform.
          </p>
        </div>

        <Link
          to="/partner"
          className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#071321] transition-all duration-300 hover:bg-[#6FA8FF] hover:text-white"
        >
          Become a Partner

          <ArrowUpRight
            size={15}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </div>

    {/* ================= MAIN FOOTER ================= */}

    <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.9fr_1fr]">
      {/* ================= BRAND ================= */}

      <div className="lg:pr-10">
        <Link
          to="/"
          aria-label="EV Dock Home"
          className="inline-block"
        >
          <span className="bg-gradient-to-r from-[#6FA8FF] via-[#B57EDC] to-[#F28BB5] bg-clip-text text-2xl font-black tracking-tight text-transparent">
            EV Dock
          </span>
        </Link>

        <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
          Smart EV charging solutions for connected, scalable and
          future-ready mobility.
        </p>

        {/* Social */}
        <div className="mt-5 flex gap-2">
          <a
            href="https://www.facebook.com/people/EV-Dock/61591772826693/#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="EV Dock on Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#6FA8FF]/40 hover:bg-[#1E5FA8] hover:text-white"
          >
            <FaFacebookF size={13} />
          </a>

          <a
            href="https://www.instagram.com/ev.dock"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="EV Dock on Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#E04578]/40 hover:bg-[#E04578] hover:text-white"
          >
            <FaInstagram size={14} />
          </a>

          <a
            href="https://in.linkedin.com/company/-evdock"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="EV Dock on LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#7A3FAF]/40 hover:bg-[#7A3FAF] hover:text-white"
          >
            <FaLinkedinIn size={14} />
          </a>
        </div>
      </div>

      {/* ================= EXPLORE ================= */}

      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">
          Explore
        </h3>

        <ul className="space-y-3 text-sm text-slate-400">
          {exploreLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="group flex items-center gap-2 transition-colors duration-200 hover:text-white"
              >
                <span>{link.label}</span>

                <ArrowRight
                  size={12}
                  aria-hidden="true"
                  className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= PLATFORM ================= */}

      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">
          Platform
        </h3>

        <ul className="space-y-3 text-sm text-slate-400">
          {platformLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="group flex items-center gap-2 transition-colors duration-200 hover:text-white"
              >
                <span>{link.label}</span>

                <ArrowRight
                  size={12}
                  aria-hidden="true"
                  className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= CONTACT ================= */}

      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white">
          Contact
        </h3>

        <div className="space-y-4 text-sm text-slate-400">
          {/* Location */}
          <div className="flex items-start gap-3">
            <MapPin
              size={16}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-[#6FA8FF]"
            />

            <span>
              Thane, Maharashtra,
              <br />
              India
            </span>
          </div>

          {/* Phone */}
          <a
            href="tel:+919903910391"
            className="flex items-center gap-3 transition-colors duration-200 hover:text-white"
          >
            <Phone
              size={16}
              aria-hidden="true"
              className="shrink-0 text-[#B57EDC]"
            />

            <span>+91 9903910391</span>
          </a>

          {/* Email */}
          <a
            href="mailto:evdockin@gmail.com"
            className="flex items-center gap-3 transition-colors duration-200 hover:text-white"
          >
            <Mail
              size={16}
              aria-hidden="true"
              className="shrink-0 text-[#F28BB5]"
            />

            <span>evdockin@gmail.com</span>
          </a>
        </div>
      </div>
    </div>

    {/* ================= LEGAL + COPYRIGHT ================= */}

    <div className="flex flex-col gap-5 pt-6">
      {/* Legal Links */}
      <nav
        aria-label="Legal"
        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-slate-500 md:justify-start"
      >
        {legalLinks.map((link, index) => (
          <React.Fragment key={link.path}>
            {index > 0 && (
              <span
                aria-hidden="true"
                className="text-slate-700"
              >
                •
              </span>
            )}

            <Link
              to={link.path}
              className="transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </React.Fragment>
        ))}
      </nav>

      {/* Copyright */}
      <div className="flex flex-col gap-2 border-t border-white/10 pt-5 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 EV Dock. All Rights Reserved.</p>

        <p className="text-slate-600">
          Smart charging. Connected mobility.
        </p>
      </div>
    </div>
  </div>
</footer>


);
};

export default Footer;
