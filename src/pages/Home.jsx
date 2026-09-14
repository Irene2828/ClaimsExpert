import Hero from '../components/Hero';
import Approach from '../components/Approach';
import Expertise from '../components/Expertise';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Approach />
      <Expertise />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
