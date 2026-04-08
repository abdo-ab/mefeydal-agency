import React from "react";
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-32 pb-12 overflow-hidden relative">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-20 mb-24 pb-24 border-b border-slate-900/50">
          <div className="col-span-2">
            <h3 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase group cursor-pointer">
              Mefeydal<span className="text-indigo-500 group-hover:text-teal-400 transition-colors">.</span>
            </h3>
            <p className="text-slate-400 text-xl leading-relaxed max-w-sm mb-10 font-medium">
              We engineer global connections through linguistic excellence and cultural intelligence.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://twitter.com/kamil_mohammed"
                aria-label="Twitter"
                className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-xl"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/kamil-m-abdo-9a3b36322/"
                aria-label="LinkedIn"
                className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-xl"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://web.facebook.com/kaamil.qafarkooni.2025"
                aria-label="Facebook"
                className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-xl"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-10">Navigation</h4>
            <ul className="space-y-6 text-slate-400 font-bold">
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Digital Services</a></li>
              <li><a href="#industries" className="hover:text-teal-400 transition-colors">Global Sectors</a></li>
              <li><a href="#experiences" className="hover:text-teal-400 transition-colors">Trust History</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Launch Mission</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-10">Headquarters</h4>
            <div className="space-y-4">
               <p className="text-white font-black text-xl tracking-tight">Semera, Afar</p>
               <p className="inline-block px-3 py-1 bg-indigo-600/10 text-indigo-400 text-[10px] font-black rounded-full uppercase tracking-widest border border-indigo-500/20">
                 Ethiopia
               </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          <p>© {new Date().getFullYear()} Mefeydal Agency. All Systems Operational.</p>
          <div className="flex items-center gap-4">
            <span>Engineered by</span>
            <a
              href="https://abdoab.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400 transition-colors border-b border-white/20"
            >
              Abdo Ab
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
