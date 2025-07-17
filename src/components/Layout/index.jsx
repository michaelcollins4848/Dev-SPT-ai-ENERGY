import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { FaLinkedin, FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6"; 
import { FaFacebookSquare } from "react-icons/fa";

import Logo from "../../assets/Images/spt_white_logo.png";
import Ai from "../../assets/Images/ai-management.png";
import solution1 from "../../assets/Images/solution.webp"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
                <Link to="/contact-us-and-support/contact-support">
                    <div className="bg-[#0f172a] text-white text-sm py-2 text-right px-20 font-semibold cursor-pointer hover:underline hover:text-[#6e8cd1] transition duration-200">
                        Help Center
                    </div>
                </Link>
                {/* Navbar */}

                <Header />
            </div>


            {/* Main Content */}
            <main className="flex-1 mt-5 w-full overflow-x-hidden">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-[#4e7ba5] to-[#4e7ba5] text-white py-12 px-6">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:px-10">
                    {/* Logo + Contact */}
                    <div className="col-span-1 md:col-span-1">
                        <img className="w-45 h-15 mb-4" src={Logo} alt="spt_white_logo" />
                        <div className="flex space-x-3 mb-6 text-[#ffffff] text-xl">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookSquare  /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                        </div>

                        <div className="text-sm space-y-4">
                            <div>
                                <h4 className="font-semibold">Address</h4>
                                <p>SPT Energy AI Lab <br />2990 Myers St, Riverside, CA 92503</p>
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
                        <h4 className="font-semibold text-lg">Who we serve</h4>
                        <p className=" cursor-pointer hover:underline">Energy Managers</p>
                        <p className=" cursor-pointer hover:underline">Finance Managers</p>
                        <p className=" cursor-pointer hover:underline">Community Leaders</p>
                    </div>
                    <div className="text-sm space-y-3">
                        <h4 className="font-semibold text-lg">Industries</h4>
                        <p className=" cursor-pointer hover:underline">Education</p>
                        <p className=" cursor-pointer hover:underline">Government</p>
                        <p className=" cursor-pointer hover:underline">Food and Beverage</p>
                        <p className=" cursor-pointer hover:underline">Real Estate</p>
                        <p className=" cursor-pointer hover:underline">Automotive</p>
                        <p className=" cursor-pointer hover:underline">Utility</p>
                    </div>

                    {/* Solutions */}
                    <div className="text-sm flex flex-col space-y-3">
                        <h4 className="font-semibold text-lg">Solutions</h4>
                        <p className=" cursor-pointer hover:underline">Prediction Engine</p>
                        <Link to="/product-and-solutions/energy-management-system" className=" cursor-pointer hover:underline">
                            <p>EMS Energy Management System</p>
                        </Link>
                        <Link to="/product-and-solutions/market-intelligence" className=" cursor-pointer hover:underline">
                            <p>Smart Analytics</p>
                        </Link>
                        <p className=" cursor-pointer hover:underline">Carbon Intelligence Hub</p>
                        <Link to="/product-and-solutions/hydrogen-management-system">
                            <p className=" cursor-pointer hover:underline">Hydrogen Station Management System</p>
                        </Link>
                        <p className=" cursor-pointer hover:underline">ESG Reporting Helper</p>
                        <p className=" cursor-pointer hover:underline">Bill Analyics</p>
                    </div>

                    {/* Company */}
                    <div className="text-sm space-y-3">
                        <h4 className="font-semibold text-lg">Company</h4>
                        <p className=" cursor-pointer hover:underline">Careers</p>
                        <p className=" cursor-pointer hover:underline">Contact Sales</p>
                        <p className=" cursor-pointer hover:underline">Pricing</p>
                    </div>

                    {/* Resources */}
                    <div className="text-sm space-y-3">
                        <h4 className="font-semibold text-lg">Resources</h4>
                        <p className=" cursor-pointer hover:underline">eBooks and Reports</p>
                        <p className=" cursor-pointer hover:underline">Blogs</p>
                        <p className=" cursor-pointer hover:underline">Recorded Events</p>
                        <p className=" cursor-pointer hover:underline">Press</p>
                        <p className=" cursor-pointer hover:underline">Product Handbooks</p>
                        <p className=" cursor-pointer hover:underline">Downloads</p>
                        <p className=" cursor-pointer hover:underline">Sitemap</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-500 mt-10 mb-6 mx-10" />

                {/* Bottom */}
                <div className="max-w-screen-xl mx-auto px-6 md:px-10 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-white">
                    <p>&copy; 2025 SPT Energy AI Lab. All rights reserved.</p>
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