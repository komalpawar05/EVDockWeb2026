import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  CreditCard,
  MapPin,
  Zap,
} from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";

import AppImage from "../assets/app.png";


const AppSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Find Chargers",
      text: "Discover nearby available stations.",
    },
    {
      icon: Zap,
      title: "Start & Monitor",
      text: "Control your charging session.",
    },
    {
      icon: CreditCard,
      title: "Easy Payments",
      text: "Pay securely with UPI and cards.",
    },
  ];

  return (
    <section
      id="mobile-app"
      className="relative overflow-hidden bg-white py-16 lg:py-20"
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main blue glow behind app */}
        <div className="absolute right-[8%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[110px]" />

        {/* Cyan glow */}
        <div className="absolute right-[25%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[90px]" />

        {/* Small top glow */}
        <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-blue-500/[0.05] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            MAIN ROW
        ====================================================== */}

        <div className="grid items-center lg:grid-cols-[0.9fr_1.1fr]">

          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-20 max-w-xl"
          >

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                <Zap size={13} className="fill-white" />
              </span>

              <span className="text-sm font-semibold text-blue-700">
                EV Dock Mobile App
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[56px]">
              Your EV charging
              <span className="block bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#06B6D4] bg-clip-text text-transparent">
                made simple.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
              Find nearby charging stations, check live availability,
              start charging and pay securely — all from one powerful
              mobile app.
            </p>

            {/* Features */}
            <div className="mt-7 space-y-3">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20">
                      <Icon size={17} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">

              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="flex items-center gap-3 rounded-xl bg-slate-950 px-5 py-3.5 text-white shadow-lg"
              >
                <FaGooglePlay size={20} />

                <div className="text-left leading-none">
                  <span className="text-[8px] uppercase tracking-wider text-slate-400">
                    Get it on
                  </span>

                  <p className="mt-1 text-sm font-semibold">
                    Google Play
                  </p>
                </div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-slate-900 shadow-md"
              >
                <FaApple size={23} />

                <div className="text-left leading-none">
                  <span className="text-[8px] uppercase tracking-wider text-slate-400">
                    Download on the
                  </span>

                  <p className="mt-1 text-sm font-semibold">
                    App Store
                  </p>
                </div>
              </motion.button>

              <Link to="/mobile-app" className="group flex items-center gap-1.5 px-2 text-sm font-semibold text-blue-600">
                Explore More
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Trust */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <Check size={13} className="text-emerald-500" />
                Live availability
              </span>

              <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <Check size={13} className="text-emerald-500" />
                Secure payments
              </span>

              <span className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <Check size={13} className="text-emerald-500" />
                Multiple networks
              </span>
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT — LARGE APP IMAGE
          ==================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative flex min-h-[520px] items-center justify-center lg:-ml-8"
          >

            {/* Large soft background */}
            <div className="absolute right-[5%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-500/[0.10] via-cyan-400/[0.07] to-purple-500/[0.05] blur-3xl" />

            {/* Soft circle */}
            <div className="absolute right-[8%] h-[430px] w-[430px] rounded-full bg-gradient-to-br from-blue-50 to-cyan-50" />

            {/* Decorative curved line */}
            <div className="absolute right-[2%] h-[480px] w-[480px] rounded-full border border-blue-100/70" />

            {/* Small energy dot */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[16%] top-[18%] h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
            />

            {/* =================================================
                LARGE APP IMAGE
            ================================================= */}

            <motion.img
              src={AppImage}
              alt="EV Dock Mobile App"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[400px] sm:w-[480px] lg:w-[540px] xl:w-[600px] drop-shadow-[0_35px_65px_rgba(15,23,42,0.20)]"
            />

            {/* =================================================
                SMALL STATUS CARD
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[2%] top-[20%] z-20 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_15px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <BatteryCharging size={17} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-slate-400">
                    Charging
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    78%
                  </p>
                </div>

              </div>
            </motion.div>

            {/* =================================================
                LOCATION CARD
            ================================================= */}

            <motion.div
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[17%] right-[0%] z-20 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-[0_15px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-slate-400">
                    Nearest charger
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    1.2 km away
                  </p>
                </div>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;