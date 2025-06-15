import React, { useEffect, useState } from 'react'
import WebsiteLayout from '../../components/Layout'
import Slider from "react-slick";

import heroImg from '../../assets/Images/img.png'
import blog1 from '../../assets/Images/blog1.png'
import platfrom1 from '../../assets/Images/Energy Insight.png'
import platfrom2 from '../../assets/Images/EMS intelligently.png'
import platfrom3 from '../../assets/Images/Power Assurance.png'


import { FaRegLightbulb, FaFileInvoiceDollar, FaPiggyBank } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

import HeroBannerSection from '../../components/Home/HeroBannerSection';
import CompaniesSlider from '../../components/Home/CompaniesSlider';
import CalculatorSection from '../../components/Home/CalculatorSection';
import TestimoninalCarousel from '../../components/Home/TestimoninalCarousel';
import BlogSection from '../../components/Home/BlogSection';

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
    icon: "/assets/utility-icon.png",
    title: "ENERGYCAP UtilityManagement®",
    description:
      "Get best-in-class portfolio-level energy and sustainability reporting. Get accurate and reliable energy and utility data across your entire portfolio and streamline energy and accounting workflows.",
    features: [
      "Accurate utility bill data, always",
      "Easy facility benchmarking",
      "Chargebacks and tenant billing",
      "Integrate with ENERGY STAR",
      "Measurement and verification",
    ],
    link: "#",
  },
  {
    icon: "/assets/smartanalytics-icon.png",
    title: "ENERGYCAP SmartAnalytics®",
    description:
      "Get real-time energy and sustainability analytics. Dive deep into real-time performance of assets, devices, and sensors. Make quick, data-driven decisions for high-performance, net-zero buildings.",
    features: [
      "Analyze consumption trends",
      "Machine learning behavior modeling",
      "Customizable alerts and alarms",
      "Formula-based calculations",
      "Tariff analytics",
    ],
    link: "#",
  },
  {
    icon: "/assets/carbonhub-icon.png",
    title: "ENERGYCAP CarbonHub®",
    description:
      "Get a holistic view of financial-grade scope 1, 2, and 3 carbon emissions data across your entire business with automatically applied factors to meet your ESG reporting needs.",
    features: [
      "Auto GHG conversion",
      "Market-based emissions factors",
      "Track progress toward goals",
      "Sharable reports, charts, and dashboards",
      "BI tool integration",
    ],
    link: "#",
  },
];

const testimonials = [
  {
    quote:
      "With EnergyCAP, we’ve been able to accomplish energy savings across the institution as a whole.",
    name: "Sean Finegan",
    title: "Business Operations Manager",
    companyLogo: "/assets/utmb-logo.png",
    videoThumbnail: "/assets/woman1.png",
    bgColor: "bg-blue-300",
  },
  {
    quote:
      "We finally went from paper that had sprocket on both sides to a data-driven database.",
    name: "Executive Director of Energy",
    title: "",
    companyLogo: "/assets/other-logo.png",
    videoThumbnail: "/assets/woman2.png",
    bgColor: "bg-green-300",
  },
  {
    quote:
      "We finally went from paper that had sprocket on both sides to a data-driven database.",
    name: "Executive Director of Energy",
    title: "",
    companyLogo: "/assets/other-logo.png",
    videoThumbnail: "/assets/woman2.png",
    bgColor: "bg-green-300",
  },
];

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
    title: "Power Assurance",
    content: `From predicting maintenance needs to monitoring weather hazards, grid stability, and equipment anomalies, our EMS provides early warnings and takes immediate action to ensure 24/7 power for critical needs. `,
    link: "Explore our predicting maintenance",
    image: platfrom3,
  }
];


const homepageContent = {
  heading1: "SPT AI Energy Lab:",
  heading2: "Revolutionizing Energy Management with Intelligent AI",
  subheding: "Experience unparalleled efficiency, savings, and reliability for your home, business, or power plant.",
  img: heroImg,
  btn: "Get a Free Consultation",
  playbtn: "What is EMS?",
  showplay: true,
  showtop: false,
};

const calculatorContent = {
  heading1: "Easily manage your finite resources with",
  heading2: "EnergyCAP",
  btn: "Contact Sales",
};

const blogContent = {
  btn: "Resources & Insights",
  showprogress: true,
  showbttombtn: true,
};

const showtop = true


const HomePage = () => {
  const [activeIndex1, setActiveIndex1] = useState(1);

  return (
    <WebsiteLayout>
      {/* hero banner section */}
      <HeroBannerSection homepageContent={homepageContent} />


      {/* maximize efficiency section  */}
      <section className="font-arimo py-16">
        <div className="text-center px-4 md:px-0">
          <h2 className="text-xl md:text-4xl font-bold mb-12 leading-tight">
        
            Achieve peak efficiency, cost savings,<br /> and sustainable energy transformation with <br/>SPT’s intelligent AI-powered EMS
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

      {/* partner company section  */}
      <CompaniesSlider showtop={showtop} heading="SPT AI Energy Lab partners with corporations, governments, and institutions to deliver intelligent energy solutions that drive efficiency, savings, and sustainable transformation."/>

      {/* <Single platform /> */}
      <section className="px-6 py-16">
        <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
       Unified energy tools for every role
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-center">
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
      <section className="px-6 py-12 text-center">
        <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight">
          Solutions to empower your energy and sustainability data journey
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700">
          Seamlessly bundle or choose à la carte from EnergyCAP’s array of energy and sustainability solutions.
          Whether you’re starting small or expanding big, we’ve got you covered.
          Empower your data-driven transformation, anywhere you are.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          {solutions.map((sol, index) => (
            <div
              key={index}
              className="bg-white w-full max-w-sm mx-auto border shadow-md p-6 text-left hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src={sol.icon} alt="logo" className="w-8 h-8" />
                  <h3 className="text-lg font-bold text-[#0f172a]">{sol.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{sol.description}</p>
                <div>
                  <h4 className="font-semibold text-[#0f172a] mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {sol.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={sol.link}
                className="text-[#6e8cd1] font-semibold mt-6 inline-block hover:underline"
              >
                Learn more
              </a>
            </div>

          ))}
        </div>

        <div className="mt-12 text-center max-w-4xl mx-auto text-[#0f172a]">
          <h4 className="font-bold  text-xl mb-3">Elevate your data quality through our managed services</h4>
          <p className='text-gray-700'>
            Our comprehensive <span className="font-semibold underline text-[#0f172a]">data capture and managed services</span> are here to seamlessly integrate your data
            into our platforms—accurately and on time. Leave the complexities to us, so you can concentrate on what
            truly counts: driving energy efficiency, reducing costs, and making impactful decisions.
          </p>
        </div>
      </section>

      {/* Testimoninal  section  */}
      <TestimoninalCarousel testimonials={testimonials} />

      {/* calculator  section  */}
      <CalculatorSection calculatorContent={calculatorContent} />

      {/* blog  section  */}
      <BlogSection tabs={tabs} blogs={blogs} blogContent={blogContent}/>
    </WebsiteLayout>
  )
}

export default HomePage



