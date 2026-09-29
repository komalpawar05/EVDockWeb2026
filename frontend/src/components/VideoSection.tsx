import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Zap, ArrowUpRight } from "lucide-react";

import HeroVideo from "../assets/Vedio-2.mp4";
import SectionHeading from "./Common/SectionHeading";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#050708] py-20 sm:py-24 lg:py-28">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main glow */}
        <div className="absolute left-[55%] top-[48%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-[150px]" />

        {/* Secondary glow */}
        <div className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-500/[0.035] blur-[150px]" />

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

      </div>

      {/* =========================================================
          CONTAINER
      ========================================================= */}

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">


        {/* =======================================================
            MAIN EXPERIENCE
        ======================================================== */}

        <div className="grid items-center lg:grid-cols-[0.95fr_0.8fr] lg:gap-24">

          {/* =====================================================
              LEFT — CONTENT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pb-12 lg:pb-0"
          >

            <SectionHeading
              eyebrow="SMART CHARGING"
              title="Charging is becoming"
              titleClassName="text-white"
              highlight="intelligent."
              description="A smarter way to charge. Designed for the next generation of electric mobility."
            />

            {/* Accent */}
            <div className="mt-8 flex items-center gap-4">

              <span className="h-px w-12 bg-cyan-400/60" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-slate-600">
                Connected · Intelligent · Effortless
              </span>

            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-9 flex items-center gap-3 text-sm font-medium text-white"
            >
              Explore EV Dock

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10">
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </motion.button>

            {/* =================================================
                STATS
            ================================================== */}

            <div className="mt-12 grid max-w-[520px] grid-cols-3 border-t border-white/[0.07] pt-7">

              {/* 1200+ */}
              <div>
                <p className="text-2xl font-light tracking-tight text-white sm:text-3xl">
                  1200
                  <span className="text-cyan-400">+</span>
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  Stations
                </p>
              </div>

              {/* 99% */}
              <div className="border-l border-white/[0.07] pl-5 sm:pl-8">
                <p className="text-2xl font-light tracking-tight text-white sm:text-3xl">
                  99
                  <span className="text-cyan-400">%</span>
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  Uptime
                </p>
              </div>

              {/* 24/7 */}
              <div className="border-l border-white/[0.07] pl-5 sm:pl-8">
                <p className="text-2xl font-light tracking-tight text-white sm:text-3xl">
                  24/7
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  Support
                </p>
              </div>

            </div>

          </motion.div>

          {/* =====================================================
              RIGHT — VIDEO
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[330px]"
          >

            {/* Glow behind video */}
            <div className="pointer-events-none absolute -inset-14 rounded-full bg-cyan-400/[0.055] blur-[85px]" />

            {/* Vertical accent */}
            <div className="absolute -right-10 top-1/2 hidden h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent lg:block" />

            {/* =================================================
                VIDEO FRAME
            ================================================== */}

            <div className="relative rounded-[30px] border border-white/[0.1] bg-white/[0.025] p-1 shadow-[0_40px_100px_rgba(0,0,0,0.65)]">

              <div className="relative h-[440px] overflow-hidden rounded-[26px] bg-black sm:h-[500px] lg:h-[540px]">

                {/* Video */}
                <video
                  ref={videoRef}
                  src={HeroVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Cinematic overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                {/* Top metadata */}
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">

                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 backdrop-blur-md">

                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />

                    <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/60">
                      EV Dock
                    </span>

                  </div>

                  <span className="text-[9px] tracking-[0.2em] text-white/30">
                    01
                  </span>

                </div>

                {/* =================================================
                    PLAY / PAUSE
                ================================================== */}

                <button
                  type="button"
                  onClick={toggleVideo}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 hover:bg-black/60"
                >
                  {isPlaying ? (
                    <Pause
                      size={15}
                      fill="currentColor"
                    />
                  ) : (
                    <Play
                      size={15}
                      fill="currentColor"
                      className="ml-0.5"
                    />
                  )}
                </button>

                {/* Bottom video label */}
                <div className="absolute bottom-5 left-5">

                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/40">
                    Intelligent Mobility
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                FLOATING STATUS
            ================================================== */}

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">

              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#090c0e]/95 px-4 py-2.5 shadow-2xl backdrop-blur-xl">

                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_9px_rgba(34,211,238,0.9)]" />

                <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Connected EV Network
                </span>

              </div>

            </div>

          </motion.div>

        </div>

        {/* =======================================================
            BOTTOM STATEMENT
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-16 border-t border-white/[0.06] pt-6 sm:mt-20"
        >

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[10px] tracking-wide text-slate-700 sm:text-xs">
              Intelligent charging. Seamless connectivity. Better mobility.
            </p>

            <p className="text-[8px] uppercase tracking-[0.25em] text-slate-700">
              Built for the electric future
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default VideoSection;