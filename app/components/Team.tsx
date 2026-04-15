import RevealOnScroll from './RevealOnScroll'

const members = [
  {
    name: 'Mariam Oresi',
    role: 'Founder & DevOps Engineer',
    bio: 'Founded INAI to build the AI infrastructure layer Africa deserves. Keeps the entire platform running at scale.',
    color: 'var(--ac)',
    initial: 'MO',
  },
  {
    name: 'Mery Ugwu',
    role: 'AI/ML Engineer',
    bio: 'Designs and trains the models powering INAI agents. Obsessed with low-latency inference on African infrastructure.',
    color: 'var(--blue)',
    initial: 'MU',
  },
  {
    name: 'Francis Igwe',
    role: 'Snr Product Engineer',
    bio: 'Builds the developer-facing APIs and Studio product. Turns complex AI systems into tools people actually love.',
    color: 'var(--purple)',
    initial: 'FI',
  },
  {
    name: 'Odibe Wellington',
    role: 'Head of Customer Ops',
    bio: 'Owns onboarding and success for every customer. Makes sure every deployment ships on time and hits its goals.',
    color: 'var(--green)',
    initial: 'OW',
  },
]

const LinkedInIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Team() {
  return (
    <section style={{ padding: '88px 0', borderTop: '1px solid rgba(26,26,40,0.4)' }}>
      <div className="wrap">
        <RevealOnScroll>
          <p className="mono section-tag">Team</p>
          <h2 className="section-title">Built by operators.</h2>
          <p className="section-sub">We&apos;ve shipped AI products in production across Africa. We&apos;re building the platform we wished existed.</p>
        </RevealOnScroll>
      </div>

      <div className="team-outer">
        <div className="team-track">
          {members.map((m, i) => (
            <div key={i} className="team-card">
              {/* Corner glow */}
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at top left, ${m.color}09 0%, transparent 60%)`,
                pointerEvents: 'none',
              }} />
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: '24px', right: '24px', height: '1px',
                background: `linear-gradient(90deg, transparent, ${m.color}50, transparent)`,
              }} />

              {/* Avatar */}
              <div className="team-avatar" style={{
                background: `${m.color}14`,
                border: `1px solid ${m.color}30`,
                color: m.color,
                boxShadow: `0 0 32px ${m.color}18`,
              }}>
                {m.initial}
              </div>

              {/* Name + role */}
              <div>
                <h3 style={{
                  fontSize: '20px', fontWeight: 700,
                  color: 'var(--white)', letterSpacing: '-0.02em',
                  marginBottom: '5px',
                }}>
                  {m.name}
                </h3>
                <p style={{
                  fontSize: '11px', fontWeight: 600,
                  color: m.color, letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {m.role}
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'var(--border)' }} />

              {/* Bio */}
              <p style={{ fontSize: '14px', color: 'var(--tx2)', lineHeight: 1.7, flex: 1 }}>
                {m.bio}
              </p>

              {/* LinkedIn */}
              <a href="#" className="team-linkedin">
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── Desktop: 4-col grid ── */
        .team-outer {
          max-width: 1100px;
          margin: 40px auto 0;
          padding: 0 40px;
        }
        .team-track {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .team-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 32px 28px 26px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 18px;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .team-card:hover {
          border-color: var(--border-lt);
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.3);
        }
        .team-avatar {
          width: 72px; height: 72px;
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; font-weight: 800;
          letter-spacing: -0.02em;
          flex-shrink: 0;
        }
        .team-linkedin {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600;
          color: var(--tx3); text-decoration: none;
          transition: color 0.2s;
        }
        .team-linkedin:hover { color: var(--tx); }

        /* ── Tablet: 2-col grid ── */
        @media (max-width: 960px) {
          .team-track { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── Mobile: center-snap carousel with bilateral bleed ── */
        @media (max-width: 768px) {
          .team-outer {
            /* Break out of .wrap's 20px padding to fill full viewport */
            max-width: none;
            margin: 36px -20px 0;
            padding: 0;
            overflow: hidden;
          }
          .team-track {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            gap: 16px;
            /* No padding — center snap handles positioning */
            padding: 4px 0 24px;
          }
          .team-track::-webkit-scrollbar { display: none; }
          .team-card {
            /* Narrower than viewport → left+right cards bleed in equally */
            flex: 0 0 calc(100% - 96px);
            scroll-snap-align: center;
            border-radius: 20px;
            padding: 36px 28px 28px;
            min-height: 340px;
          }
          /* First card: push right so it starts centered */
          .team-card:first-child { margin-left: 48px; }
          /* Last card: add right margin so it fully snaps into center */
          .team-card:last-child  { margin-right: 48px; }
        }
      `}</style>
    </section>
  )
}
