import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  CreditCard,
  Globe2,
  LayoutDashboard,
  Network,
  Palette,
  Rocket,
  Settings2,
  Smartphone,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/Common/SectionHeading";

/* =========================================================
   SOLUTIONS
========================================================= */

const solutions = [
  {
    icon: LayoutDashboard,
    number: "01",
    title: "White-Label CMS",
    label: "OPERATE",
    description:
      "Run your charging business from one centralized platform. Manage stations, chargers, customers, pricing, payments and performance.",
    items: [
      "Charger & station management",
      "Customer & user management",
      "Pricing & revenue controls",
      "Reports & business analytics",
    ],
    gradient: "from-[#1E5FA8] to-[#2F74C9]",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Branded Mobile App",
    label: "ENGAGE",
    description:
      "Give your customers a charging experience that feels like your own product, from discovery to payment.",
    items: [
      "Custom brand identity",
      "Station discovery",
      "Charging session controls",
      "Payments & charging history",
    ],
    gradient: "from-[#4B4FAE] to-[#7A3FAF]",
  },
  {
    icon: Network,
    number: "03",
    title: "OCPI Solution",
    label: "CONNECT",
    description:
      "Connect your network with the wider EV ecosystem and enable seamless roaming and interoperability.",
    items: [
      "Network interoperability",
      "EV roaming",
      "Live availability",
      "Secure data exchange",
    ],
    gradient: "from-[#7A3FAF] to-[#C93C8F]",
  },
];

/* =========================================================
   BUSINESS BENEFITS
========================================================= */

const benefits = [
  {
    icon: Palette,
    title: "Own Your Brand",
    text: "Present a consistent digital experience under your own brand identity.",
  },
  {
    icon: Zap,
    title: "Launch Faster",
    text: "Go to market without spending years building your own EV technology stack.",
  },
  {
    icon: BarChart3,
    title: "Grow With Data",
    text: "Turn charging activity into insights that support better business decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Scale With Confidence",
    text: "Build a technology foundation that can grow with your charging network.",
  },
];

/* =========================================================
   PHONE PREVIEW
========================================================= */

