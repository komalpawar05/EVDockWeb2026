import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  MapPinned,
  Search,
  Navigation,
  Zap,
  X,
} from "lucide-react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/Common/SectionHeading";

type StationStatus = "Live" | "Expanding" | "Coming Soon";

type Station = {
  id: number;
  city: string;
  state: string;
  area: string;
  address: string;
  category: "Metro" | "Highway" | "Destination";
  status: StationStatus;
  chargers: number;
  available: number;
  power: string;
  connector: string;
  hours: string;
  description: string;
  latitude: number;
  longitude: number;
};

const stations: Station[] = [
  {
    id: 1,
    city: "Mumbai",
    state: "Maharashtra",
    area: "Andheri",
    address: "Andheri, Mumbai, Maharashtra",
    category: "Metro",
    status: "Live",
    chargers: 4,
    available: 3,
    power: "60 kW",
    connector: "DC Fast",
    hours: "24/7",
    description:
      "Fast and reliable EV charging for everyday urban journeys.",
    latitude: 19.1364, 
    longitude: 72.8296,
  },
  {
    id: 2,
    city: "Mumbai",
    state: "Maharashtra",
    area: "Bandra Kurla Complex",
    address: "BKC, Mumbai, Maharashtra",
    category: "Metro",
    status: "Live",
    chargers: 6,
    available: 4,
    power: "120 kW",
    connector: "DC Fast",
    hours: "24/7",
    description:
      "High-performance charging located in Mumbai's commercial hub.",
    latitude: 19.0596,
    longitude: 72.8656,
  },
  {
    id: 3,
    city: "Mumbai",
    state: "Maharashtra",
    area: "Powai",
    address: "Powai, Mumbai, Maharashtra",
    category: "Metro",
    status: "Live",
    chargers: 4,
    available: 2,
    power: "60 kW",
    connector: "DC Fast",
    hours: "24/7",
    description:
      "Convenient charging access for Powai and surrounding areas.",
    latitude: 19.1176,
    longitude: 72.906,
  },
  {
    id: 4,
    city: "Mumbai",
    state: "Maharashtra",
    area: "Lower Parel",
    address: "Lower Parel, Mumbai, Maharashtra",
    category: "Metro",
    status: "Expanding",
    chargers: 6,
    available: 0,
    power: "120 kW",
    connector: "DC Fast",
    hours: "24/7",
    description:
      "Expanding charging infrastructure for central Mumbai.",
    latitude: 18.998,
    longitude: 72.8258,
  },
  {
    id: 5,
    city: "Pune",
    state: "Maharashtra",
    area: "Hinjewadi",
    address: "Hinjewadi, Pune, Maharashtra",
    category: "Metro",
    status: "Live",
    chargers: 4,
    available: 3,
    power: "60 kW",
    connector: "DC Fast",
    hours: "24/7",
    description:
      "Reliable charging for Pune's technology and business district.",
    latitude: 18.5912,
    longitude: 73.7389,
  },
  {
    id: 6,
    city: "Pune",
    state: "Maharashtra",
    area: "Kharadi",
    address: "Kharadi, Pune, Maharashtra",
    category: "Metro",
    status: "Live",
    chargers: 6,
    available: 5,
    power: "120 kW",
    connector: "DC Fast",
    hours: "24/7",
    description:
      "Convenient fast charging for eastern Pune.",
    latitude: 18.551,
    longitude: 73.946,
  },
  {
    id: 7,
    city: "Bengaluru",
    state: "Karnataka",
    area: "Whitefield",
    address: "Whitefield, Bengaluru, Karnataka",
    category: "Metro",
    status: "Live",
    chargers: 6,
    available: 4,
    power: "120 kW",
    connector: "DC Fast",
    hours: "24/7",
    description:
      "Connected charging access for Bengaluru's growing EV community.",
    latitude: 12.9698,
    longitude: 77.75,
  },
  {
    id: 8,
    city: "New Delhi",
    state: "Delhi",
    area: "Aerocity",
    address: "Aerocity, New Delhi",
    category: "Metro",
    status: "Live",
    chargers: 4,
    available: 2,
    power: "60 kW",
    connector: "DC Fast",
    hours: "24/7",
    description:
      "Strategic charging access close to Delhi's airport corridor.",
    latitude: 28.5562,
    longitude: 77.100,
  },
  {
    id: 9,
    city: "Ahmedabad",
    state: "Gujarat",
    area: "SG Highway",
    address: "SG Highway, Ahmedabad, Gujarat",
    category: "Highway",
    status: "Live",
    chargers: 8,
    available: 6,
    power: "120 kW",
    connector: "DC Fast",
    hours: "24/7",
    description:
      "Fast charging along an important western mobility corridor.",
    latitude: 23.042,
    longitude: 72.508,
  },
  {
    id: 10,
    city: "Jaipur",
    state: "Rajasthan",
    area: "Delhi-Jaipur Highway",
    address: "Delhi-Jaipur Highway, Rajasthan",
    category: "Highway",
    status: "Expanding",
    chargers: 6,
    available: 0,
    power: "120 kW",
    connector: "DC Fast",
    hours: "24/7",
    description:
      "Charging infrastructure supporting long-distance Rajasthan travel.",
    latitude: 26.9124,
    longitude: 75.7873,
  },
  {
    id: 11,
    city: "Kochi",
    state: "Kerala",
    area: "Kakkanad",
    address: "Kakkanad, Kochi, Kerala",
    category: "Destination",
    status: "Expanding",
    chargers: 4,
    available: 0,
    power: "60 kW",
    connector: "DC Fast",
    hours: "24/7",
    description:
      "Destination charging for Kerala's urban and business communities.",
    latitude: 10.0159,
    longitude: 76.3419,
  },
  {
    id: 12,
    city: "Goa",
    state: "Goa",
    area: "North Goa",
    address: "North Goa, Goa",
    category: "Destination",
    status: "Coming Soon",
    chargers: 4,
    available: 0,
    power: "120 kW",
    connector: "DC Fast",
    hours: "24/7",
    description:
      "Next-generation EV charging planned for popular travel destinations.",
    latitude: 15.4909,
    longitude: 73.8278,
  },
];

