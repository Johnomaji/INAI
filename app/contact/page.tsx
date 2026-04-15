'use client'
import { useState } from 'react'
import Link from 'next/link'
import RevealOnScroll from '../components/RevealOnScroll'

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

type FormState = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: 'general', message: '' })
  const [status, setStatus] = useState<FormState>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate async submit — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <main className="contact-page">
      {/* Page header */}
      <section className="contact-hero">
        <div className="contact-hero-grid" aria-hidden="true" />
        <div className="wrap contact-hero-inner">
          <RevealOnScroll>
            <p className="mono section-tag">Contact</p>
            <h1 className="contact-hero-title">Let&apos;s build something.</h1>
            <p className="contact-hero-sub">
              Whether you&apos;re launching your first agent or scaling an enterprise deployment — we&apos;d love to hear from you.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="contact-body">
        <div className="contact-layout">

          {/* Left: info */}
          <div className="contact-info">
            <RevealOnScroll>
              <div className="contact-info-block">
                <h2 className="contact-info-title">Get in touch</h2>
                <p className="contact-info-desc">
                  Our team is based in Lagos and available during WAT business hours. We typically respond within one business day.
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-detail-row">
                  <div className="contact-detail-icon"><MailIcon /></div>
                  <div>
                    <p className="contact-detail-label">Email</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <a href="mailto:mariam@getinai.org" className="contact-detail-value">mariam@getinai.org</a>
                      <a href="mailto:mercy@getinai.org" className="contact-detail-value">mercy@getinai.org</a>
                    </div>
                  </div>
                </div>
                <div className="contact-detail-row">
                  <div className="contact-detail-icon"><MapPinIcon /></div>
                  <div>
                    <p className="contact-detail-label">Location</p>
                    <p className="contact-detail-value">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="contact-social-section">
                <p className="contact-detail-label" style={{ marginBottom: '12px' }}>Follow us</p>
                <div className="contact-socials">
                  <a href="#" className="contact-social" aria-label="Twitter">
                    <TwitterIcon />
                  </a>
                  <a href="#" className="contact-social" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                  <a href="#" className="contact-social" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                </div>
              </div>

              <div className="contact-quicklinks">
                <p className="contact-detail-label" style={{ marginBottom: '12px' }}>Quick links</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'View pricing', href: '/#pricing' },
                    { label: 'Read the docs', href: '/#docs' },
                    { label: 'Meet the team', href: '/team' },
                  ].map(({ label, href }) => (
                    <Link key={label} href={href} className="contact-quicklink">
                      {label}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right: form */}
          <div className="contact-form-wrap">
            <div className="contact-form-card">
              <div className="contact-form-glow" />

              {status === 'sent' ? (
                <div className="contact-success">
                  <div className="contact-success-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--ac)" strokeWidth="2.2" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--white)', marginBottom: '8px' }}>
                    Message sent!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--tx2)', lineHeight: 1.7, marginBottom: '24px' }}>
                    Thanks for reaching out. We&apos;ll get back to you within one business day.
                  </p>
                  <button
                    className="btn-secondary"
                    style={{ fontSize: '13px', padding: '9px 20px', cursor: 'pointer' }}
                    onClick={() => { setStatus('idle'); setForm({ name: '', email: '', company: '', type: 'general', message: '' }) }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="name">Full name</label>
                      <input
                        id="name" name="name" type="text"
                        className="contact-input" placeholder="Ada Lovelace"
                        value={form.name} onChange={handleChange} required
                        autoComplete="name"
                      />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label" htmlFor="email">Work email</label>
                      <input
                        id="email" name="email" type="email"
                        className="contact-input" placeholder="ada@company.com"
                        value={form.email} onChange={handleChange} required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label" htmlFor="company">Company <span style={{ color: 'var(--tx3)', fontWeight: 400 }}>(optional)</span></label>
                    <input
                      id="company" name="company" type="text"
                      className="contact-input" placeholder="Acme Corp"
                      value={form.company} onChange={handleChange}
                      autoComplete="organization"
                    />
                  </div>

                  <div className="contact-field">
                    <label className="contact-label" htmlFor="type">I&apos;m interested in</label>
                    <select id="type" name="type" className="contact-input contact-select" value={form.type} onChange={handleChange}>
                      <option value="general">General inquiry</option>
                      <option value="demo">Requesting a demo</option>
                      <option value="enterprise">Enterprise / custom build</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press / media</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label" htmlFor="message">Message</label>
                    <textarea
                      id="message" name="message"
                      className="contact-input contact-textarea"
                      placeholder="Tell us about your project, team size, and what you're trying to build..."
                      value={form.message} onChange={handleChange} required
                      rows={5}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary contact-submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? (
                      <span className="contact-spinner" />
                    ) : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page { padding-top: 56px; }

        /* ── Hero ── */
        .contact-hero {
          position: relative;
          padding: 88px 0 64px;
          text-align: center;
          border-bottom: 1px solid rgba(26,26,40,0.4);
          overflow: hidden;
        }
        .contact-hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(26,26,40,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,26,40,0.3) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 75%);
        }
        .contact-hero-inner { position: relative; z-index: 1; }
        .contact-hero-title {
          font-size: clamp(36px, 6vw, 60px);
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin: 8px 0 14px;
        }
        .contact-hero-sub {
          font-size: clamp(15px, 2vw, 17px);
          color: var(--tx2);
          line-height: 1.7;
          max-width: 460px;
          margin: 0 auto;
        }

        /* ── Body layout ── */
        .contact-body { padding: 72px 0 96px; }
        .contact-layout {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 48px;
          align-items: start;
        }

        /* ── Info column ── */
        .contact-info-block { margin-bottom: 32px; }
        .contact-info-title {
          font-size: 20px; font-weight: 700;
          color: var(--white); letter-spacing: -0.02em;
          margin-bottom: 10px;
        }
        .contact-info-desc {
          font-size: 13.5px; color: var(--tx2); line-height: 1.7;
        }
        .contact-details {
          display: flex; flex-direction: column; gap: 16px;
          margin-bottom: 28px;
        }
        .contact-detail-row {
          display: flex; align-items: flex-start; gap: 12px;
        }
        .contact-detail-icon {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(118,185,0,0.08);
          border: 1px solid rgba(118,185,0,0.15);
          display: flex; align-items: center; justify-content: center;
          color: var(--ac); flex-shrink: 0; margin-top: 2px;
        }
        .contact-detail-label {
          font-size: 10.5px; font-weight: 700;
          color: var(--tx3); letter-spacing: 0.08em;
          text-transform: uppercase; margin-bottom: 2px;
        }
        .contact-detail-value {
          font-size: 13.5px; font-weight: 500; color: var(--tx);
          text-decoration: none; transition: color 0.2s;
        }
        a.contact-detail-value:hover { color: var(--ac); }
        .contact-social-section { margin-bottom: 28px; }
        .contact-socials { display: flex; gap: 8px; }
        .contact-social {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: var(--card); border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--tx3); text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .contact-social:hover {
          color: var(--tx); border-color: var(--border-lt);
          background: rgba(255,255,255,0.05);
        }
        .contact-quicklinks { border-top: 1px solid var(--border); padding-top: 20px; }
        .contact-quicklink {
          display: flex; align-items: center; justify-content: space-between;
          font-size: 13px; font-weight: 500; color: var(--tx2);
          text-decoration: none; padding: 6px 0;
          transition: color 0.2s;
        }
        .contact-quicklink:hover { color: var(--ac); }

        /* ── Form card ── */
        .contact-form-wrap { position: relative; }
        .contact-form-card {
          position: relative;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 36px 32px;
          overflow: hidden;
        }
        .contact-form-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at top left, rgba(118,185,0,0.04) 0%, transparent 50%);
          pointer-events: none;
        }
        .contact-form {
          position: relative; z-index: 1;
          display: flex; flex-direction: column; gap: 18px;
        }
        .contact-form-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
        }
        .contact-field { display: flex; flex-direction: column; gap: 6px; }
        .contact-label {
          font-size: 12px; font-weight: 600;
          color: var(--tx2); letter-spacing: 0.01em;
        }
        .contact-input {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 13.5px;
          color: var(--tx);
          font-family: var(--font-jakarta), sans-serif;
          transition: border-color 0.2s, background 0.2s;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          -webkit-appearance: none;
        }
        .contact-input::placeholder { color: var(--tx3); }
        .contact-input:focus {
          border-color: rgba(118,185,0,0.4);
          background: rgba(118,185,0,0.03);
        }
        .contact-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
        }
        .contact-textarea {
          resize: vertical;
          min-height: 110px;
          line-height: 1.6;
        }
        .contact-submit {
          width: 100%;
          padding: 12px;
          font-size: 14px;
          border-radius: 10px;
          cursor: pointer;
          border: none;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          min-height: 44px;
        }
        .contact-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .contact-spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(0,0,0,0.2);
          border-top-color: #000;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Success state */
        .contact-success {
          position: relative; z-index: 1;
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          padding: 40px 0;
        }
        .contact-success-icon {
          width: 60px; height: 60px;
          border-radius: 50%;
          background: rgba(118,185,0,0.1);
          border: 1px solid rgba(118,185,0,0.25);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }

        /* ── Responsive ── */
        @media (max-width: 820px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 0 20px;
          }
          .contact-hero { padding: 64px 0 48px; }
          .contact-body { padding: 48px 0 72px; }
        }
        @media (max-width: 520px) {
          .contact-form-row { grid-template-columns: 1fr; }
          .contact-form-card { padding: 24px 20px; }
        }
      `}</style>
    </main>
  )
}
