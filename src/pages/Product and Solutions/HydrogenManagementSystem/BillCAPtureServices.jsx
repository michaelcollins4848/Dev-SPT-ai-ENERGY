import React from 'react'
import WebsiteLayout from '../../../components/Layout'
import HeroBannerSection from '../../../components/Home/HeroBannerSection';
import CompaniesSlider from '../../../components/About Us Components/CompaniesSlider';
import GoodbyeSpreadsheets from '../../../components/Product and Solutions Components/GoodbyeSpreadsheets';
import UtilityBillDataExcellence from '../../../components/Product and Solutions Components/UtilityBillDataExcellence';
import ManageUtilityData from '../../../components/Product and Solutions Components/ManageUtilityData';
import CalculatorSection from '../../../components/Home/CalculatorSection';
import CompanyReviewsSlider from '../../../components/Product and Solutions Components/CompanyReviewsSlider';

import img from '../../../assets/Images/heroimg3.webp'


import img1 from '../../../assets/Images/icon1.svg'
import img2 from '../../../assets/Images/icon2.svg'
import img3 from '../../../assets/Images/icon3.svg'
import img4 from '../../../assets/Images/icon4.svg'
import img5 from '../../../assets/Images/icon5.svg'
import img6 from '../../../assets/Images/icon6.svg'
import img7 from '../../../assets/Images/icon7.svg'
import img8 from '../../../assets/Images/icon8.svg'
import img9 from '../../../assets/Images/icon9.svg'

import platfrom1 from '../../../assets/Images/platform7.webp'
import platfrom2 from '../../../assets/Images/platform8.webp'
import platfrom3 from '../../../assets/Images/platform9.webp'
import platfrom4 from '../../../assets/Images/platform10.webp'

import companylogo from '../../../assets/Images/logo3.webp'
import BlogSection from '../../../components/Home/BlogSection';

import blog1 from '../../../assets/Images/blog1.png'


const homepageContent = {
  heading1: "Wave goodbye to manual ",
  heading2: " utility bill data entry.",
  subheding: "Accurate utility bill accounting and effective energy management starts with capturing complete utility bill data. Manual utility bill data entry consumes your valuable time. Let us do the work for you with EnergyCAP Bill CAPture℠, our specialized utility bill processing services.",
  img: img,
  btn: "Calculate your utility bill processing spend",
  playbtn: "Eliminate manual bill entry with Bill CAPture",
  showplay: false,
  showtop: true,
  navigation: 'UtilityManagement / Bill CAPture Services',
};

const showtop = false

const calculatorContent = {
  heading1: "Reclaim your time with our specialized",
  heading2: "utility bill processing services.",
  btn: "Contact sales",
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
    heading: "Any bill, any format",
    subheading: "Capture utility bill data and convert it into important energy cost and consumption information. Using industry-leading technologies, Bill CAPture℠ collects and processes utility bills in a variety of formats:",
    feature: [
      {
        label: 'scanned images (PDF, TIFF, HTML, JPG, etc.)',
        link: '#', // Replace with actual link
      },
      {
        label: 'electronic vendor files (EDI 810, XLS, CSV, TXT)',
        link: '#',
      },
      {
        label: 'paper bills mailed to our processing center',
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
    heading: "All your bills, in one place",
    subheading: "With Bill CAPture, you can:",
    feature: [
      {
        label: 'manually upload bills',
        link: '#', // Replace with actual link
      },
      {
        label: 'manage notification settings',
        link: '#',
      },
      {
        label: 'view batch information',
        link: null,
      },
      {
        label: 'upload batches for processing',
        link: null,
      },
      {
        label: 'review transaction volumes',
        link: null,
      }
    ],
    img: platfrom2
  },
  {
    heading: "Data, with certainty",
    subheading: "When it comes to bills, absolute numbers matter. EnergyCAP automatically identifies billing errors, so you can breathe easy knowing every bill is tracked accurately down to the cent. With Bill CAPture Advanced Managed Services and higher, we will take action to resolve or escalate any issues preventing successful processing.",
    img: platfrom3
  },
  {
    heading: "Managed services",
    subheading: "Don’t worry, we’ve got your back. Our 40 years of expertise positions us to be your trusted utility bill partner. Let us identify missing or overdue bills, engage with your utility vendors, and monitor and address bill issues. We can set up and manage submissions to ENERGY STAR Portfolio Manager and keep you informed of any errors or billing gaps.",
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

const ManageUtilityDataContent = {
  heading1: "Reclaim your time with utility bill processing services.",
  subheding: "Whether you manage a handful of buildings or thousands of properties across the globe, our ERP for utilities is a flexible, accurate, and reliable platform that helps you make sense of your energy and sustainability data and streamlines your team’s workflows.",
  showsubheading: false,
};

const UtilityBillDataExcellenceContent1 = {
  heading1: "A tradition of service & success",
  subheding: "For more than 40 years, EnergyCAP has made it our mission to simplify energy & sustainability data management. Combining your strengths and ours, we'll partner to build a more sustainable world through responsible management of finite resources.",
  btn: "Learn more about services",
  showsubheading: true,
  showtop: true,
  showbtn: true
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

const UtilityMangementBillCAPtureServices = () => {
  return (
    <WebsiteLayout>
      <HeroBannerSection homepageContent={homepageContent} />
      <ManageUtilityData data={data} ManageUtilityDataContent={ManageUtilityDataContent} />
      <CompanyReviewsSlider dataCompany={dataCompany} />
      <UtilityBillDataExcellence features={features1} UtilityBillDataExcellenceContent={UtilityBillDataExcellenceContent1} />
      <CalculatorSection calculatorContent={calculatorContent} />
      <BlogSection tabs={tabs} blogs={blogs} blogContent={blogContent} />
    </WebsiteLayout>
  )
}

export default UtilityMangementBillCAPtureServices