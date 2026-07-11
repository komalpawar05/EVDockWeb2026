import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../assets/img-1.png";

import {
  ArrowRight,
  BatteryCharging,
  MapPin,
  ShieldCheck,
  Smartphone,
  Zap,
  Star,
  Play,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-blue-100 blur-[120px] opacity-70" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-100 blur-[120px] opacity-60" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row">
        {/* LEFT */}

       <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-5 py-2 text-sm font-semibold text-blue-700 shadow-md backdrop-blur-lg"
          >
            <Zap size={18} className="text-blue-600" />
            India's Next-Generation EV Charging Network
          </motion.div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-tight text-gray-900 md:text-7xl">
            Powering
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              India's EV Future
            </span>
            One Charge at a Time
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Experience ultra-fast DC charging, live station availability, secure digital
            payments, and seamless charging across India's growing EV infrastructure.
            Drive farther with confidence using EV Dock.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              Find Charging Station
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white/80 px-8 py-4 font-semibold text-gray-700 shadow-md backdrop-blur-lg transition-all duration-300 hover:border-blue-500 hover:text-blue-600">
              <Play size={18} />
              Watch Demo
            </button>
          </div>

          {/* Trust */}
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
              <ShieldCheck className="text-green-500" />
              <span className="font-medium text-gray-700">
                100% Secure Payments
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
              <Star className="fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-gray-700">
                Trusted by EV Drivers
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-8 border-t border-gray-200 pt-10">
            <div>
              <h2 className="text-4xl font-extrabold text-blue-600">250+</h2>
              <p className="mt-2 text-gray-600">Charging Stations</p>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold text-blue-600">25K+</h2>
              <p className="mt-2 text-gray-600">EV Drivers Served</p>
            </div>

            <div>
              <h2 className="text-4xl font-extrabold text-blue-600">99.9%</h2>
              <p className="mt-2 text-gray-600">Network Uptime</p>
            </div>
          </div>
        </motion.div>
        {/* RIGHT */}

        <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-1 items-center justify-center"
          >
            {/* Background Glow */}
            <div className="absolute h-[600px] w-[600px] rounded-full bg-gradient-to-r from-blue-100 via-cyan-100 to-blue-50 blur-[140px]" />

            {/* Decorative Circle */}
            <div className="absolute h-[520px] w-[520px] rounded-full border border-blue-100" />

            {/* Main Image */}
            <motion.img
              src={HeroImg}
              alt="EV Dock"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="relative z-20 w-full max-w-[620px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.18)]"
            />
              {/* Floating Dots */}
              <div className="absolute right-20 bottom-20 h-5 w-5 rounded-full bg-blue-400 animate-ping" />
              <div className="absolute left-16 bottom-32 h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
              <div className="absolute top-20 right-24 h-4 w-4 rounded-full bg-blue-300 animate-bounce" />
            </motion.div>
          </div>
    </section>
  );
};

export default Hero;