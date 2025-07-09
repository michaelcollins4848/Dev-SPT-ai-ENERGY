import React from 'react'
import WebsiteLayout from '../../../components/Layout'
import CalculatorSection from '../../../components/Home/CalculatorSection';

import video from '../../../assets/Videos/aboutus.MP4'


import img1 from '../../../assets/Images/icon14.svg'
import img2 from '../../../assets/Images/icon15.svg'
import img3 from '../../../assets/Images/icon16.svg'
import img4 from '../../../assets/Images/icon17.svg'
import img5 from '../../../assets/Images/icon18.svg'

import img from '../../../assets/Images/aboutusimg.webp'


import awardimg from '../../../assets/Images/award2.webp'


import HeroSection from '../../../components/About Us Components/HeroSection';
import HistorySection from '../../../components/About Us Components/HistorySection';
import EmpowerUsSection from '../../../components/About Us Components/EmpowerUsSection';
import SustainableFutureSection from '../../../components/About Us Components/SustainableFutureSection';
import Awards from '../../../components/About Us Components/Awards';
import TeamMembers from '../../../components/About Us Components/TeamMembers';
import Offices from '../../../components/About Us Components/Offices';


const aboutusContent = {
    heading1: "Pioneering the Future of Smart,",
    heading2: "Sustainable Energy.",
    subheding: "At SPT, we're not just offering energy solutions; we're actively shaping the future of intelligent and sustainable energy management. Our cutting-edge AI Energy Lab is dedicated to developing technologies that make energy smarter, more efficient, and incredibly reliable for everyone. We believe in empowering our users to optimize energy flow intelligently and ethically.",
    video: video,
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
    subheding:"We believe that data is critical to the fight against climate change. Our team is passionate about helping organizations make smarter, data-driven decisions about how they consume finite resources. If you’re looking for a role that enables you to do what you do best with a company mission you can get behind, we want to hear from you. ​​",
    link: "See all open positions",
    img:img
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


const Aboutus = () => {
    return (
        <WebsiteLayout>
            <HeroSection aboutusContent={aboutusContent} />
            <HistorySection />
            <EmpowerUsSection values={values} EmpowerUsSectionContent={EmpowerUsSectionContent} />
            <SustainableFutureSection values={values} SustainableFutureSectionContent={SustainableFutureSectionContent} />
            <Awards awards={awards} AwardsContent={AwardsContent} />
            <TeamMembers awards={awards} AwardsContent={AwardsContent} />
            <Offices  />
            <CalculatorSection calculatorContent={calculatorContent} />
        </WebsiteLayout>
    )
}

export default Aboutus