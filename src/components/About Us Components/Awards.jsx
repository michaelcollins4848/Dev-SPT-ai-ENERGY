import React from "react";





const Awards = ({ awards, AwardsContent }) => {
    return (
        <section className="px-6 py-25 max-w-7xl mx-auto">
            <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
                {AwardsContent.heading1}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10 mb-10">
                {awards.map((feature, idx) => (
                    <div
                        key={idx}
                        className="group flex flex-col cursor-pointer pl-7 py-4 pr-3 items-start hover:border border-[#0f172a] hover:shadow-lg hover:bg-white transmotion duration-300"
                    >
                        <img src={feature.icon} alt="" className="w-[20%] h-20 mb-3 object-contain grayscale group-hover:grayscale-0" />
                        <h3 className='text-lg md:text-xl font-bold mb-3 group-hover:text-[#0f172a]'>
                            {feature.title}
                        </h3>
                        <p className="text-[#4B5563] text-sm mb-5">{feature.description}</p>
                        <p className="text-[#0f172a] font-bold text-sm underline group-hover:hidden">Learn more</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Awards;
