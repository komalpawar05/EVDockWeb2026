import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  CheckCircle2,
  ChevronDown,
  Circle,
  Gauge,
  Globe2,
  IndianRupee,
  Layers3,
  PlugZap,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

type Charger = {
  id: number;
  manufacturer: string;
  model: string;
  type: "DC" | "AC";
  power: string;
  connector: string;
  connectors: number;
  protocol: string;
  voltage: string;
  protection: string;
  description: string;
  featured?: boolean;
};

const chargers: Charger[] = [
  {
    id: 1,
    manufacturer: "EV Dock",
    model: "ED-60",
    type: "DC",
    power: "60 kW",
    connector: "CCS2",
    connectors: 1,
    protocol: "OCPP 1.6J",
    voltage: "400V AC",
    protection: "IP54",
    description:
      "A compact DC fast charger designed for highways, commercial locations and fleet charging.",
    featured: true,
  },
  {
    id: 2,
    manufacturer: "EV Dock",
    model: "ED-120",
    type: "DC",
    power: "120 kW",
    connector: "CCS2",
    connectors: 2,
    protocol: "OCPP 1.6J",
    voltage: "400V AC",
    protection: "IP54",
    description:
      "High-performance dual-gun DC charger built for high-demand public charging locations.",
    featured: true,
  },
  {
    id: 3,
    manufacturer: "EV Dock",
    model: "ED-22",
    type: "AC",
    power: "22 kW",
    connector: "Type 2",
    connectors: 1,
    protocol: "OCPP 1.6J",
    voltage: "400V AC",
    protection: "IP55",
    description:
      "Reliable AC charging solution for workplaces, hotels, apartments and commercial properties.",
  },
  {
    id: 4,
    manufacturer: "ABB",
    model: "Terra 54",
    type: "DC",
    power: "50 kW",
    connector: "CCS2",
    connectors: 1,
    protocol: "OCPP",
    voltage: "400V AC",
    protection: "IP54",
    description:
      "DC fast charging solution suitable for public and commercial EV charging applications.",
  },
  {
    id: 5,
    manufacturer: "Delta",
    model: "UFC 200",
    type: "DC",
    power: "200 kW",
    connector: "CCS2",
    connectors: 2,
    protocol: "OCPP",
    voltage: "400V AC",
    protection: "IP55",
    description:
      "High-power charging platform designed for demanding fleet and public charging environments.",
  },
  {
    id: 6,
    manufacturer: "Schneider Electric",
    model: "EVlink Pro AC",
    type: "AC",
    power: "22 kW",
    connector: "Type 2",
    connectors: 1,
    protocol: "OCPP",
    voltage: "400V AC",
    protection: "IP55",
    description:
      "Connected AC charging solution for commercial buildings and workplace environments.",
  },
];

const manufacturers = [
  {
    name: "EV Dock",
    description: "EV Dock charging solutions",
    count: "3 Models",
    initial: "EV",
  },
  {
    name: "ABB",
    description: "DC fast charging solutions",
    count: "1 Model",
    initial: "ABB",
  },
  {
    name: "Delta",
    description: "High-power EV charging",
    count: "1 Model",
    initial: "Δ",
  },
  {
    name: "Schneider Electric",
    description: "Smart AC charging",
    count: "1 Model",
    initial: "SE",
  },
];

