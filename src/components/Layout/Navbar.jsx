import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from "../../assets/Images/SPT_logo.png"

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { RiSubtractLine } from "react-icons/ri";
import { motion, AnimatePresence } from 'framer-motion';
import EMSicon from "../../assets/Images/ems_icon.png";
import marketIcon from "../../assets/Images/market_icon.png";
import hydrogenStation from "../../assets/Images/hydrogen_icon.png"


const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
    const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
    const [showAboutusDropdown, setShowAboutusDropdown] = useState(false);
    const [showContactDropdown, setShowContactDropdown] = useState(false);

    const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
    const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
    const [mobileAboutusOpen, setMobileAboutusOpen] = useState(false);
    const [mobileContactOpen, setMobileContactOpen] = useState(false);

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
    }

    const showResourcesDropdown1 = () => {
        setShowResourcesDropdown(!showResourcesDropdown)
        setShowSolutionsDropdown(false)
        setShowAboutusDropdown(false)
        setShowContactDropdown(false)
    }

    const showAboutusDropdown1 = () => {
        setShowAboutusDropdown(!showAboutusDropdown)
        setShowSolutionsDropdown(false)
        setShowResourcesDropdown(false)
        setShowContactDropdown(false)
    }

    const showContactDropdown1 = () => {
        setShowContactDropdown(!showContactDropdown)
        setShowSolutionsDropdown(false)
        setShowResourcesDropdown(false)
        setShowAboutusDropdown(false)
        setShowSupportDropdown(false)
    }


    const showMobileSolutionOpen = () => {
        setMobileSolutionsOpen(!mobileSolutionsOpen)
        setMobileResourcesOpen(false)
        setMobileAboutusOpen(false)
        setMobileContactOpen(false)
    }

    const showMobileResourceOpen = () => {
        setMobileResourcesOpen(!mobileResourcesOpen)
        setMobileSolutionsOpen(false)
        setMobileAboutusOpen(false)
        setMobileContactOpen(false)
    }
    const showMobileAboutusOpen = () => {
        setMobileAboutusOpen(!mobileAboutusOpen)
        setMobileResourcesOpen(false)
        setMobileSolutionsOpen(false)
        setMobileContactOpen(false)
    }


    const showMobileContactOpen = () => {
        setMobileContactOpen(!mobileSolutionsOpen)
        setMobileResourcesOpen(false)
        setMobileAboutusOpen(false)
        setMobileSolutionsOpen(false)
    }

    return (
        <header className={`relative transition-all duration-300 
    bg-white/80 backdrop-blur-sm md:bg-white/80 
    ${isScrolled ? 'shadow-2xl border-b border-[#0f172a]' : ''}
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
                            className={`pb-1 cursor-pointer transition duration-200 ${location.pathname.includes('/product-and-solutions') ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                            onClick={() => showSolutionsDropdown1()}
                        >
                            Product and Solutions
                        </div>
                        {showSolutionsDropdown && (
                            <div
                                onMouseLeave={() => setShowSolutionsDropdown(false)}
                                className="max-w-screen-xl mx-auto absolute top-full left-0 right-0 shadow-xl bg-white grid grid-cols-3 gap-4 border border-[#0f172a] z-50"
                            >
                                {/** Card 1 */}
                                <div className="border-r px-4 py-6 flex flex-col justify-between" onClick={() => navigate('/product-and-solutions/energy-mangement-system')}>
                                    <img src={EMSicon} alt="Utility" className="mb-2 w-50 h-40 object-contain" />
                                    <p>AI Energy Management System</p>
                                    <p className="font-[400] text-sm text-gray-700">Best-in-class portfolio-level energy and utility bill data management and reporting.</p>
                                    <div className="flex flex-col gap-2">
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/product-and-solutions/energy-mangement-system/overview');
                                            }}
                                        >
                                            Overview
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/product-and-solutions/energy-mangement-system/features');
                                            }}
                                        >
                                            Features
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/product-and-solutions/pricing');
                                            }}
                                        >
                                            Pricing
                                        </div>
                                    </div>
                                </div>
                                {/** Card 2 */}
                                <div className="border-r px-4 py-6 flex flex-col justify-between" onClick={() => navigate('/product-and-solutions/market-intelligence')}>
                                    <img src={marketIcon} alt="Utility" className="mb-2 w-50 h-40 object-contain" />
                                    <p>AI Market Intelligence System</p>
                                    <p className="font-[400] text-sm mb-2 text-gray-700">Best-in-class portfolio-level energy and utility bill data management and reporting.</p>
                                    <div className="flex flex-col gap-2 mt-5">
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/product-and-solutions/market-intelligence/overview');
                                            }}
                                        >
                                            Overview
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/product-and-solutions/market-intelligence/features');
                                            }}
                                        >
                                            Features
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/product-and-solutions/pricing');
                                            }}
                                        >
                                            Pricing
                                        </div>
                                    </div>
                                </div>
                                {/** Card 3 */}
                                <div className="border-r px-4 py-6 flex flex-col justify-between" onClick={() => navigate('/product-and-solutions/hydrogen-management-system')}>
                                    <img src={hydrogenStation} alt="Utility" className="mb-2 w-50 h-40 object-contain" />
                                    <p>Hydrogen Station Smart Management System</p>
                                    <p className="font-[400] text-sm mb-2 text-gray-700">Best-in-class portfolio-level energy and utility bill data management and reporting.</p>
                                    <div className="flex flex-col gap-2 mt-5">
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/product-and-solutions/hydrogen-management-system/overview');
                                            }}
                                        >
                                            Overview
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/product-and-solutions/hydrogen-management-system/features');
                                            }}
                                        >
                                            Features
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/product-and-solutions/pricing');
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

                    {/* Resources */}
                    <div className="">
                        <div
                            className={`pb-1 cursor-pointer transition duration-200 ${location.pathname.includes('/research-and-resources') ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                            onClick={() => showResourcesDropdown1()}
                        >
                            Research and Resources
                        </div>
                        {showResourcesDropdown && (
                            <div
                                onMouseLeave={() => setShowResourcesDropdown(false)}
                                className="absolute top-full left-0 right-0 flex items-center justify-center z-50"
                            >
                                <div className="border border-[#0f172a] w-[30%] flex flex-col justify-between bg-white px-4 py-6 shadow-xl">
                                    <h4 className="font-bold text-lg mb-4">Research and Resources</h4>
                                    <p className="font-[400] text-sm mb-2 text-gray-700">Doing your research? Find everything you need to build a business case in our Resource Center.</p>
                                    <div className="flex justify-between w-[80%]">
                                        <div className="flex flex-col gap-2 mt-5">
                                            <div
                                                className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate('/research-and-resources/milestones');
                                                }}
                                            >
                                                Milestones
                                            </div>
                                            <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Newsroom</a>
                                            <a href="#" className="text-[#3686fd] font-semibold text-sm underline hover:text-[#0f172a] transition duration-300">Events and Engagement</a>
                                        </div>
                                    </div>
                                </div>
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
                                                //fix this link
                                                navigate('/about-us/partners-and-affiliates');
                                            }}
                                        >
                                            Partners and Affiliates
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/about-us/meet-our-team');
                                            }}
                                        >
                                            Meet Our Team
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

                    {/* Contact Us */}
                    <div className="">
                        <div
                            className={`pb-1 cursor-pointer transition duration-200 ${location.pathname === '/contact-us-and-support' ? 'border-b-2 border-[#0f172a]' : 'hover:underline hover:text-[#0e121b]'}`}
                            onClick={() => showContactDropdown1()}
                        >
                            Contact Us and Support
                        </div>
                        {showContactDropdown && (
                            <div
                                onMouseLeave={() => setShowContactDropdown(false)}
                                className="absolute top-full left-50 right-0 flex items-center justify-center z-50"
                            >
                                <div className="border border-[#0f172a] w-[20%] flex flex-col justify-between bg-white px-4 py-6 shadow-xl">
                                    <h4 className="font-bold text-lg mb-4">Contact Us and Support</h4>
                                    <p className="font-[400] text-sm mb-2 text-gray-700">Empowering energy and sustainability leaders with actionable data.</p>
                                    <div className="flex flex-col gap-3 mt-2">
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/contact-us-and-support/contact-sales');
                                            }}
                                        >
                                            Contact Sales
                                        </div>  
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/contact-us-and-support/faqs');
                                            }}
                                        >
                                            FAQs
                                        </div>
                                        <div
                                            className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/contact-us-and-support/contact-support');
                                            }}
                                        >
                                            Contact Support
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
                            navigate('/contact-us-and-support/general-inquiry');
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
                        className="md:hidden bg-white shadow-md w-full fixed top-[100px] left-0 right-0 z-40 h-[calc(55vh-72px)] overflow-y-auto"
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
                                    className={`flex justify-between items-center cursor-pointer ${location.pathname.includes('/product-and-solutions') ? 'border-b-2 border-[#0f172a] pb-2' : 'hover:underline hover:text-[#0e121b]'}`}
                                    onClick={() => showMobileSolutionOpen()}
                                >
                                    <span>Product and Solutions</span>
                                    <span>{mobileSolutionsOpen ? <RiSubtractLine color='#0f172a' size={20} /> : <FiPlus color='#0f172a' size={20} />}</span>
                                </div>
                                {mobileSolutionsOpen && (
                                    <div className="mt-2 space-y-3 px-4 py-2 border border-[#0f172a]">
                                        <div className="">
                                            <div
                                                className="font-semibold mb-2 text-[18px] cursor-pointer"
                                                onClick={() => {
                                                    navigate('/product-and-solutions/energy-mangement');
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                Energy Management
                                            </div>
                                            <div className="ml-2 space-y-2 text-sm">
                                                <div
                                                    className="text-[#0f172a] underline cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/product-and-solutions/energy-management-system/overview');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Overview
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/product-and-solutions/energy-mangement/feature');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Features
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/product-and-solutions/energy-mangement/bill-capture');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Bill CAPture Services
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/product-and-solutions/energy-mangement/pricing');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Pricing
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div
                                                className="font-semibold mb-2 text-[18px] cursor-pointer"
                                                onClick={() => {
                                                    navigate('/product-and-solutions/energy-exchange');
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                Energy Exchange
                                            </div>
                                            <div className="ml-2 space-y-2 text-sm">
                                                <div
                                                    className="text-[#0f172a] underline cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/product-and-solutions/energy-exchange/overview');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Overview
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/product-and-solutions/energy-exchange/feature');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Features
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/product-and-solutions/energy-exchange/bill-capture');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Bill CAPture Services
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/product-and-solutions/energy-exchange/pricing');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Pricing
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div
                                                className="font-semibold mb-2 text-[18px] cursor-pointer"
                                                onClick={() => {
                                                    navigate('/product-and-solutions/energy-ai');
                                                    setIsMobileMenuOpen(false);
                                                }}
                                            >
                                                Energy AI
                                            </div>
                                            <div className="ml-2 space-y-2 text-sm">
                                                <div
                                                    className="text-[#0f172a] underline cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/product-and-solutions/energy-ai/overview');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Overview
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/product-and-solutions/energy-ai/features');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Features
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/product-and-solutions/energy-ai/bill-capture');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Bill CAPture Services
                                                </div>
                                                <div
                                                    className="text-[#0f172a] underline cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/product-and-solutions/energy-ai/pricing');
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

                            <div className="py-3">
                                <div
                                    className={`flex justify-between items-center cursor-pointer ${location.pathname.includes('/about-us') ? 'border-b-2 border-[#0f172a] pb-2' : 'hover:underline hover:text-[#0e121b]'}`}
                                    onClick={() => showMobileAboutusOpen()}
                                >
                                    <span>About Us</span>
                                    <span>{mobileAboutusOpen ? <RiSubtractLine color='#0f172a' size={20} /> : <FiPlus color='#0f172a' size={20} />}</span>
                                </div>
                                {mobileAboutusOpen && (
                                    <div className="mt-2 space-y-3 px-4 py-2 border border-[#0f172a]">
                                        <div className="">
                                            <div className="font-semibold mb-2 text-[18px] cursor-pointer">
                                                About Us
                                            </div>
                                            <div className="flex flex-col gap-3 mt-2">
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/about-us/company-overview');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Company Overview
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/about-us/our-technology');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Our Technology
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/about-us/careers');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Careers
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="py-3">
                                <div
                                    className={`flex justify-between items-center cursor-pointer ${location.pathname.includes('/research-and-resources') ? 'border-b-2 border-[#0f172a] pb-2' : 'hover:underline hover:text-[#0e121b]'}`}
                                    onClick={() => showMobileResourceOpen()}
                                >
                                    <span>Research and Resources</span>
                                    <span>{mobileResourcesOpen ? <RiSubtractLine color='#0f172a' size={20} /> : <FiPlus color='#0f172a' size={20} />}</span>
                                </div>
                                {mobileResourcesOpen && (
                                    <div className="mt-2 space-y-3 px-4 py-2 border border-[#0f172a]">
                                        <div className="">
                                            <div className="font-semibold mb-2 text-[18px] cursor-pointer">
                                                Research and Resources
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="flex flex-col space-y-1">
                                                    <a href="#" className="text-[#3686fd] hover:underline">Case Studies</a>
                                                    <a href="#" className="text-[#3686fd] hover:underline">Training</a>
                                                    <a href="#" className="text-[#3686fd] hover:underline">Documentation</a>
                                                </div>
                                                <div className="flex flex-col space-y-1">
                                                    <a href="#" className="text-[#3686fd] hover:underline">Media Reporting</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>


                            <div className="py-3">
                                <div
                                    className={`flex justify-between items-center cursor-pointer ${location.pathname.includes('/contact-us-and-support') ? 'border-b-2 border-[#0f172a] pb-2' : 'hover:underline hover:text-[#0e121b]'}`}
                                    onClick={() => showMobileContactOpen()}
                                >
                                    <span>Contact Us and Support</span>
                                    <span>{mobileContactOpen ? <RiSubtractLine color='#0f172a' size={20} /> : <FiPlus color='#0f172a' size={20} />}</span>
                                </div>
                                {mobileContactOpen && (
                                    <div className="mt-2 space-y-3 px-4 py-2 border border-[#0f172a]">
                                        <div className="">
                                            <div className="font-semibold mb-2 text-[18px] cursor-pointer">
                                                Contact Us and Support
                                            </div>
                                            <div className="flex flex-col gap-3 mt-2">
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/contact-us-and-support/contact-sales');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Contact Sales
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/contact-us-and-support/general-inquiry');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    General Inquiry
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/contact-us-and-support/pricing-information');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Pricing Information
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/contact-us-and-support/faqs');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    FAQs
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/contact-us-and-support/troubleshooting');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Troubleshooting
                                                </div>
                                                <div
                                                    className="text-[#3686fd] font-semibold text-sm hover:underline hover:text-[#0f172a] transition duration-300 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        navigate('/contact-us-and-support/contact-support');
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    Contact Support
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
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