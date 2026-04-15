import RevealOnScroll from './RevealOnScroll'

const tests = [
  { quote: 'Deployed a support agent across 3 WhatsApp lines in one afternoon. Deflecting 58% of tickets now. Absurd ROI.', name: 'Adebayo K.', role: 'VP Ops, Fintech · Lagos',         color: 'var(--ac)',     initial: 'A' },
  { quote: 'We evaluated 6 platforms. INAI was the only one with local GPU inference and NDPR compliance out of the box.', name: 'Amara N.',    role: 'CTO, Insuretech · Nairobi',     color: 'var(--blue)',   initial: 'A' },
  { quote: 'The managed build team delivered a custom collections agent in 3 weeks. Would have taken us 5 months internally.', name: 'Kwame A.', role: 'Head of Digital, Bank · Accra', color: 'var(--purple)', initial: 'K' },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '88px 0', borderTop: '1px solid rgba(26,26,40,0.4)' }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag">What people say</p>
          <h2 className="section-title">Loved by operators</h2>
          <p className="section-sub">Real results from real teams across Africa and beyond.</p>
        </RevealOnScroll>
      </div>

      {/* Carousel outer — breaks out of .wrap on mobile */}
      <div className="test-carousel-outer">
        <div className="test-carousel-track">
          {tests.map((t, i) => (
            <div key={i} className="test-card">
              {/* Corner gradient */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '80px', height: '80px',
                background: `radial-gradient(ellipse at top right, ${t.color}10 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{ color: 'var(--amber)', fontSize: '13px', letterSpacing: '2px', marginBottom: '14px' }}>★★★★★</div>

              <p style={{ fontSize: '13.5px', color: 'var(--tx)', lineHeight: 1.65, fontStyle: 'italic', marginBottom: '20px', flex: 1 }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: `${t.color}20`, color: t.color,
                  border: `1px solid ${t.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', fontWeight: 700, flexShrink: 0,
                }}>
                  {t.initial}
                </div>
                <div>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--white)' }}>{t.name}</div>
                  <div style={{ fontSize: '10.5px', color: 'var(--tx3)', marginTop: '1px' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Desktop: 3-column grid ── */
        .test-carousel-outer {
          max-width: 1100px;
          margin: 36px auto 0;
          padding: 0 40px;
        }
        .test-carousel-track {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .test-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 26px 22px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.22s, transform 0.22s;
        }
        .test-card:hover { border-color: var(--border-lt); transform: translateY(-3px); }

        /* ── Mobile: single-card snap carousel ── */
        @media (max-width: 768px) {
          .test-carousel-outer {
            padding: 0;
            margin-top: 36px;
            overflow: hidden;
          }
          .test-carousel-track {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            gap: 12px;
            padding: 4px 20px 20px;
          }
          .test-carousel-track::-webkit-scrollbar { display: none; }
          .test-card {
            flex: 0 0 calc(100% - 80px);
            scroll-snap-align: start;
            /* disable hover lift inside carousel */
            transform: none !important;
          }
        }

        @media (max-width: 640px) {
          .test-carousel-outer { padding: 0; }
        }
      `}</style>
    </section>
  )
}
