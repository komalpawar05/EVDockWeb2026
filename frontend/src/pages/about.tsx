import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Check,
  Network,
  PlugZap,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      ease: "easeOut",
    },
  },
};

const milestones = [
  {
    year: "2022",
    title: "EV Dock is established",
    description:
      "The EV Dock journey begins with a focus on building accessible and connected EV charging infrastructure.",
  },
  {
    year: "01",
    title: "Charging solutions",
    description:
      "Developing charging solutions for home, public and commercial environments with different charging requirements.",
  },
  {
    year: "02",
    title: "Connected charging",
    description:
      "Building a digital-first charging experience that connects drivers with charging infrastructure.",
  },
  {
    year: "03",
    title: "Network development",
    description:
      "Expanding charging opportunities through strategic locations and partnerships across the EV ecosystem.",
  },
  {
    year: "Today",
    title: "Building what comes next",
    description:
      "Continuing to develop a smarter and more accessible charging network for India's electric mobility future.",
  },
];

const capabilities = [
  {
    icon: PlugZap,
    title: "Charging infrastructure",
    description:
      "EV charging solutions designed for different locations, vehicles and charging requirements.",
  },
  {
    icon: Network,
    title: "Connected technology",
    description:
      "Technology that connects charging stations, operations and drivers through one experience.",
  },
  {
    icon: BatteryCharging,
    title: "Driver experience",
    description:
      "Simple digital experiences designed to make finding and using EV charging easier.",
  },
  {
    icon: Target,
    title: "Strategic network",
    description:
      "A location-focused approach to building charging infrastructure where EV drivers need it.",
  },
];

