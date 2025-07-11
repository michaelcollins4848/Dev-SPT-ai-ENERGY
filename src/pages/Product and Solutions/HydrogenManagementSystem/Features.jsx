import React from 'react';
import WebsiteLayout from '../../../components/Layout';
import emsIcon from '../../../assets/Images/ems.png';
import CalculatorSection from '../../../components/Home/CalculatorSection';

const features = [
  {
    title: 'Energy Dispatch Optimization',
    description:
      'Our system dynamically allocates energy resources across the hydrogen station, ensuring fuel is produced and delivered efficiently. It intelligently balances on-site storage, power availability, and station demand in real-time.',
    icon: emsIcon,
  },
  {
    title: 'Smart Refueling Management',
    description:
      'Manages and schedules refueling for multiple vehicle types—buses, trucks, cars—ensuring low wait times and balanced hydrogen flow. AI coordination enables demand prediction and smooth queue handling even during peak usage.',
    icon: emsIcon,
  },
  {
    title: 'Safety Monitoring & Alerts',
    description:
      'Constantly tracks critical parameters like pressure, temperature, and hydrogen leaks. The system automatically alerts operators of anomalies and can trigger safety shutdowns to prevent accidents.',
    icon: emsIcon,
  },
  {
    title: 'AI-Powered Scheduling Engine',
    description:
      'An advanced AI engine predicts vehicle arrival times and energy usage trends, scheduling hydrogen production and dispatch to align with peak refueling windows and minimize downtime.',
    icon: emsIcon,
  },
  {
    title: 'Fleet Integration Capabilities',
    description:
      'Integrates with municipal or commercial fleet systems to plan hydrogen usage across large operations. Enables centralized control and reporting for multi-vehicle operations from a single dashboard.',
    icon: emsIcon,
  },
  {
    title: 'Remote Monitoring & Control',
    description:
      'Operators can monitor station status and control key systems from anywhere using a secure web portal. Provides real-time diagnostics, performance stats, and remote override for safety and efficiency.',
    icon: emsIcon,
  },
];

const calculatorContent = {
  heading1: 'Looking to upgrade your hydrogen infrastructure?',
  btn: 'Contact us today!',
};

const HydrogenFeatures = () => {
  return (
    <WebsiteLayout>
      {/*Header*/}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-5">
        <div className="text-center mb-6 mt-20">
          <h1 className="text-6xl sm:text-7xl font-bold mb-4">Hydrogen Station Features</h1>
          <h2 className="text-2xl sm:text-3xl text-[#1e3a8a] mb-6">
            AI-Driven Control for Safer, Smarter Hydrogen Fueling
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            SPT’s Hydrogen Refueling Station Management System delivers seamless energy coordination, safety monitoring, and intelligent scheduling for modern hydrogen fueling hubs. It’s designed to meet the evolving needs of fleet operators and public refueling infrastructure.
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

      {/* Call to action */}
      <CalculatorSection calculatorContent={calculatorContent} />
    </WebsiteLayout>
  );
};

export default HydrogenFeatures;
