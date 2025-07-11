import React from 'react';
import { useNavigate } from 'react-router-dom';
import stationHero from '../../../assets/Images/hydrogen_icon.png';
import dispatchIcon from '../../../assets/Images/dispatch_icon.png';
import refuelingIcon from '../../../assets/Images/refuel_icon.png';
import safetyIcon from '../../../assets/Images/safety_icon.png';
import schedulerIcon from '../../../assets/Images/scheduler_icon.png';
import WebsiteLayout from '../../../components/Layout';

const HydrogenStationOverview = () => {
  const navigate = useNavigate();

  return (
    <WebsiteLayout>
      <section>
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center bgbackgroundimg gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Hydrogen Refueling <br className="hidden sm:inline" /> Station Management
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1e3a8a] mb-6">
              Intelligent Fueling. Safer Roads.
            </h2>
            <p className="text-lg mb-6">
              Our Hydrogen Refueling Station Smart Management System ensures safe, efficient, and reliable operation of SPL hydrogen stations across the transportation sector. From energy dispatch and scheduling to real-time safety monitoring and automated refueling, this platform supports vehicles of all types—including buses, fleets, and consumer hydrogen cars.
            </p>
            <button
              onClick={() => navigate('/products/hydrogen/features')}
              className="bg-[#0f172a] text-white text-lg px-8 py-4 rounded shadow hover:bg-[#1e293b]"
            >
              Explore Features
            </button>
          </div>
          <div className="md:w-1/2">
            <img src={stationHero} alt="Hydrogen Station Preview" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="bg-gray-100 py-16 px-6 border-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Smart Control for Hydrogen Infrastructure
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto text-center">
            <div>
              <img src={dispatchIcon} alt="Energy Dispatch" className="h-20 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Energy Dispatch</h3>
              <p className="text-gray-600 text-sm">
                Optimize hydrogen flow and energy usage across your network in real time.
              </p>
            </div>
            <div>
              <img src={refuelingIcon} alt="Refueling Management" className="h-20 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Refueling Management</h3>
              <p className="text-gray-600 text-sm">
                Automate refueling schedules and processes for fleets, transit, and public vehicles.
              </p>
            </div>
            <div>
              <img src={safetyIcon} alt="Safety Monitoring" className="h-20 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">Safety Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Monitor pressure, leaks, and compliance in real time with AI-driven alerts.
              </p>
            </div>
            <div>
              <img src={schedulerIcon} alt="AI Scheduler" className="h-20 mx-auto mb-4" />
              <h3 className="font-semibold text-xl mb-2">AI Scheduler</h3>
              <p className="text-gray-600 text-sm">
                Automate delivery, refueling times, and maintenance windows to minimize downtime.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-16 px-6">
          <h3 className="text-2xl font-bold mb-4">Power the future of hydrogen mobility with SPT.</h3>
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

export default HydrogenStationOverview;