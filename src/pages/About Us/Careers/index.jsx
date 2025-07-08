import React from 'react'
import WebsiteLayout from '../../../components/Layout'
import CalculatorSection from '../../../components/Home/CalculatorSection';

import video from '../../../assets/Videos/aboutus.MP4'

import { FaPlay } from 'react-icons/fa';

import img1 from '../../../assets/Images/icon14.svg'
import img2 from '../../../assets/Images/icon15.svg'
import img3 from '../../../assets/Images/icon16.svg'
import img4 from '../../../assets/Images/icon17.svg'
import img5 from '../../../assets/Images/icon18.svg'
import img6 from '../../../assets/Images/Careers.webp'

import img from '../../../assets/Images/aboutusimg.webp'


import awardimg from '../../../assets/Images/award2.webp'
import companylogo from '../../../assets/Images/logo3.webp'

import HeroSection from '../../../components/About Us Components/HeroSection';
import HistorySecction from '../../../components/About Us Components/HistorySecction';
import EmpowerUsSection from '../../../components/About Us Components/EmpowerUsSection';
import SustainableFutureSection from '../../../components/About Us Components/SustainableFutureSection';
import Awards from '../../../components/About Us Components/Awards';
import TeamMembers from '../../../components/About Us Components/TeamMembers';
import Offices from '../../../components/About Us Components/Offices';
import HeroContent from '../../../components/About Us Components/CareersComponents/HeroContent';
import CompanyReviewsSlider from '../../../components/Product and Solutions Components/CompanyReviewsSlider';
import UtilitymanagementLevelUP from '../../../components/Product and Solutions Components/UtilitymanagementLevelUP';
import ImageGallery from '../../../components/About Us Components/CareersComponents/ImageGallery';


const careersContent = {
    heading1: "Build a more sustainable",
    heading2: " future with us",
    subheding: "We believe that data is critical to the fight against climate change. Our team is passionate about working together to help our customers make smarter, data-driven decisions about how they consume finite resources. If you’re looking for a role that enables you to do what you do best with a company mission you can get behind, we want to hear from you. ​​",
};

const calculatorContent = {
    heading1: "Learn more about SPT",
    // heading2: "energy and sustainability data.",
    btn: "Request a Demo",
};


const values = [
    {
        icon: img1,
        title: "Teamwork",
        description:
            "We create a collaborative environment through establishing a foundation of trust and valuing differences in optimizing outcomes towards a common goal.",
    },
    {
        icon: img2,
        title: "Impact",
        description:
            "We focus on effecting change, having the greatest level of positive influence on those around us, and improving the overall future for us and our customers.",
    },
    {
        icon: img3,
        title: "Accountability",
        description:
            "We take ownership and strive for excellence in delivering on our commitments.",
    },
    {
        icon: img4,
        title: "Integrity",
        description:
            "We value honesty, transparency & respect in guiding what we do, regardless of the situation.",
    },
    {
        icon: img5,
        title: "Innovation",
        description:
            "We consistently pursue new and creative ways to solve problems—always challenging the status quo.",
    },
];


const EmpowerUsSectionContent = {
    heading1: "The values that empower us",
};

const AwardsContent = {
    heading1: "Awards",
};

const SustainableFutureSectionContent = {
    heading1: "Build a more",
    heading2: "sustainable future with us!",
    subheding: "We believe that data is critical to the fight against climate change. Our team is passionate about helping organizations make smarter, data-driven decisions about how they consume finite resources. If you’re looking for a role that enables you to do what you do best with a company mission you can get behind, we want to hear from you. ​​",
    link: "See all open positions",
    img: img
};

