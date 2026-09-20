import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const pauseUntilRef = useRef(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      // Disable autoloop on mobile screens (< 768px)
      if (window.innerWidth < 768) return;
      if (Date.now() < pauseUntilRef.current) return;
      setActiveTab((prev) => (prev + 1) % 3);
    }, 6000); // 6 seconds auto-loop on desktop only
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (idx) => {
    if (idx === activeTab) setActiveTab((idx + 1) % 3);
    else setActiveTab(idx);
    pauseUntilRef.current = Date.now() + 10000; // pause for 10s if user clicks
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
      pauseUntilRef.current = Date.now() + 10000; // pause for 10s if user swipes
    }
    touchStartX.current = null;
  };

  const testimonials = [
    {
      id: 1,
      badge: t('testimonials.card1Badge'),
      title: t('testimonials.card1Title'),
      body: t('testimonials.card1Body'),
      author: t('testimonials.card1Author'),
      isDark: false,
    },
    {
      id: 2,
      badge: t('testimonials.card2Badge'),
      title: t('testimonials.card2Title'),
      body: t('testimonials.card2Body'),
      author: t('testimonials.card2Author'),
      isDark: true,
    },
    {
      id: 3,
      badge: t('testimonials.card3Badge'),
      title: t('testimonials.card3Title'),
      body: t('testimonials.card3Body'),
      author: t('testimonials.card3Author'),
      isDark: false,
    },
  ];

  return (
    <section id="testimonials" className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-[1336px] mx-auto px-8 lg:px-12 py-24 lg:py-28 flex flex-col items-center">
        <div className="w-full flex flex-col items-center text-center mb-12 lg:mb-16">
          <span className="font-inter inline-flex items-center px-3.5 py-1 rounded-full bg-[#E5E7EB] text-[#0E223F] border border-[#E5E7EB] text-[10.5px] tracking-[0.18em] uppercase font-medium">
            {t('testimonials.eyebrow')}
          </span>
          <h2 className="font-inter italic font-light tracking-[-0.03em] leading-[1.05] text-[#0E223F] text-[32px] lg:text-[44px] mt-6 max-w-[24ch] mx-auto text-center">
            {t('testimonials.headline')}
          </h2>
        </div>

        <style>{`
          .testimonial-carousel-container {
            min-height: 640px;
          }
          @media (min-width: 640px) {
            .testimonial-carousel-container {
              min-height: 580px;
            }
          }
          
          /* Responsive Toggles */
          .mobile-carousel {
            display: block;
          }
          .desktop-grid {
            display: none;
          }
          
          @media (min-width: 768px) {
            .mobile-carousel {
              display: none !important;
            }
            .desktop-grid {
              display: grid !important;
            }
          }
        `}</style>
        
        {/* MOBILE CAROUSEL (< md) */}
        <div className="mobile-carousel w-full max-w-[800px] mx-auto">
          <div className="relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="relative testimonial-carousel-container overflow-hidden">
              {testimonials.map((card, B) => {
                const isActive = activeTab === B;
                const isPast = B < activeTab;
                
                let transformValue = "translateX(0) scale(1)";
                let opacityValue = 1;
                
                if (!isActive) {
                  transformValue = isPast ? "translateX(-20%) scale(0.95)" : "translateX(20%) scale(0.95)";
                  opacityValue = 0;
                }
                
                return (
                  <div
                    key={card.id}
                    className={`absolute inset-0 will-change-transform ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
                    style={{
                      transform: transformValue,
                      opacity: opacityValue,
                      transition: "transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 600ms ease-out",
                    }}
                  >
                  <div
                    onClick={() => handleSelect((activeTab + 1) % 3)}
                    className={`${card.isDark ? "bg-[#0E223F] border-white/15 shadow-[0_24px_64px_rgba(14,34,63,0.14)]" : "bg-white border-[#0E223F]/15 shadow-sm"} rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-6 border h-full flex flex-col justify-between text-left relative overflow-hidden cursor-pointer`}
                  >
                    {card.isDark && (
                      <>
                        <div
                          className="absolute inset-0 opacity-[0.06]"
                          style={{
                            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                            backgroundSize: "28px 28px",
                          }}
                        />
                        <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-white/[0.04] pointer-events-none" />
                      </>
                    )}
                    
                    <div className="relative flex flex-col justify-between h-full w-full z-10 gap-2">
                      <div className="flex items-center justify-between w-full mb-6">
                        <p className="font-inter font-semibold text-[12px] tracking-[0.14em] uppercase" style={{ color: "#00ACC1" }}>
                          {card.badge}
                        </p>
                      </div>
                      <div className="flex-1 flex flex-col justify-start py-3 gap-6">
                        <h3 className={`font-inter font-bold text-[17px] lg:text-[18.5px] leading-[1.35] tracking-[-0.02em] ${card.isDark ? "text-white" : "text-[#0E223F]"} mb-5 text-left`}>
                          {card.title}
                        </h3>
                        <div className={`w-full h-px ${card.isDark ? "bg-white/15" : "bg-[#0E223F]/10"} mb-5`} />
                        <div style={{ maxHeight: "280px", overflowY: "auto" }} className="testimonial-scrollbar pr-1">
                          <p
                            className={`font-inter font-normal text-[14px] leading-[1.65] ${card.isDark ? "text-white/80" : "text-[#0E223F]/85"} text-left whitespace-pre-line`}
                            style={{ fontSize: "14px", lineHeight: "1.65" }}
                          >
                            {card.body}
                          </p>
                        </div>
                      </div>
                      <div className={`testimonial-author-footer ${card.isDark ? "is-dark" : ""} mt-auto flex justify-end items-center w-full text-right pt-4`}>
                        <p className={`font-inter font-medium text-[12px] tracking-[0.1em] uppercase ${card.isDark ? "text-white/50" : "text-[#0E223F]/50"} text-right`}>
                          {card.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
            
            <div className="flex items-center justify-center gap-2.5 mt-8">
              {testimonials.map((_, B) => (
                <button
                  key={B}
                  onClick={() => handleSelect(B)}
                  aria-label={`Go to testimonial ${B + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeTab === B ? "w-8 bg-[#0E223F]" : "w-2 bg-[#0E223F]/20 hover:bg-[#0E223F]/30"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP GRID (>= md) */}
        <div className="desktop-grid w-full grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1280px] mx-auto items-stretch">
          {testimonials.map((card) => (
            <div
              key={card.id}
              className={`${card.isDark ? "bg-[#0E223F] border-white/15 shadow-[0_24px_64px_rgba(14,34,63,0.14)]" : "bg-white border-[#0E223F]/15 shadow-sm hover:shadow-md transition-all duration-300"} rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-6 border min-h-[360px] flex flex-col justify-between text-left relative overflow-hidden`}
            >
              {card.isDark && (
                <>
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                  <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-white/[0.04] pointer-events-none" />
                </>
              )}
              
              <div className="relative flex flex-col justify-between h-full w-full z-10 gap-2">
                <div className="flex items-center justify-between w-full mb-6">
                  <p className="font-inter font-semibold text-[12px] tracking-[0.14em] uppercase" style={{ color: "#00ACC1" }}>
                    {card.badge}
                  </p>
                </div>
                <div className="flex-1 flex flex-col justify-between py-3 gap-6">
                  <h3 className={`font-inter font-bold text-[17px] lg:text-[18.5px] leading-[1.35] tracking-[-0.02em] ${card.isDark ? "text-white" : "text-[#0E223F]"} mb-5 text-left`}>
                    {card.title}
                  </h3>
                  <div className={`w-full h-px ${card.isDark ? "bg-white/15" : "bg-[#0E223F]/10"} mb-5`} />
                  <div style={{ maxHeight: "116px", overflowY: "auto" }} className="testimonial-scrollbar pr-1">
                    <p
                      className={`font-inter font-normal text-[14px] leading-[1.65] ${card.isDark ? "text-white/80" : "text-[#0E223F]/85"} text-left whitespace-pre-line`}
                      style={{ fontSize: "14px", lineHeight: "1.65" }}
                    >
                      {card.body}
                    </p>
                  </div>
                </div>
                <div className={`testimonial-author-footer ${card.isDark ? "is-dark" : ""} mt-auto flex justify-end items-center w-full text-right pt-4`}>
                  <p className={`font-inter font-medium text-[12px] tracking-[0.1em] uppercase ${card.isDark ? "text-white/50" : "text-[#0E223F]/50"} text-right`}>
                    {card.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
