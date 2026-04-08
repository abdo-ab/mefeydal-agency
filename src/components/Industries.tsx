import React from "react";
import { motion } from "framer-motion";

import healthcare from "../assets/images/hospital final.webp";
import manufacturing from "../assets/images/manufacturing.webp";
import finance from "../assets/images/finance.webp";
import legal from "../assets/images/legal.webp";
import technologies from "../assets/images/technology.webp";

const industries = [
  {
    title: "Healthcare",
    description: "Ensuring clear communication in the healthcare sector.",
    image: healthcare,
  },
  {
    title: "Manufacturing",
    description: "Facilitating global operations in manufacturing.",
    image: manufacturing,
  },
  {
    title: "Finance",
    description: "Accurate financial translations for international markets.",
    image: finance,
  },
  {
    title: "Legal",
    description: "Expert legal translations for compliance and clarity.",
    image: legal,
  },
  {
    title: "Technology",
    description: "Localizing technology products for global users.",
    image: technologies,
  },
];

const Industries: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 text-white overflow-hidden relative" id="industries">
      {/* Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-teal-400 font-black tracking-[0.2em] text-[10px] uppercase mb-4 block"
            >
              Our Experience
            </motion.span>
            <motion.h2
              className="text-5xl md:text-6xl font-black text-slate-50 tracking-tighter leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Industries <br />We Empower.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-400 text-lg md:text-xl max-w-sm mb-2"
          >
            Delivering specialized linguistic accuracy for the world's most demanding sectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              className="group bg-slate-900/40 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-500 cursor-pointer shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-indigo-950/20 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4">
                   <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] uppercase font-bold tracking-widest text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                     View Sector
                   </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-black text-slate-50 mb-3 group-hover:text-teal-400 transition-colors tracking-tight">
                  {industry.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
