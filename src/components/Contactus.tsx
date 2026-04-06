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
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* LEFT */}
        <motion.div
          ref={leftRef}
          animate={{ opacity: leftInView ? 1 : 0, y: leftInView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            We're here to help with all your translation needs. Reach out to us
            for a consultation or a quote.
          </p>

          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <MailOpen />
              <a
                href="mailto:qeysabaxa11@gmail.com"
                className="hover:underline"
              >
                qeysabaxa11@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone />
              <a href="tel:+251937848785" className="hover:underline">
                +251 914 078 515
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin />
              <p>Semera, Afar, Ethiopia</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          ref={rightRef}
          className="bg-gray-50 p-6 rounded-xl shadow-md"
          animate={{ opacity: rightInView ? 1 : 0, y: rightInView ? 0 : -50 }}
          transition={{ duration: 0.6 }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="user_email"
                required
                placeholder="you@example.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Your message here..."
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition flex justify-center items-center disabled:bg-blue-400"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
            {success && (
              <p className="text-green-600 text-sm text-center mt-2">
                Message sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-600 text-sm text-center mt-2">{error}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
