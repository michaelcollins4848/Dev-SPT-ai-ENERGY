import React from 'react'
import WebsiteLayout from '../../../components/Layout'
import HeroBannerSection from '../../../components/Home/HeroBannerSection';

import img from '../../../assets/Images/heroimg1.webp'
import CompaniesSlider from '../../../components/Home/CompaniesSlider';
import GoodbyeSpreadsheets from '../../../components/Solution Components/GoodbyeSpreadsheets';
import UtilityBillDataExcellence from '../../../components/Solution Components/UtilityBillDataExcellence';
import ManageUtilityData from '../../../components/Solution Components/ManageUtilityData';
import CalculatorSection from '../../../components/Home/CalculatorSection';

const homepageContent = {
    heading1: "Save 10% or more*",
    heading2: "with utility management software",
    subheding: "Utility data is complex. You need a tool to automate data entry, detect billing discrepancies, and streamline approval and review procedures. EnergyCAP enhances your existing workflows to new levels of efficiency and reliability. *More than half of customers save 10% or more YoY on the total cost of their utility bills after implementation.",
    img: img,
    btn: "Read the ROI of EnergyCAP UtilityManagement eBook",
    showplay: false,
    showtop: true,
};

const showtop = false

const calculatorContent = {
  heading1: "The single source of truth for your",
  heading2: "energy and sustainability data.",
  btn: "Get a Free Consultation",
};


const UtilityMangement = () => {
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

export default UtilityMangement