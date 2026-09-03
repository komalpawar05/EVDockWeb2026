import React from "react";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  MapPin,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Navigation,
  Gauge,
  ArrowRight,
} from "lucide-react";

import SectionHeading from "./Common/SectionHeading";

const About = () => {
  const features = [
    {
      icon: BatteryCharging,
      title: "Fast & Convenient Charging",
      text: "Find charging solutions designed to keep every journey moving.",
    },
    {
      icon: MapPin,
      title: "Smart Station Discovery",
      text: "Discover nearby chargers with real-time availability and station information.",
    },
    {
      icon: ShieldCheck,
      title: "Connected & Reliable Network",
      text: "A connected ecosystem built for a seamless EV charging experience.",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />
      </div>

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="max-w-xl"
          >
            <SectionHeading
              eyebrow="ABOUT EV DOCK"
              title="A smarter way to"
              highlight="charge, connect, and move."
              description="EV Dock brings EV drivers, charging stations, and businesses together in one intelligent ecosystem. From discovering nearby chargers to accessing real-time station information, EV Dock makes charging simpler, faster, and more convenient."
              titleClassName="text-3xl sm:text-4xl lg:text-[42px] leading-[1.08]"
              descriptionClassName="mt-5 max-w-lg text-sm sm:text-[15px] leading-6 text-slate-500"
            />

            {/* Read More */}
            <motion.div variants={fadeUp} className="mt-6">
              <a
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-[#07111F] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1E5FA8] hover:bg-[#1E5FA8] hover:text-white hover:shadow-md"
              >
                Explore EV Dock
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid max-w-lg grid-cols-3 border-y border-slate-200 py-5"
            >
              <div className="border-r border-slate-200 pr-4">
                <p className="text-lg font-bold tracking-tight text-[#07111F]">
                  Smart
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  EV ecosystem
                </p>
              </div>

              <div className="border-r border-slate-200 px-4">
                <p className="text-lg font-bold tracking-tight text-[#07111F]">
                  Live
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Station data
                </p>
              </div>

              <div className="pl-4">
                <p className="text-lg font-bold tracking-tight text-[#07111F]">
                  Connected
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  EV experience
                </p>
              </div>
            </motion.div>

            {/* FEATURES */}
            <motion.div
              variants={stagger}
              className="mt-8 space-y-5"
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1F6FC] text-[#1E5FA8] transition-all duration-300 group-hover:bg-[#1E5FA8] group-hover:text-white">
                      <Icon size={18} strokeWidth={2} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[#07111F]">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {feature.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* MAIN DASHBOARD CARD */}
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-[#F7FAFD] p-5 shadow-[0_20px_60px_rgba(7,17,31,0.08)] sm:p-6">
              {/* Decorative Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl" />

              {/* CARD HEADER */}
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    EV DOCK
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#07111F]">
                    Smart charging ecosystem
                  </p>
                </div>

                {/* Live Badge */}
                <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1.5 shadow-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>

                  <span className="text-[10px] font-semibold text-emerald-600">
                    LIVE
                  </span>
                </div>
              </div>

              {/* OVERVIEW GRID */}
              <div className="relative z-10 mt-6 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                {/* CHARGING STATUS */}
                <div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-[#07111F] p-5">
                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                      opacity: [0.2, 0.35, 0.2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#1E5FA8]/30 blur-3xl"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                        <Zap
                          size={17}
                          className="text-[#6FA8FF]"
                          fill="currentColor"
                        />
                      </div>

                      <span className="text-[10px] text-slate-500">
                        Station #024
                      </span>
                    </div>

                    <p className="mt-7 text-[11px] font-medium text-slate-400">
                      Charging status
                    </p>

                    <div className="mt-1 flex items-end gap-2">
                      <span className="text-3xl font-bold tracking-tight text-white">
                        82%
                      </span>

                      <span className="mb-1 text-[11px] text-emerald-400">
                        charging
                      </span>
                    </div>

                    {/* Progress */}
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: "82%",
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1.2,
                          delay: 0.3,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[#6FA8FF] to-emerald-400"
                      />
                    </div>

                    <div className="mt-3 flex justify-between text-[10px] text-slate-500">
                      <span>Started 18 min ago</span>
                      <span>32 kW</span>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between border-t border-white/10 pt-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                        <BatteryCharging
                          size={14}
                          className="text-slate-300"
                        />
                      </div>

                      <span className="text-[10px] text-slate-400">
                        DC Fast Charger
                      </span>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="text-slate-500"
                    />
                  </div>
                </div>

                {/* RIGHT MINI CARDS */}
                <div className="grid gap-4">
                  {/* Nearby Stations */}
                  <motion.div
                    whileHover={{
                      y: -3,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#1E5FA8]">
                        <Navigation size={17} />
                      </div>

                      <span className="text-[10px] font-medium text-emerald-500">
                        Available
                      </span>
                    </div>

                    <p className="mt-5 text-2xl font-bold tracking-tight text-[#07111F]">
                      12
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Nearby stations
                    </p>
                  </motion.div>

                  {/* Network Reliability */}
                  <motion.div
                    whileHover={{
                      y: -3,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Gauge size={17} />
                      </div>

                      <span className="text-[10px] text-slate-400">
                        Network
                      </span>
                    </div>

                    <p className="mt-5 text-2xl font-bold tracking-tight text-[#07111F]">
                      98%
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      Network reliability
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* LOCATION / DISCOVERY */}
              <motion.div
                whileHover={{
                  y: -2,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="relative z-10 mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1F6FC] text-[#1E5FA8]">
                    <MapPin size={15} />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold text-[#07111F]">
                      Smart station discovery
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Real-time charging information
                    </p>
                  </div>
                </div>

                <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 sm:flex">
                  <ArrowUpRight
                    size={14}
                    className="text-slate-400"
                  />
                </div>
              </motion.div>
            </div>

            {/* FLOATING BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
              className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_15px_40px_rgba(7,17,31,0.1)] sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold text-[#07111F]">
                    Connected
                  </p>

                  <p className="text-[9px] text-slate-400">
                    Infrastructure online
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Read More Target */}
      <div
        id="about-details"
        className="pointer-events-none absolute bottom-0 h-px w-full"
      />
    </section>
  );
};

export default About;

