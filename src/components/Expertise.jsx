import React, { useState, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Expertise() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const touchStartX = useRef(null);

  const handleSelect = (idx) => {
    if (idx === activeTab) setActiveTab((idx + 1) % 3);
    else setActiveTab(idx);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff < 0) setActiveTab((prev) => (prev + 1) % 3);
      else setActiveTab((prev) => (prev - 1 + 3) % 3);
    }
    touchStartX.current = null;
  };

  const cardsData = [
    {
      id: 0,
      num: "01",
      titleKey: "expertise.card1.title",
      tagKey: "expertise.card1.tag",
      bodyKey: "expertise.card1.body",
      bulletKeys: ["expertise.card1.bullet1", "expertise.card1.bullet2", "expertise.card1.bullet3"],
      footerKey: "expertise.card1.footer",
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ACC1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="22" x2="21" y2="22" />
          <line x1="6" y1="18" x2="6" y2="11" />
          <line x1="10" y1="18" x2="10" y2="11" />
          <line x1="14" y1="18" x2="14" y2="11" />
          <line x1="18" y1="18" x2="18" y2="11" />
          <polygon points="12 2 20 7 4 7" />
        </svg>
      )
    },
    {
      id: 1,
      num: "02",
      titleKey: "expertise.card2.title",
      tagKey: "expertise.card2.tag",
      bodyKey: "expertise.card2.body",
      bulletKeys: ["expertise.card2.bullet1", "expertise.card2.bullet2", "expertise.card2.bullet3"],
      footerKey: "expertise.card2.footer",
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ACC1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M12 10c-1.5 0-3-.5-4-1v4c0 2.5 1.5 4.5 4 6 2.5-1.5 4-3.5 4-6v-4c-1 .5-2.5 1-4 1z" />
        </svg>
      )
    },
    {
      id: 2,
      num: "03",
      titleKey: "expertise.card3.title",
      tagKey: "expertise.card3.tag",
      bodyKey: "expertise.card3.body",
      bulletKeys: ["expertise.card3.bullet1", "expertise.card3.bullet2"],
      footerKey: null,
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ACC1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    }
  ];

  const getCardTitle = (card) => {
    if (card.id === 2) {
      if (language === 'fr') {
        return {
          line1: "Évaluation des dommages et",
          line2: "analyse technique"
        };
      }
      return {
        line1: "Damage Assessment &",
        line2: "Technical Analysis"
      };
    }
    if (card.id === 1 && language === 'fr') {
      return {
        line1: "Services d'expertise en sinistres",
        line2: "pour assurés"
      };
    }
    return {
      line1: t(card.titleKey),
      line2: null
    };
  };

  const renderDesktopCard = (card) => {
    const { line1, line2 } = getCardTitle(card);
    return (
      <div 
        key={card.id}
        className="exp-card backdrop-blur-[12px] border rounded-[24px] w-full min-w-0 flex flex-col justify-between h-full relative overflow-hidden cursor-default"
        style={{ paddingTop: '40px', paddingBottom: '40px', paddingLeft: '32px', paddingRight: '32px' }}
      >
        <div className="relative z-10">
          <div className="flex flex-col items-center w-full">
            <h3 className="c-title font-inter font-medium text-[19px] leading-[1.3] tracking-[-0.01em] text-center w-full">
              <span className="inline-flex items-center justify-center gap-3">
                <span className="shrink-0 flex items-center">
                  {card.svg}
                </span>
                <span>{line1}</span>
              </span>
              {line2 && (
                <span className="block text-center mt-0.5 leading-[1.1]">
                  {line2}
                </span>
              )}
            </h3>
            <p className="c-tag font-inter text-[11px] tracking-[0.16em] uppercase mt-2 font-medium text-center">
              {t(card.tagKey)}
            </p>
          </div>
          <div className="c-div w-full h-px my-5" />
          
          {(() => {
            const fullText = t(card.bodyKey);
            const colonIdx = fullText.lastIndexOf(':');
            if (colonIdx !== -1) {
              const sentenceStart = fullText.lastIndexOf('.', colonIdx);
              const splitIdx = sentenceStart !== -1 ? sentenceStart + 1 : 0;
              const mainText = fullText.slice(0, splitIdx);
              const highlightText = fullText.slice(splitIdx);
              return (
                <p className="c-body font-inter text-[15px] leading-[1.6] text-left">
                  {mainText}
                  <span className="c-body-highlight text-white font-medium">{highlightText}</span>
                </p>
              );
            }
            return (
              <p className="c-body font-inter text-[15px] leading-[1.6] text-left">
                {fullText}
              </p>
            );
          })()}
          
          <ul className="c-bullet mt-6 mb-6 pl-4 sm:pl-5 space-y-3.5 font-inter text-[15px] leading-[1.6] text-left italic">
            {card.bulletKeys.map((bk, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="c-bullet-dash font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                <span>{t(bk)}</span>
              </li>
            ))}
          </ul>
          
          {card.footerKey && (
            <p className="c-body font-inter text-[15px] leading-[1.6] text-left mt-6 mb-6">
              {t(card.footerKey)}
            </p>
          )}
        </div>
      </div>
    );
  };

  const renderMobileCard = (card) => {
    const { line1, line2 } = getCardTitle(card);
    return (
      <div 
        onClick={() => handleSelect((activeTab + 1) % 3)}
        className="exp-card backdrop-blur-[12px] border rounded-[24px] w-full h-full flex flex-col justify-between text-left relative overflow-hidden cursor-pointer"
        style={{ paddingTop: '36px', paddingBottom: '48px', paddingLeft: '28px', paddingRight: '28px' }}
      >
        <div className="relative z-10 flex flex-col justify-between h-full w-full">
          <div>
            <div className="flex flex-col items-center w-full">
              <h3 className="c-title font-inter font-medium text-[18px] leading-[1.3] tracking-[-0.01em] text-center w-full">
                <span className="inline-flex items-center justify-center gap-3">
                  <span className="shrink-0 flex items-center">
                    {card.svg}
                  </span>
                  <span>{line1}</span>
                </span>
                {line2 && (
                  <span className="block text-center mt-0.5 leading-[1.1]">
                    {line2}
                  </span>
                )}
              </h3>
              <p className="c-tag font-inter text-[11px] tracking-[0.16em] uppercase mt-2 font-medium text-center">
                {t(card.tagKey)}
              </p>
            </div>
            <div className="c-div w-full h-px my-5" />
          
          {(() => {
            const fullText = t(card.bodyKey);
            const colonIdx = fullText.lastIndexOf(':');
            if (colonIdx !== -1) {
              const sentenceStart = fullText.lastIndexOf('.', colonIdx);
              const splitIdx = sentenceStart !== -1 ? sentenceStart + 1 : 0;
              const mainText = fullText.slice(0, splitIdx);
              const highlightText = fullText.slice(splitIdx);
              return (
                <p className="c-body font-inter text-[14.5px] leading-[1.65] text-left">
                  {mainText}
                  <span className="c-body-highlight text-white font-medium">{highlightText}</span>
                </p>
              );
            }
            return (
              <p className="c-body font-inter text-[14.5px] leading-[1.65] text-left">
                {fullText}
              </p>
            );
          })()}
          
          {/* Normal spacing above and below bullet list */}
          <ul className="c-bullet mt-6 mb-6 pl-4 space-y-3.5 font-inter text-[14.5px] leading-[1.65] text-left italic">
            {card.bulletKeys.map((bk, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="c-bullet-dash font-bold text-base leading-none select-none shrink-0 mt-0.5 not-italic">–</span>
                <span>{t(bk)}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {card.footerKey && (
          <p className="c-body font-inter text-[14.5px] leading-[1.65] text-left mb-2 pr-12">
            {t(card.footerKey)}
          </p>
        )}
      </div>

      {/* 1/3, 2/3, 3/3 in prominent off-white on bottom right */}
      <div 
        className="absolute bottom-6 right-7 font-inter font-semibold text-[13px] tracking-[0.16em] select-none z-30 pointer-events-none"
        style={{ color: '#F5F6F8' }}
      >
        {card.id + 1}/3
      </div>
    </div>
  );
};

  return (
    <section id="expertise" className="bg-[#0E223F] relative overflow-hidden">
      <style>{`
        .expertise-carousel-stack {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          align-items: stretch;
        }
        .expertise-carousel-slide {
          grid-column: 1 / -1;
          grid-row: 1 / -1;
          width: 100%;
          height: 100%;
        }

        .exp-card {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          position: relative;
          z-index: 1;
          transform: translateY(0);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0);
          transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1),
                      box-shadow 0.55s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.55s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow;
          isolation: isolate;
        }

        .exp-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 10% 15%, rgba(218, 227, 238, 0.95) 0%, rgba(235, 241, 248, 0.85) 45%, #F5F6F8 80%);
          opacity: 0;
          transition: opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          will-change: opacity;
          transform: translateZ(0);
        }

        .exp-card .c-title {
          color: #ffffff;
          transition: color 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .exp-card .c-tag {
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .exp-card .c-div {
          background-color: rgba(255, 255, 255, 0.1);
          transition: background-color 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .exp-card .c-body {
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .exp-card .c-body-highlight {
          color: #ffffff;
          transition: color 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .exp-card .c-bullet {
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .exp-card .c-bullet-dash {
          color: #00ACC1;
          transition: color 0.55s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (min-width: 768px) {
          .exp-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.35);
            border-color: rgba(14, 34, 63, 0.14);
            z-index: 10;
          }
          .exp-card:hover::before {
            opacity: 1;
          }
          .exp-card:hover .c-title {
            color: #0E223F;
          }
          .exp-card:hover .c-tag {
            color: rgba(14, 34, 63, 0.55);
          }
          .exp-card:hover .c-div {
            background-color: rgba(14, 34, 63, 0.12);
          }
          .exp-card:hover .c-body {
            color: #475569;
          }
          .exp-card:hover .c-body-highlight {
            color: #0E223F !important;
          }
          .exp-card:hover .c-bullet {
            color: #475569;
          }
          .exp-card:hover .c-bullet-dash {
            color: rgba(14, 34, 63, 0.45);
          }
        }

        /* Responsive Toggles */
        .mobile-carousel { display: block; }
        .desktop-grid { display: none; }
        
        @media (min-width: 768px) {
          .mobile-carousel { display: none !important; }
          .desktop-grid { display: grid !important; }
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
      <div className="w-full max-w-[1336px] mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-36 relative">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-inter inline-flex items-center px-3.5 py-1 rounded-full bg-[#F5F6F8] text-[#0E223F] border border-transparent text-[10.5px] tracking-[0.18em] uppercase font-medium">
            {t('expertise.eyebrow')}
          </span>
          <h2 className="font-inter italic font-light tracking-[-0.03em] leading-[1.05] text-white text-[36px] lg:text-[52px] mt-6">
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

        {/* MOBILE CAROUSEL */}
        <div className="mobile-carousel w-full max-w-[560px] mx-auto mt-12 sm:mt-16">
          <div className="relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="expertise-carousel-stack relative overflow-hidden">
              {cardsData.map((card, B) => {
                const isActive = activeTab === B;
                const isPast = B < activeTab;
                
                let transformValue = "translateX(0) scale(1)";
                let opacityValue = 1;
                
                if (!isActive) {
                  transformValue = isPast ? "translateX(-25%) scale(0.96)" : "translateX(25%) scale(0.96)";
                  opacityValue = 0;
                }
                
                return (
                  <div
                    key={card.id}
                    className={`expertise-carousel-slide will-change-transform ${isActive ? "pointer-events-auto z-10" : "pointer-events-none z-0"}`}
                    style={{
                      transform: transformValue,
                      opacity: opacityValue,
                      transition: "transform 500ms cubic-bezier(0.25, 1, 0.5, 1), opacity 400ms ease-out",
                    }}
                  >
                    {renderMobileCard(card)}
                  </div>
                );
              })}
            </div>

            {/* Mobile Pagination Dots */}
            <div className="flex items-center justify-center gap-2.5 mt-8">
              {cardsData.map((_, B) => (
                <button
                  key={B}
                  onClick={() => handleSelect(B)}
                  aria-label={`Go to card ${B + 1}`}
                  className={`h-2 rounded-full shrink-0 border-0 p-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeTab === B ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"}`}
                  style={{
                    backgroundColor: activeTab === B ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="desktop-grid mt-16 lg:mt-20 grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 w-full max-w-full min-w-0 items-stretch">
          {cardsData.map(card => renderDesktopCard(card))}
        </div>

      </div>
    </section>
  );
}
