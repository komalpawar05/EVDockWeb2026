import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
} from "lucide-react";

import Herobg from "../assets/Hero_img PM.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-30 lg:mp-0 ">

      {/* Animated Background */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Herobg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-slate-900/40" />
      </motion.div>

      {/* Glow */}
      <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto flex min-h-screen items-center px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="max-w-2xl"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400"
          >
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            New Feature Available
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Fast.
            <span className="block text-blue-400">
              Reliable.
            </span>
            Future Ready.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
            className="mt-8 max-w-xl text-lg leading-8 text-slate-300"
          >
            Charge your EV anytime with ultra-fast charging stations,
            real-time availability, secure payments, nationwide coverage,
            and a seamless charging experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
            }}
            className="mt-10 flex flex-wrap gap-5"
          >

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Find Charger
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10"
            >
              <Play size={18} />
              Watch Demo
            </motion.button>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.6,
            }}
            className="mt-16 mb-16 grid grid-cols-3 gap-10"
          >

            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                1200+
              </h2>
              <p className="mt-2 text-slate-300">
                Charging Stations
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                99%
              </h2>
              <p className="mt-2 text-slate-300">
                Uptime
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                24/7
              </h2>
              <p className="mt-2 text-slate-300">
                Support
              </p>
            </div>

          </motion.div>

        </motion.div>

      </div>

     

    </section>
  );
};

export default Hero;