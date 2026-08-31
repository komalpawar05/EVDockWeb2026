
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BatteryCharging,
  CheckCircle2,
  CircleDollarSign,
  CreditCard,
  Gauge,
  LayoutDashboard,
  MapPin,
  Network,
  PlugZap,
  RefreshCw,
  ShieldCheck,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/Common/SectionHeading";
import CMSDashboard from "../components/Common/CMSDashboard";

/* =========================================================
   CMS CAPABILITIES
========================================================= */

const cmsCapabilities = [
  {
    icon: PlugZap,
    title: "Charger Management",
    text: "Monitor charger availability, connectivity, status and operational performance from one centralized dashboard.",
    gradient: "from-[#1E5FA8] to-[#2F74C9]",
  },
  {
    icon: MapPin,
    title: "Station Management",
    text: "Manage charging locations, connectors, station information and network configuration in one place.",
    gradient: "from-[#2F74C9] to-[#4B4FAE]",
  },
  {
    icon: BatteryCharging,
    title: "Charging Sessions",
    text: "Track active sessions, energy delivery, charging progress and session history in real time.",
    gradient: "from-[#4B4FAE] to-[#7A3FAF]",
  },
  {
    icon: CircleDollarSign,
    title: "Pricing & Revenue",
    text: "Manage charging prices and monitor revenue performance across stations and charging activity.",
    gradient: "from-[#7A3FAF] to-[#C93C8F]",
  },
  {
    icon: CreditCard,
    title: "Payments & Invoicing",
    text: "Keep payments, transactions, invoices, offers and customer billing information organized.",
    gradient: "from-[#C93C8F] to-[#E04578]",
  },
  {
    icon: Users,
    title: "Users & Permissions",
    text: "Manage administrators, teams, roles and access permissions across your charging operation.",
    gradient: "from-[#1E5FA8] to-[#7A3FAF]",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    text: "Understand utilization, energy, sessions, revenue and operational performance through clear reports.",
    gradient: "from-[#2F74C9] to-[#7A3FAF]",
  },
  {
    icon: AlertTriangle,
    title: "Alerts & Issues",
    text: "Identify charger problems, offline equipment and operational issues so your team can respond quickly.",
    gradient: "from-[#C93C8F] to-[#E04578]",
  },
  {
    icon: Network,
    title: "OCPP & OCPI Connectivity",
    text: "Connect charging infrastructure and partner networks through standardized EV charging communication.",
    gradient: "from-[#4B4FAE] to-[#7A3FAF]",
  },
];

/* =========================================================
   FEATURE VISUAL
========================================================= */

