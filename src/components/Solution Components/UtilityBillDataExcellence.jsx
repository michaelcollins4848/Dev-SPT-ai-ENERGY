import React from "react";
import img1 from '../../assets/Images/Spreadsicon2.svg'

const features = [
    {
        icon: img1,
        title: "Utility bill management",
        description:
            "Advanced workflows for bill entry, approval, and payment. EnergyCAP automatically checks to validate your usage and flags any errors or anomalies.",
    },
    {
        icon: img1,
        title: "Facility benchmarking",
        description:
            "Normalize use and compare relative performance of similar buildings and spot energy hogs.",
    },
    {
        icon: img1,
        title: "Chargebacks and tenant billing",
        description:
            "Quickly allocate consumption and recoup energy costs from tenants and departments based on submeter use, splits, or formulas.",
    },
    {
        icon: img1,
        title: "ENERGY STAR integration",
        description:
            "Eliminate the burden to meet state and local mandates by automatically integrating with ENERGY STAR Portfolio Manager. View ratings & metrics directly in EnergyCAP.",
    },
    {
        icon: img1,
        title: "Measurement and verification",
        description:
            "Monitor the success of your energy conservation measures instantly. EnergyCAP calculates continuous savings by comparing your data with a normalized baseline period.",
    },
    {
        icon: img1,
        title: "Account and meter tracking",
        description:
            "Efficiently track and audit energy and non-energy commodities, and gain actionable insights through intuitive hierarchical views, hyperlinks, and detailed analytics.",
    },
];

const UtilityBillDataExcellence = () => {
    return (
        <section className="px-6 py-12 max-w-7xl mx-auto">
            <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
                Utility bill data excellence
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-10">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-start"
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

export default UtilityBillDataExcellence;
