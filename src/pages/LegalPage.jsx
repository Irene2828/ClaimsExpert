import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { legalDocs } from '../i18n/legalDocs';
import Footer from '../components/Footer';

export default function LegalPage() {
  const { docId } = useParams();
  const { language, t } = useLanguage();

  // Validate the document ID
  if (!['privacy', 'cookies', 'complaints'].includes(docId)) {
    return <Navigate to="/" replace />;
  }

  const doc = legalDocs[language][docId];

  // Helper to check if a heading starts with a number (e.g. "1.", "1.1")
  const isNumericalHeading = (heading) => {
    return /^\d+(\.\d+)?\s*-?/.test(heading);
  };

  return (
    <main className="bg-[#F5F6F8] min-h-screen flex flex-col selection:bg-[#0E223F] selection:text-white">
      <div className="flex-grow pt-12 pb-20 lg:pt-16 lg:pb-24 px-8 lg:px-12">
        <div className="max-w-[1336px] mx-auto w-full">
        <div className="w-full flex justify-start mb-8">
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

        <article className="max-w-[900px] mx-auto w-full">
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

          <div className="space-y-8 font-inter text-[15px] leading-[1.75] text-[#334155]">
            {/* Intro Paragraphs */}
            {doc.intro && (
              <div className="space-y-4 mb-10">
                {doc.intro.map((paragraph, idx) => (
                  <p key={`intro-${idx}`}>{paragraph}</p>
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
                      <p key={`p-${idx}-${pIdx}`} className={paragraph.startsWith('- ') ? 'pl-4' : ''}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </article>
      </div>
      </div>
      <Footer />
    </main>
  );
}
