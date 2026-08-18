import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Check,
  CheckCircle2,
  Gauge,
  Home,
  Lock,
  Plug,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wifi,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/Common/BackToTop";

/* =========================================================
   EV CHARGER RANGE
========================================================= */

const chargerOptions = [
  {
    power: "3.3 kW",
    title: "AC Home Charger",
    text: "A compact and reliable charging solution for convenient everyday EV charging at home.",
    tag: "Home",
    type: "Type-2 AC",
    feature: "Everyday Charging",
  },
  {
    power: "7.4 kW",
    title: "Smart AC Charger",
    text: "Faster home charging with smart connectivity and a compact design for residential parking.",
    tag: "Popular",
    type: "Type-2 AC",
    feature: "Smart Charging",
  },
  {
    power: "14 kW",
    title: "Dual CCS2 Charger",
    text: "Fast and reliable charging with two CCS2 connectors for convenient multi-vehicle charging.",
    tag: "Dual Connector",
    type: "Dual CCS2",
    feature: "Multi-Vehicle",
  },
  {
    power: "22 kW",
    title: "High-Power AC Charger",
    text: "A powerful AC charging solution for compatible EVs, residential communities and commercial parking.",
    tag: "High Power",
    type: "Type-2 AC",
    feature: "Fast AC Charging",
  },
  {
    power: "Hybrid",
    title: "Type-2 + 3.3 kW Hybrid Charger",
    text: "A versatile hybrid charging solution supporting Type-2 and 3.3 kW charging for different EV requirements.",
    tag: "Hybrid",
    type: "Type-2 + 3.3 kW",
    feature: "Multi-Standard",
  },
];

/* =========================================================
   FEATURES
========================================================= */

const features = [
  {
    icon: Smartphone,
    title: "Smart Connectivity",
    text: "Monitor and manage your charging experience with connected technology.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Charging",
    text: "Designed with protection features for reliable everyday EV charging.",
  },
  {
    icon: Wifi,
    title: "Connected Experience",
    text: "Stay informed about your charging status with smart connectivity.",
  },
  {
    icon: Lock,
    title: "Secure Access",
    text: "Designed to provide a controlled and convenient charging experience.",
  },
];

/* =========================================================
   INSTALLATION
========================================================= */

const installationSteps = [
  {
    number: "01",
    title: "Choose Your Charger",
    text: "Select the charging solution according to your EV, location and charging requirements.",
  },
  {
    number: "02",
    title: "Site Assessment",
    text: "Our team evaluates your parking area and electrical setup.",
  },
  {
    number: "03",
    title: "Professional Installation",
    text: "Get your EV charger installed at your preferred location.",
  },
  {
    number: "04",
    title: "Start Charging",
    text: "Connect your EV and enjoy a convenient charging experience.",
  },
];

/* =========================================================
   PRODUCT VISUAL
========================================================= */

