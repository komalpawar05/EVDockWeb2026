import React from "react";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  ShieldCheck,
  MapPinned,
  Zap,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <BatteryCharging size={28} />,
      title: "Fast Charging",
      desc: "Ultra-fast EV charging infrastructure built for modern electric vehicles.",
    },
    {
      icon: <MapPinned size={28} />,
      title: "Smart Navigation",
      desc: "Locate charging stations instantly with real-time availability updates.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Reliable Network",
      desc: "99.9% uptime ensuring uninterrupted charging experiences.",
    },
  ];
  // const stats = [
  //   { number: "500+", label: "Charging Stations" },
  //   { number: "50K+", label: "EV Drivers" },
  //   { number: "99.9%", label: "Network Uptime" },
  // ];

  return (
    <section className="relative py-32 overflow-hidden bg-[#0F172A]">

      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#1E5FA8]/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#7A3FAF]/20 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E04578]/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
            <Zap size={18} className="text-[#6FA8FF]" />
            <span className="text-white font-medium">
              About EV Dock
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mt-10"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Building India's
            <span className="block bg-gradient-to-r from-[#6FA8FF] via-[#B57EDC] to-[#E04578] bg-clip-text text-transparent">
              Smart EV Future
            </span>
          </h2>

          <p className="mt-8 text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            EV Dock is transforming electric mobility through intelligent,
            reliable and accessible EV charging infrastructure. We help
            drivers charge smarter with real-time station availability,
            seamless payments and nationwide coverage.
          </p>
        </motion.div>

        {/* Stats */}
        {/* <div className="grid md:grid-cols-3 gap-6 mt-16">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 text-center"
            >
              <h3 className="text-5xl font-black bg-gradient-to-r from-[#6FA8FF] to-[#B57EDC] bg-clip-text text-transparent">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-400">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] flex items-center justify-center text-white shadow-lg">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#6FA8FF] to-[#B57EDC] rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;