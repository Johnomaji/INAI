import RevealOnScroll from './RevealOnScroll'

const backers = [
  { abbr: 'NV',   name: 'NVIDIA Inception',      bg: 'rgba(118,185,0,0.12)',    color: 'var(--ac)'     },
  { abbr: 'YC',   name: 'Y Combinator S26',      bg: 'rgba(245,158,11,0.12)',   color: 'var(--amber)'  },
  { abbr: 'a16z', name: 'Andreessen Horowitz',   bg: 'rgba(14,165,233,0.12)',   color: 'var(--blue)'   },
  { abbr: 'SV',   name: 'SV Angel',              bg: 'rgba(129,140,248,0.12)',  color: 'var(--purple)' },
]

export default function BackedBy() {
  return (
    <section style={{
      padding: '64px 0',
      borderTop: '1px solid rgba(26,26,40,0.4)',
      textAlign: 'center',
    }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag" style={{ marginBottom: '28px' }}>Backed by</p>
          <div style={{
            display: 'flex', justifyContent: 'center',
            gap: '48px', alignItems: 'center', flexWrap: 'wrap',
          }}>
            {backers.map((b) => (
              <div key={b.name} style={{
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '8px',
              }}>
                <div style={{
                  width: '52px', height: '52px', borderRadius: '12px',
                  background: b.bg, color: b.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: b.abbr.length > 2 ? '13px' : '16px',
                  fontWeight: 800, letterSpacing: '-0.03em',
                }}>
                  {b.abbr}
                </div>
                <span style={{ fontSize: '11px', color: 'var(--tx3)', fontWeight: 500 }}>{b.name}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
