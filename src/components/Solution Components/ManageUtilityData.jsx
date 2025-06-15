import React from "react";
import { FaPlay } from 'react-icons/fa';






const ManageUtilityData = ({ data, ManageUtilityDataContent }) => {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto">
            <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
                {ManageUtilityDataContent.heading1}
            </h2>
            {ManageUtilityDataContent.showsubheading &&
                <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-center">
                    {ManageUtilityDataContent.subheding}
                </p>
            }
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
                                {i.showbtn &&
                                    <button className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300">
                                        {i?.btn}
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ManageUtilityData;
