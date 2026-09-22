import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Approach() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const pauseUntilRef = useRef(0);
  const touchStartX = useRef(null);

  const R = [
    {
      n: "01",
      title: t('approach.card1Title'),
      desc: t('approach.card1Body'),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    },
    {
      n: "02",
      title: t('approach.card2Title'),
      desc: t('approach.card2Body'),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <path d="M12 3L4 7v6c0 4.418 3.582 8 8 8s8-3.582 8-8V7l-8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      n: "03",
      title: t('approach.card3Title'),
      desc: t('approach.card3Body'),
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5 19c0-3.5 3-6 7-6s7 2.5 7 6" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() < pauseUntilRef.current) return;
      setActiveTab((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleSelect = (idx) => {
    if (idx === activeTab) setActiveTab((idx + 1) % 3);
    else setActiveTab(idx);
    // eslint-disable-next-line react/purity
    pauseUntilRef.current = Date.now() + 6000;
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
      pauseUntilRef.current = Date.now() + 6000;
    }
    touchStartX.current = null;
  };

  return (
    <section id="approach" style={{ backgroundColor: "#F7F9FC", borderTop: "3px solid #CBD2DF" }}>
      <div className="max-w-[1336px] mx-auto px-8 lg:px-12 py-28 lg:py-36">
        <div className="w-full flex justify-start mb-8">
          <span className="font-inter inline-flex items-center px-3.5 py-1 rounded-full bg-[#E5E7EB] text-[#0E223F] border border-[#E5E7EB] text-[10.5px] tracking-[0.18em] uppercase font-medium">
            {t('approach.eyebrow')}
          </span>
        </div>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-28 order-1">
            <h2
              className="font-inter italic font-light tracking-[-0.03em] leading-[1.05] text-[#0E223F] text-[40px] lg:text-[48px]"
              style={{
                maxWidth: language === 'fr' ? '22ch' : '18ch',
                fontSize: language === 'fr' ? 'calc(clamp(40px, 4.5vw, 48px) * 0.94)' : undefined
              }}
            >
              {t('approach.headlinePart1')}
              <span style={{ color: "#64748B" }}>{t('approach.headlinePart2')}</span>
            </h2>
            <p
              className="font-inter font-normal text-[16px] leading-[1.68] text-[#4B5563] tracking-[0.01em] mt-6"
              style={{
                fontSize: "16px",
                lineHeight: "1.68",
                maxWidth: '52ch',
              }}
            >
              {t('approach.body1')}
              <span className="font-semibold text-[#0E223F]">{t('approach.body2')}</span>
            </p>
          </div>
          <div className="relative order-2 lg:sticky lg:top-28">
            <div className="relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <div className="relative min-h-[340px] sm:min-h-[360px] overflow-hidden">
                {R.map((z, B) => (
                  <div
                    key={z.n}
                    className={`absolute inset-0 will-change-transform ${activeTab === B ? "opacity-100 translate-y-0 scale-100" : B < activeTab ? "opacity-0 -translate-y-[20%] scale-95 pointer-events-none" : "opacity-0 translate-y-[30%] scale-95 pointer-events-none"}`}
                    style={{
                      transition: "transform 700ms cubic-bezier(0.25, 1, 0.5, 1), opacity 600ms ease-out",
                    }}
                  >
                    <div
                      onClick={() => handleSelect((activeTab + 1) % 3)}
                      className="rounded-[24px] p-6 lg:p-8 border border-[#0E223F]/15 shadow-none min-h-[320px] flex flex-col cursor-pointer"
                      style={{
                        background: "radial-gradient(ellipse 70% 60% at 10% 15%, rgba(218, 227, 238, 0.85) 0%, rgba(235, 241, 248, 0.55) 45%, #F5F6F8 80%)",
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-inter text-[11px] tracking-[0.16em] font-medium text-[#00ACC1]">
                          {z.n}
                        </span>
                        <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "#0E223F" }}>
                          {z.icon}
                        </div>
                      </div>
                      <h3 className="font-inter font-medium text-[19px] lg:text-[20px] leading-[1.3] tracking-[-0.01em] text-[#0E223F] mt-6">
                        {z.title}
                      </h3>
                      <div className="w-full h-px bg-[#0E223F]/10 my-5" />
                      <p className="font-inter text-[15px] leading-7 text-[#475569]">
                        {z.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2.5 mt-8">
                {R.map((z, B) => (
                  <button
                    key={B}
                    onClick={() => handleSelect(B)}
                    aria-label={`Go to ${B + 1}`}
                    className={`h-2 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeTab === B ? "w-8 bg-[#0E223F]" : "w-2 bg-[#0E223F]/20 hover:bg-[#0E223F]/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
