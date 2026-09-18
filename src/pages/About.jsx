import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import royIsabellePortrait from '../assets/roy-isabelle-portrait.png';

export default function About() {
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
          justify-content: center;
          gap: 10px;
          height: 44px;
          padding: 0 24px;
          border-radius: 9999px;
          border: none;
          background-color: #FFFFFF;
          color: #0E223F;
          font-size: 14.5px;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-decoration: none;
          white-space: nowrap;
          box-sizing: border-box;
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 1px 3px rgba(14, 34, 63, 0.08);
        }
        .about-back-btn:hover {
          background-color: #F5F6F8;
          box-shadow: 0 2px 8px rgba(14, 34, 63, 0.1);
        }
        .about-back-btn .about-back-icon {
          transition: transform 0.2s ease;
        }
        .about-back-btn:hover .about-back-icon {
          transform: translateX(-3px);
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
            grid-template-columns: 1.05fr 0.95fr;
            gap: 56px;
            align-items: start;
          }
        }

        .about-left-col {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .about-story-container {
          width: 100%;
          max-width: 81% !important;
          margin: 0 !important;
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
          gap: 36px;
        }
        @media (min-width: 1024px) {
          .about-right-col {
            margin-top: -64px;
          }
        }

        .about-portrait-card {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about-portrait-img {
          width: 100%;
          max-width: 520px;
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
            "radial-gradient(ellipse 80% 70% at 15% 20%, rgba(218, 227, 238, 0.65) 0%, rgba(240, 245, 250, 0.35) 45%, transparent 75%), linear-gradient(to right, transparent 25%, #FFFFFF 70%), #FFFFFF",
        }}
      >
        <div className="about-hero-container">
          
          {/* Top Row: [Back to Homepage] button */}
          <div className="about-back-wrapper">
            <Link
              to="/"
              className="about-back-btn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0E223F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="about-back-icon"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>Back to Homepage</span>
            </Link>
          </div>

          {/* 2-Column Grid */}
          <div className="about-content-grid">
            
            {/* Left Column: Eyebrow + Headline + Story Block */}
            <div className="about-left-col">
              <span className="about-eyebrow-text">
                — ABOUT THE PRACTICE • LEGACY —
              </span>
              <h1 className="about-headline">
                R. Guertin & Associates
              </h1>

              <div className="about-story-container">
                <p className="about-story-paragraph">
                  R. Guertin & Ass. was founded in 2014 by Roy Guertin, building on his <span style={{ fontWeight: 500, color: "#0E223F" }}>extensive experience in claims adjusting</span> and a commitment to providing <span style={{ fontWeight: 500, color: "#0E223F" }}>thorough, independent and personalized service</span>.
                </p>
                <p className="about-story-paragraph">
                  Isabelle Guertin <span style={{ fontWeight: 500, color: "#0E223F" }}>joined the family practice in 2016</span>, bringing her own experience and gradually taking on a greater role in the firm. Over the years, she developed a particular expertise in <span style={{ fontWeight: 500, color: "#0E223F" }}>municipal civil liability</span> while working closely with the firm's clients and continuing the values on which the practice was built.
                </p>
                <p className="about-story-paragraph">
                  Following Roy's retirement in 2026, Isabelle became the <span style={{ fontWeight: 500, color: "#0E223F" }}>sole owner of R. Guertin & Ass.</span> Today, she continues the firm's tradition of <span style={{ fontWeight: 500, color: "#0E223F" }}>integrity, thoroughness and personal service</span> while developing the practice in her own direction — maintaining its strong focus on municipal civil liability and making her claims expertise directly available to policyholders through <span style={{ fontWeight: 500, color: "#0E223F" }}>public adjusting services</span>.
                </p>
              </div>
            </div>

            {/* Right Column: Portrait Image + Caption + Timeline Frame */}
            <div className="about-right-col">
              
              {/* Portrait Image & Caption */}
              <div className="about-portrait-card">
                <img
                  src={royIsabellePortrait}
                  alt="Roy & Isabelle Guertin — Founding & Current Leadership"
                  className="about-portrait-img"
                />
                <p className="about-portrait-caption">
                  Roy & Isabelle Guertin — Founding & Current Leadership
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
                        <span className="timeline-badge">2014 • FOUNDATION</span>
                        <p className="timeline-stage-body">
                          R. Guertin & Ass. is founded by Roy Guertin, building a reputation rooted deeply in integrity and thoroughness.
                        </p>
                      </div>
                    </div>

                    {/* Milestone 2: 2016 Joining firm */}
                    <div className="timeline-item">
                      <div className="timeline-marker-past">
                        <div className="timeline-marker-past-dot" />
                      </div>
                      <div>
                        <span className="timeline-badge">2016 • EXPANSION</span>
                        <p className="timeline-stage-body">
                          Isabelle Guertin joins the family practice, developing deep expertise in municipal civil liability.
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
                        <span className="timeline-badge">2026 • PRESENT</span>
                        <p className="timeline-stage-body">
                          Isabelle Guertin assumes sole ownership, expanding into public adjusting services while honoring core values.
                        </p>
                      </div>
                    </div>

                  </div>
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