const ChargerVisual = () => {
  return (
    <div className="relative mx-auto flex h-[560px] w-full max-w-[620px] items-center justify-center">

      {/* Background Glow */}

      <div className="absolute h-[380px] w-[380px] rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute right-5 top-16 h-48 w-48 rounded-full bg-violet-500/20 blur-[100px]" />

      <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-[80px]" />

      {/* Decorative Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[430px] w-[430px] rounded-full border border-white/10"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[360px] w-[360px] rounded-full border border-dashed border-blue-300/20"
      />

      {/* =====================================================
          CHARGER
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="relative z-20"
      >

        <div className="absolute -bottom-6 left-1/2 h-8 w-40 -translate-x-1/2 rounded-full bg-black/50 blur-xl" />

        {/* Charger Body */}

        <div className="relative h-[350px] w-[215px] rounded-[42px] border border-white/20 bg-gradient-to-br from-slate-700 via-slate-900 to-black p-3 shadow-[0_35px_100px_rgba(0,0,0,0.65)]">

          <div className="flex h-full flex-col rounded-[32px] border border-white/5 bg-gradient-to-b from-slate-900 to-black p-5">

            {/* Header */}
            <div className="flex items-center justify-between">
              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-500">
                  EV DOCK
                </p>

                <p className="mt-1 text-[9px] font-semibold text-slate-400">
                  SMART CHARGER
                </p>

              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10">
                <Zap className="h-4 w-4 text-cyan-300" />
              </div>

            </div>

            {/* Display */}

            <div className="mt-10 rounded-[24px] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-5">

              <div className="flex items-center justify-between">

                <span className="text-[8px] uppercase tracking-[0.2em] text-slate-500">
                  POWER
                </span>

                <span className="flex items-center gap-1.5 text-[8px] font-bold text-emerald-400">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />

                  ACTIVE

                </span>

              </div>

              <div className="mt-4 flex items-end gap-2">

                <span className="text-5xl font-black tracking-tight text-cyan-300">
                  7.4
                </span>

                <span className="mb-2 text-sm font-bold text-cyan-300">
                  kW
                </span>

              </div>

            </div>

            {/* Progress */}

            <div className="mt-auto">

              <div className="flex items-center justify-between">

                <span className="text-[8px] text-slate-500">
                  Charging Progress
                </span>

                <span className="text-[8px] font-bold text-cyan-300">
                  78%
                </span>

              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "78%",
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.5,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400"
                />

              </div>

              <div className="mt-5 flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <BatteryCharging className="h-4 w-4 text-emerald-400" />

                  <span className="text-[8px] text-slate-400">
                    Charging
                  </span>

                </div>

                <span className="text-[8px] text-slate-500">
                  EV Dock
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Charging Cable */}

        <motion.div
          animate={{
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 left-1/2 h-32 w-36 -translate-x-1/2"
        >

          <div className="absolute left-1/2 top-0 h-24 w-20 -translate-x-1/2 rounded-b-[50px] border-b-[5px] border-r-[5px] border-slate-500" />

          <div className="absolute bottom-0 right-2 h-12 w-7 rotate-[-20deg] rounded-lg bg-slate-700 shadow-lg" />

        </motion.div>

      </motion.div>

      {/* Floating Power Card */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-12 z-30 rounded-2xl border border-white/10 bg-white p-4 shadow-2xl sm:right-4"
      >

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">

            <Plug className="h-5 w-5 text-blue-600" />

          </div>

          <div>

            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Smart AC
            </p>

            <p className="mt-1 text-xl font-black text-blue-700">
              7.4 kW
            </p>

          </div>

        </div>

      </motion.div>

      {/* Floating Status */}

      <motion.div
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-0 z-30 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl sm:left-3"
      >

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">

            <CheckCircle2 className="h-5 w-5 text-emerald-400" />

          </div>

          <div>

            <p className="text-[9px] uppercase tracking-[0.15em] text-slate-500">
              Charging Status
            </p>

            <p className="mt-1 text-xs font-bold text-white">
              Ready to Charge
            </p>

          </div>

        </div>

      </motion.div>

    </div>
  );
};

/* =========================================================
   CHARGER CARD
========================================================= */

const ChargerCard = ({
  charger,
  index,
}: {
  charger: (typeof chargerOptions)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(30,95,168,0.12)]"
    >
      {/* Top Gradient */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F]" />

      {/* Hover Glow */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-100/60 blur-[50px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Header */}
      <div className="relative flex items-center justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-[#1E5FA8]">
          <Zap
            size={18}
            className="text-[#1E5FA8] transition-colors group-hover:text-white"
          />
        </div>

        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-slate-400">
          {charger.tag}
        </span>

      </div>

      {/* Power */}
      <div className="relative mt-6 flex items-end justify-between">

        <div>
          <p className="text-3xl font-black tracking-[-0.04em] text-slate-950">
            {charger.power}
          </p>

          <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-emerald-600">
            {charger.feature}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 px-2.5 py-1.5">
          <span className="text-[8px] font-bold text-slate-500">
            {charger.type}
          </span>
        </div>

      </div>

      {/* Title */}
      <h3 className="relative mt-5 text-base font-black text-slate-900">
        {charger.title}
      </h3>

      {/* Description */}
      <p className="relative mt-2 line-clamp-2 min-h-[42px] text-xs leading-5 text-slate-500">
        {charger.text}
      </p>

      {/* Bottom */}
      <div className="relative mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

        <div className="flex items-center gap-1.5">

          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

          <span className="text-[9px] font-semibold text-slate-500">
            Ready to Install
          </span>

        </div>

        <button
          type="button"
          aria-label={`View ${charger.title}`}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 group-hover:bg-[#1E5FA8] group-hover:text-white"
        >
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>

      </div>

    </motion.div>
  );
};

/* =========================================================
   PAGE
========================================================= */

const ACHomeCharger: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">

      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#07111F] pt-24">

          {/* Background */}

          <div className="absolute left-[-250px] top-[-150px] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[150px]" />

          <div className="absolute right-[-200px] top-0 h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[150px]" />

          <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[150px]" />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-14 md:px-10 md:pb-28 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Hero Content */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative z-10"
            >

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2">

                <Home className="h-3.5 w-3.5 text-blue-300" />

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">
                  EV CHARGING SOLUTIONS
                </span>

              </div>

              <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-[68px]">

                Power your EV

                <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  your way.
                </span>

              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
                Smart, reliable and flexible EV charging solutions for homes,
                workplaces, fleets and commercial locations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-2xl shadow-blue-950/30 transition hover:-translate-y-1 hover:bg-blue-50"
                >

                  Explore Chargers

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/10"
                >

                  Talk to an Expert

                  <ArrowUpRight size={16} />

                </button>

              </div>

              {/* Stats */}

              <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7">

                <div>

                  <p className="text-2xl font-black text-white">
                    3.3–22
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500">
                    kW Power Range
                  </p>

                </div>

                <div className="border-l border-white/10 pl-5">

                  <p className="text-2xl font-black text-white">
                    CCS2
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Fast Charging
                  </p>

                </div>

                <div className="border-l border-white/10 pl-5">

                  <p className="text-2xl font-black text-white">
                    Hybrid
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Flexible Charging
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Product Visual */}

            <ChargerVisual />

          </div>

        </section>

        {/* =====================================================
            TRUST STRIP
        ====================================================== */}

        <section className="border-b border-slate-100 bg-white">

          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-slate-100 md:grid-cols-4">

            {[
              ["3.3–22 kW", "Power Options"],
              ["Type-2", "AC Charging"],
              ["Dual CCS2", "Multi-Vehicle"],
              ["Hybrid", "Flexible Charging"],
            ].map(([value, label]) => (

              <div
                key={label}
                className="px-4 py-7 text-center"
              >

                <p className="text-lg font-black text-slate-900 md:text-xl">
                  {value}
                </p>

                <p className="mt-1 text-[10px] font-medium text-slate-400">
                  {label}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="px-5 py-24 md:px-10 md:py-32">

          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>                    
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                <Zap
                  size={12}
                  className="text-blue-600"
                />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">
                  EV CHARGING
                </span>
            </div>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 md:text-5xl">

                One platform.

                <span className="block bg-gradient-to-r from-[#1E5FA8] to-[#7A3FAF] bg-clip-text text-transparent">
                  Multiple charging solutions.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 md:text-lg">
                From compact home charging to dual-connector and hybrid
                solutions, EV Dock provides flexible charging options for
                different EV requirements and locations.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "Type-2 AC charging",
                  "Dual CCS2 charging",
                  "Hybrid charging options",
                  "Smart connected experience",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                  >

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100">

                      <Check
                        size={14}
                        className="text-blue-600"
                      />

                    </div>

                    <p className="text-xs font-bold text-slate-700">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* Charging Dashboard */}

            <div className="relative">

              <div className="absolute -inset-10 rounded-full bg-blue-100/60 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[36px] bg-[#07111F] p-6 shadow-[0_30px_90px_rgba(15,23,42,0.18)] md:p-8">

                <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-blue-500/20 blur-[80px]" />

                <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-7">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[9px] font-bold tracking-[0.25em] text-slate-500">
                        EV DOCK
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-white">
                        Charging Network
                      </h3>

                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">

                      <Zap className="text-cyan-300" />

                    </div>

                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <div className="rounded-2xl border border-white/5 bg-slate-950 p-4">

                      <p className="text-[9px] uppercase tracking-widest text-slate-500">
                        AC Charger
                      </p>

                      <p className="mt-3 text-2xl font-black text-cyan-300">
                        7.4 kW
                      </p>

                      <p className="mt-1 text-[9px] text-emerald-400">
                        ● Available
                      </p>

                    </div>

                    <div className="rounded-2xl border border-white/5 bg-slate-950 p-4">

                      <p className="text-[9px] uppercase tracking-widest text-slate-500">
                        CCS2
                      </p>

                      <p className="mt-3 text-2xl font-black text-violet-300">
                        14 kW
                      </p>

                      <p className="mt-1 text-[9px] text-emerald-400">
                        ● Connected
                      </p>

                    </div>

                  </div>

                  <div className="mt-4 rounded-2xl border border-white/5 bg-slate-950 p-5">

                    <div className="flex items-center justify-between">

                      <span className="text-xs text-slate-500">
                        Network Utilization
                      </span>

                      <span className="text-xs font-bold text-cyan-300">
                        78%
                      </span>

                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">

                      <motion.div
                        animate={{
                          width: ["25%", "78%", "55%", "78%"],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400"
                      />

                    </div>

                    <div className="mt-5 flex items-center justify-between">

                      <div className="flex items-center gap-2">

                        <BatteryCharging className="h-4 w-4 text-emerald-400" />

                        <span className="text-xs text-slate-400">
                          Charging Active
                        </span>

                      </div>

                      <span className="text-xs font-bold text-white">
                        Smart Network
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            EV CHARGER RANGE
        ====================================================== */}

        <section className="relative overflow-hidden bg-slate-50 px-5 py-24 md:px-10 md:py-32">

          <div className="absolute left-[-200px] top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-[100px]" />

          <div className="absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-violet-100/60 blur-[100px]" />

          <div className="relative mx-auto max-w-7xl">

            {/* Header */}
          <div className="flex flex-col items-center justify-center gap-6 text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">

              <Zap
                size={12}
                className="text-blue-600"
              />

              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">
                EV CHARGER RANGE
              </span>

            </div>

            <h2 className="max-w-2xl text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">
              Choose the right{" "}
              <span className="bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] bg-clip-text text-transparent">
                charger.
              </span>
            </h2>

            <p className="max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              Explore home, smart, dual-connector and hybrid charging
              solutions designed for different EV charging requirements.
            </p>

          </div>

            {/* Cards */}

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {chargerOptions.map((charger, index) => (

                <ChargerCard
                  key={charger.power}
                  charger={charger}
                  index={index}
                />

              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            SMART FEATURES
        ====================================================== */}

        <section className="px-5 py-24 md:px-10 md:py-32">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">
              <div>                    
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                  <Zap
                    size={12}
                    className="text-blue-600"
                  />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">
                    SMART FEATURES
                  </span>
              </div>
            </div>
              
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">

                More than a charger.

                <span className="block bg-gradient-to-r from-[#1E5FA8] to-[#7A3FAF] bg-clip-text text-transparent">
                  A smarter experience.
                </span>

              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500">
                Simple, connected and convenient charging technology designed
                around your EV and charging environment.
              </p>

            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">

              {features.map((feature, index) => {

                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
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
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-200 hover:shadow-xl md:p-8"
                  >

                    <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-blue-100/50 blur-[50px] opacity-0 transition group-hover:opacity-100" />

                    <div className="relative flex gap-5">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50">

                        <Icon
                          size={24}
                          className="text-[#1E5FA8]"
                        />

                      </div>

                      <div>

                        <h3 className="text-lg font-black text-slate-900">
                          {feature.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-slate-500">
                          {feature.text}
                        </p>

                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            INSTALLATION
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#07111F] px-5 py-24 md:px-10 md:py-32">

          <div className="absolute left-[-150px] top-0 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />

          <div className="absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl">

            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

              {/* Content */}

              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                  <Zap
                    size={12}
                    className="text-blue-600"
                  />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">
                    SIMPLE INSTALLATION
                  </span>
              </div>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white md:text-5xl">

                  From charger selection

                  <span className="block text-blue-300">
                    to your first charge.
                  </span>

                </h2>

                <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
                  From selecting the right charger to installation, EV Dock
                  makes your EV charging journey simple.
                </p>

                <button
                  type="button"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >

                  Request Installation

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </button>

              </div>

              {/* Steps */}

              <div className="relative">

                <div className="absolute left-6 top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-blue-400/60 via-violet-400/40 to-transparent sm:block" />

                <div className="grid gap-4">

                  {installationSteps.map((step, index) => (

                    <motion.div
                      key={step.number}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.1,
                      }}
                      className="group relative rounded-[26px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl transition hover:border-blue-400/30 hover:bg-white/[0.07] sm:pl-20"
                    >

                      <div className="absolute left-5 top-6 hidden h-8 w-8 items-center justify-center rounded-full border border-blue-400/30 bg-[#07111F] text-[9px] font-black text-blue-300 sm:flex">

                        {step.number}

                      </div>

                      <div className="sm:hidden">

                        <span className="text-[10px] font-black text-blue-300">
                          {step.number}
                        </span>

                      </div>

                      <h3 className="mt-3 text-base font-black text-white sm:mt-0">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {step.text}
                      </p>

                    </motion.div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            WHY EV DOCK
        ====================================================== */}

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-10 md:py-32">

            {/* Ambient Background */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-[150px]" />

            <div className="pointer-events-none absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-violet-100/40 blur-[120px]" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-blue-100/40 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                <Zap
                  size={12}
                  className="text-blue-600"
                />   

                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">
                  Intelligent EV Infrastructure
                </span>

              </div>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-black md:text-5xl">

                One ecosystem.

                <span className="block bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] bg-clip-text text-transparent">
                  Every charging need.
                </span>

              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
                From everyday home charging to high-power commercial infrastructure,
                EV Dock connects powerful hardware with intelligent technology.
              </p>

            </div>

             {/* Technology Layout */}
            <div className="relative mt-20">

              {/* Central Connector */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-200 to-transparent lg:block" />

              <div className="grid gap-5 lg:grid-cols-12">

                {/* LEFT COLUMN */}
                <div className="space-y-5 lg:col-span-3">

                  {/* AC */}
                  <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">

                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-100/60 blur-3xl transition-all group-hover:bg-blue-200" />

                    <div className="relative">

                      <div className="flex items-center justify-between">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                          <Gauge className="h-5 w-5 text-[#1E5FA8]" />
                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          01
                        </span>

                      </div>

                      <h3 className="mt-6 text-xl font-black text-slate-950">
                        AC Charging
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        Reliable everyday charging for homes,
                        offices and destinations.
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#1E5FA8]">
                        Everyday charging
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>

                    </div>

                  </div>

                  {/* SMART */}
                  <div className="group rounded-[28px] bg-slate-950 p-6 text-white shadow-xl">

                    <div className="flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                        <Sparkles className="h-5 w-5 text-blue-300" />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                        02
                      </span>

                    </div>

                    <h3 className="mt-6 text-xl font-black">
                      Smart Technology
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      Connected charging intelligence
                      built into every experience.
                    </p>

                  </div>

                </div>

                {/* CENTER FEATURE */}
                <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0F172A] via-[#1E5FA8] to-[#7A3FAF] p-8 text-white shadow-2xl lg:col-span-6">

                  {/* Glow */}
                  <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]" />

                  {/* Ring */}
                  <div className="absolute h-[310px] w-[310px] rounded-full border border-white/10" />
                  <div className="absolute h-[220px] w-[220px] rounded-full border border-white/10" />

                  <div className="relative z-10 text-center">

                    {/* Charging Icon */}
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">

                      <Zap className="h-11 w-11 text-white" />

                    </div>

                    <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-blue-200">
                      EV Dock Technology
                    </p>

                    <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-4xl">
                      Charge smarter.
                    </h3>

                    <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/60">
                      Hardware, software and connectivity working
                      together as one intelligent charging ecosystem.
                    </p>

                    {/* Status */}
                    <div className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">

                      <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

                      <span className="text-xs font-medium text-white/80">
                        Charging ecosystem active
                      </span>

                    </div>

                  </div>

                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-5 lg:col-span-3">

                  {/* DC */}
                  <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl">

                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-violet-100/60 blur-3xl" />

                    <div className="relative">

                      <div className="flex items-center justify-between">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50">

                          <Zap className="h-5 w-5 text-[#7A3FAF]" />

                        </div>

                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          03
                        </span>

                      </div>

                      <h3 className="mt-6 text-xl font-black text-slate-950">
                        DC Fast Charging
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        High-power charging designed for
                        highways, fleets and businesses.
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#7A3FAF]">
                        High-power charging
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>

                    </div>

                  </div>

                  {/* NETWORK */}
                  <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl">

                    <div className="flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                        <Gauge className="h-5 w-5 text-slate-700" />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        04
                      </span>

                    </div>

                    <h3 className="mt-6 text-xl font-black text-slate-950">
                      Connected Network
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Monitor, manage and scale your charging
                      infrastructure from one platform.
                    </p>

                  </div>

                </div>

              </div>

            </div>
         </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

       <section className="px-5 pb-16 md:px-10 md:pb-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#0F172A]">

          {/* Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/20 blur-[90px]" />

          <div className="pointer-events-none absolute -bottom-20 left-20 h-48 w-48 rounded-full bg-violet-600/20 blur-[90px]" />

          {/* Content */}
          <div className="relative flex flex-col gap-7 px-6 py-9 md:flex-row md:items-center md:justify-between md:px-10 md:py-10">

            {/* Left */}
            <div className="max-w-2xl">

              <div className="mb-3 flex items-center gap-2">

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 ring-1 ring-blue-400/20">
                  <Zap className="h-4 w-4 text-blue-300" />
                </div>

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-300">
                  EV Dock
                </span>

              </div>

              <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">

                Charge smarter.

                <span className="ml-2 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Go further.
                </span>

              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Smart AC, DC and fast charging solutions for
                modern electric mobility.
              </p>

            </div>


            {/* Right Buttons */}
            <div className="flex shrink-0 flex-wrap gap-2">

              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
              >

                Explore Chargers

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />

              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >

                Talk to Expert

                <ArrowUpRight size={14} />

              </button>

            </div>

          </div>

        </div>
      </section>

      </main>

      <Footer />

      <BackToTop />

    </div>
  );
};

export default ACHomeCharger;