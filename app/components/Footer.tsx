export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(26,26,40,0.5)',
      padding: '32px 40px 40px',
    }}>
      <style>{`
        @media (max-width: 640px) {
          .footer-inner { flex-direction: column; align-items: flex-start !important; gap: 20px !important; }
          .footer-links { flex-wrap: wrap; gap: 16px !important; }
        }
      `}</style>
      <div className="footer-inner" style={{
        maxWidth: '1100px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: '14px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <div style={{
            width: '18px', height: '18px', borderRadius: '5px',
            background: 'var(--ac)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="9" height="9" viewBox="0 0 16 16" fill="none">
              <path d="M3 4h10M3 8h7M3 12h9" stroke="#000" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontWeight: 600, fontSize: '12.5px', color: 'var(--tx2)' }}>INAI</span>
        </div>

        <div className="footer-links" style={{ display: 'flex', gap: '22px', alignItems: 'center' }}>
          {['GitHub', 'Twitter', 'LinkedIn', 'Status'].map((link) => (
            <a key={link} href="#" className="footer-link">{link}</a>
          ))}
        </div>

        <span className="mono" style={{ fontSize: '10px', color: 'var(--tx3)' }}>
          © 2026 INAI Cloud · Lagos, Nigeria
        </span>
      </div>
    </footer>
  )
}
