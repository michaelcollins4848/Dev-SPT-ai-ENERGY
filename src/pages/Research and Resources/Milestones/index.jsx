import WebsiteLayout from '../../../components/Layout'

import awardimg from '../../../assets/Images/award2.webp'
import Awards from '../../../components/About Us Components/Awards';
import HistorySection from '../../../components/About Us Components/HistorySection';

const AwardsContent = {
    heading1: "Awards",
};

const awards = [
    {
        icon: awardimg,
        title: "ENERGY STAR Partner of the Year 2024",
    },
    {
        icon: awardimg,
        title: "Capterra Best of Energy Management 2024",
    },
    {
        icon: awardimg,
        title: "Green Quadrant: Energy Management Software 2023",
    },
    {
        icon: awardimg,
        title: "2024 Top Environmental, Social and Governance Reporting (ESG) Software Quadrant.",
    },
    {
        icon: awardimg,
        title: "Summer 2024 Energy Manager Software Leaders",
    },
    {
        icon: awardimg,
        title: "Major Player in the Worldwide Carbon Accounting & Management Applications 2024 Vendor Assessment",
    },
     {
        icon: awardimg,
        title: "ESG Reporting Data Quadrant Leader",
    },
     {
        icon: awardimg,
        title: "2024 Top Product of the Year by the Environment+Energy Leader Awards Program",
    },
     {
        icon: awardimg,
        title: "Top Climate Tech Companies to Watch in 2024",
    },

     {
        icon: awardimg,
        title: "Best Company Perks & Benefits 2023",
        description:
            'Also awarded, was the "Best Company Work-Life Balance of 2023" title.',
    },
     {
        icon: awardimg,
        title: "2023 Emotional Footprint Champion",
        description:
            'Also awarded was the "2023 Environmental, Social and Governance Reporting Data Quadrant" title.',
    },
     {
        icon: awardimg,
        title: "Best Places to Work 2023",
        description:
            'Also awarded, was the "Best Startups in Colorado" title.',
    },
     {
        icon: awardimg,
        title: "Spring 2022 Energy Management Software (Wattics)",
        description:
            "We're also a Market Leader in the Summer 2023 Energy Management Software Customer Success Report.",
    },
];


const Milestones = () => {
    return (
        <WebsiteLayout>
            <HistorySection />
        </WebsiteLayout>
    )
}

export default Milestones