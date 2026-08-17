import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Handshake,
  Headphones,
  Hotel,
  Network,
  PlugZap,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
  Zap,
  MapPin,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/Common/BackToTop";

/* =========================================================
   DATA
========================================================= */

const partners = [
  {
    name: "ChargeZone",
    logo: "/assets/chargezone.svg",
  },
  {
    name: "Partner 02",
    logo: "/assets/partner-02.png",
  },
  {
    name: "Partner 03",
    logo: "/assets/partner-03.png",
  },
  {
    name: "Partner 04",
    logo: "/assets/partner-04.png",
  },
  {
    name: "Partner 05",
    logo: "/assets/partner-05.png",
  },
  {
    name: "Partner 06",
    logo: "/assets/partner-06.png",
  },
];

const partnerTypes = [
  {
    icon: Building2,
    number: "01",
    title: "Property Owners",
    description:
      "Transform commercial, residential and destination properties into connected EV charging locations.",
  },
  {
    icon: Hotel,
    number: "02",
    title: "Hotels & Hospitality",
    description:
      "Give guests a premium EV experience while creating a smarter mobility amenity for your property.",
  },
  {
    icon: Store,
    number: "03",
    title: "Businesses & Retail",
    description:
      "Attract EV customers and turn charging infrastructure into a valuable business advantage.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Investors & Entrepreneurs",
    description:
      "Explore scalable EV charging opportunities and build a future-ready mobility business.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Smart Infrastructure",
    text: "Reliable charging infrastructure designed for modern business locations.",
  },
  {
    icon: Network,
    title: "Connected Technology",
    text: "Digital tools that connect charging hardware, operations and customers.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    text: "Support across planning, installation, operations and ongoing growth.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    text: "Create an EV charging business that can grow with market demand.",
  },
];

