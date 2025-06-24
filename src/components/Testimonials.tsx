import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

interface TestimonialCardProps {
    quote: string;
    name: string;
    role: string;
    avatar: string;
}

const TestimonialCard = ({ quote, name, role, avatar }: TestimonialCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.3, once: false });

    return (
        <motion.div
            ref={ref}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition cursor-pointer"
        >
            <p className="text-gray-700 text-sm italic mb-6">“{quote}”</p>
            <div className="flex items-center justify-center gap-4">
                <img
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                    <p className="font-semibold text-gray-900">{name}</p>
                    <p className="text-xs text-gray-500">{role}</p>
                </div>
            </div>
        </motion.div>
    );
};

const Testimonials: React.FC = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">What Our Clients Say</h2>
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
