import Header from './components/Header';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Expertise from './components/Expertise';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollMotion from './hooks/useScrollMotion';

function App() {
  useScrollMotion();

  return (
    <div className="bg-white text-[#111827] antialiased overflow-x-hidden selection:bg-[#0E223F] selection:text-white">
      <Header />
      <Hero />
      <Approach />
      <Expertise />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
