# Guertin Claims Advisory | R. Guertin & Associés

Official website for **Isabelle Guertin**, Independent Claims Adjuster (*Expert en règlement de sinistres indépendant*) serving the Greater Montréal region and the Province of Québec.

---

## 🏛 Practice Overview

- **Firm**: R. Guertin & Associés / Guertin Claims Advisory
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
- **Routing**: React Router 7 (`/`, `/about`, `/legal/:docId`, `*` for 404)
- **Styling**: TailwindCSS v4, Vanilla CSS custom token system
- **Motion**: Framer Motion & custom CSS scroll reveals with `prefers-reduced-motion` compliance
- **Internationalization (i18n)**: Bilingual English / French system with dynamic `document.documentElement.lang` synchronization and localStorage persistence
- **Technical SEO & AI Discoverability**:
  - Canonical URL declaration: `https://rguertin.ca`
  - Bilingual `hreflang` tags (`fr`, `en`, `x-default`)
  - Full Open Graph and Twitter Card tags
  - Schema.org JSON-LD graph (`ProfessionalService`, `Person`, `OfferCatalog`)
  - Automated `robots.txt` and canonical `sitemap.xml`
  - Lean web font loading (`Inter` + `Newsreader`) with preconnected resource hints

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
- **SPA Rewrites**: Single-page application route rewrites configured to `/index.html` while preserving static assets (`/robots.txt`, `/sitemap.xml`, `/favicon.svg`, images).

---

## 🔒 Security & Privacy

- **Zero Client Credential Exposure**: No API secrets or private tokens are packaged into the frontend.
- **Data Protection**: The contact consultation form does not store sensitive claim files, documents, or personal claim histories.
- **Privacy Compliance**: Full policies for Law 25 (Québec) and PIPEDA implemented under `/legal/privacy`, `/legal/cookies`, and `/legal/complaints`.

---

## 📋 Client Launch Checklist

Before public launch on the final domain:
1. **Domain DNS**: Point `rguertin.ca` and `www.rguertin.ca` to the hosting provider (e.g. Vercel CNAME/A records).
2. **Google Search Console**: Verify property ownership for `https://rguertin.ca/` and submit sitemap at `https://rguertin.ca/sitemap.xml`.
3. **Form Backend**: If automated email forwarding from the web form is desired, connect an authorized serverless function or transactional service (e.g., Resend, Formspree) using the client's official address `reclamations@rguertin.ca`.
