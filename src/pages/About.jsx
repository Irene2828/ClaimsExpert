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

        .about-eyebrow-text {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(14, 34, 63, 0.6);
          font-weight: 500;
          display: block;
        }

        /* Top 2-Column Row */
        .about-top-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          box-sizing: border-box;
        }
        @media (min-width: 1024px) {
          .about-top-grid {
            grid-template-columns: 0.88fr 1.12fr;
            gap: 52px;
            align-items: start;
          }
        }

        .about-col-left {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .about-col-right {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .about-back-btn-wrapper {
          width: 100%;
          display: flex;
          justify-content: flex-end;
          margin-top: 40px;
        }

        .about-portrait-card {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 14px;
        }

        .about-portrait-img {
          width: 100%;
          max-width: 490px;
          height: auto;
          border-radius: 0;
          object-fit: cover;
          box-shadow: none;
          display: block;
        }

        .about-text-wrapper {
          width: 100%;
          max-width: 90%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .about-headline {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: clamp(28px, 3.2vw, 42px);
          letter-spacing: -0.04em;
          line-height: 1.12;
          font-weight: 400;
          color: #1E3358;
          text-align: left;
          margin-top: 0;
          margin-bottom: 20px;
        }

        .about-story-container {
          width: 100%;
          text-align: left;
          padding: 0;
          box-sizing: border-box;
        }

        .about-story-paragraph {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-size: 14px;
          line-height: 1.62;
          color: #4B5563;
          font-weight: 400;
          letter-spacing: 0.01em;
          margin: 0;
          text-align: left;
        }
        .about-story-paragraph + .about-story-paragraph {
          margin-top: 16px;
        }

        /* Timeline in Column 1 under image */
        .about-timeline-frame {
          width: 100%;
          max-width: 490px;
          margin-top: 28px;
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
          font-size: 14px;
          line-height: 1.62;
          color: #4B5563;
          font-weight: 400;
          margin: 0;
          max-width: 100%;
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
          
          {/* Row 1: 2-Column Layout */}
          <div className="about-top-grid">
            
            {/* Column 1 (Left): Eyebrow + Portrait Image + Timeline */}
            <div className="about-col-left">
              <span className="about-eyebrow-text">
                {t('about.eyebrow')}
              </span>

              <div className="about-portrait-card">
                <img
                  src={royIsabellePortrait}
                  alt="Roy & Isabelle Guertin — Founding & Current Leadership"
                  className="about-portrait-img"
                />
              </div>

              {/* Timeline directly inside Column 1 under portrait image */}
              <div className="about-timeline-frame">
                <div className="timeline-container">
                  <div className="timeline-stem" />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', position: 'relative', zIndex: 2 }}>
                    
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

            {/* Column 2 (Right): Headline + Story Block */}
            <div className="about-col-right">
              <div className="about-text-wrapper">
                <h1 className="about-headline">
                  {t('about.headline')}
                </h1>

                <div className="about-story-container">
                  <p className="about-story-paragraph" dangerouslySetInnerHTML={{ __html: t('about.p1').replace('founded in 2014 by Roy Guertin', '<span style="font-weight: 500; color: #0E223F">founded in 2014 by Roy Guertin</span>').replace('fondée en 2014 par Roy Guertin', '<span style="font-weight: 500; color: #0E223F">fondée en 2014 par Roy Guertin</span>') }} />
                  <p className="about-story-paragraph" dangerouslySetInnerHTML={{ __html: t('about.p2').replace('Isabelle Guertin joined the family practice in 2016', '<span style="font-weight: 500; color: #0E223F">Isabelle Guertin joined the family practice in 2016</span>').replace('Isabelle Guertin a rejoint le cabinet familial en 2016', '<span style="font-weight: 500; color: #0E223F">Isabelle Guertin a rejoint le cabinet familial en 2016</span>') }} />
                  <p className="about-story-paragraph" dangerouslySetInnerHTML={{ __html: t('about.p3').replace("Following Roy's retirement in 2026, Isabelle became the sole owner of R. Guertin & Ass.", '<span style="font-weight: 500; color: #0E223F">Following Roy\'s retirement in 2026, Isabelle became the sole owner of R. Guertin & Ass.</span>').replace("À la suite de la retraite de Roy en 2026, Isabelle est devenue l'unique propriétaire de R. Guertin & Ass.", '<span style="font-weight: 500; color: #0E223F">À la suite de la retraite de Roy en 2026, Isabelle est devenue l\'unique propriétaire de R. Guertin & Ass.</span>') }} />
                </div>

                {/* Back Button positioned at bottom right edge of the text block */}
                <div className="about-back-btn-wrapper">
                  <Link
                    to="/"
                    className="font-inter group inline-flex items-center justify-center gap-[6px] rounded-full px-[18px] py-[9px] text-[13.65px] font-medium tracking-[-0.01em] border border-[#0E223F] bg-white text-[#0E223F] transition-all hover:bg-[#F5F6F8] hover:shadow-[0_8px_24px_rgba(14,34,63,0.12)]"
                    style={{
                      borderWidth: '1px',
                      whiteSpace: "nowrap"
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
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
                    {t('about.backBtn')}
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
