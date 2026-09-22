import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import LegalPage from './pages/LegalPage';
import FeedbackWidget from './components/FeedbackWidget';
import useScrollMotion from './hooks/useScrollMotion';

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

  return (
    <div className="bg-white text-[#111827] antialiased selection:bg-[#0E223F] selection:text-white">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/legal/:docId" element={<LegalPage />} />
      </Routes>
      <FeedbackWidget />
    </div>
  );
}

export default App;
