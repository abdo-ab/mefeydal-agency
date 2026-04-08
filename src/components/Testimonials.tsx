import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "This service transformed the way we communicate globally. Absolute game-changer!",
    name: "Lidiya Tesfaye",
    role: " Marketing Lead, MIT",
    avatar: "/images/lidu.webp",
  },
  {
    quote:
      "Their localization support was spot on. We scaled into new markets effortlessly.",
    name: "Mohammed Hussen",
    role: "CEO, AwashStore",
    avatar: "/images/mame.webp",
  },
  {
    quote:
      "Legal translations were fast, accurate, and 100% compliant. Highly recommend!",
    name: "Mussa Abdo",
    role: "Head of Legal, Afar",
    avatar: "/images/mussa.webp",
  },
];

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TestimonialCard = ({
  quote,
  name,
  role,
  avatar,
}: TestimonialCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white border border-slate-100 p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(139,92,246,0.1)] transition-all duration-500 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-violet-50 transition-colors" />
      
      <div className="text-6xl text-indigo-100 font-serif leading-none italic mb-8 select-none group-hover:text-violet-100 transition-colors">
        “
      </div>
      <p className="text-slate-600 text-lg leading-relaxed relative z-10 mb-10 font-medium italic group-hover:text-slate-900 transition-colors">
        {quote}
      </p>
      <div className="flex items-center gap-5 border-t border-slate-50 pt-8">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-slate-100 group-hover:border-violet-200 transition-all duration-500 shadow-md shadow-slate-200 group-hover:shadow-violet-100"
          />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-teal-500 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>
        <div>
          <p className="font-black text-slate-900 tracking-tight text-lg">{name}</p>
          <p className="text-[10px] text-indigo-600 font-black uppercase tracking-[0.2em]">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="bg-slate-50 py-32 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-100/50 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-violet-600 font-black tracking-[0.2em] text-[10px] uppercase mb-4 block"
          >
            Client Reviews
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter leading-tight max-w-3xl">
            Trusted by the world's <br />fastest growing teams.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
