import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BatteryCharging,
  Bell,
  Check,
  ChevronRight,
  MapPin,
  Smartphone,
  Zap,
} from "lucide-react";
import SectionHeading from "./Common/SectionHeading";
const Franchise = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile control",
      text: "Manage your business on the go.",
      color: "text-[#1E5FA8]",
      bg: "bg-[#1E5FA8]/10",
    },
    {
      icon: Activity,
      title: "Live monitoring",
      text: "Know what's happening across every station.",
      color: "text-[#7A3FAF]",
      bg: "bg-[#7A3FAF]/10",
    },
    {
      icon: Bell,
      title: "Smart alerts",
      text: "Act before small issues become problems.",
      color: "text-[#C93C8F]",
      bg: "bg-[#C93C8F]/10",
    },
  ];

  const stats = [
    {
      value: "502",
      label: "Chargers",
      change: "+12%",
    },
    {
      value: "235",
      label: "Stations",
      change: "+4",
    },
    {
      value: "1,284",
      label: "Sessions",
      change: "+18%",
    },
    {
      value: "₹8.4L",
      label: "Revenue",
      change: "+21%",
    },
  ];

  const mapPins = [
    ["18%", "27%", "#1E5FA8"],
    ["38%", "63%", "#4B4FAE"],
    ["59%", "30%", "#C93C8F"],
    ["74%", "68%", "#7A3FAF"],
    ["82%", "24%", "#1E5FA8"],
  ];

  const status = [
    ["Available", "72", "bg-[#1E5FA8]"],
    ["Charging", "41", "bg-[#4B4FAE]"],
    ["Offline", "15", "bg-[#C93C8F]"],
  ];

  const activity = [
    25, 38, 31, 52, 43, 67, 51, 74,
    63, 82, 71, 91, 76, 95, 84, 100,
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-20 sm:py-24 lg:py-28 font-[Manrope,sans-serif]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ===================================================== */}
              
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
              >
              <SectionHeading
                centered 
                eyebrow="FRANCHISE"
                title="Your entire EV business, in your hands."
                highlight="in your hands."
                description="EV Dock gives franchise owners complete visibility across their charging network
                from mobile control to real-time station monitoring."  
              />
             </motion.div>

        {/* =====================================================
            MAIN SHOWCASE
        ===================================================== */}
        <div className="relative mt-12 overflow-hidden rounded-[28px] bg-[#F7F9FC] sm:mt-14">

          {/* Grid background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "linear-gradient(#dbe3ef 1px, transparent 1px), linear-gradient(90deg, #dbe3ef 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          {/* Soft glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#C93C8F]/10 blur-[110px]" />

          <div className="relative grid lg:grid-cols-[0.72fr_1.28fr]">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}
            <div className="relative z-10 flex flex-col justify-between p-7 sm:p-9 lg:p-11">

              <div>
                <SectionHeading
                  eyebrow=""
                  title="Control your franchise."
                  highlight="Wherever you are."
                  description="Monitor stations, understand performance and stay connected
                  with your customers without being tied to a desk."

                />
              </div>

              {/* Feature list */}
              <div className="mt-10 space-y-4 lg:mt-12">

                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.07,
                      }}
                      className="group flex items-center gap-3"
                    >
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] ${item.bg} ${item.color}`}
                      >
                        <Icon size={14} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold text-slate-900">
                          {item.title}
                        </p>

                        <p className="mt-0.5 text-[7.5px] leading-4 text-slate-400">
                          {item.text}
                        </p>
                      </div>

                      <ChevronRight
                        size={11}
                        className="ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Ecosystem */}
              <div className="mt-9 flex items-center gap-2 border-t border-slate-200 pt-5">
                <div className="flex -space-x-1.5">
                  <span className="h-5 w-5 rounded-full border-2 border-[#F7F9FC] bg-[#1E5FA8]" />
                  <span className="h-5 w-5 rounded-full border-2 border-[#F7F9FC] bg-[#4B4FAE]" />
                  <span className="h-5 w-5 rounded-full border-2 border-[#F7F9FC] bg-[#C93C8F]" />
                </div>

                <span className="text-[7.5px] text-slate-400">
                  One connected franchise ecosystem
                </span>
              </div>
            </div>

            {/* =================================================
                RIGHT VISUAL
            ================================================= */}
            <div className="relative min-h-[600px] overflow-hidden px-4 py-10 sm:px-8 lg:min-h-[640px] lg:px-8">

              {/* Visual glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#1E5FA8]/10 via-[#4B4FAE]/10 to-[#C93C8F]/10 blur-[2px]" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80" />

              {/* =================================================
                  CMS
              ================================================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.65 }}
                className="relative z-10 mx-auto w-full max-w-[650px] pt-8 sm:pt-5 lg:ml-auto lg:pt-6"
              >
                <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(30,95,168,0.35)]">

                  {/* Browser header */}
                  <div className="flex h-9 items-center justify-between border-b border-slate-100 px-3.5">

                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-200" />
                    </div>

                    <div className="hidden rounded-md bg-slate-50 px-3 py-1 sm:block">
                      <span className="text-[6.5px] text-slate-400">
                        app.evdock.in / dashboard
                      </span>
                    </div>

                    <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#1E5FA8] to-[#C93C8F]" />
                  </div>

                  {/* CMS body */}
                  <div className="flex min-h-[410px]">

                    {/* Sidebar */}
                    <aside className="hidden w-[115px] shrink-0 border-r border-slate-100 bg-[#FBFCFE] p-2.5 sm:block">

                      <div className="mb-6 flex items-center gap-1.5 px-1.5">
                        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F]">
                          <Zap size={8} className="text-white" />
                        </div>

                        <span className="text-[8px] font-bold text-slate-900">
                          EV Dock
                        </span>
                      </div>

                      <div className="space-y-0.5">
                        {[
                          ["Overview", true],
                          ["Stations", false],
                          ["Chargers", false],
                          ["Sessions", false],
                          ["Revenue", false],
                        ].map(([label, active]) => (
                          <div
                            key={label}
                            className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                              active
                                ? "bg-gradient-to-r from-[#1E5FA8]/10 to-[#C93C8F]/10 text-[#4B4FAE]"
                                : "text-slate-400"
                            }`}
                          >
                            <span
                              className={`h-1 w-1 rounded-full ${
                                active
                                  ? "bg-[#4B4FAE]"
                                  : "bg-slate-200"
                              }`}
                            />

                            <span className="text-[7px] font-medium">
                              {label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-14 border-t border-slate-100 pt-3">
                        <p className="px-1.5 text-[6px] uppercase tracking-wider text-slate-300">
                          Account
                        </p>

                        <div className="mt-2.5 flex items-center gap-1.5 px-1.5">
                          <div className="h-5 w-5 rounded-full bg-slate-200" />

                          <div>
                            <p className="text-[6.5px] font-semibold text-slate-700">
                              Franchise
                            </p>

                            <p className="text-[5.5px] text-slate-400">
                              Admin
                            </p>
                          </div>
                        </div>
                      </div>
                    </aside>

                    {/* Main CMS */}
                    <main className="min-w-0 flex-1 bg-white p-3.5 sm:p-4">

                      {/* Header */}
                      <div className="flex items-center justify-between">

                        <div>
                          <p className="text-[6px] uppercase tracking-[0.16em] text-slate-400">
                            Overview
                          </p>

                          <h4 className="mt-1 text-[11px] font-semibold tracking-tight text-slate-900">
                            Good morning, Admin
                          </h4>
                        </div>

                        <div className="flex items-center gap-1.5">

                          <div className="hidden rounded-md border border-slate-100 px-2 py-1 sm:block">
                            <span className="text-[6px] text-slate-400">
                              Sep 2026
                            </span>
                          </div>

                          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-50">
                            <Bell
                              size={9}
                              className="text-slate-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-4">

                        {stats.map((item, index) => (
                          <motion.div
                            key={item.label}
                            initial={{
                              opacity: 0,
                              y: 8,
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
                            className="rounded-lg border border-slate-100 bg-[#FBFCFE] p-2.5"
                          >
                            <p className="text-[6px] text-slate-400">
                              {item.label}
                            </p>

                            <div className="mt-1 flex items-end justify-between gap-1">
                              <p className="text-[12px] font-semibold tracking-tight text-slate-900">
                                {item.value}
                              </p>

                              <span className="text-[5.5px] font-medium text-emerald-500">
                                {item.change}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Main dashboard grid */}
                      <div className="mt-2 grid gap-2 sm:grid-cols-[1.35fr_0.65fr]">

                        {/* Network */}
                        <div className="overflow-hidden rounded-lg border border-slate-100 bg-[#F8FAFC]">

                          <div className="flex items-center justify-between border-b border-slate-100 bg-white px-2.5 py-2">
                            <div>
                              <p className="text-[7px] font-semibold text-slate-800">
                                Station network
                              </p>

                              <p className="text-[5.5px] text-slate-400">
                                Live locations
                              </p>
                            </div>

                            <div className="flex items-center gap-1">
                              <span className="h-1 w-1 rounded-full bg-emerald-500" />

                              <span className="text-[5.5px] text-slate-400">
                                Live
                              </span>
                            </div>
                          </div>

                          <div className="relative h-[175px]">

                            <div
                              className="absolute inset-0 opacity-60"
                              style={{
                                backgroundImage:
                                  "linear-gradient(#dfe6ef 1px, transparent 1px), linear-gradient(90deg, #dfe6ef 1px, transparent 1px)",
                                backgroundSize: "24px 24px",
                              }}
                            />

                            {/* Roads */}
                            <div className="absolute left-[8%] top-[55%] h-px w-[85%] rotate-[12deg] bg-slate-200" />

                            <div className="absolute left-[18%] top-[15%] h-[80%] w-px rotate-[22deg] bg-slate-200" />

                            <div className="absolute left-[58%] top-[5%] h-[90%] w-px -rotate-[28deg] bg-slate-200" />

                            {/* Pins */}
                            {mapPins.map(
                              ([left, top, color], index) => (
                                <motion.div
                                  key={index}
                                  initial={{
                                    scale: 0,
                                  }}
                                  whileInView={{
                                    scale: 1,
                                  }}
                                  viewport={{
                                    once: true,
                                  }}
                                  transition={{
                                    delay:
                                      0.25 +
                                      index * 0.07,
                                  }}
                                  className="absolute"
                                  style={{
                                    left,
                                    top,
                                  }}
                                >
                                  <div
                                    className="relative flex h-6 w-6 items-center justify-center rounded-full shadow-md"
                                    style={{
                                      backgroundColor:
                                        color,
                                    }}
                                  >
                                    <Zap
                                      size={8}
                                      className="text-white"
                                    />

                                    <span
                                      className="absolute -inset-1 rounded-full opacity-20"
                                      style={{
                                        border: `1px solid ${color}`,
                                      }}
                                    />
                                  </div>
                                </motion.div>
                              )
                            )}

                            {/* Map info */}
                            <div className="absolute bottom-2 left-2 rounded-md border border-slate-100 bg-white/90 px-2 py-1.5 shadow-sm backdrop-blur">
                              <p className="text-[6px] font-semibold text-slate-800">
                                48 stations
                              </p>

                              <p className="mt-0.5 text-[5px] text-slate-400">
                                Across your network
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Status */}
                        <div className="rounded-lg border border-slate-100 bg-white p-2.5">

                          <div className="flex items-center justify-between">
                            <p className="text-[7px] font-semibold text-slate-800">
                              Charger status
                            </p>

                            <Activity
                              size={9}
                              className="text-[#4B4FAE]"
                            />
                          </div>

                          <div className="mt-5 flex justify-center">
                            <div className="relative flex h-[82px] w-[82px] items-center justify-center rounded-full border-[6px] border-[#4B4FAE]/10">

                              <div className="absolute inset-[-6px] rounded-full border-[6px] border-transparent border-t-[#1E5FA8] border-r-[#C93C8F]" />

                              <div className="text-center">
                                <p className="text-[15px] font-semibold tracking-tight text-slate-900">
                                  98.4%
                                </p>

                                <p className="text-[5px] text-slate-400">
                                  uptime
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-5 space-y-2.5">
                            {status.map(
                              ([label, value, dot]) => (
                                <div
                                  key={label}
                                  className="flex items-center justify-between"
                                >
                                  <div className="flex items-center gap-1.5">
                                    <span
                                      className={`h-1 w-1 rounded-full ${dot}`}
                                    />

                                    <span className="text-[5.5px] text-slate-500">
                                      {label}
                                    </span>
                                  </div>

                                  <span className="text-[6.5px] font-semibold text-slate-800">
                                    {value}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Activity */}
                      <div className="mt-2 rounded-lg border border-slate-100 bg-white p-2.5">

                        <div className="flex items-center justify-between">

                          <div>
                            <p className="text-[7px] font-semibold text-slate-800">
                              Charging activity
                            </p>

                            <p className="mt-0.5 text-[5.5px] text-slate-400">
                              Real-time network activity
                            </p>
                          </div>

                          <span className="flex items-center gap-1 text-[5.5px] text-emerald-500">
                            <span className="h-1 w-1 rounded-full bg-emerald-500" />
                            Live
                          </span>
                        </div>

                        <div className="mt-2 flex h-9 items-end gap-0.5">
                          {activity.map(
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
                                  duration: 0.45,
                                  delay:
                                    index * 0.02,
                                }}
                                className={`flex-1 rounded-t-[2px] ${
                                  index > 11
                                    ? "bg-gradient-to-t from-[#1E5FA8] to-[#C93C8F]"
                                    : "bg-slate-100"
                                }`}
                              />
                            )
                          )}
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  PHONE FLOATING IN FRONT
              ================================================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  rotate: -4,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: -4,
                }}
                viewport={{ once: true }}
                animate={{
                  y: [0, -6, 0],
                  rotate: [-4, -3, -4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[-15px] left-[4%] z-30 hidden h-[330px] w-[170px] rounded-[30px] border-[5px] border-slate-900 bg-slate-950 p-1.5 shadow-[0_30px_60px_-20px_rgba(30,95,168,0.45)] sm:block lg:left-[2%]"
              >
                <div className="h-full overflow-hidden rounded-[23px] bg-white">

                  {/* Phone header */}
                  <div className="px-4 pb-3 pt-5">
                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-[5.5px] text-slate-400">
                          Franchise overview
                        </p>

                        <p className="mt-1 text-[9px] font-semibold text-slate-900">
                          Good morning
                        </p>
                      </div>

                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-[#1E5FA8] to-[#C93C8F]">
                        <Zap
                          size={9}
                          className="text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Revenue */}
                  <div className="mx-3 rounded-[16px] bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F] p-3 text-white">

                    <div className="flex items-center justify-between">
                      <span className="text-[5.5px] text-white/60">
                        Today's revenue
                      </span>

                      <ArrowUpRight size={9} />
                    </div>

                    <p className="mt-3 text-[18px] font-semibold tracking-[-0.05em]">
                      ₹28,450
                    </p>

                    <div className="mt-1.5 flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-emerald-300" />

                      <span className="text-[5.5px] text-white/70">
                        18.6% higher
                      </span>
                    </div>
                  </div>

                  {/* Phone stats */}
                  <div className="grid grid-cols-2 gap-1.5 px-3 pt-3">

                    <div className="rounded-[14px] bg-slate-50 p-2.5">
                      <BatteryCharging
                        size={10}
                        className="text-[#1E5FA8]"
                      />

                      <p className="mt-1.5 text-[11px] font-semibold text-slate-900">
                        128
                      </p>

                      <p className="text-[5.5px] text-slate-400">
                        Chargers
                      </p>
                    </div>

                    <div className="rounded-[14px] bg-slate-50 p-2.5">
                      <Activity
                        size={10}
                        className="text-[#C93C8F]"
                      />

                      <p className="mt-1.5 text-[11px] font-semibold text-slate-900">
                        98.4%
                      </p>

                      <p className="text-[5.5px] text-slate-400">
                        Uptime
                      </p>
                    </div>
                  </div>

                  {/* Station */}
                  <div className="px-3 pt-4">
                    <div className="flex items-center justify-between">

                      <p className="text-[6.5px] font-semibold text-slate-800">
                        Top station
                      </p>

                      <span className="text-[5.5px] text-[#4B4FAE]">
                        View
                      </span>
                    </div>

                    <div className="mt-1.5 flex items-center gap-1.5 rounded-[14px] border border-slate-100 p-2">

                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#4B4FAE]/10">
                        <MapPin
                          size={8}
                          className="text-[#4B4FAE]"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[6.5px] font-semibold text-slate-800">
                          EV Dock Central
                        </p>

                        <p className="mt-0.5 text-[5px] text-slate-400">
                          24 / 24 active
                        </p>
                      </div>

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="mt-4 flex justify-around border-t border-slate-100 py-2.5">
                    <span className="h-1 w-6 rounded-full bg-[#4B4FAE]" />
                    <span className="h-1 w-1 rounded-full bg-slate-200" />
                    <span className="h-1 w-1 rounded-full bg-slate-200" />
                    <span className="h-1 w-1 rounded-full bg-slate-200" />
                  </div>
                </div>
              </motion.div>

              {/* =================================================
                  SMART ALERT
              ================================================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.45,
                }}
                className="absolute bottom-[9%] left-[5%] z-40 hidden w-[165px] rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_18px_45px_-25px_rgba(15,23,42,0.3)] lg:block"
              >
                <div className="flex items-center gap-2">

                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C93C8F]/10">
                    <Bell
                      size={10}
                      className="text-[#C93C8F]"
                    />
                  </div>

                  <div>
                    <p className="text-[7px] font-semibold text-slate-800">
                      Smart alert
                    </p>

                    <p className="mt-0.5 text-[6px] text-slate-400">
                      Charger needs attention
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-1.5">
                  <span className="text-[5.5px] text-slate-400">
                    2 min ago
                  </span>

                  <span className="flex items-center gap-1 text-[6px] font-medium text-[#7A3FAF]">
                    Review
                    <ArrowUpRight size={8} />
                  </span>
                </div>
              </motion.div>

              {/* =================================================
                  NETWORK HEALTH
              ================================================= */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.65,
                }}
                className="absolute bottom-[3%] right-[4%] z-40 hidden rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_18px_45px_-25px_rgba(15,23,42,0.3)] sm:block"
              >
                <div className="flex items-center gap-2">

                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50">
                    <Check
                      size={11}
                      className="text-emerald-500"
                    />
                  </div>

                  <div>
                    <p className="text-[7px] font-semibold text-slate-800">
                      Network healthy
                    </p>

                    <p className="mt-0.5 text-[6px] text-slate-400">
                      All stations operational
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BENEFITS
        ===================================================== */}
        <div className="mt-8 grid border-y border-slate-200 sm:grid-cols-3">

          {[
            {
              title: "Mobile first",
              text: "Your network travels with you.",
              color: "#1E5FA8",
            },
            {
              title: "Real-time visibility",
              text: "Every charger, every station, always visible.",
              color: "#4B4FAE",
            },
            {
              title: "Smart operations",
              text: "Alerts help you act before issues grow.",
              color: "#C93C8F",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.07,
              }}
              className={`py-5 ${
                index !== 2
                  ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                  : ""
              } ${index > 0 ? "sm:pl-7" : ""}`}
            >
              <div className="flex items-start gap-3">

                <span
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <div>
                  <p className="text-[9px] font-semibold text-slate-900">
                    {item.title}
                  </p>

                  <p className="mt-1 text-[8px] leading-4 text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Franchise;