import React from 'react';
import { useNavigate } from 'react-router-dom';


const HeroSection = ({ aboutusContent }) => {
    const navigate = useNavigate()
    return (
        <section className="relative overflow-hidden bgbackgroundimg">
            <div className='max-w-7xl mx-auto sm:px-10 sm:py-30 px-5 py-24'>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left Text Content */}
                    <div className="max-w-xl">
                        <div className=''>
                            <h6 className='text-xl font-[700] mb-3'>Company</h6>
                        </div>
                        <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
                            {aboutusContent.heading1}
                            <br />
                            {aboutusContent.heading2}
                        </h1>
                        <p className="mt-6 lg:text-lg">
                            {aboutusContent.subheding}
                        </p>
                    </div>

                    {/* Right Image Content */}
                    <div className="relative w-full max-w-2xl">
                        <video
                            src={aboutusContent.video}
                            controls
                            className="w-full h-96 object-contain"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;
