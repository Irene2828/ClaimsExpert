import { useLanguage } from '../i18n/LanguageContext';

export default function Process() {
  const { t } = useLanguage();

  const processSteps = [
    {
      n: "01",
      title: t('process.step1.title').replace(/^01 — /, ''),
      desc: t('process.step1.body'),
    },
    {
      n: "02",
      title: t('process.step2.title').replace(/^02 — /, ''),
      desc: t('process.step2.body'),
    },
    {
      n: "03",
      title: t('process.step3.title').replace(/^03 — /, ''),
      desc: t('process.step3.body'),
    },
  ];

  return (
    <section id="process" className="bg-[#E0F2FE] border-t border-[#0E223F]/[0.06]">
      <style>{`
        @media (max-width: 767px) {
          .process-step-title {
            margin-top: 48px !important;
          }
          .process-connector-line {
            padding-left: 28px;
            margin-top: 36px;
            margin-bottom: 16px;
          }
        }
      `}</style>
      <div className="max-w-[1336px] mx-auto px-8 lg:px-12 py-28 lg:py-36">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <span className="font-inter inline-flex items-center px-3.5 py-1 rounded-full bg-[#F5F6F8] text-[#0E223F] border border-[#0E223F]/10 text-[10.5px] tracking-[0.18em] uppercase font-medium">
            {t('process.eyebrow')}
          </span>
          <h2 className="font-inter italic font-light tracking-[-0.03em] leading-[1.05] text-[#0E223F] text-[36px] lg:text-[48px] mt-6 text-center">
            {t('process.headline')}
          </h2>
          <p className="font-inter text-[17px] lg:text-[18px] leading-[1.7] text-[#0E223F]/70 mt-6 mx-auto max-w-[60ch] text-center">
            {t('process.body')}
          </p>
        </div>
        <div className="relative mt-16 lg:mt-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto_1fr] gap-6 md:gap-y-0 md:gap-x-8 lg:gap-x-8 w-full relative z-10">
            {processSteps.map((step, index) => (
              <div key={step.n} className="flex flex-col md:grid md:grid-rows-subgrid md:row-span-3 text-left">
                <div className="flex items-center gap-4 md:gap-6 w-full">
                  <span className="font-inter not-italic font-normal text-[64px] lg:text-[80px] leading-none tracking-[-0.05em] text-[#0E223F]/60 select-none shrink-0">
                    {step.n}
                  </span>
                  <div className="hidden md:block h-px bg-[#0E223F]/15 flex-1" aria-hidden="true" />
                </div>
                <h3 className="process-step-title font-inter font-semibold text-[20px] lg:text-[22px] leading-[1.25] tracking-[-0.01em] text-[#0F172A] mt-12 md:mt-6">
                  {step.title}
                </h3>
                <p className="font-inter text-[15px] leading-[1.6] text-[#4B5563] text-left text-balance max-w-[32ch] mt-4 md:mt-3">
                  {step.desc}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="process-connector-line md:hidden flex" aria-hidden="true">
                    <div className="w-px h-12 bg-[#0E223F]/20" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
