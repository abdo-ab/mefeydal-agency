import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    org: "FDRP",
    logo: "/images/FDRP.webp",
    role: "Language Solutions Specialist",
    duration: "2023 - 2024",
    description:
      "Led multilingual communication efforts and contributed to cross-border projects with high accuracy and clarity.",
  },
  {
    org: "MIT",
    logo: "/images/MIT.webp",
    role: "Linguistic Research Assistant",
    duration: "2023 - 2025",
    description:
      "Assisted in linguistic research and contributed to various technology-driven projects.",
  },
  {
    org: "Translation Z ",
    logo: "/images/transz.webp",
    role: "Global Translator & Coordinator",
    duration: "2023 - present",
    description:
      "Coordinated international translation teams for legal and technical documents across 5+ countries.",
  },
  {
    org: "Others",
    logo: "/images/Other.webp",
    role: "Consultant & Collaborator",
    duration: "2021 - present",
    description:
      "Collaborated with startups and NGOs to deliver localized content and improve user outreach.",
  },
];

type Experience = {
  org: string;
  logo: string;
  role: string;
  duration: string;
  description: string;
};

const ExperienceCard = ({ exp }: { exp: Experience }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(79,70,229,0.08)] transition-all duration-500 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8">
        <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center p-4 group-hover:bg-indigo-50 transition-colors border border-slate-50 group-hover:border-indigo-100 shadow-inner">
          <img
            src={exp.logo}
            alt={`${exp.org} logo`}
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-100"
          />
        </div>
        <div>
          <h3 className="text-3xl font-black text-slate-950 group-hover:text-indigo-600 transition-colors tracking-tight">
            {exp.org}
          </h3>
          <p className="text-xs text-indigo-400 font-black uppercase tracking-[0.2em] mt-1">
            {exp.duration}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 text-white text-[10px] font-black rounded-full uppercase tracking-[0.1em] shadow-lg shadow-slate-200">
          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
          {exp.role}
        </div>
        <p className="text-slate-500 text-base leading-relaxed font-medium">
          {exp.description}
        </p>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden" id="experiences">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-slate-100/30 -skew-x-12 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-teal-600 font-black tracking-[0.2em] text-[10px] uppercase mb-4 block"
            >
              Our Journey
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black text-slate-950 mb-10 leading-[1.1] tracking-tighter">
              Legacy of <br />Linguistic <br />Success.
            </h2>
            <div className="space-y-10">
              <div className="group">
                <div className="text-5xl font-black text-slate-950 group-hover:text-indigo-600 transition-colors mb-2">5+</div>
                <p className="text-slate-500 text-lg font-medium leading-snug">Years of unwavering <br />commitment to quality.</p>
              </div>
              <div className="group">
                <div className="text-5xl font-black text-slate-950 group-hover:text-teal-600 transition-colors mb-2">60+</div>
                <p className="text-slate-500 text-lg font-medium leading-snug">Partnerships built on <br />trust and precision.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-10 md:grid-cols-1">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
