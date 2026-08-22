import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Check,
  ChevronRight,
  MapPin,
  Search,
  Clock3,
  MapPinned,
  Zap,
} from "lucide-react";
import Footer  from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/Common/SectionHeading"; 
type Location = {
  city: string;
  state: string;
  category: string;
  status: "Live" | "Expanding" | "Coming Soon";
  description: string;
};

const locations: Location[] = [
  {
    city: "Mumbai",
    state: "Maharashtra",
    category: "Metro",
    status: "Live",
    description:
      "Connected charging infrastructure across the Mumbai metropolitan region.",
  },
  {
    city: "Pune",
    state: "Maharashtra",
    category: "Metro",
    status: "Live",
    description:
      "EV charging access for urban drivers, businesses and commercial mobility.",
  },
  {
    city: "Bengaluru",
    state: "Karnataka",
    category: "Metro",
    status: "Live",
    description:
      "A connected charging ecosystem supporting Bengaluru's growing EV community.",
  },
  {
    city: "New Delhi",
    state: "Delhi",
    category: "Metro",
    status: "Live",
    description:
      "Strategic charging coverage across India's capital region.",
  },
  {
    city: "Rishikesh",
    state: "Uttarakhand",
    category: "Metro",
    status: "Live",
    description:
      "Charging infrastructure designed for city and intercity EV travel.",
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
    category: "Highway",
    status: "Live",
    description:
      "Connected charging access across important western mobility corridors.",
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    category: "Metro",
    status: "Expanding",
    description:
      "Expanding EV Dock infrastructure for the Hyderabad mobility ecosystem.",
  },
  {
    city: "Jaipur",
    state: "Rajasthan",
    category: "Highway",
    status: "Expanding",
    description:
      "Building charging access along key Rajasthan travel routes.",
  },
  {
    city: "Kochi",
    state: "Kerala",
    category: "Destination",
    status: "Expanding",
    description:
      "Growing charging infrastructure for Kerala's urban and destination travel.",
  },
  {
    city: "Goa",
    state: "Goa",
    category: "Destination",
    status: "Coming Soon",
    description:
      "Next-generation EV charging planned for popular travel destinations.",
  },
];

