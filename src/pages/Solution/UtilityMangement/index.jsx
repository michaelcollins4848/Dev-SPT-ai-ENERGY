import React from 'react'
import WebsiteLayout from '../../../components/Layout'
import HeroBannerSection from '../../../components/Home/HeroBannerSection';
import CompaniesSlider from '../../../components/Home/CompaniesSlider';
import GoodbyeSpreadsheets from '../../../components/Solution Components/GoodbyeSpreadsheets';
import UtilityBillDataExcellence from '../../../components/Solution Components/UtilityBillDataExcellence';
import ManageUtilityData from '../../../components/Solution Components/ManageUtilityData';
import CalculatorSection from '../../../components/Home/CalculatorSection';
import CompanyReviewsSlider from '../../../components/Solution Components/CompanyReviewsSlider';

import img from '../../../assets/Images/heroimg1.webp'


import img1 from '../../../assets/Images/icon1.svg'
import img2 from '../../../assets/Images/icon2.svg'
import img3 from '../../../assets/Images/icon3.svg'
import img4 from '../../../assets/Images/icon4.svg'
import img5 from '../../../assets/Images/icon5.svg'
import img6 from '../../../assets/Images/icon6.svg'
import img7 from '../../../assets/Images/icon7.svg'
import img8 from '../../../assets/Images/icon8.svg'
import img9 from '../../../assets/Images/icon9.svg'

import platfrom1 from '../../../assets/Images/platform1.webp'
import platfrom2 from '../../../assets/Images/platform4.webp'
import platfrom3 from '../../../assets/Images/platform5.webp'
import platfrom4 from '../../../assets/Images/platform6.webp'

import companylogo from '../../../assets/Images/logo3.webp'
import BlogSection from '../../../components/Home/BlogSection';

import blog1 from '../../../assets/Images/blog1.png'


const homepageContent = {
    heading1: "Save 10% or more*",
    heading2: "with utility management software",
    subheding: "Utility data is complex. You need a tool to automate data entry, detect billing discrepancies, and streamline approval and review procedures. EnergyCAP enhances your existing workflows to new levels of efficiency and reliability. *More than half of customers save 10% or more YoY on the total cost of their utility bills after implementation.",
    img: img,
    btn: "Read the ROI of EnergyCAP UtilityManagement eBook",
    showplay: false,
    showtop: true,
    navigation: 'UtilityManagement',
};

const showtop = false

const calculatorContent = {
    heading1: "The single source of truth for your",
    heading2: "energy and sustainability data.",
    btn: "Request a Demo",
};


