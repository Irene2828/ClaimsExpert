import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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
            padding-top: 84px !important;
            padding-bottom: 96px !important;
          }
        }

        .about-hero-container {
          width: 100%;
          max-width: 1336px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .about-hero-container {
            padding: 0 48px;
          }
        }

        .about-header-wrapper {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .about-top-row {
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
        }

        .about-back-wrapper {
          width: 100%;
          display: flex;
          justify-content: flex-start;
        }

        @media (min-width: 1024px) {
          .about-back-wrapper {
            position: absolute;
            left: 0;
            top: -42px;
            width: auto;
            z-index: 20;
          }
        }

        @media (max-width: 1023px) {
          .about-top-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            min-height: auto;
          }
          .about-header-wrapper {
            align-items: flex-start;
            text-align: left;
          }
          .about-eyebrow-container {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            text-align: left;
          }
          .about-headline {
            text-align: left;
            width: 100%;
          }
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

        .about-eyebrow-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .about-eyebrow-text {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(14, 34, 63, 0.6);
          font-weight: 500;
        }

        .about-headline {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: clamp(28px, 3.4vw, 44.8px);
          letter-spacing: -0.05em;
          line-height: 1.08;
          font-weight: 400;
          color: #1E3358;
          text-align: center;
          margin-top: 18px;
          margin-bottom: 0;
        }

        .about-story-container {
          width: 100%;
          max-width: 620px;
          margin-left: auto !important;
          margin-right: auto !important;
          text-align: left;
          padding-top: 32px;
          padding-bottom: 48px;
          box-sizing: border-box;
        }

        .about-story-paragraph {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-size: 16px;
          line-height: 1.68;
          color: #4B5563;
          font-weight: 400;
          letter-spacing: 0.01em;
          margin: 0;
          text-align: left;
        }
        .about-story-paragraph + .about-story-paragraph {
          margin-top: 20px;
        }

        .about-timeline-frame {
          width: 100%;
          max-width: 620px;
          margin-left: auto !important;
          margin-right: auto !important;
          position: relative;
          box-sizing: border-box;
          padding-bottom: 24px;
        }

        .timeline-container {
          position: relative;
          width: 100%;
          padding: 8px 0;
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
          font-size: 15px;
          line-height: 1.65;
          color: #4B5563;
          font-weight: 400;
          margin: 0;
          max-width: 520px;
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
          
          {/* 1. Header Wrapper with [Back to Homepage] button on top left opposite the eyebrow */}
          <div className="about-header-wrapper">
            
            <div className="about-top-row">
              {/* [Back to Homepage] Button on the left */}
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

              {/* Centered Eyebrow */}
              <div className="about-eyebrow-container">
                <span className="about-eyebrow-text">
                  - ABOUT THE PRACTICE - LEGACY -
                </span>
              </div>
            </div>

            {/* Centered Headline */}
            <h1 className="about-headline">
              R. Guertin & Associates
            </h1>
          </div>

          {/* 2. Story Block: Centered in hero, left-aligned text with doubled top padding */}
          <div className="about-story-container">
            <p className="about-story-paragraph">
              R. Guertin & Ass. grew from a <span style={{ fontWeight: 500, color: "#0E223F" }}>family passion for claims adjusting</span>. Founded by Roy Guertin, the firm built a strong reputation over the years based on <span style={{ fontWeight: 500, color: "#0E223F" }}>integrity, thoroughness, and a commitment</span> to providing high-quality service to its clients.
            </p>
            <p className="about-story-paragraph">
              Following Roy’s retirement in early 2026, Isabelle <span style={{ fontWeight: 500, color: "#0E223F" }}>continues that legacy</span>, carrying forward the same values while bringing <span style={{ fontWeight: 500, color: "#0E223F" }}>her own experience and approach</span> to the practice.
            </p>
          </div>

          {/* 3. Timeline Frame: Centered in the middle of the screen */}
          <div className="about-timeline-frame">
            <div className="timeline-container">
              {/* Vertical connecting stem line */}
              <div className="timeline-stem" />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', position: 'relative', zIndex: 2 }}>
                
                {/* Milestone 1: Foundation */}
                <div className="timeline-item">
                  <div className="timeline-marker-past">
                    <div className="timeline-marker-past-dot" />
                  </div>
                  <div>
                    <span className="timeline-badge">1990s — FOUNDATION</span>
                    <p className="timeline-stage-body">
                      The practice is established, building a reputation rooted deeply in integrity and thoroughness.
                    </p>
                  </div>
                </div>

                {/* Milestone 2: Present */}
                <div className="timeline-item">
                  <div className="timeline-marker-now">
                    <div className="timeline-marker-now-pulse" />
                    <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FFFFFF' }} />
                  </div>
                  <div>
                    <span className="timeline-badge">2026 — PRESENT</span>
                    <p className="timeline-stage-body">
                      Isabelle Guertin assumes leadership, bringing new experience while honoring the core values.
                    </p>
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

