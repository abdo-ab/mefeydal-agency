import React, { useRef, useState } from "react";
import { MailOpen, MapPin, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form ref is null");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current?.reset();
          setTimeout(() => setSuccess(false), 4000);
        },
        () => {
          setLoading(false);
          setError("Failed to send message. Please try again.");
        },
      );
  };

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { amount: 0.3, once: false });
  const rightInView = useInView(rightRef, { amount: 0.3, once: false });

  return (
    <section className="py-32 bg-slate-50 overflow-hidden relative" id="contact">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-slate-950 rounded-[4rem] p-8 md:p-20 flex flex-col lg:flex-row gap-20 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
          {/* Decorative Gradient Glows */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-600/10 via-transparent to-violet-600/10 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-[80px]" />
          
          {/* LEFT CONTENT */}
          <motion.div
            className="flex-1 relative z-10"
            ref={leftRef}
            animate={{ opacity: leftInView ? 1 : 0, x: leftInView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-teal-400 font-black tracking-[0.2em] text-[10px] uppercase mb-8 block">
              Contact Us
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-50 mb-10 leading-[0.9] tracking-tighter">
              Ready to <br />Speak Global?
            </h2>
            <p className="text-slate-400 text-xl mb-16 max-w-sm leading-relaxed font-medium">
              Join 60+ global partners who trust us for their most critical communication needs.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-slate-900 rounded-[1.5rem] flex items-center justify-center group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-500 border border-slate-800 group-hover:border-indigo-400 shadow-xl">
                  <MailOpen className="text-slate-300 w-6 h-6 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">Email</p>
                  <a href="mailto:qeysabaxa11@gmail.com" className="text-xl font-black text-slate-50 hover:text-teal-400 transition-colors tracking-tight">
                    qeysabaxa11@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-slate-900 rounded-[1.5rem] flex items-center justify-center group-hover:bg-teal-600 group-hover:scale-110 transition-all duration-500 border border-slate-800 group-hover:border-teal-400 shadow-xl">
                  <Phone className="text-slate-300 w-6 h-6 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">Phone</p>
                  <a href="tel:+251937848785" className="text-xl font-black text-slate-50 hover:text-teal-400 transition-colors tracking-tight">
                    +251 914 078 515
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-slate-900 rounded-[1.5rem] flex items-center justify-center group-hover:bg-violet-600 group-hover:scale-110 transition-all duration-500 border border-slate-800 group-hover:border-violet-400 shadow-xl">
                  <MapPin className="text-slate-300 w-6 h-6 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">Office</p>
                  <p className="text-xl font-black text-slate-50 tracking-tight">Semera, Afar, Ethiopia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            className="flex-1 bg-slate-900/40 backdrop-blur-2xl p-8 md:p-14 rounded-[3rem] border border-slate-800 relative z-10 shadow-2xl"
            ref={rightRef}
            animate={{ opacity: rightInView ? 1 : 0, scale: rightInView ? 1 : 0.95 }}
            transition={{ duration: 0.8 }}
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="email" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your language mission..."
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-[2rem] px-6 py-6 text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-indigo-500 transition-all resize-none shadow-inner"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-black py-6 rounded-2xl hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 disabled:opacity-50 flex justify-center items-center shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/40 uppercase tracking-[0.2em] text-sm group"
              >
                {loading ? (
                  <div className="flex items-center gap-4">
                    <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <span className="group-hover:scale-110 transition-transform">Initiate Mission</span>
                )}
              </button>
              
              {success && (
                <p className="text-teal-400 text-sm text-center font-black animate-bounce mt-6 uppercase tracking-widest">
                  Mission Transmitted Successfully!
                </p>
              )}
              {error && (
                <p className="text-red-400 text-sm text-center mt-6 font-bold">{error}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
