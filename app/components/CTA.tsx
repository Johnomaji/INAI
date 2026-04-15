'use client'
import { useState } from 'react'
import RevealOnScroll from './RevealOnScroll'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section id="cta" style={{ padding: '20px 0 88px' }}>
      <div className="wrap">
        <RevealOnScroll>
          <div style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '18px',
            padding: '64px 40px',
            textAlign: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Background glow */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at top, rgba(118,185,0,0.04), transparent 60%)',
              pointerEvents: 'none',
            }} />

            {/* Subtle grid */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage:
                'linear-gradient(rgba(118,185,0,0.02) 1px, transparent 1px),' +
                'linear-gradient(90deg, rgba(118,185,0,0.02) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative' }}>
              {/* Green top accent */}
              <div style={{
                display: 'inline-block',
                fontSize: '11px', fontWeight: 600, color: 'var(--ac)',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                marginBottom: '16px',
              }}>
                ✦ Get Early Access
              </div>

              <h2 style={{
                fontSize: 'clamp(26px, 3.5vw, 44px)',
                fontWeight: 800, letterSpacing: '-0.04em',
                color: 'var(--white)', marginBottom: '12px',
              }}>
                Deploy your first agent today
              </h2>

              <p style={{
                fontSize: '15px', color: 'var(--tx2)',
                maxWidth: '360px', margin: '0 auto 32px',
                lineHeight: 1.6,
              }}>
                Free tier. No credit card. GPU-accelerated from day one.
              </p>

              {!submitted ? (
                <div className="cta-form" style={{
                  display: 'flex', gap: '8px',
                  justifyContent: 'center', maxWidth: '380px',
                  margin: '0 auto',
                }}>
                  <input
                    type="email"
                    className="cta-input"
                    placeholder="work@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  />
                  <button
                    className="btn-primary"
                    style={{ flexShrink: 0 }}
                    onClick={handleSubmit}
                  >
                    Get access
                  </button>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontSize: '15px', color: 'var(--green)', fontWeight: 600 }}>
                    We&apos;ll be in touch.
                  </span>
                </div>
              )}

              {!submitted && (
                <p style={{ fontSize: '11px', color: 'var(--tx3)', marginTop: '14px' }}>
                  No spam. Unsubscribe any time.
                </p>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .cta-form { flex-direction: column; align-items: stretch; }
          .cta-form .btn-primary { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  )
}
