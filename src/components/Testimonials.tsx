import React from "react";

const testimonials = [
    {
        quote: "This service transformed the way we communicate globally. Absolute game-changer!",
        name: "Emily Tran",
        role: "Global Marketing Lead, MedixHealth",
        avatar: "/images/Other.png",
    },
    {
        quote: "Their localization support was spot on. We scaled into new markets effortlessly.",
        name: "Carlos Rivera",
        role: "CTO, FutureWare",
        avatar: "/images/Other.png",
    },
    {
        quote: "Legal translations were fast, accurate, and 100% compliant. Highly recommend!",
        name: "Sofia Bennett",
        role: "Head of Legal, NexaCorp",
        avatar: "/images/Other.png",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">What Our Clients Say</h2>
                <div className="grid gap-10 md:grid-cols-3">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition"
                        >
                            <p className="text-gray-700 text-sm italic mb-6">“{testimonial.quote}”</p>
                            <div className="flex items-center justify-center gap-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="text-left">
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
