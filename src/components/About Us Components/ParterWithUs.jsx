import React from 'react';
import { FaPlay } from 'react-icons/fa';

import img from '../../assets/Images/icon16.webp'
import { useNavigate, Link } from 'react-router-dom';


const PartnerWithUsSection = ({ PartnerSectionContent }) => {
    const navigate = useNavigate()
    return (
        <section className="relative overflow-hidden bg-[#001f3f]">
            <div className="max-w-7xl mx-auto sm:px-15 sm:py-20 px-5 py-10 mt-5 flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Left Text Content */}
                <div className="max-w-xl">
                    <h1 className="text-2xl sm:text-4xl text-white font-bold leading-tight">
                        {PartnerSectionContent.heading1}
                        <br />
                        {PartnerSectionContent.heading2}
                    </h1>
                    <p className="mt-6 lg:text-lg text-white mb-5">
                        {PartnerSectionContent.subheding}
                    </p>
                    <Link
                        to="/contact-us-and-support/general-inquiry"
                        className="text-white underline cursor-pointer text-md font-bold hover:text-[#6e8cd1]"
                        >
                        {PartnerSectionContent.link}
                    </Link>

                </div>

                {/* Right Image Content */}
                <div className="relative w-full max-w-2xl">
                    <img
                        src={PartnerSectionContent.img}
                        alt="Energy Dashboard Preview"
                        className="w-full h-96 object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default PartnerWithUsSection;