const achievements = [
  {
    icon: Zap,
    title: "AC & DC charging",
    text: "Solutions supporting different charging requirements.",
  },
  {
    icon: Network,
    title: "Connected platform",
    text: "A digital experience built around the EV charging journey.",
  },
  {
    icon: BatteryCharging,
    title: "Digital payments",
    text: "Convenient digital payment and charging access options.",
  },
  {
    icon: PlugZap,
    title: "Multiple use cases",
    text: "Charging designed for home, public and commercial environments.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-950">

      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40 lg:px-16">

          {/* Background glow */}
          <div className="pointer-events-none absolute right-[-140px] top-[-100px] h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-[120px]" />

          <div className="pointer-events-none absolute bottom-[-160px] left-[-120px] h-[350px] w-[350px] rounded-full bg-violet-100/50 blur-[110px]" />

          <div className="relative mx-auto max-w-7xl">

            {/* Hero text */}
            <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">

              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
              >

                <div className="flex items-center gap-2">

                  <span className="h-px w-7 bg-blue-600" />

                  <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-blue-600">
                    About EV Dock
                  </p>

                </div>

                <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.06] tracking-[-0.045em] md:text-5xl lg:text-6xl">

                  Building the infrastructure
                  <span className="block text-blue-600">
                    behind electric mobility.
                  </span>

                </h1>

              </motion.div>


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
                  delay: 0.2,
                  duration: 0.6,
                }}
              >

                <p className="max-w-lg text-sm leading-7 text-slate-500">
                  EV Dock is building a connected charging ecosystem
                  designed to make electric mobility simpler, more
                  accessible and more reliable for drivers, businesses
                  and partners.
                </p>

                <div className="mt-5 flex items-center gap-2">

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Zap size={13} />
                  </span>

                  <span className="text-[10px] font-semibold text-slate-700">
                    Powering the journey ahead.
                  </span>

                </div>

              </motion.div>

            </div>


            {/* Hero image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="relative mt-14 overflow-hidden rounded-[28px] bg-[#071321]"
            >

              <img
                src="/images/about-hero.jpg"
                alt="EV Dock charging infrastructure"
                className="h-[360px] w-full object-cover md:h-[460px]"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#071321]/75 via-[#071321]/20 to-transparent" />

              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">

                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-blue-300">
                  EV Dock
                </p>

                <p className="mt-2 max-w-md text-lg font-semibold tracking-tight text-white md:text-2xl">
                  Making every charge part of a better journey.
                </p>

              </div>

            </motion.div>

          </div>
        </section>


        {/* =====================================================
            COMPANY DETAILS
        ====================================================== */}

        <section className="border-y border-slate-100 bg-[#F5F8FC] px-5 py-20 md:px-10 md:py-24 lg:px-16">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-blue-600">
                  Company profile
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                  Who is
                  <span className="text-blue-600">
                    {" "}EV Dock?
                  </span>
                </h2>

                <p className="mt-4 max-w-sm text-xs leading-6 text-slate-500">
                  Building connected EV charging infrastructure for a
                  more accessible electric mobility ecosystem.
                </p>

              </div>


              <div className="grid border-t border-slate-200 sm:grid-cols-2">

                {[
                  ["Company", "Tritan EV Dock Private Limited"],
                  ["Established", "02 February 2022"],
                  ["Headquarters", "Maharashtra, India"],
                  ["Business", "EV Charging Infrastructure"],
                  ["Company type", "Private Limited"],
                  ["Focus", "Smart & accessible charging"],
                ].map(([label, value], index) => (

                  <div
                    key={label}
                    className={`py-5 ${
                      index < 4
                        ? "border-b border-slate-200"
                        : ""
                    } ${
                      index % 2 === 0
                        ? "sm:border-r sm:pr-8"
                        : "sm:pl-8"
                    }`}
                  >

                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      {label}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-slate-950">
                      {value}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            OUR STORY
        ====================================================== */}

        <section className="px-5 py-20 md:px-10 md:py-28 lg:px-16">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-blue-600">
                  Our story
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                  Built around a
                  <span className="text-blue-600">
                    {" "}simple idea.
                  </span>
                </h2>

              </div>


              <div className="max-w-2xl">

                <p className="text-sm leading-7 text-slate-600">
                  Electric mobility needs more than electric vehicles.
                  It needs dependable infrastructure that drivers can
                  access wherever their journey takes them.
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  EV Dock brings together charging infrastructure,
                  connected technology, strategic locations and
                  partnerships to create a better charging experience.
                </p>

                <div className="mt-7 h-px w-16 bg-blue-600" />

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            MISSION + VISION
        ====================================================== */}

        <section className="px-5 pb-20 md:px-10 md:pb-28 lg:px-16">

          <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 md:grid-cols-2">

            {/* Mission */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="bg-white p-7 md:p-10"
            >

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Target size={16} />
              </div>

              <p className="mt-7 text-[8px] font-bold uppercase tracking-[0.22em] text-blue-600">
                Our mission
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Make EV charging
                <span className="text-blue-600">
                  {" "}simple and accessible.
                </span>
              </h3>

              <p className="mt-4 text-xs leading-6 text-slate-500">
                Create dependable charging experiences that reduce
                friction from everyday EV journeys and help accelerate
                the transition toward electric mobility.
              </p>

            </motion.div>


            {/* Vision */}
            <motion.div
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
              className="bg-[#071321] p-7 text-white md:p-10"
            >

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                <Sparkles size={16} />
              </div>

              <p className="mt-7 text-[8px] font-bold uppercase tracking-[0.22em] text-blue-300">
                Our vision
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                A connected network
                <span className="text-blue-300">
                  {" "}for every journey.
                </span>
              </h3>

              <p className="mt-4 text-xs leading-6 text-slate-400">
                Build an EV charging ecosystem where infrastructure
                is accessible, connected and dependable wherever
                people travel.
              </p>

            </motion.div>

          </div>
        </section>


        {/* =====================================================
            HISTORY / MILESTONES
        ====================================================== */}

        <section className="bg-[#F5F8FC] px-5 py-20 md:px-10 md:py-28 lg:px-16">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

              {/* Intro */}
              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-blue-600">
                  Company history
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                  From an idea
                  <span className="text-blue-600">
                    {" "}to an EV network.
                  </span>
                </h2>

                <p className="mt-4 max-w-sm text-xs leading-6 text-slate-500">
                  Our journey is focused on making EV charging
                  infrastructure more accessible, connected and useful.
                </p>

              </div>


              {/* Timeline */}
              <div className="relative">

                <div className="absolute bottom-0 left-[4px] top-0 w-px bg-slate-200" />

                <div>

                  {milestones.map((item, index) => (

                    <motion.div
                      key={item.year}
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
                        delay: index * 0.07,
                      }}
                      className="relative border-b border-slate-200 pb-8 pl-8 pt-1 last:border-0"
                    >

                      <span className="absolute left-0 top-1.5 h-[9px] w-[9px] rounded-full bg-blue-600 ring-4 ring-[#F5F8FC]" />

                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600">
                        {item.year}
                      </p>

                      <h3 className="mt-2 text-sm font-semibold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-lg text-[11px] leading-5 text-slate-500">
                        {item.description}
                      </p>

                    </motion.div>

                  ))}

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            WHAT WE DO
        ====================================================== */}

        <section className="px-5 py-20 md:px-10 md:py-28 lg:px-16">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-blue-600">
                  What we do
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                  Infrastructure meets
                  <span className="text-blue-600">
                    {" "}technology.
                  </span>
                </h2>

                <p className="mt-4 max-w-sm text-xs leading-6 text-slate-500">
                  Everything we build is focused on making EV charging
                  more useful for drivers and more valuable for the
                  businesses and locations that power the network.
                </p>

              </div>


              <div className="grid gap-x-8 sm:grid-cols-2">

                {capabilities.map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.07,
                      }}
                      className="border-b border-slate-200 py-6"
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <Icon size={15} />
                        </div>

                        <h3 className="text-xs font-semibold text-slate-950">
                          {item.title}
                        </h3>

                      </div>

                      <p className="mt-3 pl-11 text-[10px] leading-5 text-slate-500">
                        {item.description}
                      </p>

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            ACHIEVEMENTS
        ====================================================== */}

        <section className="bg-[#071321] px-5 py-20 md:px-10 md:py-24 lg:px-16">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-blue-300">
                  What we've built
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white">
                  Progress powered by
                  <span className="text-blue-300">
                    {" "}innovation.
                  </span>
                </h2>

                <p className="mt-4 max-w-sm text-xs leading-6 text-slate-400">
                  EV Dock combines physical infrastructure with
                  technology to create a connected charging ecosystem.
                </p>

              </div>


              <div className="grid gap-x-8 sm:grid-cols-2">

                {achievements.map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.07,
                      }}
                      className="border-b border-white/10 py-6"
                    >

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-blue-300">
                        <Icon size={15} />
                      </div>

                      <h3 className="mt-4 text-xs font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[10px] leading-5 text-slate-400">
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
            VALUES
        ====================================================== */}

        <section className="px-5 py-20 md:px-10 md:py-24 lg:px-16">

          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

              <div>

                <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-blue-600">
                  What drives us
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">
                  Built with
                  <span className="text-blue-600">
                    {" "}purpose.
                  </span>
                </h2>

              </div>

              <p className="max-w-md text-xs leading-6 text-slate-500">
                Every part of the EV Dock ecosystem is designed around
                reliability, simplicity and long-term electric mobility.
              </p>

            </div>


            <div className="mt-10 grid border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">

              {[
                "Driver first",
                "Reliable by design",
                "Connected technology",
                "Built with partners",
              ].map((value, index) => (

                <motion.div
                  key={value}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  className="border-b border-slate-200 py-5 sm:border-r sm:px-5 lg:border-b-0"
                >

                  <div className="flex items-center gap-2">

                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check size={10} />
                    </span>

                    <span className="text-xs font-semibold text-slate-800">
                      {value}
                    </span>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="px-5 pb-20 md:px-10 md:pb-28 lg:px-16">

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
            className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#F0F5FA] px-7 py-12 md:px-12"
          >

            <div className="absolute right-[-80px] top-[-100px] h-64 w-64 rounded-full bg-blue-200/50 blur-[80px]" />

            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">

              <div className="max-w-xl">

                <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-blue-600">
                  The road ahead
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] md:text-3xl">
                  Let's build a better
                  <span className="text-blue-600">
                    {" "}electric future.
                  </span>
                </h2>

                <p className="mt-3 text-xs leading-6 text-slate-500">
                  Whether you're an EV driver, business or potential
                  partner, there's a place for you in the EV Dock network.
                </p>

              </div>

              <a
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#071321] px-5 py-3 text-[10px] font-bold text-white transition hover:bg-blue-600"
              >
                Connect with EV Dock

                <ArrowRight
                  size={13}
                  className="transition group-hover:translate-x-1"
                />
              </a>

            </div>

          </motion.div>

        </section>

      </main>

      <Footer />

    </div>
  );
};

export default About;