const categories = ["All", "Metro", "Highway", "Destination"];

const EVNetwork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [selectedStation, setSelectedStation] =
    useState<Station | null>(null);

  const filteredStations = useMemo(() => {
    const query = search.trim().toLowerCase();

    return stations.filter((station) => {
      const categoryMatch =
        activeCategory === "All" ||
        station.category === activeCategory;

      const searchMatch =
        !query ||
        station.city.toLowerCase().includes(query) ||
        station.state.toLowerCase().includes(query) ||
        station.area.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const cities = useMemo(() => {
    return Array.from(new Set(stations.map((station) => station.city)));
  }, []);

  const cityStations = filteredStations.filter(
    (station) => station.city === selectedCity
  );

  const selectedCityCount = stations.filter(
    (station) => station.city === selectedCity
  ).length;

  const liveStations = stations.filter(
    (station) => station.status === "Live"
  ).length;

  const availableChargers = stations.reduce(
    (total, station) => total + station.available,
    0
  );

  const openDirections = (station: Station) => {
    const query = encodeURIComponent(station.address);

    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const scrollToLocations = () => {
    document
      .getElementById("locations")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <main className="min-h-screen bg-[#F7F9FC] text-slate-900">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#06111E] text-white">
        <Navbar />

        <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="pointer-events-none absolute right-[-180px] top-[10%] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="pointer-events-none absolute bottom-[-250px] left-[40%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[150px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-10 lg:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
            {/* Hero content */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2">
                <BatteryCharging
                  size={14}
                  className="text-blue-400"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-300">
                  EV Dock Network
                </span>
              </div>

              <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[76px]">
                Find your next
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  charge.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
                Discover EV Dock charging stations across cities,
                highways and destinations. Find a charger that fits
                your journey.
              </p>

              {/* Hero search */}

              <div className="mt-9 max-w-2xl">
                <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.06] p-2 backdrop-blur-xl sm:flex-row">
                  <div className="relative flex-1">
                    <Search
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          scrollToLocations();
                        }
                      }}
                      placeholder="Search city, area or charger"
                      className="h-12 w-full rounded-xl bg-transparent pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-500"
                    />
                  </div>

                  <button
                    onClick={scrollToLocations}
                    className="flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold transition hover:bg-blue-500"
                  >
                    Find charger
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-xs text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Live stations
                </span>

                <span className="flex items-center gap-2">
                  <Zap size={13} className="text-blue-400" />
                  Fast charging
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={13} className="text-cyan-400" />
                  24/7 access
                </span>
              </div>
            </motion.div>

            {/* Hero visual */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto h-[420px] w-full max-w-[500px]"
            >
              <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10" />

              <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10" />

              {/* center charger */}

              <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[32px] border border-blue-400/30 bg-[#0A1A2D] shadow-[0_0_100px_rgba(37,99,235,0.35)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
                  <Zap size={30} fill="currentColor" />
                </div>
              </div>

              <HeroLocation
                city="Mumbai"
                state="MH"
                position="left-[2%] top-[13%]"
              />

              <HeroLocation
                city="Delhi"
                state="DL"
                position="right-[2%] top-[20%]"
              />

              <HeroLocation
                city="Pune"
                state="MH"
                position="left-[7%] bottom-[15%]"
              />

              <HeroLocation
                city="Bengaluru"
                state="KA"
                position="right-[4%] bottom-[13%]"
              />

              <HeroLocation
                city="Ahmedabad"
                state="GJ"
                position="left-[38%] top-[2%]"
                small
              />

              <HeroLocation
                city="Hyderabad"
                state="TS"
                position="right-[37%] bottom-[2%]"
                small
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NETWORK STATS
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          <NetworkStat
            value={`${cities.length}+`}
            label="Cities"
          />

          <NetworkStat
            value={`${stations.length}+`}
            label="Charging locations"
          />

          <NetworkStat
            value={`${liveStations}`}
            label="Live stations"
          />

          <NetworkStat
            value={`${availableChargers}`}
            label="Chargers available"
          />
        </div>
      </section>

      {/* =====================================================
          NETWORK INTRO
      ====================================================== */}

      <section className="bg-white px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="THE NETWORK"
              title="Built around"
              highlight="how India moves."
              description="From daily city commutes to long-distance road trips, EV Dock is creating charging access around the places people live, work, travel and stop."
            />

            <div className="grid gap-4 sm:grid-cols-3">
              <NetworkTypeCard
                icon={<MapPin size={22} />}
                number="01"
                title="City"
                description="Convenient charging for everyday urban mobility."
              />

              <NetworkTypeCard
                icon={<ArrowRight size={22} />}
                number="02"
                title="Highway"
                description="Fast charging built around longer journeys."
              />

              <NetworkTypeCard
                icon={<BatteryCharging size={22} />}
                number="03"
                title="Destination"
                description="Charge where you already spend your time."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCATION EXPLORER
      ====================================================== */}

      <section
        id="locations"
        className="bg-[#F5F8FC] px-5 py-24 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            {/* Left */}

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">
                Find a charger
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-[-0.045em] text-slate-900 md:text-5xl">
                Charge closer
                <span className="block text-blue-600">
                  to where you are.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
                Search by city or area and explore individual EV
                Dock charging stations.
              </p>

              {/* Search */}

              <div className="relative mt-7">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search city or area"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Categories */}

              <div className="mt-5 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-[10px] font-bold transition ${
                      activeCategory === category
                        ? "bg-[#071321] text-white"
                        : "border border-slate-200 bg-white text-slate-500 hover:border-blue-300 hover:text-blue-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Cities */}

              <div className="mt-8">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  Popular cities
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  {cities.map((city) => {
                    const count = stations.filter(
                      (station) => station.city === city
                    ).length;

                    return (
                      <button
                        key={city}
                        onClick={() => {
                          setSelectedCity(city);
                          setSelectedStation(null);
                        }}
                        className={`flex items-center justify-between rounded-xl border p-3 text-left transition ${
                          selectedCity === city
                            ? "border-blue-200 bg-blue-50 text-blue-700"
                            : "border-slate-200 bg-white text-slate-600 hover:border-blue-200"
                        }`}
                      >
                        <span className="text-xs font-semibold">
                          {city}
                        </span>

                        <span className="text-[9px] text-slate-400">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right station list */}

            <div className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-sm md:p-7">
              <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPinned
                      size={16}
                      className="text-blue-600"
                    />

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                      Charging locations
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                    {selectedCity}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    {selectedCityCount} charging locations
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-[9px] font-bold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Network active
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {cityStations.length > 0 ? (
                  cityStations.map((station, index) => (
                    <StationCard
                      key={station.id}
                      station={station}
                      index={index}
                      onView={() => setSelectedStation(station)}
                      onDirections={() => openDirections(station)}
                    />
                  ))
                ) : (
                  <div className="rounded-2xl border border-dashed border-slate-200 px-6 py-14 text-center">
                    <MapPin
                      size={28}
                      className="mx-auto text-slate-300"
                    />

                    <p className="mt-4 text-sm font-semibold text-slate-700">
                      No charging location found
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Try another city, area or category.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATION DETAILS
      ====================================================== */}

      {selectedStation && (
        <section className="px-5 pb-24 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#071321] p-7 text-white md:p-10"
          >
            <button
              onClick={() => setSelectedStation(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>

            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <StatusBadge status={selectedStation.status} />

                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-wider text-slate-400">
                    {selectedStation.category}
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
                  {selectedStation.area}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {selectedStation.city}, {selectedStation.state}
                </p>

                <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
                  {selectedStation.description}
                </p>

                <div className="mt-7 flex items-start gap-3">
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0 text-blue-400"
                  />

                  <p className="text-sm text-slate-300">
                    {selectedStation.address}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={() => openDirections(selectedStation)}
                    disabled={
                      selectedStation.status === "Coming Soon"
                    }
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-xs font-bold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Navigation size={15} />
                    Get directions
                  </button>

                  <button
                    onClick={() => setSelectedStation(null)}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-xs font-bold text-slate-300 transition hover:bg-white/[0.08]"
                  >
                    Back to locations
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <DetailMetric
                  icon={<Zap size={18} />}
                  label="Power"
                  value={selectedStation.power}
                />

                <DetailMetric
                  icon={<BatteryCharging size={18} />}
                  label="Type"
                  value={selectedStation.connector}
                />

                <DetailMetric
                  icon={<MapPin size={18} />}
                  label="Chargers"
                  value={`${selectedStation.chargers}`}
                />

                <DetailMetric
                  icon={<Check size={18} />}
                  label="Available"
                  value={`${selectedStation.available}`}
                />
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* =====================================================
          WHY EV DOCK
      ====================================================== */}

      <section className="bg-white px-5 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <SectionHeading
              eyebrow="Why EV Dock"
              title="More than"
              highlight="a charger."
              description="A connected charging experience designed around reliable infrastructure, accessible locations and the everyday EV driver."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <Feature
                icon={<Zap size={18} />}
                title="Fast charging"
                description="High-performance charging designed for modern EV journeys."
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
                description="A digital-first charging experience built around EV drivers."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-5 py-20 md:px-10 lg:px-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#071321] px-7 py-16 text-white md:px-12">
          <div className="pointer-events-none absolute right-[-100px] top-[-180px] h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[120px]" />

          <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-center">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-400">
                EV Dock Network
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-[-0.055em] md:text-5xl">
                Wherever you go.
                <span className="block text-blue-400">
                  Find a charge.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
                Discover EV Dock charging locations across cities,
                highways and destinations.
              </p>
            </div>

            <button
              onClick={scrollToLocations}
              className="group flex w-fit shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#071321] transition hover:bg-blue-50"
            >
              Explore locations

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

/* =========================================================
   HERO LOCATION
========================================================= */

const HeroLocation = ({
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
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className={`absolute ${position} z-30 ${
        small ? "scale-75" : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-blue-300/30 bg-blue-500/10">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />

          <span className="absolute inset-[-5px] rounded-full border border-blue-400/10" />
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
   NETWORK STAT
========================================================= */

const NetworkStat = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  return (
    <div className="border-r border-slate-100 px-5 py-7 last:border-r-0 md:px-8 md:py-9">
      <p className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {value}
      </p>

      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
        {label}
      </p>
    </div>
  );
};

/* =========================================================
   NETWORK TYPE CARD
========================================================= */

const NetworkTypeCard = ({
  icon,
  number,
  title,
  description,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-[24px] border border-slate-200 bg-[#F8FAFD] p-6 transition hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-100/40"
    >
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold tracking-[0.2em] text-slate-300">
          {number}
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          {icon}
        </div>
      </div>

      <h3 className="mt-8 text-xl font-bold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-xs leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-blue-600">
        Explore
        <ChevronRight size={13} />
      </div>
    </motion.div>
  );
};

/* =========================================================
   STATION CARD
========================================================= */

const StationCard = ({
  station,
  index,
  onView,
  onDirections,
}: {
  station: Station;
  index: number;
  onView: () => void;
  onDirections: () => void;
}) => {
  const isLive = station.status === "Live";
  const isComingSoon = station.status === "Coming Soon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-blue-200 hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
            <MapPin size={18} />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-bold text-slate-900">
                {station.area}
              </h4>

              <StatusBadge status={station.status} />
            </div>

            <p className="mt-1 text-xs text-slate-400">
              {station.address}
            </p>
          </div>
        </div>

        <span className="hidden text-[9px] font-bold uppercase tracking-wider text-slate-300 sm:block">
          {station.category}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 divide-x divide-slate-100 rounded-xl bg-slate-50 py-3">
        <MiniStat
          value={station.power}
          label="Power"
        />

        <MiniStat
          value={`${station.available}/${station.chargers}`}
          label="Available"
        />

        <MiniStat
          value={station.connector}
          label="Type"
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          onClick={onView}
          className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 transition hover:text-blue-700"
        >
          View station
          <ArrowUpRight size={13} />
        </button>

        <button
          onClick={onDirections}
          disabled={!isLive}
          className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-[10px] font-bold text-slate-600 transition hover:border-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Navigation size={12} />
          {isComingSoon ? "Coming soon" : "Directions"}
        </button>
      </div>
    </motion.div>
  );
};

/* =========================================================
   MINI STAT
========================================================= */

const MiniStat = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  return (
    <div className="px-3 text-center">
      <p className="text-[11px] font-bold text-slate-800">
        {value}
      </p>

      <p className="mt-1 text-[8px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </p>
    </div>
  );
};

/* =========================================================
   DETAIL METRIC
========================================================= */

const DetailMetric = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      <p className="mt-5 text-xl font-bold text-white">
        {value}
      </p>

      <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.15em] text-slate-500">
        {label}
      </p>
    </div>
  );
};

/* =========================================================
   STATUS
========================================================= */

const StatusBadge = ({
  status,
}: {
  status: StationStatus;
}) => {
  const styles = {
    Live: "bg-emerald-50 text-emerald-600",
    Expanding: "bg-blue-50 text-blue-600",
    "Coming Soon": "bg-slate-100 text-slate-500",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[7px] font-bold uppercase tracking-wider ${styles[status]}`}
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
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-[24px] border border-slate-200 bg-[#F8FAFD] p-6 transition hover:bg-white hover:shadow-lg"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
        {icon}
      </div>

      <h3 className="mt-5 font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-6 text-slate-500">
        {description}
      </p>
    </motion.div>
  );
};

export default EVNetwork;