const awards = [
    {
        icon: awardimg,
        title: "ENERGY STAR Partner of the Year 2024",
    },
    {
        icon: awardimg,
        title: "Capterra Best of Energy Management 2024",
    },
    {
        icon: awardimg,
        title: "Green Quadrant: Energy Management Software 2023",
    },
    {
        icon: awardimg,
        title: "2024 Top Environmental, Social and Governance Reporting (ESG) Software Quadrant.",
    },
    {
        icon: awardimg,
        title: "Summer 2024 Energy Manager Software Leaders",
    },
    {
        icon: awardimg,
        title: "Major Player in the Worldwide Carbon Accounting & Management Applications 2024 Vendor Assessment",
    },
    {
        icon: awardimg,
        title: "ESG Reporting Data Quadrant Leader",
    },
    {
        icon: awardimg,
        title: "2024 Top Product of the Year by the Environment+Energy Leader Awards Program",
    },
    {
        icon: awardimg,
        title: "Top Climate Tech Companies to Watch in 2024",
    },

    {
        icon: awardimg,
        title: "Best Company Perks & Benefits 2023",
        description:
            'Also awarded, was the "Best Company Work-Life Balance of 2023" title.',
    },
    {
        icon: awardimg,
        title: "2023 Emotional Footprint Champion",
        description:
            'Also awarded was the "2023 Environmental, Social and Governance Reporting Data Quadrant" title.',
    },
    {
        icon: awardimg,
        title: "Best Places to Work 2023",
        description:
            'Also awarded, was the "Best Startups in Colorado" title.',
    },
    {
        icon: awardimg,
        title: "Spring 2022 Energy Management Software (Wattics)",
        description:
            "We're also a Market Leader in the Summer 2023 Energy Management Software Customer Success Report.",
    },
];

const dataCompany = [
    {
        quote:
            "Our organization has taken piles of bills, endless spreadsheets, and countless amounts of time and utilized EnergyCAP to become extremely efficient with all our utility management needs.",
        name: "Tony W.",
        companyLogo: companylogo,
    },
    {
        quote:
            "Our organization has taken piles of bills, endless spreadsheets, and countless amounts of time and utilized EnergyCAP to become extremely efficient with all our utility management needs.",
        name: "Tony W.",
        companyLogo: companylogo,
    },
    {
        quote:
            "Our organization has taken piles of bills, endless spreadsheets, and countless amounts of time and utilized EnergyCAP to become extremely efficient with all our utility management needs.",
        name: "Tony W.",
        companyLogo: companylogo,
    },
];




const Careers = () => {
    return (
        <WebsiteLayout>
            <HeroContent careersContent={careersContent} />
            <ImageGallery />
            <EmpowerUsSection values={values} EmpowerUsSectionContent={EmpowerUsSectionContent} />
            <CompanyReviewsSlider dataCompany={dataCompany} />
            <Awards awards={awards} AwardsContent={AwardsContent} />
            <section className="px-6 py-12 max-w-7xl mx-auto">
                <div>
                    <div className="w-full px-2 mt-20 mb-10">
                        <div className={`flex flex-col lg:flex-row-reverse gap-15`}>
                            <div className="flex-1">
                                <img
                                    src={img6}
                                    alt=''
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Right Image Section */}
                            <div className="flex-1 space-y-5">
                                <h3 className='md:text-3xl text-xl font-bold'>
                                    Our generous benefits package
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">Competitive pay</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">At least 90% company-paid health, dental, vision, life, STD and LTD insurance for yourself and dependents</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">401(k) with 3% company match</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">Flexible paid time off</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">Connectivity stipend</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">Counseling and adoption grants</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">Tuition assistance</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">Professional coaching</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">Customized employee success program</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">Charitable contributions and matched employee giving program</span>
                                    </div><div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">Community service hours</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">Hybrid work environment</span>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <FaPlay className="text-[#6e8cd1] mt-1 flex-shrink-0" size={10} />
                                        <span className="text-[#0f172a] font-medium">Recognized as a “2023 Best Place to Work” in Denver, CO</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="relative overflow-hidden">
                <div className='max-w-6xl mx-auto sm:px-10 sm:py-24 px-5 py-24  flex flex-col items-center justify-center gap-5'>
                    <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-center">
                        Current job openings
                    </h1>
                    <p className="mt-6 lg:text-lg text-center">
                        Important Notice: We have been made aware of fraudulent recruitment activities where individuals or entities claim to represent our company and offer false employment opportunities. These scams may ask for personal information or financial payments as part of the hiring process. Please note the following to protect yourself: 1. We will never request any payment from candidates at any stage of the recruitment process. 2. All official communications will come from a @energycap.com email address. 3. Job openings are only posted on our official website or verified platforms. If you receive suspicious emails or offers, do not respond or share personal details. Instead, report them to us immediately at hr@energycap.com. We take your security seriously and encourage all job seekers to verify any recruitment-related communications directly with us. Thank you
                    </p>
                    <div className='mt-5'>
                        <button className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-md shadow-md cursor-pointer hover:shadow-xl hover:underline  transition duration-300">
                            Explore Opportunities
                        </button>
                    </div>
                </div>

            </section>
            <Offices />
        </WebsiteLayout>
    )
}

export default Careers