const services = [
  "Site assessment",
  "Charging hardware",
  "Installation & commissioning",
  "Smart charging platform",
  "Operations support",
  "Maintenance assistance",
  "Digital visibility",
  "Marketing support",
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const Partner: React.FC = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden bg-[#F8FAFC] pt-28">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute right-[-120px] top-[-100px] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[130px]" />

          <div className="absolute bottom-[-180px] left-[-120px] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg,#0f172a 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-112px)] max-w-7xl items-center px-6 py-16 lg:px-8">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[0.92fr_1.08fr]">
            {/* LEFT */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>

                <span className="text-xs font-bold tracking-[0.15em] text-slate-700">
                  EV DOCK PARTNER NETWORK
                </span>
              </div>

              {/* Heading */}

              <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-slate-950 md:text-6xl lg:text-[70px]">
                Build the
                <span className="block bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] bg-clip-text text-transparent">
                  EV future.
                </span>
                Together.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                Turn your property, business or investment opportunity into
                a smart EV charging destination with EV Dock.
              </p>

              {/* Buttons */}

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#partner-form"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0F172A] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#1E5FA8]"
                >
                  Become a Partner
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#partnership-models"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  Explore Opportunities
                </a>
              </div>

              {/* Trust points */}

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
                {[
                  "End-to-end support",
                  "Smart technology",
                  "Scalable solutions",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-500"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                x: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="relative"
            >
              {/* Glow */}

              <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-pink-500/10 blur-[70px]" />

              {/* Main Card */}

              <div className="relative overflow-hidden rounded-[38px] border border-white bg-white/80 p-5 shadow-[0_35px_100px_rgba(15,23,42,0.14)] backdrop-blur-xl md:p-7">
                {/* Header */}

                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                      EV Dock Infrastructure
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      Connected Charging Network
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    Live Network
                  </div>
                </div>

                {/* Network */}

                <div className="relative flex min-h-[390px] items-center justify-center">
                  {/* rings */}

                  <div className="absolute h-[310px] w-[310px] rounded-full border border-blue-100" />

                  <div className="absolute h-[235px] w-[235px] rounded-full border border-violet-100" />

                  <div className="absolute h-[160px] w-[160px] rounded-full border border-blue-100" />

                  {/* rotating ring */}

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-blue-200"
                  />

                  {/* center */}

                  <motion.div
                    animate={{
                      y: [0, -9, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <div className="absolute inset-[-25px] rounded-[45px] bg-gradient-to-br from-blue-500 to-violet-600 opacity-20 blur-2xl" />

                    <div className="relative flex h-36 w-36 items-center justify-center rounded-[38px] bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] shadow-[0_25px_70px_rgba(79,70,229,0.35)] md:h-40 md:w-40">
                      <Zap
                        className="h-16 w-16 text-white"
                        strokeWidth={1.3}
                      />
                    </div>
                  </motion.div>

                  {/* Top */}

                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="absolute left-1/2 top-4 -translate-x-1/2"
                  >
                    <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl">
                      <Building2 className="mx-auto h-5 w-5 text-[#1E5FA8]" />

                      <p className="mt-1 text-[10px] font-bold text-slate-700">
                        Property
                      </p>
                    </div>
                  </motion.div>

                  {/* Left */}

                  <motion.div
                    animate={{
                      x: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                    }}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  >
                    <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl">
                      <Network className="mx-auto h-5 w-5 text-[#7A3FAF]" />

                      <p className="mt-1 text-[10px] font-bold text-slate-700">
                        Platform
                      </p>
                    </div>
                  </motion.div>

                  {/* Right */}

                  <motion.div
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                    }}
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  >
                    <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl">
                      <Users className="mx-auto h-5 w-5 text-[#1E5FA8]" />

                      <p className="mt-1 text-[10px] font-bold text-slate-700">
                        Drivers
                      </p>
                    </div>
                  </motion.div>

                  {/* Bottom */}

                  <motion.div
                    animate={{
                      y: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3.4,
                      repeat: Infinity,
                    }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2"
                  >
                    <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl">
                      <TrendingUp className="mx-auto h-5 w-5 text-emerald-500" />

                      <p className="mt-1 text-[10px] font-bold text-slate-700">
                        Growth
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom metrics */}

                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      icon: Zap,
                      label: "Charging",
                    },
                    {
                      icon: Network,
                      label: "Technology",
                    },
                    {
                      icon: TrendingUp,
                      label: "Opportunity",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-2xl bg-slate-50 p-4 text-center"
                      >
                        <Icon className="mx-auto h-5 w-5 text-[#4B4FAE]" />

                        <p className="mt-2 text-xs font-semibold text-slate-600">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNER TYPES
      ====================================================== */}

      <section className="relative bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#4B4FAE]">
              WHO CAN PARTNER
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-slate-950 md:text-5xl">
              Your business.
              <span className="block bg-gradient-to-r from-[#1E5FA8] to-[#7A3FAF] bg-clip-text text-transparent">
                Our EV ecosystem.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Whether you own a property, operate a business or are exploring
              EV investment opportunities, EV Dock gives you a path to grow.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partnerTypes.map((item, index) => {
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
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]"
                >
                  <span className="absolute right-6 top-6 text-5xl font-bold text-slate-100">
                    {item.number}
                  </span>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 text-[#4B4FAE] transition duration-300 group-hover:scale-105">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center gap-1 text-sm font-semibold text-[#1E5FA8]">
                    Explore
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY EV DOCK
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#07111F] py-28">
        <div className="absolute right-[-150px] top-[-180px] h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute bottom-[-150px] left-[-150px] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Content */}

            <div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold tracking-[0.18em] text-blue-300">
                WHY EV DOCK
              </span>

              <h2 className="mt-6 text-4xl font-bold tracking-[-0.035em] text-white md:text-6xl">
                More than
                <span className="block bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
                  charging.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                We connect infrastructure, technology and support to create
                smarter EV charging destinations for our partners.
              </p>

              <a
                href="#partner-form"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Talk to our partnership team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Benefits */}

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item, index) => {
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
                    className="group rounded-[28px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1E5FA8]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-white transition group-hover:text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400 transition group-hover:text-slate-600">
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
          PARTNERSHIP MODELS
      ====================================================== */}

      <section
        id="partnership-models"
        className="bg-slate-50 py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-[#4B4FAE]">
              PARTNERSHIP MODELS
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-slate-950 md:text-5xl">
              Choose the opportunity
              <span className="block text-[#1E5FA8]">
                that fits your business.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Flexible partnership models designed for different locations,
              businesses and investment goals.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {/* Franchise */}

            <div className="relative overflow-hidden rounded-[34px] bg-[#08111F] p-9 text-white lg:col-span-6 md:p-10">
              <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-blue-300">
                  MOST POPULAR
                </span>

                <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600">
                  <Zap className="h-7 w-7 text-white" />
                </div>

                <p className="mt-8 text-xs font-bold tracking-[0.2em] text-blue-300">
                  EV CHARGING FRANCHISE
                </p>

                <h3 className="mt-3 max-w-lg text-3xl font-bold">
                  Build your own EV charging business.
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-slate-400">
                  Launch and operate an EV charging destination with EV
                  Dock's technology, infrastructure and operational support.
                </p>

                <a
                  href="#partner-form"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
                >
                  Explore franchise
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Property */}

            <div className="rounded-[34px] border border-slate-200 bg-white p-9 lg:col-span-3 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1E5FA8]">
                <Building2 className="h-7 w-7" />
              </div>

              <p className="mt-8 text-xs font-bold tracking-[0.2em] text-[#1E5FA8]">
                PROPERTY
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-950">
                Turn your property into an EV destination.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Hotels, offices, retail, residential communities and
                destination locations.
              </p>

              <a
                href="#partner-form"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1E5FA8]"
              >
                Partner your property
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Investment */}

            <div className="rounded-[34px] border border-violet-100 bg-gradient-to-br from-violet-50 to-blue-50 p-9 lg:col-span-3 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7A3FAF] shadow-sm">
                <TrendingUp className="h-7 w-7" />
              </div>

              <p className="mt-8 text-xs font-bold tracking-[0.2em] text-[#7A3FAF]">
                INVESTMENT
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-950">
                Explore scalable EV opportunities.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Flexible opportunities aligned with your location, goals and
                investment strategy.
              </p>

              <a
                href="#partner-form"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#7A3FAF]"
              >
                Discuss opportunity
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-[#4B4FAE]">
              SIMPLE PROCESS
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-slate-950 md:text-5xl">
              From conversation to
              <span className="block text-[#1E5FA8]">
                charging station.
              </span>
            </h2>
          </div>

          <div className="relative mt-16">
            {/* connector */}

            <div className="absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-blue-100 via-violet-200 to-blue-100 md:block" />

            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Tell us about your opportunity",
                  text: "Share your property, location or business requirement.",
                },
                {
                  number: "02",
                  title: "Site & opportunity review",
                  text: "Our team evaluates the opportunity and partnership model.",
                },
                {
                  number: "03",
                  title: "Plan your solution",
                  text: "Define the right charging infrastructure and setup.",
                },
                {
                  number: "04",
                  title: "Launch & grow",
                  text: "Deploy your charging station and build your EV business.",
                },
              ].map((step) => (
                <div key={step.number} className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-white bg-gradient-to-br from-blue-50 to-violet-50 shadow-[0_10px_40px_rgba(79,70,229,0.12)]">
                    <span className="text-lg font-bold text-[#4B4FAE]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS & SERVICES
      ====================================================== */}

      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#4B4FAE]">
                PRODUCTS & SERVICES
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-slate-950 md:text-5xl">
                Everything you need to
                <span className="block text-[#1E5FA8]">
                  build your EV destination.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                From infrastructure to technology and operational support,
                EV Dock brings the essential pieces together.
              </p>

              <a
                href="#partner-form"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#1E5FA8]"
              >
                Discuss your requirements
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service}
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
                    delay: index * 0.05,
                  }}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>

                  <span className="text-sm font-semibold text-slate-700">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNERS
      ====================================================== */}

      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-[#4B4FAE]">
              OUR PARTNERS
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-slate-950 md:text-5xl">
              Growing together with
              <span className="block text-[#1E5FA8]">
                the EV ecosystem.
              </span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We are building meaningful partnerships across the growing
              electric mobility ecosystem.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
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
                  delay: index * 0.06,
                }}
                className="group flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-12 max-w-[130px] object-contain grayscale opacity-60 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNER FORM
      ====================================================== */}

      <section
        id="partner-form"
        className="relative overflow-hidden bg-slate-50 py-28"
      >
        <div className="absolute right-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="absolute bottom-[-200px] left-[-150px] h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}

            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-bold tracking-[0.2em] text-[#4B4FAE]">
                LET'S WORK TOGETHER
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-slate-950 md:text-5xl">
                Ready to become
                <span className="block bg-gradient-to-r from-[#1E5FA8] to-[#7A3FAF] bg-clip-text text-transparent">
                  an EV Dock partner?
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Tell us about your opportunity. Our partnership team will
                connect with you to understand your location, goals and
                requirements.
              </p>

              <div className="mt-9 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Partnership-focused support
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Get guidance based on your opportunity and business
                      goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Headphones className="h-5 w-5 text-[#1E5FA8]" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Speak with our team
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Discuss your location, requirements and partnership
                      goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                    <Sparkles className="h-5 w-5 text-[#7A3FAF]" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Build for the future
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Create a smarter EV destination with scalable
                      technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}

            <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-7 shadow-[0_30px_100px_rgba(15,23,42,0.10)] md:p-10">
              <div className="absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="absolute bottom-[-100px] left-[-100px] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600">
                      <Handshake className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-950">
                        Partner with EV Dock
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Start a conversation with our team.
                      </p>
                    </div>
                  </div>
                </div>

                <form className="space-y-5">
                  {/* Name / Company */}

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-semibold text-slate-700">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your name"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-slate-700">
                        Company Name
                      </label>

                      <input
                        type="text"
                        placeholder="Company name"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>
                  </div>

                  {/* Phone / Email */}

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-semibold text-slate-700">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-slate-700">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>
                  </div>

                  {/* Partnership */}

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Partnership Type
                    </label>

                    <select
                      defaultValue=""
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                    >
                      <option value="" disabled>
                        Select partnership type
                      </option>

                      <option>EV Charging Franchise</option>
                      <option>Property Partnership</option>
                      <option>Hotel / Hospitality</option>
                      <option>Business / Retail</option>
                      <option>Investment Opportunity</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Location */}

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Location
                    </label>

                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                      <input
                        type="text"
                        placeholder="City / State"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>
                  </div>

                  {/* Message */}

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Tell us about your opportunity
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Tell us about your property, business or partnership requirement..."
                      className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  {/* Button */}

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/20"
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      Submit Partnership Enquiry

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Our team will review your enquiry and connect with you.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#07111F] px-7 py-20 text-center md:px-16">
          {/* Glow */}

          <div className="absolute right-[-100px] top-[-150px] h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />

          <div className="absolute bottom-[-150px] left-[-100px] h-96 w-96 rounded-full bg-violet-600/20 blur-[100px]" />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
              <Handshake className="h-7 w-7 text-white" />
            </div>

            <h2 className="mt-7 text-4xl font-bold tracking-[-0.035em] text-white md:text-6xl">
              Let's build the EV future
              <span className="block bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
                together.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Have a property, business or investment opportunity?
              Let's explore what we can build together.
            </p>

            <a
              href="#partner-form"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
            >
              Become an EV Dock Partner

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <BackToTop />
    </main>
  );
};

export default Partner;