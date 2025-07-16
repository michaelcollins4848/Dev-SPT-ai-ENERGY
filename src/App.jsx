  import { lazy, Suspense } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import EMSOverview from './pages/Product and Solutions/EnergyManagementSystem/Overview';
  import MarketIntelOverview from './pages/Product and Solutions/MarketIntelligence/overview';
  import HydrogenStationOverview from './pages/Product and Solutions/HydrogenManagementSystem/Overview';
  import EMSFeatures from './pages/Product and Solutions/EnergyManagementSystem/Features';
  import MarketIntelFeatures from './pages/Product and Solutions/MarketIntelligence/Features';
  import HydrogenStationFeatures from './pages/Product and Solutions/HydrogenManagementSystem/Features';
  import Pricing from './pages/Product and Solutions/HydrogenManagementSystem/Pricing';
  import CompanyOverview from './pages/About Us/CompanyOverview';
  import Careers from './pages/About Us/Careers';
  import Partners from './pages/About Us/Partners and Affiliates';
  import MeetOurTeam from './pages/About Us/MeetOurTeam';
  import Milestones from './pages/Research and Resources/Milestones';
  import ContactSales from './pages/Contact Us and Support/ContactSales';
  import GeneralInquiry from './pages/Contact Us and Support/GeneralInquiry';
  import ContactSupport from './pages/Contact Us and Support/ContactSupport';
  import FAQs from './pages/Contact Us and Support/FAQs';
  import { ScrollToTop } from './utils/utils';

  const HomePage = lazy(() => import('./pages/HomePage'));


  // Loading component to show while lazy-loaded components are being loaded
  const LoadingFallback = () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4">Loading...</p>
      </div>
    </div>
  );


  export default function App() {
    return (
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Energy Management */}
            <Route path="/product-and-solutions/energy-management-system" element={<EMSOverview />} />
            <Route path="/product-and-solutions/energy-management-system/overview" element={<EMSOverview />} />
            <Route path="/product-and-solutions/energy-management-system/features" element={<EMSFeatures />} />
            <Route path="/product-and-solutions/pricing" element={<Pricing />} />

            {/*Market Intelligence AI*/}
            <Route path="/product-and-solutions/market-intelligence" element={<MarketIntelOverview />} />
            <Route path="/product-and-solutions/market-intelligence/overview" element={<MarketIntelOverview />} />
            <Route path="/product-and-solutions/market-intelligence/features" element={<MarketIntelFeatures />} />
            <Route path="/product-and-solutions/pricing" element={<Pricing />} />

            {/*Hydrogen Station Management*/}
            <Route path="/product-and-solutions/hydrogen-management-system" element={<HydrogenStationOverview />} />
            <Route path="/product-and-solutions/hydrogen-management-system/overview" element={<HydrogenStationOverview />} />
            <Route path="/product-and-solutions/hydrogen-management-system/features" element={<HydrogenStationFeatures />} />
            <Route path="/product-and-solutions/pricing" element={<Pricing />} />

            {/* Research and Resources */}
            <Route path="/research-and-resources/milestones" element={<Milestones />} />

            {/* About Us */}
            <Route path="/about-us/company-overview" element={<CompanyOverview />} />
            <Route path="/about-us/partners-and-affiliates" element={<Partners />} />
            <Route path="/about-us/meet-our-team" element={<MeetOurTeam />} />
            <Route path="/about-us/careers" element={<Careers />} />

            {/* Contact Us */}
            <Route path="/contact-us-and-support/contact-sales" element={<ContactSales />} />
            <Route path="/contact-us-and-support/general-inquiry" element={<GeneralInquiry />} />
            <Route path="/contact-us-and-support/contact-support" element={<ContactSupport />} />
            <Route path="/contact-us-and-support/faqs" element={<FAQs />} />
            
          </Routes>
        </Suspense>
      </Router>
    );
  }