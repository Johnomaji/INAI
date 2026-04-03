import RevealOnScroll from './RevealOnScroll'

const GreenCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const Cross = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--tx3)" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

type Cell = string | React.ReactNode

const rows: [string, Cell, Cell, Cell][] = [
  ['Time to production',     'Days',           '6–12 months',  'Weeks'   ],
  ['GPU inference',          <GreenCheck key="g1"/>,  <Cross key="c1"/>,  'Varies'  ],
  ['Africa-local compute',   <GreenCheck key="g2"/>,  'Maybe',       <Cross key="c2"/> ],
  ['Multi-model routing',    <GreenCheck key="g3"/>,  'Custom build','Limited' ],
  ['WhatsApp native',        <GreenCheck key="g4"/>,  'Custom build', <GreenCheck key="g5"/>],
  ['Managed build option',   <GreenCheck key="g6"/>,  <Cross key="c3"/>,  <Cross key="c4"/> ],
  ['SOC 2 + NDPR compliant', <GreenCheck key="g7"/>,  'Your effort', 'Varies' ],
  ['Cost',                   'Predictable',   '$$$',          'Per-seat'],
]

export default function Compare() {
  return (
    <section style={{
      padding: '88px 0',
      borderTop: '1px solid rgba(26,26,40,0.4)',
    }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag">Why INAI</p>
          <h2 className="section-title">Skip 6 months of build time</h2>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <div className="compare-table">
            {/* Header */}
            <div className="compare-header">
              <div style={{ padding: '14px 18px', fontSize: '12px', fontWeight: 600, color: 'var(--tx3)' }} />
              <div style={{
                padding: '14px 18px', fontSize: '12px', fontWeight: 700, color: 'var(--ac)',
                position: 'relative',
              }}>
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: 'var(--ac)',
                }} />
                INAI
              </div>
              <div style={{ padding: '14px 18px', fontSize: '12px', fontWeight: 600, color: 'var(--tx2)' }}>In-house</div>
              <div style={{ padding: '14px 18px', fontSize: '12px', fontWeight: 600, color: 'var(--tx2)' }}>Other platforms</div>
            </div>

            {/* Rows */}
            {rows.map(([feature, inai, inhouse, others], i) => (
              <div key={i} className="compare-row">
                <div style={{
                  padding: '13px 18px', fontSize: '12.5px',
                  color: 'var(--tx)', fontWeight: 500,
                  display: 'flex', alignItems: 'center',
                }}>
                  {feature}
                </div>
                <div style={{
                  padding: '13px 18px', fontSize: '12.5px',
                  color: 'var(--tx2)', display: 'flex', alignItems: 'center',
                  background: 'rgba(118,185,0,0.03)',
                }}>
                  {inai}
                </div>
                <div style={{ padding: '13px 18px', fontSize: '12.5px', color: 'var(--tx2)', display: 'flex', alignItems: 'center' }}>
                  {inhouse}
                </div>
                <div style={{ padding: '13px 18px', fontSize: '12.5px', color: 'var(--tx2)', display: 'flex', alignItems: 'center' }}>
                  {others}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
