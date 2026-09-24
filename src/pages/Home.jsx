import Hero from '../components/Hero';
import Approach from '../components/Approach';
import Expertise from '../components/Expertise';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useLanguage } from '../i18n/LanguageContext';
import usePageMeta from '../hooks/usePageMeta';

export default function Home() {
  const { language } = useLanguage();

  usePageMeta({
    title: language === 'fr'
      ? 'Isabelle Guertin | Expert en règlement de sinistres indépendant | R. Guertin & Ass.'
      : 'Isabelle Guertin | Independent Claims Adjuster | Guertin Claims Advisory',
    description: language === 'fr'
      ? "Cabinet d'expertise en règlement de sinistres indépendant à Montréal et au Québec fondé en 2014. Spécialisation en responsabilité civile municipale, accompagnement d'assurés et analyse technique."
      : "Independent claims adjusting practice in Montreal and Quebec founded in 2014. Specializing in municipal civil liability, policyholder adjusting services, and damage assessment.",
    path: '/'
  });

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
