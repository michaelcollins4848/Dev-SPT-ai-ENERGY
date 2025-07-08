import React from 'react'
import WebsiteLayout from '../../components/Layout'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const ContactSales = () => {
    return (
        <WebsiteLayout>
            <div className="min-h-screen px-5 py-12 sm:px-10 sm:py-20 lg:py-24">
                <div className="max-w-7xl mx-auto">

                    {/* Left Column - Form */}
                    <div className="">
                        <h2 className="text-3xl font-bold mb-4">Contact Sales</h2>
                        <p className="text-sm text-gray-700 mb-8 max-w-xl">
                            EnergyCAP is the only energy & sustainability ERP that empowers energy, sustainability, and finance teams with full control and understanding of energy data points to manage consumption, reduce their carbon footprint, and drive savings.
                        </p>
                        <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
                            <form className="bg-white p-6 sm:p-8 md:p-10 border shadow-md rounded-lg space-y-6 flex-1 lg:max-w-2xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className='block text-sm font-bold mb-2'>First Name*</label>
                                        <input id="firstName" type="text" className='w-full border border-[#0f172a] px-3 py-2.5 rounded' />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className='block text-sm font-bold mb-2'>Last Name*</label>
                                        <input id="lastName" type="text" className='w-full border border-[#0f172a] px-3 py-2.5 rounded' />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className='block text-sm font-bold mb-2'>Company Name*</label>
                                        <input id="company" type="text" className='w-full border border-[#0f172a] px-3 py-2.5 rounded' />
                                    </div>
                                    <div>
                                        <label htmlFor="jobTitle" className='block text-sm font-bold mb-2'>Job title*</label>
                                        <input id="jobTitle" type="text" className='w-full border border-[#0f172a] px-3 py-2.5 rounded' />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className='block text-sm font-bold mb-2'>Email*</label>
                                        <input id="email" type="email" className='w-full border border-[#0f172a] px-3 py-2.5 rounded' />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className='block text-sm font-bold mb-2'>Phone number*</label>
                                        <input id="phone" type="tel" className='w-full border border-[#0f172a] px-3 py-2.5 rounded' />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="location" className='block text-sm font-bold mb-2'>Where is your company's headquarters located?*</label>
                                    <input id="location" type="text" className='w-full border border-[#0f172a] px-3 py-2.5 rounded' />
                                </div>
                                <div>
                                    <label htmlFor="help" className='block text-sm font-bold mb-2'>How can we help?*</label>
                                    <textarea
                                        id="help"
                                        placeholder="How can we help? (Optional: Let us know what you'd like to discuss)"
                                        rows={4}
                                        className='w-full border border-[#0f172a] px-3 py-2.5 rounded'
                                    />
                                </div>

                                <div>
                                    <label htmlFor="learnAbout" className='block text-sm font-bold mb-2'>How did you learn about us?*</label>
                                    <input id="learnAbout" type="text" className='w-full border border-[#0f172a] px-3 py-2.5 rounded' />
                                </div>
                                <div className='pt-2'>
                                    <button className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-3 rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300">
                                        Contact Sales
                                    </button>
                                </div>
                            </form>
                            <div className='flex-1 lg:max-w-md xl:max-w-lg'>
                                <h3 className="text-2xl font-semibold mb-6">Offices</h3>

                                <div className="space-y-8">
                                    {/* Headquarters */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Headquarters</h3>
                                        <p className="text-gray-700">SPT AI Energy Lab / Stored Power Technology Inc.</p>
                                        <p className="text-gray-700">2990 Myers St</p>
                                        <p className="text-gray-700">Riverside, CA 92503</p>
                                        <p className="mt-3 text-gray-700">
                                            <span className="font-semibold">Phone:</span> 800-677-5014
                                        </p>
                                        <p className="mt-3 text-gray-700">
                                            <span className="font-semibold">Email:</span> sales@sptus.com
                                        </p>
                                    </div>



                                    {/* Online */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-3">Online</h3>
                                        <p className="text-gray-700">Follow us:</p>
                                        <div className="flex gap-3 mt-3">
                                            <a
                                                href="#"
                                                className="p-2.5 bg-[#0f172a] text-white rounded hover:bg-[#1e3a8a] transition"
                                                aria-label="Facebook"
                                            >
                                                <FaFacebookF />
                                            </a>
                                            <a
                                                href="#"
                                                className="p-2.5 bg-[#0f172a] text-white rounded hover:bg-[#1e3a8a] transition"
                                                aria-label="LinkedIn"
                                            >
                                                <FaLinkedinIn />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </WebsiteLayout >
    )
}

export default ContactSales