import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import Footer from '../components/Footer';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  const { language } = useLanguage();

  usePageMeta({
    title: language === 'fr'
      ? '404 — Page non trouvée | R. Guertin & Associés'
      : '404 — Page Not Found | Guertin Claims Advisory',
    description: language === 'fr'
      ? "La page demandée est introuvable."
      : "The requested page could not be found.",
    path: '/404'
  });

  const isFr = language === 'fr';

  return (
    <main className="bg-[#F5F6F8] min-h-screen flex flex-col selection:bg-[#0E223F] selection:text-white">
      <div 
        className="flex-grow w-full flex items-center justify-center"
        style={{
          paddingTop: 'clamp(64px, 8vw, 96px)',
          paddingBottom: 'clamp(72px, 10vw, 120px)'
        }}
      >
        <div className="max-w-[1336px] mx-auto px-8 lg:px-12 w-full text-center">
          <div className="max-w-[560px] mx-auto flex flex-col items-center">
            <span className="font-inter inline-flex items-center px-3.5 py-1 rounded-full bg-[#E5E7EB] text-[#0E223F] border border-[#E5E7EB] text-[11px] tracking-[0.2em] uppercase font-medium">
              404
            </span>
            <h1 className="font-inter italic font-light tracking-[-0.03em] leading-[1.1] text-[#0E223F] text-[36px] md:text-[46px] mt-6">
              {isFr ? 'Page introuvable' : 'Page Not Found'}
            </h1>
            <p className="font-inter text-[15px] md:text-[16px] leading-[1.65] text-[#4B5563] mt-4 max-w-[42ch]">
              {isFr
                ? "La page que vous recherchez n'existe pas, a été déplacée ou l'adresse saisie est incorrecte."
                : "The page you are looking for does not exist, has been moved, or the address entered is incorrect."}
            </p>

            <div className="mt-8">
              <Link
                to="/"
                className="font-inter inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide text-white hover:brightness-110 transition-all hover:shadow-[0_10px_30px_rgba(14,34,63,0.18)] h-[48px] px-8 text-[14.5px] bg-[#0E223F]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                <span>{isFr ? "Retour à l'accueil" : "Back to Homepage"}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
