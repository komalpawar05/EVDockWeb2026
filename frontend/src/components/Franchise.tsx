import React from "react";
import { motion } from "framer-motion";
import {
LayoutDashboard,
Smartphone,
BarChart3,
CreditCard,
Activity,
ArrowUpRight,
} from "lucide-react";

const Features = () => {
const cards = [
{
title: "CMS Dashboard",
desc: "Manage stations & chargers",
icon: <LayoutDashboard size={24} />,
},
{
title: "Mobile App",
desc: "Seamless charging experience",
icon: <Smartphone size={24} />,
},
{
title: "Analytics",
desc: "Revenue & performance insights",
icon: <BarChart3 size={24} />,
},
{
title: "Payments",
desc: "Secure online transactions",
icon: <CreditCard size={24} />,
},
];

return ( <section className="relative py-24 overflow-hidden bg-white">
{/* Background Glow */} <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#6FA8FF]/10 rounded-full blur-[120px]" /> <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#F28BB5]/10 rounded-full blur-[120px]" />

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <span className="inline-flex px-4 py-2 rounded-full bg-[#F5F7FF] text-[#7A3FAF] text-sm font-semibold">
        EV Dock Platform
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-900">
        CMS &
        <span className="bg-gradient-to-r from-[#1E5FA8] via-[#7A3FAF] to-[#E04578] bg-clip-text text-transparent">
          {" "}Mobile App
        </span>
      </h2>

      <p className="mt-5 text-slate-600 text-lg">
        Manage stations, payments, analytics and charging operations
        from one powerful platform.
      </p>
    </motion.div>

    {/* Bento Grid */}
    <div className="grid lg:grid-cols-4 gap-5">
      {/* Main Feature */}
      <motion.div
        whileHover={{ y: -6 }}
        className="lg:col-span-2 rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#7A3FAF] p-8 text-white"
      >
        <div className="flex items-center gap-3">
          <Activity size={22} />
          <span className="text-sm uppercase tracking-wider">
            EV Dock
          </span>
        </div>

        <h3 className="mt-8 text-4xl font-bold">
          One Platform
        </h3>

        <p className="mt-4 text-white/80 max-w-md">
          Control charging stations, monitor activity, manage users,
          and track business performance from a single dashboard.
        </p>

        {/* Dashboard Mockup */}
        <div className="mt-8 rounded-2xl bg-white/10 backdrop-blur-md p-5 border border-white/10">
          <div className="flex justify-between items-center">
            <span>Active Chargers</span>
            <span className="font-bold">128</span>
          </div>

          <div className="mt-4 h-2 rounded-full bg-white/20">
            <div className="h-2 w-[78%] rounded-full bg-white"></div>
          </div>

          <div className="mt-4 flex justify-between text-sm">
            <span>Sessions</span>
            <span>4,892</span>
          </div>
        </div>
      </motion.div>

      {/* Small Cards */}
      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -6 }}
          className="group rounded-[28px] border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl transition-all"
        >
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br from-[#1E5FA8] via-[#4B4FAE] to-[#C93C8F]">
            {card.icon}
          </div>

          <h3 className="mt-5 text-xl font-bold text-slate-900">
            {card.title}
          </h3>

          <p className="mt-2 text-slate-600">
            {card.desc}
          </p>

          <ArrowUpRight
            size={18}
            className="mt-5 text-[#7A3FAF] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </motion.div>
      ))}

      {/* Wide Bottom Card */}
      <motion.div
        whileHover={{ y: -6 }}
        className="lg:col-span-2 rounded-[28px] border border-slate-100 bg-gradient-to-r from-[#F8FAFF] to-[#FFF4F8] p-7"
      >
        <h3 className="text-2xl font-bold text-slate-900">
          Real-Time Monitoring
        </h3>

        <p className="mt-3 text-slate-600">
          Track charger health, station uptime, energy consumption,
          and charging sessions with live updates.
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <span className="px-3 py-2 rounded-full bg-white text-sm font-medium">
            Live Status
          </span>
          <span className="px-3 py-2 rounded-full bg-white text-sm font-medium">
            OCPP Ready
          </span>
          <span className="px-3 py-2 rounded-full bg-white text-sm font-medium">
            Smart Alerts
          </span>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ y: -6 }}
        className="lg:col-span-2 rounded-[28px] border border-slate-100 bg-white p-7"
      >
        <h3 className="text-2xl font-bold text-slate-900">
          Smart Payment System
        </h3>

        <p className="mt-3 text-slate-600">
          Support online payments, wallet recharge, subscriptions,
          invoices and transaction management.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="text-sm text-slate-600">
            Secure & Reliable Transactions
          </span>
        </div>
      </motion.div>
    </div>
  </div>
</section>
);
};

export default Features;
