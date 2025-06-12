import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/Images/SPT_logo.png"
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

                <Header/>
            </div>


            {/* Main Content */}
            <main className="flex-1 mt-5 w-full overflow-x-hidden">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-[#0f172a] to-[#1a3546] text-white py-12 px-6 md:px-16">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <img className="w-30 h-15 font-extrabold tracking-wide " src={Logo} alt="SPT_logo" />

                        <div className="flex space-x-3 mb-6 text-[#7498ed] text-xl">
                            <FaFacebookSquare />
                            <FaLinkedin />
                            <FaYoutube />
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

                    <div className="text-sm space-y-3">
                        <h4 className="font-semibold">Who we serve</h4>
                        <p>Energy Managers</p>
                        <p>Sustainability Leaders</p>
                        <p>Finance Leaders</p>

                        <h4 className="mt-4 font-semibold">Industries</h4>
                        <p>Higher Education</p>
                        <p>Commercial Campuses</p>
                        <p>Government</p>
                        <p>K-12</p>
                        <p>Utility Vendors</p>
                        <p>Food & Beverage</p>
                        <p>Automotive</p>
                        <p>Retail</p>
                    </div>

                    <div className="text-sm space-y-3">
                        <h4 className="font-semibold">Solutions Overview</h4>
                        <p>Utility Management</p>
                        <p>SmartAnalytics</p>
                        <p>CarbonHub</p>
                        <p>Utility Company Platform</p>
                        <p>Bill CAPture</p>
                        <h4 className="mt-4 font-semibold">Success Stories</h4>
                    </div>

                    <div className="text-sm space-y-3">
                        <h4 className="font-semibold">Company</h4>
                        <p>Careers</p>
                        <p>Contact Sales</p>
                        <p>Pricing</p>
                        <p>Services</p>
                    </div>

                    <div className="text-sm space-y-3">
                        <h4 className="font-semibold">Resources</h4>
                        <p>eBooks</p>
                        <p>Blogs</p>
                        <p>Webinars</p>
                        <p>Press</p>
                        <p>Product features</p>
                        <p>Downloads</p>
                        <p>Sitemap</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default WebsiteLayout;