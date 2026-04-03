import RevealOnScroll from './RevealOnScroll'

const GreenCheck = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const prices = [
  {
    name: 'Free',       price: '$0',    sub: 'forever',
    items: ['1 agent', '1K conversations/mo', '2 channels', 'Community support'],
    cta: 'Start free', accent: false,
  },
  {
    name: 'Pro',        price: '$499',  sub: '/mo',
    items: ['10 agents', '50K conversations/mo', 'All channels + GPU', 'Priority support + SLA'],
    cta: 'Start trial', accent: true,
  },
  {
    name: 'Enterprise', price: 'Custom', sub: '',
    items: ['Unlimited agents', 'Managed build team', 'Dedicated GPU, SSO, SLA', 'On-prem / VPC deployment'],
    cta: 'Talk to sales', accent: false,
  },
]

export default function Pricing() {
  return (
    <section style={{ padding: '88px 0', borderTop: '1px solid rgba(26,26,40,0.4)' }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag">Pricing</p>
          <h2 className="section-title">Start free. Scale when ready.</h2>
        </RevealOnScroll>

        <div className="pricing-grid">
          {prices.map((p, i) => (
            <RevealOnScroll key={i} delay={i * 70}>
              <div className={`pricing-card${p.accent ? ' accent' : ''}`}>
                {p.accent && (
                  <>
                    <div style={{
                      position: 'absolute', top: '-1px', left: '20px', right: '20px', height: '2px',
                      background: 'linear-gradient(90deg, transparent, var(--ac), transparent)',
                    }} />
                    <div style={{
                      position: 'absolute', top: '12px', right: '14px',
                      fontSize: '9px', fontWeight: 700, color: 'var(--ac)',
                      background: 'rgba(118,185,0,0.12)',
                      padding: '2px 8px', borderRadius: '100px', letterSpacing: '0.06em',
                    }}>
                      POPULAR
                    </div>
                  </>
                )}

                <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)', marginBottom: '2px' }}>{p.name}</h3>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', margin: '12px 0 20px' }}>
                  <span style={{ fontSize: p.price === 'Custom' ? '28px' : '36px', fontWeight: 800, color: 'var(--white)', letterSpacing: '-0.04em' }}>
                    {p.price}
                  </span>
                  {p.sub && <span style={{ fontSize: '13px', color: 'var(--tx3)' }}>{p.sub}</span>}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', flex: 1, marginBottom: '20px' }}>
                  {p.items.map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <GreenCheck />
                      <span style={{ fontSize: '12.5px', color: 'var(--tx2)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <button className={p.accent ? 'pricing-btn-primary' : 'pricing-btn-secondary'}>
                  {p.cta}
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
