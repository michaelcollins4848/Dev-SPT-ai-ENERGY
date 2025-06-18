import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from "../../assets/Images/SPT_logo.png"
import solution1 from "../../assets/Images/solution.webp";
import Ai from "../../assets/Images/ai-management.png";
import Smart from "../../assets/Images/smart-analysis.png"
import Product from "../../assets/Images/our-product.png";
import Platfrom from "../../assets/Images/unity-platform.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { RiSubtractLine } from "react-icons/ri";
import { motion, AnimatePresence } from 'framer-motion';



const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
    const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
    const [showAboutusDropdown, setShowAboutusDropdown] = useState(false);
    const [showSupportDropdown, setShowSupportDropdown] = useState(false);
    const [showContactDropdown, setShowContactDropdown] = useState(false);

    const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
    const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
    const [mobileAboutusOpen, setMobileAboutusOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeAllDropdowns = () => {
        setShowSolutionsDropdown(false);
        setShowResourcesDropdown(false);
        setMobileSolutionsOpen(false);
        setMobileResourcesOpen(false);
    };

    const mobileMenuVariants = {
        hidden: { x: '-100%', opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        },
        exit: {
            x: '-100%',
            opacity: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.3
            }
        }
    };

    const iconVariants = {
        hidden: { rotate: 0, opacity: 0 },
        visible: {
            rotate: 360,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 200,
                damping: 15
            }
        },
        exit: {
            rotate: -360,
            opacity: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.2
            }
        }
    };


    const showSolutionsDropdown1 = () => {
        setShowSolutionsDropdown(!showSolutionsDropdown)
        setShowResourcesDropdown(false)
        setShowAboutusDropdown(false)
        setShowContactDropdown(false)
        setShowSupportDropdown(false)
    }

    const showResourcesDropdown1 = () => {
        setShowResourcesDropdown(!showResourcesDropdown)
        setShowSolutionsDropdown(false)
        setShowAboutusDropdown(false)
        setShowContactDropdown(false)
        setShowSupportDropdown(false)
    }

    const showAboutusDropdown1 = () => {
        setShowAboutusDropdown(!showAboutusDropdown)
        setShowSolutionsDropdown(false)
        setShowResourcesDropdown(false)
        setShowContactDropdown(false)
        setShowSupportDropdown(false)
    }
    const showSupportDropdown1 = () => {
        setShowSupportDropdown(!showSupportDropdown)
        setShowSolutionsDropdown(false)
        setShowResourcesDropdown(false)
        setShowAboutusDropdown(false)
        setShowContactDropdown(false)
    }

    const showContactDropdown1 = () => {
        setShowContactDropdown(!showContactDropdown)
        setShowSolutionsDropdown(false)
        setShowResourcesDropdown(false)
        setShowAboutusDropdown(false)
        setShowSupportDropdown(false)
    }

    return (
        <header className={`relative transition-all duration-300 
    bg-white shadow-2xl border-b border-[#0f172a] 
    md:bg-transparent md:shadow-none md:border-0 
    ${isScrolled ? 'md:bg-white md:shadow-2xl md:border-b md:border-[#0f172a]' : ''}
  `}>
            <div className="max-w-screen-xl mx-auto flex justify-between items-center py-1 px-4 md:px-8">
                {/* Logo */}
                <img
                    className="w-30 h-15 font-extrabold tracking-wide cursor-pointer"
                    src={Logo}
                    alt="SPT_logo"
                    onClick={() => {
                        navigate('/');
                        closeAllDropdowns();
                    }}
                />

                {/* Mobile Menu Toggle */}
                <motion.button
                    className="md:hidden text-2xl text-[#122a36] relative w-8 h-8"
                    onClick={toggleMobileMenu}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode='wait'>
                        {isMobileMenuOpen ? (
                            <motion.span
                                key="close-icon"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={iconVariants}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <IoMdClose size={24} />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="menu-icon"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={iconVariants}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <RxHamburgerMenu size={24} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>

                {/* Desktop Nav Items */}
                <nav className="hidden md:flex space-x-8 font-bold text-sm">
                    {/* Home */}
                    <div
                        className={`pb-1 cursor-pointer transition duration-200 ${location.pathname === '/' ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                        onClick={() => {
                            navigate('/');
                            closeAllDropdowns();
                        }}
                    >
                        Home
                    </div>

                    {/* Solutions */}
                    <div className="">
                        <div
                            className={`pb-1 cursor-pointer transition duration-200 ${location.pathname.includes('/solution') ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                            onClick={() => showSolutionsDropdown1()}
                        >
                            Solutions
                        </div>
                        {showSolutionsDropdown && (
                            <div
                                onMouseLeave={() => setShowSolutionsDropdown(false)}
                                className="max-w-screen-xl mx-auto absolute top-full left-0 right-0 shadow-xl bg-white grid grid-cols-3 gap-4 border border-[#0f172a] z-50"
                            >
                                {/** Card 1 */}
                                <div className="border-r px-4 py-6 flex flex-col justify-between" onClick={() => navigate('/solution/utility-mangement')}>
                                    {/* <img src={Ai} alt="Utility" className="mb-2 w-40 h-10" /> */}
                                    <p>Energy Management</p>
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
                                                navigate('/solution/utility-mangement/feature');
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
                                    {/* <img src={Smart} alt="Utility" className="mb-2 w-40 h-10" /> */}
                                    <p>Energy Exchange</p>
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
                                    {/* <img src={Product} alt="Utility" className="mb-2 w-40 h-10" /> */}
                                    <p>Energy AI</p>
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
                                {/* <div className="border-r px-4 py-6 flex flex-col justify-between" onClick={() => navigate('/solution/utility-mangement')}>
                                    <img src={Platfrom} alt="Utility" className="mb-2 w-40 h-10" />
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
                                </div> */}
                            </div>
                        )}
                    </div>

                    {/* About Us */}
                    <div className="">
                        <div
                            className={`pb-1 cursor-pointer transition duration-200 ${location.pathname.includes('/about-us') ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                            onClick={() => showAboutusDropdown1()}
                        >
                            About Us
                        </div>
                        {showAboutusDropdown && (
                            <div
                                onMouseLeave={() => setShowAboutusDropdown(false)}
                                className="absolute top-full left-0 right-0 flex items-center justify-center z-50"
                            >
                                <div className="border border-[#0f172a] w-[30%] flex flex-col justify-between bg-white px-4 py-6 shadow-xl">
                                    <h4 className="font-bold text-lg mb-4">About Us</h4>
                                    <p className="font-[400] text-sm mb-2 text-gray-700">Empowering energy and sustainability leaders with actionable data.</p>
                                    <div className="flex flex-col gap-3 mt-2">
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/about-us/company-overview');
                                            }}
                                        >
                                            Company Overview
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/about-us/our-technology');
                                            }}
                                        >
                                            Our Technology
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/about-us/careers');
                                            }}
                                        >
                                            Careers
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Resources */}
                    <div className="">
                        <div
                            className={`pb-1 cursor-pointer transition duration-200 ${location.pathname.includes('/resources') ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                            onClick={() => showResourcesDropdown1()}
                        >
                            Resources
                        </div>
                        {showResourcesDropdown && (
                            <div
                                onMouseLeave={() => setShowResourcesDropdown(false)}
                                className="absolute top-full left-0 right-0 flex items-center justify-center z-50"
                            >
                                <div className="border border-[#0f172a] w-[30%] flex flex-col justify-between bg-white px-4 py-6 shadow-xl">
                                    <h4 className="font-bold text-lg mb-4">Resources</h4>
                                    <p className="font-[400] text-sm mb-2 text-gray-700">Doing your research? Find everything you need to build a business case in our Resource Center.</p>
                                    <div className="flex justify-between w-[80%]">
                                        <div className="flex flex-col gap-2 mt-5">
                                            <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Case Studies</a>
                                            <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Training</a>
                                            <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Documentation</a>
                                        </div>
                                        <div className="flex flex-col gap-2 mt-5">
                                            <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Media Reporting</a>
                                            {/* <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Case Studies</a>
                                            <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Downloads</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Support */}
                    <div className="">
                        <div
                            className={`pb-1 cursor-pointer transition duration-200 ${location.pathname === '/support' ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                            onClick={() => showSupportDropdown1()}
                        >
                            Support
                        </div>
                        {showSupportDropdown && (
                            <div
                                onMouseLeave={() => setShowSupportDropdown(false)}
                                className="absolute top-full left-50 right-0 flex items-center justify-center z-50"
                            >
                                <div className="border border-[#0f172a] w-[20%] flex flex-col justify-between bg-white px-4 py-6 shadow-xl">
                                    <h4 className="font-bold text-lg mb-4">Support</h4>
                                    <p className="font-[400] text-sm mb-2 text-gray-700">Empowering energy and sustainability leaders with actionable data.</p>
                                    <div className="flex flex-col gap-3 mt-2">
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/support/faqs');
                                            }}
                                        >
                                            FAQs
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/support/troubleshooting');
                                            }}
                                        >
                                            Troubleshooting
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/support/contact-support');
                                            }}
                                        >
                                            Contact Support
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Contact Us */}
                    <div className="">
                        <div
                            className={`pb-1 cursor-pointer transition duration-200 ${location.pathname === '/contact' ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                            onClick={() => showContactDropdown1()}
                        >
                            Contact Us
                        </div>
                        {showContactDropdown && (
                            <div
                                onMouseLeave={() => setShowContactDropdown(false)}
                                className="absolute top-full left-50 right-0 flex items-center justify-center z-50"
                            >
                                <div className="border border-[#0f172a] w-[20%] flex flex-col justify-between bg-white px-4 py-6 shadow-xl">
                                    <h4 className="font-bold text-lg mb-4">Contact Us</h4>
                                    <p className="font-[400] text-sm mb-2 text-gray-700">Empowering energy and sustainability leaders with actionable data.</p>
                                    <div className="flex flex-col gap-3 mt-2">
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/contact-us/contact-sales');
                                            }}
                                        >
                                            Contact Sales
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/contact-us/general-inquiry');
                                            }}
                                        >
                                            General Inquiry
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/contact-us/pricing-information');
                                            }}
                                        >
                                            Pricing Information
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Request Demo Button */}
                <div className="hidden md:block">
                    <div
                        className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-md shadow-md cursor-pointer hover:shadow-xl transition duration-300"
                        onClick={() => {
                            navigate('/request-demo');
                            closeAllDropdowns();
                        }}
                    >
                        Request a Demo
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                        className="md:hidden bg-white shadow-md w-full fixed top-[100px] left-0 right-0 z-40 h-[calc(50vh-72px)] overflow-y-auto"
                    >
                        <nav className="flex flex-col px-6 py-4 text-sm font-bold">
                            <div
                                className={`py-3 cursor-pointer ${location.pathname === '/' ? 'border-b-2 border-[#0f172a] pb-2' : 'hover:underline hover:text-[#0e121b]'}`}
                                onClick={() => {
                                    navigate('/');
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Home
                            </div>

                            <div className="py-3">
                                <div
                                    className={`flex justify-between items-center cursor-pointer ${location.pathname.includes('/solution') ? 'border-b-2 border-[#0f172a] pb-2' : 'hover:underline hover:text-[#0e121b]'}`}
                                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                                >
                                    <span>Solutions</span>
                                    <span>{mobileSolutionsOpen ? <RiSubtractLine color='#0f172a' size={20} /> : <FiPlus color='#0f172a' size={20} />}</span>
                                </div>
                                {mobileSolutionsOpen && (
                                    <div className="mt-2 space-y-3 px-4 py-2 border border-[#0f172a]">
                                        <div className="">
                                            <div
                                                className="font-semibold mb-2 text-[18px]"
                                                onClick={() => {
                                                    navigate('/solution/utility-mangement');
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                Utility Management
                                            </div>
                                            <div className="ml-2 space-y-2 text-sm">
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/overview');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Overview
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/features');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Features
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/bill-capture');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Bill CAPture Services
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/pricing');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Pricing
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div
                                                className="font-semibold mb-2 text-[18px]"
                                                onClick={() => {
                                                    navigate('/solution/utility-mangement');
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                Utility Management
                                            </div>
                                            <div className="ml-2 space-y-2 text-sm">
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/overview');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Overview
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/features');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Features
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/bill-capture');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Bill CAPture Services
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/pricing');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Pricing
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div
                                                className="font-semibold mb-2 text-[18px]"
                                                onClick={() => {
                                                    navigate('/solution/utility-mangement');
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                Utility Management
                                            </div>
                                            <div className="ml-2 space-y-2 text-sm">
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/overview');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Overview
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/features');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Features
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/bill-capture');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Bill CAPture Services
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/pricing');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Pricing
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div
                                                className="font-semibold mb-2 text-[18px]"
                                                onClick={() => {
                                                    navigate('/solution/utility-mangement');
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                Utility Management
                                            </div>
                                            <div className="ml-2 space-y-2 text-sm">
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/overview');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Overview
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/features');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Features
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/bill-capture');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Bill CAPture Services
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/solution/utility-mangement/pricing');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Pricing
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div
                                className={`py-3  cursor-pointer ${location.pathname === '/about' ? 'border-b-2 border-[#0f172a] pb-2' : 'hover:underline hover:text-[#0e121b]'}`}
                                onClick={() => {
                                    navigate('/about');
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                About Us
                            </div>

                            <div className="py-3">
                                <div
                                    className={`flex justify-between items-center cursor-pointer ${location.pathname.includes('/resources') ? 'border-b-2 border-[#0f172a] pb-2' : 'hover:underline hover:text-[#0e121b]'}`}
                                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                                >
                                    <span>Resources</span>
                                    <span>{mobileResourcesOpen ? <RiSubtractLine color='#0f172a' size={20} /> : <FiPlus color='#0f172a' size={20} />}</span>
                                </div>
                                {mobileResourcesOpen && (
                                    <div className="mt-2 space-y-3 px-4 py-2 border border-[#0f172a]">
                                        <div className="">
                                            <div
                                                className="font-semibold mb-2 text-[18px]"
                                                onClick={() => {
                                                    navigate('/solution/utility-mangement');
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                Resources
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex flex-col space-y-1">
                                                    <a href="#" className="text-[#3686fd] hover:underline">eBooks</a>
                                                    <a href="#" className="text-[#3686fd] hover:underline">Blogs</a>
                                                    <a href="#" className="text-[#3686fd] hover:underline">Press Releases</a>
                                                </div>
                                                <div className="flex flex-col space-y-1">
                                                    <a href="#" className="text-[#3686fd] hover:underline">Webinars</a>
                                                    <a href="#" className="text-[#3686fd] hover:underline">Case Studies</a>
                                                    <a href="#" className="text-[#3686fd] hover:underline">Downloads</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div
                                className={`py-3  cursor-pointer ${location.pathname === '/support' ? 'border-b-2 border-[#0f172a] pb-2' : 'hover:underline hover:text-[#0e121b]'}`}
                                onClick={() => {
                                    navigate('/support');
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Support
                            </div>

                            <div
                                className={`py-3  cursor-pointer ${location.pathname === '/contact' ? 'border-b-2 border-[#0f172a] pb-2' : 'hover:underline hover:text-[#0e121b]    '}`}
                                onClick={() => {
                                    navigate('/contact');
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Contact Us
                            </div>

                            <div
                                className="mt-4 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold px-6 py-2 rounded-md shadow-md text-center cursor-pointer hover:shadow-xl transition duration-300"
                                onClick={() => {
                                    navigate('/request-demo');
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                Request a Demo
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;