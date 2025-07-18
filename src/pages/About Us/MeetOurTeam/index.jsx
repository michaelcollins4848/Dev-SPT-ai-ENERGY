import React from 'react';
import WebsiteLayout from '../../../components/Layout';
import { useNavigate } from 'react-router-dom';
import drLiuPhoto from '../../../assets/Images/Alex-Liu.png'; 
import EmployeeCarousel from '../../../components/About Us Components/EmployeeCarousel';

const MeetTheTeam = () => {
  const navigate = useNavigate();

  return (
    <WebsiteLayout>
      <section className="bgbackgroundimg py-10 px-4 pt-40 text-center">
        <h1 className="text-5xl font-bold mb-4 text-[#0f172a]">Meet the SPT AI Lab</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Driving innovation in smart energy management with a multidisciplinary team of AI experts, engineers, and visionaries.
        </p>
      </section>

      <section className="px-6 py-20 flex flex-col md:flex-row items-center bg-white gap-10">
        {/* Text Content */}
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold text-[#1e3a8a] mb-4">Dr. Alex Liu</h2>
          <p className="text-lg text-gray-700">
            Dr. Alex Liu is the Director of the RMDS Lab, an advisor for the Harvard Data Science Review, an AI educator in the California Institute of Technology, and an editor for the Impactful Data Science book series published by Taylor & Francis. From 2013 to 2019, Alex was recognized as a thought leader in data science and served as a Distinguished Data Scientist at IBM, where he held the role of Chief Data Scientist for Analytics Services and led many innovative data & AI projects in the fields of banking, energy and supply chain. 
            Before joining IBM, Dr. Liu worked as Chief Data Scientist for several companies, including iSKY and 
            Retention Science. He also has an extensive academic background, teaching advanced quantitative 
            methods to PhD candidates at the University of Southern California and the University of California, 
            Irvine. During this time, he consulted for prominent organizations such as the United Nations and 
            Ingram Micro. 
            Dr. Liu holds an MS in Statistical Computing and a PhD in Quantitative Sociology from Stanford 
            University.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2.5">
          <img src={drLiuPhoto} alt="Dr. Alex Liu" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        </div>
      </section>

      <EmployeeCarousel />

      <section className="bg-[#001f3f] py-20 px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-7">Our Departments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">R&D Department</h3>
            <p className="text-gray-600 text-sm">AI Engineers / System Architects / Energy Modelers</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">Implementation</h3>
            <p className="text-gray-600 text-sm">Project Managers / Integration Engineers / Field Technicians</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">Business Development</h3>
            <p className="text-gray-600 text-sm">Advisors / Business Executives / Market Analysts</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-[#1e3a8a] mb-2">Product & Operations</h3>
            <p className="text-gray-600 text-sm">PMs / Designers / Data Analysts</p>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center text-white mb-5 pt-5">Interested in joining our team?</h3>
        <div className="text-center mt-1">
          <button
            onClick={() => navigate('/about-us/careers')}
            className="bg-white text-black text-lg px-8 py-4 rounded shadow hover:bg-[#1e293b]"
          >
            Join Us
          </button>
        </div>
      </section>
    </WebsiteLayout>
  );
};

export default MeetTheTeam;
