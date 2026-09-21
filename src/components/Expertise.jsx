import { useLanguage } from '../i18n/LanguageContext';

export default function Expertise() {
  const { t, language } = useLanguage();
  return (
    <section id="expertise" className="bg-[#0E223F] relative overflow-hidden">
      <style>{`
        .exp-card {
          --c-border: rgba(255, 255, 255, 0.15);
          --c-title: #ffffff;
          --c-tag: rgba(255, 255, 255, 0.5);
          --c-div: rgba(255, 255, 255, 0.1);
          --c-body: rgba(255, 255, 255, 0.8);
          --c-bullet: rgba(255, 255, 255, 0.5);
          
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--c-border);
          transition: border-color 0.4s ease;
        }

        .exp-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 10% 15%, rgba(218, 227, 238, 0.95) 0%, rgba(235, 241, 248, 0.85) 45%, #F5F6F8 80%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .exp-card .c-title { color: var(--c-title); transition: color 0.4s ease; }
        .exp-card .c-tag { color: var(--c-tag); transition: color 0.4s ease; }
        .exp-card .c-div { background-color: var(--c-div); transition: background-color 0.4s ease; }
        .exp-card .c-body { color: var(--c-body); transition: color 0.4s ease; }
        .exp-card .c-bullet { color: var(--c-bullet); transition: color 0.4s ease; }
        .exp-card .c-bullet-dash { color: var(--c-bullet); transition: color 0.4s ease; }

        @media (min-width: 1024px) {
          .exp-card:hover::before { opacity: 1; }
          .exp-card:hover {
            --c-border: rgba(14, 34, 63, 0.15);
            --c-title: #0E223F;
            --c-tag: #00ACC1;
            --c-div: rgba(14, 34, 63, 0.1);
            --c-body: #475569;
            --c-bullet: #475569;
          }
          .exp-card:hover .c-bullet-dash { color: rgba(14, 34, 63, 0.3); }
        }

        @media (max-width: 1023px) {
          .exp-card.mobile-light::before { opacity: 1; }
          .exp-card.mobile-light {
            --c-border: rgba(14, 34, 63, 0.15);
            --c-title: #0E223F;
            --c-tag: #00ACC1;
            --c-div: rgba(14, 34, 63, 0.1);
            --c-body: #475569;
            --c-bullet: #475569;
          }
          .exp-card.mobile-light .c-bullet-dash { color: rgba(14, 34, 63, 0.3); }
        }
      `}</style>
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-white/[0.04] pointer-events-none" />
      <div className="w-full max-w-[1336px] mx-auto px-8 lg:px-12 py-28 lg:py-36 relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-inter inline-flex items-center px-3.5 py-1 rounded-full bg-[#F5F6F8] text-[#0E223F] border border-transparent text-[10.5px] tracking-[0.18em] uppercase font-medium">
            {t('expertise.eyebrow')}
          </span>
          <h2 className="font-inter italic font-light tracking-[-0.03em] leading-[1.1] text-white text-[32px] md:text-[40px] lg:text-[44px] mt-8">
            {t('expertise.headline')}
          </h2>
          <p
            className="font-inter text-[17px] lg:text-[18px] leading-[1.7] text-white/70 mt-6 mx-auto"
            style={{ maxWidth: language === 'en' ? '68ch' : '60ch' }}
          >
            {t('expertise.body1')}
            <span className="text-white font-normal">{t('expertise.body2')}</span>
          </p>
        </div>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 w-full max-w-full min-w-0 items-stretch">
          
          {/* Card 1 — Municipal Civil Liability */}
          <div 
            className="exp-card backdrop-blur-[12px] border rounded-[24px] w-full min-w-0 flex flex-col justify-between h-full relative overflow-hidden cursor-default"
            style={{ paddingTop: '40px', paddingBottom: '40px', paddingLeft: '32px', paddingRight: '32px' }}
          >
            <div className="relative z-10">
              <div className="flex flex-col items-center w-full">
                <div className="flex items-start justify-center gap-3">
                  <div className="shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ACC1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="3" y1="22" x2="21" y2="22" />
                      <line x1="6" y1="18" x2="6" y2="11" />
                      <line x1="10" y1="18" x2="10" y2="11" />
                      <line x1="14" y1="18" x2="14" y2="11" />
                      <line x1="18" y1="18" x2="18" y2="11" />
                      <polygon points="12 2 20 7 4 7" />
                    </svg>
                  </div>
                  <h3 className="c-title font-inter font-medium text-[19px] leading-[1.3] tracking-[-0.01em] text-center max-w-[260px]">
                    {t('expertise.card1.title')}
                  </h3>
                </div>
                <p className="c-tag font-inter text-[11px] tracking-[0.16em] uppercase mt-2 font-medium text-center">
                  {t('expertise.card1.tag')}
                </p>
              </div>
              <div className="c-div w-full h-px my-5" />
              
              <p className="c-body font-inter text-[15px] leading-[1.6] text-left">
                {t('expertise.card1.body')}
              </p>
              
              <ul className="c-bullet mt-6 mb-6 pl-4 sm:pl-5 space-y-3.5 font-inter text-[15px] leading-[1.6] text-left italic">
                <li className="flex items-start gap-2.5">
                  <span className="c-bullet-dash font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>{t('expertise.card1.bullet1')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="c-bullet-dash font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>{t('expertise.card1.bullet2')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="c-bullet-dash font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>{t('expertise.card1.bullet3')}</span>
                </li>
              </ul>
              
              <p className="c-body font-inter text-[15px] leading-[1.6] text-left mt-6 mb-6">
                {t('expertise.card1.footer')}
              </p>
            </div>
          </div>

          {/* Card 2 — Public Adjuster Services */}
          <div 
            className="exp-card mobile-light backdrop-blur-[12px] border rounded-[24px] w-full min-w-0 flex flex-col justify-between h-full relative overflow-hidden cursor-default"
            style={{ paddingTop: '40px', paddingBottom: '40px', paddingLeft: '32px', paddingRight: '32px' }}
          >
            <div className="relative z-10">
              <div className="flex flex-col items-center w-full">
                <div className="flex items-start justify-center gap-3">
                  <div className="shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ACC1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <path d="M12 10c-1.5 0-3-.5-4-1v4c0 2.5 1.5 4.5 4 6 2.5-1.5 4-3.5 4-6v-4c-1 .5-2.5 1-4 1z" />
                    </svg>
                  </div>
                  <h3 className="c-title font-inter font-medium text-[19px] leading-[1.3] tracking-[-0.01em] text-center max-w-[260px]">
                    {t('expertise.card2.title')}
                  </h3>
                </div>
                <p className="c-tag font-inter text-[11px] tracking-[0.16em] uppercase mt-2 font-medium text-center">
                  {t('expertise.card2.tag')}
                </p>
              </div>
              <div className="c-div w-full h-px my-5" />

              <p className="c-body font-inter text-[15px] leading-[1.6] text-left">
                {t('expertise.card2.body')}
              </p>
              
              <ul className="c-bullet mt-6 mb-6 pl-4 sm:pl-5 space-y-3.5 font-inter text-[15px] leading-[1.6] text-left italic">
                <li className="flex items-start gap-2.5">
                  <span className="c-bullet-dash font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>{t('expertise.card2.bullet1')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="c-bullet-dash font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>{t('expertise.card2.bullet2')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="c-bullet-dash font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>{t('expertise.card2.bullet3')}</span>
                </li>
              </ul>
              
              <p className="c-body font-inter text-[15px] leading-[1.6] text-left mt-6 mb-6">
                {t('expertise.card2.footer')}
              </p>
            </div>
          </div>

          {/* Card 3 — Damage Assessment & Technical Analysis */}
          <div 
            className="exp-card backdrop-blur-[12px] border rounded-[24px] w-full min-w-0 flex flex-col justify-between h-full relative overflow-hidden cursor-default"
            style={{ paddingTop: '40px', paddingBottom: '40px', paddingLeft: '32px', paddingRight: '32px' }}
          >
            <div className="relative z-10">
              <div className="flex flex-col items-center w-full">
                <div className="flex items-start justify-center gap-3">
                  <div className="shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ACC1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <h3 className="c-title font-inter font-medium text-[19px] leading-[1.3] tracking-[-0.01em] text-center max-w-[210px]">
                    {t('expertise.card3.title')}
                  </h3>
                </div>
                <p className="c-tag font-inter text-[11px] tracking-[0.16em] uppercase mt-2 font-medium text-center">
                  {t('expertise.card3.tag')}
                </p>
              </div>
              <div className="c-div w-full h-px my-5" />

              <p className="c-body font-inter text-[15px] leading-[1.6] text-left">
                {t('expertise.card3.body')}
              </p>
              
              <ul className="c-bullet mt-6 mb-6 pl-4 sm:pl-5 space-y-3.5 font-inter text-[15px] leading-[1.6] text-left italic">
                <li className="flex items-start gap-2.5">
                  <span className="c-bullet-dash font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>{t('expertise.card3.bullet1')}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="c-bullet-dash font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                  <span>{t('expertise.card3.bullet2')}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
