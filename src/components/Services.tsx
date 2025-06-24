import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import globe from "../assets/images/globe.png";
import doc from "../assets/images/doc.png";
import interpretation from "../assets/images/interpretation.png";
import media from "../assets/images/multi-media.png";

const services = [
    {
        title: "Translation",
        description: "Accurate and culturally relevant translations for all your business needs.",
        image: globe,
    },
    {
        title: "Document Translation",
        description: "Professional translations of legal, technical, and business documents.",
        image: doc,
    },
    {
        title: "Interpretation",
        description: "Expert interpretation services for meetings, conferences, and events.",
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
            className="bg-gray-100 p-6 rounded-lg shadow-md text-center cursor-pointer transition hover:shadow-xl"
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <img src={image} alt={title} className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </motion.div>
    );
};

export default function Services() {
    return (
        <section id="services" className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold">Our Services</h2>
                    <p className="text-gray-700 mt-2">
                        We offer a variety of services to help you achieve your goals.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
