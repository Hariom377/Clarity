import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './lib/i18n';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Waitlist from './pages/Waitlist';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import { brand } from './lib/brand';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="relative min-h-screen bg-ink text-paper">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-grid mask-fade-b" />
          <ScrollToTop />
          <Nav />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/about" element={<About />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              {/* Future-ready routes — render ComingSoon today */}
              {brand.futureRoutes.map((r) => (
                <Route key={r.path} path={r.path} element={<ComingSoon />} />
              ))}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
