import React from "react";
import { FaPlay } from 'react-icons/fa';






const ManageUtilityData = ({data}) => {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto">
            <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
                A simpler way to manage utility data
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-center">
                Whether you manage a handful of buildings or thousands of properties across the globe, our ERP for utilities is a flexible, accurate, and reliable platform that helps you make sense of your energy and sustainability data and streamlines your team’s workflows.
            </p>
            <div>
                {data.map((i, index) => (
                    <div key={index} className="w-full px-2 mt-20 mb-10">
                        <div className={`flex flex-col items-center lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-15`}>
                            <div className="flex-1">
                                <img
                                    src={i.img}
                                    alt=''
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Right Image Section */}
                            <div className="flex-1 space-y-5">
                                <h3 className='md:text-3xl text-xl font-bold'>
                                    {i.heading}
                                </h3>
                                <p className="mt-3 text-gray-700 leading-7 ">{i.subheading}</p>
                                <div className="space-y-4">
                                    {i?.feature?.map((feature, index) => (
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ManageUtilityData;
