import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BatteryCharging,
  Check,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  Gauge,
  Globe2,
  LayoutDashboard,
  PlugZap,
  Radio,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =========================================================
   AUDIENCE
========================================================= */

const audiences = [
  {
    icon: Radio,
    title: "CPOs",
    subtitle: "Charging Point Operators",
    text: "Monitor network performance, charger health and charging activity from one connected control center.",
  },
  {
    icon: LayoutDashboard,
    title: "Franchise Owners",
    subtitle: "EV Charging Franchise",
    text: "Manage multiple charging locations with clear operational and performance visibility.",
  },
  {
    icon: PlugZap,
    title: "Charger Owners",
    subtitle: "EV Charging Infrastructure",
    text: "Stay informed about charger availability, sessions, usage and station health.",
  },
];

/* =========================================================
   KEY FEATURES
========================================================= */

const keyFeatures = [
  {
    icon: Activity,
    number: "01",
    title: "Real-Time Charger Control",
    description:
      "Monitor charger availability, live status, performance and network activity from one centralized platform.",
    gradient: "from-[#1E5FA8] to-[#2F74C9]",
  },
  {
    icon: CircleDollarSign,
    number: "02",
    title: "Revenue & Pricing",
    description:
      "Track station earnings, pricing activity, transactions and revenue performance across your network.",
    gradient: "from-[#2F74C9] to-[#4B4FAE]",
  },
  {
    icon: AlertTriangle,
    number: "03",
    title: "Issues & Complaints",
    description:
      "Identify charger problems, operational issues and customer complaints so your team can respond faster.",
    gradient: "from-[#C93C8F] to-[#E04578]",
  },
  {
    icon: Users,
    number: "04",
    title: "Users & Access",
    description:
      "Manage users, administrators, roles, permissions and access levels across your charging ecosystem.",
    gradient: "from-[#4B4FAE] to-[#7A3FAF]",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Reports & Alerts",
    description:
      "Turn network activity into useful reports while receiving timely notifications for important events.",
    gradient: "from-[#1E5FA8] to-[#7A3FAF]",
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "T+1 Settlement",
    description:
      "Simplify transaction settlement with a next-business-day payout workflow for eligible charging transactions.",
    gradient: "from-[#7A3FAF] to-[#C93C8F]",
  },
  {
    icon: LayoutDashboard,
    number: "07",
    title: "Dynamic Dashboards",
    description:
      "Visualize network health, utilization, revenue, sessions and operational KPIs through flexible dashboards.",
    gradient: "from-[#1E5FA8] to-[#4B4FAE]",
  },
  {
    icon: ServerCog,
    number: "08",
    title: "OCPP & OCPI Ready",
    description:
      "Support standardized charging communication and interoperability across connected charging ecosystems.",
    gradient: "from-[#4B4FAE] to-[#7A3FAF]",
  },
  {
    icon: CreditCard,
    number: "09",
    title: "Payments & Invoicing",
    description:
      "Manage payments, promotional offers, coupons, invoices and transaction records from one platform.",
    gradient: "from-[#C93C8F] to-[#7A3FAF]",
  },
];

/* =========================================================
   DASHBOARD PREVIEW
========================================================= */

const DashboardPreview = () => {
  return (
    <div className="relative">

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute -right-10 top-20 h-48 w-48 rounded-full bg-violet-500/20 blur-[100px]" />

      {/* Dashboard */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
          y: 20,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
      >

        {/* Top bar */}

        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5FA8] to-[#7A3FAF]">
              <Zap className="h-5 w-5 text-white" />
            </div>

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                EV DOCK
              </p>

              <p className="text-sm font-bold text-slate-900">
                Charging Management
              </p>

            </div>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5">

            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <span className="text-[9px] font-bold text-emerald-600">
              NETWORK ONLINE
            </span>

          </div>

        </div>

        <div className="grid grid-cols-[150px_1fr]">

          {/* Sidebar */}

          <div className="hidden border-r border-slate-100 bg-slate-50 p-4 sm:block">

            <p className="mb-5 text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
              Control Center
            </p>

            {[
              [LayoutDashboard, "Overview", true],
              [PlugZap, "Chargers", false],
              [BatteryCharging, "Sessions", false],
              [BarChart3, "Analytics", false],
              [AlertTriangle, "Alerts", false],
              [Users, "Users", false],
            ].map(([Icon, label, active]) => {

              const ItemIcon = Icon as React.ElementType;

              return (
                <div
                  key={label as string}
                  className={`mb-1 flex items-center gap-2 rounded-lg px-3 py-2.5 text-[10px] font-semibold ${
                    active
                      ? "bg-blue-50 text-[#1E5FA8]"
                      : "text-slate-400"
                  }`}
                >
                  <ItemIcon size={14} />
                  {label as string}
                </div>
              );
            })}

          </div>

          {/* Main */}

          <div className="min-w-0 bg-white p-4 sm:p-6">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-bold text-slate-900">
                  Network Overview
                </p>

                <p className="mt-1 text-[9px] text-slate-400">
                  Real-time charging infrastructure
                </p>

              </div>

              <div className="rounded-xl bg-blue-50 p-2.5">
                <Activity className="h-4 w-4 text-[#1E5FA8]" />
              </div>

            </div>

            {/* Stats */}

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

              {[
                ["248", "Chargers"],
                ["186", "Online"],
                ["42", "Charging"],
                ["12.8", "MWh Today"],
              ].map(([value, label]) => (

                <div
                  key={label}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-3"
                >

                  <div className="mb-2 h-1 w-6 rounded-full bg-gradient-to-r from-[#1E5FA8] to-[#7A3FAF]" />

                  <p className="text-lg font-black text-slate-900">
                    {value}
                  </p>

                  <p className="mt-0.5 text-[9px] text-slate-400">
                    {label}
                  </p>

                </div>

              ))}

            </div>

            {/* Chart */}

            <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-4">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-bold text-slate-900">
                    Charging Activity
                  </p>

                  <p className="mt-1 text-[9px] text-slate-400">
                    Network activity
                  </p>

                </div>

                <BarChart3 className="h-4 w-4 text-[#4B4FAE]" />

              </div>

              <div className="mt-6 flex h-28 items-end gap-1.5">

                {[35, 50, 42, 65, 52, 76, 60, 88, 70, 92, 80, 100].map(
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
                        duration: 0.8,
                        delay: index * 0.04,
                      }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-[#1E5FA8] via-[#4B4FAE] to-[#B57EDC]"
                    />

                  )
                )}

              </div>

            </div>

            {/* Bottom status */}

            <div className="mt-4 grid grid-cols-3 gap-2">

              {[
                ["186", "Online", "bg-emerald-500"],
                ["42", "Charging", "bg-blue-500"],
                ["20", "Attention", "bg-pink-500"],
              ].map(([value, label, dot]) => (

                <div
                  key={label}
                  className="rounded-xl border border-slate-100 p-3"
                >

                  <div className="flex items-center gap-1.5">

                    <span
                      className={`h-1.5 w-1.5 rounded-full ${dot}`}
                    />

                    <span className="text-[9px] text-slate-400">
                      {label}
                    </span>

                  </div>

                  <p className="mt-1 text-sm font-black text-slate-800">
                    {value}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </motion.div>

      {/* Floating card */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-5 -left-4 z-20 hidden rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl sm:block"
      >

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          </div>

          <div>

            <p className="text-[9px] text-slate-400">
              Network Health
            </p>

            <p className="mt-1 text-xs font-black text-slate-900">
              99.2% Available
            </p>

          </div>

        </div>

      </motion.div>

    </div>
  );
};

/* =========================================================
   CMS PAGE
========================================================= */

const CMS: React.FC = () => {

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative min-h-screen overflow-hidden bg-[#07111F] pt-24">

          {/* Background glow */}

          <div className="absolute left-[-200px] top-[-200px] h-[650px] w-[650px] rounded-full bg-blue-600/20 blur-[150px]" />

          <div className="absolute right-[-200px] top-0 h-[650px] w-[650px] rounded-full bg-violet-600/20 blur-[150px]" />

          <div className="absolute bottom-[-300px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-pink-600/10 blur-[150px]" />

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

            <div className="grid w-full items-center gap-16 lg:grid-cols-[0.82fr_1.18fr]">

              {/* Hero content */}

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

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-xl">

                  <span className="relative flex h-2.5 w-2.5">

                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                    <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />

                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">
                    EV Dock CMS
                  </span>

                </div>

                <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-white md:text-6xl lg:text-[70px]">

                  Control your EV network.

                  <span className="block bg-gradient-to-r from-blue-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                    From one powerful platform.
                  </span>

                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400 md:text-xl">
                  Monitor chargers, manage sessions, understand performance
                  and respond to operational issues — all from one connected
                  EV charging control center.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50">

                    Explore CMS

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </button>

                  <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10">
                    Request a Demo
                  </button>

                </div>

                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">

                  {[
                    [Activity, "Monitor"],
                    [BatteryCharging, "Manage"],
                    [BarChart3, "Analyze"],
                    [AlertTriangle, "Act"],
                  ].map(([Icon, label]) => {

                    const ItemIcon = Icon as React.ElementType;

                    return (
                      <div
                        key={label as string}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl"
                      >

                        <ItemIcon className="h-4 w-4 text-blue-300" />

                        <p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-slate-300">
                          {label as string}
                        </p>

                      </div>
                    );
                  })}

                </div>

              </motion.div>

              {/* Dashboard */}

              <DashboardPreview />

            </div>

          </div>

        </section>

        {/* =====================================================
            STATS
        ====================================================== */}

        <section className="border-b border-slate-100 bg-white py-8">

          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">

            {[
              ["248", "Chargers"],
              ["186", "Online"],
              ["12.8", "MWh Today"],
              ["99.2%", "Network Health"],
            ].map(([value, label]) => (

              <div
                key={label}
                className="text-center"
              >

                <p className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                  {value}
                </p>

                <p className="mt-1 text-xs font-medium text-slate-400">
                  {label}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="bg-white py-24 md:py-28">

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E5FA8]">
                WHY EV DOCK CMS
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl">

                One control center

                <span className="block text-[#1E5FA8]">
                  for your entire network.
                </span>

              </h2>

            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              As your charging network grows, operational visibility becomes
              critical. EV Dock CMS brings chargers, sessions, performance,
              alerts and network information into one connected experience.
            </p>

          </div>

        </section>

        {/* =====================================================
            KEY FEATURES
        ====================================================== */}

        <section className="relative overflow-hidden bg-white py-24 md:py-32">

          <div className="pointer-events-none absolute left-[-250px] top-20 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[130px]" />

          <div className="pointer-events-none absolute bottom-0 right-[-250px] h-[500px] w-[500px] rounded-full bg-violet-100/50 blur-[130px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

                <Zap className="h-3.5 w-3.5 text-[#1E5FA8]" />

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1E5FA8]">
                  KEY FEATURES
                </span>

              </div>

              <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-5xl">

                Everything you need to

                <span className="block bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] bg-clip-text text-transparent">
                  run a smarter EV network.
                </span>

              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
                From charger operations and revenue to payments, users,
                interoperability and analytics — EV Dock CMS brings your
                charging ecosystem together.
              </p>

            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {keyFeatures.map((feature, index) => {

                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
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
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]"
                  >

                    <div
                      className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-20`}
                    />

                    <div className="relative flex items-center justify-between">

                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>

                      <span className="text-4xl font-black text-slate-100">
                        {feature.number}
                      </span>

                    </div>

                    <h3 className="relative mt-7 text-lg font-black text-slate-950">
                      {feature.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-7 text-slate-500">
                      {feature.description}
                    </p>

                    <div className="relative mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 transition-colors group-hover:text-[#1E5FA8]">

                      <span>
                        EV Dock Platform
                      </span>

                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />

                    </div>

                  </motion.div>
                );
              })}

            </div>

            <div className="mt-10 overflow-hidden rounded-[26px] border border-slate-200 bg-slate-50">

              <div className="grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

                <div className="flex items-center gap-4 p-6">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                    <ShieldCheck className="h-5 w-5 text-[#1E5FA8]" />
                  </div>

                  <div>

                    <p className="text-sm font-bold text-slate-900">
                      Secure Operations
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Role-based platform access
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4 p-6">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100">
                    <Globe2 className="h-5 w-5 text-[#7A3FAF]" />
                  </div>

                  <div>

                    <p className="text-sm font-bold text-slate-900">
                      Connected Ecosystem
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Built for interoperable networks
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4 p-6">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100">
                    <BarChart3 className="h-5 w-5 text-[#C93C8F]" />
                  </div>

                  <div>

                    <p className="text-sm font-bold text-slate-900">
                      Actionable Insights
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Data-driven network decisions
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            MONITOR
        ====================================================== */}

        <section className="bg-slate-50 py-24 md:py-32">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

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
            >

              <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.10)]">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-bold text-slate-900">
                      Charger Status
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Live network overview
                    </p>

                  </div>

                  <Activity className="h-5 w-5 text-[#1E5FA8]" />

                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">

                  {[
                    ["186", "Online", "bg-emerald-500"],
                    ["42", "Charging", "bg-blue-500"],
                    ["20", "Attention", "bg-pink-500"],
                    ["62", "Available", "bg-violet-500"],
                  ].map(([value, label, dot]) => (

                    <div
                      key={label}
                      className="rounded-2xl border border-slate-100 p-5"
                    >

                      <div className="flex items-center gap-2">

                        <span
                          className={`h-2 w-2 rounded-full ${dot}`}
                        />

                        <span className="text-[10px] font-semibold text-slate-400">
                          {label}
                        </span>

                      </div>

                      <p className="mt-3 text-2xl font-black text-slate-900">
                        {value}
                      </p>

                    </div>

                  ))}

                </div>

                <div className="mt-4 rounded-2xl bg-[#07111F] p-6">

                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                    Network Health
                  </p>

                  <div className="mt-3 flex items-end justify-between">

                    <p className="text-4xl font-black text-white">
                      99.2%
                    </p>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-400/10">
                      <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E5FA8]">
                01 / MONITOR
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl">

                Know what's happening

                <span className="block text-[#1E5FA8]">
                  across every charger.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Get a live view of your infrastructure and quickly understand
                which chargers are available, active, offline or need attention.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Live charger availability",
                  "Station status",
                  "Network health",
                  "Charger activity",
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

            </div>

          </div>

        </section>

        {/* =====================================================
            MANAGE
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#07111F] py-24 md:py-32">

          <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

          <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/15 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

              {/* Content */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
              >

                <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2">

                  <BatteryCharging className="h-3.5 w-3.5 text-blue-300" />

                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-200">
                    02 / MANAGE
                  </span>

                </div>

                <h2 className="mt-6 max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white md:text-5xl">

                  Manage every charging

                  <span className="block bg-gradient-to-r from-blue-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                    session with confidence.
                  </span>

                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
                  Keep complete visibility over active sessions, charger
                  activity, energy consumption and charging progress from a
                  single control center.
                </p>

                <div className="mt-9 space-y-3">

                  {[
                    {
                      icon: BatteryCharging,
                      title: "Live Charging Sessions",
                      text: "Track active sessions in real time.",
                    },
                    {
                      icon: Gauge,
                      title: "Charging Progress",
                      text: "Understand energy delivery and session progress.",
                    },
                    {
                      icon: Wallet,
                      title: "Session & Revenue Data",
                      text: "Connect charging activity with commercial data.",
                    },
                    {
                      icon: RefreshCw,
                      title: "Centralized Control",
                      text: "Manage network activity from one platform.",
                    },
                  ].map((item) => {

                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{
                          x: 5,
                        }}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-white/20 hover:bg-white/[0.06]"
                      >

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5FA8] to-[#7A3FAF]">

                          <Icon className="h-5 w-5 text-white" />

                        </div>

                        <div>

                          <p className="text-sm font-bold text-white">
                            {item.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {item.text}
                          </p>

                        </div>

                        <ArrowRight
                          size={15}
                          className="ml-auto text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-300"
                        />

                      </motion.div>
                    );
                  })}

                </div>

              </motion.div>

              {/* Session dashboard */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
              >

                <div className="relative">

                  <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

                  <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0D1828] p-4 shadow-[0_40px_100px_rgba(0,0,0,0.45)] md:p-5">

                    {/* Header */}

                    <div className="flex items-center justify-between border-b border-white/10 pb-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5FA8] to-[#7A3FAF]">

                          <BatteryCharging className="h-5 w-5 text-white" />

                        </div>

                        <div>

                          <p className="text-sm font-bold text-white">
                            Charging Sessions
                          </p>

                          <p className="mt-1 text-[9px] text-slate-500">
                            Live network activity
                          </p>

                        </div>

                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/10 px-3 py-1.5">

                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                        <span className="text-[8px] font-bold text-emerald-300">
                          LIVE
                        </span>

                      </div>

                    </div>

                    {/* Summary */}

                    <div className="mt-5 grid grid-cols-3 gap-3">

                      <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">

                        <p className="text-[9px] text-slate-500">
                          Active
                        </p>

                        <p className="mt-2 text-2xl font-black text-white">
                          42
                        </p>

                        <p className="mt-1 text-[8px] font-bold text-emerald-400">
                          +12% today
                        </p>

                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">

                        <p className="text-[9px] text-slate-500">
                          Energy
                        </p>

                        <p className="mt-2 text-2xl font-black text-white">
                          12.8
                        </p>

                        <p className="mt-1 text-[8px] text-slate-500">
                          MWh delivered
                        </p>

                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">

                        <p className="text-[9px] text-slate-500">
                          Average
                        </p>

                        <p className="mt-2 text-2xl font-black text-white">
                          68%
                        </p>

                        <p className="mt-1 text-[8px] text-slate-500">
                          Session progress
                        </p>

                      </div>

                    </div>

                    {/* Sessions */}

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4">

                      <div className="mb-4 flex items-center justify-between">

                        <p className="text-xs font-bold text-white">
                          Active Sessions
                        </p>

                        <button className="text-[9px] font-bold text-blue-300">
                          View All
                        </button>

                      </div>

                      <div className="space-y-3">

                        {[
                          {
                            id: "EV-1024",
                            station: "Station 08",
                            energy: "18.4 kWh",
                            progress: 82,
                            status: "Charging",
                          },
                          {
                            id: "EV-1025",
                            station: "Station 14",
                            energy: "12.8 kWh",
                            progress: 64,
                            status: "Charging",
                          },
                          {
                            id: "EV-1026",
                            station: "Station 21",
                            energy: "24.2 kWh",
                            progress: 100,
                            status: "Completed",
                          },
                          {
                            id: "EV-1027",
                            station: "Station 05",
                            energy: "8.6 kWh",
                            progress: 41,
                            status: "Charging",
                          },
                        ].map((session, index) => (

                          <motion.div
                            key={session.id}
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
                              delay: index * 0.08,
                            }}
                            className="rounded-xl border border-white/10 bg-white/[0.035] p-3"
                          >

                            <div className="flex items-center justify-between">

                              <div className="flex items-center gap-3">

                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-400/10">

                                  <PlugZap className="h-4 w-4 text-blue-300" />

                                </div>

                                <div>

                                  <p className="text-[11px] font-bold text-white">
                                    {session.id}
                                  </p>

                                  <p className="mt-0.5 text-[8px] text-slate-500">
                                    {session.station} • {session.energy}
                                  </p>

                                </div>

                              </div>

                              <span
                                className={`rounded-full px-2.5 py-1 text-[8px] font-bold ${
                                  session.status === "Completed"
                                    ? "bg-emerald-400/10 text-emerald-300"
                                    : "bg-blue-400/10 text-blue-300"
                                }`}
                              >
                                {session.status}
                              </span>

                            </div>

                            <div className="mt-3 flex items-center gap-3">

                              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">

                                <motion.div
                                  initial={{
                                    width: 0,
                                  }}
                                  whileInView={{
                                    width: `${session.progress}%`,
                                  }}
                                  viewport={{
                                    once: true,
                                  }}
                                  transition={{
                                    duration: 1,
                                    delay: index * 0.08,
                                  }}
                                  className="h-full rounded-full bg-gradient-to-r from-[#2F74C9] via-[#4B4FAE] to-[#B57EDC]"
                                />

                              </div>

                              <span className="w-8 text-right text-[8px] font-bold text-slate-400">
                                {session.progress}%
                              </span>

                            </div>

                          </motion.div>

                        ))}

                      </div>

                    </div>

                  </div>

                  {/* Floating status */}

                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-[#111F31] p-4 shadow-2xl sm:block"
                  >

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">

                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                      </div>

                      <div>

                        <p className="text-[9px] text-slate-500">
                          Network Sessions
                        </p>

                        <p className="mt-1 text-xs font-black text-white">
                          Running smoothly
                        </p>

                      </div>

                    </div>

                  </motion.div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* =====================================================
            ANALYZE
        ====================================================== */}

        <section className="bg-white py-24 md:py-32">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

            {/* Analytics */}

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
              className="rounded-[32px] border border-slate-200 bg-slate-50 p-5 shadow-xl"
            >

              <div className="rounded-2xl bg-white p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-bold text-slate-900">
                      Network Performance
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Energy & utilization trends
                    </p>

                  </div>

                  <BarChart3 className="h-5 w-5 text-[#4B4FAE]" />

                </div>

                <div className="mt-8 flex h-44 items-end gap-2">

                  {[28, 42, 35, 55, 48, 68, 60, 78, 70, 92, 80, 100].map(
                    (height, index) => (

                      <motion.div
                        key={index}
                        initial={{
                          height: 0,
                        }}
                        whileInView={{
                          height: `${height}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.04,
                        }}
                        className="flex-1 rounded-t-lg bg-gradient-to-t from-[#1E5FA8] via-[#4B4FAE] to-[#B57EDC]"
                      />

                    )
                  )}

                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">

                  {[
                    ["12.8 MWh", "Energy"],
                    ["78%", "Utilization"],
                    ["4,286", "Sessions"],
                  ].map(([value, label]) => (

                    <div
                      key={label}
                      className="rounded-xl bg-slate-50 p-4"
                    >

                      <p className="text-[9px] text-slate-400">
                        {label}
                      </p>

                      <p className="mt-1 text-lg font-black text-slate-900">
                        {value}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

            {/* Content */}

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4B4FAE]">
                03 / ANALYZE
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl">

                Turn charging activity

                <span className="block text-[#4B4FAE]">
                  into useful insights.
                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Understand how your network performs through clear operational
                data, trends and performance indicators.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  [
                    BarChart3,
                    "Energy Usage",
                    "Understand energy delivered across your network.",
                  ],
                  [
                    Gauge,
                    "Charger Utilization",
                    "Identify how effectively your chargers are being used.",
                  ],
                  [
                    CircleDollarSign,
                    "Revenue Activity",
                    "See charging activity and commercial performance.",
                  ],
                ].map(([Icon, title, text]) => {

                  const ItemIcon = Icon as React.ElementType;

                  return (
                    <div
                      key={title as string}
                      className="flex gap-4"
                    >

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50">

                        <ItemIcon className="h-5 w-5 text-[#4B4FAE]" />

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

          </div>

        </section>

        {/* =====================================================
            ACT
        ====================================================== */}

        <section className="bg-slate-50 py-24 md:py-32">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C93C8F]">
                04 / ACT
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl">

                Spot issues before

                <span className="block text-[#C93C8F]">
                  they become downtime.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Bring important operational events to your attention so your
                team can identify problems and respond faster.
              </p>

              <div className="mt-8 space-y-4">

                {[
                  "Operational alerts",
                  "Charger error detection",
                  "Offline charger visibility",
                  "Faster response",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-50">
                      <Check className="h-3.5 w-3.5 text-[#C93C8F]" />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

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

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.10)]">

                <div className="flex items-center justify-between border-b border-slate-100 pb-5">

                  <div>

                    <p className="text-sm font-bold text-slate-900">
                      Network Alerts
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      Attention required
                    </p>

                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50">
                    <AlertTriangle className="h-5 w-5 text-[#C93C8F]" />
                  </div>

                </div>

                <div className="mt-5 rounded-2xl border border-pink-100 bg-pink-50/50 p-5">

                  <div className="flex gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">

                      <AlertTriangle className="h-5 w-5 text-[#C93C8F]" />

                    </div>

                    <div>

                      <p className="text-sm font-black text-slate-900">
                        Charger #EV-042
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Connection interrupted
                      </p>

                    </div>

                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">

                    <div className="rounded-xl bg-white p-4">

                      <p className="text-[9px] text-slate-400">
                        Location
                      </p>

                      <p className="mt-1 text-xs font-bold text-slate-800">
                        Station 08
                      </p>

                    </div>

                    <div className="rounded-xl bg-white p-4">

                      <p className="text-[9px] text-slate-400">
                        Status
                      </p>

                      <p className="mt-1 text-xs font-bold text-[#C93C8F]">
                        Needs Attention
                      </p>

                    </div>

                  </div>

                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 text-xs font-bold text-white transition hover:bg-[#C93C8F]">

                    View Charger

                    <ArrowRight className="h-4 w-4" />

                  </button>

                </div>

              </div>

            </motion.div>

          </div>

        </section>

        {/* =====================================================
            AUDIENCE
        ====================================================== */}

        <section className="bg-white py-24 md:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E5FA8]">
                BUILT FOR THE EV ECOSYSTEM
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-slate-950 md:text-5xl">

                One CMS.

                <span className="block text-[#1E5FA8]">
                  Multiple ways to grow.
                </span>

              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Designed to give every part of your charging business better
                visibility and control.
              </p>

            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">

              {audiences.map((item, index) => {

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
                    whileHover={{
                      y: -6,
                    }}
                    className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/30"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1E5FA8] transition group-hover:bg-gradient-to-br group-hover:from-[#1E5FA8] group-hover:to-[#7A3FAF] group-hover:text-white">

                        <Icon className="h-6 w-6" />

                      </div>

                      <span className="text-5xl font-black text-slate-100">
                        0{index + 1}
                      </span>

                    </div>

                    <h3 className="mt-7 text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs font-bold text-[#1E5FA8]">
                      {item.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            PLATFORM
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#07111F] py-24 md:py-32">

          <div className="absolute left-1/2 top-[-200px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[140px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                ONE CONNECTED PLATFORM
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-white md:text-5xl">

                Four capabilities.

                <span className="block text-blue-300">
                  One network.
                </span>

              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-400">
                Everything your charging operation needs to monitor,
                manage, analyze and act.
              </p>

            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                [Activity, "MONITOR", "See every charger"],
                [BatteryCharging, "MANAGE", "Follow every session"],
                [BarChart3, "ANALYZE", "Understand performance"],
                [AlertTriangle, "ACT", "Respond faster"],
              ].map(([Icon, title, text]) => {

                const ItemIcon = Icon as React.ElementType;

                return (
                  <motion.div
                    key={title as string}
                    whileHover={{
                      y: -6,
                    }}
                    className="rounded-[24px] border border-white/10 bg-white/[0.05] p-7 text-center backdrop-blur-xl"
                  >

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E5FA8] to-[#7A3FAF]">

                      <ItemIcon className="h-6 w-6 text-white" />

                    </div>

                    <p className="mt-6 text-xs font-bold tracking-[0.15em] text-white">
                      {title as string}
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                      {text as string}
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

        <section className="px-6 py-20 lg:px-8">

          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-br from-[#0F172A] via-[#1E5FA8] to-[#7A3FAF] px-7 py-20 text-center md:px-16">

            <div className="absolute left-[-100px] top-[-150px] h-96 w-96 rounded-full bg-blue-400/20 blur-[100px]" />

            <div className="absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-pink-400/20 blur-[100px]" />

            <div className="relative">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10">

                <ShieldCheck className="h-7 w-7 text-white" />

              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
                EV DOCK CMS
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-white md:text-6xl">

                Your chargers are connected.

                <span className="block text-blue-100">
                  Now take control.
                </span>

              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100/80">
                Bring monitoring, management, analytics and operational
                visibility together with EV Dock CMS.
              </p>

              <button className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50">

                Request a CMS Demo

                <ArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={16}
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

export default CMS;