import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import royIsabellePortrait from '../assets/roy-isabelle-portrait.png';
import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <main>
      <style>{`
        html body #about-hero,
        .about-hero-section {
          position: relative;
          overflow: hidden;
          padding-top: 48px !important;
          padding-bottom: 72px !important;
          box-sizing: border-box;
        }
        @media (min-width: 1024px) {
          html body #about-hero,
          .about-hero-section {
            padding-top: 64px !important;
            padding-bottom: 96px !important;
          }
        }

        .about-hero-container {
          width: 100%;
          max-width: 1336px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .about-hero-container {
            padding: 0 48px;
          }
        }

        .about-back-wrapper {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          margin-bottom: 32px;
        }

        .about-back-btn {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          border: none;
          background: transparent;
          color: #0E223F;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          text-decoration: none;
          white-space: nowrap;
          padding: 0;
          transition: color 0.2s ease;
        }
        .about-back-btn:hover {
          color: #00ACC1;
        }
        .about-back-btn .about-back-icon {
          transition: transform 0.2s ease, stroke 0.2s ease;
          stroke: currentColor;
        }
        .about-back-btn:hover .about-back-icon {
          transform: translateX(-4px);
        }

        .about-eyebrow-text {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(14, 34, 63, 0.6);
          font-weight: 500;
          display: block;
        }

        .about-headline {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: clamp(32px, 3.8vw, 48px);
          letter-spacing: -0.04em;
          line-height: 1.08;
          font-weight: 400;
          color: #1E3358;
          text-align: left;
          margin-top: 14px;
          margin-bottom: 28px;
        }

        .about-content-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          box-sizing: border-box;
        }
        @media (min-width: 1024px) {
          .about-content-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: start;
          }
        }

        .about-left-col {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 36px;
        }

        .about-story-container {
          width: 100%;
          text-align: left;
          padding: 0;
          box-sizing: border-box;
        }

        .about-story-paragraph {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-size: 14.5px;
          line-height: 1.68;
          color: #4B5563;
          font-weight: 400;
          letter-spacing: 0.01em;
          margin: 0;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }
        .about-story-paragraph + .about-story-paragraph {
          margin-top: 20px;
        }

        .about-right-col {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .about-text-wrapper {
          width: 100%;
          max-width: 540px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .about-portrait-card {
          width: 100%;
          max-width: 540px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-portrait-img {
          width: 100%;
          max-width: 540px;
          height: auto;
          border-radius: 0;
          object-fit: cover;
          box-shadow: none;
        }

        .about-portrait-caption {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          color: #1E3358;
          margin-top: 14px;
          text-align: center;
          letter-spacing: -0.01em;
        }

        .about-timeline-frame {
          width: 100%;
          max-width: 540px;
          position: relative;
          box-sizing: border-box;
          padding: 0;
          background: transparent;
          border: none;
          box-shadow: none;
        }

        .timeline-container {
          position: relative;
          width: 100%;
          padding: 4px 0;
          background: transparent;
        }
        .timeline-stem {
          position: absolute;
          left: 16px;
          top: 17px;
          bottom: 20px;
          width: 2px;
          background: linear-gradient(180deg, #CBD5E1 0%, #00ACC1 60%, #0E223F 100%);
          border-radius: 1px;
        }
        .timeline-item {
          display: flex;
          align-items: flex-start;
          gap: 22px;
          position: relative;
          z-index: 2;
        }
        .timeline-marker-past {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2.5px solid #CBD5E1;
          box-shadow: 0 2px 8px rgba(14, 34, 63, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .timeline-marker-past-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #64748B;
        }
        .timeline-marker-now {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #0E223F;
          border: 3px solid #FFFFFF;
          box-shadow: 0 0 0 2.5px #0E223F, 0 6px 16px rgba(14, 34, 63, 0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
          position: relative;
        }
        .timeline-marker-now-pulse {
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          background: rgba(0, 172, 193, 0.3);
          z-index: -1;
        }
        .timeline-badge {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11.5px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #00ACC1;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 6px;
        }
        .timeline-stage-body {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 14.5px;
          line-height: 1.65;
          color: #4B5563;
          font-weight: 400;
          margin: 0;
          max-width: 468px;
          text-align: left;
        }
      `}</style>

      <section
        id="about-hero"
        className="about-hero-section flex items-center overflow-hidden relative"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 0% 0%, rgba(210, 222, 236, 0.92) 0%, rgba(218, 227, 238, 0.45) 45%, transparent 75%), radial-gradient(ellipse 75% 65% at 100% 0%, rgba(210, 222, 236, 0.92) 0%, rgba(218, 227, 238, 0.45) 45%, transparent 75%), #F2F5FA",
        }}
      >
        <div className="about-hero-container">
          


          {/* 2-Column Grid */}
          <div className="about-content-grid">
            
            {/* Column 1 (Left): Eyebrow + Headline + Story Block */}
            <div className="about-right-col">
              <div className="about-text-wrapper">
                <span className="about-eyebrow-text">
                  {t('about.eyebrow')}
                </span>
                <h1 className="about-headline">
                  {t('about.headline')}
                </h1>

                <div className="about-story-container">
                  <p className="about-story-paragraph" dangerouslySetInnerHTML={{ __html: t('about.p1').replace('extensive experience in claims adjusting', '<span style="font-weight: 500; color: #0E223F">extensive experience in claims adjusting</span>').replace('vaste expérience en règlement de sinistres', '<span style="font-weight: 500; color: #0E223F">vaste expérience en règlement de sinistres</span>').replace('thorough, independent and personalized service', '<span style="font-weight: 500; color: #0E223F">thorough, independent and personalized service</span>').replace('service approfondi, indépendant et personnalisé', '<span style="font-weight: 500; color: #0E223F">service approfondi, indépendant et personnalisé</span>') }} />
                  <p className="about-story-paragraph" dangerouslySetInnerHTML={{ __html: t('about.p2').replace('joined the family practice in 2016', '<span style="font-weight: 500; color: #0E223F">joined the family practice in 2016</span>').replace('a rejoint le cabinet familial en 2016', '<span style="font-weight: 500; color: #0E223F">a rejoint le cabinet familial en 2016</span>').replace('municipal civil liability', '<span style="font-weight: 500; color: #0E223F">municipal civil liability</span>').replace('responsabilité civile municipale', '<span style="font-weight: 500; color: #0E223F">responsabilité civile municipale</span>') }} />
                  <p className="about-story-paragraph" dangerouslySetInnerHTML={{ __html: t('about.p3').replace('sole owner of R. Guertin & Ass.', '<span style="font-weight: 500; color: #0E223F">sole owner of R. Guertin & Ass.</span>').replace("unique propriétaire de R. Guertin & Ass.", '<span style="font-weight: 500; color: #0E223F">unique propriétaire de R. Guertin & Ass.</span>').replace('integrity, thoroughness and personal service', '<span style="font-weight: 500; color: #0E223F">integrity, thoroughness and personal service</span>').replace('intégrité, de rigueur et de service personnalisé', '<span style="font-weight: 500; color: #0E223F">intégrité, de rigueur et de service personnalisé</span>').replace('public adjusting services', '<span style="font-weight: 500; color: #0E223F">public adjusting services</span>').replace("expert en sinistres au bénéfice de l'assuré", '<span style="font-weight: 500; color: #0E223F">expert en sinistres au bénéfice de l\'assuré</span>') }} />
                </div>
              </div>
            </div>

            {/* Column 2 (Right): Portrait Image + Caption + Timeline Frame */}
            <div className="about-left-col">
              
              {/* Portrait Image & Caption */}
              <div className="about-portrait-card">
                <img
                  src={royIsabellePortrait}
                  alt="Roy & Isabelle Guertin — Founding & Current Leadership"
                  className="about-portrait-img"
                />
                <p className="about-portrait-caption">
                  {t('about.portraitCaption')}
                </p>
              </div>

              {/* Timeline Frame */}
              <div className="about-timeline-frame">
                <div className="timeline-container">
                  <div className="timeline-stem" />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', zIndex: 2 }}>
                    
                    {/* Milestone 1: 2014 Foundation */}
                    <div className="timeline-item">
                      <div className="timeline-marker-past">
                        <div className="timeline-marker-past-dot" />
                      </div>
                      <div>
                        <span className="timeline-badge">{t('about.timeline.year2014Badge')}</span>
                        <p className="timeline-stage-body">
                          {t('about.timeline.year2014Text')}
                        </p>
                      </div>
                    </div>

                    {/* Milestone 2: 2016 Joining firm */}
                    <div className="timeline-item">
                      <div className="timeline-marker-past">
                        <div className="timeline-marker-past-dot" />
                      </div>
                      <div>
                        <span className="timeline-badge">{t('about.timeline.year2016Badge')}</span>
                        <p className="timeline-stage-body">
                          {t('about.timeline.year2016Text')}
                        </p>
                      </div>
                    </div>

                    {/* Milestone 3: 2026 Present */}
                    <div className="timeline-item">
                      <div className="timeline-marker-now">
                        <div className="timeline-marker-now-pulse" />
                        <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FFFFFF' }} />
                      </div>
                      <div>
                        <span className="timeline-badge">{t('about.timeline.year2026Badge')}</span>
                        <p className="timeline-stage-body">
                          {t('about.timeline.year2026Text')}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
                
                <div className="w-full flex justify-end mt-12">
                  <Link
                    to="/"
                    className="font-inter group inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide border bg-white transition-colors hover:bg-[#F5F6F8] text-[14.7px]"
                    style={{
                      borderWidth: '0.5px',
                      borderColor: '#0E223F',
                      color: '#0E223F',
                      whiteSpace: "nowrap",
                      height: '48.3px',
                      padding: '0 29.4px'
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 transition-transform group-hover:-translate-x-1"
                    >
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    {t('about.backBtn')}
                  </Link>
                </div>

          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
