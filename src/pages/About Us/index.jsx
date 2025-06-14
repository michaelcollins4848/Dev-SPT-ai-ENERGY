import React from 'react'
import WebsiteLayout from '../../components/Layout'
import HeroBannerSection from '../../components/Home/HeroBannerSection';

import img from '../../assets/Images/heroimg1.webp'
import CompaniesSlider from '../../components/Home/CompaniesSlider';
import GoodbyeSpreadsheets from '../../components/Solution Components/GoodbyeSpreadsheets';
import UtilityBillDataExcellence from '../../components/Solution Components/UtilityBillDataExcellence';
import ManageUtilityData from '../../components/Solution Components/ManageUtilityData';
import CalculatorSection from '../../components/Home/CalculatorSection';

const homepageContent = {
    heading1: "Empowering energy",
    heading2: "and sustainability leaders with actionable data.",
    subheding: "EnergyCAP helps customers easily manage finite resources for a more sustainable world. For over forty years, the company has empowered energy, sustainability, and finance leaders with full control and understanding of all data points necessary to manage consumption, reduce their carbon footprint, and drive savings.",
    img: img,
    btn: "Request a Demo",
    showplay: false,
    showtop: false,
    navigation: 'UtilityManagement',
};

const showtop = false

const calculatorContent = {
  heading1: "The single source of truth for your",
  heading2: "energy and sustainability data.",
  btn: "Get a Free Consultation",
};


const Aboutus = () => {
    return (
        <WebsiteLayout>
            <HeroBannerSection homepageContent={homepageContent} />
            <CompaniesSlider showtop={showtop}/>
            <GoodbyeSpreadsheets />
            <UtilityBillDataExcellence />
            <ManageUtilityData />
            <CalculatorSection calculatorContent={calculatorContent}/>
        </WebsiteLayout>
    )
}

export default Aboutus