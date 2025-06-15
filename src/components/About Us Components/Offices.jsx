import React from 'react';
import { FaPlay } from 'react-icons/fa';

import img from '../../assets/Images/office.svg'
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
                        {/* Headquarters */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
                            <p>EnergyCAP, LLC</p>
                            <p>360 Discovery Drive</p>
                            <p>Boalsburg, PA 16827</p>
                            <p className="mt-2">
                                <span className="font-semibold">Phone:</span> 877.327.3702
                            </p>
                            <p>
                                <span className="font-semibold">Fax:</span> 719.623.0577
                            </p>
                        </div>

                        {/* Denver */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Denver, CO</h3>
                            <p>EnergyCAP, LLC</p>
                            <p>Suite 500</p>
                            <p>5445 DTC Parkway</p>
                            <p>Greenwood Village, CO 80111</p>
                        </div>

                        {/* Online */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Online</h3>
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

                        {/* Dublin */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Dublin, Ireland</h3>
                            <p>EnergyCAP Software International Limited</p>
                            <p>Unit F, The Digital Court, Rainsford Street,</p>
                            <p>Dublin 8, D08 R2YP, Ireland</p>
                            <p className="mt-2">Company number: 499770</p>
                            <p>VAT number: IE9793521K</p>
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
            </div>

        </section>
    );
};

export default Offices;
