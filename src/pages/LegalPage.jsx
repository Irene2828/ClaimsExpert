import { useParams, Navigate, Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { legalDocs } from '../i18n/legalDocs';
import Footer from '../components/Footer';
import usePageMeta from '../hooks/usePageMeta';

export default function LegalPage() {
  const { docId } = useParams();
  const { language } = useLanguage();

  // Validate the document ID
  const isValidDoc = ['privacy', 'cookies', 'complaints'].includes(docId);
  const doc = isValidDoc ? legalDocs[language]?.[docId] : null;

  usePageMeta({
    title: doc ? `${doc.title} | ${language === 'fr' ? 'R. Guertin & Associés' : 'Guertin Claims Advisory'}` : '',
    description: doc ? (doc.intro?.[0]?.replace(/<[^>]*>/g, '') || doc.title) : '',
    path: `/legal/${docId || ''}`
  });

  if (!isValidDoc || !doc) {
    return <Navigate to="/404" replace />;
  }

  // Helper to check if a heading starts with a number (e.g. "1.", "1.1")
  const isNumericalHeading = (heading) => {
    return /^\d+(\.\d+)?\s*-?/.test(heading);
  };

  return (
    <main className="bg-[#F5F6F8] min-h-screen flex flex-col selection:bg-[#0E223F] selection:text-white">
      <div 
        className="flex-grow w-full"
        style={{
          paddingTop: 'clamp(48px, 6vw, 64px)',
          paddingBottom: 'clamp(72px, 8vw, 96px)'
        }}
      >
        <div className="max-w-[1336px] mx-auto px-8 lg:px-12 w-full">


        <article className="max-w-[650px] w-full">
          <header className="mb-12">
            <h1 className="font-inter font-light tracking-tight leading-[1.1] text-[#0E223F] text-[32px] md:text-[40px] mb-4">
              {doc.title}
            </h1>
            {doc.lastUpdated && (
              <p className="font-inter text-[13px] text-[#64748B] italic">
                {doc.lastUpdated}
              </p>
            )}
          </header>

          <div className="space-y-8 font-inter text-[14px] leading-[1.62] text-[#4B5563] tracking-[0.01em] text-justify">
            {/* Intro Paragraphs */}
            {doc.intro && (
              <div className="space-y-4 mb-10">
                {doc.intro.map((paragraph, idx) => (
                  <p key={`intro-${idx}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </div>
            )}

            {/* Sections */}
            {doc.sections.map((section, idx) => {
              const isNumerical = isNumericalHeading(section.heading);
              return (
                <section key={idx} className="mt-10">
                  <h2 className={`font-inter mb-4 ${isNumerical ? 'text-[#0E223F] font-semibold text-[17px]' : 'text-[#0E223F] font-medium text-[20px]'}`}>
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph, pIdx) => (
                      <p 
                        key={`p-${idx}-${pIdx}`} 
                        className={paragraph.startsWith('- ') ? 'pl-4' : ''}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div 
            className="border-t border-[#E2E8F0]"
            style={{ marginTop: '80px', paddingTop: '40px' }}
          >
            <Link 
              to="/" 
              className="font-inter group inline-flex items-center font-medium tracking-[-0.01em] text-[#0E223F] hover:underline underline-offset-4 transition-colors"
              style={{
                fontSize: '15.4px',
                gap: '9px',
                background: 'none',
                border: 'none',
                padding: 0,
                whiteSpace: "nowrap"
              }}
            >
              <svg
                width="16.5"
                height="16.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 transition-transform group-hover:-translate-x-1"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>{language === 'fr' ? "Retour à l'accueil" : "Back to Homepage"}</span>
            </Link>
          </div>
        </article>
      </div>
      </div>
      <Footer />
    </main>
  );
}