const MobilePreview = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        rotate: 4,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="relative mx-auto w-[270px]"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

      {/* Phone */}
      <div className="relative rounded-[42px] border-[7px] border-slate-800 bg-slate-950 p-2 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">

        <div className="overflow-hidden rounded-[34px] bg-white">

          {/* Status */}
          <div className="flex items-center justify-between bg-slate-950 px-5 py-3 text-[9px] text-white">
            <span>9:41</span>
            <span>● ● ●</span>
          </div>

          {/* App */}
          <div className="min-h-[470px] p-5">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  YOUR BRAND
                </p>

                <p className="mt-1 text-lg font-black text-slate-950">
                  Charge
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                <Zap className="h-4 w-4 text-[#1E5FA8]" />
              </div>

            </div>

            {/* Map */}
            <div className="relative mt-5 h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50">

              <div className="absolute inset-0 opacity-30">
                <div className="absolute left-8 top-12 h-px w-48 rotate-12 bg-[#1E5FA8]" />
                <div className="absolute left-0 top-24 h-px w-56 -rotate-6 bg-[#7A3FAF]" />
                <div className="absolute left-20 top-0 h-40 w-px rotate-[25deg] bg-[#C93C8F]" />
              </div>

              {[
                "left-12 top-10",
                "right-12 top-20",
                "left-24 bottom-8",
              ].map((position, index) => (
                <div
                  key={index}
                  className={`absolute ${position} flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-[#1E5FA8] to-[#7A3FAF] shadow-lg`}
                >
                  <Zap className="h-3 w-3 text-white" />
                </div>
              ))}

            </div>

            {/* Station */}
            <div className="mt-4 rounded-2xl border border-slate-100 p-4">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-bold text-slate-900">
                    EV Dock Station
                  </p>

                  <p className="mt-1 text-[9px] text-slate-400">
                    0.8 km away
                  </p>
                </div>

                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-bold text-emerald-600">
                  AVAILABLE
                </span>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <div>
                  <p className="text-lg font-black text-slate-900">
                    6
                  </p>
                  <p className="text-[8px] text-slate-400">
                    Connectors
                  </p>
                </div>

                <button className="rounded-full bg-slate-950 px-4 py-2 text-[9px] font-bold text-white">
                  Charge Now
                </button>

              </div>

            </div>

            {/* Navigation */}
            <div className="mt-5 flex items-center justify-around border-t border-slate-100 pt-4">

              {[LayoutDashboard, Network, CreditCard, Users].map(
                (Icon, index) => (
                  <Icon
                    key={index}
                    className={`h-4 w-4 ${
                      index === 0
                        ? "text-[#1E5FA8]"
                        : "text-slate-300"
                    }`}
                  />
                )
              )}

            </div>

          </div>

        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-14 bottom-20 hidden rounded-2xl border border-white/10 bg-[#111F31] p-4 shadow-2xl sm:block"
      >
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          </div>

          <div>
            <p className="text-[8px] text-slate-500">
              App Experience
            </p>

            <p className="mt-1 text-[10px] font-bold text-white">
              Your Brand
            </p>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   BRAND PANEL
========================================================= */

const BrandPanel = () => {
  return (
    <div className="relative">

      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

      <motion.div
        initial={{
          opacity: 0,
          x: 30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0D1828] p-5 shadow-[0_40px_100px_rgba(0,0,0,0.4)]"
      >

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
              BRAND CONFIGURATION
            </p>

            <h3 className="mt-2 text-lg font-bold text-white">
              Make it yours
            </h3>
          </div>

          <Settings2 className="h-5 w-5 text-blue-300" />

        </div>

        {/* Brand preview */}
        <div className="mt-5 rounded-2xl bg-white p-5">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5FA8] to-[#7A3FAF]">
                <Zap className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400">
                  BRAND PREVIEW
                </p>

                <p className="mt-1 text-sm font-black text-slate-900">
                  Your EV Network
                </p>
              </div>

            </div>

            <span className="rounded-full bg-emerald-50 px-3 py-1 text-[8px] font-bold text-emerald-600">
              ACTIVE
            </span>

          </div>

          {/* Color options */}
          <div className="mt-6">

            <p className="text-[9px] font-bold text-slate-400">
              BRAND COLORS
            </p>

            <div className="mt-3 flex gap-2">

              <span className="h-8 w-8 rounded-lg bg-[#1E5FA8]" />
              <span className="h-8 w-8 rounded-lg bg-[#4B4FAE]" />
              <span className="h-8 w-8 rounded-lg bg-[#7A3FAF]" />
              <span className="h-8 w-8 rounded-lg bg-[#C93C8F]" />

            </div>

          </div>

          {/* Settings */}
          <div className="mt-6 space-y-3">

            {[
              ["Logo & Identity", "Configured"],
              ["Mobile Experience", "Configured"],
              ["Customer Portal", "Configured"],
            ].map(([title, status]) => (

              <div
                key={title}
                className="flex items-center justify-between rounded-xl bg-slate-50 p-3"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
                    <Check className="h-3.5 w-3.5 text-[#1E5FA8]" />
                  </div>

                  <span className="text-xs font-semibold text-slate-700">
                    {title}
                  </span>

                </div>

                <span className="text-[8px] font-bold text-emerald-500">
                  {status}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">

          <Sparkles className="h-4 w-4 text-violet-300" />

          <p className="text-[10px] leading-5 text-slate-400">
            Your customers see your brand.
            <span className="text-white">
              {" "}EV Dock powers the technology.
            </span>
          </p>

        </div>

      </motion.div>
    </div>
  );
};

/* =========================================================
   WHITE LABEL PAGE
========================================================= */

const WhiteLabel: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">

        {/* =====================================================
            HERO
        ====================================================== */}

       <section className="relative overflow-hidden bg-[#07111F] pt-28">
  {/* =====================================================
      BACKGROUND
  ====================================================== */}

  <div className="absolute inset-0">
    <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#1E5FA8]/20 blur-[130px]" />

    <div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-[#7A3FAF]/20 blur-[140px]" />

    <div className="absolute bottom-[-300px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#C93C8F]/10 blur-[140px]" />
  </div>

  {/* Subtle grid */}
  <div
    className="absolute inset-0 opacity-[0.025]"
    style={{
      backgroundImage:
        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px,transparent 1px)",
      backgroundSize: "70px 70px",
    }}
  />

  {/* =====================================================
      CONTENT
  ====================================================== */}

  <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">

    <div className="grid min-h-[650px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

      {/* =================================================
          LEFT — BUSINESS MESSAGE
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -35,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative z-10"
      >

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-xl">

          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
            White-Label EV Platform
          </span>

        </div>

        {/* Heading */}
        <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-[66px]">

          Build your EV business.

          <span className="mt-2 block bg-gradient-to-r from-[#5EA7F5] via-[#9B7BEA] to-[#E27BB7] bg-clip-text text-transparent">
            Make it unmistakably yours.
          </span>

        </h1>

        {/* Description */}
        <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          Launch a complete EV charging experience under your own brand.
          EV Dock provides the technology behind your business — from
          charging operations and mobile apps to network connectivity.
        </p>

        {/* CTA */}
        <div className="mt-9 flex flex-wrap gap-3">

          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Request a Demo

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <a
            href="#platform"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-white/25 hover:bg-white/[0.08]"
          >
            Explore Platform
          </a>

        </div>

        {/* Business highlights */}
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">

          {[
            "Your Brand",
            "Your Customers",
            "Your Network",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />

              <span className="text-xs font-semibold text-slate-400">
                {item}
              </span>
            </div>

          ))}

        </div>

      </motion.div>


      {/* =================================================
          RIGHT — VISUAL
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 40,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.1,
          ease: "easeOut",
        }}
        className="relative"
      >

        {/* Main glow */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4B4FAE]/20 blur-[110px]" />

        {/* =================================================
            MAIN PRODUCT CARD
        ================================================== */}

        <div className="relative mx-auto max-w-xl">

          {/* Top floating label */}
          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-3 -top-7 z-20 hidden rounded-2xl border border-white/10 bg-[#111F31] px-4 py-3 shadow-2xl sm:block"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              </div>

              <div>
                <p className="text-[8px] uppercase tracking-wider text-slate-500">
                  Platform Status
                </p>

                <p className="mt-1 text-xs font-bold text-white">
                  Ready to Scale
                </p>
              </div>

            </div>

          </motion.div>


          {/* Product frame */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.045] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">

            <div className="overflow-hidden rounded-[25px] border border-white/10 bg-[#0D1828]">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F]">
                    <Zap className="h-5 w-5 text-white" />
                  </div>

                  <div>

                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      YOUR BRAND
                    </p>

                    <p className="mt-1 text-sm font-bold text-white">
                      EV Charging Platform
                    </p>

                  </div>

                </div>

                <div className="rounded-full border border-emerald-400/10 bg-emerald-400/10 px-3 py-1.5">

                  <span className="text-[8px] font-bold text-emerald-300">
                    LIVE
                  </span>

                </div>

              </div>


              {/* Dashboard body */}
              <div className="p-5 sm:p-6">

                {/* Welcome */}
                <div className="flex items-end justify-between">

                  <div>

                    <p className="text-[9px] uppercase tracking-[0.15em] text-slate-500">
                      BUSINESS OVERVIEW
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      Your network at a glance
                    </h3>

                  </div>

                  <div className="hidden rounded-xl bg-blue-400/10 p-3 sm:block">
                    <BarChart3 className="h-5 w-5 text-blue-300" />
                  </div>

                </div>


                {/* Stats */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">

                  {[
                    ["248", "Chargers"],
                    ["186", "Online"],
                    ["4.2K", "Sessions"],
                    ["₹8.4L", "Revenue"],
                  ].map(([value, label], index) => (

                    <motion.div
                      key={label}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.5 + index * 0.08,
                      }}
                      className="rounded-2xl border border-white/10 bg-white/[0.035] p-3"
                    >

                      <div className="mb-3 h-1 w-6 rounded-full bg-gradient-to-r from-[#1E5FA8] to-[#7A3FAF]" />

                      <p className="text-lg font-black text-white">
                        {value}
                      </p>

                      <p className="mt-1 text-[8px] text-slate-500">
                        {label}
                      </p>

                    </motion.div>

                  ))}

                </div>


                {/* Graph */}
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.025] p-5">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs font-bold text-white">
                        Charging Performance
                      </p>

                      <p className="mt-1 text-[8px] text-slate-500">
                        Network activity
                      </p>

                    </div>

                    <span className="rounded-full bg-blue-400/10 px-3 py-1 text-[8px] font-bold text-blue-300">
                      MONTHLY
                    </span>

                  </div>


                  <div className="mt-6 flex h-28 items-end gap-2">

                    {[35, 48, 42, 62, 55, 70, 64, 82, 74, 91, 80, 100].map(
                      (height, index) => (

                        <motion.div
                          key={index}
                          initial={{
                            height: 0,
                          }}
                          animate={{
                            height: `${height}%`,
                          }}
                          transition={{
                            duration: 0.7,
                            delay: 0.5 + index * 0.04,
                          }}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-[#1E5FA8] via-[#4B4FAE] to-[#B57EDC]"
                        />

                      )
                    )}

                  </div>

                </div>


                {/* Platform modules */}
                <div className="mt-4 grid gap-3 sm:grid-cols-3">

                  {[
                    [LayoutDashboard, "CMS", "Manage"],
                    [Smartphone, "Mobile App", "Engage"],
                    [Network, "OCPI", "Connect"],
                  ].map(([Icon, title, subtitle]) => {

                    const ItemIcon = Icon as React.ElementType;

                    return (
                      <div
                        key={title as string}
                        className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:bg-white/[0.06]"
                      >

                        <div className="flex items-center justify-between">

                          <ItemIcon className="h-4 w-4 text-blue-300" />

                          <ArrowRight
                            className="h-3 w-3 text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-300"
                          />

                        </div>

                        <p className="mt-4 text-xs font-bold text-white">
                          {title as string}
                        </p>

                        <p className="mt-1 text-[8px] uppercase tracking-wider text-slate-500">
                          {subtitle as string}
                        </p>

                      </div>
                    );
                  })}

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              LEFT FLOATING CARD
          ================================================== */}

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-7 -left-5 z-20 hidden rounded-2xl border border-white/10 bg-[#111F31] p-4 shadow-2xl md:block"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10">
                <Palette className="h-5 w-5 text-violet-300" />
              </div>

              <div>

                <p className="text-[8px] text-slate-500">
                  Brand Experience
                </p>

                <p className="mt-1 text-xs font-black text-white">
                  100% Yours
                </p>

              </div>

            </div>

          </motion.div>


          {/* =================================================
              RIGHT FLOATING CARD
          ================================================== */}

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-10 -right-3 z-20 hidden rounded-2xl border border-white/10 bg-[#111F31] p-4 shadow-2xl md:block"
          >

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10">
                <Globe2 className="h-5 w-5 text-blue-300" />
              </div>

              <div>

                <p className="text-[8px] text-slate-500">
                  Network
                </p>

                <p className="mt-1 text-xs font-black text-white">
                  OCPI Ready
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </div>


    {/* =====================================================
        BOTTOM VALUE STRIP
    ====================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.5,
      }}
      className="mx-auto max-w-5xl border-t border-white/10 pt-7"
    >

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">

        {[
          ["01", "Your Identity", "Brand everything"],
          ["02", "Your Customers", "Own the experience"],
          ["03", "Your Operations", "Control your network"],
          ["04", "Your Growth", "Scale with confidence"],
        ].map(([number, title, text]) => (

          <div
            key={number}
            className="flex gap-3"
          >

            <span className="text-[10px] font-black text-blue-300">
              {number}
            </span>

            <div>

              <p className="text-xs font-bold text-white">
                {title}
              </p>

              <p className="mt-1 text-[9px] text-slate-500">
                {text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </motion.div>

  </div>

</section>
        {/* =====================================================
            INTRO
        ====================================================== */}

        <section id="platform" className="bg-white py-24 md:py-28">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr]">

              <SectionHeading
                eyebrow="ONE PLATFORM"
                title="Everything your EV business needs."
                highlight="Nothing your brand doesn't."
                centered={false}
              />

              <div>

                <p className="text-lg leading-8 text-slate-600">
                  White-label your EV charging technology and create a
                  digital experience that belongs to your business.
                  EV Dock handles the complex infrastructure while you
                  stay focused on customers, operations and growth.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  {[
                    "CMS",
                    "Mobile App",
                    "OCPI",
                    "Payments",
                    "Analytics",
                  ].map((item) => (

                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            SOLUTION CARDS
        ====================================================== */}

        <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">

          <div className="pointer-events-none absolute left-[-250px] top-20 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[130px]" />

          <div className="pointer-events-none absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-pink-100/40 blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-2xl">

              <SectionHeading
                eyebrow="THE WHITE-LABEL ECOSYSTEM"
                title="Three layers."
                highlight="One business experience."
                description="Everything is designed to work together while remaining completely aligned with your brand."
                centered={false}
              />

            </div>

            <div className="mt-14 space-y-5">

              {solutions.map((solution, index) => {

                const Icon = solution.icon;

                return (
                  <motion.div
                    key={solution.title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
                  >

                    <div
                      className={`absolute right-[-80px] top-[-80px] h-48 w-48 rounded-full bg-gradient-to-br ${solution.gradient} opacity-0 blur-[80px] transition group-hover:opacity-20`}
                    />

                    <div className="relative grid items-center gap-8 lg:grid-cols-[90px_0.8fr_1fr]">

                      {/* Number/Icon */}
                      <div className="flex items-center gap-4 lg:block">

                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.gradient} shadow-lg`}
                        >
                          <Icon className="h-7 w-7 text-white" />
                        </div>

                        <span className="mt-3 block text-xs font-black tracking-widest text-slate-300">
                          {solution.number}
                        </span>

                      </div>

                      {/* Title */}
                      <div>

                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1E5FA8]">
                          {solution.label}
                        </p>

                        <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                          {solution.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-500">
                          {solution.description}
                        </p>

                      </div>

                      {/* Features */}
                      <div className="grid gap-3 sm:grid-cols-2">

                        {solution.items.map((item) => (

                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
                          >

                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50">
                              <Check className="h-3.5 w-3.5 text-[#1E5FA8]" />
                            </div>

                            <span className="text-xs font-semibold text-slate-600">
                              {item}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>
        
              

        {/* =====================================================
            MOBILE EXPERIENCE
        ====================================================== */}

        <section className="bg-[#07111F] py-24 md:py-32">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

            {/* Phone */}
            <div className="order-2 lg:order-1">
              <MobilePreview />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">

              <SectionHeading
                eyebrow="BRANDED MOBILE APP"
                title="A customer experience"
                highlight="that looks like you."
                titleClassName="text-white"
                description="Give customers a familiar, branded mobile experience from finding a charger to completing a payment."
                centered={false}
              />

              <div className="mt-9 grid gap-4 sm:grid-cols-2">

                {[
                  [
                    Smartphone,
                    "Your App Identity",
                    "Your logo, colors and branded interface.",
                  ],
                  [
                    Network,
                    "Find & Charge",
                    "Help customers discover and use your stations.",
                  ],
                  [
                    CreditCard,
                    "Simple Payments",
                    "Support a smooth charging and payment journey.",
                  ],
                  [
                    BarChart3,
                    "Customer Insights",
                    "Understand usage and customer activity.",
                  ],
                ].map(([Icon, title, text]) => {

                  const ItemIcon = Icon as React.ElementType;

                  return (
                    <div
                      key={title as string}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                    >

                      <ItemIcon className="h-5 w-5 text-blue-300" />

                      <h3 className="mt-5 text-sm font-bold text-white">
                        {title as string}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {text as string}
                      </p>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            BRAND CONTROL
        ====================================================== */}

        <section className="bg-white py-24 md:py-32">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

            {/* Content */}
            <div>

              <SectionHeading
                eyebrow="YOUR BRAND CONTROL"
                title="Customers see your business."
                highlight="Not ours."
                description="Create a consistent experience across your website, mobile app, customer communications and charging journey."
                centered={false}
              />

              <div className="mt-9 space-y-4">

                {[
                  [
                    Palette,
                    "Brand Identity",
                    "Apply your visual identity throughout the customer journey.",
                  ],
                  [
                    Users,
                    "Customer Ownership",
                    "Build direct relationships with customers through your branded experience.",
                  ],
                  [
                    Settings2,
                    "Business Control",
                    "Configure operational and commercial workflows around your business model.",
                  ],
                  [
                    ShieldCheck,
                    "Technology Foundation",
                    "Use a proven technology layer while maintaining your own business identity.",
                  ],
                ].map(([Icon, title, text]) => {

                  const ItemIcon = Icon as React.ElementType;

                  return (
                    <div
                      key={title as string}
                      className="flex gap-4 rounded-2xl border border-slate-100 p-5 transition hover:border-blue-100 hover:bg-slate-50"
                    >

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E5FA8]">
                        <ItemIcon className="h-5 w-5" />
                      </div>

                      <div>

                        <h3 className="text-sm font-bold text-slate-900">
                          {title as string}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {text as string}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* Visual */}
            <BrandPanel />

          </div>

        </section>

        {/* =====================================================
            BUSINESS BENEFITS
        ====================================================== */}

        <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32">

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <SectionHeading
                eyebrow="BUSINESS VALUE"
                title="Built for the way"
                highlight="EV businesses grow."
                description="Focus your resources on your customers and market while EV Dock provides the technology foundation."
              />

            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {benefits.map((benefit, index) => {

                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl hover:shadow-blue-100/30"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1E5FA8] transition group-hover:bg-gradient-to-br group-hover:from-[#1E5FA8] group-hover:to-[#7A3FAF] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-4xl font-black text-slate-100">
                        0{index + 1}
                      </span>

                    </div>

                    <h3 className="mt-7 text-lg font-black text-slate-950">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {benefit.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            SIMPLE PROCESS
        ====================================================== */}

       <section className="relative overflow-hidden bg-white py-24 md:py-32">

  {/* Background decoration */}
  <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-50 blur-[100px]" />

  <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-50 blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* =====================================================
        HEADER
    ====================================================== */}

    <div className="mx-auto max-w-3xl text-center">

      <SectionHeading
        eyebrow="SIMPLE TO GET STARTED"
        title="From idea"
        highlight="to EV business."
        description="A straightforward journey to launch your branded EV charging platform and scale it as your business grows."
      />

    </div>


    {/* =====================================================
        PROCESS
    ====================================================== */}

    <div className="relative mt-16">

      {/* Connecting line */}
      <div className="absolute left-[16.66%] right-[16.66%] top-[68px] hidden h-px bg-gradient-to-r from-[#1E5FA8]/20 via-[#7A3FAF]/40 to-[#C93C8F]/20 lg:block" />

      <div className="grid gap-6 lg:grid-cols-3">

        {[
          {
            number: "01",
            title: "Configure",
            eyebrow: "START WITH YOUR BUSINESS",
            description:
              "Define your brand, charging network, commercial model and customer experience around the way you want to operate.",
            icon: Settings2,
            points: [
              "Brand identity",
              "Network setup",
              "Business requirements",
            ],
            gradient: "from-[#1E5FA8] to-[#2F74C9]",
          },
          {
            number: "02",
            title: "Launch",
            eyebrow: "GO LIVE WITH YOUR BRAND",
            description:
              "Deploy your white-label CMS, branded mobile app and connectivity layer to deliver a complete charging experience.",
            icon: Rocket,
            points: [
              "White-label CMS",
              "Branded mobile app",
              "OCPI connectivity",
            ],
            gradient: "from-[#4B4FAE] to-[#7A3FAF]",
          },
          {
            number: "03",
            title: "Grow",
            eyebrow: "SCALE YOUR EV BUSINESS",
            description:
              "Expand your network, serve more customers and use real-time business insights to make smarter decisions.",
            icon: TrendingUp,
            points: [
              "More locations",
              "More customers",
              "More business visibility",
            ],
            gradient: "from-[#7A3FAF] to-[#C93C8F]",
          },
        ].map((step, index) => {

          const Icon = step.icon;

          return (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group relative"
            >

              {/* =================================================
                  NUMBER
              ================================================== */}

              <div className="relative z-10 mx-auto flex h-[68px] w-[68px] items-center justify-center">

                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-10 blur-xl transition duration-300 group-hover:opacity-30`}
                />

                <div
                  className={`relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gradient-to-br ${step.gradient} shadow-lg`}
                >

                  <Icon className="h-6 w-6 text-white" />

                </div>

              </div>


              {/* =================================================
                  CARD
              ================================================== */}

              <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-300 group-hover:bg-white group-hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]">

                {/* Top */}
                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
                    STEP {step.number}
                  </span>

                  <span className="text-4xl font-black text-slate-200 transition group-hover:text-slate-100">
                    {step.number}
                  </span>

                </div>


                {/* Title */}
                <p className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-[#1E5FA8]">
                  {step.eyebrow}
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {step.description}
                </p>


                {/* Points */}
                <div className="mt-6 space-y-2">

                  {step.points.map((point) => (

                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3 py-2.5"
                    >

                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                      </div>

                      <span className="text-xs font-semibold text-slate-600">
                        {point}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>


    {/* =====================================================
        BOTTOM MESSAGE
    ====================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: 0.3,
      }}
      className="mx-auto mt-12 max-w-4xl"
    >

      <div className="flex flex-col items-center justify-between gap-5 rounded-[24px] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-violet-50 px-6 py-5 text-center sm:flex-row sm:text-left">

        <div className="flex items-center gap-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1E5FA8]">
            <Zap className="h-4 w-4 text-white" />
          </div>

          <div>

            <p className="text-sm font-black text-slate-900">
              One platform. Built around your business.
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Launch with EV Dock and focus on growing your charging network.
            </p>

          </div>

        </div>

        <Link
          to="/contact-us"
          className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold text-[#1E5FA8]"
        >
          Get Started

          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

      </div>

    </motion.div>

  </div>

</section>

        {/* =====================================================
            CTA
        ====================================================== */}
<section className="px-5 pb-16 md:px-10 md:pb-24">
  <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-slate-200 bg-[#07111F]">

    {/* Background glow */}
    <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#1E5FA8]/25 blur-[120px]" />

    <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[400px] w-[500px] rounded-full bg-[#7A3FAF]/20 blur-[120px]" />

    {/* Grid */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage:
          "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px,transparent 1px)",
        backgroundSize: "55px 55px",
      }}
    />

    <div className="relative grid items-center gap-12 px-7 py-12 sm:px-10 md:px-14 md:py-16 lg:grid-cols-[1fr_0.7fr] lg:px-20">

      {/* =====================================================
          LEFT CONTENT
      ====================================================== */}

      <div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">

          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-200">
            EV DOCK WHITE-LABEL
          </span>

        </div>

        {/* Heading */}
        <h2 className="mt-6 max-w-2xl text-3xl font-black leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">

          Your brand.

          <span className="block bg-gradient-to-r from-[#5EA7F5] via-[#9B7BEA] to-[#E27BB7] bg-clip-text text-transparent">
            Your charging business.
          </span>

        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
          Launch a branded EV charging ecosystem with the technology
          you need to operate your network, engage customers and
          connect to the wider EV ecosystem.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center gap-3">

          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Talk to Our Team

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <span className="text-xs font-medium text-slate-500">
            Build • Brand • Scale
          </span>

        </div>

      </div>


      {/* =====================================================
          RIGHT — PRODUCT SUMMARY
      ====================================================== */}

      <div className="relative">

        {/* Glow */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4B4FAE]/20 blur-[90px]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative rounded-[28px] border border-white/10 bg-white/[0.045] p-3 backdrop-blur-xl"
        >

          <div className="rounded-[22px] border border-white/10 bg-[#0D1828] p-5">

            {/* Header */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F]">
                  <Zap className="h-5 w-5 text-white" />
                </div>

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    YOUR BRAND
                  </p>

                  <p className="mt-1 text-sm font-black text-white">
                    EV Charging
                  </p>

                </div>

              </div>

              <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-[8px] font-bold text-emerald-300">
                READY
              </span>

            </div>


            {/* Divider */}
            <div className="my-5 h-px bg-white/10" />


            {/* Platform */}
            <div className="space-y-3">

              {[
                [LayoutDashboard, "White-Label CMS", "Operate"],
                [Smartphone, "Branded Mobile App", "Engage"],
                [Network, "OCPI Connectivity", "Connect"],
              ].map(([Icon, title, label]) => {

                const ItemIcon = Icon as React.ElementType;

                return (
                  <div
                    key={title as string}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-3.5"
                  >

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/10">
                        <ItemIcon className="h-4 w-4 text-blue-300" />
                      </div>

                      <div>

                        <p className="text-xs font-bold text-white">
                          {title as string}
                        </p>

                        <p className="mt-1 text-[8px] text-slate-500">
                          {label as string}
                        </p>

                      </div>

                    </div>

                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />

                  </div>
                );
              })}

            </div>


            {/* Bottom message */}
            <div className="mt-4 rounded-2xl bg-gradient-to-r from-[#1E5FA8]/20 to-[#7A3FAF]/20 p-4">

              <div className="flex items-center gap-3">

                <Sparkles className="h-4 w-4 shrink-0 text-violet-300" />

                <p className="text-[9px] leading-5 text-slate-400">
                  Your customers see your brand.
                  <span className="font-semibold text-white">
                    {" "}EV Dock powers the technology.
                  </span>
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>


    {/* =====================================================
        BOTTOM MINI STRIP
    ====================================================== */}

    <div className="relative border-t border-white/10 bg-white/[0.025] px-7 py-5 sm:px-10 md:px-14 lg:px-20">

      <div className="grid gap-4 sm:grid-cols-3">

        {[
          ["01", "Launch faster", "Avoid building your technology stack from scratch."],
          ["02", "Own the experience", "Build direct customer relationships under your brand."],
          ["03", "Scale with confidence", "Technology designed to grow with your network."],
        ].map(([number, title, text]) => (

          <div
            key={number}
            className="flex gap-3"
          >

            <span className="text-[9px] font-black text-blue-300">
              {number}
            </span>

            <div>

              <p className="text-xs font-bold text-white">
                {title}
              </p>

              <p className="mt-1 text-[9px] leading-5 text-slate-500">
                {text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>
</section>

      </main>

      <Footer />
    </>
  );
};

export default WhiteLabel;