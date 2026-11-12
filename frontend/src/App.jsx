import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import StoryPage from './pages/StoryPage/StoryPage';
import FoundersPage from './pages/FoundersPage/FoundersPage';
import MarketPage from './pages/MarketPage/MarketPage';
import WhyNowPage from './pages/WhyNowPage/WhyNowPage';
import ApproachPage from './pages/ApproachPage/ApproachPage';
import AiPage from './pages/AiPage/AiPage';
import FaqPage from './pages/FaqPage/FaqPage';
import CareersPage from './pages/CareersPage/CareersPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AuthPage from './pages/AuthPage/AuthPage';
import LegalPage from './pages/LegalPage/LegalPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/founders" element={<FoundersPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/why-now" element={<WhyNowPage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/ai" element={<AiPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/privacy" element={<LegalPage />} />
        <Route path="/terms" element={<LegalPage />} />
        <Route path="/support" element={<LegalPage />} />
        {/* Fallback to Home */}
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
