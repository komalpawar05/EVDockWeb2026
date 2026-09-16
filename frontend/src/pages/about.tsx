import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BatteryCharging,
  Check,
  CircleDot,
  Globe2,
  Network,
  PlugZap,
  Smartphone,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

import SectionHeading from "../components/Common/SectionHeading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =========================================================
   ANIMATIONS
========================================================= */

const revealUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

/* =========================================================
   DATA
========================================================= */

const companyDetails = [
  ["Company", "Tritan EV Dock Private Limited"],
  ["Established", "02 February 2022"],
  ["Headquarters", "Maharashtra, India"],
  ["Business", "EV Charging Infrastructure"],
  ["Company Type", "Private Limited"],
  ["Focus", "Smart & accessible charging"],
];

const capabilities = [
  {
    number: "01",
    icon: PlugZap,
    title: "Charging Infrastructure",
    description:
      "EV charging solutions designed for different locations, vehicles and charging requirements.",
  },
  {
    number: "02",
    icon: Network,
    title: "Connected Technology",
    description:
      "Technology that connects charging stations, operations and drivers through one seamless experience.",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Driver Experience",
    description:
      "Simple digital experiences designed to make finding and using EV charging easier.",
  },
  {
    number: "04",
    icon: Target,
    title: "Strategic Network",
    description:
      "A location-focused approach to building charging infrastructure where EV drivers need it.",
  },
];

const achievements = [
  {
    icon: Zap,
    title: "AC & DC Charging",
    description:
      "Solutions supporting different charging requirements.",
  },
  {
    icon: Network,
    title: "Connected Platform",
    description:
      "A digital experience built around the EV charging journey.",
  },
  {
    icon: BatteryCharging,
    title: "Digital Payments",
    description:
      "Convenient digital payment and charging access options.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Technology that helps businesses manage charging operations.",
  },
];

const milestones = [
  {
    year: "2022",
    title: "EV Dock is established",
    description:
      "The EV Dock journey begins with a focus on building accessible and connected EV charging infrastructure.",
  },
  {
    year: "01",
    title: "Charging solutions",
    description:
      "Developing charging solutions for home, public and commercial environments.",
  },
  {
    year: "02",
    title: "Connected charging",
    description:
      "Building a digital-first charging experience that connects drivers with infrastructure.",
  },
  {
    year: "03",
    title: "Network development",
    description:
      "Expanding charging opportunities through strategic locations and partnerships.",
  },
  {
    year: "NOW",
    title: "Building what comes next",
    description:
      "Continuing to develop a smarter and more accessible charging network.",
  },
];

const values = [
  "Driver first",
  "Reliable by design",
  "Connected technology",
  "Built with partners",
];

/* =========================================================
   NETWORK NODE
========================================================= */

