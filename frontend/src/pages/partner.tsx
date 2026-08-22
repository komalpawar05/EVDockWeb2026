import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Handshake,
  Headphones,
  Hotel,
  Network,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
  Zap,
  MapPin,
  Sparkles,
  Search,
  PenTool,
} from "lucide-react";
import PartnerImge from "../assets/partner-img.png"
import SectionHeading from "../components/Common/SectionHeading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/Common/BackToTop";

/* =========================================================
   DATA
========================================================= */

const partners = [
  {
    name: "ChargeZone",
    logo: "/assets/chargezone.svg",
  },
  {
    name: "Ecosystem Partner",
    logo: "/assets/partner-02.png",
  },
  {
    name: "Ecosystem Partner",
    logo: "/assets/partner-03.png",
  },
  {
    name: "Ecosystem Partner",
    logo: "/assets/partner-04.png",
  },
  {
    name: "Ecosystem Partner",
    logo: "/assets/partner-05.png",
  },
  {
    name: "Ecosystem Partner",
    logo: "/assets/partner-06.png",
  },
];

const partnerTypes = [
  {
    icon: Building2,
    number: "01",
    title: "Property Owners",
    description:
      "Transform commercial, residential and destination properties into connected EV charging locations.",
  },
  {
    icon: Hotel,
    number: "02",
    title: "Hotels & Hospitality",
    description:
      "Give guests a premium EV experience while creating a smarter mobility amenity for your property.",
  },
  {
    icon: Store,
    number: "03",
    title: "Businesses & Retail",
    description:
      "Attract EV customers and turn charging infrastructure into a valuable business advantage.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Investors & Entrepreneurs",
    description:
      "Explore scalable EV charging opportunities and build a future-ready mobility business.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Smart Infrastructure",
    text: "Reliable charging infrastructure designed for modern business locations.",
  },
  {
    icon: Network,
    title: "Connected Technology",
    text: "Digital tools that connect charging hardware, operations and customers.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    text: "Support across planning, installation, operations and ongoing growth.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    text: "Create an EV charging business that can grow with market demand.",
  },
];

