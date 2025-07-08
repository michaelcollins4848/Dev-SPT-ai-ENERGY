import React from 'react'
import WebsiteLayout from '../../components/Layout'
import HeroBannerSection from '../../components/Home/HeroBannerSection';
import CompaniesSlider from '../../components/Home/CompaniesSlider';
import ManageUtilityData from '../../components/Product and Solutions Components/ManageUtilityData';
import CalculatorSection from '../../components/Home/CalculatorSection';

import img from '../../assets/Images/heroimg1.webp'


import img1 from '../../assets/Images/icon10.webp'
import img2 from '../../assets/Images/icon11.webp'
import img3 from '../../assets/Images/icon12.png'
import img4 from '../../assets/Images/icon13.svg'
import img5 from '../../assets/Images/icon14.webp'
import img6 from '../../assets/Images/icon15.webp'

import platfrom1 from '../../assets/Images/platform11.webp'
import UtilitymanagementLevelUP from '../../components/Product and Solutions Components/UtilitymanagementLevelUP';
import UtilityManagementBuildSave from '../../components/Product and Solutions Components/UtilityManagementBuildSave';

import platfrom2 from '../../assets/Images/platform12.webp'

const homepageContent = {
    heading1: "Your energy, your way:",
    heading2: "Tailored solutions for maximum savings",
    subheding: "Whether you're managing a handful of meters or thousands, we provide the energy and utility management tools and flexibility to take control of your energy costs.",
    img: img,
    btn: "Talk to sales",
    showplay: false,
    showtop: false,
    navigation: 'UtilityManagement / Pricing',
};

const showtop = false

const calculatorContent = {
    heading1: "Easily manage your finite resources",
    heading2: "with SPT",
    btn: "Request a Demo",
};

const data = [
    {
        heading: "Packages starting as low as $5,000/year",
        heading1: "Start with UtilityManagement",
        subheading: "Get best-in-class portfolio level utility bill data management and reporting. Free up valuable time, uncover massive energy savings, and effortlessly streamline operations for everyone in your organization—energy managers, sustainability professionals, and finance leaders alike.",
        feature: [
            {
                label: 'Accurate utility bill data, always',
                link: '#', // Replace with actual link
            },
            {
                label: 'Easy facility benchmarking',
                link: '#',
            },
            {
                label: 'Integrate with ENERGY STAR',
                link: null,
            },
            {
                label: 'Measurement and verification',
                link: null,
            }
        ],
        img: platfrom1,
        btn: "Talk to sales today",
        showbtn: true
    },
];


const ManageUtilityDataContent = {
    heading1: "Customize your package based on your business's needs",
    subheding: "Pricing is based per meter per year. UtilityManagement, EnergyCAP’s flagship utility bill management software, is the cornerstone of energy efficiency—build your foundation here and expand with carbon accounting and energy management add-ons that suit your needs.",
    showsubheading: true,
};

const levelupContent = {
    heading1: "Level up your utility bill management software package with these add-ons",
    subheding: "Get even more out of EnergyCAP and your utility bill data with add-ons to advance your sustainability goals, act in real-time, and help finance leaders gain unparalleled control and transparency over energy costs.",
    showsubheading: true,
    showtop: true,
};

const levelupContent1 = {
    heading1: "Add on our expert services for better data management.",
    subheding: "Let us put our 40+ years of utility data expertise to work for you. Our expert services are designed to save you significant time by handling bill data entry, working directly with utilities to resolve issues and overcharges, and managing your utility bill payments seamlessly.",
    showsubheading: true,
    showtop: true,
};

const BundleandsaveContent = {
    heading1: "Bundle and save:",
    heading2: "comprehensive energy management at your fingertips",
    subheding: "Maximize your ROI by leveraging the full suite of EnergyCAP solutions. Our most successful customers who show the best ROI get the full suite. Purchase the complete package to unlock our deepest discount, see immediate savings, and future-proof your organization with quick wins and intelligent long-term changes. Designed to work together seamlessly, our tools make managing energy efficient and cost-effective.",
    btn: "Talk to sales today",
    img:platfrom2,
    showsubheading: true,
    showtop: true,
};

const packages = [
    {
        icon: img1,
        title: "CarbonHub",
        subheading: "Carbon accounting software that delivers:",
        feature: [
            {
                label: 'Audited, financial-grade commodity and utility data to support your Scope 1, 2, and 3 carbon accounting.',
            },
            {
                label: 'Fast and accurate impact assessments for investors, regulators, and stakeholders.',
            },
            {
                label: 'Intelligent GHG tracking and reporting, all within a single, reliable source of truth.',
            },
        ],
        lernshow: true,
        learncontent: "Learn about EnergyCAP CarbonHub"
    },
    {
        icon: img2,
        title: "SmartAnalytics",
        subheading: "Energy management software that empowers you to:",
        feature: [
            {
                label: 'Transform raw energy data into real-time intelligence.',
            },
            {
                label: 'Instant insights, automated notifications, and to-the-minute updates to stay informed.',
            },
            {
                label: 'Uncover inefficiencies and quickly address issues early before costs escalate.',
            },
        ],
        lernshow: true,
        learncontent: "Learn about EnergyCAP SmartAnalytics"
    },
    {
        icon: img3,
        title: "Advanced utility data management",
        subheading: "Carbon accounting software that delivers:",
        feature: [
            {
                label: 'Easily process, review, and approve bills, estimate future bills for accruals, and create reliable budgets that you can adjust anytime with our trio of powerful accounting features.',
            },
            {
                label: 'Simplified, accurate energy cost allocation by custom calculation or submeter readings.',
            },
            {
                label: 'Gain powerful insights with dynamic business intelligence reports for smarter energy decisions.',
            },
        ],
        lernshow: false
    },
];

const packages1 = [
    {
        icon: img4,
        title: "Bill CAPture Services",
        feature: [
            {
                label: 'Wave goodbye to manual utility bill data entry while we do the work for you.',
            },
            {
                label: 'Any bill, any form—capture utility bill data and immediately convert it into important energy cost and consumption data.',
            },
            {
                label: 'Bill CAPture customers save up to 5x the amount of employee time every month.',
            },
        ],
        lernshow: true,
        learncontent: "Learn about Bill CAPture Services"
    },
    {
        icon: img5,
        title: "Audit and vendor management",
        feature: [
            {
                label: 'Let us identify missing or overdue bills and address bill issues.',
            },
            {
                label: 'We interface with utilities on your behalf—no more sitting on hold waiting to get billing errors reversed or overpaying for their mistakes.',
            },
            {
                label: 'Save time and money without adding more resources while you stay informed of billing gaps and errors.',
            },
        ],
        lernshow: false,
        learncontent: "Learn about EnergyCAP SmartAnalytics"
    },
    {
        icon: img6,
        title: "EnergyCAP Payments",
        feature: [
            {
                label: 'We pay your utility bills automatically, correctly, and on-time.',
            },
            {
                label: 'Easy, auditable trail for every bill payment in a system tailor-made to manage your biggest pile of complicated bills.',
            },
            {
                label: 'Save cost when you minimize late fees and share billing rebates with EnergyCAP.',
            },
        ],
        lernshow: false
    },
];


const PricingInformation = () => {
    return (
        <WebsiteLayout>
            <HeroBannerSection homepageContent={homepageContent} />
            <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center mb-5">
                Trusted by businesses just like yours
            </h2>
            <CompaniesSlider showtop={showtop} />
            <ManageUtilityData data={data} ManageUtilityDataContent={ManageUtilityDataContent} />
            <UtilitymanagementLevelUP levelupContent={levelupContent} packages={packages} />
            <UtilitymanagementLevelUP levelupContent={levelupContent1} packages={packages1} />
            <UtilityManagementBuildSave BundleandsaveContent={BundleandsaveContent} />
            <CalculatorSection calculatorContent={calculatorContent} />
        </WebsiteLayout>
    )
}

export default PricingInformation