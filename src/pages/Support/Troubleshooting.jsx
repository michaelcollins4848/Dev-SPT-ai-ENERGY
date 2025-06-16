import React from 'react'
import WebsiteLayout from '../../components/Layout'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Troubleshooting = () => {
    return (
        <WebsiteLayout>
            <div className="min-h-screen px-5 py-12 sm:px-10 lg:py-24 ">
                <div className="max-w-7xl mx-auto">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-extrabold text-[#0f172a]">
                            Contact For Troubleshooting
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Need help with your product or service? We're here to assist you.
                            Fill out the form and our team will get back to you shortly.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Column - Contact Form */}
                        <div className="flex-1">
                            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
                                <h2 className="text-2xl font-bold mb-6">Support Request Form</h2>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="fullName" className="block text-sm font-bold mb-2">
                                                Full Name*
                                            </label>
                                            <input
                                                id="fullName"
                                                type="text"
                                                required
                                                className="w-full border border-gray-300 px-3 py-2.5 rounded"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-bold mb-2">
                                                Email Address*
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                className="w-full border border-gray-300 px-3 py-2.5 rounded"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-bold mb-2">
                                                Contact Number
                                            </label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                className="w-full border border-gray-300 px-3 py-2.5 rounded"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-bold mb-2">
                                                Organization
                                            </label>
                                            <input
                                                id="company"
                                                type="text"
                                                className="w-full border border-gray-300 px-3 py-2.5 rounded"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="issueType" className="block text-sm font-bold mb-2">
                                            Issue Type*
                                        </label>
                                        <select
                                            id="issueType"
                                            required
                                            className="w-full border border-gray-300 px-3 py-2.5 rounded"
                                        >
                                            <option value="">Select an issue</option>
                                            <option value="login">Login/Access Issue</option>
                                            <option value="billing">Billing Concern</option>
                                            <option value="technical">Technical Problem</option>
                                            <option value="feature">Feature Request</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold mb-2">
                                            Message / Description*
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            required
                                            placeholder="Please describe your issue in detail..."
                                            className="w-full border border-gray-300 px-3 py-2.5 rounded"
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-3 rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300">
                                            Submit Request
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Right Column - Info + Map */}
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                            <div className="space-y-6 text-gray-700 text-sm">
                                {/* Office Address */}
                                <div>
                                    <h4 className="text-lg font-bold mb-2">Support Office</h4>
                                    <p>EnergyCAP, LLC</p>
                                    <p>360 Discovery Drive</p>
                                    <p>Boalsburg, PA 16827, USA</p>
                                    <p className="mt-2">
                                        <span className="font-semibold">Phone:</span> 877-327-3702
                                    </p>
                                    <p>
                                        <span className="font-semibold">Support Email:</span>{" "}
                                        <a href="mailto:support@energycap.com" className="text-blue-600 underline">
                                            support@energycap.com
                                        </a>
                                    </p>
                                </div>

                                {/* Social */}
                                <div>
                                    <h4 className="text-lg font-bold mb-2">Follow Us</h4>
                                    <div className="flex space-x-3">
                                        <a
                                            href="#"
                                            className="p-2 bg-[#0f172a] text-white rounded hover:bg-[#1e3a8a]"
                                            aria-label="Facebook"
                                        >
                                            <FaFacebookF />
                                        </a>
                                        <a
                                            href="#"
                                            className="p-2 bg-[#0f172a] text-white rounded hover:bg-[#1e3a8a]"
                                            aria-label="LinkedIn"
                                        >
                                            <FaLinkedinIn />
                                        </a>
                                    </div>
                                </div>

                                {/* Embedded Map */}
                                <div className="mt-6">
                                    <h4 className="text-lg font-bold mb-2">Find Us on the Map</h4>
                                    <div className="w-full h-60 rounded overflow-hidden border">
                                        <iframe
                                            title="Support Office Location"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.3276909731094!2d-117.4443929245751!3d33.90696482538787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb1a36bcb655f%3A0x12003b2fe5745293!2sStored%20Power%20Technology%20Inc.!5e0!3m2!1sen!2sin!4v1750081129308!5m2!1sen!2sin"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </WebsiteLayout>
    )
}

export default Troubleshooting