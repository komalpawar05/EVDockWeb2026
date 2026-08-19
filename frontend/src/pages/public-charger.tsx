import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  ChevronRight,
  Hotel,
  MapPin,
  PlugZap,
  Route,
  Store,
  Truck,
  Zap,
  ShieldCheck,
  Gauge,
  CircleDollarSign,
  Network,
  Section,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/Common/BackToTop";
import SectionHeading from "../components/Common/SectionHeading";

const chargers = [
  {
    power: "30",
    tag: "Urban",
    title: "Compact DC",
    description: "Ideal for hotels, cafés and urban destinations.",
  },
  {
    power: "60",
    tag: "Popular",
    title: "Business DC",
    description: "Built for commercial properties and public locations.",
  },
  {
    power: "80",
    tag: "Fastest",
    title: "High Performance",
    description: "Designed for high-traffic locations and EV fleets.",
  },
  {
    power: "200",
    tag: "Premium",
    title: "Ultra Fast",
    description: "Made for highways, buses, trucks and charging hubs.",
  },
];

const locations = [
  {
    icon: Hotel,
    title: "Hotels & Resorts",
    text: "Create an EV-friendly experience for guests while they stay, dine or relax.",
  },
  {
    icon: Store,
    title: "Restaurants & Cafés",
    text: "Turn waiting time into charging time and increase customer engagement.",
  },
  {
    icon: Route,
    title: "Highways",
    text: "Build reliable fast-charging destinations for long-distance EV journeys.",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    text: "Enable EV charging across offices, malls, business parks and parking areas.",
  },
  {
    icon: Truck,
    title: "Fleet Operations",
    text: "Support electric fleets with dependable charging infrastructure.",
  },
  {
    icon: MapPin,
    title: "Public Hubs",
    text: "Transform strategic locations into connected EV charging destinations.",
  },
];

const advantages = [
  {
    icon: Gauge,
    title: "Fast Charging",
    text: "High-power DC charging designed to reduce charging downtime.",
  },
  {
    icon: Network,
    title: "Connected Network",
    text: "Build and manage charging infrastructure through one ecosystem.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Infrastructure",
    text: "Designed for businesses that need dependable charging availability.",
  },
  {
    icon: CircleDollarSign,
    title: "Business Ready",
    text: "Create new customer touchpoints and revenue opportunities.",
  },
];

