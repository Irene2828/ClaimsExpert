import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Spam protection: honeypot check
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    // Client-side submission debounce / spam mitigation: reject submissions within 5 seconds of previous
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      return;
    }

    setIsSubmitting(true);
    setLastSubmitTime(now);

    const endpoint = import.meta.env.VITE_CONTACT_API_URL;
    if (endpoint) {
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          submittedAt: new Date().toISOString()
        })
      })
        .then(() => {
          setIsSubmitting(false);
          setSubmitted(true);
        })
        .catch(() => {
          setIsSubmitting(false);
          setSubmitted(true);
        });
    } else {
      // Clean simulation / preparation without storing sensitive insurance data
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 300);
    }
  };

  return (
    <section id="contact" className="bg-[#0E223F] relative overflow-hidden border-t border-white/[0.08]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[160px] -right-[140px] w-[560px] h-[560px] rounded-full bg-[#93C5FD]/[0.14] blur-[42px]" />
        <div className="absolute -bottom-[200px] -left-[160px] w-[700px] h-[700px] rounded-full bg-white/[0.04] blur-[1px]" />
        <div className="absolute top-[12%] left-[38%] w-[280px] h-[280px] rounded-full border border-white/[0.07]" />
        <div className="absolute top-[12%] left-[38%] w-[280px] h-[280px] rounded-full bg-white/[0.02]" style={{ transform: "translate(18px, 14px)" }} />
        <div className="absolute top-0 bottom-0 left-[58%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent rotate-[20deg] origin-top hidden lg:block" />
        <div className="absolute top-[-40px] right-[30%] w-[180px] h-[180px] rounded-full bg-[#BFDBFE]/[0.06] blur-[24px] hidden lg:block" />
      </div>
      <div className="max-w-[1336px] mx-auto px-8 lg:px-12 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          <div className="flex flex-col items-start">
            <span className="font-inter inline-flex items-center px-3.5 py-1 rounded-full bg-[#F5F6F8] text-[#0E223F] border border-transparent text-[10.5px] tracking-[0.18em] uppercase font-medium">
              {t('contact.eyebrow')}
            </span>
            <h2 className="font-inter italic font-light tracking-[-0.03em] leading-[1.05] text-white text-[32px] lg:text-[42px] mt-6 max-w-[16ch] text-left">
              {t('contact.headline')}
            </h2>
            <p className="font-inter text-[15px] lg:text-[16px] leading-[1.7] text-white/70 mt-6 max-w-[50ch]">
              {t('contact.body1')}
              <span className="font-normal text-white">{t('contact.body2')}</span>
            </p>
            <div className="mt-12 space-y-5">
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-inter text-[11px] tracking-[0.16em] uppercase text-white/50">{t('contact.phoneTitle')}</p>
                  <p className="font-inter text-[14px] text-white mt-1">438 794-1044</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
                    <path d="M4 4h16v16H4z" />
                    <path d="M4 7l8 5 8-5" />
                  </svg>
                </div>
                <div>
                  <p className="font-inter text-[11px] tracking-[0.16em] uppercase text-white/50">{t('contact.emailTitle')}</p>
                  <p className="font-inter text-[14px] text-white mt-1">reclamations@rguertin.ca</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <p className="font-inter text-[11px] tracking-[0.16em] uppercase text-white/50">{t('contact.territoryTitle')}</p>
                  <p className="font-inter text-[14px] text-white mt-1">{t('contact.territoryDetails')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-[12px] border border-white/15 rounded-[24px] p-6 lg:p-8">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E223F" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12l4 4L19 6" />
                  </svg>
                </div>
                <p className="font-newsreader text-[22px] text-white mt-6">
                  {t('contact.form.thankYou')}
                </p>
                <p className="font-inter text-[13px] text-white/60 mt-2 max-w-[40ch] mx-auto">
                  {t('contact.form.demoText')}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="font-inter mt-8 text-[13px] text-white/80 underline underline-offset-4 hover:text-white transition-colors"
                >
                  {t('contact.form.sendAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot anti-spam protection (hidden from humans) */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <label htmlFor="contact-bot-field">Website</label>
                  <input
                    type="text"
                    id="contact-bot-field"
                    name="bot_field"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="font-inter text-[11px] tracking-[0.16em] uppercase text-white/60 block">
                      {t('contact.form.nameLabel')}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder={t('contact.form.namePlaceholder')}
                      className="mt-2 w-full h-[44px] rounded-xl bg-white/10 border border-white/20 px-4 font-inter text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/[0.12] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="font-inter text-[11px] tracking-[0.16em] uppercase text-white/60 block">
                      {t('contact.form.emailLabel')}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      type="email"
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="mt-2 w-full h-[44px] rounded-xl bg-white/10 border border-white/20 px-4 font-inter text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/[0.12] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="font-inter text-[11px] tracking-[0.16em] uppercase text-white/60 block">
                    {t('contact.form.messageLabel')}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder={t('contact.form.messagePlaceholder')}
                    rows={4}
                    className="mt-2 w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 font-inter text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/[0.12] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[48px] rounded-full bg-white text-[#0E223F] font-inter text-[14px] font-medium tracking-wide hover:bg-white/90 transition-colors mt-2 disabled:opacity-70"
                >
                  {isSubmitting ? '...' : t('contact.form.submitBtn')}
                </button>
                <p className="font-inter text-center text-[12px] text-white/50 mt-3">
                  {t('contact.form.footerNote')}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
