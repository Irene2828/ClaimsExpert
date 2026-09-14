import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import FeedbackWidget from './components/FeedbackWidget';
import useScrollMotion from './hooks/useScrollMotion';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
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
  const location = useLocation();

  return (
    <div className="bg-white text-[#111827] antialiased overflow-x-hidden selection:bg-[#0E223F] selection:text-white">
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
      <FeedbackWidget />
    </div>
  );
}

export default App;
