import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Play,
  Zap,
  ShieldCheck,
  BatteryCharging,
} from "lucide-react";

import Herobg from "../assets/Hero_img PM.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05070a] text-white">

      {/* =====================================================
          CINEMATIC BACKGROUND
      ====================================================== */}

      <motion.div
        initial={{ scale: 1.02 }}
        animate={{ scale: 1.08 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Herobg})`,
        }}
      />

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Left readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070a] via-[#05070a]/85 to-[#05070a]/20" />

      {/* Bottom cinematic fade */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#05070a] via-[#05070a]/80 to-transparent" />

      {/* =====================================================
          AMBIENT LIGHT
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[25%] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[150px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] right-[5%] h-[320px] w-[320px] rounded-full bg-cyan-500/15 blur-[140px]"
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-6 pb-36 pt-28 lg:px-16">

        <div className="grid w-full items-center lg:grid-cols-[1fr_360px] lg:gap-20">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="mb-7 flex items-center gap-3"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(59,130,246,0)",
                    "0 0 24px rgba(59,130,246,0.45)",
                    "0 0 0 rgba(59,130,246,0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/25 bg-blue-500/10"
              >
                <Zap
                  size={15}
                  className="text-blue-400"
                  fill="currentColor"
                />
              </motion.div>

              <div>
                <p className="text-[10px] font-medium tracking-[0.24em] text-blue-300 uppercase sm:text-xs">
                  India's EV Charging Network
                </p>

                <p className="mt-1 text-[11px] text-slate-500">
                  Built for the road ahead
                </p>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-full text-4xl font-black leading-[1.08] tracking-[-0.04em] md:text-5xl"
            >
              Fast & Reliable EV
              <br />

              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55,
                  duration: 0.8,
                }}
                className="inline-block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text py-5 text-transparent"
              >
                Charging Across India
              </motion.span>
            </motion.h1>
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.75,
                duration: 0.8,
              }}
              className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg"
            >
              Find reliable EV charging stations across India,
              check real-time availability, pay securely, and get
              back on the road with confidence.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.95,
                duration: 0.7,
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              {/* Primary CTA */}
              <Link to="/partner">
              <motion.button
                whileHover={{
                  scale: 1.035,
                  boxShadow: "0 18px 50px rgba(37,99,235,0.28)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#05070a]"
              >
                <Zap size={17} />

                Become a Partner

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.button>
              </Link>

              {/* Secondary CTA */}
              <Link to="/white-label">
                <motion.button
                  whileHover={{
                    scale: 1.025,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-xl"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5">
                    <ArrowUpRight size={13} />
                  </span>

                  Explore Soluation

                  <ArrowUpRight
                    size={15}
                    className="opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </motion.button>
              </Link>  
            </motion.div>
            

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-400 sm:text-sm"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={15}
                  className="text-emerald-400"
                />
                Secure payments
              </div>

              <span className="hidden h-4 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-2">
                <Zap
                  size={15}
                  className="text-blue-400"
                />
                Ultra-fast charging
              </div>

              <span className="hidden h-4 w-px bg-white/10 sm:block" />

              <span>24/7 support</span>
            </motion.div>
          </motion.div>

          {/* =================================================
              PREMIUM NETWORK CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-14 hidden lg:block"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/25 p-6 shadow-2xl backdrop-blur-2xl"
            >
              {/* Card glow */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

              {/* Header */}
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-medium tracking-[0.2em] text-slate-500 uppercase">
                    Network
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Live availability
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5">
                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  />

                  <span className="text-[10px] text-emerald-400">
                    LIVE
                  </span>
                </div>
              </div>

              {/* Main statistic */}
              <div className="relative mt-8">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-medium tracking-tight text-white">
                    1164 
                  </span>

                  <span className="mb-2 text-sm text-blue-400">
                    + 
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  charging stations across India
                </p>
              </div>

              {/* Animated energy line */}
              <div className="relative mt-8 h-px overflow-hidden bg-white/10">
                <motion.div
                  animate={{
                    x: ["-120%", "350%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                />
              </div>

              {/* Small stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">

                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                  <BatteryCharging
                    size={17}
                    className="text-blue-400"
                  />

                  <p className="mt-3 text-2xl font-medium text-white">
                    99%
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Network uptime
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                  <MapPin
                    size={17}
                    className="text-cyan-400"
                  />

                  <p className="mt-3 text-2xl font-medium text-white">
                    24/7
                  </p>

                  <p className="mt-1 text-[10px] text-slate-500">
                    Always available
                  </p>
                </div>

              </div>

              {/* Location */}
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                <MapPin
                  size={13}
                  className="text-blue-400"
                />

                Connecting drivers across India
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          PREMIUM BOTTOM TRANSITION
      ====================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-20">

        {/* Dark fade */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#05070a] via-[#05070a]/90 to-transparent" />

        {/* Curved transition */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0.85,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            delay: 1.1,
            duration: 1.2,
            ease: "easeOut",
          }}
          className="relative mx-auto h-28 w-[130%] -translate-x-[11.5%] overflow-hidden"
        >

          {/* Main curve */}
          <div className="absolute -bottom-24 left-0 h-48 w-full rounded-[50%] border-t border-white/[0.08] bg-[#05070a]" />

          {/* Blue energy curve */}
          <motion.div
            animate={{
              x: ["-50%", "50%", "-50%"],
              opacity: [0.15, 0.8, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[18px] left-1/2 h-px w-[35%] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-[1px]"
          />

          {/* Moving energy particle */}
          <motion.div
            animate={{
              x: ["-100vw", "100vw"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-[17px] left-0 h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-sm"
          />
        </motion.div>

        {/* =================================================
            BOTTOM INFORMATION
        ================================================== */}

        <div className="relative mx-auto flex max-w-[1440px] items-center justify-between px-6 pb-5 lg:px-16">

          {/* Left */}
          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <Zap
                size={13}
                className="text-blue-400"
              />
            </div>

            <div>
              <p className="text-[9px] font-medium tracking-[0.2em] text-slate-500 uppercase">
                Powering India's
              </p>

              <p className="text-xs text-slate-300">
                Electric future
              </p>
            </div>
          </div>

          {/* Center scroll indicator */}
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          >
            <span className="text-[9px] tracking-[0.3em] text-slate-500 uppercase">
              Explore
            </span>

            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 p-1">
              <motion.span
                animate={{
                  y: [0, 7, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1 rounded-full bg-white"
              />
            </div>
          </motion.div>

          {/* Right */}
          <div className="ml-auto hidden items-center gap-3 sm:flex">
            <div className="text-right">
              <p className="text-[9px] tracking-[0.15em] text-slate-500 uppercase">
                Network
              </p>

              <p className="text-xs text-slate-300">
                1,200+ stations
              </p>
            </div>

            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

