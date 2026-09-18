import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
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
              aria-label="Toggle language"
            >
              <span className={language === 'en' ? 'font-semibold text-[#0E223F]' : ''}>EN</span>
              <span className="mx-1">|</span>
              <span className={language === 'fr' ? 'font-semibold text-[#0E223F]' : ''}>FR</span>
            </button>
          </p>
        </div>
      </div>
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${isScrolled ? "bg-[#0E223F]/95 backdrop-blur-[14px] border-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]" : "bg-[#0E223F] border-white/10"}`}>
        <div className="max-w-[1336px] mx-auto px-8 lg:px-12 h-[72px] flex items-center justify-between relative">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-[10px] bg-white text-[#0E223F] font-inter font-medium text-[13px] flex items-center justify-center">
              G
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-inter text-[13px] font-semibold tracking-[0.18em] uppercase text-white leading-[1]">
                GUERTIN
              </span>
              <span className="font-inter text-[9.5px] tracking-[0.18em] uppercase text-white/55 leading-[1] mt-[3px]">
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
          <button
            aria-label="Menu"
            className="lg:hidden w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-[12px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-[16px] h-[12px] relative">
              <span className={`absolute left-0 w-full h-[1.5px] bg-white transition-all ${mobileMenuOpen ? "top-[5px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[5px] w-full h-[1.5px] bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 w-full h-[1.5px] bg-white transition-all ${mobileMenuOpen ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
            </div>
          </button>
        </div>
        <div className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-white/10 ${mobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
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
            <a
              href="tel:4387941044"
              onClick={() => setMobileMenuOpen(false)}
              className="font-inter mt-2 inline-flex w-fit items-center gap-[6px] bg-white/5 backdrop-blur-[12px] border border-white/15 rounded-full px-[18px] py-[9px] text-[13.65px] font-medium tracking-[-0.01em] text-white"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
              {t('nav.callMe')} 438-794-1044
            </a>
            
            <div className="flex items-center gap-2 mt-2 pt-4 border-t border-white/10">
              <button 
                onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }} 
                className="font-inter text-[13px] text-white/80 hover:text-white flex items-center focus:outline-none"
              >
                <span className={language === 'en' ? 'font-semibold text-white' : ''}>EN</span>
                <span className="mx-2">|</span>
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
