
import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CarFront,
  Check,
  Hotel,
  MapPin,
  PlugZap,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import SectionHeading from "./Common/SectionHeading";

const About = () => {
  const businessTypes = [
    {
      icon: Hotel,
      title: "Hotels & Resorts",
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
    },
    {
      icon: MapPin,
      title: "Highways & Fuel Stations",
    },
    {
      icon: CarFront,
      title: "Fleet & Mobility",
    },
  ];

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const benefits = [
    "Charging Management",
    "Mobile App Integration",
    "Real-time Monitoring",
    "Technical Support",
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[120px]" />

        <div className="absolute bottom-[-200px] left-[-150px] h-[400px] w-[400px] rounded-full bg-slate-100 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#07111F 1px, transparent 1px), linear-gradient(90deg, #07111F 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          {/* LEFT HEADER */}
          <motion.div variants={fadeUp}>

            {/* Heading */}
            <SectionHeading
              eyebrow="EV Dock Business"
              title="Turn your space into"
              highlight="an EV destination."
              description=""
              titleClassName="text-3xl leading-[1.08] tracking-[-0.04em] sm:text-4xl lg:text-[48px]"
              descriptionClassName="hidden"
            />
          </motion.div>

          {/* RIGHT DESCRIPTION */}
          <motion.div
            variants={fadeUp}
            className="max-w-md lg:ml-auto lg:pb-1"
          >
            <p className="text-sm leading-7 text-slate-500 sm:text-[15px]">
              EV Dock helps businesses build, operate, and grow EV charging
              infrastructure — connecting your property with EV drivers and
              creating a smarter mobility experience.
            </p>

            <a
              href="/about"
              className="group mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#07111F]"
            >
              Learn more about EV Dock

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07111F] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#1E5FA8]">
                <ArrowUpRight size={13} />
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* =====================================================
            MAIN BUSINESS PANEL
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 overflow-hidden rounded-[30px] bg-[#07111F] shadow-[0_25px_70px_rgba(7,17,31,0.12)]"
        >
          <div className="grid lg:grid-cols-[1fr_0.95fr]">
            {/* =================================================
                LEFT — BUSINESS CONTENT
            ================================================= */}
            <div className="relative p-7 sm:p-9 lg:p-11">
              {/* Glow */}
              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#1E5FA8]/25 blur-[90px]" />

              <div className="pointer-events-none absolute bottom-[-150px] left-[-100px] h-[250px] w-[250px] rounded-full bg-emerald-500/10 blur-[90px]" />

              <div className="relative z-10">
                {/* Small Heading */}
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                    <PlugZap
                      size={15}
                      className="text-blue-300"
                    />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Built for businesses
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="mt-7 max-w-lg text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-[36px]">
                  More than a charger.
                  <br />

                  <span className="text-blue-400">
                    A complete EV ecosystem.
                  </span>
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-md text-xs leading-6 text-slate-400 sm:text-[13px]">
                  From installation to charging management, EV Dock gives
                  businesses the technology and support needed to create a
                  connected charging experience.
                </p>

                {/* Benefits */}
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {benefits.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                        <Check
                          size={12}
                          className="text-emerald-400"
                          strokeWidth={2.5}
                        />
                      </div>

                      <span className="text-[10px] font-medium text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[10px] font-bold text-[#07111F] transition-all duration-300 hover:bg-[#1E5FA8] hover:text-white"
                >
                  Partner with EV Dock

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            {/* =================================================
                RIGHT — BUSINESS NETWORK
            ================================================= */}
            <div className="relative border-t border-white/10 bg-[#0B1726] p-6 sm:p-8 lg:border-l lg:border-t-0">
              {/* Header */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Built for
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Multiple business spaces
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10">
                  <TrendingUp
                    size={15}
                    className="text-blue-400"
                  />
                </div>
              </div>

              {/* Business Cards */}
              <div className="grid grid-cols-2 gap-3">
                {businessTypes.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.4,
                      }}
                      whileHover={{
                        y: -3,
                      }}
                      className="group rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.06]"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] transition-colors duration-300 group-hover:bg-[#1E5FA8]">
                        <Icon
                          size={16}
                          className="text-blue-300 transition-colors duration-300 group-hover:text-white"
                        />
                      </div>

                      <p className="mt-4 text-[10px] font-semibold leading-4 text-slate-300">
                        {item.title}
                      </p>

                      <div className="mt-3 h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Status */}
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.035] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/10">
                    <span className="absolute h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                  </div>

                  <div>
                    <p className="text-[9px] text-slate-500">
                      Network status
                    </p>

                    <p className="text-[10px] font-semibold text-white">
                      Connected & monitored
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={15}
                  className="text-slate-500"
                />
              </div>
            </div>
          </div>
        </motion.div>     
      </div>

      {/* Existing Anchor */}
      <div
        id="about-details"
        className="pointer-events-none absolute bottom-0 h-px w-full"
      />
    </section>
  );
};

export default About;

