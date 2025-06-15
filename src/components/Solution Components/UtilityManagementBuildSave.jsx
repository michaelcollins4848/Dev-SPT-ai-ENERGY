import React from 'react';
import { FaPlay } from 'react-icons/fa';

import img from '../../assets/Images/icon16.webp'
import { useNavigate } from 'react-router-dom';


const UtilityManagementBuildSave = ({ BundleandsaveContent }) => {
    const navigate = useNavigate()
    return (
        <section className="relative overflow-visible border border-[#0f172a] bg-white shadow-gradient-custom">
            <div className='max-w-7xl mx-auto sm:px-20 sm:py-20 px-5 py-10'>
                <div className=''>
                    <h6 className='text-md font-[700] text-secondary'>EnergyCAP Premium Complete Package</h6>
                </div>
                <div className="mt-5 flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left Text Content */}
                    <div className="max-w-xl">
                        <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
                            {BundleandsaveContent.heading1}
                            <br />
                            {BundleandsaveContent.heading2}
                        </h1>
                        <p className="mt-6 lg:text-lg">
                            {BundleandsaveContent.subheding}
                        </p>

                        <div className="mt-8 flex flex-row sm:flex-row items-start sm:items-center gap-4">
                            <button className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300">
                                {BundleandsaveContent.btn}
                            </button>
                            {BundleandsaveContent.showplay &&
                                <button className="flex items-center gap-2 text-[#0f172a] hover:underline font-semibold">
                                    <FaPlay className="text-white bg-[#0f172a] rounded-full p-2 cursor-pointer w-9 h-9" />
                                    {homepageContent?.playbtn}
                                </button>
                            }
                        </div>
                    </div>

                    {/* Right Image Content */}
                    <div className="relative w-full max-w-2xl">
                        <img
                            src={BundleandsaveContent.img}
                            alt="Energy Dashboard Preview"
                            className="w-full h-96 object-contain"
                        />
                    </div>
                </div>
            </div>
            {/* Badge with Icon and Text */}
            <div className="absolute -top-25 left-1/2 transform -translate-x-1/2 z-20">
                <img
                    src={img}
                    alt="Bundle Icon"
                    className="w-54 h-54 object-contain"
                />
            </div>

        </section>
    );
};

export default UtilityManagementBuildSave;
