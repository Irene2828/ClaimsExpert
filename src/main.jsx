import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { normalizePath } from './seo/routing'

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Pages are prerendered to static HTML at build time (scripts/prerender.mjs).
// Hydrate only when the static HTML was rendered for this exact URL; otherwise
// (dev server, or the shared 404.html served for an unknown URL) render fresh.
const prerenderedFor = container.dataset.prerendered
if (prerenderedFor && prerenderedFor === normalizePath(window.location.pathname)) {
  hydrateRoot(container, app)
} else {
  container.textContent = ''
  createRoot(container).render(app)
}
