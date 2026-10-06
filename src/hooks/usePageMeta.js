import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageMeta } from '../seo/pages';
import { OG_LOCALE } from '../seo/routing';

/**
 * Keeps <head> in sync during client-side navigation.
 * The initial HTML of every URL is already complete (prerendered at build time by
 * scripts/prerender.mjs from the same data in src/seo/pages.js), so crawlers that
 * don't execute JavaScript still see the right title, description, canonical & hreflang.
 */
export default function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);

    const upsert = (selector, create, apply) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = create();
        document.head.appendChild(el);
      }
      apply(el);
    };
    const remove = (selector) => document.head.querySelectorAll(selector).forEach((el) => el.remove());

    const setMetaName = (name, content) =>
      upsert(`meta[name="${name}"]`, () => Object.assign(document.createElement('meta'), { name }), (el) => (el.content = content));
    const setMetaProp = (prop, content) =>
      upsert(
        `meta[property="${prop}"]`,
        () => {
          const el = document.createElement('meta');
          el.setAttribute('property', prop);
          return el;
        },
        (el) => (el.content = content)
      );
    const setLink = (selector, attrs) =>
      upsert(
        selector,
        () => document.createElement('link'),
        (el) => Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
      );

    document.title = meta.title;
    setMetaName('description', meta.description);
    setMetaProp('og:title', meta.title);
    setMetaProp('og:description', meta.description);
    setMetaProp('og:locale', OG_LOCALE[meta.lang]);
    setMetaProp('og:locale:alternate', OG_LOCALE[meta.lang === 'fr' ? 'en' : 'fr']);
    setMetaName('twitter:title', meta.title);
    setMetaName('twitter:description', meta.description);

    if (meta.noindex) {
      setMetaName('robots', 'noindex');
      remove('link[rel="canonical"], link[rel="alternate"][hreflang]');
      return;
    }

    remove('meta[name="robots"]');
    setLink('link[rel="canonical"]', { rel: 'canonical', href: meta.canonical });
    setLink('link[rel="alternate"][hreflang="fr-CA"]', { rel: 'alternate', hreflang: 'fr-CA', href: meta.alternates.fr });
    setLink('link[rel="alternate"][hreflang="en-CA"]', { rel: 'alternate', hreflang: 'en-CA', href: meta.alternates.en });
    setLink('link[rel="alternate"][hreflang="x-default"]', { rel: 'alternate', hreflang: 'x-default', href: meta.xDefault });
    setMetaProp('og:url', meta.canonical);
  }, [pathname]);
}
