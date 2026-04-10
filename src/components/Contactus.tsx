import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {
    const form = useRef<HTMLFormElement | null>(null); // ✅ Define ref inside component

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) {
            console.error("Form ref is null");
            return;
        }

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,     // ✅ from .env
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully 💌");
                    form.current?.reset();
                },
                (error) => {
                    console.error(error.text);
                    alert("Failed to send message 😢");
                }
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
                            <span className="text-blue-600 text-lg">📧</span>
                            <a
                                href="mailto:info@mefeydal.com"
                                className="hover:underline"
                            >
                                info@mefeydal.com
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-blue-600 text-lg">📞</span>
                            <a
                                href="tel:+251937848785"
                                className="hover:underline"
                            >
                                +251 937 848 785
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-blue-600 text-lg">📍</span>
                            <p>Awash-7 City, Afar, Ethiopia</p>
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
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
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
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUs;
