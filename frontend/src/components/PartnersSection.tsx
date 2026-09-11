
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./Common/SectionHeading";

const partners = [
  {
    name: "Exicom",
    logo: "/partners/exicom_logo.svg",
  },
  {
    name: "Quench",
    logo: "/partners/quench.png",
  },
  {
    name: "ElectreeFi",
    logo: "/partners/electreefi_logo.webp",
  },
  {
    name: "ChargeMOD",
    logo: "/partners/chargemod.jpeg",
  },
  {
    name: "Lubi",
    logo: "/partners/lubi_logo.avif",
  },
  {
    name: "Key Select by Lemon Tree",
    logo: "/partners/keyselect_logo.png",
  },
  {
    name: "Lemon Tree Hotels",
    logo: "/partners/lemon_tree_logo.webp",
  },
  {
    name: "S.Charge",
    logo: "/partners/scharge.png",
  },
  {
    name: "EVnnovator",
    logo: "/partners/evnnovator_logo.avif",
  },
  {
    name: "ChargeZone",
    logo: "/partners/chargezone_logo.png",
  },
  {
    name: "Ionage",
    logo: "/partners/ionage_logo.webp",
  },
  {
    name: "Siemens",
    logo: "/partners/siemens.png",
  },
  {
    name: "Nikol EV",
    logo: "/partners/nikol_logo.webp",
  },
  {
    name: "KIA",
    logo: "/partners/kia.png",
  },
  {
    name: "MG",
    logo: "/partners/mg_logo.webp",
  },
  {
    name: "Pulse Energy",
    logo: "/partners/pulse_energy_logo.png",
  },
  {
    name: "Aurika",
    logo: "/partners/aurika_logo.png",
  },
  {
    name: "Grand Continent",
    logo: "/partners/grand_continent_logo.png",
  },
  {
    name: "Radisson Blu Kharadi",
    logo: "/partners/radisson_blu.jpeg",
  },
];

const PartnersSection = () => {
  const firstRow = [...partners, ...partners];
  const secondRow = [...partners].reverse();
  const secondRowDuplicated = [...secondRow, ...secondRow];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 md:py-24 lg:py-28">

      {/* Top border */}
      <div className="absolute left-0 right-0 top-0 h-px bg-slate-200" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">

          <div className="mb-5 inline-flex items-center gap-3">
            
             <SectionHeading
             eyebrow="Our Partners"
             title="Trusted by leaders "
             highlight="across the EV ecosystem"
             description="From charging networks to mobility brands and hospitality, we work with partners shaping the future of electric mobility." 
             />  
          </div>
        </div>
      </div>

      {/* Logo area */}
      <div className="relative space-y-5">

        {/* Left gradient */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent md:w-48 lg:w-64" />

        {/* Right gradient */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent md:w-48 lg:w-64" />

        {/* Row 1 */}
        <motion.div
          className="flex w-max items-center gap-12 md:gap-20 lg:gap-24"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {firstRow.map((partner, index) => (
            <div
              key={`row1-${partner.name}-${index}`}
              className="flex h-20 w-36 shrink-0 items-center justify-center md:h-24 md:w-44"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                loading="lazy"
                className="max-h-12 max-w-[135px] object-contain opacity-50 grayscale transition-all duration-500 hover:scale-105 hover:opacity-100 hover:grayscale-0 md:max-h-14 md:max-w-[155px]"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex w-max items-center gap-12 md:gap-20 lg:gap-24"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {secondRowDuplicated.map((partner, index) => (
            <div
              key={`row2-${partner.name}-${index}`}
              className="flex h-20 w-36 shrink-0 items-center justify-center md:h-24 md:w-44"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                loading="lazy"
                className="max-h-12 max-w-[135px] object-contain opacity-40 grayscale transition-all duration-500 hover:scale-105 hover:opacity-100 hover:grayscale-0 md:max-h-14 md:max-w-[155px]"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom content */}
      <div className="relative mx-auto mt-14 max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 border-t border-slate-200 pt-8 text-center sm:flex-row sm:gap-6">

          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Growing together
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

          <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Powering electric mobility
          </span>

        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />
    </section>
  );
};

export default PartnersSection;

