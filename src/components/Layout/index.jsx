import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import Logo from "../../assets/Images/SPT_logo.png"
import solution1 from "../../assets/Images/solution.webp"
import { useNavigate } from "react-router-dom";

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
                

                <header className={`relative transition-all duration-100 ${isScrolled ? 'bg-white shadow-2xl border-b border-[0f172a]' : 'bg-transparent'}`}>
                    <div className="max-w-screen-xl mx-auto flex justify-between items-center py-1 px-4 md:px-8">
                        {/* Logo */}
                        <img className="w-30 h-15 font-extrabold tracking-wide" src={Logo} alt="SPT_logo" />

                        {/* Mobile Menu Toggle */}
                        <button
                            data-menu-toggle
                            className="md:hidden text-2xl text-[#122a36]"
                            onClick={toggleMobileMenu}
                        >
                            &#9776;
                        </button>

                        {/* Desktop Nav Items */}
                        <nav className="hidden md:flex space-x-8 font-bold text-sm">
                            {/* Home */}
                            <div
                                className={`pb-1 cursor-pointer transition duration-200 ${location.pathname === '/' ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                                onClick={() => navigate('/')}
                            >
                                Home
                            </div>

                            {/* Solutions */}
                            <div className="">
                                <div
                                    className={`pb-1 cursor-pointer transition duration-200 ${location.pathname.includes('/solution') ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                                    onClick={() => setShowSolutionsDropdown(!showSolutionsDropdown)}
                                >
                                    Solutions
                                </div>
                                {showSolutionsDropdown && (
                                    <div
                                        onMouseEnter={() => setShowSolutionsDropdown(true)}
                                        onMouseLeave={() => setShowSolutionsDropdown(false)}
                                        className="absolute top-full left-2 right-2 shadow-xl bg-white grid grid-cols-4 gap-4 border border-[#0f172a] z-50"
                                    >
                                        {/** Card 1 */}
                                        <div className="border-r px-4 py-6 flex flex-col justify-between" onClick={() => navigate('/solution/utility-mangement')}>
                                            <img src={solution1} alt="Utility" className="mb-2 w-40 h-10" />
                                            <p className="font-[400] text-sm mb-2 text-gray-700">Best-in-class portfolio-level energy and utility bill data management and reporting.</p>
                                            <div className="flex flex-col gap-2 mt-5">
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/overview');
                                                    }}
                                                >
                                                    Overview
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/features');
                                                    }}
                                                >
                                                    Features
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/bill-capture');
                                                    }}
                                                >
                                                    Bill CAPture Services
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/pricing');
                                                    }}
                                                >
                                                    Pricing
                                                </div>
                                            </div>
                                        </div>
                                        {/** Card 2 */}
                                        <div className="border-r px-4 py-6 flex flex-col justify-between" onClick={() => navigate('/solution/utility-mangement')}>
                                            <img src={solution1} alt="Utility" className="mb-2 w-40 h-10" />
                                            <p className="font-[400] text-sm mb-2 text-gray-700">Best-in-class portfolio-level energy and utility bill data management and reporting.</p>
                                            <div className="flex flex-col gap-2 mt-5">
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/overview');
                                                    }}
                                                >
                                                    Overview
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/features');
                                                    }}
                                                >
                                                    Features
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/bill-capture');
                                                    }}
                                                >
                                                    Bill CAPture Services
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/pricing');
                                                    }}
                                                >
                                                    Pricing
                                                </div>
                                            </div>
                                        </div>
                                        {/** Card 3 */}
                                        <div className="border-r px-4 py-6 flex flex-col justify-between" onClick={() => navigate('/solution/utility-mangement')}>
                                            <img src={solution1} alt="Utility" className="mb-2 w-40 h-10" />
                                            <p className="font-[400] text-sm mb-2 text-gray-700">Best-in-class portfolio-level energy and utility bill data management and reporting.</p>
                                            <div className="flex flex-col gap-2 mt-5">
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/overview');
                                                    }}
                                                >
                                                    Overview
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/features');
                                                    }}
                                                >
                                                    Features
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/bill-capture');
                                                    }}
                                                >
                                                    Bill CAPture Services
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/pricing');
                                                    }}
                                                >
                                                    Pricing
                                                </div>
                                            </div>
                                        </div>
                                        {/** Card 4 */}
                                        <div className="border-r px-4 py-6 flex flex-col justify-between" onClick={() => navigate('/solution/utility-mangement')}>
                                            <img src={solution1} alt="Utility" className="mb-2 w-40 h-10" />
                                            <p className="font-[400] text-sm mb-2 text-gray-700">Best-in-class portfolio-level energy and utility bill data management and reporting.</p>
                                            <div className="flex flex-col gap-2 mt-5">
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/overview');
                                                    }}
                                                >
                                                    Overview
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/features');
                                                    }}
                                                >
                                                    Features
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/bill-capture');
                                                    }}
                                                >
                                                    Bill CAPture Services
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/pricing');
                                                    }}
                                                >
                                                    Pricing
                                                </div>
                                            </div>
                                        </div>

                                        {/* Repeat similar structure for other cards */}
                                        {/* Card 2, 3, 4 would follow the same pattern */}
                                    </div>
                                )}
                            </div>

                            {/* About Us */}
                            <div
                                className={`pb-1 cursor-pointer transition duration-200 ${location.pathname === '/about' ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                                onClick={() => navigate('/about')}
                            >
                                About Us
                            </div>

                            {/* Resources */}
                            <div className="relative">
                                <div
                                    className={`pb-1 cursor-pointer transition duration-200 ${location.pathname.includes('/resources') ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                                    onClick={() => setShowSolutionsDropdown1(!showSolutionsDropdown1)}
                                >
                                    Resources
                                </div>
                                {showSolutionsDropdown1 && (
                                    <div
                                        onMouseEnter={() => setShowSolutionsDropdown1(true)}
                                        onMouseLeave={() => setShowSolutionsDropdown1(false)}
                                        className="absolute top-full left-2 right-2 flex items-center justify-center z-50"
                                    >
                                        <div className=" border border-[#0f172a] w-[30%] flex flex-col justify-between bg-white px-4 py-6 shadow-xl">
                                            <h4 className="font-bold text-lg mb-4">Resources</h4>
                                            <p className="font-[400] text-sm mb-2 text-gray-700">Doing your research? Find everything you need to build a business case in our Resource Center.</p>
                                            <div className="flex justify-between w-[80%]">
                                                <div className="flex flex-col gap-2 mt-5">
                                                    <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">eBooks</a>
                                                    <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Blogs</a>
                                                    <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Press Releases</a>
                                                </div>
                                                <div className="flex flex-col gap-2 mt-5">
                                                    <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Webinars</a>
                                                    <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Case Studies</a>
                                                    <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Downloads</a>
                                                </div>
                                            </div>

                                        </div>
                                        {/* Resources dropdown content */}
                                    </div>
                                )}
                            </div>

                            {/* Support */}
                            <div
                                className={`pb-1 cursor-pointer transition duration-200 ${location.pathname === '/support' ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                                onClick={() => navigate('/support')}
                            >
                                Support
                            </div>

                            {/* Contact Us */}
                            <div
                                className={`pb-1 cursor-pointer transition duration-200 ${location.pathname === '/contact' ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                                onClick={() => navigate('/contact')}
                            >
                                Contact Us
                            </div>
                        </nav>

                        {/* Request Demo Button */}
                        <div className="hidden md:block">
                            <div
                                className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300"
                                onClick={() => navigate('/request-demo')}
                            >
                                Request a Demo
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && windowWidth < 768 && (
                        <div className="md:hidden bg-white shadow-md w-full">
                            <nav className="flex flex-col space-y-4 px-6 py-4 text-sm font-bold">
                                <a href="#" className="hover:underline hover:text-[#0e121b] transition duration-200">Who We Help</a>
                                <a href="#" className="hover:underline hover:text-[#0e121b] transition duration-200">Solutions</a>
                                <a href="#" className="hover:underline hover:text-[#0e121b] transition duration-200">Success Stories</a>
                                <a href="#" className="hover:underline hover:text-[#0e121b] transition duration-200">Resources</a>
                                <a href="#" className="hover:underline hover:text-[#0e121b] transition duration-200">Company</a>
                                <a
                                    href="#"
                                    className=" text-center mt-2 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300"
                                >
                                    Request a Demo
                                </a>
                            </nav>
                        </div>
                    )}
                </header>
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