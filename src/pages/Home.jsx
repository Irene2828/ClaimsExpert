import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Approach from '../components/Approach';
import Expertise from '../components/Expertise';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Hero />
      <Approach />
      <Expertise />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </motion.main>
  );
}
