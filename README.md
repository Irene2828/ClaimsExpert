# R. Guertin & Associés

Official website for **Isabelle Guertin**, Independent Claims Adjuster (*expert en sinistre indépendant*) serving Greater Montréal, the Rive-Sud (Longueuil, Brossard) and the Province of Québec.

---

## 🏛 Practice Overview

- **Firm**: R. Guertin & Associés (one name everywhere, FR + EN)
- **Principal Adjuster**: Isabelle Guertin (Practice leadership following Roy Guertin's retirement in 2026; founded in 2014)
- **Specializations**:
  - Municipal Civil Liability (*Responsabilité civile municipale*)
  - Public Adjusting Services for Policyholders (*Services d'expertise en sinistres pour assurés*)
  - Damage Assessment & Technical Analysis (*Évaluation des dommages et analyse technique*)
- **Territory**: Greater Montréal & Province of Québec
- **Contact**: `reclamations@rguertin.ca` • `438-794-1044` • [https://rguertin.ca](https://rguertin.ca)

---

## 💻 Tech Stack & Architecture

- **Core**: React 19, JavaScript (ES Modules), Vite 8
- **Routing**: React Router 7. French (default) at the root, English under `/en`:
  `/`, `/about`, `/legal/:docId` ↔ `/en`, `/en/about`, `/en/legal/:docId` (`*` = 404)
- **Styling**: TailwindCSS v4, Vanilla CSS custom token system
- **Motion**: Framer Motion & custom CSS scroll reveals with `prefers-reduced-motion` compliance
- **Internationalization (i18n)**: language comes from the URL (no localStorage), so each language has its own indexable URL. The EN | FR switch is a real link to the same page in the other language.
- **Static prerendering**: `npm run build` renders every route to static HTML (`scripts/prerender.mjs` + `src/entry-server.jsx`), so the page text is in the raw HTML for Google, Bing and AI crawlers that don't run JavaScript. The browser then hydrates it.
- **Technical SEO & AI Discoverability** (all generated from `src/seo/`):
  - `src/seo/site.js` — **single source of truth** for business name, address, phone, email, hours, areas served (NAP)
  - `src/seo/pages.js` — per-page, per-language `<title>`, meta description and sitemap `lastmod`
  - Canonical URLs on `https://rguertin.ca`, reciprocal `hreflang` (`fr-CA`, `en-CA`, `x-default`)
  - Schema.org JSON-LD (`ProfessionalService`, `Person`, `WebSite`, `WebPage`/`AboutPage`) on home + about
  - `sitemap.xml` generated at build time with hreflang alternates; `robots.txt` allows search + AI crawlers
  - Real 404 status for unknown URLs (`dist/404.html`, `noindex`)
  - Lean web font loading (`Inter` + `Newsreader`) with preconnected resource hints

> When a page's content changes, bump **only that page's** `lastmod` in `src/seo/pages.js`.

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Starts the local development server at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Generates optimized, minified production assets in the `dist/` directory.

### Code Quality & Linting

```bash
npm run lint
```

Runs Oxlint across all codebase files.

---

## 🌐 Deployment Configuration

The repository is configured for zero-configuration hosting on **Vercel** via `vercel.json`:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Static output**: one HTML file per route (`cleanUrls`, no trailing slash). No SPA catch-all rewrite, so unknown URLs return a real 404.
- **301 redirects** from every URL of the old WordPress site (7 FR + 6 EN pages, 0 posts — verified via the WP REST API on 2026-10-06) plus old sitemap/category URLs.
- **www → apex** is configured **only in Vercel → Domains** (not in `vercel.json`), so there is a single source of truth and no redirect loop.
- **Preview/staging hosts** (`*.vercel.app` only) send `X-Robots-Tag: noindex`. The rule matches the host header, so it never applies to `rguertin.ca`.

---

## 🔒 Security & Privacy

- **Zero Client Credential Exposure**: No API secrets or private tokens are packaged into the frontend.
- **Data Protection**: The contact consultation form does not store sensitive claim files, documents, or personal claim histories.
- **Privacy Compliance**: Full policies for Law 25 (Québec) and PIPEDA implemented under `/legal/privacy`, `/legal/cookies`, and `/legal/complaints`.

---

## 📋 Domain Switch Runbook (rguertin.ca → Vercel)

Current DNS (checked 2026-10-06): nameservers `ns1–4.supercp.com`, `A @ → 106.0.62.71` (WordPress), `www → rguertin.ca`, **email MX → Hornetsecurity**.

**Before the switch**
1. Back up the WordPress site (the old URL list is already mapped in `vercel.json` → `redirects`).
2. At the current DNS host, lower the TTL of the `@` and `www` records to 300 s a day ahead.
3. In Vercel → Project → Settings → Domains: add `rguertin.ca` and `www.rguertin.ca`. Set **`rguertin.ca` as the one that serves the site** and set `www.rguertin.ca` to **Redirect to `rguertin.ca`** (301/308). Never set the opposite direction (apex → www): canonicals, hreflang and the sitemap all use `https://rguertin.ca`. Vercel shows the exact DNS records to create.

**The switch** (at the current DNS host — do **not** change the nameservers)
4. Replace `A @ 106.0.62.71` with the A record Vercel shows (usually `76.76.21.21`).
5. Set `www` to the CNAME Vercel shows (usually `cname.vercel-dns.com`).
6. ⚠️ Leave **all MX and TXT records untouched** (Hornetsecurity email, SPF/DKIM). Don't cancel the old hosting plan until you've confirmed where the mailboxes live.

**After the switch**
7. Run these checks:
   ```bash
   curl -sI https://rguertin.ca/ | grep -i -E '^HTTP|x-robots-tag'     # 200, and NO x-robots-tag line
   curl -sI https://rguertin.ca/en | grep -i -E '^HTTP|x-robots-tag'   # 200, and NO x-robots-tag line
   curl -sIL https://www.rguertin.ca/ | grep -i -E '^HTTP|^location'  # one redirect to https://rguertin.ca/, then 200 (no loop)
   curl -sIL http://rguertin.ca/ | grep -i -E '^HTTP|^location'       # http -> https, then 200
   curl -sIL https://rguertin.ca/notre-equipe/ | grep -i -E '^HTTP|^location'  # ends on /about with 200
   curl -s https://rguertin.ca/robots.txt | grep Sitemap              # https://rguertin.ca/sitemap.xml
   ```
   ⚠️ If `x-robots-tag: noindex` ever appears on `rguertin.ca`, fix it immediately: it silently removes the site from Google.
8. Google Search Console: submit `https://rguertin.ca/sitemap.xml`, request indexing of `/` and `/en`.
9. Bing Webmaster Tools: import from Search Console, submit the same sitemap.
10. Send a test email to `reclamations@rguertin.ca` to confirm email still works.

**Still open**
- Confirm with Isabelle: public email, street address, hours, exact ChAD credential wording (not on the site yet), testimonial consent.
- Testimonials: the 3 cards currently share the same text (placeholder).

### Contact Form Environment Variables (Vercel)
The contact form uses a Vercel Serverless Function (`api/contact.js`) with the **Resend** transactional email service. To enable it, you must add the following environment variables in your Vercel Project Settings (Settings -> Environment Variables):
- `RESEND_API_KEY`: Your Resend API key (required).
- `RESEND_FROM_EMAIL`: The verified sender address (e.g. `noreply@rguertin.ca`). If not set, it defaults to `onboarding@resend.dev` (which only allows sending to the email registered with your Resend account).
