import React from "react";

const experiences = [
    {
        org: "FDRP",
        logo: "/images/FDRP.jpg",
        role: "Language Solutions Specialist",
        duration: "2023 - 2024",
        description:
            "Led multilingual communication efforts and contributed to cross-border projects with high accuracy and clarity.",
    },
    {
        org: "MIT",
        logo: "/images/MIT.jpg",
        role: "Linguistic Research Assistant",
        duration: "2023 - 2025",
        description:
            "Assisted in linguistic research and contributed to various technology-driven projects.",
    },
    {
        org: "Translation Z ",
        logo: "/images/transz.jpg",
        role: "Global Translator & Coordinator",
        duration: "2023 - present",
        description:
            "Coordinated international translation teams for legal and technical documents across 5+ countries.",
    },
    {
        org: "Others",
        logo: "/images/Other.png",
        role: "Consultant & Collaborator",
        duration: "2021 - present",
        description:
            "Collaborated with startups and NGOs to deliver localized content and improve user outreach.",
    },
];

const Experience: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50" id="experiences">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Our Experience
                </h2>
                <p className="text-center text-lg text-gray-600 mb-10">
                    We have <span className="font-semibold text-gray-900">5+ years</span> of experience with <span className="font-semibold text-gray-900">60+ clients</span> and have worked with great companies.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={exp.logo}
                                    alt={`${exp.org} logo`}
                                    className="w-14 h-14 rounded-md object-contain bg-white p-1 border"
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {exp.org}
                                    </h3>
                                    <p className="text-sm text-gray-500">{exp.duration}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 font-medium">{exp.role}</p>
                            <p className="text-gray-600 text-sm mt-2">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
