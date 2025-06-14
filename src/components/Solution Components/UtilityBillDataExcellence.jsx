import React from "react";
import img1 from '../../assets/Images/Spreadsicon2.svg'





const UtilityBillDataExcellence = ({ features, UtilityBillDataExcellenceContent }) => {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto">
            {UtilityBillDataExcellenceContent.showtop &&
                <>
                    <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
                        {UtilityBillDataExcellenceContent.heading1}
                    </h2>
                    {UtilityBillDataExcellenceContent.showsubheading &&
                        <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-center">
                            {UtilityBillDataExcellenceContent.subheding}
                        </p>
                    }
                </>
            }
            <div className="grid md:grid-cols-3 gap-8 mt-10 mb-10">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="group flex flex-col cursor-pointer pl-7 py-4 pr-3 items-start hover:border border-[#0f172a] hover:shadow-lg hover:bg-white transmotion duration-300"
                    >
                        <img src={feature.icon} alt="" className="w-30 h-20 mb-3" />
                        <h3 className='text-lg md:text-xl font-bold mb-3 group-hover:underline'>
                            {feature.title}
                        </h3>
                        <p className="text-[#4B5563] text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
            {UtilityBillDataExcellenceContent?.showbtn &&
                <div className="flex items-center justify-center">
                    <button className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300">
                        {UtilityBillDataExcellenceContent.btn}
                    </button>
                </div>
            }
        </section>
    );
};

export default UtilityBillDataExcellence;
