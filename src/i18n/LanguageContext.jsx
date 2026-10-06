import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { translations } from './translations';
import { HTML_LANG, alternatePath, getLangFromPath, localizePath } from '../seo/routing';

const LanguageContext = createContext();

/**
 * The language comes from the URL (/en/... = English, everything else = French),
 * so every language version has its own indexable URL. No localStorage: the same URL
 * must always render the same language for Google and for visitors.
 */
export const LanguageProvider = ({ children }) => {
  const { pathname } = useLocation();
  const language = getLangFromPath(pathname);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language];
  }, [language]);

  const value = useMemo(() => {
    const t = (key) => {
      const keys = key.split('.');
      let v = translations[language];
      for (const k of keys) {
        if (v && v[k] !== undefined) {
          v = v[k];
        } else {
          return key; // fallback to key if translation not found
        }
      }
      return v;
    };

    const otherLanguage = language === 'en' ? 'fr' : 'en';

    return {
      language,
      t,
      /** Localize an internal path for the current language: lp('/about') -> '/en/about' */
      lp: (path) => localizePath(path, language),
      otherLanguage,
      /** URL of the current page in the other language (for the EN | FR switch). */
      switchLanguagePath: alternatePath(pathname, otherLanguage),
    };
  }, [language, pathname]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components, react/only-export-components
export const useLanguage = () => useContext(LanguageContext);
