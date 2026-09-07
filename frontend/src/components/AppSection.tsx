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
import SectionHeading from "./Common/SectionHeading";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";

import AppImage from "../assets/app.png";

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

const AppSection = () => {
  return (
    <section
      id="mobile-app"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue glow */}
        <div className="absolute right-[8%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#1E5FA8]/[0.08] blur-[110px]" />

        {/* Violet glow */}
        <div className="absolute right-[25%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#4B4FAE]/[0.07] blur-[100px]" />

        {/* Small accent */}
        <div className="absolute -left-32 -top-32 h-[300px] w-[300px] rounded-full bg-[#6FA8FF]/[0.07] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 max-w-xl"
          >
            {/* Main heading */}
            <SectionHeading
              eyebrow="EV Dock Platform"
              title="Your EV charging"
              highlight="made simple."
              description="Find nearby charging stations, check live availability, 
              start charging and pay securely all from one powerful mobile app."
            />

            {/* =================================================
                FEATURES
            ================================================== */}

            <div className="mt-8 space-y-3">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-slate-200/70
                      bg-white/70
                      px-3
                      py-3
                      transition-all
                      duration-300
                      hover:border-[#1E5FA8]/20
                      hover:bg-white
                      hover:shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#1E5FA8]/[0.08]
                        text-[#1E5FA8]
                        transition-all
                        duration-300
                        group-hover:bg-[#1E5FA8]
                        group-hover:text-white
                      "
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <h3 className="text-[13px] font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-0.5 text-[11px] leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* =================================================
                DOWNLOAD BUTTONS
            ================================================== */}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Google Play */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="
                  flex
                  items-center
                  gap-2.5
                  rounded-xl
                  bg-[#07111F]
                  px-4
                  py-3
                  text-white
                  shadow-[0_10px_25px_rgba(7,17,31,0.12)]
                  transition-shadow
                  hover:shadow-[0_14px_30px_rgba(7,17,31,0.18)]
                "
              >
                <FaGooglePlay size={18} />

                <div className="text-left leading-none">
                  <span className="text-[7px] uppercase tracking-wider text-white/45">
                    Get it on
                  </span>

                  <p className="mt-1 text-xs font-semibold">
                    Google Play
                  </p>
                </div>
              </motion.button>

              {/* App Store */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="
                  flex
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-3
                  text-slate-900
                  shadow-[0_8px_20px_rgba(15,23,42,0.05)]
                  transition-all
                  hover:border-slate-300
                  hover:shadow-[0_12px_25px_rgba(15,23,42,0.08)]
                "
              >
                <FaApple size={20} />

                <div className="text-left leading-none">
                  <span className="text-[7px] uppercase tracking-wider text-slate-400">
                    Download on the
                  </span>

                  <p className="mt-1 text-xs font-semibold">
                    App Store
                  </p>
                </div>
              </motion.button>

              {/* Explore */}
              <Link
                to="/mobile-app"
                className="
                  group
                  inline-flex
                  items-center
                  gap-1.5
                  px-2
                  text-xs
                  font-semibold
                  text-[#1E5FA8]
                "
              >
                Explore App

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* =================================================
                TRUST
            ================================================== */}

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {[
                "Live availability",
                "Secure payments",
                "Multiple networks",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-[10px] text-slate-500"
                >
                  <Check
                    size={12}
                    strokeWidth={2.5}
                    className="text-emerald-500"
                  />

                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ===================================================
              RIGHT — APP VISUAL
          ==================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="
              relative
              flex
              min-h-[440px]
              items-center
              justify-center
              lg:min-h-[500px]
            "
          >
            {/* Soft glow */}
            <div
              className="
                absolute
                h-[380px]
                w-[380px]
                rounded-full
                bg-gradient-to-br
                from-[#1E5FA8]/10
                via-[#4B4FAE]/8
                to-[#E04578]/5
                blur-3xl
              "
            />

            {/* Background circle */}
            <div
              className="
                absolute
                h-[350px]
                w-[350px]
                rounded-full
                bg-gradient-to-br
                from-blue-50
                via-indigo-50
                to-purple-50
              "
            />

            {/* Outer ring */}
            <div
              className="
                absolute
                h-[410px]
                w-[410px]
                rounded-full
                border
                border-[#1E5FA8]/10
              "
            />

            {/* Decorative ring */}
            <div
              className="
                absolute
                h-[470px]
                w-[470px]
                rounded-full
                border
                border-dashed
                border-[#4B4FAE]/10
              "
            />

            {/* Energy dot */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[15%]
                top-[16%]
                h-2.5
                w-2.5
                rounded-full
                bg-[#E04578]
                shadow-[0_0_18px_rgba(224,69,120,0.45)]
              "
            />

            {/* =================================================
                APP IMAGE
            ================================================== */}

            <motion.img
              src={AppImage}
              alt="EV Dock Mobile App"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-[300px]
                drop-shadow-[0_28px_45px_rgba(15,23,42,0.18)]
                sm:w-[360px]
                lg:w-[430px]
                xl:w-[470px]
              "
            />

            {/* =================================================
                CHARGING STATUS
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[3%]
                top-[20%]
                z-20
                rounded-xl
                border
                border-white/80
                bg-white/90
                px-3
                py-2.5
                shadow-[0_12px_35px_rgba(15,23,42,0.10)]
                backdrop-blur-xl
                sm:left-[7%]
              "
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <BatteryCharging size={16} />
                </div>

                <div>
                  <p className="text-[8px] uppercase tracking-wider text-slate-400">
                    Charging
                  </p>

                  <p className="text-xs font-bold text-slate-900">
                    78%
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                LOCATION
            ================================================== */}

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[15%]
                right-[1%]
                z-20
                rounded-xl
                border
                border-white/80
                bg-white/90
                px-3
                py-2.5
                shadow-[0_12px_35px_rgba(15,23,42,0.10)]
                backdrop-blur-xl
                sm:right-[5%]
              "
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1E5FA8]/10 text-[#1E5FA8]">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-[8px] uppercase tracking-wider text-slate-400">
                    Nearest charger
                  </p>

                  <p className="text-xs font-bold text-slate-900">
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

