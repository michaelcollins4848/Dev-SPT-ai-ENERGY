import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UtilityMangement from './pages/Solution/UtilityMangement';

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solution/utility-mangement" element={<UtilityMangement />} />
        </Routes>
      </Suspense>
    </Router>
  );
}