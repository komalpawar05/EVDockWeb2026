import React from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import MobileAppHero from "../assets/app.png";

const MobileApp: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-slate-900">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative min-h-screen overflow-hidden bg-[#07111F] pt-24">

          {/* Ambient glow */}

          <div className="absolute left-[-180px] top-[-180px] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[140px]" />

          <div className="absolute right-[-180px] top-[100px] h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[150px]" />

          <div className="absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#C93C8F]/10 blur-[150px]" />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-16 lg:px-8">

            <div className="grid w-full items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

              {/* LEFT */}

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

                {/* Badge */}

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">

                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
                    EV Dock Mobile App
                  </span>

                </div>

                {/* Heading */}

                <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-white md:text-6xl lg:text-[72px]">

                  Your EV journey.

                  <span className="block bg-gradient-to-r from-blue-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                    One powerful app.
                  </span>

                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400 md:text-xl">
                  Find nearby chargers, check live availability, start
                  charging, manage your wallet and track every charging
                  session — all from one connected platform.
                </p>

                {/* Buttons */}

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50">

                    Explore EV Dock App

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </button>

                  <a
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
                  >
                    Explore Features
                  </a>

                </div>

                {/* Feature pills */}

                <div className="mt-10 flex flex-wrap gap-3">

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
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      {item}
                    </div>
                  ))}

                </div>

              </motion.div>

              {/* RIGHT APP */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                }}
                className="relative flex justify-center"
              >

                {/* Glow */}

                <div className="absolute h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-pink-500/10 blur-[100px]" />

                {/* orbit */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-[500px] w-[500px] rounded-full border border-white/10 border-dashed"
                />

                {/* App */}

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
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
                    className="relative max-h-[680px] w-full max-w-[650px] object-contain drop-shadow-[0_35px_80px_rgba(0,0,0,0.45)]"
                  />

                </motion.div>

                {/* Floating card */}

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute left-0 top-[18%] z-20 hidden rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:block"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15">
                      <Zap className="h-5 w-5 text-emerald-300" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Charging
                      </p>

                      <p className="mt-0.5 text-[10px] text-emerald-300">
                        Active now
                      </p>
                    </div>

                  </div>

                </motion.div>

                {/* Floating card */}

                <motion.div
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-[18%] right-0 z-20 hidden rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:block"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/15">
                      <MapPin className="h-5 w-5 text-blue-300" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        Nearby Charger
                      </p>

                      <p className="mt-0.5 text-[10px] text-blue-300">
                        1.2 km away
                      </p>
                    </div>

                  </div>

                </motion.div>

              </motion.div>

            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK FEATURES
        ====================================================== */}

        <section
          id="features"
          className="relative bg-white py-24"
        >

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

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

        {/* =====================================================
            FIND CHARGER
        ====================================================== */}

        <section className="bg-slate-50 py-28">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

            {/* Visual */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
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

              {/* Status */}

              <div className="absolute bottom-8 left-[-15px] rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:left-[-25px]">

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

              </div>

            </motion.div>

            {/* Content */}

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
            >

              <span className="text-xs font-bold tracking-[0.2em] text-[#1E5FA8]">
                01 / FIND
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-slate-950 md:text-5xl">
                Find the right charger,
                <span className="block text-[#1E5FA8]">
                  wherever you go.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Discover EV Dock and participating partner charging stations
                and make your journey easier with better charging visibility.
              </p>

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
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50">
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

        {/* =====================================================
            NETWORK
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#07111F] py-28">

          <div className="absolute left-1/2 top-[-250px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <span className="text-xs font-bold tracking-[0.2em] text-blue-300">
                CONNECTED NETWORK
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-white md:text-5xl">
                Multiple partners.
                <span className="block bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
                  One charging experience.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                EV Dock brings participating charging networks together so
                drivers can discover more charging options from one platform.
              </p>

            </div>

            {/* Network cards */}

            <div className="relative mx-auto mt-16 max-w-5xl">

              <div className="hidden absolute left-[18%] right-[18%] top-1/2 h-px bg-gradient-to-r from-blue-500/30 via-violet-500/50 to-blue-500/30 lg:block" />

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
                        delay: index * 0.1,
                      }}
                      className="relative z-10 rounded-[28px] border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-xl"
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

        {/* =====================================================
            CHARGING
        ====================================================== */}

        <section className="bg-white py-28">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <span className="text-xs font-bold tracking-[0.2em] text-[#4B4FAE]">
                02 / CHARGE
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-slate-950 md:text-5xl">
                Stay informed while
                <span className="block text-[#4B4FAE]">
                  your vehicle charges.
                </span>
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Keep track of the information that matters throughout your
                charging session.
              </p>

            </div>

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
                    className="rounded-[26px] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-5 w-5 text-[#1E5FA8]" />
                    </div>

                    <p className="mt-6 text-3xl font-bold text-slate-950">
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

        {/* =====================================================
            WALLET
        ====================================================== */}

        <section className="bg-slate-50 py-28">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

            {/* Wallet */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="relative flex justify-center"
            >

              <div className="absolute h-[400px] w-[400px] rounded-full bg-violet-500/15 blur-[120px]" />

              <div className="relative w-full max-w-[430px] overflow-hidden rounded-[36px] bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] p-8 shadow-[0_35px_90px_rgba(79,70,229,0.30)]">

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
                  ₹128
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
            >

              <span className="text-xs font-bold tracking-[0.2em] text-[#7A3FAF]">
                03 / PAY
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-slate-950 md:text-5xl">
                Your charging wallet.
                <span className="block text-[#7A3FAF]">
                  Always within reach.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Manage your charging balance, payments and transaction
                activity from one simple wallet experience.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "Manage wallet balance",
                  "Add money",
                  "View transactions",
                  "Track payments",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-50">
                      <Check className="h-4 w-4 text-[#7A3FAF]" />
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

        {/* =====================================================
            TRUST
        ====================================================== */}

        <section className="bg-white py-28">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <span className="text-xs font-bold tracking-[0.2em] text-[#1E5FA8]">
                BUILT FOR EV DRIVERS
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-slate-950 md:text-5xl">
                Everything you need.
                <span className="block text-[#1E5FA8]">
                  Nothing you don't.
                </span>
              </h2>

            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">

              {[
                {
                  icon: MapPin,
                  title: "More Charging Choices",
                  text: "Discover EV Dock and participating partner stations from one app.",
                },
                {
                  icon: Zap,
                  title: "Better Visibility",
                  text: "See station availability and follow your charging activity.",
                },
                {
                  icon: ShieldCheck,
                  title: "Connected Experience",
                  text: "A simple digital experience built around your charging journey.",
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
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
                      delay: index * 0.1,
                    }}
                    className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-5 w-5 text-[#1E5FA8]" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="px-6 pb-24 lg:px-8">

          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0F172A] via-[#1E5FA8] to-[#7A3FAF] px-7 py-20 text-center md:px-16">

            <div className="absolute left-[-100px] top-[-150px] h-96 w-96 rounded-full bg-blue-400/20 blur-[100px]" />

            <div className="absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-pink-400/20 blur-[100px]" />

            <div className="relative">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                <Smartphone className="h-7 w-7 text-white" />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
                EV DOCK MOBILE APP
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.035em] text-white md:text-6xl">
                One app.
                <span className="block text-blue-100">
                  A smarter charging journey.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100/80">
                Find chargers, check availability, manage your wallet and
                stay connected throughout your EV journey.
              </p>

              <button className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50">

                Explore EV Dock App

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />

              </button>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default MobileApp;