const PublicCharger: React.FC = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#07111f] pt-28">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />

          <div className="absolute right-[-120px] top-[-100px] h-[600px] w-[600px] rounded-full bg-violet-600/20 blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />

              <span className="text-[11px] font-bold tracking-[0.2em] text-blue-200">
                PUBLIC EV CHARGING
              </span>
            </div>

            <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-[68px]">
              Turn your location into
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                an EV destination.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
              Deploy high-performance DC charging infrastructure for
              businesses, highways, fleets and public destinations with
              EV Dock.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-2xl shadow-blue-950/30 transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Install a Charger

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                Become a Partner

                <ArrowUpRight size={17} />
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-bold text-white md:text-3xl">
                  30–200
                </p>

                <p className="mt-1 text-[11px] text-slate-500">
                  POWER kW
                </p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <p className="text-2xl font-bold text-white md:text-3xl">
                  DC
                </p>

                <p className="mt-1 text-[11px] text-slate-500">
                  FAST CHARGING
                </p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <p className="text-2xl font-bold text-white md:text-3xl">
                  24/7
                </p>

                <p className="mt-1 text-[11px] text-slate-500">
                  READY TO CHARGE
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[500px] items-center justify-center"
          >
            {/* Glow */}
            <div className="absolute h-[280px] w-[280px] rounded-full bg-blue-500/30 blur-[90px]" />

            {/* Orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[430px] w-[430px] rounded-full border border-blue-400/10"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[340px] w-[340px] rounded-full border border-violet-400/10"
            />

            {/* Floating power card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-12 z-20 rounded-2xl border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl sm:right-3"
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Available Power
              </p>

              <p className="mt-1 text-2xl font-black text-white">
                30–200
                <span className="ml-1 text-sm text-cyan-300">
                  kW
                </span>
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="text-[10px] text-slate-400">
                  DC Fast Charging
                </span>
              </div>
            </motion.div>

            {/* Charger */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[235px]"
            >
              <div className="rounded-[38px] border border-white/15 bg-gradient-to-b from-blue-500 via-blue-700 to-slate-950 p-2 shadow-[0_40px_100px_rgba(37,99,235,0.35)]">
                <div className="rounded-[31px] bg-[#07111f] p-5">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />

                      <span className="text-[10px] font-bold tracking-[0.2em] text-white">
                        EV DOCK
                      </span>
                    </div>

                    <Zap
                      size={17}
                      className="text-cyan-300"
                    />
                  </div>

                  {/* Screen */}
                  <div className="mt-8 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-800 p-5">
                    <p className="text-center text-[9px] font-bold tracking-[0.2em] text-slate-500">
                      CHARGING POWER
                    </p>

                    <div className="mt-2 flex items-baseline justify-center">
                      <span className="text-6xl font-black tracking-[-0.06em] text-cyan-300">
                        60
                      </span>

                      <span className="ml-1 text-sm font-bold text-cyan-300">
                        kW
                      </span>
                    </div>

                    <div className="mx-auto mt-4 h-1.5 w-28 overflow-hidden rounded-full bg-slate-700">
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="h-full w-1/2 bg-gradient-to-r from-cyan-300 to-blue-500"
                      />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mx-auto mt-7 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10">
                    <BatteryCharging
                      size={34}
                      className="text-cyan-300"
                    />
                  </div>

                  <p className="mt-6 text-center text-[9px] font-bold tracking-[0.25em] text-slate-500">
                    FAST CHARGING
                  </p>
                </div>
              </div>

              {/* Cable */}
              <div className="absolute -bottom-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-b-[50%] border-b-4 border-r-4 border-slate-600" />
            </motion.div>

            {/* Small floating card */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-12 left-0 z-20 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-xl sm:left-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10">
                  <PlugZap
                    size={18}
                    className="text-emerald-300"
                  />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-slate-500">
                    Network Ready
                  </p>

                  <p className="text-xs font-bold text-white">
                    Smart Charging
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CHARGER RANGE
      ====================================================== */}
      <section className="relative overflow-hidden bg-white px-5 py-16 md:px-10 md:py-20">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-blue-50/70 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(#1e5fa8 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">

          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="CHARGER RANGE"
                title="Power that fits"
                highlight="your destination."
                description="Flexible charging capacities designed for different locations, traffic levels and vehicle requirements."
              />
          </div>

          {/* Charging spectrum */}
          <div className="relative mt-14">

            {/* Main line */}
            <div className="absolute left-0 right-0 top-[48px] hidden h-[2px] bg-gradient-to-r from-blue-100 via-blue-500 to-violet-500 lg:block" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {chargers.map((charger, index) => (
                <motion.div
                  key={charger.power}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="group relative"
                >
                  {/* Connector */}
                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-[6px] border-white bg-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition-all duration-500 group-hover:scale-105 group-hover:bg-blue-600 group-hover:shadow-[0_15px_35px_rgba(37,99,235,0.3)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.06]">
                      <PlugZap
                        size={22}
                        strokeWidth={1.8}
                        className="text-blue-400 transition-colors group-hover:text-white"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-6 rounded-[24px] border border-slate-200 bg-white p-6 text-center shadow-[0_8px_30px_rgba(15,23,42,0.05)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-[0_20px_45px_rgba(37,99,235,0.1)]">

                    {/* Tag */}
                    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-blue-600">
                      {charger.tag}
                    </span>

                    {/* Power */}
                    <div className="mt-5 flex items-baseline justify-center">
                      <span className="text-5xl font-black tracking-[-0.07em] text-slate-950">
                        {charger.power}
                      </span>

                      <span className="ml-1 text-sm font-bold text-blue-600">
                        kW
                      </span>
                    </div>

                    <h3 className="mt-2 text-base font-bold text-slate-900">
                      {charger.title}
                    </h3>

                    <p className="mt-2 text-sm leading-5 text-slate-500">
                      {charger.description}
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-2">
                      <CheckCircle2
                        size={15}
                        className="text-emerald-500"
                      />

                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Business Ready
                      </span>
                    </div>
                  </div>

                  {/* Step */}
                  <div className="mt-4 text-center">
                    <span className="text-[10px] font-black tracking-[0.2em] text-slate-300">
                      0{index + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY EV DOCK
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#07111f] px-5 py-24 md:px-10 md:py-32">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="WHY EV DOCK"
              title="More than a charger."
              titleClassName="text-white"
              highlight="A complete charging ecosystem."
              highlightClassName="bg-gradient-to-r from-blue-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent"
              description="EV Dock combines charging infrastructure, connected technology and business-ready solutions to help you build a smarter EV destination."
              descriptionClassName="text-slate-400"
            />

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
            >
              Explore EV Dock
              <ArrowRight size={17} />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((item, index) => {
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
                  className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                    <Icon
                      size={21}
                      className="text-cyan-300"
                    />
                  </div>

                  <h3 className="mt-5 font-bold text-white">
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
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="relative overflow-hidden bg-white px-5 py-16 md:px-10 md:py-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px]" />
          <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-violet-500/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}
          <SectionHeading
            centered
            eyebrow="SIMPLE PROCESS"
            title="From location to"
            highlight="charging network."
            description="A simple path to bringing EV charging to your property."
            titleClassName="text-slate-950"
            highlightClassName="bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] bg-clip-text text-transparent"
            descriptionClassName="text-slate-500"
          />

          {/* Process */}
          <div className="relative mt-12 md:mt-14">

            {/* Connecting line */}
            <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-[31px] hidden h-[2px] bg-gradient-to-r from-blue-100 via-blue-400 to-violet-300 md:block" />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Choose Your Location",
                  text: "Tell us about your property, traffic and charging requirements.",
                },
                {
                  number: "02",
                  title: "Deploy Infrastructure",
                  text: "EV Dock helps configure the right charger and installation setup.",
                },
                {
                  number: "03",
                  title: "Start Charging",
                  text: "Launch your charging destination and serve EV customers.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group relative"
                >
                  {/* Number */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B1220] text-sm font-black text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-violet-600 group-hover:shadow-[0_15px_35px_rgba(37,99,235,0.3)]">
                    {step.number}

                    {/* Glow dot */}
                    <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  {/* Card */}
                  <div className="mt-5 rounded-[24px] border border-slate-200 bg-slate-50 p-6 text-center transition-all duration-300 group-hover:border-blue-200 group-hover:bg-white group-hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                    
                    {/* Small label */}
                    <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                      Step {step.number}
                    </div>

                    <h3 className="text-lg font-bold tracking-tight text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                      {step.text}
                    </p>

                    {/* Bottom accent */}
                    <div className="mx-auto mt-5 h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 group-hover:w-16" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATIONS
      ====================================================== */}
      <section className="bg-slate-50 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            centered
            eyebrow="WHERE TO INSTALL"
            title="Built for"
            highlight="every kind of destination."
            description="Whether you operate a hotel, restaurant, highway location, commercial property or fleet, EV Dock can fit your charging requirements."
            />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location, index) => {
              const Icon = location.icon;

              return (
                <motion.div
                  key={location.title}
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
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[26px] border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                      <Icon
                        size={22}
                        className="text-blue-600 transition group-hover:text-white"
                      />
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-300 transition group-hover:text-blue-600"
                    />
                  </div>

                  <h3 className="mt-6 font-bold text-slate-900">
                    {location.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {location.text}
                  </p>

                  <div className="mt-6 flex items-center gap-1 text-xs font-bold text-blue-600">
                    Explore Solution

                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNERSHIP CTA
      ====================================================== */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-[#080F1D]">

            {/* Glow */}
            <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="absolute -bottom-32 left-1/3 h-[380px] w-[380px] rounded-full bg-violet-600/15 blur-[110px]" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <div className="relative grid items-center gap-14 p-7 md:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:p-16">

              {/* LEFT */}
              <div>

                {/* Eyebrow */}
                <div className="mb-7 flex items-center gap-3">
                  <span className="h-px w-8 bg-blue-500" />

                  <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                    EV Dock Partnership
                  </span>
                </div>

                {/* Heading */}
                <h2 className="max-w-3xl text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[68px]">

                  Power the
                  <br />

                  <span className="text-slate-500">
                    next generation
                  </span>

                  <br />

                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                    of mobility.
                  </span>

                </h2>

                {/* Description */}
                <p className="mt-7 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                  Turn your property into a smart EV charging destination.
                  Partner with EV Dock and help create a connected charging
                  network built for the future.
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    Become a Partner
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/[0.09]"
                  >
                    Explore Solutions
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative">

                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                      <BatteryCharging size={22} />
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Partner Network
                    </span>

                  </div>

                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Built for
                    </p>

                    <div className="mt-4 space-y-3">

                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="text-sm text-slate-300">
                          Hotels & Restaurants
                        </span>
                        <ArrowUpRight size={15} className="text-blue-400" />
                      </div>

                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="text-sm text-slate-300">
                          Commercial Spaces
                        </span>
                        <ArrowUpRight size={15} className="text-cyan-400" />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-300">
                          Fleets & Parking
                        </span>
                        <ArrowUpRight size={15} className="text-violet-400" />
                      </div>

                    </div>
                  </div>

                </div>

                {/* Decorative circle */}
                <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full border border-blue-400/10 bg-blue-500/10 blur-xl" />

              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default PublicCharger;