const services = [
  "Site assessment",
  "Charging hardware",
  "Installation & commissioning",
  "Smart charging platform",
  "Operations support",
  "Maintenance assistance",
  "Digital visibility",
  "Marketing support",
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const Partner: React.FC = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}

    <section className="relative min-h-[680px] overflow-hidden bg-[#071321] md:min-h-[740px]">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={PartnerImge}
          alt="EV Dock partnership"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071321]/95 via-[#071321]/75 to-[#071321]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071321]/80 via-transparent to-transparent" />
      </div>

      {/* Ambient glow */}
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -left-32 top-1/3 h-[380px] w-[380px] rounded-full bg-blue-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-100px] top-[-80px] h-[380px] w-[380px] rounded-full bg-violet-500/20 blur-[110px]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-24 md:min-h-[740px] md:px-10 lg:px-16">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-[560px]"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/75">
              Partner With EV Dock
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
          >
            Power the future
            <span className="block bg-gradient-to-r from-[#6FA8FF] via-[#B57EDC] to-[#F28BB5] bg-clip-text text-transparent">
              with EV Dock.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-5 max-w-md text-sm leading-6 text-white/65"
          >
            Bring smart EV charging to your property or business.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a
              href="#partner-form"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-[11px] font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Become a Partner

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#partnership-models"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[11px] font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              Learn More

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

        </motion.div>

        {/* Small annotation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pointer-events-none absolute bottom-12 right-6 hidden xl:block"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#071321]/50 px-4 py-3 backdrop-blur-xl">

            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
              <Zap size={15} />
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.15em] text-white/40">
                EV Dock
              </p>

              <p className="mt-0.5 text-[10px] font-medium text-white/80">
                Smart charging network
              </p>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Scroll */}
      <motion.div
        animate={{
          y: [0, 5, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
          Scroll
        </span>

        <span className="h-6 w-px bg-gradient-to-b from-blue-400 to-transparent" />
      </motion.div>

    </section>

      {/* =====================================================
          PARTNER TYPES
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#f8fafc] py-16 md:py-20">
        {/* Background */}
        <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-blue-100/40 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-violet-100/30 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <div className="mb-4 flex items-center gap-2">
                <SectionHeading
                 eyebrow="Partnership"
                  title="One network."
                  highlight="Many possibilities."
                  description="Choose the partnership model that fits your business."
                />
              </div>
              <a
                href="/contact-us"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#1E5FA8] px-5 py-2.5 text-[11px] font-semibold text-white shadow-[0_8px_25px_rgba(30,95,168,0.2)] transition hover:-translate-y-0.5 hover:bg-[#174d8a]"
              >
                Become a Partner
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* RIGHT */}
            <div className="space-y-2">
              {partnerTypes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
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
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group"
                  >
                    <div className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-4 transition-all duration-300 hover:-translate-x-1 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(15,23,42,0.07)] md:px-5">

                      {/* Number */}
                      <span className="w-6 shrink-0 text-[10px] font-semibold text-slate-300">
                        {item.number}
                      </span>

                      {/* Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-[#4B4FAE] transition-all duration-300 group-hover:bg-blue-50 group-hover:text-[#1E5FA8]">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-1 line-clamp-1 text-xs text-slate-500">
                          {item.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-[#1E5FA8] group-hover:bg-[#1E5FA8] group-hover:text-white">
                        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>

                      {/* Hover line */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#1E5FA8] to-[#7A3FAF] transition-transform duration-500 group-hover:scale-x-100" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY EV DOCK
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#07111F] py-28">
        <div className="absolute right-[-150px] top-[-180px] h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute bottom-[-150px] left-[-150px] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Content */}

            <div>
              <SectionHeading
                eyebrow="WHY EV DOCK"
                title="More than"
               titleClassName="text-white whitespace-nowrap"
                highlight=" charging."
                stacked={false}
                description="Connected infrastructure, smart technology and dedicated support for better charging destinations."
              />  
              <div>
              <a
                href="/contact-us"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
              >
                Talk to our partnership team
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              </div>
            </div>

            {/* Benefits */}

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
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
                      delay: index * 0.08,
                    }}
                    className="group rounded-[28px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1E5FA8]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-white transition group-hover:text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400 transition group-hover:text-slate-600">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNERSHIP MODELS
      ====================================================== */}

      <section
        id="partnership-models"
        className="bg-slate-50 py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
            eyebrow="PARTNERSHIP MODELS"
            title="Choose the opportunity"
            highlight="that fits your business."
            description="Flexible partnership models designed for different locations,
              businesses and investment goals."
            />
            
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            {/* Franchise */}

            <div className="relative overflow-hidden rounded-[34px] bg-[#08111F] p-9 text-white lg:col-span-6 md:p-10">
              <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative">
                <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-bold tracking-[0.15em] text-blue-300">
                  MOST POPULAR
                </span>

                <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600">
                  <Zap className="h-7 w-7 text-white" />
                </div>

                <p className="mt-8 text-xs font-bold tracking-[0.2em] text-blue-300">
                  EV CHARGING FRANCHISE
                </p>

                <h3 className="mt-3 max-w-lg text-3xl font-bold">
                  Build your own EV charging business.
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-slate-400">
                  Launch and operate an EV charging destination with EV
                  Dock's technology, infrastructure and operational support.
                </p>

                <a
                  href="/contact-us"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-50"
                >
                  Explore franchise
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Property */}

            <div className="rounded-[34px] border border-slate-200 bg-white p-9 lg:col-span-3 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#1E5FA8]">
                <Building2 className="h-7 w-7" />
              </div>

              <p className="mt-8 text-xs font-bold tracking-[0.2em] text-[#1E5FA8]">
                PROPERTY
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-950">
                Turn your property into an EV destination.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Hotels, offices, retail, residential communities and
                destination locations.
              </p>

              <a
                href="/contact-us"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1E5FA8]"
              >
                Partner your property
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Investment */}

            <div className="rounded-[34px] border border-violet-100 bg-gradient-to-br from-violet-50 to-blue-50 p-9 lg:col-span-3 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7A3FAF] shadow-sm">
                <TrendingUp className="h-7 w-7" />
              </div>

              <p className="mt-8 text-xs font-bold tracking-[0.2em] text-[#7A3FAF]">
                INVESTMENT
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-950">
                Explore scalable EV opportunities.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Flexible opportunities aligned with your location, goals and
                investment strategy.
              </p>

              <a
                href="/contact-us"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#7A3FAF]"
              >
                Discuss opportunity
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-50 blur-[100px]" />
        <div className="absolute bottom-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-violet-50 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
           <div className="w-full text-center">
            <SectionHeading
              eyebrow="HOW IT WORKS"
              title="Your location."
              highlight="Our expertise."
              stacked={false}
              description="From the first conversation to a live charging network, we make every step simple."
              containerClassName="mx-auto"
            />
          </div>
        </motion.div>

      {/* Journey Cards */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            number: "01",
            title: "Discover",
            text: "Share your location, property or business goals.",
            icon: Search,
            gradient: "from-blue-500/10 to-blue-50",
            iconColor: "text-[#1E5FA8]",
          },
          {
            number: "02",
            title: "Plan",
            text: "We assess your requirements and recommend the right solution.",
            icon: PenTool,
            gradient: "from-violet-500/10 to-violet-50",
            iconColor: "text-[#4B4FAE]",
          },
          {
            number: "03",
            title: "Launch",
            text: "Bring your charging infrastructure online with EV Dock.",
            icon: Zap,
            gradient: "from-cyan-500/10 to-cyan-50",
            iconColor: "text-cyan-600",
          },
          {
            number: "04",
            title: "Operate",
            text: "Monitor performance and keep your network running smoothly.",
            icon: TrendingUp,
            gradient: "from-fuchsia-500/10 to-fuchsia-50",
            iconColor: "text-[#7A3FAF]",
          },
        ].map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.number}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition-all duration-500 group-hover:border-slate-300 group-hover:shadow-[0_20px_50px_rgba(15,23,42,0.09)]">

                {/* Top row */}
                <div className="flex items-start justify-between">

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} ${step.iconColor}`}
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  {/* Number */}
                  <span className="text-3xl font-semibold tracking-[-0.05em] text-slate-100 transition-colors duration-300 group-hover:text-slate-200">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {step.text}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between">

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-300">
                    Step {step.number}
                  </span>

                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className={`flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-[#1E5FA8] group-hover:bg-[#1E5FA8] group-hover:text-white`}
                  >
                    <ArrowRight className="h-3 w-3" />
                  </motion.div>
                </div>

                {/* Gradient hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] transition-transform duration-500 group-hover:scale-x-100" />

                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-100/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          );
        })}
      </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
        >
          <p className="text-xs text-slate-400">
            Ready to get started?
          </p>

          <a
            href="#partner-form"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#1E5FA8]"
          >
            Talk to our team
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

      </div>
    </section>
      {/* =====================================================
          PRODUCTS & SERVICES
      ====================================================== */}

      <section className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading
              eyebrow="PRODUCTS & SERVICES"
              title="Everything you need to"
              highlight="build your EV destination."
              description="From hardware and installation to software and ongoing support,
               EV Dock brings your charging network together."
               />
               <a
                href="/contact-us"
                className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#1E5FA8] px-5 py-2.5 text-[11px] font-semibold text-white shadow-[0_8px_25px_rgba(30,95,168,0.2)] transition hover:-translate-y-0.5 hover:bg-[#174d8a]"
              >
                Talk to our team
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{
                    opacity: 0,
                    x: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                    <Check className="h-4 w-4 text-emerald-500" />
                  </div>

                  <span className="text-sm font-semibold text-slate-700">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNERS
      ====================================================== */}

      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
            eyebrow="OUR PARTNERS"
            title="Growing together with"
            highlight="the EV ecosystem."
            description="Connecting businesses, technology and mobility partners to support EV adoption."
            />
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                className="group flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-12 max-w-[130px] object-contain grayscale opacity-60 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PARTNER FORM
      ====================================================== */}

      <section
        id="partner-form"
        className="relative overflow-hidden bg-slate-50 py-28"
      >
        <div className="absolute right-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="absolute bottom-[-200px] left-[-150px] h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Left */}

            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-bold tracking-[0.2em] text-[#4B4FAE]">
                LET'S WORK TOGETHER
              </span>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.035em] text-slate-950 md:text-5xl">
                Ready to become
                <span className="block bg-gradient-to-r from-[#1E5FA8] to-[#7A3FAF] bg-clip-text text-transparent">
                  an EV Dock partner?
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Tell us about your opportunity. Our partnership team will
                connect with you to understand your location, goals and
                requirements.
              </p>

              <div className="mt-9 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Partnership-focused support
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Get guidance based on your opportunity and business
                      goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Headphones className="h-5 w-5 text-[#1E5FA8]" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Speak with our team
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Discuss your location, requirements and partnership
                      goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                    <Sparkles className="h-5 w-5 text-[#7A3FAF]" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Build for the future
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Create a smarter EV destination with scalable
                      technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}

            <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-7 shadow-[0_30px_100px_rgba(15,23,42,0.10)] md:p-10">
              <div className="absolute right-[-100px] top-[-100px] h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="absolute bottom-[-100px] left-[-100px] h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative">
                <div className="mb-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600">
                      <Handshake className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-950">
                        Partner with EV Dock
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Talk to our team with our team.
                      </p>
                    </div>
                  </div>
                </div>

                <form className="space-y-5">
                  {/* Name / Company */}

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-semibold text-slate-700">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your name"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-slate-700">
                        Company Name
                      </label>

                      <input
                        type="text"
                        placeholder="Company name"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>
                  </div>

                  {/* Phone / Email */}

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-semibold text-slate-700">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-slate-700">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>
                  </div>

                  {/* Partnership */}

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Partnership Type
                    </label>

                    <select
                      defaultValue=""
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                    >
                      <option value="" disabled>
                        Select partnership type
                      </option>

                      <option>EV Charging Franchise</option>
                      <option>Property Partnership</option>
                      <option>Hotel / Hospitality</option>
                      <option>Business / Retail</option>
                      <option>Investment Opportunity</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Location */}

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Location
                    </label>

                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                      <input
                        type="text"
                        placeholder="City / State"
                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                      />
                    </div>
                  </div>

                  {/* Message */}

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Tell us about your opportunity
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Tell us about your property, business or partnership requirement..."
                      className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1E5FA8] focus:bg-white focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  {/* Button */}

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/20"
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      Submit Partnership Enquiry

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    Our team will review your enquiry and connect with you.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-[#07111F] px-7 py-20 text-center md:px-16">
          {/* Glow */}

          <div className="absolute right-[-100px] top-[-150px] h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />

          <div className="absolute bottom-[-150px] left-[-100px] h-96 w-96 rounded-full bg-violet-600/20 blur-[100px]" />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
              <Handshake className="h-7 w-7 text-white" />
            </div>

            <h2 className="mt-7 text-4xl font-bold tracking-[-0.035em] text-white md:text-6xl">
              Let's build the EV future
              <span className="block bg-gradient-to-r from-blue-300 to-violet-300 bg-clip-text text-transparent">
                together.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Have a property, business or investment opportunity?
              Let's explore what we can build together.
            </p>

            <a
              href="#partner-form"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-blue-50"
            >
              Start a conversation

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <BackToTop />
    </main>
  );
};

export default Partner;