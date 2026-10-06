import { useLanguage } from '../i18n/LanguageContext';
import { Link } from 'react-router-dom';
import { BUSINESS, formatAddressLine } from '../seo/site';

export default function Footer() {
  const { t, lp } = useLanguage();
  return (
    <footer className="relative border-t border-white/10 overflow-hidden" style={{ backgroundColor: "#0B1B35" }}>
      <div className="relative max-w-[1336px] mx-auto px-8 lg:px-12 py-12 flex flex-col lg:flex-row gap-6 lg:items-center justify-between">
        <div className="flex flex-col gap-3">
          <span className="font-inter text-[11px] tracking-[0.18em] text-white/60 uppercase">
            {t('footer.copyright')}
          </span>
          {/* NAP (Name, Address, Phone) — must stay identical to the contact section and JSON-LD (src/seo/site.js) */}
          <address className="not-italic font-inter text-[12px] leading-[1.6] text-white/50">
            {BUSINESS.name} • {formatAddressLine()} •{' '}
            <a href={BUSINESS.phoneHref} className="text-white/80 hover:text-white transition-colors whitespace-nowrap">
              {BUSINESS.phoneDisplay}
            </a>{' '}
            •{' '}
            <a href={`mailto:${BUSINESS.email}`} className="text-white/80 hover:text-white transition-colors">
              {BUSINESS.email}
            </a>
          </address>
        </div>
        <div className="flex gap-6 font-inter text-[12px] text-white/50 items-center flex-wrap">
          <Link to={lp('/legal/complaints')} className="text-[#00ACC1] hover:text-[#00ACC1]/80 transition-colors font-medium">
            {t('footer.complaints')}
          </Link>
          <Link to={lp('/legal/cookies')} className="text-[#00ACC1] hover:text-[#00ACC1]/80 transition-colors font-medium">
            {t('footer.cookies')}
          </Link>
          <Link to={lp('/legal/privacy')} className="text-[#00ACC1] hover:text-[#00ACC1]/80 transition-colors font-medium">
            {t('footer.privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
