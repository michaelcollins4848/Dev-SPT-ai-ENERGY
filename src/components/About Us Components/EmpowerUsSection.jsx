import React from "react";





const EmpowerUsSection = ({ values, EmpowerUsSectionContent }) => {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto">
            <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
                {EmpowerUsSectionContent.heading1}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10 mb-10">
                {values.map((feature, idx) => (
                    <div
                        key={idx}
                        className="group flex flex-col  pl-7 py-4 pr-3 items-start hover:border border-[#0f172a] hover:shadow-lg hover:bg-white transmotion duration-300"
                    >
                        <img src={feature.icon} alt="" className="w-30 h-20 mb-3" />
                        <h3 className='text-lg md:text-xl font-bold mb-3'>
                            {feature.title}
                        </h3>
                        <p className="text-[#4B5563] text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EmpowerUsSection;