const features = [
    {
        icon: img6,
        title: "Utility bill management",
        description:
            "Advanced workflows for bill entry, approval, and payment. EnergyCAP automatically checks to validate your usage and flags any errors or anomalies.",
    },
    {
        icon: img5,
        title: "Facility benchmarking",
        description:
            "Normalize use and compare relative performance of similar buildings and spot energy hogs.",
    },
    {
        icon: img4,
        title: "Chargebacks and tenant billing",
        description:
            "Quickly allocate consumption and recoup energy costs from tenants and departments based on submeter use, splits, or formulas.",
    },
    {
        icon: img3,
        title: "ENERGY STAR integration",
        description:
            "Eliminate the burden to meet state and local mandates by automatically integrating with ENERGY STAR Portfolio Manager. View ratings & metrics directly in EnergyCAP.",
    },
    {
        icon: img2,
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

const data = [
    {
        heading: "Capture",
        subheading: "Gain timely access to accurate and reliable energy and sustainability information. From utility bill management to time-series data, to the sustainability data that matters to you, get a better understanding of your entire footprint.",
        feature: [
            {
                label: 'Utility bill entry and import',
                link: '#', // Replace with actual link
            },
            {
                label: 'BillCapture managed services',
                link: '#',
            },
            {
                label: 'API integrations',
                link: null,
            },
            {
                label: 'Data formats: paper, PDF, XLS, CSV, TST, XML, EDI, and more',
                link: null,
            }
        ],
        img: platfrom1
    },
    {
        heading: "Allocate",
        subheading: "Recoup energy costs from tenants, departments, or energy districts by allocating costs using sub-meter data, formulas, and split calculations with EnergyCAP’s Chargeback feature. Target and track usage, cost, and carbon from measurable or calculated points. Get as granular as you need with the way you allocate costs and consumption.",
        img: platfrom2
    },
    {
        heading: "Analyze",
        subheading: "Stop searching for a needle in the haystack. Our utility management software automatically identifies outliers in your data and points to the exact place you need to look, so you can save time and focus on more meaningful projects.",
        feature: [
            {
                label: 'Utility bill auditing',
                link: '#', // Replace with actual link
            },
            {
                label: 'Energy benchmarking',
                link: '#',
            },
            {
                label: 'Measurement and verification',
                link: null,
            },
            {
                label: 'Energy use intensity (EUI)',
                link: null,
            },
            {
                label: 'Integrated charts and graphs',
                link: null,
            },
            {
                label: 'PowerViews',
                link: null,
            }
        ],
        img: platfrom3
    },
    {
        heading: "Report",
        subheading: "Distribute meaningful information to your team members and stakeholders in a streamlined and automated way. With accurate and reliable reports and dashboards, you have proof that your programs are performing like a well-oiled machine.",
        feature: [
            {
                label: 'Library of standard reports',
                link: '#', // Replace with actual link
            },
            {
                label: 'Configurable reports and dashboards',
                link: '#',
            },
            {
                label: 'Automated ENERGY STAR submission',
                link: null,
            },
            {
                label: 'Business intelligence integration',
                link: null,
            },
            {
                label: 'Bill accruals and forecasting',
                link: null,
            },
        ],
        img: platfrom4
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

const UtilityBillDataExcellenceContent = {
    heading1: "Utility bill data excellence",
    btn: " See all features",
    showsubheading: false,
    showtop: true,
    showbtn:true
};

const UtilityBillDataExcellenceContent1 = {
    heading1: "A tradition of service & success",
    subheding: "For more than 40 years, EnergyCAP has made it our mission to simplify energy & sustainability data management. Combining your strengths and ours, we'll partner to build a more sustainable world through responsible management of finite resources.",
    btn: "Learn more about services",
    showsubheading: true,
    showtop: true,
    showbtn:true
};

const blogContent = {
  btn: "Recommended resources for you",
  showprogress: false,
  showbttombtn: false,
};

const tabs = [
  {
    id: 0,
    title: "Don't Count ENERGY STAR Out Just Yet",
    label: "Don’t Count ENERGY STAR Out Just Yet",
  },
  {
    id: 1,
    title: "Strategic Energy Management: A Practical Guide for Modern Organizations",
    label: "Strategic: Energy Management: A Practical Guide for Modern Organizations",
  },
  {
    id: 2,
    title: "How Miami-Dade County is Turning Small Energy Tweaks into Big Wins",
    label: "How Miami-Dade County is Turning Small Energy Tweaks into Big Wins",
  }
];

const blogs = [
  {
    id: 0,
    title: "If ENERGY STAR® Goes Dark, What’s Your Plan B?",
    img: blog1,
  },
  {
    id: 1,
    title: "If ENERGY STAR® Goes Dark, What’s Your Plan B?",
    img: blog1,
  },
  {
    id: 2,
    title: "If ENERGY STAR® Goes Dark, What’s Your Plan B?",
    img: blog1,
  }
];

const features1 = [
    {
        icon: img9,
        title: "Capture services",
        description:
            "Accurate, timely, and dependable data is key to your success. Make manual data entry a thing of the past and let us do the work for you. We capture utility bill data in any format and also capture smart meter interval data from available sources.",
    },
    {
        icon: img7,
        title: "Professional services",
        description:
            "Our team of industry experts are here to guide you through your data journey from expert implementation to advanced consultation, to becoming an extension of your team. We’re here to help you do your best work and achieve your goals.",
    },
    {
        icon: img8,
        title: "Expert training",
        description:
            "Whether you are new to EnergyCAP or if you just need a refresher course, we are committed to helping you and your team maximize the value from the software. We offer online or in person customized training to meet your specific needs.",
    },
];
const ManageUtilityDataContent = {
  heading1: "A simpler way to manage utility data",
  subheding: "Whether you manage a handful of buildings or thousands of properties across the globe, our ERP for utilities is a flexible, accurate, and reliable platform that helps you make sense of your energy and sustainability data and streamlines your team’s workflows.",
  showsubheading: true,
};


const UtilityMangement = () => {
    return (
        <WebsiteLayout>
            <HeroBannerSection homepageContent={homepageContent} />
            <CompaniesSlider showtop={showtop} />
            <GoodbyeSpreadsheets />
            <UtilityBillDataExcellence features={features} UtilityBillDataExcellenceContent={UtilityBillDataExcellenceContent} />
            <ManageUtilityData data={data} ManageUtilityDataContent={ManageUtilityDataContent} />
            <CompanyReviewsSlider dataCompany={dataCompany} />
            <UtilityBillDataExcellence features={features1} UtilityBillDataExcellenceContent={UtilityBillDataExcellenceContent1} />
            <CalculatorSection calculatorContent={calculatorContent} />
            <BlogSection tabs={tabs} blogs={blogs} blogContent={blogContent} />
        </WebsiteLayout>
    )
}

export default UtilityMangement