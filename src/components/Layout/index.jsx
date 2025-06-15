import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { FaLinkedin, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6"; 
import { FaFacebookSquare } from "react-icons/fa";

import Logo from "../../assets/Images/SPT_logo.png";
import Ai from "../../assets/Images/ai-management.png";
import solution1 from "../../assets/Images/solution.webp"
import { useNavigate } from "react-router-dom";
import Header from "./Navbar";

const WebsiteLayout = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
    const [showSolutionsDropdown1, setShowSolutionsDropdown1] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10); // adjust as needed
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const navigate = useNavigate()

    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 left-0 w-full z-50">
                <div className="bg-[#0f172a] text-white text-sm py-2 text-right px-20 font-semibold cursor-pointer hover:underline hover:text-[#6e8cd1] transition duration-200">
                    Help Center
                </div>
                {/* Navbar */}

                <Header />
            </div>


            {/* Main Content */}
            <main className="flex-1 mt-5 w-full overflow-x-hidden">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-[#0f172a] to-[#1a3546] text-white py-12 px-6">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:px-10">
                    {/* Logo + Contact */}
                    <div className="col-span-1 md:col-span-1">
                        <img className="w-30 h-15 mb-4" src={Logo} alt="SPT_logo" />
                        <div className="flex space-x-3 mb-6 text-[#7498ed] text-xl">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare  /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                        </div>

                        <div className="text-sm space-y-4">
                            <div>
                                <h4 className="font-semibold">Address</h4>
                                <p>SPT AI Energy Lab / Stored Power Technology Inc.<br />2990 Myers St, Riverside, CA 92503</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Phone Number</h4>
                                <p>800-677-5014</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p>sales@sptus.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Who we serve */}
                    <div className="text-sm space-y-3">
                        <h4 className="font-semibold">Who we serve</h4>
                        <p className=" cursor-pointer hover:underline">Energy Managers</p>
                        <p className=" cursor-pointer hover:underline">Sustainability Leaders</p>
                        <p className=" cursor-pointer hover:underline">Finance Leaders</p>
                        <h4 className="mt-4 font-semibold">Industries</h4>
                        <p className=" cursor-pointer hover:underline">Higher Education</p>
                        <p className=" cursor-pointer hover:underline">Commercial Campuses</p>
                        <p className=" cursor-pointer hover:underline">Government</p>
                        <p className=" cursor-pointer hover:underline">K-12</p>
                        <p className=" cursor-pointer hover:underline">Utility Vendors</p>
                        <p className=" cursor-pointer hover:underline">Food & Beverage</p>
                        <p className=" cursor-pointer hover:underline">Automotive</p>
                        <p className=" cursor-pointer hover:underline">Retail</p>
                    </div>

                    {/* Solutions */}
                    <div className="text-sm space-y-3">
                        <h4 className="font-semibold">Solutions Overview</h4>
                        <p className=" cursor-pointer hover:underline">Utility Management</p>
                        <p className=" cursor-pointer hover:underline">SmartAnalytics</p>
                        <p className=" cursor-pointer hover:underline">CarbonHub</p>
                        <p className=" cursor-pointer hover:underline">Utility Company Platform</p>
                        <p className=" cursor-pointer hover:underline">Bill CAPture</p>
                        <h4 className="mt-4 font-semibold">Success Stories</h4>
                    </div>

                    {/* Company */}
                    <div className="text-sm space-y-3">
                        <h4 className="font-semibold">Company</h4>
                        <p className=" cursor-pointer hover:underline">Careers</p>
                        <p className=" cursor-pointer hover:underline">Contact Sales</p>
                        <p className=" cursor-pointer hover:underline">Pricing</p>
                        <p className=" cursor-pointer hover:underline">Services</p>
                    </div>

                    {/* Resources */}
                    <div className="text-sm space-y-3">
                        <h4 className="font-semibold">Resources</h4>
                        <p className=" cursor-pointer hover:underline">eBooks</p>
                        <p className=" cursor-pointer hover:underline">Blogs</p>
                        <p className=" cursor-pointer hover:underline">Webinars</p>
                        <p className=" cursor-pointer hover:underline">Press</p>
                        <p className=" cursor-pointer hover:underline">Product features</p>
                        <p className=" cursor-pointer hover:underline">Downloads</p>
                        <p className=" cursor-pointer hover:underline">Sitemap</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-500 mt-10 mb-6 mx-10" />

                {/* Bottom */}
                <div className="max-w-screen-xl mx-auto px-6 md:px-10 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300">
                    <p>&copy; 2025 SPT AI Energy Lab. All rights reserved.</p>
                    <div className="flex space-x-5">
                        <a href="#" className="hover:text-white cursor-pointer hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:text-white cursor-pointer hover:underline">Terms of Service</a>
                        <a href="#" className="hover:text-white cursor-pointer hover:underline">Sitemap</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default WebsiteLayout;