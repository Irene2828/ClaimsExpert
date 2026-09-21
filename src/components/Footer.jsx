import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative border-t border-white/10 overflow-hidden" style={{ backgroundColor: "#0B1B35" }}>
      <div className="relative max-w-[1336px] mx-auto px-8 lg:px-12 py-12 flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-inter text-[11px] tracking-[0.18em] text-white/60 uppercase">
            {t('footer.copyright')}
          </span>
        </div>
        <div className="flex gap-6 font-inter text-[12px] text-white/50 items-center">
          <span className="text-[#00ACC1] hover:text-[#00ACC1]/80 transition-colors cursor-default font-medium">
            {t('footer.cookies')}
          </span>
          <span className="text-[#00ACC1] hover:text-[#00ACC1]/80 transition-colors cursor-default font-medium">
            {t('footer.privacy')}
          </span>
          <span className="text-white/80">
            438 794-1044
          </span>
        </div>
      </div>
    </footer>
  );
}
