import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import globe from "../assets/images/globe.webp";
import doc from "../assets/images/doc.webp";
import interpretation from "../assets/images/interpretation.webp";
import media from "../assets/images/multi-media.webp";

const services = [
  {
    title: "Translation",
    description:
      "Accurate and culturally relevant translations for all your business needs.",
    image: globe,
  },
  {
    title: "Document Translation",
    description:
      "Professional translations of legal, technical, and business documents.",
    image: doc,
  },
  {
    title: "Interpretation",
    description:
      "Expert interpretation services for meetings, conferences, and events.",
    image: interpretation,
  },
  {
    title: "Multimedia Translation",
    description: "Localization of video, websites, and other media content.",
    image: media,
  },
];

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    <motion.div
      ref={ref}
      className="group relative bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] transition-all duration-500 border border-slate-100 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-500/10 transition-colors" />
      <div className="relative z-10 text-left">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform duration-500">
          <img src={image} alt={title} className="w-10 h-10 object-contain brightness-0 invert opacity-90" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight">{title}</h3>
        <p className="text-slate-500 text-base leading-relaxed">{description}</p>
        <div className="mt-8 flex items-center gap-2 text-indigo-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
          Learn More <span className="text-lg">→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-32 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-indigo-600 font-black tracking-[0.2em] text-[10px] uppercase mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black text-slate-950 mb-0 leading-tight tracking-tighter"
            >
              Precision In <br />Every Language.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg md:text-xl max-w-sm mb-2"
          >
            We don't just translate words; we carry culture, context, and clarity across borders.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