const FeatureVisual = ({
  type,
}: {
  type: "monitor" | "manage" | "analyze" | "act";
}) => {
  if (type === "monitor") {
    return (
      <div className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_25px_70px_rgba(15,23,42,.08)] sm:p-5">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs font-black text-slate-900">
              Charger Status
            </p>

            <p className="mt-1 text-[8px] text-slate-400">
              Live network overview
            </p>
          </div>

          <Activity className="h-4 w-4 text-[#1E5FA8]" />

        </div>

        <div className="mt-5 grid grid-cols-2 gap-2">

          {[
            ["186", "Online", "bg-emerald-500"],
            ["42", "Charging", "bg-blue-500"],
            ["20", "Attention", "bg-pink-500"],
            ["62", "Available", "bg-violet-500"],
          ].map(([value, label, dot]) => (
            <div
              key={label}
              className="rounded-xl border border-slate-100 p-3"
            >

              <div className="flex items-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${dot}`}
                />

                <span className="text-[7px] text-slate-400">
                  {label}
                </span>
              </div>

              <p className="mt-2 text-lg font-black text-slate-900">
                {value}
              </p>

            </div>
          ))}

        </div>

        <div className="mt-3 rounded-xl bg-[#07111F] p-4">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[7px] uppercase tracking-[0.16em] text-slate-500">
                Network Health
              </p>

              <p className="mt-1 text-2xl font-black text-white">
                99.2%
              </p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            </div>

          </div>

        </div>

      </div>
    );
  }

  if (type === "manage") {
    return (
      <div className="rounded-[24px] border border-white/10 bg-[#0D1828] p-4 shadow-[0_30px_80px_rgba(0,0,0,.35)] sm:p-5">

        <div className="flex items-center justify-between border-b border-white/10 pb-4">

          <div className="flex items-center gap-2.5">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/10">
              <BatteryCharging className="h-4 w-4 text-blue-300" />
            </div>

            <div>
              <p className="text-xs font-black text-white">
                Charging Sessions
              </p>

              <p className="mt-0.5 text-[7px] text-slate-500">
                Live network activity
              </p>
            </div>

          </div>

          <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[6px] font-black text-emerald-300">
            LIVE
          </span>

        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">

          {[
            ["42", "Active"],
            ["12.8", "MWh"],
            ["68%", "Progress"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
            >
              <p className="text-[7px] text-slate-500">
                {label}
              </p>

              <p className="mt-1 text-lg font-black text-white">
                {value}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-3 space-y-2">

          {[
            ["EV-1024", "Station 08", 82],
            ["EV-1025", "Station 14", 64],
            ["EV-1026", "Station 21", 100],
          ].map(([id, station, progress]) => (
            <div
              key={id}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[8px] font-bold text-white">
                    {id}
                  </p>

                  <p className="mt-0.5 text-[6px] text-slate-500">
                    {station}
                  </p>
                </div>

                <span className="text-[7px] font-bold text-blue-300">
                  {progress}%
                </span>

              </div>

              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                <div
                  style={{
                    width: `${progress}%`,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-[#1E5FA8] to-[#B57EDC]"
                />
              </div>

            </div>
          ))}

        </div>

      </div>
    );
  }

  if (type === "analyze") {
    return (
      <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 shadow-[0_25px_70px_rgba(15,23,42,.08)] sm:p-5">

        <div className="rounded-2xl bg-white p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-black text-slate-900">
                Network Performance
              </p>

              <p className="mt-1 text-[7px] text-slate-400">
                Energy & utilization trends
              </p>
            </div>

            <BarChart3 className="h-4 w-4 text-[#4B4FAE]" />

          </div>

          <div className="mt-8 flex h-32 items-end gap-1.5">

            {[30, 44, 38, 58, 52, 70, 62, 80, 72, 94, 82, 100].map(
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
                    duration: 0.7,
                    delay: index * 0.04,
                  }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-[#1E5FA8] via-[#4B4FAE] to-[#B57EDC]"
                />
              )
            )}

          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">

            {[
              ["12.8 MWh", "Energy"],
              ["78%", "Utilization"],
              ["4,286", "Sessions"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl bg-slate-50 p-3"
              >
                <p className="text-[7px] text-slate-400">
                  {label}
                </p>

                <p className="mt-1 text-sm font-black text-slate-900">
                  {value}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,.08)]">

      <div className="flex items-center justify-between border-b border-slate-100 pb-4">

        <div>
          <p className="text-xs font-black text-slate-900">
            Network Alerts
          </p>

          <p className="mt-1 text-[7px] text-slate-400">
            Attention required
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-50">
          <AlertTriangle className="h-4 w-4 text-[#C93C8F]" />
        </div>

      </div>

      <div className="mt-4 rounded-xl border border-pink-100 bg-pink-50/50 p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white">
            <AlertTriangle className="h-4 w-4 text-[#C93C8F]" />
          </div>

          <div>
            <p className="text-xs font-black text-slate-900">
              Charger #EV-042
            </p>

            <p className="mt-1 text-[8px] text-slate-500">
              Connection interrupted
            </p>
          </div>

        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">

          <div className="rounded-lg bg-white p-3">
            <p className="text-[7px] text-slate-400">
              Location
            </p>

            <p className="mt-1 text-[9px] font-bold text-slate-800">
              Station 08
            </p>
          </div>

          <div className="rounded-lg bg-white p-3">
            <p className="text-[7px] text-slate-400">
              Status
            </p>

            <p className="mt-1 text-[9px] font-bold text-[#C93C8F]">
              Needs Attention
            </p>
          </div>

        </div>

        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-slate-950 py-2.5 text-[9px] font-bold text-white transition hover:bg-[#C93C8F]">
          View Charger
          <ArrowRight className="h-3 w-3" />
        </button>

      </div>

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

        <section className="relative overflow-hidden bg-[#07111F] pt-24 md:pt-28">

          {/* GLOWS */}

          <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#1E5FA8]/20 blur-[130px]" />

          <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#7A3FAF]/20 blur-[130px]" />

          <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[450px] w-[600px] -translate-x-1/2 rounded-full bg-[#C93C8F]/10 blur-[130px]" />

          {/* GRID */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">

            <div className="grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">

              {/* HERO CONTENT */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
              >

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2">

                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                    <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-[8px] font-black uppercase tracking-[0.18em] text-blue-200">
                    EV DOCK CMS
                  </span>

                </div>

                <h1 className="mt-6 text-4xl font-black leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl lg:text-[60px]">

                  Run your EV network.

                  <span className="block bg-gradient-to-r from-[#5EA7F5] via-[#9B7BEA] to-[#E27BB7] bg-clip-text text-transparent">
                    From one control center.
                  </span>

                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                  EV Dock CMS gives charging operators one connected place
                  to monitor chargers, manage sessions, understand network
                  performance and respond to operational issues.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">

                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-1"
                  >
                    Request a Demo

                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <a
                    href="#capabilities"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/[0.09]"
                  >
                    Explore CMS
                  </a>

                </div>

                {/* SMALL VALUE STRIP */}

                <div className="mt-9 grid grid-cols-3 border-t border-white/10 pt-6">

                  <div>
                    <p className="text-xs font-black text-white">
                      Monitor
                    </p>

                    <p className="mt-1 text-[8px] text-slate-500">
                      Network health
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-4">
                    <p className="text-xs font-black text-white">
                      Manage
                    </p>

                    <p className="mt-1 text-[8px] text-slate-500">
                      Charging activity
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-4">
                    <p className="text-xs font-black text-white">
                      Analyze
                    </p>

                    <p className="mt-1 text-[8px] text-slate-500">
                      Business performance
                    </p>
                  </div>

                </div>

              </motion.div>

              {/* DASHBOARD */}

              <CMSDashboard />

            </div>

          </div>
        </section>

        {/* =====================================================
            CMS INTRO
        ====================================================== */}

        <section className="bg-white py-20 md:py-24">

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8">

            <SectionHeading
              eyebrow="WHY EV DOCK CMS"
              title="Everything your team needs."
              highlight="Nothing you don't."
              centered={false}
            />

            <div>

              <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Managing an EV charging network means keeping track of
                infrastructure, charging sessions, customers, payments and
                performance at the same time. EV Dock CMS brings those
                operational workflows together into one focused control
                center.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {[
                  "Real-time operations",
                  "Network visibility",
                  "Business analytics",
                  "Role-based access",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />

                    <span className="text-[9px] font-bold text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            OPERATE
        ====================================================== */}

        <section className="bg-slate-50 py-20 md:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                <Activity className="h-3 w-3 text-[#1E5FA8]" />

                <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#1E5FA8]">
                  HOW YOUR TEAM WORKS
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
                From network status

                <span className="block bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F] bg-clip-text text-transparent">
                  to business decisions.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                A focused workflow for the people operating your charging
                network every day.
              </p>

            </div>

            {/* MONITOR */}

            <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">

              <FeatureVisual type="monitor" />

              <div>

                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#1E5FA8]">
                  01 / MONITOR
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950">
                  Know what's happening across every charger.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Get a live view of your charging infrastructure and quickly
                  understand which chargers are online, charging, available
                  or need attention.
                </p>

                <div className="mt-6 space-y-3">

                  {[
                    "Live charger availability",
                    "Station status",
                    "Network health",
                    "Operational visibility",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />

                      <span className="text-xs font-bold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* MANAGE */}

            <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">

              <div className="order-2 lg:order-1">

                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#7A3FAF]">
                  02 / MANAGE
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950">
                  Keep every charging session visible.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Track active sessions, energy delivery and charging
                  progress from a single operational view, helping your team
                  stay on top of network activity.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                  {[
                    {
                      icon: BatteryCharging,
                      title: "Live Sessions",
                    },
                    {
                      icon: Zap,
                      title: "Energy Delivery",
                    },
                    {
                      icon: Wallet,
                      title: "Revenue Data",
                    },
                    {
                      icon: RefreshCw,
                      title: "Centralized Control",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white p-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50">
                          <Icon className="h-3.5 w-3.5 text-[#7A3FAF]" />
                        </div>

                        <span className="text-[10px] font-bold text-slate-700">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}

                </div>

              </div>

              <div className="order-1 lg:order-2">

                <FeatureVisual type="manage" />

              </div>

            </div>

            {/* ANALYZE */}

            <div className="mt-20 grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">

              <FeatureVisual type="analyze" />

              <div>

                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#4B4FAE]">
                  03 / ANALYZE
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950">
                  Turn charging activity into useful insights.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Understand how your network performs through clear
                  operational data, utilization trends, energy usage and
                  commercial performance.
                </p>

                <div className="mt-6 space-y-3">

                  {[
                    "Energy consumption",
                    "Charger utilization",
                    "Charging sessions",
                    "Revenue performance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#4B4FAE]" />

                      <span className="text-xs font-bold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* ACT */}

            <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">

              <div className="order-2 lg:order-1">

                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#C93C8F]">
                  04 / ACT
                </p>

                <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950">
                  Spot issues before they become downtime.
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Bring important operational events to your attention so
                  your team can identify charger problems and respond faster.
                </p>

                <div className="mt-6 space-y-3">

                  {[
                    "Operational alerts",
                    "Charger error visibility",
                    "Offline charger detection",
                    "Faster response",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#C93C8F]" />

                      <span className="text-xs font-bold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

              <div className="order-1 lg:order-2">

                <FeatureVisual type="act" />

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            CAPABILITIES
        ====================================================== */}

        <section
          id="capabilities"
          className="relative overflow-hidden bg-white py-20 md:py-28"
        >

          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-50 blur-[110px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <SectionHeading
                eyebrow="CMS CAPABILITIES"
                title="Everything your charging operation needs."
                highlight="In one connected CMS."
                description="Manage infrastructure, customers, sessions, payments, analytics and network connectivity from one operational platform."
              />

            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {cmsCapabilities.map((feature, index) => {
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
                      duration: 0.5,
                      delay: index * 0.04,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="group relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-xl"
                  >

                    <div
                      className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 blur-[50px] transition duration-500 group-hover:opacity-20`}
                    />

                    <div className="relative">

                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-md`}
                      >
                        <Icon className="h-4.5 w-4.5 text-white" />
                      </div>

                      <h3 className="mt-5 text-sm font-black text-slate-950">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {feature.text}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            BUSINESS VALUE
        ====================================================== */}

        <section className="bg-[#07111F] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* CENTERED SECTION HEADING */}
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading
                eyebrow="BUILT FOR OPERATIONS"
                title="Make better decisions"
                titleClassName="text-white"
                highlight="with better visibility."
                description="EV Dock CMS connects operational information with the business data your team needs to run a reliable and scalable charging network."
                align="center"
              />
            </div>

            {/* ONE ROW / TWO COLUMNS */}
            <div className="mt-14 grid gap-8 lg:grid-cols-2">

              {/* COLUMN 1 — OPERATIONAL BENEFITS */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-7">
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                    Operational Intelligence
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    Everything your team needs to operate better
                  </h3>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: Activity,
                      title: "Improve Network Visibility",
                      text: "Understand the status of your infrastructure in real time.",
                    },
                    {
                      icon: Gauge,
                      title: "Improve Utilization",
                      text: "Identify charging patterns and network performance.",
                    },
                    {
                      icon: CircleDollarSign,
                      title: "Understand Revenue",
                      text: "Connect charging activity with commercial performance.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Control Access",
                      text: "Give the right teams the right level of platform access.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-400/10">
                          <Icon className="h-4 w-4 text-blue-300" />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-white">
                            {item.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-400">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* COLUMN 2 — BUSINESS METRICS */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-7">
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                    Business Performance
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    A complete view of your charging network
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      value: "24/7",
                      title: "Network Visibility",
                      text: "Keep your operations team informed.",
                      icon: Activity,
                    },
                    {
                      value: "Live",
                      title: "Charger Status",
                      text: "See infrastructure activity in real time.",
                      icon: Zap,
                    },
                    {
                      value: "360°",
                      title: "Business View",
                      text: "Connect operational and commercial data.",
                      icon: BarChart3,
                    },
                    {
                      value: "1",
                      title: "Control Center",
                      text: "Manage your charging ecosystem centrally.",
                      icon: LayoutDashboard,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.25 }}
                        className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.07]"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10">
                            <Icon className="h-4 w-4 text-blue-300" />
                          </div>

                          <span className="text-2xl font-black text-white">
                            {item.value}
                          </span>
                        </div>

                        <h3 className="mt-5 text-sm font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-xs leading-5 text-slate-400">
                          {item.text}
                        </p>

                        <div className="mt-4 h-px w-8 bg-blue-400/40 transition-all duration-300 group-hover:w-14" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* =====================================================
            WHO IT IS FOR
        ====================================================== */}

        <section className="bg-slate-50 py-20 md:py-24">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-3xl text-center">

              <SectionHeading
                eyebrow="BUILT FOR EV OPERATORS"
                title="One CMS for"
                highlight="different charging businesses."
                description="Whether you operate charging stations, manage a growing network or own EV infrastructure, EV Dock CMS gives your team a centralized operational view."
              />

            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">

              {[
                {
                  icon: Network,
                  title: "CPOs",
                  subtitle: "Charging Point Operators",
                  text: "Monitor network performance, charger health, sessions, customers and revenue from one control center.",
                },
                {
                  icon: LayoutDashboard,
                  title: "Franchise Owners",
                  subtitle: "EV Charging Franchise",
                  text: "Manage multiple charging locations with consistent operational visibility and centralized reporting.",
                },
                {
                  icon: PlugZap,
                  title: "Charger Owners",
                  subtitle: "EV Infrastructure",
                  text: "Stay informed about charger availability, usage, sessions and station performance.",
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
                    whileHover={{
                      y: -5,
                    }}
                    className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-xl"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1E5FA8]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-3xl font-black text-slate-100">
                        0{index + 1}
                      </span>

                    </div>

                    <h3 className="mt-5 text-lg font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#1E5FA8]">
                      {item.subtitle}
                    </p>

                    <p className="mt-3 text-xs leading-6 text-slate-500">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="px-5 py-16 md:px-8 md:py-20">

          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-gradient-to-r from-[#07111F] via-[#1E5FA8] to-[#4B4FAE]">

            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#C93C8F]/20 blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#7A3FAF]/20 blur-[100px]" />

            <div className="relative grid items-center gap-8 px-7 py-10 sm:px-10 md:py-14 lg:grid-cols-[1fr_auto] lg:px-14">

              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5">

                  <Zap className="h-3 w-3 text-blue-200" />

                  <span className="text-[8px] font-black uppercase tracking-[0.18em] text-blue-100">
                    EV DOCK CMS
                  </span>

                </div>

                <h2 className="mt-5 max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                  Ready to take control of your charging network?
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100/75">
                  Give your operations team the visibility and tools they
                  need to manage a smarter EV charging network.
                </p>

              </div>

              <Link
                to="/contact-us"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-1"
              >
                Request a Demo

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default CMS;

