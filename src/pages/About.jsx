import { Link } from 'react-router-dom';
import portraitImage from '../assets/isabelle-portrait-opt.webp';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function About() {
  const primaryColor = '#0E223F';

  return (
    <main>
      <section
        id="about-hero"
        className="min-h-[calc(100svh-108px)] flex items-center overflow-hidden relative pt-10 pb-0 lg:pt-14 lg:pb-0"
        style={{
          paddingBottom: "0px",
          background:
            "radial-gradient(ellipse 80% 70% at 15% 20%, rgba(218, 227, 238, 0.65) 0%, rgba(240, 245, 250, 0.35) 45%, transparent 75%), linear-gradient(to right, transparent 25%, #FFFFFF 70%), #FFFFFF",
        }}
      >
        <div className="max-w-[1336px] mx-auto px-8 lg:px-12 w-full relative">
          {/* Mobile-only Eyebrow (above image on mobile < 768px) */}
          <div className="hero-eyebrow-mobile flex justify-center w-full pt-0 pb-3">
            <span className="font-inter text-[10.5px] tracking-[0.2em] uppercase text-[#0E223F]/70 font-medium hero-tag-line text-center">
              - ABOUT THE PRACTICE - LEGACY -
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-8 items-start pt-6 pb-0 lg:pt-10 lg:pb-0 relative">
            {/* Left Column (100% original desktop layout) */}
            <div className="order-2 lg:order-1 relative z-10 flex flex-col justify-start self-start mt-6 lg:mt-16 pb-4 lg:pb-0 hero-left-col">
              <div className="hero-eyebrow-desktop inline-flex items-center">
                <span className="font-inter text-[11px] tracking-[0.22em] uppercase text-[#0E223F]/60 font-medium hero-tag-line">
                  - ABOUT THE PRACTICE - LEGACY -
                </span>
              </div>
              <h1
                className="mt-4 font-inter text-[#1E3358]"
                style={{
                  fontSize: "clamp(42.23px, 5.15vw, 69.01px)",
                  letterSpacing: "-0.05em",
                  lineHeight: "1.08",
                }}
              >
                <div
                  className="block sm:whitespace-nowrap font-normal"
                  style={{
                    fontWeight: "400",
                    fontStyle: "normal",
                    lineHeight: "1.08",
                    letterSpacing: "-0.05em",
                  }}
                >
                  R. Guertin & Ass.
                </div>
              </h1>
              <p
                className="mt-6 text-[#4B5563] text-xl sm:text-[21px] leading-[1.75] font-normal tracking-[0.01em]"
                style={{ maxWidth: "680px" }}
              >
                R. Guertin & Ass. grew from a <span className="font-medium text-[#0E223F]">family passion for claims adjusting</span>. Founded by Roy Guertin, the firm built a strong reputation over the years based on <span className="font-medium text-[#0E223F]">integrity, thoroughness, and a commitment</span> to providing high-quality service to its clients.
              </p>
              <p
                className="mt-4 text-[#4B5563] text-xl sm:text-[21px] leading-[1.75] font-normal tracking-[0.01em]"
                style={{ maxWidth: "680px" }}
              >
                Following Roy’s retirement in early 2026, Isabelle <span className="font-medium text-[#0E223F]">continues that legacy</span>, carrying forward the same values while bringing <span className="font-medium text-[#0E223F]">her own experience and approach</span> to the practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 hero-ctas-wrapper">
                <Link
                  to="/"
                  className="font-inter group inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide border bg-white transition-colors hover:bg-[#F5F6F8] hero-cta-btn h-[48.3px] px-[29.4px] text-[14.7px]"
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                    whiteSpace: "nowrap",
                  }}
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
                    className="shrink-0 opacity-80 transition-transform group-hover:-translate-x-0.5"
                  >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                  Back to Homepage
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="order-1 lg:order-2 relative flex items-end justify-center lg:justify-end w-full py-0 lg:py-0 self-end hero-img-col">
              <div
                style={{
                  position: "relative",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  width: "100%",
                  maxWidth: "460px",
                  height: "clamp(400px, calc(100svh - 180px), 560px)",
                }}
              >
                <div
                  className="hero-name-badge select-none pointer-events-none hidden sm:block"
                  style={{
                    position: "absolute",
                    left: "-7%",
                    bottom: "14px",
                    zIndex: 25,
                    textAlign: "left",
                    filter: "drop-shadow(0 2px 4px rgba(14,34,63,0.15))",
                  }}
                >
                  <div
                    className="font-inter italic font-medium text-right"
                    style={{
                      fontSize: "23.2px",
                      lineHeight: "0.95",
                      color: "#0E223F",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    <span style={{ display: "block" }}>Isabelle</span>
                    <span style={{ display: "block", paddingLeft: "12px" }}>
                      Guertin
                    </span>
                  </div>
                  <div
                    className="font-inter text-[11px] tracking-[0.03em] font-medium text-[#4B5563] about-claims-adjuster"
                    style={{
                      marginTop: "5px",
                      paddingLeft: "0px",
                      marginLeft: "-3px",
                    }}
                  >
                    - claims adjuster
                  </div>
                </div>
                <img
                  src={portraitImage}
                  alt="Isabelle Guertin - Claims Advisory"
                  className="hero-portrait-img"
                  fetchPriority="high"
                  loading="eager"
                  style={{
                    userSelect: "none",
                    pointerEvents: "none",
                    position: "relative",
                    zIndex: 10,
                    width: "auto",
                    height: "100%",
                    maxHeight: "575px",
                    maxWidth: "440px",
                    objectFit: "contain",
                    objectPosition: "bottom",
                    filter: "none",
                  }}
                  draggable={false}
                />
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
