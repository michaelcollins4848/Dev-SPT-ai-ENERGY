import React from 'react';
import { FaPlay } from 'react-icons/fa';

import sptlogo from '../../assets/Images/spt_round_logo.png'
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";



const Offices = ({ BundleandsaveContent }) => {
    const navigate = useNavigate()
    return (
        <section className="sm:py-25 sm:px-15">
            <div className='relative overflow-visible border border-[#0f172a] bg-white shadow-gradient-custom'>
                <div className='max-w-7xl mx-auto sm:px-20 sm:py-25 px-5 py-20'>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12">
                        Offices
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
                        {/* Headquarters */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Headquarters</h3>
                            <p>SPT HQ</p>
                            <p>2990 Myers St</p>
                            <p>Riverside, CA 92503</p>
                            <p className="mt-2">
                                <span className="font-semibold">Phone:</span> 800-677-5014
                            </p>
                            <p>
                                <span className="font-semibold">Email:</span> sales@sptus.com
                            </p>
                        </div>

                        {/* AI Lab */}
                        <div>
                            <h3 className="text-xl font-semibold mb-3">AI Lab</h3>
                            <p>SPT AI Energy Lab</p>
                            <p>2990 Myers St</p>
                            <p>Riverside, CA 92503</p>
                            <p className="mt-2">
                                <span className="font-semibold">Phone:</span> 800-677-5014
                            </p>
                            <p>
                                <span className="font-semibold">Email:</span> sales@sptus.com
                            </p>
                        </div>

                        {/* Online */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Online</h3>
                            <p>Follow us:</p>
                            <div className="flex gap-3 mt-2">
                                <a
                                    href="#"
                                    className="p-2 bg-[#0f172a] text-white rounded"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 bg-[#0f172a] text-white rounded"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
                {/* Badge with Icon and Text */}
                <div className="absolute -top-25 left-1/2 transform -translate-x-1/2 z-20">
                    <img
                        src={sptlogo}
                        alt="Bundle Icon"
                        className="w-64 h-64 object-contain"
                    />
                </div>
            </div>

        </section>
    );
};

export default Offices;
