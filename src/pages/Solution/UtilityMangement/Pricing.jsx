import React from 'react'
import WebsiteLayout from '../../../components/Layout'
import HeroBannerSection from '../../../components/Home/HeroBannerSection';

import img from '../../../assets/Images/heroimg3.webp'
import CompaniesSlider from '../../../components/Home/CompaniesSlider';
import GoodbyeSpreadsheets from '../../../components/Solution Components/GoodbyeSpreadsheets';
import UtilityBillDataExcellence from '../../../components/Solution Components/UtilityBillDataExcellence';
import ManageUtilityData from '../../../components/Solution Components/ManageUtilityData';
import CalculatorSection from '../../../components/Home/CalculatorSection';
import TestimoninalCarousel from '../../../components/Home/TestimoninalCarousel';

const homepageContent = {
    heading1: "Your energy, your way:",
    heading2: "Tailored solutions for maximum savings",
    subheding: "Whether you're managing a handful of meters or thousands, we provide the energy and utility management tools and flexibility to take control of your energy costs.",
    img: img,
    btn: "Talk to sales",
    showplay: false,
    showtop: true,
    navigation: 'UtilityManagement / Pricing',
};

const showtop = true

const calculatorContent = {
    heading1: "The single source of truth for your",
    heading2: "energy and sustainability data.",
    btn: "Get a Free Consultation",
};


const testimonials = [
    {
        quote:
            "With EnergyCAP, we’ve been able to accomplish energy savings across the institution as a whole.",
        name: "Sean Finegan",
        title: "Business Operations Manager",
        companyLogo: "/assets/utmb-logo.png",
        videoThumbnail: "/assets/woman1.png",
        bgColor: "bg-blue-300",
    },
    {
        quote:
            "We finally went from paper that had sprocket on both sides to a data-driven database.",
        name: "Executive Director of Energy",
        title: "",
        companyLogo: "/assets/other-logo.png",
        videoThumbnail: "/assets/woman2.png",
        bgColor: "bg-green-300",
    },
    {
        quote:
            "We finally went from paper that had sprocket on both sides to a data-driven database.",
        name: "Executive Director of Energy",
        title: "",
        companyLogo: "/assets/other-logo.png",
        videoThumbnail: "/assets/woman2.png",
        bgColor: "bg-green-300",
    },
];

const UtilityMangementPricing = () => {
    return (
        <WebsiteLayout>
            <HeroBannerSection homepageContent={homepageContent} />
            <h2 className="text-xl md:text-4xl font-bold max-w-3xl m-auto leading-tight text-center">
                Trusted by businesses just like yours
            </h2>
            <CompaniesSlider showtop={showtop} />
            <ManageUtilityData />
            <GoodbyeSpreadsheets />
            <UtilityBillDataExcellence />
            <TestimoninalCarousel testimonials={testimonials} />
            <CalculatorSection calculatorContent={calculatorContent} />
        </WebsiteLayout>
    )
}

export default UtilityMangementPricing