const ChargerPage = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<"All" | "DC" | "AC">("All");
  const [manufacturer, setManufacturer] = useState("All");
  const [selectedCharger, setSelectedCharger] = useState<Charger | null>(
    null
  );

  const filteredChargers = useMemo(() => {
    return chargers.filter((charger) => {
      const matchesSearch =
        charger.model.toLowerCase().includes(search.toLowerCase()) ||
        charger.manufacturer.toLowerCase().includes(search.toLowerCase()) ||
        charger.connector.toLowerCase().includes(search.toLowerCase());

      const matchesType = type === "All" || charger.type === type;

      const matchesManufacturer =
        manufacturer === "All" || charger.manufacturer === manufacturer;

      return matchesSearch && matchesType && matchesManufacturer;
    });
  }, [search, type, manufacturer]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-40 left-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(16,185,129,0.12),transparent_35%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <Sparkles className="h-4 w-4" />
              EV Dock Charging Technology
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Powering every journey with{" "}
              <span className="text-emerald-400">smarter charging.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Explore AC and DC charging solutions supported across the EV Dock
              ecosystem. From everyday AC charging to high-speed DC
              infrastructure, find the right technology for every location.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#chargers"
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Explore Chargers
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#manufacturers"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Our Technology Partners
              </a>
            </div>

            {/* Hero Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-bold text-white">AC</p>
                <p className="mt-1 text-sm text-slate-400">Everyday charging</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">DC</p>
                <p className="mt-1 text-sm text-slate-400">Fast charging</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="mt-1 text-sm text-slate-400">Connected support</p>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 rounded-[3rem] bg-emerald-400/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900 p-8">
                  {/* Charger mockup */}
                  <div className="mx-auto w-56">
                    <div className="rounded-[2rem] border border-slate-600 bg-slate-800 p-4 shadow-2xl">
                      <div className="rounded-2xl bg-slate-950 p-4">
                        <div className="mb-5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                            <span className="text-[10px] font-medium text-emerald-400">
                              READY
                            </span>
                          </div>

                          <Zap className="h-4 w-4 text-emerald-400" />
                        </div>

                        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                          <div className="text-center">
                            <p className="text-4xl font-bold text-white">
                              60
                            </p>
                            <p className="mt-1 text-xs text-slate-400">
                              kW FAST CHARGING
                            </p>
                          </div>

                          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-800">
                            <div className="h-full w-3/4 rounded-full bg-emerald-400" />
                          </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <div className="rounded-lg bg-slate-900 p-3">
                            <p className="text-[9px] text-slate-500">
                              CONNECTOR
                            </p>
                            <p className="mt-1 text-xs font-semibold text-white">
                              CCS2
                            </p>
                          </div>

                          <div className="rounded-lg bg-slate-900 p-3">
                            <p className="text-[9px] text-slate-500">
                              PROTOCOL
                            </p>
                            <p className="mt-1 text-xs font-semibold text-white">
                              OCPP
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto h-6 w-24 rounded-b-xl bg-slate-700" />
                    <div className="mx-auto h-4 w-32 rounded-b-2xl bg-slate-800" />
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-lg font-bold text-white">EV Dock</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Smart charging infrastructure
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-16 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-400/10 p-2.5 text-emerald-400">
                    <BatteryCharging className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Charging</p>
                    <p className="font-semibold text-white">60 kW DC</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-16 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-400">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Network</p>
                    <p className="font-semibold text-white">Connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHARGER TYPES
      ========================================================= */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
              Charging solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Charging technology for every need
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Choose the right charging technology based on location,
              charging speed and your business requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* DC */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-50 transition group-hover:scale-125" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-emerald-50 p-3.5 text-emerald-600">
                    <Zap className="h-6 w-6" />
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    FAST
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-950">
                  DC Fast Chargers
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  High-power charging for highways, fleets, commercial hubs
                  and rapid charging locations.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["30 kW", "60 kW", "120 kW", "240 kW+"].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AC */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-50 transition group-hover:scale-125" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-cyan-50 p-3.5 text-cyan-600">
                    <PlugZap className="h-6 w-6" />
                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    EVERYDAY
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-950">
                  AC Chargers
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Reliable everyday charging for workplaces, hotels,
                  apartments, homes and commercial properties.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["3.3 kW", "7.4 kW", "11 kW", "22 kW"].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* EV Dock */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-7 text-white shadow-xl">
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-400/10 blur-2xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-emerald-400/10 p-3.5 text-emerald-400">
                    <Sparkles className="h-6 w-6" />
                  </div>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    EV DOCK
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold">
                  EV Dock Chargers
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
                  EV Dock's charging solutions designed for connected,
                  scalable and future-ready EV infrastructure.
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-emerald-400">
                  Explore EV Dock technology
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHARGER EXPLORER
      ========================================================= */}
      <section id="chargers" className="scroll-mt-20 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
                Charger catalogue
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Find the right charger
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Compare supported charger models, power ratings, connectors
                and communication capabilities.
              </p>
            </div>

            <div className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-900">
                {filteredChargers.length}
              </span>{" "}
              chargers
            </div>
          </div>

          {/* Filters */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto]">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search charger, model or connector..."
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10"
                />
              </div>

              {/* Manufacturer */}
              <div className="relative">
                <select
                  value={manufacturer}
                  onChange={(e) => setManufacturer(e.target.value)}
                  className="h-12 min-w-[190px] appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm font-medium outline-none focus:border-emerald-400"
                >
                  <option value="All">All Manufacturers</option>
                  {manufacturers.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>

                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>

              {/* Type */}
              <div className="flex h-12 rounded-xl border border-slate-200 bg-white p-1">
                {(["All", "DC", "AC"] as const).map((item) => (
                  <button
                    key={item}
                    onClick={() => setType(item)}
                    className={`rounded-lg px-5 text-sm font-semibold transition ${
                      type === item
                        ? "bg-slate-950 text-white"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Charger Cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredChargers.map((charger) => (
              <article
                key={charger.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
              >
                {/* Top */}
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-100/60 blur-2xl" />

                  {/* Charger illustration */}
                  <div className="relative">
                    <div className="h-28 w-20 rounded-2xl border border-slate-300 bg-slate-800 p-2 shadow-xl">
                      <div className="flex h-full flex-col rounded-xl bg-slate-950 p-2">
                        <div className="flex items-center justify-between">
                          <Circle className="h-2.5 w-2.5 fill-emerald-400 text-emerald-400" />
                          <Zap className="h-3 w-3 text-emerald-400" />
                        </div>

                        <div className="mt-4 rounded-md bg-slate-900 p-2 text-center">
                          <p className="text-sm font-bold text-white">
                            {charger.power.replace(" kW", "")}
                          </p>
                          <p className="text-[6px] text-slate-500">kW</p>
                        </div>

                        <div className="mt-auto h-1 rounded-full bg-emerald-400/80" />
                      </div>
                    </div>

                    <div className="mx-auto h-3 w-10 rounded-b-md bg-slate-700" />
                  </div>

                  {charger.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-slate-950">
                      EV DOCK
                    </span>
                  )}

                  <span
                    className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${
                      charger.type === "DC"
                        ? "bg-slate-950 text-white"
                        : "bg-white text-slate-700"
                    }`}
                  >
                    {charger.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                        {charger.manufacturer}
                      </p>

                      <h3 className="mt-1 text-xl font-bold text-slate-950">
                        {charger.model}
                      </h3>
                    </div>

                    <div className="rounded-xl bg-slate-100 p-2.5 text-slate-600">
                      {charger.type === "DC" ? (
                        <Zap className="h-5 w-5" />
                      ) : (
                        <PlugZap className="h-5 w-5" />
                      )}
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-[10px] font-semibold uppercase text-slate-400">
                        Power
                      </p>
                      <p className="mt-1 font-bold text-slate-900">
                        {charger.power}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-3">
                      <p className="text-[10px] font-semibold uppercase text-slate-400">
                        Connector
                      </p>
                      <p className="mt-1 font-bold text-slate-900">
                        {charger.connector}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Gauge className="h-4 w-4" />
                      {charger.protocol}
                    </div>

                    <button
                      onClick={() => setSelectedCharger(charger)}
                      className="group/btn inline-flex items-center gap-1.5 text-sm font-bold text-slate-950"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredChargers.length === 0 && (
            <div className="mt-8 rounded-3xl border border-dashed border-slate-300 py-20 text-center">
              <Search className="mx-auto h-10 w-10 text-slate-300" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                No chargers found
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Try another model, manufacturer or charger type.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          MANUFACTURERS
      ========================================================= */}
      <section
        id="manufacturers"
        className="scroll-mt-20 bg-slate-950 py-20 text-white lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-400">
              Technology ecosystem
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built around a growing charging ecosystem
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              EV Dock works with charging hardware manufacturers to provide
              flexible and scalable infrastructure for different locations,
              fleets and business requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {manufacturers.map((item, index) => (
              <div
                key={item.name}
                className={`group rounded-3xl border p-6 transition hover:-translate-y-1 ${
                  index === 0
                    ? "border-emerald-400/30 bg-emerald-400/[0.07]"
                    : "border-white/10 bg-white/[0.04] hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-black ${
                      index === 0
                        ? "bg-emerald-400 text-slate-950"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {item.initial}
                  </div>

                  <ArrowRight className="h-5 w-5 text-slate-500 transition group-hover:translate-x-1 group-hover:text-emerald-400" />
                </div>

                <h3 className="mt-6 text-lg font-bold">{item.name}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <Layers3 className="h-4 w-4" />
                  {item.count}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-emerald-400/10 p-3 text-emerald-400">
                  <Globe2 className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="font-bold text-white">
                    Your hardware. Our network.
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Looking to integrate your charging hardware with EV Dock?
                  </p>
                </div>
              </div>

              <button className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-400">
                Become a Technology Partner
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY EV DOCK
      ========================================================= */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
                Why EV Dock
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                More than a charger. A connected charging experience.
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                EV Dock combines charging hardware, connectivity and network
                intelligence to help businesses build dependable EV charging
                infrastructure.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800">
                Discover EV Dock
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShieldCheck,
                  title: "Reliable infrastructure",
                  text: "Charging solutions designed for dependable day-to-day operation.",
                },
                {
                  icon: Globe2,
                  title: "Smart connectivity",
                  text: "Connected chargers with remote monitoring and management.",
                },
                {
                  icon: SlidersHorizontal,
                  title: "Flexible deployment",
                  text: "Solutions for workplaces, highways, fleets, retail and more.",
                },
                {
                  icon: Layers3,
                  title: "Scalable network",
                  text: "Expand your charging infrastructure as demand grows.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-200 hover:bg-white hover:shadow-lg"
                  >
                    <div className="inline-flex rounded-2xl bg-white p-3 text-emerald-600 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-14 sm:px-12 lg:px-16">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-400">
                Start charging smarter
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to build your charging network?
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                Find the right charging solution for your location, fleet or
                business.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-emerald-300">
                Explore EV Dock
                <ArrowRight className="h-4 w-4" />
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10">
                Talk to Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DETAILS MODAL
      ========================================================= */}
      {selectedCharger && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCharger(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative overflow-hidden bg-slate-950 px-7 py-8 text-white sm:px-10">
              <button
                onClick={() => setSelectedCharger(null)}
                className="absolute right-5 top-5 rounded-xl bg-white/10 p-2 transition hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-400">
                  {selectedCharger.type} CHARGER
                </span>

                <span className="text-sm text-slate-400">
                  {selectedCharger.manufacturer}
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold">
                {selectedCharger.model}
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-slate-300">
                {selectedCharger.description}
              </p>
            </div>

            {/* Specs */}
            <div className="p-7 sm:p-10">
              <h3 className="text-lg font-bold text-slate-950">
                Technical specifications
              </h3>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["Manufacturer", selectedCharger.manufacturer],
                  ["Model", selectedCharger.model],
                  ["Charger Type", selectedCharger.type],
                  ["Charging Power", selectedCharger.power],
                  ["Connector", selectedCharger.connector],
                  ["Connectors", `${selectedCharger.connectors}`],
                  ["Communication", selectedCharger.protocol],
                  ["Input Voltage", selectedCharger.voltage],
                  ["Protection", selectedCharger.protection],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 font-bold text-slate-900">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button className="flex-1 rounded-xl bg-slate-950 px-5 py-3.5 font-semibold text-white transition hover:bg-slate-800">
                  Request Information
                </button>

                <button
                  onClick={() => setSelectedCharger(null)}
                  className="rounded-xl border border-slate-200 px-5 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ChargerPage;