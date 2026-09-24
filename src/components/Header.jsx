import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger glass effect only when header actually sticks (after top banner scrolls away)
      const threshold = window.innerWidth >= 768 ? 36 : 0;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: t('nav.about'), isRouterLink: true },
    { href: "/#expertise", label: t('nav.expertise') },
    { href: "/#testimonials", label: t('nav.testimonials') },
    { href: "/#contact", label: t('nav.contact') }
  ];

  return (
    <>
      <div className="top-banner w-full bg-white border-b border-[#E5E7EB] hidden md:block">
        <div className="max-w-[1336px] mx-auto px-8 lg:px-12 h-[36px] flex items-center justify-end">
          <p className="font-inter text-[11px] tracking-[0.14em] text-[#0E223F]/70 uppercase font-normal top-bar-text-item flex items-center">
            {t('topBar.email')} <span className="mx-2 opacity-20">•</span> {t('topBar.region')} <span className="mx-2 opacity-20">•</span> 
            <button 
              onClick={toggleLanguage} 
              className="hover:text-[#0E223F] hover:font-medium transition-colors ml-1 focus:outline-none"
              aria-label={language === 'en' ? 'Passer au français' : 'Switch to English'}
            >
              <span className={language === 'en' ? 'font-semibold text-[#0E223F]' : ''}>EN</span>
              <span className="opacity-40" style={{ margin: '0 12.5px' }}>|</span>
              <span className={language === 'fr' ? 'font-semibold text-[#0E223F]' : ''}>FR</span>
            </button>
          </p>
        </div>
      </div>
      <style>{`
        @media (min-width: 1024px) {
          .site-header-override {
            position: relative !important;
            top: auto !important;
          }
        }
      `}</style>
      <header 
        className={`sticky top-0 site-header-override w-full transition-all duration-300 border-b ${isScrolled ? "border-white/10" : "bg-[#0E223F] border-white/10"}`}
        style={isScrolled ? { zIndex: 50, backgroundColor: 'rgba(14,34,63,0.95)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 32px rgba(14,34,63,0.35)' } : { zIndex: 50 }}
      >
        <div className="max-w-[1336px] mx-auto px-8 lg:px-12 h-[72px] flex items-center justify-between relative">
          <Link to="/" className="flex items-center group">
            <div className="flex flex-col justify-center">
              <span className="font-inter text-[13px] font-semibold tracking-[0.18em] uppercase text-white leading-none">
                GUERTIN
              </span>
              <span 
                className="font-inter text-[9.5px] tracking-[0.18em] uppercase text-white/55 leading-none"
                style={{ marginTop: '7.2px' }}
              >
                ISABELLE
              </span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-8" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            {navLinks.map((link) => (
              link.isRouterLink ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-inter text-[13.65px] lg:text-[14px] font-normal text-white/70 hover:text-white transition-colors tracking-[0.04em] header-nav-link"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-inter text-[13.65px] lg:text-[14px] font-normal text-white/70 hover:text-white transition-colors tracking-[0.04em] header-nav-link"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {/* Desktop CTA (100% untouched original) */}
            <div className="hidden lg:flex items-center">
              <a
                href="tel:4387941044"
                className="font-inter inline-flex items-center gap-[6px] bg-white/5 backdrop-blur-[12px] border border-white/15 rounded-full px-[18px] py-[9px] text-[13.65px] font-medium tracking-[-0.01em] text-white transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] header-cta-btn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
                {t('nav.callMe')} 438-794-1044
              </a>
            </div>

            {/* Mobile-only CTA (Icon + 'Call me' / 'Appelez-moi' text ONLY) */}
            <a
              href="tel:4387941044"
              className="lg:hidden font-inter inline-flex items-center justify-center gap-[6px] bg-white/5 backdrop-blur-[12px] border border-white/15 rounded-full h-10 px-[18px] sm:px-[20px] text-[13px] font-medium tracking-[-0.01em] text-white transition-all hover:bg-white/10 shrink-0"
              aria-label={t('nav.callMe')}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
              <span>{t('nav.callMe').replace(/[:\s]+$/, '')}</span>
            </a>

            <button
              aria-label={mobileMenuOpen ? (language === 'fr' ? 'Fermer le menu' : 'Close menu') : (language === 'fr' ? 'Ouvrir le menu' : 'Open menu')}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              className="lg:hidden w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-[12px] flex items-center justify-center shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-[16px] h-[12px] relative">
                <span className={`absolute left-0 w-full h-[1.5px] bg-white transition-all ${mobileMenuOpen ? "top-[5px] rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-[5px] w-full h-[1.5px] bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 w-full h-[1.5px] bg-white transition-all ${mobileMenuOpen ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
              </div>
            </button>
          </div>
        </div>
        <div id="mobile-nav" className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-white/10 ${mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-6 py-8 bg-[#0E223F] flex flex-col gap-6">
            {navLinks.map((link) => (
              link.isRouterLink ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-inter text-[16px] text-white/80 hover:text-white"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-inter text-[16px] text-white/80 hover:text-white"
                >
                  {link.label}
                </a>
              )
            ))}
            
            <div className="flex items-center gap-2 mt-2 pt-4 border-t border-white/10">
              <button 
                onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }} 
                className="font-inter text-[13px] text-white/80 hover:text-white flex items-center focus:outline-none py-1"
                aria-label={language === 'en' ? 'Passer au français' : 'Switch to English'}
              >
                <span className={language === 'en' ? 'font-semibold text-white' : ''}>EN</span>
                <span className="inline-block opacity-40" style={{ margin: '0 18px' }}>|</span>
                <span className={language === 'fr' ? 'font-semibold text-white' : ''}>FR</span>
              </button>
            </div>
            
            <p className="font-inter text-[11px] tracking-wide text-white/50 mt-1">
              438 794-1044 • {t('topBar.email').toLowerCase()}
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
