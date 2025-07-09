import React, { useEffect, useState } from 'react'
import WebsiteLayout from '../../components/Layout'
import ems from "../../assets/Images/ems.png";

import heroImg from '../../assets/Images/img.png'
import blog1 from '../../assets/Images/blog1.png'
import platfrom1 from '../../assets/Images/Energy Insight.png'
import platfrom2 from '../../assets/Images/EMS intelligently.png'
import platfrom3 from '../../assets/Images/Power Assurance.png'


import platfrom4 from '../../assets/Images/trusted-Intelligence.png'

import { FaRegLightbulb, FaFileInvoiceDollar, FaPiggyBank } from "react-icons/fa";

import HeroBannerSection from '../../components/Home/HeroBannerSection';
import CompaniesSlider from '../../components/About Us Components/CompaniesSlider';
import CalculatorSection from '../../components/Home/CalculatorSection';
import TestimoninalCarousel from '../../components/Home/TestimoninalCarousel';
import BlogSection from '../../components/Home/BlogSection';
import HomeCarousel from '../../components/Home/HomeCarousel';

// import EnergyDashboard from './EnergyDashboard';




const stats = [
  {
    icon: <FaRegLightbulb size={50} className="text-secondary" />,
    value: "10K+",
    description: "Energy and sustainability leaders.",
  },
  {
    icon: <FaFileInvoiceDollar size={50} className="text-secondary" />,
    value: "$47B+",
    description: "Worth of vendor bills tracked annually.",
  },
  {
    icon: <FaPiggyBank size={50} className="text-secondary" />,
    value: "10%+",
    description: "Annual energy savings for majority of customers.",
  },
];

const solutions = [
  {
    icon: ems,
    title: "Energy Management",
    description:
      "SPT’s AI-powered Energy Management System (EMS) serves as the intelligent brain of your energy ecosystem. Designed for homes, businesses, and power plants, it ensures real-time optimization of energy flow—improving efficiency, reducing costs, and enhancing system reliability.",
    features: [
      "Intelligent dashboards for transparent energy usage and savings",
      "Predictive control for solar, battery, and grid usage",
      "Anomaly and risk detection including weather and grid hazards",
      "Local AI processing for data privacy and compliance",
      "Uninterrupted power supply for critical systems like hospitals",
    ],
    link: "#",
  },
  {
    icon: ems,
    title: "Energy Exchange",
    description:
      "Energy Exchange is the fundamental principle that governs all our interactions. It's the unseen current of giving and receiving that flows between us, shaping our relationships, well-being, and personal growth. We believe that understanding and honoring this flow is the key to a balanced, authentic life.",
    features: [
      "The conscious practice of reciprocal giving and receiving.",
      "Recognizing that your time, attention, and skills are valuable forms of energy.",
      "Creating healthy boundaries to protect and honor your personal energy.",
      "Building relationships based on mutual respect and balanced energetic investment.",
      "The belief that for every output of energy, there should be an inflow to maintain equilibrium and prevent burnout.",
    ],
    link: "#",
  },
  {
    icon: ems,
    title: "Energy AI",
    description:
      "Our Energy AI creates intelligent, self-optimizing energy networks. We apply advanced machine learning to transform complex data into actionable insights—boosting grid reliability, seamlessly integrating renewables, and increasing overall efficiency for a cleaner, more resilient future.",
   features: [
  "Predictive Grid Management: Forecast demand and reroute power to avoid outages.",
  "Renewable Forecasting: Improve solar/wind reliability with accurate generation data.",
  "Asset Maintenance: Detect issues early and prevent costly equipment failures.",
  "Demand & Storage Optimization: Balance peak loads and battery use in real-time.",
  "AI Market Trading: Analyze trends and boost returns with smart trading decisions.",
],

    link: "#",
  },
];


const testimonials = [
  {
    quote:
      "We cut our monthly energy costs by nearly 30% within the first quarter of using SPT’s EMS. The AI does the work—analyzing patterns, optimizing our energy sources, and keeping everything running smoothly without manual intervention.",
    name: "Jenna Thompson",
    title: "Facilities Manager",
    companyLogo: "GreenTech Corp (Austin, TX)",
    videoThumbnail: "/assets/woman1.png",
    bgColor: "bg-blue-300",
  },
  {
    quote:
      "With SPT’s predictive maintenance and energy usage optimization, our commercial campus avoided two major outages last year. Their system not only saves money—it gives peace of mind.",
    name: "David Lee",
    title: "Director of Sustainability",
    companyLogo: "/assets/other-logo.png",
    videoThumbnail: "/assets/woman2.png",
    bgColor: "bg-green-300",
  },
  {
    quote:
      "SPT’s real-time data dashboards and local AI analysis have completely transformed how we manage energy at our municipal buildings. We now have full visibility and can make decisions backed by clear, actionable insights.",
    name: "Lucci Dev",
    title: "VP Operations",
    companyLogo: "/assets/other-logo.png",
    videoThumbnail: "/assets/woman2.png",
    bgColor: "bg-green-300",
  },
];

