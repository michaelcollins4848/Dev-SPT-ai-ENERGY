import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UtilityMangement from './pages/Solution/UtilityMangement';
import UtilityMangementFeature from './pages/Solution/UtilityMangement/Features';
import UtilityMangementPricing from './pages/Solution/UtilityMangement/Pricing';
import UtilityMangementBillCAPtureServices from './pages/Solution/UtilityMangement/BillCAPtureServices';
import Aboutus from './pages/About Us';
import Careers from './pages/Careers';
import ContactSales from './pages/Contact Us/ContactSales';
import PricingInformation from './pages/Contact Us/PricingInformation';
import GeneralInquiry from './pages/Contact Us/GeneralInquiry';
import ContactSupport from './pages/Support/ContactSupport';
import FAQs from './pages/Support/FAQs';
import Troubleshooting from './pages/Support/Troubleshooting';
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
          <Route path="/solution/utility-mangement/overview" element={<UtilityMangement />} />
          <Route path="/solution/utility-mangement/feature" element={<UtilityMangementFeature />} />
          <Route path="/solution/utility-mangement/bill-capture" element={<UtilityMangementBillCAPtureServices />} />
          <Route path="/solution/utility-mangement/pricing" element={<UtilityMangementPricing />} />
          <Route path="/about-us/company-overview" element={<Aboutus />} />
          <Route path="/about-us/careers" element={<Careers />} />
          <Route path="/contact-us/contact-sales" element={<ContactSales />} />
          <Route path="/contact-us/general-inquiry" element={<GeneralInquiry />} />
          <Route path="/contact-us/pricing-information" element={<PricingInformation />} />
          <Route path="/support/contact-support" element={<ContactSupport />} />
          <Route path="/support/faqs" element={<FAQs />} />
          <Route path="/support/troubleshooting" element={<Troubleshooting />} />
        </Routes>
      </Suspense>
    </Router>
  );
}