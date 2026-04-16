import React from "react";

const ContactUs: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50" id="contact">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                {/* Left Side - Info */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-gray-600 mb-8">
                        We're here to help with all your translation needs. Reach out to us for a consultation or a quote.
                    </p>

                    <div className="space-y-4 text-sm text-gray-700">
                        <div className="flex items-center gap-3">
                            <span className="text-blue-600 text-lg">📧</span>
                            <a href="mailto:info@mefeydal.com" className="hover:underline">
                                info@mefeydal.com
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-blue-600 text-lg">📞</span>
                            <a href="tel:+251937848785" className="hover:underline">
                                +251 937 848 785
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-blue-600 text-lg">📍</span>
                            <p> Awash-7  City, afar, Ethiopia</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
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
                                rows={4}
                                placeholder="Don't forget to mention your needs and requirements"
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
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
