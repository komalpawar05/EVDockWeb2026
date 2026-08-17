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

const Offer: React.FC = () => {
  return (
    <section className="bg-white px-5 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            What We Offer
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Smart EV Charging{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 md:text-base">
            Reliable charging solutions for public networks, homes,
            and everyday electric mobility.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid gap-6 lg:grid-cols-2">

          {/* =====================================================
              PUBLIC DC CHARGER
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[28px] border border-blue-200 bg-gradient-to-br from-[#E0F2FE] via-[#DBEAFE] to-[#BFDBFE] p-7 shadow-[0_12px_35px_rgba(37,99,235,0.12)]"
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl transition-all duration-500 group-hover:bg-blue-500/25" />

            <div className="relative">

              {/* TOP */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-blue-100">
                    <PlugZap
                      size={28}
                      strokeWidth={1.8}
                      className="text-blue-600"
                    />
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                      Public Charging
                    </span>
                  </div>
                </div>

                <Link to="/public-charger" className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-blue-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowUpRight size={19} />
                </Link>
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Power up. Get moving.
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                Fast and reliable DC charging whenever you need
                power on the road.
              </p>

              {/* =================================================
                  2 COLUMN ROW
              ================================================== */}
              <div className="mt-6 grid grid-cols-[1.25fr_1fr] gap-4">

                {/* LEFT - DC CHARGER */}
                <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-2xl border border-blue-100 bg-white/80">

                  {/* Glow */}
                  <div className="absolute h-44 w-44 rounded-full bg-blue-100/70 blur-2xl" />

                  {/* Decorative Lines */}
                  <div className="absolute left-5 top-5 h-2 w-2 rounded-full bg-blue-200" />
                  <div className="absolute bottom-6 right-6 h-1.5 w-1.5 rounded-full bg-cyan-300" />

                  {/* LARGE DC CHARGER */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 flex h-40 w-[105px] items-center justify-center rounded-[22px] bg-gradient-to-b from-blue-600 to-blue-700 shadow-[0_20px_40px_rgba(37,99,235,0.35)]"
                  >
                    {/* Charger Screen */}
                    <div className="absolute top-5 flex h-10 w-14 items-center justify-center rounded-lg bg-slate-950/90 shadow-inner">
                      <div className="h-1.5 w-7 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
                    </div>

                    {/* Lightning */}
                    <Zap
                      size={34}
                      strokeWidth={2.5}
                      className="mt-7 text-white"
                    />

                    {/* Status */}
                    <motion.span
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="absolute bottom-5 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,.9)]"
                    />
                  </motion.div>

                  {/* DC Label */}
                  <span className="absolute bottom-3 left-3 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-600">
                    DC FAST
                  </span>
                </div>

                {/* RIGHT - FEATURES */}
                <div className="flex flex-col justify-center gap-3">

                  <div className="rounded-xl border border-blue-100 bg-white/80 p-3">
                    <MapPin
                      size={18}
                      className="text-blue-600"
                    />

                    <p className="mt-2 text-xs font-semibold text-slate-800">
                      Nearby
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                      Find Stations
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white/80 p-3">
                    <Zap
                      size={18}
                      className="text-blue-600"
                    />

                    <p className="mt-2 text-xs font-semibold text-slate-800">
                      Fast
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-400">
                      DC Charging
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-white/80 p-3">
                    <BatteryCharging
                      size={18}
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
              <button
                type="button"
                className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-3 hover:text-blue-800"
              >
                <Link to="/public-charger" className="flex items-center gap-2">
                  Explore Public Network
                </Link>
                <ArrowUpRight size={17} />
              </button>

            </div>
          </motion.div>

          {/* =====================================================
              HOME AC CHARGER
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[28px] border border-purple-200 bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE] to-[#FCE7F3] p-7 shadow-[0_12px_35px_rgba(124,58,237,0.12)]"
          >

            {/* Background Glow */}
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl transition-all duration-500 group-hover:bg-pink-400/25" />

            <div className="relative">

              {/* TOP */}
              <div className="flex items-start justify-between">
                <div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-purple-100">
                    <House
                      size={28}
                      strokeWidth={1.8}
                      className="text-purple-600"
                    />
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-purple-600">
                      Home Charging
                    </span>
                  </div>

                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-purple-100 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  <Link to="/home-charger">
                    <ArrowUpRight size={19} />
                  </Link>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Charge at your place.
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                Smart AC charging designed for comfortable,
                reliable everyday charging at home.
              </p>

              {/* =================================================
                  2 COLUMN ROW
              ================================================== */}
              <div className="mt-6 grid grid-cols-[1.25fr_1fr] gap-4">

                {/* LEFT - HOME CHARGER */}
                <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-2xl border border-purple-100 bg-white/80">

                  {/* Glow */}
                  <div className="absolute h-44 w-44 rounded-full bg-purple-100/70 blur-2xl" />

                  {/* Decorative */}
                  <div className="absolute left-5 top-5 h-2 w-2 rounded-full bg-purple-200" />
                  <div className="absolute bottom-6 right-6 h-1.5 w-1.5 rounded-full bg-pink-300" />

                  {/* LARGE HOME CHARGER */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 flex h-44 w-[110px] items-center justify-center rounded-[22px] bg-gradient-to-b from-blue-600 to-blue-700 shadow-[0_20px_40px_rgba(37,99,235,0.30)]"
                  >

                    {/* Screen */}
                    <div className="absolute top-5 flex h-10 w-14 items-center justify-center rounded-lg bg-white/20">
                      <Zap
                        size={22}
                        className="text-white"
                      />
                    </div>

                    {/* Cable Icon */}
                    <Cable
                      size={34}
                      strokeWidth={2}
                      className="mt-8 text-white"
                    />

                    {/* Status */}
                    <motion.span
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                      className="absolute bottom-5 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,.8)]"
                    />

                  </motion.div>

                  {/* Home Label */}
                  <span className="absolute bottom-3 left-3 rounded-full bg-purple-50 px-3 py-1 text-[10px] font-bold text-purple-600">
                    AC HOME
                  </span>

                </div>

                {/* RIGHT - HOME FEATURES */}
                <div className="flex flex-col justify-center gap-3">

                  <div className="rounded-xl border border-purple-100 bg-white/80 p-3">
                    <Zap
                      size={18}
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
                      size={18}
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
                      size={18}
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
              <button
                type="button"
                className="mt-6 flex items-center gap-2 text-sm font-semibold text-purple-600 transition-all hover:gap-3 hover:text-purple-800"
              >
                
                <Link to="/home-charger" className="flex items-center gap-2">
                View Home Chargers
                 <ArrowUpRight size={17} />
                </Link>
                
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Offer;