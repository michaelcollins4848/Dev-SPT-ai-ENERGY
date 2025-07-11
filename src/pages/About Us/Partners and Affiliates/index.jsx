import React from 'react'
import WebsiteLayout from '../../../components/Layout'
import CalculatorSection from '../../../components/Home/CalculatorSection';
import PartnerWithUsSection from '../../../components/About Us Components/ParterWithUs';
import CompaniesSlider from '../../../components/About Us Components/CompaniesSlider';
import img from '../../../assets/Images/aboutusimg.webp'
import globeIcon from '../../../assets/Images/globe.png'
import handshakeIcon from '../../../assets/Images/handshake.png'
import aiIcon from '../../../assets/Images/aiIcon.png'

const PartnerSectionContent = {
    heading1: "Want to join the movement?",
    heading2: "Partner with Us!",
    subheding:"Ready to join the movement? Partner with us and become part of a growing coalition driving the future of clean, intelligent energy—one innovation at a time. Together, we’re not just advancing technology; we’re accelerating a global transition toward sustainable, accessible, and ethically managed energy systems. ​​",
    link: "Become a Partner",
    img:img
};

const Partners = () => {
    return (
        <WebsiteLayout>

            <section className="px-4 py-20 text-center bgbackgroundimg">
                <br /> <br />
                <h2 className="text-3xl sm:text-6xl font-bold text-[#0f172a] mb-4">
                    Partnering for a Smarter Energy Future
                </h2>
                <br />
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] mb-3">
                    Together, We Power Possibility
                </h3>
                <p className="text-base sm:text-xl text-[#0f172a] leading-relaxed max-w-5xl mx-auto ">
                    At SPT, collaboration is the core of innovation. We proudly work alongside a growing network of industry leaders, research institutions, and technology pioneers who share our mission: building a more efficient, secure, and intelligent energy ecosystem.
                    These trusted partners amplify our impact, helping us bring next-generation energy storage and AI-driven management systems to communities and industries worldwide.
                </p>
            </section>
            {/* partner company section  */}
            <div className="text-center text-xl text-[#0f172a] font-bold uppercase tracking-wider mt-10 mb-0 pb-3">
                Trusted by energy innovators, global suppliers, and future-focused institutions
            </div>
            <CompaniesSlider showtop={false} />

            {/*Benefits Section */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#0f172a] text-center mb-10">
                    Why Partner with SPT?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 text-center">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center text-center">
                    <img src={globeIcon} alt="Global Reach" className="mx-auto h-40 mb-4" />
                    <h3 className="font-semibold text-3xl mb-2">Global Reach</h3>
                    <p className="text-gray-600 text-lg">
                        Tap into an international network of distributors, engineers, and logistics hubs.
                    </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center text-center">
                    <img src={aiIcon} alt="AI-Driven" className="mx-auto h-40 mb-4" />
                    <h3 className="font-semibold text-3xl mb-2">AI-Driven Insights</h3>
                    <p className="text-gray-600 text-lg">
                        Access advanced analytics and EMS technology to enhance energy efficiency.
                    </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center text-center">
                    <img src={handshakeIcon} alt="Joint Branding" className="mx-auto h-40 mb-4" />
                    <h3 className="font-semibold text-3xl mb-2 whitespace-nowrap">Joint Branding Opportunities</h3>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-xs">
                        Boost your visibility by co-branding with one of the fastest-growing energy tech companies.
                    </p>
                    </div>
                </div>
            </section>
            <PartnerWithUsSection PartnerSectionContent={PartnerSectionContent} /> 
        </WebsiteLayout>
    )
}

export default Partners