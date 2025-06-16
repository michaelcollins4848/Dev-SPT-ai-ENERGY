import React from 'react'
import WebsiteLayout from '../../components/Layout'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const GeneralInquiry = () => {
    return (
        <WebsiteLayout>
            <div className="min-h-screen px-5 py-12 sm:px-10 sm:py-25 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            General Inquiry
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Have questions about our products or services? Reach out to our team and we'll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Left Column - Contact Form */}
                        <div className="flex-1 lg:max-w-2xl">
                            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                                <h2 className="text-2xl font-bold  mb-6">Send us a message</h2>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className='block text-sm font-bold mb-2'>First Name*</label>
                                            <input id="firstName" type="text" className='w-full border border-[#0f172a] px-3 py-2.5 rounded' />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className='block text-sm font-bold mb-2'>Last Name*</label>
                                            <input
                                                id="lastName"
                                                type="text"
                                                className='w-full border border-[#0f172a] px-3 py-2.5 rounded'
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className='block text-sm font-bold mb-2'>Email*</label>
                                            <input
                                                id="email"
                                                type="email"
                                                className='w-full border border-[#0f172a] px-3 py-2.5 rounded'
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className='block text-sm font-bold mb-2'>Phone number</label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                className='w-full border border-[#0f172a] px-3 py-2.5 rounded'
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className='block text-sm font-bold mb-2'>Company/Organization</label>
                                        <input
                                            id="company"
                                            type="text"
                                            className='w-full border border-[#0f172a] px-3 py-2.5 rounded'
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className='block text-sm font-bold mb-2'>Subject*</label>
                                        <select
                                            id="subject"
                                            className='w-full border border-[#0f172a] px-3 py-2.5 rounded'
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="product">Product Inquiry</option>
                                            <option value="support">Technical Support</option>
                                            <option value="partnership">Partnership Opportunities</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className='block text-sm font-bold mb-2'>Your Message*</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className='w-full border border-[#0f172a] px-3 py-2.5 rounded'
                                            required
                                        />
                                    </div>

                                    <div className="pt-2">

                                        <button className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-3 rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Right Column - Contact Information */}
                        <div className='flex-1 lg:max-w-md xl:max-w-lg'>
                            <h3 className="text-2xl font-semibold mb-6">Offices</h3>

                            <div className="space-y-8">
                                {/* Headquarters */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Headquarters</h3>
                                    <p className="text-gray-700">EnergyCAP, LLC</p>
                                    <p className="text-gray-700">360 Discovery Drive</p>
                                    <p className="text-gray-700">Boalsburg, PA 16827</p>
                                    <p className="mt-3 text-gray-700">
                                        <span className="font-semibold">Phone:</span> 877.327.3702
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Fax:</span> 719.623.0577
                                    </p>
                                </div>

                                {/* Denver */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Denver, CO</h3>
                                    <p className="text-gray-700">EnergyCAP, LLC</p>
                                    <p className="text-gray-700">Suite 500</p>
                                    <p className="text-gray-700">5445 DTC Parkway</p>
                                    <p className="text-gray-700">Greenwood Village, CO 80111</p>
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

                                {/* Dublin */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">Dublin, Ireland</h3>
                                    <p className="text-gray-700">EnergyCAP Software International Limited</p>
                                    <p className="text-gray-700">Unit F, The Digital Court, Rainsford Street,</p>
                                    <p className="text-gray-700">Dublin 8, D08 R2YP, Ireland</p>
                                    <p className="mt-3 text-gray-700">Company number: 499770</p>
                                    <p className="text-gray-700">VAT number: IE9793521K</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    )
}

export default GeneralInquiry