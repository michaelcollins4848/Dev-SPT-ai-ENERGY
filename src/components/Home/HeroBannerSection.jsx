import React, { useState } from 'react';
import heroImg from '../../assets/Images/img.png';
import { FaPlay } from 'react-icons/fa';

import img from '../../assets/Images/solution.webp'
import { useNavigate } from 'react-router-dom';
import {  VideoModal } from '../Modals/Modal';


const HeroBannerSection = ({ homepageContent }) => {
    const navigate = useNavigate()
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                videoUrl="https://www.youtube.com/embed/TLHL5sUxmM4?si=vU6JGdbNlbffIORb"
            />
            <section className="relative overflow-hidden bgbackgroundimg">
                <div className='max-w-7xl mx-auto sm:px-10 sm:py-30 px-5 py-24'>
                    {homepageContent.showtop &&
                        <div className=''>
                            <h6 className='text-sm font-[400] italic '> <span className='cursor-pointer' onClick={() => navigate('/')} >Home</span> / {homepageContent.navigation}</h6>
                            <img src={img} alt="" className='w-50 h-10 mt-5' />
                        </div>
                    }
                    <div className="mt-5 flex flex-col lg:flex-row items-center justify-between gap-10">
                        {/* Left Text Content */}
                        <div className="max-w-xl">
                            <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
                                {homepageContent.heading1}
                                <br />
                                {homepageContent.heading2}
                            </h1>
                            <p className="mt-6 lg:text-lg">
                                {homepageContent.subheding}
                            </p>

                            <div className="mt-8 flex flex-row sm:flex-row items-start sm:items-center gap-4">
                                <button className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300">
                                    {homepageContent.btn}
                                </button>
                                {homepageContent.showplay &&
                                    <button
                                        onClick={() => setModalOpen(true)}
                                        className="flex items-center gap-2 text-[#0f172a] hover:underline font-semibold">
                                        <FaPlay className="text-white bg-[#0f172a] rounded-full p-2 cursor-pointer w-9 h-9" />
                                        {homepageContent?.playbtn}
                                    </button>
                                }
                            </div>
                        </div>

                        {/* Right Image Content */}
                        <div className="relative w-full max-w-2xl">
                            <img
                                src={homepageContent.img}
                                alt="Energy Dashboard Preview"
                                className="w-full h-96 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroBannerSection;
