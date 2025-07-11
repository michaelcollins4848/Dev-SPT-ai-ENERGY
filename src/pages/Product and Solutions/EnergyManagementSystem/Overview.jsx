import React from 'react';
import { useNavigate } from 'react-router-dom';
import emsHero from '../../../assets/Images/ems.png';
import decisionIcon from '../../../assets/Images/decision_icon.png';
import weatherIcon from '../../../assets/Images/weather_icon.png';
import priceIcon from '../../../assets/Images/price_icon.png';
import adaptabilityIcon from '../../../assets/Images/adaptability_icon.png';
import WebsiteLayout from '../../../components/Layout';

const EMSOverview = () => {
  const navigate = useNavigate();

  return (
    <WebsiteLayout>
        <section>
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10 bgbackgroundimg">
            <div className="md:w-1/2">
            <h1 className="text-5xl sm:text-5xl font-bold leading-tight mb-6">
                AI Energy <br className="hidden sm:inline" /> Management System
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1e3a8a] mb-6">
                Smarter Decisions. Cleaner Energy.
            </h2>
            <p className="text-lg mb-6">
                SPT’s Smart Energy Management System (EMS) is the intelligent core of your energy setup. It adapts in real time to changing conditions—like weather, time of day, and market prices—maximizing efficiency and savings without sacrificing performance.
            </p>
            <button
                onClick={() => navigate('/products/ems/features')}
                className="bg-[#0f172a] text-white text-xl px-8 py-4 rounded shadow hover:bg-[#1e293b]"
            >
                Explore Features
            </button>
            </div>
            <div className="md:w-1/2">
            <img src={emsHero} alt="EMS Preview" className="w-full h-auto rounded-lg shadow-md" />
            </div>
        </div>

        {/* Value Proposition Section */}
        <div className="bg-gray-100 py-16 px-6 border-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Real-Time Intelligence for Modern Energy
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto text-center">
            <div>
                <img src={weatherIcon} alt="Weather Responsive" className="h-20 mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Weather-Aware</h3>
                <p className="text-gray-600 text-sm">
                Adjusts energy usage based on live weather patterns to optimize solar and battery operations.
                </p>
            </div>
            <div>
                <img src={priceIcon} alt="Market-Aware" className="h-23 mx-auto mb-1" />
                <h3 className="font-semibold text-xl mb-2">Price-Responsive</h3>
                <p className="text-gray-600 text-sm">
                Analyzes real-time utility prices and adjusts consumption to take advantage of the lowest rates.
                </p>
            </div>
            <div>
                <img src={decisionIcon} alt="Smart Decisions" className="h-20 mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Autonomous Decisions</h3>
                <p className="text-gray-600 text-sm">
                Makes intelligent energy routing decisions on your behalf, reducing manual control and energy waste.
                </p>
            </div>
            <div>
                <img src={adaptabilityIcon} alt="Adaptive System" className="h-20 mx-auto mb-4" />
                <h3 className="font-semibold text-xl mb-2">Self-Adaptive</h3>
                <p className="text-gray-600 text-sm">
                Learns from your usage patterns and adapts as your environment or energy goals change.
                </p>
            </div>
            </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-16 px-6">
            <h3 className="text-2xl font-bold mb-4">See how SPT EMS can transform your energy management.</h3>
            <button
            onClick={() => navigate('/contact')}
            className="bg-[#0f172a] text-white px-8 py-3 rounded shadow hover:bg-[#1e293b]"
            >
            Get a Free Consultation
            </button>
        </div>
        </section>
    </WebsiteLayout>
  );
};

export default EMSOverview;