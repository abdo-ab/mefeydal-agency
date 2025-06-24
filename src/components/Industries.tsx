import React from 'react';
import { motion } from 'framer-motion';

import healthcare from '../assets/images/hospital final.webp';
import manufacturing from '../assets/images/manufacturing.webp';
import finance from '../assets/images/finance.jpg';
import legal from '../assets/images/legal.jpg';
import technologies from '../assets/images/technology.webp';

const industries = [
    {
        title: "Healthcare",
        description: "Ensuring clear communication in the healthcare sector.",
        image: healthcare,
    },
    {
        title: "Manufacturing",
        description: "Facilitating global operations in manufacturing.",
        image: manufacturing,
    },
    {
        title: "Finance",
        description: "Accurate financial translations for international markets.",
        image: finance,
    },
    {
        title: "Legal",
        description: "Expert legal translations for compliance and clarity.",
        image: legal,
    },
    {
        title: "Technology",
        description: "Localizing technology products for global users.",
        image: technologies,
    },
];

const Industries: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50 text-center" id="industries">
            <motion.h2
                className="text-3xl font-bold text-gray-900 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Industries We Serve
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 max-w-6xl mx-auto">
                {industries.map((industry, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02] cursor-pointer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={industry.image}
                            alt={industry.title}
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">{industry.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{industry.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Industries;
