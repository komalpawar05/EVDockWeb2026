import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  CheckCircle2,
  Globe2,
  MapPin,
  Navigation,
  Wallet,
  Zap,
  Smartphone,
  ShieldCheck,
  Clock3,
  PlugZap,
  LocateFixed,
  Route,
  CreditCard,
  Activity,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import MobileAppHero from "../assets/app.png";
import SectionHeading from "../components/Common/SectionHeading";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const MobileApp = () => {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-slate-900">

        {/* =========================================================
            HERO
        ========================================================== */}

        <section className="relative overflow-hidden bg-[#07111F] pt-24">

          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#1E5FA8]/25 blur-[130px]" />

          <div className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-[#7A3FAF]/25 blur-[140px]" />

          <div className="pointer-events-none absolute bottom-[-300px] left-1/2 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-[#C93C8F]/10 blur-[150px]" />

          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

            <div className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr]">

              {/* LEFT */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                animate="visible"
                className="relative z-10"
              >

                {/* Badge */}
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
                    EV Dock Mobile App
                  </span>
                </div>

                {/* Heading */}
                <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-[70px]">
                  Your EV journey.
                  <span className="mt-2 block bg-gradient-to-r from-blue-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                    One powerful app.
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                  Find nearby chargers, check live availability, start
                  charging, manage your wallet and track every charging
                  session — all from one connected platform.
                </p>

                {/* Buttons */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50">
                    Explore EV Dock App

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <a
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                  >
                    Explore Features
                  </a>

                </div>

                {/* Feature List */}
                <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4">

                  {[
                    "Find chargers",
                    "Live availability",
                    "Digital wallet",
                    "Charging history",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-400"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      {item}
                    </div>
                  ))}

                </div>

              </motion.div>

              {/* RIGHT */}
              <motion.div
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                className="relative flex min-h-[620px] items-center justify-center"
              >

                {/* Main Glow */}
                <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-pink-500/10 blur-[100px] sm:h-[520px] sm:w-[520px]" />

                {/* Orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[400px] w-[400px] rounded-full border border-white/10 border-dashed sm:h-[520px] sm:w-[520px]"
                />

                <div className="absolute h-[300px] w-[300px] rounded-full border border-white/5 sm:h-[390px] sm:w-[390px]" />

                {/* App Image */}
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >

                  <div className="absolute inset-0 rounded-[55px] bg-gradient-to-br from-blue-500 to-violet-600 opacity-30 blur-3xl" />

                  <img
                    src={MobileAppHero}
                    alt="EV Dock Mobile App"
                    className="relative max-h-[620px] w-full max-w-[570px] object-contain drop-shadow-[0_35px_80px_rgba(0,0,0,0.5)]"
                  />

                </motion.div>

                {/* Floating Charging Card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 top-[20%] z-20 hidden rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl sm:block"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15">
                      <Zap className="h-5 w-5 text-emerald-300" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Charging
                      </p>

                      <p className="mt-1 text-[10px] text-emerald-300">
                        Active now
                      </p>
                    </div>

                  </div>

                </motion.div>

                {/* Floating Location Card */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[17%] right-0 z-20 hidden rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl sm:block"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/15">
                      <MapPin className="h-5 w-5 text-blue-300" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Nearby Charger
                      </p>

                      <p className="mt-1 text-[10px] text-blue-300">
                        1.2 km away
                      </p>
                    </div>

                  </div>

                </motion.div>

              </motion.div>

            </div>

          </div>

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07111F] to-transparent" />

        </section>


        {/* =========================================================
            QUICK FEATURES
        ========================================================== */}

        <section
          id="features"
          className="relative bg-white py-20 sm:py-24"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
            centered
            eyebrow="Everything in one place"
            title="Charging made"
            highlight="simpler."
            description=" A single app designed to make every part of your charging
                  journey easier."
          />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  icon: MapPin,
                  title: "Find",
                  text: "Discover nearby charging stations.",
                },
                {
                  icon: Zap,
                  title: "Charge",
                  text: "Start and monitor your charging session.",
                },
                {
                  icon: Wallet,
                  title: "Pay",
                  text: "Manage payments from your wallet.",
                },
                {
                  icon: BatteryCharging,
                  title: "Track",
                  text: "Follow battery and charging activity.",
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group rounded-[26px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 text-[#4B4FAE]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>


        {/* =========================================================
            FIND CHARGER
        ========================================================== */}

        <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">

          <div className="absolute right-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

            {/* Visual */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >

              <div className="absolute left-10 top-10 h-[350px] w-[350px] rounded-full bg-blue-500/15 blur-[100px]" />

              <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-3 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">

                <img
                  src={MobileAppHero}
                  alt="Find EV charging station"
                  className="w-full rounded-[28px] object-contain"
                />

              </div>

              {/* Status Card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-[-10px] rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:left-[-25px]"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                    <Navigation className="h-5 w-5 text-emerald-500" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-900">
                      Best route found
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Charger · 1.2 km
                    </p>
                  </div>

                </div>

              </motion.div>

            </motion.div>


            {/* Content */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <SectionHeading
                eyebrow="01 / FIND"
                title="Find the right charger,"
                highlight="wherever you go."
                description="Discover EV Dock and participating partner charging stations and make your journey easier with better charging visibility."
              />

              <div className="mt-8 space-y-4">

                {[
                  "Nearby charging stations",
                  "Real-time availability",
                  "EV Dock & partner chargers",
                  "Distance and navigation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50">
                      <Check className="h-3.5 w-3.5 text-[#1E5FA8]" />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </motion.div>

          </div>

        </section>


        {/* =========================================================
            NETWORK
        ========================================================== */}

        <section className="relative overflow-hidden bg-[#07111F] py-24 sm:py-28">

          <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >

              <SectionHeading
                centered
                dark
                eyebrow="CONNECTED NETWORK"
                title="Multiple partners."
                highlight="One charging experience."
                description="EV Dock brings participating charging networks together so drivers can discover more charging options from one platform."
              />

            </motion.div>


            <div className="relative mx-auto mt-14 max-w-5xl">

              {/* Connecting Line */}
              <div className="absolute left-[18%] right-[18%] top-1/2 hidden h-px bg-gradient-to-r from-blue-500/20 via-violet-500/50 to-blue-500/20 lg:block" />

              <div className="grid gap-5 lg:grid-cols-3">

                {[
                  {
                    icon: Zap,
                    title: "EV Dock Chargers",
                    text: "Connected EV Dock infrastructure.",
                  },
                  {
                    icon: Globe2,
                    title: "Partner Networks",
                    text: "Participating charging stations.",
                  },
                  {
                    icon: Smartphone,
                    title: "EV Drivers",
                    text: "One app for charging discovery.",
                  },
                ].map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative z-10 rounded-[28px] border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                    >

                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E5FA8] to-[#7A3FAF] shadow-lg shadow-blue-500/20">
                        <Icon className="h-7 w-7 text-white" />
                      </div>

                      <h3 className="mt-6 text-lg font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.text}
                      </p>

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            CHARGING
        ========================================================== */}

        <section className="bg-white py-24 sm:py-28">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >

              <SectionHeading
                centered
                eyebrow="02 / CHARGE"
                title="Stay informed while"
                highlight="your vehicle charges."
                description="Keep track of the information that matters throughout your charging session."
              />

            </motion.div>


            {/* Stats */}

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  value: "58%",
                  label: "Battery Level",
                  icon: BatteryCharging,
                },
                {
                  value: "16.259",
                  label: "kWh Delivered",
                  icon: Zap,
                },
                {
                  value: "46.96",
                  label: "kW Charging Speed",
                  icon: PlugZap,
                },
                {
                  value: "19 min",
                  label: "Charging Time",
                  icon: Clock3,
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="group rounded-[26px] border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-5 w-5 text-[#1E5FA8]" />
                    </div>

                    <p className="mt-6 text-3xl font-bold tracking-tight text-slate-950">
                      {item.value}
                    </p>

                    <p className="mt-2 text-xs font-medium text-slate-400">
                      {item.label}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>


        {/* =========================================================
            CHARGING EXPERIENCE
        ========================================================== */}

        <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">

          <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid items-center gap-16 lg:grid-cols-2">

              {/* Left */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >

                <SectionHeading
                  eyebrow="SMART CHARGING"
                  title="Everything you need"
                  highlight="during a session."
                  description="From finding the charger to monitoring battery progress, EV Dock keeps the important information right at your fingertips."
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  {[
                    {
                      icon: Activity,
                      title: "Live Status",
                      text: "Monitor your charging session in real time.",
                    },
                    {
                      icon: BatteryCharging,
                      title: "Battery",
                      text: "Keep track of your battery level.",
                    },
                    {
                      icon: Clock3,
                      title: "Time",
                      text: "Know how long your vehicle has been charging.",
                    },
                    {
                      icon: PlugZap,
                      title: "Power",
                      text: "See your current charging speed.",
                    },
                  ].map((item) => {

                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                          <Icon className="h-5 w-5 text-[#1E5FA8]" />
                        </div>

                        <h3 className="mt-4 text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-slate-500">
                          {item.text}
                        </p>

                      </div>
                    );
                  })}

                </div>

              </motion.div>


              {/* Right Dashboard */}
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >

                <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-7 shadow-[0_30px_90px_rgba(15,23,42,0.1)]">

                  {/* Header */}
                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        Charging session
                      </p>

                      <p className="mt-1 text-lg font-bold text-slate-950">
                        EV Dock Station
                      </p>
                    </div>

                    <div className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold text-emerald-600">
                      ACTIVE
                    </div>

                  </div>


                  {/* Battery Circle */}
                  <div className="relative mx-auto mt-10 flex h-56 w-56 items-center justify-center">

                    <div className="absolute inset-0 rounded-full border-[14px] border-slate-100" />

                    <div className="absolute inset-0 rounded-full border-[14px] border-transparent border-t-[#1E5FA8] border-r-[#4B4FAE] rotate-[45deg]" />

                    <div className="text-center">

                      <p className="text-5xl font-bold text-slate-950">
                        58%
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Battery level
                      </p>

                    </div>

                  </div>


                  {/* Stats */}
                  <div className="mt-10 grid grid-cols-3 gap-3">

                    <div className="rounded-2xl bg-slate-50 p-4 text-center">
                      <p className="text-sm font-bold text-slate-950">
                        16.259
                      </p>

                      <p className="mt-1 text-[9px] text-slate-400">
                        kWh
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4 text-center">
                      <p className="text-sm font-bold text-slate-950">
                        46.96
                      </p>

                      <p className="mt-1 text-[9px] text-slate-400">
                        kW
                      </p>
                    </div>

                    <div className="rounded-2xl bg-slate-50 p-4 text-center">
                      <p className="text-sm font-bold text-slate-950">
                        19 min
                      </p>

                      <p className="mt-1 text-[9px] text-slate-400">
                        Time
                      </p>
                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>


        {/* =========================================================
            WALLET
        ========================================================== */}

        <section className="bg-white py-24 sm:py-28">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

            {/* Wallet */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative flex justify-center"
            >

              <div className="absolute h-[400px] w-[400px] rounded-full bg-violet-500/15 blur-[120px]" />

              <div className="relative w-full max-w-[430px] overflow-hidden rounded-[36px] bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] p-8 shadow-[0_35px_90px_rgba(79,70,229,0.3)]">

                <div className="flex items-center justify-between">

                  <Wallet className="h-7 w-7 text-white" />

                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-blue-100">
                    EV DOCK WALLET
                  </span>

                </div>

                <p className="mt-14 text-sm text-blue-100">
                  Available Balance
                </p>

                <p className="mt-2 text-5xl font-bold text-white">
                  ₹2549
                </p>

                <button className="mt-8 rounded-xl bg-white px-5 py-3 text-xs font-bold text-[#1E5FA8] transition hover:bg-blue-50">
                  + Add Money
                </button>

                <div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-5">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-[10px] text-blue-100">
                        Recent Charging
                      </p>

                      <p className="mt-2 text-sm font-semibold text-white">
                        Charging Payment
                      </p>
                    </div>

                    <span className="text-sm font-bold text-white">
                      ₹312
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>


            {/* Content */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <SectionHeading
                eyebrow="03 / PAY"
                title="Your charging wallet."
                highlight="Always within reach."
                description="Manage your charging balance, payments and transaction activity from one simple wallet experience."
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  {
                    icon: Wallet,
                    text: "Manage wallet balance",
                  },
                  {
                    icon: CreditCard,
                    text: "Add money",
                  },
                  {
                    icon: Activity,
                    text: "View transactions",
                  },
                  {
                    icon: CheckCircle2,
                    text: "Track payments",
                  },
                ].map((item) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white hover:shadow-md"
                    >

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                        <Icon className="h-4 w-4 text-[#7A3FAF]" />
                      </div>

                      <span className="text-sm font-semibold text-slate-700">
                        {item.text}
                      </span>

                    </div>
                  );
                })}

              </div>

            </motion.div>

          </div>

        </section>


        {/* =========================================================
            DRIVER BENEFITS
        ========================================================== */}

        <section className="bg-slate-50 py-24 sm:py-28">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center"
            >

              <SectionHeading
                centered
                eyebrow="BUILT FOR EV DRIVERS"
                title="Everything you need."
                highlight="Nothing you don't."
                description="A cleaner and smarter way to manage your EV charging journey."
              />

            </motion.div>


            <div className="mt-14 grid gap-5 md:grid-cols-3">

              {[
                {
                  icon: MapPin,
                  number: "01",
                  title: "More Charging Choices",
                  text: "Discover EV Dock and participating partner stations from one app.",
                },
                {
                  icon: Zap,
                  number: "02",
                  title: "Better Visibility",
                  text: "See station availability and follow your charging activity.",
                },
                {
                  icon: ShieldCheck,
                  number: "03",
                  title: "Connected Experience",
                  text: "A simple digital experience built around your charging journey.",
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    <div className="absolute right-5 top-4 text-5xl font-black text-slate-100">
                      {item.number}
                    </div>

                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-5 w-5 text-[#1E5FA8]" />
                    </div>

                    <h3 className="relative mt-6 text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>


        {/* =========================================================
            HOW IT WORKS
        ========================================================== */}

        <section className="bg-white py-24 sm:py-28">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >

              <SectionHeading
                centered
                eyebrow="SIMPLE BY DESIGN"
                title="Charge in three"
                highlight="simple steps."
              />

            </motion.div>


            <div className="relative mt-16 grid gap-10 md:grid-cols-3">

              <div className="absolute left-[20%] right-[20%] top-8 hidden h-px bg-slate-200 md:block" />

              {[
                {
                  icon: LocateFixed,
                  step: "01",
                  title: "Find a charger",
                  text: "Search nearby EV Dock and partner charging stations.",
                },
                {
                  icon: Route,
                  step: "02",
                  title: "Start charging",
                  text: "Reach the station and start your charging session.",
                },
                {
                  icon: CreditCard,
                  step: "03",
                  title: "Pay & track",
                  text: "Pay through your wallet and track the entire session.",
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.step}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className="relative text-center"
                  >

                    <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E5FA8] to-[#7A3FAF] shadow-lg shadow-blue-500/15">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <span className="mt-5 block text-[10px] font-bold tracking-[0.2em] text-[#1E5FA8]">
                      STEP {item.step}
                    </span>

                    <h3 className="mt-2 text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>
        {/* =========================================================
            FINAL CTA
        ========================================================== */}

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-white/10 bg-[#07111F]"
        >
          {/* Background gradients */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#1E5FA8]/30 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-[#7A3FAF]/25 blur-[90px]" />

          {/* Decorative glow */}
          <div className="pointer-events-none absolute right-[25%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="relative flex flex-col items-center gap-8 px-6 py-9 sm:px-10 md:flex-row md:justify-between md:gap-10 md:py-10 lg:px-14">
            
            {/* Left Content */}
            <div className="flex items-center gap-5 text-center md:text-left">
              
              {/* Icon */}
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-inner sm:flex">
                <Smartphone className="h-6 w-6 text-blue-200" />
              </div>

              <div>
                {/* Eyebrow */}
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300">
                  EV DOCK MOBILE APP
                </p>

                {/* Heading */}
                <h2 className="mt-1.5 text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                  Your EV journey,
                  <span className="text-blue-300"> in one app.</span>
                </h2>

                {/* Description */}
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                  Find chargers, check availability, manage your wallet and stay
                  connected wherever you go.
                </p>
              </div>
            </div>

            {/* Right CTA */}
            <div className="shrink-0">
             <Link
              to="/contact-us"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#07111F] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Explore EV Dock App

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            </div>
          </div>
        </motion.div>
      </section>

      </main>

      <Footer />
    </>
  );
};

export default MobileApp;