const NetworkNode = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => {
  return (
    <div className="w-[145px] rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#6FA8FF]">
          {icon}
        </div>

        <div>
          <p className="text-[8px] uppercase tracking-[0.15em] text-slate-500">
            {title}
          </p>

          <p className="mt-1 text-[10px] font-semibold text-white">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   HERO NETWORK VISUAL
========================================================= */

const NetworkVisual = () => {
  const lines = [
    {
      d: "M115 125 L245 215 L410 125",
      duration: 2,
    },
    {
      d: "M115 125 L155 340 L280 375",
      duration: 2.5,
    },
    {
      d: "M410 125 L455 300 L280 375",
      duration: 2.2,
    },
    {
      d: "M155 340 L280 215 L455 300",
      duration: 2.8,
      dash: "5 9",
    },
  ];

  return (
    <div className="relative mx-auto h-[470px] w-full max-w-[560px]">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1E5FA8]/20 blur-[90px]" />

      <div className="absolute left-[18%] top-[12%] h-32 w-32 rounded-full bg-[#7A3FAF]/20 blur-[70px]" />

      <div className="absolute bottom-[10%] right-[10%] h-32 w-32 rounded-full bg-[#C93C8F]/20 blur-[70px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 rounded-[40px] opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Network lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 560 470"
        fill="none"
      >
        {lines.map((line, index) => (
          <motion.path
            key={index}
            d={line.d}
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray={line.dash || "6 8"}
            animate={{
              strokeDashoffset: [0, -28],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        <defs>
          <linearGradient
            id="lineGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#6FA8FF" />
            <stop offset="0.5" stopColor="#B57EDC" />
            <stop offset="1" stopColor="#E04578" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 z-20 w-[220px] -translate-x-1/2 -translate-y-1/2"
      >
        <div className="rounded-[30px] border border-white/15 bg-white/[0.08] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
          <div className="rounded-[24px] border border-white/10 bg-[#0D1A29] px-6 py-7 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E5FA8] to-[#7A3FAF] text-white shadow-[0_12px_35px_rgba(30,95,168,0.35)]">
              <Zap size={27} fill="currentColor" />
            </div>

            <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#6FA8FF]">
              EV DOCK
            </p>

            <h3 className="mt-2 text-lg font-semibold text-white">
              Connected
              <br />
              Charging
            </h3>

            <div className="mt-5 flex items-center justify-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#6FA8FF]" />

              <span className="text-[10px] text-slate-400">
                Network active
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Charging */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[12%] top-[15%] z-10"
      >
        <NetworkNode
          icon={<PlugZap size={18} />}
          title="Charging"
          value="Infrastructure"
        />
      </motion.div>

      {/* Driver */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[6%] top-[15%] z-10"
      >
        <NetworkNode
          icon={<Smartphone size={18} />}
          title="Driver"
          value="Experience"
        />
      </motion.div>

      {/* Analytics */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[13%] left-[15%] z-10"
      >
        <NetworkNode
          icon={<BarChart3 size={18} />}
          title="Smart"
          value="Analytics"
        />
      </motion.div>

      {/* Network */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] right-[7%] z-10"
      >
        <NetworkNode
          icon={<Globe2 size={18} />}
          title="Network"
          value="Expansion"
        />
      </motion.div>

      {/* Top Badge */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-4 z-30 -translate-x-1/2"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 backdrop-blur-xl">
          <CircleDot size={12} className="text-[#6FA8FF]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-300">
            EV ecosystem
          </span>
        </div>
      </motion.div>
    </div>
  );
};

/* =========================================================
   ABOUT PAGE
========================================================= */

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#07111F]">
      <Navbar />

      <main>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#07111F]">
          <div className="pointer-events-none absolute -right-60 -top-60 h-[700px] w-[700px] rounded-full bg-[#1E5FA8]/20 blur-[150px]" />

          <div className="pointer-events-none absolute -bottom-60 -left-60 h-[650px] w-[650px] rounded-full bg-[#7A3FAF]/15 blur-[150px]" />

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36 lg:px-16">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={revealLeft}
                className="relative z-10"
              >
                <SectionHeading
                  eyebrow="About EV Dock"
                  title="Powering"
                  highlight="electric mobility."
                  description="EV Dock is building a connected charging ecosystem designed to make electric mobility simpler, more accessible and more reliable for drivers, businesses and partners."
                  dark
                  stacked
                />

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <a
                    href="/contact-us"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-bold text-[#07111F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6FA8FF] hover:text-white"
                  >
                    Connect with EV Dock

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Zap size={14} className="text-[#6FA8FF]" />
                    <span>Powering the journey ahead</span>
                  </div>
                </div>

                <div className="mt-14 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7">
                  <div>
                    <p className="text-2xl font-semibold text-white">
                      2022
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-slate-500">
                      Established
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-5">
                    <p className="text-2xl font-semibold text-white">
                      EV
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-slate-500">
                      Infrastructure
                    </p>
                  </div>

                  <div className="border-l border-white/10 pl-5">
                    <p className="text-2xl font-semibold text-white">
                      Smart
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-slate-500">
                      Technology
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={revealRight}
                className="relative"
              >
                <NetworkVisual />
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07111F] to-transparent" />
        </section>

        {/* =====================================================
            WHO WE ARE
        ====================================================== */}

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#1E5FA8]/5 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#7A3FAF]/5 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
              <SectionHeading
                eyebrow="Who we are"
                title="Building the charging"
                highlight="for tomorrow."
                description="EV Dock is building the infrastructure layer for electric mobility — connecting charging stations, technology and businesses into one seamless ecosystem."
              />

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={revealRight}
                className="rounded-[30px] border border-slate-200 bg-[#F8FAFD] p-8 md:p-10"
              >
                <p className="text-sm leading-7 text-slate-600 md:text-base">
                  We bring together infrastructure, software and partnerships
                  to make electric mobility easier to access and easier to
                  scale.
                </p>

                <div className="mt-8 h-px w-full bg-slate-200" />

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-semibold text-[#07111F]">
                      01
                    </p>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Infrastructure
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-semibold text-[#07111F]">
                      02
                    </p>

                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Technology
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={revealUp}
              className="mt-20"
            >
              <SectionHeading
                eyebrow="Company snapshot"
                title="The EV Dock"
                highlight="ecosystem."
                description="A focused business built around charging infrastructure, connected technology and accessible electric mobility."
                centered
              />

              <div className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_70px_-40px_rgba(7,17,31,0.3)]">
                <div className="grid md:grid-cols-2 lg:grid-cols-3">
                  {companyDetails.map(([label, value], index) => (
                    <div
                      key={label}
                      className={`group relative p-7 transition-all duration-300 hover:bg-[#F8FAFD] ${
                        index < 3
                          ? "border-b border-slate-200"
                          : ""
                      } ${
                        index % 3 !== 2
                          ? "lg:border-r lg:border-slate-200"
                          : ""
                      }`}
                    >
                      <span className="absolute right-6 top-6 text-[9px] font-bold tracking-[0.2em] text-slate-200">
                        0{index + 1}
                      </span>

                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400">
                        {label}
                      </p>

                      <p className="mt-4 max-w-[250px] text-sm font-semibold leading-6 text-[#07111F]">
                        {value}
                      </p>

                      <div className="mt-6 h-[2px] w-7 rounded-full bg-gradient-to-r from-[#1E5FA8] to-[#7A3FAF] transition-all duration-300 group-hover:w-14" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            OUR BELIEF
        ====================================================== */}

        <section className="px-5 pb-24 md:px-10 md:pb-32 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[38px] bg-[#07111F] px-7 py-16 md:px-14 md:py-20 lg:px-20">
              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#1E5FA8]/30 blur-[100px]" />

              <div className="pointer-events-none absolute bottom-[-150px] left-1/3 h-80 w-80 rounded-full bg-[#7A3FAF]/25 blur-[100px]" />

              <div className="relative grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                <SectionHeading
                  eyebrow="Our belief"
                  title="The future of mobility"
                  highlight="starts with access."
                  description="We believe charging should feel as natural as driving. Simple for drivers. Powerful for businesses. Connected across the ecosystem."
                  dark
                />

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={revealUp}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#6FA8FF]">
                    <Zap size={20} />
                  </div>

                  <p className="text-xs leading-6 text-slate-400">
                    Simple for drivers.
                    <br />
                    Powerful for businesses.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MISSION & VISION
        ====================================================== */}

        <section className="bg-[#F6F9FC] px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Direction"
              title="What we're building"
              highlight="toward."
              description="Our mission and vision guide how we design infrastructure, technology and experiences for the future of electric mobility."
              centered
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealLeft}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 md:p-11"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-100/70 blur-[80px]" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2FB] text-[#1E5FA8]">
                    <Target size={21} />
                  </div>

                  <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.22em] text-[#1E5FA8]">
                    Our mission
                  </p>

                  <h3 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em]">
                    Make EV charging
                    <span className="block text-[#1E5FA8]">
                      simple and accessible.
                    </span>
                  </h3>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-slate-500">
                    Create dependable charging experiences that reduce
                    friction from everyday EV journeys and help accelerate
                    the transition toward electric mobility.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealRight}
                className="group relative overflow-hidden rounded-[32px] bg-[#07111F] p-8 text-white md:p-11"
              >
                <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#7A3FAF]/30 blur-[100px]" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#6FA8FF]">
                    <Sparkles size={21} />
                  </div>

                  <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.22em] text-[#6FA8FF]">
                    Our vision
                  </p>

                  <h3 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-[-0.04em]">
                    A connected network
                    <span className="block text-[#6FA8FF]">
                      for every journey.
                    </span>
                  </h3>

                  <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
                    Build an EV charging ecosystem where infrastructure is
                    accessible, connected and dependable wherever people
                    travel.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ECOSYSTEM
        ====================================================== */}

        <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
              <SectionHeading
                eyebrow="EV Dock ecosystem"
                title="Infrastructure"
                highlight="meets technology."
                description="Everything we build is focused on making EV charging more useful for drivers and more valuable for the businesses and locations that power the network."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                      }}
                      className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#BFD8F5] hover:shadow-[0_20px_60px_rgba(7,17,31,0.08)]"
                    >
                      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-50 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative">
                        <div className="flex items-start justify-between">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF2FB] text-[#1E5FA8] transition-all duration-300 group-hover:bg-[#1E5FA8] group-hover:text-white">
                            <Icon size={18} />
                          </div>

                          <span className="text-[10px] font-bold tracking-widest text-slate-300">
                            {item.number}
                          </span>
                        </div>

                        <h3 className="mt-8 text-sm font-bold text-[#07111F]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-[11px] leading-5 text-slate-500">
                          {item.description}
                        </p>

                        <div className="mt-7 h-px w-8 bg-[#1E5FA8] transition-all duration-300 group-hover:w-14" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            JOURNEY
        ====================================================== */}

        <section className="bg-[#07111F] px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
              <SectionHeading
                eyebrow="Our journey"
                title="From an idea"
                highlight="to a network."
                description="Our journey is focused on making EV charging infrastructure more accessible, connected and useful."
                dark
              />

              <div className="relative">
                <div className="absolute bottom-7 left-[5px] top-7 w-px bg-white/10" />

                {milestones.map((item, index) => (
                  <motion.div
                    key={`${item.year}-${item.title}`}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="group relative border-b border-white/10 py-8 pl-10 last:border-0"
                  >
                    <span className="absolute left-0 top-9 h-[11px] w-[11px] rounded-full border-2 border-[#07111F] bg-[#6FA8FF] shadow-[0_0_0_5px_rgba(111,168,255,0.1)]" />

                    <div className="grid gap-3 md:grid-cols-[70px_1fr]">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6FA8FF]">
                        {item.year}
                      </p>

                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 max-w-lg text-[11px] leading-5 text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ACHIEVEMENTS
        ====================================================== */}

        <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
              <SectionHeading
                eyebrow="What we've built"
                title="Progress powered by"
                highlight="innovation."
                description="EV Dock combines physical infrastructure with technology to create a connected charging ecosystem."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                {achievements.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
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
                      }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                      }}
                      className="group rounded-[26px] border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(7,17,31,0.08)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF2FB] text-[#1E5FA8] transition-all duration-300 group-hover:bg-[#1E5FA8] group-hover:text-white">
                        <Icon size={18} />
                      </div>

                      <h3 className="mt-7 text-sm font-bold text-[#07111F]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-[11px] leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            VALUES
        ====================================================== */}

        <section className="bg-[#F6F9FC] px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
              <SectionHeading
                eyebrow="What drives us"
                title="Built with"
                highlight="purpose."
                description="Every part of the EV Dock ecosystem is designed around reliability, simplicity and long-term electric mobility."
              />

              <div className="grid gap-3 sm:grid-cols-2">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF2FB] text-[#1E5FA8] transition-colors group-hover:bg-[#1E5FA8] group-hover:text-white">
                      <Check size={14} />
                    </span>

                    <span className="text-xs font-bold text-[#07111F]">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative mx-auto max-w-7xl overflow-hidden rounded-[38px] bg-[#07111F] px-7 py-16 md:px-14 md:py-20 lg:px-20"
          >
            <div className="pointer-events-none absolute right-10 top-10 opacity-20">
              <Network size={180} strokeWidth={0.6} />
            </div>

            <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-[#1E5FA8]/35 blur-[110px]" />

            <div className="pointer-events-none absolute bottom-[-180px] left-1/3 h-96 w-96 rounded-full bg-[#7A3FAF]/30 blur-[120px]" />

            <div className="relative grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
              <SectionHeading
                eyebrow="The road ahead"
                title="Let's build a better"
                highlight="electric future."
                description="Whether you're an EV driver, business or potential partner, there's a place for you in the EV Dock network."
                dark
              />

              <a
                href="/contact-us"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-bold text-[#07111F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6FA8FF] hover:text-white"
              >
                Connect with EV Dock

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;