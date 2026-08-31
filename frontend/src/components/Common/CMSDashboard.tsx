import React from "react";
import { motion } from "framer-motion";

import {
  AlertTriangle,
  BarChart3,
  BatteryCharging,
  CheckCircle2,
  LayoutDashboard,
  MapPin,
  PlugZap,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const sidebarItems = [
  {
    icon: LayoutDashboard,
    label: "Overview",
  },
  {
    icon: PlugZap,
    label: "Chargers",
  },
  {
    icon: MapPin,
    label: "Stations",
  },
  {
    icon: BatteryCharging,
    label: "Sessions",
  },
  {
    icon: Users,
    label: "Customers",
  },
  {
    icon: BarChart3,
    label: "Analytics",
  },
  {
    icon: AlertTriangle,
    label: "Alerts",
  },
];

const CMSDashboard = () => {
  const stats = [
    {
      value: "248",
      label: "Chargers",
      icon: PlugZap,
    },
    {
      value: "186",
      label: "Online",
      icon: CheckCircle2,
    },
    {
      value: "42",
      label: "Charging",
      icon: BatteryCharging,
    },
    {
      value: "12.8",
      label: "MWh Today",
      icon: Zap,
    },
  ];

  const bars = [
    35, 48, 42, 62, 55, 72,
    66, 81, 74, 91, 82, 100,
  ];

  return (
    <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_35px_100px_rgba(15,23,42,0.16)]">

      {/* TOP BAR */}
      <div className="flex h-12 items-center justify-between border-b border-slate-100 px-3 sm:px-5">

        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F]">
            <Zap className="h-3.5 w-3.5 text-white" />
          </div>

          <div>
            <p className="text-[6px] font-black uppercase tracking-[0.18em] text-slate-400">
              EV DOCK
            </p>

            <p className="text-[8px] font-black text-slate-900">
              Charging CMS
            </p>
          </div>
        </div>

        <div className="hidden h-7 w-44 items-center rounded-lg bg-slate-50 px-3 sm:flex">
          <span className="text-[6px] text-slate-400">
            Search chargers, stations...
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50">
            <AlertTriangle className="h-3 w-3 text-slate-500" />

            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[#C93C8F]" />
          </div>

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#1E5FA8] to-[#7A3FAF]">
            <span className="text-[6px] font-black text-white">
              ED
            </span>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[145px_1fr]">

        {/* SIDEBAR */}
        <aside className="border-r border-slate-100 bg-slate-50 p-2 sm:p-3">

          <p className="mb-3 hidden px-2 text-[6px] font-black uppercase tracking-[0.18em] text-slate-400 sm:block">
            Control Center
          </p>

          <div className="space-y-1">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`flex items-center justify-center gap-2 rounded-lg px-2 py-2 sm:justify-start ${
                    index === 0
                      ? "bg-blue-50 text-[#1E5FA8]"
                      : "text-slate-400"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />

                  <span className="hidden text-[7px] font-bold sm:block">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-5 hidden rounded-lg bg-white p-2 sm:block">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3 text-emerald-500" />

              <span className="text-[6px] font-bold text-slate-600">
                Secure Access
              </span>
            </div>

            <p className="mt-1 text-[5px] leading-3 text-slate-400">
              Role-based administration
            </p>
          </div>
        </aside>

        {/* DASHBOARD CONTENT */}
        <div className="min-w-0 bg-white p-3 sm:p-5">

          {/* HEADER */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[6px] font-black uppercase tracking-[0.18em] text-slate-400">
                NETWORK OVERVIEW
              </p>

              <h3 className="mt-1 text-sm font-black text-slate-950 sm:text-lg">
                Dashboard
              </h3>

              <p className="mt-0.5 text-[6px] text-slate-400 sm:text-[7px]">
                Real-time charging infrastructure
              </p>
            </div>

            <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

              <span className="text-[5px] font-black text-emerald-600">
                NETWORK ONLINE
              </span>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 sm:p-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-50">
                      <Icon className="h-3 w-3 text-[#1E5FA8]" />
                    </div>

                    <span className="text-[5px] font-black text-emerald-500">
                      +12%
                    </span>
                  </div>

                  <p className="mt-2 text-base font-black text-slate-900 sm:text-lg">
                    {item.value}
                  </p>

                  <p className="text-[6px] text-slate-400">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CHART + HEALTH */}
          <div className="mt-2 grid gap-2 lg:grid-cols-[1.4fr_.6fr]">

            {/* CHART */}
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[8px] font-black text-slate-900">
                    Charging Activity
                  </p>

                  <p className="mt-0.5 text-[5px] text-slate-400">
                    Network sessions
                  </p>
                </div>

                <BarChart3 className="h-3.5 w-3.5 text-[#4B4FAE]" />
              </div>

              <div className="mt-5 flex h-24 items-end gap-1 sm:h-28 sm:gap-1.5">
                {bars.map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.04,
                    }}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-[#1E5FA8] via-[#4B4FAE] to-[#B57EDC]"
                  />
                ))}
              </div>
            </div>

            {/* HEALTH */}
            <div className="rounded-xl border border-slate-100 bg-[#07111F] p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[8px] font-black text-white">
                    Network Health
                  </p>

                  <p className="mt-0.5 text-[5px] text-slate-500">
                    Live availability
                  </p>
                </div>

                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              </div>

              <div className="mt-5">
                <p className="text-2xl font-black text-white">
                  99.2%
                </p>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[99.2%] rounded-full bg-gradient-to-r from-emerald-400 to-blue-400" />
                </div>

                <div className="mt-4 space-y-2">
                  {[
                    ["Online", "186"],
                    ["Charging", "42"],
                    ["Attention", "20"],
                  ].map(([label, value], index) => (
                    <div
                      key={label}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            index === 0
                              ? "bg-emerald-400"
                              : index === 1
                              ? "bg-blue-400"
                              : "bg-pink-400"
                          }`}
                        />

                        <span className="text-[6px] text-slate-500">
                          {label}
                        </span>
                      </div>

                      <span className="text-[6px] font-black text-slate-300">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* STATIONS */}
          <div className="mt-2 overflow-hidden rounded-xl border border-slate-100">

            <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
              <div>
                <p className="text-[8px] font-black text-slate-900">
                  Station Performance
                </p>

                <p className="mt-0.5 text-[5px] text-slate-400">
                  Recent network activity
                </p>
              </div>

              <span className="text-[5px] font-black text-[#1E5FA8]">
                View All
              </span>
            </div>

            <div className="grid grid-cols-[1.5fr_.7fr_.8fr] bg-slate-50 px-3 py-2">
              <span className="text-[5px] font-black uppercase text-slate-400">
                Station
              </span>

              <span className="text-[5px] font-black uppercase text-slate-400">
                Chargers
              </span>

              <span className="text-[5px] font-black uppercase text-slate-400">
                Status
              </span>
            </div>

            {[
              ["EV Dock Andheri", "24", "Online"],
              ["EV Dock Hinjewadi", "18", "Charging"],
              ["EV Dock Whitefield", "31", "Online"],
            ].map(([station, chargers, status]) => (
              <div
                key={station}
                className="grid grid-cols-[1.5fr_.7fr_.8fr] items-center border-t border-slate-50 px-3 py-2"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-50">
                    <Zap className="h-2.5 w-2.5 text-[#1E5FA8]" />
                  </div>

                  <span className="truncate text-[5.5px] font-bold text-slate-700">
                    {station}
                  </span>
                </div>

                <span className="text-[5.5px] text-slate-500">
                  {chargers}
                </span>

                <span
                  className={`w-fit rounded-full px-1.5 py-0.5 text-[4.5px] font-black ${
                    status === "Online"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {status}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default CMSDashboard;