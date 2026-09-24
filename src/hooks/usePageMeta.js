import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function usePageMeta({ title, description, path = '' }) {
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Document title
    if (title) {
      document.title = title;
    }

    // 2. Meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    // 3. Canonical URL (Always points to this route's own canonical URL)
    const normalizedPath = path ? (path.startsWith('/') ? path : `/${path}`) : '';
    const fullCanonicalUrl = `https://rguertin.ca${normalizedPath || '/'}`;
    
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = fullCanonicalUrl;

    // 4. Open Graph attributes
    const setMetaProperty = (prop, content) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    if (title) setMetaProperty('og:title', title);
    if (description) setMetaProperty('og:description', description);
    setMetaProperty('og:url', fullCanonicalUrl);
    setMetaProperty('og:locale', language === 'fr' ? 'fr_CA' : 'en_CA');
    setMetaProperty('og:locale:alternate', language === 'fr' ? 'en_CA' : 'fr_CA');

    // 5. Twitter attributes
    const setMetaName = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    if (title) setMetaName('twitter:title', title);
    if (description) setMetaName('twitter:description', description);
  }, [title, description, path, language]);
}
