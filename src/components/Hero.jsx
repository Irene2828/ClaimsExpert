import portraitImage from '../assets/isabelle-portrait-opt.webp';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const primaryColor = '#0E223F';
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-[calc(100svh-108px)] flex items-center lg:items-end overflow-hidden relative pt-10 pb-0 lg:pt-14 lg:pb-0"
      style={{
        paddingBottom: "0px",
        background:
          "radial-gradient(ellipse 75% 65% at 0% 0%, rgba(210, 222, 236, 0.92) 0%, rgba(218, 227, 238, 0.45) 45%, transparent 75%), radial-gradient(ellipse 55% 55% at 85% 20%, #FFFFFF 0%, rgba(255, 255, 255, 0.4) 55%, transparent 80%), #F2F5FA",
      }}
    >
      <div className="max-w-[1336px] mx-auto px-8 lg:px-12 w-full relative">
        {/* Mobile-only Eyebrow (above image on mobile < 768px) */}
        <div className="hero-eyebrow-mobile flex justify-center w-full pt-0 pb-3">
          <span className="font-inter text-[10.5px] tracking-[0.2em] uppercase text-[#0E223F]/70 font-medium hero-tag-line text-center">
            {t('hero.eyebrow')}
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-8 items-start pt-6 pb-0 lg:pt-10 lg:pb-0 relative">
          {/* Left Column (100% original desktop layout) */}
          <div className="order-2 lg:order-1 relative z-10 flex flex-col justify-start self-start mt-6 lg:mt-16 pb-4 lg:pb-0 hero-left-col">
            <div className="hero-eyebrow-desktop inline-flex items-center">
              <span className="font-inter text-[11px] tracking-[0.22em] uppercase text-[#0E223F]/60 font-medium hero-tag-line">
                {t('hero.eyebrow')}
              </span>
            </div>
            <h1
              className="mt-4 font-inter text-[#1E3358]"
              style={{
                fontSize: "clamp(34px, 4.2vw, 58px)",
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
                {t('hero.headlinePart1')}
              </div>
              <div
                className="block sm:whitespace-nowrap mt-[0.05em]"
                style={{
                  fontWeight: "200",
                  fontStyle: "italic",
                  lineHeight: "1.08",
                  letterSpacing: "-0.05em",
                  color: "#64748B",
                }}
              >
                {t('hero.headlinePart2')}
              </div>
            </h1>
            <p
              className="font-inter font-normal text-[16px] leading-[1.68] text-[#4B5563] tracking-[0.01em] mt-6 max-w-[52ch] hero-subline"
              style={{ fontSize: "16px", lineHeight: "1.68" }}
            >
              {t('hero.body')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 hero-ctas-wrapper">
              <a
                href="#contact"
                className="font-inter inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide text-white hover:brightness-110 transition-all hover:shadow-[0_10px_30px_rgba(14,34,63,0.18)] hero-cta-btn h-[48.3px] px-[29.4px] text-[14.7px]"
                style={{
                  backgroundColor: primaryColor,
                  whiteSpace: "nowrap",
                }}
              >
                {t('hero.bookBtn')}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 opacity-90 transition-transform group-hover:scale-110"
                >
                  <path d="M8 2v4M16 2v4" />
                  <rect x="3" y="4" width="18" height="18" rx="3" />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
                </svg>
              </a>
              <a
                href="#approach"
                className="font-inter group inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-wide border bg-white transition-colors hover:bg-[#F5F6F8] hero-cta-btn h-[48.3px] px-[29.4px] text-[14.7px]"
                style={{
                  borderColor: primaryColor,
                  color: primaryColor,
                  whiteSpace: "nowrap",
                }}
              >
                {t('hero.howIWorkBtn')}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 opacity-80 transition-transform group-hover:translate-y-0.5"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </a>
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
              {/* Name & Title Badge (adjusted position) */}
              <div
                className="hero-name-badge select-none pointer-events-none hidden sm:block"
                style={{
                  position: "absolute",
                  right: "5%",
                  top: "22%",
                  zIndex: 25,
                  textAlign: "right",
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
                  }}
                >
                  {t('hero.bioCaption').replace('Isabelle Guertin', '').trim()}
                </div>
              </div>

              {/* Quote Card (moved to bottom-left of portrait) */}
              <div className="hero-quote-card flex items-start gap-2.5 select-none">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#00ACC1"
                  className="shrink-0 mt-0.5 opacity-90"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p>
                  {t('hero.quote').replace(/^["«]\s*|\s*["»]$/g, '')}
                </p>
              </div>

              <img
                src={portraitImage}
                alt="Isabelle Guertin - Claims Advisory"
                className="hero-portrait-img transform"
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
  );
}
