import React from 'react';
import { useNavigate } from 'react-router-dom';
import marketHero from '../../../assets/Images/market_icon.png';
import demandIcon from '../../../assets/Images/demand_icon.png';
import policyIcon from '../../../assets/Images/policy_icon.png';
import insightsIcon from '../../../assets/Images/insight_icon.png';
import visualizeIcon from '../../../assets/Images/visualize_icon.png';
import WebsiteLayout from '../../../components/Layout';

const MarketIntelOverview = () => {
  const navigate = useNavigate();

  return (
    <WebsiteLayout>
      <section>
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10 bgbackgroundimg">
          <div className="md:w-1/2">
            <h1 className="text-5xl sm:text-5xl font-bold leading-tight mb-6">
              Market <br className="hidden sm:inline" /> Intelligence System
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1e3a8a] mb-6">
              See What’s Next in Energy Markets.
            </h2>
            <p className="text-lg mb-6">
              Our Market Intelligence System offers a powerful suite of predictive analytics and visualization tools designed to help you stay ahead of policy shifts, market dynamics, and energy demand fluctuations. Empower your planning and investment with real-time insights.
            </p>
            <button
              onClick={() => navigate('/products/market-intel/features')}
              className="bg-[#0f172a] text-white text-xl px-8 py-4 rounded shadow hover:bg-[#1e293b]"
            >
              Explore Features
            </button>
          </div>
          <div className="md:w-1/2">
            <img src={marketHero} alt="Market Intel Preview" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="bg-gray-100 py-16 px-6 border-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Intelligence You Can Act On
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto text-center">
            <div>
              <img src={demandIcon} alt="Demand Forecasting" className="h-24 mx-auto mb-0" />
              <h3 className="font-semibold text-xl mb-2">Energy Demand Forecasting</h3>
              <p className="text-gray-600 text-sm">
                Anticipate peak usage and generation trends with high-accuracy demand predictions.
              </p>
            </div>
            <div>
              <img src={policyIcon} alt="Policy Trends" className="h-20 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Policy Trend Analysis</h3>
              <p className="text-gray-600 text-sm">
                Track and interpret evolving energy policies and regulations across regions.
              </p>
            </div>
            <div>
              <img src={insightsIcon} alt="Market Insights" className="h-20 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Market Insights</h3>
              <p className="text-gray-600 text-sm">
                Leverage price forecasting and market behavior analytics to optimize operations.
              </p>
            </div>
            <div>
              <img src={visualizeIcon} alt="Visualization Tools" className="h-20 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Visualization Tools</h3>
              <p className="text-gray-600 text-sm">
                Interactive dashboards turn complex datasets into clear, actionable insights.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-16 px-6">
          <h3 className="text-2xl font-bold mb-4">Turn data into your competitive edge.</h3>
          <button
            onClick={() => navigate('/contact')}
            className="bg-[#0f172a] text-white px-8 py-3 rounded shadow hover:bg-[#1e293b]"
          >
            Get a Free Demo
          </button>
        </div>
      </section>
    </WebsiteLayout>
  );
};

export default MarketIntelOverview;
