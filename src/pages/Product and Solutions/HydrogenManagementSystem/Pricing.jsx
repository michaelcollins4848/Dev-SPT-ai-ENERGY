import React from 'react'
import WebsiteLayout from '../../../components/Layout'
import HeroBannerSection from '../../../components/Home/HeroBannerSection';
import CompaniesSlider from '../../../components/About Us Components/CompaniesSlider';
import ManageUtilityData from '../../../components/Product and Solutions Components/ManageUtilityData';
import CalculatorSection from '../../../components/Home/CalculatorSection';

import img from '../../../assets/Images/heroimg1.webp'


import img1 from '../../../assets/Images/icon10.webp'
import img2 from '../../../assets/Images/icon11.webp'
import img3 from '../../../assets/Images/icon12.png'
import img4 from '../../../assets/Images/icon13.svg'
import img5 from '../../../assets/Images/icon14.webp'
import img6 from '../../../assets/Images/icon15.webp'

import platfrom1 from '../../../assets/Images/platform11.webp'
import UtilitymanagementLevelUP from '../../../components/Product and Solutions Components/UtilitymanagementLevelUP';
import UtilityManagementBuildSave from '../../../components/Product and Solutions Components/UtilityManagementBuildSave';

import platfrom2 from '../../../assets/Images/platform12.webp'

const homepageContent = {
    heading1: "Your energy, your way:",
    heading2: "Tailored solutions for maximum savings",
    subheding: "Whether you're managing a handful of meters or thousands, we provide the energy and utility management tools and flexibility to take control of your energy costs.",
    img: img,
    btn: "Talk to sales",
    showplay: false,
    showtop: true,
    navigation: 'UtilityManagement / Pricing',
};

const showtop = false

const calculatorContent = {
    heading1: "Let’s Build the Right Plan Together",
    btn: "Contact our sales team!",
};



const UtilityMangementPricing = () => {
    return (
        <WebsiteLayout>
            <section>
                    {/* Hero Section */}
                    <div className="max-w-7xl mx-auto px-4 pt-30 pb-15 flex flex-col md:flex-row items-center gap-10">
                      <div className="md:w-1/2">
                        <h1 className="text-5xl font-bold leading-tight mb-6">
                          Flexible Pricing, <br className="hidden sm:inline" />Tailored to You
                        </h1>
                        <h2 className="text-xl sm:text-2xl font-semibold text-[#1e3a8a] mb-6">
                            One Solution Doesn’t Fit All <br className="hidden sm:inline" />— We Customize for Impact
                        </h2>
                        <p className="text-lg mb-6">
                          Whether you're managing a campus microgrid, a municipal hydrogen station, or commercial-scale infrastructure, our pricing is designed to adapt to your scope, scale, and sustainability goals.
                          We collaborate closely with your team to build a solution that fits both your technical requirements and your budget — with no hidden costs or rigid tiers.
                        </p>
                        <button
                          onClick={() => navigate('/products/hydrogen/features')}
                          className="bg-[#0f172a] text-white text-xl px-6 py-4 rounded shadow hover:bg-[#1e293b]"
                        >
                          Explore Features
                        </button>
                      </div>
                      <div className="md:w-1/2">
                        <img src={img1} alt="Hydrogen Station Preview" className="w-full h-auto rounded-lg shadow-md" />
                      </div>
                    </div>
            </section>
            <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center mb-5 whitespace-nowrap">
                Proven solutions powering real-world success.
            </h2>
            <CompaniesSlider showtop={showtop} />
            <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] text-center pt-10 pb-1">
                    <div className="bg-white border rounded-lg p-6 shadow-md mx-auto max-w-sm">
                        <h3 className="text-3xl font-semibold text-[#0f172a] mb-2">Custom-Tailored Packages</h3>
                        <p className="text-gray-600 text-lg">
                        Each deployment is evaluated for scale, hardware compatibility, and data infrastructure to create a unique quote.
                        </p>
                        <img
                            src={img1}
                            alt="description"
                            className="h-20 w-auto mt-2 mx-auto"
                        />
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-md mx-auto max-w-sm">
                        <h3 className="text-3xl font-semibold text-[#0f172a] mb-2">Full Lifecycle <br className="hidden sm:inline" />Support</h3>
                        <p className="text-gray-600 text-lg">
                        From onboarding to system updates, our pricing includes long-term partnership — not just software access.
                        </p>
                        <img
                            src={img1}
                            alt="description"
                            className="h-20 w-auto mt-2 mx-auto"
                        />
                    </div>
                    <div className="bg-white border rounded-lg p-6 shadow-md mx-auto max-w-sm">
                        <h3 className="text-3xl font-semibold text-[#0f172a] mb-2">Scalable by <br className="hidden sm:inline" />Design</h3>
                        <p className="text-gray-600 text-lg">
                        Our systems grow with your operation — pricing adjusts based on your evolving energy needs and expansion.
                        </p>
                        <img
                            src={img1}
                            alt="description"
                            className="h-20 w-auto mt-2 mx-auto"
                        />
                    </div>
                </div>
            </section>
            <CalculatorSection calculatorContent={calculatorContent} />
        </WebsiteLayout>
    )
}

export default UtilityMangementPricing