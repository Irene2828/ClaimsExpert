import { useLanguage } from '../i18n/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  
  const card1Title = t('testimonials.card1Title');
  const card1Body = t('testimonials.card1Body');
  const card1Author = t('testimonials.card1Author');

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

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-[1280px] mx-auto items-stretch">
          {/* Card 1 (White Card) */}
          <div className="bg-white rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-6 border border-[#0E223F]/15 min-h-[360px] flex flex-col justify-between text-left relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col justify-between h-full w-full gap-2">
              <div className="flex items-center justify-between w-full mb-6">
                <p className="font-inter font-semibold text-[12px] tracking-[0.14em] uppercase" style={{ color: "#00ACC1" }}>
                  {t('testimonials.card1Badge')}
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-between py-3 gap-6">
                <h3 className="font-inter font-bold text-[17px] lg:text-[18.5px] leading-[1.35] tracking-[-0.02em] text-[#0E223F] mb-5 text-left">
                  {card1Title}
                </h3>
                <div className="w-full h-px bg-[#0E223F]/10 mb-5" />
                <div style={{ maxHeight: "116px", overflowY: "auto" }} className="testimonial-scrollbar pr-1">
                  <p
                    className="font-inter font-normal text-[14px] leading-[1.65] text-[#0E223F]/85 text-left whitespace-pre-line"
                    style={{ fontSize: "14px", lineHeight: "1.65" }}
                  >
                    {card1Body}
                  </p>
                </div>
              </div>
              <div className="testimonial-author-footer mt-auto flex justify-end items-center w-full text-right">
                <p className="font-inter font-medium text-[12px] tracking-[0.1em] uppercase text-[#0E223F]/50 text-right">
                  {card1Author}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 (Dark Blue Card) */}
          <div className="bg-[#0E223F] rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-6 relative overflow-hidden shadow-[0_24px_64px_rgba(14,34,63,0.14)] border border-white/15 min-h-[360px] flex flex-col justify-between text-left">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-white/[0.04] pointer-events-none" />
            <div className="relative flex flex-col justify-between h-full w-full z-10 gap-2">
              <div className="flex items-center justify-between w-full mb-6">
                <p className="font-inter font-semibold text-[12px] tracking-[0.14em] uppercase" style={{ color: "#00ACC1" }}>
                  {t('testimonials.card2Badge')}
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-between py-3 gap-6">
                <h3 className="font-inter font-bold text-[17px] lg:text-[18.5px] leading-[1.35] tracking-[-0.02em] text-white mb-5 text-left">
                  {card1Title}
                </h3>
                <div className="w-full h-px bg-white/15 mb-5" />
                <div style={{ maxHeight: "116px", overflowY: "auto" }} className="testimonial-scrollbar pr-1">
                  <p
                    className="font-inter font-normal text-[14px] leading-[1.65] text-white/80 text-left whitespace-pre-line"
                    style={{ fontSize: "14px", lineHeight: "1.65" }}
                  >
                    {card1Body}
                  </p>
                </div>
              </div>
              <div className="testimonial-author-footer is-dark mt-auto flex justify-end items-center w-full text-right">
                <p className="font-inter font-medium text-[12px] tracking-[0.1em] uppercase text-white/50 text-right">
                  {card1Author}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 (White Card) */}
          <div className="bg-white rounded-[24px] pt-10 px-7 sm:px-8 lg:px-9 pb-6 border border-[#0E223F]/15 min-h-[360px] flex flex-col justify-between text-left relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col justify-between h-full w-full gap-2">
              <div className="flex items-center justify-between w-full mb-6">
                <p className="font-inter font-semibold text-[12px] tracking-[0.14em] uppercase" style={{ color: "#00ACC1" }}>
                  {t('testimonials.card3Badge')}
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-between py-3 gap-6">
                <h3 className="font-inter font-bold text-[17px] lg:text-[18.5px] leading-[1.35] tracking-[-0.02em] text-[#0E223F] mb-5 text-left">
                  {card1Title}
                </h3>
                <div className="w-full h-px bg-[#0E223F]/10 mb-5" />
                <div style={{ maxHeight: "116px", overflowY: "auto" }} className="testimonial-scrollbar pr-1">
                  <p
                    className="font-inter font-normal text-[14px] leading-[1.65] text-[#0E223F]/85 text-left whitespace-pre-line"
                    style={{ fontSize: "14px", lineHeight: "1.65" }}
                  >
                    {card1Body}
                  </p>
                </div>
              </div>
              <div className="testimonial-author-footer mt-auto flex justify-end items-center w-full text-right">
                <p className="font-inter font-medium text-[12px] tracking-[0.1em] uppercase text-[#0E223F]/50 text-right">
                  {card1Author}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="h-2 w-8 rounded-full bg-[#0E223F]" />
          <span className="h-2 w-2 rounded-full bg-[#0E223F]/20" />
          <span className="h-2 w-2 rounded-full bg-[#0E223F]/20" />
        </div>
      </div>
    </section>
  );
}
