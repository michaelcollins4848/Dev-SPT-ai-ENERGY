import React from 'react';
import WebsiteLayout from '../../../components/Layout';
import emsIcon from '../../../assets/Images/ems.png';
import CalculatorSection
 from '../../../components/Home/CalculatorSection';
const features = [
  {
    title: 'Real-Time Optimization',
    description:
      'Our EMS continuously monitors energy usage, pricing signals, and environmental conditions to make instantaneous decisions that reduce costs and enhance energy efficiency. It ensures your energy sources—whether solar, grid, or battery—are always working in harmony for peak performance.',
    icon: emsIcon,
  },
  {
    title: 'Weather-Adaptive Control',
    description:
      'The system leverages real-time weather data to anticipate solar generation dips or spikes and proactively adjust operations. This ensures optimal battery charging/discharging and grid interaction, especially during extreme weather events.',
    icon: emsIcon,
  },
  {
    title: 'Dynamic Market Response',
    description:
      'By tracking time-of-use electricity rates and real-time pricing, the EMS shifts energy loads to off-peak periods or maximizes usage when renewables are most affordable. This directly leads to utility bill savings without user intervention.',
    icon: emsIcon,
  },
  {
    title: 'Automated Load Scheduling',
    description:
      'Intelligent load scheduling automates energy-intensive operations—like EV charging or HVAC pre-cooling—during periods of lowest cost or highest renewable availability, reducing grid stress and emissions.',
    icon: emsIcon,
  },
  {
    title: '24/7 Power Resilience',
    description:
      'The EMS prioritizes continuous power delivery to critical systems like hospitals or data centers. In the event of outages or instability, it intelligently reroutes power and activates backup systems seamlessly.',
    icon: emsIcon,
  },
  {
    title: 'Seamless Integration with Existing Infrastructure',
    description:
      'Our system is built to plug into your current setup—whether it’s a smart meter, solar array, or building management system—allowing rapid deployment without expensive retrofitting.',
    icon: emsIcon,
  },
];

const calculatorContent = {
  heading1: "Ready to unlock the full potential of your energy infrastructure?",
  btn: "Contact us today!",
};

const EMSFeatures = () => {
  return (
    <WebsiteLayout>
      {/*Header*/}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-5 bgbackgroundimg">
        <div className="text-center mb-6 mt-20">
          <h1 className="text-6xl sm:text-7xl font-bold mb-4">EMS Feature Overview</h1>
          <h2 className="text-2xl sm:text-3xl text-[#1e3a8a] mb-6">
            Intelligent Tools for Smarter Energy Decisions
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Discover how SPT's AI-powered Energy Management System delivers unmatched visibility, control, and efficiency for homes, commercial buildings, and grid operators alike. Every feature is built with purpose—to help you reduce costs, improve reliability, and decarbonize operations.
          </p>
        </div>
      </section>

      {/*Features*/}
      <div className="bg-[#001f3f] py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-center text-center"
            >
              <img src={feature.icon} alt={feature.title} className="h-20 w-20 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#0f172a]">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action*/}
      <CalculatorSection calculatorContent={calculatorContent} />
    </WebsiteLayout>
  );
};

export default EMSFeatures;