const EVNetwork: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const [selectedLocation, setSelectedLocation] =
    useState<Location | null>(null);

  const categories = [
    "All",
    "Metro",
    "Highway",
    "Destination",
  ];

  const filteredLocations = locations.filter(
    (location) => {
      const categoryMatch =
        activeCategory === "All" ||
        location.category === activeCategory;

      const searchMatch =
        location.city
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        location.state
          .toLowerCase()
          .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    }
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F9FC] text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[700px] overflow-hidden bg-[#06111E] text-white">
        <Navbar/>
        {/* Ambient glow */}

        <div className="absolute left-[-200px] top-[-200px] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[160px]" />

        <div className="absolute right-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[150px]" />

        <div className="absolute bottom-[-250px] left-[35%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Network lines */}

        <NetworkLines />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-10 lg:px-16">

          {/* Main hero */}

          <div className="relative z-20 mt-20 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

            <div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2"
              >

                <BatteryCharging
                  size={14}
                  className="text-blue-400"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-300">
                  Connected electric mobility
                </span>

              </motion.div>


              <motion.h1
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="max-w-3xl text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[78px]"
              >

                One network.

                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                  Every journey.
                </span>

              </motion.h1>


              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                }}
                className="mt-7 max-w-xl text-base leading-7 text-slate-400 md:text-lg"
              >
                EV Dock is building a connected charging
                network across cities, highways and
                destinations — making every electric
                journey easier.
              </motion.p>


              <div className="mt-9 flex flex-wrap gap-4">

                <button
                  onClick={() =>
                    document
                      .getElementById("network")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="group flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold transition hover:bg-blue-500"
                >

                  Explore network

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />

                </button>

                <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-slate-300 backdrop-blur transition hover:bg-white/[0.08]">

                  Partner with EV Dock

                </button>

              </div>

            </div>


            {/* Hero network visual */}

            <div className="relative mx-auto h-[430px] w-full max-w-[520px]">

              {/* Outer rings */}

              <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

              <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10" />

              <div className="absolute left-1/2 top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10" />


              {/* Center */}

              <div className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[28px] border border-blue-400/30 bg-[#0A1A2D] shadow-[0_0_80px_rgba(37,99,235,0.35)]">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">

                  <Zap
                    size={26}
                    fill="currentColor"
                  />

                </div>

              </div>


              {/* Nodes */}

              <HeroNode
                city="Mumbai"
                state="MH"
                position="left-[4%] top-[12%]"
              />

              <HeroNode
                city="Delhi"
                state="DL"
                position="right-[3%] top-[18%]"
              />

              <HeroNode
                city="Bengaluru"
                state="KA"
                position="left-[8%] bottom-[14%]"
              />

              <HeroNode
                city="Chennai"
                state="TN"
                position="right-[7%] bottom-[10%]"
              />

              <HeroNode
                city="Ahmedabad"
                state="GJ"
                position="left-[38%] top-[2%]"
                small
              />

              <HeroNode
                city="Hyderabad"
                state="TS"
                position="right-[37%] bottom-[1%]"
                small
              />

            </div>

          </div>

        </div>

      </section>
      {/* =====================================================
          NETWORK INTRO
      ====================================================== */}

      <section
        id="network"
        className="relative overflow-hidden bg-white px-5 py-24 md:px-10 md:py-28 lg:px-16">
      
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

              {/* Left — Heading */}
              <div>
                <SectionHeading
                  eyebrow="THE NETWORK"
                  title="Built around"
                  highlight="how India moves."
                  description="From daily city commutes to long-distance road trips,
                  EV Dock is creating charging access around the places
                  people live, work, travel and stop."
                />
              </div>

              {/* Right — Content */}
              <div className="max-w-3xl">
                {/* Network Pills */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <NetworkPill text="Urban mobility" />
                  <NetworkPill text="Highway corridors" />
                  <NetworkPill text="Hotels & destinations" />
                  <NetworkPill text="Commercial locations" />
                </div>

                {/* Bottom Highlight */}
              <div className="mt-10 grid gap-4 sm:grid-cols-3">

                {/* Card 1 */}
                <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl hover:shadow-blue-100"
                  >
                    <div className="flex items-center justify-between">
                      <motion.div
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
                      >
                        <Zap size={24} />
                      </motion.div>

                      <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                        Power
                      </span>
                    </div>

                    <div className="mt-6">
                      <div className="text-2xl font-bold text-slate-900">
                        24/7
                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        Charging access
                      </p>
                    </div>
                </motion.div>
                {/* Card 2 */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl hover:shadow-indigo-100"
                >
                  <div className="flex items-center justify-between">
                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"
                    >
                      <Clock3 size={24} />
                    </motion.div>

                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Speed
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="text-2xl font-bold text-slate-900">
                      Fast
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      Reliable charging
                    </p>
                  </div>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-xl hover:shadow-purple-100"
                >
                  <div className="flex items-center justify-between">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600"
                    >
                      <MapPinned size={24} />
                    </motion.div>

                    <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Network
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="text-2xl font-bold text-slate-900">
                      India
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      Growing network
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NETWORK CATEGORIES
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#07111f] px-5 py-20 md:px-10 md:py-24 lg:px-16">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-[-180px] top-[-120px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-14 w-full text-center">
          <div className="mx-auto w-full max-w-3xl">
            <SectionHeading
              centered
              eyebrow="Charging Network"
              title="Wherever the road takes you,"
              titleClassName="text-white"
              highlight="EV Dock is there."
              description="A connected charging ecosystem designed for everyday mobility, long-distance travel and destination charging."
            />
          </div>
      </div>
          {/* Timeline */}
          <div className="relative">

            {/* Connecting line */}
            <div className="absolute left-[25px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-blue-500/60 via-indigo-500/50 to-violet-500/60 md:block" />


            {/* CITY */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative mb-5 flex gap-5 md:gap-6"
            >

              {/* Number */}
              <div className="relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-4 border-[#07111f] bg-blue-500 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
                01
              </div>

              {/* Content */}
              <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-white/[0.07] md:p-7">

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                  <div className="flex gap-4">

                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-400/10"
                    >
                      <MapPin size={21} />
                    </motion.div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-white">
                          City Network
                        </h3>

                        <span className="hidden rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-400 sm:inline-flex">
                          Urban
                        </span>
                      </div>

                      <p className="mt-1 max-w-lg text-sm leading-6 text-slate-400">
                        Reliable charging access for everyday urban EV journeys.
                      </p>
                    </div>

                  </div>

                  <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
                    {[
                      "Shopping",
                      "Offices",
                      "Residential",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </motion.div>


            {/* HIGHWAY */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative mb-5 flex gap-5 md:gap-6"
            >

              {/* Number */}
              <div className="relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-4 border-[#07111f] bg-indigo-500 text-sm font-bold text-white shadow-lg shadow-indigo-500/20">
                02
              </div>

              {/* Content */}
              <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-indigo-400/30 group-hover:bg-white/[0.07] md:p-7">

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                  <div className="flex gap-4">

                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-400/10"
                    >
                      <ArrowRight size={21} />
                    </motion.div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-white">
                          Highway Network
                        </h3>

                        <span className="hidden rounded-full bg-indigo-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-indigo-400 sm:inline-flex">
                          Travel
                        </span>
                      </div>

                      <p className="mt-1 max-w-lg text-sm leading-6 text-slate-400">
                        Strategic charging infrastructure for longer journeys.
                      </p>
                    </div>

                  </div>

                  <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
                    {[
                      "Highways",
                      "Corridors",
                      "Rest stops",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </motion.div>


            {/* DESTINATION */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative flex gap-5 md:gap-6"
            >

              {/* Number */}
              <div className="relative z-10 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border-4 border-[#07111f] bg-violet-500 text-sm font-bold text-white shadow-lg shadow-violet-500/20">
                03
              </div>

              {/* Content */}
              <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-white/[0.07] md:p-7">

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                  <div className="flex gap-4">

                    <motion.div
                      animate={{ scale: [1, 1.06, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 ring-1 ring-violet-400/10"
                    >
                      <BatteryCharging size={21} />
                    </motion.div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-white">
                          Destination Network
                        </h3>

                        <span className="hidden rounded-full bg-violet-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-violet-400 sm:inline-flex">
                          Destination
                        </span>
                      </div>

                      <p className="mt-1 max-w-lg text-sm leading-6 text-slate-400">
                        Charging where drivers already spend their time.
                      </p>
                    </div>

                  </div>

                  <div className="flex flex-wrap gap-2 md:max-w-sm md:justify-end">
                    {[
                      "Hotels",
                      "Restaurants",
                      "Commercial",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </motion.div>

          </div>


          {/* Bottom statement */}
          <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
              <Zap size={16} />
            </div>

            <p className="text-sm text-slate-400">
              One connected network.
              <span className="ml-1 font-medium text-slate-200">
                Multiple destinations. Simpler EV journeys.
              </span>
            </p>
          </div>           
        </div>
      </section>


      {/* =====================================================
          LOCATION EXPLORER
      ====================================================== */}

      <section className="px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              centered
              eyebrow="Explore locations"
              title=" Find EV Dock"
              highlight="near your journey."
            />
            </div>
          <div>
           {/* Filters + Search */}
          <div className="mt-6 flex w-full items-center justify-between gap-4">

            {/* Filters - Left */}
            <div className="flex items-center gap-1.5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-[9px] font-bold transition ${
                    activeCategory === category
                      ? "bg-[#071321] text-white"
                      : "border border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search - Right */}
            <div className="relative w-64 shrink-0">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search city or state"
                className="h-9 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-[11px] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
              />
            </div>

          </div>

          </div>
        
          {/* Locations */}
          <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-3">

            {filteredLocations.map((location, index) => (

              <motion.button
                key={`${location.city}-${location.state}`}
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
                  delay: index * 0.03,
                }}
                onClick={() => setSelectedLocation(location)}
                className="group rounded-2xl border border-slate-200 bg-white p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(37,99,235,0.07)]"
              >

                {/* Top */}
                <div className="flex items-center justify-between">

                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <MapPin size={15} />
                  </div>

                  <StatusBadge status={location.status} />

                </div>

                {/* City */}
                <div className="mt-4">

                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    {location.category}
                  </p>

                  <h3 className="mt-1 text-base font-bold tracking-tight text-slate-900">
                    {location.city}
                  </h3>

                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {location.state}
                  </p>

                </div>

                {/* Description */}
                <p className="mt-3 line-clamp-1 text-[10px] leading-5 text-slate-500">
                  {location.description}
                </p>

                {/* Bottom */}
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">

                  <span className="text-[9px] font-bold text-blue-600">
                    View location
                  </span>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpRight size={11} />
                  </span>

                </div>

              </motion.button>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SELECTED LOCATION
      ====================================================== */}

      {selectedLocation && (

        <section className="px-5 pb-12 md:px-10 lg:px-16">

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#071321] p-7 text-white md:p-10"
          >

            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">

              <div>

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-blue-400" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-400">
                    Selected location
                  </p>

                </div>

                <h3 className="mt-3 text-3xl font-bold">
                  {selectedLocation.city}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {selectedLocation.state}
                </p>

                <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
                  {selectedLocation.description}
                </p>

              </div>


              <div className="flex flex-wrap items-center gap-3">

                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">

                  <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-slate-500">
                    Status
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    {selectedLocation.status}
                  </p>

                </div>

                <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-xs font-bold hover:bg-blue-500">

                  Explore

                  <ArrowRight size={15} />

                </button>

              </div>

            </div>

          </motion.div>

        </section>

      )}


      {/* =====================================================
          WHY EV DOCK
      ====================================================== */}

      <section className="bg-[#F0F5FA] px-5 py-24 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow="Why EV Dock"
            title="Designed for the"
            highlight="electric future."
            description="We’re building a smarter charging network that
             connects reliable infrastructure with seamless digital experiences 
             helping drivers charge with confidence wherever the road takes them."
            />
            <div className="grid gap-4 sm:grid-cols-2">

              <Feature
                icon={<Zap size={18} />}
                title="Fast"
                description="High-performance charging designed around modern EV journeys."
              />

              <Feature
                icon={<Check size={18} />}
                title="Reliable"
                description="Connected infrastructure designed for dependable charging access."
              />

              <Feature
                icon={<MapPin size={18} />}
                title="Accessible"
                description="Strategic locations across cities, highways and destinations."
              />

              <Feature
                icon={<BatteryCharging size={18} />}
                title="Connected"
                description="A digital-first charging experience built around the EV driver."
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-5 py-20 md:px-10 lg:px-16">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-gradient-to-br from-[#071321] via-[#0C2340] to-[#174A91] px-7 py-16 text-white md:px-12">

          <div className="absolute right-[-100px] top-[-150px] h-[400px] w-[400px] rounded-full bg-blue-400/20 blur-[110px]" />

          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-center">

            <div>

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-300">
                EV Dock Network
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.055em] md:text-5xl">

                Your journey.
                <span className="block text-blue-300">
                  Our network.
                </span>

              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
                Bring EV charging to the places where
                people live, work, travel and connect.
              </p>

            </div>

            <button className="group flex w-fit shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#071321]">

              Partner with EV Dock

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />

            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />

    </main>
  );
};


/* =========================================================
   NETWORK LINES
========================================================= */

const NetworkLines = () => {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
    >

      <motion.path
        d="M100 180 C300 100 400 300 600 400 C800 500 900 250 1120 180"
        fill="none"
        stroke="#2563EB"
        strokeWidth="1"
        strokeDasharray="5 10"
        initial={{
          strokeDashoffset: 100,
        }}
        animate={{
          strokeDashoffset: 0,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.path
        d="M100 600 C300 500 400 300 600 400 C800 500 950 550 1120 430"
        fill="none"
        stroke="#38BDF8"
        strokeWidth="1"
        strokeDasharray="4 12"
        initial={{
          strokeDashoffset: 100,
        }}
        animate={{
          strokeDashoffset: 0,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <circle
        cx="600"
        cy="400"
        r="4"
        fill="#60A5FA"
      />

      <circle
        cx="300"
        cy="210"
        r="3"
        fill="#60A5FA"
      />

      <circle
        cx="900"
        cy="300"
        r="3"
        fill="#60A5FA"
      />

    </svg>
  );
};


/* =========================================================
   HERO NODE
========================================================= */

const HeroNode = ({
  city,
  state,
  position,
  small = false,
}: {
  city: string;
  state: string;
  position: string;
  small?: boolean;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      className={`absolute ${position} ${
        small
          ? "scale-75"
          : ""
      } z-30`}
    >

      <div className="flex items-center gap-2">

        <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-blue-300/40 bg-blue-500/20">

          <span className="absolute h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.9)]" />

          <span className="absolute inset-[-5px] rounded-full border border-blue-400/20" />

        </div>

        <div>

          <p className="text-[9px] font-bold text-white">
            {city}
          </p>

          <p className="text-[8px] text-slate-500">
            {state}
          </p>

        </div>

      </div>

    </motion.div>
  );
};


/* =========================================================
   NETWORK PILL
========================================================= */

const NetworkPill = ({
  text,
}: {
  text: string;
}) => {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[10px] font-semibold text-slate-600">

      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

      {text}

    </div>
  );
};


/* =========================================================
   NETWORK CATEGORY
========================================================= */

const NetworkCategory = ({
  number,
  icon,
  title,
  description,
  items,
  large = false,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  large?: boolean;
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-slate-200 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        large
          ? "bg-[#071321] text-white"
          : "bg-slate-50"
      }`}
    >

      <div className="flex items-center justify-between">

        <span
          className={`text-[9px] font-bold tracking-[0.2em] ${
            large
              ? "text-blue-400"
              : "text-slate-400"
          }`}
        >
          {number}
        </span>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            large
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
        >
          {icon}
        </div>

      </div>

      <h3 className="mt-10 text-2xl font-bold tracking-tight">
        {title}
      </h3>

      <p
        className={`mt-3 text-xs leading-6 ${
          large
            ? "text-slate-400"
            : "text-slate-500"
        }`}
      >
        {description}
      </p>

      <div className="mt-7 space-y-3">

        {items.map((item) => (

          <div
            key={item}
            className="flex items-center gap-3"
          >

            <Check
              size={13}
              className={
                large
                  ? "text-blue-400"
                  : "text-blue-600"
              }
            />

            <span
              className={`text-[10px] font-semibold ${
                large
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              {item}
            </span>

          </div>

        ))}

      </div>

      <div
        className={`mt-8 flex items-center gap-2 text-[10px] font-bold ${
          large
            ? "text-blue-400"
            : "text-blue-600"
        }`}
      >
        Explore network

        <ChevronRight size={13} />

      </div>

    </div>
    
  );
};


/* =========================================================
   STATUS
========================================================= */

const StatusBadge = ({
  status,
}: {
  status:
    | "Live"
    | "Expanding"
    | "Coming Soon";
}) => {
  const styles = {
    Live: "bg-emerald-50 text-emerald-600",
    Expanding:
      "bg-blue-50 text-blue-600",
    "Coming Soon":
      "bg-slate-100 text-slate-500",
  };

  return (
    <span
      className={`rounded-full px-3 py-1.5 text-[8px] font-bold uppercase tracking-wider ${styles[status]}`}
    >
      {status}
    </span>
  );
};


/* =========================================================
   FEATURE
========================================================= */

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
        {icon}
      </div>

      <h3 className="mt-5 font-bold">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-slate-500">
        {description}
      </p>

    </div>
    
  );
};

export default EVNetwork