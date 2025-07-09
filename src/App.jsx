  import { lazy, Suspense } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import UtilityMangement from './pages/Product and Solutions/HydrogenManagementSystem';
  import UtilityMangementFeature from './pages/Product and Solutions/HydrogenManagementSystem/Features';
  import UtilityMangementPricing from './pages/Product and Solutions/HydrogenManagementSystem/Pricing';
  import UtilityMangementBillCAPtureServices from './pages/Product and Solutions/HydrogenManagementSystem/BillCAPtureServices';
  import CompanyOverview from './pages/About Us/CompanyOverview';
  import Careers from './pages/About Us/Careers';
  import Partners from './pages/About Us/Partners and Affiliates';
  import Milestones from './pages/Research and Resources/Milestones';
  import ContactSales from './pages/Contact Us and Support/ContactSales';
  import PricingInformation from './pages/Contact Us and Support/PricingInformation';
  import GeneralInquiry from './pages/Contact Us and Support/GeneralInquiry';
  import ContactSupport from './pages/Contact Us and Support/ContactSupport';
  import FAQs from './pages/Contact Us and Support/FAQs';
  import Troubleshooting from './pages/Contact Us and Support/Troubleshooting';
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
            <Route path="/product-and-solutions/energy-mangement" element={<UtilityMangement />} />
            <Route path="/product-and-solutions/energy-mangement/overview" element={<UtilityMangement />} />
            <Route path="/product-and-solutions/energy-mangement/feature" element={<UtilityMangementFeature />} />
            <Route path="/product-and-solutions/energy-mangement/bill-capture" element={<UtilityMangementBillCAPtureServices />} />
            <Route path="/product-and-solutions/energy-mangement/pricing" element={<UtilityMangementPricing />} />

            {/* Energy Exchange */}
            <Route path="/product-and-solutions/energy-exchange" element={<UtilityMangement />} />
            <Route path="/product-and-solutions/energy-exchange/overview" element={<UtilityMangement />} />
            <Route path="/product-and-solutions/energy-exchange/feature" element={<UtilityMangementFeature />} />
            <Route path="/product-and-solutions/energy-exchange/bill-capture" element={<UtilityMangementBillCAPtureServices />} />
            <Route path="/product-and-solutions/energy-exchange/pricing" element={<UtilityMangementPricing />} />

            {/* Energy AI */}
            <Route path="/product-and-solutions/energy-ai" element={<UtilityMangement />} />
            <Route path="/product-and-solutions/energy-ai/overview" element={<UtilityMangement />} />
            <Route path="/product-and-solutions/energy-ai/feature" element={<UtilityMangementFeature />} />
            <Route path="/product-and-solutions/energy-ai/bill-capture" element={<UtilityMangementBillCAPtureServices />} />
            <Route path="/product-and-solutions/energy-ai/pricing" element={<UtilityMangementPricing />} />

            {/* Research and Resources */}
            <Route path="/research-and-resources/milestones" element={<Milestones />} />

            {/* About Us */}
            <Route path="/about-us/company-overview" element={<CompanyOverview />} />
            <Route path="/about-us/partners-and-affiliates" element={<Partners />} />
            <Route path="/about-us/careers" element={<Careers />} />

            {/* Contact Us */}
            <Route path="/contact-us-and-support/contact-sales" element={<ContactSales />} />
            <Route path="/contact-us-and-support/general-inquiry" element={<GeneralInquiry />} />
            <Route path="/contact-us-and-support/pricing-information" element={<PricingInformation />} />
            <Route path="/contact-us-and-support/contact-support" element={<ContactSupport />} />
            <Route path="/contact-us-and-support/faqs" element={<FAQs />} />
            <Route path="/contact-us-and-support/troubleshooting" element={<Troubleshooting />} />
            
          </Routes>
        </Suspense>
      </Router>
    );
  }