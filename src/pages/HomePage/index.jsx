import React, { useEffect, useState } from 'react'
import WebsiteLayout from '../../components/Layout'
import Slider from "react-slick";

import heroImg from '../../assets/Images/img.png'
import blog1 from '../../assets/Images/blog1.png'
import platfrom1 from '../../assets/Images/platform1.webp'
import platfrom2 from '../../assets/Images/platform2.webp'
import platfrom3 from '../../assets/Images/platform3.webp'


import { FaRegLightbulb, FaFileInvoiceDollar, FaPiggyBank } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { MdElectricMeter } from "react-icons/md";
import { IoIosCalculator } from "react-icons/io";
import HeroBannerSection from '../../components/Home/HeroBannerSection';
import CompaniesSlider from '../../components/Home/CompaniesSlider';
import CalculatorSection from '../../components/Home/calculatorSection';

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

const settings = {
  centerMode: true,
  centerPadding: '10%', // Adjust this based on design
  slidesToShow: 1,
  arrows: false,
  dots: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '0px',
        slidesToShow: 1,
      },
    },
  ],
};

const tabData = [
  {
    index: 0,
    title: "Energy Managers",
    content: `From a high-level portfolio overview to detailed data analysis, operate from one single source of truth with accurate and reliable data. EnergyCAP removes data complexity and helps you create, validate, and visualize the energy program you need now.`,
    link: "Explore our energy management solution",
    image: platfrom1,
  },
  {
    index: 1,
    title: "Sustainability Leaders",
    content: `You need access to your organization’s energy and commodity information for accurate sustainability reporting. Imagine a world where your consumption data automatically converts into greenhouse gas emissions and provides a holistic view of sustainability performance across your organization. With EnergyCAP, you can achieve your sustainability goals faster and focus your time on projects that matter.`,
    link: "Explore our sustainability solution",
    image: platfrom2,
  },
  {
    index: 2,
    title: "Finance Leaders",
    content: `Energy and utility bill accounting is complex. Finance teams need a tool to simplify the capture of data, automatically identify billing anomalies, and streamline approval and auditing processes. With EnergyCAP, you gain a partner that enhances your already-predictable system.`,
    link: "Explore our energy accounting solution",
    image: platfrom3,
  },
];


const homepageContent = {
  heading1: "SPT AI Energy Lab:",
  heading2: "Revolutionizing Energy Management with Intelligent AI",
  subheding: "Experience unparalleled efficiency, savings, and reliability for your home, business, or power plant.",
  img: heroImg,
  btn: "Get a Free Consultation",
  showplay: true,
  showtop: false,
};

const calculatorContent = {
  heading1: "Easily manage your finite resources with",
  heading2: "EnergyCAP",
  btn: "Contact Sales",
};

const showtop = true


const HomePage = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(1);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress >= 100) {
        setProgress(0);
        setActiveIndex((prevIndex) => (prevIndex + 1) % tabs.length);
      } else {
        setProgress((prev) => prev + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress, tabs.length]);




  return (
    <WebsiteLayout>
      {/* hero banner section */}
      <HeroBannerSection homepageContent={homepageContent} />


      {/* maximize efficiency section  */}
      <section className="font-arimo py-16">
        <div className="text-center px-4 md:px-0">
          <h2 className="text-xl md:text-4xl font-bold mb-12 leading-tight">
            Maximize efficiency, unlock savings, <br />
            and accelerate decarbonization with <br />
            EnergyCAP.
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
      <CompaniesSlider showtop={showtop} />

      {/* <Single platform /> */}
      <section className="px-6 py-16">
        <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
          A single platform for the entire team
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-center">
          Our energy and sustainability software brings cross-functional teams together, in a single platform, to drive cost-effective and responsible utilization of finite resources.
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
      <div className="py-12 px-4 max-w-7xl mx-auto">
        <Slider {...settings}>
          {testimonials?.map((item, index) => (
            <div key={index} className="px-4">
              <div className="md:h-90 shadow-gradient-custom flex flex-col md:flex-row items-center gap-8 bg-white border border-[#0f172a] p-6 shadow-lg">
                {/* Avatar + Play Button */}
                <div className="relative shrink-0 sm:w-sm flex items-center justify-center">
                  <div className={`w-50 h-50 rounded-full overflow-hidden relative ${item.bgColor}`}>
                    <img
                      src={item.videoThumbnail}
                      alt="avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                    <button className="absolute inset-0 flex items-center justify-center text-white bg-[#0f172a]/80 rounded-full">
                      <FaPlay size={24} />
                    </button>
                  </div>
                </div>

                {/* Quote and Info */}
                <div className="text-center md:text-left flex-1">
                  {item.companyLogo && (
                    <img
                      src={item.companyLogo}
                      alt="company logo"
                      className="h-6 mb-2 mx-auto md:mx-0"
                    />
                  )}
                  <p className="text-xl md:text-3xl font-medium mb-4 leading-tight">
                    “{item.quote}”
                  </p>
                  <p className="text-slate-700 font-semibold">
                    {item.name}
                    {item.title && (
                      <span className="font-normal"> // {item.title}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* calculator  section  */}
      <CalculatorSection calculatorContent={calculatorContent}/>

      {/* blog  section  */}
      <section className="bg-gradient-to-br from-[#0f172a] to-[#1a3546] px-6 py-12 text-white">
        <div className='h-70'>
          <h2 className="text-white border-2 px-4 py-2 inline-block border-white text-lg font-bold mb-8">
            Resources & Insights
          </h2>
          <h3 className="md:text-4xl text-2xl font-extrabold leading-tight max-w-3xl cursor-pointer hover:text-[#6e8cd1] transition duration-300 ">
            {tabs[activeIndex].title}
          </h3>
          <p className="font-semibold mt-8 hover:underline cursor-pointer hover:text-[#6e8cd1] transition duration-300">Learn More</p>

        </div>

        {/* Tab Selectors */}
        <div className="mt-10 flex gap-8 text-sm font-semibold">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`cursor-pointer transition-all relative pt-4 border-t-[2px] md:text-lg text-md ${activeIndex === index ? "text-white border-white" : "text-gray-500 border-gray-500"
                }`}
              onClick={() => {
                setActiveIndex(index);
                setProgress(0);
              }}
            >
              {tab.label}
              {activeIndex === index && (
                <div className="absolute left-0 -top-0.5 h-[3px] bg-[#6e8cd1] transition-all duration-300 ease-linear" style={{ width: `${progress}%` }}></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 flex gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="border border-white bg-transparent flex flex-col justify-between cursor-pointer ">
              <div>
                <img
                  src={blog.img}
                  alt="thumbnail"
                  className="w-full h-32 object-contain  bg-white p-2"
                />
                <div className='group hover:bg-[#0f172a] transition-all p-8'>
                  <p className="text-white text-md italic mb-2 group-hover:text-gray-300">Blogs</p>
                  <h4 className="text-white font-bold md:text-2xl text-xl leading-snug mb-25 group-hover:text-gray-300 group-hover:underline underline-offset-2 transition duration-300">I{blog.title}</h4>
                  <p className="font-semibold text-[#3686fd] group-hover:text-gray-300 transition duration-300 underline underline-offset-2 cursor-pointer">
                    Read more
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="bg-transparent cursor-pointer text-white font-bold rounded border border-white px-4 py-2 text-sm hover:bg-white hover:text-[#0f172a] hover:underline">
            See All Resources
          </button>
        </div>
      </section>
    </WebsiteLayout>
  )
}

export default HomePage



