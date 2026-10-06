import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import LegalPage from './pages/LegalPage';
import NotFound from './pages/NotFound';
import useScrollMotion from './hooks/useScrollMotion';
import usePageMeta from './hooks/usePageMeta';
import { LanguageProvider } from './i18n/LanguageContext';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      window.scrollTo(0, 0);
      if (hash) {
        window.history.replaceState(null, '', pathname);
      }
      return;
    }

    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  useScrollMotion();
  usePageMeta();

  return (
    <LanguageProvider>
      <div className="bg-white text-[#111827] antialiased selection:bg-[#0E223F] selection:text-white">
        <ScrollToTop />
        <Header />
        <Routes>
          {/* French (default) at the root */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal/:docId" element={<LegalPage />} />
          {/* English under /en */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/legal/:docId" element={<LegalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
