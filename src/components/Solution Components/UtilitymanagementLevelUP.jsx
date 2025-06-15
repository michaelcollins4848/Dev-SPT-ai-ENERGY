import React from "react";

import { FaPlay } from 'react-icons/fa';




const UtilitymanagementLevelUP = ({ packages, levelupContent }) => {
    return (
        <section className="px-6 py-15 max-w-7xl mx-auto">
            {levelupContent.showtop &&
                <>
                    <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
                        {levelupContent.heading1}
                    </h2>
                    {levelupContent.showsubheading &&
                        <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-center">
                            {levelupContent.subheding}
                        </p>
                    }
                </>
            }
            <div className="grid md:grid-cols-3 gap-8 mt-15 mb-10">
                {packages.map((packages, idx) => (
                    <div
                        key={idx}
                        className="group flex flex-col cursor-pointer pl-7 py-6 pr-3 items-start hover:border border-[#0f172a] hover:shadow-lg hover:bg-white transmotion duration-300"
                    >
                        <img src={packages.icon} alt="" className="w-25 h-20 mb-3 object-fill" />
                        <h3 className='text-lg md:text-xl font-bold mb-3'>
                            {packages.title}
                        </h3>
                        <h6 className='text-md md:text-md font-bold mb-5'>
                            {packages?.subheading}
                        </h6>

                        <div className="space-y-4">
                            {packages?.feature?.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                    {feature.link ? (
                                        <a
                                            href={feature.link}
                                            className="text-[#0f172a] font-medium underline hover:text-[#6e8cd1] transition"
                                        >
                                            {feature.label}
                                        </a>
                                    ) : (
                                        <span className="text-[#0f172a] font-medium">{feature.label}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                        {packages.lernshow &&
                            <span className="text-sm underline font-bold mt-20">
                                {packages?.learncontent}
                            </span>
                        }
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UtilitymanagementLevelUP;
