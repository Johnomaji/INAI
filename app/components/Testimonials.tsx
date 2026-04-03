import RevealOnScroll from './RevealOnScroll'

const tests = [
  { quote: 'Deployed a support agent across 3 WhatsApp lines in one afternoon. Deflecting 58% of tickets now. Absurd ROI.', name: 'Adebayo K.', role: 'VP Ops, Fintech · Lagos',      color: 'var(--ac)',     initial: 'A' },
  { quote: 'We evaluated 6 platforms. INAI was the only one with local GPU inference and NDPR compliance out of the box.', name: 'Amara N.',    role: 'CTO, Insuretech · Nairobi',  color: 'var(--blue)',   initial: 'A' },
  { quote: 'The managed build team delivered a custom collections agent in 3 weeks. Would have taken us 5 months internally.', name: 'Kwame A.', role: 'Head of Digital, Bank · Accra', color: 'var(--purple)', initial: 'K' },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '88px 0', borderTop: '1px solid rgba(26,26,40,0.4)' }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag">What people say</p>
          <h2 className="section-title">Loved by operators</h2>
        </RevealOnScroll>

        <div className="test-grid">
          {tests.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 70}>
              <div className="test-card">
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
                    width: '34px', height: '34px', borderRadius: '50%',
                    background: `${t.color}20`, color: t.color,
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
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
