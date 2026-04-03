import RevealOnScroll from './RevealOnScroll'

const secs = [
  { icon: '🔒', t: 'SOC 2 Type II',         d: 'Audited annually. Full compliance report available on request.' },
  { icon: '🛡️', t: 'NDPR / POPIA',          d: 'Africa data protection. Nigeria, South Africa, Kenya compliant.' },
  { icon: '🔐', t: 'End-to-end encryption', d: 'AES-256 at rest, TLS 1.3 in transit. Zero-trust architecture.' },
  { icon: '👁️', t: 'PII Redaction',         d: 'Auto-detect and mask sensitive data before it hits the model.' },
]

export default function Security() {
  return (
    <section style={{ padding: '88px 0', borderTop: '1px solid rgba(26,26,40,0.4)', borderBottom: '1px solid rgba(26,26,40,0.4)' }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag">Security &amp; Compliance</p>
          <h2 className="section-title">Enterprise-grade. Africa-compliant.</h2>
        </RevealOnScroll>

        <div className="sec-grid">
          {secs.map((s, i) => (
            <RevealOnScroll key={i} delay={i * 50}>
              <div className="sec-card">
                <div style={{ fontSize: '26px', marginBottom: '12px' }}>{s.icon}</div>
                <h4 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--white)', marginBottom: '5px' }}>{s.t}</h4>
                <p style={{ fontSize: '11.5px', color: 'var(--tx3)', lineHeight: 1.5 }}>{s.d}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
