import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  CreditCard,
  LayoutDashboard,
  MapPin,
  Network,
  Rocket,
  Search,
  Settings,
  Smartphone,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =========================================================
   TYPES
========================================================= */

type IconType = React.ComponentType<{
  className?: string;
}>;

/* =========================================================
   CMS MENU
========================================================= */

const cmsMenu: {
  label: string;
  icon: IconType;
  active?: boolean;
}[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    label: "Chargers",
    icon: Zap,
  },
  {
    label: "Stations",
    icon: MapPin,
  },
  {
    label: "Customers",
    icon: Users,
  },
  {
    label: "Payments",
    icon: CreditCard,
  },
  {
    label: "Analytics",
    icon: BarChart3,
  },
  {
    label: "OCPI Network",
    icon: Network,
  },
];

/* =========================================================
   CMS DASHBOARD
========================================================= */

const CMSDashboard = () => {
  const stats = [
    {
      value: "248",
      label: "Total Chargers",
      change: "+12.8%",
      icon: Zap,
    },
    {
      value: "186",
      label: "Online",
      change: "+8.4%",
      icon: CheckCircle2,
    },
    {
      value: "42",
      label: "Active Sessions",
      change: "+16.2%",
      icon: Smartphone,
    },
    {
      value: "₹8.4L",
      label: "Revenue",
      change: "+21.5%",
      icon: Wallet,
    },
  ];

  const stations = [
    ["EV Dock Andheri", "24", "Online", "₹1.42L"],
    ["EV Dock Hinjewadi", "18", "Charging", "₹98.6K"],
    ["EV Dock Whitefield", "31", "Online", "₹1.87L"],
    ["EV Dock Gurgaon", "16", "Online", "₹76.4K"],
  ];

  return (
    <div className="w-full overflow-hidden rounded-[14px] border border-slate-200 bg-[#F7F9FC] text-left">
      {/* TOP BAR */}
      <div className="flex h-9 items-center justify-between border-b border-slate-200 bg-white px-2.5">
        <div className="flex items-center gap-1.5">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F]">
            <Zap className="h-2.5 w-2.5 text-white" />
          </div>

          <div className="hidden sm:block">
            <p className="text-[4px] font-black uppercase tracking-[0.18em] text-slate-400">
              EV DOCK
            </p>

            <p className="text-[6px] font-black text-slate-900">
              Charging CMS
            </p>
          </div>
        </div>

        <div className="hidden h-5 w-32 items-center gap-1.5 rounded-md bg-slate-50 px-2 md:flex">
          <Search className="h-2 w-2 text-slate-400" />

          <span className="text-[4px] text-slate-400">
            Search chargers, stations...
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="relative flex h-5 w-5 items-center justify-center rounded-md bg-slate-50">
            <Bell className="h-2 w-2 text-slate-500" />

            <span className="absolute right-0.5 top-0.5 h-1 w-1 rounded-full bg-[#C93C8F]" />
          </div>

          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#1E5FA8] to-[#7A3FAF]">
            <span className="text-[4px] font-black text-white">ED</span>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="flex">
        {/* SIDEBAR */}
        <aside className="hidden w-[92px] shrink-0 border-r border-slate-200 bg-white p-1.5 sm:block">
          <div className="mb-2 rounded-md bg-slate-50 p-1.5">
            <p className="text-[3.5px] font-black uppercase tracking-[0.15em] text-slate-400">
              WORKSPACE
            </p>

            <div className="mt-0.5 flex items-center justify-between">
              <span className="text-[4.5px] font-bold text-slate-700">
                EV Dock Network
              </span>

              <ChevronDown className="h-2 w-2 text-slate-400" />
            </div>
          </div>

          <p className="mb-1 px-1 text-[3.5px] font-black uppercase tracking-[0.15em] text-slate-400">
            MENU
          </p>

          <div className="space-y-0.5">
            {cmsMenu.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-1.5 rounded-md px-1.5 py-1 ${
                    item.active
                      ? "bg-blue-50 text-[#1E5FA8]"
                      : "text-slate-400"
                  }`}
                >
                  <Icon className="h-2 w-2" />

                  <span className="text-[4.5px] font-bold">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </aside>

        {/* MAIN */}
        <main className="min-w-0 flex-1 p-2.5">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[4px] font-black uppercase tracking-[0.16em] text-slate-400">
                  OVERVIEW
                </span>

                <span className="rounded-full bg-emerald-50 px-1 py-0.5 text-[3.5px] font-black text-emerald-600">
                  LIVE
                </span>
              </div>

              <h2 className="mt-0.5 text-[12px] font-black text-slate-950">
                Dashboard
              </h2>

              <p className="text-[4px] text-slate-400">
                Monitor your complete charging network.
              </p>
            </div>

            <button className="hidden items-center gap-1 rounded-md bg-[#1E5FA8] px-2 py-1 text-[4px] font-bold text-white sm:flex">
              Export
            </button>
          </div>

          {/* KPI */}
          <div className="mt-2 grid grid-cols-2 gap-1 sm:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-md border border-slate-200 bg-white p-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-4 w-4 items-center justify-center rounded bg-blue-50">
                      <Icon className="h-2 w-2 text-[#1E5FA8]" />
                    </div>

                    <span className="text-[3.5px] font-black text-emerald-500">
                      {item.change}
                    </span>
                  </div>

                  <p className="mt-1 text-[9px] font-black text-slate-900">
                    {item.value}
                  </p>

                  <p className="text-[4px] text-slate-400">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CHART */}
          <div className="mt-1 grid gap-1 sm:grid-cols-[1.4fr_.6fr]">
            <div className="rounded-md border border-slate-200 bg-white p-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[5px] font-black text-slate-800">
                    Revenue Overview
                  </p>

                  <p className="text-[3.5px] text-slate-400">
                    Network revenue — last 30 days
                  </p>
                </div>

                <span className="rounded bg-slate-50 px-1 py-0.5 text-[3.5px] font-bold text-slate-400">
                  30 Days
                </span>
              </div>

              <div className="relative mt-1.5 h-[65px]">
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[1, 2, 3, 4].map((line) => (
                    <div
                      key={line}
                      className="h-px bg-slate-100"
                    />
                  ))}
                </div>

                <svg
                  viewBox="0 0 500 100"
                  className="relative h-full w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="cmsRevenue"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#4B4FAE"
                        stopOpacity=".25"
                      />

                      <stop
                        offset="100%"
                        stopColor="#4B4FAE"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 78 C35 70 50 74 80 59 C110 45 130 62 160 50 C195 35 215 47 245 39 C285 27 305 48 335 31 C370 14 395 31 425 22 C455 12 475 19 500 7 L500 100 L0 100 Z"
                    fill="url(#cmsRevenue)"
                  />

                  <path
                    d="M0 78 C35 70 50 74 80 59 C110 45 130 62 160 50 C195 35 215 47 245 39 C285 27 305 48 335 31 C370 14 395 31 425 22 C455 12 475 19 500 7"
                    fill="none"
                    stroke="#4B4FAE"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* NETWORK HEALTH */}
            <div className="rounded-md border border-slate-200 bg-white p-2">
              <p className="text-[5px] font-black text-slate-800">
                Network Health
              </p>

              <p className="text-[3.5px] text-slate-400">
                Live charger status
              </p>

              <div className="mt-2 flex justify-center">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-[5px] border-emerald-100">
                  <div className="absolute inset-[-5px] rounded-full border-[5px] border-emerald-500 border-b-transparent border-r-transparent rotate-[-25deg]" />

                  <div className="text-center">
                    <p className="text-[10px] font-black text-slate-900">
                      94%
                    </p>

                    <p className="text-[3.5px] text-slate-400">
                      Uptime
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-2 space-y-1">
                {[
                  ["Online", "186", "bg-emerald-500"],
                  ["Charging", "42", "bg-blue-500"],
                  ["Offline", "12", "bg-red-400"],
                ].map(([label, value, color]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-1">
                      <span
                        className={`h-1 w-1 rounded-full ${color}`}
                      />

                      <span className="text-[3.5px] text-slate-400">
                        {label}
                      </span>
                    </div>

                    <span className="text-[4px] font-black text-slate-700">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STATIONS */}
          <div className="mt-1 overflow-hidden rounded-md border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-2 py-1.5">
              <div>
                <p className="text-[5px] font-black text-slate-800">
                  Station Performance
                </p>

                <p className="text-[3.5px] text-slate-400">
                  Recent station activity
                </p>
              </div>

              <span className="text-[3.5px] font-bold text-[#1E5FA8]">
                View All
              </span>
            </div>

            <div className="grid grid-cols-[1.4fr_.6fr_.8fr_.7fr] border-b border-slate-100 bg-slate-50 px-2 py-1">
              {["Station", "Chargers", "Status", "Revenue"].map(
                (heading) => (
                  <span
                    key={heading}
                    className="text-[3.5px] font-black uppercase text-slate-400"
                  >
                    {heading}
                  </span>
                )
              )}
            </div>

            {stations.map(
              ([station, chargers, status, revenue]) => (
                <div
                  key={station}
                  className="grid grid-cols-[1.4fr_.6fr_.8fr_.7fr] items-center border-b border-slate-50 px-2 py-1.5 last:border-0"
                >
                  <div className="flex min-w-0 items-center gap-1">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-blue-50">
                      <Zap className="h-2 w-2 text-[#1E5FA8]" />
                    </div>

                    <span className="truncate text-[4px] font-bold text-slate-700">
                      {station}
                    </span>
                  </div>

                  <span className="text-[4px] text-slate-500">
                    {chargers}
                  </span>

                  <span
                    className={`w-fit rounded-full px-1 py-0.5 text-[3px] font-black ${
                      status === "Online"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {status}
                  </span>

                  <span className="text-right text-[4px] font-black text-slate-700">
                    {revenue}
                  </span>
                </div>
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

/* =========================================================
   LAPTOP
========================================================= */

const CMSLaptop = () => {
  return (
    <div className="relative mx-auto w-full max-w-[590px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-[100px]" />

      <motion.div
        initial={{
          opacity: 0,
          x: 30,
          scale: 0.97,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative"
      >
        {/* SCREEN */}
        <div className="rounded-[18px] border-[5px] border-slate-800 bg-slate-900 p-1.5 shadow-[0_35px_80px_rgba(0,0,0,.42)]">
          <div className="relative overflow-hidden rounded-[10px] bg-white">
            <div className="absolute left-1/2 top-2 z-20 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-slate-700" />

            <CMSDashboard />
          </div>
        </div>

        {/* BASE */}
        <div className="relative mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-[20px] bg-gradient-to-b from-slate-700 to-slate-950 shadow-xl">
          <div className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-xl bg-slate-600" />
        </div>

        {/* LIVE CARD */}
        <div className="absolute -bottom-5 left-4 hidden items-center gap-2 rounded-full border border-white/10 bg-[#101D2E]/95 px-3 py-2 shadow-xl backdrop-blur-xl sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
          </span>

          <span className="text-[8px] font-bold text-slate-300">
            Network Live
          </span>
        </div>

        {/* REVENUE CARD */}
        <motion.div
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
            duration: 0.6,
            delay: 0.5,
          }}
          className="absolute -bottom-5 right-0 z-20 hidden rounded-2xl border border-white/10 bg-[#101D2E]/95 p-3 shadow-[0_15px_40px_rgba(0,0,0,.3)] backdrop-blur-xl sm:block"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400/10">
              <TrendingUp className="h-4 w-4 text-emerald-400" />
            </div>

            <div>
              <p className="text-[7px] font-black uppercase tracking-wider text-slate-500">
                NETWORK REVENUE
              </p>

              <div className="mt-0.5 flex items-end gap-1.5">
                <span className="text-sm font-black text-white">
                  ₹8.4L
                </span>

                <span className="mb-0.5 text-[7px] font-bold text-emerald-400">
                  +21.5%
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

/* =========================================================
   MOBILE APP
========================================================= */

const MobileApp = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-[410px] justify-center">
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-100 blur-[90px]" />

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
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative z-10 w-[220px] rounded-[30px] border-[6px] border-slate-800 bg-slate-950 p-1.5 shadow-[0_30px_70px_rgba(15,23,42,.22)]"
      >
        <div className="overflow-hidden rounded-[23px] bg-white">
          {/* STATUS */}
          <div className="flex items-center justify-between bg-slate-950 px-4 py-2 text-[6px] text-white">
            <span>9:41</span>
            <span>● ● ▰</span>
          </div>

          {/* HEADER */}
          <div className="px-4 pb-3.5 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[5px] font-black uppercase tracking-[0.18em] text-slate-400">
                  EV DOCK
                </p>

                <h3 className="mt-1 text-base font-black text-slate-950">
                  Find a charger
                </h3>
              </div>

              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
                <Bell className="h-3 w-3 text-[#1E5FA8]" />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-50 px-2.5 py-2">
              <Search className="h-2.5 w-2.5 text-slate-400" />

              <span className="text-[6px] text-slate-400">
                Search location...
              </span>
            </div>
          </div>

          {/* MAP */}
          <div className="relative mx-3.5 h-[160px] overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50">
            <div className="absolute left-[-20px] top-[55px] h-px w-[280px] rotate-[15deg] bg-blue-200" />

            <div className="absolute left-[-20px] top-[110px] h-px w-[280px] -rotate-[12deg] bg-violet-200" />

            <div className="absolute left-[80px] top-[-20px] h-[230px] w-px rotate-[22deg] bg-pink-200" />

            {[
              "left-5 top-5",
              "right-6 top-8",
              "left-14 bottom-6",
              "right-12 bottom-5",
            ].map((position, index) => (
              <div
                key={index}
                className={`absolute ${position} flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#1E5FA8] to-[#7A3FAF] shadow-lg`}
              >
                <Zap className="h-2.5 w-2.5 text-white" />
              </div>
            ))}

            <div className="absolute left-1/2 top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
              <div className="h-2.5 w-2.5 rounded-full bg-[#C93C8F]" />
            </div>
          </div>

          {/* NEARBY */}
          <div className="px-4 pb-3.5 pt-3.5">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-black text-slate-900">
                Nearby stations
              </p>

              <span className="text-[5px] font-bold text-[#1E5FA8]">
                View map
              </span>
            </div>

            <div className="mt-2.5 rounded-lg border border-slate-100 p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
                    <Zap className="h-3 w-3 text-[#1E5FA8]" />
                  </div>

                  <div>
                    <p className="text-[6px] font-black text-slate-900">
                      EV Charging Station
                    </p>

                    <p className="mt-0.5 text-[4px] text-slate-400">
                      0.8 km • 6 connectors
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-50 px-1.5 py-1 text-[4px] font-black text-emerald-600">
                  AVAILABLE
                </span>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex items-center justify-around border-t border-slate-100 px-2.5 py-2.5">
            <div className="flex flex-col items-center gap-1 text-[#1E5FA8]">
              <MapPin className="h-3 w-3" />

              <span className="text-[4px] font-bold">
                Explore
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 text-slate-300">
              <Clock3 className="h-3 w-3" />

              <span className="text-[4px] font-bold">
                History
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 text-slate-300">
              <CreditCard className="h-3 w-3" />

              <span className="text-[4px] font-bold">
                Payments
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 text-slate-300">
              <Users className="h-3 w-3" />

              <span className="text-[4px] font-bold">
                Profile
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SESSION CARD */}
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
        transition={{
          duration: 0.6,
        }}
        className="absolute right-0 top-20 hidden w-[135px] rotate-6 rounded-[20px] border-[4px] border-slate-700 bg-slate-950 p-1 shadow-2xl lg:block"
      >
        <div className="overflow-hidden rounded-[16px] bg-white">
          <div className="bg-slate-950 px-2.5 py-2.5 text-center">
            <span className="text-[5px] font-bold text-white">
              Charging Session
            </span>
          </div>

          <div className="p-2.5">
            <div className="flex justify-center">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-blue-100">
                <div className="absolute inset-[-5px] rounded-full border-[5px] border-[#1E5FA8] border-r-transparent border-b-transparent rotate-[-35deg]" />

                <div className="text-center">
                  <p className="text-xs font-black text-slate-900">
                    72%
                  </p>

                  <p className="text-[4px] text-slate-400">
                    Battery
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-1">
              {[
                ["Energy", "34.8 kWh"],
                ["Cost", "₹428"],
                ["Time", "28 min"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between"
                >
                  <span className="text-[4px] text-slate-400">
                    {label}
                  </span>

                  <span className="text-[4px] font-black text-slate-700">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-3 w-full rounded-md bg-[#1E5FA8] py-1.5 text-[5px] font-bold text-white">
              End Session
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

/* =========================================================
   EYEBROW
========================================================= */

const Eyebrow = ({
  children,
  dark = false,
  icon: Icon,
}: {
  children: React.ReactNode;
  dark?: boolean;
  icon?: IconType;
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 ${
        dark
          ? "border-white/10 bg-white/[0.05]"
          : "border-blue-100 bg-blue-50"
      }`}
    >
      {Icon ? (
        <Icon
          className={`h-3.5 w-3.5 ${
            dark ? "text-blue-300" : "text-[#1E5FA8]"
          }`}
        />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      )}

      <span
        className={`text-[8px] font-black uppercase tracking-[0.18em] ${
          dark ? "text-blue-200" : "text-[#1E5FA8]"
        }`}
      >
        {children}
      </span>
    </div>
  );
};

/* =========================================================
   GLOBE ICON
========================================================= */

const GlobeIcon = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20" />
      <path d="M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  );
};

/* =========================================================
   WHITE LABEL PAGE
========================================================= */

const WhiteLabel: React.FC = () => {
  const appFeatures = [
    {
      icon: MapPin,
      title: "Find Chargers",
      text: "Discover nearby charging stations and available connectors.",
    },
    {
      icon: Zap,
      title: "Start Charging",
      text: "Start and manage charging sessions with a simple experience.",
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      text: "Provide a smooth payment experience for every customer.",
    },
    {
      icon: Clock3,
      title: "Charging History",
      text: "Give customers visibility into previous charging sessions.",
    },
  ];

  const ocpiFeatures = [
    "Roaming-ready network connectivity",
    "Station and connector data exchange",
    "Session and charging information",
    "Partner network interoperability",
  ];

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#07111F] pt-24 md:pt-28">
          {/* BACKGROUND */}
          <div className="pointer-events-none absolute -left-32 top-0 h-[380px] w-[380px] rounded-full bg-[#1E5FA8]/20 blur-[110px]" />

          <div className="pointer-events-none absolute right-[-120px] top-[15%] h-[420px] w-[420px] rounded-full bg-[#7A3FAF]/20 blur-[120px]" />

          <div className="pointer-events-none absolute bottom-[-180px] left-[35%] h-[380px] w-[380px] rounded-full bg-[#C93C8F]/10 blur-[120px]" />

          {/* GRID */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-24">
            <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">

              {/* HERO CONTENT */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="max-w-xl"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-300">
                    WHITE-LABEL EV PLATFORM
                  </span>
                </div>

                <h1 className="mt-7 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl md:text-[56px]">
                  Your Brand.

                  <span className="block bg-gradient-to-r from-[#5EA7F5] via-[#9B7BEA] to-[#E27BB7] bg-clip-text text-transparent">
                    Our Technology.
                  </span>
                </h1>

                <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                  Launch your own EV charging ecosystem with a powerful
                  CMS, branded mobile app and OCPI connectivity — without
                  building the technology from scratch.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_12px_35px_rgba(255,255,255,.12)] transition duration-300 hover:-translate-y-1"
                  >
                    Request a Demo

                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <a
                    href="#platform"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    Explore Platform

                    <ArrowRight
                      size={14}
                      className="text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-white"
                    />
                  </a>
                </div>

                {/* SHORT VALUE POINTS — NO DUPLICATE PRODUCT COPY */}

                <div className="mt-10 grid grid-cols-3 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-sm font-black text-white">
                      Faster
                    </p>

                    <p className="mt-1 text-[9px] text-slate-500">
                      Time to market
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-5">
                    <p className="text-sm font-black text-white">
                      Scalable
                    </p>

                    <p className="mt-1 text-[9px] text-slate-500">
                      Built for growth
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-5">
                    <p className="text-sm font-black text-white">
                      Connected
                    </p>

                    <p className="mt-1 text-[9px] text-slate-500">
                      Ready for roaming
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* HERO VISUAL */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 35,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="relative"
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4B4FAE]/20 blur-[100px]" />

                {/* CONTROL CENTER LABEL */}

                <div className="absolute -left-3 top-8 z-20 hidden rounded-2xl border border-white/10 bg-[#101D2E]/95 p-3 shadow-[0_15px_40px_rgba(0,0,0,.3)] backdrop-blur-xl md:block">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-400/10">
                      <LayoutDashboard className="h-4 w-4 text-blue-300" />
                    </div>

                    <div>
                      <p className="text-[7px] font-black uppercase tracking-wider text-slate-500">
                        CONTROL CENTER
                      </p>

                      <p className="mt-0.5 text-[10px] font-black text-white">
                        EV Dock CMS
                      </p>
                    </div>
                  </div>
                </div>

                <CMSLaptop />
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CMS
        ====================================================== */}

        <section
          id="platform"
          className="relative overflow-hidden bg-white py-20 md:py-24"
        >
          <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-50 blur-[110px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[.78fr_1.22fr]">

              {/* CONTENT */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -25,
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
              >
                <Eyebrow icon={LayoutDashboard}>
                  EV DOCK CMS
                </Eyebrow>

                <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  One platform to run

                  <span className="block bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F] bg-clip-text text-transparent">
                    your entire network.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  Give your operations team a single command center to
                  manage every part of your EV charging business — from
                  charger availability and station operations to customers,
                  pricing, payments and performance.
                </p>

                <div className="mt-7 space-y-3.5">
                  {[
                    {
                      icon: Zap,
                      title: "Live Charger Monitoring",
                      text: "Track charger status, availability and active sessions in real time.",
                    },
                    {
                      icon: MapPin,
                      title: "Station Management",
                      text: "Manage locations, connectors and chargers from one place.",
                    },
                    {
                      icon: BarChart3,
                      title: "Business Analytics",
                      text: "Understand revenue, sessions, energy and station performance.",
                    },
                    {
                      icon: CircleDollarSign,
                      title: "Payments & Revenue",
                      text: "Monitor transactions and commercial performance across your network.",
                    },
                  ].map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="flex gap-3"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1E5FA8]">
                          <Icon className="h-4 w-4" />
                        </div>

                        <div>
                          <h3 className="text-sm font-black text-slate-900">
                            {feature.title}
                          </h3>

                          <p className="mt-0.5 text-xs leading-5 text-slate-500">
                            {feature.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-7">
                  <Link
                    to="/contact-us"
                    className="group inline-flex items-center gap-2 rounded-full bg-[#1E5FA8] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#174d89]"
                  >
                    Explore CMS

                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>

              {/* LAPTOP */}

              <CMSLaptop />
            </div>
          </div>
        </section>

        {/* =====================================================
            MOBILE APP
        ====================================================== */}

        <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F9FF] via-white to-[#F7F3FC] py-20 md:py-24">
          <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#1E5FA8]/10 blur-[110px]" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#7A3FAF]/10 blur-[110px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">

            {/* PHONE */}

            <div className="order-2 lg:order-1">
              <MobileApp />
            </div>

            {/* CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
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
              className="order-1 lg:order-2"
            >
              <Eyebrow icon={Smartphone}>
                BRANDED MOBILE APP
              </Eyebrow>

              <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-4xl">
                A better charging

                <span className="block bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F] bg-clip-text text-transparent">
                  experience for drivers.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                Give EV drivers a simple mobile experience for finding
                stations, starting charging sessions, making payments and
                managing their charging activity.
              </p>

              {/* APP FEATURES */}

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {appFeatures.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        y: -3,
                      }}
                      className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition hover:border-blue-100 hover:shadow-md"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#1E5FA8]">
                        <Icon className="h-4 w-4" />
                      </div>

                      <h3 className="mt-3 text-xs font-black text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <Link
                to="/contact-us"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#1E5FA8] px-5 py-3 text-xs font-bold text-white shadow-lg shadow-blue-900/10 transition hover:-translate-y-0.5 hover:bg-[#174d89]"
              >
                Explore Mobile App

                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            OCPI
        ====================================================== */}

        <section className="bg-[#07111F] py-20 md:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">

            {/* CONTENT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
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
            >
              <Eyebrow dark icon={Network}>
                OCPI CONNECTIVITY
              </Eyebrow>

              <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl">
                Connect beyond

                <span className="block bg-gradient-to-r from-[#5EA7F5] via-[#9B7BEA] to-[#E27BB7] bg-clip-text text-transparent">
                  your own network.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                Extend your charging ecosystem through OCPI connectivity.
                Enable roaming, exchange charging information and connect
                with partners without building the integration layer from
                scratch.
              </p>

              <div className="mt-7 space-y-3">
                {ocpiFeatures.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />

                    <span className="text-xs font-semibold text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-white/[0.1]"
                >
                  Talk to our team

                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* OCPI VISUAL */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
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
              className="relative"
            >
              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-3">
                <div className="rounded-[20px] bg-[#0D1828] p-5">

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[7px] font-black uppercase tracking-[0.18em] text-slate-500">
                        NETWORK CONNECTIVITY
                      </p>

                      <h3 className="mt-1 text-lg font-black text-white">
                        OCPI Network
                      </h3>
                    </div>

                    <div className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[6px] font-black text-emerald-300">
                      CONNECTED
                    </div>
                  </div>

                  {/* NETWORK */}

                  <div className="relative mt-7">

                    {/* CENTRAL NODE */}

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F] shadow-[0_15px_40px_rgba(75,79,174,.35)]">
                      <div className="text-center">
                        <Network className="mx-auto h-6 w-6 text-white" />

                        <p className="mt-1 text-[6px] font-black text-white">
                          YOUR NETWORK
                        </p>
                      </div>
                    </div>

                    {/* CONNECTION LINES */}

                    <div className="absolute left-1/2 top-20 h-16 w-px -translate-x-1/2 bg-gradient-to-b from-[#4B4FAE] to-transparent" />

                    <div className="absolute left-[22%] top-28 h-px w-[56%] bg-gradient-to-r from-transparent via-[#4B4FAE] to-transparent" />

                    {/* PARTNERS */}

                    <div className="mt-14 grid grid-cols-3 gap-3">
                      {[
                        {
                          icon: Zap,
                          title: "CPO",
                        },
                        {
                          icon: Users,
                          title: "eMSP",
                        },
                        {
                          icon: GlobeIcon,
                          title: "Roaming",
                        },
                      ].map((item) => {
                        const Icon = item.icon;

                        return (
                          <div
                            key={item.title}
                            className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center"
                          >
                            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-blue-400/10">
                              <Icon className="h-4 w-4 text-blue-300" />
                            </div>

                            <p className="mt-2 text-[7px] font-bold text-slate-300">
                              {item.title}
                            </p>

                            <span className="mt-1 inline-block rounded-full bg-emerald-400/10 px-1.5 py-0.5 text-[5px] font-bold text-emerald-300">
                              ACTIVE
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            HOW IT WORKS
        ====================================================== */}

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow icon={Rocket}>
                SIMPLE TO LAUNCH
              </Eyebrow>

              <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
                From setup to

                <span className="block bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F] bg-clip-text text-transparent">
                  full-scale operation.
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Get your charging business ready to launch, operate and
                scale through one connected technology platform.
              </p>
            </div>

            <div className="relative mt-10 grid gap-4 md:grid-cols-3">

              {/* CONNECTOR */}

              <div className="absolute left-[16%] right-[16%] top-14 hidden h-px bg-slate-200 md:block" />

              {[
                {
                  number: "01",
                  icon: Settings,
                  title: "Configure",
                  text: "Set up your stations, chargers, pricing, users and business rules.",
                },
                {
                  number: "02",
                  icon: Rocket,
                  title: "Launch",
                  text: "Go live with your CMS, mobile experience and network connectivity.",
                },
                {
                  number: "03",
                  icon: TrendingUp,
                  title: "Scale",
                  text: "Expand your network, monitor performance and grow your customer base.",
                },
              ].map((step) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    whileHover={{
                      y: -4,
                    }}
                    className="relative z-10 rounded-[22px] border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-lg"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F] shadow-lg">
                      <Icon className="h-4.5 w-4.5 text-white" />
                    </div>

                    <p className="mt-4 text-[8px] font-black uppercase tracking-[0.18em] text-slate-400">
                      STEP {step.number}
                    </p>

                    <h3 className="mt-1.5 text-lg font-black text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {step.text}
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

        <section className="px-5 pb-16 md:px-8 md:pb-20">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#07111F]">

            <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#1E5FA8]/25 blur-[110px]" />

            <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[400px] w-[450px] rounded-full bg-[#7A3FAF]/20 blur-[110px]" />

            <div className="relative grid items-center gap-10 px-7 py-12 md:px-12 lg:grid-cols-[1fr_.7fr] lg:px-16 lg:py-16">

              {/* CONTENT */}

              <div>
                <Eyebrow dark>
                  WHITE-LABEL PLATFORM
                </Eyebrow>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                  Ready to build your

                  <span className="block bg-gradient-to-r from-[#5EA7F5] via-[#9B7BEA] to-[#E27BB7] bg-clip-text text-transparent">
                    EV charging brand?
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                  Launch your EV charging ecosystem with a complete
                  technology layer for operations, drivers and network
                  connectivity.
                </p>

                <div className="mt-6">
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
                </div>
              </div>

              {/* SUMMARY */}

              <div className="relative">
                <div className="rounded-[22px] border border-white/10 bg-white/[0.05] p-2.5">
                  <div className="rounded-[17px] bg-[#0D1828] p-5">

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F]">
                        <Zap className="h-4 w-4 text-white" />
                      </div>

                      <div>
                        <p className="text-[6px] font-bold uppercase tracking-[0.18em] text-slate-500">
                          EV DOCK PLATFORM
                        </p>

                        <p className="mt-1 text-sm font-black text-white">
                          Complete EV technology
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 space-y-2">
                      {[
                        "EV Dock CMS",
                        "Branded Mobile App",
                        "Payments & Analytics",
                        "OCPI Connectivity",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] p-2.5"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />

                          <span className="text-[8px] font-bold text-slate-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
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