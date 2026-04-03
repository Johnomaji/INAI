export default function Nav() {
  return (
    <>
      <nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '22px', height: '22px', borderRadius: '6px',
            background: 'var(--ac)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 12px rgba(118,185,0,0.4)',
          }}>
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M3 4h10M3 8h7M3 12h9" stroke="#000" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: '14px', color: 'var(--white)', letterSpacing: '-0.02em' }}>
            INAI
          </span>
        </div>

        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {['Platform', 'Docs', 'Pricing'].map((link) => (
            <span key={link} className="nav-link">{link}</span>
          ))}
          <button className="btn-primary" style={{ padding: '7px 16px', fontSize: '12.5px', borderRadius: '7px' }}>
            Get started
          </button>
        </div>
      </nav>

      <style>{`
        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 56px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 40px;
          background: rgba(8,8,12,0.85);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(26,26,40,0.5);
        }
        @media (max-width: 600px) { nav { padding: 0 20px; } }
      `}</style>
    </>
  )
}
