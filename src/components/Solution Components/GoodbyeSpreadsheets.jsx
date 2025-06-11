import React from "react";

import img1 from '../../assets/Images/Spreadsicon1.svg'
import img2 from '../../assets/Images/Spreadsicon2.svg'
import img3 from '../../assets/Images/Spreadsicon3.svg'

const GoodbyeSpreadsheets = () => {
    const features = [
        {
            icon: img3,
            title: "Utility bill management",
            description:
                "Managing utility bills from multiple sources can be complex and time-consuming. Streamlining data entry and validation reduces errors and duplicate entries, saving your time and resources for more strategic energy management tasks.",
        },
        {
            icon: img2,
            title: "Save time and money",
            description:
                "Effortlessly uncover energy waste, spot peak demand periods, and pinpoint energy conservation opportunities. Now you can focus on implementing targeted, impactful energy efficiency programs to drive down utility bill costs.",
        },
        {
            icon: img1,
            title: "Collaborate with transparency",
            description:
                "Centralized data promotes collaboration among different teams or departments. Get a shared platform where stakeholders can access and contribute to energy-related information, fostering transparency and cross-functional alignment.",
        },
    ];

    return (
        <div className="px-6 py-16 max-w-7xl mx-auto text-center">
            <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
                Goodbye spreadsheets, hello savings!
            </h2>
            <div className="grid md:grid-cols-3 gap-10 text-left mt-10">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start justify-between">
                        <img src={feature.icon} alt="" className="w-30 h-20 mb-2"/>
                        <h3 className="text-lg md:text-xl font-bold mb-1">
                            {feature.title}
                        </h3>
                        <p className="text-[#4B5563] text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GoodbyeSpreadsheets;
