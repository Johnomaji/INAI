const companies = [
  'Flutterwave', 'MTN', 'Access Bank', 'Jumia', 'Safaricom',
  'Interswitch', 'Paystack', 'Andela', 'Sterling Bank', 'Kuda',
  'Carbon', 'Piggyvest',
]

const sep = (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0, opacity: 0.3 }}>
    <path d="M5 0L6.12 3.38L9.76 3.38L6.82 5.47L7.94 8.85L5 6.76L2.06 8.85L3.18 5.47L0.24 3.38L3.88 3.38L5 0Z" fill="var(--ac)" />
  </svg>
)

export default function LogoCloud() {
  const doubled = [...companies, ...companies]

  return (
    <div style={{
      borderTop: '1px solid rgba(26,26,40,0.5)',
      borderBottom: '1px solid rgba(26,26,40,0.5)',
      padding: '32px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: 0, width: '100px',
        background: 'linear-gradient(90deg, var(--bg), transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, bottom: 0, right: 0, width: '100px',
        background: 'linear-gradient(-90deg, var(--bg), transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      <div style={{
        textAlign: 'center', fontSize: '10.5px', color: 'var(--tx3)',
        fontWeight: 500, letterSpacing: '0.1em', marginBottom: '20px',
        textTransform: 'uppercase',
      }}>
        Trusted by teams across Africa &amp; beyond
      </div>

      <div style={{ overflow: 'hidden' }}>
        <div
          className="logo-track"
          style={{
            display: 'flex', gap: '36px', alignItems: 'center',
            animation: 'scroll-logos 28s linear infinite',
            width: 'max-content',
          }}
        >
          {doubled.map((name, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '36px', flexShrink: 0 }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--tx3)', opacity: 0.55, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                {name}
              </span>
              {sep}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
