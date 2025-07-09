import React, { useState } from "react";
import { motion } from "framer-motion";

const allMilestones = [
    {
        year: "2020",
        title: "STORED POWER TECHNOLOGY INC. is Founded in California",
        description:
            "With a mission to redefine energy storage, SPT is established to serve residential and commercial markets with sustainable, cutting-edge solutions.",
    },
    {
        year: "2021",
        title: "Launch of First Residential Battery Line",
        description:
            "Our first generation of energy storage batteries enters the market, designed for homes seeking energy independence and reliability.",
    },
    {
        year: "2022",
        title: "Expansion into Commercial Energy Storage",
        description:
            "SPT begins delivering large-scale energy storage systems for commercial clients, providing tailored solutions for diverse industry needs.",
    },
    {
        year: "2023",
        title: "SPT AI Energy Lab is Launched",
        description:
            "The SPT AI Energy Lab is established to drive AI-powered innovation in energy management, with a strong focus on intelligent automation and cost optimization.",
    },
    {
        year: "2024",
        title: "Energy Management System (EMS) Released",
        description:
            "Our EMS platform launches, acting as the intelligent brain of the energy ecosystem. It connects all hardware and software components to optimize energy performance in real time.",
    },
    {
        year: "2025",
        title: "Global Logistics Network & Financing Partners Added",
        description:
            "SPT establishes logistics hubs and shipping capabilities across key regions, while also partnering with major financial institutions to offer consumer and commercial project financing.",
    },
    {
        year: "Future",
        title: "Smart Energy for All",
        description:
            "SPT remains committed to leading the global transition to smart, secure, and ethical energy through relentless innovation, data privacy leadership, and AI excellence.",
    },
];

const HistorySection = () => {
    const [visibleCount, setVisibleCount] = useState(3);
    const visibleMilestones = allMilestones.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount(allMilestones.length);
    };

    return (
        <section className="relative text-white py-20 px-4 bgbackgroundimg1">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl sm:text-4xl font-semibold mb-12">
                    <br />
                    Our history of innovation and leadership
                </h2>

                {/* Timeline container */}
                <div className="relative flex flex-col gap-16 items-center">
                    {/* Vertical timeline line */}
                    <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-white z-0" />

                    {/* Milestone cards */}
                    {visibleMilestones.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex items-center w-full justify-${index % 2 === 0 ? "start" : "end"} z-10`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div
                                className={`w-full sm:w-[45%] p-6 border-2 border-white bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] rounded-lg text-left shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out
                  ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
                            >
                                <p className="text-red-300 font-semibold text-sm mb-1">{item.year}</p>
                                <h4 className="font-bold mb-2 text-lg md:text-xl">{item.title}</h4>
                                <p className="text-sm text-white/95">{item.description}</p>
                            </div>

                            {/* Dot on timeline */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] border-2 border-white rounded-full z-20"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < allMilestones.length && (
                    <div className="mt-16 flex justify-center relative z-10">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleLoadMore}
                            className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-md shadow-md hover:shadow-xl transition duration-300"
                        >
                            Load More Milestones
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HistorySection;
