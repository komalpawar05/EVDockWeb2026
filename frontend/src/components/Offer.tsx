import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BatteryCharging,
  Cable,
  House,
  MapPin,
  PlugZap,
  Zap,
} from "lucide-react";
import SectionHeading from "./Common/SectionHeading";

const Offer: React.FC = () => {
  return (
<section className="bg-white px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
  <div className="mx-auto max-w-7xl">

    {/* ================= HEADER ================= */}
    <div className="mb-8 text-center sm:mb-10">
      <SectionHeading
        centered
        
        eyebrow="WHAT WE OFFER"
        title="Smart EV Charging"
        highlight="Solutions"
        description="Reliable charging solutions for public networks, homes, and everyday electric mobility."
        
      />
    </div>

    {/* ================= CARDS ================= */}
    <div className="grid items-stretch gap-5 lg:grid-cols-2">

      {/* =====================================================
          PUBLIC DC CHARGER
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4 }}
        className="group relative flex h-full min-h-[620px] overflow-hidden rounded-[24px] border border-blue-200 bg-gradient-to-br from-[#E0F2FE] via-[#DBEAFE] to-[#BFDBFE] p-5 shadow-[0_10px_30px_rgba(37,99,235,0.10)] sm:p-6"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl transition-all duration-500 group-hover:bg-blue-500/25" />

        <div className="relative flex w-full flex-col">

          {/* TOP */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-blue-100">
                <PlugZap
                  size={24}
                  strokeWidth={1.8}
                  className="text-blue-600"
                />
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
                  Public Charging
                </span>
              </div>
            </div>

            <Link
              to="/public-charger"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-blue-100 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* TITLE */}
          <div className="mt-4">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[27px]">
              Power up. Get moving.
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              Fast and reliable DC charging whenever you need power on the road.
            </p>
          </div>

          {/* CONTENT */}
          <div className="mt-5 grid grid-cols-[1.2fr_0.8fr] gap-3">

            {/* CHARGER */}
            <div className="relative flex min-h-[235px] items-center justify-center overflow-hidden rounded-2xl border border-blue-100 bg-white/80">

              {/* Glow */}
              <div className="absolute h-40 w-40 rounded-full bg-blue-100/70 blur-2xl" />

              {/* Decorative */}
              <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-blue-200" />
              <div className="absolute bottom-5 right-5 h-1.5 w-1.5 rounded-full bg-cyan-300" />

              {/* Charger */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex h-36 w-[96px] items-center justify-center rounded-[20px] bg-gradient-to-b from-blue-600 to-blue-700 shadow-[0_18px_35px_rgba(37,99,235,0.30)]"
              >
                {/* Screen */}
                <div className="absolute top-4 flex h-9 w-12 items-center justify-center rounded-lg bg-slate-950/90">
                  <div className="h-1.5 w-6 rounded-full bg-cyan-300" />
                </div>

                <Zap
                  size={31}
                  strokeWidth={2.5}
                  className="mt-6 text-white"
                  fill="currentColor"
                />

                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-4 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,.9)]"
                />
              </motion.div>

              {/* Label */}
              <span className="absolute bottom-3 left-3 rounded-full bg-blue-50 px-2.5 py-1 text-[9px] font-bold text-blue-600">
                DC FAST
              </span>
            </div>

            {/* FEATURES */}
            <div className="flex flex-col justify-center gap-3">

              <div className="rounded-xl border border-blue-100 bg-white/80 p-3">
                <MapPin size={17} className="text-blue-600" />

                <p className="mt-2 text-xs font-semibold text-slate-800">
                  Nearby
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Find Stations
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-white/80 p-3">
                <Zap size={17} className="text-blue-600" />

                <p className="mt-2 text-xs font-semibold text-slate-800">
                  Fast
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  DC Charging
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-white/80 p-3">
                <BatteryCharging
                  size={17}
                  className="text-blue-600"
                />

                <p className="mt-2 text-xs font-semibold text-slate-800">
                  Live
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Availability
                </p>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto pt-5">
            <Link
              to="/public-charger"
              className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-3 hover:text-blue-800"
            >
              Explore Public Network
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover/cta:translate-x-0.5"
              />
            </Link>
          </div>

        </div>
      </motion.div>


      {/* =====================================================
          HOME AC CHARGER
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ y: -4 }}
        className="group relative flex h-full min-h-[620px] overflow-hidden rounded-[24px] border border-purple-200 bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE] to-[#FCE7F3] p-5 shadow-[0_10px_30px_rgba(124,58,237,0.10)] sm:p-6"
      >

        {/* Background Glow */}
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl transition-all duration-500 group-hover:bg-pink-400/25" />

        <div className="relative flex w-full flex-col">

          {/* TOP */}
          <div className="flex items-start justify-between gap-4">
            <div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-purple-100">
                <House
                  size={24}
                  strokeWidth={1.8}
                  className="text-purple-600"
                />
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-purple-600">
                  Home Charging
                </span>
              </div>

            </div>

            <Link
              to="/home-charger"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm ring-1 ring-purple-100 transition-all duration-300 hover:bg-purple-600 hover:text-white"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* TITLE */}
          <div className="mt-4">

            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[27px]">
              Charge at your place.
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              Smart AC charging designed for comfortable, reliable everyday charging at home.
            </p>

          </div>

          {/* CONTENT */}
          <div className="mt-5 grid grid-cols-[1.2fr_0.8fr] gap-3">

            {/* HOME CHARGER */}
            <div className="relative flex min-h-[235px] items-center justify-center overflow-hidden rounded-2xl border border-purple-100 bg-white/80">

              {/* Glow */}
              <div className="absolute h-40 w-40 rounded-full bg-purple-100/70 blur-2xl" />

              {/* Decorative */}
              <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-purple-200" />
              <div className="absolute bottom-5 right-5 h-1.5 w-1.5 rounded-full bg-pink-300" />

              {/* Charger */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 flex h-40 w-[100px] items-center justify-center rounded-[20px] bg-gradient-to-b from-blue-600 to-blue-700 shadow-[0_18px_35px_rgba(37,99,235,0.28)]"
              >

                {/* Screen */}
                <div className="absolute top-4 flex h-9 w-12 items-center justify-center rounded-lg bg-white/20">
                  <Zap
                    size={21}
                    className="text-white"
                  />
                </div>

                {/* Cable */}
                <Cable
                  size={32}
                  strokeWidth={2}
                  className="mt-7 text-white"
                />

                {/* Status */}
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="absolute bottom-4 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,.8)]"
                />

              </motion.div>

              {/* Label */}
              <span className="absolute bottom-3 left-3 rounded-full bg-purple-50 px-2.5 py-1 text-[9px] font-bold text-purple-600">
                AC HOME
              </span>

            </div>

            {/* FEATURES */}
            <div className="flex flex-col justify-center gap-3">

              <div className="rounded-xl border border-purple-100 bg-white/80 p-3">
                <Zap
                  size={17}
                  className="text-purple-600"
                />

                <p className="mt-2 text-xs font-semibold text-slate-800">
                  Smart
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  AC Charging
                </p>
              </div>

              <div className="rounded-xl border border-purple-100 bg-white/80 p-3">
                <House
                  size={17}
                  className="text-purple-600"
                />

                <p className="mt-2 text-xs font-semibold text-slate-800">
                  Home
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Installation
                </p>
              </div>

              <div className="rounded-xl border border-purple-100 bg-white/80 p-3">
                <BatteryCharging
                  size={17}
                  className="text-purple-600"
                />

                <p className="mt-2 text-xs font-semibold text-slate-800">
                  Flexible
                </p>

                <p className="mt-0.5 text-[10px] text-slate-400">
                  Power Options
                </p>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="mt-auto pt-5">
            <Link
              to="/home-charger"
              className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition-all duration-300 hover:gap-3 hover:text-purple-800"
            >
              View Home Chargers
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover/cta:translate-x-0.5"
              />
            </Link>
          </div>

        </div>
      </motion.div>

    </div>
  </div>
</section>

  );
};

export default Offer;