const tabs = [
  {
    id: 0,
    title: "STORED POWER TECHNOLOGY INC (SPT)",
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



const tabData = [
  {
    index: 0,
    title: "Energy Insight",
    content: `Our AI Energy Management System (EMS) provides clear, real-time visualizations of your energy generation, storage, usage, and savings. Gain transparent insights without compromising your data privacy. `,
    link: "Explore our ai energy management system ",
    image: platfrom1,
  },
  {
    index: 1,
    title: "Energy Efficiency",
    content: `The AI within our EMS intelligently learns your energy habits and local pricing to automatically optimize energy sources – solar, battery, or grid – ensuring you reduce electricity bills and reliance on the grid effortlessly. `,
    link: "Explore our EMS intelligently ",
    image: platfrom2,
  },
  {
    index: 2,
    title: "Power Assurance",
    content: `From predicting maintenance needs to monitoring weather hazards, grid stability, and equipment anomalies, our EMS provides early warnings and takes immediate action to ensure 24/7 power for critical needs. `,
    link: "Explore our predicting maintenance",
    image: platfrom3,
  },
  {
    index: 3,
    title: "Trusted Intelligence",
    content: `Our strategic partnership with IBM integrates powerful platforms like IBM Maximo and WatsonX, leveraging advanced AI agents and robust IBM Cloud for unparalleled reliability and scalability. Your core server infrastructure on AWS ensures speed and security. `,
    link: "Explore our strategic partnership",
    image: platfrom4,
  }
];


const homepageContent = {
  heading1: "SPT AI Energy Lab:",
  heading2: "Revolutionizing Energy Management with AI",
  subheding: "Experience unparalleled efficiency, savings, and reliability for your home, business, or power grids.",
  img: heroImg,
  btn: "Get a Free Consultation", 
  showtop: false,
};

const calculatorContent = {
  heading1: "Effortlessly manage your energy resources with intelligent control",
  heading2: "SPT AI Energy Lab",
  btn: "Contact Sales",
};

const blogContent = {
  btn: "Resources & Insights",
  showprogress: true,
  showbttombtn: true,
};

const showtop = true


const HomePage = () => {
  const [activeIndex1, setActiveIndex1] = useState(0);

  return (
    <WebsiteLayout>
      {/* hero banner section */}
      <HeroBannerSection homepageContent={homepageContent} />

      {/* maximize efficiency section  */}
      <section className="font-arimo pt-1 pb-16">
        <div className="text-center px-4 md:px-0">
          <h2 className="text-xl md:text-4xl font-bold mb-12 leading-tight">

            Achieve peak efficiency, cost savings,<br /> and sustainable energy transformation with <br />SPT’s AI-powered EMS
          </h2>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto bg-white/60 p-8 rounded-lg shadow-md border border-[#0f172a]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="mb-3">{stat.icon}</div>
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="text-primary">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* home carousel section */}
      <HomeCarousel />

      {/* <Single platform /> */}
      <section className="px-6 pt-16">
        <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
          Unified energy tools for every role
        </h2>
        <p className="mt-4 max-w-4xl text-lg mx-auto text-gray-700 text-center">
          SPT’s intelligent EMS brings together cross-functional teams on a single platform, enabling seamless collaboration to maximize efficiency, control costs, and drive sustainable energy outcomes.
        </p>
        <div className="w-full px-4 mt-20 mb-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Tabs Section */}
            <div className="flex-1 space-y-4">
              {tabData.map((tab) => {
                const isActive = activeIndex1 === tab.index;
                return (
                  <div
                    key={tab.index}
                    onClick={() => setActiveIndex1(tab.index)}
                    className={`group cursor-pointer  transition duration-300  ${isActive ? "bg-white shadow-md p-8 border border-[#0f172a]" : "p-8"
                      }`}
                  >
                    <h3
                      className={`md:text-2xl text-xl font-bold ${isActive ? "text-[#0f172a] group-hover:underline" : "text-gray-400 hover:underline"
                        }`}
                    >
                      {tab.title}
                    </h3>
                    {isActive && (
                      <>
                        <p className="mt-3 text-gray-700 leading-7 ">{tab.content}</p>
                        <a
                          href="#"
                          className="block mt-9 font-semibold text-[#0f172a] group-hover:underline "
                        >
                          {tab.link}
                        </a>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Image Section */}
            <div className="flex-1">
              <img
                src={tabData[activeIndex1].image}
                alt={tabData[activeIndex1].title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* solution empower section  */}
      <section className="px-6 pt-4 pb-12 text-center">
        <div className="mt-12 text-center max-w-4xl mx-auto text-[#0f172a]">
          <h4 className="font-bold  text-4xl mb-3">Seamless Data Integration, Expertly Managed</h4>
          <p className='text-gray-700 text-lg'>
            Boost the accuracy and impact of your energy data with <span className="font-semibold underline text-[#0f172a]">SPT’s managed services.</span> Our end-to-end data capture and integration solutions ensure your information flows into the SPT platform precisely and on time. Let us handle the technical complexities—so you can stay focused on what matters most: improving efficiency, cutting costs, and making smarter, data-driven energy decisions.
          </p>
        </div>
      </section>

      {/* Testimoninal  section  */}
      <TestimoninalCarousel testimonials={testimonials} />

      {/* calculator  section  */}
      <CalculatorSection calculatorContent={calculatorContent} />

      {/* blog  section  */}
      {/* <BlogSection tabs={tabs} blogs={blogs} blogContent={blogContent} /> */}
    </WebsiteLayout>
  )
}

export default HomePage



