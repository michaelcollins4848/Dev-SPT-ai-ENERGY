import React from 'react';
import WebsiteLayout from '../../../components/Layout';
import emsIcon from '../../../assets/Images/ems.png';
import CalculatorSection from '../../../components/Home/CalculatorSection';

const features = [
  {
    title: 'Energy Demand Forecasting',
    description:
      'Predicts energy demand from hours to weeks in advance using advanced ML algorithms trained on real-time grid activity, consumption trends, and regional patterns. This allows utilities and large consumers to proactively plan load dispatch and procurement strategies.',
    icon: emsIcon,
  },
  {
    title: 'Policy and Regulation Tracking',
    description:
      'Monitors local, state, and federal energy policy changes, incentive programs, and emissions targets in real time to help stakeholders align strategies and investments with upcoming compliance or opportunity windows.',
    icon: emsIcon,
  },
  {
    title: 'Price Forecasting and Market Shifts',
    description:
      'Projects short- and medium-term price fluctuations based on variables such as fuel costs, weather events, and grid congestion. The model retrains regularly to adapt to macroeconomic and geopolitical shifts affecting the market.',
    icon: emsIcon,
  },
  {
    title: 'Sector-Specific Intelligence',
    description:
      'Provides customized analytics for key sectors—like EV infrastructure, manufacturing, and renewables—identifying unique consumption signals, investment opportunities, and market gaps based on recent historical and projected behavior.',
    icon: emsIcon,
  },
  {
    title: 'Interactive Data Visualizations',
    description:
      'Translates complex datasets into accessible charts and maps with filters for time, location, and energy source. Enables intuitive insight discovery and scenario testing without needing coding or data science expertise.',
    icon: emsIcon,
  },
  {
    title: 'Machine Learning-Driven Adaptability',
    description:
      'Learns from market anomalies, extreme events, and user feedback to fine-tune models and maintain accuracy over time—even as policies shift, demand patterns evolve, or new energy technologies emerge.',
    icon: emsIcon,
  },
];

const calculatorContent = {
  heading1: "Empower Your Strategy with Market Intelligence",
  btn: "Contact us today!",
};

const MarketIntelligenceFeatures = () => {
  return (
    <WebsiteLayout>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-5">
        <div className="text-center mb-6 mt-20">
          <h1 className="text-6xl sm:text-7xl font-bold mb-4">Market Intelligence Features</h1>
          <h2 className="text-2xl sm:text-3xl text-[#1e3a8a] mb-6">
            Predictive Insights for Smarter Energy Strategies
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto">
            Our Market Intelligence Platform equips you with the tools to stay ahead of change—whether it's demand surges, policy shifts, or price volatility. With weeks-ahead prediction capability and real-time responsiveness, you can lead with confidence in an increasingly dynamic energy market.
          </p>
        </div>
      </section>

      {/* Features Section */}
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

      {/* Call to Action */}
      <CalculatorSection calculatorContent={calculatorContent} />
    </WebsiteLayout>
  );
};

export default MarketIntelligenceFeatures;
